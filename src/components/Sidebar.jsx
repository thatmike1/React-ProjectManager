import { useState } from "react";
import Button from "./Button";
const Sidebar = (props) => {
  const [selectedProjectID, setSelectedProjectID] = useState(undefined);

  const selectProject = (id) => {
    setSelectedProjectID(id);
    props.onSelectProject(id);
  };

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={props.onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {props.projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selectedProjectID) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={project.id} className="flex justify-between my-4">
              <button
                className={cssClasses}
                onClick={() => selectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
