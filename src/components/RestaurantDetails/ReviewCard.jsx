import { LuUserRound } from "react-icons/lu";
const ReviewCard = ({ items }) => {
  return (
    <div className="flex items-start gap-2 w-full p-4 rounded-2xl bg-[#F8F8F8]">
      <div className="bg-gray-100 rounded-full p-1">
        <LuUserRound className="h-8 w-8" />
      </div>
      <div className="space-y-3">
        <h1 className="font-roboto font-semibold text-[21px] leading-6 text-EerieBlack">
          {items.name}
        </h1>
        <p className="font-roboto text-base leading-5 text-[#BABABA]">
          {items.location}
        </p>
        <div className="flex items-end gap-2">
          {Array.from(Array(items.star).keys()).map((el) => (
            <img src="/star.png" alt="" key={el} />
          ))}
          <p className="font-roboto text-sm leading-4 text-[#343434]">
            {items.date}
          </p>
        </div>
        <p className="font-roboto text-base leading-[18px] w-full sm:max-w-md text-[#5E5E5E] pt-4">
          {items.des}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
