<?php
$allowed_referer = 'https://4fc560c5.sagarr.pages.dev/'; // Replace with your allowed website

if (isset($_SERVER['HTTP_REFERER'])) {
    $referer = $_SERVER['HTTP_REFERER'];
    if (strpos($referer, $allowed_referer) === 0) {
        // Access allowed
        echo "Welcome to the page!";
    } else {
        // Access denied
        echo "Access denied!";
        exit;
    }
} else {
    // No referer
    echo "Access denied!";
    exit;
}
?>
