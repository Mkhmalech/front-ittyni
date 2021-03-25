import * as React from 'react';
import ListComponent from '../../../../ui-ittyni/src/list/listComponent';
import { Dispatch, Action, AnyAction } from 'redux';
import { connect, useSelector } from 'react-redux';
import * as ctrl from '../controller/labtests';
import { IttyniState } from '../../../../store/index';
import Helmet from 'react-helmet';

export interface ILabTestsListingProps extends LabTestState {
  dispatch: Dispatch<Action>
}

const LabTestsListing: React.FC<ILabTestsListingProps> = () => {

  // get our tests from state
  const { labtests } = useSelector(({ labState }: any) => labState.test)

  // fetch data
  React.useEffect(() => {
    ctrl.fetchTwentyTests();
  }, [])
  return (
    <>
      <Helmet>
        <title>prix des analyse aux maroc</title>
        <meta name="description" content="prix des analyses medicales aux maroc list " />
        <meta name="keywords" content="" />
      </Helmet>
      {labtests && <ListComponent listTitle="prix des analyse aux maroc" data={labtests.map((labtest:any) =>({
          abbr: labtest.reference ? labtest.reference.Mnemonic : '-',
          title: labtest.name ? labtest.name.fr ? labtest.name.fr : '-' : '-',
          description: 'this is a description',
          options: '',
          bcode: labtest.finance ? (labtest.finance[0] ? labtest.finance[0].Bcode : 0) : 0,
          price: labtest.finance ? (labtest.finance[0] ? Math.floor(labtest.finance[0].Bcode * 1.34) : 0) : 0,
          specimen: {
            ...labtest.specimen
          }
        })
      )} />}
      <button
        onClick={e=>ctrl.labTestsFetching()}
        style={{
          width: "100%",
          padding: "5px",
          backgroundColor: "white",
          marginBottom: "5px",
          cursor : "pointer"
        }}
      >Afficher Tout</button>
    </>
  );
}

const mapStateToProps = ({ labState: { test } }: IttyniState) => ({

  /**
   * List of frensh Lab procedure 
   */
  labtests: test ? test.labtests : undefined,

  /**
   * 
   */


})

export default connect(mapStateToProps)(LabTestsListing)