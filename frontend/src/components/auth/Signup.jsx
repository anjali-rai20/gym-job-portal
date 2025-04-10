import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Signup = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
    file: "",
  });
  const { loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    console.log(file);

    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log("error", error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <form
            onSubmit={submitHandler}
            className="bg-white p-8 shadow rounded-lg"
          >
            <h2 className="text-center text-2xl font-extrabold text-gray-900">
              Sign Up
            </h2>
            <div className="space-y-6">
              <div>
                <Label className="block text-sm font-medium text-gray-700">
                  Full Name
                </Label>
                <Input
                  type="text"
                  value={input.fullName}
                  name="fullName"
                  onChange={changeEventHandler}
                  placeholder="Joon"
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <Label className="block text-sm font-medium text-gray-700">
                  Email
                </Label>
                <Input
                  type="email"
                  value={input.email}
                  name="email"
                  onChange={changeEventHandler}
                  placeholder="Joon@gmail.com"
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <Label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </Label>
                <Input
                  type="text"
                  value={input.phoneNumber}
                  name="phoneNumber"
                  onChange={changeEventHandler}
                  placeholder="+91-7954352907"
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <Label className="block text-sm font-medium text-gray-700">
                  Password
                </Label>
                <Input
                  type="password"
                  value={input.password}
                  name="password"
                  onChange={changeEventHandler}
                  placeholder="Joon"
                  className="mt-1 block w-full"
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="mr-2 font-semibold text-gray-700">
                  Profile Pic
                </Label>
                <div className="flex items-center border border-dashed border-gray-500 rounded-lg px-4 py-2 bg-gray-50">
                  <div className="flex items-center"></div>
                  <Input
                    accept="image/*"
                    type="file"
                    onChange={changeFileHandler}
                    className="hidden"
                    id="profile"
                  />
                  <label
                    htmlFor="profile"
                    className="cursor-pointer text-gray-600 hover:text-gray-800 font-bold ml-auto"
                  >
                    Upload
                  </label>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <RadioGroup className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Input
                      type="radio"
                      name="role"
                      value="student"
                      checked={input.role === "student"}
                      onChange={changeEventHandler}
                      className="cursor-pointer"
                    />
                    <Label className="ml-2">Student</Label>
                  </div>
                  <div className="flex items-center">
                    <Input
                      type="radio"
                      name="role"
                      value="recruiter"
                      checked={input.role === "recruiter"}
                      onChange={changeEventHandler}
                      className="cursor-pointer"
                    />
                    <Label className="ml-2">Recruiter</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            {loading ? (
              <Button className="w-full mt-6">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button type="submit" className="w-full mt-6">
                Signup
              </Button>
            )}
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
