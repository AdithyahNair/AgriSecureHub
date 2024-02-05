import React, { Component } from "react";
import Layout from "../../components/Layout";
import CreateContractForm from "../../components/CreateContractForm";
import { Link } from "../../routes";
import { Button, Icon } from "semantic-ui-react";

class CreateContract extends Component {
  static async getInitialProps(props) {
    const entity = props.query.entity;
    const isCompany = props.query.isCompany;
    return { entity, isCompany };
  }
  render() {
    return (
      <Layout>
        <Link
          route={`/contractlist/${this.props.entity}/${this.props.isCompany}`}
        >
          <Button icon basic>
            <Icon name="angle left" />
          </Button>
        </Link>
        <h2 style={{ marginBottom: "30px" }}>Create Contract</h2>
        <CreateContractForm
          entity={this.props.entity}
          isCompany={this.props.isCompany}
        />
      </Layout>
    );
  }
}

export default CreateContract;
