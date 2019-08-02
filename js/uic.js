var breakpoints = {}; //Global responsive breakpoint variable. Breakpoints are stored in PIXELS.
var settings = {
	menuSpeed: 150 //Milliseconds
};

//Document ready!
$(function(){
	getBreakpoints();  
  	doResize();//Store window width to our global variable
  	$(window).on('resize',throttle(doResize));
  	setupInvestmentTables();

});	

//Process everything that happens when the screen is resized.
function doResize(){
}

//Set up expanding and collapsing table rows.
function setupInvestmentTables(){
	$('table.investments .expand').click(function(){
		$(this).closest('tr').next().slideToggle();
		if($(this).data('isOpen'))
		{
			$(this).data('isOpen',false)
			$(this).find('i').attr('class','icon-expand-alt');
		} else {
			$(this).data('isOpen',true)
			$(this).find('i').attr('class','icon-collapse-alt');
		}
	});
}

//Get responsive breakpoint widths
//Returns a clone of the updated breakpoints object.
function getBreakpoints() {
	
	
	$('body').append('<div id="smallBreakPoint"/><div id="mediumBreakPoint"/><div id="largeBreakPoint"/>');
	breakpoints = {
		small: $('#smallBreakPoint').width(), 
		medium:$('#mediumBreakPoint').width(),
		large:$('#largeBreakPoint').width()	
	}; //Update our global variable
	//console.log(breakpoints);
	$('#smallBreakPoint, #mediumBreakPoint, #largeBreakPoint').remove();
	var newBreakpoints = jQuery.extend({}, breakpoints);
	return newBreakpoints; //Return a clone of breakpoints. This protects the global variable from unintended modification.	
}

function openMenu(e) {
	if ($('nav.menu').css('display') === 'none') {
		$('nav.menu').show();
	} else {
		$('nav.menu').hide();
	}
} 



function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last,
      deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date,
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

