<?php
/** @package WOW_Creations */
$founder = (string) wowc_get_option('founder_name', 'Jyoti Aggarwal');
?>
<section class="packaging-promise" aria-label="<?php esc_attr_e('WOW Packaging Promise', 'wow-creations'); ?>">
    <div class="promise-icon">✦</div>
    <div>
        <p class="eyebrow"><?php esc_html_e('WOW Packaging Promise', 'wow-creations'); ?></p>
        <h2><?php esc_html_e('Delivered in WOW Creations branded packaging.', 'wow-creations'); ?></h2>
        <p><?php echo esc_html(sprintf(__('Curated by %s.', 'wow-creations'), $founder)); ?></p>
    </div>
</section>
