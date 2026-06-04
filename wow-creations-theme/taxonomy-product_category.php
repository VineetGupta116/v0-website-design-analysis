<?php
/** @package WOW_Creations */
get_header();
$term = get_queried_object();
?>
<main id="main" class="container archive-page">
    <header class="archive-header">
        <p class="eyebrow"><?php esc_html_e('Category', 'wow-creations'); ?></p>
        <h1><?php echo $term instanceof WP_Term ? esc_html($term->name) : esc_html__('Products', 'wow-creations'); ?></h1>
        <?php if ($term instanceof WP_Term && $term->description) : ?><p><?php echo esc_html($term->description); ?></p><?php endif; ?>
    </header>
    <div class="product-grid">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <?php wowc_component('product-card', ['post_id' => get_the_ID()]); ?>
        <?php endwhile; else : ?>
            <p><?php esc_html_e('No available products in this category yet.', 'wow-creations'); ?></p>
        <?php endif; ?>
    </div>
    <?php the_posts_pagination(); ?>
</main>
<?php get_footer(); ?>
