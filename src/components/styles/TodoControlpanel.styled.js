import styled from "styled-components";

const StyledTodoControlPanel = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    font-weight: bold;
    background: #ffe1e1;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 6px 4px 10px 1px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 6px 4px 10px 1px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 6px 4px 10px 1px rgba(0, 0, 0, 0.15);
  }

  button {
    color: #3c4048;
    border: none;
    border-radius: 10px;
    padding: 10px;
    font-weight: bold;
    margin-left: 10px;
    box-shadow: 6px 4px 10px 1px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 6px 4px 10px 1px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 6px 4px 10px 1px rgba(0, 0, 0, 0.15);
  }

  .delete-btn {
    background: #D8D9C;
  }

  .complete-btn {
    background: #ffe1e1;
  }
`;

export default StyledTodoControlPanel;
