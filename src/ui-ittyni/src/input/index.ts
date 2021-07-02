import styled from "../../../theme/styled-components";

export const BubbleRadio = styled('div')<{selected?:boolean}>`
    max-width: 100px;
    padding: 2px 12px;
    text-align : center;
    background-color: ${({selected})=>selected?'#d3c8f5':"#f0f3fa"} !important;
    border-radius: 14px;
    box-sizing: border-box;
    flex: none;
    font-size: 16px;
    line-height: 24px;
    color: #131722;
    cursor: default;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor:pointer
`