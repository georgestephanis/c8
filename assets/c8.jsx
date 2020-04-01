
const {
	Component,
	Fragment,
	render
} = wp.element;

const {
	TextareaControl
} = wp.components;

import './c8.scss'

(function(wp, $) {
	class C8Editor extends Component {
		constructor( props ) {
			super( props );
			this.state = {
				content: '',
			};
		}

		render() {
			return (
				<Fragment>
					<TextareaControl 
						label="Content"
						value={ this.state.content }
						onChange={ content => this.setState({ content }) }
					/>
					<small>{ this.state.content }</small>
				</Fragment>
				
			);
		}
	}

	/**
	 * Bootload in the stub for the new post
	 */
	$('.post.hentry:first').before('<div id="c8-new-post">NEW POST EDITOR GOES HERE</div>');

	render(
		( <C8Editor /> ),
		document.getElementById('c8-new-post')
	);

})(window.wp, jQuery);
