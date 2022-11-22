$(".btn-group-vertical").removeClass("btn-group-vertical");

$("button").addClass("mb-1");

$(".jumbotron").addClass("text-right bg-secondary text-white");

$(".jumbotron").children(".btn").removeClass("btn-primary").addClass("btn-success");

$(".card-body:contains('Animais')").children(".btn").removeClass("btn-primary").addClass("btn-success");

$(".col-lg-3:contains('Natureza')").insertBefore(".col-lg-3:contains('Animais')");

$(".col-lg-3:contains('Pessoas')").insertBefore(".col-lg-3:contains('Tecnologia')");

$(".list-group li:first-child").removeClass("active");

$(".list-group li:last-child").after(`<li class="list-group-item active">Quarto item</li>`);

$(".list-group li:last-child").after(`<li class="list-group-item">Quinto item</li>`);