/**
 * @param asPath
 * @returns
 */

export const appRoutes = {
  private: {
    dashboard: {
      name: "/dashboard",
    },
  },
  public: {
    login: {
      name: "/",
    },
  },
};

export const checkIsRoutes = (asPath: string) => {
  const appPublicRoutes = Object.values(appRoutes.public);

  return appPublicRoutes.find((route) => route.name === asPath) !== undefined;
};
