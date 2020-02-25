const bcrypt = require("bcryptjs");

module.exports = {
    
    login: async (req, res) => {
        const {username, password} =req.body;
        const{session} = req;
        const db = req.app.get("db");

        let user = await db.check_user([username])
        user = user[0]
        if(!user){
            res.status(400).send(`Username doesn't exist :(`)
        }
        const authenticated = bcrypt.compareSync(password, user.password);
        if (authenticated) {
          delete user.user_password;
          session.user = user;
          res.status(202).send(session.user);
        } else {
          res.status(401).send("Incorrect Password, try again!");
        }
        
    },

    register: async (req, res) => {
        const {username, password} = req.body
        console.log(req.session)
        const {session} = req;
        const db = req.app.get("db");

       let user = await db.check_user([username]);
       user = user[0]
       if(user){
           return res.status(400).send(`User already exists :( SORRY`)
       }
       const salt = bcrypt.genSaltSync(10);
       const hash = bcrypt.hashSync(password, salt);

       let newUser = await db.register({username, hash})
       newUser = newUser[0]
       session.user = newUser

       res.status(200).send(session.user)

    },   
showAllPosts: async (req, res) => {
    const {id} = req.params
    const db = req.app.get('db');
    const posts = await db.get_posts([id]);
    if (posts[0]) {
      res.status(200).send(posts);
    } else {
      res.status(500).send(`Couldn't find posts`);
    }
    //  await db.get_posts().then(posts =>{
    //     res.status(200).send(posts)
    // }).catch(err => res.status(500).send(err))
},

    logout: (req, res ) => {
        req.session.destroy();
        res.sendStatus(200)
    }
}


