import React from "react";

const RotateCard = (props) => {
  
  return (
    <div className="flex mx-2   rotateCard flex-col rounded-[20px]  ">
       

      <div className="p-7   ">
        <div className=" h-full w-fit  flex justify-center  my-3 p-2 rounded-full bg-[#21313c] ">
          {props.image}
        </div>
        <div className=" w-full flex flex-col justify-start items-start space-y-2 place-content-start">
          <h1 className="font-bold">{props.name}</h1>
          <h1  >{props.job}</h1>
          <h1 className="text-base text-[#F7F8F8] opacity-50 text-left ">
            Senior Solution Architect who has mastered .NET technologies to
            build advanced desktop and web applications.
          </h1>
        </div>
        <div className="flex space-x-4  py-4">
          <div className="bg-[#21323c] w-fit p-2 rounded-full  ">{props.icon}</div>
          <div className="bg-[#21323c]  w-fit p-2 rounded-full ">{props.icon_one}</div>
          <div className="bg-[#21323c]  w-fit p-2 rounded-full ">
            {props.icon_second}
          </div>
        </div>
      </div>
     

    </div>
  );
};

export default RotateCard;
