import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Article, Badge } from '../../../../ui-ittyni/src'
import { Ico } from '../../../../react-icons-sc/src/ico';
import { microscop } from '../../icon/microscop'
import { Labos } from '../controller/Labos';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

const Labo = new Labos();

export const LaboDetails: React.FC<any> = () => {

    const { labo }: any = useParams();
    // get laboDetails
    const {Details} = useSelector(({labState}:any) => labState.labo)

    React.useEffect(() => {
        Labo.laboDetailsFetch(labo)
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
                        "telephone" : "${Details.contact.tele.fix[0]}"
                    }`}
                </script>
                <meta name="description" content={`Laboratoire d'analyses Medicales ${Details.account.name} a ${Details.contact.address.city}`} />
                <meta name="keywords" content={`
                    Laboratoires d'analyses Medicales ${Details.account.name} prix address cnops cnss remborsement rendez-vous prelevement a domicile
                    sur ${Details.contact.address.street} liste tarifs des actes biologiques annuaire des laboratoires maroc
                `} />
                <title>{`Laboratoire ${Details.account.name} - ${Details.contact.address.city}`}</title>
            </Helmet>
            <Article.Container>
                <Article.Header>
                    <Article.HeaderContainer>
                        <Article.HeaderAvatar>
                            <Article.HeaderAvatarIcon>
                                <Ico
                                    {...microscop}
                                    width="140"
                                    height="140"
                                />
                            </Article.HeaderAvatarIcon>
                        </Article.HeaderAvatar>
                        <Article.HeaderAbstract>
                            <Article.HeaderTitle>{Details.account.name}</Article.HeaderTitle>
                            <Article.HeaderSubTitle>Laboratoire d'Analyse Medicales</Article.HeaderSubTitle>
                            <Article.HeaderMiddle>
                                {Details.contact.address.street} - {Details.contact.address.city}
                            </Article.HeaderMiddle>
                            <Article.HeaderFoot>
                                <Article.HeaderFootAssurance>
                                    <p>tele : <Badge>{Details.contact.tele.fix[0]}</Badge></p>
                                </Article.HeaderFootAssurance>
                            </Article.HeaderFoot>
                        </Article.HeaderAbstract>
                    </Article.HeaderContainer>
                </Article.Header>
            </Article.Container>
        </>}
    </>)
}


interface ArticleDetailH1 {
    h1: string,
    detail: string | ArticleDetailH2[]
}
interface ArticleDetailH2 {
    h2: string
    p: string
}
const details: ArticleDetailH1[] = [
    {
        h1: 'Presentation',
        detail: ''
    },
    {
        h1: 'Departement',
        detail: [
            {
                h2: 'Biochimie',
                p: ''
            },
            {
                h2: 'Bacteriologie',
                p: ''
            },
            {
                h2: 'Serologie',
                p: ''
            },
            {
                h2: 'Genetique',
                p: ''
            }
        ]
    },
    {
        h1: 'Service',
        detail: [
            {
                h2: 'Prelevement a domicile',
                p: ''
            }
        ]
    },
    {
        h1: 'Convention',
        detail: [
            {
                h2: 'Cnops',
                p: ''
            },
            {
                h2: 'Cmim',
                p: ''
            },
        ]
    },
]

const ArticleComponent = (
    articleDetail: ArticleDetailH1[]
) => {

    return articleDetail.map((article: ArticleDetailH1) => (
        <Article.Paragraphe key={article.h1}>
            <Article.ParagraphTitle>{article.h1}</Article.ParagraphTitle>
            {

                typeof article.detail === 'string' ?
                    <Article.ParagraphText>
                        {article.detail}
                    </Article.ParagraphText>
                    :
                    article.detail.map((detail) => (
                        <div key={detail.h2}>
                            <Article.ParagraphSubTitle>{detail.h2}</Article.ParagraphSubTitle>
                            <Article.ParagraphText>
                                {detail.p}
                            </Article.ParagraphText>
                        </div>
                    ))

            }

        </Article.Paragraphe>
    ))

}