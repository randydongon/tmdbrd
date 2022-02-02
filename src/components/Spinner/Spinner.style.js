import styled from "styled-components";

export const Spinner = styled.div`
  background-image: linear-gradient(
    to bottom right,
    rgba(0, 0, 0, 0) 42%,
    rgba(0, 0, 0, 0.65)
  );
  border: 5px solid var(--lightGrey);
  border-top: 5px solid var(--medGrey);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
