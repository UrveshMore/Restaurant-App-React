import React from "react";

const Footer = () => {
  return (
    <div bgColor="light" className="text-center text-lg-left">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(223, 152, 72, 0.845)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="/">
          GoFood
        </a>
      </div>
    </div>
  );
};

export default Footer;
