// define global variables
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentHour = parseInt(moment().format('H'));
var todoItems = [];

// set current time on page
$('#currentDay').text(currentTime);

// change colors for time of day 
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

// check local storage if present populates if not creates 
function checkMe() {
    var storedData = JSON.parse(localStorage.getItem('tasks'));

    if (storedData !== null) {
        todoItems = storedData
        render()
    } else {
        createObj()
    }

}
// create task objects if no object is found
function createObj() {
    $('.time-block').each(function () {
        var timeBlockHr = parseInt($(this).data('hour'));

        var todoObj = {
            hour: timeBlockHr,
            text: ''
        }

        todoItems.push(todoObj);
    })

}

// add text content when hitting the 'saved' button
$('.btn').click(function () {
    var addItem = $(this).parent().children('textarea').val();
    for (i = 0; i < 9; i++) {
        if (todoItems[i].hour === $(this).parent().data("hour")) {
            todoItems[i].text = addItem;

        }
    }
    storeItems()
})

// storing items to local storage
function storeItems() {
    localStorage.setItem('tasks', JSON.stringify(todoItems));

}

function render() {
    for (i = 0; i < 9; i++) {
        var itemHour = todoItems[i].hour;
        var itemText = todoItems[i].text;
        $("[data-hour=" + itemHour + "]").children("textarea").val(itemText)
    }
}


// run functions on start
checkMe()
colorCode()