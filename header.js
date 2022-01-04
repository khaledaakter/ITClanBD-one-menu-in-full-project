if ($(window).width() < 1199) {
    var $icMobileNav = $(".ic-navbar-nav"),
      $icMobileSubMenuNav = $icMobileNav.find(".ic-dropdown-sub-menu");
    $icMobileSubMenuNav
      .parent()
      .prepend(
        '<span class="menu-expand"> <i class="flaticon-down-arrow"></i></span>'
      );
    $icMobileSubMenuNav.slideUp();
    $icMobileNav.on("click", "li a, li .menu-expand", function (e) {
      var $this = $(this);
      if (
        $this
          .parent()
          .attr("class")
          .match(
            /\b(ic-menu-item-has-children|has-children|has-ic_sub_menu)\b/
          ) &&
        ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
      ) {
        e.preventDefault();
        if ($this.siblings("ul:visible").length) {
          $this.siblings("ul").slideUp("slow");
        } else {
          $this.closest("li").siblings("li").find("ul:visible").slideUp("slow");
          $this.siblings("ul").slideDown("slow");
        }
      }
      if (
        $this.is("a") ||
        $this.is("span") ||
        $this.attr("clas").match(/\b(menu-expand)\b/)
      ) {
        $this.parent().toggleClass("menu-open");
      } else if (
        $this.is("li") &&
        $this.attr("class").match(/\b('ic-menu-item-has-children')\b/)
      ) {
        $this.toggleClass("menu-open");
      }
    });
  }