// let a = { name: 'hung', age: 10};
// let b = {...a, age: 12};
// console.log(b);

// const arr = [1, 3, 4, 7];
// function add(x, y) // here receive parameter x, y
//   {
//      return x + y; // return addition of x and y
//   }
// const result = add(...arr); // i.e spread syntax automatically assign the values
// console.log(result); // Output 4

// const result2 = arr.reduce((acc, curr) => acc + curr); 
// console.log(result2);

// const obj = {a:1,b:2,c:{d:3}};
// const shallowClone = {...obj};
// console.log(shallowClone);
// obj.c.d = 34; // chúng ta thay đổi giá trị d của object gốc
// console.log(obj); // kết quả cho chúng ta thấy {a:1,b:2,c:{d:34}} 
// console.log(shallowClone);

// const deepClone = JSON.parse(JSON.stringify(obj));
// obj.c.d = 34;
// console.log(obj);
// console.log(deepClone);

// const deep = JSON.stringify({
//       a: new Date(),
//       b: NaN,
//       c: new Function(),
//       d: undefined,
//       e: function() {},
//       f: Number,
//       g: false,
//       h: Infinity
//     })

//   console.log(deep);

// var new_arr  = ['a', 'b', 'c', 'd'];
// var new_arr2 = new_arr;
// new_arr2.push('e');

// console.log(new_arr);//  ["a", "b", "c", "d", "e"]
// console.log(new_arr2);// ["a", "b", "c", "d", "e"]

// var new_arr  = ['a', 'b', 'c', 'd'];
// var new_arr2 = [...new_arr];
// new_arr2.push('e');
// console.log(new_arr);  // Output 'a', 'b', 'c', 'd'
// console.log(new_arr2); // Output 'a', 'b', 'c', 'd', 'e'

const obj = {
    name: 'hung',
    gender: 'male',
    age: 23,
    class: '12c4',
}
const obj2 = { ...obj, age: 11 };
obj.age = 323;
console.log(obj);
console.log(obj2);

function sum(...numbers) {
    return numbers.reduce((sum, val) => {
        return sum += val;
    });
}

var result = sum(3, 5, 7);
console.log(result);

function myFunc(...args) {
    const result = args.reduce((acc, curr) => acc + curr);
    return result;
};
console.log(myFunc(22, 98, 43, 3, 26));

function myFunc2(...[x, y, z]) {
    return x * y * z;
}

console.log(myFunc2(1, 3, 3, 4, 5, 6, 7, 8));

function myFunc3(x, y, ...params) { // used rest operator here
    console.log(x);
    console.log(y);
    console.log(params);
}

var inputs = ["a", "b", "c", "d", "e", "f"];
myFunc3(...inputs); // used spread operator here

const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

const pizzas = [...featured, 'veg pizza', ...specialty];
console.log(pizzas);

name = "hgsdf";
console.log(name);