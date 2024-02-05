import React, { Component } from "react";
import Layout from "../../components/Layout";
import { CardGroup, Button, Icon } from "semantic-ui-react";
import { Link } from "../../routes";

class ShowContract extends Component {
  static async getInitialProps(props) {
    const entity = props.query.entity;
    const isCompany = props.query.isCompany;
    return { entity, isCompany };
  }
  render() {
    return (
      <Layout>
        <Link
          route={`/contractlist/${this.props.entity}/${this.props.isCompany}`}
        >
          <a>
            <Button icon basic>
              <Icon name="angle left" />
            </Button>
          </a>
        </Link>
        <h2>Contract Details</h2>
      </Layout>
    );
  }
}

export default ShowContract;
