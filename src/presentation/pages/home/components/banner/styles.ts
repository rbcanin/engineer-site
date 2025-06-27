import styled from "styled-components";

export const Banner = styled("section")`
  background-color: #1c243e;

  video {
    max-width: 700px;
    object-fit: cover;
    aspect-ratio: 700/400;
    width: 100%;
    border-radius: 5px;
  }

  .container {
    padding: 80px 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  h1 {
    color: #fff;
    line-height: 1em;
    text-align: end;
  }

  @media only screen and (max-width: 1600px) {
    video {
      max-width: 680px;
    }

    .container {
      padding: 60px 15px;
    }
  }

  @media only screen and (max-width: 1400px) {
    video {
      max-width: 650px;
    }

    .container {
      padding: 40px 15px;
    }
  }

  @media only screen and (max-width: 1200px) {
    video {
      max-width: 630px;
    }

    .container {
      padding: 20px 15px;
    }
  }

  @media only screen and (max-width: 1024px) {
    video {
      max-width: 100%;
    }

    .container {
      flex-direction: column-reverse;
      gap: 20px;
    }

    h1 {
      text-align: center;
    }
  }
`;
