function addElement(type, element) {
	let $inputDialog = $("#input-form").dialog({
		autoOpen: false,
		minHeight: 100,
		width: 400,
		modal: true,
		closeOnEscape: false,
		draggable: false,
		resizable: false,
		open: function() {
			$(".ui-dialog-titlebar-close").hide();
		},
		buttons: {
			"Save": function() {
				let newName = $inputDialog.find("#name").val();
				if (newName === "") {
					$inputDialog.find("#name").addClass("required");
				} else {
					if (type === "card") {
						$.ajax({
							url: baseUrl + "/card",
							method: "POST",
							data: {
								name: newName,
								bootcamp_kanban_column_id: element.id
							},
							success: function(response) {
								element.addCard(new Card(response.id, newName));
							}
						});
					} else if (type === "column") {
						$.ajax({
							url: baseUrl + "/column",
							method: "POST",
							data: {
								name: newName
							},
							success: function(response) {
								element.addColumn(new Column(response.id, newName));
							}
						});
					}
					$inputDialog.dialog("close");
				}
			},
			Cancel: function() {
				$inputDialog.dialog("close");
			} 
		},
		close: function() {
			$inputDialog.find("#name").val("");
			$inputDialog.find("#name").removeClass("required");
		}   
	});
	setInputText(type, $inputDialog);
	$inputDialog.dialog("open");
}
// Confirm dialog
function deleteElement(type, element) {
	let $confirmDialog = $("#confirm-dialog").dialog({
		autoOpen: false,
		minHeight: 150,
		width: 400,
		modal: true,
		closeOnEscape: false,
		draggable: false,
		resizable: false,
		open: function() {
			$(".ui-dialog-titlebar-close").hide();
		},
		buttons: {
			"Yes": function() {
				if (type === "card") element.removeCard();
				else if (type === "column") element.removeColumn();
				$confirmDialog.dialog("close");
				return true;
			},
			"No": function() {
				$confirmDialog.dialog("close");
				return true;
			} 
		}
	});
	let name = element.name;
	if (type === "card") name = element.name;
	setConfirmText(type, $confirmDialog, name);
	$confirmDialog.dialog("open");
}
function setInputText(type, $dialog) {
	let title = "Enter name";
	let label = "Name";
	let placeholder = "Enter a value";
	if (type === "card" ) {
		title = "Add new card";
		label = "Card name";
		placeholder = "Enter new card name";
	} else if (type === "column") {
		title = "Add new column";
		label = "Column name";
		placeholder = "Enter new column name";
	}
	$(".ui-dialog-title").text(title);
	$dialog.find($("label")).text(label);
	$dialog.find($("#name")).attr("placeholder", placeholder);
}
function setConfirmText(type, $dialog, name) {
	$(".ui-dialog-title").text("Delete item?");
	$dialog.find("#delete-object").text(type);
	$dialog.find("#delete-name").text(name);
}