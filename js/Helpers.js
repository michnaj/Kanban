// Generate FontAwesome code for buttons
function getFontAwesome(icon) {
	return "<i class=\"fa fa-" + icon + "\" aria-hidden=\"true\"></i>";
}
// Generate button text only for screen readers
function getSrText(string) {
	return "<span class=\"sr-only\">" + string + "</span>";
}
function initSortable() {
	$(".column-card-list").sortable({
		connectWith: ".column-card-list",
		placeholder: "card-placeholder"
	}).disableSelection();
}