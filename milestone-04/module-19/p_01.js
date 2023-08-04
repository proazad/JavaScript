/**
 * Write a funciton called foot(); which prints "foo" and a function called bar(); which prints "bar". Call funciton bar in foo() function after printing. what will be the output ? Now Call foot foo() to see the output.
 */
function foo() {
    console.log("foo");
    bar();
}
function bar() {
    console.log("bar");
}
foo();