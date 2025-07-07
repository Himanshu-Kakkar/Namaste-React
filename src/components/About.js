import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="about">
                <h1>About</h1>
                <h2>This is About page...</h2>
                {/* <User name={"Himanshu Kakkar"}/> */}
                <User name={"Himanshu Kakkarrr"} location={"UP-81"}/>
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div className="about">
//             <h1>About</h1>
//             <h2>This is About page...</h2>
//             {/* <User name={"Himanshu Kakkar"}/> */}
//             <UserClass name={"Himanshu Kakkarrr"} location={"UP-81"}/>
//         </div>
//     )
// }

export default About;