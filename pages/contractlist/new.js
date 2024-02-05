import React, { Component } from "react";
import Layout from "../../components/Layout";
import CreateContractForm from "../../components/CreateContractForm";
import { Link } from "../../routes";
import { Button, Icon } from "semantic-ui-react";

class CreateContract extends Component {
  render() {
    return (
      <Layout>
        <Link route="/contractlist/true">
          <Button icon basic>
            <Icon name="angle left" />
          </Button>
        </Link>
        <h3 style={{ marginBottom: "30px" }}>Create Contract</h3>
        <CreateContractForm />
      </Layout>
    );
  }
}

export default CreateContract;
