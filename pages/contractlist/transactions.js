import React, { Component } from "react";
import Layout from "../../components/Layout";
import Contract from "../../ethereum/contract";
import TransactionRow from "../../components/TransactionRow";
import {
  Button,
  Icon,
  Table,
  TableHeaderCell,
  TableHeader,
  TableRow,
  TableBody,
} from "semantic-ui-react";
import { Link } from "../../routes";

class Transactions extends Component {
  static async getInitialProps(props) {
    const entity = props.query.entity;
    const isCompany = props.query.isCompany;
    const address = props.query.address;
    const existingContract = Contract(address);
    const transactionsLength = await existingContract.methods
      .getCountOfTransactions()
      .call();
    const transactions = await Promise.all(
      Array(parseInt(BigInt(transactionsLength)))
        .fill()
        .map((element, index) => {
          return existingContract.methods.transactions(index).call();
        })
    );
    return { entity, isCompany, address, transactions };
  }

  renderRows() {
    return this.props.transactions.map((transaction, index) => {
      return (
        <TransactionRow
          key={index}
          id={index}
          transaction={transaction}
          address={this.props.address}
          isCompany={this.props.isCompany}
          entity={this.props.entity}
        />
      );
    });
  }

  render() {
    return (
      <Layout>
        <Link
          route={`/contractlist/${this.props.entity}/${this.props.isCompany}/${this.props.address}`}
        >
          <Button basic icon>
            <Icon name="angle left" />
          </Button>
        </Link>
        <h2>Transaction List</h2>
        <Table size="large" celled textAlign="center" color="green" padded>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>ID</TableHeaderCell>
              <TableHeaderCell>Payer</TableHeaderCell>
              <TableHeaderCell>Recipient</TableHeaderCell>
              <TableHeaderCell>Amount</TableHeaderCell>
              <TableHeaderCell>Approve</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>{this.renderRows()}</TableBody>
        </Table>
      </Layout>
    );
  }
}

export default Transactions;
