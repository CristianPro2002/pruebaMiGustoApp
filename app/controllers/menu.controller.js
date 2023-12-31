const menuSchema = require("../models/menu.model.js");
const { catchedAsync, response } = require("../helpers");

// const getMenus = async (req, res) => {
//   await menuSchema
//     .find()
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => res.json({ message: err }));
// };

const getMenusByPlaces = async (req, res, next) => {
  let listId = req.body.listId;
  await menuSchema
    .find({ places: { $in: listId } })
    .then((data) => response(res, 200, data));
};

const getMenuById = async (req, res) => {
  await menuSchema
    .findById(req.params.id)
    .then((data) => response(res, 200, data));
};

// const postMenu = async (req, res) => {
//   const menu = menuSchema(req.body);
//   await menu
//     .save()
//     .then((data) => res.json(data))
//     .catch((err) => res.json({ message: err }));
// };

// const deleteMenu = async (req, res) => {
//   await menuSchema
//     .findByIdAndDelete(req.params.id)
//     .then((data) => res.json(data))
//     .catch((err) => res.json({ message: err }));
// };

// const updateMenu = async (req, res) => {
//   const menu = await menuSchema.findByIdAndUpdate(req.params.id, req.body);
//   await menu
//     .save()
//     .then((data) => res.json(data))
//     .catch((err) => res.json({ message: err }));
// };

module.exports = {
  getMenuById: catchedAsync(getMenuById),
  getMenusByPlaces: catchedAsync(getMenusByPlaces),
};
