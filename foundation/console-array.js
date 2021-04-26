//Bai tap 1: 
const initialObj = {
    id: 1,
    name: "tri"
}

//  Vui long in ra 1 array chua’ 10 cai object nhu tren. Lay index cua array lam` id trong object.

// Start EXE

let array = [];
function idArray(numberOfObj) {
    for (let i = 0; i < numberOfObj; i++) {
        const Obj = {
            id: i,
            name: "tri"
        };
        array.push(Obj);
    }
    return array;
}

console.log(idArray(10));


//End EXE