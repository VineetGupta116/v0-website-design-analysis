<?php /** @package WOW_Creations */ get_header(); ?>
<main id="main" class="container page-content narrow">
    <p class="eyebrow">WOW Creations</p>
    <h1><?php esc_html_e('About WOW Creations', 'wow-creations'); ?></h1>
    <?php if (have_posts()) : while (have_posts()) : the_post(); the_content(); endwhile; else : ?>
        <p><?php esc_html_e('WOW Creations is a founder-led boutique fashion label curated by Jyoti Aggarwal. Every collection is selected with elegance, comfort, and occasion-ready styling in mind.', 'wow-creations'); ?></p>
    <?php endif; ?>
    <?php wowc_component('packaging-promise'); ?>
</main>
<?php get_footer(); ?>
