<?php
if (isset($_GET['submit'])) {
  // Get the values from the form
  $num1 = $_GET['num1'];
  $num2 = $_GET['num2'];
  $operator = $_GET['operator'];

  // Check which operator was chosen and perform the corresponding calculation
  if ($operator == 'add') {
    $result = $num1 + $num2;
  } elseif ($operator == 'subtract') {
    $result = $num1 - $num2;
  } elseif ($operator == 'multiply') {
    $result = $num1 * $num2;
  } elseif ($operator == 'divide') {
    $result = $num1 / $num2;
  }
} ?>

<form action="" method="GET">
  <input type="text" name="num1">
  <select name="operator">
    <option value="add">+</option>
    <option value="subtract">-</option>
    <option value="multiply">*</option>
    <option value="divide">/</option>
  </select>
  <input type="text" name="num2">
  <input type="submit" name="submit" value="Calculate">
</form>

<?php // If the form has been submitted, display the result
if (isset($result)) {
  echo "Result: $result";
}
?>