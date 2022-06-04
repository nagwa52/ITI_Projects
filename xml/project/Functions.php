<?php
class Functions{
    function insertData(){
        if(ISSET($_POST['insert'])){
     
            if(file_exists("sample.xml")){
                $members = simplexml_load_file('sample.xml');
                $member = $members->addChild('member');
                $member->addChild('id', $_POST['id']);
                $member->addChild('Name', $_POST['Name']);
                $member->addChild('Phone', $_POST['Phone']);
                $member->addChild('Address', $_POST['Address']);
                $member->addChild('Email', $_POST['Email']);
                file_put_contents('sample.xml', $members->asXML());
                header('location:index.php');
            }
        }
    }
    function updateData(){
        if(ISSET($_POST['edit'])){
            $members = simplexml_load_file('sample.xml');
            foreach($members->member as $member){
                if($member->id == $_POST['id']){
                    $member->Name = $_POST['Name'];
                    $member->Phone = $_POST['Phone'];
                    $member->Address = $_POST['Address'];
                    $member->Email = $_POST['Email'];
                    break;
                }
            }
     
            file_put_contents('sample.xml', $members->asXML());
            header("location: index.php");
        }
    }
    function deleteData(){
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
    }
    function searchData(){
        $members = simplexml_load_file('sample.xml');
     foreach ($members as $member) {
                if (strcmp($member->Name, $_POST['searchInput']) == 0) {
                    echo "<center>
                    <tr>
                    <td> $member->id </td>
                    <td> $member->Name </td>
                    <td> $member->Phone </td>
                    <td> $member->Address </td>
                    <td> $member->Email </td>
                    </tr> 
                    </center>";
                }
                
             }
             
        
         
    }
}

 
 
?>