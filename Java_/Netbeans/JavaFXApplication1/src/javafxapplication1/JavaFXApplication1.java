/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javafxapplication1;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.effect.Reflection;
import javafx.scene.paint.Color; 
import javafx.stage.Stage; 
import javafx.scene.text.Font; 
import javafx.scene.text.FontWeight; 
import javafx.scene.text.Text; 
import javafx.scene.control.Button;
import javafx.scene.layout.Background;
import javafx.scene.layout.BackgroundFill;
import javafx.scene.layout.StackPane;
import javafx.scene.paint.CycleMethod;
import javafx.scene.paint.LinearGradient;
import javafx.scene.paint.Stop;
import javafx.scene.shape.Rectangle;


/**
 *
 * @author NAGWATALAAT
 */
public class JavaFXApplication1 extends Application {
    
    @Override
    public void start(Stage primaryStage) {
    Text text = new Text();
     text.setFont(Font.font(null, FontWeight.BOLD, 30));        
//      text.setX(60); 
//      text.setY(100); 
      text.setText("Hello World"); 
      text.setFill(Color.RED);  
       //Instanting the reflection class 
      Reflection reflection = new Reflection(); 
      
      //setting the bottom opacity of the reflection 
      reflection.setBottomOpacity(0.0); 
      
      //setting the top opacity of the reflection 
      reflection.setTopOpacity(0.5); 
      
      //setting the top offset of the reflection 
      reflection.setTopOffset(0.0);
      
      //Setting the fraction of the reflection 
      reflection.setFraction(0.7); 
       
      //Applying reflection effect to the text 
      text.setEffect(reflection); 

      
        StackPane root = new StackPane();
      Stop[] stops = new Stop[] { new Stop(0, Color.BLACK), new Stop(0.5, Color.WHITE) ,new Stop(1, Color.BLACK)};
LinearGradient lg1 = new LinearGradient(0, 0, 0, 1, true, CycleMethod.NO_CYCLE, stops);
Rectangle r = new Rectangle();
r.setX(0);
r.setY(0);
r.setWidth(300);
r.setHeight(250);
r.setFill(lg1);
        root.getChildren().add(r);
        root.getChildren().add(text);
       
        Scene scene = new Scene(root, 300, 250);
        
        primaryStage.setTitle("Hello World!");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        launch(args);
    }
    
}
