<?php
/**
 * Fallback template.
 *
 * @package WOW_Creations
 */
get_header();
?>
<main id="main" class="container archive-page">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <article <?php post_class('page-content'); ?>>
            <h1><?php the_title(); ?></h1>
            <?php the_content(); ?>
        </article>
    <?php endwhile; the_posts_pagination(); else : ?>
        <p><?php esc_html_e('Content coming soon.', 'wow-creations'); ?></p>
    <?php endif; ?>
</main>
<?php get_footer(); ?>
