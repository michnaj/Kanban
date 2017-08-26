function Card(description) {
	let self = this;
	this.id = randomString();
	this.description = description || "New task";
	this.$element = createCard();

	function createCard() {
		let $card = $("<li>").addClass("card");
		let $cardDescription = $("<p>").addClass("card-description").text(self.description);
		let $cardEdit = $("<button>").addClass("btn-edit").html(getFontAwesome("pencil") + getSrText("edit card"));
		let $cardDelete = $("<button>").addClass("btn-delete").html(getFontAwesome("trash") + getSrText("Delete card"));

		$cardEdit.click(function(event) {
			event.preventDefault();
			alert("Edit Card: " + self.description);
		});
		$cardDelete.click(function(event) {
			event.preventDefault();
			deleteElement("card", self);
		});

		$card.append($cardEdit)
			.append($cardDelete)
			.append($cardDescription);
		return $card;
	}
}
Card.prototype = {
	removeCard: function() {
		this.$element.remove();
	}
};