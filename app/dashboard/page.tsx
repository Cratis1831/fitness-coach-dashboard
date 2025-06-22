"use client";
import { Button } from "@/components/ui/button";
import { Workout, WORKOUT_MOCK_DATA } from "@/models/workout";
import React, { useState } from "react";

const DashboardPage = () => {
  const [currentWorkout, setCurrentWorkout] =
    useState<Workout>(WORKOUT_MOCK_DATA);

  // Create a list of exercises
  const [exercises, setExercises] = useState<string[]>([]);

  const handleStartWorkout = () => {
    setCurrentWorkout({
      ...WORKOUT_MOCK_DATA,
      isActive: true,
      date: new Date(),
      updatedAt: new Date(),
    });
  };

  const handleCancelWorkout = () => {
    setCurrentWorkout({
      ...currentWorkout,
      isActive: false,
      updatedAt: new Date(),
    });
    setExercises([]); // Clear exercises when workout is canceled
  };

  // TODO: Implement a function to add exercises to the workout
  const handleAddExercise = (exercise: string) => {
    setExercises([...exercises, exercise]);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 p-4">
      {!currentWorkout.isActive ? (
        <Button
          size="lg"
          className="bg-orange-500 hover:bg-orange-600"
          onClick={handleStartWorkout}
        >
          Start Workout
        </Button>
      ) : (
        <div className="flex w-full h-full">
          <section className="bg-white p-4 shadow-md rounded-lg flex-grow h-[50%]">
            <h1 className="text-2xl font-bold text-gray-800">
              {currentWorkout.title}
            </h1>
            <p className="text-gray-600">
              {currentWorkout.date.toLocaleString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
            <p className="text-gray-600">Notes: {currentWorkout.notes}</p>
            <p className="text-gray-600">
              Status: {currentWorkout.isActive ? "Active" : "Inactive"}
            </p>
            <div className="mt-4 flex gap-4">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600"
                onClick={() => handleAddExercise("New Exercise")}
              >
                Add Exercises
              </Button>
              <Button
                size="lg"
                variant={"destructive"}
                onClick={handleCancelWorkout}
              >
                Cancel Workout
              </Button>
            </div>

            {exercises.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mt-4">Exercises</h2>
                <ul className="list-disc pl-5">
                  {exercises.map((exercise, index) => (
                    <li key={index} className="text-gray-700">
                      {exercise}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
