import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Card, Button } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import { Router, Link } from "../../routes";
import Contract from "../../ethereum/contract";

class ContractList extends Component {
  static async getInitialProps(props) {
    const contracts = await factory.methods
      .getUserContracts(props.query.entity)
      .call();
    const isCompany = props.query.isCompany;
    const entity = props.query.entity;
    return { isCompany, entity, contracts };
  }

  state = {
    items: [],
  };

  onSubmit = async (event) => {
    event.preventDefault();
    Router.pushRoute(
      `/contractlist/${this.props.entity}/${this.props.isCompany}/new`
    );
  };

  async componentDidMount() {
    const items = await Promise.all(
      this.props.contracts.map(async (address) => {
        const contract = Contract(address);
        const timestamp = await contract.methods.timeStamp().call();
        var date = new Date(parseInt(timestamp) * 1000);
        var month = date.getMonth() + 1;
        return {
          header: address,
          description: (
            <Link
              route={`/contractlist/${this.props.entity}/${this.props.isCompany}/${address}`}
            >
              <a>View Contract</a>
            </Link>
          ),
          meta:
            "Created on: " +
            date.getDate() +
            "/" +
            month +
            "/" +
            date.getFullYear(),
          fluid: true,
        };
      })
    );

    this.setState({ items });
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
        {<Card.Group items={this.state.items} itemsPerRow={2} />}
      </Layout>
    );
  }
}

export default ContractList;
