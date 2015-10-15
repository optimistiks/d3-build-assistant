let startup = () => {
  _setBrowserPolicies();
  _generateAccounts();
  _generateSlots();
  _generateItemProps();
};

var _setBrowserPolicies = () => {
  if (process.env.NODE_ENV === 'development') {
    BrowserPolicy.content.allowOriginForAll("localhost:*");
    BrowserPolicy.content.allowConnectOrigin("ws://localhost");
    BrowserPolicy.content.allowConnectOrigin("http://localhost");
    BrowserPolicy.framing.allowAll();
  }
};

var _generateAccounts = () => Modules.server.generateAccounts();
var _generateSlots = () => Modules.server.generateSlots();
var _generateItemProps = () => Modules.server.generateItemProps();

Modules.server.startup = startup;
