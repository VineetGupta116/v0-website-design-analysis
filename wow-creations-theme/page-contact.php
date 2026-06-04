<?php /** @package WOW_Creations */ get_header(); ?>
<main id="main" class="container page-content narrow">
    <p class="eyebrow"><?php esc_html_e('Contact', 'wow-creations'); ?></p>
    <h1><?php esc_html_e('Message WOW Creations', 'wow-creations'); ?></h1>
    <p><?php esc_html_e('For availability, sizing, reservations, shipping updates, and order support, message us on WhatsApp.', 'wow-creations'); ?></p>
    <a class="btn" href="<?php echo esc_url('https://wa.me/' . wowc_whatsapp_number()); ?>" target="_blank" rel="noopener noreferrer"><?php esc_html_e('Chat on WhatsApp', 'wow-creations'); ?></a>
    <?php if (have_posts()) : while (have_posts()) : the_post(); the_content(); endwhile; endif; ?>
</main>
<?php get_footer(); ?>
