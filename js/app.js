"use strict";

import Router from "./router";
import Route from './route';

(function() {
  function init() {
    var router = new Router([
      new Route("home", "home.html", true),
      new Route("about", "about.html"),
      new Route("post#1", "post.html")
    ]);
  }
  init();
})();
