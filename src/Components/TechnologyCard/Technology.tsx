import { useState } from "react";
import type { TechnologyType } from "../../types/technologyType";


const Technology = ({technologies}: {technologies: TechnologyType[]}) => {
     const [selectedTechnologies, setSelectedTechnologies] = useState<boolean>(false);
    console.log(technologies);
    const handleAddToStack = () => {
        setSelectedTechnologies(true);
    };
    return (
        <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
                technologies.map((technology: TechnologyType) => {

                    return (
                        <div >                   
                            <div key={technology.id}className="flex h-[380px] flex-col rounded-2xl border border-gray-200 bg-white p-7  ">

            <div className="flex items-start justify-between">
              <img
                src={technology.icon} alt={`${technology.name} icon`} className="h-[40px] w-[40px] object-contain"/>
              {technology.badge && (
                <span className="rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
                  {technology.badge}
                </span>
              )}
            </div>
            <h3 className="mt-3 text-[18px] font-bold text-[#0F172A]">
              {technology.name}
            </h3>
            <p className="mt-3 text-[12px] flex-1 leading-7 text-gray-600">
              {technology.description}
            </p>          

            <div className="mt-6 flex items-center justify-between gap-2 text-sm">
              <span className="rounded-md text-[12px] bg-gray-100 px-3 py-1.5 text-gray-700">
                {technology.category}
              </span>
              <span className="rounded-md text-[12px] px-3 py-1.5 text-gray-700">
                {technology.difficulty}
              </span>
              <span className="flex items-center gap-1 font-medium text-gray-700">
                <span className="text-yellow-500">★</span>
                {technology.rating}
              </span>
            </div>    

            <button onClick={handleAddToStack}}
             className="mt-6 w-full text-[12px] rounded-lg bg-[#0A0F1D] py-3 font-semibold text-white transition hover:bg-[#1E293B]">
              Add to Stack
            </button>
          </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Technology;