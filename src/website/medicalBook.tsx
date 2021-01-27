import * as React from 'react';
import { Card, CardBody, CardFooter, CardLink } from '../ui-ittyni/src/cards/cards'

export const MedicalBook: React.FC<any> = (props) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "5px" }}>
      <CardLink to="/annuaire/pharmacies/maroc">
        <Card>
          <div>
            <CardBody>
              <i className="fas fa-capsules" />
              <h2>Pharmacies</h2>
              <p>6500 pharma</p>
            </CardBody>
            <CardFooter><p>Trouver Pharma</p></CardFooter></div>
        </Card>
      </CardLink>
      <CardLink to="/annuaire/labm/maroc">
        <Card>
          <div>
            <CardBody>
              <i className="fas fa-microscope" />
              <h2>Laboratoires</h2>
              <p>630 lab</p>
            </CardBody><CardFooter><p>Trouver Lab</p></CardFooter></div>
        </Card>
      </CardLink>
      <CardLink to="/annuaire/cabinets/maroc">
        <Card>
          <div>
            <CardBody>
              <i className="fas fa-user-md" />
              <h2>Cabinets</h2>
              <p>1130 cabinets</p>
            </CardBody><CardFooter><p>Trouver Cab</p></CardFooter></div>
        </Card>
      </CardLink>
    </div>
  );
};

