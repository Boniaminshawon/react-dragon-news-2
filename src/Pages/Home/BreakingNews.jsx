import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] p-4 my-7 gap-5 ">
            <button className="bg-[#D72050] btn-ghost hover:text-black hover:bg-white text-white py-2 px-6 font-semibold text-xl">Latest</button>
            <Marquee className="" pauseOnHover={true} speed={100}>
                <Link className="mr-20">I can be a React component, multiple React components....</Link>
                <Link className="mr-20">I can be a React component, multiple React components....</Link>
                <Link className="mr-20">I can be a React component, multiple React components....</Link>
                <Link className="mr-20">I can be a React component, multiple React components....</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;