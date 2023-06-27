function functionName() {

};

const functionName = () => {};

const myself = {
    name: "Linda",
    age: 10
}

delete myself.age;

myself.gender = "female";

function count(a, b) {
    return a + b;
};

function myFunction(func) {
    return func();
}

myFunction(() => console.log);

function counting(a) {
    if (typeof a === 'string') {
    return a.length;
    }
    return "Not a string";
}