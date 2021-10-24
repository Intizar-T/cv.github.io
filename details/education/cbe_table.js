function delete_rows(){
    let tbody = document.getElementById('table').children[0]
    let len = tbody.rows.length
    for (let i = 0; i < len-1; i++){
        tbody.deleteRow(1)
    }
}

function cbe_table(){
    
    let sem = document.getElementById('sem').value

    if (sem == 'fall'){
        if (document.getElementById('btnradio1').checked){
            delete_rows()
            let tbody = document.getElementById('table')

            var row1 = tbody.insertRow(1)           

            var cell1_1 = row1.insertCell(0)
            cell1_1.id = "no_course_left"
            var cell1_2 = row1.insertCell(1)
            cell1_2.id = "no_course_middle"
            var cell1_3 = row1.insertCell(2)
            cell1_3.id = "no_course_right"    

            cell1_1.innerHTML = "No CBE"
            cell1_2.innerHTML = "courses to"
            cell1_3.innerHTML = "show"
        }
        else if (document.getElementById('btnradio2').checked){
            delete_rows()
            let tbody = document.getElementById('table')

            var row1 = tbody.insertRow(1)
            var row2 = tbody.insertRow(2)
            var row3 = tbody.insertRow(3)
            var row4 = tbody.insertRow(4)

            var cell1_1 = row1.insertCell(0)
            var cell1_2 = row1.insertCell(1)
            var cell1_3 = row1.insertCell(2)

            var cell2_1 = row2.insertCell(0)
            var cell2_2 = row2.insertCell(1)
            var cell2_3 = row2.insertCell(2)

            var cell3_1 = row3.insertCell(0)
            var cell3_2 = row3.insertCell(1)
            var cell3_3 = row3.insertCell(2)

            var cell4_1 = row4.insertCell(0)
            var cell4_2 = row4.insertCell(1)
            var cell4_3 = row4.insertCell(2)

            cell1_1.innerHTML = "CBE201"
            cell1_2.innerHTML = "Molecular Engineering Laboratory (CBE201)"
            cell1_3.innerHTML = "A-"

            cell2_1.innerHTML = "CBE221"
            cell2_2.innerHTML = "Molecular Thermodynamics"
            cell2_3.innerHTML = "B-"

            cell3_1.innerHTML = "CBE303"
            cell3_2.innerHTML = "Physical Chemistry I"
            cell3_3.innerHTML = "A0"

            cell4_1.innerHTML = "CBE455"
            cell4_2.innerHTML = "Nanochemical Technology"
            cell4_3.innerHTML = "A-"
        }

        else if (document.getElementById('btnradio3').checked){
            delete_rows()
            let tbody = document.getElementById('table')
            var row1 = tbody.insertRow(1)

            var cell1_1 = row1.insertCell(0)
            var cell1_2 = row1.insertCell(1)
            var cell1_3 = row1.insertCell(2)

            cell1_1.innerHTML = "CBE321"
            cell1_2.innerHTML = "Separation Processes"
            cell1_3.innerHTML = "B0"
        }
        else if (document.getElementById('btnradio4').checked){
            delete_rows()
            let tbody = document.getElementById('table')
            
            var row1 = tbody.insertRow(1)
            var row2 = tbody.insertRow(2)

            var cell1_1 = row1.insertCell(0)
            var cell1_2 = row1.insertCell(1)
            var cell1_3 = row1.insertCell(2)

            var cell2_1 = row2.insertCell(0)
            var cell2_2 = row2.insertCell(1)
            var cell2_3 = row2.insertCell(2)

            cell1_1.innerHTML = "CBE332"
            cell1_2.innerHTML = "Heat and Molecular Transfer"
            cell1_3.innerHTML = ""

            cell2_1.innerHTML = "CBE442"
            cell2_2.innerHTML = "Capstone Design Project"
            cell2_3.innerHTML = ""

        }
    }

    else{
        if (document.getElementById('btnradio1').checked){
            delete_rows()
            let tbody = document.getElementById('table')

            var row1 = tbody.insertRow(1)
            var row2 = tbody.insertRow(2)

            var cell1_1 = row1.insertCell(0)
            var cell1_2 = row1.insertCell(1)
            var cell1_3 = row1.insertCell(2)

            var cell2_1 = row2.insertCell(0)
            var cell2_2 = row2.insertCell(1)
            var cell2_3 = row2.insertCell(2)

            cell1_1.innerHTML = "CBE203"
            cell1_2.innerHTML = "Industrial Organic Chemistry"
            cell1_3.innerHTML = "A+"

            cell2_1.innerHTML = "CBE260"
            cell2_2.innerHTML = "Biomolecular Engineering"
            cell2_3.innerHTML = "A0"
            
        }
        else if (document.getElementById('btnradio2').checked){
            delete_rows()
            let tbody = document.getElementById('table')

            var row1 = tbody.insertRow(1)
            var row2 = tbody.insertRow(2)
            var row3 = tbody.insertRow(3)
            var row4 = tbody.insertRow(4)
            var row5 = tbody.insertRow(5)
            var row6 = tbody.insertRow(6)

            var cell1_1 = row1.insertCell(0)
            var cell1_2 = row1.insertCell(1)
            var cell1_3 = row1.insertCell(2)

            var cell2_1 = row2.insertCell(0)
            var cell2_2 = row2.insertCell(1)
            var cell2_3 = row2.insertCell(2)

            var cell3_1 = row3.insertCell(0)
            var cell3_2 = row3.insertCell(1)
            var cell3_3 = row3.insertCell(2)

            var cell4_1 = row4.insertCell(0)
            var cell4_2 = row4.insertCell(1)
            var cell4_3 = row4.insertCell(2)

            var cell5_1 = row5.insertCell(0)
            var cell5_2 = row5.insertCell(1)
            var cell5_3 = row5.insertCell(2)

            var cell6_1 = row6.insertCell(0)
            var cell6_2 = row6.insertCell(1)
            var cell6_3 = row6.insertCell(2)

            cell1_1.innerHTML = "CBE202"
            cell1_2.innerHTML = "Intro to CBE"
            cell1_3.innerHTML = "B0"

            cell2_1.innerHTML = "CBE205"
            cell2_2.innerHTML = "CBE Analysis"
            cell2_3.innerHTML = "B0"

            cell3_1.innerHTML = "CBE301"
            cell3_2.innerHTML = "CBE Laboratory"
            cell3_3.innerHTML = "A0"

            cell4_1.innerHTML = "CBE311"
            cell4_2.innerHTML = "Molecular Reaction Engineering"
            cell4_3.innerHTML = "B+"

            cell5_1.innerHTML = "CBE481"
            cell5_2.innerHTML = "Special Topics: Intro to Renewable Energy"
            cell5_3.innerHTML = "S"

            cell6_1.innerHTML = "CBE495"
            cell6_2.innerHTML = "Individual Study"
            cell6_3.innerHTML = "S"
        }

        else if (document.getElementById('btnradio3').checked){
            delete_rows()
            let tbody = document.getElementById('table')
            var row1 = tbody.insertRow(1)
            var row2 = tbody.insertRow(2)

            var cell1_1 = row1.insertCell(0)
            var cell1_2 = row1.insertCell(1)
            var cell1_3 = row1.insertCell(2)

            var cell2_1 = row2.insertCell(0)
            var cell2_2 = row2.insertCell(1)
            var cell2_3 = row2.insertCell(2)

            cell1_1.innerHTML = "CBE331"
            cell1_2.innerHTML = "Fluid Mechanics"
            cell1_3.innerHTML = "B+"

            cell2_1.innerHTML = "CBE371"
            cell2_2.innerHTML = "Electrochemical Principles"
            cell2_3.innerHTML = "A-"
        }
        else if (document.getElementById('btnradio4').checked){
            delete_rows()
            let tbody = document.getElementById('table')
            
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

        }
    }
}