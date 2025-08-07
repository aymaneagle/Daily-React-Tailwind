import React from 'react';
import {BarLoader} from "react-spinners";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
        <BarLoader color = "blue" />
    </div>
  );
};

export default Loading;
