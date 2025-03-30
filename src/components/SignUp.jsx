import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../api/API";

const SignUp = () => {
    const navigate = useNavigate()
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSignUp = async (e) => {
        e.preventDefault()
        
        if (password !== confirmPassword) {
            return;
        }

        try {
            const result = await register({ firstname, lastname, email, password })
            if (result.token) {
                localStorage.setItem('token', result.token)
                navigate('/accountview')
            }
        } catch (error) {
            console.error('Registration failed:', error.message)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center mt-20" >
            <form onSubmit={(e) => handleSignUp(e)}>
                <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box" >
                    <label className="fieldset=label" >First Name:</label>
                    <input type="text" className="input" placeholder="John" value={firstname} onChange={(e) => setFirstName(e.target.value)} />

                    <label className="fieldset=label" >Last Name:</label>
                    <input type="text" className="input" placeholder="Doe" value={lastname} onChange={(e) => setLastName(e.target.value)} />

                    <label className="fieldset=label" >E-mail:</label>
                    <input type="email" className="input" placeholder="example@fullstack.com" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label className="fieldset=label" >Password:</label>
                    <input type="password" className="input" placeholder="P@ssword!1" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <label className="fieldset=label" >Re-enter password:</label>
                    <input type="password" className="input" placeholder="P@ssword!1" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    {password !== confirmPassword && <p className="text-error">Passwords do not match</p>}

                    <button className="btn btn-neutral mt-4">Sign Up</button>
                </fieldset>
            </form>

            <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box mt-5" >
                <label className="fieldset-label justify-center text-center" >Already have an account?</label>
                <button className="btn btn-neutral mt-2" onClick={() => navigate('/')}>Log In</button>
            </fieldset>
        </div>
    );
}

export default SignUp;

