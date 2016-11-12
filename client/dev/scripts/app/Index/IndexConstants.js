const IndexConstants = {
  Routes : {
    Login: '/Login',
    Panel: '/Panel',
    Inbox: '/Inbox',
  }
}

const RoutesConfig = {
  Login: {
    path: IndexConstants.Routes.Login,
    scopes: ["router"],
  },
  Panel: {
    path: IndexConstants.Routes.Panel,
    scopes: ["router"],
  },
  Inbox: {
    path: IndexConstants.Routes.Inbox,
    scopes: ["router", "menu"],
    label: "Skrzynka odbiocza",
    materialIconName: "inbox"
  },
}

function getMenuConfiguration() {
  let menuConfig = [];

  let currentCfg = undefined;
  let containsMenuScope = undefined;
  let isForMenu = undefined;

  for (let cfg in RoutesConfig) {
    currentCfg = RoutesConfig[cfg];
    containsMenuScope = !!(currentCfg.scopes.findIndex((item) => { return item === "menu"}) + 1)
    isForMenu = containsMenuScope;
    
    currentCfg.name = cfg;
    if (isForMenu) {
      menuConfig.push(currentCfg);
    }
  }

  return menuConfig;
}

export const RoutePath = IndexConstants.Routes;
export const MenuConfig = getMenuConfiguration();
