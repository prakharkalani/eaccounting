import React, { useEffect,  useState } from "react";
import "./Header.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ListIcon from "@material-ui/icons/List";
import db from "./Firebase";
import firebase from "./Firebase";
import Menuitems from "./Menuitems";


function Header() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    db.collection("menu")
      .onSnapshot((snapshot) =>
        setMenu(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: new Object(doc.data()),
          }))
        )
      );
  }, []);
//  console.log(menu)
  return (
    <div className="Header">
      <div className="header1 clearfix" id="navbar">
        <header>
          <nav>
            <span className="eaccounting" onClick="#">
              E-Accounting
            </span>

            <ul className="nav clearfix" id="myLinks">
              {menu.map((menuitem) =>   (
                <Menuitems 
                menuname={menuitem.data}
                menuid={menuitem.id} />
              ))}
              <div className="dropdown" onClick={myFunction_startup}>
                <button className="dropbtn a">
                  Startup
                  <ArrowDropDownIcon className="dropdownBtn" />
                  {/* <i className="fa fa-caret-down" styles="margin-left: 5px;"></i> */}
                </button>
                <div className="dropdown-content" id="startup">
                  <div className="flexcol">
                    <div className="flexcolelem ">
                      <a href="#" className="a">
                        Indian Owners
                      </a>
                      <a href="#" className="a1">
                        Proprietorship
                      </a>
                      <a href="#" className="a1">
                        Partnership
                      </a>
                      <a href="#" className="a1">
                        One Person Company
                      </a>
                      <a href="#" className="a1">
                        Limited Liability Partnership
                      </a>
                      <a href="#" className="a1">
                        Private Limited Company
                      </a>
                      <a href="#" className="a1">
                        Public Limited Company
                      </a>
                    </div>

                    <div className="flexcolelem">
                      <a href="#" className="a">
                        Special Entities
                      </a>
                      <a href="#" className="a1">
                        Section 8 Company
                      </a>
                      <a href="#" className="a1">
                        Trust
                      </a>
                      <a href="#" className="a1">
                        Society
                      </a>
                      <a href="#" className="a">
                        Other Registrations
                      </a>
                      <a href="#" className="a1">
                        Import Export Code
                      </a>
                      <a href="#" className="a1">
                        FSSAI Registration
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dropdown" onClick={myFunction_mca}>
                <button className="dropbtn a">
                  Companies - MCA
                  <ArrowDropDownIcon className="dropdownBtn" />
                </button>
                <div className="dropdown-content" id="mca">
                  <div className="flexcol">
                    <div className="flexcolelem">
                      <a href="#" className="a">
                        Incorporation Services
                      </a>
                      <a href="#" className="a1">
                        One Person Company
                      </a>
                      <a href="#" className="a1">
                        Private Limited Company
                      </a>
                      <a href="#" className="a1">
                        Public Limited Company
                      </a>
                      <a href="#" className="a">
                        Annual Services
                      </a>
                      <a href="#" className="a1">
                        Audit and Annual Filing Assistance
                      </a>
                      <a href="#" className="a1">
                        Deposits Return
                      </a>
                      <a href="#" className="a1">
                        DIN-KYC
                      </a>
                    </div>

                    <div className="flexcolelem">
                      <a href="#" className="a">
                        Other Services
                      </a>
                      <a href="#" className="a1">
                        Change in Address
                      </a>
                      <a href="#" className="a1">
                        Change of Director
                      </a>
                      <a href="#" className="a1">
                        Change in Share Capital
                      </a>
                      <a href="#" className="a1">
                        Change in Name
                      </a>
                      <a href="#" className="a1">
                        Change in Objectives
                      </a>
                      <a href="#" className="a1">
                        Share Transfer
                      </a>
                      <a href="#" className="a">
                        Strike off Services
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dropdown" onClick={myFunction_itax}>
                <button className="dropbtn a">
                  Income Tax
                  <ArrowDropDownIcon className="dropdownBtn" />
                </button>
                <div className="dropdown-content" id="itax">
                  <div className="flexcol">
                    <div className="flexcolelem">
                      <a href="#" className="a">
                        Compliance
                      </a>
                      <a href="#" className="a1">
                        Individual
                      </a>
                      <a href="#" className="a1">
                        Partnership
                      </a>
                      <a href="#" className="a1">
                        Limited Liability Partnership
                      </a>
                      <a href="#" className="a1">
                        Company
                      </a>
                      <a href="#" className="a1">
                        Tax Notices{" "}
                      </a>
                      <a href="#" className="a1">
                        TDS Return
                      </a>
                    </div>

                    <div className="flexcolelem">
                      <a href="#" className="a">
                        Return Filing
                      </a>
                      <a href="#" className="a1">
                        ITR-1
                      </a>
                      <a href="#" className="a1">
                        ITR-2
                      </a>
                      <a href="#" className="a1">
                        ITR-3
                      </a>
                      <a href="#" className="a1">
                        ITR-4
                      </a>
                      <a href="#" className="a1">
                        ITR-5
                      </a>
                      <a href="#" className="a1">
                        ITR-6
                      </a>
                      <a href="#" className="a1">
                        ITR-7
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dropdown" onClick={myFunction_gst}>
                <button className="dropbtn a">
                  Goods & Service Tax
                  <ArrowDropDownIcon className="dropdownBtn" />
                </button>
                <div className="dropdown-content" id="gst">
                  <div className="flexcol">
                    <div className="flexcolelem">
                      <a href="#" className="a">
                        Services
                      </a>
                      <a href="#" className="a1">
                        GST Registration
                      </a>
                      <a href="#" className="a1">
                        GST Return Filing
                      </a>
                      <a href="#" className="a1">
                        GST Annual Return
                      </a>
                      <a href="#" className="a1">
                        GST LUT Filing
                      </a>
                      <a href="#" className="a1">
                        E-way billing
                      </a>
                      <a href="#" className="a1">
                        GST Cancellation
                      </a>
                    </div>

                    <div className="flexcolelem">
                      <a href="#" className="a1">
                        GST R-1
                      </a>
                      <a href="#" className="a1">
                        GST R-2
                      </a>
                      <a href="#" className="a1">
                        GST R-3
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dropdown" onClick={myFunction_oc}>
                <button className="dropbtn a">
                  Other Compliances
                  <ArrowDropDownIcon className="dropdownBtn" />
                </button>
                <div className="dropdown-content" id="oc">
                  <div className="flexcol">
                    <div className="flexcolelem">
                      <a href="#" className="a">
                        Services
                      </a>
                      <a href="#" className="a1">
                        PF-ESIC Registration
                      </a>
                      <a href="#" className="a1">
                        PF-ESIC Return Filing
                      </a>
                      <a href="#" className="a1">
                        FSSAI License
                      </a>
                      <a href="#" className="a1">
                        Shop Act Registration
                      </a>
                      <a href="#" className="a1">
                        Professional Tax Registration
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
            <a href="javascript:void(0);" className="icon" onClick={myFunction}>
              <ListIcon />
            </a>
          </nav>
        </header>
      </div>
    </div>
  );
}

function myFunction() {
  var x = document.getElementById("myLinks");
  var s = document.getElementById("startup");
  var m = document.getElementById("mca");
  var g = document.getElementById("gst");
  var i = document.getElementById("itax");
  var o = document.getElementById("oc");
  if (x.style.display === "block") {
    x.style.display = "none";
    i.style.display = "none";
    m.style.display = "none";
    g.style.display = "none";
    s.style.display = "none";
    o.style.display = "none";
    // document.getElementById("cross").classNameList.remove("fa-times")
    // document.getElementById("cross").classNameList.add("fa-bars")
  } else {
    x.style.display = "block";
    // document.getElementById("cross").classNameList.remove("fa-bars")
    // document.getElementById("cross").classNameList.add("fa-times")
  }
}
function myFunction_startup() {
  var x = document.getElementById("startup");
  var s = document.getElementById("startup");
  var m = document.getElementById("mca");
  var g = document.getElementById("gst");
  var i = document.getElementById("itax");
  var o = document.getElementById("oc");
  if (window.innerWidth < 1000) {
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
      m.style.display = "none";
      g.style.display = "none";
      i.style.display = "none";
      o.style.display = "none";
    }
  }
}
function myFunction_mca() {
  var x = document.getElementById("mca");
  var s = document.getElementById("startup");
  var m = document.getElementById("mca");
  var g = document.getElementById("gst");
  var i = document.getElementById("itax");
  var o = document.getElementById("oc");
  if (window.innerWidth < 1000) {
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
      s.style.display = "none";
      g.style.display = "none";
      i.style.display = "none";
      o.style.display = "none";
    }
  }
}
function myFunction_itax() {
  var x = document.getElementById("itax");
  var s = document.getElementById("startup");
  var m = document.getElementById("mca");
  var g = document.getElementById("gst");
  var i = document.getElementById("itax");
  var o = document.getElementById("oc");
  if (window.innerWidth < 1000) {
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
      m.style.display = "none";
      g.style.display = "none";
      s.style.display = "none";
      o.style.display = "none";
    }
  }
}
function myFunction_gst() {
  var x = document.getElementById("gst");
  var s = document.getElementById("startup");
  var m = document.getElementById("mca");
  var g = document.getElementById("gst");
  var i = document.getElementById("itax");
  var o = document.getElementById("oc");
  if (window.innerWidth < 1000) {
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
      m.style.display = "none";
      s.style.display = "none";
      i.style.display = "none";
      o.style.display = "none";
    }
  }
}
function myFunction_oc() {
  var x = document.getElementById("oc");
  var s = document.getElementById("startup");
  var m = document.getElementById("mca");
  var g = document.getElementById("gst");
  var i = document.getElementById("itax");
  var o = document.getElementById("oc");
  if (window.innerWidth < 1000) {
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
      m.style.display = "none";
      g.style.display = "none";
      i.style.display = "none";
      s.style.display = "none";
    }
  }
}
export default Header;
