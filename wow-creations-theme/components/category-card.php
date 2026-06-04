<?php
/** @package WOW_Creations */
$term = $args['term'] ?? null;
if (! $term instanceof WP_Term) {
    return;
}
?>
<a class="category-card" href="<?php echo esc_url(get_term_link($term)); ?>">
    <span><?php echo esc_html($term->name); ?></span>
    <small><?php echo esc_html(sprintf(_n('%s style', '%s styles', (int) $term->count, 'wow-creations'), number_format_i18n((int) $term->count))); ?></small>
</a>
