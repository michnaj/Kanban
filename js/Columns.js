function Column(id, name) {
	let self = this;
	this.id = id;
	this.name = name || "New column";
	this.$element = createColumn();

	function createColumn() {
		let $column = $("<div>").addClass("column");
		let $columnTitle = $("<h2>").addClass("column-title").text(self.name);
		let $columnCardList = $("<ul>").addClass("column-card-list");
		let $columnEdit = $("<button>").addClass("btn-edit").html(getFontAwesome("pencil") + getSrText("Edit column"));
		let $columnDelete = $("<button>").addClass("btn-delete").html(getFontAwesome("trash") + getSrText("Delete"));
		let $columnAddCard = $("<button>").addClass("add-card").html(getFontAwesome("plus") + getSrText("Add a card"));

		$columnEdit.click(function(event) {
			event.preventDefault();
			alert("Edit Column: " + self.name);
		});
		$columnDelete.click( function(event) {
			event.preventDefault();
			deleteElement("column", self);
		});
		$columnAddCard.click( function(event) {
			event.preventDefault();
			addElement("card", self);
		});

		$column.append($columnTitle)
			.append($columnEdit)	
			.append($columnDelete)
			.append($columnAddCard)
			.append($columnCardList);
		return $column;
	}
}
Column.prototype = {
	addCard: function(card) {
		this.$element.children("ul").append(card.$element);
	},
	removeColumn: function() {
		let self = this;
		$.ajax({
			url: baseUrl + "/column/" + self.id,
			method: "DELETE",
			success: function(response) {
				self.$element.remove();
			}
		});
	}
};