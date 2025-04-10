import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";
import { motion } from "framer-motion";

const categories = [
  { name: "Frontend Developer", icon: "💻" },
  { name: "Backend Developer", icon: "🖥️" },
  { name: "Data Science", icon: "📊" },
  { name: "Graphic Designer", icon: "🎨" },
  { name: "FullStack Developer", icon: "⚡" },
  { name: "UI/UX Designer", icon: "🎯" },
  { name: "DevOps Engineer", icon: "🔄" },
  { name: "Product Manager", icon: "📱" },
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Popular{" "}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
              Categories
            </span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Browse jobs by category and find the perfect role for your skills
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {categories.map((category, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="h-full"
                >
                  <Button
                    onClick={() => searchJobHandler(category.name)}
                    variant="outline"
                    className="w-full h-full py-6 border border-gray-700 bg-gray-800/50 hover:bg-gray-800 hover:border-purple-500 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-300"
                  >
                    <span className="text-2xl mb-1">{category.icon}</span>
                    <span className="font-medium text-gray-100">
                      {category.name}
                    </span>
                  </Button>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-gray-700 bg-gray-800 text-white hover:bg-gray-700" />
          <CarouselNext className="border-gray-700 bg-gray-800 text-white hover:bg-gray-700" />
        </Carousel>
      </motion.div>
    </div>
  );
};

export default CategoryCarousel;
