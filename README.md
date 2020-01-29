# Laravel to-do App

### 1. Clone GitHub repo for this project locally
Note: Make sure you have git installed locally on your computer first.

```sh
git clone https://github.com/FardinDev/to-do-list-laravel.git
```

### 2. cd into your project
Note: You will need to be inside that project file to enter all of the rest of the commands.

```sh
cd to-do-list-laravel
```

### 3. Install Composer Dependencies
To install all this source code we run composer with the following command.
```sh
composer install
```

### 4. Create a copy of ``.env`` file
This will create a copy of the .env.example file in your project and name the copy simply ``.env``.
```sh
cp .env.example .env
```

### 5. Generate an app encryption key
We will now generate a valid app encryption key with the following command.
```sh
php artisan key:generate
```

### 6. Start the server
Start the local server with the following command
```sh
php artisan serve
```
It will start a local server. Navigate your web browser to the following link

```sh
127.0.0.1:8000 
```
or
```sh
localhost:8000
```


