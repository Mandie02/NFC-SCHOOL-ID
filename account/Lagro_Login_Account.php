<?php
    include './database/function.php';

    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lagro NFC ID</title>
</head>
<body>
    <form action="/src/DirectID.php" method="post">
        <div class="title_header">
            <h1>LAGRO HIGH SCHOOL</h1>
            <h3>NFC ALTERNATIVE SCHOOL ID</h3>
        </div>

        <div class="login_container">
            <div class="headerText">
                <h1>LAGRO HIGH ID</h1>

                <div class="input_field">
                    <label for="username">USERNAME: </label>
                    <input type="text" name="username" id="username" placeholder="USERNAME">
                    <label for="password">PASSWORD: </label>
                    <input type="password" name="password" id="password" placeholder="********">
                </div>

                <div class="login_buttons">
                    <div class="login">
                        <button type="submit" href="/ID_CARD/idCard.php">Log-In</button>
                    </div>
                </div>
            </div>

            <div class="create_accountDIV">
                <p>Don't have an Account yet?</p>
                <a href="Lagro_Create_Account.html">Create Account</a>
            </div>
        </div>

    </form>
</body>
</html>