import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function RespModalAdd() {
    const [show, setShow] = useState(false);
    const [data , setData] = useState({username: "" , email: "" , password: ""});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(data)
        try{
            const res = await  axios.post(' http://45.132.240.106/admin/user/register' , data);
            console.log(res.data)
            window.location.reload();
        }catch(err){
            console.log(err.response.data.msg)
        }
    }
    return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Ajouter
    </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{background:"#27293D" , color: "white"}}>
            <Modal.Title style={{background:"#27293D" , color: "white"}}>Ajouter un nouveau responsable</Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{background:"#27293D" , color: "white"}}>
            <form>
                <label>username</label><br/>
                <input name='username' type='text' onChange={e=>{setData({...data , username : e.target.value})}}/><br/>
                <label>email</label><br/>
                <input name='email' type='text' onChange={e=>{setData({...data , email : e.target.value})}}/><br/>
                <label>password</label><br/>
                <input name='password' type='text' onChange={e=>{setData({...data , password : e.target.value})}}/><br/>
            </form>
            
        </Modal.Body>
        <Modal.Footer style={{background:"#27293D" , color: "white"}}>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
            Ajouter
            </Button>
        </Modal.Footer>
    </Modal>
    </>
);
}

export default RespModalAdd;