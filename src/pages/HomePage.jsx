import React, {useEffect, useState} from 'react';
import Card from "../components/Card.jsx"

const HomePage = () => {
    const[cardData, setCardData] = useState([]);
    useEffect(() => {
        fetch("/card-data.json")
            .then((response) =>response.json())
            .then((data) => setCardData(data));
    }, []);
    return (
     <div className="grid grid-cols-3 gap-2">
         {cardData.map((card)=>(
             <Card
             title={card.title}
             description={card.description}
             body={card.body}
             />
         ))}
     </div>
    );
};

export default HomePage;