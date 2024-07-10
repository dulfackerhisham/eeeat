// import User from "./User.jsx"
import { Component } from "react";
import UserClass from "../class/UserClass.jsx";


class About extends Component {

    constructor(props) {
        super(props);

        console.log("parent constructor");
    }

    componentDidMount() {
        console.log("parent didMount");
    }

    componentDidUpdate() {
        console.log("Parent componentDidUpdate Is called");
    }

    componentWillUnmount() {
        console.log("Parent componentWIllUnmount");
    }

    render() {
        console.log("parent render");
        return(

            <div>
                {console.log("parent return")}
                <h1>About us</h1>
                <p>this is about us page</p>
                {/* <User name={"izaan (function based)"}/> */}
                <UserClass name={"first child"} location={"calicut"}/>
            </div>
        )
    }
}

export default About;