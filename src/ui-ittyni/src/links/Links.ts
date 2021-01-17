import styled from "../../../theme/styled-components"
import { Link } from "react-router-dom"
import { device } from "../../../theme"

export const SearchLink = styled('button')`
  display : none;
  ${device.mobile`
    flex: 1 0;
    display: flex;
    padding: 10px;
    text-decoration: none;
    align-items: center;
    border : none
    span { 
      text-align: center;
      width: 100%;
      font-size: 32px;
    }
  `}
`

export const LoginLink = styled(Link) <{ bg?: boolean }>`
  flex: 1 0;
  display: flex;
  padding: 10px;
  text-decoration: none;
  align-items: center;
  &, * { 
    ${({ bg }) => bg ?
    'background : #042759; color : #ffffff' :
    'background : #ffffff;'
  } }
  i { background : inherit; margin-right: 5px;}
  span { 
    text-align: center;
    ${device.mobile`
      width: 100%;
      font-size: 32px;
      &.text {display : none;}
    `}
  }
`
export const AdminLink = styled('a')`
  flex: 1 0;
  display: flex;
  padding: 10px;
  text-decoration: none;
  align-items: center;
  &, * { background : #ffffff; }
  i { background : inherit; margin-right: 5px;}
  span { 
    text-align: center;
    ${device.mobile`
      width: 100%;
      font-size: 32px;
      &.text {display : none;}
    `}
  }
`

export const LoginLinkText = styled('div')`
  padding: 5px 0 0 5px;
  i {
    margin-right : 5px;
  }
`
export const LoginLinkIcon = styled('div')`
  border-left: 1px solid;
  padding-left : 10px;
  margin-bottom: 20px;
`
export const TestLink = styled(Link)`
text-decoration : none;
color : inhert;
`