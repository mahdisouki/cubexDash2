import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import {
  Form,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
function OfferModalEd(props) {
  const [show, setShow] = useState(false);
  const { offer } = props;
  const [offre, setOffre] = useState({
    poste_id: offer.poste_id,
    poste: offer.poste,
    description: offer.description,
    compétences: offer.compétences,
    experience: offer.experience,
    img: offer.img,
    pays: offer.pays,
    Ville: offer.Ville,
    region: offer.region,
    nbCandidat: offer.nbCandidat,
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = async (e, id) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        ` http://45.132.240.106/admin/api/offer/${id}`,
        offre
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setOffre({ ...offre, img: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <Button onClick={handleShow} style={{ background: "#f09030" }}>
        update{" "}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          style={{ background: "#27293D", color: "white", width: "50rem" }}
        >
          <Modal.Title
            style={{ background: "#27293D", color: "white", width: "50rem" }}
          >
            {offer.username} {offer._id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ background: "#27293D", color: "white", width: "50rem" }}
        >
          <div className="content">
            <Row>
              <Col md="12">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">ajouter une nouvelle offre</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form onSubmit={(e)=>handleSubmit(e , offer._id)}>
                      <Row>
                        <Col sm={4}>
                          <FormGroup>
                            <Label for="exampleEmail">poste_id</Label>
                            <Input
                              id="exampleEmail"
                              name="poste_id"
                              placeholder="with a placeholder"
                              type="text"
                              value={offre.poste_id}
                              onChange={(e) =>
                                setOffre({ ...offre, poste_id: e.target.value })
                              }
                            />
                          </FormGroup>

                          <FormGroup>
                            <Label for="exampleEmail">poste</Label>
                            <Input
                              id="exampleEmail"
                              name="poste"
                              placeholder="with a placeholder"
                              type="text"
                              value={offre.poste}
                              onChange={(e) =>
                                setOffre({ ...offre, poste: e.target.value })
                              }
                            />
                          </FormGroup>

                          <FormGroup>
                            <Label for="exampleEmail">description</Label>
                            <Input
                              id="exampleEmail"
                              name="description"
                              placeholder="with a placeholder"
                              type="textarea"
                              value={offre.description}
                              onChange={(e) =>
                                setOffre({
                                  ...offre,
                                  description: e.target.value,
                                })
                              }
                            />
                          </FormGroup>
                        </Col>

                        <Col sm={4}>
                          <FormGroup>
                            <Label for="exampleEmail">compétences</Label>
                            <Input
                              id="exampleEmail"
                              name="compétences"
                              placeholder="with a placeholder"
                              type="text"
                              value={offre.compétences}
                              onChange={(e) =>
                                setOffre({
                                  ...offre,
                                  compétences: e.target.value,
                                })
                              }
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="exampleEmail">experience</Label>
                            <Input
                              id="exampleEmail"
                              name="experience"
                              placeholder="with a placeholder"
                              type="text"
                              value={offre.experience}
                              onChange={(e) =>
                                setOffre({
                                  ...offre,
                                  experience: e.target.value,
                                })
                              }
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="exampleFile">img</Label>

                            <Input
                              id="exampleFile"
                              name="img"
                              type="file"
                              style={{ opacity: "100" }}
                              onChange={handleImageChange}
                            />
                          </FormGroup>
                        </Col>

                        <Col sm={4}>
                          <FormGroup>
                            <Label for="exampleEmail">pays</Label>
                            <Input
                              id="exampleEmail"
                              name="pays"
                              placeholder="with a placeholder"
                              type="text"
                              value={offre.pays}
                              onChange={(e) =>
                                setOffre({ ...offre, pays: e.target.value })
                              }
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="exampleEmail">Ville</Label>
                            <Input
                              id="exampleEmail"
                              name="Ville"
                              placeholder="with a placeholder"
                              type="text"
                              value={offre.Ville}
                              onChange={(e) =>
                                setOffre({ ...offre, Ville: e.target.value })
                              }
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="exampleEmail">region</Label>
                            <Input
                              id="exampleEmail"
                              name="region"
                              placeholder="with a placeholder"
                              type="text"
                              value={offre.region}
                              onChange={(e) =>
                                setOffre({ ...offre, region: e.target.value })
                              }
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="exampleEmail">nbCandidat</Label>
                            <Input
                              id="exampleEmail"
                              name="nbCandidat"
                              placeholder="with a placeholder"
                              type="number"
                              value={offre.nbCandidat}
                              onChange={(e) =>
                                setOffre({
                                  ...offre,
                                  nbCandidat: e.target.value,
                                })
                              }
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" type="submit">
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OfferModalEd;
