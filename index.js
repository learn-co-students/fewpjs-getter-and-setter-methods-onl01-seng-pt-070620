// Add your Circle class here
class Circle {
  constructor(radius){
    this.radius = radius
  }

  get diameter() {
    return 2 * this.radius
  }

  get circumference() {
    return 2 * Math.PI * this.radius
  }

  get area() {
    return Math.PI * (this.radius ** 2)
  }

  set diameter(newDiam){
    this.radius = newDiam / 2
    return this.radius
  }

  set circumference(newCirc){
    this.radius = newCirc / (2 * Math.PI)  
  }
}
