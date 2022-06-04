#include <iostream>
#include<string.h>


class employee{
int id;
char name[10];
int salary;
public:
    // Setter
    void setSalary(int s) {
      salary = s;
    }
 // Getter
    int getSalary() {
      return salary;
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
};
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
    return 0;
}
