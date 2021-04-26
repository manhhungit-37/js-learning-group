// nhân tất cả các thuộc tính số của obj với 2.
// Input: 
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu cafedev"
// };

// output:
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu afedev"
// };

//Start EXE

let menu = {
    width: 200,
    height: 300,
    title: "My menu cafedev"
};

function duplicated(obj) {
    for (let key in obj) {
        if ((typeof obj[key]) == "number" && !isNaN(obj[key])) {
            obj[key] = obj[key] * 2;
        }
    }
    return obj;
}

console.log(duplicated(menu));


//End EXE