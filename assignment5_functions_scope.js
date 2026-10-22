// Standard Function
function rectangleArea(length = 5, width = 4) {
    return length * width;
}

console.log(
    "Standard Function Area (Default 5x4):",
    rectangleArea()
);


// Arrow Function
const calculateArea = (length, width) => {
    return length * width;
};

console.log(
    "Arrow Function Area (Custom 10x3):",
    calculateArea(10, 3)
);


// Scope demonstration

function scopeTest() {

    let functionVar = "I am inside function";

    if (true) {
        let blockVar = "I am inside block";
        console.log(blockVar);
    }

    console.log(functionVar);

    try {
        console.log(blockVar);
    } catch (error) {
        console.log(
            "Scope Test Error:",
            error.toString()
        );
    }
}

scopeTest();