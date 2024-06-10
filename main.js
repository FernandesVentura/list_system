$(document).ready(function(){
    
    //função para adicionar o valor do primeiro campo para titulo da lista
    $('.btn-comecar').click(function() {
        const inputVal = $('#val-list').val();
        if (inputVal.trim() !== '') {
            $('#container header h1').html(`${inputVal}`)
        }

        //Função para sumir o primeiro container de conteúdo
        setTimeout(function(e) {
        $('#container-preloader').fadeOut('slow', function() {
            $('#container').fadeIn('slow');
            });

        }, 100);//tempo do fadeOut/fadeIn
    });
        
    $('.form-1').on('submit', function(e) {
        e.preventDefault();
        alert('Para marcar algum item da lista, basta clicar no container do item. E para remover-lo de sua lista, basta clicar na lixeira ao lado.')
    });
    
    
});

//função da segunda tela

//
$('.form-2').on('submit', function(event) {
    event.preventDefault ();    
    const inputValue = $('#conteudo-input').val();
    if (inputValue.trim() !== ''){
        const novoItem = $('<li class="container-iten"></li>').text(inputValue).click(function() {
        $(this).toggleClass('completed');
        })  
        const btnRemove = $('<span class="btn-remove"> <img src="./img/Lixo_vermelho.png" alt="Lixeira vermelha"> </span>').click(function () {
            $(this).parent().remove();
        });
        novoItem.append(btnRemove)
        novoItem.appendTo('ol');
        $('.demo-list').fadeOut(0);
        $('#conteudo-input').val('');
    }

});

