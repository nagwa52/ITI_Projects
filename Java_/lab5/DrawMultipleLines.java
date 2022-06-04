import java.awt.Graphics;
import java.awt.Color;
import java.awt.Point;
import java.applet.AudioClip;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.event.MouseMotionListener;

public class DrawMultipleLines extends java.applet.Applet
        implements MouseListener, MouseMotionListener {
    private final int MAXLINES = 10;
    private Point[] starts;
    private Point[] ends;
    private Point anchor;
    private Point currentpoint;
    private int currlines;
    private AudioClip tooMany;

//  allocate the array of Points, set the background color, load the error sound

    public void init() {
        starts = new Point[MAXLINES];
        ends = new Point[MAXLINES];
        setBackground(Color.white);
        currlines = 0;
        tooMany = getAudioClip(getCodeBase(),"bong.au");
        this.addMouseListener(this);
        this.addMouseMotionListener(this);
    }

//  start a new line when the user depresses the mouse

    public void mousePressed(MouseEvent e)
    {
        anchor = new Point(e.getX(),e.getY());
        repaint();
    }

//  draw the potential line as the user drags the mouse around

    public void mouseDragged(MouseEvent e)
    {
        currentpoint = new Point(e.getX(),e.getY());
        repaint();
    }
    public void mouseMoved(MouseEvent e) { }

//  add the new line when the user releases the mouse button

    public void mouseReleased(MouseEvent e)
    {
        if (currlines < MAXLINES)
            addline(e.getX(),e.getY());
        else {
            tooMany.play();
            currentpoint = null;
            repaint();
        }
    }
    public void mouseClicked(MouseEvent e) { }
    public void mouseEntered(MouseEvent e) { }
    public void mouseExited(MouseEvent e) { }

    void addline(int x, int y) {
        starts[currlines] = anchor;
        ends[currlines] = currentpoint;
        currlines++;
        currentpoint = null;
        repaint();
    }

//  draw the border and the existing lines, then draw the potential line in blue

    public void paint(Graphics g) {
        //int width = size().width;
        //int height = size().height;
        //g.drawRect(0,0,width-1,height-1);
        //g.drawRect(1,1,width-3,height-3);
        for (int i = 0 ; i < currlines ; i++)
            g.drawLine(starts[i].x,starts[i].y,ends[i].x,ends[i].y);

        g.setColor(Color.blue);
        if (currentpoint != null)
            g.drawLine(anchor.x,anchor.y,currentpoint.x,currentpoint.y);
    }

}