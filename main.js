//Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.

function recArea(width, height) {
    let area = width * height;

    if(area <= 0) {
        return -1;
    } 
    else {
        return area;
    }
}
console.log(recArea(3, 4));
console.log(recArea(10, 11));
console.log(recArea(-1, 5));
console.log(recArea(0, 2));