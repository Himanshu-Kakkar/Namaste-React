import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";


const RestaurentMenu = () => {

    const {resId} = useParams();
    // console.log(resId);
    // const [resInfo, setResInfo] = useState(null);

    // useEffect( () => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {

    //     const data = await fetch(MENU_URL + resId);
    //     const json = await data.json();

    //     console.log(json);
    //     setResInfo(json.data);
    // }
    const resInfo = useRestaurentMenu(resId);
    console.log(resInfo);
    if(resInfo === null) return <Shimmer/>

    const {name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[5].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>

            <h2>menu</h2>
            <ul>
             {itemCards ? (
              itemCards.map((item) => (
                <li key={item.card.info.id}>
                  {item.card.info.name} - {" Rs."}
                  {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                </li>
              ))
            ) : (
              <li>No menu available</li>
            )}

            </ul>
        </div>
    );
}

export default RestaurentMenu;