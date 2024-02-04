import React, { Component } from "react";
import { FormField, Form, Button, Input, Message } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import factory from "../ethereum/factory";
import Router from "../routes";

class CreateContractForm extends Component {
  state = {
    managerAddress: "",
    farmerAddress: "",
    name: "",
    quantity: "",
    errorMessage: "",
    loading: false,
  };
  onCreate = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    this.setState({ loading: true, errorMessage: "" });
    try {
      await factory.methods
        .createContract(
          this.state.farmerAddress,
          this.state.name,
          this.state.quantity
        )
        .send({
          from: accounts[0],
        });
      Router.replaceRoute("/contractlist");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.onCreate} error={!!this.state.errorMessage}>
          <FormField>
            <label>Your Address</label>
            <Input
              onChange={(event) =>
                this.setState({ managerAddress: event.target.value })
              }
              value={this.state.managerAddress}
            />
          </FormField>
          <FormField>
            <label>Farmer's Address</label>
            <Input
              onChange={(event) =>
                this.setState({ farmerAddress: event.target.value })
              }
              value={this.state.farmerAddress}
            />
          </FormField>
          <FormField>
            <label>Product Name</label>
            <Input
              onChange={(event) => this.setState({ name: event.target.value })}
              value={this.state.name}
            />
          </FormField>
          <FormField>
            <label>Quantity</label>
            <Input
              onChange={(event) =>
                this.setState({ quantity: event.target.value })
              }
              value={this.state.quantity}
              label="Metric Ton"
              labelPosition="right"
            />
          </FormField>
          <Button loading={this.state.loading} content="Create" primary />
          <Message
            header="Oops!"
            content={this.state.errorMessage}
            error
            negative
          />
        </Form>
      </div>
    );
  }
}

export default CreateContractForm;
