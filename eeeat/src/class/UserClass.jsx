import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props)

        // console.log(props);

        this.state = {
            userInfo: {}
        };
        console.log(this.props.name + "constructor");
    }

    async componentDidMount() {
        console.log(this.props.name,"didMount");

        const data = await fetch("https://api.github.com/users/dulfackerhisham");
        const json = await data.json();

        // console.log(json);

        this.setState({
            userInfo: json
        })

    }

    componentDidUpdate() {
        console.log(this.props.name,"componentDidUpdate Is called");
    }

    componentWillUnmount() {
        console.log(this.props.name ,"componentWIllUnmount");
    }

    render () {
        console.log(this.props.name ,"render");
        const {id, name, avatar_url, created_at} = this.state.userInfo;

        return (
            <div className="user-container">
            {/* {console.log("child return")} */}

                <img src={avatar_url}/>
                <h3>{id}</h3>
                <h1>{name}</h1>
                <p>{created_at}</p>
            <h3>Occupation: Software Engineer</h3>
        </div>
        )
    }
}

export default UserClass;