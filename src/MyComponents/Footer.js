import React from "react";
import "./footer.css";

export const Footer = () => {
  let footerStyle = {
    // position: "relative",
    // // top: "100",
    // // top: "200px",
    // width: "100%"
  }

  return <div className="bg-dark text-light">
    <footer className="text-center py-2" style={footerStyle}>
      Copyright &copy; MyTodosList.com
    </footer>
  </div>
};
