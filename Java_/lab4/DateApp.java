import java.applet.*;
import java.awt.*;
import java.util.*;
import java.text.*;

public class DateApp extends Applet implements Runnable{
	Date d;
	Thread th;
	
	public void init(){
		d=new Date();
		th =new Thread(this);
		th.start();
	}
	
	public void paint (Graphics g){
        
            g.drawString(d.toString(), 50, 100);
		
	}
	public void run(){
		while (true){
			d=new Date();     
			try{
                   th.sleep(1000);  
             }
            catch(InterruptedException e){}
			repaint();
			
			
		}
		
}
		

	
	
	
	
	
	
	
	
	
	
}