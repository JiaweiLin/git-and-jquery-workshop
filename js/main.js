// console.log("main.js is loaded");
// $("img").width("200");

$(document).ready(function(){

	$("img").on("dblclick", function(){
		// here
		$("img").width("200");
		$("h1").fadeOut();
		$(".booboo").slideUp();
		$("#rahul").hide();

	});
   // here
   // $("img").click(function(){
   // 	$("img").width("200");

   // });
});