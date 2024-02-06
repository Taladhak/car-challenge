let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); // "Beep."


// Created a class for vehicle
class Vehicle{  

   constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
   }
// Added a method to return the noise type of noise cars make
   honk(){
    return "beep.";
   }

   toString(){
    return `The vehicle is a ${make}, ${model} from ${year}. `
   }

}


// Added a new class to classsify as car with a value of 4 as the number of wheels
class Car extends Vehicle{

    constructor(make, model, year, numWheels){

        super(make,model,year);
        this.numWheels = 4;
    }

    toString(){
        return super.toString() +
        `The car has ${numWheels} wheels`
    }
}

// Added motorcycle class with value change in number of wheels set to 2
class Motorcycle extends Vehicle{

    constructor(make, model, year, numWheels){

        super(make,model,year);
        this.numWheels = 2;
    }

    revEngine(){
        return "VROOM!!!"
    }

    toString(){
        return super.toString() +
        `The Motorcycle has ${numWheels} wheels`
    }
}


// New class for garage added
class Garage {
// Added garage properties
    constructor(capacity){

        this.vehicles = [];
        this.capacity = capacity;
    }
// added logic to add vehicle while keeping the capacity in mind
    add(newVeheicle){
        if(!(newVeheicle instanceof vehicle)){
            return " Only Vehic;es are allowed in here!";
        }

        if(this.vehicle.length >= this.capacity){
            return "Sorry, we're full.";
        }

        this.vehicle.push(newVeheicle);
        return "Vehicle has been added";
    }
}