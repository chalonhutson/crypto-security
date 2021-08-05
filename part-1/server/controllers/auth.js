

const users = [{username: "jimbob", email: "jimbob40000@email.em", firstName: "Jim", lastName: "Bob", password: "$2a$10$RHojMo.eYkx.EJkp1Vj3peSDobGlWxXjbDeCokVxLN1/735p4j17y"}]

const bcrypt = require("bcryptjs")

const salt = bcrypt.genSaltSync(10);

module.exports = {
    login: (req, res) => {

      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body

      // const passHash = bcrypt.hashSync(password, salt);

      // console.log(passHash)
      
      
      
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && bcrypt.compareSync(password, users[i].password)) {
          res.status(200).send(users[i])
        } else{
          res.status(400).send("User not found.")
        }
      }
    },


    register: (req, res) => {

      let {username, email, firstName, lastName, password} = req.body

      // const salt = bcrypt.genSaltSync(10);
      password = bcrypt.hashSync(password, salt);

      const newUser = {username, email, firstName, lastName, password}

      users.push(newUser);

      let tempUser = {...newUser}
      
      delete tempUser.password

      res.status(200).send(tempUser)
      console.log(users)
    }
}