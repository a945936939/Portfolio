import React, { Component } from "react";

import code from "public/code.png";

import Image from "next/image";
export default function Service(props) {
  return (
    <div className="lg:w-1/3 flex-auto  text-center shadow-lg p-10 rounded-xl my-10">
      <Image src={props.src} width={100} height={100} className="mx-auto" />

      <h3 className="text-lg font-medium pt-8 pb-2">{props.title}</h3>
      <p className="text-md py-2 leading-8 text-gray-800">{props.content}</p>
      <h4></h4>
    </div>
  );
}
