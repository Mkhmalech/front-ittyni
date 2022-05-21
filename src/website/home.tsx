import * as React from 'react';
import * as Wrapper from './wrappers'
import { GlobalStyle } from '../theme';
import Header from './header'
import { Link, Route, Redirect, useParams } from 'react-router-dom';
import styled from '../theme/styled-components';
import { AdminLink, LoginLink, LoginLinkIcon, LoginLinkText, SearchLink } from '../ui-ittyni/src/links/Links'
import { labRoutes } from '../lab-ittyni/src/routes'
import { connect, useSelector } from 'react-redux';
import { IttyniState } from '../store/index';
import { LabosLisitingByCity } from './labos/web/labobycity'
import { LabosLisiting } from './labos/web/LabosListing'
import { LaboDetails } from './labos/web/LaboDetails'
import { MedicalBook } from './medicalBook'
import { MedicalProcedures } from './medicalProced'
import { Pharmacies } from './pharmacies/pharmaListCities'
import { PharmaciesByCity } from './pharmacies/pharmaListCity'
import { PharmDetails } from './pharmacies/pharmaDetails'
import { DrugByAtcCode, DrugByCategory, DrugByChapter, DrugByGroup, DrugBySousChapter, MedicineDetails } from './medicine'
import { LabTestSearch } from '../lab-ittyni/src/labTests/web/LabTestSearch';
import { Footer } from './footer';
import { NgapByChapter, NgapByGroups, NgapByActes } from './ngap/ngap';
import { NgapActeDetails } from './ngap/ngapDetails';
import { Cabinets } from './cabinets/cabinetListCities';
import { CabinetsByCity } from './cabinets/cabinetListCity';
import { CabinetDetails } from './cabinets/cabinetDetails';
import { useGoogleOneTapLogin } from 'react-google-one-tap-login';
// import {Profile} from './user/profile'
// import controller
import * as ctrl from '../store/controller'
import * as ui from '../ui-ittyni/src/index'

const ButtonConnect: React.FC<any> = () => {

  useGoogleOneTapLogin({
    onError: error => console.log(false),
    onSuccess: response => ctrl.AuthByGoogle(response),
    googleAccountConfigs: {
      client_id: '802020826418-glf4trufm28c39aor8i1lmqt2d2331a7.apps.googleusercontent.com'
    },
  })

  return <><span><i className="fas fa-user" /> </span> <span className="text">Connecter</span></>
}
const UserButton : React.FC<any> = ({fname, lname, picture}) =>{

  return( <div style={{display: "grid"}}>
    <div style={{display: "grid", gridTemplateColumns : "auto auto", alignItems:"center"}}>
      <span><img src={picture} style={{ height: '28px', width: '28px' }} /></span>
      <span className="text"> {fname} {lname}</span></div>
    {/* <div><ui.ProfileProgress max="100" value="20" >
      <div>
        <span style={{width: "60%"}}>60%</span>
      </div>
    </ui.ProfileProgress></div> */}
  </div>)
}
export const Home: React.FunctionComponent<any> = () => {
  // get auth status
  const { isAuth, email, fname, lname, picture } = useSelector(({ Auth }: any) => Auth.login)

  // before all
  React.useEffect(() => {
    ctrl.isLogged()
  }, []);
  return (
    <>
      <GlobalStyle />
      {/* <div style={{display: showSearch? 'block' : 'none', position: 'absolute', top: 0, left:0, height: '100%'}}>
        <LabTestSearch />
      </div> */}
      <Wrapper.Page>
        <Wrapper.Header >
          <Header>
            {/** Lab labos details */}
            <Route path={'/actes-tarifs/*'}
              component={() => <>
                <LoginLink to={`/actes-tarifs/`} bg={true}>
                  <span><i className="fas fa-book-medical" /></span>
                  <span className="text">Actes et Tarifs</span>
                </LoginLink>
                <LoginLink to={`/annuaire/`} bg={false}>
                  <span><i className="fas fa-address-book" /></span>
                  <span className="text">Annuaire</span>
                </LoginLink>
              </>} />
            {/** Lab labos details */}
            <Route path={'/annuaire/*'}
              component={() => <>
                <LoginLink to={`/actes-tarifs/`} bg={false}>
                  <span><i className="fas fa-book-medical" /></span>
                  <span className="text">Actes et Tarifs</span>
                </LoginLink>
                <LoginLink to={`/annuaire/`} bg={true}>
                  <span><i className="fas fa-address-book" /></span>
                  <span className="text">Annuaire</span>
                </LoginLink>
              </>} />
            <LoginLink to={`/${email ? email.split('@')[0]+'/profile' : "#"}`}>
              {!isAuth && (localStorage.getItem('TTUID') === null) && <ButtonConnect />}
              {isAuth && <UserButton fname={fname} lname={lname} picture={picture} />}
            </LoginLink>
          </Header>
        </Wrapper.Header>
        <Wrapper.Main>
          <Wrapper.MainContent>
            {/* ************************************ user area **************************************/}
            {/* <Route path={"/:user/profile"} component={Profile} exact /> */}
            {/* ************************************ List des actes de ngap **************************************/}
            {/** lab procedure list page */}
            <Route path={"/annuaire/cabinet/maroc/:city/:cabinet"} component={CabinetDetails} exact />
            {/** lab procedure list page */}
            <Route path={"/annuaire/cabinets/maroc/:city"} component={CabinetsByCity} exact />
            {/* list medicament categories*/}
            <Route path={"/annuaire/cabinets/maroc"} component={Cabinets} exact />
            {/* ************************************ List des actes de ngap **************************************/}
            {/* list medicament categories*/}
            <Route path={"/actes-tarifs/nomenclature-generale-des-actes-professionnels/:code"} component={NgapActeDetails} exact />
            {/* list medicament categories*/}
            <Route path={"/actes-tarifs/ngap/:letter/:group"} component={NgapByActes} exact />
            {/* list medicament categories*/}
            <Route path={"/actes-tarifs/ngap/:letter"} component={NgapByGroups} exact />
            {/* list medicament categories*/}
            <Route path={"/actes-tarifs/ngap"} component={NgapByChapter} exact />

            {/* ************************************ List des actes de biologie **************************************/}
            {/* list medicament categories*/}
            <Route path={"/actes-tarifs/medicament/:medicine"} component={MedicineDetails} exact />
            {/* list medicament categories*/}
            <Route path={"/actes-tarifs/medicaments/:code"} component={DrugByAtcCode} exact />
            {/* list medicament categories*/}
            <Route path={"/actes-tarifs/atc/:chapter/:sousChap/:group"} component={DrugByGroup} exact />
            {/* list medicament categories*/}
            <Route path={"/actes-tarifs/atc/:chapter/:sousChap"} component={DrugBySousChapter} exact />
            {/* list medicament categories*/}
            <Route path={"/actes-tarifs/atc/:chapter"} component={DrugByChapter} exact />
            {/* list medicament categories*/}
            <Route path={"/actes-tarifs/atc/"} component={DrugByCategory} exact />
            {/** lab procedure list page */}
            <Route path={"/actes-tarifs/nabm/"} component={labRoutes.LabTests.labTests.component} />

            {/** lab procedure list page */}
            <Route path={labRoutes.LabTests.labTests.path} component={() => <Redirect to={`/actes-tarifs/nabm/`} />} exact />
            {/* ************** Routes to pharmacie component ************************* */}
            {/** lab procedure list page */}
            <Route path={"/annuaire/pharmacie/maroc/:city/:pharma"} component={PharmDetails} exact />
            {/** lab procedure list page */}
            <Route path={"/annuaire/pharmacie/maroc/:city"} component={PharmaciesByCity} exact />
            {/** list des pharmacies by cities */}
            <Route path={"/annuaire/pharmacies/maroc"} component={Pharmacies} exact />
            {/* ************** Need to be updated by abbr test to optimize SEO ************************* */}
            {/** lab procedure details */}
            <Route path={'/actes-tarifs/nomenclature-actes-biologie-médicale/:test'}
              component={labRoutes.LabTests.labTestDetail.component} exact />
            {/** lab procedure details */}
            <Route path={labRoutes.LabTests.labTestDetail.path}
              component={() => {
                const { testnamefr }: any = useParams();
                return (<Redirect to={`/actes-tarifs/nomenclature-actes-biologie-médicale/${testnamefr}`} />)
              }} exact />
            {/** Lab labos details */}
            <Route path={'/website/analyses-medicales/:testnamefr'}
              component={() => {
                const { testnamefr }: any = useParams();
                return (<Redirect to={`/actes-tarifs/nomenclature-actes-biologie-médicale/${testnamefr}`} />)
              }} exact />

            {/************************** Laboratories ***********************************************/}

            <Route path={'/annuaire/labm/maroc/:city/:labo'}
              component={LaboDetails} exact />

            <Route path={'/annuaire/labm/maroc/:city'}
              component={LabosLisitingByCity} exact />

            <Route path={'/annuaire/labm/maroc'}
              component={LabosLisiting} exact />

            {/* ********************************************************************************/}
            {/* any rout in website */}
            <Route path="/annuaire/" component={MedicalBook} exact />
            {/* any rout in website */}
            <Route path="/actes-tarifs/" render={MedicalProcedures} exact />

          </Wrapper.MainContent>

          <Wrapper.MainSide>
            <iframe width="360" height="315" src="https://www.youtube.com/embed/uAug4IaKxu4" 
              title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
            />
          </Wrapper.MainSide>

        </Wrapper.Main>

        <Wrapper.Footer>
          <Footer />
        </Wrapper.Footer>
      </Wrapper.Page>
    </>
  );
};