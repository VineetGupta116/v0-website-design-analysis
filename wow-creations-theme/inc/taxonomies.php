<?php
/**
 * Product taxonomies.
 *
 * @package WOW_Creations
 */

declare(strict_types=1);

if (! defined('ABSPATH')) {
    exit;
}

add_action('init', 'wowc_register_taxonomies');
function wowc_register_taxonomies(): void
{
    register_taxonomy('product_category', ['products'], [
        'labels' => [
            'name'          => __('Product Categories', 'wow-creations'),
            'singular_name' => __('Product Category', 'wow-creations'),
            'menu_name'     => __('Categories', 'wow-creations'),
        ],
        'hierarchical'      => true,
        'public'            => true,
        'show_admin_column' => true,
        'show_in_rest'      => true,
        'rewrite'           => ['slug' => 'category', 'with_front' => false],
    ]);

    register_taxonomy('product_collection', ['products'], [
        'labels' => [
            'name'          => __('Collections', 'wow-creations'),
            'singular_name' => __('Collection', 'wow-creations'),
            'menu_name'     => __('Collections', 'wow-creations'),
        ],
        'hierarchical'      => true,
        'public'            => true,
        'show_admin_column' => true,
        'show_in_rest'      => true,
        'rewrite'           => ['slug' => 'collection', 'with_front' => false],
    ]);

    register_taxonomy('product_tags', ['products'], [
        'labels' => [
            'name'          => __('Product Tags', 'wow-creations'),
            'singular_name' => __('Product Tag', 'wow-creations'),
            'menu_name'     => __('Tags', 'wow-creations'),
        ],
        'hierarchical'      => false,
        'public'            => true,
        'show_admin_column' => true,
        'show_in_rest'      => true,
        'rewrite'           => ['slug' => 'tag', 'with_front' => false],
    ]);
}

add_action('after_switch_theme', 'wowc_seed_product_categories');
function wowc_seed_product_categories(): void
{
    $categories = ['Kurti Sets', 'Co-Ord Sets', 'Suit Sets', 'Dress Material', 'Unstitched', 'Seasonal', 'Sale'];
    foreach ($categories as $category) {
        if (! term_exists($category, 'product_category')) {
            wp_insert_term($category, 'product_category');
        }
    }
}
