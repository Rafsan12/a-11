import { IoRestaurantOutline } from "react-icons/io5";
import { RiHotelLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { IoCarOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const Topics = () => {
  return (
    <section className="px-2 py-2">
      <div className="grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-4 grid-cols-2 items-center justify-items-center sm:gap-0 gap-3 text-secondary-PhilippineGray">
        <div className="flex flex-col items-center">
          <img src="/All.png" alt="All" />
          <p className="text-[#AFAFAF] font-roboto text-base leading-4">All</p>
        </div>
        <div>
          <NavLink to="/" className={"flex flex-col items-center"}>
            <IoRestaurantOutline className="w-[26px] h-[23px]" />
            <p className="text-[#AFAFAF] font-roboto text-base leading-4 ">
              Restaurants
            </p>
          </NavLink>
        </div>
        <div className="flex flex-col items-center">
          <RiHotelLine className="w-[26px] h-[23px]" />
          <p className="text-[#AFAFAF] font-roboto text-base leading-4">
            Hotels
          </p>
        </div>
        <div className="flex flex-col items-center">
          <IoHomeOutline className="w-[26px] h-[23px]" />
          <p className="text-[#AFAFAF] font-roboto text-base leading-4">
            Home services
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/shopping.png" alt="" />
          <p className="text-[#AFAFAF] font-roboto text-base leading-4">
            shopping
          </p>
        </div>
        <div className="flex flex-col items-center">
          <IoCarOutline className="w-[26px] h-[23px]" />
          <p className="text-[#AFAFAF] font-roboto text-base leading-4">
            car location
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/beauty.png" alt="" />
          <p className="text-[#AFAFAF] font-roboto text-base leading-4">
            beauty & spa
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/park.png" alt="" />
          <p className="text-[#AFAFAF] font-roboto text-base leading-4">park</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/museum.png" alt="" />
          <p className="text-[#AFAFAF] font-roboto text-base leading-4">
            museum
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/carWash.png" alt="" />
          <p className="text-[#AFAFAF] font-roboto text-base leading-4">
            car wash
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/bars.png" alt="" />
          <p className="text-[#AFAFAF] font-roboto text-base leading-4">Bars</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/gym.png" alt="" />
          <p className="text-[#AFAFAF] font-roboto text-base leading-4">Gyms</p>
        </div>
      </div>
    </section>
  );
};

export default Topics;
