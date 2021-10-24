var yourVlSpec4 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  title: "",
  data: {
      name: "myData" // initialize the data with the name that can be used in view change
  },
  mark: "bar",
  width: "container",
  encoding: {
    x: {"title": "Semester", "field": "Term"},
    y: {"aggregate": "count", title: "Number of Courses"},
    color: {
    field: "Department",
    type: "nominal",
    scale: {
      domain: ["Humanities", "Physics", "Biology", "Chemistry", "Math", "CBE", "CS"],
      range: ["green", "blue", "red", "orange", "grey", "black", "violet"]
    },
    title: "Department"
    },
    
  },
  // ** answer **
  autosize: { 
    type: 'fit',
    resize: 'true' // if resize is not 'true', the size is fixed with first loaded size despite the changing view
  },
  // ************
}

const response = fetch('data/courses.csv') // reference the csv data file
    .then(response => response.text()) // response into text
    .then(function(v) { // after the converting, make the string into JSON using custom function "csvJSON(v)"
        console.log(v);
        return csvJSON(v);
    })
    .catch(err => console.log(err)) // if there exist error, catch it


vegaEmbed('#vis-7', yourVlSpec4)
    .then(function (res) {
        function drawVl7(v, selectedYear) { // function that should be called every clicking of radio button
          var dataVal = JSON.parse(v).filter((el) => el.Year === selectedYear); // filtering the data of selected year
          console.log(dataVal)
            var changeSet = vega.changeset() // the change set should be the form of vega.changeset().remove(..).insert(..)
                .remove(() => true) // remove all
                .insert(dataVal); // insert filtered data value above
            // ** answer **
            res.view.change('myData', changeSet).run(); // change of dataset : res.view.change(data name in specification, change set).run()
            // ************
        }

        const radio1 = document.getElementById('btnradio1');
        const radio2 = document.getElementById('btnradio2');
        const radio3 = document.getElementById('btnradio3');
        const radio4 = document.getElementById('btnradio4');
        
        
        response.then(function(v) { // after the loading of const "response", this block will be executed
          drawVl7(v, "2018");
          
          // when you click the button, update the view depending on the dataset
          radio1.addEventListener('click', function(){
            drawVl7(v, "2018");
          })
          radio2.addEventListener('click', function(){
            drawVl7(v, "2019");
          })
          radio3.addEventListener('click', function(){
            drawVl7(v, "2020");
          })
          radio4.addEventListener('click', function(){
            drawVl7(v, "2021");
          })
       
         
        })
});

