import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating, costForTwo, cuisines} = resData?.info;
    const {deliveryTime} = resData.info.sla;

    return (
        <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-[#f0f0f0] hover:bg-[#e2d1c3]" >
            {
            // style={{backgroundColor: "#f0f0f0",}}
            // outer {...} means you are going to write JS inside JSX
            // inner {...} the actusl JS object 
            }
            {/* style={styleCard} */}
            
            <img 
                className="res-logo rounded-lg"
                alt="res-logo" 
                src={CDN_URL+cloudinaryImageId}></img>

            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>{costForTwo}</h4>

        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 roundedlg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }

}
export default RestaurantCard;