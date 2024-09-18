import React, { useState } from "react";

function ViewTaskDialog({ setDialog, data, update }) {
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const [done, setDone] = useState(data.finished);

  const handleUpdate = async (id) => {
    try {
      var request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/update/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            description: description,
            finished: done,
          }),
        }
      );
      var response = await request.json();
      console.log("update response", response);
      update();
      setDialog(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      var request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      var response = await request.json();
      console.log(response);
      update();
      setDialog(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="absolute w-full h-full bg-[#00000060] flex justify-center items-center">
      <div className="w-1/4 bg-[#DADCE0] max-h-52 px-4 py-2 rounded-lg flex flex-col gap-2">
        {/* <h3 className="text-lg font-bold">Add Task</h3> */}
        <div className="flex border-b border-black">
          <input
            className=" bg-[#DADCE0] focus:outline-none px-2 py-1 font-bold w-full"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="checkbox"
            checked={done}
            onChange={() => setDone(!done)}
          />
        </div>
        <textarea
          className="resize-none bg-[#DADCE0] focus:outline-none text-sm px-2 h-48"
          placeholder="Write a description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex justify-between gap-3 text-xs">
          <button
            className="bg-gray-400 px-3 py-1 rounded-md border border-gray-400 hover:bg-[#DADCE0]"
            onClick={() => setDialog(false)}
          >
            Close
          </button>
          <div className="flex gap-2">
            <button
              className="bg-red-500 px-3 py-1 rounded-md border border-red-500 hover:bg-[#DADCE0]"
              onClick={() => handleDelete(data._id)}
            >
              Delete
            </button>
            <button
              className="bg-blue-600 px-3 py-1 rounded-md border border-blue-600 hover:bg-[#DADCE0]"
              onClick={() => handleUpdate(data._id)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTaskDialog;
