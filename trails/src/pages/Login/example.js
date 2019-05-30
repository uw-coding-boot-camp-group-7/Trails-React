// @route POST api/users/login
router.post("/login", (req, res) => {
   
    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({ email }).then(user => {

        // Check if user is found
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }

        // Check if password is a match, else return error
        if (password === user.password) {

            // Create JWT Payload
            const payload = {
                id: user.id,
                name: user.name // Does this match name in model?
            };
            
            // Sign token w/ user's payload
            jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 31556926 },
                (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                }
            );
        } else {
            return res
                .status(400)
                .json({ passwordincorrect: "Password incorrect" });
        }
    });
  });