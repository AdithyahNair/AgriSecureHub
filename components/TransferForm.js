import React, { Component } from "react";
import { Form, Button, Input, Message, FormField } from "semantic-ui-react";

class TransferForm extends Component {
  onTransfer = async (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <Form onSubmit={this.onTransfer}>
        <FormField>
          <label>Recipient Address</label>
          <Input />
        </FormField>
        <FormField>
          <label>Quantity</label>
          <Input label="Metric Ton" labelPosition="right" />
        </FormField>
        <FormField>
          <label>Amount</label>
          <Input label="ether" labelPosition="right" />
        </FormField>
        <Button content="Transfer" primary />
      </Form>
    );
  }
}

export default TransferForm;
