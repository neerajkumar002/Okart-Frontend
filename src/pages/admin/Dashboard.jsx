/* eslint-disable react/prop-types */
import AdminSidebar from "../../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userProfileImage from "../../assets/profile.png";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main */}
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userProfileImage} alt="User" />
        </div>
        {/* widget container */}
        <div className="widget-container">
          <WidgetItem
            heading={"Revenue"}
            amount={true}
            value={233000}
            percent={15}
            color="rgb(0,115,255)"
          />
          <WidgetItem
            heading={"Users"}
            value={400}
            percent={-14}
            color="rgb(0 198 202)"
          />
          <WidgetItem
            heading={"Transactions"}
            value={23000}
            percent={80}
            color="rgb(255 196 0)"
          />
          <WidgetItem
            heading={"Product"}
            value={100}
            percent={30}
            color="rgb(75 0 255)"
          />
        </div>
      </main>
    </div>
  );
};

// widget component
const WidgetItem = ({ heading, value, percent, color, amount = false }) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp />+{percent}%
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown />
          {percent}%
        </span>
      )}
    </div>
    <div
      className="widgetCircle"
      style={{
        background: `conic-gradient(
        ${color} ${(Math.abs(percent) / 100) * 360}deg,
           rgb(255,255,255) 0
           )`,
      }}
    >
      <span style={{ color }}>{percent}%</span>
    </div>
  </article>
);

export default Dashboard;
