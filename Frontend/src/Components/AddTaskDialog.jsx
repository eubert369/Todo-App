import React, { useState } from "react";

function AddTaskDialog({ setDialog, update }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = async () => {
    try {
      if (title.length > 0 && description.length > 0) {
        var request = await fetch(`${process.env.REACT_APP_BACKEND_URL}/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            description: description,
            finished: false,
          }),
        });
        var response = await request.json();
        update();
        console.log("response", response);

        setDialog(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="absolute w-full h-full bg-[#00000060] flex justify-center items-center">
      <div className="w-1/4 bg-[#DADCE0] max-h-52 px-4 py-2 rounded-lg flex flex-col gap-2">
        <h3 className="text-lg font-bold">Add Task</h3>
        <input
          className="border-b border-black bg-[#DADCE0] focus:outline-none px-2 py-1 font-bold"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className="resize-none bg-[#DADCE0] focus:outline-none text-sm px-2 h-48"
          placeholder="Write a description..."
        />
        <div className="flex justify-end gap-3 text-xs">
          <button
            className="bg-gray-400 px-3 py-1 rounded-md border border-gray-400 hover:bg-[#DADCE0]"
            onClick={() => setDialog(false)}
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 px-3 py-1 rounded-md border border-blue-600 hover:bg-[#DADCE0]"
            onClick={addTask}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTaskDialog;
