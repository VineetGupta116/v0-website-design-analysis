<?php
/** @package WOW_Creations */
get_header();
?>
<main id="main" class="container archive-page">
    <header class="archive-header"><p class="eyebrow">WOW Creations</p><h1><?php esc_html_e('Reviews', 'wow-creations'); ?></h1></header>
    <div class="review-grid">
        <?php while (have_posts()) : the_post(); wowc_component('review-card', ['post_id' => get_the_ID()]); endwhile; ?>
    </div>
    <?php the_posts_pagination(); ?>
</main>
<?php get_footer(); ?>
