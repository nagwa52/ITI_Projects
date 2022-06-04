<?php
// check if user comming from post request

if($_SERVER['REQUEST_METHOD']=='POST'){
    $userName =$_POST['name'] ;
    $email = $_POST['email'];
    $message =$_POST['message'];
    $formErrors = array();
    if (strlen($userName)>100){
        $formErrors[] ="* Username must be less than 100 character ";
    }
    if (strlen($message) > 255){
        $formErrors[] ="* Message can't be greater than 255 character";
    }
   else{
    $file ="file.txt";
    $log_file_data =  date("F j Y g:i a")."," .$_SERVER['REMOTE_ADDR'] ."," . $email. ",".$userName ;
    file_put_contents($file,$log_file_data . "\n", FILE_APPEND);
    $formErrors[] ="Thank you for contacting Us"."<br>"."<br>" ."user name : ". $userName ."<br>" ."Email : ". $email ."<br>". "the Message is : " . $message ;  
   }
}
?>
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
        <form id="contact_form" action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST" enctype="multipart/form-data">

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