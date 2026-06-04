<?php
/**
 * Admin settings and ACF options.
 *
 * @package WOW_Creations
 */

declare(strict_types=1);

if (! defined('ABSPATH')) {
    exit;
}

add_action('acf/init', 'wowc_register_acf_options_page');
function wowc_register_acf_options_page(): void
{
    if (! function_exists('acf_add_options_page')) {
        return;
    }

    acf_add_options_page([
        'page_title' => __('WOW Settings', 'wow-creations'),
        'menu_title' => __('WOW Settings', 'wow-creations'),
        'menu_slug'  => 'wow-settings',
        'capability' => 'manage_options',
        'redirect'   => false,
        'position'   => 58,
        'icon_url'   => 'dashicons-heart',
    ]);
}
