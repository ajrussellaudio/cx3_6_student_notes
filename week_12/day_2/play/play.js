use farm;
db.animals.insert({
  name: "Eric",
  type: "polar bear"
});
db.animals.insert({
  name: "Alan",
  type: "panda"
});

print("*** FINDING ***");
db.animals.find({name: "Alan"});

print("*** UPDATING ***");
db.animals.update(
  { name: "Eric" }, // find this
  { // change it to this
    $set: {
      type: "goose"
    }
  } 
);

db.animals.find();

print("*** REMOVING ***");
db.animals.remove({
  name: "Eric"
});

db.animals.find();

db.dropDatabase();