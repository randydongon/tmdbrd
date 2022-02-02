import React, { useState } from "react";
import { Link } from "react-router-dom";
import tmdblogo from "../../images/tmdb_logo.svg";
import ReactMovieLogo from "../../images/react-movie-logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.style";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/tmdbrd">
          <LogoImg src={ReactMovieLogo} alt="Logo-img" />
        </Link>
        <TMDBLogoImg src={tmdblogo} alt="RMDB-Logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
