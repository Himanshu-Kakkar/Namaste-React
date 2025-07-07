import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating, costForTwo, cuisines} = resData?.info;
    const {deliveryTime} = resData.info.sla;

    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0",}}>
            {
            // outer {...} means you are going to write JS inside JSX
            // inner {...} the actusl JS object 
            }
            {/* style={styleCard} */}
            
            <img 
                className="res-logo"
                alt="res-logo" 
                src={CDN_URL+cloudinaryImageId}></img>

            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>{costForTwo}</h4>

        </div>
    )
}

export default RestaurantCard;