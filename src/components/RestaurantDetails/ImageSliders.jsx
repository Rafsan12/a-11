import { useState } from "react";
const imageLink = [
  {
    imgUrl: "/imgslidermain.png",
  },
  {
    imgUrl: "/magnificent3.png",
  },
  {
    imgUrl: "/magnificent5.png",
  },
  {
    imgUrl: "/magnificent3.png",
  },
  {
    imgUrl: "/magnificent5.png",
  },
];
const ImageSliders = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliders = imageLink[currentIndex];
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageLink.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageLink.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-[100%] mx-auto">
      <div className="relative h-[50vh] overflow-hidden">
        <img
          className="object-cover w-full h-full rounded-md"
          src={sliders.imgUrl}
          alt=""
        />
      </div>
      <div className="absolute bottom-[34%] left-[10%] sm:left-[25%] flex items-center gap-8 justify-center">
        <button
          type="button"
          onClick={handlePrev}
          className="bg-white p-3 rounded-full"
        >
          <img src="/prev.png" alt="" className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-3">
          {imageLink.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white " : "bg-white/25 "
              }`}
            ></button>
          ))}
        </div>
        <button
          type="button"
          onClick={handleNext}
          className="bg-white p-3 rounded-full"
        >
          <img src="/next.png" alt="" />
        </button>
      </div>
      <div className="grid grid-cols-6 mt-6 gap-3">
        <img src="/magnificent1.png" alt="" className="rounded-md" />
        <img src="/magnificent3.png" alt="" className="rounded-md" />
        <img src="/magnificent5.png" alt="" className="rounded-md" />
        <img src="/magnificent3.png" alt="" className="rounded-md" />
        <img src="/magnificent5.png" alt="" className="rounded-md" />
        <img src="/magnificent3.png" alt="" className="rounded-md" />
      </div>
    </section>
  );
};

export default ImageSliders;
