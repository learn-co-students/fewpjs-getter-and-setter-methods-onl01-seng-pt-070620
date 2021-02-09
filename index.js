// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(diameter) {
        return this.radius = diameter / 2
    }

    get area() {
        return this.radius**2 * Math.PI
    }

      get circumference() {
          return this.diameter * Math.PI

      }

      set circumference(circumference) {
        return this.diameter = circumference / Math.PI

    }


}