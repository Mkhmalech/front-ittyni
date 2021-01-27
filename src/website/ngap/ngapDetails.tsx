import * as React from 'react';
import Helmet from 'react-helmet';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import * as ui from '../../ui-ittyni/src/'
import { fetchActeDetails } from './store/controller';

export const NgapActeDetails: React.FC<any> = () => {
  // get categories
  const { acteDetails } = useSelector(({ ngap }: any) => ngap);
  //  get letter
  const { code } :any = useParams();

  React.useEffect(() => {
    fetchActeDetails(code);
  }, [code])
  return (
    <div>
      <ui.Container>
        {acteDetails &&
          <ui.Item style={{ minHeight: "auto", display: "flex", flexDirection: "column" }}>

              <h1>{acteDetails.acteLabel}</h1>
              <Helmet>
                <title>{acteDetails.acteLabel}</title>
                <meta name="description" content={`le prix de acte ngap ${acteDetails.acteLabel} au maroc`} />
                <meta name="keywords" content={`prix tarif list acte ngap nomenclature coefficient  maroc ${acteDetails.acteLabel}`} />
              </Helmet>
              <ui.ArticleDetails>
                <h2>Code de l'acte</h2>
                <span>{acteDetails.acteCode}</span>
              </ui.ArticleDetails>
              <ui.ArticleDetails>
                <h2>Presentation</h2>
                <span>{acteDetails.groupLabel}</span>
              </ui.ArticleDetails>
              <ui.ArticleDetails>
                <h2>acte Location dans le corps</h2>
                <span>{acteDetails.chapterLabel}</span>
              </ui.ArticleDetails>

            <ui.ArticleDetails>
              <h2>coefficient de l'acte</h2>
              <span>{acteDetails.acteCoefficient}</span>
            </ui.ArticleDetails>
          </ui.Item>}

        {!acteDetails && <div>Loading....</div>}
      </ui.Container>
    </div>
  );
};
