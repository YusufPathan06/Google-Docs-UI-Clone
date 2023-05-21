import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="nav">
        <div className="toolbar-opt">
          <div className="file-icon">
            <box-icon
              size="md"
              name="file"
              type="solid"
              color="#0f94f2"
            ></box-icon>
          </div>
          <div className="file-opt-container">
            <div className="doc-name">
              <span>Untitled Document</span>
              <i class="bx bx-star" style={{ color: " rgba(0,0,0,.7)" }}></i>
              <i class="bx bx-folder-open"></i>
              <i class="bx bx-cloud-upload" style={{ color: " rgba(0,0,0,.7)" }}></i>
            </div>
            <ul className="file-menu">
              <li className="file-opt">File</li>
              <li className="file-opt">Edit</li>
              <li className="file-opt">View</li>
              <li className="file-opt">Insert</li>
              <li className="file-opt">Format</li>
              <li className="file-opt">Tools</li>
              <li className="file-opt">Extension</li>
              <li className="file-opt">Help</li>
            </ul>
          </div>
        </div>
        <div className="side-navbar">
          <span className="message">
            <i class="bx bx-rotate-left" style={{ color: " rgba(0,0,0,.7)" }}></i>
          </span>
          <span className="message">
            <i
              class="bx bx-message-detail bx-flip-horizontal"
              style={{ color: " rgba(0,0,0,.7)" }}
            ></i>
          </span>
          <span>
            <i class="bx bx-video" style={{ color: " rgba(0,0,0,.7)" }}></i>
            <i class="bx bxs-down-arrow" style={{ color: " rgba(0,0,0,.7)" }}></i>
          </span>
          <span className="share-button">
            <i class="bx bx-lock"></i>
            <button>Share</button>
          </span>
        </div>
      </nav>
      <div className="nav-second">
        <div>
          <span>
            <i class="bx ico bx-undo" style={{ color: " rgba(0,0,0,.7)" }}></i>
          </span>
          <span>
            <i
              class="bx ico bx-undo bx-flip-horizontal"
              style={{ color: " rgba(0,0,0,.7)" }}
            ></i>
          </span>
          <span>
            <i
              class="bx ico bx-printer bx-flip-horizontal"
              style={{ color: " rgba(0,0,0,.7)" }}
            ></i>
          </span>
          <span className="icon">A</span>
          <span>
            <i class="bx ico bx-paint-roll" style={{ color: " rgba(0,0,0,.7)" }}></i>
          </span>
          <span className="icon">
            <span>100%</span>
          </span>
          <span className="border">|</span>
          <span className="dropdown">
            <span>Normal text</span>
            <i class="bx bxs-down-arrow" style={{ color: " rgba(0,0,0,.7)" }}></i>
          </span>
          <span className="border">|</span>
          <span className="dropdown">
            <span>Arial text</span>
            <i class="bx bxs-down-arrow" style={{ color: " rgba(0,0,0,.7)" }}></i>
          </span>
          <span className="border">|</span>
          <span className="icon">-</span>
          <span className="counter">11</span>
          <span className="icon">+</span>
          <span className="border">|</span>
          <span>
            <i class="bx ico bx-bold" style={{ color: " rgba(0,0,0,.7)" }}></i>
          </span>
          <span>
            <i class="bx ico bx-italic" style={{ color: " rgba(0,0,0,.7)" }}></i>
          </span>
          <span>
            <i class="bx ico bx-underline" style={{ color: " rgba(0,0,0,.7)" }}></i>
          </span>
          <span>
            <i class="bx ico bx-font-color" style={{ color: " rgba(0,0,0,.7)" }}></i>
          </span>
          <span>
            <i class="bx ico bx-highlight " style={{ color: " rgba(0,0,0,.7)" }}></i>
          </span>
          <span className="border">|</span>
          <span>
            <i class="bx ico bx-link-alt" style={{ color: " rgba(0,0,0,.7)" }}></i>
          </span>
          <span>
            <i class="bx ico bx-message-add" style={{ color: " rgba(0,0,0,.7)" }}></i>
          </span>
          <span>
            <i class="bx ico bx-image-alt" style={{ color: " rgba(0,0,0,.7)" }}></i>
          </span>
          <span className="border">|</span>
          <span className="dropdown">
            <i class="bx bx-align-justify" style={{ color: " rgba(0,0,0,.7)" }}></i>
            <i class="bx bxs-down-arrow" style={{ color: " rgba(0,0,0,.7)" }}></i>
          </span>
          <span>
            <i class="bx ico bx-objects-vertical-bottom" style={{ color: " rgba(0,0,0,.7)" }}></i>
          </span>
          <span>
            <i class="bx ico bx-dots-vertical-rounded" style={{ color: " rgba(0,0,0,.7)" }}></i>
          </span>
        </div>
        <div>
          <span className="editing-dropdown">
            <i class="bx ico bx-pencil " style={{ color: " rgba(0,0,0,.7)" }}></i>
            <i class="bx bxs-down-arrow" style={{ color: " rgba(0,0,0,.7)" }}></i>
          </span>
          <span className="border">|</span>
          <span>
            <i class="bx ico bx-chevron-up" style={{ color: " rgba(0,0,0,.7)" }}></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
