/**
 * সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 
 */
/*
* Feet to Inch Conversion 
*/

function feetToInch(feet) {
    const one_feet = 12; // 1 feet = 12 inch
    return feet * 12;
}

const height = 5;
const inch = feetToInch(height);
console.log("Your Height in inch", inch);

/**
 * Feet to Meter Conversion 
 * 1 feet = 0.3048 meter 
 */
function feetToMeter(feet) {
    const one_feet = 0.3048; // 1 feet = 0.3048 meter
    if (typeof feet == 'number' && !isNaN(feet)) {
        let meter = feet * 0.3048;
            meter = meter.toFixed(3);
        if (meter == 1.000 || meter == 2.000) {
            return meter = Math.abs(meter);
        }
        return meter;
    } else {
        return `${feet} is not a number`;
    }
}

const heightInFeet = 5;
const meter = feetToMeter(heightInFeet);
console.log("Your Height in meter ", meter);


/**
 * Inch to feet Conversion
 * 1 feet = 12 inch;
 */


function inchToFeet(inch) {
    if (typeof inch == "number" && !isNaN(inch)) {
        let feet = inch / 12;
        if (Number.isInteger(feet)) {
            return feet;
        } else {
            return feet = feet.toFixed(2);
        }
    } else {
        return `${inch} is not a number`;;
    }
}

const heightInInch = 60;
console.log("Your height in feet", inchToFeet(heightInInch));
