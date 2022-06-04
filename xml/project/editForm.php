<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" type="text/css" href="form.css" />
    </head>
<body>
<div class="new-user">
<?php
    error_reporting(E_ALL ^ E_NOTICE);  
    require_once'Functions.php';
       $fun = new Functions();
         $xml = simplexml_load_file('sample.xml');
         $id = $_GET['id'];
         if(array_key_exists('edit', $_POST)) {
            $fun->updateData();  
        }
          
         
            foreach ($xml->member as $member) {
              if ($member->id == $_GET['id']) {
                     $id = $member->id;
                     $Name = $member->Name;
                    $Phone = $member->Phone;
                    $Address = $member->Address;
                    $Email = $member->Email;
                    break;
                }
            }
            ?>

            <form method="POST" action=<?php $_SERVER['PHP_SELF']?>>
            <label >Member ID</label>
			<input type="text" class="form-control" name="id" readonly value="<?php echo $id; ?>"  />
		 <label>Name: </label>
        <input type="text" name="Name"  value="<?php echo $Name; ?>" />
       <label>Phone: </label>
      <input type="text" name="Phone" value="<?php echo $Phone; ?>" />
       <label>Address: </label>
       <input type="text" name="Address"  value="<?php echo $Address; ?>" />
         <label>Email: </label>
        <input type="text" name="Email"  value="<?php echo $Email; ?>"/>
        <div class="last-contain">
         <input type="submit" value="edit" name="edit"/>
        </div>
      </form>  
</body>	
</html>
