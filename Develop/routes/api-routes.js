const db = require("../models");

module.exports = function (app) {
    
    // Get last Workout Data 
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(data => {
          console.log(data)
          res.json(data)
        })
    });

    // Post new workout information
    app.post("/api/workouts", ({
        body
      }, res) => {
        // console.log(body);
        db.Workout.create(body).then(data => {
          //dostuff
          res.json(data)
        })
    });

    // Update the workout information
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
        req.params.id, 
        {
            $push: {
            exercises: req.body
        }
        }
        ).then(data => {
          console.log(data);
          res.json(data)
        });
    });

    // Get all workout data
    app.get("/api/workouts/all", (req, res) => {
        db.Workout.find({})
          .then(data => {
            res.json(data);
          })
          .catch(err => {
            res.json(err);
          });
    });


};