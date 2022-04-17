import React from "react";

const Footer = () => {
  return (
    <footer class="bg-dark text-center text-white fixed-bottom">
      <div class="container p-4">
        <div
          class="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <p className="text-center">
            <small>
              &copy;All rights reserved by Monirul.{new Date().getFullYear()}
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
