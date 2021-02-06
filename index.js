// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    get circumference() {
        return Math.PI * (this.radius * 2);
    }

    set circumference(newCircumfrence) {
        this.radius = newCircumfrence / (Math.PI * 2);
    }

    get area() {
        return (this.radius ** 2) * Math.PI;
    }

}