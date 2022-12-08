<script setup>
import HeadOne from "./components/HeadOne.vue"
import ImgHeader from "./components/ImgHeader.vue";
import SectionFormVue from "./components/SectionForm.vue";
</script>

<template>
  <header>
    <ImgHeader source="../src/assets/img/grades.jpg" altText="Una imagen"></ImgHeader>
    <HeadOne msg="School Grades"></HeadOne>
  </header>
  <main>
    <SectionFormVue nameStudent="nameStudent" schoolSubject="schoolSubject" studentMark="studentMark" addBtnStudentMark="addBtnStudentMark" addBtnStudentMarkValue="Add"></SectionFormVue>
  </main>
</template>

<style lang="scss" scoped>

</style>