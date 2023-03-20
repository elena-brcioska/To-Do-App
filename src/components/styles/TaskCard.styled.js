import styled from "styled-components";

const StyledTaskCard = styled.div`
    background: ${(props) => props.toDo.completed ? "#EAEAEA" : "#D8D9CF"};
    padding: 30px;
    margin: 20px 0;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.toDo.completed ? "#B2B2B2" : "#000"};
    box-shadow: 3px 4px 6px 1px rgba(0, 0, 0, 0.2);
    // -webkit-box-shadow: 3px 4px 6px 1px rgba(0, 0, 0, 0.2);
    // -moz-box-shadow: 3px 4px 6px 1px rgba(0, 0, 0, 0.2);
  }

    h2, p {
        margin: 0;
        padding: 0;
    }

    .task-container {
        display: flex;
        justify-content: flex-start;
    }

    .task {
        display: flex;
    }

    input {
        background: ${(props) => props.isEditNameValid ? "#fff" : "red"};
        font-size: 12px;
        border-radius: 10px;
        padding: 6px 10px;
        border: none;
        margin: 7px 20px 0 0;
        align-self: flex-start;
        box-shadow: 3px 3px 5px 1px rgba(0,0,0,0.21) inset;
        -webkit-box-shadow:: 3px 3px 5px 1px rgba(0,0,0,0.21) inset;
        -moz-box-shadow: 3px 3px 5px 1px rgba(0,0,0,0.21) inset;
    }

    button {
        display: ${(props) => props.toDo.completed ? "none" : "block"};
        color: #E97777;
        background: transparent;
        text-decoration: underline;
        border: none;
        margin: 0 10px;
    }

    .edit-task-controls {
        display: flex;
        align-self: center;
    }

    .edit-task-controls button {
        margin: 0;
    }
  `;

export default StyledTaskCard;