import "./index.css";

import top from './assets/images/Vector_top.png'


import './styles/Slider.css'
import MySlider from "./components/MySlider";
function App() {


 
  return (
    <div className="bg-[#21313c] lg:pb-48 pb-28 overflow-hidden  text-center text-white relative h-full  mx-auto  max-w-full ">
      <div className="max-w-[1440px] mx-auto" >

      <img src={top} className='absolute right-2 -top-4' />
      <div  className=" max-w-[857px]   mx-auto py-12  font-medium ">
        <p className="header  text-5xl  leading-normal" >
        Angle Brackets Mobile App development experts
        </p>
     
      </div>
      <div className=" max-w-4xl text-lg px-4 font-thin text-[#F7F8F8] mx-auto  opacity-50 mb-20 ">
        Angle Brackets will quickly assemble a team of Front-end developers for
        your needs.
      </div>
     < MySlider />

    
      </div>

    </div>
  );
}

export default App;
