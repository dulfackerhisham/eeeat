import User from "./User.jsx"
import UserClass from "../class/UserClass.jsx";

const About = () => {
    return (
    <div>
        <h1>About us</h1>
        <p>this is about us page</p>
        <User name={"izaan (function based)"}/>
        <UserClass name={"jacky (class based)"} location={"india,kerala"}/>
    </div>
    );
};

export default About