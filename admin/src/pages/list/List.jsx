import "./list.scss"
import SideBar from "../../components/sideBar/SideBar";
import NavBar from "../../components/navBar/NavBar";
import Datatable from "../../components/datatable/Datatable";

const List = () => {
  return (
      <div className="List">
          <SideBar/>
          <div className="listContainer">
              <NavBar/>
              <Datatable/>
          </div>
      </div>
  )
};

export default List;
