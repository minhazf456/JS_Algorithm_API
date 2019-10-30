 var users = [{
         fname: "Kermit",
         lname: "the Frog",
         languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
         interests: {
             music: ["guitar", "flute"],
             dance: ["tap", "salsa"],
             television: ["Black Mirror", "Stranger Things"]
         }
     },
     {
         fname: "Winnie",
         lname: "the Pooh",
         languages: ["Python", "Swift", "Java"],
         interests: {
             food: ["honey", "honeycomb"],
             flowers: ["honeysuckle"],
             mysteries: ["Heffalumps"]
         }
     },
     {
         fname: "Arthur",
         lname: "Dent",
         languages: ["JavaScript", "HTML", "Go"],
         interests: {
             space: ["stars", "planets", "improbability"],
             home: ["tea", "yellow bulldozers"]
         }
     }
 ]
 for (user of users) {
     console.log(user.fname + user.lname + user.languages)
     var string = " "
     for (key in user.interests)
         string += user.interests[key];
     console.log(user.fname + " also interested in " + string)
 }