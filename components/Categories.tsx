import { categories } from "@/constants/categories";
import React, { useEffect } from "react";
import Tab from "./Tab";

interface CategoriesProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  activeTab: string;
}

const Categories = ({ setActiveTab, activeTab }: CategoriesProps) => {
  const jsonTasks = localStorage.getItem("activeTab");

  useEffect(() => {
    if (jsonTasks) {
      setActiveTab(JSON.parse(jsonTasks));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("activeTab", JSON.stringify(activeTab));
  }, [activeTab]);
  return (
    <div className="flex text-grey-400 text-sm font-medium leading-6">
      {categories.map((category) => (
        <Tab
          key={category.slug}
          onClick={() => setActiveTab(category.value)}
          active={activeTab === category.value}
        >
          {category.value}
        </Tab>
      ))}
    </div>
  );
};

export default Categories;
