
const {
	Post
} = wp.api.models;

const {
	render
} = wp.element;

const {
} = wp.components;

import C8Editor from './components/c8editor';

import './c8.scss';

function publishCallback( { content } ) {
	const newPost = new Post( {
		content,
		status: 'publish',
	} );
	newPost.save();

	return newPost;
}

// Bootload in the stub for the new post
const stub = document.createElement('div');
stub.id = 'c8-new-post';
document.querySelector('.post.hentry').before( stub );

// Render the React component.
render(
	( <C8Editor publishCallback={ publishCallback } /> ),
	stub
);
