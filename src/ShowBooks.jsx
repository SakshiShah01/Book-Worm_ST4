import React from "react";
import Image from "./Image";
import Base from "./Base";

const ShowBooks = (props) => {

    return (
        <>
        <div className="card">
        <a href={props.srclink} >
          <Image imglink = {props.imglink}/>
          <Base bookname = {props.bookname}
          />
        </a>  
         </div> 
        </>

    );
}

export default ShowBooks;