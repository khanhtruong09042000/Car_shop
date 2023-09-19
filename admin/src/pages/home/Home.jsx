import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import NavBar from "../../components/navBar/NavBar";
import SideBar from "../../components/sideBar/SideBar";
import Tables from "../../components/table/Table";
import Widget from "../../components/widgets/Widget";
import "./home.scss"

const Home = () => {
  return (
      <div className="home">
          <SideBar/>
          <div className="homeContainer">
           <NavBar/>
           <div className="widgets">
             <Widget type="user"/>
             <Widget type="order"/>
             <Widget type="erarning"/>
             <Widget type="balance"/>
           </div>
           <div className="charts">
             <Featured/>
             <Chart aspect={2/1} title="User Spending ( Last 6 Months)"/>
           </div>
           <div className="listContainer">
             <div className="listTitle">
               Laster Transactions
               <Tables/>
             </div>
           </div>
          </div>
      </div>
  )
};

export default Home;
