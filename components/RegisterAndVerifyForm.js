import React, { Component, useState } from "react";
import web3 from "../ethereum/web3";
import factory from "../ethereum/factory";
import { FormField, Button, Form, Dropdown, Message } from "semantic-ui-react";
import { Router } from "../routes";
class RegisterAndVerifyForm extends Component {
  state = {
    type: 0,
    address: "",
    create: false,
    verify: false,
    errorMessage: "",
  };

  constructor(props) {
    super(props);
    this.renderDropDown = this.renderDropDown.bind(this);
  }

  onCreate = async (event) => {
    event.preventDefault();
    this.setState({ create: true, errorMessage: "" });
    const accounts = await web3.eth.getAccounts();
    try {
      await factory.methods
        .enterEntityStatus(this.state.address, this.state.type)
        .send({ from: accounts[0] });
      const results = await factory.methods
        .getManagerAndEntityType(this.state.address, this.state.type)
        .call();
      const entity = results[0];
      const isCompany = results[1];
      Router.pushRoute(`/contractlist/${entity}/${isCompany}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ create: false });
  };

  onVerify = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    this.setState({ verify: true, errorMessage: "" });
    try {
      await factory.methods
        .confirmStatus(this.state.address, this.state.type)
        .send({ from: accounts[0] });
      const results = await factory.methods
        .getManagerAndEntityType(this.state.address, this.state.type)
        .call();
      const entity = results[0];
      const isCompany = results[1];
      console.log(results);
      Router.pushRoute(`/contractlist/${entity}/${isCompany}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ verify: false });
  };

  renderDropDown() {
    const [type, setType] = useState(0);

    const handleSelect = (event, data) => {
      setType(data.value);
      this.setState({ type: data.value });
    };

    const items = [
      {
        text: "Seed Company",
        value: 1,
        image: { avatar: true, src: "./company.png" },
      },
      {
        text: "Farmer",
        value: 2,
        image: { avatar: true, src: "./farmer.png" },
      },
      {
        text: "Processor",
        value: 3,
        image: { avatar: true, src: "./processor.png" },
      },
      {
        text: "Distributor",
        value: 4,
        image: { avatar: true, src: "./distributor.png" },
      },
      {
        text: "Retailer",
        value: 5,
        image: { avatar: true, src: "./retailer.png" },
      },
      {
        text: "Consumer",
        value: 6,
        image: { avatar: true, src: "./consumer.png" },
      },
    ];

    return (
      <Dropdown
        placeholder="Select EntityType"
        fluid
        selection
        options={items}
        onChange={handleSelect}
      />
    );
  }

  render() {
    return (
      <Form size="large" error={!!this.state.errorMessage}>
        <FormField>
          <label>Address</label>
          <input
            value={this.state.address}
            onChange={(event) => this.setState({ address: event.target.value })}
            placeholder="Ethereum Address"
          />
        </FormField>
        <FormField label="Entity Type" control={this.renderDropDown} />
        <Button
          onClick={this.onCreate}
          loading={this.state.create}
          primary
          content="Create"
        />
        <Button
          onClick={this.onVerify}
          loading={this.state.verify}
          color="teal"
          content="Verify"
        />

        <Message
          error
          header="Oops!"
          content={this.state.errorMessage}
          negative
        ></Message>
      </Form>
    );
  }
}

export default RegisterAndVerifyForm;
