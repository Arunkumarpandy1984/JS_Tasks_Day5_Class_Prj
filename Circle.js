class Circle {
  constructor(radius = 1, color = "red") {
    this.radius = radius;
    this.color = color;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  getArea() {
    // circle area = pie * r * r
    return 3.14159 * (this.radius * this.radius);
  }

  getCircumference() {
    // Circumference = 2 * pie * r
    return 2 * 3.14159 * this.radius;
  }

  toString(){
    return `Circle[radius=${this.radius}, color=${this.color}]`
  }
}

const circle = new Circle(5, "green");
console.log("Radius of the circle :", circle.getRadius());
console.log("Color of the circle :", circle.getColor());
console.log("Area of the circle :", circle.getArea());
console.log("Circumference of the circle :", circle.getCircumference());
console.log("Circle Object :", circle.toString());
