// ***dropdown filter jquery starts here***

$(function() {
	/* Any room Dropdown*/ 

	var selectBox = $("#mainnavigation, #mainnavigationMob").selectBoxIt({
		downArrowIcon: "arrowClassHere"
	});
	$("#mainnavigation").on("change", function(){
		$(".headerDropdown .selectboxit-text").css("color","#fff");
	});
	$('#mainnavigationSelectBoxItDefaultIcon').click(function(event){
		event.stopPropagation();
		$('#mainnavigationSelectBoxItDefaultIcon').hide();
		$('#mainnavigation').val('0');
		$('#mainnavigation').change();
		$("#mainnavigation").data("selectBox-selectBoxIt").close();
	});

	$('#mainnavigation').on('change' ,function(){
		if($('#mainnavigation').val() === "0"){

			$('#mainnavigationSelectBoxIt').css("background-color", "#ffffff");
			$(".headerDropdown .selectboxit-text").css("color","#8d5e5e");
			$('.headerDropdown .arrowClassHere').css("background","url(../../../../../assets/images/arrow-down-gray.svg)");

		}else{if ($('#mainnavigation').val() != "0"){
			$('#mainnavigationSelectBoxIt').css("background-color", "#ba9e97");
			$('.headerDropdown .arrowClassHere').css("background","url(../../../../../assets/images/icon-white-arrow-down.svg)");
		}
	}
	});
	$('#mainnavigation').on('open' ,function(){
		if($('#mainnavigation').val() === "0") {
			$('#mainnavigationSelectBoxIt').css("background-color", "#ffffff");
			$(".headerDropdown .selectboxit-text").css("color","#8d5e5e");
		}
	});
	
	$('#mainnavigation').on('open', function(){
		$('.close-icon1').css("visibility","visible");
	});
	$('#mainnavigation').on('close', function(){
		$('.close-icon1').css("visibility","hidden");
	});

/* guest Dropdown */

	var selectBox1 = $("#mainnavigation1, #mainnavigation1Mob").selectBoxIt({
		downArrowIcon: "arrowClassHere"
	});
	$("#mainnavigation1").on("change", function(){
		$(".headerDropdown1 .selectboxit-text").css("color","#fff");
	});
	$('#mainnavigation1SelectBoxItDefaultIcon').click(function(event){
		event.stopPropagation();
		$('#mainnavigation1SelectBoxItDefaultIcon').hide();
		$('#mainnavigation1').val('0');
		$('#mainnavigation1').change();
		$("#mainnavigation").data("selectBox-selectBoxIt").close();	
	});
	$('#mainnavigation1').on('change' ,function(){
		if($('#mainnavigation1').val() === "0"){

			$('#mainnavigation1SelectBoxIt').css("background-color", "#ffffff");
			$(".headerDropdown1 .selectboxit-text").css("color","#8d5e5e");
			$('.headerDropdown1 .arrowClassHere').css("background","url(../../../../../assets/images/arrow-down-gray.svg)");

		}else{if ($('mainnavigation1').val() != "0"){
			$('#mainnavigation1SelectBoxIt').css("background-color", "#ba9e97");
			$('.headerDropdown1 .arrowClassHere').css("background","url(../../../../../assets/images/icon-white-arrow-down.svg)");
		}
	}
	});
	$('#mainnavigation1').on('open' ,function(){
		if($('#mainnavigation1').val() === "0") {
			$('#mainnavigation1SelectBoxIt').css("background-color", "#ffffff");
			$(".headerDropdown1 .selectboxit-text").css("color","#8d5e5e");
		}
	});
	$('#mainnavigation1').on('open', function(){
		$('.close-icon6').css("visibility","visible");
	});
	$('#mainnavigation1').on('close', function(){
		$('.close-icon6').css("visibility","hidden");
	});

/*Length of stay per night dropdown */

	var selectBox2 = $("#mainnavigation2, #mainnavigation2Mob").selectBoxIt({
		downArrowIcon: "arrowClassHere"
	});
	$("#mainnavigation2").on("change", function(){
		$(".headerDropdown2 .selectboxit-text").css("color","#fff");
	});
	$('#mainnavigation2SelectBoxItDefaultIcon').click(function(event){
		event.stopPropagation();
		$('#mainnavigation2SelectBoxItDefaultIcon').hide();
		$('#mainnavigation2').val('0');
		$('#mainnavigation2').change();
		$("#mainnavigation").data("selectBox-selectBoxIt").close();	
	});
	$('#mainnavigation2').on('change' ,function(){
		if($('#mainnavigation2').val() === "0"){

			$('#mainnavigation2SelectBoxIt').css("background-color", "#ffffff");
			$(".headerDropdown2  .selectboxit-text").css("color","#8d5e5e");
			$('.headerDropdown2 .arrowClassHere').css("background","url(../../../../../assets/images/arrow-down-gray.svg)");

		}else{if ($('mainnavigation2').val() != "0"){
			$('#mainnavigation2SelectBoxIt').css("background-color", "#ba9e97");
			$('.headerDropdown2 .arrowClassHere').css("background","url(../../../../../assets/images/icon-white-arrow-down.svg)");
		}
	}
	});
	$('#mainnavigation2').on('open' ,function(){
		if($('#mainnavigation2').val() === "0") {
			$('#mainnavigation2SelectBoxIt').css("background-color", "#ffffff");
			$(".headerDropdown2  .selectboxit-text").css("color","#8d5e5e");
		}
	});
	$('#mainnavigation2').on('open', function(){
		$('.close-icon2').css("visibility","visible");
	});
	$('#mainnavigation2').on('close', function(){
		$('.close-icon2').css("visibility","hidden");
	});

/* All Inclusions Dropdown */

	var selectBox3 = $("#mainnavigation3,#mainnavigation3Mob").selectBoxIt({
		downArrowIcon: "arrowClassHere"
	});
	$("#mainnavigation3").on("change", function(){
		$(".headerDropdown3 .selectboxit-text").css("color","#fff");
	});
	$('#mainnavigation3SelectBoxItDefaultIcon').click(function(event){
		event.stopPropagation();
		$('#mainnavigation3SelectBoxItDefaultIcon').hide();
		$('#mainnavigation3').val('0');
		$('#mainnavigation3').change();
		$("#mainnavigation").data("selectBox-selectBoxIt").close();
	});
	$('#mainnavigation3').on('change' ,function(){
		if($('#mainnavigation3').val() === "0"){

			$('#mainnavigation3SelectBoxIt').css("background-color", "#ffffff");
			$(".headerDropdown3 .selectboxit-text").css("color","#8d5e5e");
			$('.headerDropdown3 .arrowClassHere').css("background","url(../../../../../assets/images/arrow-down-gray.svg)");

		}else{if ($('mainnavigation3').val() != "0"){
			$('#mainnavigation3SelectBoxIt').css("background-color", "#ba9e97");
			$('.headerDropdown3 .arrowClassHere').css("background","url(../../../../../assets/images/icon-white-arrow-down.svg)");
		}
	}
	});
	$('#mainnavigation3').on('open' ,function(){
		if($('#mainnavigation3').val() === "0") {
			$('#mainnavigation3SelectBoxIt').css("background-color", "#ffffff");
			$(".headerDropdown3 .selectboxit-text").css("color","#8d5e5e");
		}	
	});
	$('#mainnavigation3').on('open', function(){
		$('.close-icon4').css("visibility","visible");
	});
	$('#mainnavigation3').on('close', function(){
		$('.close-icon4').css("visibility","hidden");
	});

	/**Dropdown for booking.com */
	var selectBox5 = $("#mainnavigation5, #mainnavigation5Mob").selectBoxIt({
		downArrowIcon: "arrowClassHere"
	});
	$("#mainnavigation5").on("change", function(){
		$(".headerDropdown5 .selectboxit-text").css("color","#fff");
	});
	$('#mainnavigation5SelectBoxItDefaultIcon').click(function(event){
		event.stopPropagation();
		$('#mainnavigation5SelectBoxItDefaultIcon').hide();
		$('#mainnavigation5').val('0');
		$('#mainnavigation5').change();
		$("#mainnavigation5").data("selectBox-selectBoxIt").close();
	});
	$('#mainnavigation5').on('change' ,function(){
		if($('#mainnavigation5').val() === "0"){

			$('#mainnavigation5SelectBoxIt').css("background-color", "#ffffff");
			$(".headerDropdown5 .selectboxit-text").css("color","#8d5e5e");
			$('.headerDropdown5 .arrowClassHere').css("background","url(../../../../../assets/images/arrow-down-gray.svg)");

		}else{if ($('mainnavigation5').val() != "0"){
			$('#mainnavigation5SelectBoxIt').css("background-color", "#ba9e97");
			$('.headerDropdown5 .arrowClassHere').css("background","url(../../../../../assets/images/icon-white-arrow-down.svg)");
			}
		}
	});
	$('#mainnavigation5').on('open' ,function(){
		if($('#mainnavigation5').val() === "0") {
			$('#mainnavigation5SelectBoxIt').css("background-color", "#ffffff");
			$(".headerDropdown5 .selectboxit-text").css("color","#8d5e5e");
		}	
	});
	$('#mainnavigation5').on('open', function(){
		$('.close-icon5').css("visibility","visible");
	});
	$('#mainnavigation5').on('close', function(){
		$('.close-icon5').css("visibility","hidden");
	});
/** Main Dropdown Near Optima Logo */
	var selectBox6 = $("#mainnavigation6").selectBoxIt({
		downArrowIcon: "mainArrowClassHere"
	});
	$("#mainnavigation6").on("change", function(){
		$(".mainDropdown .selectboxit-text").css("color","#503535");
	});
	$('#mainnavigation6').on('change' ,function(){
		if($('#mainnavigation6').val() === "0"){

			$('#mainnavigation6SelectBoxIt').css("background", "transparent");
			$(".mainDropdown .selectboxit-text").css("color","#503535");

		}else{if ($('mainnavigation6').val() != "0"){
			$('#mainnavigation6SelectBoxIt').css("background", "transparent");
		}
	}
	});
	$('#mainnavigation6').on('open' ,function(){
		if($('#mainnavigation6').val() === "0") {
			$('#mainnavigation6SelectBoxIt').css("background", "transparent");
			$(".mainDropdown .selectboxit-text").css("color","none");
		}
	});

	/**Rotate Arrow Jquery */
$("#mainnavigation, #mainnavigation1, #mainnavigation2, #mainnavigation3, #mainnavigation5, #mainnavigation7").on('open', function() {
	$(this).parent().find(".arrowClassHere").addClass("rotateCaret");
});
$('#mainnavigation, #mainnavigation1, #mainnavigation2, #mainnavigation3, #mainnavigation5, #mainnavigation7').on('close', function() {
	$(this).parent().find('.arrowClassHere').removeClass('rotateCaret');
});

$('#mainnavigation6').on('open',function() {
	$(this).parent().find('.mainArrowClassHere').addClass('rotateCaret');
});
$('#mainnavigation6').on('close',function() {
	$(this).parent().find('.mainArrowClassHere').removeClass('rotateCaret');
});
$("#mainnavigation5, #mainnavigation3, #mainnavigation2, #mainnavigation1, #mainnavigation, #mainnavigation6").click(function() {
	$('.moreDownArrow').removeClass('rotateCaret');
});

var chanOpen = false
$('.headerDropdown5').click(function(){
	if(chanOpen === false) {
		$('.channelContainer').show();
		chanOpen = true;
	}else if(chanOpen === true) {
		$('.channelContainer').hide();
		chanOpen = false;
	}
	$('.channelDownArrow').toggleClass('rotateCaret');
});

$('.moreCrossIcon').click(function() {

	if(chanOpen === true) {
		$('.channelContainer').hide();
		chanOpen = false;
	}else {
		chanOpen = true;
	}
	$('.channelDownArrow').removeClass('rotateCaret');
});
$(document).on('click', function (e) {
    if ($(e.target).closest(".headerDropdown5").length === 0) {
		if(chanOpen === true) {
			$('.channelContainer').hide();
			chanOpen = false;
		}
		$('.channelDownArrow').removeClass('rotateCaret');
    }
});

var incOpen = false
$('.headerDropdown3').click(function(){
	if(incOpen === false) {
		$('.inclusionsContainer').show();
		incOpen = true;
	}else if(incOpen === true) {
		$('.inclusionsContainer').hide();
		incOpen = false;
	}
	$('.inclusionsDownArrow').toggleClass('rotateCaret');
});
$('.moreCrossIcon').click(function() {

	if(incOpen === true) {
		$('.inclusionsContainer').hide();
		incOpen = false;
	}else {
		incOpen = true;
	}
	$('.inclusionsDownArrow').removeClass('rotateCaret');
});
$(document).on('click', function (e) {
    if ($(e.target).closest(".headerDropdown3").length === 0) {
		if(incOpen === true) {
			$('.inclusionsContainer').hide();
			incOpen = false;
		}
		$('.inclusionsDownArrow').removeClass('rotateCaret');
    }
});
/**More filter checked/uncheked count*/

var checks = 0;
$('.Lowest1, .unrestrict, .unqualify, .unpromo').on('click', function(){
	checks++
	document.getElementById("checkCount").innerHTML = checks;

})
$('.bar1').on('click', function(){
	checks--
	document.getElementById("checkCount").innerHTML = checks;

})
$(".moreContainer input:checkbox").change(function() {
   var ischecked= $(this).is(':checked');
   if(ischecked)
   	 checks++
   if(!ischecked)
     checks--
	// $(".counter").text(checks);
	document.getElementById("checkCount").innerHTML = checks;
	if(checks === 0){
		$('#checkCount').hide();
		$('.moreCancelFilterIcon').hide();
		$('.headerDropdown4').css('background-color','#fff');
		$('.headerDropdown4 .moreFlexCon').css('color','#8d5e5e');
		$('.headerDropdown4 .moreText').css('color','#8d5e5e');
		$('.moreFlexSubCon2 .moreDownArrow').attr('src', '../../../assets/images/arrow-down-gray.svg');

	}else{if(checks != 0){
		$('#checkCount').show();
		$('.moreCancelFilterIcon').show();
		$('.headerDropdown4').css('background-color','#ba9e97');
		$('.headerDropdown4 .moreFlexCon').css('color','#fff');
		$('.headerDropdown4 .moreText').css('color','#fff');
		$('.moreFlexSubCon2 .moreDownArrow').attr('src', '../../../assets/images/icon-white-arrow-down.svg')
	}}
	$('.moreCancelFilterIcon').on('click',function(event){
		event.stopPropagation();
		$('.moreCancelFilterIcon').hide();
		$('.headerDropdown4').css('background-color','#fff');
		$('.headerDropdown4 .moreFlexCon').css('color','#8d5e5e');
		$('#checkCount').hide();
		$('.headerDropdown4 .moreText').css('color','#8d5e5e');
		$('.moreFlexSubCon2 .moreDownArrow').attr('src', '../../../assets/images/arrow-down-gray.svg');
		$('input[type=checkbox]').each(function() { 
		this.checked = false;
		checks = 0
		});
	});
	/**Click on Reset All Button */
	$('.resetAllButton').on('click',function(){
		$('.moreCancelFilterIcon').hide();
		$('.headerDropdown4').css('background-color','#fff');
		$('.headerDropdown4 .moreFlexCon').css('color','#8d5e5e');
		$('#checkCount').hide();
		$('.headerDropdown4 .moreText').css('color','#8d5e5e');
		$('.moreFlexSubCon2 .moreDownArrow').attr('src', '../../../assets/images/arrow-down-gray.svg');
		$('input[type=checkbox]').each(function() { 
		this.checked = false;
		checks = 0
		});
		$('.moreContentFlex1 .text-block-more .bar1').addClass('more-active');
		$('.moreContentFlex1 .text-block-more .Lowest1').removeClass('more-active');
		$('.moreContentFlex1 .text-block-more .unrestrict').removeClass('more-active');
		$('.moreContentFlex1 .text-block-more .unqualify').removeClass('more-active');
		$('.moreContentFlex1 .text-block-more .unpromo').removeClass('more-active');
	});
});
/**Check/Uncheck all Checkboxes */
$('#CheckAll').change(function () {
	if($(this).is(":checked")){
		$('.moreContentFlex2 .checkBoxesActive').prop("checked", true);
		checks = $(" headerDropdown4 .moreContainer input:checkbox").length;
		document.getElementById("checkCount").innerHTML = checks;

	}else{if($('.moreContentFlex2 .checkBoxesActive').prop("checked", false)){
		checks = 0;
		document.getElementById("checkCount").innerHTML = checks;
		$('#checkCount').hide();
		$('.moreCancelFilterIcon').hide();
		$('.headerDropdown4').css('background-color','#fff');
		$('.headerDropdown4 .moreFlexCon').css('color','#8d5e5e');
		$('.moreFlexSubCon2 .moreDownArrow').attr('src', '../../../assets/images/arrow-down-gray.svg');
		$('.headerDropdown4 .moreText').css('color','#8d5e5e');
	}
	}	
});

/**More Filter Popup Jquery*/ 
var isOpen = false;
$('.headerDropdown4').click(function(){
	if(isOpen === false) {
		$('.moreContainer').show();
		
		isOpen = true;
	}else if(isOpen === true) {
		$('.moreContainer').hide();
		isOpen = false;
	}
	$('.moreDownArrow').toggleClass('rotateCaret');
});

$('.moreContainer').click(function(event){
	event.stopPropagation();
});
/**Click on Close Icon/Submit Button in more popup */
	$('.moreCrossIcon, .submitButton').click(function() {

		if(isOpen === true) {
			$('.moreContainer').hide();
			isOpen = false;
		}else {
			isOpen = true;
		}
		$('.moreDownArrow').removeClass('rotateCaret');
	});
/**Clicking outside of the more PopUp */
$(document).on('click', function (e) {
    if ($(e.target).closest(".headerDropdown4").length === 0) {
		if(isOpen === true) {
			$('.moreContainer').hide();
			isOpen = false;
		}
		$('.moreDownArrow').removeClass('rotateCaret');
    }
});
var headerDropdown3Checks = 0;
$(".headerDropdown3 .checkBoxesActive").click(function(){
	if (this.checked === true) {
		headerDropdown3Checks++;
		$(".headerDropdown3 .inclusionsCancelFilterIcon").show();
		$(".headerDropdown3 .inclusionsCancelFilterIcon").css("src", "../../../../../assets/images/icon-white-arrow-down.svg");
		$(".headerDropdown3 .inclusionsText").text($(this).siblings(".checkboxOption").text());
		$(".headerDropdown3 .inclusionsText").css("color", "#fff");
		if (headerDropdown3Checks > 1) {
			$(".headerDropdown3 .inclusionsText").append("<span class='headerDropdown3CheckCount'> + " + headerDropdown3Checks + "</span>");
		} else {
			$(".headerDropdown3CheckCount").remove();
		}
		$(".headerDropdown3 .inclusionsFlexCon").css("background-color", "rgb(186, 158, 151)");
	} else {
		headerDropdown3Checks--
		if (headerDropdown3Checks > 1) {
			$(".headerDropdown3CheckCount").remove();
			$(".headerDropdown3 .inclusionsText").append("<span class='headerDropdown3CheckCount'> + " + headerDropdown3Checks  + "</span>");
		} else {
			$(".headerDropdown3CheckCount").remove();
		}
	}

	if(headerDropdown3Checks === 0){
		headerDropdown3Checks = 0
		$(".headerDropdown3 .inclusionsCancelFilterIcon").hide();
		$(".headerDropdown3 .inclusionsCancelFilterIcon").css("src", "../../../assets/images/arrow-down-gray.svg");
		$(".headerDropdown3 .inclusionsText").text("All");
		$(".headerDropdown3 .inclusionsText").attr("style","");
		$(".headerDropdown3 .inclusionsFlexCon").attr("style","");
	}
});

$(".headerDropdown3 .inclusionsCancelFilterIcon").click(function(e){
	e.stopPropagation();
	headerDropdown3Checks = 0
	$(".headerDropdown3 .checkBoxesActive").each(function(){
		this.checked = false;
	});
	$(".headerDropdown3 .inclusionsCancelFilterIcon").hide();
	$(".headerDropdown3 .inclusionsCancelFilterIcon").css("src", "../../../assets/images/arrow-down-gray.svg");
	$(".headerDropdown3 .inclusionsText").text("All");
	$(".headerDropdown3 .inclusionsText").attr("style","");
	$(".headerDropdown3 .inclusionsFlexCon").attr("style","");
});

var headerDropdown5Checks = 0;
$(".headerDropdown5 .checkBoxesActive").click(function(){
	if (this.checked === true) {
		headerDropdown5Checks++;
		$(".headerDropdown5 .channelCancelFilterIcon").show();
		$(".headerDropdown5 .channelCancelFilterIcon").css("src", "../../../../../assets/images/icon-white-arrow-down.svg");
		$(".headerDropdown5 .channelText").text($(this).siblings(".checkboxOption").text());
		$(".headerDropdown5 .channelText").css("color", "#fff");
		if (headerDropdown5Checks > 1) {
			$(".headerDropdown5 .channelText").append("<span class='headerDropdown5CheckCount'> + " + headerDropdown5Checks + "</span>");
		} else {
			$(".headerDropdown5CheckCount").remove();
		}
		$(".headerDropdown5 .channelFlexCon").css("background-color", "rgb(186, 158, 151)");
	} else {
		headerDropdown5Checks--
		if (headerDropdown5Checks > 1) {
			$(".headerDropdown5CheckCount").remove();
			$(".headerDropdown5 .channelText").append("<span class='headerDropdown5CheckCount'> + " + headerDropdown5Checks + "</span>");
		} else {
			$(".headerDropdown5CheckCount").remove();
		}
	}

	if (headerDropdown5Checks === 0) {
		$(".headerDropdown5 .channelCancelFilterIcon").hide();
		$(".headerDropdown5 .channelCancelFilterIcon").css("src", "../../../assets/images/arrow-down-gray.svg");
		$(".headerDropdown5 .channelText").text("All");
		$(".headerDropdown5 .channelText").attr("style","");
		$(".headerDropdown5 .channelFlexCon").attr("style","");
	}
});

$(".headerDropdown5 .channelCancelFilterIcon").click(function(e){
	e.stopPropagation();
	headerDropdown5Checks = 0;
	$(".headerDropdown5 .checkBoxesActive").each(function(){
		this.checked = false;
	});
	$(".headerDropdown5 .channelCancelFilterIcon").hide();
	$(".headerDropdown5 .channelCancelFilterIcon").css("src", "../../../assets/images/arrow-down-gray.svg");
	$(".headerDropdown5 .channelText").text("All");
	$(".headerDropdown5 .channelText").attr("style","");
	$(".headerDropdown5 .channelFlexCon").attr("style","");
});
//-----------------------------------

$('.text-block-more a').on('click', function(){
	$(this).addClass('more-active').siblings().removeClass('more-active');
});
$('.text-block-more').click(function(event) {
	event.stopPropagation();
})
/**header right part slider */
$('.dates-block .normal').on('click', function() {
	$(this).hide();
	$(this).siblings('.active').show();
	$(this).parent('.dates-block').siblings('.dates-block').children('.active').css("display", "none");
	$(this).parent('.dates-block').siblings('.dates-block').children('.normal').css("display", "block");
});

$('.calendar-close').on('click', function() {
	$('.moreContainer').hide();
	var dateContainer = $('#mrOptimaDashMonthPicker').MonthPicker();
	dateContainer.MonthPicker('Close');
});
$('#mrOptimaDashMonthPicker').on('click', function() {
	$('.headerDropdownFlex').find('.show').removeClass('show');
});

});

$(".property-dropdown li a").click(function(){
	$(".property .btn").text($(this).text());
});