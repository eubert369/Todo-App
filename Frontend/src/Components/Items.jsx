import React from "react";

function Items({ title, viewTask, done, todoData, selectTask, update }) {
  const handleSelect = async () => {
    try {
      var request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/find/${todoData._id}`
      );
      var response = await request.json();
      console.log("click response", response);

      selectTask(response);
      viewTask(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCheckbox = async () => {
    try {
      var request = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/finish/${todoData._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ finished: !todoData.finished }),
        }
      );
      var response = await request.json();
      console.log("checkbox response", response);
      // setCheckBox(!response.data.finished);
      update();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="checkbox"
        checked={todoData.finished}
        onChange={handleCheckbox}
      />
      <div className="flex justify-between w-full">
        <button
          className={`${
            todoData.finished ? "line-through" : "hover:underline"
          } font-bold w-full text-start`}
          onClick={handleSelect}
        >
          {title}
        </button>{" "}
        {/* <button className="flex items-center">
          <img
            width="15"
            src="https://img.icons8.com/ios-glyphs/30/filled-trash.png"
            alt="filled-trash"
          />
        </button> */}
      </div>
    </div>
  );
}

export default Items;
