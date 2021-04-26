// apply indexof, splice array

// cho 1 array tu 1 -> 10
// remove so 7 trong array do

// Start EXE

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const index = array.indexOf(7);
array.splice(index, 1);
console.log(array);

//End EXE

// Cho 1 array tu 1 -> 20
// Apply map: In ra 1 array moi co cac item * 7
// Apply filter: in ra 1 array có các số chia hết cho 2.


//Start EXE

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(array.map(item => item * 7));
console.log(array.filter(item => item % 2 == 0));

//End EXE

// Cho 1 array tu 1 -> 10
// Apply some:  tra ve item dau` tien % 2 === 0
// Apply every: kiem tra cac item trong array co chia het cho 2 hay ko.


//Start EXE

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function result(array) {
    for (let i of array) {
        if (i % 2 == 0)
            return i;
    }
    return false;
}
console.log(result(array));


//End EXE

// Cho 1 array tu 1 -> 10
// Apply some:  tra ve item dau` tien % 2 === 0
// Apply every: kiem tra cac item trong array co chia het cho 2 hay ko.
//  find:  cho 1 array 1 -> 10. Tim ra so chia het cho 2.
//  findIndex


//Start EXE

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const someArray = array.some(function (element, index) {
    return element % 2 == 0;
});
console.log(someArray);

const everyArray = array.every(function (element) {
    return element % 2 == 0;
})

console.log(everyArray);

const findArray = array.find(function (element) {
    return element % 2 == 0;
})

console.log(findArray);

const findIndexArray = array.findIndex(function (element) {
    return element % 2 == 0;
})

console.log(findIndexArray);

//END EXE