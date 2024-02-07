import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Card, Button } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import { Router, Link } from "../../routes";

class ContractList extends Component {
  static async getInitialProps(props) {
    const contracts = await factory.methods
      .getUserContracts(props.query.entity)
      .call();
    const isCompany = props.query.isCompany;
    const entity = props.query.entity;
    return { isCompany, entity, contracts };
  }

  onSubmit = async (event) => {
    event.preventDefault();
    Router.pushRoute(
      `/contractlist/${this.props.entity}/${this.props.isCompany}/new`
    );
  };

  renderCardGroup() {
    const items = this.props.contracts.map((address) => {
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
