import React from "react";

const Footer = ({ handleReturn }) => {
  const handleOnClick = () => {
    console.log("clicked");
  };
  return (
    <div className="footer">
      <button className="btn-dark" onClick={handleReturn}>
        return
      </button>
    </div>
  );
};

export default Footer;
