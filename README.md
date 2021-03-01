# lup-course-deletion-script
Course Deletion Script for courses in my LearnUpon portal

1. [Get a course id by using the name](https://github.com/redbairn/lup-course-deletion-script/blob/main/course_id.js) - GET `{{url}}`/api/v1/courses?name=The name of a course
3. [Get a module id for this course](https://github.com/redbairn/lup-course-deletion-script/blob/main/module_id.js) -  GET `{{url}}`/api/v1/modules?course_id=`{{course_id}}`
4. Delete the modules for this course -  POST `{{url}}`/api/v1/courses/remove_module
5. Delete the course using the course id provided earlier - DELETE `{{url}}`/api/v1/courses/`{{course_id}}`
