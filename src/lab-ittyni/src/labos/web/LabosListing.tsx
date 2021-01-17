import * as React from 'react';
import * as List from '../../../../ui-ittyni/src/list/list'

import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

interface ILaboLisitingProps {
  labos?: any[]
}

export const LabosLisiting: React.FunctionComponent<ILaboLisitingProps> = () => {

  return (
    <>
      <Helmet>
        <meta name="description" content="Liste des laboratoires d'analyses medicales sur maroc" />
        <meta name="keywords" content="Liste Casablanca Fes Rabat Agadirlaboratoires medicales maroc ville fes address tele fax tarifs website itiniraire" />
        <title>Laboratoires d'analyses medicales sur maroc</title>
      </Helmet>
      <List.Container>
        <h1>Liste des laboratoires medicales au maroc</h1>
        <List.Item>
          <Link to={"/website/labm/maroc/casablanca"} style={{ padding: '15px' }}>
            Casablanca ( <span>183</span> )
        </Link>
          <Link to={"/website/labm/maroc/fes"} style={{ padding: '15px' }}>
            Fes ( <span>37</span> )
        </Link>
          <Link to={"/website/labm/maroc/rabat"} style={{ padding: '15px' }}>
            Rabat ( <span>69</span> )
        </Link>
          <Link to={"/website/labm/maroc/marrakech"} style={{ padding: '15px' }}>
            MARRAKECH ( <span>38</span> )
        </Link>
          <Link to={"/website/labm/maroc/meknes"} style={{ padding: '15px' }}>
            MEKNES ( <span>12</span> )
        </Link>
          <Link to={"/website/labm/maroc/agadir"} style={{ padding: '15px' }}>
            Agadir ( <span>20</span> )
        </Link>
        </List.Item>

      </List.Container>
    </>
  )
};

