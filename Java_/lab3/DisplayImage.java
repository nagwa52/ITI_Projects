import java.awt.*;  
import java.applet.*; 
  
  
public class DisplayImage extends Applet {  
  
  Image picture;  
 

  
  public void init() {  
    picture = getImage(getDocumentBase(),"cup.jpg");  
  }  
    
  public void paint(Graphics g) {  
    // g.drawImage(picture, 200,200, this);  
    g.drawImage(picture, 0, 0, getWidth(), getHeight(), this);
    
  }  
  

      
  } 
  