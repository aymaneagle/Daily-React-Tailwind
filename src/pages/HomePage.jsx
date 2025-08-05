import React, {useEffect, useState} from 'react';

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
             <div className="bg-gray-200 w-fit p-5 m-5 rounded-md">
                 <h1 className="text-xl font-bold">{card.title}</h1>
                 <p className="text-md text-yellow-600">{card.description}</p>
                 <p className="text-gray-600 w-56">{card.body}</p>
             </div>
         ))}
     </div>
    );
};

export default HomePage;