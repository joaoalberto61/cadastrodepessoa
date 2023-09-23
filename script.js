function validarForm() {
    // Valida o nome
    const nome = document.querySelector("input[name='nome']").value;
    if (nome === "") {
      alert("O nome deve ser preenchido.");
      return false;
    }
  
    // Valida o salário
    const salario = document.querySelector("input[name='salario']").value;
    if (salario <= 0) {
      alert("O salário deve ser maior que zero.");
      return false;
    }
  
    // Valida a idade
    const idade = document.querySelector("input[name='idade']").value;
    if (idade < 18) {
      alert("A idade deve ser maior ou igual a 18 anos.");
      return false;
    }
  
    // Valida o diploma
    const diploma = document.querySelector("input[name='diploma']:checked").value;
    if (diploma === "") {
      alert("O diploma deve ser selecionado.");
      return false;
    }
  
    return true;
  }
  
  // Evento de envio do formulário
  document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
  
    // Valida o formulário
    if (!validarForm()) {
      return;
    }
  
    // Obtém os dados do formulário
    const nome = document.querySelector("input[name='nome']").value;
    const salario = document.querySelector("input[name='salario']").value;
    const idade = document.querySelector("input[name='idade']").value;
    const diploma = document.querySelector("input[name='diploma']:checked").value;
  
    // Exibe os dados na tela
    alert(`
    Nome: ${nome}
    Salário: ${salario}
    Idade: ${idade}
    Possui diploma: ${diploma}
  `);
});