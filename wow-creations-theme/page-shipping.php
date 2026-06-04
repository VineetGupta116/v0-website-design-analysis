<?php /** @package WOW_Creations */ get_header(); ?>
<main id="main" class="container page-content narrow">
    <p class="eyebrow"><?php esc_html_e('Policy', 'wow-creations'); ?></p>
    <h1><?php esc_html_e('Shipping & Returns', 'wow-creations'); ?></h1>
    <?php if (have_posts()) : while (have_posts()) : the_post(); the_content(); endwhile; else : ?>
        <p><?php esc_html_e('Shipping timelines, dispatch details, and return eligibility are confirmed on WhatsApp before order processing. Since boutique quantities are limited, reservations are subject to stock confirmation.', 'wow-creations'); ?></p>
    <?php endif; ?>
</main>
<?php get_footer(); ?>
