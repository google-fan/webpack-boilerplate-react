import React from "react";

function CallToAction({ link, value }) {
  return (
    <a className="btn" role="link" href={link} target="_blank" rel="noreferrer">
      {value}
    </a>
  );
}

export default CallToAction;
