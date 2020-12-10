import React from "react";
import "./footer.css";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <span>
        <Moment />
        <FontAwesomeIcon size="lg" icon={faRocket} />{""}
        
      </span>
    </footer>
  );
}

export default Footer;
