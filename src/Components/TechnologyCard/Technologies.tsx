import { use, useState } from "react";
import type { TechnologyType } from "../../types/technologyType";
import Technology from "./Technology";
import Stack from "./Stack";
import { toast } from "react-hot-toast";


interface TechnologyProps{
    technologyPromise:Promise<TechnologyType[]>;
}
const Technologies = ({technologyPromise}:TechnologyProps) => {
    const [selectedTechnologies, setSelectedTechnologies] = useState<TechnologyType[]>([]);
    const technologies = use(technologyPromise);
    const handleSelectedTechnologies = (technology: TechnologyType):void => {
        const newSelectedTechnologies = [...selectedTechnologies, technology];
        setSelectedTechnologies(newSelectedTechnologies);
        toast.success(`${technology.name} added to stack`);
    };
    const removeSelectedTechnology = (technology: TechnologyType): void => {
        const newSelectedTechnologies = selectedTechnologies.filter(
            (tech) => tech.id !== technology.id
        );
        setSelectedTechnologies(newSelectedTechnologies);
    };
    return (
        
        <div className="container mx-auto">
            <h2 className="text-[36px] font-extrabold mb-0.5">Explore the <span className="bg-linear-to-r from-[#EC4899]  to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h2>
            <p className="mb-2 text-[#64748B]">Pick one technology per category to build your ideal stack.</p>
            <div className="grid items-start gap-8 lg:grid-cols-[1fr_300px]">
            <Technology technologies={technologies} handleSelectedTechnologies={handleSelectedTechnologies} selectedTechnologies={selectedTechnologies} removeSelectedTechnology={removeSelectedTechnology}></Technology>
            <Stack technologies={selectedTechnologies} onRemoveSelectedTechnology={removeSelectedTechnology}></Stack>
            </div>
        </div>
    );
};

export default Technologies;