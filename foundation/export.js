//Using fetch to get data from json server
async function httpGet(url) {
    try {
        const res = await fetch(url).then(res => res.json());
        return res;
    } catch (error) {
        console.log(error);
    }
}

// Wait until the http function finishes running, it returns the results
export async function getData(url) {
    const res = await httpGet(url).then(res => res);
    return res;
}

