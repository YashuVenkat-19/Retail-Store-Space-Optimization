import React from "react";
import Navbar from "./Navbar";
import ShoppingCart from "./ShoppingCart";
import "./style.css";
import { useState } from "react";

function TabContent({ id, activeTab, content, imageSrc }) {
  return (
    <div
      className={`p-4 flex flex-col items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800 ${
        activeTab === id ? "block" : "hidden"
      }`}
      id={id}
      role="tabpanel"
      aria-labelledby={`${id}-tab`}
    >
      {content}
      <img className="mt-4 h-80 w-80" src={imageSrc} alt={`${id} image`} />
    </div>
  );
}

const HeatMaps = () => {
  const [activeTab, setActiveTab] = useState("daily");

  const tabs = [
    {
      id: "daily",
      label: "Daily",
      imageSrc:
        "https://www.udentify.co/Blog/wp-content/uploads/2019/12/heat-map-foto-1.png",
    },
    {
      id: "weekly",
      label: "Weekly",
      imageSrc: "https://www.udentify.co/Blog/wp-content/uploads/2019/04/1.png",
    },
    {
      id: "monthly",
      label: "Monthly",
      imageSrc:
        "https://webassets.linkretail.com/wp-content/uploads/2022/02/linkretail_heatmap_retail_image.png",
    },
    {
      id: "yearly",
      label: "Yearly",
      imageSrc:
        "https://www.aboutinsider.com/wp-content/uploads/2022/06/Passersby-Summation-_-Tue_-24th-May.png",
    },
    {
      id: "custom",
      label: "Custom",
      imageSrc:
        "https://www.dahuasecurity.com/asset/upload/uploads/soft/20210625/Catalog_WizMind_V2.0_EN_202105-%2832P%29.pdf",
    },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <Navbar />
      <div className="m-10 p-6 bg-sky-700 rounded-lg">
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            className="w-full flex -mb-px text-sm font-medium text-center"
            id="myTab"
            role="tablist"
          >
            {tabs.map((tab) => (
              <li
                className={`mr-2 ${
                  activeTab === tab.id ? "border-b-2 text-yellow-300" : ""
                }`}
                key={tab.id}
                role="presentation"
              >
                <button
                  className={`inline-block p-4 rounded-t-lg ${
                    activeTab === tab.id
                      ? ""
                      : "hover:text-yellow-300 hover:border-yellow-300 dark:hover:text-yellow-300"
                  }`}
                  id={`${tab.id}-tab`}
                  onClick={() => handleTabClick(tab.id)}
                  type="button"
                  role="tab"
                  aria-controls={tab.id}
                  aria-selected={activeTab === tab.id}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div id="myTabContent">
          {tabs.map((tab) => (
            <TabContent
              key={tab.id}
              id={tab.id}
              activeTab={activeTab}
              imageSrc={tab.imageSrc}
              content={
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the{" "}
                  <strong className="font-medium text-gray-800 dark:text-white">
                    {`${tab.label} tab's associated content`}
                  </strong>
                  . Clicking another tab will toggle the visibility of this one
                  for the next. The tab JavaScript swaps classes to control the
                  content visibility and styling.
                </p>
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HeatMaps;
