const review = [
    {
        id: 1,
        name: "Naina Smith",
        job: "Web Developer",
        img: 'person-1.jpg',
        text: `I'm baby meggings twee health goth +1. 
        Bicycle rights tumeric chartreuse before they sold out chambray pop-up. 
        Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry`,
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "Web Designer",
        img: 'person-2.jpeg',
        text: `Helvetica artisan kinfolk thundercats lumbersexual blue bottle. 
        Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.
        photo booth jean shorts artisan narwhal.`,
    },
    {
        id: 3,
        name: "Peter Jones",
        job: "Intern",
        img: 'person-3.jpeg',
        text: `Sriracha literally flexitarian irony, 
        vape marfa unicorn. Glossier tattooed 8-bit, 
        fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.`,
    },
    {
        id: 4,
        name: "Bill Anderson",
        job: "The Boss",
        img: 'person-4.jpeg',
        text: `Edison bulb put a bird on it humblebrag, 
        marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan.
        VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.`,
    },
];

const imgContainer = document.querySelector(".img-container img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = review[person];
    imgContainer.src = item.img;
    author.innerText = item.name;
    job.innerText = item.job;
    info.innerText = item.text;
}

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > review.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = review.length - 1;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * review.length);
    showPerson(currentItem);
});