import React from "react";
import { Link } from "react-router-dom";

import { Wrapper, Content } from "./BreadCrum.style";

const BreadCrumb = ({ movieTitle }) => {
  return (
    <Wrapper>
      <Content>
        <Link to="/tmdbrd">
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{movieTitle}</span>
      </Content>
    </Wrapper>
  );
};
export default BreadCrumb;
