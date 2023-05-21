import React from "react";
import classes from "./SideBar.module.css";
import calender from "../../assets/google-calendar.png";
import keeps from "../../assets/keeps.png";
import task from "../../assets/google-tasks.png";
import contact from "../../assets/google-contacts.png";
import map from "../../assets/google-maps.png";

const SideBar = () => {
  return (
    <div className={classes["sidebar"]}>
      <div className={classes["app-container"]}>
        <span className={classes["user-avatar"]}>A</span>
        <div className={classes["google-apps"]}>
          <span>
            <img
              className={classes["side-bar-img"]}
              src={calender}
              alt="calender-img"
            />
          </span>
          <span>
            <img
              className={classes["side-bar-img"]}
              src={keeps}
              alt="google-keep"
            />
          </span>
          <span>
            <img
              className={classes["side-bar-img"]}
              src={task}
              alt="google-task"
            />
          </span>
          <span>
            <img
              className={classes["side-bar-img"]}
              src={contact}
              alt="google-contact"
            />
          </span>
          <span>
            <img
              className={classes["side-bar-img"]}
              src={map}
              alt="google-map"
            />
          </span>
          <span className={classes["add"]}>+</span>
        </div>
      </div>
      <div className={classes['toggle-btn']}>
        <i class="bx bx-chevron-right" style={{ color: " rgba(0,0,0,.7)" }}></i>
      </div>
    </div>
  );
};

export default SideBar;
