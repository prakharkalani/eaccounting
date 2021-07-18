import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ListIcon from "@material-ui/icons/List";
import "./Header.css";
import db from "./Firebase";
import firebase from "./Firebase";
import Services from "./Services";

function Menuitemcol({ menuid, colid, colname }) {
  // console.log(menuid)
  // console.log(colid)
  // console.log(colname)
  const [collection1, setCollection1] = useState([]);
  

  //

  useEffect(() => {
    db.collection("menu")
      .doc(menuid)
      .collection("Col")
      .doc(colid)
      .collection(colname)
      .onSnapshot((snapshot) =>
        setCollection1(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: new Object(doc.data()),
          }))
        )
      );
  }, []);

  // console.log(collection1.id)
  //     collections()

  // }, [])

  return (
    <div className="flexcolelem ">
      {collection1.map((collection) => (
        <>
          <a href="#" className="a">
            {" "}
            {collection.data.name}{" "}
          </a>
          

            
              {<Services 
              menuid = {menuid} 
              colid = {colid} 
              colname = {colname}
               docid2 = {collection.id}
                colname2= {collection.data.name} />}
            
          
        </>
      ))}
    </div>
  );
}

export default Menuitemcol;
