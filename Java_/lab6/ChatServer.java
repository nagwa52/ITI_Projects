import java.io.*;
import java.net.*;
import java.util.Vector;
import static java.lang.Thread.sleep;
public class ChatServer 
{
ServerSocket serverSocket;
public ChatServer()
{
    try{
serverSocket = new ServerSocket(8000);
while(true)
{
Socket s = serverSocket.accept();
new ChatHandler(s);
}
}
 catch (IOException ex) {
            ex.printStackTrace();
        }
}

public static void main(String[] args)
{
new ChatServer();
}
}
