import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { fetchAccountDetails } from "../api/API";
import { useNavigate } from "react-router-dom";

const Account = () => {
    const [account, setAccount] = useState(null)
    const [error, setError] = useState(null)
    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const logout = (e) => {
        e.preventDefault()
        if (input === "y") {
            localStorage.removeItem('token')
            navigate('/')
        } else if (input === "n") {
            navigate('/homeview')
        }
    }

    useEffect(() => {
        async function fetchAccount() {
            try {
                const token = localStorage.getItem('token')
                const account = await fetchAccountDetails(token)
                setAccount(account)
            } catch (error) {
                setError(error)
            }
        }
        fetchAccount()
    }, []);

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="flex flex-col items-center justify-center">
                {error && <div className="alert alert-error">{error.message}</div>}
                {account && (
                    <div className="mockup-code w-full">
                        <pre data-prefix="$" className="text-warning"><code>Loading Account Details...</code></pre>
                        <pre data-prefix=">"><code>{account.firstname} {account.lastname}</code></pre>
                        <pre data-prefix=">"><code>Account ID: {account.id}</code></pre>
                        <pre data-prefix=">"><code>{account.email}</code></pre>
                        <pre data-prefix=">"><code>Reservations: {account.reservations.length}</code></pre>
                        {account.reservations.length > 0 &&
                        <ul>
                            {account.reservations.map(reservation => (
                                <li key={reservation.id} className="cursor-pointer" onClick={() => navigate(`/books/${reservation.bookid}`)}><pre data-prefix="•"><code>{reservation.title}</code></pre></li>
                            ))}
                        </ul>}
                        <br />
                        <pre data-prefix="$"><code>Log out? (y/n)</code></pre>
                        <form onSubmit={(e) => logout(e)}><pre data-prefix=">"><code><input type="text" onChange={(e) => setInput(e.target.value)} /></code></pre></form>
                        {input === "y" ? (
                            <pre data-prefix=">"><code>Logging out...</code></pre>
                        ) : input === "n" ? (
                            <pre data-prefix=">"><code>Staying logged in...</code></pre>
                        ) : (
                            <></>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}

export default Account;