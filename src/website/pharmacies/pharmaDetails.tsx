import * as React from 'react';
import Helmet from 'react-helmet';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Ico } from '../../react-icons-sc/src/ico';
import { Article, Badge } from '../../ui-ittyni/src';
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
        <Article.Container>
          <Article.Header>
            <Article.HeaderContainer>
              <Article.HeaderAvatar>
                <Article.HeaderAvatarIcon>
                  <Ico
                    {...pharmacy}
                    width="140"
                    height="140"
                  />
                </Article.HeaderAvatarIcon>
              </Article.HeaderAvatar>
              <Article.HeaderAbstract>
                <Article.HeaderTitle>{pharmaDetails.account.name}</Article.HeaderTitle>
                <Article.HeaderSubTitle>Pharmacie au Maroc</Article.HeaderSubTitle>
                <Article.HeaderMiddle>
                  {pharmaDetails.contact.address.street} - {city}
                </Article.HeaderMiddle>
                <Article.HeaderFoot>
                  <Article.HeaderFootAssurance>
                    <p>tele : <Badge>{pharmaDetails.contact.tele.fix[0]}</Badge></p>
                  </Article.HeaderFootAssurance>
                </Article.HeaderFoot>
              </Article.HeaderAbstract>
            </Article.HeaderContainer>
          </Article.Header>
        </Article.Container></>}
      {!pharmaDetails && <div>Loading...</div>}
    </>
  );
};
