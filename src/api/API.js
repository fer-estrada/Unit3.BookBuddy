const APIUrl = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api'

const endpoint = {
    register: "/users/register",
    login: "/users/login",
    account: "/users/me",
    books: "/books",
    reservations: "/reservations",
}

export async function register(registerData, token) {
  try {
    const response = await fetch(APIUrl + endpoint.register, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(registerData),
    });
    const data = await response.json();

    if (data.token) {
      localStorage.setItem('token', data.token);
    }

    if (!response.ok) {
      throw new Error(`Registration failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
}

export async function login(loginData, token) {
  try {
    const response = await fetch(APIUrl + endpoint.login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      throw new Error(`Login failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

export async function fetchAccountDetails(token) {
  try {
    const response = await fetch(APIUrl + endpoint.account, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch account details: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Account details error:", error);
    throw error;
  }
}

export default async function fetchAllBooks() {
  try {
    const response = await fetch(APIUrl + endpoint.books);

    if (!response.ok) {
      throw new Error(`Failed to fetch books: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch books error:", error);
    throw error;
  }
}

export async function fetchBook(id) {
  try {
    const response = await fetch(APIUrl + `/books/${id}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch book: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch book error:", error);
    throw error;
  }
}

export async function fetchReservations(token) {
  try {
    const response = await fetch(APIUrl + endpoint.reservations, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch reservations: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch reservations error:", error);
    throw error;
  }
}

export async function reserveBook(token, reservationData) {
  try {
    const response = await fetch(APIUrl + "/reservations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservationData),
    });

    if (!response.ok) {
      throw new Error(`Failed to reserve book: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Reserve book error:", error);
    throw error;
  }
}

export async function returnBook(token, returnData) {
  try {
    const response = await fetch(APIUrl + "/returns", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(returnData),
    });

    if (!response.ok) {
      throw new Error(`Failed to return book: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Return book error:", error);
    throw error;
  }
}