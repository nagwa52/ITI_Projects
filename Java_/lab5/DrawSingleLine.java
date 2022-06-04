 import java.applet.*;
import java.awt.*;
import java.awt.event.*;

public class DrawSingleLine extends Applet{
	int startpointX, endpointX;
    int startpointY, endpointY;


	

	public void init(){
         
	    startpointX=0;
	    startpointY=0;
			
        this.requestFocus();
		this.addMouseListener(new MouseAdapter() {
		public void mouseClicked(MouseEvent e) { 
            startpointX =e.getX();
			startpointY=e.getY();
			repaint();
		}
		public void mousePressed(MouseEvent e) { 
		    
		    startpointX=e.getX();
			startpointY=e.getY();
			repaint();  
		}
	    public void mouseReleased(MouseEvent e) { 
		    
		    endpointX=e.getX();
			endpointY=e.getY();
			repaint();  
		}
		});
		this.addMouseMotionListener(new MouseAdapter(){
	    public void mouseDragged(MouseEvent e) { 
		    
		    endpointX=e.getX();
			endpointY=e.getY();
			repaint(); 
		} 
	    });
	}	
		
	
	public void paint (Graphics g){
		 g.setColor(Color.BLACK);
         g.drawLine(startpointX,startpointY,endpointX,endpointY);
	
	}	
}