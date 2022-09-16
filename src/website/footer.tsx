import * as React from 'react';
import { Ico } from '../react-icons-sc/src/ico';
import { device } from '../theme';
import styled from '../theme/styled-components';
import {whatsapp} from '../assets/icons/whatsapp'


export const Footer: React.FunctionComponent<any> = (props) => {
  return (<>
    <FooterCategory>
      <FooterAbout>
        <h6>About</h6>
        <p className="text-justify">iTTyni.com est une <i>Application Medical</i> cherche a informatiser les donnees medical et a faciliter l acces aux donnees pour mieux les utiliser a profit des patients</p>
      </FooterAbout>
      <FooterSubCategory>
        <div style={{textAlign:"justify"}}>
          <h6>Categories</h6>
          <ul className="footer-links">
            <li><a href="https://ittyni.com/annuaire/">Annuaire</a></li>
            <li><a href="https://ittyni.com/actes-tarifs/ngap/">Actes Medicales</a></li>
            <li><a href="https://ittyni.com/actes-tarifs/nabm/">Actes Biologiques</a></li>
            <li><a href="https://ittyni.com/actes-tarifs/atc/">Medicaments</a></li>
          </ul>
        </div>
        <div style={{textAlign:"justify"}}>
          <h6>Contact</h6>
          <ul className="footer-links">
            <li style={{display: "flex", alignItems:"center"}}><Ico {...whatsapp} width="30" height="30" color='darkgreen'/>
            <span style={{marginLeft:"5px"}}>+212708239690</span></li>
          </ul>
        </div>
      </FooterSubCategory>
    </FooterCategory>
    <hr />
    <FooterCategory>
      <div style={{width:'100%', textAlign: "center"}}>
        <p className="copyright-text">Copyright © 2019 iTTyni V1.0.1 instable
      </p>
      </div>
    </FooterCategory>

  </>
  );
};
{/* 

<div className="col-md-4 col-sm-6 col-xs-12">
  <ul className="social-icons">
    <li><a className="facebook" href="#"><i className="fab fa-facebook-f"></i></a></li>
    <li><a className="twitter" href="#"><i className="fas fa-twitter"></i></a></li>
    <li><a className="dribbble" href="#"><i className="fas fa-dribbble"></i></a></li>
    <li><a className="linkedin" href="#"><i className="fas fa-linkedin"></i></a></li>
  </ul>
</div>
*/}
const FooterAbout = styled('div')`
  h6{
    justify: left;
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 5px;
    letter-spacing: 2px;
  }
  p{
    justify: justify;
  }
`
const FooterCategory = styled('div')`
  display : flex;
  flex-wrap : nowrap;
  ${device.mobile`
    flex-wrap : wrap;
  `}
  ${device.tablet`
    flex-wrap : wrap;
  `}
`
const FooterSubCategory = styled('div')`
  display : flex;
  flex-wrap : wrap;
  width: 100%;
  div{
    flex-grow : 1;
    ul{
      padding-left: 0;
      list-style: none;
    }
    h6 {
      color: #fff;
      font-size: 16px;
      text-transform: uppercase;
      margin-top: 5px;
      letter-spacing: 2px;
    }
  }
`