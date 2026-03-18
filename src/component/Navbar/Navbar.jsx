import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="bg-base-100 shadow-sm">
        <div className="navbar sideMargin">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm navbarMenu dropdown-content gap-5  bg-base-100 rounded-box z-1 p-5 w-52 p-2 shadow"
              >
                <li>Home</li>
                <li>FAQ</li>
                <li>ChangeLog</li>
                <li>Blog</li>
                <li>Download</li>
                <li>Contact</li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">CS — Ticket System</a>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal navbarMenu px-1 gap-5">
              <li>Home</li>
              <li>FAQ</li>
              <li>ChangeLog</li>
              <li>Blog</li>
              <li>Download</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="navbar-end">
            <a
              className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white border border-black 
             hover:shadow-2xl hover:scale-105 active:scale-95 
             transition-all duration-300 ease-in-out"
            >
              <span class="material-symbols-outlined">add</span>
              <span>New Ticket</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
