import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ListIcon from "@material-ui/icons/List";
import "./Header.css";
import db from "./Firebase";
import firebase from "./Firebase";

function Services({menuid, colid, colname, docid2, colname2}) {
    const [services, setServices] = useState([0])
    useEffect(() => {
        db.collection("menu")
        .doc(menuid)
        .collection("Col")
        .doc(colid)
        .collection(colname)
        .doc(docid2)
        .collection(colname2)
        .onSnapshot((snapshot) =>
          setServices(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: new Object(doc.data()),
            }))
          )
        );
    }, [])

    // console.log(menuid)
    // console.log(colid)
    // console.log(colname)
    // console.log(docid2)
    // console.log(colname2)
    return (
        <>
            {services.map((service)=><a href="#" className="a1"> {service.data.name} </a>)}
     </>       
    )
}

export default Services
