import Buttons from "../common/Buttons";

const MenuCard = () => {
  return (
    <div className="relative w-[100%] shadow-lg shadow-black p-3 rounded-lg">
      <div>
        <img src="/menu.png" alt="" />
      </div>
      <div>
        <h1 className="font-lexend font-semibold text-xl sm:text-heading  leading-6 sm:leading-10 text-EerieBlack text-center mt-4">
          Menu Bella Italia
        </h1>
        <div className="flex justify-center my-4">
          <Buttons
            className={
              "bg-white border border-[#D3D3D3] flex items-center justify-center gap-4 text-EerieBlack w-fit hover:bg-gray-200"
            }
          >
            <img src="/download.png" alt="" />
            Dowload this menu
          </Buttons>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
