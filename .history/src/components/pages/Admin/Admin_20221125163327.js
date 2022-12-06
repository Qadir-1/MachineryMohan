/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";
import { useCallback } from "react";

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
          Edit User Role
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Select aria-label="Default select example">
            <option>Select User Role</option>
            <option value="1">User</option>
            <option value="2">Admin</option>
          </Form.Select>
          <br />
          <Button variant="outline-success">Submit</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

const Admin = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);

  const token = localStorage.getItem("token");

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://setupbazaar.herokuapp.com/adminroute/get/Admin",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Admin
          </span>
          <Button variant="outline-success" onClick={() => setModalShow(true)}>
            Add Admin
          </Button>
        </div>
      </section>
      <Table
        striped
        bordered
        hover
        style={{
          marginTop: "5%",
          scrollBehavior: "smooth",
          overflow: "scroll",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th> Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i, index) => (
            <tr key={index}>
              <td>{i.name}</td>
              <td>{i.email}</td>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <AiFillDelete color="red" cursor="pointer" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Admin);