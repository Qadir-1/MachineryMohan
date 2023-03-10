/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";



const Customers = () => {
  const [ data , setData ] = useState([])

  const fetchData = async () => {
    try{
      const { data } = await axios.get("http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:2000/userroute/allUsers")
      setData(data)
    }catch(e){
      console.log(e)
    }
  } 

  useEffect(() => {
    fetchData()
  },[])



  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Users
          </span>
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
            <th>Image</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th> Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {data?.data?.map((i, index) => (
            <tr key={index}>
              <td>{i.full_name}</td>
              <td>{i.mobile}</td>
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

export default HOC(Customers);
