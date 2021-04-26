// global.name = "Peter";
// var Hocsinh = {
//     name: "John",
//     printName: function() {
//         console.log(this.name);
//     }
// };

// //Lệnh gọi đầu tiên
// var printHocsinhName = Hocsinh.printName;
// printHocsinhName();                          // Peter
 
// //Lệnh gọi thứ 2
// Hocsinh.printName(); 

//Định nghĩa 1 đối tượng với phương thức hiển thị thuộc tính ra màn hình
// var Hocsinh = {
//     name: "John",
//     printName: function(){
//        console.log(this.name);
//     }
// };

//Bắt sự kiện click chuột lên button, sẽ thực thi hàm hiển thị tên của Hocsinh lên màn hình

const button = document.getElementById("btn");
var Hocsinh = {
    name: "JOHN",
    printName: function() {
        console.log(this.name);
    }
};
console.log(Hocsinh);
Hocsinh.printName();

button.addEventListener('click', Hocsinh.printName.bind(Hocsinh));//Định nghĩa 1 đối tượng với phương thức hiển thị thuộc tính ra màn hình
