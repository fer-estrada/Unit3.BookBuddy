const APIUrl = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api'

export default async function fetchAllBooks() {
    const response = await fetch(APIUrl + '/books')
    const result = await response.json();
    return result
}