import * as React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import {cities} from '../cities'
import * as List from '../../ui-ittyni/src/list/list'
import { cabinetfetchTotalCity } from './store/controller';
import { useSelector } from 'react-redux';

export const Cabinets: React.FC<any> = (props) => {
  // get state cabinet total by city
  const {cityTotal} = useSelector(({cabinet}:any) => cabinet)

  React.useEffect(() => {
    cabinetfetchTotalCity();
  }, [])
  return(
    <>
    <Helmet>
      <meta name="description" content="Liste des cabinet specialite  d'analyses medicales sur maroc" />
      <meta name="keywords" content="Liste Casablanca Fes Rabat Agadir cabinet medicales maroc ville fes address tele fax tarifs website itiniraire" />
      <title>Cabinet generalistes et specialises sur maroc</title>
    </Helmet>
    <List.Container>
      <h1>Cabinet generalistes et specialises sur maroc</h1>
      <List.Item>
        {cityTotal && cityTotal.map((c:any)=>
          <Link to={`/annuaire/cabinets/maroc/${c.city.toLowerCase()}`} style={{ padding: '15px' }}>
            <h2>{c.city}</h2> ( <span>{c.total}</span> )
          </Link>
        )} 
        {!cityTotal && <div>Loading...</div>}       
      </List.Item>

    </List.Container>
  </>
  );
};
