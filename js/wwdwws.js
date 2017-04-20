var WWD = Backbone.Model.extend({
	defaults: {
		listItem: 'Installation of Microsoft Office'
	}
});

var WWDListItems = Backbone.Collection.extend({
	model: WWD
});
var liitem0 = new WWD({listItem: 'Installation of Microsoft Office'});
var liitem1 = new WWD({listItem: 'Installation of Antivirus'});
var liitem2 = new WWD({listItem: 'Re-Imaging of School Laptops'});
var liitem3 = new WWD({listItem: 'Installation of Hardware of School Laptops'});
var liItemCollection = new WWDListItems([liitem0,liitem1,liitem2,liitem3]);

var NavView = Backbone.View.extend({
	navEl: $(".wwd"),
	initialize: function(){
		_.bindAll(this, 'render');
		this.render()
	},
	render: function(){
		$(this.navEl).html('<li>' + liitem0.get('listItem') + '</li>' +
							'<li>' + liitem1.get('listItem') + '</li>' +
							'<li>' + liitem2.get('listItem') + '</li>' +
							'<li>' + liitem3.get('listItem') + '</li>' 
							);

	}
});
var navView = new NavView();

var WWDS = Backbone.Model.extend({
	defaults: {
		listItem: 'Repair of Personal Compters/Laptops'
	}
});

var WWDSListItems = Backbone.Collection.extend({
	model: WWDS
});
var liitem0 = new WWDS({listItem: 'Repair of Personal Compters/Laptops'});
var liitem1 = new WWDS({listItem: 'Do Not Take Payments for Sevice Rendered'});
var liitem2 = new WWDS({listItem: 'Re-Imaging of Personal Laptops'});
var liItemCollection = new WWDSListItems([liitem0,liitem1,liitem2]);

var NavView1 = Backbone.View.extend({
	navEl: $(".wwds"),
	initialize: function(){
		_.bindAll(this, 'render');
		this.render()
	},
	render: function(){
		$(this.navEl).html('<li>' + liitem0.get('listItem') + '</li>' +
							'<li>' + liitem1.get('listItem') + '</li>' +
							'<li>' + liitem2.get('listItem') + '</li>' 
							);

	}
});
var navView1 = new NavView1();