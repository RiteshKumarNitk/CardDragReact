import React, { useRef, useState } from "react";
import Card from "./Card";

function ForeGround() {
  
    const ref = useRef(null);

  const data = [
    {
      desc: "here is some  data 1 description ",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true,tagTitle:"Download Now", tagColor:"green" },
    },
    {
      desc: "here is some data 2 description ",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true,tagTitle:"Upload", tagColor:"red" },
    },
    {
      desc: "here is some data 3 description ",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle:"Download Now", tagColor:"green" },
    },
    {
      desc: "here is some data 3 description ",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle:"Download Now", tagColor:"green" },
    },
    {
      desc: "here is some data 3 description ",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle:"Download Now", tagColor:"green" },
    },
    {
      desc: "here is some data 3 description ",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle:"Download Now", tagColor:"green" },
    },
  ];
  useState();
  return (
    <div>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item,index)=>(
            <Card data={item}  refrance={ref}/>
            ))}
      </div>
    </div>
  );
}

export default ForeGround;
