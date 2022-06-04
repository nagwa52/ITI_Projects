import java.awt.*;
import java.applet.*;
public class FontList extends Applet {
   public void paint(Graphics g) 
	{   
		String[] fonts = GraphicsEnvironment.getLocalGraphicsEnvironment().getAvailableFontFamilyNames();
		
		for(int i=0; i<fonts.length; i++)
		{
			Font font = new Font(fonts[i], Font.BOLD, 14);
			g.setFont(font);
			g.drawString(fonts[i], 50, (100+15*i));
		}
	} 
}