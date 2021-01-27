import * as React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from '../theme/styled-components';

interface INavTabsProps {
}

export const NavTabs: React.FC<INavTabsProps> = (props) => {
    const { category }: any = useParams();

    const [selectNav, setSelectNav] = React.useState(true)

    return (
        <Nav bg>
            {(category === "actes-tarifs") && <>
                <Link to="/actes-tarifs/nabm/">NABM</Link>
                <Link to="/actes-tarifs/ngap/">NGAP</Link>
                <Link to="/actes-tarifs/ccam/">CCAM</Link>
                <Link to="/actes-tarifs/atc/">MEDICAMENTS</Link>
            </>}
            {(category === "annuaire") && <>
                <Link to="/annuaire/pharmacies/maroc">PHARMACIES</Link>
                <Link to="/annuaire/labm/maroc">LABORATOIRES</Link>
                <Link to="/annuaire/cabinets/maroc">CABINETS</Link>
                <Link to="#">CLINIQUES</Link>
            </>}
        </Nav>
    );
};

const Nav = styled('nav') <{ bg?: boolean }>`
    height: 50px;
    display : flex;
    width : 100%;
    overflow-x: scroll;
    &::-webkit-scrollbar {display : none;}
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &, * {
        ${({ bg }) => bg ?
        'background : #042759; color : #ffffff' :
        'background : #ffffff;'
    }
    }
    a {
        padding : 15px;
        :not(:last-child) {
            border-right: 1px solid rgba(114, 124, 135, 0.2);
        }
    }
`
