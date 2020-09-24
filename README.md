# todo-app
## Javascript Web App 

![Contents](https://img.shields.io/github/languages/top/dan-gentile/work-day-scheduler)
![Last-Commit](https://img.shields.io/github/last-commit/dan-gentile/work-day-scheduler)

### Table of Contents


- [General Info](#general-info)
- [Technologies](#Technologies)
- [Deployment](Deployment)
- [Screenshots](#screen-shots)


### General Info

This is a 9 to 5 daily schedule app. It will show you what time of day it is by changing the color of the text area. Red === current time, Green === future time, and Gray === past. When hitting the save button this app will store all of your inputted data in local storage, giving you the option of viewing it as long as the browser remains open. The responsive layout of the app has been created with Bootstrap. Time is retrieved using Moment.js api. 

This project was built using the following:
- HTML
- CSS
- Javascript
- Jquery 

Link to page: <https://dan-gentile.github.io/work-day-scheduler/>

### Technologies

This Projects used:
- [Javascript](https://www.javascript.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Jquery](https://jquery.com/)
- [Moment.js](https://momentjs.com/)
- [Fontawesome](https://fontawesome.com/)
- [Google-Fonts](https://fonts.google.com/)

### Deployment 
Work day Scheduler works in your browser, it also saves your data to local storage. Just got to the above link and you're ready to go! 

### Screen Shots 

--App Page--
<img width="1222" alt="Screen Shot 2020-09-18 at 9 14 01 AM" src="https://user-images.githubusercontent.com/68626350/93620718-529ecd80-f98f-11ea-9f72-abe75fcd2818.png">




### Code Snippets 

Time Blocks built with BootStrap
~~~
<div class="row time-block" id="0" data-hour="9">
        <div class="col-2 hour">9am</div>
        <textarea class="col-8"></textarea>
        <button class="col-2 btn saveBtn d-flex justify-content-center align-items-center"><i class="fas fa-save"></i></button>
</div>
~~~
Changing the Colors of the blocks 
~~~
function colorCode() {
    $(".time-block").each(function () {
        // adding css classes based on time of day
        if ($(this).data('hour') === currentHour) {
            $(this).addClass('present');
        } else if ($(this).data('hour') < currentHour) {
            $(this).addClass('past');
        } else {
            $(this).addClass('future');
        }
    });
}
~~~
Adding text value when clicking the save button
~~~
$('.btn').click(function () {
    var addItem = $(this).parent().children('textarea').val();
    for (i = 0; i < 9; i++) {
        if (todoItems[i].hour === $(this).parent().data("hour")) {
            todoItems[i].text = addItem;

        }
    }
    storeItems()
})
~~~

### Authors 
- Dan Gentile 

### License 
- Open Source 
