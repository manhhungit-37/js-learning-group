import { getData } from './export.js'

getData('https://jsonplaceholder.typicode.com/posts').then(res => console.log(res));