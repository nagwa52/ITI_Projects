package javafxapplication3;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Optional;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.ButtonType;
import javafx.scene.control.Menu;
import javafx.scene.control.MenuBar;
import javafx.scene.control.MenuItem;
import javafx.scene.control.TextArea;
import javafx.scene.input.KeyCombination;
import javafx.scene.layout.BorderPane;
import javafx.stage.FileChooser;
import javafx.stage.Stage;

public  class FXMLDocumentBase extends BorderPane {
 protected final MenuBar menuBar;
    protected final Menu menu;
    protected final MenuItem menuItem;
    protected final MenuItem menuItem0;
    protected final MenuItem menuItem1;
    protected final MenuItem menuItem2;
    protected final MenuItem menuItem3;
    protected final Menu menu0;
    protected final MenuItem menuItem4;
    protected final MenuItem menuItem5;
    protected final MenuItem menuItem6;
    protected final MenuItem menuItem7;
    protected final MenuItem menuItem8;
    protected final MenuItem menuItem9;
    protected final Menu menu1;
    protected final MenuItem menuItem10;
    protected final TextArea textArea;
    protected FileChooser file = new FileChooser();
     boolean haschange;
     String currentFilePath;
     String currentPath ;

    public FXMLDocumentBase(Stage primarystage) {
        Stage stage = primarystage;

        menuBar = new MenuBar();
        menu = new Menu();
        menuItem = new MenuItem();
        menuItem0 = new MenuItem();
        menuItem1 = new MenuItem();
        menuItem2 = new MenuItem();
        menuItem3 = new MenuItem();
        menu0 = new Menu();
        menuItem4 = new MenuItem();
        menuItem5 = new MenuItem();
        menuItem6 = new MenuItem();
        menuItem7 = new MenuItem();
        menuItem8 = new MenuItem();
        menuItem9 = new MenuItem();
        menu1 = new Menu();
        menuItem10 = new MenuItem();
        textArea = new TextArea();

        setMaxHeight(USE_PREF_SIZE);
        setMaxWidth(USE_PREF_SIZE);
        setMinHeight(USE_PREF_SIZE);
        setMinWidth(USE_PREF_SIZE);
        setPrefHeight(400.0);
        setPrefWidth(600.0);

        BorderPane.setAlignment(menuBar, javafx.geometry.Pos.CENTER);

        menu.setMnemonicParsing(false);
        menu.setText("File");

        menuItem.setMnemonicParsing(false);
        menuItem.setText("New");
        menuItem.setAccelerator(KeyCombination. keyCombination("CTRL+N"));
            menuItem.setOnAction(new EventHandler<ActionEvent>() {
            @Override
            public void handle(ActionEvent e) {
                        textArea.clear();
          Stage stage = (Stage) textArea.getScene().getWindow();
          stage.setTitle("Untitled - Notepad");
          file = null;
               
            }

        });
        

        menuItem0.setMnemonicParsing(false);
        menuItem0.setText("Open");
        menuItem0.setAccelerator(KeyCombination. keyCombination("CTRL+O"));
        menuItem0.setOnAction(new EventHandler <ActionEvent >() {
         @Override
         public void handle(ActionEvent actionEvent) 
         {
            
if (currentPath == null) {
                    FileChooser fileChooser = new FileChooser();
                    fileChooser.setTitle("Open File");
                    File selectedFile = fileChooser.showOpenDialog(stage);
                    if (selectedFile != null) {
                        String path = selectedFile.getPath();
                        currentPath = path;
                        String noteName = selectedFile.getName();
                        stage.setTitle(noteName);
                       
                    }
                }
                if (currentPath != null) {
                    try {
                        try (FileInputStream fileintputStream = new FileInputStream(currentPath)) {
                        int size =    fileintputStream.available();
                        byte[] text =new byte[size];
                               fileintputStream.read(text);
                           textArea.setText(new String(text));
                       
                        }
                    } catch (FileNotFoundException ex) {
                        Logger.getLogger(FXMLDocumentBase.class.getName()).log(Level.SEVERE, null, ex);
                    } catch (IOException ex) {
                        Logger.getLogger(FXMLDocumentBase.class.getName()).log(Level.SEVERE, null, ex);
                    }
                }
            
         
            }
         });
        
        menuItem2.setMnemonicParsing(false);
        menuItem2.setText("Save As");
        menuItem2.setOnAction(new EventHandler<ActionEvent>() {
            @Override
            public void handle(ActionEvent e) {
                String currentPath = null;
                if (currentPath == null) {
                    FileChooser fileChooser = new FileChooser();
                    fileChooser.setTitle("Save File");
                    File selectedFile = fileChooser.showSaveDialog(stage);
                    if (selectedFile != null) {
                        String path = selectedFile.getPath();
                        currentPath = path;
                        String noteName = selectedFile.getName();
                        stage.setTitle(noteName);
                    }
                }
                if (currentPath != null) {
                    try {
                        try (FileOutputStream fileOutputStream = new FileOutputStream((String) currentPath)) {
                            byte[] text = textArea.getText().getBytes();
                            fileOutputStream.write(text);
                            textArea.setText(new String(text));
                            String currentText = textArea.getText();
                        }
                    } catch (FileNotFoundException ex) {
                        Logger.getLogger(FXMLDocumentBase.class.getName()).log(Level.SEVERE, null, ex);
                    } catch (IOException ex) {
                        Logger.getLogger(FXMLDocumentBase.class.getName()).log(Level.SEVERE, null, ex);
                    }
                }
            }
        });
        menuItem1.setMnemonicParsing(false);
        menuItem1.setAccelerator(KeyCombination. keyCombination("CTRL+S"));
        menuItem1.setText("Save");
        menuItem1.setOnAction(new EventHandler<ActionEvent>() {
            @Override
            public void handle(ActionEvent event) {
                
                try {
                    FileWriter fileWriter = new FileWriter(currentPath,false);
                    fileWriter.write(textArea.getText());
                    fileWriter.close();
                     haschange = false;
                } catch (IOException ex) {
                 ex.printStackTrace();
                    // Logger.getLogger(FXMLDocumentBase.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
            
        });
        
        
        menuItem3.setMnemonicParsing(false);
        menuItem3.setText("Exit");
        menuItem3.setOnAction(new EventHandler<ActionEvent>() {
            @Override
            public void handle(ActionEvent event) {
           System.exit(0);
            }
        });

        menu0.setMnemonicParsing(false);
        menu0.setText("Edit");
       

        menuItem4.setMnemonicParsing(false);
        menuItem4.setText("Undo");
         menuItem4.setOnAction(new EventHandler<ActionEvent>() {
            @Override
            public void handle(ActionEvent event) {
          textArea.undo();
            }
        });

        menuItem5.setMnemonicParsing(false);
        menuItem5.setText("Cut");
        menuItem5.setOnAction(new EventHandler<ActionEvent>() {
            @Override
            public void handle(ActionEvent event) {
                textArea.cut();
            }
        });

        menuItem6.setMnemonicParsing(false);
        menuItem6.setText("Copy");
        menuItem6.setOnAction(new EventHandler<ActionEvent>() {
            @Override
            public void handle(ActionEvent event) {
                textArea.copy();
            }
        });
        menuItem7.setMnemonicParsing(false);
        menuItem7.setText("Paste");
         menuItem7.setOnAction(new EventHandler<ActionEvent>() {
            @Override
            public void handle(ActionEvent event) {
                textArea.paste();
            }
        });

        menuItem8.setMnemonicParsing(false);
        menuItem8.setText("Delete");
        menuItem8.setOnAction(new EventHandler<ActionEvent>() {
            @Override
            public void handle(ActionEvent event) {
          textArea.setText(textArea.getText().replace(textArea.getSelectedText(),""));
            }
        });

        menuItem9.setMnemonicParsing(false);
        menuItem9.setText("SelectAll");
        menuItem9.setOnAction(new EventHandler<ActionEvent>() {
            @Override
            public void handle(ActionEvent event) {
          textArea.selectAll();
            }
        });

        menu1.setMnemonicParsing(false);
        menu1.setText("Help");

        menuItem9.setMnemonicParsing(false);
        menuItem9.setText("About");
        menuItem9.setOnAction(new EventHandler<ActionEvent>() {
            @Override
            public void handle(ActionEvent event) {
          Alert alert = new Alert(Alert.AlertType.CONFIRMATION);
          alert.setTitle("NotePad Help");
          alert.setHeaderText("Wlcome");
          alert.setContentText("Windows 10.....JavaFXML Application");
          alert.getButtonTypes().remove(1);
          alert.showAndWait();
          event.consume();
            }
        });

       setTop(menuBar);

        BorderPane.setAlignment(textArea, javafx.geometry.Pos.CENTER);
        textArea.setPrefHeight(200.0);
        textArea.setPrefWidth(200.0);
        setCenter(textArea);

        menu.getItems().add(menuItem);
        menu.getItems().add(menuItem0);
        menu.getItems().add(menuItem1);
        menu.getItems().add(menuItem2);
        menu.getItems().add(menuItem3);
        menuBar.getMenus().add(menu);
        menu0.getItems().add(menuItem4);
        menu0.getItems().add(menuItem5);
        menu0.getItems().add(menuItem6);
        menu0.getItems().add(menuItem7);
        menu0.getItems().add(menuItem8);
        menu0.getItems().add(menuItem9);
        menuBar.getMenus().add(menu0);
        menu1.getItems().add(menuItem10);
        menuBar.getMenus().add(menu1);

    }
}