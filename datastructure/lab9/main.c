#include <stdio.h>
#include <stdlib.h>

struct Student
{
    int id;
    char name[20];
};
struct Node
{
    struct Node *Pprev;
    struct Student s1;
};
struct Node *create();
struct Student fillStudent(void);
int push();
struct Student pop();
void printStudent(struct Student st);
void displayAll();
void ShowMenu(void);
struct Node *Ptail;
int main()
{



    struct Student * ptr;
    struct Student st;
    int f=1;
    int c;
    int loc;
    while(f)
    {
        ShowMenu();
        scanf("%d",&c);
        switch(c)
        {
        case 1:
        {
            printf("please add new\n");
int m;
           m= push();
           if(m!=0){
            printf("stack is full\n");
           }
           else{
           printf("Added");
           }

            break;
        }
        // delete student
        case 2:
        {


             st=pop();

           if(st.id==-1){
             printf("no element in stack\n");
           }
           else{
            printStudent(st);
           }
            break;
        }
         case 3:
        {

            displayAll();
            break;
        }

        case 4:
        {
            exit(0);
            f=0;
        }
        default:
            break;
        }

    }

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
struct Node *create()
{
    struct Node *ptr;
    ptr=(struct Node*)malloc(sizeof(struct Node));
    if(ptr)
    {
        ptr->s1=fillStudent();
        ptr->Pprev=NULL;
    }
    return ptr;
}
int push()
{
    int retval=0;
    struct Node *ptr;
    ptr=create();
    if(ptr)
    {
        if(!Ptail)
        {
            Ptail=ptr;
        }
        else
        {
            ptr->Pprev = Ptail;
            Ptail=ptr;
        }
        retval=1;
    }
    return retval;
}
struct Student pop()
{
struct Student st;
st.id=-1;
    struct Node *ptr;

    if (Ptail)
    {
        st=Ptail->s1;
        ptr=Ptail;
        Ptail = Ptail->Pprev;
        free(ptr);

    }
    return st;
}



void ShowMenu()
{
///Display the menu
    printf("1- push\n");
    printf("2-pop\n");
     printf("3-print\n");
    printf("8-exit\n");
}
void printStudent(struct Student st)
{
    printf("the id of student : %d \n", st.id);
    printf("the name of student : %s \n", st.name);

}
void displayAll(){
    struct Node *ptr;
   ptr=Ptail;

            while(ptr)
            {
                printStudent(ptr->s1);
                ptr = ptr->Pprev;
            }
        }
