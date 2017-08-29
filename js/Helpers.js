// Generate FontAwesome code for buttons
function getFontAwesome(icon) {
	return "<i class=\"fa fa-" + icon + "\" aria-hidden=\"true\"></i>";
}
// Generate button text only for screen readers
function getSrText(string) {
	return "<span class=\"sr-only\">" + string + "</span>";
}
// Cards sortable initialization
function initSortable() {
	let error = false;
	$(".column-card-list").sortable({
		connectWith: ".column-card-list",
		placeholder: "card-placeholder",
		stop: function(event, ui) {
			let self = this;
			let cardId = parseInt($(ui.item).attr("id"));
			let cardName = $(ui.item).find(".card-name").text();
			let columnId = parseInt($(ui.item).parent().attr("id"));
			$.ajax({
				url: baseUrl + "/card/" + cardId,
				method: "PUT",
				data: {
					name: cardName,
					bootcamp_kanban_column_id: columnId
				},
				error: function() {
					$(self).sortable("cancel");
					alert("Can't connect with server!");
				}
			});
		}
	}).disableSelection();
}
// Capitalize first letter of string
String.prototype.capitalizeFirstLetter = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
};