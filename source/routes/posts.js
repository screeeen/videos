/** source/controllers/posts.ts */
// import { Request, Response, NextFunction } from 'express';
// import axios, { AxiosResponse } from 'axios';

var router = require("express").Router();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

const Video = require("../../model/video-model");

// getting all posts
// const getPosts = async (req: Request, res: Response, next: NextFunction) => {
//     // get some posts
//     let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
//     let posts: [Post] = result.data;
//     return res.status(200).json({
//         message: posts
//     });
// };

router.get("/", function (req, res) {
  Video.find()
    .then((videos) => {
      console.log("GET /videos ....");
      res.status(200);
      res.json(videos);
    })
    .catch((error) => {
      res.status(500).json(err);
    });
});

// // getting a single post
// const getPost = async (req: Request, res: Response, next: NextFunction) => {
//     // get the post id from the req
//     let id: string = req.params.id;
//     // get the post
//     let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     let post: Post = result.data;
//     return res.status(200).json({
//         message: post
//     });
// };

// // updating a post
// const updatePost = async (req: Request, res: Response, next: NextFunction) => {
//     // get the post id from the req.params
//     let id: string = req.params.id;
//     // get the data from req.body
//     let title: string = req.body.title ?? null;
//     let body: string = req.body.body ?? null;
//     // update the post
//     let response: AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         ...(title && { title }),
//         ...(body && { body })
//     });
//     // return response
//     return res.status(200).json({
//         message: response.data
//     });
// };

// // deleting a post
// const deletePost = async (req: Request, res: Response, next: NextFunction) => {
//     // get the post id from req.params
//     let id: string = req.params.id;
//     // delete the post
//     let response: AxiosResponse = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     // return response
//     return res.status(200).json({
//         message: 'post deleted successfully'
//     });
// };

// // adding a post
// const addPost = async (req: Request, res: Response, next: NextFunction) => {
//     // get the data from req.body
//     let title: string = req.body.title;
//     let body: string = req.body.body;
//     // add the post
//     let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
//         title,
//         body
//     });
//     // return response
//     return res.status(200).json({
//         message: respon  se.data
//     });
// };

// export default { getPosts, getPost, updatePost, deletePost, addPost };

module.exports = router;




///// ------------ ◊◊◊◊

// var router = require("express").Router();
// const mongoose = require("mongoose");
// var bodyParser = require("body-parser");

// const Spot = require("../model/spots-model");

// router.get("/", function (req, res) {
//   Spot.find()
//     .populate("tricks")
//     .then((spots) => {
//       // Spot.find(function (err, spots) {
//       console.log("GET /spots ....");
//       res.status(200);
//       res.json(spots);
//     })
//     .catch((error) => {
//       res.status(500).json(err);
//     });
// });

// function escapeRegex(text) {
//   return text.toString().replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
// }

// router.get("/name/:name", function (req, res) {
//   const nameSearch = req.params;
//   const search = Object.values(nameSearch)[0];
//   console.log("nameSearch", search);
//   Spot.find({ $text: { $search: search } })
//     .then((foundSpot) => {
//       res.status(200).json(foundSpot);
//     })
//     .catch((err) => {
//       res.json({ message: err });
//     });
// });

// router.get("/location/:location", function (req, res) {
//   const locationSearch = req.params;
//   console.log("location search", locationSearch);
//   Spot.find(locationSearch)
//     .then((foundSpot) => {
//       res.status(200).json(foundSpot);
//     })
//     .catch((err) => {
//       res.json({ message: "nothing" });
//     });
// });

// router.get("/spotType/:spotType", function (req, res) {
//   const spotType = req.params;
//   console.log("location search", spotType);
//   Spot.find(spotType)
//     .then((foundSpot) => {
//       res.status(200).json(foundSpot);
//     })
//     .catch((err) => {
//       res.json({ message: "nothing" });
//     });
// });

// // ------ post ------
// router.post("/", async (req, res, next) => {
//   const { name, description, location, spotType, date, trick } = req.body;
//   console.log(
//     "post spot params",
//     name,
//     description,
//     location,
//     spotType,
//     date,
//     trick
//   );
//   try {
//     const spot = await Spot.findOne({ name }, "name");
//     console.log("ya ta subio", spot);
//     if (spot) {
//       res.jsonp({ message: "ya ta subio" });
//       return;
//     } else {
//       await Spot.create({ name, description, location, spotType, date, trick });
//       console.log("created", name, trick);
//       res.status(201).jsonp({ message: "created" });
//     }
//   } catch (error) {
//     next(error);
//   }
// });

// router.put("/:id", function (req, res) {
//   res.json({ message: "Vas a actualizar el spot con id " + req.params.id });
// });

// router.delete("/:id", function (req, res) {
//   res.json({ message: "Vas a borrar el spot con id " + req.params.id });
// });
// module.exports = router;
