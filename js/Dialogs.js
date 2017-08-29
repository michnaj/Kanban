function addElement(type, element) {
	let $addDialog = $("#add-form").dialog({
		autoOpen: false,
		minHeight: 100,
		width: 300,
		modal: true,
		closeOnEscape: false,
		draggable: false,
		resizable: false,
		open: function() {
			$(".ui-dialog-titlebar-close").hide();
		},
		buttons: {
			"Save": function() {
				let newName = $addDialog.find("#name").val();
				if (newName === "") {
					$addDialog.find("#name").addClass("required");
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
					$addDialog.dialog("close");
				}
			},
			Cancel: function() {
				$addDialog.dialog("close");
			} 
		},
		close: function() {
			$addDialog.find("#name").val("");
			$addDialog.find("#name").removeClass("required");
		}   
	});
	setAddText(type, $addDialog);
	$addDialog.dialog("open");
}
function editElement(type, element) {
	let $editDialog = $("#edit-form").dialog({
		autoOpen: false,
		minHeight: 100,
		width: 300,
		modal: true,
		closeOnEscape: false,
		draggable: false,
		resizable: false,
		open: function() {
			$(".ui-dialog-titlebar-close").hide();
		},
		buttons: {
			"Save": function() {
				let newName = $editDialog.find("#edit-name").val();
				if (newName === "") {
					$editDialog.find("#edit-name").addClass("required");
				} else {
					if (type === "card") {
						$.ajax({
							url: baseUrl + "/card/" + element.id,
							method: "PUT",
							data: {
								name: newName,
								bootcamp_kanban_column_id: element.columnId
							},
							success: function() {
								element.name = newName;
								element.$element.find(".card-name").text(newName);
							}
						});
					} else if (type === "column") {
						$.ajax({
							url: baseUrl + "/column/" + element.id,
							method: "PUT",
							data: {
								name: newName
							},
							success: function() {
								element.name = newName;
								element.$element.find(".column-title").text(newName);
							}
						});
					}
					$editDialog.dialog("close");
				}
			},
			Cancel: function() {
				$editDialog.dialog("close");
			} 
		},
		close: function() {
			$editDialog.find("#edit-name").val("");
			$editDialog.find("#edit-name").removeClass("required");
		}   
	});
	let oldName = element.name;
	setEditText(type, $editDialog, oldName);
	$editDialog.dialog("open");
}
function deleteElement(type, element) {
	let $deleteDialog = $("#delete-dialog").dialog({
		autoOpen: false,
		minHeight: 150,
		width: 300,
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
				$deleteDialog.dialog("close");
				return true;
			},
			"No": function() {
				$deleteDialog.dialog("close");
				return true;
			} 
		}
	});
	let name = element.name;
	if (type === "card") name = element.name;
	setDeleteText(type, $deleteDialog, name);
	$deleteDialog.dialog("open");
}
function setAddText(type, $dialog) {
	let title = "Enter name";
	let label = "Name";
	let placeholder = "Enter a value";
	if (type.length > 0) {
		title = "Add new " + type;
		label = type.capitalizeFirstLetter() + " name";
		placeholder = "Name of the new " + type;
	}
	$(".ui-dialog-title").text(title);
	$dialog.find($("label")).text(label);
	$dialog.find($("#name")).attr("placeholder", placeholder);
}
function setEditText(type, $dialog, oldName) {
	let title = "Enter name";
	let label = "Name";
	let placeholder = "Enter a value";
	if (type.length > 0) {
		title = "Edit " + type;
		label = "New " + type + " name";
		placeholder = "New " + type + " name";
	}
	$(".ui-dialog-title").text(title);
	$dialog.find("#edit-object").text(type);
	$dialog.find("#edit-obj-name").text(oldName);
	$dialog.find($("label")).text(label);
	$dialog.find($("#edit-name")).attr("placeholder", placeholder);
}
function setDeleteText(type, $dialog, name) {
	$(".ui-dialog-title").text("Delete " + type);
	$dialog.find("#delete-object").text(type);
	$dialog.find("#delete-name").text(name);
}