var json = [{origem:"d.d@d.com.br", destinatario:"dd"}]

$(document).ready(function(){
    fLocalEventoClick();
    fLocalMontaEmails();
});

function fLocalEventoClick(){
	$("#bAcessar").click(function(){

		$.ajax({
			type: "POST",
            url: "php/verificador.php",
            dataType: "json",
			data: {
				email: $("#tEmail").val(),
				senha: $("#tSenha").val()
			},

			success: function(retorno){

                if(retorno == 1){
                    window.location.assign("/paginas/entrada.html")
                }else{
                    $("#email").addClass("inputErrado");
                    $("#senha").addClass("inputErrado");
                }
			}
		});
	});
}

function fLocalMontaEmails(){

    var html = "";

    for(var i = 0; i <json.length; i++){

        html = "";

        html += "<tr>";
        html += "<td"> + json[i].origem + "</td>";
        html += "<td"> + json[i].destinatario + "</td>";
        html += "</tr>";

        $("#tCaixaDeEntrada").append(html);

    }
}