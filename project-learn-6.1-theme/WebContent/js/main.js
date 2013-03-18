AUI().ready(
	'liferay-hudcrumbs', 'liferay-navigation-interaction',
	function(A) {
		var navigation = A.one('#navigation');

		if (navigation) {
			navigation.plug(Liferay.NavigationInteraction);
		}

		var siteBreadcrumbs = A.one('.site-breadcrumbs');

		if (siteBreadcrumbs) {
			siteBreadcrumbs.plug(A.Hudcrumbs);
		}
	}
);

AUI().ready(
		'aui-io',
		function(A) {
			A.one('#skin-selector').delegate(
					'click',
					function(event) {
						var cssClass = event.currentTarget
								.attr('data-customCssClass');
						if (cssClass) {
							var body = A.getBody();
							body.attr('class', body.attr('class').replace(
									/\scolorscheme-[a-z]+/g, ""));
							body.addClass(cssClass);

							A.io.request(themeDisplay.getPathMain()
									+ '/portal/session_click', {
								data : {
									'theme_custom_css_class' : cssClass
								}
							});
						}
					}, 'a');
		}

);

