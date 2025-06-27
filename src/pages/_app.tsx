import "reflect-metadata";

import React from "react";

import { InfinityForgeProviders, api } from "infinity-forge";

import { GlobalStyles, InfinityForgeProps } from "@/presentation";

import "infinity-forge/dist/infinity-forge.css";
import Head from "next/head";

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

      <Head>
        <title>J Engenharia</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

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
