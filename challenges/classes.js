// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerTwo {
    constructor(cubeAttr) {
        this.length = cubeAttr.length;
        this.width = cubeAttr.width;
        this.height = cubeAttr.height;
  };
//   methods go here
  volume() {
    console.log(this.length * this.width * this.height);
  }

  surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  };
  };
  
  
  /* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
    
    Formula for cuboid volume: length * width * height
//   */
//   CuboidMaker.prototype.volume = function () {
//     console.log(this.length * this.width * this.height);
//   };
  
  /* == Step 3: Surface Area Method ==
    Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
  */
//   CuboidMaker.prototype.surfaceArea = function () {
//     console.log( 2 * (this.length * this.width + this.length * this.height + this.width * this.height));
//   };
  
  
  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  const  cuboidTwo = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidTwo.volume()); // 100
console.log(cuboidTwo.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.