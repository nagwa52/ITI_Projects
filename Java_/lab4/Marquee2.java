import java.awt.*;
import java.applet.*;
import java.awt.FontMetrics;

public class Marquee2 extends Applet implements Runnable {
	private String display;
	private int x, y, flag,width;
	Thread t;


	public void init()
	{
		display = "Java world";
        Font font = new Font(display,Font.PLAIN,12);
             Canvas c = new Canvas();
        FontMetrics fm = c.getFontMetrics(font);
        width = fm.stringWidth(display);
		x =- width;
		y = 100;
		flag = 1;

		// creating thread
		t = new Thread(this, "MyThread");

		// start thread
		t.start();
	}

	// update the x co-ordinate
	public void update()
	{

		x = x + 20 * flag;
		if (x > 400 + width)
			x=-width;
		if (x < - width)
			flag = 1;
	}

	// run
	public void run()
	{

		while (true) {

			// Repainting the screen
			// calls the paint function
			repaint();

			update();
			try {

				// creating a pause of 1 second
				// so that the movement is recognizable
				Thread.sleep(200);
			}
			catch (InterruptedException ie) {
				System.out.println(ie);
			}
		}
	}

	// drawString
	public void paint(Graphics g)
	{
		g.drawString(display, x, y);
	}
}
