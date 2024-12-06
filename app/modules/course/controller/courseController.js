
class CourseController {

    async list(req, res) {
        res.render('course/list',
            { title: 'Course List' })
    }

}


module.exports = new CourseController();