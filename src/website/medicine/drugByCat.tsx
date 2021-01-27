import * as React from 'react';
import { useSelector } from 'react-redux';
import { fetchDrugCategories, fetchDrugChapters, fetchDrugSousGroups, fetchDrugSousChapters, fetchDrugByAtc } from './store/controller';
import * as List from '../../ui-ittyni/src/list/list'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export const DrugByCategory: React.FC<any> = () => {
  // get categories
  const { categories } = useSelector(({ medicine }: any) => medicine);

  React.useEffect(() => {
    fetchDrugCategories();
  }, [])
  return (
    <div>
      <h1>Liste des Groupes de Medicaments</h1>
      <List.Container>
        {categories && categories.map((cat: any) =>
          <List.Item style={{ minHeight: "auto", cursor: "pointer" }}>
            <h2><Link to={`/actes-tarifs/atc/${cat}`}>{cat}</Link></h2>
          </List.Item>)}
        {!categories && <div>Loading....</div>}
      </List.Container>
    </div>
  );
};
export const DrugByChapter: React.FC<any> = () => {
  // get categories
  const { chapters } = useSelector(({ medicine }: any) => medicine);
  // get cat name
  const {chapter} : any = useParams();

  React.useEffect(() => {
    fetchDrugChapters(chapter);
  }, [])
  return (
    <div>
      <h1>Liste des Chapitres de Medicaments</h1>
      <List.Container>
        {chapters && chapters.map((cat: any) =>
          <List.Item style={{ minHeight: "auto", cursor: "pointer" }}>
            <h2><Link to={`/actes-tarifs/atc/${chapter}/${cat}`}>{cat}</Link></h2>
          </List.Item>)}
        {!chapters && <div>Loading....</div>}
      </List.Container>
    </div>
  );
};
export const DrugBySousChapter: React.FC<any> = () => {
  // get categories
  const { sousChapters } = useSelector(({ medicine }: any) => medicine);
  // get cat name
  const {chapter, sousChap} : any = useParams();

  React.useEffect(() => {
    fetchDrugSousChapters(sousChap);
  }, [])
  return (
    <div>
      <h1>Liste des Groupes de Medicaments</h1>
      <List.Container>
        {sousChapters && sousChapters.map((cat: any) =>
          <List.Item style={{ minHeight: "auto", cursor: "pointer" }}>
            <h2><Link to={`/actes-tarifs/atc/${chapter}/${sousChap}/${cat}`}>{cat}</Link></h2>
          </List.Item>)}
        {!sousChapters && <div>Loading....</div>}
      </List.Container>
    </div>
  );
};
export const DrugByGroup: React.FC<any> = () => {
  // get categories
  const { groups } = useSelector(({ medicine }: any) => medicine);
  // get cat name
  const {group} : any = useParams();

  React.useEffect(() => {
    fetchDrugSousGroups(group);
  }, [])
  return (
    <div>
      <h1>Liste des Groupes de Medicaments</h1>
      <List.Container>
        {groups && groups.map((cat: any) =>
          <List.Item style={{ minHeight: "auto", cursor: "pointer" }}>
            <h2><Link to={`/actes-tarifs/medicaments/${cat.code}`}>{cat.title}</Link></h2>
          </List.Item>)}
        {!groups && <div>Loading....</div>}
      </List.Container>
    </div>
  );
};
export const DrugByAtcCode: React.FC<any> = () => {
  // get categories
  const { atcDrugs } = useSelector(({ medicine }: any) => medicine);
  // get cat name
  const {code} : any = useParams();

  React.useEffect(() => {
    fetchDrugByAtc(code);
  }, [])
  return (
    <div>
      Drugs List By details
      <List.Container>
        {atcDrugs && atcDrugs.map((cat: any) =>
          <List.Item style={{ minHeight: "auto", cursor: "pointer" }}>
            <h2><Link to={`/actes-tarifs/medicament/${cat._id}`}>{cat.names.map((n:any)=>n.title)}</Link></h2>
          </List.Item>)}
        {!atcDrugs && <div>Loading....</div>}
      </List.Container>
    </div>
  );
};
