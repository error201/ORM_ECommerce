const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
      include: [Product]
  }).then(TagData => {
      res.json(TagData)
  }).catch(err => {
      console.log(err);
      res.status(500).json({ msg: "Internal server error.", err })
  })
});

router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, {
      include: [Product]
  }).then(TagData => {
      res.json(TagData)
  }).catch(err => {
      console.log(err);
      res.status(500).json({ msg: "Internal server error.", err })
  })
});

  // create a new tag
router.post('/', (req, res) => {
});

  // update a tag's name by its `id` value
router.put('/:id', (req, res) => {
});

  // delete on tag by its `id` value
router.delete('/:id', (req, res) => {
});

module.exports = router;
