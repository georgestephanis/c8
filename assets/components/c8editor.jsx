
const {
	Component,
	Fragment
} = wp.element;

const {
	Button,
	TextareaControl
} = wp.components;

class C8Editor extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			content: '',
			working: false,
		};
	}

	// just for testing
	toggleWorking() {
		this.setState({ working: ! this.state.working });
	}

	reset() {
		this.setState({
			content: '',
			working: false,
		});
	}

	publish() {
		this.setState({ working: true });

		if ( this.props.publishCallback( this.state ) ) {
			this.reset();
		} else {
			this.setState({ working: false });
		}
	}

	render() {
		return (
			<Fragment>
				<TextareaControl
					label="Content"
					value={ this.state.content }
					disabled={ this.state.working }
					onChange={ content => this.setState({ content }) }
				/>
				<Button isTertiary onClick={ ()=>this.toggleWorking() }>Toggle</Button>
				<Button disabled={ this.state.working } isSecondary onClick={ ()=>this.reset() }>Reset</Button>
				<Button disabled={ this.state.working } isPrimary onClick={ ()=>this.publish() }>Publish</Button>
				<small>{ this.state.content }</small>
			</Fragment>

		);
	}
}

export default C8Editor;
