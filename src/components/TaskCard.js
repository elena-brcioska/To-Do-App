import StyledTaskCard from "./styles/TaskCard.styled";

const TaskCard = (props) => {
  const {
    toDo,
    editTaskOnChangeHandler,
    editDescriptionOnChangeHandler,
    editTask,
    editDescription,
    toggleCheckedHandler,
    saveToDo,
    setEditToDo,
    editToDo,
    cancelEdit,
    isEditNameValid,
    isEditDescriptionValid
  } = props;

  return (
    <StyledTaskCard toDo = {toDo} key={toDo.id} isEditNameValid={isEditNameValid} isEditDescriptionValid={isEditDescriptionValid} >
      <div className="task-container">
        {editToDo === toDo.id ? (
          <div>
            <input
            type="text"
            onChange={editTaskOnChangeHandler}
            value={editTask}
            placeholder="Enter new task name"
          /><br/>
          <input
            type="text"
            onChange={editDescriptionOnChangeHandler}
            value={editDescription}
            placeholder="Enter new task description"
          />
          </div>
          
        ) : (
          <div className="task">
            <input
              type="checkbox"
              onChange={() => toggleCheckedHandler(toDo.id)}
              checked={toDo.checked}
            />
            <div className="task-name">
              <h2>{toDo.task}</h2>
              <p>{toDo.description}</p>
            </div>
          </div>
        )}

        {editToDo === toDo.id ? (
          <div className="edit-task-controls">
            <button onClick={() => saveToDo(toDo.id)}>Save</button>
            <button onClick={() => cancelEdit()}>Cancel</button>
          </div>
          
        ) : (
          <button onClick={() => setEditToDo(toDo.id)}>Edit</button>
        )}
      </div>

      <div className="time-container">
        <h3>{toDo.time}</h3>
      </div>
    </StyledTaskCard>
  );
};

export default TaskCard;
