import styled from "styled-components";

export const Container = styled.div `
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0px;
    display: flex;
    align-items: center;

    .image {
        margin-right: 5px;
    }

    input {
        border: 0px;
        background: none;
        outline: 0px;
        color: #fff;
        font-size: 1rem;
        flex: 1;
    }
`;