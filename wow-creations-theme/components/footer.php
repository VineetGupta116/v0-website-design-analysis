<?php
/** @package WOW_Creations */
$instagram = (string) wowc_get_option('instagram_url', 'https://www.instagram.com/wowcreations__');
$email = (string) wowc_get_option('business_email', 'hello@wowcreations.in');
$phone = (string) wowc_get_option('business_phone', '');
?>
<footer class="site-footer">
    <div class="container footer-grid">
        <div>
            <h2>WOW Creations</h2>
            <p><?php esc_html_e('Elegant fashion collections curated by Jyoti Aggarwal.', 'wow-creations'); ?></p>
        </div>
        <div>
            <h3><?php esc_html_e('Shop', 'wow-creations'); ?></h3>
            <ul>
                <li><a href="<?php echo esc_url(get_post_type_archive_link('products') ?: home_url('/shop/')); ?>"><?php esc_html_e('New Arrivals', 'wow-creations'); ?></a></li>
                <li><a href="<?php echo esc_url(home_url('/shipping-returns/')); ?>"><?php esc_html_e('Shipping & Returns', 'wow-creations'); ?></a></li>
                <li><a href="<?php echo esc_url(home_url('/track-order/')); ?>"><?php esc_html_e('Track Order', 'wow-creations'); ?></a></li>
            </ul>
        </div>
        <div>
            <h3><?php esc_html_e('Contact', 'wow-creations'); ?></h3>
            <p><a href="<?php echo esc_url($instagram); ?>" target="_blank" rel="noopener noreferrer">@wowcreations__</a></p>
            <?php if ($email) : ?><p><a href="mailto:<?php echo esc_attr($email); ?>"><?php echo esc_html($email); ?></a></p><?php endif; ?>
            <?php if ($phone) : ?><p><a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/', '', $phone)); ?>"><?php echo esc_html($phone); ?></a></p><?php endif; ?>
        </div>
    </div>
    <div class="footer-bottom container">© <?php echo esc_html(date_i18n('Y')); ?> WOW Creations. <?php esc_html_e('All rights reserved.', 'wow-creations'); ?></div>
</footer>
