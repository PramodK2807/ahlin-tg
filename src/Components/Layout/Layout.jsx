import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

const Layout = ({ children, activeSlide }) => {
  const [slide, setSlide] = useState("");

  const navigate = useNavigate();
  const userData = secureLocalStorage.getItem("userAccessData");
  console.log(userData);

  useEffect(() => {
    setSlide(activeSlide);
  }, [activeSlide]);

  const handleLogout = () => {
    document.getElementById("closeLogout").click();
    navigate("/login");
  };

  return (
    <div id="main-wrapper" className="show">
      <div className="nav-header">
        <Link to="/Dashboard" className="brand-logo">
          Tourist Booking
        </Link>
        <div className="nav-control">
          <div className="hamburger">
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </div>
        </div>
      </div>
      <div className="header">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav header-right">
                <li className="nav-item ps-3">
                  <div className="dropdown header-profile2">
                    <Link
                      className="nav-link"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div className="header-info2 d-flex align-items-center">
                        <div className="header-media">
                          <img
                            src={userData?.userData?.image || "images/1.jpg"}
                            alt="i"
                          />
                        </div>
                        <div className="header-info">
                          <h6>{userData?.userData?.fullName}</h6>
                          <p>{userData?.userData?.email}</p>
                        </div>
                      </div>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end" style={{}}>
                      <div className="card border-0 mb-0">
                        <div className="card-header py-2">
                          <div className="products">
                            <img
                              src={userData?.userData?.image || "images/1.jpg"}
                              className="avatar avatar-md"
                              alt="i"
                            />
                            <div>
                              <h6>{userData?.userData?.fullName}</h6>
                            </div>
                          </div>
                        </div>
                        <div className="card-body px-0 py-2">
                          <Link
                            to="/Admin/Profile"
                            className="dropdown-item ai-icon "
                          >
                            <i className="fas fa-user" />
                            <span className="ms-2">Profile </span>
                          </Link>
                          <Link
                            to="/Admin/Change-Password"
                            className="dropdown-item ai-icon "
                          >
                            <i className="fas fa-refresh" />
                            <span className="ms-2">Change Password </span>
                          </Link>
                          <Link className="dropdown-item ai-icon ">
                            <i className="fas fa-sign-out-alt" />
                            <span className="ms-2">Logout </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="deznav">
        <div className="deznav-scroll">
          <ul className="metismenu" id="menu">
            <li
              onClick={() => setSlide("Dashboard")}
              className={slide === "Dashboard" ? "mm-active" : ""}
            >
              <Link to="/Dashboard" aria-expanded="false">
                <div className="menu-icon">
                  <i className="fas fa-home" />
                </div>
                <span className="nav-text">Dashboard</span>
              </Link>
            </li>
            <li
              onClick={() => setSlide("Guest")}
              className={slide === "Guest" ? "mm-active" : ""}
            >
              <Link to="/Guest-Management" aria-expanded="false">
                <div className="menu-icon">
                  <i className="fa-solid fa-people-pulling" />
                </div>
                <span className="nav-text">User/Guide Management</span>
              </Link>
            </li>
            <li
              onClick={() => setSlide("Booking")}
              className={slide === "Booking" ? "mm-active" : ""}
            >
              <Link to="/Booking-Management" aria-expanded="false">
                <div className="menu-icon">
                  <i className="fa-solid fa-bookmark" />
                </div>
                <span className="nav-text">Booking Management</span>
              </Link>
            </li>
            <li
              onClick={() => setSlide("Activities")}
              className={slide === "Activities" ? "mm-active" : ""}
            >
              <Link to="/Activity-Management" aria-expanded="false">
                <div className="menu-icon">
                  <i className="fa-solid fa-list-check" />
                </div>
                <span className="nav-text">Activities Management</span>
              </Link>
            </li>
            <li
              onClick={() => setSlide("Package")}
              className={slide === "Package" ? "mm-active" : ""}
            >
              <Link to="/Package-Management" aria-expanded="false">
                <div className="menu-icon">
                  <i className="fa-brands fa-usps" />
                </div>
                <span className="nav-text">Package Management</span>
              </Link>
            </li>
            <li
              onClick={() => setSlide("Subscription")}
              className={slide === "Subscription" ? "mm-active" : ""}
            >
              <Link to="/Subscription-Management" aria-expanded="false">
                <div className="menu-icon">
                  <i loading='lazy' className="fa-solid fa-bacon" />
                </div>
                <span className="nav-text">Subscription Plan Management</span>
              </Link>
            </li>
            <li
              onClick={() => setSlide("Payout")}
              className={slide === "Payout" ? "mm-active" : ""}
            >
              <Link to="/Payout-Management" aria-expanded="false">
                <div className="menu-icon">
                  <i className="fa-regular fa-credit-card" />
                </div>
                <span className="nav-text">Payout Guide Management</span>
              </Link>
            </li>
            <li
              onClick={() => setSlide("Transaction")}
              className={slide === "Transaction" ? "mm-active" : ""}
            >
              <Link to="/Transaction-Management" aria-expanded="false">
                <div className="menu-icon">
                  <i className="fa-solid fa-tent-arrow-left-right" />
                </div>
                <span className="nav-text">Transaction Management</span>
              </Link>
            </li>
            <li
              onClick={() => setSlide("Help")}
              className={slide === "Help" ? "mm-active" : ""}
            >
              <Link to="/Help-Support-Management" aria-expanded="false">
                <div className="menu-icon">
                  <i className="fas fa-headset" />
                </div>
                <span className="nav-text">Help &amp; Support Management</span>
              </Link>
            </li>
            <li
              onClick={() => setSlide("Content")}
              className={slide === "Content" ? "mm-active" : ""}
            >
              <Link to="/Content-Management" aria-expanded="false">
                <div className="menu-icon">
                  <i className="fas fa-edit" />
                </div>
                <span className="nav-text">Content Management</span>
              </Link>
            </li>
            <li>
              <Link aria-expanded="false">
                <div className="menu-icon">
                  <i className="fas fa-sign-out-alt" />
                </div>
                <span className="nav-text">
                  <button
                    type="button"
                    className="border-0 bg-white"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Logout
                  </button>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-3" id="staticBackdropLabel">
                Logging Out
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="closeLogout"
              />
            </div>
            <div className="modal-body">
              <p>Are you sure you want to log out ?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={handleLogout}
                className="btn btn-primary"
              >
                Yes
              </button>
              <button type="button" className="btn btn-secondary">
                No
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
