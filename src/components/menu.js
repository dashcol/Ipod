import { Component } from "react";
import ipodImage from "../assests/ipod.jpg";
import tumho from "../assests/tumho.jpg";
import mainHoonNa from "../assests/main hoon na.png";
import haleDil from "../assests/muder.png";
import kalank from "../assests/kalank.png";
import games from "../assests/Games.jpg";
import gallery from "../assests/gallery.jpg";
import cover from "../assests/coverflow.jpg";
import kk from "../assests/kk.jpg";
import settings from "../assests/settings.jpg";
import Screen from "./screen";
import Button from "./button";

export default class Menu extends Component {
  constructor() {
    super();
    // state with menu lsit which holds data for rendering
    this.state = {
      menu: [
        {
          title: "Music",
          submenu: [
            {
              title: "All Songs",
              items: [
                { title: "Tum Ho", image: tumho },
                {
                  title: "Main Hoon",
                  image: mainHoonNa,
                },
                {
                  title: "Hale Dil",
                  image: haleDil,
                },
                {
                  title: "Kalank",
                  image: kalank,
                },
              ],
            },
            {
              title: "Artists",
              items: [
                {
                  title: "Arijit Singh",
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhnVw8TC5dASgNZFawfRTG11GZotevNp0mg&s",
                },
                { title: "K.K", image: kk },
                { title: "Sia", image: "https://tinyurl.com/siaimage" },
              ],
            },
          ],
        },
        { title: "Games", image: games },
        { title: "CoverFlow", image: cover },
        { title: "Settings", image: settings },
        { title: "Gallery", image: gallery },
      ],
      currentMenu: [],
      currentIndex: 0,
      isImageFullscreen: false,
      fullscreenImage: "",
      isMouseDown: false,
      startAngle: null,
      prevAngle: null,
    };
  }

  componentDidMount() {
    this.setState({ currentMenu: this.state.menu });
  }
  // <-----drag down event --->
  handleMouseDown = (e) => {
    const center = e.target.getBoundingClientRect();
    const centerX = center.left + center.width / 2;
    const centerY = center.top + center.height / 2;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);

    this.setState({
      isMouseDown: true,
      startAngle: angle,
      prevAngle: angle,
    });
  };

  handleMouseMove = (e) => {
    if (!this.state.isMouseDown) return;

    const center = e.target.getBoundingClientRect();
    const centerX = center.left + center.width / 2;
    const centerY = center.top + center.height / 2;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);

    if (this.state.prevAngle) {
      const diff = angle - this.state.prevAngle;

      if (diff > 0.1) {
        this.handleNext(); // Move clockwise
      } else if (diff < -0.1) {
        this.handleBack(); // Move counterclockwise
      }
    }

    this.setState({ prevAngle: angle });
  };

  handleMouseUp = () => {
    this.setState({
      isMouseDown: false,
      startAngle: null,
      prevAngle: null,
    });
  };

  // <---next/prev/select events for buttons--->

  handleNext = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % prevState.currentMenu.length,
    }));
  };

  handleBack = () => {
    if (this.state.isImageFullscreen) {
      this.setState({ isImageFullscreen: false, fullscreenImage: "" });
    } else {
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex - 1,
      }));
    }
  };

  handleSelect = () => {
    const selectedItem = this.state.currentMenu[this.state.currentIndex];
    if (selectedItem.submenu) {
      // Navigate to submenu
      this.setState({
        currentMenu: selectedItem.submenu,
        currentIndex: 0,
      });
    } else if (selectedItem.items) {
      // Navigate to items
      this.setState({
        currentMenu: selectedItem.items,
        currentIndex: 0,
      });
    } else if (selectedItem.image) {
      // Show fullscreen image
      this.setState({
        isImageFullscreen: true,
        fullscreenImage: selectedItem.image,
      });
    } else {
      console.log("No action for selected item");
    }
  };
  // <----menu event--->
  handleMenu = () => {
    this.setState({
      currentMenu: this.state.menu,
      isImageFullscreen: false,
      fullscreenImage: "",
    });
  };

  // <------ list item event on clciking --->
  handleItemClick = (index) => {
    const selectedItem = this.state.currentMenu[index];
    if (selectedItem.image) {
      this.setState({
        isImageFullscreen: true,
        fullscreenImage: selectedItem.image,
      });
    } else if (selectedItem.submenu) {
      this.setState({
        currentMenu: selectedItem.submenu.map((item) => ({ title: item })),
        currentIndex: 0,
      });
    }
  };

  render() {
    return (
      <>
        <div style={container.cont}>
          <Screen
            menu={this.state.currentMenu}
            selectedIndex={this.state.currentIndex}
            isImageFullscreen={this.state.isImageFullscreen}
            fullscreenImage={this.state.fullscreenImage}
            onItemClick={this.handleItemClick}
            men={this.state.menu}
          />
          <Button
            next={this.handleNext}
            prev={this.handleBack}
            select={this.handleSelect}
            men={this.handleMenu}
            onMouseDown={this.handleMouseDown}
            onMouseMove={this.handleMouseMove}
            onMouseUp={this.handleMouseUp}
          />
          <img style={container.img} src={ipodImage} alt="ipod" />
        </div>
      </>
    );
  }
}

// CSS for elements
const container = {
  cont: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    maxWidth: "100%",
    height: "auto",
  },
};
