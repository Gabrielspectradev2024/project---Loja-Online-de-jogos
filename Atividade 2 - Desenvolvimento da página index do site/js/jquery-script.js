//efeito de esconder formulário de cadastro

$(document).ready(function () {
  //Isso do jQuery é casicamento isso no js
  //document.getElementById("botao-cadastrar").click

  $("#botao-cadastrar").click(function () {
    $("#form-cadastrar").slideToggle("slow");
    $("#section-login").slideToggle("slow");
    $("#botao-cadastrar").hide("slow");
  });
});
