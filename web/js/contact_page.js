$(document).ready(function(){function a(){windowHeight=$(window).height(),contactFormHeight=$("#contact_form_wrapper").height(),contactFormHeight+150<=windowHeight?document.getElementById("section_1").setAttribute("style","height:"+windowHeight.toString()+"px"):document.getElementById("section_1").setAttribute("style","padding-bottom: 50px")}a(),$(window).resize(function(){a()})});