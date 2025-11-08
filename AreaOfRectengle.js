// function AreaOfRectangle(length, width){
//     const area = length * width;
//     console.log("The area of Rectangle is : ", area);
// }

// AreaOfRectangle(6,9);
// AreaOfRectangle(12,12);
// AreaOfRectangle(0,9);
// AreaOfRectangle(-9,8);
// AreaOfRectangle(10,-6);



function AreaOfRectangle(length, width){
    if(length <= 0){
        throw new RangeError("Length should be a positive number");
    }
    if(width <= 0){
        throw new RangeError("Width should be a positive number");
    }
    const area = length * width;
    console.log("The area of Rectangle is : ", area);
}

AreaOfRectangle(6,9);
AreaOfRectangle(12,12);
// AreaOfRectangle(0,9);
// AreaOfRectangle(-9,8);
// AreaOfRectangle(10,-6);
AreaOfRectangle(344,244)