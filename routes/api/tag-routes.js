const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
    Tag.findAll({
        include: [Product]
    }).then(TagData => {
        if (TagData) {
            return res.status(200).json(TagData)
        } else {
            return res.status(404).json({ msg: "Record not found." })
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "Internal server error.", err })
    })
});

router.get('/:id', (req, res) => {
    Tag.findByPk(req.params.id, {
        include: [Product]
    }).then(TagData => {
        if (TagData) {
            return res.status(200).json(TagData)
        } else {
            return res.status(404).json({ msg: "Record not found." })
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "Internal server error.", err })
    })
});

// create a new tag
router.post('/', (req, res) => {
    Tag.create({
        tag_name: req.body.tag_name
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

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
    Tag.update({
        tag_name: req.body.tag_name
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

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
    Tag.destroy({
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
