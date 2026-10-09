
import Container from "./Container";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
return (
<> <div className="bg-amber-600 py-4"> <Container> <div> <ul className="flex items-center justify-between">


          <li className="text-white font-poppins text-[22px] font-semibold cursor-pointer">
            <Link to="/">Logo</Link>
          </li>

          <div className="flex items-center gap-8">
            <li className="text-white font-poppins text-[16px] cursor-pointer hover:text-black transition">
              <Link to="/">Home</Link>
            </li>

            <li className="text-white font-poppins text-[16px] cursor-pointer hover:text-black transition">
              <Link to="/shop">Shop</Link>
            </li>

            <li className="text-white font-poppins text-[16px] cursor-pointer hover:text-black transition">
              <Link to="/about">About</Link>
            </li>
          </div>

          <div className="flex items-center gap-5">

            <div className="flex items-center gap-2 bg-white rounded-md px-3 py-2">
              <FaSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="outline-none w-[140px] font-poppins text-sm"
              />
            </div>

            <li className="text-white cursor-pointer hover:text-black transition relative">
              <Link to="/cart">
                <FaShoppingCart className="text-[20px]" />
              </Link>
            </li>

            <li className="text-white cursor-pointer hover:text-black transition flex items-center gap-2 font-poppins text-[16px]">
              <FaUser />
              <Link to="/login">Sign In</Link>
            </li>

          </div>

        </ul>
      </div>
    </Container>
  </div>
</>


);
};

export default Navbar;
