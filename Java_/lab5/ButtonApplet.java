import java.awt.*;  
import java.awt.event.*; 
import java.applet.*;
public class ButtonApplet extends Applet {
    int x=0;
    Button bin,bdec ;
    public void init(){
        bin= new Button("increment");
        bdec= new Button("decrement");
        bin.addActionListener((ActionEvent e)->{
            x++;
            repaint();
        });
           bdec.addActionListener((ActionEvent e1)->{
            x--;
            repaint();
        });
        add(bin);
        add(bdec);
        }
        public void paint(Graphics g){
            g.drawString ("click count is" + x,50,200);
        }
        
}
  