import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


const LeftSideNav = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data));
    },[])
    return (
        <div>
          <h2 className="text-3xl font-semibold">All Category</h2>
          {
            categories.map(category =><NavLink  to={`/category/${category.id}`} className="block mt-7 text-[#706F6F] text-xl font-medium ml-12" key={category.id}>{category.name}</NavLink >)
          }
        </div>
    );
};

export default LeftSideNav;