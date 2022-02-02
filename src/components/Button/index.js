import React, { useState, useEffect } from "react";

import { Wrapper } from "./Button.style";

const Button = ({ text, callback }) => {
  return <Wrapper onClick={callback}>{text}</Wrapper>;
};

export default Button;
