

class dashboardController {
   


    async dashboard(req, res) {
        try {
            res.render('dashboard', {
                title: "dashboard page"
            })

        } catch (error) {
            console.log(error);

        }
    }
    async adminLogin(req, res) {
        try {
            res.render('login', {
                title: "login page"
            })

        } catch (error) {
            console.log(error);

        }
    }
}

module.exports = new dashboardController();