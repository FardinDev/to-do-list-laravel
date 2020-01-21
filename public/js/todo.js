var todo = {};
var todos = [];
var id = 0;
var first = 0;


$(document).ready(function () {
    $('#todo-form').on('submit', function (e) {

        

        e.preventDefault();
        if (todos.length == 0) {
            $('#main-card').append(` 
            <div class="card-footer paper">
            <div class="row">
                <div class="col-2">
                    <span>1 items</span> left 
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
                 <a >Clear Completed</a>
                </div>
            </div>
         </div>`);
        }
        var data = $('#todo-input').val();
        if (data.length > 0) {

            addToList(data);

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



    $('#todo-list').append(generateList(id, data, false));

  
        $("#data-"+id).dblclick(function (e) {
            if ($(e.target).attr('class') != "thVal") {
                e.stopPropagation(); //<-------stop the bubbling of the event here
                var currentEle = $(this);
                var value = $(this).html();
                var initId = this.id.replace('data-', '');
                console.log('fire!');
                updateVal(currentEle, value, initId);
            }
        });
        
    

    $('a[data-toggle="tab"]').on('click', function () {
      
        var type = $(this).html();

        switch (type) {
            case 'All':
                var list = '';
                $.each(todos, function (i, v) {
                        list += generateList(v.id, v.data, v.completed);
                })

                $('#todo-list').html(list);
                break;

            case 'Active':
                var list = '';
                   $.each(todos, function (i, v) {
                       if (!v.completed) {
                           list += generateList(v.id, v.data, v.completed);
                       }
                   })
    
                   $('#todo-list-active').html(list);
            
            break;

            case 'Completed':
             var list = '';
                $.each(todos, function (i, v) {
                    if (v.completed) {
                        list += generateList(v.id, v.data, v.completed);
                    }
                })

                $('#todo-list-completed').html(list);
                break;
        
            default:
                break;
        }
    });

    
    id++;
    $('#todo-input').val('');

    

};



function stateChange(id) {
    $.each(todos, function (i, v) {
        if (v.id == id) {

            v.completed = !v.completed;

            if (v.completed) {
                $('#data-' + id).addClass('completed');
            } else {
                $('#data-' + id).removeClass('completed');

            }
        }
    });


    // generateUi();
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
}

function generateUi() {
    var list = '';
    $.each(todos, function (i, v) {
        if (v.completed) {
            list += generateList(v.id, v.data, v.completed);
        } else {

            list += generateList(v.id, v.data, v.completed);
        }

        $("#data-"+v.id).dblclick(function (e) {
            if ($(e.target).attr('class') != "thVal") {
                e.stopPropagation(); //<-------stop the bubbling of the event here
                var currentEle = $(this);
                var value = $(this).html();
                var initId = this.id.replace('data-', '');
                console.log('fire!');
                updateVal(currentEle, value, initId);
            }
        });
    });
    $('#todo-list').html('');
    $('#todo-list').append(list);

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
  
}


function generateList(id, data, completed) {

    if (completed == true) {
        var string = `<li class="list-group-item">
       
    <div class="row"> 
            <div class="col-1 text-center">
                <div class="round">
                    <input type="checkbox" id="checkbox-` + id + `" onchange="stateChange(` + id +
            `)" class="cbx" data-id='` + id + `' checked/>
                    <label for="checkbox-` + id + `"></label>
                  </div>
            </div>
            <div class="col-8 text-left data-name completed" id='data-` + id + `'>` + data + `</div>
            <div class="col-3 text-right del-btn"><i class="fas fa-times" onclick='removeTodo(` + id + `)'></i></div>
        </div>
    </li>`;
    } else {
        var string = `<li class="list-group-item">
       
    <div class="row"> 
            <div class="col-1 text-center">
                <div class="round">
                    <input type="checkbox" id="checkbox-` + id + `" onchange="stateChange(` + id +
            `)" class="cbx" data-id='` + id + `'/>
                    <label for="checkbox-` + id + `"></label>
                  </div>
            </div>
            <div class="col-8 text-left data-name" id='data-` + id + `'>` + data + `</div>
            <div class="col-3 text-right del-btn"><i class="fas fa-times" onclick='removeTodo(` + id + `)'></i></div>
        </div>
    </li>`;
    }

    

    return string;

}
