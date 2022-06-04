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
    struct Node *Pnext;
    struct Student s1;
};


//declare functions
struct Student fillStudent(void);
struct Node *createNode(struct Student st);
int addStudent(struct Student st);
int InsertNode(struct Student st,int loc);
struct Student SearchNodeByid(int id);
struct Student SearchNodeByName(char name[20]);
int DeletNode(int id);
void printStudent(struct Student st);
void displayAll();
 void freelist (void);
void ShowMenu(void);
struct Node *Phead;
struct Node *Ptail;
int main()
{



    struct Student * ptr;
    struct Student st;
    int f=1;
    int c,id;
    int retval;
    int loc;
    char name[20];
    while(f)
    {
        ShowMenu();
     scanf("%d",&c);
        switch(c)
        {
        case 1:
        {
            printf("please add");
            addStudent(st);
            break;
        }
        // insert student
        case 2:
        {
            printf("please insert\n");
            st= fillStudent();
            printf("please enter your location\n");
            scanf("%d",loc) ;
            InsertNode(st,loc);
            break;
        }
        //
        case 3:
        {
            printf(" please search by id\n");

            scanf("%d",&id);
            st=SearchNodeByid(id);
             printStudent(st);
            break;
        }
        case 4:
        {
            printf("search by name\n");
            scanf("%s",name);
            st=SearchNodeByName(name);
             printStudent(st);
            break;
        }
        case 5:
        {
            printf("please insert the id you want to delete\n");
            scanf("%d",&id);
            retval=DeletNode(id);
            if(retval)
            printf("deleted");
            break;
        }
        case 6:
        {
            if(Phead){
                displayAll();
            }
          printf("Empty\n");
            break;
        }
        case 7:
            {

                 freelist ();
                 break;
            }
        case 8:
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
void ShowMenu()
{
///Display the menu
    printf("1- Add Node\n");
    printf("2-Insert Node\n");
    printf("3-search by id\n");
    printf("4-search by Name\n");
    printf("5-Delete Node\n");
    printf("6-print list\n");
    printf("7-free list\n");
    printf("8-exit\n");
}

int addStudent(struct Student st)
{
    int retval=0;
    struct Node *ptr;
    ptr=createNode(st);
    if(ptr)
    {
        if(!Phead)
        {
            Phead=Ptail=ptr;
        }
        else
        {
            ptr->Pprev=Ptail;
            Ptail->Pnext = ptr;
            Ptail=ptr;
        }
        retval=1;
    }
    return retval;
}

// create node
struct Node *createNode(struct Student st)
{
    struct Node *ptr;
    ptr=(struct Node*)malloc(sizeof(struct Node));
    if(ptr)
    {
        ptr->s1=fillStudent();
        ptr->Pprev=NULL;
        ptr->Pnext=NULL;
    }
    return ptr;
}
//fill student
struct Student fillStudent(void)
{
    struct Student st;
    printf("Enter the id of student : ");
    scanf("%d", &st.id );
    printf("Enter the Name of student : ");
    scanf("%s", st.name );
    return st;
}
int DeletNode(int id)
{

    int retval=0;
    struct Node *ptr;
    ptr=Phead;
    while(ptr->s1.id!=id &&ptr)
    {
        ptr=ptr->Pnext;

    }
    if(ptr)
    {
        if(Phead==ptr)     //in first
        {

            Phead=Phead->Pnext;
            Phead->Pprev=NULL;
            free(ptr);


        }
        else
            if(Ptail==ptr)  // in last
        {
            ptr=Ptail;
           Ptail=Ptail->Pprev;
           Ptail->Pnext=NULL;
            free(ptr);
        }
        else{    // in middle
            ptr->Pprev->Pnext=ptr->Pnext;
            ptr->Pnext->Pprev=ptr->Pprev;
            free(ptr);

        }
        retval=1;
    }

    return retval;
}
int InsertNode(struct Student st,int loc)
{
    int retval=0,i;
    struct Node *ptr;
    struct Node *Pcur;
    ptr=createNode(st);
    if(ptr)
    {
        if(!Phead)
        {
            Phead=Ptail=ptr;
        }
        else  //# first
        {
            if(loc==0)
            {
                ptr->Pnext=Phead;
                Phead->Pprev=ptr;
                Phead=ptr;
            }

            else // middle or last node
            {
                Pcur=Phead;
                for(i=0; i<loc-1&&Pcur; i++)
                {
                    Pcur=Pcur->Pnext;
                }
                if(Pcur==Ptail||Pcur==NULL)
                {
                    ptr->Pprev=Ptail;
                    Ptail->Pnext=ptr;
                    Ptail=ptr;
                }
                else
                {
                    ptr->Pnext=Pcur->Pnext;
                    Pcur->Pnext->Pprev=ptr;
                    Pcur->Pnext=ptr;
                    ptr->Pprev=Pcur;
                }
            }
        }
        retval=1;
    }
    return retval;
}

struct Student SearchNodeByid(int id)
{
    struct Student st;
    struct Node *ptr;
    st.id=-1;
    ptr=Phead;
    while(ptr->s1.id!=id &&ptr)
    {
        ptr=ptr->Pnext;

    }
     if(ptr){
        st=ptr->s1;
    }

    return st;
}

struct Student SearchNodeByName(char name[20])
{
    struct Node *ptr;
    struct Student st;
    st.id=-1;
    ptr=Phead;
    while(strcmp(ptr->s1.name,name)!=0 &&ptr)
    {
        ptr=ptr->Pnext;
    }
if(ptr){
        st=ptr->s1;
    }

    return st;
    }
    void freelist (void){
        struct Node*ptr;
        while(Phead){
            ptr=Phead;
            Phead=Phead->Pnext;
            free(ptr);

        }
    Ptail=NULL;
    }
void printStudent(struct Student st)
{
    printf("the id of student : %d \n", st.id);
    printf("the name of student : %s \n", st.name);

}
void displayAll(){
    struct Node *ptr;
   ptr=Phead;

            while(ptr)
            {
                printStudent(ptr->s1);
                ptr = ptr->Pnext;
            }
        }
