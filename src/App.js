import { Component } from "react";
import Menu from "./components/menu";
import NavBar from "./components/navbar";

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Menu />
      </>
    );
  }
}
