
class Registration {
    static get(request, response) {
        response.render("registration.hbs");
    }
    static post(request, response) {
        console.log(request.body)
        response.render("registration.hbs");
    }
}

module.exports = Registration
