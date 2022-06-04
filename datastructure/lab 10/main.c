#include<stdio.h>
#include <stdlib.h>
#define SIZE 10
  struct Student
{
    char name[20];
    int id;
};

struct Student queue[10];
    void insert();
    void deletee();
    void displayAll();
    void printStudent(struct Student st);
    struct Student fillStudent(void);

    int front = -1;
    int rear = -1 ;

    int main()
    {
        struct Student st;

        int n, ch ;
        while(1)
        {
          //  system("CLS") ;
           // printf("\n***MENU***\n") ;
            printf("\n1. INSERT IN QUEUE") ;
            printf("\n2. DELETE FROM QUEUE") ;
            printf("\n3. DISPLAY") ;
            printf("\n4. EXIT") ;
            printf("\n\nEnter your choice: ") ;
            scanf("%d", &ch) ;

            switch(ch)
            {
                case 1 :
                    printf("Enter student to insert: ") ;
                     st=fillStudent();
                      insert() ;
                    break ;
                case 2 :
                    deletee() ;
                    break ;
                case 3 :
                    displayAll();
                    break ;
                case 4 :
                    printf("!!Exit!!") ;
                    exit(0) ;
                default :
                    printf("INVALID INPUT!!!") ;
                    //system("pause") ;

            }
        }
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
    void insert()
    {
struct Student st;
    //Case 1 is for inserting an element in the queue.

        if(front == 0 && rear == SIZE-1)
        {
            printf("\nOVERFLOW ERROR!!!\nQUEUE IS FULL! \n\n") ;
        }
        else
        {
            if (front==-1)
                front=0;
            rear = rear + 1 ;
            queue[rear] = st ;
            printf("Insertion Successful!! \n\n") ;
        //  printf("\n\n");
        }
        system("pause") ;
    }

    //Case 2 is for deleting an element from the queue.

    void deletee()
    {
        int i ;
        if(front == -1 && rear == -1)
        {
            printf("\nUNDERFLOW ERROR!!! \nQUEUE IS EMPTY \n\n") ;
        }
        else if (front==0 && rear==-1)
                {
                    front=-1;
                    printf("\nUNDERFLOW ERROR!!! \nQUEUE IS EMPTY \n\n") ;
                }
        else
        {
            printf("Deleted element is");
            printStudent(queue[front]);
            for(i = front ; i<rear ; i++)
            {
                queue[i] = queue[i+1] ;
            }
            rear -- ;
        }
        system("pause");
    }

    //Case 3 is for displaying the elements of the queue.
void printStudent(struct Student st)
{
    printf("the id of student : %d \n", st.id);
    printf("the name of student : %s \n", st.name);

}
  void displayAll(){
 int i;
        if (front == - 1)
            printf("Queue is Empty \n");
        else
        {
for (i = front; i <= rear; i++)
               printStudent(queue[i]);
        }
        printf("\n\n");
        system("pause") ;


            }
