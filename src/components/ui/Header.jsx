import React from "react";
import PopularProducts from "./products-components/PopularProducts";

function Header() {
  const badgeStyle = {
    top: "0.5rem",
    right: "0.5rem",
  };

  return (
    <>
      <header className="bg-dark py-2">
        <div className="container px-4 px-lg-5 my-5">      
          <PopularProducts />
        </div>
      </header>
    </>
  );
}

export default Header;
