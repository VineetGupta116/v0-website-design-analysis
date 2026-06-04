<?php
/**
 * Query layer for reusable catalog loops.
 *
 * @package WOW_Creations
 */

declare(strict_types=1);

if (! defined('ABSPATH')) {
    exit;
}

function wowc_new_arrivals_query(int $limit = 8): WP_Query
{
    return new WP_Query([
        'post_type'      => 'products',
        'posts_per_page' => absint($limit),
        'post_status'    => 'publish',
        'meta_query'     => [
            [
                'key'     => 'listing_status',
                'value'   => 'Published',
                'compare' => '=',
            ],
        ],
        'orderby'        => 'date',
        'order'          => 'DESC',
    ]);
}

function wowc_related_products_query(int $post_id, int $limit = 4): WP_Query
{
    $term_ids = wp_get_post_terms($post_id, 'product_category', ['fields' => 'ids']);
    $args = [
        'post_type'      => 'products',
        'posts_per_page' => absint($limit),
        'post_status'    => 'publish',
        'post__not_in'   => [$post_id],
        'meta_query'     => [
            [
                'key'     => 'listing_status',
                'value'   => 'Published',
                'compare' => '=',
            ],
        ],
    ];

    if (! empty($term_ids) && ! is_wp_error($term_ids)) {
        $args['tax_query'] = [
            [
                'taxonomy' => 'product_category',
                'field'    => 'term_id',
                'terms'    => array_map('absint', $term_ids),
            ],
        ];
    }

    return new WP_Query($args);
}

function wowc_reviews_query(int $limit = 6): WP_Query
{
    return new WP_Query([
        'post_type'      => 'reviews',
        'posts_per_page' => absint($limit),
        'post_status'    => 'publish',
        'orderby'        => 'date',
        'order'          => 'DESC',
    ]);
}

function wowc_faqs_query(int $limit = 50): WP_Query
{
    return new WP_Query([
        'post_type'      => 'faqs',
        'posts_per_page' => absint($limit),
        'post_status'    => 'publish',
        'orderby'        => 'menu_order title',
        'order'          => 'ASC',
    ]);
}

function wowc_product_categories(): array
{
    $terms = get_terms([
        'taxonomy'   => 'product_category',
        'hide_empty' => false,
        'orderby'    => 'name',
        'order'      => 'ASC',
    ]);

    return is_wp_error($terms) ? [] : $terms;
}
