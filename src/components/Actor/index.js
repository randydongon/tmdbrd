import React from "react";
import PropTypes from "prop-types";
//styled
import { Wrapper, Image } from "./Actor.style";

const Actor = ({ name, character, imageUrl }) => {
  return (
    <Wrapper>
      <Image src={imageUrl} />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
};

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
};
export default Actor;
