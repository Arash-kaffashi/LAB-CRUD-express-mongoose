import { Router } from "express";
import AlbumModel from "../models/album.model.js";

const albumsRoutes = Router();

albumsRoutes.post("/albums", async (req, res) => {
  try {
    let album = await AlbumModel.create(req.body);
    return res.status(201).json(album);
  } catch (error) {
    res.status(400).json(error.errors);
  }
});

albumsRoutes.get("/albums", async (req, res) => {
  try {
    let albuns = await AlbumModel.find();
    return res.status(200).json(albuns);
  } catch (error) {
    res.status(500).json(error.errors);
  }
});

albumsRoutes.get("/albums/:albumId", async (req, res) => {
  try {
    let album = await AlbumModel.findById(req.params.albumId);
    return res.status(200).json(album);
  } catch (error) {
    res.status(400).json(error.errors);
  }
});

albumsRoutes.put("/albums/:albumId", async (req, res) => {
  try {
    let album = await AlbumModel.findByIdAndUpdate(
      req.params.albumId,
      req.body,
      { new: true, runValidators: true }
    );
    return res.status(200).json(album);
  } catch (error) {
    res.status(400).json(error.errors);
  }
});

albumsRoutes.delete("/albums/:albumId", async (req, res) => {
  try {
    await AlbumModel.findByIdAndDelete(req.params.albumId);
    return res.status(204).json();
  } catch (error) {
    res.status(400).json(error.errors);
  }
});

export default albumsRoutes;
