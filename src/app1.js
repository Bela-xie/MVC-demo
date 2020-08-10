import "./app1.css";
import $ from "jquery";
let n = localStorage.getItem("n") || 100;
$("#result").text(n);
$("#add1").on("click", () => {
  let n = parseInt($("#result").text());
  n += 1;
  localStorage.setItem("n", n);
  $("#result").text(n);
});
$("#minus1").on("click", () => {
  let n = parseInt($("#result").text());
  n -= 1;
  localStorage.setItem("n", n);
  $("#result").text(n);
});
$("#mul2").on("click", () => {
  let n = parseInt($("#result").text());
  n *= 2;
  localStorage.setItem("n", n);
  $("#result").text(n);
});
$("#divided2").on("click", () => {
  let n = parseInt($("#result").text());
  n /= 2;
  localStorage.setItem("n", n);
  $("#result").text(n);
});
