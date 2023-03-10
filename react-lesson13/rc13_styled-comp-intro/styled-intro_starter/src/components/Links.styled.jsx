import styled, { css } from 'styled-components';

const Links = styled.a`
    text-decoration: none;
    font-size: 3rem;
    &:hover{
        font-size: 5rem;
        font-weight: 900;
    }

    ${({small}) => small && css`
        background-color: black;
        padding: 1rem;

    `}
`

export default Links;
