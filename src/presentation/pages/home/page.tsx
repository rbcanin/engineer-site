import { Layout } from "@/presentation";
import * as S from "./styles";
import { Banner, Contato, Projetos, Sobre } from "./components";

export function Home() {
  return (
    <S.Home>
      <Layout>
        <Banner />

        <div id="sobre">
          <Sobre />
        </div>

        <div id="projetos">
          <Projetos />
        </div>

        <div id="contato">
          <Contato />
        </div>
      </Layout>
    </S.Home>
  );
}
