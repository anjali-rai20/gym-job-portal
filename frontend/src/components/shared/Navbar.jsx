import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogOut, User2, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const renderLinks = () => {
    if (user?.role === "recruiter") {
      return (
        <>
          <li>
            <Link
              to="/admin/companies"
              className="hover:text-purple-400 transition-colors px-3 py-2 rounded-md"
            >
              Companies
            </Link>
          </li>
          <li>
            <Link
              to="/admin/jobs"
              className="hover:text-purple-400 transition-colors px-3 py-2 rounded-md"
            >
              Jobs
            </Link>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <Link
              to="/"
              className="hover:text-purple-400 transition-colors px-3 py-2 rounded-md"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/jobs"
              className="hover:text-purple-400 transition-colors px-3 py-2 rounded-md"
            >
              Jobs
            </Link>
          </li>
          <li>
            <Link
              to="/browse"
              className="hover:text-purple-400 transition-colors px-3 py-2 rounded-md"
            >
              Browse
            </Link>
          </li>
        </>
      );
    }
  };

  const renderAuthButtons = () => {
    if (!user) {
      return (
        <div className="flex items-center gap-2">
          <Link to="/login">
            <Button
              variant="outline"
              className="border-gray-700 text-gray-200 hover:bg-gray-800"
            >
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
              Signup
            </Button>
          </Link>
        </div>
      );
    } else {
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Avatar className="cursor-pointer w-10 h-10 ring-2 ring-purple-500 ring-offset-2 ring-offset-gray-900">
              <AvatarImage
                src={user?.profile?.profilePhoto}
                alt={user?.fullName}
              />
              <AvatarFallback className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
                {user.fullName
                  .split(" ")
                  .map((name) => name[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-80 bg-gray-800 border-gray-700 text-gray-100">
            <div className="p-4">
              <div className="flex items-center gap-3">
                <Avatar className="m-0 ring-2 ring-purple-500">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt={user?.fullName}
                  />
                  <AvatarFallback className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
                    {user.fullName
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">{user?.fullName}</h4>
                  <p className="text-sm text-gray-400">
                    {user?.profile?.bio || "No bio added"}
                  </p>
                </div>
              </div>
              <div className="flex flex-col mt-4 text-gray-300 border-t border-gray-700 pt-4">
                {user.role === "student" && (
                  <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-700 px-2 py-2 rounded-md">
                    <User2 size={18} className="text-purple-400" />
                    <Link
                      to="/profile"
                      className="w-full text-gray-300 hover:text-white"
                    >
                      View Profile
                    </Link>
                  </div>
                )}
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-700 px-2 py-2 rounded-md">
                  <LogOut size={18} className="text-purple-400" />
                  <button
                    onClick={logoutHandler}
                    className="w-full text-left text-gray-300 hover:text-white"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      );
    }
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Job<span className="text-amber-500">Portal</span>
            </h1>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            {renderLinks()}
          </ul>
          {renderAuthButtons()}
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-800 py-4 px-4"
        >
          <ul className="flex flex-col space-y-3">{renderLinks()}</ul>
          <div className="mt-4 pt-4 border-t border-gray-700">
            {renderAuthButtons()}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
