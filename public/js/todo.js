var todo = {};
var todos = [];
var id = 0;



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
            // generateUi();
            // console.log(todos);

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
    
            
    
            $('#todo-list').append(`
    <li class="list-group-item">
       
    
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
    </li>
    `);

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        e.target; // newly activated tab
        e.relatedTarget; // previous active tab
    
        console.log(e.target);
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

    if(todos.length == 0){

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


            list += `<li class="list-group-item">
      
  
      <div class="row"> 
              <div class="col-1 text-center">
                  <div class="round">
                      <input type="checkbox" id="checkbox-` + v.id + `" onchange="stateChange(` + v.id +
                `)" class="cbx" data-id='` + v.id + `' checked/>
                      <label for="checkbox-` + v.id + `"></label>
                    </div>
              </div>
              <div class="col-8 text-left data-name completed" id='data-` + v.id + `'>` + v.data + `</div>
              <div class="col-3 text-right del-btn"><i class="fas fa-times" onclick='removeTodo(` + v.id + `)'></i></div>
          </div>
      </li>`;
        } else {

            list += `<li class="list-group-item">
      
  
      <div class="row"> 
              <div class="col-1 text-center">
                  <div class="round">
                      <input type="checkbox" id="checkbox-` + v.id + `" onchange="stateChange(` + v.id +
                `)" class="cbx" data-id='` + v.id + `'/>
                      <label for="checkbox-` + v.id + `"></label>
                    </div>
              </div>
              <div class="col-8 text-left " id='data-` + v.id + `'>` + v.data + `</div>
              <div class="col-3 text-right del-btn"><i class="fas fa-times" onclick='removeTodo(` + v.id + `)'></i></div>
          </div>
      </li>`;
        }
    });
    $('#todo-list').html('');
    $('#todo-list').append(list);
}