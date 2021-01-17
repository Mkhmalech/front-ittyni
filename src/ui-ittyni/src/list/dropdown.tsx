import styled from "../../../theme/styled-components";

export const ListDropdown = styled('div')<{hide : boolean}>`
position: absolute;
background: white;
width: 99.5%;
top: 38px;
border: 1px solid;    
display : ${({hide})=> hide? "none" : "block"}
&>ul{
    overflow-y : scroll;
    max-height : 400px;
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
}
ul {
    list-style: none;
    
    li {
        padding: .5em;
        cursor: pointer;
        &:not(:first-child) {
            border-top: .1em dashed #dde4e6;
        }
        ul>li{
            &:focus,
            &:hover {background: #ecf0f1;}
            &:active {background: #fbfcfc;}
        }
    }
}

`