<?php
/** @package WOW_Creations */
get_header();
?>
<main id="main" class="container archive-page">
    <header class="archive-header">
        <p class="eyebrow">WOW Creations</p>
        <h1><?php esc_html_e('Shop Boutique Collections', 'wow-creations'); ?></h1>
        <p><?php esc_html_e('Browse available pieces and reserve instantly on WhatsApp. Orders are manually confirmed by the WOW Creations team.', 'wow-creations'); ?></p>
    </header>
    <div class="category-pills">
        <?php foreach (wowc_product_categories() as $term) : ?>
            <a href="<?php echo esc_url(get_term_link($term)); ?>"><?php echo esc_html($term->name); ?></a>
        <?php endforeach; ?>
    </div>
    <div class="product-grid">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <?php wowc_component('product-card', ['post_id' => get_the_ID()]); ?>
        <?php endwhile; else : ?>
            <p><?php esc_html_e('New products are being curated. Please check back soon or message us on WhatsApp.', 'wow-creations'); ?></p>
        <?php endif; ?>
    </div>
    <?php the_posts_pagination(); ?>
</main>
<?php get_footer(); ?>
