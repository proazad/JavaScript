// Triangle Area Calculation 
function triangleArea() {
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    area = .5 * base * height;
    if (base & height) {
        setElementText("traiangle-area", area);
    }
    return;
}

// Rectangle Area Calculation 
function rectangleArea() {
    const rectangleWidth = getInputValue('rectangle-width');
    const rectangleLength = getInputValue('rectangle-length');
    const area = rectangleWidth * rectangleLength;
    if (rectangleWidth && rectangleLength) {
        setElementText("rectangle-area", area);
    }
    return;
}


// Parallelogram Area Calculation 
function parallelogramArea() {
    const parallelogramBase = getInputValue("parallelogram-base");
    const parallelogramHeight = getInputValue("parallelogram-height");
    const area = parallelogramBase * parallelogramHeight;
    if (parallelogramBase && parallelogramHeight) {
        setElementText("parallelogram-area", area);
    }
    return;
}