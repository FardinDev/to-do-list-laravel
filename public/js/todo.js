
var todo = {};

if (localStorage.getItem("todos") === null) {
    var todos = [];
    var id = 0;
} else {
    var todos = JSON.parse(localStorage.getItem("todos"));
    var id = todos.length;
}

var first = 0;
var oriVal;

$(document).ready(function () {


    if (todos.length > 0) {
        generateUi();
    }



    $('#todo-form').on('submit', function (e) {


        e.preventDefault();
        var data = $('#todo-input').val();
        if (data.length > 0) {


            addToList(data);

        }

    });

});

// edit on double click

$(".list-group-flush").on('dblclick', 'div > div > span', function (e) {
    e.stopPropagation(); //<-------stop the bubbling of the event here
    oriVal = $(this).text();
    $(this).text("");
    var spanid = this.id.split('-');

    $("<input type='text' id='inp-" + spanid[2] + "' value = " + oriVal + ">").appendTo(this).focus();
});

$(".list-group-flush").on('focusout', 'div > div > span > input', function () {

    var inpid = this.id.split('-');
    var $this = $(this);
    $this.parent().text($this.val() || oriVal);
    $this.remove(); // Don't just hide, remove the element.
    updateTodo(inpid[1], $this.val() || oriVal)
});

$(".list-group-flush").on('keyup', 'div > div > span > input', function (event) {
    if (event.keyCode == 13) {
        var inpid = this.id.split('-');
        var $this = $(this);
        $this.parent().text($this.val() || oriVal);
        $this.remove(); // Don't just hide, remove the element.
        updateTodo(inpid[1], $this.val() || oriVal)
    }
});

// edit on double click


function addToList(data) {
    todo = {
        id: id,
        data: data,
        completed: false
    };
    todos.push(todo);
    id++;
    $('#todo-input').val('');

    generateUi();


};

function stateChange(id) {
    $.each(todos, function (i, v) {
        if (v.id == id) {

            v.completed = !v.completed;

        }
    });

    generateUi();
}

function updateTodo(id, val) {

    $.each(todos, function (i, v) {
        if (v.id == id) {
            v.data = val;
        }
    });
    generateUi();
}

function removeTodo(id) {
    
    var newTodos = $.grep(todos, function (e) {
        return e.id != id;
    });

    todos = newTodos;


    generateUi();

}

function clearCompleted() {

    $.each(todos, function (i, v) {

        if (v.completed) {

            removeTodo(v.id);
        }

    });


}

function todosEmpy() {
    $('#footer').remove();
    $('#angle-down').css('display', 'none');

}

function generateUi() {

    let active = '';
    let completed = '';
    let all = '';
    let numberOfActive = 0;
    $.each(todos, function (i, v) {

        if (!v.completed) {
            active += generateList(v.id, v.data, v.completed, 'active');
            numberOfActive++;
        }

        if (v.completed) {
            completed += generateList(v.id, v.data, v.completed, 'completed');

        }

        all += generateList(v.id, v.data, v.completed, 'all');

    });


    $('#todo-list').html(all);

    $('#todo-list-active').html(active);

    $('#todo-list-completed').html(completed);

    addRemoveFooter();

    $('#left').html(numberOfActive +
        " item" +
        (numberOfActive < 2 ? "" : "s"));

    localStorage.setItem("todos", JSON.stringify(todos));
}

function generateList(id, data, completed, key) {
    var string = '';
    if (completed) {
        string = `<li class="list-group-item">

    <div class="row"> 
            <div class="col-1 text-center">
                <div class="round">
                    <input type="checkbox" id="checkbox-` + key + `-` + id + `" onchange="stateChange(` + id +
            `)" class="cbx" data-id='` + id + `' checked/>
                    <label for="checkbox-` + key + `-` + id + `"></label>
                  </div>
            </div>
            <div class="col-8 text-left data-name completed" ><span id='data-` + key + `-` + id + `' >` + data + `</span></div>
            <div class="col-3 text-right del-btn"><i class="fas fa-times" onclick='removeTodo(` + id + `)'></i></div>
        </div>
    </li>`;
    } else {
        string = `<li class="list-group-item">
       
    <div class="row"> 
            <div class="col-1 text-center">
                <div class="round">
                    <input type="checkbox" id="checkbox-` + key + `-` + id + `" onchange="stateChange(` + id +
            `)" class="cbx" data-id='` + id + `'/>
                    <label for="checkbox-` + key + `-` + id + `"></label>
                  </div>
            </div>
            <div class="col-8 text-left data-name" ><span id='data-` + key + `-` + id + `' >` + data + `</span></div>
            <div class="col-3 text-right del-btn"><i class="fas fa-times" onclick='removeTodo(` + id + `)'></i></div>
        </div>
    </li>`;
    }





    return string;

}

function addRemoveFooter() {
    
    if (!$('#footer').length) {
        $('#angle-down').css('display', 'inline');
        $('#main-card').append(` 
        <div class="card-footer paper" id="footer">
        <div class="row">
            <div class="col-sm pb-1">
                <span id='left'>1 items</span> left 
            </div>
            <div class="col-sm pb-1">
                <nav >
                    <div class="nav" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-all-tab" data-toggle="tab" href="#nav-all" role="tab" aria-controls="nav-all" aria-selected="true">All</a>
                    <a class="nav-item nav-link" id="nav-active-tab" data-toggle="tab" href="#nav-active" role="tab" aria-controls="nav-active" aria-selected="false">Active</a>
                    <a class="nav-item nav-link" id="nav-completed-tab" data-toggle="tab" href="#nav-completed" role="tab" aria-controls="nav-completed" aria-selected="false">Completed</a>
                    </div>
                </nav>
                
            </div>
            <div class="col-sm pb-1">
                <span class='delBtn' onclick='clearCompleted()'>Clear Completed</span>
            </div>
        </div>
        </div>`);
    } else {
        if (todos.length === 0) {
            todosEmpy();
        }
    }


}

