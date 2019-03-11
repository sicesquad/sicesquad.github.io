/* global $ */

var drawer;

$(document).ready(function () {
	drawer = $('.drawer');
	drawer.css('transform', 'translateX(-300px)');

	$(document).click(function (a) {
		if (!hasParentWithClass($(a.target), 'drawer') && !hasParentWithClass($(a.target), 'drawerBtn')) {
			closeDrawer(drawer);
		}
	});

	// Menu buttons
	$('.drawerBtn').click(function (a) {
		// const target = $('#' + a.currentTarget.dataset.for);
		// // target.hasClass('hidden') || target.hasClass('drawerHide') ? openDrawer(target) : closeDrawer(target);
		// $(target).css('margin-left') === '0px' ? closeDrawer(target) : openDrawer(target);
		$(drawer).removeClass('hidden');
		$(drawer).position().left > -150 ? closeDrawer() : openDrawer();
	});
});

function openDrawer () {
	// Move in the drawer
	// $(drawer).css('margin-left', '0px');
	$(drawer).css('transform', 'translateX(0px)');

	// Fade out the body (besides the drawer)
	$(document.body).css('background-color', '#424242');
	$('#body').css('opacity', '0.3');
}
function closeDrawer () {
	// Move out the drawer
	// $(drawer).css('margin-left', '-300px');
	$(drawer).css('transform', 'translateX(-300px)');

	// Fade in the body (besides the drawer)
	$(document.body).css('background-color', 'white');
	$('#body').css('opacity', '1');
}

function hasParentWithClass (element, className) {
	if (element.hasClass(className)) {
		return true;
	} else if (element.parent().length === 0) {
		return false;
	} else {
		return hasParentWithClass(element.parent(), className);
	}
}
