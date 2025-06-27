import { Container } from "infinity-forge";
import * as S from "./styles";
import { useState } from "react";

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <S.Header>
      <Container>
        <a href="#">
          <h1 className="font-24-bold">j - engenharia</h1>
        </a>

        <S.Hamburguer onClick={() => setMenuAberto(!menuAberto)}>
          <span />
          <span />
          <span />
        </S.Hamburguer>

        <S.MenuMobile aberto={menuAberto}>
          <a href="#sobre" onClick={() => setMenuAberto(false)}>
            sobre
          </a>
          <a href="#projetos" onClick={() => setMenuAberto(false)}>
            projetos
          </a>
          <a href="#contato" onClick={() => setMenuAberto(false)}>
            contato
          </a>
        </S.MenuMobile>

        <div className="links font-20-bold">
          <a href="#sobre">sobre</a>
          <a href="#projetos">projetos</a>
          <a href="#contato">contato</a>
        </div>
      </Container>
    </S.Header>
  );
}
