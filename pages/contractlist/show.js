import React, { Component } from "react";
import Layout from "../../components/Layout";
import {
  CardGroup,
  Button,
  Icon,
  StepGroup,
  StepContent,
  Step,
} from "semantic-ui-react";
import { Link } from "../../routes";
import Contract from "../../ethereum/contract";
import factory from "../../ethereum/factory";

class ShowContract extends Component {
  static async getInitialProps(props) {
    const contract = Contract(props.query.address);
    const details = await contract.methods.getContractDetails().call();
    const entityType = await factory.methods
      .allEntities(props.query.entity)
      .call();
    return {
      entityType: parseInt(entityType),
      managerAddress: details[0],
      name: details[1],
      quantity: details[2],
      phase: parseInt(details[3]),
      count: parseInt(details[4]),
      entity: props.query.entity,
      isCompany: props.query.isCompany,
      address: props.query.address,
    };
  }

  renderContractData() {
    const { name, quantity, phase, managerAddress, count } = this.props;
    var phaseHeader = "";
    if (phase == 1) {
      phaseHeader = "Seed Company";
    } else if (phase == 2) {
      phaseHeader = "Farmer";
    } else if (phase == 3) {
      phaseHeader = "Processor";
    } else if (phase == 4) {
      phaseHeader = "Distributor";
    } else if (phase == 5) {
      phaseHeader = "Retailer";
    } else {
      phaseHeader = "Consumer";
    }
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
        header: phase,
        meta: "No. of entities",
        description: "The number of entities involved in the supply chain",
      },
      {
        header: count,
        meta: "No. of transactions",
        description:
          "The number of transactions that have taken place amongst the entities",
      },
      {
        header: phaseHeader,
        meta: "Supply chain phase",
        description: "The current location of the product in the supply chain",
      },
    ];
    return <CardGroup items={items} centered itemsPerRow={3} />;
  }

  renderSteps() {
    return (
      <StepGroup widths={6} style={{ marginTop: "30px" }} ordered>
        <Step active={this.props.phase == 1} completed={this.props.phase >= 1}>
          <StepContent
            title="Seed Company"
            description="Procures seeds for farmer cultivation."
          ></StepContent>
        </Step>

        <Step active={this.props.phase == 2} completed={this.props.phase >= 2}>
          <StepContent
            title="Farmer"
            description="Cultivates seeds to produce the product."
          />
        </Step>

        <Step active={this.props.phase == 3} completed={this.props.phase >= 3}>
          <StepContent
            title="Processor"
            description="Purifies the product by removing impurities."
          />
        </Step>

        <Step active={this.props.phase == 4} completed={this.props.phase >= 4}>
          <StepContent
            title="Distributor"
            description="Bulk distributes the product"
          />
        </Step>

        <Step active={this.props.phase == 5} completed={this.props.phase >= 5}>
          <StepContent
            title="Retailer"
            description="Sells the final product."
          />
        </Step>

        <Step active={this.props.phase == 6} completed={this.props.phase >= 6}>
          <StepContent
            title="Consumer"
            description="Utilizes the end product."
          />
        </Step>
      </StepGroup>
    );
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
          {this.props.entityType == this.props.phase &&
          this.props.phase != 6 ? (
            <Link
              route={`/contractlist/${this.props.entity}/${this.props.isCompany}/${this.props.address}/transfer`}
            >
              <Button floated="right" primary content="Transfer Product" />
            </Link>
          ) : null}

          <h2>Contract Details</h2>
          {this.renderContractData()}
          {this.renderSteps()}
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
