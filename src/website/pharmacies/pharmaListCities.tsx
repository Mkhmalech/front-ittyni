import * as React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import {cities} from '../cities'

import * as List from '../../ui-ittyni/src/list/list'

export const Pharmacies: React.FC<any> = (props) => {
  return(
    <>
    <Helmet>
      <meta name="description" content="Liste des laboratoires d'analyses medicales sur maroc" />
      <meta name="keywords" content="Liste Casablanca Fes Rabat Agadirlaboratoires medicales maroc ville fes address tele fax tarifs website itiniraire" />
      <title>Laboratoires d'analyses medicales sur maroc</title>
    </Helmet>
    <List.Container>
      <h1>Liste des laboratoires medicales au maroc</h1>
      <List.Item>
        {cities.map((c:any)=>
          <Link to={`/annuaire/pharmacie/maroc/${c.city.toLowerCase()}`} style={{ padding: '15px' }}>
            {c.city} ( <span>{c.total}</span> )
          </Link>
        )}        
      </List.Item>

    </List.Container>
  </>
  );
};
