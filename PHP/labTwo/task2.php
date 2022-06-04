
<html>

<head>
    <meta name="viewport" content="width=device-width , initial-scale=1">
    <title> contact form </title>

    <style>
    .container {
        margin: 20px auto;
        max-width: 500px;
        max-height: 500px;
    }
    </style>
</head>

<body>
    <div class="container">
        <h3> Contact Form </h3>

        <div id="after_submit">
            <?php
if(isset($formErrors)){
foreach($formErrors as $error){
    echo $error . "<br>";
}
}



?>
        </div>
        <form id="contact_form" action="log.php" method="POST" enctype="multipart/form-data">

            <div class="row">
                <label class="required" for="name">Your name:</label><br />
                <input id="name" class="input" name="name" type="text" placeholder="enter tour name"
                    value="<?php if(isset($userName)){echo $userName;}?>" size="30" /><br />

            </div>
            <div class="row">
                <label class="required" for="email">Your email:</label><br />
                <input id="email" class="input" name="email" type="email" placeholder="enter your email"
                    <?php if(isset($email)){echo $email;}?>value="" size="30" /><br />

            </div>
            <div class="row">
                <label class="required" for="message">Your message:</label><br />
                <textarea id="message" class="input" placeholder="Your message" name="message" rows="7"
                    cols="30"><?php if(isset($message)){echo $message;}?></textarea><br />

            </div>

            <input id="submit" name="submit" type="submit" value="Send email" />
            <input id="clear" name="clear" type="reset" value="clear form" />

        </form>
    </div>
</body>

</html>