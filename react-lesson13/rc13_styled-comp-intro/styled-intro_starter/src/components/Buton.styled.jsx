import styled from "styled-components"

export const Button = styled.button`
    /* background-color: blue;
    color: white; */

    background-color: ${(props) => props.primary ? "white" : "blue"};

    color: ${({primary}) => primary ? "blue" : "white"};

    width: 8rem;
    padding: 1rem 2rem;
    border: 5px solid red;
    border-radius: 1rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: large;
    &:hover {
        transform: scale(0.98);
        cursor: pointer;
    }
`

export const OZI = styled(Button)`
    background-color: ${({react}) => react ? "green" : "white"};
    color: ${({react}) => react ? "white" : "darkgreen" };
`