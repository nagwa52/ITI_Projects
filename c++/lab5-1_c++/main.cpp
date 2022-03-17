#include <iostream>
#include<string.h>

using namespace std;
class employee{
int id;
char * name;
int salary;
static char* company_name;
public:
    // Setter
    void setSalary(int s) {
      salary = s;
    }
 // Getter
    int getSalary() {
      return salary;
    }
        void setcname(char * cname) {
      company_name = cname;
    }
 // Getter
    char * getcname() {
      return company_name;
    }
      // Setter
    void setid(int i) {
      id = i;
    }
 // Getter
    int getid() {
      return id;
    }

  void setname(char* input) {
    strcpy(name,input);
  }
  char* getname() {
    return name;
  }
  employee(){
      name=new char[20];
  id=0;
  strcpy(name,"anonomous");
  salary=0;
  company_name=new char[10];
  strcpy(company_name,"ITI");
  }
  employee(int i){
    id=i;
    name=new char[20];
  strcpy(name,"anonomous");
  salary=0;
  }
  employee(int i ,char *name_){
      id=i;
       name=new char[20];
      strcpy(name,name_);
      salary=0;
  }
    employee(int i ,char *name_,int salary_){
      id=i;
       name=new char[20];
      strcpy(name,name_);
      salary=salary_;
  }
      employee(int i ,char *name_,int salary_,char *cname_){
      id=i;
       name=new char[20];
      strcpy(name,name_);
      salary=salary_;
       company_name=new char[20];
      strcpy(company_name,cname_);
  }
};
char *employee::company_name="ITI";
employee fillemployee();
void printemployee(employee emp);
employee fillemployee(){
employee emp;
     emp.setid(10);
     emp.setname("nagwa");
     emp.setSalary(5000);
     return emp;

   }
void printemployee(employee emp){

cout<<"id="<<emp.getid()<<endl;

cout<<"name="<<emp.getname()<<endl;

cout<<"salary="<<emp.getSalary()<<endl;

cout<<"Company_name="<<emp.getcname()<<endl;


}

int main()
{
    employee e;
    employee e1(3);
    employee e2(4,"Nagwa");
    employee e3(5,"Ali",2000);
   // employee e4(6,"malak",4000,"Dahab");

 // e= fillemployee();
    // cout << e.getid()<< " " << e.getname() << " " << e.getSalary() << "\n";
    printemployee(e);
    printemployee(e1);
    printemployee(e2);
    printemployee(e3);
  //  printemployee(e4);
    return 0;
}
