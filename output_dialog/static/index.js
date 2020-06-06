/**
 * Calysto Jupyter Notebooks Extensions
 *
 * Copyright (c) The Calysto Project
 * http://github.com/Calysto/notebook-extensions
 *
 * Released under the BSD Simplified License
 *
 **/

define(["require", "./jquery.dialogextend"], function (require, dialogextend) {

	function popout(){
		var cell = Jupyter.notebook.get_selected_cell();
		var popped = document.createElement("div");
		popped.setAttribute("id", "popped");
		popped.appendChild(cell.element[0].getElementsByClassName("output_wrapper")[0]);
		document.getElementsByTagName("body")[0].appendChild(popped);
		$("#popped").dialog();

	}

	var add_toolbar_buttons = function () {
		Jupyter.actions.register({
			'help': 'Output as dialog.',
			'icon': 'fa-terminal',
			'handler': popout
		}, 'popout', 'output_dialog');

		IPython.toolbar.add_buttons_group([
			{
				'action': 'output_dialog:popout'
			}
		], 'output_dialog-buttons');
	};

	var load_ipython_extension = function () {

		// Put a button on the toolbar:
		if (!IPython.toolbar) {
			$([IPython.events]).on("app_initialized.NotebookApp", add_toolbar_buttons);
			return;
		} else {
			add_toolbar_buttons();
		}
	};

	return {
		load_ipython_extension: load_ipython_extension,
	};

});
