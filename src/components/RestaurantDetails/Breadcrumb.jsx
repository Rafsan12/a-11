import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { NavLink } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <Breadcrumb className="p-4">
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
            to="/BellaItalia"
            className="font-roboto font-semibold text-base leading-5 text-EerieBlack"
          >
            BellaItalia
          </NavLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
