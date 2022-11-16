const router = require("express").Router();
const { book } = require("../controllers");
const { multerUpload } = require("../helpers/multer");

router.post("/create", book.create);
router.get("/list", book.getAll);
router.get("/list/filter", book.getBy);
router.get("/list/:id", book.getById);
router.delete("/list/:id", book.delete);
router.patch("/list", book.update);
router.get("/list/total", book.totalBooks);
router.get("/search", book.searchBy);
router.get("/sort", book.sortBy);
router.post("/uploaded/:id", multerUpload.single("file"), book.uploadFile)

module.exports = router;
