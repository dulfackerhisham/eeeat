import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props)

        console.log(props);
        this.state = {
            count: 0,
            count2: 2
        }
    }

    render () {
        const {name, location} = this.props;
        const {count, count2} = this.state

        return (
            <div className="user-container">
                <h1>{count}</h1>
                <h1>{count2}</h1>
            <button onClick={() => {
                this.setState({
                    count2: this.state.count2 + 1
                })
            }}>
                add Count</button>
            <h2>Name: {name}</h2>
            <h3>Occupation: Software Engineer</h3>
            <h4>Location: {location}</h4>
        </div>
        )
    }
}

export default UserClass