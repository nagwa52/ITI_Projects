import java.io.*;
import java.net.*;
import java.util.Vector;
import static java.lang.Thread.sleep;
class ChatHandler extends Thread implements Runnable
{
DataInputStream dis;
PrintStream ps;
static Vector<ChatHandler> clientsVector =
new Vector<ChatHandler>();
public ChatHandler(Socket cs)
{
    try{
dis = new DataInputStream(cs.getInputStream());
ps = new PrintStream(cs.getOutputStream());
clientsVector.add(this);
start();
}
catch (IOException ex) {
            ex.printStackTrace();
        }
}

public void run()
{
    try{
while(true)
{
String str = dis.readLine();
sendMessageToAll(str);
}
}
 catch (IOException ex) {
            ex.printStackTrace();
        }
}

void sendMessageToAll(String msg)
{
for(ChatHandler ch : clientsVector)
{
ch.ps.println(msg);
}
}
}