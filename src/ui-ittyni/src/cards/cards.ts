import { Link } from "react-router-dom";
import styled from "../../../theme/styled-components";

export const Card = styled('div')`
    *{background : inherit;}
    background-color: rgba(0,0,0, .05);
    box-shadow: -0.1rem 1.7rem 6.6rem -3.2rem rgba(0,0,0,0.5);
    height: 10rem;
    position: relative;
    transition: all 1s ease;
    width: 10rem;
    &>div {
        color: #fafbfa;
        background-color: #fafbfa;
        height: 10rem;
        width: 10rem;
    }
`
export const CardBody = styled('div')`
    background: #47c2d7;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 90%, 57% 90%, 50% 100%, 43% 90%, 0 90%);
    display: flex;
    flex-direction: column;
    height: 6rem;
    justify-content: center;
    padding: .75rem;
    
    i {
        font-size: 55px;
        height: 3.25rem;
        margin-top: -.5rem;
        width: 3.25rem;
    }
    h2 {
        font-size: 1.5rem;
        margin-top: .25rem;
    }
    &>p {
        font-size: 1.2rem;
        margin-top: -.2rem;
    }
}
`
export const CardFooter = styled('div')`
    align-items: center;
    display: flex;
    justify-content: center;
    p {
        color: #2aaac1;
        font-size: 1.3rem;
        font-weight: 800;
        margin-top: .2rem;
    }
`
export const CardLink = styled(Link)`
    text-decoration: none;
    flex: 1;
    margin-bottom: 30px;
`