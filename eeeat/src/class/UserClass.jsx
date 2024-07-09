import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props)

        console.log(props);
    }

    render () {
        const {name, location} = this.props;
        return (
            <div className="user-container">
            <h2>Name: {name}</h2>
            <h3>Occupation: Software Engineer</h3>
            <h4>Location: {location}</h4>
        </div>
        )
    }
}

export default UserClass