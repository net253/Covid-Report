import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Chart } from "react-google-charts";

export default function CovidBarChart() {
  const [dataCharts, setDataCharts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    fetch("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all")
      .then((response) => response.json())
      .then((data) =>
        setDataCharts(
          data
            .map((e) => [e.txn_date, e.new_case, e.new_recovered, e.new_death])
            .sort()
            .reverse()
            .slice(0, 100)
            .reverse()
        )
      )
      .then(() => setLoading(true));
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

  const data = [["วันที่", "ติดเชื้อ", "หายแล้ว", "เสียชีวิต"], ...dataCharts];

  const options = {
    title: "แผนภูมิแสดงแนวโน้ม ผู้ติดเชื้อ รักษาหายและเสียชีวิต",
    curveType: "function",
    legend: { position: "bottom" },
    colors: ["blue", "green", "red"],
    backgroundColor: {
      fill: '#e5e5e5',
      fillOpacity: 0.9
    },
    animation: {
      duration: 1000,
      easing: 'out',
      startup: true,
    },
  };

  return (
    <>
      <Container style={{ marginBottom: "8rem" }}>
        {loading ?
          <Chart
            chartType="LineChart"
            width="100%"
            height="380px"
            data={data}
            options={options}
          />
          :
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "300px" }} >
            <Spinner animation="border" variant="primary" />
          </div>}
      </Container>
    </>
  );
}
