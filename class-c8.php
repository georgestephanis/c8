<?php
/**
 * C8 :: Collabor8 Class File
 *
 * @package  c8
 */

/**
 * Core of the C8 :: Collabor8 plugin
 */
class C8 {

	/**
	 * Kick off registration and enqueues.
	 *
	 * @return void
	 */
	public static function add_hooks() {
		add_action( 'wp_loaded', [ __CLASS__, 'register_scripts_styles' ] );
		add_action( 'wp_enqueue_scripts', [ __CLASS__, 'wp_enqueue_scripts' ] );
	}

	/**
	 * Register scripts and styles for the plugin.
	 *
	 * @return void
	 */
	public static function register_scripts_styles() {
		wp_register_script(
			'c8',
			plugins_url( 'assets/c8.js', __FILE__ ),
			[ 'react', 'jquery' ],
			filemtime( __DIR__ . '/assets/c8.js' ),
			true
		);

		wp_register_style(
			'c8',
			plugins_url( 'assets/c8.css', __FILE__ ),
			null,
			filemtime( __DIR__ . '/assets/c8.css' ),
			null
		);
	}

	/**
	 * Handle enqueueing of the scripts and styles.
	 *
	 * @return void
	 */
	public static function wp_enqueue_scripts() {
		if ( is_home() ) {
			wp_enqueue_script( 'c8' );
			wp_enqueue_style( 'c8' );
		}
	}


}
