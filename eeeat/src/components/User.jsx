import {useState} from "react";

const User = () => {
    const [count,setCount] = useState(0);

    return (
        <div className="user-container">
            <button onClick={() => setCount(count + 1)}>click count: {count}</button>
            <h2>Name: Hisham Dulfacker</h2>
            <h3>Occupation: Software Developer</h3>
            <h4>Location: Calicut</h4>
        </div>
    )
}

export default User;