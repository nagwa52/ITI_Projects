<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <?php
//-----------------------------------------------------------------------------------
// file_Exist 
//-----------------------------------------------------------------------------------
  /*$file="file.txt";
  if(file_exists($file)){
      echo "the file $file is here";
      file_put_contents($file,"hi it is for the first time");
  }
  else{
    echo "the file $file is Not  here"; 
  }
  */
//-----------------------------------------------------------------------------------
// file is writable
//-----------------------------------------------------------------------------------
/*$file="file.txt";
if(is_writable($file)){
    echo "the file $file is here";
    file_put_contents($file,"hi it is for the first time");
}
else{
  echo "the file $file is Not  here"; 
  file_put_contents($file,"hi it is for the first time"); // it will create the file if it is not exist
}

//-----------------------------------------------------------------------------------
// FOpen file fOpen(filename,mode)
//-----------------------------------------------------------------------------------
// Modes:
// r: Read Only Starting From Beginning Of The File [File Must Be Exist]
// r+: Read & Write Starting From Beginning Of The File [File Must Be Exist]
// w: Write Only [Open & Clear The Content] + [Creat The File If Not Exist]
// w+: Write & Read [Open & Clear The Content] + [Creat The File If Not Exist]
// a: Write Only [Open & Write To The Content] + [Creat The File Not Exist]
// a+: Write & Read [Open & Write To The Content] + [Creat The File Not Exist]
// x: Write Only [creat A New File] + [File Must Not Be Exist Or Give Error]
// x+: Write & Read [creat A New File] + [File Must Not Be Exist Or Give Error]
//-----------------------------------------------------------------------------------
$file ="file.txt";
$fileHandle =fopen($file,'r');

//-----------------------------------------------------------------------------------
// fread file fread(openedFile,lengthToBeRead)
// fWrite (openedfile,string)
// fSeek(handle,ossdet,whence)
//-----------------------------------------------------------------------------------
$fileHandle=fopen("file.txt",'r');
$fileRead =fread($fileHandle,27);
$fileRead =fread($fileHandle,filesize("file.txt"));
echo $fileRead;
*/
//=================================================================================================================================
 
 ?>  
</body>
</html>