<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $min = floatval($_POST['min']);
    $max = floatval($_POST['max']);
    $count = intval($_POST['count']);
    $decimalPlaces = intval($_POST['decimal']);

    if ($min > $max) {
        echo json_encode(['error' => 'Minimum value cannot be greater than maximum value.']);
        exit;
    }

    if ($count < 1 || $count > 999) {
        echo json_encode(['error' => 'Number of random numbers must be between 1 and 100.']);
        exit;
    }

    $randomNumbers = [];
    for ($i = 0; $i < $count; $i++) {
        $randomNumber = mt_rand($min * pow(10, $decimalPlaces), $max * pow(10, $decimalPlaces)) / pow(10, $decimalPlaces);
        $randomNumbers[] = round($randomNumber, $decimalPlaces);
    }

    echo json_encode(['randomNumbers' => $randomNumbers]);
} else {
    echo json_encode(['error' => 'Invalid request method.']);
}
?>