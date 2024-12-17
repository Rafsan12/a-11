import Buttons from "../common/Buttons";

const Feedback = () => {
  return (
    <section className="p-4 my-12 md:my-20 bg-[#F2F2F2]">
      <div className="flex flex-col-reverse md:flex-row justify-center md:items-start items-center gap-8">
        <div className="py-0 md:py-24 ps-0 md:ps-24 space-y-3 md:space-y-5">
          <h2 className="font-lexend font-extrabold  text-xl md:text-[26px] leading-8 text-EerieBlack1E w-full md:max-w-md md:ps-0 ps-8 mx-auto">
            MyFeedback for Business has resources to help you plan, start, grow,
            and advertise your small business
          </h2>
          <p className="font-roboto text-base leading-4 text-[#5E5E5E]  w-full md:max-w-md mx-auto md:ps-0 ps-8">
            The lorem ipsum is, in printing, a series of meaningless words used
            temporarily to calibrate a layout.
          </p>
          <div className="pt-5 md:pt-12 md:w-full w-fit mx-auto">
            <Buttons className="py-4">Explore MyFeedback business</Buttons>
          </div>
        </div>
        <div className="md:px-0 px-8 p-1 md:p-6">
          <img src="/feedback.png" alt="feedback" />
        </div>
      </div>
    </section>
  );
};

export default Feedback;
