import React, { Component } from "react";
import {
  FormField,
  Form,
  Button,
  Input,
  Message,
  FormGroup,
} from "semantic-ui-react";
import web3 from "../ethereum/web3";
import factory from "../ethereum/factory";
import { Router } from "../routes";

class CreateContractForm extends Component {
  state = {
    managerAddress: "",
    farmerAddress: "",
    name: "",
    quantity: "",
    errorMessage: "",
    loading: false,
    tLower: 0,
    tHigher: 0,
    hLower: 0,
    hHigher: 0,
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
          this.state.quantity,
          this.state.tLower,
          this.state.tHigher,
          this.state.hLower,
          this.state.hHigher
        )
        .send({
          from: accounts[0],
        });
      Router.pushRoute(
        `/contractlist/${this.props.entity}/${this.props.isCompany}`
      );
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
          <FormGroup widths={"equal"}>
            <FormField>
              <label>Temperature Lower Limit</label>
              <Input
                onChange={(event) =>
                  this.setState({ tLower: event.target.value })
                }
                value={this.state.tLower}
              />
            </FormField>
            <FormField>
              <label>Temperature Higher Limit</label>
              <Input
                onChange={(event) =>
                  this.setState({ tHigher: event.target.value })
                }
                value={this.state.tHigher}
              />
            </FormField>
          </FormGroup>
          <FormGroup widths={"equal"}>
            <FormField>
              <label>Humidity Lower Limit</label>
              <Input
                onChange={(event) =>
                  this.setState({ hLower: event.target.value })
                }
                value={this.state.hLower}
              />
            </FormField>
            <FormField>
              <label>Humidity Higher Limit</label>
              <Input
                onChange={(event) =>
                  this.setState({ hHigher: event.target.value })
                }
                value={this.state.hHigher}
              />
            </FormField>
          </FormGroup>
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
