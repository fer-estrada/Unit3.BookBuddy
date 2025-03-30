import fetchAllBooks from "../api/API";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BookCards = () => {
    const [books, setBooks] = useState([])
    const [error, setError] = useState(null)
    const [searchParam, setSearchParam] = useState("")
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    const bookDisplay = searchParam ? books.filter(book => book.title.toLowerCase().includes(searchParam.toLowerCase())) : books
    
    useEffect(() => {
        async function setData() {
            try {
                let booksData = await fetchAllBooks();
                setBooks(booksData)
            } catch (error) {
                setError(error)
            }
        }
        setData()
    }, []);

    return (
        <>
            {error && <div className="alert alert-error">{error.message}</div>}
            <div className="flex justify-center mt-5">
                <input type="text" placeholder="Search by title..." className="input input-bordered w-full max-w-xs" onChange={(e) => setSearchParam(e.target.value.toLowerCase())} />
            </div>
            <div className="flex flex-row flex-wrap justify-around items-center gap-5">
                {bookDisplay.map((book) => 
                    <div key={book.id} className="card bg-base-100 shadow-sm mt-10 h-[500px] w-96">
                    <figure>
                        <img className="h-90"
                        src={book.coverimage}
                        alt={`Image of ${book.title}`} />
                    </figure>
                    <div className="card-body flex-col items-center justify-center">
                        <h2 className="card-title">{book.title}</h2>
                        <div className="card-actions justify-end">
                        {!token ? 
                        <button className="btn btn-primary mt-2" onClick={() => navigate('/')} >Want to see more?</button>
                        : 
                        <button className="btn btn-primary mt-2" onClick={() => navigate(`/books/${book.id}`)} >See details</button>}
                        </div>
                    </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default BookCards;
