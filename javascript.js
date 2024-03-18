function atualizarHora() {
  var agora = new Date();
  var horas = agora.getHours();
  var minutos = agora.getMinutes();
  var segundos = agora.getSeconds();
  
  horas = horas < 10 ? '0' + horas : horas;
  minutos = minutos < 10 ? '0' + minutos : minutos;
  segundos = segundos < 10 ? '0' + segundos : segundos;
  
  var horaAtual = horas + ':' + minutos + ':' + segundos;
  
  document.getElementById('relogio').innerHTML = horaAtual;
}

function atualizarData() {
  var agora = new Date();
  var dia = agora.getDate();
  var mes = agora.getMonth() + 1;
  var ano = agora.getFullYear();
  
  dia = dia < 10 ? '0' + dia : dia;
  mes = mes < 10 ? '0' + mes : mes;
  
  var dataAtual = dia + '/' + mes + '/' + ano;
  
  document.getElementById('data').innerHTML = dataAtual;
}

// Atualizar hora e data a cada segundo
setInterval(atualizarHora, 1000);
atualizarData(); // Atualiza a data uma vez ao carregar a página