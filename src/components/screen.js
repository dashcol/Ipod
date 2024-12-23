import React, { Component } from "react";
import "../styles/screen.css";

export default class Screen extends Component {
  constructor(props) {
    super(props);
    this.listItemRefs = [];
  }

  // <---selectedindex scroll using buttons------>
  componentDidUpdate(prevProps) {
    if (prevProps.selectedIndex !== this.props.selectedIndex) {
      const currentItem = this.listItemRefs[this.props.selectedIndex];
      if (currentItem) {
        currentItem.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest",
        });
      }
    }
  }

  render() {
    const {
      menu,
      selectedIndex,
      isImageFullscreen,
      fullscreenImage,
      onItemClick,
    } = this.props;

    return (
      <>
        <div style={styles.note}>
          <p>
            <strong>NOTE</strong>:Please use ipod buttons for navigation purpose
          </p>
        </div>
        <div style={styles.screen}>
          {isImageFullscreen ? (
            <div style={styles.fullscreenContainer}>
              <img
                src={fullscreenImage}
                alt="Fullscreen"
                style={styles.fullscreenImage}
              />
            </div>
          ) : (
            <div className="custom-div" style={styles.menu}>
              <h1 style={styles.h1}>iPOD</h1>
              <ul className="custom-ul">
                {menu.map((item, index) => (
                  <li
                    key={index}
                    ref={(el) => (this.listItemRefs[index] = el)}
                    className={`custom-li ${
                      selectedIndex === index ? "selected" : ""
                    }`}
                    onClick={() => onItemClick(index)}
                  >
                    {item.title || "Unnamed Item"}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </>
    );
  }
}

// <-----Screen Styles ------>

const styles = {
  note: {
    backgroundColor: "red",
    width: "200px",
    position: "absolute",
    left: "50px",
    display: "flex",
    padding: "10px",
  },
  screen: {
    position: "absolute",
    top: "82px",
    backgroundImage: `url("https://i.pinimg.com/736x/19/f0/d3/19f0d3fa4d91e76c204bc2a417fa36ff.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
    height: "205px",
    width: "280px",
    border: "5px solid black",
    overflow: "hidden",
  },
  fullscreenContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  fullscreenImage: {
    width: "280px",
    height: "205px",
    objectFit: "cover",
  },
  menu: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    height: "205px",
    width: "140px",
    position: "absolute",
    overflowY: "auto",
  },
  h1: {
    margin: "10px 0 15px 25px",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    fontWeight: "bold",
    fontSize: "24px",
    color: "#000",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
    letterSpacing: "1px",
  },
};
