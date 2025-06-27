import { InfinityForgeProvidersProps } from "infinity-forge";
import { menu } from "./menu";
import { theme } from "./theme";

export const InfinityForgeProps: Omit<InfinityForgeProvidersProps, "children"> =
  {
    theme,
    InjectedRemotes: {
      menu,
    },
    auth: {
      roles: { Colaborador: {} },
    },
    Configurations: {
      poweredBy: {
        name: "Codie",
        link: "https://codie.com.br/",
      },
      notification: {
        enable: false,
      },
      menu: {
        mode: "OpenedMenu",
      },
    },
  };
