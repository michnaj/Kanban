function Card(id, name, columnId) {
	let self = this;
	this.id = id;
	this.name = name || "New task";
	this.columnId = columnId;
	this.$element = createCard();

	function createCard() {
		let $card = $("<li>").addClass("card").attr("id", self.id);
		let $cardName = $("<p>").addClass("card-name").text(self.name);
		let $cardEdit = $("<button>").addClass("btn-edit").html(getFontAwesome("pencil") + getSrText("edit card"));
		let $cardDelete = $("<button>").addClass("btn-delete").html(getFontAwesome("trash") + getSrText("Delete card"));

		$cardEdit.click(function(event) {
			event.preventDefault();
			editElement("card", self);
		});
		$cardDelete.click(function(event) {
			event.preventDefault();
			deleteElement("card", self);
		});

		$card.append($cardEdit)
			.append($cardDelete)
			.append($cardName);
		return $card;
	}
}
Card.prototype = {
	removeCard: function() {
		let self = this;
		$.ajax({
			url: baseUrl + "/card/" + self.id,
			method: "DELETE",
			success: function() {
				self.$element.remove();
			}
		});
	}
};