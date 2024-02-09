import React, { Component } from "react";
import TransferForm from "../../components/TransferForm";
import Layout from "../../components/Layout";
import { Link } from "../../routes";
import { Button, Icon } from "semantic-ui-react";
class Transfer extends Component {
  static async getInitialProps(props) {
    const entity = props.query.entity;
    const isCompany = props.query.isCompany;
    const address = props.query.address;
    return { entity, isCompany, address };
  }

  render() {
    return (
      <Layout>
        <Link
          route={`/contractlist/${this.props.entity}/${this.props.isCompany}/${this.props.address}`}
        >
          <Button icon basic>
            <Icon name="angle left" />
          </Button>
        </Link>
        <h2>Transfer Form</h2>
        <TransferForm
          entity={this.props.entity}
          isCompany={this.props.isCompany}
          address={this.props.address}
        />
      </Layout>
    );
  }
}

export default Transfer;
