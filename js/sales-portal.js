$(function(){
	$("#btn-open-info").click(function(){
		$("#btn-open-info").fadeOut();
		$("#scriber-info").slideDown();
	});
	$("#btn-close-info").click(function(){
		$("#btn-open-info").fadeIn();
		$("#scriber-info").slideUp();
	});		
	$(".dropdown").click(function(){
		$(".dropdown .dropdown-menu").toggle();
	});

	$(".personal-info  #accepted").change(function(){
		if($("#accepted").prop("checked") == true){
			$(".personal-info  input").prop("disabled", false);
			$(".personal-info  select").prop("disabled", false);
		}
		// else{
		// 	$(".personal-info  input").prop("disabled", true);
		// 	$(".personal-info  select").prop("disabled", true);
		// }
		
	});

	if($("#accepted").prop("checked") == true){
		$(".personal-info  input").prop("disabled", false);
		$(".personal-info  select").prop("disabled", false);
	}

	$(".plan-list > .list-group-item input").change(function(){
		$(".plan-list > .list-group-item").removeClass("checked");
		$(this).parent().toggleClass("checked");
	});

	$('#iccid-number:text').on('input', function(){ 
		if($("#next").prop("disabled") == true){
			$("#next").prop("disabled", false);
		}
		 
	});

	//Modal show
	$("#device-not-permitted-modal").modal("show");
	
	// var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor); 
	// var colHeight = $(".section_desktopContent > .col-xs-8").height();
	// if(isChrome){
	//   colHeight += 3;
	// }
	
	// $(".section_desktopContent > .col-xs-4").css({'height':(colHeight+'px')});

	//Bootstrap Tour
	var tour = new Tour({
          storage : false,
          template: "<div class='popover tour'><div class='arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-checkbox'><input type='checkbox'> Don't show again.</div><div class='popover-navigation'><button class='btn btn-default' data-role='end'>Close</button><button class='btn btn-default' data-role='next'>Next</button><button class='btn btn-default' data-role='prev'>Prev</button></div></div>"
      });
   
      tour.addSteps([
        {
          element: "#btn-open-info",
          placement: "top",
          title: "Welcome to Sprint Retail Portal!",
          content: "Tap here to see costomer's plan, usage, service and the phone."
        },
        {
          element: "#nav-icon",
          placement: "bottom",
          title: "Features",
          content: "Reach all pages from the dropdown list."
        },
        
   
      ]);
   
      // Initialize the tour
      tour.init();
   
      // Start the tour
      //tour.start();
	
});