#include <cstdio>
#include <cmath>
#include <iostream>
#include <cstdlib>
using namespace std;

struct student
{
    char name[10];
    int id;
    int grade[10];
};
struct student fillstudent(void);
void printstudent(student st);
int myfunction(int var1, int var2=3, int var3=8 );
int var1=5;
int main()
{
   //int va1=7;
    student s1;
   // s1=fillstudent();
    //printstudent(s1);
   // cout<< var1<<endl;
   // cout<<::var1;
   int f;
  f = myfunction(8);
  cout<<f;
    return 0;
}

int myfunction(int var1, int var2 , int var3){
int z;
var1+var2+var3;
return var1+var2+var3;
}
struct student fillstudent(void)
{
    student st;
    cout<<"please enter the student name" <<endl;
    cin>>st.name;
    cout<<"please enter the student id" <<endl;
    cin>>st.id;
    cout<<"please enter the student grade" <<endl;
    cin>>st.grade[10];
    return st;
}
void printstudent(struct student st)
{
    cout<<"The student name is : "<<st.name <<endl;
    cout<<"The student id is : "<<st.id <<endl;
    //cout<<"The student grade is: "<<st.grade <<endl;

}

