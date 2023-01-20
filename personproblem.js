//---------------------PERSON PROBLEM FRIDAY CHALLENGE-------------------
/* -------------------- INSTRUCTIONS --------------------
      1.Create a class for a person that has properties for the person's name, age, and address.
      2.The class should have a method that takes a string as an argument and returns the person's name and
       address concatenated together.
      3.Use type annotations for the properties and method, and make sure to catch any errors that may occur
      when calling the method. */
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name, this.age = age, this.address = address;
    }
    Person.prototype.getNameAddress = function () {
        try {
            return "".concat(this.name, " address is: ").concat(this.address);
        }
        catch (error) {
            return "There was an error. Try again";
        }
    };
    return Person;
}());
var Person1 = new Person("Veronica Diaz", 23, "71 NW. Marshall Ave. Rochester, NY 14606");
console.log(Person1.getNameAddress());
