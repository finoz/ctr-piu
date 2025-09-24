<?php
/**
 * Professional Block Registration
 */

function ficus_professional_block_init() {
    register_block_type(__DIR__);
}
add_action('init', 'ficus_professional_block_init');