<template>
    <div class="exercise-card">
      <div class="exercise-info">
        <!-- Edit Mode -->
        <div v-if="isEditing" class="edit-mode">
          <div class="input-group">
            <label>Exercise Name:</label>
            <input 
              v-model="editedExercise.exerciseName" 
              type="text" 
              class="edit-input"
            >
          </div>
  
          <div class="input-group">
            <label>Type:</label>
            <input 
              v-model="editedExercise.type" 
              type="text" 
              class="edit-input"
            >
          </div>
  
          <div class="input-group">
            <label>Muscle Groups:</label>
            <div class="muscle-groups-container">
              <div 
                v-for="(muscle, index) in editedExercise.muscleGroups"
                :key="index"
                class="muscle-group"
              >
                {{ muscle }}
                <button 
                  @click="removeMuscleGroup(index)"
                  class="remove-muscle"
                >×</button>
              </div>
            </div>
            <div class="add-muscle-group">
              <input 
                v-model="newMuscleGroup"
                @keyup.enter="addMuscleGroup"
                type="text"
                placeholder="Add muscle group"
                class="edit-input"
              >
              <button 
                @click="addMuscleGroup"
                class="add-muscle-btn"
              >+</button>
            </div>
          </div>
        </div>
  
        <!-- Display Mode -->
        <div v-else>
          <h2>Exercise: {{ exercise.exerciseName }}</h2>
          <h2>Type: {{ exercise.type }}</h2>
          <h2>Muscle Groups:</h2>
          <div class="muscle-groups-container">
            <span
              v-for="(muscle, index) in exercise.muscleGroups"
              :key="index"
              class="muscle-group"
            >{{ muscle }}</span>
          </div>
        </div>
      </div>
  
      <div class="card-btns">
        <button 
          v-if="isEditing"
          @click="saveChanges"
          class="save-btn"
        >Save Changes</button>
        <template v-else>
          <button 
            class="edit-workout-btn"
            @click="startEditing"
          >Edit Exercise</button>
          <button 
            class="add-to-workout-btn"
            @click="$emit('add-to-workout', exercise)"
          >Add to Workout</button>
        </template>
      </div>
    </div>
  </template>

<script>

export default {
    props: {
        exercise: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            isEditing: false,
            editedExercise: null,
            newMuscleGroup: ''
        }
    },

    methods: {
        startEditing() {
            this.editedExercise = JSON.parse(JSON.stringify(this.exercise))
            this.isEditing = true
        },

        saveChanges() {
            this.$emit('save', this.editedExercise)
            this.isEditing = false
        },

        addMuscleGroup() {
            if (this.newMuscleGroup.trim()) {
                this.editedExercise.muscleGroups.push(this.newMuscleGroup.trim())
                this.newMuscleGroup = ''
            }
        },

        removeMuscleGroup(index) {
            this.editedExercise.muscleGroups.splice(index, 1)
        }
    }
}

</script>

<style scoped>
.exercise-card {
  color: white;
  border-radius: 20px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.exercise-info h2 {
  font-size: 1.2em;
  margin: 10px 0;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.edit-input {
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  margin-top: 4px;
}

.muscle-groups-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.muscle-group {
  display: inline-flex;
  align-items: center;
  background-color: rgba(18, 41, 43, 0.95);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.9em;
}

.remove-muscle {
  margin-left: 8px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.remove-muscle:hover {
  opacity: 1;
}

.add-muscle-group {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.add-muscle-btn {
  padding: 8px 16px;
  border-radius: 8px;
  background-color: rgb(42, 81, 85);
  color: white;
  transition: all 0.2s;
}

.add-muscle-btn:hover {
  background-color: rgb(54, 103, 109);
}

.card-btns {
  display: flex;
  gap: 16px;
  margin-top: 20px;
}

.edit-workout-btn,
.add-to-workout-btn,
.save-btn {
  flex: 1;
  border-radius: 20px;
  font-size: 16pt;
  background-color: rgb(42, 81, 85);
  border: none;
  padding: 3% 3%;
  color: #E0E0E0;
  transition: transform 0.1s ease, box-shadow 0.2s ease;
  outline: none;
}

.edit-workout-btn:hover,
.add-to-workout-btn:hover,
.save-btn:hover {
  transform: scale(1.05);
  box-shadow: 2px 2px 15px rgba(42, 81, 85, 0.5);
  background-color: rgb(54, 103, 109);
}

.edit-workout-btn:active,
.add-to-workout-btn:active,
.save-btn:active {
  transform: scale(0.98);
}
</style>