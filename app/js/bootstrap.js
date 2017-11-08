require.config({
    baseUrl: './',
    paths: {
		'app': 'js/app',
		'routes':'js/routes',
		'dependencyResolverFor':'js/services/dependencyResolverFor',
		'require': 'bower_components/requirejs/require',
		'angular': 'bower_components/angular/angular',
		'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router.min',
		'uiBootstrap': 'bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
		'jquery': 'bower_components/jquery/dist/jquery.min',
		'Bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min',
		'ShoppingService':'js/services/ShoppingService'
	},
	priority: [
        'jquery',
        'angular',
        'Bootstrap',
    ],
	shim: {
		'app': {
			deps: ['angular','angular-ui-router', 'uiBootstrap', 'jquery', 'Bootstrap']
		},
		'Bootstrap': {
            deps: ['jquery']
		},
		'angular-ui-router': {
			deps: ['angular']
		},
		'uiBootstrap': {
			deps: ['angular']
		}
	}
});

require
(
    [
        'app'
    ],
    function(app)
    {
        angular.bootstrap(document, ['app']);
    }
);