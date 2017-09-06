/* eslint-env browser */
window.styleguide = {
	resizeIframes: function() {
		window.iFrameResize( { heightCalculationMethod: 'documentElementScroll' } );
	},
	showTab: function( tabEl, id ) {
		var context = tabEl.parentElement.parentElement;
		var tabs = context.querySelectorAll( '[data-tab-toggle]' );
		var tabContents = context.querySelectorAll( '[data-tab-id]' );

		tabs = Array.prototype.slice.call( tabs, 0 );
		tabContents = Array.prototype.slice.call( tabContents, 0 );

		tabs.forEach( function( t ) {
			t.classList.remove( 'active' );
		} );

		tabEl.classList.add( 'active' );

		tabContents.forEach( function( t ) {
			if ( t.getAttribute( 'data-tab-id' ) === id ) {
				t.classList.add( 'active' );
			} else {
				t.classList.remove( 'active' );
			}
		} );
	},
	setupSearch: function() {
		document.getElementById( 'searchInput' ).addEventListener( 'keyup', window.styleguide.searchHandler );
	},
	searchHandler: function( event ) {
		let menuItems = Array.prototype.slice.call( document.querySelectorAll( '.styleguide-nav a' ), 0 );
		let searchText = new RegExp( event.target.value, 'i' );
		menuItems.forEach( function( menuItem ) {
			menuItem.style.display = ( menuItem.innerText.match( searchText ) ||
					( menuItem.dataset.hasOwnProperty( 'keywords' ) && menuItem.dataset.keywords.match( searchText ) ) ) ?
				'block' : 'none';
		} );
	}
};

window.styleguide.resizeIframes();
window.styleguide.setupSearch();
