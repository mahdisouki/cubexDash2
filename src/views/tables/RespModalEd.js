import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
function RespModalEd(props) {
    const [show, setShow] = useState(false);
    const [data , setData] = useState({username: props.resp.username , email:  props.resp.email , password:  ""});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = async (id) =>{
        console.log(id)
        console.log(data)
        try{
            const res = await axios.put(` http://45.132.240.106/admin/user/updateUser/${id}` , data);
            console.log(res.data);
            window.location.reload();
        }catch(err){
            console.log(err)
        }
        
    }
    return (
    <>
    <button style={{background: "none" , border : 0,  borderRadius: "15px" , color:"orange" }} onClick={handleShow}>
    <i className="tim-icons icon-cloud-upload-94" />
    </button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{background:"#27293D" , color: "white"}}>
            <Modal.Title style={{background:"#27293D" , color: "white"}}>mise à jour responsable with id {props.resp._id}</Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{background:"#27293D" , color: "white"}}>
            <form>
                <label>username</label><br/>
                <input value={data.username} name='username' type='text' onChange={e=>{setData({...data , username : e.target.value})}}/><br/>
                <label>email</label><br/>
                <input value={data.email}  name='email' type='text' onChange={e=>{setData({...data , email : e.target.value})}}/><br/>
                <label>password</label><br/>
                <input value={data.password}  name='password' type='text' onChange={e=>{setData({...data , password : e.target.value})}}/><br/>
            </form>
            
        </Modal.Body>
        <Modal.Footer style={{background:"#27293D" , color: "white"}}>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={()=>{handleSubmit(props.resp._id)}}>
            mise a jour 
            </Button>
        </Modal.Footer>
    </Modal>
    </>
);
}

export default RespModalEd;