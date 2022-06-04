#include <iostream>
#include<string.h>
#include<conio.h>

using namespace std;
class employee
{
    float id;
    int size;
    char* name;
    int salary;
public:
        void setid(float i)
    {
	id = i;
    }
    float getid()
    {
	return id;
    }
    int getsize()
    {
	return size;
    }
    // Setter
    void setSalary(int s)
    {
	salary = s;
    }
// Getter
    int getSalary()
    {
	return salary;
    }

    void setname(char *hname)
    {
	strcpy(name, hname);
    }



    char * getname()
    {
	char * hname =NULL;
	if (name != NULL)
	{
	    hname = new char[strlen(name)+1];
	    strcpy(hname, name);
	}
	return hname;
    }
    employee()
    {
       id=1;
      name=new char[10];
       strcpy(name,"Ahmed");
       salary=1000;

    }
    employee(float i,char *n,int s)
    {
    name= new char[10];
	id=i;
	strcpy(name,n);
	salary=s;
    }
    employee operator +(employee e);
    employee operator +(char *name);
    friend employee operator +(char *name,employee e);
    employee operator ++(int m);
    employee operator ++();
    employee operator =(employee e);
    int operator ==(employee e);
    employee operator +(int number);
    friend employee operator +(int number,employee e);
     operator char *();
      operator float ();

};

employee employee:: operator +(employee e){
employee temp;
   temp.setname(strcat(temp.getname(), e.getname()));
  temp.salary= temp.salary+e.salary;
   return temp;
   }
employee employee :: operator +(char *name){
  employee temp;
   temp.setname(strcat(temp.getname(),name));
   return temp;
  }
  employee operator +(char *name,employee e){
      employee temp;
      delete[] name;
      name=new char[10];
     //  char name[25]={0};
       // name[]=" ";
   temp.setname(strcat(name,e.getname()));
      return temp;
  }
//  employee employee :: operator ++(int m){
//      employee temp;
//      temp=*this;
//      id++;
//      temp.name=name;
//      salary++;
//       return temp;
//  }
   employee employee :: operator ++(){
      id++;
      name=name;
      salary++;
       return *this;
  }
    employee employee :: operator =(employee e){
      id=e.id;
      name=e.name;
      salary=e.salary;
       return e;
  }
  int  employee ::operator ==(employee e){
      int retval;
      if(id==e.getid()&& name==strcpy(name,e.getname())&salary==e.getSalary())
        retval=1;
return retval;
  }
  employee employee :: operator +(int number){
  employee temp;
   temp.salary=number+salary;
   return temp;
  }
   employee operator +(int number,employee e){
       employee temp;
       temp.setSalary(number+e.getSalary());

      return temp;
  }


 employee :: operator float ()
{

    return this->getid();

}
  employee :: operator char * ( )
{
 return this->getname();
}
int main()
{
int id,sal;
char *n;
    employee e;
//    employee e1;
//    cout << "id: " << e1.getid()<< endl;
//    cout << "name: " << e1.getname()<<endl;
//    cout << "salary: " << e1.getSalary()<<endl;
   employee e3(2,"Ali",3000);
   employee e2(2,"Ali",3000);
  //  cout << e3.getid()<< " " << e3.getname() << " " << e3.getSalary() << "\n";
  //  cin << "name: " << e.setname()<<endl;
   // cin << "salary: " << e.setSalary()<<endl;
   // e=e+e3;
   // cout << e.getid()<< " " << e.getname() << " " << e.getSalary() << "\n";
   //  e=e+"Mohamed";
   //  cout << e.getid()<< " " << e.getname() << " " << e.getSalary() << "\n";
     e="samy"+e;
     cout <<e.getid()<< " " << e.getname() << " " << e.getSalary() << "\n";
     // e2=e++;
    //  cout <<e.getid()<< " " << e.getname() << " " << e.getSalary() << "\n";
    //  e2=++e;
    //  cout <<e2.getid()<< " " << e2.getname() << " " << e2.getSalary() << "\n";
     //e2=e3;
     //cout <<e2.getid()<< " " << e2.getname() << " " << e2.getSalary() << "\n";
//     if(e2==e3){
//        cout<<"hi done" <<endl;
//     }
//     else{
//     cout<<"not done" <<endl;
//     }

    // cout <<e2.getid()<< " " << e2.getname() << " " << e2.getSalary() << "\n";
//      e=e3+4000;
//    cout << e.getid()<< " " << e.getname() << " " << e.getSalary() << "\n";
   //  e=1200+e3;
    //cout << e.getid()<< " " << e.getname() << " " << e.getSalary() << "\n";
    // (char *)e3;

    // cout << e3.getname()<< "\n";
     //   (float) e3;
     //cout << (float) e3.getid()<< " " << e3.getname() << " " << e3.getSalary() << "\n";

    getch();
    return 0;
}
