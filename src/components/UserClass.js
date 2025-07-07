import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0,
            count2:1,
        };
    }
    render() {
        const {location} = this.props;
        const {count, count2} = this.state;
        return (
            <div className="user-card">
                <button
                    onClick={() => {
                        // Never ever directly update the count

                        this.setState({
                            count: this.state.count+1,
                            count2: this.state.count2+2,
                        });
                    }}
                >
                    Count Increase
                </button>
                <h2>Count1 = {this.state.count}</h2>
                <h2>Count2 = {count2}</h2>
                <h2>Name: {this.props.name}</h2>
                <h3>Loc: {location}</h3>
                <h4>Contact: @mrkakkar22</h4>
            </div>
        )
    }
}

export default UserClass;