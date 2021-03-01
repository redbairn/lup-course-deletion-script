pm.test("Set Course ID", function () {
    var jsonData = pm.response.json();
    var courses = jsonData.courses;
    //console.log(jsonData.courses);

    for(var i in courses){
        var key = i;
        var val = courses[i];
        var course_id = JSON.stringify(val["id"]);
        console.log("Course "+i+"= " + course_id );
        pm.environment.set("course_id", course_id);
    }


});
