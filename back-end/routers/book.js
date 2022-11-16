const router = require("express").Router();
const { book } = require("../controllers");

router.post("/create", book.create);
router.get("/list", book.getAll);
router.get("/list/filter", book.getBy);
router.get("/list/:id", book.getById);
router.delete("/list/:id", book.delete);
router.patch("/list", book.update);
router.get("/list/total", book.totalBooks);
<<<<<<< HEAD
router.get("/view2", book.view2);
// router.get("/list/title", book.getByTitle);
// router.get("/author", book.getByAuthor);
// router.get("/genre", book.getByGenre);
// router.get("/publisher", book.getByPublisher);
=======
router.get("/search", book.searchBy);
router.get("/sort", book.sortBy);
>>>>>>> stage

module.exports = router;
