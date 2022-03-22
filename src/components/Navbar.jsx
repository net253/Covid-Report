import React, { useEffect, useState } from "react";
import { Nav, Image, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./com.css";
function NavBar() {
  const [update, setUpdate] = useState("");
  const fetchData = () => {
    fetch("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all")
      .then((response) => response.json())
      .then((data) =>
        setUpdate(data[0].txn_date.split("-").reverse().join("/"))
      );
  };

  useEffect(() => {
    const initPage = setTimeout(() => {
      fetchData();
    }, 100);

    return () => {
      clearTimeout(initPage);
    };
  }, []);
  return (
    <>
      <Navbar className="justify-content-between p-0" bg="dark" variant="dark" sticky="top" expand="md">
        <Navbar.Brand href="#">
          <Image src={"https://img.icons8.com/clouds/48/000000/coronavirus.png"} />
          COVID-19 Report
        </Navbar.Brand>
        <Nav.Item>
          <p id="update">อัปเดตล่าสุด {update}</p>
        </Nav.Item>
      </Navbar>
    </>
  );
}

export default NavBar;
