import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Card, Button } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import { Router, Link } from "../../routes";
import Contract from "../../ethereum/contract";
import web3 from "../../ethereum/web3";

class ContractList extends Component {
  static async getInitialProps(props) {
    const contracts = await factory.methods.getDeployedContracts().call();
    const isCompany = props.query.isCompany;
    const entity = props.query.entity;
    var users = [];
    for (var i = 0; i < contracts.length; i++) {
      const contract = Contract(contracts[i]);
      const summary = await contract.methods.getSummary().call();
      const values = [
        summary[0].toString(),
        summary[1].toString(),
        summary[2].toString(),
        summary[3].toString(),
        summary[4].toString(),
        summary[5].toString(),
      ];
      if (values.includes(entity)) {
        users.push(contracts[i]);
      }
    }
    return { isCompany, entity, users };
  }

  onSubmit = async (event) => {
    event.preventDefault();
    Router.pushRoute(
      `/contractlist/${this.props.entity}/${this.props.isCompany}/new`
    );
  };

  renderCardGroup() {
    const items = this.props.users.map((address) => {
      return {
        header: address,
        description: (
          <Link
            route={`/contractlist/${this.props.entity}/${this.props.isCompany}/${address}`}
          >
            <a>View Contract</a>
          </Link>
        ),
        fluid: true,
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
        <h2>Contract List</h2>
        {this.renderCardGroup()}
      </Layout>
    );
  }
}

export default ContractList;
