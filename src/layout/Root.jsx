import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="font-poppins container mx-auto mt-5 border-4 border-red-600 ">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;