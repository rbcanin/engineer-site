import { Container } from "infinity-forge";

import * as S from "./styles";

export function Banner() {
  return (
    <S.Banner>
      <Container>
        <h1 className="font-24">
          {" "}
          A excelência de sempre com a modernidade do agora
        </h1>

        <img src="images/engenharia.jpg" alt="" />
      </Container>
    </S.Banner>
  );
}
