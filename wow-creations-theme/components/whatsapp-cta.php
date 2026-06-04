<?php
/** @package WOW_Creations */
$post_id = isset($args['post_id']) ? absint($args['post_id']) : get_the_ID();
$label = $args['label'] ?? __('Reserve on WhatsApp', 'wow-creations');
?>
<a class="whatsapp-cta" href="<?php echo esc_url(wowc_whatsapp_url($post_id)); ?>" target="_blank" rel="noopener noreferrer">
    <span><?php echo esc_html($label); ?></span>
</a>
