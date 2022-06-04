<?php
function fact($number) {
  if (!is_numeric($number) || $number === false || $number < 0 || is_double($number)) {
    return null;
  }
  if ($number === 1 || $number === 0) {
    return 1;
  }
  return $number * fact( $number - 1 );
}
