const form = document.getElementById('form-cadastro');
const nomes = [];
const numeroTel = [];
const validacao = document.querySelector('span', '.validacao');

let linhas = " ";



form.addEventListener('submit', function(e){
  e.preventDefault();

  adicionaLinha();
  atualizarTabela();
})

function adicionaLinha() {
  const nomeContato = document.getElementById('nomeContato');
  const numeroTelefone = document.getElementById('numeroContato');

  if (nomes.includes(nomeContato.value) || numeroTel.includes(numeroTelefone.value)) {
    alert('[ERRO] Nome ou número do contato já existente !');
  } else {
    nomes.push(nomeContato.value);
    numeroTel.push(numeroTelefone.value);

    let linha = '<tr>';

    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${numeroTelefone.value}</td>`;
    linha += '</tr>'

    linhas += linha;
  }

  nomeContato.value = "";
  numeroTelefone.value = "";
}

function atualizarTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}

validacao.addEventListener('click', function(){
  validacao.style.display = 'inline';
})