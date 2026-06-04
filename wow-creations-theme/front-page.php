<?php
/**
 * Homepage template.
 *
 * @package WOW_Creations
 */
get_header();
$new_arrivals = wowc_new_arrivals_query(8);
$reviews = wowc_reviews_query(3);
?>
<main id="main">
    <section class="hero">
        <div class="container hero-grid">
            <div>
                <p class="eyebrow">WOW Creations</p>
                <h1><?php esc_html_e('Elegant Fashion Collections', 'wow-creations'); ?></h1>
                <p class="hero-subtitle"><?php esc_html_e('Curated by Jyoti Aggarwal', 'wow-creations'); ?></p>
                <p><?php esc_html_e('Discover boutique ethnic and contemporary pieces, then reserve your favourite styles directly on WhatsApp.', 'wow-creations'); ?></p>
                <div class="hero-actions">
                    <a class="btn" href="<?php echo esc_url(get_post_type_archive_link('products') ?: home_url('/shop/')); ?>"><?php esc_html_e('Shop New Arrivals', 'wow-creations'); ?></a>
                    <a class="btn btn--ghost" href="<?php echo esc_url('https://wa.me/' . wowc_whatsapp_number()); ?>" target="_blank" rel="noopener noreferrer"><?php esc_html_e('Chat on WhatsApp', 'wow-creations'); ?></a>
                </div>
            </div>
            <div class="hero-card">
                <span><?php esc_html_e('Instagram → Website → WhatsApp → Order', 'wow-creations'); ?></span>
            </div>
        </div>
    </section>

    <section class="section container">
        <div class="section-heading">
            <p class="eyebrow"><?php esc_html_e('Fresh edits', 'wow-creations'); ?></p>
            <h2><?php esc_html_e('New Arrivals', 'wow-creations'); ?></h2>
        </div>
        <div class="product-grid">
            <?php while ($new_arrivals->have_posts()) : $new_arrivals->the_post(); ?>
                <?php wowc_component('product-card', ['post_id' => get_the_ID()]); ?>
            <?php endwhile; wp_reset_postdata(); ?>
        </div>
    </section>

    <section class="section section-soft">
        <div class="container">
            <div class="section-heading"><h2><?php esc_html_e('Shop by Category', 'wow-creations'); ?></h2></div>
            <div class="category-grid">
                <?php foreach (wowc_product_categories() as $term) : ?>
                    <?php wowc_component('category-card', ['term' => $term]); ?>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <div class="container"><?php wowc_component('packaging-promise'); ?></div>

    <section class="section container">
        <div class="section-heading"><h2><?php esc_html_e('Customer Love', 'wow-creations'); ?></h2></div>
        <div class="review-grid">
            <?php while ($reviews->have_posts()) : $reviews->the_post(); ?>
                <?php wowc_component('review-card', ['post_id' => get_the_ID()]); ?>
            <?php endwhile; wp_reset_postdata(); ?>
        </div>
    </section>

    <section class="section instagram-band">
        <div class="container">
            <p class="eyebrow">Instagram</p>
            <h2><?php esc_html_e('See daily drops on @wowcreations__', 'wow-creations'); ?></h2>
            <a class="btn btn--light" href="<?php echo esc_url(wowc_get_option('instagram_url', 'https://www.instagram.com/wowcreations__')); ?>" target="_blank" rel="noopener noreferrer"><?php esc_html_e('Follow on Instagram', 'wow-creations'); ?></a>
        </div>
    </section>
</main>
<?php get_footer(); ?>
