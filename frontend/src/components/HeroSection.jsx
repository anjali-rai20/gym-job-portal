import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Search, Briefcase, Star, TrendingUp } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [jobCount, setJobCount] = useState(0);

  useEffect(() => {
    // Animate the job counter
    const interval = setInterval(() => {
      setJobCount((prev) => {
        if (prev < 10000) {
          return prev + 100;
        }
        clearInterval(interval);
        return 10000;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchJobHandler();
    }
  };

  return (
    <div className="relative overflow-hidden bg-gray-900">
      {/* Background gradient shapes */}
      <div className="absolute top-0 -left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 -right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      {/* <div className="absolute top-0 -left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div> */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-purple-400 font-medium border border-gray-700 shadow-sm"
            >
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span>No. 1 Job Hunt Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
            >
              Find & Land Your
              <div className="mt-2">
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
                  Dream Career
                </span>
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-300 text-lg max-w-md"
            >
              Connect with top employers worldwide and discover opportunities
              that match your skills and aspirations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="relative mt-4"
            >
              <div className="flex shadow-lg border border-gray-700 bg-gray-800 rounded-full items-center gap-2 p-1 pr-1 pl-6 w-full md:w-auto">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Job title, keyword, or company"
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="outline-none border-none w-full py-3 px-2 bg-transparent text-gray-200"
                />
                <Button
                  onClick={searchJobHandler}
                  className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 px-6 py-6"
                >
                  <span className="mr-2">Search Jobs</span>
                  <TrendingUp className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center gap-6 mt-2"
            >
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-gray-800">
                  {" "}
                  {/* Changed from bg-purple-50 */}
                  <Briefcase className="h-4 w-4 text-purple-400" />{" "}
                  {/* Changed from text-purple-600 */}
                </div>
                <span className="text-sm text-gray-400">
                  {" "}
                  {/* Changed from text-gray-600 */}
                  <span className="font-bold text-purple-400">
                    {jobCount.toLocaleString()}+
                  </span>{" "}
                  Jobs {/* Changed from text-purple-800 */}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-gray-800">
                  {" "}
                  {/* Changed from bg-indigo-50 */}
                  <Star className="h-4 w-4 text-indigo-400" />{" "}
                  {/* Changed from text-indigo-600 */}
                </div>
                <span className="text-sm text-gray-400">
                  {" "}
                  {/* Changed from text-gray-600 */}
                  <span className="font-bold text-indigo-400">4.8/5</span>{" "}
                  Rating {/* Changed from text-indigo-800 */}
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-br from-purple-200 to-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="relative bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        JH
                      </div>
                      <div>
                        <h3 className="font-bold text-white">
                          JobHunt Dashboard
                        </h3>{" "}
                        {/* Added text-white */}
                        <p className="text-sm text-gray-400">
                          Find your perfect match
                        </p>{" "}
                        {/* Changed from text-gray-500 */}
                      </div>
                    </div>
                    <div className="bg-green-900/50 text-green-400 px-3 py-1 rounded-full text-xs font-medium border border-green-800/50">
                      Premium
                    </div>{" "}
                    {/* Changed colors */}
                  </div>

                  {/* Update job cards */}
                  {[1, 2, 3].map((item) => (
                    <motion.div
                      key={item}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.7 + item * 0.2, duration: 0.5 }}
                      className="bg-gray-700 rounded-lg p-4 mb-3 border border-gray-600 hover:border-purple-500 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-10 w-10 rounded-md flex items-center justify-center text-white font-medium ${
                              item === 1
                                ? "bg-blue-500"
                                : item === 2
                                ? "bg-purple-500"
                                : "bg-orange-500"
                            }`}
                          >
                            {item === 1 ? "FB" : item === 2 ? "GG" : "AM"}
                          </div>
                          <div>
                            <h4 className="font-medium text-white">
                              {" "}
                              {/* Added text-white */}
                              {item === 1
                                ? "Senior UX Designer"
                                : item === 2
                                ? "Full Stack Developer"
                                : "Product Manager"}
                            </h4>
                            <p className="text-xs text-gray-400">
                              {" "}
                              {/* Changed from text-gray-500 */}
                              {item === 1
                                ? "Facebook Inc."
                                : item === 2
                                ? "Google LLC"
                                : "Amazon Inc."}
                            </p>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-purple-400">
                          {" "}
                          {/* Changed from text-purple-600 */}$
                          {item === 1
                            ? "85-110k"
                            : item === 2
                            ? "120-150k"
                            : "90-120k"}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
