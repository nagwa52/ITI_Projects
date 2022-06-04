#include <stdio.h>
#include <stdlib.h>

// Structure template
struct Student
{
    char name[20];
    int id;
};

// Function Prototypes
void mergeSort(struct Student arr[10], int l, int r);
void merge(struct Student arr[10], int l, int m, int r);
struct Student fillStudent(void);
void printStudent(struct Student st);
void displayAll();
int x;
struct Student arr[10];
int main()
{

int i;
printf("please enter the number of student\n");
    scanf("%d",&x);

    // If error
    for(i=0;i<x;i++){
        arr[i]=fillStudent();
    }

mergeSort(arr, 0, x- 1);
printf("nSorted array is n");
 displayAll();

    // Struct array to hold people's data
   struct Student list[5];
   struct Student st;


    return 0;
}
void displayAll(){

for(int i=0;i<x;i++){
                printStudent(arr[i]);
            }}
void mergeSort(struct Student arr[10], int l, int r)
{
if (l < r)
{
// Finding mid element
int m = l+(r-l)/2;
// Recursively sorting both the halves
mergeSort(arr, l, m);
mergeSort(arr, m+1, r);

// Merge the array
merge(arr, l, m, r);
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
void printStudent(struct Student st)
{
    printf("the id of student : %d \n", st.id);
    printf("the name of student : %s \n", st.name);

}
void merge(struct Student arr[10], int l, int m, int r)
{
int i, j, k;
int n1 = m - l + 1;
int n2 = r - m;
// Create temp arrays
struct Student L[n1];
 struct Student R[n2];
// Copy data to temp array
for (i = 0; i < n1; i++)
L[i] = arr[l + i];
for (j = 0; j < n2; j++)
R[j] = arr[m + 1+ j];
// Merge the temp arrays
i = 0;
j = 0;
k = l;
while (i < n1 && j < n2)
{
if (L[i].id <= R[j].id)
{
arr[k] = L[i];
i++;
}
else
{
arr[k] = R[j];
j++;
}
k++;
}
// Copy the remaining elements of L[]
while (i < n1)
{
arr[k] = L[i];
i++;
k++;
}
// Copy the remaining elements of R[]
while (j < n2)
{
arr[k] = R[j];
j++;
k++;
}
}
