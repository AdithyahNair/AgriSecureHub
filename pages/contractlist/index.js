import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Card } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

class ContractList extends Component {
  static async getInitialProps() {
    const contracts = await factory.methods.getDeployedContracts().call();
    return { contracts };
  }

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
      <div>
        <Layout>
          <h3>Contract List</h3>
          {this.renderCardGroup()}
        </Layout>
      </div>
    );
  }
}

export default ContractList;
