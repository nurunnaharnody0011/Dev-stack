
import { CiCircleRemove } from "react-icons/ci";
import type { TechnologyType } from "../../types/technologyType";
import { MdNavigateNext } from "react-icons/md";
interface StackProps {
    technologies: TechnologyType[];
    onRemoveSelectedTechnology: (technology: TechnologyType) => void;
    onRemoveAllTechnologies: () => void;
}

const Stack = ({technologies, onRemoveSelectedTechnology, onRemoveAllTechnologies}: StackProps) => {
    return (
        <div>
            <div className=" top-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
  <h2 className="text-xl font-bold text-[#0F172A]">
    Your Stack
  </h2>

  <p className="mt-1 text-sm text-gray-500">
  {technologies.length === 0
    ? "No technologies selected yet."
    : `${technologies.length} ${
        technologies.length === 1
          ? "technology"
          : "technologies"
      } selected`}
</p>

  {technologies.length === 0 ? (
  <div className="mt-6 flex min-h-[250px] items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50">
    <p className="text-sm text-gray-400">
      Your stack is empty
    </p>
  </div>
) : (
  <div className="mt-6 space-y-3">
    {technologies.map((technology) => (
      <div
        key={technology.id}
        className="flex items-center gap-3 rounded-xl border border-pink-200 p-3 bg-pink-50"
        onClick={() => onRemoveSelectedTechnology(technology)}
      >
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-9 w-9 object-contain"
        />

        <div>
          <h3 className="font-semibold text-[#0F172A]">
            {technology.name}
          </h3>

          <p className="text-xs text-gray-500">
            {technology.category}
          </p>
        </div>
        <button
          className="ml-auto text-xs text-red-500 hover:underline"
          onClick={() => onRemoveSelectedTechnology(technology)}
        >
          <CiCircleRemove />

        </button>
      </div>
    ))}
  </div>
)}
  {technologies.length > 0 && (
    <div className="mt-6">
      <button
        className=" btn cursor-pointer text-xs bg-pink-50 text-pink-400 border-pink-200 border p-2 rounded-2xl"
        onClick={onRemoveAllTechnologies}
      >
        Remove All Technologies <MdNavigateNext />
      </button>
    </div>
  )}
</div>
        </div>
    );
};

export default Stack;