import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";

function Sidebar() {
  const [leadMenuOpen, setLeadMenuOpen] = useState(false);
  const [studentMenuOpen, setStudentMenuOpen] = useState(false);
  const [referMenuOpen, setReferMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeReferSubmenu, setActiveReferSubmenu] = useState(null);

  const toggleReferMenu = () => {
    setReferMenuOpen(!referMenuOpen);
    setActiveReferSubmenu(null);
  };

  const toggleStudentMenu = () => {
    setStudentMenuOpen(!studentMenuOpen);
    setActiveSubmenu(null);
  };


  const handleSubmenuClick = (submenu) => {
    setActiveSubmenu(submenu);
    setLeadMenuOpen(true);
  };

  const handleReferSubmenuClick = (referSubmenu) => {
    setActiveReferSubmenu(referSubmenu);
    setActiveSubmenu(null);
    setLeadMenuOpen(false);
    setReferMenuOpen(true);
  };

  const closeDropdown = () => {
    setLeadMenuOpen(false);
    setActiveSubmenu(null);
    setReferMenuOpen(false);
    setActiveReferSubmenu(null);
  };

  return (
    <nav
      className="navbar show navbar-vertical h-lg-screen navbar-expand-lg p-0 navbar-light border-bottom border-bottom-lg-0 border-end-lg"
      style={{ backgroundColor: "#4066D5" }}
      id="navbarVertical"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler mx-2 p-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarCollapse"
          aria-controls="sidebarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <NavLink
          style={{ background: "#4066D5" }}
          className={`navbar-brand logo_ats py-lg-2 px-lg-6 m-0 d-flex align-items-center justify-content-center ${
            leadMenuOpen || activeSubmenu ? "active" : ""
          }`}
          to="/"
        >
          <img
            src={Logo}
            alt="logo"
            style={{ width: "60px", height: "60px" }}
          />
          <span
            className="text-white fs-1 fw-bolder mx-3"
            style={{ textShadow: "1px 1px 2px black" }}
          >
            Accounts
          </span>
        </NavLink>
        <div className="collapse navbar-collapse" id="sidebarCollapse">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/users"
                onClick={closeDropdown}
              >
                <i className="bi bi-house"></i> Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/items"
                onClick={closeDropdown}
              >
                <i class="bi bi-calendar3"></i>Items
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/banking"
                onClick={closeDropdown}
              >
                <i class="bi bi-calendar3"></i>Banking
              </NavLink>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${
                  referMenuOpen || activeReferSubmenu ? "active" : ""
                }`}
                onClick={toggleReferMenu}
              >
                <i className="bi bi-bar-chart"></i> Sales
                {referMenuOpen && (
                  <i
                    className="bi bi-chevron-up"
                    style={{ marginLeft: "auto" }}
                  ></i>
                )}
                {!referMenuOpen && (
                  <i
                    className="bi bi-chevron-down"
                    style={{ marginLeft: "auto" }}
                  ></i>
                )}
              </div>
              {referMenuOpen && (
                <ul className="submenu">
                  <NavLink
                    className="nav-link"
                    to="/customer"
                    onClick={() => handleReferSubmenuClick("create")}
                  >
                    <li
                     
                      className={`nav-item ${
                        activeReferSubmenu === "create"
                          ? "active-referSubmenu"
                          : ""
                      }`}
                    >
                      Customer
                    </li>
                  </NavLink>
                  <NavLink
                   
                    className="nav-link"
                    to="/estimates"
                    onClick={() => handleReferSubmenuClick("create")}
                  >
                    <li
                      className={`nav-item ${
                        activeReferSubmenu === "create"
                          ? "active-referSubmenu"
                          : ""
                      }`}
                    >
                      Estimates
                    </li>
                  </NavLink>
                  <NavLink
                   
                    className="nav-link"
                    to="/invoice"
                    onClick={() => handleReferSubmenuClick("create")}
                  >
                    <li
                      className={`nav-item ${
                        activeReferSubmenu === "create"
                          ? "active-referSubmenu"
                          : ""
                      }`}
                    >
                      Invoice
                    </li>
                  </NavLink>
                  <NavLink
                   
                    className="nav-link"
                    to="/payementRecived"
                    onClick={() => handleReferSubmenuClick("create")}
                  >
                    <li
                      className={`nav-item ${
                        activeReferSubmenu === "create"
                          ? "active-referSubmenu"
                          : ""
                      }`}
                    >
                      Payement Recived
                    </li>
                  </NavLink>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${studentMenuOpen || activeSubmenu ? "active" : ""
                  }`}
                onClick={toggleStudentMenu}
              >
                
                <i className="bi bi-bar-chart"></i> Purchases
                {studentMenuOpen && (
                  <i
                    className="bi bi-chevron-up"
                    style={{ marginLeft: "auto" }}
                  ></i>
                )}
                {!studentMenuOpen && (
                  <i
                    className="bi bi-chevron-down"
                    style={{ marginLeft: "auto" }}
                  ></i>
                )}
              </div>
              {studentMenuOpen && (
                <ul className="submenu">
                  <NavLink
                   
                    className="nav-link"
                    to="/vendor"
                    onClick={() => handleSubmenuClick("create")}
                  >
                    <li
                      className={`nav-item ${activeSubmenu === "create" ? "active-submenu" : ""
                        }`}
                    >
                     Vendor
                    </li>
                  </NavLink>
                  <NavLink
                   
                    className="nav-link"
                    to="/bills"
                    onClick={() => handleSubmenuClick("create")}
                  >
                    <li
                      className={`nav-item ${activeSubmenu === "create" ? "active-submenu" : ""
                        }`}
                    >
                     Bills
                    </li>
                  </NavLink>
                  <NavLink
                   
                    className="nav-link"
                    to="/paymentsMade"
                    onClick={() => handleSubmenuClick("create")}
                  >
                    <li
                      className={`nav-item ${activeSubmenu === "create" ? "active-submenu" : ""
                        }`}
                    >
                     Payments Made
                    </li>
                  </NavLink>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/chartofaccounts"
                onClick={closeDropdown}
              >
                <i className="bi bi-house"></i> Chart of Accounts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/report"
                onClick={closeDropdown}
              >
                <i className="bi bi-house"></i> Reports
              </NavLink>
            </li>

          </ul>
          <hr className="navbar-divider my-5 opacity-20" />
          <div className="mt-auto"></div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/account"
                onClick={closeDropdown}
              >
                <i className="bi bi-person-square"></i> Account
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/logout"
                onClick={closeDropdown}
              >
                <i className="bi bi-box-arrow-left"></i> Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
