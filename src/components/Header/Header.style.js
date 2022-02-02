import styled from "styled-components";

export const Wrapper = styled.div`
  height: 50px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  background: #000;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const LogoImg = styled.img`
  height: 50px;
  width: 150px;
  @media screen and (max-width: 500px) {
    width: 100px;
  }
`;

export const TMDBLogoImg = styled.img`
  height: 40px;
  width: 100px;
  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;
