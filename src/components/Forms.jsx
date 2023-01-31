import Input from "./Input";

import React from "react";

import "../styles/styles.css";

const Forms = () => {
  
  const prop = [
    {
      label: "Name : ",
      placeholder: "Name",
      type: "text",
    },
    {
      label: "Email : ",
      placeholder: "Email",
      type: "email",
    },
  ];

  return (
    <>
      <form
        className="flex flex-col items-center justify-center bg-primary-800 w-12/12 sm:w-8/12 mx-auto h-[55vh] text-secondary rounded-xl"
      >
        <h1 className="text-3xl text-center font-bold">Formulir</h1>
        <Input prop={prop} />
        <select className="bg-transparent border-b p-4 sm:w-6/12 mx-auto mt-4 focus:outline-none focus:border-b-2 caret-secondary">
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <button className="bg-btn w-10/12 sm:w-4/12 mx-auto mt-4 h-fit p-2 bg-btn text-white rounded hover:bg-btn-500">
          Save
        </button>
      </form>
    </>
  );
};

export default Forms;
