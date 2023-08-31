const projects=[
    {
        id:1,
        heading:"Shopping cart",
        text: "As part of my front-end web development endeavors, I designed and implemented a robust Add to Cart feature for an online store,leveraging the power of HTML, CSS, and JavaScript. Upon clicking the + or - button associated with each product,the button undergoes a subtle transformation to visually indicate that the item has been successfully added or removed.",
       link1:"https://github.com/nishitasinghhh/vegetable-shop",
       link2:" https://nishitasinghhh.github.io/vegetable-shop/"
    },
    {
        id:2,
        heading:"weather App",
        text:"The weather app website is a user-friendly platform designed to provide real-time weather information to users. It seamlessly combines HTML, CSS, and JavaScript to create an intuitive interface that interacts with a weather API, delivering accurate weather updates.avaScript connects to a weather API (OpenWeatherMap) to retrieve weather information for a specified location. The retrieved data includes details like temperature, weather conditions, humidity, and more.",
        link1:"https://github.com/nishitasinghhh/weatherApp",
        link2:" https://nishitasinghhh.github.io/weatherApp/"
    },
    {
        id:3,
        heading:"portfolio",
        text:"The portfolio website is a showcase of my skills, projects, and achievements, thoughtfully designed and developed using a combination of HTML, CSS, and JavaScript. It's a dynamic platform that allows me to present my work in an engaging and interactive way.",
        link1:"https://github.com/nishitasinghhh/portfolio",
        link2:"https://nishitasinghhh.github.io/portfolio/"
    },
    {
        id:4,
        heading:"Lorem ipsum",
        text:"The website uses JavaScript to generate random paragraphs of Lorem Ipsum text Users can adjust the number of paragraphs they want to work with.",
        link1:"https://github.com/nishitasinghhh/lorem",
        link2:" https://nishitasinghhh.github.io/lorem/"
    }
];
const heading=document.getElementById("projectName");
const description=document.getElementById("projectDescription");
const link11=document.getElementById("newlink");
const link22=document.getElementById("forlink");
const prevBtn=document.querySelector(".prev-btn");
const nextBtn=document.querySelector(".next-btn");
let currentDisplay=0;
window.addEventListener("DOMContentLoaded",function(){
    showProject(currentDisplay);
})
function showProject(project)
{
    const item=projects[project];
    heading.textContent=item.heading;
    description.textContent=item.text;
    link11.href=item.link1;
    link22.href=item.link2;
}
nextBtn.addEventListener("click",()=>{
    currentDisplay++;
    if(currentDisplay>projects.length-1)
    {
        currentDisplay=0;
    }
    
    showProject(currentDisplay);
});
prevBtn.addEventListener("click",()=>{
    currentDisplay--;
    if(currentDisplay<0)
    {
        currentDisplay=projects.length-1;
    }
    
    showProject(currentDisplay);
});