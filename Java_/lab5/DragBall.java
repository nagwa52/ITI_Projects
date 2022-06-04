import java.applet.*;
import java.awt.*;
import java.awt.event.*;

public class DragBall extends Applet{
	
	int x;
	int y;
	int r=25;

	

	public void init(){
	    x=250;
	    y=250;
			
        this.requestFocus();
		this.addMouseListener(new MouseAdapter() {
		public void mouseClicked(MouseEvent e) { 
		    x=e.getX();
			y=e.getY();
			repaint();
		}
		public void mousePressed(MouseEvent e) { 
		    
		    x=e.getX();
			y=e.getY();
			repaint();  
		}
	    public void mouseReleased(MouseEvent e) { 
		    
		    x=e.getX();
			y=e.getY();
			repaint();  
		}
		});
		this.addMouseMotionListener(new MouseAdapter(){
	    public void mouseDragged(MouseEvent e) { 
		    
		    x=e.getX();
			y=e.getY();
			repaint(); 
		} 
	    });
	}	
		
	
	public void paint (Graphics g){
		 g.setColor(Color.red);
		 g.drawOval(x,y,r*2,r*2);
		 g.fillOval(x,y,r*2,r*2);
	
	}	
}