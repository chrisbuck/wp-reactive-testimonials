<?php
/**
*   Plugin Name: Reactive Testimonials
*   Description: Show testimonials in a sliding carousel.
*   Author: Chris Buck, CSTech
*   AuthorURI: http://customscripts.tech
*   Text Domain: cst_rtest
*   Domain Path:    /languages
*   Version: 1.0.0
*   License: GPL3
**/

defined( 'ABSPATH' ) || exit;

//Load Translations
function cst_rtest_load_textdomain() {
    load_plugin_textdomain( 'cst_rtest', false, basename(__DIR__) . '/languages' );
}
add_action( 'init', 'cst_rtest_load_textdomain' );

//Block categories
function cst_rtest_block_categories( $categories, $post ){
    if( $post->post_type !== 'post' ){
        //return $categories;
    }
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'cstech',
                'title' => __( 'CS Tech', 'cs tech'),
            )
        )
    );
}
add_filter( 'block_categories', 'cst_rtest_block_categories', 10, 2 );

//Render callback
function cst_rtest_render_callback($atts, $content){
    //Enqueue any other stylesheets for the frontend.
    
    //Enqueue any scripts that should precede a data call.
    
    //Call a function to get data.
    
    //Enqueue any scripts that should follow the data call.
    if( is_admin() == false ){
    /*
    wp_enqueue_script(
        'jquery_cdn',
        'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js',
        array(),
        null,
        false
    );
    */
        
    wp_enqueue_script('cst_shortcode_text_carousel_popper', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js', array('jquery'), '20191127', false );
        
    wp_enqueue_script('cst_shortcode_text_carousel_bootstrap', 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js', array('jquery'), '20191127', false );
    
    wp_enqueue_script(
        'cst_rtest_sliders_script',
        plugins_url( 'assets/js/frontend/testimonials-slider.js', __FILE__ ), array('jquery'), '20200111', true
    );
        

    }
    //Pass through (or return) the content.

    return $content;
}
function cst_rtest_register_blocks(){
    
    //Backend style
    wp_register_style( 'cst_rtest_editor_style', plugins_url('assets/css/backend/editor-style.css', __FILE__), array(), null);
    
    
    //Backend script
    wp_register_script(
        'cst_rtest_editor_script',
        plugins_url( 'assets/js/backend/backend.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-data' ), null,
        false
    );
    
    
    
    //Frontend style
    wp_enqueue_style(
        'cst_rtest_frontend_style',
        plugins_url( 'assets/css/frontend/slider-style.css', __FILE__ ), array(), null
    );
    wp_enqueue_style(
        'animate',
        plugins_url( 'assets/css/frontend/animate.min.css', __FILE__ ), array(), null
    );
    
    register_block_type(    //action = init
        'cst/reactive-testimonials', 
        array(
            'editor_style' => 'cst_rtest_editor_style',
            'editor_script' => 'cst_rtest_editor_script',
            'style'       => 'cst_rtest_frontend_style',
            'render_callback' => 'cst_rtest_render_callback'
        ) 
    );
}

add_action( 'init', 'cst_rtest_register_blocks' );

function cst_rtest_google_fonts(){
    wp_enqueue_style('googleFonts-EBGaramond', '//fonts.googleapis.com/css?family=EB+Garamond:200,200i,300,300i,400,500,500i,400i,700,700i,900,900i');
}
function cst_rtest_update_jquery(){
    wp_deregister_script('jquery');
    wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js', array(), '20191127', false );
    //'EB+Garamond'
}
add_action( 'wp_enqueue_scripts', 'cst_rtest_update_jquery', 999 );


add_action( 'wp_enqueue_scripts', 'cst_rtest_google_fonts', 999 );


?>