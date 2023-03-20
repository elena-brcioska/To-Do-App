import "./App.css";
import { useEffect, useState } from "react";
import InputComponent from "./components/InputComponent";
import TaskContainerComponent from "./components/TaskContainerComponent";
import TodoControlPanel from "./components/TodoControlPanel";

function App() {
  const [toDos, setToDos] = useState(() => {
    return JSON.parse(localStorage.getItem("ToDos")) || [];
  });
  const [toDo, setToDo] = useState("");
  const [isToDoValid, setIsToDoValid] = useState(true);

  const getTodaysDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const [date, setDate] = useState(getTodaysDate());
  const [time, setTime] = useState(null);
  const [isTimeValid, setIsTimeValid] = useState(true);

  const [description, setDescription] = useState("");
  const [isDescriptionValid, setIsDescriptionValid] = useState(true);

  const [filteredToDos, setFilteredToDos] = useState(
    [...toDos].filter((todo) => todo.date === date)
  );

  const [editToDo, setEditToDo] = useState(null);
  const [editTask, setEditTask] = useState("");
  const [isEditNameValid, setIsEditNameDoValid] = useState(true);

  const [editDescription, setEditDescription] = useState("");
  const [isEditDescriptionValid, setIsEditDescriptionDoValid] = useState(true);

  const compareByTime = (a, b) => {
    if (a.time.split(":")[0] < b.time.split(":")[0]) {
      return -1;
    }
    if (a.time.split(":")[0] > b.time.split(":")[0]) {
      return 1;
    }

    if (a.time.split(":")[1] < b.time.split(":")[1]) {
      return -1;
    }
    if (a.time.split(":")[1] > b.time.split(":")[1]) {
      return 1;
    }

    return 0;
  };

  const compareByCompleted = (a, b) => (b.completed ? -1 : 1);

  useEffect(() => {
    const temp = localStorage.getItem("toDos");
    const loadedToDos = JSON.parse(temp);

    if (loadedToDos) {
      setToDos(loadedToDos);
    }

  }, []);

  useEffect(() => {
    const toDosJson = JSON.stringify(toDos);
    localStorage.setItem("ToDos", toDosJson);
  }, [toDos]);

  useEffect(() => {
    setFilteredToDos(
      [...toDos]
        .filter((todo) => todo.date === date)
        .sort(compareByTime)
        .sort(compareByCompleted)
    );
  }, [toDos]);

  const addNewTask = (e) => {
    setIsToDoValid(true);
    setToDo(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (
      toDo.trim().length > 0 &&
      time &&
      description.trim().length > 0 &&
      description.length < 51
    ) {
      const newToDo = {
        id: new Date().getTime(),
        task: toDo,
        checked: false,
        date: date,
        time: time,
        description: description,
        completed: false,
      };

      setToDos([...toDos].concat(newToDo));
      setToDo("");
      setTime(null);
      setDescription("");
      setIsToDoValid(true);
      setIsTimeValid(true);
      setIsDescriptionValid(true);
    } else {
      if (toDo.trim().length <= 0) {
        setIsToDoValid(false);
      }

      if (!time) {
        setIsTimeValid(false);
      }

      if (description.trim().length === 0 || description.length > 51) {
        setIsDescriptionValid(false);
      }
    }
  };

  const deleteClickHandler = (id) => {
    const newToDos = [...toDos].filter((el) => el.id !== id);
    setToDos(newToDos);
  };

  const toggleCheckedHandler = (id) => {
    const updatedToDos = [...toDos].map((todo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    });

    setToDos(updatedToDos);
  };

  const editTaskOnChangeHandler = (e) => {
    setEditTask(e.target.value);
    console.log(editTask)
  };

  const editDescriptionOnChangeHandler = (e) => {
    setEditDescription(e.target.value);
  };

  const saveToDo = (id) => {
    const updatedToDos = [...toDos].map((todo) => {
      if (todo.id === id) {
        todo.task = editTask;
        todo.description = editDescription;
      }
      return todo;
    });

    setToDos(updatedToDos);
    setEditToDo(null);
    setEditTask("");
    setEditDescription("");
  };

  const cancelEdit = () => {
    setEditToDo(null);
    setEditTask("");
    setEditDescription("");
  }

  const getTaskTimeHandler = (e) => {
    setIsTimeValid(true);
    setTime(e.target.value);
  };

  const getDescriptionHandler = (e) => {
    setIsDescriptionValid(true);
    setDescription(e.target.value);
  };

  const changeListDate = (e) => {
    setDate(e.target.value);
    const updatedToDos = toDos
      .filter((todo) => todo.date === e.target.value)
      .sort(compareByTime);
    setFilteredToDos(updatedToDos);
  };

  const deleteTasks = () => {
    const updatedToDos = toDos.filter((todo) => todo.checked === false);
    setToDos(updatedToDos);
  };

  const setCompletedTask = () => {
    const updatedToDos = [...toDos].map((todo) => {
      if (todo.checked) {
        todo.completed = true;
      }
      return todo;
    });

    setToDos(updatedToDos);
  };

  return (
    <div className="App">
      <div className="main-container">
        <div className="media-wrapper">
          <div className="top-container">
            <InputComponent
              toDo={toDo}
              onSubmitHandler={onSubmitHandler}
              getTaskTimeHandler={getTaskTimeHandler}
              getDescriptionHandler={getDescriptionHandler}
              addNewTask={addNewTask}
              isToDoValid={isToDoValid}
              isDescriptionValid={isDescriptionValid}
              isTimeValid={isTimeValid}
              setTime = {setTime}
              toDos={toDos}
              setDescription={setDescription}
            />

            <h1>ToDo</h1>
          </div>

          <TodoControlPanel
            changeListDate={changeListDate}
            date={date}
            deleteTasks={deleteTasks}
            setCompletedTask={setCompletedTask}
          />

          <TaskContainerComponent
            toDos={filteredToDos}
            editTaskOnChangeHandler={editTaskOnChangeHandler}
            editDescriptionOnChangeHandler={editDescriptionOnChangeHandler}
            editTask={editTask}
            editDescription={editDescription}
            cancelEdit={cancelEdit}
            deleteClickHandler={deleteClickHandler}
            toggleCheckedHandler={toggleCheckedHandler}
            saveToDo={saveToDo}
            editToDo={editToDo}
            setEditToDo={setEditToDo}
            isEditNameValid={isEditNameValid}
            isEditDescriptionValid={isEditDescriptionValid}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
