import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center mt-40" >
            <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box" >
                <label className="fieldset=label" >First Name:</label>
                <input type="text" className="input" placeholder="John" />

                <label className="fieldset=label" >Last Name:</label>
                <input type="text" className="input" placeholder="Doe" />

                <label className="fieldset=label" >E-mail:</label>
                <input type="email" className="input" placeholder="example@fullstack.com" />

                <label className="fieldset=label" >Password:</label>
                <input type="password" className="input" placeholder="Password" />

                <label className="fieldset=label" >Re-enter password:</label>
                <input type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Sign Up</button>
            </fieldset>
        </div>
    );
}
 
export default SignUp;

