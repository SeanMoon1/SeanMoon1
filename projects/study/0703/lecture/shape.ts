abstract class Shape {
  size: number;
  /*
  calculateArea(): number {
    return 1;
  }
    */
  abstract getAreaRectangle(width: number, height: number): number;
  abstract getAreaCircle(radius: number): number;
}

class Rectangle extends Shape {
  /*
  getArea(): number {
    throw Error("Unimplemented method");
  }
    */
  getAreaRectangle(width: number, height: number): number {
    return width * height;
  }
  getAreaCircle(): number {
    throw Error("Unimplemented method");
  }
}

class Circle extends Shape {
  getAreaCircle(radius: number): number {
    return radius * radius * Math.PI;
  }
  getAreaRectangle(): number {
    throw Error("Unimplemented method");
  }
}
