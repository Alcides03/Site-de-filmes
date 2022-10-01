$('.Categoria').click(function(){
	$('.menuLateral ul .ItensCategoria').toggleClass('mostra');
	$('.menuLateral ul .seta1').toggleClass('gira');
});

$('.btnAbre').click(function(){
	$('.menuLateral').toggleClass('mostra');
});

$('.btnFecha').click(function(){
	$('.menuLateral').toggleClass('mostra');
});

const $menuLateral = $('.menuLateral');
$(document).mouseup(e => {
	if(!$menuLateral.is(e.target)
	&& $menuLateral.has(e.target).length === 0)
	{
		$menuLateral.removeClass('mostra');
	}
});


/* Gira quando passa o mouse por cima*/ 
/*$('.Categoria').mouseover(function(){
	$('.menuLateral ul .seta1').toggleClass('gira');
});

$('.Categoria').mouseout(function(){
	$('.menuLateral ul .seta1').toggleClass('gira');
});*/