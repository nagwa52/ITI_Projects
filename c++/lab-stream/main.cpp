#include <iostream>
#include<string.h>
#include<conio.h>
using namespace std;
class employee
{
    int id;
    int size;
    char* name;
    int salary;
public:
        void setid(int i)
    {
	id = i;
    }
    int getid()
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
    employee(int i,char *n,int s)
    {
    name= new char[10];
	id=i;
	strcpy(name,n);
	salary=s;
    }
    friend ostream  &operator <<(ostream &out,employee e);
    friend istream  &operator >>(istream &out,employee &e);

};
ostream  &operator <<(ostream &out,employee e){
    out<<"id="<<e.id<<endl;
    out<<"name="<<e.name<<endl;
    out<<"salary="<<e.salary<<endl;
    return out;
}
istream  &operator >>(istream &in,employee &e){
    cout<<"please enter the id "<<endl;
    in>>e.id;
    cout<<"please enter the name "<<endl;
     in>>e.name;
     cout<<"please enter the salary "<<endl;
      in>>e.salary;
      return in;
}
int main()
{
employee e(4,"nagwa", 3000);
cin>>e;
cout<<e;

    return 0;
}
