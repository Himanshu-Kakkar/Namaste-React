import { userInfo } from "os";
import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "unknown",
            },
        }
    }

    async componentDidMount() {

        this.timer = setInterval( () => {
            console.log("Namaste React OP");
        }, 1000);

        console.log("compo did mount");
        // API Call
        const data = await fetch("https://api.github.com/users/Himanshu-Kakkar");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
    }

    componentDidUpdate() {
        console.log("Compo did update");
    };

    componentWillMount() {
        console.log("Compo will mount");
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("COmponent will unmonunt");
    }
    render() {
        // const {location} = this.props;
        // const {count, count2} = this.state;
        const {name, location, avatar_url} = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Loc: {location}</h3>
                <h4>Contact: @mrkakkar22</h4>
            </div>
        )
    }
}

export default UserClass;



// UserClass.js
// Learn state Variables

// import React from "react";

// class UserClass extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count:0,
//             count2:1,
//         };
//     }
//     ComponentDidMount() {
//         console.log(this.props.name + "Compo Did Mount");
//         // API Call
//     }
//     render() {
//         const {location} = this.props;
//         const {count, count2} = this.state;
//         return (
//             <div className="user-card">
//                 <button
//                     onClick={() => {
//                         // Never ever directly update the count

//                         this.setState({
//                             count: this.state.count+1,
//                             count2: this.state.count2+2,
//                         });
//                     }}
//                 >
//                     Count Increase
//                 </button>
//                 <h2>Count1 = {this.state.count}</h2>
//                 <h2>Count2 = {count2}</h2>
//                 <h2>Name: {this.props.name}</h2>
//                 <h3>Loc: {location}</h3>
//                 <h4>Contact: @mrkakkar22</h4>
//             </div>
//         )
//     }
// }

// export default UserClass;