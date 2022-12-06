/** @format */

import React, { useCallback, useEffect, useState } from "react";
import { Button, Modal, Form, Container, FloatingLabel } from "react-bootstrap";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiOutlineEdit, AiOutlineEye, AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Machine = () => {
    const navigate = useNavigate();
    const [modalShow, setModalShow] = React.useState(false);
    const [edit, setEdit] = useState(false);
    const [data , setData] = useState([])
  
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
  
    // Get All Products
    const getAllProduct = useCallback(async () => {
      try {
        const { data } = await axios.get(
          "https://setupbazaar.herokuapp.com/product/get/product"
        );
        setData(data);
      } catch (err) {
        console.log(err);
      }
    }, []);
  
    useEffect(() => {
      getAllProduct();
    }, [getAllProduct]);
  
    return (
      <>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <section>
          <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
            <span className="tracking-widest text-slate-900 font-semibold uppercase ">
              Machines
            </span>
            <Button
              variant="outline-success"
              onClick={() => {
                setEdit(false);
                setModalShow(true);
              }}
            >
              Add Machines
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
              <th>Aub-Category</th>
              <th>Condition</th>
              <th>Description</th>
              <th>Features</th>
              <th>About Company</th>
              <th>Additional Info</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </Table>
      </>
    );
  };
  
export default HOC(Machine)