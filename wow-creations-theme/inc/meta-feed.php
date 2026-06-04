<?php
/**
 * Meta product catalog XML feed.
 *
 * @package WOW_Creations
 */

declare(strict_types=1);

if (! defined('ABSPATH')) {
    exit;
}

add_action('template_redirect', 'wowc_render_meta_products_feed');
function wowc_render_meta_products_feed(): void
{
    if (get_query_var('wowc_meta_feed') !== '1') {
        return;
    }

    nocache_headers();
    header('Content-Type: application/xml; charset=' . get_option('blog_charset'));

    $products = new WP_Query([
        'post_type'      => 'products',
        'posts_per_page' => 500,
        'post_status'    => 'publish',
        'meta_query'     => [
            [
                'key'     => 'listing_status',
                'value'   => 'Published',
                'compare' => '=',
            ],
        ],
    ]);

    echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
    echo '<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">' . "\n";
    echo '<channel>' . "\n";
    echo '<title>' . esc_html(get_bloginfo('name')) . ' Meta Catalog</title>' . "\n";
    echo '<link>' . esc_url(home_url('/')) . '</link>' . "\n";
    echo '<description>WOW Creations boutique fashion catalog</description>' . "\n";

    while ($products->have_posts()) {
        $products->the_post();
        $post_id = get_the_ID();
        $sku = (string) wowc_field('sku', $post_id, (string) $post_id);
        $desc = (string) wowc_field('product_description', $post_id, get_the_excerpt($post_id));
        $status = strtolower(wowc_inventory_status($post_id));
        $availability = in_array($status, ['available'], true) ? 'in stock' : 'out of stock';
        $price = (float) wowc_field('approved_price', $post_id, 0);
        $image = get_the_post_thumbnail_url($post_id, 'large');
        $terms = wp_get_post_terms($post_id, 'product_category', ['fields' => 'ids']);
        $group_id = (! empty($terms) && ! is_wp_error($terms)) ? (string) $terms[0] : $sku;

        echo '<item>' . "\n";
        echo '<g:id>' . esc_html($sku) . '</g:id>' . "\n";
        echo '<g:title>' . esc_html(get_the_title()) . '</g:title>' . "\n";
        echo '<g:description>' . esc_html(wp_strip_all_tags($desc)) . '</g:description>' . "\n";
        echo '<g:availability>' . esc_html($availability) . '</g:availability>' . "\n";
        echo '<g:condition>new</g:condition>' . "\n";
        echo '<g:price>' . esc_html(number_format($price, 2, '.', '') . ' INR') . '</g:price>' . "\n";
        echo '<g:link>' . esc_url(get_permalink($post_id)) . '</g:link>' . "\n";
        if ($image) {
            echo '<g:image_link>' . esc_url($image) . '</g:image_link>' . "\n";
        }
        echo '<g:brand>WOW Creations</g:brand>' . "\n";
        echo '<g:item_group_id>' . esc_html($group_id) . '</g:item_group_id>' . "\n";
        echo '</item>' . "\n";
    }

    wp_reset_postdata();
    echo '</channel>' . "\n";
    echo '</rss>' . "\n";
    exit;
}
