let startup = () => {
  _setBrowserPolicies();
  _generateAccounts();
  _generateSlots();
};

var _setBrowserPolicies = () => {};

var _generateAccounts = () => Modules.server.generateAccounts();
var _generateSlots = () => Modules.server.generateSlots();

Modules.server.startup = startup;
