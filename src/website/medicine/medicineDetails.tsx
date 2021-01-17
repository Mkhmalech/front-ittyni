import * as React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import * as List from '../../ui-ittyni/src/list/list'
import * as ui from '../../ui-ittyni/src/'
import { fetchMedicineDetails } from './store/controller';

export const MedicineDetails: React.FC<any> = (props) => {

  // get categories
  const { details } = useSelector(({ medicine }: any) => medicine);
  // get cat name
  const { medicine }: any = useParams();

  React.useEffect(() => {
    fetchMedicineDetails(medicine);
  }, [medicine])
  return (
    <div>
      Drugs List By details
      <List.Container>
        {details &&
          <List.Item style={{ minHeight: "auto", display: "flex", flexDirection: "column" }}>
            {details.names.map((d: any) => <>
              <h1>{d.title}</h1>
              <ui.ArticleDetails>
                <h2>Prix de Vente Publique</h2>
                <span>{d.ppv} Dhs</span>
              </ui.ArticleDetails>
              <ui.ArticleDetails>
                <h2>Presentation</h2>
                <span>{d.presentation}</span>
              </ui.ArticleDetails>
              <ui.ArticleDetails>
                <h2>Distributeur au Maroc</h2>
                <span>{d.distributor}</span>
              </ui.ArticleDetails>
            </>)}
            <ui.ArticleDetails>
              <h2>Composition</h2>
              <span>{details.composition}</span>
            </ui.ArticleDetails>
            <ui.ArticleDetails>
              <h2>Code ATC</h2>
              <span>{details.atc}</span>
            </ui.ArticleDetails>
            <ui.ArticleDetails>
              <h2>Famille</h2>
              <span>{details.category}</span>
            </ui.ArticleDetails>
          </List.Item>}

        {!details && <div>Loading....</div>}
      </List.Container>
    </div>
  );
};

