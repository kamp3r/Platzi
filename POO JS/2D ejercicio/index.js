class Student {
  constructor({
    name,
    age,
    email,
    user,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    cursosAprobados = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.user = user;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.cursosAprobados = cursosAprobados;
    this.learningPaths = learningPaths;
  }
}

class FreeStudent extends Student{
  constructor(props){
    super(props);
  }
  approveCourse(newCourse){
    if(newCourse.isFree){
      this.cursosAprobados.push(newCourse)
    }else{
      console.warn(`Lo sentimos ${this.name} solo puedes realizar cursos gratuitos`)
    }
  }
}

class BasicStudent extends Student{
  constructor(props){
    super(props);
  }
  approveCourse(newCourse){
      this.cursosAprobados.push(newCourse)
  }
}

class ExpertStudent extends Student{
  constructor(props){
    super(props);
  }
  approveCourse(newCourse){
    if(newCourse.isFree){
      this.cursosAprobados.push(newCourse)
    }else{
      console.warn(`Lo sentimos ${this.name} solo puedes realizar cursos gratuitos`)
    }
  }
}


class LearningPaths {
  constructor({ id, logo, name, courses = [], levels = [] }) {
    this.id = id;
    this.logo = logo;
    this.name = name;
    this.courses = courses;
    this.levels = levels;
  }
  addCourses(course) {
    if (!this.courses.includes(course)) {
        this.courses.push(course);
        this.levels.push(course.level)
    }
  }
}

class Courses {
    constructor({id, name, teacher, level, classes = [], isFree = false, lang = "Spanish"}){
        this.id = id;
        this.name = name;
        this.teacher = teacher;
        this.level = level;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang
    }
    addClass(klass){
        if(!this.classes.includes(klass)){
            this.classes.push(klass)
        }
    }
}

class Class {
    constructor({id, name, duration}){
        this.id = id;
        this.name = name;
        this.duration = duration;
    }
}


const class1a = new Class({id: 1, name: "Introducción al POO en JS", duration: "5:35"})

const Course1 = new Courses({
    id: 1,
    name: "Curso básico POO Javascript",
    teacher: "JuanDC",
    level: "Básico"
})

Course1.addClass(class1a)

const DesarrolloWeb = new LearningPaths({
    id: 1,
    logo: "imgUrl",
    name: "Escuela de Desarrollo Web"
})

DesarrolloWeb.addCourses(Course1)


const Melisa = new Student({
    name: "Melisa",
    age: 32,
    email: "melisasol@gmail.com",
    user: "melisaSol",
    instagram: "doremiyah",
    learningPaths: DesarrolloWeb
})