import * as React from 'react';
import Helmet from 'react-helmet';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Ico } from '../../react-icons-sc/src/ico';
import * as ui from '../../ui-ittyni/src';
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
        <ui.Article.Container>
          <ui.Article.Header>
            <ui.Article.HeaderContainer>
              <ui.Article.HeaderAvatar>
                <ui.Article.HeaderAvatarIcon>
                  <Ico
                    {...CabinetIco}
                    width="140"
                    height="140"
                  />
                </ui.Article.HeaderAvatarIcon>
              </ui.Article.HeaderAvatar>
              <ui.Article.HeaderAbstract>
                <ui.Article.HeaderTitle>{cabinetDetails.account.name}</ui.Article.HeaderTitle>
                <ui.Article.HeaderSubTitle>{cabinetDetails.account.type}</ui.Article.HeaderSubTitle>
                <ui.Article.HeaderMiddle>
                  {cabinetDetails.contact.address.street} - {city}
                </ui.Article.HeaderMiddle>
                <ui.Article.HeaderFoot>
                  <ui.Article.HeaderFootAssurance>
                    <p>
                      tele : <ui.Badge>{cabinetDetails.contact.tele.fix[0]}</ui.Badge>
                       <ui.Badge bgcolor="green"><i className="far fa-eye" style={{background: "inherit"}}></i> : {cabinetDetails.views?cabinetDetails.views:0}</ui.Badge>
                    </p>
                  </ui.Article.HeaderFootAssurance>
                </ui.Article.HeaderFoot>
              </ui.Article.HeaderAbstract>
            </ui.Article.HeaderContainer>
          </ui.Article.Header>
        </ui.Article.Container></>}
      {!cabinetDetails && <div>Loading...</div>}
    </>
  );
};
