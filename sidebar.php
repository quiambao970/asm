<div class="col-xl-4 col-lg-5">
    <div class="sidebar blog-sidebar">
        <div class="content-wrapper">
            <div class="sidebar__single sidebar__search">
                <form action="#" class="sidebar__search-form">
                    <input type="search" placeholder="Search here">
                    <button type="submit" aria-label="Search"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></button>
                </form>
            </div>
            <div class="sidebar__single sidebar__post">
                <h3 class="sidebar__title">Latest Posts</h3>
                <ul class="sidebar__post-list list-unstyled">
                    <?php
                    $args = array('numberposts' => '5');
                    $recent_posts = get_posts($args);

                    foreach ($recent_posts as $recent) {
                    ?>
                    <li>
                        <?php
                            $thumbnail_url = get_the_post_thumbnail_url($recent->ID, 'thumbnail');
                        ?>

                        <div class="sidebar__post-image" id="<?php echo esc_attr($recent->ID); ?>">
    <img src="<?php
        if (!empty($thumbnail_url)) {
            echo esc_url($thumbnail_url);
        } else {
            echo esc_url(get_template_directory_uri() . '/images/resource/news-1.jpg');
        } ?>" 
        alt="<?php 
        if (!empty($thumbnail_url)) {
            $thumb_id = get_post_thumbnail_id($recent->ID);
            $alt_text = get_post_meta($thumb_id, '_wp_attachment_image_alt', true);
            echo esc_attr($alt_text ? $alt_text : 'Default Alt Text');
        } else {
            echo esc_attr('Default Alt Text');
        } ?>">
</div>
                        <div class="sidebar__post-content">
                            <h3>
                                <!-- <span class="sidebar__post-content-meta">
                                                <i class="fas fa-user-circle"></i>
                                            <?php //echo $recent['post_author'];?>
                                            </span>  -->
                                <a
                                    href="<?php echo get_permalink($recent->ID); ?>"><?php echo $recent->post_title; ?></a>
                            </h3>
                        </div>
                    </li>
                    <?php
                    }
                    ?>
                </ul>
            </div>
        </div>
    </div>
</div>