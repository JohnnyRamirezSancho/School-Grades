<script setup>
defineProps({
  nameStudent: {
    type: String,
    required: true
  },
  schoolSubject: {
    Type: String,
    required: true
  },
  studentMark: {
    Type: String,
    required: true
  }
  ,
  addBtnStudentMark: {
    Type: String,
    required: true
  },
  addBtnStudentMarkValue: {
    Type: String,
    required: true
  }
})
</script>

<template>
  <section id="formMarkStudent">
    <form>
      <label for="nameStudent">Name</label>
      <input type="text" :id="nameStudent" :name="nameStudent">
      <label for="schoolSubject">Subject</label>
      <input type="text" :id="schoolSubject" :name="schoolSubject">
      <label for="studentMark">Mark</label>
      <input type="number" :id="studentMark" :name="studentMark">
      <input type="button" :id="addBtnStudentMark" :name="addBtnStudentMark" :value="addBtnStudentMarkValue" class="addButton">
    </form>
  </section>
</template>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  margin: auto;
}

label {
  margin: 10px 0 2px 0;
}

input {
  padding: 4px;
  border-radius: 5px;
  border: 2px solid #e1f1f9;
  transition: all 0.4s;
}

input:focus {
  outline: none;
  border: 2px solid #53abd8;
}
.addButton {
  margin: 15px 0 0 0;
  background: #d44c51;
  color: white;
  transition: all 0.4s;
}
.addButton:hover {
  margin: 15px 0 0 0;
  color: #d44c51;
  background: white;
}

</style>