import { useState } from "react";
import Buttons from "../common/Buttons";
import ReviewCard from "./ReviewCard";
import FilterCard from "./FilerCard";
import SortCard from "../common/SortCard";
const review = [
  {
    name: "Wei Jie",
    location: "Singapore, Little india",
    date: "29/11/2023",
    star: 5,
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    name: "Mei Ling",
    location: "Singapore, Orchad boulevard",
    date: "09/05/2023",
    star: 3,
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    name: "Wei Xiong",
    location: "Singapore, Takashimaya",
    date: "01/05/2023",
    star: 4,
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    name: "Ming Wei",
    location: "Singapore, Little india",
    date: "31/04/2023",
    star: 3,
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    name: "Xin Yi",
    location: "Singapore, Zen rooms",
    date: "30/04/2023",
    star: 2,
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    name: "Zhi Hao",
    location: "Singapore, Boon Keng",
    date: "27/03/2023",
    star: 5,
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    name: "Li Hua",
    location: "Singapore, DLLM loklok",
    date: "24/03/2023",
    star: 1,
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    name: "Si Ying",
    location: "Singapore, Bedemeer",
    date: "11/03/2023",
    star: 5,
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
  {
    name: "Wei Ting",
    location: "Singapore, Toa Payoh",
    date: "28/02/2023",
    star: 5,
    des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  },
];
const Reviews = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [data, setData] = useState(review);
  const handleOpenFilter = () => {
    setIsOpen(!isOpen);
  };
  const handleOpenSort = () => {
    setIsOpenSort(!isOpenSort);
  };
  const filteredItems = (rating) => {
    const fil = [...review].filter((el) => el.star === rating);
    return setData(fil);
  };
  return (
    <>
      <hr className="w-full h-[1px] bg-[#D3D3D3]" />
      <section className="w-[80%] mx-auto my-16">
        <div className="flex gap-8 items-center">
          <button
            className="bg-white text-EerieBlack border border-EerieBlack hover:bg-gray-300 px-6 py-2 rounded-full flex items-center gap-2"
            onClick={handleOpenFilter}
          >
            <img src="/filter.png" alt="" /> filter
          </button>
          <button
            className="bg-white text-EerieBlack border border-EerieBlack hover:bg-gray-300 px-6 py-2 rounded-full flex items-center gap-2"
            onClick={handleOpenSort}
          >
            <img src="/sort.png" alt="" /> Sort
          </button>
        </div>
        <div>
          {isOpen ? (
            <FilterCard
              handleOpen={handleOpenFilter}
              filteredItems={filteredItems}
            />
          ) : null}
        </div>
        <div>
          {isOpenSort ? <SortCard handleOpen={handleOpenSort} /> : null}
        </div>
        <div className="mt-8 space-y-3">
          {data.map((items, i) => (
            <ReviewCard key={i} items={items} />
          ))}
        </div>
        <div className="flex justify-center my-16">
          <Buttons className="bg-primary">Show more reviews</Buttons>
        </div>
      </section>
    </>
  );
};

export default Reviews;
