import * as React from 'react';
import Helmet from 'react-helmet';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Ico } from '../../react-icons-sc/src/ico';
import * as ui from '../../ui-ittyni/src';
import { pharmafetchDetails } from './store/controller';
import { pharmacy } from './ico/pharmacy'


export const PharmDetails: React.FC<any> = (props) => {
  // get city
  const { pharma, city }: any = useParams();
  // get phamacies list of the city
  const { pharmaDetails } = useSelector(({ pharma }: any) => pharma)

  React.useEffect(() => {
    pharmafetchDetails(pharma);
  }, [pharma])
  return (
    <>
      {pharmaDetails && <><Helmet>
        <script type="application/ld+json">
          {`{
              "@context" : "https://schema.org/",
              "@type": "Pharmacy",
              "name" : "${pharmaDetails.account.name}",
              "address" : {
                  "@type": "PostalAddress",
                  "streetAddress": "${pharmaDetails.contact.address.street}",
                  "addressLocality": "${pharmaDetails.contact.address.city}",
                  "addressCountry": "Maroc"
              },
              "telephone" : "${pharmaDetails.contact.tele.fix[0]}"
          }`}
        </script>
        <meta name="description" content={`${pharmaDetails.account.name} address ${pharmaDetails.contact.address.street}`} />
        <meta name="keywords" content={`Pharmacie ${pharmaDetails.account.name} prix des medicaments address cnops cnss remborsement`} />
        <title>{`${pharmaDetails.account.name} - ${pharmaDetails.contact.address.city}`}</title>
      </Helmet>
        <ui.Article.Container>
          <ui.Article.Header>
            <ui.Article.HeaderContainer>
              <ui.Article.HeaderAvatar>
                <ui.Article.HeaderAvatarIcon>
                  <Ico
                    {...pharmacy}
                    width="140"
                    height="140"
                  />
                </ui.Article.HeaderAvatarIcon>
              </ui.Article.HeaderAvatar>
              <ui.Article.HeaderAbstract>
                <ui.Article.HeaderTitle>{pharmaDetails.account.name}</ui.Article.HeaderTitle>
                <ui.Article.HeaderSubTitle>Pharmacie au Maroc</ui.Article.HeaderSubTitle>
                <ui.Article.HeaderMiddle>
                  {pharmaDetails.contact.address.street} - {city}
                </ui.Article.HeaderMiddle>
                <ui.Article.HeaderFoot>
                  <ui.Article.HeaderFootAssurance>
                    <p>
                      tele : <ui.Badge>{pharmaDetails.contact.tele.fix[0]}</ui.Badge>
                      <ui.Badge bgcolor="green"><i className="far fa-eye" style={{background: "inherit"}}></i> : {pharmaDetails.views?pharmaDetails.views:0}</ui.Badge>
                    </p>
                  </ui.Article.HeaderFootAssurance>
                </ui.Article.HeaderFoot>
              </ui.Article.HeaderAbstract>
            </ui.Article.HeaderContainer>
          </ui.Article.Header>
        </ui.Article.Container></>}
      {!pharmaDetails && <div>Loading...</div>}
    </>
  );
};
