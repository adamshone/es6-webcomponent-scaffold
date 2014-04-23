System.register("../dog", [], function() {
  "use strict";
  var __moduleName = "../dog";
  var Dog = function Dog() {
    var name = arguments[0] !== (void 0) ? arguments[0] : 'Unnamed Dog';
    this.name = name;
  };
  ($traceurRuntime.createClass)(Dog, {bark: function() {
      console.log("Woof Woof! My name is " + this.name);
    }}, {});
  ;
  return {get Dog() {
      return Dog;
    }};
});
System.register("../app", [], function() {
  "use strict";
  var __moduleName = "../app";
  var Dog = $traceurRuntime.assertObject(System.get("../dog")).Dog;
  function main() {
    var dog = new Dog('Rex');
    dog.bark();
  }
  main();
  return {};
});
System.get("../app" + '');

//# sourceMappingURL=app.map
