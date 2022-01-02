import React from "react";

import "../Styles/Link.css";

function Link({ name }) {
  const classnames = `Link Button ${name}`;

  return (
    <div className={classnames}>
      <a>
        <h2 className="label">{name}</h2>
      </a>
    </div>
  );
}

export default Link;
