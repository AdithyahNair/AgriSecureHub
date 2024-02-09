import React, { Component } from "react";
import Layout from "../../components/Layout";
import contract from "../../ethereum/contract";

class Transactions extends Component {
  static async getInitialProps(props) {
    const entity = props.query.entity;
    const isCompany = props.query.isCompany;
    const address = props.query.address;
    return { entity, isCompany, address };
  }

  render() {
    return <h1>Transaction List</h1>;
  }
}

export default Transactions;
