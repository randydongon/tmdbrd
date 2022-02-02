import React from "react";
//helper
import { calcTime, convertMoney } from "../../helpers";
import { Wrapper, Content } from "./MovieInfoBar.style";

const MovieInfoBar = ({ time, budget, revenue }) => {
  return (
    <Wrapper>
      <Content>
        <div className="column">
          <span>Running time: {calcTime(time)}</span>
        </div>
        <div className="column">
          <span>Budget: {convertMoney(budget)}</span>
        </div>
        <div className="column">
          <span>Revenue: {convertMoney(revenue)}</span>
        </div>
      </Content>
    </Wrapper>
  );
};

export default MovieInfoBar;
