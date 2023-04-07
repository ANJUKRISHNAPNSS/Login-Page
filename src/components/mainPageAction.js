export const getList = () => {
    let data = {
        category: "movies",
        language: "kannada", genre: "all",
        sort: "voting"
    }
    return (dispatch) => {
        fetch('https://hoblist.com/api/movieList', {
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => response.json())//to see as object
            .then(response => dispatch({
                type: 'SET_PROJECT_DATA',
                payload: response
            }))
    }
}