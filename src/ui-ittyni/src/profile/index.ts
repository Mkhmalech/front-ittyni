import { device } from '../../../theme'
import styled from '../../../theme/styled-components'

export const ProfileContainer = styled('div')`
    display : grid;
    *{ background : #fff;}
    grid-template-rows : auto auto;
    row-gap : 10px;
    
`
export const ProfileInfo = styled('div')`
    display : grid;
    grid-template-columns : 20% auto;
    padding : 10px;
    box-shadow: 1px 1px 2px 0 #cccccc;
    margin: 5px;
    text-align : center;
    ${device.mobile`
        grid-template-rows : auto auto ;
        grid-template-columns : none;
    `}
`
export const ProfileForm = styled('div')`
    background: linear-gradient(to right, #529a52 20%, #ffff 0%);
    padding : 10px;
    box-shadow: 1px 1px 2px 0 #cccccc;
    margin: 5px;
    cursor : pointer;
`