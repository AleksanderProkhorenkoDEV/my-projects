<?php

add_theme_support('post-thumbnails');

function sidn_scripts()
{
    wp_enqueue_style('style', get_stylesheet_uri());

    wp_register_script('getPost', get_template_directory_uri() . '/assets/js/getPost.js', null, null, true);
    wp_enqueue_script('getPost');
    wp_register_script('carrusel', get_template_directory_uri() . '/assets/js/carrusel.js', null, null, true);
    wp_enqueue_script('carrusel');
}

add_action('wp_enqueue_scripts', 'sidn_scripts');
