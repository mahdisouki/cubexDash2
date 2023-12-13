import { GlobalState } from "GlobalState";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ClientModalEd(props) {
  const [show, setShow] = useState(false);
  const { client } = props;
  const state = useContext(GlobalState);
  const user = state.respInfo;
  const [data, setData] = useState({
    username: client.username || "",
    profileImg: client.profileImg || "",
    email: client.email || "",
    password: client.password || "",
    CIN: client.CIN || "",
    cinImg: client.cinImg || "",
    passportImg: client.passportImg || "",
    diplomeImg: client.diplomeImg || "",
    documentCnss: client.documentCnss || "",
    cv: client.cv || "",
    domaine: client.domaine || "",
    responsable: client.responsable || "",
    statusDossier: client.statusDossier || "",
    typeContrat: client.typeContrat || "",
    dureeContrat: client.dureeContrat || "",
    payment: {
      avance: client.payment.avance || "",
      totalpayee: client.payment.totalpayee || "",
      statusPayment: client.payment.statusPayment || "",
    },
    rendezvous: {
      tls: client.rendezvous
        ? client.rendezvous.tls.split("T")[0]
        : "1999-10-25",
      ofii: client.rendezvous
        ? client.rendezvous.ofii.split("T")[0]
        : "1999-10-24",
    },
    pays: client.pays,
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = async (e, id) => {
    e.preventDefault();
   
   console.log(id);
    try {
      const res = await axios.put(
        ` http://45.132.240.106/admin/client/update/${id}`,
        data
      );
      console.log(res.data);
      alert('data is updated successfully!!!');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const updateRDV =async (e , id) =>{
    e.preventDefault();
    console.log({tls: data.rendezvous.tls , ofii : data.rendezvous.ofii})
    console.log(id)
    try {
        const res = await axios.put(` http://45.132.240.106/admin/client/updateRDV/${id}` , {tls: data.rendezvous.tls , ofii : data.rendezvous.ofii});
        console.log(res.data);
        alert("the notification is sent successfully")
        window.location.reload();
    } catch (error) {
        console.log(error)
    }
  }
  const updateDossierStat = async(e , id)=>{
    e.preventDefault();
    try {
        const res = await axios.put(` http://45.132.240.106/admin/client/updateStatusDosssier/${id}` , {statusDossier : data.statusDossier});
        console.log(res.data)
        alert('le status a été mis a jour!!!');
        window.location.reload();
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(()=>{
    console.log('userrrr',user)
  })
  return (
    <>
      <button className="btn-icon btn-link like" onClick={handleShow}>
        <i className="tim-icons icon-pencil" />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          style={{ background: "#27293D", color: "white", width: "50rem" }}
        >
          <Modal.Title
            style={{ background: "#27293D", color: "white", width: "50rem" }}
          >
            {client.username} {client._id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ background: "#27293D", color: "white", width: "50rem" }}
        >
          <form onSubmit={(e) => handleSubmit(e, client._id)}>
            <div className="row">
              <div
                className="col-md-6"
                style={{ padding: "15px", overflow: "hidden" }}
              >
                <h4>Infromations personnelles</h4>
                <label style={{ padding: "5px" }}>Username: </label>
                <br />
                <input
                  value={data.username}
                  name="username"
                  type="text"
                  onChange={(e) =>
                    setData({ ...data, username: e.target.value })
                  }
                />
                <br />

                <label style={{ padding: "5px" }}>profileImg: </label>
                <br />
                <input
                  name="username"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0]; // Access the file
                    const reader = new FileReader();
                
                    reader.onloadend = () => {
                      // reader.result contains the base64 representation of the image
                      const base64String = reader.result;
                      setData({ ...data, profileImg: base64String }); // Update state with the base64 string
                    };
                
                    if (file) {
                      reader.readAsDataURL(file); // Read the file as a data URL
                    }
                  }}
                />
                <br />

                <label style={{ padding: "5px" }}>CIN: </label>
                <br />
                <input
                  value={data.CIN}
                  name="CIN"
                  type="number"
                  onChange={(e) => setData({ ...data, CIN: e.target.value })}
                />
                <br />
                <label style={{ padding: "5px" }}>CIN img: </label>
                <br />
                <input
                  name="CINimg"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0]; // Access the file
                    const reader = new FileReader();
                
                    reader.onloadend = () => {
                      // reader.result contains the base64 representation of the image
                      const base64String = reader.result;
                      setData({ ...data, cinImg: base64String }); // Update state with the base64 string
                    };
                
                    if (file) {
                      reader.readAsDataURL(file); // Read the file as a data URL
                    }
                  }}
                />
                <br />

                <label style={{ padding: "5px" }}>Passport img: </label>
                <br />
                <input
                  name="CINimg"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0]; // Access the file
                    const reader = new FileReader();
                
                    reader.onloadend = () => {
                      // reader.result contains the base64 representation of the image
                      const base64String = reader.result;
                      setData({ ...data, passportImg: base64String }); // Update state with the base64 string
                    };
                
                    if (file) {
                      reader.readAsDataURL(file); // Read the file as a data URL
                    }
                  }}
                />
                <br />

                <label style={{ padding: "5px" }}>document cnss: </label>
                <br />
                <input
                  name="CINimg"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0]; // Access the file
                    const reader = new FileReader();
                
                    reader.onloadend = () => {
                      // reader.result contains the base64 representation of the image
                      const base64String = reader.result;
                      setData({ ...data, documentCnss: base64String }); // Update state with the base64 string
                    };
                
                    if (file) {
                      reader.readAsDataURL(file); // Read the file as a data URL
                    }
                  }}
                />
                <br />

                <label style={{ padding: "5px" }}>CV: </label>
                <br />
                <input
                  name="CINimg"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0]; // Access the file
                    const reader = new FileReader();
                
                    reader.onloadend = () => {
                      // reader.result contains the base64 representation of the image
                      const base64String = reader.result;
                      setData({ ...data, cv: base64String }); // Update state with the base64 string
                    };
                
                    if (file) {
                      reader.readAsDataURL(file); // Read the file as a data URL
                    }
                  }}
                />
                <br />

                <label style={{ padding: "5px" }}>diplome img: </label>
                <br />
                <input
                  name="CINimg"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0]; // Access the file
                    const reader = new FileReader();
                
                    reader.onloadend = () => {
                      // reader.result contains the base64 representation of the image
                      const base64String = reader.result;
                      setData({ ...data, diplomeImg: base64String }); // Update state with the base64 string
                    };
                
                    if (file) {
                      reader.readAsDataURL(file); // Read the file as a data URL
                    }
                  }}
                />
                <br />

                <label style={{ padding: "5px" }}>Email: </label>
                <br />
                <input
                  value={data.email}
                  name="Email"
                  type="email"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <br />

                <label style={{ padding: "5px" }}>Password: </label>
                <br />
                <input
                  value={data.password}
                  name="Email"
                  type="text"
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
                <br />
              </div>

              <div className="col-md-6" style={{ padding: "15px" }}>
                <h4>Infromations du dossier</h4>
                <label style={{ padding: "5px" }}>Pays/Destination: </label>
                <br />
                <input
                  value={data.pays}
                  name="Pays"
                  type="text"
                  onChange={(e) => setData({ ...data, pays: e.target.value })}
                />
                <br />

                <label style={{ padding: "5px" }}>Duree du contrat: </label>
                <br />
                <input
                  value={data.dureeContrat}
                  name="durrecontrat"
                  type="text"
                  onChange={(e) =>
                    setData({ ...data, dureeContrat: e.target.value })
                  }
                />
                <br />

               

                <label style={{ padding: "5px" }}>type du contrat: </label>
                <br />
                <input
                  value={data.typeContrat}
                  name="typeContrat"
                  type="text"
                  onChange={(e) =>
                    setData({ ...data, typeContrat: e.target.value })
                  }
                />
                <br />
                <label style={{ padding: "5px" }}>domaine: </label>
                <br />
                <input
                  value={data.domaine}
                  name="domaine"
                  type="text"
                  onChange={(e) =>
                    setData({ ...data, domaine: e.target.value })
                  }
                />
                <br />
                <br />
                <br />
             
                <br />
              </div>
              {user && user.role===1 && (
                <div className='col-md-4' style={{padding: "15px"}}>
            <h4>Payment</h4>
<label style={{padding: "5px"}}>Avance: </label><br/>
<input 
  name='avance' 
  type='number' 
  onChange={(e) => setData({...data, payment: {...data.payment, avance: e.target.value}})}
/><br/>

<label style={{padding: "5px"}}>Status du payment: </label><br/>      
<input 
  name='statusPayment' 
  type='text' 
  onChange={(e) => setData({...data, payment: {...data.payment, statusPayment: e.target.value}})}
/><br/>

<label style={{padding: "5px"}}>Total:</label><br/>
<input 
  name='totalpayee' 
  type='number' 
  onChange={(e) => setData({...data, payment: {...data.payment, totalpayee: e.target.value}})}
/><br/>
        </div>
              )}
              
            </div>
            <Button variant="primary" type="submit">
                Save Changes
              </Button>
              
            </form>
            <hr style={{backgroundColor: "wheat"}}/>
            <div className="row">
                <div className="col-sm-6">
                <form onSubmit={(e)=>updateRDV(e ,client._id)}>
            <h4>Rendez-Vous</h4>
                <label style={{ padding: "5px" }}>TLS: </label>
                <br />
                <input
                  value={data.rendezvous.tls}
                  name="tls"
                  type="date"
                  onChange={(e) =>
                    setData({
                      ...data,
                      rendezvous: { ...data.rendezvous, tls: e.target.value },
                    })
                  }
                />
                <br />

                <label style={{ padding: "5px" }}>OFII: </label>
                <br />
                <input
                  value={data.rendezvous.ofii}
                  name="ofii"
                  type="date"
                  onChange={(e) =>
                    setData({
                      ...data,
                      rendezvous: { ...data.rendezvous, ofii: e.target.value },
                    })
                  }
                /><br/><br/>
                <button type="submit"  style={{borderRadius: "10px" , backgroundColor: "greenyellow"}}>update Rdv and sent notif</button>
                </form>
                </div>
                {user && user.role===1 &&(
                  <div className="col-sm-6">
                <form onSubmit={(e)=>updateDossierStat(e , client._id)}>
                <h4 style={{ padding: "5px" }}>status du dossier: </h4>
                <br />
                <br />
                <br />
                
                <input
                  value={data.statusDossier}
                  name="statusdossier"
                  type="text"
                  onChange={(e) =>
                    setData({ ...data, statusDossier: e.target.value })
                  }
                />
                <br />
                <br />
                
                <br />  
                <button style={{borderRadius : "10px" , backgroundColor: "#d16002" , border: 0}} type="submit">update status and send notif</button>
                </form>
                </div>
                )}
                
              </div>
            
                
          
        </Modal.Body>
        <Modal.Footer style={{ background: "#27293D", color: "white", width: "50rem" }}>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
             
            </Modal.Footer>
      </Modal>
    </>
  );
}

export default ClientModalEd;
