import * as React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { pharmafetchAllCity, pharmafetchByCity } from './store/controller';
import * as List from '../../ui-ittyni/src/list/list'
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

export const PharmaciesByCity: React.FC<any> = () => {
  // get city
  const { city }: any = useParams();
  // get phamacies list of the city
  const { pharmalist } = useSelector(({ pharma }: any) => pharma)

  React.useEffect(() => {
    pharmafetchByCity(city);
  }, [])
  return (
    <>
      <Helmet>
        <meta name="description" content={`Liste des pharmacies ville ${city} `} />
        <meta name="keywords" content="Liste laboratoires medicales pharmacies medicament prix tarif maroc ville fes address tele fax" />
        <title>Liste des pharmacies ville {city}</title>
      </Helmet>
      <List.Container>
        <h1>Liste des pharmacies ville {city}</h1>
        {pharmalist && pharmalist.map((p: any) =>
          <List.Item key={p.account ? p.account.name : '-'}>
            <List.ItemAbbr>

            </List.ItemAbbr>
            <List.ItemContent>

              <List.ItemContentTitle>
                <h2>
                  <Link to={`/annuaire/pharmacie/maroc/${city}/${p._id}`}>
                    {p.account ? p.account.name : '-'}
                  </Link>
                </h2>
              </List.ItemContentTitle>

              <List.ItemContentDescription>
                <h3>
                  {p.contact ?
                    <>
                      {p.contact.address.street} , <span>{p.contact.address.city.toUpperCase()}</span>
                    </>
                    :
                    '-'}
                </h3>
              </List.ItemContentDescription>

            </List.ItemContent>

            <List.ItemOptions>
              <List.ItemOptionsData>
                <h3>
                  {p.contact ? p.contact.tele.fix[0] : '-'}
                </h3>
              </List.ItemOptionsData>
            </List.ItemOptions>
          </List.Item>
        )}
        {!pharmalist && <div>Loading....</div>}
      </List.Container>
      <button 
        onClick={e=> pharmafetchAllCity(city)}
        style={{
          width: "100%",
          padding: "5px",
          backgroundColor: "white",
          marginBottom: "5px"
        }}
      >Afficher Tout</button>
    </>
  );
};
