import { useEffect, useState } from "react";
import Card from "../common/Card";

const Discover = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/discover.json")
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData));
  }, []);
  return (
    <section className="w-[80%] mx-auto my-16">
      <div>
        <h1 className="font-lexend font-extrabold text-xl sm:text-heading leading-6 sm:leading-10 text-EerieBlack1E">
          Also discover...
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {data.map((item, i) => (
            <Card key={i} items={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discover;
