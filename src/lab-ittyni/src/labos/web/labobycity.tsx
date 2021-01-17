import * as React from 'react';
import { LaboFetchByCity, LaboListTwentyByCity, Labos } from '../controller/Labos';
import * as List from '../../../../ui-ittyni/src/list/list'
import { Link, useParams } from 'react-router-dom';
import { TestLink } from '../../../../ui-ittyni/src/links/Links';
import Helmet from 'react-helmet';
import { useSelector } from 'react-redux';

interface ILaboLisitingProps {
  labos?: [LaboWeb]
}

/** instanciate labo class */
const labo = new Labos();

export const LabosLisitingByCity: React.FunctionComponent<ILaboLisitingProps> = ({ labos }) => {
  const { city } : any = useParams();
  // get fetched labo from state
  const {listByCity} = useSelector(({labState}:any) => labState.labo);

  React.useEffect(()=>{
    LaboListTwentyByCity(city);
  },[])
  return (
    <>
      <Helmet>
        <meta name="description" content="Listes des laboratoires medicales au maroc" />
        <meta name="keywords" content="Liste laboratoires medicales maroc ville fes address tele fax" />
        <title>Listes des laboratoires medicales au maroc</title>
      </Helmet>
      <List.Container>
        <h1>Listes des laboratoires medicales sur {city}</h1>
        {listByCity && listByCity.length > 0 &&
          listByCity.map((labo: LaboWeb) =>
            <List.Item key={labo.account ? labo.account.name : '-'}>
              <List.ItemAbbr>

              </List.ItemAbbr>
              <List.ItemContent>

                <List.ItemContentTitle>
                  <h2>
                    <TestLink to={`/annuaire/labm/maroc/${city}/${labo._id}`}>
                      {labo.account ? labo.account.name : '-'}
                    </TestLink>
                  </h2>
                </List.ItemContentTitle>

                <List.ItemContentDescription>
                  <h3>
                    {labo.contact ? 
                      <>
                        {labo.contact.address.street} , <span>{labo.contact.address.city.toUpperCase()}</span>
                      </> 
                      : 
                      '-'} 
                  </h3>
                </List.ItemContentDescription>

              </List.ItemContent>

              <List.ItemOptions>
                <List.ItemOptionsData>
                  <h3>
                    {labo.contact ? labo.contact.tele.fix[0] : '-'}
                  </h3>
                </List.ItemOptionsData>
              </List.ItemOptions>
            </List.Item>
          )}
        {!listByCity &&
          <div>loading.....</div>
        }
        <button 
        onClick={e=> LaboFetchByCity(city)}
        style={{
          width: "100%",
          padding: "5px",
          backgroundColor: "white",
          marginBottom: "5px"
        }}
      >Afficher Tout</button>
      </List.Container>
    </>
  )
};