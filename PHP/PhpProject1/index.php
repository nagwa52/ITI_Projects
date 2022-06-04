
        <?php
    //  require_once('vendor/autoload.php');
      spl_autoload_register(function($class){
          require_once './Model/' .$class .'.php';
      });
    //  $myUser = new User("nagwaTalaat","nagwa1234","nagwa52@gmail.com");
     //  $myUser2 = new User("nagwaTalaat","nagwa1234","nagwa52@gmail.com");
//       echo '<pre>';
//      var_dump($myUser);
//       echo '</pre>';
       $newapple = new Apple("njjj","jjjj");
        echo '<pre>';
      var_dump($newapple);
       echo '</pre>';
        ?>
   
