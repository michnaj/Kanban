const baseUrl = "https://kodilla.com/pl/bootcamp-api";
const myHeaders = {
	"X-Client-Id": "2044",
	"X-Auth-Token": "5e4acaf01a565b93f5a3fd5910a5ded9"
};

function setupColumns(columns) {
	columns.forEach(function(column) {
		let col = new Column(column.id, column.name);
		board.addColumn(col);
		setupCards(col, column.cards);
	});
}

function setupCards(column, cards) {
	cards.forEach(function(card) {
		column.addCard(new Card(card.id, card.name, card.bootcamp_kanban_column_id));
	});
}

$(function() {
	$.ajaxSetup({
		headers: myHeaders
	});

	$.ajax({
		url: baseUrl + "/board",
		method: "GET",
		success: function(response) {
			setupColumns(response.columns);
		}
	});
});