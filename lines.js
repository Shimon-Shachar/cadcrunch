// const head = document.getElementsByTagName('head')[0];
// const script = document.createElement('script');
// script.type= 'text/javascript';
// script.src = './arrays.js';
// head.appendChild(script)

const _lineArr1 = [[5,1,0],[3,1,0],[3,1,0],[1,-1,0],[2,1,0],[1,1,0]]
const arr1 =  [5, 3, -3, -1, -2, -2]
const arr2 = [0,0,0,0,"stroke:blue;stroke-width:5"]

const arrCad =  [5, 3, -3, -1, -2, -2]
const arrCad1 =  [6, 2, -3, 2, -3, -4]
const arrCad2 =  [4, 6, -11, -1, -2, -2]
const blue = "stroke:red;stroke-width:5"
const green ="stroke:green;stroke-width:5"
const arrSVG = [0, 0, 0, 0,blue,green]
const button = document.createElement("input")
const button = document.createElement("input")
const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg1.setAttribute("width", "900" );
svg1.setAttribute("height", "700" );
svg1.setAttribute("top", "150" );
svg1.setAttribute("left", "250" );

const x2y2 =(five, three, minusthree, minusone, minustwo, minusTwo) => {
    
    
    const linef = (x1,y1,x2,y2,color)=> {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line")
        svg1.appendChild(line)
        line.setAttribute("x1", x1)
        line.setAttribute("y1", y1)
        line.setAttribute("x2", x2)
        line.setAttribute("y2", y2)
        line.setAttribute("style", color)
    }
    
    //debugger    
    let n = 100
    const arr4 = [arrSVG[0].toString(), arrSVG[1].toString(),(n * five).toString(), "0", arrSVG[4]] 
    const arr5 = [arr4[2], arr4[3], arr4[2], (n * three).toString(),arrSVG[5] ]
    const arr6 = [arr5[2], arr5[3], (parseFloat(arr4[2])+ (n * minusthree)).toString(), arr5[3], arrSVG[4]]
    const arr7 = [arr6[2], arr6[3], arr6[2],(parseFloat(arr5[3])+ (n * minusone)).toString(), arrSVG[5]]
    const arr8 = [arr7[2], arr7[3], (parseFloat(arr6[2])+(n * minustwo)).toString(), arr7[3], arrSVG[4]]
    const arr9 = [arr8[2], arr8[3], arr8[2],(parseFloat(arr8[3]) + ( n* minusTwo)).toString(), arrSVG[5]]
    linef.apply(null, arr4)
    linef.apply(null, arr5)
    linef.apply(null, arr6)
    linef.apply(null, arr7)
    linef.apply(null, arr8)
    linef.apply(null, arr9)
    
    console.log(svg1.childElementCount)
    document.getElementById('1').appendChild(svg1);
} 

x2y2.apply(null, arrCad)





//for getting relevent lines in {section view}
//we dont care where the cut is made along the x axis 
//(assuming the the cut is parrallel to the y axis) all we want 
// the two y parameters of the  points where the cut is made, 
//which turns out to be the second line in ann array from a 
//rectangle
//gets the second element in the array 
//this is the non genius way of getting the relevent 
//parameter/line.
// logic being every second line is going to be horizontal or vertical.
// we actually only want one of them actually, not even both but i wrote the
// forEach loop to get every second occurunce.
//-- syntax: indexOf was a way to get the index not the value, there are 
//other ways but asfaras i know


//you would then want the z difference (height) with regards to the placement 
//of the arrays as autocad plans one on top of each other.
// (in other words if its floor one, two, three) 
//if each array has(after being smooshed down into just four lines(index values)
//-which would reperesent sides of a square) has an added parameter of z just
// push it into arr2 every second loop.
// line has aname
// set line attributes
// change attributes

// hook up line to svg ie append
// // hook up svg to div 


// const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
// svg1.setAttribute("width", "900" );
// svg1.setAttribute("height", "700" );

 
// const linef = (x1,y1,x2,y2,color)=> {
//     const line = document.createElementNS("http://www.w3.org/2000/svg", "line")
//     svg1.appendChild(line)
//     line.setAttribute("x1", x1)
//     line.setAttribute("y1", y1)
//     line.setAttribute("x2", x2)
//     line.setAttribute("y2", y2)
//     line.setAttribute("style", color)
// }



// linef.apply(null, arr4)
// linef.apply(null, arr5)
// linef.apply(null, arr6)
// linef.apply(null, arr7)
// linef.apply(null, arr8)
// linef.apply(null, arr9)



// console.log(svg1.childElementCount)
// document.getElementById('1').appendChild(svg1);

  