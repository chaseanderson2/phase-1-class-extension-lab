class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((acc, curr) => acc + curr, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        const [a, b, c,] = this.sides;
        return a + b > c && a + c > b && b + c > a;
    }

}

class Square extends Polygon {
    get isValid() {
      return this.sides.every(side => side === this.sides[0]);
    }
  
    get area() {
      return Math.pow(this.sides[0], 2);
    }
  }
  
const triangle = new Triangle([3, 4, 5]);
console.log(triangle.isValid); // true
console.log(triangle.countSides); // 3
console.log(triangle.perimeter); // 12
  
const square = new Square([4, 4, 4, 4]);
console.log(square.isValid); // true
console.log(square.countSides); // 4
console.log(square.perimeter); // 16
console.log(square.area); // 16
  