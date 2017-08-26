// Generate FontAwesome code for buttons
function getFontAwesome(icon) {
	return "<i class=\"fa fa-" + icon + "\" aria-hidden=\"true\"></i>";
}
// Generate button text only for screen readers
function getSrText(string) {
	return "<span class=\"sr-only\">" + string + "</span>";
}
// Generate random string, 10 characters long
function randomString() {
	const chars = "0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ";
	let str = "";
	for (let i = 0; i < 10; i++) {
		str += chars[Math.floor(Math.random() * chars.length)];
	}
	return str;
}
function initSortable() {
	$(".column-card-list").sortable({
		connectWith: ".column-card-list",
		placeholder: "card-placeholder"
	}).disableSelection();
}