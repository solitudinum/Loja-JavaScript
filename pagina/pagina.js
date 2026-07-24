    let produtos =  JSON.parse(localStorage.getItem('produtos'));
      if (produtos === null){
           produtos = [
          {
            nome : 'Anão Venezualo',
            preco : 299,
            estoque : 10,
          },

          {
            nome : 'Squirtle Estiloso',
            preco : 100,
            estoque : 8,
          },
       ]
  };
    let estoqueanao = 10;  //pra comentarios
    let estoquesquirtle= 8;
    let saldo = localStorage.getItem('saldo');
     if (saldo === null){
        saldo = 1000;
     };
    let itensnocarrinho = localStorage.getItem('itensnocarrinho')
     if(itensnocarrinho === null){
        itensnocarrinho = 0;
     };
    let produtocarro = "";
    let total = 0;

    
    function adicionar(nome,preco){
            if (nome === 'Anão Venezualo'){
                 if(produtos[0].estoque === 0){
                adicionando.disabled = true;
                adicionando.style.color = ' white';
                adicionando.style.backgroundColor = 'red';
                document.getElementById('adicionando').innerText= 'Estoque Insuficiente!';
                compra.disabled = true;
                compra.style.color = ' white';
                compra.style.backgroundColor = 'red';
                return;
            };
                produtos[0].estoque--;
                localStorage.setItem('produtos', JSON.stringify(produtos));
                document.getElementById('estoque').innerText= `Estoque:${produtos[0].estoque}`;
            };
  

            if (nome === 'Squirtle'){
                if(produtos[1].estoque === 0){
                 adicionando2.disabled = true;
                 adicionando2.style.color = ' white';
                 adicionando2.style.backgroundColor = 'red';
                 document.getElementById('adicionando2').innerText= 'Estoque Insuficiente!';
                 compra2.disabled = true;
                 compra2.style.color = ' white';
                 compra2.style.backgroundColor = 'red';
                 return;
            };
                produtos[1].estoque--;
                localStorage.setItem('produtos', JSON.stringify(produtos));
                console.log(produtos[1].estoque, produtos[0].estoque);
                document.getElementById('estoque2').innerText= `Estoque: ${produtos[1].estoque}`;
            };
            itensnocarrinho ++;
            localStorage.setItem('itensnocarrinho', itensnocarrinho);
            console.log(itensnocarrinho);
            total += preco;
            produtocarro += nome + '<br>';
            document.getElementById('carrinho').innerText = '🛒Itens: ' + itensnocarrinho;
            document.getElementById('produtocarro').innerHTML = produtocarro;
            document.getElementById('total').innerText = 'Total: R$' + total;
    };

    
    function comprar(nome, preco){
        if(nome === 'Anão Venezualo'){
             if(saldo < 299){
                compra.disabled = true;
                compra.style.color = ' white';
                compra.style.backgroundColor = 'red';
                document.getElementById('compra').innerText= 'Saldo Insuficiente!';
                return;
              };

              if (produtos[0].estoque === 0){
                 compra.disabled = true;
                 compra.style.color = ' white';
                 compra.style.backgroundColor = 'red';
                 adicionando.disabled = true;
                 adicionando.style.color = ' white';
                 adicionando.style.backgroundColor = 'red';
                 document.getElementById('adicionando').innerText= 'Estoque Insuficiente!';
                 return;
             };  

             produtos[0].estoque--;
             localStorage.setItem('produtos', JSON.stringify(produtos));
             saldo -=299;
             localStorage.setItem('saldo', saldo);
             document.getElementById('mensagem').innerText = "Compra realizada!";
             document.getElementById('saldo').innerText = `💰Saldo: R$ ${saldo}`;
             document.getElementById('estoque').innerText=`Estoque: ${produtos[0].estoque}`;
             
        };
        

        if (nome === 'Squirtle Estiloso'){
             if(saldo <100){
                compra2.disabled = true;
                compra2.style.color = ' white';
                compra2.style.backgroundColor = 'red';
                document.getElementById('compra2').innerText= 'Saldo Insuficiente!';
                return;
            };

             produtos[1].estoque--;
             localStorage.setItem('produtos', JSON.stringify(produtos));
             saldo -=100;
             localStorage.setItem('saldo', saldo);
             document.getElementById('mensagem2').innerText = "Compra realizada!";
             document.getElementById('saldo').innerText = '💰Saldo: R$ '+ saldo;
             document.getElementById('estoque2').innerText= `Estoque:${produtos[1].estoque}`;
             if (produtos[1].estoque === 0){
                compra2.disabled = true;
                compra2.style.color = ' white';
                compra2.style.backgroundColor = 'red';
                adicionando2.disabled = true;
                adicionando2.style.color = ' white';
                adicionando2.style.backgroundColor = 'red';
                document.getElementById('adicionando2').innerText= 'Estoque Insuficiente!';
                return;
            };
        
        };
     
    }

    function remover(){
             itensnocarrinho = 0
             produtocarro = "Nenhum Produto";
             total -= total;

             document.getElementById('carrinho').innerText = "🛒Itens no carrinho: "+ itensnocarrinho;

             document.getElementById('produtocarro').innerHTML = produtocarro;

             document.getElementById('total').innerText = 'Total: R$' + total;
    }
   console.log(saldo)    