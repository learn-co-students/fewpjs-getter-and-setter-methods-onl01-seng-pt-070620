class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return (2 * this.radius) * Math.PI;
    }

    get area() {
        return Math.PI * (this.radius * this.radius);
    }

    set diameter(diameter) {
        let radius = diameter / 2;
        this.radius = radius;
    }

    set circumference(circumference) {
        let radius = circumference / (Math.PI * 2);
        this.radius = radius;
    }
}