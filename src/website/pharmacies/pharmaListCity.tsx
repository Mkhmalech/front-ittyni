import * as React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { pharmafetchAllCity, pharmafetchByCity } from './store/controller';
import * as ui from '../../ui-ittyni/src'
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
      <ui.Container>
        <h1>Liste des pharmacies ville {city}</h1>
        {pharmalist && pharmalist.map((p: any) =>
          <ui.Item key={p.account ? p.account.name : '-'}>
            <ui.ItemAbbr>

            </ui.ItemAbbr>
            <ui.ItemContent>

              <ui.ItemContentTitle>
                <h2>
                  <Link to={`/annuaire/pharmacie/maroc/${city}/${p._id}`}>
                    {p.account ? p.account.name : '-'}
                  </Link>
                </h2>
              </ui.ItemContentTitle>

              <ui.ItemContentDescription>
                <h3>
                  {p.contact ?
                    <>
                      {p.contact.address.street} , <span>{p.contact.address.city.toUpperCase()}</span>
                    </>
                    :
                    '-'}
                </h3>
              </ui.ItemContentDescription>

            </ui.ItemContent>

            <ui.ItemOptions>
              <ui.ItemOptionsData>
                <h3>
                  <ui.Badge>{p.contact ? p.contact.tele.fix[0] : '-'}</ui.Badge>
                </h3>
                <ui.Views><span><i className="far fa-eye"/>{p.views?p.views:0}</span></ui.Views>
              </ui.ItemOptionsData>
            </ui.ItemOptions>
          </ui.Item>
        )}
        {!pharmalist && <div>Loading....</div>}
      </ui.Container>
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
