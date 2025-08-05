import React from 'react';

const Card = ({title, description, body}) => {
    return (
            <div className="bg-gray-200 w-fit p-5 m-5 rounded-md">
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="text-md text-yellow-600">{description}</p>
                <p className="text-gray-600 w-56">{body}</p>
            </div>

    );
};

export default Card;