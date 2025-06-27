import { Container } from "infinity-forge";

import * as S from "./styles";

export function Sobre() {
  return (
    <S.Sobre>
      <Container>
        <div className="text">
          <h2 className="font-80">
            Sobre <br /> João Augusto{" "}
          </h2>

          <p className="font-20">
            Zola Bekker is a multidisciplinary designer with a passion for brand
            storytelling. She creates compelling visual experiences through
            graphic design, brand strategy, website development, and video
            production.{" "}
          </p>
        </div>

        <div className="image">
          <p className="font-20">
            Aside from designing, Zola also finds time to enjoy nature where she
            gets fresh inspiration for future projects.
          </p>

          <img src="images/engenharia.jpg" alt="" />
        </div>
      </Container>
    </S.Sobre>
  );
}
