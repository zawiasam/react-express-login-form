const IndexConstants = {
  Routes : {
    Login: '/Login',
    Panel: '/Panel',
    Inbox: '/Inbox',
    Home: '/Home',
    Settlement: '/Settlement',
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
  Home: {
    path: IndexConstants.Routes.Home,
    scopes: ["router", "menu"],
    label: "Strona domowa",
    materialIconName: "home"
  },
  Inbox: {
    path: IndexConstants.Routes.Inbox,
    scopes: ["router", "menu"],
    label: "Skrzynka odbiocza",
    materialIconName: "inbox"
  },
  Settlement: {
    path: IndexConstants.Routes.Settlement,
    scopes: ["router", "menu"],
    label: "Rozliczenie",
    materialIconName: "attach_money"
  },  
}

function getMenuConfiguration() {
  let menuConfig = [];

  let currentCfg = undefined;
  let containsMenuScope = undefined;
  let isForMenu = undefined;

  for (let cfg in RoutesConfig) {
    currentCfg = RoutesConfig[cfg];
    containsMenuScope = !!(currentCfg.scopes.indexOf("menu") + 1)
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
