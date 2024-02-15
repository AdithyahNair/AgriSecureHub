import React, { Component } from "react";
import web3 from "../ethereum/web3";
import Contract from "../ethereum/contract";
import { Router } from "../routes";
import { Button } from "semantic-ui-react";
import factory from "../ethereum/factory";

class DeleteTransaction extends Component {
  state = {
    loading: false,
  };

  onDelete = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    const existingContract = Contract(this.props.address);
    const count = await existingContract.methods
      .getCountOfTransactions()
      .call();
    this.setState({ loading: true });
    try {
      await existingContract.methods.deleteTransaction().send({
        from: accounts[0],
      });
      if (
        this.props.transactions[parseInt(count) - 1].payer ==
          this.props.entity ||
        this.props.transactions[parseInt(count) - 1].recipient ==
          this.props.entity
      ) {
        await factory.methods
          .popEntityFromContract(
            this.props.transactions[parseInt(count) - 1].payer
          )
          .send({
            from: accounts[0],
          });
      }
      Router.replaceRoute(
        `/contractlist/${this.props.entity}/${this.props.isCompany}`
      );
    } catch (err) {
      console.log(err.message);
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <div>
        {this.props.phase == 1 ? null : (
          <Button
            loading={this.state.loading}
            onClick={this.onDelete}
            floated="right"
            content="Delete Transaction"
            basic
            color="red"
          />
        )}
      </div>
    );
  }
}

export default DeleteTransaction;
