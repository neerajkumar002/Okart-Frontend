/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";

const AdminSidebar = () => {
  const location = useLocation();

  console.log(location.pathname.includes("/admin/dashboard"));

  return (
    <aside>
      <h2>Logo</h2>
      <div>
        <h5>Dashboard</h5>
        <ul>
          <Li
            text={"Dashboard"}
            Icon={RiDashboardFill}
            url="/admin/dashboard"
          />
          <Li
            text={"Product"}
            Icon={RiShoppingBag3Fill}
            url="/admin/product"
          />
          <Li
            text={"Customer"}
            Icon={IoIosPeople}
            url="/admin/customer"
          />
          <Li
            text={"Transaction"}
            Icon={AiFillFileText}
            url="/admin/transaction"
          />

           
        </ul>
      </div>
    </aside>
  );
};

const Li = ({ text, Icon, url }) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "white",
    }}
  >
    <Link to={url}>
      <Icon />
      {text}
    </Link>
  </li>
);

export default AdminSidebar;
