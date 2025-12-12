import React from "react";
import Link from "next/link";

export default  function CategoryCard({ category }) {
    return (
      <Link href={category.link} > <div className="group cursor-pointer">
            <div className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105`}>
                <div className="text-white flex flex-col items-center gap-3">
                    {category.icon}
                    <span className="font-semibold text-lg">{category.name}</span>
                </div>
            </div>
      </div></Link>
    );
}
