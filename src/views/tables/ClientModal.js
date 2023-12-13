import { GlobalState } from 'GlobalState';
import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ClientModal(props) {
    const state = useContext(GlobalState);
    const user = state.respInfo;
    const [show, setShow] = useState(false);
    const {client} = props
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const getFileTypeFromBase64 = (base64String) => {
        const byteCharacters = atob(base64String);
        const byteNumbers = new Array(byteCharacters.length);

        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        // Get the first few bytes to identify the file type
        const signature = byteNumbers.slice(0, 4).join(',');

        // Check against known file signatures
        if (signature === '137,80,78,71') {
          return 'image/png';
        } else if (signature === '255,216,255,224') {
          return 'image/jpeg';
        } else if (signature === '71,73,70,56') {
          return 'image/gif';
        } else {
          return 'application/octet-stream'; // Default type if unable to determine
        }
    };
        const convertBase64ToBinary = (base64String) => {
        const byteCharacters = atob(base64String);
        const byteNumbers = new Array(byteCharacters.length);

        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        return new Uint8Array(byteNumbers);
    };
    const handleDownload = (filedata, filename) => {
        console.log(client);
        console.log(client.diplomeImg)
        console.log(filedata);
        const fileType = getFileTypeFromBase64(filedata[0].split(",")[1]); // Get file type
        const blob = new Blob([convertBase64ToBinary(filedata[0].split(",")[1])], { type: fileType }); // Create Blob
    
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', filename); // Set filename for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    useEffect(()=>{
        console.log("user from modal:",user);
    })
return (
    <>
    <button className='btn-icon btn-link like' onClick={handleShow}>
    <i className="tim-icons icon-zoom-split" />
    </button>

    <Modal   show={show} onHide={handleClose}>
        <Modal.Header style={{background:"#27293D" , color: "white"}}  >
        <Modal.Title style={{background:"#27293D" , color: "white"}} ><img src={client.profileImg} height={"75px"} width={"75px"} style={{margin: "5px"}}/>{client.username} </Modal.Title>
        </Modal.Header>
    <Modal.Body style={{background:"#27293D" , color: "white"}}  >
        <div className='row'>
            <div className='col-md-6' style={{padding: "10px"}}>
                <h4>Infromations personnelles</h4>
            <label style={{padding: "5px"}}>Username: </label>
            <b>{client.username}</b><br/>

            <label style={{padding: "5px"}}>CIN: </label>
            <b>{client.CIN}</b><br/>
            
            <label style={{padding: "5px"}}>Email: </label>
            <b>{client.email}</b>
        </div>


        <div  className='col-md-6'  style={{padding: "10px"}}>
            <h4>Infromations du dossier</h4>
            <label style={{padding: "5px"}}>Pays/Destination: </label>
            <b>{client.pays}</b><br/>
            
            <label style={{padding: "5px"}}>Duree du contrat: </label>
            <b>{client.dureeContrat} mois</b><br/>
            
            <label style={{padding: "5px"}}>status du dossier: </label>
            <b>{client.statusDossier}</b><br/>
            
            <label style={{padding: "5px"}}>type du contrat: </label>
            <b>{client.typeContrat}</b><br/>
        </div> 

       {user &&user.role===1 && (
        <div className='col-md-6' style={{padding: "10px"}}>
        <h4>Payment</h4>
        <label style={{padding: "5px"}}>Avance: </label>
        <b>{client.payment.avance}</b><br/>

        <label style={{padding: "5px"}}>status du payment: </label>
        <b>{client.payment.statusPayment}</b><br/>

        <label style={{padding: "5px"}}>total:
        </label>
        <b>{client.payment.totalpayee}</b>
    </div>
       )}
        

        <div className='col-md-6' style={{padding: "10px"}}>
            <h4>documents</h4>
            <div>
                diplomeImg
                <button onClick={()=>handleDownload(client.diplomeImg , "diplome.pdf")} style={{borderRadius: "10px" , backgroundColor: "orange" , margin:"5px" , border: 0 , position:"relative" , left:65}}>download</button>
            </div>
            <div>
                documentCnss
                <button onClick={()=>handleDownload(client.documentCnss , "documentCnss.pdf")} style={{borderRadius: "10px" , backgroundColor: "orange" , margin:"5px" , border: 0, position:"relative" , left:42}}>download</button>
            </div>
            <div>
                cv
                <button onClick={()=>handleDownload(client.cv , "cv.pdf")} style={{borderRadius: "10px" , backgroundColor: "orange" , margin:"5px" , border: 0, position:"relative" , left:132}}>download</button>
            </div>
            <div>
                passportImg
                <button onClick={()=>handleDownload(client.passportImg , "passportImg.pdf")} style={{borderRadius: "10px" , backgroundColor: "orange" , margin:"5px" , border: 0 , position:"relative" , left:60}}>download</button>
            </div>
            <div>
                cinImg
                <button onClick={()=>handleDownload(client.cinImg , "cinImg.pdf")} style={{borderRadius: "10px" , backgroundColor: "orange" , margin:"5px" , border: 0 , position:"relative" , left:100}}>download</button>
            </div>
        </div>
        </div>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
    </Modal.Body>
        

    </Modal>
    </>
);
}

export default ClientModal;