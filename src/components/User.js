import { useState, useEffect } from "react";

const User = ({name}) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);
    useEffect( ()=> {
        const timer = setInterval( () => {
            console.log("Namaste React OP");
        }, 1000);

        return () => {
            clearInterval(timer);
        };

    }, []);

    return (
        <div className="user-card">
            <h2>Count1 = {count}</h2>
            <h2>Count2 = {count2}</h2>
            <h2>Name: {name}</h2>
            <h3>Loc: Aligarh</h3>
            <h4>Contact: @mrkakkar22</h4>
        </div>
    )
}
export default User;
