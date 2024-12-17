import { RxCross2 } from "react-icons/rx";

const FilterCard = ({ handleOpen, filteredItems }) => {
  return (
    <div className="bg-white shadow-md p-8 rounded-md border border-[#E6E6E6] relative flex flex-col items-center gap-5 w-fit">
      <div className="absolute top-2 right-2">
        <button type="button" onClick={handleOpen}>
          <RxCross2 />
        </button>
      </div>
      <h1 className="font-roboto font-bold text-[22px] leading-6 text-EerieBlack text-center">
        Filter by Rating
      </h1>
      <button
        type="button"
        className="font-roboto text-base leading-5 text-[#E8A641] flex items-center gap-3 "
        onClick={() => filteredItems(5)}
      >
        5
        {Array.from(Array(5).keys()).map((el) => (
          <img key={el} src="/star.png" alt="" />
        ))}
      </button>
      <button
        type="button"
        className="font-roboto text-base leading-5 text-[#E8A641] flex items-center gap-3"
        onClick={() => filteredItems(4)}
      >
        4
        {Array.from(Array(4).keys()).map((el) => (
          <img key={el} src="/star.png" alt="" />
        ))}
      </button>
      <button
        type="button"
        className="font-roboto text-base leading-5 text-[#E8A641] flex items-center gap-3"
        onClick={() => filteredItems(3)}
      >
        3
        {Array.from(Array(3).keys()).map((el) => (
          <img key={el} src="/star.png" alt="" />
        ))}
      </button>
      <button
        type="button"
        className="font-roboto text-base leading-5 text-[#E8A641] flex items-center gap-3"
        onClick={() => filteredItems(2)}
      >
        2
        {Array.from(Array(2).keys()).map((el) => (
          <img key={el} src="/star.png" alt="" />
        ))}
      </button>
      <button
        type="button"
        className="font-roboto text-base leading-5 text-[#E8A641] flex items-center gap-3"
        onClick={() => filteredItems(1)}
      >
        1
        {Array.from(Array(1).keys()).map((el) => (
          <img key={el} src="/star.png" alt="" />
        ))}
      </button>
    </div>
  );
};

export default FilterCard;
