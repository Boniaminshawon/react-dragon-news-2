import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-2 ">
                <h2 className="text-3xl font-bold mb-5">Login With</h2>
                <button className="btn btn-outline w-full mb-3 text-lg font-semibold">
                    <FaGoogle />
                    Login With Google
                </button>
                <button className="btn btn-outline w-full text-lg font-semibold">
                    <FaGithub />
                    Login With Github
                </button>
            </div>

            <div className="p-4 ">
                <h2 className="text-3xl font-semibold mb-5">Find Us On</h2>
               <a href="" className="p-4 flex items-center font-medium text-[#706F6F] text-xl gap-3 border rounded-t-lg" ><FaFacebook className="text-blue-800"></FaFacebook> Facebook</a>
               <a href="" className="p-4 text-[#706F6F] flex items-center font-medium text-xl gap-3 border border-t-0 " ><FaTwitter className="text-sky-400"></FaTwitter> Twitter</a>
               <a href="" className="p-4 text-[#706F6F] flex items-center font-medium text-xl gap-3 border border-t-0  rounded-b-lg" ><FaInstagram className="text-purple-700"></FaInstagram> Instagram</a>
            </div>

            <div className="p-4 bg-[#F3F3F3]">
                <h2 className="text-3xl font-semibold mb-5">Q-Zone</h2>
              <img src={qZone1} alt="" />
              <img className="my-3" src={qZone2} alt="" />
              <img src={qZone3} alt="" />
            </div>

            <div className="bg-[#09001de6] my-5 py-16 px-8 text-center  text-white">
                <h1 className="text-3xl leading-[45px] mb-5 font-bold">Create an Amazing Newspaper</h1>
                <p className="px-3">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className="p-4 mt-8  bg-[#D72050] text-xl font-semibold btn-ghost">Learn More</button>
            </div>
        </div>
    );
};

export default RightSideNav;
