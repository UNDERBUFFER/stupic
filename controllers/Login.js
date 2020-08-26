
class Login {
    static get(request, response) {
        response.render("login.hbs");
    }
    static post(request, response) {
        console.log(request.body)
        response.render("login.hbs");
    }
}

module.exports = Login
