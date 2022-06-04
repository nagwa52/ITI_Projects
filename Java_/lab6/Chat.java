import javax.swing.*;
import java.io.*;
import java.net.*;
import java.awt.event.*;
import java.awt.*;

public class Chat extends JFrame implements Runnable {
  Socket mySocket;
DataInputStream dis;
PrintStream ps;
JTextArea ta = new JTextArea (20,50);
JScrollPane scroll= new JScrollPane(ta);
JTextField tf = new JTextField(40);
JButton okb= new JButton("send");

public Chat () {
    try{
        mySocket = new Socket("127.0.0.1",8000);
        dis = new DataInputStream(mySocket.getInputStream());
        ps = new PrintStream(mySocket.getOutputStream());

       

    }
    catch (IOException ex) {
            ex.printStackTrace();
        }
        
this.setLayout(new FlowLayout());
okb.addActionListener(e->{
ps.println(tf.getText()+"\n");
tf.setText("");
});


add(scroll);
add(tf);
add(okb);
add(ta);
Thread th = new Thread(this);
th.start();
}

public void run(){
    while(true){
      try{
        String replyMsg = dis.readLine();
        ta.append(replyMsg+"\n");
      }
       catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}
public static void main(String args[]) {
    Chat ch =new Chat();
  ch.setSize(700,600);
  ch.setResizable(false);
  ch.setVisible(true);

}
}