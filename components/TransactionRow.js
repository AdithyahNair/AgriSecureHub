import React, { Component } from "react";
import { TableCell, Button, TableRow } from "semantic-ui-react";
import Contract from "../ethereum/contract";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

class TransactionRow extends Component {
  state = {
    loading: false,
  };

  onApprove = async (event) => {
    event.preventDefault();
    const existingContract = Contract(this.props.address);
    const accounts = await web3.eth.getAccounts();
    this.setState({ loading: true });
    try {
      if (this.props.entity == this.props.transaction.payer) {
        await existingContract.methods.approveTransaction(this.props.id).send({
          from: accounts[0],
        });
        Router.pushRoute(
          `/contractlist/${this.props.entity}/${this.props.isCompany}`
        );
      } else {
        this.setState({ errorMessage: "You are not the payer." });
      }
    } catch (err) {
      console.log(err.message);
    }
    this.setState({ loading: false });
  };

  render() {
    const { id, transaction } = this.props;
    return (
      <TableRow positive={!transaction.complete}>
        <TableCell>{id + 1}</TableCell>
        <TableCell>{transaction.payer}</TableCell>
        <TableCell>{transaction.recipient}</TableCell>
        <TableCell>{transaction.amount}</TableCell>
        <TableCell>
          {transaction.complete ? null : (
            <Button
              loading={this.state.loading}
              onClick={this.onApprove}
              color="green"
              basic
              content="Approve"
            />
          )}
        </TableCell>
      </TableRow>
    );
  }
}

export default TransactionRow;
