import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../api/API";

const LogIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        const loginData = {
            email: email,
            password: password
        }
        const fetchToken = await login(loginData)
        localStorage.setItem('token', fetchToken.token)
        navigate('/homeview')
    }

    return (
        <div className="flex flex-col items-center justify-center mt-40" >            
            <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">

            <label className="fieldset-label">E-mail</label>
            <input type="email" className="input" placeholder="example@fullstack.com" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label className="fieldset-label">Password</label>
            <input type="password" className="input" placeholder="P@ssword!1" value={password} onChange={(e) => setPassword(e.target.value)} />
            
            <button className="btn btn-neutral mt-4" onClick={handleLogin} >Log In</button>

            </fieldset>

            <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box mt-5" >

                <label className="fieldset-label justify-center text-center" >Don't have an account?</label>
                <button className="btn btn-neutral mt-2" onClick={() => navigate('/signup')} >Sign Up</button>

                <label className="fieldset-label justify-center text-center underline mt-2 cursor-pointer" onClick={() => navigate('/homeview')} >Continue as Guest</label>

            </fieldset>
        </div>
    );
}
 
export default LogIn;