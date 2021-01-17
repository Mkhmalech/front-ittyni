import * as React from 'react';
import { Card, CardBody, CardFooter, CardLink } from '../ui-ittyni/src/cards/cards'

export const MedicalProcedures: React.FC<any> = (props) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "5px" }}>
      <CardLink to="/actes-tarifs/nabm/">
        <Card>
          <div>
            <CardBody>
              <i className="fas fa-vial" />
              <h2>NABM</h2>
              <p>100 analyses</p>
            </CardBody>
            <CardFooter><p>Trouver Analyse</p></CardFooter></div>
        </Card>
      </CardLink>
      <CardLink to="/actes-tarifs/atc/">
          {/* afficher 20 lettre A apres afficher tout */}
        <Card>
          <div>
            <CardBody>
              <i className="fas fa-pills" />
              <h2>Medicaments</h2>
              <p>6400 med</p>
            </CardBody><CardFooter><p>medicaments</p></CardFooter></div>
        </Card>
      </CardLink>
      <CardLink to="#">
        <Card>
          <div>
            <CardBody>
              <i className="fas fa-briefcase-medical" />
              <h2>NGAP</h2>
              <p>1600 Actes</p>
            </CardBody><CardFooter><p>en Cours</p></CardFooter></div>
        </Card>
      </CardLink>
      <CardLink to="#">
        <Card>
          <div>
            <CardBody>
              <i className="fas fa-hand-holding-medical" />
              <h2>CCAM</h2>
              <p>3100 actes</p>
            </CardBody><CardFooter><p>en Cours</p></CardFooter></div>
        </Card>
      </CardLink>
    </div>
  );
};

