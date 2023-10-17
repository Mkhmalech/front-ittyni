import * as React from "react";
import * as List from "./list";
import { Ico } from "../../../react-icons-sc/src/ico";
import { tube } from "../../../lab-ittyni/src/icon/sample";
import { Badge } from "../badge/badge";
import { Link } from "react-router-dom";
import styled from "../../../theme/styled-components";
import { TestLink } from "../links/Links";
import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "../../../lab-ittyni/src/labTests/store/actions";

interface IListComponentProps {
  listTitle: string;
  data?: ListData[];
}

const ListComponent: React.FC<IListComponentProps> = ({ listTitle, data }) => {
  const dispatch = useDispatch();
  const cartTests = useSelector(({ cart }: any) => cart.tests);

  if (data) {
    return (
      (data.length > 0 && (
        <List.Container itemscope itemtype="http://schema.org/ItemList">
          <h1>{listTitle}</h1>

          {data.map((item: ListData) => (
            <List.Item key={item.abbr}>
              {/* abbriviation word for the item  or item icon */}
              <List.ItemAbbr>
                <h3>{item.abbr}</h3>
              </List.ItemAbbr>

              {/* content of item header description */}
              <List.ItemContent>
                <List.ItemContentTitle>
                  <TestLink
                    to={`/actes-tarifs/nomenclature-actes-biologie-médicale/${item._id}`}
                  >
                    <h2>{item.title}</h2>
                  </TestLink>
                </List.ItemContentTitle>

                <List.ItemContentDescription>
                  {verifyAndMapArray(item.specimen.anticoagulant)}
                  {verifyAndMapArray(item.specimen.nature)}
                  {item.specimen.numberoftube ? (
                    <Badge>
                      {item.specimen.numberoftube} tube{" "}
                      {item.specimen.tubeColor}
                    </Badge>
                  ) : (
                    ""
                  )}

                  {item.specimen.volumemin ? (
                    <Badge> {item.specimen.volumemin} ml</Badge>
                  ) : (
                    ""
                  )}
                </List.ItemContentDescription>
              </List.ItemContent>

              {/* options prices codes and others herreee */}
              <List.ItemOptions>
                <List.ItemOptionsData></List.ItemOptionsData>

                <List.ItemOptionsFinance>
                  <div>
                    <span>
                      <h3>{item.price} dhs</h3>
                    </span>
                  </div>
                  <div>
                    <h3>B {item.bcode}</h3>
                  </div>
                  <div
                    style={{ margin: "5px", cursor: "pointer" }}
                    onClick={() =>
                      dispatch({
                        type: CartActions.ADD_TEST_TO_CART,
                        payload: item,
                      })
                    }
                  >
                    <i
                      className="fas fa-cart-plus"
                      style={{
                        fontSize: "28px",
                        color: cartTests.some((t: any) => t._id === item._id)
                          ? "#ff0000"
                          : "#877d7d",
                      }}
                    />
                  </div>
                </List.ItemOptionsFinance>
              </List.ItemOptions>
            </List.Item>
          ))}
        </List.Container>
      )) || <div>loading....</div>
    );
  } else {
    return <div>loading....</div>;
  }
};
// #877d7d

export default ListComponent;

const verifyAndMapArray = (arr?: string[]) => {
  if (arr) {
    return (
      (arr.length <= 0 && <></>) ||
      (arr.length > 0 && (
        <>
          {arr.map(
            (item) =>
              ((item === "Serum" || item === "Sérum") && (
                <Badge key={item} bgcolor="#FDD835">
                  {item}
                </Badge>
              )) ||
              (item === "Plasma" && (
                <Badge key={item} bgcolor="#FF9800">
                  {item}
                </Badge>
              )) || (
                <Badge key={item} bgcolor="#FDD835">
                  {item}
                </Badge>
              )
          )}
        </>
      ))
    );
  } else {
    return <></>;
  }
};
