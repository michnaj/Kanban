let board = {
	name: "Kanban Board",
	addColumn: function(column) {
		this.$element.append(column.$element);
		initSortable();
	},
	$element: $("#board")
};

$("#create-column").click(function(event) {
	event.preventDefault();
	addElement("column", board);
});