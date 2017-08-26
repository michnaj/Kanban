$(function() {
	let todoColumn = new Column("To do");
	let doingColumn = new Column("Doing");
	let doneColumn = new Column("Done");

	board.addColumn(todoColumn);
	board.addColumn(doingColumn);
	board.addColumn(doneColumn);

	let card1 = new Card("New task");
	let card2 = new Card("Create kanban boards");

	todoColumn.addCard(card1);
	doingColumn.addCard(card2);
});