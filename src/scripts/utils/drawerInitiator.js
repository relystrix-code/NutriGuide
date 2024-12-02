const DrawerInitiator = {
  init({ button, drawer, overlay, content }) {
    button.addEventListener("click", (event) => {
      this._toggleDrawer(event, drawer, overlay);
    });

    overlay.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer, overlay);
    });

    content.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer, overlay);
    });
  },

  _toggleDrawer(event, drawer, overlay) {
    event.stopPropagation();
    drawer.classList.toggle("open");
    overlay.classList.toggle("visible");
  },

  _closeDrawer(event, drawer, overlay) {
    event.stopPropagation();
    drawer.classList.remove("open");
    overlay.classList.remove("visible");
  },
};

export default DrawerInitiator;
