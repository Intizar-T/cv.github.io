function delete_rows(){
    let tbody = document.getElementById('table_cs')
    let len = tbody.rows.length
    for (let i = 0; i < len-1; i++){
        tbody.deleteRow(1)
    }
}

function cs_table(){
    
    let sem = document.getElementById('sem_cs').value

    if (sem == 'fall'){
        if (document.getElementById('btnradio1_cs').checked){
            delete_rows()
            let tbody = document.getElementById('table_cs')

            var row1 = tbody.insertRow(1)           

            var cell1_1 = row1.insertCell(0)
            cell1_1.id = "no_course_left"
            var cell1_2 = row1.insertCell(1)
            cell1_2.id = "no_course_middle"
            var cell1_3 = row1.insertCell(2)
            cell1_3.id = "no_course_right"    

            cell1_1.innerHTML = "No CS"
            cell1_2.innerHTML = "courses to"
            cell1_3.innerHTML = "show"

            let gpa = document.getElementById('gpa_cs')
            gpa.innerHTML = "Overall CS GPA: 2.99 / 4.3"
        }
        else if (document.getElementById('btnradio2_cs').checked){
            delete_rows()
            let tbody = document.getElementById('table_cs')

            var row1 = tbody.insertRow(1)           

            var cell1_1 = row1.insertCell(0)
            cell1_1.id = "no_course_left"
            var cell1_2 = row1.insertCell(1)
            cell1_2.id = "no_course_middle"
            var cell1_3 = row1.insertCell(2)
            cell1_3.id = "no_course_right"    

            cell1_1.innerHTML = "No CS"
            cell1_2.innerHTML = "courses to"
            cell1_3.innerHTML = "show"

            let gpa = document.getElementById('gpa_cs')
            gpa.innerHTML = "GPA: 0.0 / 4.3"
        }

        else if (document.getElementById('btnradio3_cs').checked){
            delete_rows()
            let tbody = document.getElementById('table_cs')
            var row1 = tbody.insertRow(1)
            var row2 = tbody.insertRow(2)

            var cell1_1 = row1.insertCell(0)
            var cell1_2 = row1.insertCell(1)
            var cell1_3 = row1.insertCell(2)

            var cell2_1 = row2.insertCell(0)
            var cell2_2 = row2.insertCell(1)
            var cell2_3 = row2.insertCell(2)

            cell1_1.innerHTML = "CS230"
            cell1_2.innerHTML = "System Programming"
            cell1_3.innerHTML = "C+"

            cell2_1.innerHTML = "CS300"
            cell2_2.innerHTML = "Introduction to Algorithms"
            cell2_3.innerHTML = "B0"

            let gpa = document.getElementById('gpa_cs')
            gpa.innerHTML = "GPA: 2.65 / 4.3"
        }
        else if (document.getElementById('btnradio4_cs').checked){
            delete_rows()
            let tbody = document.getElementById('table_cs')
            
            var row1 = tbody.insertRow(1)
            var row2 = tbody.insertRow(2)
            var row3 = tbody.insertRow(3)

            var cell1_1 = row1.insertCell(0)
            var cell1_2 = row1.insertCell(1)
            var cell1_3 = row1.insertCell(2)

            var cell2_1 = row2.insertCell(0)
            var cell2_2 = row2.insertCell(1)
            var cell2_3 = row2.insertCell(2)

            var cell3_1 = row3.insertCell(0)
            var cell3_2 = row3.insertCell(1)
            var cell3_3 = row3.insertCell(2)

            cell1_1.innerHTML = "CS311"
            cell1_2.innerHTML = "Computer Organization"
            cell1_3.innerHTML = ""

            cell2_1.innerHTML = "CS489"
            cell2_2.innerHTML = "Computer Ethics & Social Issues"
            cell2_3.innerHTML = ""

            cell3_1.innerHTML = "CS492"
            cell3_2.innerHTML = "Data Visualization"
            cell3_3.innerHTML = ""

            let gpa = document.getElementById('gpa_cs')
            gpa.innerHTML = "GPA: 0.0 / 4.3"
        }
        else if (document.getElementById('btnradio5_cs').checked){
            delete_rows()
            let tbody = document.getElementById('table_cs')

            var row1 = tbody.insertRow(1)           

            var cell1_1 = row1.insertCell(0)
            cell1_1.id = "no_course_left"
            var cell1_2 = row1.insertCell(1)
            cell1_2.id = "no_course_middle"
            var cell1_3 = row1.insertCell(2)
            cell1_3.id = "no_course_right"    

            cell1_1.innerHTML = "I'll have "
            cell1_2.innerHTML = "graduated "
            cell1_3.innerHTML = "by that time"

            let gpa = document.getElementById('gpa_cs')
            gpa.innerHTML = "GPA: 0.0 / 4.3"
        }
    }

    else{
        if (document.getElementById('btnradio1_cs').checked){
            delete_rows()
            let tbody = document.getElementById('table_cs')

            var row1 = tbody.insertRow(1)           

            var cell1_1 = row1.insertCell(0)
            cell1_1.id = "no_course_left"
            var cell1_2 = row1.insertCell(1)
            cell1_2.id = "no_course_middle"
            var cell1_3 = row1.insertCell(2)
            cell1_3.id = "no_course_right"    

            cell1_1.innerHTML = "No CS"
            cell1_2.innerHTML = "courses to"
            cell1_3.innerHTML = "show"

            let gpa = document.getElementById('gpa_cs')
            gpa.innerHTML = "GPA: 0.0 / 4.3"
        }

        else if (document.getElementById('btnradio2_cs').checked){
            delete_rows()
            let tbody = document.getElementById('table_cs')

            var row1 = tbody.insertRow(1)
            var row2 = tbody.insertRow(2)

            var cell1_1 = row1.insertCell(0)
            var cell1_2 = row1.insertCell(1)
            var cell1_3 = row1.insertCell(2)

            var cell2_1 = row2.insertCell(0)
            var cell2_2 = row2.insertCell(1)
            var cell2_3 = row2.insertCell(2)

            cell1_1.innerHTML = "CS101"
            cell1_2.innerHTML = "Intro to Programming"
            cell1_3.innerHTML = "B0"

            cell2_1.innerHTML = "CS204"
            cell2_2.innerHTML = "Discrete Mathematics"
            cell2_3.innerHTML = "C+"

            let gpa = document.getElementById('gpa_cs')
            gpa.innerHTML = "GPA: 2.65 / 4.3"
        }

        else if (document.getElementById('btnradio3_cs').checked){
            delete_rows()
            let tbody = document.getElementById('table_cs')
            var row1 = tbody.insertRow(1)

            var cell1_1 = row1.insertCell(0)
            var cell1_2 = row1.insertCell(1)
            var cell1_3 = row1.insertCell(2)

            cell1_1.innerHTML = "CS206"
            cell1_2.innerHTML = "Data Structure"
            cell1_3.innerHTML = "B-"

            let gpa = document.getElementById('gpa_cs')
            gpa.innerHTML = "GPA: 2.7 / 4.3"
        }
        else if (document.getElementById('btnradio4_cs').checked){
            delete_rows()
            let tbody = document.getElementById('table_cs')
            
            var row1 = tbody.insertRow(1)
            var row2 = tbody.insertRow(2)
            var row3 = tbody.insertRow(3)

            var cell1_1 = row1.insertCell(0)
            var cell1_2 = row1.insertCell(1)
            var cell1_3 = row1.insertCell(2)

            var cell2_1 = row2.insertCell(0)
            var cell2_2 = row2.insertCell(1)
            var cell2_3 = row2.insertCell(2)

            var cell3_1 = row3.insertCell(0)
            var cell3_2 = row3.insertCell(1)
            var cell3_3 = row3.insertCell(2)

            cell1_1.innerHTML = "CSS220"
            cell1_2.innerHTML = "Programming Principles"
            cell1_3.innerHTML = "S"

            cell2_1.innerHTML = "CS320"
            cell2_2.innerHTML = "Programming Language"
            cell2_3.innerHTML = "B+"

            cell3_1.innerHTML = "CS374"
            cell3_2.innerHTML = "Introduction to Human Computer Interaction"
            cell3_3.innerHTML = "A+"

            let gpa = document.getElementById('gpa_cs')
            gpa.innerHTML = "GPA: 3.8 / 4.3"
        }
        else {
            delete_rows()
            let tbody = document.getElementById('table_cs')
            
            var row1 = tbody.insertRow(1)           

            var cell1_1 = row1.insertCell(0)
            cell1_1.id = "no_course_left"
            var cell1_2 = row1.insertCell(1)
            cell1_2.id = "no_course_middle"
            var cell1_3 = row1.insertCell(2)
            cell1_3.id = "no_course_right"    

            cell1_1.innerHTML = "Who knows"
            cell1_2.innerHTML = "what the future"
            cell1_3.innerHTML = "holds :)"

            let gpa = document.getElementById('gpa_cs')
            gpa.innerHTML = "GPA: 0.0 / 4.3"

        }
    }
}