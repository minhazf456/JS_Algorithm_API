// Challenge 1
// Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.
var students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

  for (var student in students) {
    console.log(student);
    console.log('Name: ' + students[student].name + ', Cohort: ' + students[student].cohort);
  }
}
printnames();  

// 2nd solution

function names(){
    let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
    ];
    for(i of students){
        // console.log(i)
        console.log("Name: "+ i["name"]+" , cohort: "+ i["cohort"])
    }
}
  


// Challenge 2
// Write a function that accepts an object of users divided into employees and managers, and display the number of characters per employee/manager's name, as shown below, and logs the information to the console.

var users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };



function printUsers(users) {
    var count = 0;

    console.log('EMPLOYEES')
    for (var employee of users.employees) {
        emp_Len = employee.first_name.length + employee.last_name.length 
        emp_Str = count + " - " + employee.last_name + ", " + employee.first_name + " -"
        console.log(emp_Str.toUpperCase(), emp_Len);
        count++
    }
    console.log('MANAGERS')
    for (var manager of users.managers) {
        mgr_Len = manager.first_name.length + manager.last_name.length 
        mgr_Str = count + " - " + manager.last_name + ", " + manager.first_name + " -"
        console.log(mgr_Str.toUpperCase(), mgr_Len);
        count++
    }
}

printUsers(users);