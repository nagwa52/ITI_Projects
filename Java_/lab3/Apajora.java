import java.awt.*;  
import java.applet.*;

public class Apajora extends Applet 
{   
	public void paint(Graphics g) 
	{   
		
		g.drawLine(50,350,100,100);
		g.drawLine(450,350,400,100);
		g.drawArc(50,300,400,100,0,-180);
		g.drawLine(200,500,240,400);
		g.drawLine(290,500,260,400);
		g.drawRect(100,500,300,30);
		g.drawOval(100,75,301,51);
		g.drawOval(200,175,101,201);
		g.drawOval(75,220,51,101);
		g.drawOval(375,220,51,101);
		g.setColor(new Color(255,255,153));
		g.fillOval(100,75,300,50);
		g.fillOval(200,175,100,200);
		g.fillOval(75,220,50,100);
		g.fillOval(375,220,50,100);
	}    
} 