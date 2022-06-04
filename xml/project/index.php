<?php

session_start();?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" type="text/css" href="form.css" />
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    </head>
<body>
   
            <?php
            error_reporting(E_ALL ^ E_NOTICE);  
         require_once'Functions.php';
         $xml = simplexml_load_file('sample.xml');
            $fun = new Functions();
            if(array_key_exists('insert', $_POST)) {
                $fun->insertData();
            }
           
            // else if (array_key_exists('edit', $_POST)){
            //     header('Location:editForm.php');
            // }
           
            ?>
             <div class="new-user">
            <form method="POST" action=<?php $_SERVER['PHP_SELF']?>>
            <label >Member ID</label>
			<input type="text" class="form-control" name="id" value="<?php echo $member->id ?>"  />
		        <label>Name: </label>
        <input type="text" name="Name" required="required" value="<?php echo $member->Name ?>" />
            <label>Phone: </label>
      <input type="text" name="Phone" required="required" value="<?php echo $member->Phone ?>" />
            <label>Address: </label>
       <input type="text" name="Address"  required="required" value="<?php echo $member->Address ?>" />
         <label>Email: </label>
        <input type="text" name="Email"  required="required" value="<?php echo $member->Email ?>"/>
        <div class="last-contain">
          <input type="submit" value="insert" name="insert" />
        </div>
      
      </form>
        </div>
        <form class="second-form" method="POST" action=<?php $_SERVER['PHP_SELF']?>>
      <input id="searchInput " name="searchInput" class="form-control" placeholder="tap to search " value=""/>
           
           <input type="submit" value="search" name="search" />
      </form>
      <form method="POST">
            <button class="btn btn-outline-secondary mx-4" type="submit" name="next" >&lt; NEXT</button>
            <button class="btn btn-outline-secondary " type="submit" name="prev" >PREV &gt;</button>
        </form>
      <div class="search-output"><?php
       if(array_key_exists('search', $_POST)) {
        $fun->searchData();
    }
      ?></div>
        <div class="col-md-8">
       <table class="table table-bordered" >	
                <thead class="alert-info">
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
 
                    <?php
                   
                        if (isset($_GET['action'])) {
                         $members = simplexml_load_file('sample.xml');
                        $id = $_GET['id'];
                        $position = 0;
                          $i = 0;
                 
                    foreach($members->member as $member){
                        if($member->id == $id){
                            $position = $i;
                            break;
                        }
                        $i++;
                    }
                     unset($members->member[$position]);
                    file_put_contents('sample.xml', $members->asXML());
                    header('location: index.php');
                 
                        }
                        if(isset($_POST['prev']) && $_SESSION["id"] > 0)
                        {
                           $_SESSION['id'] = --$id ;
                           foreach($members as $member)
                           {
                               if($member['id'] == $_SESSION['id'])
                               {
                                echo "<center>
                                <tr>
                                <td> $member->id </td>
                                <td>  $member->Name </td>
                                <td>  $member->Phone</td>
                                <td>  $member->Address </td>
                                <td>  $member->Email </td>
                                </tr> 
                                </center>";
                                
                               }
                           }
                        }
                    
                        $xml = simplexml_load_file('sample.xml');
                        foreach($xml->member as $member){?>
                          
                                <tr>
                                    <td><?php echo $member->id; ?></td>
                                    <td><?php echo $member->Name; ?></td>
                                    <td><?php echo $member->Phone; ?></td>
                                    <td><?php echo $member->Address; ?></td>
                                    <td><?php echo $member->Email; ?></td>
                                    <td>
                                    <a href="editForm.php?id=<?php echo $member->id; ?>">Edit</a>
                                    <a href="index.php?action=delete&id=<?php echo $member->id; ?>"
                                class="btn btn-danger " onclick="return confirm ('Are you sure you want to ?')">Delete</a>
                                  
                                </td>
                                </tr>
                       <?php }?>
                        
             
				
			</tbody>
		</table>
	</div>
<script src="js/jquery-3.2.1.min.js"></script>
<script src="j
    
                    ?>
                </tbody>
            </table>
        </div>
    </div>
    </div>
</body>	
</html>