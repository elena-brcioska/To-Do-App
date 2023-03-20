import TaskCard from "./TaskCard";
import StyledTaskContainerComponent from "./styles/TaskContainerComponent.styled";

const TaskContainerComponent = (props) => {
  const {
    toDos,
    editTaskOnChangeHandler,
    editDescriptionOnChangeHandler,
    editTask,
    editDescription,
    deleteClickHandler,
    toggleCheckedHandler,
    saveToDo,
    editToDo,
    setEditToDo,
    cancelEdit,
    isEditNameValid,
    isEditDescriptionValid,
  } = props;

  return (
    <StyledTaskContainerComponent style={{ overflow: "auto", height: "450px" }}>
      {toDos.map((toDo) => {
        return (
          <TaskCard
            toDo={toDo}
            editTaskOnChangeHandler={editTaskOnChangeHandler}
            editTask={editTask}
            deleteClickHandler={deleteClickHandler}
            toggleCheckedHandler={toggleCheckedHandler}
            saveToDo={saveToDo}
            editToDo={editToDo}
            setEditToDo={setEditToDo}
            editDescriptionOnChangeHandler={editDescriptionOnChangeHandler}
            editDescription={editDescription}
            cancelEdit={cancelEdit}
            isEditNameValid={isEditNameValid}
            isEditDescriptionValid={isEditDescriptionValid}
          />
        );
      })}
    </StyledTaskContainerComponent>
  );
};

export default TaskContainerComponent;
