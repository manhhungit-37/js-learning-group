const url = 'https://jsonplaceholder.typicode.com/posts';


// fetch(url)
//     .then(res => res.json())
//     .then(res => console.log(res))

const getPosts = async () => {
    const response = await fetch(url);
    return response.json();
}

getPosts().then(res => console.log(res));