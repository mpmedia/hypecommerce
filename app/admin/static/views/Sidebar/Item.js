/*global define */
define([
	'marionette',
	'templates'
], function (Marionette, Templates) {
	'use strict';

	return Marionette.CompositeView.extend({
		template: Templates.sidebarItem,
		itemViewContainer: 'ul'
		// ui: {
		// 	input: '#new-todo'
		// },

		// events: {
		// 	'keypress #new-todo': 'onInputKeypress'
		// },

		// onInputKeypress: function (event) {
		// 	var ENTER_KEY = 13;
		// 	var todoText = this.ui.input.val().trim();

		// 	if (event.which === ENTER_KEY && todoText) {
		// 		this.collection.create({
		// 			title: todoText
		// 		});

		// 		this.ui.input.val('');
		// 	}
		// }
	});
});