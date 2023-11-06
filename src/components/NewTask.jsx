import { useRef, useState } from "react";
import Modal from "./Modal";

export default function Tasks({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState("");
  const modal = useRef();

  const handleChange = (e) => {
    setEnteredTask(e.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }

    onAddTask(enteredTask);
    setEnteredTask("");
  };

  return (
    <>
      <Modal ref={modal} btnCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">
          Invalid input.
        </h2>
        <p className="text-stone-600 mb-4">You can't have an empty task.</p>
        <p className="text-stone-600 mb-4">
          Please make sure you get it right next time by providing a valid value
          :)
        </p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          onChange={handleChange}
          value={enteredTask}
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          type="text"
        />
        <button
          onClick={handleClick}
          className="text-stone-700 hover:text-stone-950"
        >
          + Add task
        </button>
      </div>
    </>
  );
}
