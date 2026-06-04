<?php
/** @package WOW_Creations */
$post_id = isset($args['post_id']) ? absint($args['post_id']) : get_the_ID();
$rating = (int) wowc_field('review_rating', $post_id, 5);
?>
<article class="review-card">
    <div class="stars" aria-label="<?php echo esc_attr(sprintf(__('%d star review', 'wow-creations'), $rating)); ?>"><?php echo esc_html(str_repeat('★', max(1, min(5, $rating)))); ?></div>
    <blockquote><?php echo wp_kses_post(wpautop(get_post_field('post_content', $post_id))); ?></blockquote>
    <p class="review-author">— <?php echo esc_html(get_the_title($post_id)); ?></p>
</article>
