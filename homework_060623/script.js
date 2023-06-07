//Write 3 functions.All functions should return the value.
//First function: If statements

function testGreaterThan(val) {
    if (val < 100) {
      return "Over 100";
    }
  }

//Second function: Function takes at least 3 arguments.

function personalData(name, age, hobby) {
    console.log(name, age, hobby);
  }
  
  const name = "Linda";
  const age = 24;
  const hobby = "hiking";
  
  personalData("Linda", 36, "hiking");

//Third function: Use Object key & value pairs in it

const myData = {
    name: "Linda",
    age: 24,
    hobby: "hiking",
}

function findData(obj, key) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop) && prop === key) {
          return obj[prop];
        }
      }
      return undefined;
    };

findData(myData, 'age');

