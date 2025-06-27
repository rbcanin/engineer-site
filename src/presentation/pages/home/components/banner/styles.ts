import styled from "styled-components";

export const Banner = styled("section")`
  margin-top: 80px;
  background-color: #1c243e;
  min-height: 90vh;

  img {
    width: 100%;
    height: 100%;
  }

  .container {
    min-height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    color: #fff;
    max-width: 400px;
  }

  img {
    max-width: 50%;
  }
`;
