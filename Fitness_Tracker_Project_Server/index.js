const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const port = 5000;

app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "https://trackfit.surge.sh"],
    credentials: true,
  })
);

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@trackfit.twnbxx2.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const verifyToken = async (req, res, next) => {
  try {
    const { token } = req.headers;
    const { email } = req.params;
    jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
      if (decoded?.email === email) {
        next();
      } else {
        res.status(404).send({ massage: "unauthorize acces" });
      }
    });
  } catch (err) {
    res.status(500).send({ massage: "Internal Server Error" });
  }
};

async function run() {
  try {
    const UserCollection = client.db("TrackFit").collection("Users");
    const ImageCollection = client.db("TrackFit").collection("Images");
    const SlotCollection = client.db("TrackFit").collection("Slots");
    const PaymentCollection = client.db("TrackFit").collection("Payments");
    const ClassCollection = client.db("TrackFit").collection("Classes");
    const ForumCollection = client.db("TrackFit").collection("Forums");
    const NewsLetterCollection = client
      .db("TrackFit")
      .collection("NewsLetters");

    const verifyAdmin = async (req, res, next) => {
      try {
        const { token } = req.cookies;
        const { email } = req.params;
        const result = await UserCollection.findOne({ email });
        if (result.role === "admin") {
          console.log(result.role === "admin");
          next();
        } else {
          res.status(404).send({ massage: "unauthorize acces" });
        }
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    };

    const verifyTrainer = async (req, res, next) => {
      try {
        const { email } = req.params;
        const result = await UserCollection.findOne({ email });
        if (result.role === "trainer") {
          next();
        } else {
          res.status(404).send({ massage: "unauthorize acces" });
        }
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    };

    const verifyTrainerOrAdmin = async (req, res, next) => {
      try {
        const { email } = req.params;

        const result = await UserCollection.findOne({ email });
        if (result.role === "trainer" || result.role === "admin") {
          next();
        } else {
          res.status(404).send({ massage: "unauthorize acces" });
        }
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    };

    // Auth api
    app.get("/token/:email", async (req, res) => {
      try {
        const { email } = req.params;
        console.log(email);
        const token = jwt.sign({ email: email }, process.env.TOKEN_SECRET);
        res.send({ token: token });
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    });

    app.get("/get-role/:email", async (req, res) => {
      try {
        const { email } = req.params;
        const result = await UserCollection.findOne({ email: email });
        res.send({ role: result?.role });
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    });

    // Users api
    app.post("/news-latter", async (req, res) => {
      try {
        const newsLetterDetails = req.body;
        const result = await NewsLetterCollection.insertOne(newsLetterDetails);
        res.send(result);
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    });

    app.post("/users", async (req, res) => {
      try {
        const user = req.body;
        const query = { email: user.email };
        const userInDb = await UserCollection.findOne(query);
        if (!userInDb) {
          const result = await UserCollection.insertOne(user);
          return res.send(result);
        }
        res.send();
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    });

    app.get("/leatest-forums", async (req, res) => {
      try {
        const result = await ForumCollection.find().limit(3).toArray();
        res.send(result);
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    });

    app.get("/forum-details/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const result = await ForumCollection.findOne({ _id: new ObjectId(id) });
        res.send(result);
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    });

    app.put("/users", async (req, res) => {
      try {
        const user = req.body;
        const query = { email: user.email };
        const updateDoc = {
          $set: {
            ...user,
          },
        };
        console.log(updateDoc);
        const result = await UserCollection.updateOne(query, updateDoc);
        // const result = await UserCollection.updateOne(query, updateDoc);
        console.log(result);
        res.send(result);
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    });

    app.put("/update-users/:email", async (req, res) => {
      try {
        const { email } = req.params;
        const doc = req.body;
        const query = { email };
        const updateDoc = {
          $set: {
            ...doc,
          },
        };
        console.log(updateDoc);
        const result = await UserCollection.updateOne(query, updateDoc);
        // const result = await UserCollection.updateOne(query, updateDoc);
        console.log(result);
        res.send(result);
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    });

    app.get("/trainers", async (req, res) => {
      try {
        const result = await UserCollection.find({ role: "trainer" }).toArray();
        res.send(result);
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    });

    app.get("/classes/:email", verifyToken, async (req, res) => {
      try {
        const result = await ClassCollection.find().toArray();
        res.send(result);
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    });

    app.get("/classes", verifyToken, async (req, res) => {
      try {
        const result = await ClassCollection.find().limit(6).toArray();
        res.send(result);
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    });

    app.get("/classes/:id/:email", verifyToken, async (req, res) => {
      try {
        const { id } = req.params;
        const result = await ClassCollection.findOne({ _id: new ObjectId(id) });
        res.send(result);
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    });

    app.get("/trainer-slots/:email", async (req, res) => {
      try {
        const { email } = req.params;
        const result = await SlotCollection.find({
          trainerEmail: email,
          status: "unbooked",
        }).toArray();
        res.send(result);
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    });

    app.get("/activity/:email", verifyToken, async (req, res) => {
      try {
        const { email } = req.params;
        const result = await SlotCollection.find({ bookBy: email }).toArray();
        res.send(result);
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    });

    app.post("/bokkings", async (req, res) => {
      try {
        const { email, bookigsId, trainerEmail, money, paymentBy, paymentId } =
          req.body;
        const data = {
          bookBy: email,
          bookigsId,
          money,
          paymentBy,
          paymentId,

          status: "pending",
          trainerEmail,
        };
        const result = await PaymentCollection.insertOne(data);
        res.send(result);
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    });

    app.get("/daily-Work-out/:email", verifyToken, async (req, res) => {
      try {
        const { email } = req.params;
        const result = await PaymentCollection.aggregate([
          {
            $match: {
              bookBy: email,
              status: "accept",
            },
          },
          {
            $addFields: {
              slotsIdObject: {
                $toObjectId: "$bookigsId",
              },
            },
          },
          {
            $lookup: {
              from: "Slots",
              localField: "slotsIdObject",
              foreignField: "_id",
              as: "slots",
            },
          },
          {
            $unwind: "$slots",
          },
          {
            $lookup: {
              from: "Users",
              localField: "slots.trainerEmail",
              foreignField: "email",
              as: "trainer",
            },
          },
          {
            $unwind: "$trainer",
          },
          {
            $group: {
              _id: "$email",
              exercises: { $push: "$trainer.trainerRole" },
            },
          },
        ]).toArray();

        console.log(result);
        res.send({ exercises: result[0]?.exercises || [] });
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    });

    app.get("/forums/:email", verifyToken, async (req, res) => {
      try {
        const total = await ForumCollection.estimatedDocumentCount();
        const result = await ForumCollection.find().limit(6).toArray();
        res.send({ total: total, forums: result });
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    });

    // trainer api
    app.post("/add-class/:email", verifyToken, async (req, res) => {
      try {
        const classDetails = req.body;
        const result = await ClassCollection.insertOne(classDetails);
        res.send(classDetails);
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    });

    app.get("/bokings/:email", verifyToken, verifyTrainer, async (req, res) => {
      try {
        const { email } = req.params;
        const result = await PaymentCollection.find({
          trainerEmail: email,
          status: "pending",
        }).toArray();
        res.send(result);
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    });

    app.get(
      "/trainer-booked-slots/:email",
      verifyToken,
      verifyTrainer,
      async (req, res) => {
        try {
          const { email } = req.params;
          const result = await SlotCollection.find({
            trainerEmail: email,
            status: "accept",
          }).toArray();
          res.send(result);
        } catch (err) {
          res.status(500).send({ massage: "Internal Server Error" });
        }
      }
    );

    app.put(
      "/update-slot/:email",
      verifyToken,
      verifyTrainer,
      async (req, res) => {
        try {
          const { email } = req.params;
          const { bookBy, status, accepDate, slotID, bookingId } = req.body;

          const updateDoc = {
            $set: { bookBy, status, accepDate },
          };

          const query = { _id: new ObjectId(slotID) };

          if (status === "accept") {
            const result = await SlotCollection.updateOne(query, updateDoc);
          }

          const updateBooking = await PaymentCollection.updateOne(
            {
              _id: new ObjectId(bookingId),
            },
            {
              $set: { status, bookBy },
            }
          );

          res.send({});
        } catch (err) {
          res.status(500).send({ massage: "Internal Server Error" });
        }
      }
    );

    // Admin api
    app.get(
      "/applied-trainers/:email",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        try {
          const appliedTrainer = await UserCollection.find({
            status: "pending",
          }).toArray();
          res.send(appliedTrainer);
        } catch (err) {
          res.status(500).send({ massage: "Internal Server Error" });
        }
      }
    );

    app.get(
      "/newsletter-subscribers/:email",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        try {
          const newsLetterSuscribers =
            await NewsLetterCollection.find().toArray();
          res.send(newsLetterSuscribers);
        } catch (err) {
          res.status(500).send({ massage: "Internal Server Error" });
        }
      }
    );

    app.get("/statistic/:email", verifyToken, verifyAdmin, async (req, res) => {
      try {
        const newsLetterSuscribers =
          await NewsLetterCollection.estimatedDocumentCount();
        const paidSuscribers = await PaymentCollection.estimatedDocumentCount();
        const lastPayments = await PaymentCollection.find().limit(6).toArray();
        const totalPayments = await PaymentCollection.find().toArray();
        const totalAmount = totalPayments.reduce(
          (prev, curPayment) => prev + curPayment.money,
          0
        );

        const stat = { paidSuscribers, lastPayments, totalAmount, newsLetterSuscribers };

        res.send(stat);
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    });

    app.put(
      "/update-role/:email",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        try {
          const { email, role, status, accepDate, freeTime, trainerName } =
            req.body;
          const user = await UserCollection.findOne({ email: email });
          const trainerSlots = [];

          // trainerSlot constructor
          function creatSlot(slotNum, trainer) {
            this.slotName = `Slot No: ${slotNum}`;
            this.trainerEmail = `${trainer}`;
            this.bookBy = "";
            this.status = "unbooked";
            this.trainerName = trainerName;
          }

          if (status === "accept") {
            // convert free time i utc
            const freeTimeUTC = new Date("1970-01-01T" + freeTime + "Z");
            const oneHourInMili = 60 * 60 * 1000;

            for (let i = 1; i <= user.availableTimeInADay; i++) {
              const slot = new creatSlot(i, email);

              // insert slotTime in slot
              const slotTimeStr = new Date(
                freeTimeUTC.getTime() + (i - 1) * oneHourInMili
              )
                .toISOString()
                .substr(11, 5);
              slot.slotTime = slotTimeStr;

              // push slot in trainer slots
              trainerSlots.push(slot);
            }

            // insert trainerSlot in DB
            const options = { ordered: true };
            await SlotCollection.insertMany(trainerSlots, options);
          }

          const updateDoc = {
            $set: { role, status, acceptOrRejectDate: accepDate },
          };
          const query = { email: email };
          const result = UserCollection.updateOne(query, updateDoc);
          res.send(result);
        } catch (err) {
          res.status(500).send({ massage: "Internal Server Error" });
        }
      }
    );

    // admin and trainer api
    app.post(
      "/add-forum/:email",
      verifyToken,
      verifyTrainerOrAdmin,
      async (req, res) => {
        try {
          const forumDetails = req.body;
          const result = await ForumCollection.insertOne(forumDetails);
          res.send(result);
        } catch (err) {
          res.status(500).send({ massage: "Internal Server Error" });
        }
      }
    );

    // image api
    app.get("/total-image", async (req, res) => {
      try {
        const result = await ImageCollection.estimatedDocumentCount();
        res.send({ totalImage: result });
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    });

    app.get("/images", async (req, res) => {
      try {
        const { page } = req.query;
        const result = await ImageCollection.find()
          .skip(page * 12)
          .limit(12)
          .toArray();
        res.send(result);
      } catch (err) {
        res.status(500).send({ massage: "Internal Server Error" });
      }
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
