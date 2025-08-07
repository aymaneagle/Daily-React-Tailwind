import React from 'react';
import {Link} from "react-router-dom";
const Card = ({title, body, id}) => {
    return (
            <Link to={`/blogs/${id}`}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-2xl transition-shadow dura` p-6 flex flex-col justify-between hover:border-blue-400">
                <div>
                <h1 className="text-lg font-semibold text-blue-500 hover:underline mb-2">{title}</h1>
                {/*<p className="text-md text-yellow-600">{description}</p>*/}
                <p className="text-gray-600 text-sm">{body}</p>
                </div>
                <div className="mt-4 text-right text-sm text-blue-600">
                    Read more📩
                </div>
            </Link>

    );
};

export default Card;