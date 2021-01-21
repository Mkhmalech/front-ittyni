import * as React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import * as List from '../../ui-ittyni/src/list/list'
import * as ui from '../../ui-ittyni/src/'
import { fetchMedicineDetails } from './store/controller';
import Helmet from 'react-helmet';

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

      <List.Container>
        {details &&
          <List.Item style={{ minHeight: "auto", display: "flex", flexDirection: "column" }}>
            {details.names.map((d: any) => <>
              <h1>{d.title}</h1>
              <Helmet>
                <title>{d.title}</title>
                <meta name="description" content={`le prix de medicament ${d.title} au maroc`} />
                <meta name="keywords" content={`prix tarif medicament list acte pharmacie maroc ${d.title}`} />
                <script type="application/ld+json">
                  {`{
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "${d.title}",
                        "brand": {	
                            "@type": "Brand",
                            "name": "Medicament"
                        },
                        "description" : "le prix d medicament ${d.title} au maroc et les remboressements des mutuelles cnops la cnss cmim",
                        "offers": {
                            "@type": "Offer",
                            "url": "https://ittyni.com/${location.pathname}",
                            "priceCurrency": "MAD",
                            "price": "${Math.floor(d.ppv)}",
                            "availability": "https://schema.org/InStock"
                        }
                    }`}
                </script>
              </Helmet>
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

