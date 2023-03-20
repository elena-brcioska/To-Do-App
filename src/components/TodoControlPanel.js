import StyledTodoControlPanel from "./styles/TodoControlpanel.styled";

const TodoControlPanel = (props) => {
  const { changeListDate, date, deleteTasks, setCompletedTask } = props;

  return (
    <StyledTodoControlPanel>
      <form>
        <input type="date" onChange={changeListDate} value={date} />
      </form>
      <div className="cp-btns">
        <button className="delete-btn" onClick={deleteTasks}>Delete</button>
        <button className="complete-btn" onClick={setCompletedTask}>Completed</button>
      </div>
    </StyledTodoControlPanel>
  );
};

export default TodoControlPanel;
