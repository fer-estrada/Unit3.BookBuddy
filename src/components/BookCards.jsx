import fetchAllBooks from "../api/API";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BookCards = () => {
    const [books, setBooks] = useState([])
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    
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
        <div className="flex flex-row flex-wrap justify-around items-center gap-5">
            {books.map((book) => 
                <div key={book.id} className="card bg-base-100 shadow-sm mt-10 h-[600px] w-96">
                <figure>
                    <img className="h-90"
                    src={book.coverimage}
                    alt={`Image of ${book.title}`} />
                </figure>
                <div className="card-body flex-col items-center justify-center">
                    <h2 className="card-title">{book.title}</h2>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary mt-2" onClick={() => navigate('/')} >See more details?</button>
                    </div>
                </div>
                </div>
            )}
        </div>
    );
}

export default BookCards;
