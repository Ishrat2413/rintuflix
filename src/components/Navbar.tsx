import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between ">
      <Link to="/">
        <img
          src="rintuflix.png"
          className="md:h-16 sm:h-10 h-10 hover:opacity-80 cursor-pointer"
          alt=""
        />
      </Link>

      <div className="flex gap-3 items-center">
        <form action="">
          <Input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="border-black rounded-2xl md:w-fit sm:w-[40vw] font-serif"
          />
        </form>
        <div className="md:block sm:hidden hidden">
          <div className="flex gap-6 items-center font-serif">
            <div>
                Action
            </div>
            <Link to="/movies">Movies</Link>
            <Link to="/tvShows">TvShows</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
