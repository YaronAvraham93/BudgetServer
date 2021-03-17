const { check } = require("express-validator");


const userValidation = [
    check("first_name", "Name is requird minimum of two letters").not().isEmpty().isLength({min:2}),
    check("last_name", "Last name is requird minimum of two letters").not().isEmpty().isLength({min:2})
  ];
  const transactionValidation = [
    check("paymentType", "paymentType is requird ").not().isEmpty(),
    check("paymentMethod", "paymentMethod is requird ").not().isEmpty(),
    check("cancelled", "cancelled is requird ").not().isEmpty(),
    check("currency", "currency is requird ").not().isEmpty(),
    check("category", "category is requird ").not().isEmpty(),
    check("company", "company is requird ").not().isEmpty(),
    check("amount", "amount is requird ").not().isEmpty(),
    check("location", "location is requird ").not().isEmpty(),
  ];
  module.exports = {
    userValidation,
    transactionValidation
  };