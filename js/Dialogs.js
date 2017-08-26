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
				let $input = $inputDialog.find("#name");
				if ($input.val() === "") {
					$input.addClass("required");
				} else {
					if (type === "card") element.addCard(new Card($input.val()));
					else if (type === "column") element.addColumn(new Column($input.val()));
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
	if (type === "card") name = element.description;
	setConfirmText(type, $confirmDialog, name);
	$confirmDialog.dialog("open");
}
function setInputText(type, $dialog) {
	let title = "Enter name";
	let label = "Name";
	let placeholder = "Enter a value";
	if (type === "card" ) {
		title = "Add new card";
		label = "Card description";
		placeholder = "Enter new card description";
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