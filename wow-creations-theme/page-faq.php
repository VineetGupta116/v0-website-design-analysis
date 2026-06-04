<?php /** @package WOW_Creations */ get_header(); $faqs = wowc_faqs_query(); ?>
<main id="main" class="container page-content narrow">
    <p class="eyebrow">FAQ</p>
    <h1><?php esc_html_e('Frequently Asked Questions', 'wow-creations'); ?></h1>
    <div class="faq-list">
        <?php while ($faqs->have_posts()) : $faqs->the_post(); ?>
            <details><summary><?php the_title(); ?></summary><?php the_content(); ?></details>
        <?php endwhile; wp_reset_postdata(); ?>
    </div>
</main>
<?php get_footer(); ?>
