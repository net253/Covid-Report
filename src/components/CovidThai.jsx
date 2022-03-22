import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBacteria, faPlus } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from "framer-motion";
// import { bacteria } from '@fortawesome/free-solid-svg-icons'
import "./com.css";

export default function CovidThai() {
  const [data, setData] = useState({});
  const [infoLoading, setInfoLoading] = useState(false);

  const fetchData = () => {
    fetch("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all")
      .then((response) => response.json())
      .then((data) =>
        setData(
          data.map((e) => {
            return {
              newCase: e.new_case.toLocaleString("en-US"),
              totalCase: e.total_case.toLocaleString("en-US"),
              newRecovered: e.new_recovered.toLocaleString("en-US"),
              totalRecovered: e.total_recovered.toLocaleString("en-US"),
              newDeath: e.new_death.toLocaleString("en-US"),
              totalDeath: e.total_death.toLocaleString("en-US"),
              newRecover: (
                e.new_case -
                e.new_recovered -
                e.new_death
              ).toLocaleString("en-US"),
              totalRecover: (
                e.total_case -
                e.total_recovered -
                e.total_death
              ).toLocaleString("en-US"),
            };
          })[0]
        )
      )
      .then(() => setInfoLoading(true));
  };

  useEffect(() => {
    const initPage = setTimeout(() => {
      fetchData();
    }, 100);

    const timer1m = setInterval(() => {
      fetchData();
    }, 60 * 1000);

    return () => {
      clearTimeout(initPage);
      clearInterval(timer1m);
    };
  }, []);

  return (
    <>
      <Container id="container" >
        <AnimatePresence exitBeforeEnter>

          {infoLoading ?
            <motion.div
              key={"info"}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.15 }}
            >
              <Row>
                <Col className="p-1 mt-auto">
                  <div id="covid-title">
                    <div>
                      <h5>ยืนยันตัวเลขผู้ติดเชื้อ</h5>
                      <h1 id="covid-title-19">COVID-19</h1>
                    </div>
                    <div id="total-thai">
                      <h2>ทั้งหมดในประเทศไทย</h2>
                    </div>
                  </div>
                  <Card id="total-covid">
                    <div >
                      <h3>ผู้ติดเชื้อสะสม<FontAwesomeIcon style={{ marginLeft: "0.5rem" }} icon={faBacteria} /></h3>
                    </div>
                    <div id="display-total">
                      <Card id="display-total-covid">
                        <FontAwesomeIcon icon={faPlus} size="lg" />
                        <h2>{data.newCase}</h2>
                      </Card>
                      <h1>{data.totalCase}</h1>
                    </div>
                  </Card>
                </Col>
                <Col className="p-1">
                  <Card id="display-list">
                    <h3>กำลังรักษา</h3>
                    <h3 id="display-list-total">{data.totalRecover}</h3>
                    <Card id="list-1">
                      <FontAwesomeIcon icon={faPlus} />
                      <h4>{data.newRecover}</h4>
                    </Card>
                  </Card>
                  <Card id="display-list">
                    <h3>หายแล้ว</h3>
                    <h3 id="display-list-total">{data.totalRecovered}</h3>
                    <Card id="list-2">
                      <FontAwesomeIcon icon={faPlus} />
                      <h4>{data.newRecovered}</h4>
                    </Card>
                  </Card>
                  <Card id="display-list">
                    <h3>เสียชีวิต</h3>
                    <h3 id="display-list-total">{data.totalDeath}</h3>
                    <Card id="list-3">
                      <FontAwesomeIcon icon={faPlus} />
                      <h4>{data.newDeath}</h4>
                    </Card>
                  </Card>
                </Col>
              </Row>
            </motion.div>
            :
            <motion.div
              key={"loading"}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.15 }}
            >
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "300px" }} >
                <Spinner animation="border" variant="primary" />
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </Container>
    </>
  );
}
