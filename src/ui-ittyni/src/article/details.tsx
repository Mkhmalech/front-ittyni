import styled from "../../../theme/styled-components";

export const ArticleDetails = styled('div')`
    padding : 15px;
    :not(last-child) {border-bottom : 1px dotted #000000;}
    h2 {
        margin-bottom : 15px
    }
    span {
        font-size : 18px;
        font-weight : 700;
    }
`