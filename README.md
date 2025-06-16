### Project Structure
```
/StreetMuscle
    ├── index.html (Landing Page)
    ├── sign_up.html
    ├── log_in_page.html
    ├── progress_log.html
    ├── exercise_page.html
    ├── profile_home.html
```
Sample site link------------Click here👇🏻------------------------
         👉🏻   https://yoihenkh007.github.io/Street_muscle_app_we/ 👈🏻
--------------------------------------👆🏻----------------------------
### Example HTML Files

1. **index.html (Landing Page)**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Street Muscle - Landing Page</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to your CSS file -->
</head>
<body>
    <header>
        <h1>Welcome to Street Muscle</h1>
        <nav>
            <ul>
                <li><a href="log_in_page.html">Log In</a></li>
                <li><a href="sign_up.html">Sign Up</a></li>
                <li><a href="exercise_page.html">Exercises</a></li>
                <li><a href="progress_log.html">Progress Log</a></li>
                <li><a href="profile_home.html">Profile</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Your Fitness Journey Starts Here!</h2>
        <p>Join us to track your workouts and progress.</p>
    </main>
</body>
</html>
```

2. **sign_up.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up - Street Muscle</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Sign Up</h1>
        <nav>
            <ul>
                <li><a href="log_in_page.html">Log In</a></li>
                <li><a href="exercise_page.html">Exercises</a></li>
                <li><a href="progress_log.html">Progress Log</a></li>
                <li><a href="profile_home.html">Profile</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <form>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Sign Up</button>
        </form>
    </main>
</body>
</html>
```

3. **log_in_page.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log In - Street Muscle</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Log In</h1>
        <nav>
            <ul>
                <li><a href="sign_up.html">Sign Up</a></li>
                <li><a href="exercise_page.html">Exercises</a></li>
                <li><a href="progress_log.html">Progress Log</a></li>
                <li><a href="profile_home.html">Profile</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <form>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Log In</button>
        </form>
    </main>
</body>
</html>
```

4. **progress_log.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Progress Log - Street Muscle</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Your Progress Log</h1>
        <nav>
            <ul>
                <li><a href="log_in_page.html">Log In</a></li>
                <li><a href="sign_up.html">Sign Up</a></li>
                <li><a href="exercise_page.html">Exercises</a></li>
                <li><a href="profile_home.html">Profile</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Track your workouts and progress here.</h2>
        <!-- Add progress log content here -->
    </main>
</body>
</html>
```

5. **exercise_page.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercises - Street Muscle</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Exercises</h1>
        <nav>
            <ul>
                <li><a href="log_in_page.html">Log In</a></li>
                <li><a href="sign_up.html">Sign Up</a></li>
                <li><a href="progress_log.html">Progress Log</a></li>
                <li><a href="profile_home.html">Profile</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Explore various exercises.</h2>
        <!-- Add exercise content here -->
    </main>
</body>
</html>
```

6. **profile_home.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile - Street Muscle</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Your Profile</h1>
        <nav>
            <ul>
                <li><a href="log_in_page.html">Log In</a></li>
                <li><a href="sign_up.html">Sign Up</a></li>
                <li><a href="exercise_page.html">Exercises</a></li>
                <li><a href="progress_log.html">Progress Log</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Welcome to your profile!</h2>
        <!-- Add profile content here -->
    </main>
</body>
</html>
```

### Notes:
- Each HTML file includes a navigation bar that links to all other pages, allowing users to navigate easily.
- You can create a `styles.css` file to style your pages consistently.
- Make sure to replace the placeholder content with the actual content you want to display on each page.
- You can also enhance the user experience by adding JavaScript for form validation or other interactive features.
