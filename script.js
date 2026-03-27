let date=new Date();
let year=date.getFullYear();
let month=date.getMonth();

const day=document.querySelector(".calendar-dates");

const currdate=document.querySelector(".calendar-current-date");
const prenexIcons=document.querySelectorAll(".calendar-navigation span");

//Array of month names
const months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
//function to generate the calendar
const manipulate=() =>{
    //get the first day of the month
    let dayone=new Date(year,month,1).getDay();
    //get the last day of the month
    let lastdate=new Date(year,month+1,0).getDate();
    //get the day of the last date of the month
     let dayend=new Date(year,month ,lastdate).getDay();
     //get the last date of previous month
     let monthlastdate=new Date(year,month,0).getDate();
     //variable to store the genareted calendar html
     let lit="";
     //loop to add ther last dates of previous month
     for(let i=dayone; i>0; i--){
        lit+=
        `<li class="inactive">${monthlastdate -i +1}</li>`;
     }
     //loop to add the dates of the current month
     for(let i=1; i<=lastdate; i++){
        //check if the current date is today
        let isToday=i=== date.getDate()
        && month===new Date().getMonth()
        && year===new Date().getFullYear()
        ?"active"
        :"";
        lit+= `<li class="${isToday}">${i}</li>`;
     }
    //loop to add the first dates of the next months
    for(let i=dayend; i<6; i++){
        lit+=`<li class="inactive">${i-dayend +1}</li>`;
    }
    //update the text of the current date element 
    //with formated current month and year
    currdate.innerText=`${months[month]}${year}`;
    //update the html of the dates element
    //with the generated calendar
    day.innerHTML=lit;
}
manipulate();
//attach a click event listener to each icon
prenexIcons.forEach(icon=>{
    //when an icon is clicked
    icon.addEventListener("click",()=>{
        //check if rhe icon is "calendar-prev"
        //or "calendar-next"
        month=icon.id==="calendar=prev" ? month-1:month+1;
        //check if the month is out of range
        if(month<0 || month>11){
            //set the date to the first day of the
            //month with the new year
            date =new Date(year,month,new Date().getDate());
            //set the year to the new year 
            year=date.getFullYear();
            //set the month to the new month
            month=date.getMonth();
        }
       
        else{
            //set date to the current date
            date=new Date();
        }
        //call the manipulate function to
        //update th calendar display
        manipulate();
    });
});

