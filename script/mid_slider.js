var atual__slider = 2
var prev__next = 3
var qnt__slider = 3
var h = window.innerHeight;
var slider_data = [
    startnull = {},
    {
        txt: "lorem1",
        title: "Produto1",
        img: "img/Casa Norte/Casa Norte/MoreSoldIndex1.jpg",

        slider_number: "01"
    },
    {
        txt: "lorem2",
        title: "Produto2",
        img: "img/Casa Norte/Casa Norte/MoreSoldIndex2.jpg",

        slider_number: "02"
    },
    {
        txt: "lorem3",
        title: "Produto3",
        img: "img/Casa Norte/Casa Norte/MoreSoldIndex3.jpg",

        slider_number: "03"
    }

]

function set__slides() {
    document.getElementById("main__slider").src = slider_data[1].img
    document.getElementById("title__atual").innerHTML = slider_data[1].title
    document.getElementById("desc__atual").innerHTML = slider_data[1].txt

    // set prev next

    document.getElementById("number__next__slider").innerHTML = slider_data[2].slider_number
    document.getElementById("title__next__slider").innerHTML = slider_data[2].title
    document.getElementById("text__slider").innerHTML = slider_data[2].txt
    document.getElementById("next__img").src = slider_data[2].img
}
var next = document.getElementById("next")

next.addEventListener("click", function() {
    document.getElementById("main__slider").src = slider_data[atual__slider].img
    document.getElementById("title__atual").innerHTML = slider_data[atual__slider].title
    document.getElementById("desc__atual").innerHTML = slider_data[atual__slider].txt
    atual__slider++;
    if (atual__slider >= qnt__slider + 1) {
        atual__slider = 1
    }
    document.getElementById("number__next__slider").innerHTML = slider_data[prev__next].slider_number
    document.getElementById("title__next__slider").innerHTML = slider_data[prev__next].title
    document.getElementById("text__slider").innerHTML = slider_data[prev__next].txt
    document.getElementById("next__img").src = slider_data[prev__next].img
    prev__next++;
    if (prev__next >= qnt__slider + 1) {
        prev__next = 1
    }
})

var produtos_area = document.getElementById("area__produtos")