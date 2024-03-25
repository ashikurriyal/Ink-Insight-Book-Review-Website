import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-4xl">Oops!!!</h2>
            <button className="btn"><Link to="/">Go back to Home</Link></button>
        </div>
    );
};

export default ErrorPage;