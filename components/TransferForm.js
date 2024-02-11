import React, { Component } from "react";
import { Form, Button, Input, Message, FormField } from "semantic-ui-react";
import Contract from "../ethereum/contract";
import web3 from "../ethereum/web3";
import { Router } from "../routes";
import factory from "../ethereum/factory";

class TransferForm extends Component {
  state = {
    payer: "",
    amount: 0,
    errorMessage: "",
    loading: false,
    entityType: 0,
  };

  onTransfer = async (event) => {
    event.preventDefault();
    const contract = Contract(this.props.address);
    const details = await contract.methods.getContractDetails().call();
    const phase = details[3];
    const farmerAddress = await contract.methods.farmer().call();
    this.setState({ loading: true, errorMessage: "" });
    const accounts = await web3.eth.getAccounts();

    try {
      this.setState({
        entityType: parseInt(
          await factory.methods.allEntities(this.state.payer).call()
        ),
      });

      console.log(this.state.entityType, "+", parseInt(phase));

      if (
        parseInt(phase) == 1 &&
        this.state.payer == farmerAddress &&
        this.state.entityType &&
        this.state.entityType == parseInt(phase) + 1
      ) {
        await contract.methods
          .createTransfer(
            this.state.payer,
            this.props.entity,
            this.state.amount
          )
          .send({
            from: accounts[0],
            value: web3.utils.toWei(this.state.amount, "ether"),
          });
        Router.pushRoute(
          `/contractlist/${this.props.entity}/${this.props.isCompany}`
        );
      } else if (
        parseInt(phase) != 1 &&
        this.state.entityType &&
        this.state.entityType == parseInt(phase) + 1
      ) {
        await contract.methods
          .createTransfer(
            this.state.payer,
            this.props.entity,
            this.state.amount
          )
          .send({
            from: accounts[0],
            value: web3.utils.toWei(this.state.amount, "ether"),
          });
        await factory.methods
          .pushEntityIntoContract(this.props.address, this.state.payer)
          .send({ from: accounts[0] });
        Router.pushRoute(
          `/contractlist/${this.props.entity}/${this.props.isCompany}`
        );
      } else {
        this.setState({
          errorMessage:
            "Payer is not an entity or not present in the contract.",
        });
      }
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Form onSubmit={this.onTransfer} error={!!this.state.errorMessage}>
        <FormField>
          <label>Payer Address</label>
          <Input
            value={this.state.payer}
            onChange={(event) => {
              this.setState({ payer: event.target.value });
            }}
          />
        </FormField>
        <FormField>
          <label>Amount</label>
          <Input
            value={this.state.amount}
            onChange={(event) => {
              this.setState({ amount: event.target.value });
            }}
            label="ether"
            labelPosition="right"
          />
        </FormField>
        <Button loading={this.state.loading} content="Transfer" primary />
        <Message
          negative
          error
          header="Oops!"
          content={this.state.errorMessage}
        />
      </Form>
    );
  }
}

export default TransferForm;
