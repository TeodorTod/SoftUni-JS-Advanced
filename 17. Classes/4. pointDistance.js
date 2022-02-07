class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(firstPoint, secondPoint) {
        let a = firstPoint.x - secondPoint.y;
        let b = firstPoint.y - secondPoint.x;

        let distance = Math.hypot(a ** 2 + b ** 2);
    
        return distance;

    }
}