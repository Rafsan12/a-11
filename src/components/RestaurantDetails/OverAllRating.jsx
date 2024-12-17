import Progress from "./Progress";

const OverAllRating = () => {
  return (
    <section className="w-[80%] mx-auto my-16 space-y-3">
      <div className="flex flex-col sm:flex-row justify-start gap-16 items-start ">
        <div className="flex items-start justify-center gap-4">
          <div>
            <img src="/ratingbadge.png" alt="" />
          </div>
          <div className="space-y-2">
            <h1 className="font-roboto font-bold text-xl sm:text-heading  leading-6 sm:leading-9 text-EerieBlack">
              Overall rating
            </h1>
            <p className="font-roboto text-[19px] leading-[22px] text-[#838383]">
              834 Reviews
            </p>
            <div className="flex items-center gap-3">
              {Array.from(Array(5).keys()).map((el) => (
                <img src="/star.png" alt="" key={el} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <p>5 star</p>
            <Progress max="w-[100%]" />
          </div>
          <div className="flex gap-2 items-center">
            <p>4 star</p>
            <Progress max="w-[60%]" />
          </div>
          <div className="flex gap-2 items-center">
            <p>3 star</p>
            <Progress max="w-[70%]" />
          </div>
          <div className="flex gap-2 items-center">
            <p>2 star</p>
            <Progress max="w-[40%]" />
          </div>
          <div className="flex gap-2 items-center">
            <p>1 star</p>
            <Progress max="w-[10%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverAllRating;
