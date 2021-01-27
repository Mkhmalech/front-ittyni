import * as React from 'react';
import * as Wrapper from './wrappers'
import { GlobalStyle } from '../theme';
import Header from './header'
import { Link, Route, Redirect, useParams } from 'react-router-dom';
import styled from '../theme/styled-components';
import { AdminLink, LoginLink, LoginLinkIcon, LoginLinkText, SearchLink } from '../ui-ittyni/src/links/Links'


import { routes } from '../routes';
import { connect } from 'react-redux';
import { IttyniState } from '../store/index';
import { LabosLisitingByCity } from '../lab-ittyni/src/labos/web/labobycity'
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

interface IHomeProps extends
  /** laboState */
  LabLaboState,
  /** LabTest State */
  LabTestState { }

export const Home: React.FunctionComponent<IHomeProps> = ({ listAll, labTestFrDetails, laboDetails }) => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });
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
            <AdminLink href={`https://admin.ittyni.com`}>
              <span><i className="fas fa-user" /> </span>
              <span className="text">Connecter</span>
            </AdminLink>
          </Header>
        </Wrapper.Header>
        <Wrapper.Main>
          <Wrapper.MainContent>
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
            <Route path={"/actes-tarifs/nabm/"} component={routes.lab.LabTests.labTests.component} />

            {/** lab procedure list page */}
            <Route path={routes.lab.LabTests.labTests.path} component={() => <Redirect to={`/actes-tarifs/nabm/`} />} exact />
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
              component={() => <routes.lab.LabTests.labTestDetail.component />} exact />
            {/** lab procedure details */}
            <Route path={routes.lab.LabTests.labTestDetail.path}
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

            {/************************** list of cities with number of labs ***********************************************/}

            <Route path={'/annuaire/labm/maroc'} component={() => <routes.lab.Labo.Labos.component labos={listAll} />} exact />

            {/** lab labos page */}
            <Route path={routes.lab.Labo.Labos.path} component={() => <Redirect to={'/annuaire/labm/maroc'} />} exact />
            {/* ***********************laboratoire details ******************************************* */}
            {/** Lab labos details */}
            <Route path={'/annuaire/labm/maroc/:city/:labo'}
              component={() => <routes.lab.Labo.LaboDetails.component laboDetails={laboDetails} />} exact />
            {/** Lab labos details */}
            <Route path={routes.lab.Labo.LaboDetails.path}
              component={() => {
                const { labo, city }: any = useParams();
                return (<Redirect to={`/annuaire/labm/maroc/${city}/${labo}`} />)
              }} exact />

            {/******************* Lab labos by city *******************************************/}
            <Route path={'/annuaire/labm/maroc/:city'}
              component={() => <LabosLisitingByCity />} exact />
            {/** Lab labos details */}
            <Route path={'/website/labm/maroc/:city'}
              component={() => {
                const { city }: any = useParams();
                return (<Redirect to={`/annuaire/labm/maroc/${city}`} />)
              }} exact />
            {/* ********************************************************************************/}
            {/* any rout in website */}
            <Route path="/annuaire/" component={MedicalBook} exact />
            {/* any rout in website */}
            <Route path="/actes-tarifs/" render={MedicalProcedures} exact />

            {/* any rout in website */}
            <Route path="/website/" render={({ history }) => {
              history.push(`/actes-tarifs/`)
              return (<></>)
            }} exact />

          </Wrapper.MainContent>
          <Wrapper.MainSide>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

            <ins className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-3077290275391601"
              data-ad-slot="3241538568"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
            <script>
              (adsbygoogle = window.adsbygoogle || []).push({ });
            </script>
          </Wrapper.MainSide>

        </Wrapper.Main>

        <Wrapper.Footer>
          <Footer />
        </Wrapper.Footer>
      </Wrapper.Page>
    </>
  );
};

const mapStateToProps = ({ labState: { labo, test } }: IttyniState) => ({
  listAll: labo ? labo.listAll : undefined,
  laboDetails: labo ? labo.laboDetails : undefined
})
export default connect(mapStateToProps)(Home);