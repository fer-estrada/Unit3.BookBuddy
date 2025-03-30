import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchBook, fetchReservations, reserveBook, returnBook } from "../api/API";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const SingleBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [reservations, setReservations] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleReserve = async () => {
        try {
            await reserveBook(token, id)
            navigate('/homeview')
        } catch (error) {
            setError(error)
        }
    }

    const handleReturn = async () => {
        const id = reservations.find(reservation => reservation.bookid === book.id).id
        await returnBook(token, id)
        navigate('/homeview')
    }

    useEffect(() => {
        async function setData() {
            try {
                let bookData = await fetchBook(id);
                let reservationsData = await fetchReservations(token);
                setBook(bookData)
                setReservations(reservationsData)
            } catch (error) {
                setError(error)
            }
        }
        setData()
    }, [id, token])

    const isReserved = reservations?.some(reservation => reservation.bookid === book.id);

    return (
        <>
            {error && <div className="alert alert-error">{error.message}</div>}
            <div>
                <Navbar />
            </div>
            {book && (
                <div key={book.id} className="card bg-base-100 shadow-sm mt-10 min-h-[500px] max-w-[500px] ml-auto mr-auto">
                    <figure>
                        <img className="h-100"
                        src={book.coverimage}
                        alt={`Image of ${book.title}`} />
                </figure>
                <div className="card-body flex-col items-center justify-center">
                    <h2 className="card-title">{book.title}</h2>
                    <p>{book.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary mt-2" onClick={() => navigate('/homeview')} >Go back</button>
                        {book.available ?
                        <button className="btn btn-primary mt-2" onClick={handleReserve} >Reserve book</button>
                        : isReserved ?
                        <button className="btn btn-primary mt-2" onClick={handleReturn} >Return book</button>
                        :
                        <button className="btn btn-disabled mt-2">Book not available</button>}
                    </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SingleBook;