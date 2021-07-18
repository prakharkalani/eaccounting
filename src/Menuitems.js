import React, {useEffect, useState} from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ListIcon from "@material-ui/icons/List";
import "./Header.css";
import db from "./Firebase";
import Menuitemcol from "./Menuitemcol";

function Menuitems({ menuname, menuid }) {
    // const name1 = db.collection("menu").doc(menuname).get()
    // console.log(menuname.name)
    const [cols, setCol] = useState([])
    useEffect(() => {
       db.collection('menu').doc(menuid).collection('Col').onSnapshot((snapshot)=> 
       setCol(
           snapshot.docs.map((doc)=>({
               id:doc.id,
               data:doc.data(),
           }))
       ))
   }, [])
//    console.log(cols)
  return (
    <div className="dropdown" onClick={myFunction_startup}>
      <button className="dropbtn a">
        {menuname.name}
        <ArrowDropDownIcon className="dropdownBtn" />
      </button>
      <div className="dropdown-content" id="startup">
        <div className="flexcol">
            

            {
                cols.map((col)=>
                (
                    <Menuitemcol 
                    menuid={menuid}
                    colid={col.id}
                    colname={col.data.name}
                     />

                ))
            }     
        </div>
      </div>
    </div>
  );
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

export default Menuitems;
