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

// Rhombus Area Calculation 
function rhombusArea() {
    const d1 = getInputValue('rhombus-d1');
    const d2 = getInputValue("rhombus-d2");
    const area = 0.5 * d1 * d2;
    if (d1 && d2) {
        setElementText('rhombus-area', area);
    }
    return;
}

// Pentagon Area Calculation 
function pentagonArea() {
    const p = getInputValue('pentagon-p');
    const b = getInputValue("pentagon-b");
    const area = 0.5 * p * b;
    if (p && b) {
        setElementText('pentagon-area', area);
    }
    return;
}

// Ellipse Area Calculation 
function ellipseArea() {
    const ellipseLarger = getInputValue('ellipse-larger');
    const ellipseSmaller = getInputValue("ellipse-smaller");
    const areaLargeNumber = Math.PI * ellipseLarger * ellipseSmaller;
    const area =  areaLargeNumber.toFixed(2);
    if (ellipseLarger && ellipseSmaller) {
        setElementText('ellipse-area', area);
    }
    return;
}