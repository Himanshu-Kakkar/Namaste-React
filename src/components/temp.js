//   return listOfRestaurants.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <div className="body">
//       <div className="filter flex">
//         <div className="search m-4 p-4">
//           <input
//             type="text"
//             data-testid="searchInput"
//             className="border border-solid border-black"
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//             }}
//           />
//           <button
//             className="px-4 py-2 bg-green-100 m-4 rounded-lg"
//             onClick={() => {
//               // Filter the restraunt cards and update the UI
//               // searchText
//               console.log(searchText);

//               const filteredRestaurant = listOfRestaurants.filter((res) =>
//                 res.info.name.toLowerCase().includes(searchText.toLowerCase())
//               );

//               setFilteredRestaurant(filteredRestaurant);
//             }}
//           >
//             Search
//           </button>
//         </div>
//         <div className="search m-4 p-4 flex items-center">
//           <button
//             className="px-4 py-2 bg-gray-100 rounded-lg"
//             onClick={() => {
//               const filteredList = listOfRestaurants.filter(
//                 (res) => res.info.avgRating > 4
//               );
//               setFilteredRestaurant(filteredList);
//             }}
//           >
//             Top Rated Restaurants
//           </button>
//         </div>

//         <div className="search m-4 p-4 flex items-center">
//           <label>UserName : </label>
//           <input
//             className="border border-black p-2"
//             value={loggedInUser}
//             onChange={(e) => setUserName(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="flex flex-wrap">
//         {filteredRestaurant.map((restaurant) => (
//           <Link
//             key={restaurant?.info.id}
//             to={"/restaurants/" + restaurant?.info.id}
//           >
//             {restaurant?.info.promoted ? (
//               <RestaurantCardPromoted resData={restaurant?.info} />
//             ) : (
//               <RestaurantCard resData={restaurant?.info} />
//             )}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };