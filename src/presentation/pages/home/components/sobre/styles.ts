import styled from "styled-components";

export const Sobre = styled("section")`
  background-color: #5b6174;
  min-height: 50vh;

  .container {
    padding: 80px 15px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .text {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    h2 {
      max-width: 600px;
      line-height: 1em;
      color: #fff;
    }

    p {
      max-width: 700px;
      color: #fff;
    }
  }

  .image {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 20px;

    p {
      max-width: 400px;
      color: #fff;
    }

    img {
      max-width: 700px;
      width: 100%;
      aspect-ratio: 700/365;
      object-fit: cover;
    }
  }

  @media only screen and (max-width: 1600px) {
    .container {
      padding: 60px 15px;
      gap: 30px;
    }

    .image {
      img {
        max-width: 650px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .container {
      padding: 40px 15px;
      gap: 20px;
    }

    .image {
      img {
        max-width: 600px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .container {
      padding: 20px 15px;
      gap: 15px;
    }

    .image {
      img {
        max-width: 500px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .container {
      align-items: center;
    }

    .image,
    .text {
      align-items: center;
      text-align: justify;
      max-width: 600px;
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 768px) {
  }
`;
