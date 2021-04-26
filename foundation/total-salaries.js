// Bai tap 2: tinh luong nhan vien:

// Input: Chúng ta có một đối tượng lưu trữ tiền lương của nhóm chúng ta:
// const salaries = {
//   tri: 200,
//   truong: 300,
//   minh: 1000
// }

// Output: Viết code để tính tổng tất cả các khoản lương và lưu trữ trong biến tổng.

//Start EXE

const salaries = {
    tri: 200,
    truong: 300,
    minh: 1000
};
function total(obj) {
    let S = 0;
    for (let key in obj) {
        S += obj[key];
    }
    return S;
}

console.log(total(salaries));

//End EXE