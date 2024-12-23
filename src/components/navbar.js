import { Component } from "react";

export default class NavBar extends Component {
  componentDidMount() {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
  }
  render() {
    return (
      <>
        <nav style={styles.nav}>
          <h1 style={styles.h1}>Ipod</h1>
          <span style={styles.settingsIcon}>⚙️</span>
        </nav>
      </>
    );
  }
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 20px",
  },
  h1: {
    margin: 0,
    fontSize: "24px",
  },
  settingsIcon: {
    fontSize: "20px",
    cursor: "pointer",
  },
};
