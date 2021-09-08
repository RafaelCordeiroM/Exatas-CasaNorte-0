var qnt__slide = 3
var time = 3000
var slide_start = 2
var select1 = document.getElementById("s1")
var select2 = document.getElementById("s2")
var select3 = document.getElementById("s3")

select1.addEventListener("click", function() {
    return slidecheck
})

function slidecheck() {
    document.getElementById("s" + slide_start).checked = true;
    slide_start++;
    if (slide_start == 4) {
        slide_start = 1
    }
}

function next__load() {
    var time__set = setInterval(slidecheck, 4000);
}