import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = (props) => {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const entereDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      entereDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    props.onSave({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: entereDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} btnCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">
          Invalid input.
        </h2>
        <p className="text-stone-600 mb-4">
          Oopsie... looks like you forgot that a real project needs all the
          inputs filled.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you get it right next time by providing valid values
          :)
        </p>
      </Modal>
      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={props.onClose}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" isTextarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
};
export default NewProject;
