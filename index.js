class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() { return this.radius * 2 };
    get circumference() {return this.diameter * Math.PI };
    get area() {return Math.PI * this.radius * this.radius }

    set diameter(updateRadius) {
        if (updateRadius > 0) {
            this.radius = updateRadius / 2
        } else {
            return "Radius cannot be less than 0";
        }
    };

    set circumference(updateRadius) {
        if (updateRadius > 0) {
            this.radius = updateRadius / 2 / Math.PI
        } else {
            return "Radius cannot be less than 0";
        }
    };

    set area(updateRadius) {
        if (updateRadius > 0) {
            this.radius = updateRadius / (Math.PI * Math.sqrt(this.diameter /2 ))
        } else {
            return "Radius cannot be less than 0";
        }
    };



};