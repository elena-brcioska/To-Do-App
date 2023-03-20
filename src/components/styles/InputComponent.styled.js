import styled from "styled-components";

const StyledInputComponent = styled.div`
    margin-bottom: 40px;

  form {
    display: flex;
  }

  button {
    font-weight: bold;
    background: #ffe1e1;
    border: none;
    border-radius: 10px;
    padding: 0 20px;
    height: 35px;
    box-shadow: 6px 4px 10px 1px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 6px 4px 10px 1px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 6px 4px 10px 1px rgba(0, 0, 0, 0.15);
  }

  input, textarea {
    border-radius: 10px;
    padding: 10px;
    margin: 0 5px 10px 0;
    box-shadow: 3px 3px 5px 1px rgba(0,0,0,0.21) inset;
    -webkit-box-shadow:: 3px 3px 5px 1px rgba(0,0,0,0.21) inset;
    -moz-box-shadow: 3px 3px 5px 1px rgba(0,0,0,0.21) inset;
  }

  input[type="text"] {
    background: ${(props) => props.isToDoValid ? "ghostwhite" : "#EF9F9F"};
    border: ${(props) => props.isToDoValid ? "none;" : "1px solid #990000;"}
  }

  input[type="time"] {
    background: ${(props) => props.isTimeValid ? "ghostwhite" : "#EF9F9F"};
    border: ${(props) => props.isTimeValid ? "none;" : "1px solid #990000;"}
  }

  textarea {
    min-height: 40px;
    background: ${(props) => props.isDescriptionValid ? "ghostwhite" : "#EF9F9F"};
    border: ${(props) => props.isDescriptionValid ? "none;" : "1px solid #990000;"}
  }


  .input-fields {
    display: flex;
    flex-direction: column;
    width: 90%;
  }

  .input-fields div {
    display: flex;
  }
`;

export default StyledInputComponent;
