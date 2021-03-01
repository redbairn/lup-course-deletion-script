pm.test("Set Module ID", function () {
    var jsonData = pm.response.json();
    var modules = jsonData.modules;
    // console.log(modules);
    console.log("The modules to delete are: ");

    for(var i in modules){
        var key = i;
        var val = modules[i];
        var module_id = JSON.stringify(val["id"]);
        
        console.log("Module "+i+"= " + module_id );
        pm.environment.set("module_id", module_id);
    }
});
