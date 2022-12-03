import { Router } from "express";
import PurchaseModel from "../models/purchase.model.js";
import AlbumModel from "../models/album.model.js";

const purchaseRouter = Router();

purchaseRouter.post("/purchases", async (req, res) => {
  try {
    const purchase = await PurchaseModel.create(req.body);
    return res.status(201).json(purchase);
  } catch (error) {
    return res.status(400).json(error.errors);
  }
});

purchaseRouter.get("/purchases/:purchaseId", async (req, res) => {
  try {
    const purchase = await PurchaseModel.findById(
      req.params.purchaseId
    ).populate("album");
    return res.status(200).json(purchase);
  } catch (error) {
    return res.status(400).json(error.errors);
  }
});

export default purchaseRouter;
