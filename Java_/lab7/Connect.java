// import java.sql.* ;

// public class Connect

// {

//      public static void main(String[] args)
//   {

// try{
// DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
// }
// catch (SQLException e) {
//          e.printStackTrace();
//       } 
// try
// {
// Connection con = DriverManager.getConnection
// ("jdbc:mysql://localhost:3306/grades","root","");
// Statement stmt = con.createStatement() ;
// String queryString = new String("select * from students");
// ResultSet rs = stmt.executeQuery(queryString) ;
// while(rs.next())
// {
// System.out.println(rs.getString(2));
// }
// stmt.close(); 
// con.close();
// }
// catch(SQLException ex)
// {
// ex.printStackTrace();
// }
// }
// }
/////////////////////////////////////////////////////////////
///////////////////////////update////////////////////////////
// import java.sql.* ;

// public class Connect

// {

//      public static void main(String[] args)
//   {

// try{
// DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
// }
// catch (SQLException e) {
//          e.printStackTrace();
//       } 
// try
// {
// Connection con = DriverManager.getConnection
// ("jdbc:mysql://localhost:3306/grades","root","");
// Statement stmt = con.createStatement() ;

// String queryString = new String("update students set first_name ='amira' ,last_name='emad' WHERE student_id ='1'");

// stmt.executeUpdate(queryString) ;

// stmt.close(); 
// con.close();
// }
// catch(SQLException ex)
// {
// ex.printStackTrace();
// }
// }
// }
//////////////////////////////insert/////////////////////////////
// import java.sql.* ;

// public class Connect

// {

//      public static void main(String[] args)
//   {

// try{
// DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
// }
// catch (SQLException e) {
//          e.printStackTrace();
//       } 
// try
// {
// Connection con = DriverManager.getConnection
// ("jdbc:mysql://localhost:3306/grades","root","");

// PreparedStatement pst = con.prepareStatement("INSERT INTO students(first_name,last_name,gender)" + "VALUES(?,?,?)") ;
// pst.setString (1, "Dina");
// pst.setString (2, "Alaa");
// pst.setString (3, "female");
// pst.executeUpdate();

// pst.close(); 
// con.close();
// }
// catch(SQLException ex)
// {
// ex.printStackTrace();
// }
// }
// }
//////////////delete///////////////////////////
import java.sql.* ;

public class Connect

{

     public static void main(String[] args)
  {

try{
DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
}
catch (SQLException e) {
         e.printStackTrace();
      } 
try
{
Connection con = DriverManager.getConnection
("jdbc:mysql://localhost:3306/grades","root","");

PreparedStatement pst = con.prepareStatement("delete from students where student_id =179") ;
pst.executeUpdate();

pst.close(); 
con.close();
}
catch(SQLException ex)
{
ex.printStackTrace();
}
}
}