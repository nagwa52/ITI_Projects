#include <iostream>
#include<string.h>
#include<conio.h>

using namespace std;


class employee
{
    int id,size;
    char* name;
    int salary;
public:
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
    // Setter
    void setid(int i)
    {
	id = i;
    }
// Getter
    int getid()
    {
	return id;
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
       id=0;
      name=new char[10];
       strcpy(name,"anonomous");
       salary=1000;

    }
    employee(int i,char *n,int s)
    {
      name= new char[10];
	id=i;
	name=n;
	salary=s;
    }
};
employee fillemployee();
void printemployee(employee emp);
employee fillemployee()
{
    employee emp;
    emp.setid(10);
    emp.setname("nagwa");
    emp.setSalary(5000);
    return emp;



}
void printemployee(employee emp)
{
    emp.getid();
    cout<<"id="<<emp.getid()<<endl;
    emp.getname();
    cout<<"name="<<emp.getname()<<endl;
    emp.getSalary();
    cout<<"salary="<<emp.getSalary()<<endl;

}

int main()
{

    employee e;
    e= fillemployee();
    printemployee(e);
    employee e1;
    cout << "id: " << e1.getid()<< endl;
    cout << "name: " << e1.getname()<<endl;
    cout << "salary: " << e1.getSalary()<<endl;
    employee e3(3,"hoda",4000);
    cout << e3.getid()<< " " << e3.getname() << " " << e3.getSalary() << "\n";
    getch();
    return 0;
}
