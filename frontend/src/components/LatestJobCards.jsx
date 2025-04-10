import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16 px-4 bg-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
              Latest & Top
            </span>{" "}
            Job Openings
          </h2>
          <Link
            to="/browse"
            className="text-purple-400 hover:text-purple-300 flex items-center gap-1 font-medium"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>

        {allJobs.length <= 0 ? (
          <div className="text-center py-12 bg-gray-800/30 rounded-lg border border-gray-700">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center"
            >
              <div className="p-6 rounded-full bg-gray-800 mb-4 text-2xl">
                🔍
              </div>
              <h3 className="text-xl font-medium mb-2">No Jobs Available</h3>
              <p className="text-gray-400">
                Check back later for new opportunities
              </p>
            </motion.div>
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {allJobs?.slice(0, 6).map((job) => (
              <motion.div key={job._id} variants={item}>
                <LatestJobCards job={job} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default LatestJobs;
