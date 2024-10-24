import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    workoutName: {
      type: String,
      required: true,
    },
    sets: {
      type: Number,
      min: 0, // Optional: Ensure sets cannot be negative
    },
    reps: {
      type: Number,
      min: 0, // Optional: Ensure reps cannot be negative
    },
    weight: {
      type: Number,
      min: 0, // Optional: Ensure weight cannot be negative
    },
    duration: {
      type: Number,
      min: 0, // Optional: Ensure duration cannot be negative
    },
    caloriesBurned: {
      type: Number,
      min: 0, // Optional: Ensure calories burned cannot be negative
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Compound index to ensure unique workout names per user
WorkoutSchema.index({ user: 1, workoutName: 1 }, { unique: true });

// Create and export the Workout model
const Workout = mongoose.model("Workout", WorkoutSchema);
export default Workout;
