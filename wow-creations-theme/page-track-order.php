<?php /** @package WOW_Creations */ get_header(); ?>
<main id="main" class="container page-content narrow">
    <p class="eyebrow"><?php esc_html_e('Order Support', 'wow-creations'); ?></p>
    <h1><?php esc_html_e('Track Order', 'wow-creations'); ?></h1>
    <p><?php esc_html_e('Share your name, phone number, and order reference on WhatsApp. Our team will confirm your latest dispatch or delivery status.', 'wow-creations'); ?></p>
    <a class="btn" href="<?php echo esc_url('https://wa.me/' . wowc_whatsapp_number() . '?text=' . rawurlencode('Hi WOW Creations, I want to track my order.')); ?>" target="_blank" rel="noopener noreferrer"><?php esc_html_e('Track on WhatsApp', 'wow-creations'); ?></a>
</main>
<?php get_footer(); ?>
