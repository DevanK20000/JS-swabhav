// let blogs=[
//     {
//     title:"first",
//     author:"Devan",
//     likes:10
//     },
//     {
//         title:"second",
//         author:"hellp0",
//         likes:100
//         },
//         {
//             title:"ads",
//             author:"Raj",
//             likes:40
//             },
// ];

// let html="";
// blogs.forEach((blog,index)=>{
//     html+=`
//         <tr>
//         <td scope="row">${index}</td>
//         <td scope="row">${blog.title}</td>
//         <td scope="row">${blog.author}</td>
//         <td scope="row">${blog.likes}</td>
//         </tr>
//     `
// })

// console.log(html);
// let dbody = document.querySelector('tbody');
// dbody.innerHTML = html


// const div = document.querySelector("div")
// console.log(div);

// const div = document.getElementsByTagName("div")
// console.log(div);

// const para = document.querySelector("p")
// console.log(para);

// const div2 = document.querySelector("#div2")
// console.log(div2);

// const div2 = document.getElementById("div2")
// console.log(div2);

// const div = document.querySelector("div")
// console.log(div);

// const div2 = document.getElementById("div2")
// console.log(div2);

// const divs = document.querySelectorAll("div")
// console.log(divs);

// const paras = document.querySelectorAll("p")
// paras.forEach((para,index)=>{
//     para.innerText+="_updated"
// })

// const parasError = document.querySelectorAll("p.error")
// parasError.forEach((para,index)=>{
//     para.innerText+="_Error"
// })

// const errorPars = document.getElementsByClassName("error")
// console.log(errorPars);

// Array.from(errorPars).forEach((para,index)=>{
//     para.innerText+="_Error"
// })

// let link = document.querySelector("a")
// console.log(link);
// console.log(link.getAttribute("href"));

// link.setAttribute("href","https://www.facebook.com")
// link.innerText = "Link to facebook"
// console.log(link.getAttribute("href"));


// const img = document.querySelector("img")
// console.log(img);



// setTimeout(()=>{
//     console.log(img.getAttribute("src"));
//     img.setAttribute("src","https://cdn.pixabay.com/photo/2017/03/30/17/41/javascript-2189147_640.png")
//     console.log(img.getAttribute("src"));
// },2000)

// calls evey 20000 ms indefently
// srcs =[
//     "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
//     "https://cdn.pixabay.com/photo/2017/03/30/17/41/javascript-2189147_640.png"
// ]
// let i = 0
// setInterval(()=>{
//     img.setAttribute("src",srcs[i])
//     i = (i + 1) % srcs.length;
// },2000)

// link.setAttribute("style","color:red")
// link.classList.add("xyz")
// link.classList.remove("xyz")
// link.classList.toggle("abc")
// link.classList.toggle("abc")

// const para = document.querySelector("p")

// para.addEventListener("click",()=>{
//     para.classList.toggle("error")
// })

const input = document.querySelector("input");
const button = document.querySelector("button")
const div = document.querySelector("div")
const ul = document.querySelector("ul")

function updateUl() {
    const li = document.createElement("li")
    li.innerText=input.value
    // li.addEventListener("click", () => {
    //     ul.removeChild(li);
    // });
    ul.appendChild(li)
    input.value = ''
}

button.addEventListener("click",()=>{
    updateUl()
})
input.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        updateUl()
}});

//event bubbling
ul.addEventListener("click",(e)=>{
    if(e.target==="LI"){
        e.target.remove()
    }
})