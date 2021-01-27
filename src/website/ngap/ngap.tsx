import * as React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import * as ui from '../../ui-ittyni/src/'
import { fetchActes, fetchChapters, fetchGroups } from './store/controller';

export const NgapByChapter: React.FC<any> = () => {
  // get categories
  const { chapters } = useSelector(({ ngap }: any) => ngap);

  React.useEffect(() => {
    fetchChapters();
  }, [])
  return (
    <div>
      <h1>Liste ngap chapitres</h1>
      <ui.Container>
        {chapters && chapters.map((cat: any) =>
          <ui.Item style={{ minHeight: "auto", cursor: "pointer" }} key={cat.chapterLetter}>
            <h2><Link to={`/actes-tarifs/ngap/${cat.chapterLetter}`}>{cat.chapterLabel}</Link></h2>
          </ui.Item>)}
        {!chapters && <div>Loading....</div>}
      </ui.Container>
    </div>
  );
};
export const NgapByGroups: React.FC<any> = () => {
  // get categories
  const { groups } = useSelector(({ ngap }: any) => ngap);
  //  get letter
  const {letter} :any = useParams();

  React.useEffect(() => {
    fetchGroups(letter);
  }, [letter])
  return (
    <div>
      <h1>Liste ngap chapitres</h1>
      <ui.Container>
        {groups && groups.map((cat: any) =>
          <ui.Item style={{ minHeight: "auto", cursor: "pointer" }} key={cat}>
            <h2><Link to={`/actes-tarifs/ngap/${letter}/${cat}`}>{cat}</Link></h2>
          </ui.Item>)}
        {!groups && <div>Loading....</div>}
      </ui.Container>
    </div>
  );
};
export const NgapByActes: React.FC<any> = () => {
  // get categories
  const { actes } = useSelector(({ ngap }: any) => ngap);
  //  get letter
  const {group, letter} :any = useParams();

  React.useEffect(() => {
    fetchActes(group);
  }, [group])
  return (
    <div>
      <h1>Liste ngap chapitres</h1>
      <ui.Container>
        {actes && actes.map((cat: any) =>
          <ui.Item style={{ minHeight: "auto", cursor: "pointer" }} key={cat.acteCode}>
            <h2><Link to={`/actes-tarifs/nomenclature-generale-des-actes-professionnels/${cat.acteCode}`}>{cat.acteLabel}</Link></h2>
          </ui.Item>)}
        {!actes && <div>Loading....</div>}
      </ui.Container>
    </div>
  );
};
