import React, { Component } from "react";
import { FormField, Form, Button, Input } from "semantic-ui-react";

class CreateContractForm extends Component {
  render() {
    return (
      <div>
        <Form>
          <FormField>
            <label>Your Address</label>
            <Input />
          </FormField>
          <FormField>
            <label>Farmer's Address</label>
            <Input />
          </FormField>
          <FormField>
            <label>Product Name</label>
            <Input />
          </FormField>
          <FormField>
            <label>Quantity</label>
            <Input label="Metric Ton" labelPosition="right" />
          </FormField>
          <Button content="Create" primary />
        </Form>
      </div>
    );
  }
}

export default CreateContractForm;
