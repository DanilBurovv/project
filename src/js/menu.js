const menuButton = $(".menu-button");
const darkOverlay = $(".dark-overlay");
const mobileMenu = $(".mobile-menu");

$(document).on("click", ".menu-button", handleMenu);
$(document).on("click", ".is-submenu", handleToggleMenu);

function handleMenu(e) {
  e.preventDefault();
  darkOverlay.toggleClass("visible");
  mobileMenu.toggleClass("visible");

  if (mobileMenu.hasClass("visible")) {
    darkOverlay.on("click", function () {
      resetMobileMenu();
      darkOverlay.off("click");
    });
  }
}

function handleToggleMenu(e) {
  e.preventDefault();
  const $this = $(this);
  const $submenu = $this.next("ul");
  const $parent = $this.parent(".has-submenu");

  $parent.toggleClass("opened");
  $submenu.slideToggle(500, function () {
    $(this).find(".has-submenu").removeClass("opened").children("ul").hide();
  });

  $parent.siblings("li").removeClass("opened").find("ul").hide();
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
