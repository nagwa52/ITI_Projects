public class INDEX {
         public static void main(String[] args) {
 String example = "163.121.12.30";
    String output;
    String temp = example;
    int gIndex = 0;
    int len = example.length();
    example += ".";
    for(int i=0 ; i<len;i+=gIndex+1){
        gIndex = example.indexOf(".");
        output = example.substring(0,gIndex);
        System.out.println(output);
        example = example.replace(output, "").replaceFirst(".", "");
    }
    example = temp;
         }}