<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
</head>
<body>
    <form>
        <input type="text" name="num1" placeholder="Number 1">
        <input type="text" name="num2" placeholder="Number 2">
        <select>
            <option name='operator' value='None'>None</option>
            <option name='operator' value='Add'>Add</option>
            <option name='operator' value='Subtraction'>Subtraction</option>
            <option name='operator' value='Multiply'>Multiply</option>
            <option name='operator' value='Divide'>Divide</option>
        </select>
        <br>
        <br>
        <button type="submit" name="submit" value="submit">Calculate</button>
    </form>
    <p>The answer is:</p>
    <?php
        if (isset($_GET['submit'])) {
            $result1 = $_GET['num1'];
            $result2 = $_GET['num2'];
            $operator = $_GET['operator'];
            switch ($operator) {
                case None:
                    echo "You need to select a method..!";
                break;
                case Add:
                    echo $result1 + $result2;
                break;
                case Subtraction:
                    echo $result1 - $result2;
                break;
                case Multiply:
                    echo $result1 * $result2;
                break;
                case Divide:
                    echo $result1 / $result2;
                break;


            }
        }

    ?>
</body>
</html>
