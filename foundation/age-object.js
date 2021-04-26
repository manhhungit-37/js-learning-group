// BT :Nhom cac doi tuong theo gia tri age

//Start EXE

const people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];

// const result = people.reduce(function (acc, curr) {
//     if (acc[curr.age] == undefined) {
//         acc[curr.age] = [];
//         acc[curr.age].push(curr);
//         return acc;
//     }
//     acc[curr.age].push(curr);
//     return acc;
// }, {});

// console.log(result);

const arr = [
    {postId: 1, categoryId: 1}, 
    {postId: 2, categoryId: 2},
    {postId: 10, categoryId: 1},
    {postId: 1, categoryId: 2},
    {postId: 10, categoryId: 2}
  ];

const result = arr.reduce((acc, curr) => {
    if (acc[curr.postId] == undefined) {
        acc[curr.postId] = [];
        acc[curr.postId].push(curr);
        return acc;
    }
    acc[curr.postId].push(curr);
    return acc;
}, {})

console.log(result);
  
  
const arr = [
    {postId: 1, categoryId: 1}, 
    {postId: 2, categoryId: 2},
    {postId: 10, categoryId: 1},
    {postId: 1, categoryId: 2},
    {postId: 10, categoryId: 2}
  ];
  
  const res = Object.values(arr.reduce((a, { postId, categoryId }) => {
    a[postId] = a[postId] || { postId, categoryId: new Set() };
    a[postId].categoryId.add(categoryId);
    return a;
  }, {})).map(({ postId, categoryId }) => ({ postId, categoryId: [...categoryId]}));
  
  console.log(res)

// END EXE