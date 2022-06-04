/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dateapp;

import java.applet.Applet;
import java.awt.Graphics;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;


public class ApplicationApplet extends Applet implements Runnable {
Date d;
Thread th;
public void paint(Graphics g){
   // d = new Date();
g.drawString(d.toString(), 500, 500);
}
  @Override
    public void init() {
     th = new Thread(this);
     th.start();
            
        }
    @Override
    public void run() {
        while(true){
        d = new Date(); 
            try {
                Thread.sleep(1000);
            } catch (InterruptedException ex) {
                Logger.getLogger(ApplicationApplet.class.getName()).log(Level.SEVERE, null, ex);
            }
        this.repaint();
        }
       // throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
    
}
