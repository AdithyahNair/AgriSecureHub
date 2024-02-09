import React, { Component } from "react";
import Layout from "../../components/Layout";
import { CardGroup, Button, Icon } from "semantic-ui-react";
import { Link } from "../../routes";
import Contract from "../../ethereum/contract";

class ShowContract extends Component {
  static async getInitialProps(props) {
    const contract = Contract(props.query.address);
    const details = await contract.methods.getContractDetails().call();
    return {
      managerAddress: details[0],
      name: details[1],
      quantity: details[2],
      length: details[3],
      count: details[4],
      entity: props.query.entity,
      isCompany: props.query.isCompany,
      address: props.query.address,
    };
  }

  renderContractData() {
    const { name, quantity, length, managerAddress, count } = this.props;
    const items = [
      {
        header: managerAddress,
        meta: "Address of manager",
        description: "This is the person who created the contract",
        style: { overflowWrap: "break-word" },
      },
      {
        header: name,
        meta: "Product name",
        description:
          "The product that is currently present in the supply chain",
      },
      {
        header: quantity,
        meta: "Quantity",
        description:
          "The quantity of the product in Metric Tons being produced",
      },
      {
        header: parseInt(length),
        meta: "No. of entities",
        description: "The number of entities involved in the supply chain",
      },
      {
        header: parseInt(count),
        meta: "No. of transactions",
        description:
          "The number of transactions that have taken place amongst the entities",
      },
      {
        header: "Seed Company",
        meta: "Supply chain phase",
        description: "The current location of the product in the supply chain",
      },
    ];
    return <CardGroup items={items} centered itemsPerRow={3} />;
  }
  render() {
    return (
      <div>
        <Layout>
          <Link
            route={`/contractlist/${this.props.entity}/${this.props.isCompany}`}
          >
            <Button icon basic>
              <Icon name="angle left" />
            </Button>
          </Link>
          <Link
            route={`/contractlist/${this.props.entity}/${this.props.isCompany}/${this.props.address}/transfer`}
          >
            <Button floated="right" primary content="Transfer Product" />
          </Link>
          <h2>Contract Details</h2>
          {this.renderContractData()}
          <Link
            route={`/contractlist/${this.props.entity}/${this.props.isCompany}/${this.props.address}/transactions`}
          >
            <Button
              style={{ marginTop: "30px" }}
              basic
              color="teal"
              content="View Transactions"
            />
          </Link>
        </Layout>
      </div>
    );
  }
}

export default ShowContract;
