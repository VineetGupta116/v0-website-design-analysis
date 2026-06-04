<?php
/** @package WOW_Creations */
get_header();
the_post();
$post_id = get_the_ID();
$gallery = wowc_field('product_gallery', $post_id, []);
$highlights = wowc_field('product_highlights', $post_id, '');
$related = wowc_related_products_query($post_id, 4);
?>
<main id="main" class="container product-page">
    <article class="product-detail">
        <section class="product-gallery">
            <div class="gallery-main">
                <?php if (has_post_thumbnail()) : the_post_thumbnail('large'); else : ?><span>WOW Creations</span><?php endif; ?>
            </div>
            <?php if (is_array($gallery) && ! empty($gallery)) : ?>
                <div class="gallery-thumbs">
                    <?php foreach ($gallery as $image) : $url = wowc_image_url($image, 'medium'); if (! $url) { continue; } ?>
                        <img src="<?php echo esc_url($url); ?>" alt="<?php echo esc_attr(get_the_title()); ?>" loading="lazy">
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>
        </section>
        <section class="product-summary">
            <p class="eyebrow"><?php echo esc_html(wowc_inventory_status($post_id)); ?></p>
            <h1><?php the_title(); ?></h1>
            <p class="product-price"><?php echo esc_html(wowc_product_price($post_id)); ?></p>
            <?php wowc_component('whatsapp-cta', ['post_id' => $post_id]); ?>
            <?php if ($highlights) : ?>
                <div class="product-block"><h2><?php esc_html_e('Highlights', 'wow-creations'); ?></h2><?php echo wp_kses_post(wpautop((string) $highlights)); ?></div>
            <?php endif; ?>
            <div class="product-block"><h2><?php esc_html_e('Description', 'wow-creations'); ?></h2><?php echo wp_kses_post(wpautop((string) wowc_field('product_description', $post_id, get_the_content()))); ?></div>
            <dl class="attributes">
                <?php foreach (['fabric' => 'Fabric', 'color' => 'Color', 'size' => 'Size', 'sku' => 'SKU'] as $key => $label) : $value = wowc_field($key, $post_id); if (! $value) { continue; } ?>
                    <div><dt><?php echo esc_html($label); ?></dt><dd><?php echo esc_html((string) $value); ?></dd></div>
                <?php endforeach; ?>
            </dl>
        </section>
    </article>
    <?php wowc_component('packaging-promise'); ?>
    <section class="section">
        <div class="section-heading"><h2><?php esc_html_e('Related Products', 'wow-creations'); ?></h2></div>
        <div class="product-grid">
            <?php while ($related->have_posts()) : $related->the_post(); ?>
                <?php wowc_component('product-card', ['post_id' => get_the_ID()]); ?>
            <?php endwhile; wp_reset_postdata(); ?>
        </div>
    </section>
</main>
<div class="sticky-mobile-cta"><?php wowc_component('whatsapp-cta', ['post_id' => $post_id]); ?></div>
<?php get_footer(); ?>
