<?php
/** @package WOW_Creations */
$instagram = (string) wowc_get_option('instagram_url', 'https://www.instagram.com/wowcreations__');
?>
<header class="site-header">
    <a class="skip-link" href="#main"><?php esc_html_e('Skip to content', 'wow-creations'); ?></a>
    <div class="container header-inner">
        <a class="brand" href="<?php echo esc_url(home_url('/')); ?>" aria-label="<?php esc_attr_e('WOW Creations home', 'wow-creations'); ?>">
            <?php if (has_custom_logo()) : ?>
                <?php the_custom_logo(); ?>
            <?php else : ?>
                <span class="brand-mark">WOW</span><span class="brand-name">Creations</span>
            <?php endif; ?>
        </a>
        <nav class="primary-nav" aria-label="<?php esc_attr_e('Primary navigation', 'wow-creations'); ?>">
            <?php
            wp_nav_menu([
                'theme_location' => 'primary',
                'container'      => false,
                'fallback_cb'    => 'wowc_default_menu',
                'menu_class'     => 'menu',
            ]);
            ?>
        </nav>
        <a class="header-instagram" href="<?php echo esc_url($instagram); ?>" target="_blank" rel="noopener noreferrer">Instagram</a>
    </div>
</header>
<?php
function wowc_default_menu(): void
{
    $items = [
        __('Home', 'wow-creations') => home_url('/'),
        __('Shop', 'wow-creations') => get_post_type_archive_link('products') ?: home_url('/shop/'),
        __('About', 'wow-creations') => home_url('/about/'),
        __('FAQ', 'wow-creations') => home_url('/faq/'),
        __('Contact', 'wow-creations') => home_url('/contact/'),
    ];
    echo '<ul class="menu">';
    foreach ($items as $label => $url) {
        echo '<li><a href="' . esc_url($url) . '">' . esc_html($label) . '</a></li>';
    }
    echo '</ul>';
}
