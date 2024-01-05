import React from 'react'
import RotateCard from './RotateCard';
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import Athena from "../assets/images/Athena.png";
import Christin from "../assets/images/Christin.png";
import Jesse from "../assets/images/Jesse.png";
import Thomas from "../assets/images/Thomas.png";
import icon from "../assets/svg/iconoir_figma.svg";
import icon_one from "../assets/svg/Xd.svg";
import icon_second from "../assets/svg/diamond.svg";
import icon_vue from '../assets/svg/Vue.svg'
import icon_react from '../assets/svg/React.svg'
import Slider from "react-slick/lib/slider";
import '../styles/Slider.css'

const MySlider = () => {
  function SampleNextArrow(props) {
    const {  onClick } = props;
    return (
      <div
      className='absolute top-[110%] lg:left-[51%] lg:translate-x-[51%] md:left-[50%] md:translate-x-[50%]    left-[49%] translate-x-[49%]    text-black   z-10  '
        onClick={onClick}
      >
        <HiOutlineArrowSmallRight className='text-white size-6' />
        </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
      <div
        className='absolute  top-[110%] lg:left-[48%] lg:translate-x-[48%] md:left-[46%] md:translate-x-[46%]      left-[39%] translate-x-[39%]    text-black   z-10  '
        onClick={onClick}
      >
       <HiOutlineArrowSmallLeft className='text-white size-6' />
          
        </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
       
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
      return (
        <div className="mySlider z-50" >

      <Slider   {...settings}>
          <div  >
          <RotateCard
          name={"Athena G"}
          job={"Product Designer"}
          image={
            <img
            alt="Athena"
            src={Athena}
            />
          }
          icon={<img alt="icon" src={icon} className="w-[30px] h-[30px]" />}
          icon_one={<img alt="Xd" src={icon_one} className="w-[30px] h-[30px]" />}
          icon_second={<img alt="Diamond" src={icon_second} className="w-[30px] h-[30px]" />}
        />
          </div>
          <div>
          <RotateCard
          name={"Thomas Ed"}
          job={"Front-end Developer"}
          image={
            <img
            alt="Thomas"
            src={Thomas}
            />
          }
          icon={<img alt="icon" className="w-[30px] h-[26px] pt-1" src={icon_vue} />}
          icon_one={<img alt="Xd" className="w-[30px] h-[30px]" src={icon_react} />}
          icon_second={<img alt="Diamond" className="w-[30px] h-[30px]" src={icon_second} />}
          
        />
          </div>
          <div>
       
          <RotateCard
          name={"Jesse Showalter"}
          job={"Back-end Designer"}
          image={
            <img
             alt="Jesse"
             src={Jesse}
            />
          }
          icon={<img alt="icon" className="w-[30px] h-[26px] pt-1" src={icon_vue} />}
          icon_one={<img alt="Xd" className="w-[30px] h-[30px]" src={icon_react} />}
          icon_second={<img alt="Diamond" className="w-[30px] h-[30px]" src={icon_second} />}
        />
          </div>
          <div>
          <RotateCard
          name={"Christin"}
          job={"Dev-ops Engineer"}
          image={
            <img
             alt="Christin"
             src={Christin}
            />
          }
          icon={<img alt="icon" className="w-[30px] h-[30px]" src={icon_second} />}
          icon_one={<img alt="Xd" className="w-[30px] h-[30px]" src={icon_react} />}
          icon_second={<img alt="Diamond" className="w-[30px] h-[26px] pt-1" src={icon_vue} />}
        />
          </div>
       
        </Slider>
      </div>

  )
}

export default MySlider;
