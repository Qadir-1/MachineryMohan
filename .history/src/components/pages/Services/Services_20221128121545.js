import React, { useCallback, useEffect, useState } from "react";
import { Button, Modal, Form, Container, FloatingLabel } from "react-bootstrap";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiOutlineEdit, AiOutlineEye, AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Services = () => {
    const navigate = useNavigate();
    const [modalShow, setModalShow] = React.useState(false);
    const [edit, setEdit] = useState(false);

  
    function MyVerticallyCenteredModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {edit ? "Edit Product" : "Add Product"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container style={{ width: "600px" }}>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
  
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control type="number" min={1} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="number" min={1} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Location</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Description"
                  className="mb-3"
                >
                  <Form.Control as="textarea" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Features"
                  className="mb-3"
                >
                  <Form.Control as="textarea" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="About Company"
                  className="mb-3"
                >
                  <Form.Control as="textarea" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Additional Info"
                  className="mb-3"
                >
                  <Form.Control as="textarea" />
                </FloatingLabel>
  
                <Button
                  variant="outline-success"
                  onClick={() => setModalShow(false)}
                >
                  Submit
                </Button>
              </Form>
            </Container>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      );
    }
  

  
    return (
      <>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <section>
          <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
            <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Services
            </span>
            <Button
              variant="outline-success"
              onClick={() => {
                setEdit(false);
                setModalShow(true);
              }}
            >
              Add Service
            </Button>
          </div>
        </section>
  
        <Table
          striped
          bordered
          hover
          style={{
            marginTop: "2%",
            scrollBehavior: "smooth",
            overflow: "scroll",
          }}
        >
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Sub-Category</th>
              <th>Condition</th>
              <th>Price</th>
              <th>Location</th>
              <th>About Company</th>
              <th>Features</th>
              <th>Contact Details</th>
              <th>Output Paper Width </th>
              <th>Brand </th>
              <th>Speed </th>
              <th>Capacity </th>
              <th>Model No. </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => (
              <tr key={index}>
                <td>
                  {i.machinePictures === null ? (
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGD6ZjF1tWOz93cQVpEVJFn0zHF2-1f_4-8w&usqp=CAU"
                      alt=""
                      className="fast-food"
                    />
                  ) : (
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGD6ZjF1tWOz93cQVpEVJFn0zHF2-1f_4-8w&usqp=CAU"
                      alt=""
                      className="fast-food"
                    />
                  )}
                </td>
                <td> {i.Machine_name} </td>
                <td> {i.category} </td>
                <td> {i.subcategory} </td>
                <td> {i.Condition} </td>
                <td> {i.Price} </td>
                <td> {i.Location} </td>
                <td> {i.About_company} </td>
                <td> {i.Features} </td>
                <td> {i.Conatct_number} </td>
                <td> {i.Description?.Output_paper_width} </td>
                <td> {i.Description?.Brand} </td>
                <td> {i.Description?.Speed} </td>
                <td> {i.Description?.Capacity} </td>
                <td> {i.Description?.Model_name_number} </td>
                <td style={{ display: "flex", gap: "10px" }}>
                  <AiOutlineEdit color="black" cursor="pointer" />
                  <AiOutlineEye
                    color="blue"
                    cursor="pointer"
                    onClick={() => navigate(`/machine/${i._id}`)}
                  />
                  <AiFillDelete color="red" cursor="pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  };
  
  

export default HOC(Services)