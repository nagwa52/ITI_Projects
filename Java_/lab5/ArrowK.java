import java.awt.*;
import java.applet.*;
import java.awt.event.*;

public class ArrowK extends Applet implements KeyListener
{
    int x = 200, y = 200;
    String display = "Java world";

    public void init ()
    {
    this.requestFocus ();
    addKeyListener (this);

    setSize (800, 550);
    } // init method


    public void paint (Graphics g)
    {
    g.drawString(display, x, y);
    } // paint method

    public void keyPressed (KeyEvent e)
    {
    if (e.getKeyCode()==e.VK_UP)
    {
        y = y-10;
    }
    if (e.getKeyCode()==e.VK_DOWN)
    {
        y = y+10;
    }
    if (e.getKeyCode()==e.VK_LEFT)
    {
        x = x-10;
    }
    if (e.getKeyCode()==e.VK_RIGHT)
    {
        x = x+10;
    }

    repaint ();
    }

    public void keyReleased (KeyEvent e)
    {
    }


    @Override
    public void keyTyped(KeyEvent e) {
        // TODO Auto-generated method stub
        
    }


    // @Override
    // public void keyTyped(KeyEvent e) {
    //     // TODO Auto-generated method stub
        
    // }

} 