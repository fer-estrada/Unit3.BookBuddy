import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center mt-40" >            
            <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">

            <label className="fieldset-label">E-mail</label>
            <input type="email" className="input" placeholder="example@fullstack.com" />

            <label className="fieldset-label">Password</label>
            <input type="password" className="input" placeholder="P@ssword!1" />
            
            <button className="btn btn-neutral mt-4">Log In</button>

            <label className="fieldset-label mt-2">
                <input type="checkbox" defaultChecked className="toggle" />
                Remember me
            </label>

            </fieldset>

            <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box mt-5" >

                <label className="fieldset-label justify-center text-center" >Don't have an account?</label>
                <button className="btn btn-neutral mt-2">Sign Up</button>

                <label className="fieldset-label justify-center text-center underline mt-2 cursor-pointer" onClick={() => navigate('/guestview')} >Continue as Guest</label>

            </fieldset>
        </div>
    );
}
 
export default LogIn;