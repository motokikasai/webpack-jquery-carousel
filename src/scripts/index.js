// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/
import "bootstrap";
import "bootstrap-scss";
import "jquery";

import $ from "jquery";
window.jQuery = $;
window.$ = $;

// \/ All of your javascript should go here \/

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});
