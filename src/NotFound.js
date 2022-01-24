import { Link } from "react-router-dom";


const NotFound  = () => {
    return (  
        <div>
            <h2>Sorry</h2>
        <p>The Page cannot be found</p>
        <Link to="/">Back to the homepage....</Link>
        </div>
    );
}

export default NotFound ;