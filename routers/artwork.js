const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Artwork = require("../models").artwork;
const Bid = require("../models").bid;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const artworks = await Artwork.findAll({
      include: { model: Bid },
    });
    res.send(artworks);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const artwork = await Artwork.findByPk(id, {
      include: {
        model: Bid,
        order: [["amount", "DESC"]],
      },
    });
    res.send(artwork);
  } catch (e) {
    next(e);
  }
});

router.patch("/:id/like", async (req, res, next) => {
  try {
    const { id } = req.params;
    const artwork = await Artwork.findByPk(id);
    const currentHearts = artwork.hearts;
    artwork.set({
      hearts: currentHearts + 1,
    });
    await artwork.save();
    res.send();
  } catch (e) {
    next(e);
  }
});

router.post("/:id/bid", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { amount, email } = req.body;

    const artwork = await Artwork.findByPk(id, {
      include: {
        model: Bid,
        order: [["amount", "DESC"]],
      },
    });
    const highestScore = Math.max(...artwork.bids.map((bid) => bid.amount));

    const minimumBid = highestScore > 0 ? highestScore : artwork.minimumBid;

    if (amount <= minimumBid) {
      return res.status(400).send(`Amount should be more than ${highestScore}`);
    }

    if (!amount) {
      return res.status(400).send(`Please specify an amount`);
    }
    if (!email) {
      return res.status(400).send(`Please specify an email`);
    }

    const newBid = await Bid.create({
      email: email,
      amount: amount,
      artworkId: id,
    });
    res.send(newBid);
  } catch (e) {
    next(e);
  }
});

router.post("/auction", authMiddleware, async (req, res, next) => {
  try {
    const { title, minimumBid, imageUrl } = req.body;
    console.log(title);
    if (!title) {
      return res.status(400).send(`Please specify title`);
    }
    if (!minimumBid) {
      return res.status(400).send(`Please specify a minimun bid`);
    }
    if (!imageUrl) {
      return res.status(400).send(`Please specify image`);
    }
    const user = req.user;
    const newAuction = await Artwork.create({
      userId: user.id,
      title: title,
      minimumBid: minimumBid,
      imageUrl: imageUrl,
      hearts: 0,
    });

    return res.send(newAuction);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
