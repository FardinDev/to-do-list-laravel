<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>To-Do List</title>

<link rel="stylesheet" href="{{asset('fonts/nunito.css')}}">
<link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}">
<link rel="stylesheet" href="{{asset('css/todo.css')}}">
<script src="{{asset('js/fontawesome.js')}}" crossorigin="anonymous" SameSite="none Secure" ></script>


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



    <script src="{{asset('js/jquery-3.2.1.slim.min.js')}}">
    </script>
    <script src="{{asset('js/popper.min.js')}}">
    </script>
    <script src="{{asset('js/bootstrap.min.js')}}">
    </script>
    <script src="{{asset('js/todo.js')}}">
    </script>
</body>

</html>
