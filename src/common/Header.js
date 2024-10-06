import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {

  const contentAry = [
    {"text" : "Top",    "link" : "/"},
    {"text" : "【問１】", "link" : "/q1"},
    {"text" : "【問２】", "link" : "/q2"},
    {"text" : "【問３】", "link" : "/q3"},
    {"text" : "【問４】", "link" : "/q4"},
    {"text" : "【問５】", "link" : "/q5"}
  ];

  return (
    <section className='header-wrap'>
      {
        contentAry.map((c, i) => {
          return <Link className='header-tab' key={i} to={c.link}>{c.text}</Link>;
        })
      }
    </section>
  );
}