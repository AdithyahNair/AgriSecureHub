import React, { Component } from "react";
import Layout from "../../components/Layout";
import CreateContractForm from "../../components/CreateContractForm";

class CreateContract extends Component {
  render() {
    return (
      <Layout>
        <h3 style={{ marginBottom: "30px" }}>Create Contract</h3>
        <CreateContractForm />
      </Layout>
    );
  }
}

export default CreateContract;
