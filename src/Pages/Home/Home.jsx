import Header from "../shared/Header";
import LeftSideNav from "../shared/LeftSideNav";
import Navbar from "../shared/Navbar";
import RightSideNav from "../shared/RightSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
          
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className=" "><LeftSideNav></LeftSideNav></div>
                <div className="md:col-span-2  border">NEws comming soon</div>
                <div className=" "><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;