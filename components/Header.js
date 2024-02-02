import React from "react";
import { Link } from "../routes";
import { Header, HeaderSubheader } from "semantic-ui-react";

export default () => {
  return (
    <div>
      <Link route="/">
        <a>
          <Header
            as="h1"
            image="./logo.png"
            content="AgriSecureHub"
            subheader={
              <HeaderSubheader>
                World's Best Smart Farming Platform
              </HeaderSubheader>
            }
            textAlign="center"
          ></Header>
        </a>
      </Link>
    </div>
  );
};
