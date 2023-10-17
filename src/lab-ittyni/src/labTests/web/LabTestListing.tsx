import * as React from "react";
import ListComponent from "../../../../ui-ittyni/src/list/listComponent";
import { Dispatch, Action, AnyAction } from "redux";
import { connect, useSelector } from "react-redux";
import * as ctrl from "../controller/labtests";
import { IttyniState } from "../../../../store/index";
import Helmet from "react-helmet";
import { ReactComponent as SamplePickup } from "../../../../assets/delivery.svg";

export interface ILabTestsListingProps extends LabTestState {
  dispatch: Dispatch<Action>;
}

const LabTestsListing: React.FC<ILabTestsListingProps> = () => {
  // get our tests from state
  const { labtests } = useSelector(({ labState }: any) => labState.test);
  const cartTests = useSelector(({ cart }: any) => cart.tests);

  // fetch data
  React.useEffect(() => {
    ctrl.fetchTwentyTests();
  }, []);
  return (
    <>
      <Helmet>
        <title>prix des analyse aux maroc</title>
        <meta
          name="description"
          content="prix des analyses medicales aux maroc list "
        />
        <meta name="keywords" content="" />
      </Helmet>
      {labtests && (
        <ListComponent
          listTitle="prix des analyse aux maroc"
          data={labtests.map((labtest: any) => ({
            _id: labtest && labtest._id,
            abbr: labtest.reference ? labtest.reference.Mnemonic : "-",
            title: labtest.name
              ? labtest.name.fr
                ? labtest.name.fr
                : "-"
              : "-",
            description: "this is a description",
            options: "",
            bcode: labtest.finance
              ? labtest.finance[0]
                ? labtest.finance[0].Bcode
                : 0
              : 0,
            price: labtest.finance
              ? labtest.finance[0]
                ? Math.floor(labtest.finance[0].Bcode * 1.1)
                : 0
              : 0,
            specimen: {
              ...labtest.specimen,
            },
          }))}
        />
      )}
      <button
        onClick={(e) => ctrl.labTestsFetching()}
        style={{
          width: "100%",
          padding: "5px",
          backgroundColor: "white",
          marginBottom: "5px",
          cursor: "pointer",
        }}
      >
        Afficher Tout
      </button>
      <div
        style={{
          color: "white",
          position: "fixed",
          bottom: 0,
          width: "90%",
          padding: "10px 20px",
          backgroundColor: "#ff6f61",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            padding: "0 10px",
            borderRight: "1px solid white",
            display: "flex",
            flexDirection: "column",
            background: "unset",
          }}
        >
          <span style={{ background: "unset" }}>Total</span>
          <span style={{ background: "unset" }}>
            {!!cartTests.length &&`
              ${cartTests.reduce(
                (acc: any, curr: any) => acc + parseInt(curr.price),
                0
              )} Dhs`}
            {!cartTests.length && <>0 Dhs</>}
          </span>
        </div>
        <div
          style={{
            background: "unset",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          {/* <span style={{background: "unset"}}><SamplePickup width={40} height={40} style={{background: "unset"}}/></span> */}
          <span style={{ background: "unset" }}>Prélèvement à Domicile</span>
          <span
            style={{
              background: "unset",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <b style={{ background: "unset" }}>
              {!!cartTests.length && `${cartTests.length} Tests`}
            </b>
            <i
              className="fas fa-arrow-right"
              style={{
                background: "unset",
                fontSize: "x-large",
                fontWeight: 700,
              }}
            />
          </span>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ labState: { test } }: IttyniState) => ({
  /**
   * List of frensh Lab procedure
   */
  labtests: test ? test.labtests : undefined,

  /**
   *
   */
});

export default connect(mapStateToProps)(LabTestsListing);
