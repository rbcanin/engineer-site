import { Container } from "infinity-forge";

import * as S from "./styles";

export function Banner() {
  return (
    <S.Banner>
      <Container>
        <video src="images/banner.mp4" autoPlay muted loop playsInline />

        <h1 className="font-80"> Engenharia de projetos mecânicos</h1>
      </Container>
    </S.Banner>
  );
}
