import * as React from 'react';
import { useParams } from 'react-router-dom';
import * as ui from '../../../ui-ittyni/src'
import { Ico } from '../../../react-icons-sc/src/ico';
import { microscop } from '../../../assets/icons/microscop'
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import * as ctrl from '../controller/Labos'

export const LaboDetails: React.FC<any> = () => {

    const { labo }: any = useParams();
    // get laboDetails
    const { Details } = useSelector(({ labState }: any) => labState.labo)

    React.useEffect(() => {
        ctrl.laboDetailsFetch(labo);
        window.scrollTo(0, 0);
    }, [labo])

    return (<>
        {!Details && <div>Loadin...</div>}
        {Details && <>
            <Helmet>
                <script type="application/ld+json">
                    {`{
                        "@context" : "https://schema.org/",
                        "@type": "MedicalOrganization",
                        "medicalSpecialty": "DiagnosticLab",
                        "name" : "${Details.account.name}",
                        "address" : {
                            "@type": "PostalAddress",
                            "streetAddress": "${Details.contact.address.street}",
                            "addressLocality": "${Details.contact.address.city}",
                            "addressCountry": "Maroc"
                        },
                        "telephone" : "${Details.contact.tele&&Details.contact.tele.fix&&!!Details.contact.tele.fix.length&&Details.contact.tele.fix[0]}"
                    }`}
                </script>
                <meta name="description" content={`Laboratoire d'analyses Medicales ${Details.account.name} a ${Details.contact.address.city}`} />
                <meta name="keywords" content={`
                    Laboratoires d'analyses Medicales ${Details.account.name} prix address cnops cnss remborsement rendez-vous prelevement a domicile
                    sur ${Details.contact.address.street} liste tarifs des actes biologiques annuaire des laboratoires maroc
                `} />
                <title>{`Laboratoire ${Details.account.name} - ${Details.contact.address.city}`}</title>
            </Helmet>
            <ui.Article.Container>
                <ui.Article.Header>
                    <ui.Article.HeaderContainer>
                        <ui.Article.HeaderAvatar>
                            <ui.Article.HeaderAvatarIcon>
                                <Ico
                                    {...microscop}
                                    width="140"
                                    height="140"
                                />
                            </ui.Article.HeaderAvatarIcon>
                        </ui.Article.HeaderAvatar>
                        <ui.Article.HeaderAbstract>
                            <ui.Article.HeaderTitle>{Details.account.name}</ui.Article.HeaderTitle>
                            <ui.Article.HeaderSubTitle>Laboratoire d'Analyse Medicales</ui.Article.HeaderSubTitle>
                            <ui.Article.HeaderMiddle>
                                {Details.contact.address.street} - {Details.contact.address.city}
                            </ui.Article.HeaderMiddle>
                            <ui.Article.HeaderFoot>
                                <ui.Article.HeaderFootAssurance>
                                    <p>
                                        tele : <ui.Badge>{Details.contact.tele&&Details.contact.tele.fix&&!!Details.contact.tele.fix.length&&Details.contact.tele.fix[0]}</ui.Badge>
                                        <ui.Badge bgcolor="green"><i className="far fa-eye" style={{background: "inherit"}}></i> : {Details.views?Details.views:0}</ui.Badge>
                                    </p>
                                </ui.Article.HeaderFootAssurance>
                            </ui.Article.HeaderFoot>
                        </ui.Article.HeaderAbstract>
                    </ui.Article.HeaderContainer>
                </ui.Article.Header>
            </ui.Article.Container>
        </>}
    </>)
}
