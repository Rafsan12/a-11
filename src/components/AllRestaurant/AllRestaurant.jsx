import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { NavLink, useNavigate } from "react-router-dom";
import Buttons from "../common/Buttons";
import { useEffect, useState } from "react";
import SortCard from "../common/SortCard";
import Card from "../common/Card";
const AllRestaurant = () => {
  const [sortedProducts, setSortedProducts] = useState([]);
  useEffect(() => {
    fetch("./allRestaurant.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSortedProducts(data);
      });
  }, []);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const nextPage = () => {
    return navigate("/BellaItalia");
  };
  const sortByRating = () => {
    const sorted = [...sortedProducts].sort((a, b) => b.star - a.star);
    setSortedProducts(sorted);
  };
  const sortByRatinglowtohigh = () => {
    const sorted = [...sortedProducts].sort((a, b) => a.star - b.star);
    setSortedProducts(sorted);
  };

  return (
    <section className="w-[95%] mx-auto my-6">
      <div className="flex flex-col md:flex-row gap-5">
        <div>
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <NavLink
                    to="/"
                    className="font-roboto font-semibold text-base leading-5 text-EerieBlack"
                  >
                    Home
                  </NavLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <NavLink
                    to="/AllRestaurant"
                    className="font-roboto font-semibold text-base leading-5 text-EerieBlack"
                  >
                    All Restaurant
                  </NavLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="relative flex justify-around items-center">
              <h1 className="font-lexend font-extrabold text-xl md:text-heading leading-10 text-EerieBlack1E my-2">
                best restaurants in singapore
              </h1>
              <Buttons
                className="border border-[#5E5E5E] text-[#5E5E5E] bg-white flex gap-[1px] hover:bg-gray-300 hover:text-EerieBlack"
                onClick={handleOpen}
              >
                <img src="/sort.png" alt="" />
                sort
              </Buttons>
              <div className=" absolute top-[70%] md:top-[90%] right-4">
                {isOpen ? (
                  <SortCard
                    handleOpen={handleOpen}
                    sortedhightolow={sortByRating}
                    sortByRatinglowtohigh={sortByRatinglowtohigh}
                  />
                ) : null}
              </div>
            </div>
            <div className="my-8 space-y-5 border-b">
              {sortedProducts.map((items) => (
                <Card
                  key={items.id}
                  className="flex flex-col sm:flex-row gap-2 border-b border-[#DCDCDC] hover:cursor-pointer"
                  onClick={nextPage}
                  items={items}
                />
              ))}
            </div>
            <Buttons className="bg-primary">Show more</Buttons>
          </div>
        </div>
        <div>
          <img src="/map.png" alt="" className="rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default AllRestaurant;
