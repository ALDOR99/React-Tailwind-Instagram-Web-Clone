import { Link } from "react-router-dom";

//---------------------------------------------------------------------------------------------------------------------------
export default function Header() {
  return (
    <header className=" bg-white border-b border-gray-300">
      <div className="h-[60px] flex items-center justify-between container mx-auto">
        <Link to="/" />
        <img
          className="h-[29px]"
          src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
        />
      </div>
    </header>
  );
}