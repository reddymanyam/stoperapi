import { useEffect, useState } from "react";

const Footer = () => {
    const [restaurants, setRestaurants] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://www.swiggy.com/mapi/restaurants/list/v5?lat=17.3724&lng=78.4378&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            // Assuming you want to extract all restaurant names or a specific restaurant's details
            // Navigate through the data structure based on your example
            if (data && data.data && data.data.cards) {
                const restaurantInfo = data.data.cards.map(card => {
                    if (card.card && card.card.card && card.card.card.info && card.card.card.info.name) {
                        return {
                            id: card.card.card.info.id,
                            name: card.card.card.info.name,
                            image: card.card.card.info.cloudinaryImageId,
                            cuisines: card.card.card.info.cuisines,
                        };
                    }
                    return null;
                }).filter(info => info !== null); // Filter out any nulls if info.name is not found
                
                setRestaurants(restaurantInfo);
            }
        } catch (error) {
            console.log("error while fetching", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <h2>{restaurant.name}</h2>
              <h3>{restaurant.image}</h3>
              <h4>{restaurant.cuisines.join(',')}</h4>
            </li>
          ))}
        </ul>
    );
};

export default Footer;
