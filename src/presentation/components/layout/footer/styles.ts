import styled from "styled-components";

export const Footer = styled("header")`
  background-color: #1c243e;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
    text-transform: uppercase;
    border-top: 1px solid #fff;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease, text-decoration 0.3s ease;

    &:hover {
      color: #abadb7;
      animation: bounce 0.4s ease;
    }

    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-6px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }

  .links {
    display: flex;
    gap: 60px;
  }

  @media only screen and (max-width: 1600px) {
    .links {
      gap: 50px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .links {
      gap: 40px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .links {
      gap: 30px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .container {
      flex-direction: column;
      gap: 20px;
    }

    .links {
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 20px;
    }
  }
`;
