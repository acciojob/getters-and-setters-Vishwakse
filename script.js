//complete this code
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for age (needed for testing output)
  get age() {
    return this._age;
  }

  // Setter for age
  set age(newAge) {
    this._age = newAge;
  }

  // (Optional but recommended) Setter for name
  set name(newName) {
    this._name = newName;
  }
}

// Student class (inherits Person)
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Teacher class (inherits Person)
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
