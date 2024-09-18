import React, { useEffect, useState } from "react";
import Items from "./Items";
import AddTaskDialog from "./AddTaskDialog";
import ViewTaskDialog from "./ViewTaskDialog";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [openAddTask, setOpenAddTask] = useState(false);
  const [openViewTask, setOpenViewTask] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      var request = await fetch(process.env.REACT_APP_BACKEND_URL);
      var response = await request.json();
      setTodoList(response);
      console.log("fetch response", response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {openAddTask && (
        <AddTaskDialog setDialog={setOpenAddTask} update={fetchData} />
      )}
      {openViewTask && (
        <ViewTaskDialog
          setDialog={setOpenViewTask}
          data={selectedTask}
          update={fetchData}
        />
      )}
      <div className="border rounded-lg w-1/3 bg-[#DADCE0] flex flex-col gap-2 px-5 py-3">
        <h3 className="font-bold text-xl text-start">MERN Todo App</h3>
        <input
          className="border border-[#BDC1C6] bg-[#DADCE0] rounded-md px-3 py-1 focus:outline-none"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex flex-col gap-2 px-5 py-3 max-h-64 overflow-auto">
          {todoList.map((data) => {
            if (data.title.includes(search)) {
              return (
                <Items
                  key={data._id}
                  title={data.title}
                  done={data.finished}
                  todoData={data}
                  viewTask={setOpenViewTask}
                  selectTask={setSelectedTask}
                  update={fetchData}
                />
              );
            }
          })}

          {/* <Items title={"newtitle"} viewTask={setOpenViewTask} /> */}
        </div>
        <button
          onClick={() => setOpenAddTask(true)}
          className="bg-[#BDC1C6] hover:bg-[#DADCE0] w-full border border-[#BDC1C6] rounded-lg py-1"
        >
          Add Task
        </button>
      </div>
    </>
  );
}

export default Todo;
