import java.awt.*;  
import java.applet.*;
import java.awt.event.*;

public class BallMoves extends Applet implements Runnable
{
	Thread th; 
	int x = 200, y = 0, r = 10, xl = 10, yl = 10,runnable=0;
    Button bstart,bpause;
	
	public void init()
	{
        bstart= new Button("Start");
       bpause= new Button("Pause");
        bstart.addActionListener((ActionEvent e)->{
            runnable=1;

        });
        bpause.addActionListener((ActionEvent e1)->{
           runnable=0; 
        });
        add(bstart);
        add(bpause);
		th = new Thread(this);
		th.start();
	}
	
	public void paint(Graphics g)
	{
		g.setColor(Color.red);
		g.fillOval(x, y , r * 2, r * 2);
	}
	public void run(){
    while(true){
	if(runnable==1){
        if ((x + xl < 0) || (x + 2*r + xl > getWidth())) xl = -xl;
        if ((y + yl < 0) || (y + 2*r + yl > getHeight())) yl = -yl;
        x += xl;
        y += yl;
        repaint();  
    }
    try{th.sleep(100);}  
			catch(Exception e){} 
}}
   
   
	
}
