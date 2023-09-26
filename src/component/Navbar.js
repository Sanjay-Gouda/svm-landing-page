import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

import GreenLogo from "../assets/images/l-logo.png";
import WhiteLogo from "../assets/images/d-logo.png";

import { User } from "react-feather";

export default function Navbar(props) {
  const navigate = useNavigate();
  const { navClass, topnavClass } = props;
  const [isOpen, setMenu] = useState(true);
  window.addEventListener("scroll", windowScroll);

  const toggleMenu = () => {
    setMenu(!isOpen);
    if (document.getElementById("navigation")) {
      var elements = document
        .getElementById("navigation")
        .getElementsByTagName("a");
      for (var i = 0, len = elements.length; i < len; i++) {
        elements[i].onclick = function (elem) {
          if (elem.target.getAttribute("href") !== "") {
            if (elem.target.nextElementSibling) {
              var submenu = elem.target.nextElementSibling.nextElementSibling;
              submenu.classList.toggle("open");
            }
          }
        };
      }
    }
  };
  function windowScroll() {
    const navbar = document.getElementById("topnav");
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      if (navbar !== null) {
        navbar?.classList.add("nav-sticky");
      }
    } else {
      if (navbar !== null) {
        navbar?.classList.remove("nav-sticky");
      }
    }

    const mybutton = document.getElementById("back-to-top");
    if (mybutton != null) {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        mybutton.classList.add("flex");
        mybutton.classList.remove("hidden");
      } else {
        mybutton.classList.add("hidden");
        mybutton.classList.remove("flex");
      }
    }
  }

  const getClosest = (elem, selector) => {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(
              s
            ),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  };

  useEffect(() => {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {
      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");

        var immediateParent = getClosest(matchingMenuItem, "li");

        if (immediateParent) {
          immediateParent.classList.add("active");
        }

        var parent = getClosest(immediateParent, ".child-menu-item");
        if (parent) {
          parent.classList.add("active");
        }

        var parent = getClosest(parent || immediateParent, ".parent-menu-item");

        if (parent) {
          parent.classList.add("active");

          var parentMenuitem = parent.querySelector(".menu-item");
          if (parentMenuitem) {
            parentMenuitem.classList.add("active");
          }

          var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        } else {
          var parentOfParent = getClosest(
            matchingMenuItem,
            ".parent-parent-menu-item"
          );
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        }
      }
    }

    var elements = document
      .getElementById("navigation")
      .getElementsByTagName("a");
    for (var i = 0, len = elements.length; i < len; i++) {
      elements[i].onclick = function (elem) {
        if (elem.target.getAttribute("href") === "#") {
          var submenu = elem.target.nextElementSibling.nextElementSibling;
          submenu.classList.toggle("open");
        }
      };
    }
  }, []);

  // render() {
  // const toggleClass = this.state.isOpenMenu ? 'hidden' : 'block';

  return (
    <React.Fragment>
      <nav
        id="topnav"
        className={`defaultscroll is-sticky ${topnavClass ? topnavClass : ""}`}
      >
        <div
          className={`${
            topnavClass !== "" && topnavClass !== undefined
              ? "container-fluid md:px-8 px-3"
              : "container"
          }`}
        >
          {/* <!-- Logo container--> */}
          {navClass === "" || navClass === undefined ? (
            <Link className="logo" to="/">
              {/* <div style={{ width: "160px" }}>
                <img
                  src={Svmlogo}
                  className="l-dark w-full h-full object-contain"
                  height="24"
                  alt=""
                />
              </div> */}
              {/* <img src={LogoDark} className="inline-block dark:hidden" alt="" /> */}
              {/* <img
                src={LogoLight}
                className="hidden dark:inline-block"
                alt=""
              /> */}

              <div style={{ width: "160px" }}>
                <img
                  // src={Svmlogo}
                  src={GreenLogo}
                  className="l-dark w-full h-full object-contain"
                  height="24"
                  alt=""
                />
              </div>
              <div style={{ width: "160px" }}>
                <img
                  // src={WhiteLogo}
                  src={GreenLogo}
                  className="l-light w-full h-full object-contain"
                  height="24"
                  alt=""
                />
              </div>
            </Link>
          ) : (
            <Link className="logo" to="#">
              <div style={{ width: "160px" }}>
                <img
                  // src={Svmlogo}
                  src={GreenLogo}
                  className="l-dark w-full h-full object-contain"
                  height="24"
                  alt=""
                />
                <img
                  src={WhiteLogo}
                  // src={GreenLogo}
                  className="l-light w-full h-full object-contain"
                  height="24"
                  alt=""
                />
              </div>
              {/* <span className="inline-block dark:hidden">
                <img src={Svmlogo} className="l-dark" height="24" alt="" />
                <img src={Svmlogo} className="l-light" height="24" alt="" />
              </span> */}
              {/* <img
                src={LogoLight}
                height="24"
                className="hidden dark:inline-block"
                alt=""
              /> */}
            </Link>
          )}
          {/* <!-- End Logo container--> */}

          {/* <!-- Start Mobile Toggle --> */}
          <div className="menu-extras">
            <div className="menu-item">
              <Link
                to="#"
                className="navbar-toggle"
                id="isToggle"
                onClick={toggleMenu}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>
          {/* <!-- End Mobile Toggle --> */}

          {/* <!-- Login button Start --> */}
          {/* <ul className="buy-button list-none mb-0">
            <li className="inline mb-0">
              <Link
                to="/auth-login"
                className="btn btn-icon bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full"
              >
                <User className="h-4 w-4 stroke-[3]"></User>
              </Link>
            </li>
            <li className="sm:inline ps-1 mb-0 hidden">
              <Link
                to="/auth-signup"
                className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full"
              >
                Signup
              </Link>
            </li>
          </ul> */}
          {/* <!--Login button End--> */}

          <div
            id="navigation"
            className={`${isOpen === true ? "hidden" : "block"}`}
          >
            {/* <!-- Navigation Menu--> */}
            <ul
              className={`navigation-menu  ${
                navClass === "" || navClass === undefined ? "" : "nav-light"
              }   ${
                topnavClass !== "" && topnavClass !== undefined
                  ? "justify-center"
                  : "justify-end"
              }`}
            >
              <li className="has-submenu parent-menu-item">
                <Link to="/">Home</Link>
                {/* <span className="menu-arrow"></span>
                <ul className="submenu">
                  <li>
                    <Link to="/index" className="sub-menu-item">
                      Hero One
                    </Link>
                  </li>
                  <li>
                    <Link to="/index-two" className="sub-menu-item">
                      Hero Two
                    </Link>
                  </li>
                  <li>
                    <Link to="/index-three" className="sub-menu-item">
                      Hero Three
                    </Link>
                  </li>
                  <li>
                    <Link to="/index-four" className="sub-menu-item">
                      Hero Four
                    </Link>
                  </li>
                  <li>
                    <Link to="/index-five" className="sub-menu-item">
                      Hero Five{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/index-six" className="sub-menu-item">
                      Hero Six{" "}
                      <span class="bg-yellow-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                        New
                      </span>
                    </Link>
                  </li>
                </ul> */}
              </li>

              {/* <li><NavLink to="/buy" activeclassname="active" className="sub-menu-item">Buy</NavLink></li>

                            <li><Link to="/sell" className="sub-menu-item">Sell</Link></li> */}

              {/* <li className="has-submenu parent-parent-menu-item">
                                <Link to="#">Pages</Link><span className="menu-arrow"></span>
                                <ul className="submenu">
                                    <li><Link to="/aboutus" className="sub-menu-item">About Us</Link></li>
                                    <li><Link to="/features" className="sub-menu-item">Featues</Link></li>
                                    <li><Link to="/pricing" className="sub-menu-item">Pricing</Link></li>
                                    <li><Link to="/faqs" className="sub-menu-item">Faqs</Link></li>
                                    <li className="has-submenu parent-menu-item"><Link to="#"> Auth Pages </Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link to="/auth-login" className="sub-menu-item">Login</Link></li>
                                            <li><Link to="/auth-signup" className="sub-menu-item">Signup</Link></li>
                                            <li><Link to="/auth-reset-password" className="sub-menu-item">Reset Password</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu parent-menu-item"><Link to="#"> Utility </Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link to="/terms" className="sub-menu-item">Terms of Services</Link></li>
                                            <li><Link to="/privacy" className="sub-menu-item">Privacy Policy</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu parent-menu-item"><Link to="#"> Blog </Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link to="/blogs" className="sub-menu-item"> Blogs</Link></li>
                                            <li><Link to="/blog-sidebar" className="sub-menu-item"> Blog Sidebar</Link></li>
                                            <li><Link to="/blog-detail" className="sub-menu-item"> Blog Detail</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu parent-menu-item"><Link to="#"> Special </Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link to="/comingsoon" className="sub-menu-item">Comingsoon</Link></li>
                                            <li><Link to="/maintenance" className="sub-menu-item">Maintenance</Link></li>
                                            <li><Link to="/404" className="sub-menu-item">404! Error</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li> */}

              <li>
                <Link to="/aboutus" className="sub-menu-item">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/our-services" className="sub-menu-item">
                  Our Services
                </Link>
              </li>
              <li className="has-submenu parent-parent-menu-item">
                <Link to="#">Projects</Link>
                <span className="menu-arrow"></span>
                <ul className="submenu">
                  <li className="has-submenu parent-menu-item">
                    <p
                      className="px-5 py-2 cursor-pointer hover:text-green-600"
                      style={{ padding: "10px 1.25rem" }}
                      onClick={() => navigate("/grid/:Completed")}
                    >
                      Completed
                    </p>
                    <span className="submenu-arrow"></span>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <p
                      className="px-5 py-2 cursor-pointer hover:text-green-600"
                      style={{ padding: "10px 1.25rem" }}
                      onClick={() => navigate("/grid/:Running")}
                    >
                      Running
                    </p>
                    <span className="submenu-arrow"></span>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <p
                      className="px-5 py-2 cursor-pointer hover:text-green-600"
                      style={{ padding: "8px 1.25rem" }}
                      onClick={() => navigate("/grid/:Upcoming")}
                    >
                      Upcoming
                    </p>
                    <span className="submenu-arrow"></span>
                  </li>
                  {/* <li className="has-submenu parent-menu-item">
                    <Link to="grid/:UpComing"> Upcoming </Link>
                    <span className="submenu-arrow"></span>
                  </li> */}
                </ul>
              </li>
              <li>
                <Link to="/contact" className="sub-menu-item">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar  */}
    </React.Fragment>
  );
}
