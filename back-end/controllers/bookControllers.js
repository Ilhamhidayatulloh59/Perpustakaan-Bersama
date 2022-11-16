const { Op } = require("sequelize");
const { sequelize } = require("../models");
const db = require("../models");
const book = db.Book;

module.exports = {
  create: async (req, res) => {
    try {
      const { Title, Author, Genre, Publisher, Abstract, Images } = req.body;
      if (!Title && !Author && !Genre && !Publisher && !Abstract && !Images)
        throw "required field";
      const data = await book.create({
        Title,
        Author,
        Genre,
        Publisher,
        Abstract,
        Images,
      });
      res.status(200).send("Successfully Added");
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await book.findAll({
        attributes: [
          "Title",
          "Author",
          "Genre",
          "Publisher",
          "Abstract",
          "Images",
        ],
      });
      res.status(200).send(users);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  getById: async (req, res) => {
    try {
      const users = await book.findOne({
        // include: book,
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send(users);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  getBy: async (req, res) => {
    try {
      const { Title, Genre, Publisher, Author } = req.query;
      const users = await book.findAll({
        where: {
          [Op.like]: {
            [Op.or]: {
              Title: Title ? Title : "",
              Author: Author ? Author : "",
              Genre: Genre ? Genre : "",
              Publisher: Publisher ? Publisher : "",
            },
          },
        },
        raw: true,
      });
      res.status(200).send(users);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
  //   getByTitle: async (req, res) => {
  //     try {
  //       const users = await book.findAll({
  //         include: book,
  //         where: {
  //           Title: Title,
  //         },
  //       });
  //       res.status(200).send(users);
  //     } catch (err) {
  //       console.log(err);
  //       res.status(400).send(err);
  //     }
  //   },
  //   getByAuthor: async (req, res) => {
  //     try {
  //       const users = await book.findAll({
  //         include: book,
  //         where: {
  //           Author: req.query.Author,
  //         },
  //       });
  //       res.status(200).send(users);
  //     } catch (err) {
  //       console.log(err);
  //       res.status(400).send(err);
  //     }
  //   },
  //   getByGenre: async (req, res) => {
  //     try {
  //       const users = await book.findAll({
  //         include: book,
  //         where: {
  //           Genre: req.query.Genre,
  //         },
  //       });
  //       res.status(200).send(users);
  //     } catch (err) {
  //       console.log(err);
  //       res.status(400).send(err);
  //     }
  //   },
  //   getByPublisher: async (req, res) => {
  //     try {
  //       const users = await book.findAll({
  //         include: book,
  //         where: {
  //           Publisher: req.query.Publisher,
  //         },
  //       });
  //       res.status(200).send(users);
  //     } catch (err) {
  //       console.log(err);
  //       res.status(400).send(err);
  //     }
  //   },

  totalBooks: async (req, res) => {
    try {
      const users = await book.findAll({
        attributes: [[sequelize.fn("count", sequelize.col(`id`)), "total"]],
      });
      res.status(200).send(users);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  delete: async (req, res) => {
    try {
      await book.destroy({
        where: {
          id: req.params.id,
        },
      });
      const users = await book.findAll();
      res.status(200).send(users);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  update: async (req, res) => {
    try {
      await book.update(
        {
          Title: req.body.Title,
          Author: req.body.Author,
          Genre: req.body.Genre,
          Publisher: req.body.Publisher,
          Abstract: req.body.Abstract,
          Images: req.body.Images,
        },
        {
          where: { id: req.params.id },
        }
      );
      const users = await book.findAll({ where: { id: req.params.id } });
      res.status(200).send(users);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
  view2: async (req, res) => {
    try {
      const { page, limit, search_query, order, order_direction } = req.query;
      const booklist_page = parseInt(page) || 0;
      const list_limit = parseInt(limit) || 10;
      const search = search_query || '';
      const offset = list_limit * booklist_page;
      const orderby = order || 'Title';
      const direction = order_direction || 'ASC';
      const totalRows = await book.count({
        where: {
          [Op.or]: [
            {
              Title: {
                [Op.like]: '%' + search + '%',
              },
            },
            {
              Author: {
                [Op.like]: '%' + search + '%',
              },
            },
            {
              Publisher: {
                [Op.like]: '%' + search + '%',
              },
            },
          ],
        },
      });
      const totalPage = Math.ceil(totalRows / limit);
      const result = await book.findAll({
        where: {
          [Op.or]: [
            {
              Title: {
                [Op.like]: '%' + search + '%',
              },
            },
            {
              Author: {
                [Op.like]: '%' + search + '%',
              },
            },
            {
              Publisher: {
                [Op.like]: '%' + search + '%',
              },
            },
          ],
        },
        offset: offset,
        limit: list_limit,
        order: [[orderby, direction]],
      });

      res.status(200).json({
        result: result,
        page: booklist_page,
        limit: list_limit,
        totalRows: totalRows,
        totalPage: totalPage,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
