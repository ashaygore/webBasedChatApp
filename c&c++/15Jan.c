#include <stdio.h>
#include <malloc.h>
#include <string.h>
#include <stdlib.h>

struct student
{
    char name[15];
    int rollno;
    char course[15];
    char totalgrade;
};

struct node
{
    struct student e;
    struct node *next,*prev;
};

struct node *create(struct node *);
void display(struct node *);
void insert(struct node *);
void deletelast(struct node *);
struct node *reverse(struct node *);

int main()
{
    struct node *first = NULL;
    int c;
    printf("\n----------Welcome to studentloyee Linked List---------\n ");
    do
    {

        printf("Enter 1 to create\n");
        printf("Enter 2 to display\n");
        printf("Enter 3 to insert\n");
        printf("Enter 4 to prepend\n");
        printf("Enter 5 to delete first\n");
        printf("Enter 6 to delete last\n");
        printf("Enter 7 to reverse\n");
        printf("Enter 8 to exit\n");
        scanf("%d", &c);

        switch (c)
        {
        case 1:
        {
            first = create(first);
            break;
        }
        case 2:
        {
            display(first);
            break;
        }
        case 3:
        {
            insert(first);
            break;
        }
        case 4:
        {
            first = prepend(first);
            break;
        }
        case 5:
        {
            first = deletefirst(first);
            break;
        }
        case 6:
        {
            deletelast(first);
            break;
        }
        case 7:{
            first=reverse(first);
            break;
        }
        case 8:
            exit(1);

        default:
            break;
        }
    } while (c != 8);

    return 0;
}
struct node *create(struct node *f)
{
    if (f == NULL)
    {
        f = malloc(sizeof(struct node));
        printf("\nEnter name of first studentloyee : \n");
        scanf("%s", f->e.name);
        printf("\nEnter rollno:\n");
        scanf("%d", &(f->e.rollno));
        f->next = NULL;
    }
    else
    {
        int c;
        printf("\nList is not studentty,enter 1 to add or 0 to end:\n ");
        scanf("%d", &c);

        struct node *last, *tstudent;
        last = malloc(sizeof(struct node));
        last = f;
        int d = 1;
        while (c != 0)
        {
            tstudent = malloc(sizeof(struct node));
            d++;
            printf("\nEnter name of studentloyee number(%d): \n", d);
            scanf("%s", tstudent->e.name);
            printf("\nEnter studentloyee rollno:\n");
            scanf("%d", &(tstudent->e.rollno));
            tstudent->next = NULL;
            last->next = tstudent;
            last = tstudent;
            printf("\nEnter 1 to add more or 0 to end:\n ");
            scanf("%d", &c);
        }
    }
    return f;
}

void display(struct node *f)
{
    if (f == NULL)
    {
        printf("\nList is studentty\n");
    }
    else
    {
        struct node *tstudent;

        tstudent = malloc(sizeof(struct node));
        tstudent = f;
        int i = 0;
        do
        {
            i++;

            printf("\n studentloyee %d details are:\n", i);
            printf("\nName: %s", tstudent->e.name);
            printf("\nrollno: %d\n\n", tstudent->e.rollno);
            tstudent = tstudent->next;
        } while (tstudent != NULL);
    }
}

void insert(struct node *f)
{
    if (f == NULL)
    {
        printf("\nList is studentty\n");
    }
    else
    {
        struct node *tstudent;
        tstudent = malloc(sizeof(struct node));
        tstudent = f;
        struct node *last;
        while (tstudent->next != NULL)
        {
            tstudent = tstudent->next;
        }

        last = malloc(sizeof(struct node));
        printf("\nEnter name of studentloyee : \n");
        scanf("%s", last->e.name);
        printf("\nEnter studentloyee rollno:\n");
        scanf("%d", &(last->e.rollno));
        tstudent->next = last;
        tstudent = last;
        tstudent->next = NULL;
    }
}

struct node *prepend(struct node *f)
{
    if (f == NULL)
    {
        printf("\nList is studentty\n");
    }
    struct node *tstudent;

    tstudent = malloc(sizeof(struct node));
    printf("\nEnter studentloyee name\n");
    scanf("%s", tstudent->e.name);
    printf("\nEnter studentloyee rollno\n");
    scanf("%d", &tstudent->e.rollno);
    tstudent->next = f;
    f = tstudent;

    return f;
}

struct node *deletefirst(struct node *f)
{
    if (f == NULL)
    {
        printf("\nList is studentty\n");
    }
    else
    {
        f = f->next;
    }
    return f;
}

void deletelast(struct node *f)
{
    if (f == NULL)
    {
        printf("\nList is studentty\n");
    }
    else
    {
        struct node *tstudent, *slast;
        tstudent = malloc(sizeof(struct node));
        tstudent = f;
        while (tstudent->next != NULL)
        {
            slast = tstudent;
            tstudent = tstudent->next;
        }
        slast->next = NULL;
        printf("\nLast item deleted!\n");
    }
}

// struct node *reverse(struct node *f){
//     struct node *tstudent,*last,*new;
//     tstudent=f;
//     last=f;
//     while(tstudent->next!=NULL){
//         tstudent->next->next=tstudent;
//         tstudent=tstudent->next;
//     }
//     last->next=NULL;
//     return tstudent;
// }