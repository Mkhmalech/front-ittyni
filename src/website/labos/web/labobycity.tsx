import * as React from 'react';
import * as ctrl from '../controller/Labos';
import * as ui from '../../../ui-ittyni/src'
import { Link, useParams } from 'react-router-dom';
import { TestLink } from '../../../ui-ittyni/src/links/Links';
import Helmet from 'react-helmet';
import { useSelector } from 'react-redux';


export const LabosLisitingByCity: React.FunctionComponent<any> = () => {
  const { city } : any = useParams();
  // get fetched labo from state
  const {listByCity} = useSelector(({labState}:any) => labState.labo);

  React.useEffect(()=>{
    ctrl.LaboListTwentyByCity(city);
  },[city])
  return (
    <>
      <Helmet>
        <meta name="description" content="Listes des laboratoires medicales au maroc" />
        <meta name="keywords" content="Liste laboratoires medicales maroc ville fes address tele fax" />
        <title>Listes des laboratoires medicales au maroc</title>
      </Helmet>
      <ui.Container>
        <h1>Listes des laboratoires medicales sur {city}</h1>
        {listByCity && listByCity.length > 0 &&
          listByCity.map((labo: any) =>
            <ui.Item key={labo.account ? labo.account.name : '-'}>
              <ui.ItemAbbr>

              </ui.ItemAbbr>
              <ui.ItemContent>

                <ui.ItemContentTitle>
                  <h2>
                    <TestLink to={`/annuaire/labm/maroc/${city}/${labo._id}`}>
                      {labo.account ? labo.account.name : '-'}
                    </TestLink>
                  </h2>
                </ui.ItemContentTitle>

                <ui.ItemContentDescription>
                  <h3>
                    {labo.contact ? 
                      <>
                        {labo.contact.address.street} , <span>{labo.contact.address.city.toUpperCase()}</span>
                      </> 
                      : 
                      '-'} 
                  </h3>
                </ui.ItemContentDescription>

              </ui.ItemContent>

              <ui.ItemOptions>
                <ui.ItemOptionsData>
                  <h3>
                    <ui.Badge>{labo.contact ? labo.contact.tele.fix[0] : '-'}</ui.Badge>
                  </h3>
                  <ui.Views><span><i className="far fa-eye"/>{labo.views?labo.views:0}</span></ui.Views>
                </ui.ItemOptionsData>
              </ui.ItemOptions>
            </ui.Item>
          )}
        {!listByCity &&
          <div>loading.....</div>
        }
        <button 
        onClick={e=> ctrl.LaboFetchByCity(city)}
        style={{
          width: "100%",
          padding: "5px",
          backgroundColor: "white",
          marginBottom: "5px"
        }}
      >Afficher Tout</button>
      </ui.Container>
    </>
  )
};