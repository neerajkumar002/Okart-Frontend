/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { RiDashboardFill, RiShoppingBag3Fill,RiCoupon3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { FaChartBar,FaChartPie,FaChartLine ,FaStopwatch,FaGamepad} from "react-icons/fa";

const AdminSidebar = () => {
  const location = useLocation();
 console.log(location)
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
            location={location}
          />
          <Li
            text={"Product"}
            Icon={RiShoppingBag3Fill}
            url="/admin/product"
            location={location}
          />
          <Li
            text={"Customer"}
            Icon={IoIosPeople}
            url="/admin/customer"
            location={location}
          />
          <Li
            text={"Transaction"}
            Icon={AiFillFileText}
            url="/admin/transaction"
            location={location}
          />

           
        </ul>
      </div>
      <div>
        <h5>Charts</h5>
        <ul>
          <Li
            text={"Bar"}
            Icon={FaChartBar}
            url="/admin/chart/bar"
            location={location}
          />
          <Li
            text={"Pie"}
            Icon={FaChartPie}
            url="/admin/chart/pie"
            location={location}
          />
          <Li
            text={"Line"}
            Icon={FaChartLine}
            url="/admin/chart/line"
            location={location}
          /> 

           
        </ul>
      </div>
      <div>
        <h5>Apps</h5>
        <ul>
          <Li
            text={"Stopwatch"}
            Icon={FaStopwatch}
            url="/admin/app/stopwatch"
            location={location}
          />
          <Li
            text={"Coupan"}
            Icon={RiCoupon3Fill}
            url="/admin/app/coupan"
            location={location}
          />
          <Li
            text={"Toss"}
            Icon={FaGamepad}
            url="/admin/app/toss"
            location={location}
          /> 

           
        </ul>
      </div>
    
    </aside>
  );
};

const Li = ({ text, Icon, url,location }) => (
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
