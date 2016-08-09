// author: enarviv
jQuery(function ($) {

			$('#payWithEPayCollapsiblePanelTitle').on("click", function (e) {

				if ($("#payWithEPayCollapsiblePanelBody").hasClass('panel-collapsed')) {
					$("#payWithEPayCollapsiblePanelBody").slideDown();
					$("#payWithEPayCollapsiblePanelBody").removeClass('collapse');
					$("#payWithEPayCollapsiblePanelBody").removeClass('panel-collapsed');
					$("#payWithEPayCollapsiblePanelIcon").addClass('glyphicon-chevron-down');
					$("#payWithEPayCollapsiblePanelIcon").removeClass('glyphicon-chevron-right');
				    }
				    else {
					$("#payWithEPayCollapsiblePanelBody").slideUp();
					$("#payWithEPayCollapsiblePanelBody").addClass('collapse');
					$("#payWithEPayCollapsiblePanelBody").addClass('panel-collapsed');
					$("#payWithEPayCollapsiblePanelIcon").addClass('glyphicon-chevron-right');
					$("#payWithEPayCollapsiblePanelIcon").removeClass('glyphicon-chevron-down');
				    }


			});




			$('#paywithPINorCardCollapsiblePanelTitle').on("click", function (e) {

				if ($("#paywithPINorCardCollapsiblePanelBody").hasClass('panel-collapsed')) {
					$("#paywithPINorCardCollapsiblePanelBody").slideDown();
					$("#paywithPINorCardCollapsiblePanelBody").removeClass('collapse');
					$("#paywithPINorCardCollapsiblePanelBody").removeClass('panel-collapsed');
					$("#paywithPINorCardCollapsiblePanelIcon").addClass('glyphicon-chevron-down');
					$("#paywithPINorCardCollapsiblePanelIcon").removeClass('glyphicon-chevron-right');
				    }
				    else {
					$("#paywithPINorCardCollapsiblePanelBody").slideUp();
					$("#paywithPINorCardCollapsiblePanelBody").addClass('collapse');
					$("#paywithPINorCardCollapsiblePanelBody").addClass('panel-collapsed');
					$("#paywithPINorCardCollapsiblePanelIcon").addClass('glyphicon-chevron-right');
					$("#paywithPINorCardCollapsiblePanelIcon").removeClass('glyphicon-chevron-down');
				    }


			});



			$('#payWithRegisteredCDCollapsiblePanelTitle').on("click", function (e) {

				if ($("#payWithRegisteredCDCollapsiblePanelBody").hasClass('panel-collapsed')) {
					$("#payWithRegisteredCDCollapsiblePanelBody").slideDown();
					$("#payWithRegisteredCDCollapsiblePanelBody").removeClass('collapse');
					$("#payWithRegisteredCDCollapsiblePanelBody").removeClass('panel-collapsed');
					$("#payWithRegisteredCDCollapsiblePanelIcon").addClass('glyphicon-chevron-down');
					$("#payWithRegisteredCDCollapsiblePanelIcon").removeClass('glyphicon-chevron-right');
				    }
				    else {
					$("#payWithRegisteredCDCollapsiblePanelBody").slideUp();
					$("#payWithRegisteredCDCollapsiblePanelBody").addClass('collapse');
					$("#payWithRegisteredCDCollapsiblePanelBody").addClass('panel-collapsed');
					$("#payWithRegisteredCDCollapsiblePanelIcon").addClass('glyphicon-chevron-right');
					$("#payWithRegisteredCDCollapsiblePanelIcon").removeClass('glyphicon-chevron-down');
				    }


			});





			$('#payWithNewCreditorDebitCardCollapsiblePanelTitle').on("click", function (e) {

				if ($("#payWithNewCreditorDebitCardCollapsiblePanelBody").hasClass('panel-collapsed')) {
					$("#payWithNewCreditorDebitCardCollapsiblePanelBody").slideDown();
					$("#payWithNewCreditorDebitCardCollapsiblePanelBody").removeClass('collapse');
					$("#payWithNewCreditorDebitCardCollapsiblePanelBody").removeClass('panel-collapsed');
					$("#payWithNewCreditorDebitCardCollapsiblePanelIcon").addClass('glyphicon-chevron-down');
					$("#payWithNewCreditorDebitCardCollapsiblePanelIcon").removeClass('glyphicon-chevron-right');
				    }
				    else {
					$("#payWithNewCreditorDebitCardCollapsiblePanelBody").slideUp();
					$("#payWithNewCreditorDebitCardCollapsiblePanelBody").addClass('collapse');
					$("#payWithNewCreditorDebitCardCollapsiblePanelBody").addClass('panel-collapsed');
					$("#payWithNewCreditorDebitCardCollapsiblePanelIcon").addClass('glyphicon-chevron-right');
					$("#payWithNewCreditorDebitCardCollapsiblePanelIcon").removeClass('glyphicon-chevron-down');
				    }


			});



			$('#enrollAutoPayCollapsiblePanelTitle').on("click", function (e) {


				if ($("#enrollAutoPayCollapsiblePanelBody").hasClass('panel-collapsed')) {
					$("#enrollAutoPayCollapsiblePanelBody").slideDown();
					$("#enrollAutoPayCollapsiblePanelBody").removeClass('collapse');
					$("#enrollAutoPayCollapsiblePanelBody").removeClass('panel-collapsed');
					$("#enrollAutoPayCollapsiblePanelIcon").addClass('glyphicon-chevron-down');
					$("#enrollAutoPayCollapsiblePanelIcon").removeClass('glyphicon-chevron-right');
				    }
				    else {
					$("#enrollAutoPayCollapsiblePanelBody").slideUp();
					$("#enrollAutoPayCollapsiblePanelBody").addClass('collapse');
					$("#enrollAutoPayCollapsiblePanelBody").addClass('panel-collapsed');
					$("#enrollAutoPayCollapsiblePanelIcon").addClass('glyphicon-chevron-right');
					$("#enrollAutoPayCollapsiblePanelIcon").removeClass('glyphicon-chevron-down');
				    }


			});



			    var max_fields      = 100; 
			    var wrapper         = $(".input_fields_wrap"); 
			    var add_button      = $(".add_field_link"); 
			    
			    var x = 1; 
			    $(add_button).click(function(e){ 
				e.preventDefault();

				    x++; 
		 $(wrapper).append('<div><input type="text" class="form-control" name="pin[]" placeholder="PIN #"/><br/></div>'); 

			    });
			    
			    $(wrapper).on("click",".remove_field", function(e){ 
				e.preventDefault(); $(this).parent('div').remove(); x--;
			    });



			    });

