import type { TechnologyType } from "../../types/technologyType";

interface TechnologyProps {
    technologies: TechnologyType[];
    handleSelectedTechnologies: (technology: TechnologyType) => void;
    selectedTechnologies: TechnologyType[];
}
const Technology = ({technologies,handleSelectedTechnologies,selectedTechnologies}: TechnologyProps) => {
     
    console.log(technologies);
    const handleAddToStack = (technology:TechnologyType) => {
        handleSelectedTechnologies(technology);
    };
    const isSelected = (technology: TechnologyType) => selectedTechnologies.includes(technology);
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

            <button onClick={() => handleAddToStack(technology)} disabled={isSelected(technology)}
             className={`mt-6 w-full text-[12px] rounded-lg  py-3 
             font-semibold 
             ${(isSelected(technology))? "text-pink-700 bg-white border " : "bg-[#0A0F1D] text-white"}`}>
             {isSelected(technology) ? "Added to Stack" :"Add to Stack"}
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