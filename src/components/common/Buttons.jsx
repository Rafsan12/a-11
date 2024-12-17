import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const Buttons = ({ children, className , onClick }) => {
  return (
    <Button
      className={cn(
        "bg-EerieBlack text-white rounded-full font-roboto text-base leading-4",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default Buttons;
