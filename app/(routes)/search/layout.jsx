import React  from "react";
import CategorySideBar from "./_components/CategorySideBar";



const layout= ({ children }) => {
  return (
    <div>
      <div className="grid grid-col-1 md:grid grid-cols-4">
      <div className="hidden md:block">
       
       <CategorySideBar />
      </div>
      <div className="md:col-span-3 ">{children}</div>
    </div>
    </div>
  );
};

export default layout;
