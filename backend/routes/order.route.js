let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Order Model
let orderSchema = require('../models/order');

// CREATE Orders
router.route('/create').post((req, res, next) => {
  orderSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ Orders
router.route('/').get(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const orders = await orderSchema
      .find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await orderSchema.countDocuments();

    // return response with posts, total pages, and current page
    res.json({
      orders,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (err) {
    console.error(err.message);
  }
});

// Get Single Order
router.route('/edit/:id').get((req, res) => {
  orderSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Order
router.route('/update/:id').put((req, res, next) => {
  const id = req.params.id;
  let update = req.body;

  orderSchema.findByIdAndUpdate(id, update, (error, data) => {
    if (error) {
      return next(error);
      console.log(error);
    } else {
      res.json(data);
      console.log('Order updated successfully !');
    }
  });
});

// Delete Order
router.route('/delete/:id').delete((req, res, next) => {
  orderSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      });
    }
  });
});

module.exports = router;
