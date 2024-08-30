# Use PUT when you need to update or replace the entire resource and you have the complete representation of the resource.

# Use PATCH when you only need to update specific fields or attributes of the resource, and you don’t want to send the entire resource.

# PUT: Replaces the entire resource. Use it when you want to update the complete profile.

    # PUT: Replaces the entire resource. Use it when you want to update the complete profile.

    let users = [
      { id: 1, username: 'user1', email: 'user1@example.com', password: 'password1' },
      { id: 2, username: 'user2', email: 'user2@example.com', password: 'password2' }
    ];

    // Define a route to replace an existing user's profile
    app.put('/users/:id', (req, res) => {
      const userId = parseInt(req.params.id);
      const userIndex = users.findIndex(user => user.id === userId);

      if (userIndex !== -1) {
        // Replace the entire user profile
        users[userIndex] = {
          id: userId,
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        };
        res.json(users[userIndex]);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    });

# PATCH Example: Partially Updating a User Profile

    # PATCH: Partially updates the resource. Use it when you only want to update specific fields of a profile.

    let users = [
      { id: 1, username: 'user1', email: 'user1@example.com', password: 'password1' },
      { id: 2, username: 'user2', email: 'user2@example.com', password: 'password2' }
    ];

    // Define a route to partially update a user's profile
    app.patch('/users/:id', (req, res) => {
      const userId = parseInt(req.params.id);
      const user = users.find(u => u.id === userId);

      if (user) {
        const updates = req.body;
        // Apply partial updates
        if (updates.username !== undefined) {
          user.username = updates.username;
        }
        if (updates.email !== undefined) {
          user.email = updates.email;
        }
        if (updates.password !== undefined) {
          user.password = updates.password;
        }
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    });