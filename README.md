# LOGIN DASHBOARD - Backend

## Rules and Implementation Steps

### Rules


-> Initialize the project with all the required packages
-> Follow the same hierarchy, for the folders and the files.
-> Since we don't want to store the passwords directly, we are concerned with hashing them
->Use bycryptjs to hash the passwords using salt 
-> Use the pre middleware of the model, to hash the password before saving it into the database [register  user]
-> Now for logging the user, write another function to compare the current hashed password with the one in the database.
-> If both are correct, then it means that the credentials are right.
Note* we can write custom methods to document in mongoose, like for comparing the userPassowrd with the one stored in the database.
-> bycrypt.compare returns a Boolean value.
-> Now for the login first we fetch the user with mail, gaining us access to the hashed value.
-> next after that using the mongoose method which was defined using .compare we will compare both the passwords
-> Use cors, now the backend can successfully connenct with the front end
