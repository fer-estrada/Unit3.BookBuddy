const APIUrl = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api'

export async function register(registerData) {
    const response = await fetch(APIUrl + '/users/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
        body: JSON.stringify(registerData),
    })
}

export async function login(loginData) {
    const response = await fetch(APIUrl + '/users/login', {
        method: 'POST',
        headers: {}
    })
}

export async function fetchAccountDetails(token) {
    
}

export default async function fetchAllBooks() {
    const response = await fetch(APIUrl + '/books')
    const result = await response.json();
    return result
}

export async function fetchBook(id) {
    
}

export async function fetchReservations(token) {
    
}

export async function reserveBook(token) {
    
}

export async function returnBook(token) {
    
}