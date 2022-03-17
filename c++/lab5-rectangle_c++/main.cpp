#include <iostream>

using namespace std;
class Point{
int x;
int y;
public:
Point(){
x=y=0;
}
Point(int m){
x=y=m;
}
Point(int m ,int n){
x=m;
y=n;
}
int getx(){
return x;
}
int gety(){
return y;
}
void setx(int x_){
    x=x_;
}
void sety(int y_){
    y=y_;
}
};
class Rectangle{
Point pt1,pt2;
int length,width;
public:
    Rectangle(int x1,int y1,int x2,int y2):pt1(x1,y1),pt2(x2,y2){
    length=abs(x2-x1);
    width= abs(y2-y1);
    }
    void setpt1(int x,int y){
    pt1.setx(x);
    pt1.sety(y);
    length=abs(pt2.getx()-x);
    width=abs(pt2.gety()-y);
    }
    int Area(){
        return (length*width);
    }
};
class RectangleA{
Point *pt1,*pt2;
int length,width;
public:
    RectangleA(){
    pt1=pt2=NULL;
    length=width=0;
    }
    RectangleA(Point *pa,Point * pb){
        pt1=pa;
        pt2=pb;
        if(pt1 && pt2){
    length=(pt2->getx()-pt1->getx());
    width=(pt2->gety()-pt1->gety());
        }}
   void setp1(Point *p){
   pt1=p;
    if(pt1 && pt2){
    length=(pt2->getx()-pt1->getx());
    width=(pt2->gety()-pt1->gety());
   }
    }
       void setp2(Point *p){
   pt2=p;
    if(pt1 && pt2){
    length=(pt2->getx()-pt1->getx());
    width=(pt2->gety()-pt1->gety());
   }
    }
    int Area(){
        return (length*width);
    }
};
class Circle{
Point pt1,pt2;
int r;
public:
    Circle(int x1,int x2):pt1(x1),pt2(x2){
    r=abs(x2-x1);
    }
    void setpt1(int x){
    pt1.setx(x);
    r=abs(pt2.getx()-x);
    }
    double Area_circle(){
        return (3.14*r*r);
    }
};

int main()
{
    Rectangle rec1(7,11,10,21);
    RectangleA rect1;
    Point p1(7);
    Point p2(10,17);
   // Point p3(8);
    rect1.setp1(&p1);
    rect1.setp2(&p2);
  //  rect1.setp1(&p1);
  //  Circle c1(5,8);

    cout << "Area is :" <<rec1.Area()<< endl;
      cout << "Area is :" <<rect1.Area()<< endl;
   // cout << "Area  of circle is :" <<c1.Area_circle()<< endl;
    return 0;
}
