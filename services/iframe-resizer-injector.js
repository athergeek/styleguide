module.exports = function( req, res, next ) {
	const _render = res.render;
	res.render = function( view, options, cb ) {
		options.contents += '<script src="/static/iframeResizer.contentWindow.min.js"></script>';
		_render.call( this, view, options, cb );
	};
	next();
};
