import * as React from 'react';
import Helmet from 'react-helmet';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Ico } from '../../react-icons-sc/src/ico';
import { Article, Badge } from '../../ui-ittyni/src';
import { cabinetfetchDetails } from './store/controller';
import { CabinetIco } from './ico/cabinet'


export const CabinetDetails: React.FC<any> = (props) => {
  // get city
  const { cabinet, city }: any = useParams();
  // get phamacies list of the city
  const { cabinetDetails } = useSelector(({ cabinet }: any) => cabinet)

  React.useEffect(() => {
    cabinetfetchDetails(cabinet);
  }, [cabinet])
  return (
    <>
      {cabinetDetails && <><Helmet>
        <script type="application/ld+json">
          {`{
              "@context" : "https://schema.org/",
              "@type": "Pharmacy",
              "name" : "${cabinetDetails.account.name}",
              "address" : {
                  "@type": "PostalAddress",
                  "streetAddress": "${cabinetDetails.contact.address.street}",
                  "addressLocality": "${cabinetDetails.contact.address.city}",
                  "addressCountry": "Maroc"
              },
              "telephone" : "${cabinetDetails.contact.tele.fix[0]}"
          }`}
        </script>
        <meta name="description" content={`${cabinetDetails.account.name} address ${cabinetDetails.contact.address.street}`} />
        <meta name="keywords" content={`Cabinet ${cabinetDetails.account.name} prix des rendez-vous address cnops cnss remborsement`} />
        <title>{`${cabinetDetails.account.name} - ${cabinetDetails.contact.address.city}`}</title>
      </Helmet>
        <Article.Container>
          <Article.Header>
            <Article.HeaderContainer>
              <Article.HeaderAvatar>
                <Article.HeaderAvatarIcon>
                  <Ico
                    {...CabinetIco}
                    width="140"
                    height="140"
                  />
                </Article.HeaderAvatarIcon>
              </Article.HeaderAvatar>
              <Article.HeaderAbstract>
                <Article.HeaderTitle>{cabinetDetails.account.name}</Article.HeaderTitle>
                <Article.HeaderSubTitle>{cabinetDetails.account.type}</Article.HeaderSubTitle>
                <Article.HeaderMiddle>
                  {cabinetDetails.contact.address.street} - {city}
                </Article.HeaderMiddle>
                <Article.HeaderFoot>
                  <Article.HeaderFootAssurance>
                    <p>tele : <Badge>{cabinetDetails.contact.tele.fix[0]}</Badge></p>
                  </Article.HeaderFootAssurance>
                </Article.HeaderFoot>
              </Article.HeaderAbstract>
            </Article.HeaderContainer>
          </Article.Header>
        </Article.Container></>}
      {!cabinetDetails && <div>Loading...</div>}
    </>
  );
};
