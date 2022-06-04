import java.applet.*; 
import java.awt.*;
public class ListJavaFonts extends Applet {
 public  void paint(Graphics g) {
	String[] fonts = Toolkit.getDefaultToolkit().getFontList();
		
		for(int i=0; i<fonts.length; i++)
		{
			Font font = new Font(fonts[i], Font.BOLD, 14);
			g.setFont(font);
			g.drawString(fonts[i], 50, (100+15*i));
  }
}
}
