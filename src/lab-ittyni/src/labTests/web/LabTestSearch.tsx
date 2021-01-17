import * as React from 'react'
import { Labtests, searchLabTests } from '../controller/labtests';
import { SearchContainer, SearchIcon, SearchInput } from "../../common/Search"
import { ListDropdown } from '../../../../ui-ittyni/src/list/dropdown'
import { useSelector } from 'react-redux';
import { LaboSearchByName } from '../../labos/controller/Labos';
import { pharmaSearchByName } from '../../../../website/pharmacies/store/controller';
import { searchMedicines } from '../../../../website/medicine/store/controller';
import { Link } from 'react-router-dom';

const labtest = new Labtests()

export const LabTestSearch: React.FC<any> = ({showInMobile}) => {
  // set search after 3 letters
  const [query, setQuery] = React.useState<string>('')
  // set search after 3 letters
  const [hide, setHide] = React.useState<boolean>(true)
  // get data
  const { searchTests } = useSelector(({ labState }: any) => labState.test)
  // get data
  const { search } = useSelector(({ labState }: any) => labState.labo)
  // get data
  const {searchPharma} = useSelector(({pharma}:any) => pharma)
  // get data
  const {searchMedicine} = useSelector(({medicine}:any) => medicine)
  const searchAcross = (q: string) => {
    if(q.length>=2){
      setHide(false);
      searchLabTests(q);
      LaboSearchByName(q);
      pharmaSearchByName(q);
      searchMedicines(q);
    }
  }
  return (
    <SearchContainer show={showInMobile}>
      <SearchIcon className="fa fa-search font-green" onClick={e => searchAcross(query)}></SearchIcon>
      <SearchInput type="text"
        placeholder="Chercher (min 2 lettres)"
        onChange={e => setQuery(e.target.value)}
        onFocus={e=>setHide(true)}
      />
      <ListDropdown hide={hide}>
        <ul>
          <li> <h4>Analyses Medicales ( { searchTests && searchTests.length } ) </h4>
            {(!searchTests || searchTests.length < 0) && <ul><li>Loading ...</li></ul>}
            {searchTests && searchTests.length >= 0 && <ul>{searchTests.map((t: any) => 
              <li><Link to={`/actes-tarifs/nomenclature-actes-biologie-médicale/${t.reference.Mnemonic}`}>
                {t.name.fr} - {t.reference.Mnemonic}
              </Link></li>
              )}</ul>}
          </li>
          <li> <h4>Medicaments ( { searchMedicine && searchMedicine.length } ) </h4>
            {(!searchMedicine || searchMedicine.length < 0) && <ul><li>Loading ...</li></ul>}
            {searchMedicine && searchMedicine.length >= 0 && <ul>{searchMedicine.map((t: any) => 
              <li><Link to={`/actes-tarifs/medicament/${t._id}`}>{t.names.map((n:any)=>n.title)}</Link></li>
              )}</ul>}
          </li>
          <li> <h4>Labaoratoires ( { search && search.length } ) </h4>
            {(!search || search.length < 0) && <ul><li>Loading ...</li></ul>}
            {search && search.length >= 0 && <ul>{search.map((t: any) => 
              <Link to={`/annuaire/labm/maroc/${t.contact.address.city}/${t._id}`}><li>{t.account.name} - {t.contact.address.city}</li></Link>
            )}</ul>}
          </li>
          <li> <h4>Pharmacies ( { searchPharma && searchPharma.length } ) </h4>
            {(!searchPharma || searchPharma.length<0) && <ul><li>Loading ...</li></ul>}
            {searchPharma && searchPharma.length >=0 && <ul>{searchPharma.map((t:any)=>
              <li><Link to={`/annuaire/pharmacie/maroc/${t.contact.address.city}/${t._id}`}>{t.account.name} - {t.contact.address.city}</Link></li>
            )}</ul>}
          </li>
        </ul>
      </ListDropdown>
    </SearchContainer>
  )
}
