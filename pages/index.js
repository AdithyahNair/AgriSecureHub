import React, { Component, useState } from "react";
import Layout from "../components/Layout";
import RegisterAndVerifyForm from "../components/RegisterAndVerifyForm";

class RegisterAndVerify extends Component {
  render() {
    return (
      <Layout>
        <p style={{ color: "black", fontSize: "20px", marginTop: "40px" }}>
          Please input your Ethereum address and choose your Entity Type from
          the dropdown menu provided. <br />
          <br />
          For first-time users, kindly click "Create." If you are accessing the
          application for the second time, please enter your details and click
          "Verify." <br />
          <br />
          <span style={{ color: "red", fontSize: "15px" }}>
            Once these values are configured, they are immutable and cannot be
            altered under any circumstances.
          </span>
        </p>
        <RegisterAndVerifyForm />
      </Layout>
    );
  }
}

export default RegisterAndVerify;
