var display_total = document.getElementById("display_total")

var new_students = document.getElementById("new_students")

new_students.addEventListener("input", function(){
  calculations()
});

var dropout_student = document.getElementById("dropout_students")

dropout_students.addEventListener("input", function(){
  calculations()
});

var years = document.getElementById("years")

years.addEventListener("input", function(){
  calculations()

});

function calculations(){

  if (years.value == 1) {
    display_total.innerHTML = (new_students.value - dropout_students.value) * 35000
  }
  else if (years.value == 2) {
    display_total.innerHTML = (new_students.value - dropout_students.value) * 70000
  }
}
