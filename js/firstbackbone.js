var Title = Backbone.Model.extend({});
var title = new Title(
		{titles: 'Welcome to DreamCPU.', spantext: 'Here we supply many types of services, from registration to web development. <br/>We would love to help fulfill your dreams.'}
	);

var TitleView = Backbone.View.extend({
	titleEl: $("#title"),
	spanEl: $("#textchange"),
	initialize: function(){
		_.bindAll(this, 'render');
		this.render()
	},
	render: function(){
		$(this.titleEl).html('<h2>' + title.get('titles') + '</h2><br/>');
		$(this.spanEl).html(title.get('spantext'));

	}
});
var titleView = new TitleView();

//Navigation location

var Navigation = Backbone.Model.extend({
	defaults: {
		links: '#', 
		classes: 'home',
		name: 'Home'
	}
});

var NavCollect = Backbone.Collection.extend({
	model: Navigation
});
var link0 = new Navigation({links: '#', classes: 'home', name: 'Home'});
var link1 = new Navigation({links: '#', classes: 'services', name: 'Services' });
var link2 = new Navigation({links: '#', classes: 'contact', name: 'Contact Us' });
var link3 = new Navigation({links: '/wordpress', classes: 'programming', name: 'Blog', });
var link4 = new Navigation({links: '#', classes: 'rssfeeds', name: 'RSS Feeds'});
var linkCollection = new NavCollect([link0,link1,link2,link3,link4]);

var NavView = Backbone.View.extend({
	navEl: $(".navigation"),
	initialize: function(){
		_.bindAll(this, 'render');
		this.render()
	},
	render: function(){
		$(this.navEl).html('<li data-slide = "1"><a href = "' + link0.get('links') + '"' + 'class= ' + link0.get('classes') + '>'+ link0.get('name') + '</a></li>' 
			+ '<li data-slide = "2"><a href = "' + link1.get('links') + '"' + 'class= ' + link1.get('classes') + '>'+ link1.get('name') + '</a></li>' 
			+ '<li data-slide = "3"><a href = "' + link2.get('links') + '"' + 'class= ' + link2.get('classes') + '>'+ link2.get('name') + '</a></li>' 
			+ '<li><a href = "' + link3.get('links') + '"' + 'class= ' + link3.get('classes') + '>'+ link3.get('name') + '</a></li>' 
			+ '<li data-slide = "4"><a href = "' + link4.get('links') + '"' + 'class= ' + link4.get('classes') + '>'+ link4.get('name') + '</a></li>');

	}
});
var navView = new NavView();