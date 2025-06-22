export interface Workout {
  id: string;
  userId: string;
  title: string;
  date: Date;
  notes?: string;
  isActive: boolean;
  updatedAt: Date;
}

export const WORKOUT_MOCK_DATA: Workout = {
  id: "1",
  userId: "1",
  title: "Morning Workout",
  date: new Date(),
  notes: "Focus on cardio and strength training.",
  isActive: true,
  updatedAt: new Date(),
};
