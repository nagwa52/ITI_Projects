/*<APPLET code = "GFG.class" width = 500 height = 500 >
</APPLET>
*/

// Java Code to implement Moving text using
// applet and thread.

import java.awt.*;
import java.applet.*;

public class DisplayMarquee extends Applet implements Runnable {
	private String display;
	private int x, y, flag;
	Thread t;

	// initializing
	// called when the applet is
	// started.
	public void init()
	{
		display = "Java world";
		x = 100;
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
		if (x > 300)
			x=0;
		if (x < 100)
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
