<?php
/**
 * Shared helpers.
 *
 * @package WOW_Creations
 */

declare(strict_types=1);

if (! defined('ABSPATH')) {
    exit;
}

function wowc_get_option(string $key, mixed $default = ''): mixed
{
    if (function_exists('get_field')) {
        $value = get_field($key, 'option');
        return ($value !== null && $value !== false && $value !== '') ? $value : $default;
    }

    return $default;
}

function wowc_whatsapp_number(): string
{
    $number = (string) wowc_get_option('whatsapp_number', '919999999999');
    return preg_replace('/[^0-9]/', '', $number) ?: '919999999999';
}

function wowc_format_price(mixed $price): string
{
    $amount = (float) $price;
    if ($amount <= 0) {
        return __('Price on request', 'wow-creations');
    }

    return '₹' . number_format_i18n($amount, 0);
}

function wowc_product_price(?int $post_id = null): string
{
    $post_id = $post_id ?: get_the_ID();
    $price = function_exists('get_field') ? get_field('approved_price', $post_id) : get_post_meta($post_id, 'approved_price', true);
    return wowc_format_price($price);
}

function wowc_inventory_status(?int $post_id = null): string
{
    $post_id = $post_id ?: get_the_ID();
    $status = function_exists('get_field') ? get_field('inventory_status', $post_id) : get_post_meta($post_id, 'inventory_status', true);
    return $status ? sanitize_text_field((string) $status) : __('Available', 'wow-creations');
}

function wowc_whatsapp_url(?int $post_id = null, string $context = ''): string
{
    $post_id = $post_id ?: get_the_ID();
    $saved = function_exists('get_field') ? get_field('whatsapp_url', $post_id) : get_post_meta($post_id, 'whatsapp_url', true);
    if ($saved) {
        return esc_url_raw((string) $saved);
    }

    $sku = function_exists('get_field') ? get_field('sku', $post_id) : get_post_meta($post_id, 'sku', true);
    $message = sprintf(
        'Hi WOW Creations, I want to reserve %s%s. %s',
        get_the_title($post_id),
        $sku ? ' (SKU: ' . $sku . ')' : '',
        get_permalink($post_id)
    );

    if ($context) {
        $message .= ' ' . $context;
    }

    return 'https://wa.me/' . wowc_whatsapp_number() . '?text=' . rawurlencode($message);
}

function wowc_field(string $key, ?int $post_id = null, mixed $default = ''): mixed
{
    $post_id = $post_id ?: get_the_ID();
    if (function_exists('get_field')) {
        $value = get_field($key, $post_id);
    } else {
        $value = get_post_meta($post_id, $key, true);
    }

    return ($value !== null && $value !== false && $value !== '') ? $value : $default;
}

function wowc_component(string $name, array $args = []): void
{
    $file = WOWC_DIR . 'components/' . sanitize_file_name($name) . '.php';
    if (is_readable($file)) {
        load_template($file, false, $args);
    }
}

function wowc_image_url(mixed $image, string $size = 'large'): string
{
    if (is_array($image) && ! empty($image['sizes'][$size])) {
        return esc_url_raw((string) $image['sizes'][$size]);
    }
    if (is_array($image) && ! empty($image['url'])) {
        return esc_url_raw((string) $image['url']);
    }
    if (is_numeric($image)) {
        return (string) wp_get_attachment_image_url((int) $image, $size);
    }
    if (is_string($image)) {
        return esc_url_raw($image);
    }

    return '';
}
