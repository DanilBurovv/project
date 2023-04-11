const menuButton = $(".menu-button");
const darkOverlay = $(".dark-overlay");
const mobileMenu = $(".mobile-menu");

$(document).on("click", ".menu-button", handleMenu);
$(document).on("click", ".is-submenu", handleToggleMenu);

function handleMenu(e) {
  e.preventDefault();
  darkOverlay.toggleClass("visible");
  mobileMenu.toggleClass("visible");
}

function handleToggleMenu(e) {
  e.preventDefault();
  const $this = $(this);
  $this.parent(".has-submenu").toggleClass("opened");
  $this.next("ul").slideToggle(500, function () {
    $(this).find(".has-submenu").removeClass("opened").children("ul").hide();
  });

  $this
    .parent(".has-submenu")
    .toggleClass("opened")
    .siblings("li")
    .removeClass("opened")
    .find("ul")
    .hide();
}

function resetMobileMenu() {
  darkOverlay.removeClass("visible");
  mobileMenu.removeClass("visible");
  $(".mobile-navigation .has-submenu").removeClass("opened").find("ul").hide();
}

/* ========================  */

function initMobile() {
  console.log("is-mobile");
}

function initDesktop() {
  console.log("is-desktop");
  resetMobileMenu();
}

ssm.addState({
  id: "tablet",
  query: "(max-width: 992px)",
  onEnter: function () {
    initMobile();
  },
});

ssm.addState({
  id: "desktop",
  query: "(min-width: 992px)",
  onEnter: function () {
    initDesktop();
  },
});
