interface Movable {
  move(): void;
}

class Car implements Movable {
  move() {
    console.log("car");
  }
}

class Robot implements Movable {
  move() {
    console.log("robot");
  }
}
