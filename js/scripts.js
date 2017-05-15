function Agency () {
  this.adopted = [];
  this.available = [];
}

function Animal (name, img, age, breed, description, adopted) {
  this.name = name;
  this.img = img;
  this.age = age;
  this.breed = breed;
  this.description = description;
  this.adopted = adopted; //boolean
}

Agency.prototype.addAnimal = function(name, img, age, breed, description, adopted) {
  var animal = new Animal(name, img, age, breed, description, adopted);
  if (animal.adopted) {
    this.adopted.push(animal);
  } else {
    this.available.push(animal);
  }
}

Agency.prototype.build = function(agency, arrayOfAnimals) {
  arrayOfAnimals.forEach(function(element) {
    agency.addAnimal(element.name, element.img, element.age, element.breed, element.description, element.adopted);
  });
}

var seededAnimals = [
  {
    name: 'Juniper',
    img: 'img/sclksjdf.gif',
    age: 5,
    breed: 'manimal',
    description: 'fdsalkfdsaklhfjkadshfjkasdhfkjhadsjkfhf',
    adopted: false
  },
  {
    name: 'Cloe',
    img: 'img/sclksjdf.gif',
    age: 5,
    breed: 'butterphant',
    description: 'fdsalkfdsaklhfjkadshfjkasdhfkjhadsjkfhf',
    adopted: false
  },
  {
    name: 'Awesomesauce',
    img: 'img/sclksjdf.gif',
    age: 5,
    breed: 'manimal',
    description: 'fdsalkfdsaklhfjkadshfjkasdhfkjhadsjkfhf',
    adopted: true
  }
];

var agency = new Agency();
agency.build(agency, seededAnimals);
console.log(agency);
