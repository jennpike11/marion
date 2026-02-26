<?php
/**
 * 
 * PRC Startup Package standard footer
 *
 */

?>
<footer class="site-footer__wrapper">
	<div class="site-footer">
			<?php get_sidebar(); ?>
	</div><!-- .site-footer -->
	<div class="site-footer__legal">
		<div>&copy; <?php echo date("Y"); ?> <?php echo get_bloginfo( 'name' ); ?> | <span>Site by <a href="https://pikexdigital.com" target="_blank">Pike x Digital</a></span></div>
	</div>
</footer><!-- .site-footer__wrapper -->

<?php wp_footer(); ?>

	</body>
</html>
