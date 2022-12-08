import { describe, it, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import App from "../src/App.vue"
import HeadOne from "../src/components/HeadOne.vue"

describe('section header', () => {


  test.skip('should have header', () => {
    const wrapper = mount(App);

    const header = wrapper.find('header')

    expect(header.exists()).toBe(true)
  });

  test.skip('should have a component HeadOne', () => {
    const wrapper = mount(App);

    const childComponent = wrapper.findComponent({ name: "HeadOne" })

    expect(childComponent.exists()).toBe(true)
  });

  test.skip('Component HeadOne should receive props', () => {
    const wrapper = mount(HeadOne, {
      props: {
        msg: "Hello, World!"
      }
    });

    const headOne = wrapper.html()

    expect(headOne).toContain('Hello, World!')
  });

  test.skip('header should have h1 and img', () => {
    const wrapper = mount(App);

    const headOne = wrapper.find('h1')
    const imgHeader = wrapper.find('img')

    expect(headOne.exists()).toBe(true)
    expect(imgHeader.exists()).toBe(true)
  });

  test.skip('should have h1 with id and some text', () => {
    const wrapper = mount(App);

    const headOne = wrapper.find('h1')

    expect(headOne.attributes("id")).toBe("headOne")
    expect(headOne.text()).toBe("School Grades")
  });

  test.skip('should have img with src and alt', () => {
    const wrapper = mount(App);

    const imgHeader = wrapper.find('img')

    expect(imgHeader.attributes("src")).toBe("../src/assets/img/grades.jpg")
    expect(imgHeader.attributes("alt")).toBe("Una imagen")
  });
})

describe('section main', () => {

  test.skip('should have main', () => {
    const wrapper = mount(App);

    const main = wrapper.find('main')

    expect(main.exists()).toBe(true)
  });

  test.skip('should have form, 4 inputs, input nameStudent, input schoolSubject, input studentMark and input addBtnStudentMark', () => {
    const wrapper = mount(App);

    const form = wrapper.find("form")
    const inputsForm = wrapper.findAll("input")
    const nameStudent = inputsForm.at(0)
    const schoolSubject = inputsForm.at(1)
    const studentMark = inputsForm.at(2)
    const addBtnStudentMark = inputsForm.at(3)

    expect(form.exists()).toBe(true)
    expect(inputsForm.length).toBe(4)
    expect(nameStudent.attributes("name")).toBe("nameStudent")
    expect(schoolSubject.attributes("name")).toBe("schoolSubject")
    expect(studentMark.attributes("name")).toBe("studentMark")
    expect(addBtnStudentMark.attributes("name")).toBe("addBtnStudentMark")
  });

  test.skip('should have a class in their input button', () => {
    const wrapper = mount(App);

    const addBtnStudentMark = wrapper.findAll("input[type=button]").at(0)

    expect(addBtnStudentMark.classes("addButton")).toBe(true)
  });

  test.skip('should accept data in their inputs', () => {
    const wrapper = mount(App);

    const inputsForm = wrapper.findAll("input")
    const nameStudent = inputsForm.at(0)
    const schoolSubject = inputsForm.at(1)
    const studentMark = inputsForm.at(2)

    nameStudent.setValue('Johnny Ramírez')
    schoolSubject.setValue('History')
    studentMark.setValue(7.3)

    expect(nameStudent.element.value).toBe('Johnny Ramírez')
    expect(schoolSubject.element.value).toBe('History')
    expect(studentMark.element.value).toBe("7.3")

  });

  test.skip('should save data of inputs in object and its accesible', () => {
    const wrapper = mount(App);

    const inputsForm = wrapper.findAll("input")
    const nameStudent = inputsForm.at(0)
    const schoolSubject = inputsForm.at(1)
    const studentMark = inputsForm.at(2)
    let schoolGrades = [];

    nameStudent.setValue('Johnny Ramírez')
    schoolSubject.setValue('History')
    studentMark.setValue(7.3)

    schoolGrades.push({name: nameStudent.element.value, subject: schoolSubject.element.value, mark: studentMark.element.value})

    expect(schoolGrades.at(0).name).toBe("Johnny Ramírez")
    expect(schoolGrades.at(0).subject).toBe("History")
    expect(schoolGrades.at(0).mark).toBe("7.3")
  });
})