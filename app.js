// // var a = 10;
// // var b = 20;
// // var c = 50;
// // if(a == b){
// //     console.log("A is equal to B");
// // }
// // else if(b < c){
// //     console.log("B is less than C");
// // }

// // ================================================

// // var a = 10;
// // var b = 20;
// // var c = 30;

// // if (a > b){
// //     console.log("true")
// // }
// // else{ console.log("false") }


// // var a = 20;
// // var b = 20;
// // var allowed = false

// // =======================nested if and else=============================

// // if (a == b){
// //       if(allowed == true){
// //         console.log("Allowed")
// //       }else{
// //         console.log("Not Allowed")
// //       }
// // }

// // var a = 18
// // var b = 50

// // ==============&& se var a or var b dono conditions satisfy karengi to hi aage kaam hoga==============

// // if(a > 17 && b < 51){
// //     console.log("haan bhaai shi h")
// // }

// // ====================|| se var a yaa var b me se koi b aik condition satisfy kregi to aage kaam hojaeega=============================

// // var a = 18
// // var b = 50
// // if(a > 17 || b < 51){
// //     console.log("haan bhaai shi h")
// // }

// // var a = 18
// // var b = 50
// // if(a == 18 || b == 50){
// //     console.log("haan bhaai shi h")
// // }
// // else{
// //     console.log("no")
// // }

// // var a = 20;
// // var b = 20;
// // var allowed = true

// // if(a == b && allowed == true){
// //     console.log("Allowed")
// // }
// // if(a == b || allowed == true){
// //     console.log("Allowed")
// // }

// // var a = 20;
// // var b = 20;
// // var allowed = false

// // if(a == b && allowed == true){
// //     console.log("Allowed")
// // }
// // else{ console.log ("NO")}

// // if(a == b || allowed == true){
// //     console.log("Allowed")
// // }

// // =============================================================================

// // ===========================itne saare vars bnaane k bajaae aik var me saara data kese jama krna hy======================

// // var cities = ["Karachi","Lahore","Peshawer","Quetta","Multan"]
// // console.log(cities[3])
// // document.write(cities[2])
// // alert(cities[6])

// // var cities = ["Karachi","Lahore","Peshawer","Quetta","Multan"]
// // ======push se last me value add hoti h==================]
// // cities.push("Islamabad")
// // console.log(cities)

// // var cities = ["Karachi","Lahore","Peshawer","Quetta","Multan"]
// // =================pop se last aik value delete hojaaegi========================
// // cities.pop()
// // console.log(cities)



// // ==================MARKSHEET===================================

alert("Make sure that you may write the numbers of your each subject between 0 and 20.")

var eng = +prompt("Type here your english marks")
var urdu = +prompt("urdu marks")
var isl = +prompt("islamiat")
var chem = +prompt("chemistry")
var phy = +prompt("physics")

var total = eng + urdu + isl + chem + phy

if(total >= 0 && total <= 100){
    if(total >= 90 && total <= 100){
        console.log("B/W 90% & 100%")
    }
    else 
    if(total >= 80 && total <=89){
        console.log("B/W 80% & 89%")
    }
    else
    if(total >= 70 && total <=79){
        console.log("B/W 70% & 79%")
    }
    else
    if(total >= 60 && total <=69){
        console.log("B/W 60% & 69%")
    }
    else
    if(total >= 50 && total <=59){
        console.log("B/W 50% & 59%")
    }
    else
    if(total >= 40 && total <=49){
        console.log("B/W 40% & 49%")
    }
    else
    if(total >= 0 && total <= 39){
        console.log("B/W 0 & 39%")
    }

   



}else{
    console.log("Enter numbers of each subject out of 20 because it was a monthly test of 20 marks.")
}

// ==============================================================

// // ===========index numbers: started from 0===============
// // var foods = ['biryaani','qorma','nihari','karahi','nalli biryaani']
// // =============nihaari ki jaaga kulchaa ajaaega============
// // foods[2] = 'kulchaa'
// // =======nalli biryaani k baad multiply by 5 empty phr uske baaad cheese balls aayega
// // foods[10] = 'cheese balls' 
// // console.log(foods)

// // var foods = ['biryaani','qorma','nihari','karahi','nalli biryaani','nalli biryaani','nalli biryaani','nalli biryaani','nalli biryaani','nalli biryaani','nalli biryaani','nalli biryaani','nalli biryaani','nalli biryaani','nalli biryaani','nalli biryaani','nalli biryaani','nalli biryaani','nalli biryaani','nalli biryaani','nalli biryaani','nalli biryaani','nalli biryaani','nalli biryaani','nalli biryaani','nalli biryaani','nalli biryaani','nalli biryaani','nalli biryaani']
// // foods[2] = 'kulchaa'
// // foods[10] = 'cheese balls' 
// // console.log(foods.length)

// // var foods = ['biryaani','qorma','nihari','karahi','nalli biryaani']
// // // foods.push('pulaao')
// // // foods.pop()

// // console.log(foods)