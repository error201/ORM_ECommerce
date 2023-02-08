const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    Category.findAll({
        include: [Product]
    }).then(CategoryData => {
        if (CategoryData) {
            return res.status(200).json(CategoryData)
        } else {
            return res.status(404).json({ msg: "Record not found." })
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "Internal server error.", err })
    })
});

router.get('/:id', (req, res) => {
    Category.findByPk(req.params.id, {
        include: [Product]
    }).then(CategoryData => {
        if (CategoryData) {
            return res.status(200).json(CategoryData)
        } else {
            return res.status(404).json({ msg: "Record not found." })
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "Internal server error.", err })
    })
});

// create a new category
router.post('/', (req, res) => {
    Category.create({
        category_name: req.body.category_name
    }).then(data => {
        if (data) {
            return res.status(200).json(data)
        } else {
            return res.status(404).json({ msg: "Record not found." })
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            msg: "Internal server error.",
            err: err
        })
    })
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
    Category.update({
        category_name: req.body.category_name
    }, {
        where: {
            id: req.params.id
        }
    }).then(data => {
        if (data[0]) {
            return res.status(200).json(data)
        } else {
            return res.status(404).json({ msg: "Record not found." })
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            msg: "Internal server error.",
            err: err
        })
    })
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
    Category.destroy({
        where: {
            id: req.params.id
        }
    }).then(data => {
        if (data) {
            return res.status(200).json(data)
        } else {
            return res.status(404).json({ msg: "Record not found." })
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            msg: "Internal server error.",
            err: err
        })
    })
});

module.exports = router;
