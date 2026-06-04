<?php
/** @package WOW_Creations */
$post_id = isset($args['post_id']) ? absint($args['post_id']) : get_the_ID();
?>
<article class="product-card">
    <a class="product-card__image" href="<?php echo esc_url(get_permalink($post_id)); ?>">
        <?php if (has_post_thumbnail($post_id)) : ?>
            <?php echo get_the_post_thumbnail($post_id, 'medium_large', ['loading' => 'lazy']); ?>
        <?php else : ?>
            <span><?php esc_html_e('WOW Creations', 'wow-creations'); ?></span>
        <?php endif; ?>
    </a>
    <div class="product-card__body">
        <p class="eyebrow"><?php echo esc_html(wowc_inventory_status($post_id)); ?></p>
        <h3><a href="<?php echo esc_url(get_permalink($post_id)); ?>"><?php echo esc_html(get_the_title($post_id)); ?></a></h3>
        <p class="price"><?php echo esc_html(wowc_product_price($post_id)); ?></p>
        <a class="btn btn--small" href="<?php echo esc_url(wowc_whatsapp_url($post_id)); ?>" target="_blank" rel="noopener noreferrer"><?php esc_html_e('Reserve on WhatsApp', 'wow-creations'); ?></a>
    </div>
</article>
