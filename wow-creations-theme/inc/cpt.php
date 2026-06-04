<?php
/**
 * Custom post types.
 *
 * @package WOW_Creations
 */

declare(strict_types=1);

if (! defined('ABSPATH')) {
    exit;
}

add_action('init', 'wowc_register_post_types');
function wowc_register_post_types(): void
{
    register_post_type('products', [
        'labels' => [
            'name'               => __('Products', 'wow-creations'),
            'singular_name'      => __('Product', 'wow-creations'),
            'add_new_item'       => __('Add New Product', 'wow-creations'),
            'edit_item'          => __('Edit Product', 'wow-creations'),
            'new_item'           => __('New Product', 'wow-creations'),
            'view_item'          => __('View Product', 'wow-creations'),
            'search_items'       => __('Search Products', 'wow-creations'),
            'not_found'          => __('No products found', 'wow-creations'),
            'menu_name'          => __('WOW Products', 'wow-creations'),
        ],
        'public'              => true,
        'has_archive'         => 'shop',
        'rewrite'             => ['slug' => 'product', 'with_front' => false],
        'menu_icon'           => 'dashicons-products',
        'supports'            => ['title', 'editor', 'thumbnail', 'excerpt', 'revisions'],
        'show_in_rest'        => true,
        'publicly_queryable'  => true,
        'exclude_from_search' => false,
        'capability_type'     => 'post',
    ]);

    register_post_type('reviews', [
        'labels' => [
            'name'          => __('Reviews', 'wow-creations'),
            'singular_name' => __('Review', 'wow-creations'),
            'menu_name'     => __('Reviews', 'wow-creations'),
        ],
        'public'       => true,
        'has_archive'  => 'reviews',
        'rewrite'      => ['slug' => 'review', 'with_front' => false],
        'menu_icon'    => 'dashicons-format-quote',
        'supports'     => ['title', 'editor', 'thumbnail', 'revisions'],
        'show_in_rest' => true,
    ]);

    register_post_type('faqs', [
        'labels' => [
            'name'          => __('FAQs', 'wow-creations'),
            'singular_name' => __('FAQ', 'wow-creations'),
            'menu_name'     => __('FAQs', 'wow-creations'),
        ],
        'public'       => true,
        'has_archive'  => false,
        'rewrite'      => ['slug' => 'faq-item', 'with_front' => false],
        'menu_icon'    => 'dashicons-editor-help',
        'supports'     => ['title', 'editor', 'revisions'],
        'show_in_rest' => true,
    ]);

    register_post_type('policies', [
        'labels' => [
            'name'          => __('Policies', 'wow-creations'),
            'singular_name' => __('Policy', 'wow-creations'),
            'menu_name'     => __('Policies', 'wow-creations'),
        ],
        'public'       => true,
        'has_archive'  => false,
        'rewrite'      => ['slug' => 'policy', 'with_front' => false],
        'menu_icon'    => 'dashicons-shield-alt',
        'supports'     => ['title', 'editor', 'revisions'],
        'show_in_rest' => true,
    ]);
}
