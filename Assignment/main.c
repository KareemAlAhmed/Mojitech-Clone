#include <stdio.h>
#include <stdlib.h>

int main()
{
    int firstPrice;
    float VAT,finalPrice;

    scanf("%d",&firstPrice);
    printf("first Price %d \n",firstPrice);
    VAT=(10 * firstPrice) / 100;

    printf("the VAT IS %f \n",VAT);
    finalPrice= VAT + firstPrice;

    printf("your final price after VAT is %f \n",finalPrice);
    return 0;
}
