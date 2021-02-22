

import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #95dada;
    border: 1px dolid grey;
    border-radius: 5px;
    padding: 25px;
    cursor: pointer;
    -moz-osx-font-smoothing: greyscale;
    backface-visibility: hidden;
    transform: translate(0);
    transition: transform 0.25s ease-out;

    &:hover {
        transform: scale(1.05);
    }
`