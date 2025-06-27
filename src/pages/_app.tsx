import "reflect-metadata";

import React from "react";

import { InfinityForgeProviders, api } from "infinity-forge";

import { GlobalStyles, InfinityForgeProps } from "@/presentation";

import "infinity-forge/dist/infinity-forge.css";

export default function App({ pageProps, configs, Component }) {
  return (
    <InfinityForgeProviders
      {...InfinityForgeProps}
      theme={{ primaryColor: "", darkColor: "", secondaryColor: "" }}
      i18n={pageProps?.props?.i18n}
      auth={{ roles: { administradorMaster: {} } }}
      InjectedRemotes={{
        users: {
          getRole: async () => {
            return { role: "administradorMaster" };
          },
        },
      }}
      Configurations={{
        poweredBy: {
          name: "Codie",
          link: "https://codie.com.br/",
        },
        dynamicSections: pageProps?.props?.dynamicSections,
      }}
      siteConfigurations={configs}
    >
      <GlobalStyles />

      <Component {...pageProps} />
    </InfinityForgeProviders>
  );
}

// App.getInitialProps = async () => {
//   try {
//     const { fields } = await api({
//       url: "configs",
//       method: "get",
//     });

//     return {
//       configs: fields,
//     };
//   } catch {
//     console.log("ERRO???");
//   }
// };
