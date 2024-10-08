/* eslint-disable react/prop-types */
import AdminSidebar from "../../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userProfileImage from "../../assets/profile.png";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import data from "../../assets/data.json";
import { BarChart } from "../../components/Chart";
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
        <section className="widget-container">
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
            percent={80}
            color="rgb(75 0 255)"
          />
        </section>

        {/* graph container */}
        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue & Transactions</h2>
            {/* Graph here */}
            <div>
              <BarChart
                data_1={[200, 444,343, 556, 778 , 755, 990]}
                data_2={[300, 144, 433, 655, 237, 755, 190]}
                title_1="Revenue"
                title_2="Transaction"
                bgColor_1="rgb(0,115,255)"
                bgColor_2="rgba(53,162,255,0.8)" 
              />
            </div>
          </div>
          <div className="dashbord-categories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((category, i) => (
                <CategoryItem
                  key={i}
                  heading={category.heading}
                  value={category.value}
                  color={`hsl(${category.value * 3},${category.value}%,50%)`}
                />
              ))}
            </div>
          </div>
        </section>
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

const CategoryItem = ({ color, value, heading }) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div style={{ backgroundColor: color, width: `${value}%` }}></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default Dashboard;
