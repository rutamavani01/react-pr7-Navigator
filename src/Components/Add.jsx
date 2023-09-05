import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import './Style.css';
const Add = () => {
    const navigate = useNavigate();
    const [input,setInput] = useState({
        name : '',
        desc : '',
        email: ''
    })
    const [alldata,setAlldata] = useState([]);
    const handleChange = (e) => {
       let name= e.target.name;
       let value = e.target.value;
        setInput({
                ...input,[name] : value
        })
    }
    const handleSubmit = () => {
        let obj = {
            id : Math.floor(Math.random() *10000),
            name :input.name,
            desc : input.desc,
            email: input.email
        }
          let data = [...alldata,obj];
          localStorage.setItem('crud',JSON.stringify(data));
          setAlldata(data);
          setInput({
                name : '',
                desc : '',
                email: ''
          })
          navigate('/View')
    }
    useEffect(()=>{
        let re = JSON.parse(localStorage.getItem('crud'));
        if(re === null){
            setAlldata([]);
        }else{
            setAlldata(re);
        }
    },[]);

    return (
           <div>
             <center>
                <h1>Add Data</h1>
                <table width={"25%"} className="shadow-lg p-3 mb-5 bg-body rounded p-4 my-5 bg-secondary text-dark">
                        <div>
                        <tbody> 
                            <tr>
                                <th>Name :- </th>
                                <td><input type="text" placeholder="Enter your name" name="name" onChange={handleChange} value={input.name}/></td>
                            </tr>
                            <tr>
                                <th>Email :- </th>
                                <td><input type="text" placeholder="Enter your email" name="email" onChange={handleChange} value={input.email}/></td>
                            </tr>
                            <tr>
                                <th>Desc :- </th>
                                <td><input type="text" placeholder="Enter your description" name="desc" onChange={handleChange} value={input.desc}/></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="button" className="btn btn-info " onClick={ () => handleSubmit() } value="submit"/>
                                </td>
                            </tr>
                        </tbody>
                        </div>
                </table>
            </center>
           </div>
    )
}
export default Add;