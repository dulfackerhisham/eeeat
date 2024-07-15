import { useContext } from "react"
import UserContext from "../utils/Usercontext"


const Contact = () => {

    const {loggedInUser} = useContext(UserContext);

    return (
        <div className="text-center mt-20 p-8 bg-orange-300 rounded-2xl shadow-md">
            <h1>Contact Us</h1>
            <p>This is Contact Us Page</p>
            <h3 className="font-bold">Current User: {loggedInUser}</h3>
        </div>
    )
}

export default Contact