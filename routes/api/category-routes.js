const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
      include: [Product]
  }).then(CategoryData => {
      res.json(CategoryData)
  }).catch(err => {
      console.log(err);
      res.status(500).json({ msg: "Internal server error.", err })
  })
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {
      include: [Product]
  }).then(CategoryData => {
      res.json(CategoryData)
  }).catch(err => {
      console.log(err);
      res.status(500).json({ msg: "Internal server error.", err })
  })
});

  // create a new category
router.post('/', (req, res) => {
});

  // update a category by its `id` value
router.put('/:id', (req, res) => {

});

  // delete a category by its `id` value
router.delete('/:id', (req, res) => {

});

module.exports = router;
