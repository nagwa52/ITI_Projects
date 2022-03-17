#include <iostream>

using namespace std;
void swap (int &x,int &y);

int main()
{
  int a;
  int b;
  swap(a,b);
  cout<<"A="<<a<<endl;
   cout<<"B="<<b<<endl;

    return 0;
}
void swap (int &x,int &y){
    int temp;
    temp=x;
    x=y;
    y=temp;

}
