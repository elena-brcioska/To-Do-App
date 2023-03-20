import styled from "styled-components";

const StyledTaskContainerComponent = styled.div`
margin-top: 30px;

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ghostwhite;
  border-left: 4px dotted #D8D9CF;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ffe1e1;
  width: 50px;
  height: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #EF9F9F;
}
`

export default StyledTaskContainerComponent;