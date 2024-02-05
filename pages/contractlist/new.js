import React, { Component } from "react";
import Layout from "../../components/Layout";
import CreateContractForm from "../../components/CreateContractForm";
import { Link } from "../../routes";

class CreateContract extends Component {
  render() {
    return (
      <Layout>
        <Link route="/contractlist/true">
          <a>Back</a>
        </Link>
        <h3 style={{ marginBottom: "30px" }}>Create Contract</h3>
        <CreateContractForm />
      </Layout>
    );
  }
}

export default CreateContract;
