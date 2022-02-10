import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (`
border-radius: 15px;
padding: 10px;
margin: 20px 0px;
display: flex;
align-items: center;
background-color: #20212c;
    
    input {
            width: 25px;
            height: 25px;
            margin-right: 15px;
        }

    label {
            color: #ccc;
            line-height: 25px;
            font-size: 1.3rem;
            text-decoration: ${done ? 'line-through' : 'initial'};
        }
`
));