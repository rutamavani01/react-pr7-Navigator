import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Style.css';

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const getRecord = () => {
        let all = JSON.parse(localStorage.getItem('crud'));
        if (all === null) {
            return [];
        } else {
            return all;
        }
    }
    const [record, setRecord] = useState(getRecord);
    const [input, setInput] = useState({
        name: '',
        desc: '',
        email: ''
    })
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput({
            ...input, [name]: value
        })
    }
    const handleSubmit = () => {
        let name = input.name;
        let email = input.email;
        let desc = input.desc;
        let ans = record.map((item) => {
            if (item.id === parseInt(id)) {
                return {
                    ...item,
                    name: name,
                    desc: desc,
                    email: email
                }
            }
            return item
        })
        setRecord(ans);
        localStorage.setItem('crud', JSON.stringify(ans));
        alert("Record successfully update");
        navigate('/View')
        setInput({
            name: '',
            desc: '',
            email: ''
        })
    }
    useEffect(() => {
        let ans = record.filter((item) => {
            return item.id === id;
        })
        if (ans.length > 0) {
            setInput(ans[0]);
        }
    }, [])

    return (
            <center>
                <h1>Edit Data</h1>
                <table  width={"25%"} className="shadow-lg p-3 mb-5 bg-body rounded p-4 my-5 bg-secondary text-dark">
                    <tbody>
                        <tr>
                            <th>Name :- </th>
                            <td><input type="text" placeholder="Enter your name" name="name" onChange={handleChange} value={input.name} /></td>
                        </tr>
                        <tr>
                            <th>Email :- </th>
                            <td><input type="text" placeholder="Enter your email" name="email" onChange={handleChange} value={input.email} /></td>
                        </tr>
                        <tr>
                            <th>desc :- </th>
                            <td><input type="text" placeholder="Enter your description" name="desc" onChange={handleChange} value={input.desc} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input type="button" className="btn btn-success" onClick={() => handleSubmit()} value="Edit" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </center>
    )
}

export default Edit;