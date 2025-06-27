import styled from "styled-components";

export const Header = styled.header`
  background-color: #1c243e;
  position: relative;
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
    border-bottom: 1px solid #fff;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;

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

  @media only screen and (max-width: 1024px) {
    .links {
      display: none;
    }
  }
`;

// botão hambúrguer
export const Hamburguer = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background: white;
    border-radius: 2px;
  }

  @media only screen and (max-width: 1024px) {
    display: flex;
  }
`;

// menu mobile
export const MenuMobile = styled.nav<{ aberto: boolean }>`
  display: ${({ aberto }) => (aberto ? "flex" : "none")};
  position: absolute;
  top: 100%;
  right: 15px;
  background: #1c243e;
  flex-direction: column;
  gap: 20px;
  border-radius: 5px;
  padding: 20px;
  border: 1px solid #abadb7;
  z-index: 999;
  width: 90%;

  a {
    color: #fff;
    font-size: 18px;
    text-decoration: none;

    &:hover {
      color: #abadb7;
    }
  }

  @media only screen and (min-width: 1025px) {
    display: none;
  }
`;
