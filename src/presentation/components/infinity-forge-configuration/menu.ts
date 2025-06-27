import { LoadAllMenu } from 'infinity-forge';

export const menu = {
  menu: {
    items: [
      {
        id: 25,
        title: "Logs",
        route: "/sender-logs",
        role: [],
        icon: "",
        order: 1,
      },
      {
        id: 18,
        title: 'Usuários',
        route: '/usuario',
        role: [],
        claim: ['admin'],
        icon: ``,
        order: 1,
      },
      {
        id: 19,
        title: 'Clientes',
        route: '/clientes',
        role: [],
        claim: ['admin'],
        icon: ``,
        order: 1,
      },
      {
        id: 20,
        title: 'Provedores',
        route: '/provedores',
        role: [],
        claim: ['admin'],
        icon: ``,
        order: 1,
      },
    ],
  } as any,
};
