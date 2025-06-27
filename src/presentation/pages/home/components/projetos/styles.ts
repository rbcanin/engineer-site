import styled from "styled-components";

export const Projetos = styled("section")`
  background-color: #edf0f2;
  min-height: 50vh;

  .container {
    padding: 80px 15px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .row {
      height: 2px;
      background-color: black;
    }
  }
`;
