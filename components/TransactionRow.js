import React, { Component } from "react";
import { TableCell, Button, TableRow, Message } from "semantic-ui-react";
import contract from "../ethereum/contract";
import web3 from "../ethereum/web3";
import Router from "../routes";

class TransactionRow extends Component {
  onApprove = async (event) => {
    event.preventDefault();
    const existingContract = contract(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await existingContract.methods.approveTransaction(this.props.id).send({
      from: accounts[0],
    });
    Router.replaceRoute(
      `/contractlist/${this.props.entity}/${this.props.isCompany}/${this.props.address}`
    );
  };

  render() {
    const { id, transaction } = this.props;
    return (
      <TableRow
        disabled={transaction.complete}
        positive={!transaction.complete}
      >
        <TableCell>{id + 1}</TableCell>
        <TableCell>{transaction.payer}</TableCell>
        <TableCell>{transaction.recipient}</TableCell>
        <TableCell>
          {/* {web3.utils.fromWei(parseInt(transaction.amount, "ether"))} */}
        </TableCell>
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
