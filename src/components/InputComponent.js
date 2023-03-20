import StyledInputComponent from "./styles/InputComponent.styled";

const InputComponent = (props) => {
  const {
    onSubmitHandler,
    addNewTask,
    toDo,
    getTaskTimeHandler,
    time,
    getDescriptionHandler,
    description,
    isToDoValid,
    isTimeValid,
    isDescriptionValid,
  } = props;


  return (
    <StyledInputComponent isToDoValid={isToDoValid} isTimeValid={isTimeValid} isDescriptionValid={isDescriptionValid}>
      <form onSubmit={onSubmitHandler}>
        <div className="input-fields">
          <div>
            <input
              type="text"
              onChange={addNewTask}
              value={toDo}
              placeholder="New task"
            />
            <input type="time" onChange={getTaskTimeHandler} value={time} />
          </div>

          <textarea
            onChange={getDescriptionHandler}
            value={description}
            placeholder="Task description..."
            defaultValue={""}
          ></textarea>
        </div>

        <button type="submit">Add</button>
      </form>
    </StyledInputComponent>
  );
};

export default InputComponent;
