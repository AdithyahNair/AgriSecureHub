import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Card, Button } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import { Router } from "../../routes";

class ContractList extends Component {
  static async getInitialProps(props) {
    const contracts = await factory.methods.getDeployedContracts().call();
    const isCompany = props.query.isCompany;
    return { contracts, isCompany };
  }

  onSubmit = async (event) => {
    event.preventDefault();
    Router.replace("/contractlist/new");
  };

  renderCardGroup() {
    const items = this.props.contracts.map((address) => {
      return {
        header: address,
        description: <a>View Contract</a>,
        fluid: true,
        link: true,
      };
    });
    return <Card.Group items={items} />;
  }
  render() {
    return (
      <Layout>
        {this.props.isCompany === "true" ? (
          <Button
            onClick={this.onSubmit}
            content="Create Contract"
            primary
            icon="plus"
            floated="right"
          />
        ) : null}
        <h3>Contract List</h3>
        {this.renderCardGroup()}
      </Layout>
    );
  }
}

export default ContractList;
