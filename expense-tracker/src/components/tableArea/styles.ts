import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    background-color: #20212c;
    padding: 20px;
    box-shadow: 0px 0px 6px #cccccc;
    border-radius: 10px;
    margin-top: 20px;
    color: #ffffff;
`;

export const TableHeadColumn = styled.th<{ width?: number}>`
    width: ${props => props.width ? `${props.width}px` : 'auto'}
    padding: 10px 0px;
    text-align: left;
`;