<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>To-Do List</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Lora|Nunito:200,600" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/e104f65347.js" crossorigin="anonymous"></script>
    <!-- Styles -->
    <link rel="stylesheet" href="{{asset('css/todo.css')}}">


</head>

<body>
    <div class="position-ref">

        <div class="content">
            <div class="title m-b-md text-center">
                todos
            </div>
            <div class="container col-md-6">

   
                    <div class="card" id="main-card">
                        <div class="card-header">
                            <div class="row m-auto">
                                <div class="col-1 angle-down my-auto">
                                    <i class="fas fa-angle-down" id="angle-down"></i>
                                </div>
                                <div class="col-11">
                                    <form action="" id="todo-form" autocomplete="off">
                                        <input type="text" id="todo-input" name="todo-input" class="todo-input"
                                            placeholder="What needs to be done?">
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-0 m-0 tab-content" id="nav-tabContent">
                            
                                <div class="tab-pane show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
                                    <ul class="list-group list-group-flush" id="todo-list"></ul>
                                </div>
                                <div class="tab-pane " id="nav-active" role="tabpanel" aria-labelledby="nav-active-tab">
                                    <ul class="list-group list-group-flush" id="todo-list-active">
                                        <li class="list-group-item">
                                           
                                        
                                        <div class="row"> 
                                                <div class="col-1 text-center">
                                                    <div class="round">
                                                        <input type="checkbox" id="checkbox-0" onchange="stateChange(0)" class="cbx" data-id="0">
                                                        <label for="checkbox-0"></label>
                                                      </div>
                                                </div>
                                                <div class="col-8 text-left data-name" id="data-0">dfdf</div>
                                                <div class="col-3 text-right del-btn"><i class="fas fa-times" onclick="removeTodo(0)" aria-hidden="true"></i></div>
                                            </div>
                                        </li>
                                        </ul>
                                </div>
                                <div class="tab-pane " id="nav-completed" role="tabpanel" aria-labelledby="nav-completed-tab">
                                    <ul class="list-group list-group-flush" id="todo-list-completed">
                                        
                                        </ul>
                                </div>
                       
                           
                        </div>
                       
                    </div>
           
            </div>

        </div>
    </div>



    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
    </script>

<script src="{{asset('js/todo.js')}}"></script>
</body>

</html>
