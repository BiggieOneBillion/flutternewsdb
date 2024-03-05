const Users = require("../model/userRegistration");

exports.createUser = async (req, res) => {
  const data = await req.body;
  try {
    // Create a new user document
    const user = new Users({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
    });
    // Save the user document to the database
    const savedUser = await user.save();

    //Send a response indicating success
    res.status(201).json(savedUser);
  } catch (error) {
    // Send an error response if there's an issue
    res.status(500).json({ message: error.message });
  }
};



exports.logInUser = async (req, res) => {

  const data = await req.body;

  try {

    const response = await Users.findOne({email: data.email});

    if(response){ // If it returns a value
       if(response.password === data.password){ // If password stored in db is the same as the one the user provides then the login process is successful!!
          res.status(200).json({message: 'Successful!!'})
       }
    }

  } catch (error) {

    // Send an error response if there's an issue
    res.status(500).json({ message: error.message });

  }
};
