

export default function get (url) {
    return fetch(url)
    .then((response) => {
        return response.json();    
    })
    .then((json) => {
        return json;
    })
    .catch((error) => {console.log(error)})
}
