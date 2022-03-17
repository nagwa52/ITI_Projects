#include <iostream>
#include<string.h>
#include<conio.h>
using namespace std;
class Person
{
protected:
int id;
char *name;
public:
Person()
{
name=new char[10];
id=0;
strcpy(name,"anonomous");
}
Person(int i)
{
name=new char[10];
id=i;
strcpy(name,"anonomous");
}
Person(int i,char* name_)
{
name=new char[10];
id=i;
strcpy(name,name_);
}
void Setid(int i)
{ id=i;}
void SetY(char* name_)
{ strcpy(name,name_);}
int Getid(){return id;}
char* Getname(){return name;}
void printemployee(){

cout<<"id="<<id<<endl;
cout<<"name="<<name<<endl;

}
};
class Employee: virtual public Person
{
protected:
double salary;
public:
Employee()
{salary = 0.0;}
Employee(int id, char *name_, double salary_) : Person(id,name_)
{ salary = salary_; }
void Setsalary(double sal){ salary = sal;}
int Getsalary(){return salary;}
void printemployee(){

cout<<"id="<<id<<endl;

cout<<"name="<<name<<endl;

cout<<"salary="<<salary<<endl;


}
};
class Customer: virtual public Person
{
char* contact_info;
public:
Customer(){
contact_info= new char[30];
strcpy(contact_info,"not registered");
}
Customer(int id, char *name_, char* contact_info_) : Person(id,name_)
{ contact_info = contact_info_;
 }
void Setcontact(char * contact)
{
contact_info = contact;
}
char * Getcontact(){
 return contact_info;
}
void printemployee(){

cout<<"id="<<id<<endl;
cout<<"name="<<name<<endl;
cout<<"contact_info="<<contact_info<<endl;
}
};
int main()
{
   Person p;
   p.printemployee();
   Person p1(5);
   p1.printemployee();
   Person p2(5,"Ahmed");
   p2.printemployee();
   Employee e;
   e.printemployee();
   Employee e1(6,"Ali",5000);
   e1.printemployee();
   Customer c;
   c.printemployee();
   Customer c1(7,"nagwa","nagwa52@gmail.com");
   c1.printemployee();

    return 0;
}
