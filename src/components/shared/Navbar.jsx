import { TbWorld } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import Buttons from "../common/Buttons";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [country, setCountry] = useState("");
  const nextPage = () => {
    return value === "restaurant" && country === "singapour"
      ? navigate("/AllRestaurant")
      : alert("Please select a restaurant & select a country");
  };
  return (
    <section className="border-b border-[#ADADAD]">
      <div className="flex md:flex-row flex-col justify-around items-center gap-3 md:gap-6 py-4 md:py-6">
        <div>
          <NavLink to="/">
            <img src="/logo.png" alt="" />
          </NavLink>
        </div>
        <div className="flex justify-center items-center gap-2 border border-[#ADADAD] px-4 py-1 rounded-full">
          <select
            onChange={(e) => setValue(e.target.value)}
            className="text-secondary-PhilippineGray"
          >
            <option className="text-secondary-PhilippineGray">selected</option>
            <option value="restaurant">restaurant</option>
            <option value="hotel">hotel</option>
            <option value="service">service</option>
          </select>
          <hr className="bg-[#ADADAD] w-[1px] h-6 rotate-180" />
          <select
            onChange={(e) => setCountry(e.target.value)}
            className="text-secondary-PhilippineGray"
          >
            <option className="text-secondary-PhilippineGray">
              select the country
            </option>
            <option value="singapour" className="text-secondary-PhilippineGray">
              singapour
            </option>
          </select>
          <button
            type="button"
            className="bg-primary rounded-full"
            onClick={nextPage}
          >
            <CiSearch className="w-8 h-8 text-white" />
          </button>
        </div>
        <div className="flex  items-center gap-3 ">
          <TbWorld className="h-6 w-6 " />
          <Buttons>MyFeedback for business</Buttons>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Navbar;
