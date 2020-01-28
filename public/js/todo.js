var todo = {};

if (localStorage.getItem("todos") === null) {
    var todos = [];
    var id = 0;
} else {
    var todos = JSON.parse(localStorage.getItem("todos"));
    var id = todos.length;
}

var first = 0;


$(document).ready(function () {
    

    if (todos.length > 0) {
        generateUi();
    }



    $('#todo-form').on('submit', function (e) {

        
        e.preventDefault();
        var data = $('#todo-input').val();
        if (data.length > 0) {
            
            
            addToList(data);

            $('#angle-down').css('display', 'inline');

        }

    });

});



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

function removeTodo(id) {
    console.log(todos);

    var newTodos = $.grep(todos, function (e) {
        return e.id != id;
    });

    todos = newTodos;

    console.log(todos);

    if (todos.length == 0) {

        todosEmpy();

    } 
        
        generateUi();

}

function todosEmpy(id) {
    $('.card-footer').remove();
    $('#angle-down').css('display', 'none');


}


function clearCompleted() {

    $.each(todos, function (i, v) {

        if (v.completed) {
          
            removeTodo(v.id);
        }

          
        
    });


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



    if (first === 0) {
        $('#main-card').append(` 
        <div class="card-footer paper">
        <div class="row">
            <div class="col-2">
                <span id='left'>1 items</span> left 
            </div>
            <div class="col-7">
                <nav >
                    <div class="nav" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-all-tab" data-toggle="tab" href="#nav-all" role="tab" aria-controls="nav-all" aria-selected="true">All</a>
                    <a class="nav-item nav-link" id="nav-active-tab" data-toggle="tab" href="#nav-active" role="tab" aria-controls="nav-active" aria-selected="false">Active</a>
                    <a class="nav-item nav-link" id="nav-completed-tab" data-toggle="tab" href="#nav-completed" role="tab" aria-controls="nav-completed" aria-selected="false">Completed</a>
                    </div>
                </nav>
                
            </div>
            <div class="col-3">
                <span class='delBtn' onclick='clearCompleted()'>Clear Completed</span>
            </div>
        </div>
        </div>`);
    
        first++;
    }


    $('#left').html( numberOfActive + 
        " item" + 
        (numberOfActive === 1 ? "" : "s"));
    
    localStorage.setItem("todos", JSON.stringify(todos));
}


function updateVal(currentEle, value, id) {
    // $(document).off('click');
    $(currentEle).html('<input class="thVal" type="text" value="' + value + '" />');
    $(".thVal").focus();
    $(".thVal").keyup(function (event) {
        if (event.keyCode == 13) {
            var val = $(".thVal").val();
            updateTodo(id, val)
            $(currentEle).html(val);
        }
    });

    $(document).click(function () {

            if($(event.target).attr('class')!="thVal")
            {
                // var val = $(".thVal").val();

                // updateTodo(id, val)
                $(currentEle).html(value);
                // $(document).off('click');
            }

    });

}


function updateTodo(id, val) {

    $.each(todos, function (i, v) {
        if (v.id == id) {
            v.data = val;
        }
    });
    generateUi();
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
            <div class="col-8 text-left data-name completed" id='data-` + key + `-` + id + `'>` + data + `</div>
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
            <div class="col-8 text-left data-name" id='data-` + key + `-` + id + `'>` + data + `</div>
            <div class="col-3 text-right del-btn"><i class="fas fa-times" onclick='removeTodo(` + id + `)'></i></div>
        </div>
    </li>`;
    }


    // $('#data-' + key + '-' + id ).dblclick(function (e) {
    //     if ($(e.target).attr('class') != "thVal") {
    //         e.stopPropagation(); //<-------stop the bubbling of the event here
    //         var currentEle = $(this);
    //         var value = $(this).html();
    //         var initId = this.id.replace('data-'+ key +'-', '');
    //         console.log('fire!');
    //         updateVal(currentEle, value, initId);
    //     }
    // });
    

    return string;

}
