<?php
/**
 * Professionals Grid Block Registration
 */

function ficus_professionals_grid_block_init() {
    register_block_type(__DIR__);
}
add_action('init', 'ficus_professionals_grid_block_init');