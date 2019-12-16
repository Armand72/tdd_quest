class Rectangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  isSquare() {
    if (this.a === this.b) {
      return false;
    } else {
      return true;
    }
  }

  getArea() {
    return this.a * this.b;
  }

  getPerimeter() {
    return 2 * (this.a + this.b);
  }
}

module.exports = Rectangle;
