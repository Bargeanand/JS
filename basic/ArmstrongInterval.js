let reminder=0;
let count;
for(let i=1;i<10000;i++)
{
    count=0;
    let temp=i;
    let armstrong=0;

    while(temp!=0)
    {
        count++;
        temp=Math.floor(temp/10);
    }
    temp=i;
    while(temp!=0)
    {
        let newReminder=1;
        reminder=temp%10;
        for(let i=1;i<=count;i++){
            newReminder=newReminder*reminder;
        }
        if(count==1){
            newReminder=reminder;}
        armstrong=armstrong+newReminder

        temp=Math.floor(temp/10);
    }
    if(i==armstrong)
    {
        console.log(i);
    }
}