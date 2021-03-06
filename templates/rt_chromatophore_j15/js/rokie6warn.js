/**
 * @version		1.5.4 June 7, 2010
 * @author		RocketTheme, LLC http://www.rockettheme.com
 * @copyright 	Copyright (C) 2007 - 2010 RocketTheme, LLC
 * @license		http://www.rockettheme.com/legal/license.php RocketTheme Proprietary Use License
 *
 * RokIEWarn - An IE6 Warning to invite people upgrading to IE6
 * 
 */
 
 
var RokIEWarn = new Class({
	'site': 'sitename',
	'initialize': function() {
		var warning = "<h3>You are currently browsing this site with Internet Explorer 6 (IE6).</h3><h4>NOTE: The Chromatophore template is compatible with IE6, however due to limitiations in the browser, some of the graphics and visual effects have been reduced.</h4><p>The last version of Internet Explorer 6 was called Service Pack 1 for Internet Explorer 6 and was released in December of 2004.  By continuing to run Internet Explorer 6 you are open to any and all security vulnerabilities discovered since that date.  In October of 2006, Microsoft released version 7 of Internet Explorer that, in addition to providing greater safety in navigation, which allows the Internet Explorer browser to identify as' modern browsers'. Microsoft has launched Internet Explorer 7 as a high-priority update, and is now available to download for free without any certification requirements. As of Feb 12th, 2008 Microsoft is forcing updates to Internet Explorer 6 in order to move people towards the much improved and secure version 7. Please ensure you don't hamper this process.  It's for your own good!</p> <br /><a class=\"external\"  href=\"http://www.microsoft.com/downloads/details.aspx?FamilyId=9AE91EBE-3385-447C-8A30-081805B2F90B\">Download Internet Explorer 7 NOW!</a>";
		
		this.box = new Element('div', {'id': 'iewarn'}).inject(document.body, 'top');
		var div = new Element('div').inject(this.box).setHTML(warning);
		
		var click = this.toggle.bind(this);
		var button = new Element('a', {'id': 'iewarn_close'}).addEvents({
			'mouseover': function() {
				this.addClass('cHover');
			},
			'mouseout': function() {
				this.removeClass('cHover');
			},
			'click': function() {
				click();	
			}
		}).inject(div, 'top');
		
		this.height = $('iewarn').getSize().size.y;
		
		this.fx = new Fx.Styles(this.box, {duration: 1000}).set({'margin-top': $('iewarn').getStyle('margin-top').toInt(), 'opacity': 0});
		this.open = false;
		
		var cookie = Cookie.get('rokIEWarn'), height = this.height;
		//cookie = 'open'; // added for debug to not use the cookie value
		if (!cookie || cookie == "open") this.show();
		else this.fx.set({'margin-top': -height, 'opacity': 0});

		
		return ;
	},
	
	'show': function() {
		this.fx.start({
			'margin-top': 0,
			'opacity': 1
		});
		this.open = true;
		Cookie.set('rokIEWarn', 'open', {duration: 7});
	},	
	'close': function() {
		var margin = this.height;
		this.fx.start({
			'margin-top': -margin,
			'opacity': 0
		});
		this.open = false;
		Cookie.set('rokIEWarn', 'close', {duration: 7});
	},	
	'status': function() {
		return this.open;
	},
	'toggle': function() {
		if (this.open) this.close();
		else this.show();
	}
});

window.addEvent('domready', function() {
	if (window.ie6) { (function() {var iewarn = new RokIEWarn();}).delay(2000); }
});