import * as React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { cabinetfetchAllCity, cabinetfetchByCity } from './store/controller';
import * as List from '../../ui-ittyni/src/list/list'
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

export const CabinetsByCity: React.FC<any> = () => {
  // get city
  const { city }: any = useParams();
  // get phamacies list of the city
  const { cabinetlist } = useSelector(({ cabinet }: any) => cabinet)

  React.useEffect(() => {
    cabinetfetchByCity(city);
  }, [])
  return (
    <>
      <Helmet>
        <meta name="description" content={`Liste des pharmacies ville ${city} `} />
        <meta name="keywords" content="Liste laboratoires medicales pharmacies cabinet specialiste generaliste acte medicale medicament prix tarif maroc ville fes address tele fax" />
        <title>Liste des Cabinets par ville {city}</title>
      </Helmet>
      <List.Container>
        <h1>Liste des Cabinets par ville {city}</h1>
        {cabinetlist && cabinetlist.map((p: any) =>
          <List.Item key={p.account ? p.account.name : '-'}>
            <List.ItemAbbr>

            </List.ItemAbbr>
            <List.ItemContent>

              <List.ItemContentTitle>
                <h2>
                  <Link to={`/annuaire/cabinet/maroc/${city}/${p._id}`}>
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
        {!cabinetlist && <div>Loading....</div>}
      </List.Container>
      <button 
        onClick={e=> cabinetfetchAllCity(city)}
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
