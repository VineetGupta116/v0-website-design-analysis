<?php
/**
 * WOW Creations theme bootstrap.
 *
 * @package WOW_Creations
 */

declare(strict_types=1);

if (! defined('ABSPATH')) {
    exit;
}

define('WOWC_VERSION', '1.0.0');
define('WOWC_DIR', trailingslashit(get_template_directory()));
define('WOWC_URI', trailingslashit(get_template_directory_uri()));

require_once WOWC_DIR . 'inc/helpers.php';
require_once WOWC_DIR . 'inc/cpt.php';
require_once WOWC_DIR . 'inc/taxonomies.php';
require_once WOWC_DIR . 'inc/settings.php';
require_once WOWC_DIR . 'inc/queries.php';
require_once WOWC_DIR . 'inc/meta-feed.php';

add_action('after_setup_theme', 'wowc_theme_setup');
function wowc_theme_setup(): void
{
    load_theme_textdomain('wow-creations', WOWC_DIR . 'languages');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script']);
    add_theme_support('custom-logo', ['height' => 120, 'width' => 320, 'flex-height' => true, 'flex-width' => true]);
    register_nav_menus([
        'primary' => __('Primary Menu', 'wow-creations'),
        'footer'  => __('Footer Menu', 'wow-creations'),
    ]);
}

add_action('wp_enqueue_scripts', 'wowc_enqueue_assets');
function wowc_enqueue_assets(): void
{
    wp_enqueue_style('wowc-google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap', [], null);
    wp_enqueue_style('wowc-main', WOWC_URI . 'assets/css/main.css', [], WOWC_VERSION);
}

add_action('init', 'wowc_add_rewrite_rules');
function wowc_add_rewrite_rules(): void
{
    add_rewrite_rule('^feed/meta-products\.xml$', 'index.php?wowc_meta_feed=1', 'top');
}

add_filter('query_vars', static function (array $vars): array {
    $vars[] = 'wowc_meta_feed';
    return $vars;
});

add_action('after_switch_theme', static function (): void {
    wowc_register_post_types();
    wowc_register_taxonomies();
    wowc_add_rewrite_rules();
    flush_rewrite_rules();
});

add_action('pre_get_posts', 'wowc_adjust_archives');
function wowc_adjust_archives(WP_Query $query): void
{
    if (is_admin() || ! $query->is_main_query()) {
        return;
    }

    if ($query->is_post_type_archive('products') || $query->is_tax('product_category')) {
        $query->set('posts_per_page', 18);
        $query->set('meta_key', 'listing_status');
        $query->set('meta_value', 'Published');
    }
}
