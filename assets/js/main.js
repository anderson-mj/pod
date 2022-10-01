$(function () {
  $("#header").load("./components/header.html", function () {
    let form = document.getElementById("suggestion-form");
    form.addEventListener('submit', addSugestao);
  });
  $("#footer").load("./components/footer.html");
});

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


function Suggestion(nome, email, matricula, telefone, mensagem) {
  this.nome = nome;
  this.email = email;
  this.matricula = matricula;
  this.telefone = telefone;
  this.mensagem = mensagem;

  this.getMatricula = function () {
    return this.matricula.mask('000.000.000');
  }

  this.getTelefone = function () {
    return this.telefone.mask('(00) 00000-0000');
  }
}

const arrayObjetos = [{ nome: 'João', email: 'joao@teste.com.br', matricula: '123456789', telefone: '11999999999', mensagem: 'Sugestão de teste' },
{ nome: 'Maria', email: 'maria@teste.com.br', matricula: '123456788', telefone: '21999999999', mensagem: 'Sem sugestões!!' },
{ nome: 'José', email: 'jose@teste.com.br', matricula: '123456787', telefone: '31999999999', mensagem: 'Sugestão' }];

const arraySugestoes = [];

for (obj of arrayObjetos) {
  const sugestao = new Suggestion(obj.nome, obj.email, obj.matricula, obj.telefone, obj.mensagem);
  arraySugestoes.push(sugestao);
}


const div = document.getElementById('sugestoes');

for (sugestao of arraySugestoes) {
  div.innerHTML += `<div class="card col-5 m-2">
                        <div class="card-body">
                            <h5 class="card-title">${sugestao.nome}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${sugestao.email}</h6>
                            <p class="card-text">${sugestao.mensagem}</p>
                        </div>
                    </div>`;
}

const addSugestao = function addSugestao() {
  const nome = document.getElementById('sender-name').value;
  const email = document.getElementById('sender-email').value;
  const matricula = document.getElementById('sender-id').value;
  const telefone = document.getElementById('sender-phone').value;
  const mensagem = document.getElementById('message-text').value;

  const sugestao = new Suggestion(nome, email, matricula, telefone, mensagem);
  div.innerHTML += `<div class="card col-5 m-2">
                        <div class="card-body">
                            <h5 class="card-title">${sugestao.nome}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${sugestao.email}</h6>
                            <p class="card-text">${sugestao.mensagem}</p>
                        </div>
                    </div>`;
}
