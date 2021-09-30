class Produto{
    //função
    constructor(){
        this.id = 1;
        this.arrayProdutos = [];
        this.editId = null;
    }

    //função
    salvar(){

        let produto = this.lerDados();

        // PREENCHER TODOS OS CAMPOS !!
        if(this.validaCampos(produto)){
            if(this.editId ==  null){
                this.adicionar(produto);
            }else{
                this.atualizar(this.editId, produto);
            }
        }

        this.listaTabela();
        this.cancelar();
    }

    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        // lenght =  conta a quantidade de produtos
        for(let i = 0; i < this.arrayProdutos.length; i++){
            let tr = tbody.insertRow();

            //inserir uma nova coluna
            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].preco;

            td_id.classList.add('center');

            // inserir icone na lista
            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/edit.svg';
            imgEdit.setAttribute("onclick", "produto.preparaEditacao("+ JSON.stringify(this.arrayProdutos[i]) + ")");

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.svg';
            imgDelete.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[i].id +")")

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);
        }
    }

    adicionar(produto){
        // push = adicionar campos ao array
        this.arrayProdutos.push(produto);
        // adicionar varios valores ao ID
        this.id++;
    }

    atualizar(id, produto){
        for(let i=0; i< this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i].preco = produto.preco;
            }
        }
    }

    preparaEditacao(dados){
        this.editId = dados.id;

        document.getElementById('produto').value = dados.nomeProduto;
        document.getElementById('preco').value = dados.preco;
        // nome do botão "salvar" muda para "atualizar"
        document.getElementById('btn1').innerText = 'ATUALIZA';

    }

    

    lerDados(){
    let produto = {}
        
    // pegar o valor inserido no input do HTML ('ID').value
    produto.id = this.id;
    produto.nomeProduto = document.getElementById('produto').value;
    produto.preco = document.getElementById('preco').value;
    return produto;
    }

    // PREENCHER TODOS OS CAMPOS !!
    validaCampos(produto) {
        let msg = '';

        if(produto.nomeProduto == ''){
            msg += '- Informe o NOME do Produto \n';
        }
        if(produto.preco == ''){
            msg += '- Informe o PREÇO do Produto \n';
        }

        if(msg != ''){
            alert(msg);
            return false
        }

        return true;

    }

    //limpar os campos, usar função dentro de outras funções
    cancelar(){
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';

        document.getElementById('btn1').innerHTML = 'Salvar';
        this.editId = null;
    }


    deletar(id){

        if(confirm('Deseja realmente deletar o produto do ID' + id)){

        let tbody = document.getElementById('tbody');

        for(let i=0; i< this.arrayProdutos.length; i++){
        if(this.arrayProdutos[i].id == id){
            this.arrayProdutos.splice(i, 1);
            tbody.deleteRow(i);
        }
    }
        }
        
    }
}

// objeto
var produto =  new Produto()