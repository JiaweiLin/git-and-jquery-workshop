// console.log("main.js is loaded");
// $("img").width("200");

$(document).ready(function(){

	$("li").on("click",function(){
        if($(this).hasClass("done")){
        	$(this).removeClass("done");
        } else{
        	$(this).addClass("done");
        }
	});

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
I was here.