use codeclan;

db.students.insert([
{
  name: "John",
  favouriteFood: "pork pie and pesto"
},
{
  name: "Robbie",
  favouriteFood: "battered haggis and pesto"
}
]);

db.instructors.insert([
{
  name: "Val",
  favouriteFood: "cheese toastie"
},
{
  name: "Zsolt",
  favouriteFood: "beer"
}
])

show collections;

db.dropDatabase();