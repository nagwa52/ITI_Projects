#include <stdio.h>
struct Student
{
    char name[20];
    int id;
};
struct Student array[10];
int x;
struct Student fillStudent(void);
int main()
{
    struct Student st;
int i, low, high, mid;
printf("Enter number of elements \n");
scanf("%d",&x);
   // If error
    for(int i=0;i<x;i++){
        array[i]=fillStudent();
    }

printf("Enter student to find \n");
st=fillStudent();
low = 0;
high = x - 1;
mid = (low+high)/2;
while (low <= high) {
if(array[mid].id < st.id)
low = mid + 1;
else if (array[mid].id == st.id &&array[mid].name==st.name) {
printf("%d found at location %d.x", st.id, mid+1);
break;
}
else
high = mid - 1;
mid = (low + high)/2;
}
if(low > high)
printf("Not found! %d isn't present in the list.x", st.id);
return 0;
}
struct Student fillStudent(void)
{
    struct Student st;
    printf("Enter the id of student : ");
    scanf("%d", &st.id );
    printf("Enter the Name of student : ");
    scanf("%s", st.name );
    return st;
}
