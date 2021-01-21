import * as React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Article, Badge } from '../../../../ui-ittyni/src'
import { Labtests } from '../controller/labtests';
import { Ico } from '../../../../react-icons-sc/src/ico';
import { atom } from '../../icon/atom'
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

const labtest = new Labtests();

export const LabTestDetail: React.FC<any> = () => {
    // get test information
    const { labTestFrDetails } = useSelector(({ labState }: any) => labState.test);
    // get mnemonic
    const { test }: any = useParams();
    // get location
    const location = useLocation();

    React.useEffect(() => {
        labtest.labTestFrFetchDetails(test)
    }, [])
    return (<>
        {labTestFrDetails && <>
            <Helmet>
                <title>{labTestFrDetails.name.fr}</title>
                <meta name="description" content={`le prix d analyse ${labTestFrDetails.name.fr} au maroc et les remboressements des mutuelles cnops la cnss cmim`} />
                <meta name="keywords" content={`prix tarif analyse maroc ${labTestFrDetails.name.fr}`} />
                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "${labTestFrDetails.name.fr}",
                        "brand": {	
                            "@type": "Brand",
                            "name": "ANALYSE MEDICALE"
                        },
                        "description" : "le prix d analyse ${labTestFrDetails.name.fr} au maroc et les remboressements des mutuelles cnops la cnss cmim",
                        "offers": {
                            "@type": "Offer",
                            "url": "https://ittyni.com/${location.pathname}",
                            "priceCurrency": "MAD",
                            "price": "${Math.floor(labTestFrDetails.finance[0].Bcode * 1.34)}",
                            "availability": "https://schema.org/InStock"
                        }
                    }`}
                </script>
            </Helmet>
            <Article.Container>
                <Article.Header>
                    <Article.HeaderContainer>
                        <Article.HeaderAvatar>
                            <Article.HeaderAvatarIcon>
                                <Ico
                                    {...atom}
                                    width="140"
                                    height="140"
                                />
                            </Article.HeaderAvatarIcon>
                        </Article.HeaderAvatar>
                        <Article.HeaderAbstract>
                            <Article.HeaderTitle>{labTestFrDetails.name.fr}</Article.HeaderTitle>
                            <Article.HeaderSubTitle>analyses medicales</Article.HeaderSubTitle>
                            <Article.HeaderMiddle>
                                {labTestFrDetails.specimen.nature ? labTestFrDetails.specimen.nature.map((nature: any) => (
                                    <span key={nature}>
                                        <span>{nature}</span>
                                        <span> &nbsp;•&nbsp; </span>
                                    </span>
                                ))
                                    :
                                    ''}
                            </Article.HeaderMiddle>
                            <Article.HeaderFoot>
                                <Article.HeaderFootAssurance>
                                    {labTestFrDetails.finance[0] ? <>
                                        <p><Badge>
                                            Prix Total : {Math.floor(labTestFrDetails.finance[0].Bcode * 1.34)} dhs
                                            </Badge></p>
                                        <p>
                                            <Badge bgcolor="#388e3c">
                                                CNSS : {Math.floor((labTestFrDetails.finance[0].Bcode * 1.1) * 0.7)} dhs
                                                </Badge>
                                            <Badge bgcolor="#d32f2f">
                                                Adherent : {Math.floor((labTestFrDetails.finance[0].Bcode * 1.34) - ((labTestFrDetails.finance[0].Bcode * 1.1) * 0.7))} dhs
                                                </Badge>
                                        </p>
                                        <p><Badge bgcolor="#388e3c">
                                            CNOPS : {Math.floor((labTestFrDetails.finance[0].Bcode * 1.1) * 0.8)} dhs
                                                </Badge><Badge bgcolor="#d32f2f">
                                                Adherent : {Math.floor((labTestFrDetails.finance[0].Bcode * 1.34) - ((labTestFrDetails.finance[0].Bcode * 1.1) * 0.8))} dhs
                                                </Badge>
                                        </p>
                                    </> : ''}
                                </Article.HeaderFootAssurance>
                            </Article.HeaderFoot>
                        </Article.HeaderAbstract>
                    </Article.HeaderContainer>
                </Article.Header>
            </Article.Container></>}
        {!labTestFrDetails && <div>Loading ...</div>}
    </>
    )
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
        detail: 'en Cours...'
    },
    {
        h1: 'Pre-analytique',
        detail: [
            {
                h2: 'Echantillon',
                p: 'en Cours...'
            },
            {
                h2: 'Patient',
                p: 'en Cours...'
            },
            {
                h2: 'Preleveur',
                p: 'en Cours...'
            },
            {
                h2: 'Transport',
                p: 'en Cours...'
            }
        ]
    },
    {
        h1: 'Analytiques',
        detail: [
            {
                h2: 'Methodlogie',
                p: 'en cours...'
            }, {
                h2: 'Automates',
                p: 'en cours...'
            }, {
                h2: 'Materielles',
                p: 'en cours...'
            }
        ]
    }
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
