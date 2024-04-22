import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className=" p-3 h-[75px] w-100 position-absolute bg-white shadow-sm flex justify-between">
      <div>logo</div>
      <div></div>
      <Link to="/profile">
        {currentUser ? (
          <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer">
            <img src={currentUser.avatar} alt="profile" className="object-cover"></img>
          </div>
        ) : (
          <li className="text-slate-700 hover:underline">Sign In</li>
        )}
      </Link>
    </header>
  );
}
