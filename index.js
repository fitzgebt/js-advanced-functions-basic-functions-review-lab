// Your code here
function saturdayFun (arg="roller-skate") {
    return "This Saturday, I want to " + arg + "!"
};

function mondayWork(arg="go to the office") {
    return "This Monday, I will " + arg +"."
};

function wrapAdjective(flair="*") {
    return function innerFunction(arg="special") {
        return "You are " + flair + arg + flair + "!"
    }
};

let Calculator = {}
Calculator.add = (
    function(arg1, arg2) {
        return arg1 + arg2
    }
);
Calculator.subtract = (
    function(arg1, arg2) {
        return arg1 - arg2
    }
);
Calculator.multiply = (
    function(arg1, arg2) {
        return arg1 * arg2
    }
);
Calculator.divide = (
    function(arg1, arg2) {
        return arg1 / arg2
    }
);

function actionApplyer(int, fnArr) {
    for (let i = 0; i < fnArr.length; i++) {
        int = fnArr[i](int)
    }
    return int
};