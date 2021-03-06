/*  Плавная прокрутка */

var links = document.querySelectorAll('.menuitem a[href^="#"]');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(e) {
    var el = document.querySelector(this.hash);
    if (el) {
      window.scrollTo(0, el.getBoundingClientRect().top - 20);
    }
    e.preventDefault();
  }, false);
}


/*  Модальное окно */

$('.butt').click(function (e) {
  e.preventDefault();
  $('.modalWindow').addClass('replacement');
  });
$('.closemodal').click(function (e) {
  e.preventDefault();
  $('.modalWindow').removeClass('replacement');
  });
  
  
  
 /*  Замена текста состава */ 
 $(document).ready(function() {
	 
    $("#but1").click(function() {
      $("#text").text("Состав: мясной бульон (кости говяжьи, лук репчатый, имбирь свежий, бадьян, корица, мускатный орех, специи, соль), рисовая лапша, говядина отварная, лайм свежий, зеленый лук, кинза свежая, мята свежая, ростки сои, соус чесночный (уксус, вода питьевая, чеснок свежий, перец чили свежий, соль, сахар)");
	});
    $("#but3").click(function() {
      $("#text").text("Состав: говяжий бульон (кости говяжьи, лук репчатый, имбирь свежий, бадьян, корица, мускатный орех, специи, соль), рисовая лапша, томленая говядина, лайм свежий, зеленый лук, кинза свежая, мята свежая, ростки сои, соус чесночный (уксус, вода питьевая, чеснок свежий, перец чили свежий, сахар, соль)");
    });	
    $("#but2").click(function() {
      $("#text").text("Состав: куриный бульон (кости говяжьи, лук репчатый, имбирь свежий, бадьян, корица, мускатный орех, специи, соль), рисовая лапша, томленая курица, лайм свежий, зеленый лук, кинза свежая, мята свежая, ростки сои, соус чесночный (уксус, вода питьевая, чеснок свежий, перец чили свежий, сахар, соль)");
    });		
    $("#but4").click(function() {
      $("#text").text("Состав: бульон кокосовый (кокосовое молоко, имбирь, лемонграсс, лук репчатый, морковь свежая, грибы шиитаке, листья лайма, паста Том Ям(*содержит рыбный соус)), рисовая лапша, креветки тигровые, грибы шиитаки, сыр тофу жаренный, лайм свежий, кинза свежая, мята свежая.");
    });	
    $("#but5").click(function() {
      $("#text").text("Состав: бульон Фо Том (кокосовое молоко, имбирь, лемонграсс, лук репчатый, морковь свежая, листья лайма, паста Том Ям (*содержит рыбный соус), грибы шиитаке, специи) рисовая лапша, грибы шиитаки, сыр тофу жаренный, лайм свежий, кинза свежая, мята свежая.");
    });	
    $("#but6").click(function() {
      $("#text").text("Состав: рисовая лапша, томленая курица, подлива, соевая заправка, зеленый лук, лук фри, кунжут");
    });	
    $("#but7").click(function() {
      $("#text").text("Состав: рисовая лапша, томленая говядина, кинза свежая, фирменный соус (соевый соус, лимонный сок, специи, вода питьевая)");
    });	
    $("#but8").click(function() {
      $("#text").text("Состав: рисовая лапша, креветки королевские, грибы шиитаки, лук шалот фри, кинза свежая, лайм свежий, фирменный соус (соевый соус, лимонный сок, специи, вода), соус том-ям (кокосовое молоко, имбирь, лемонграсс, лук репчатый, морковь свежая, листья лайма, паста Том Ям (*содержит рыбный соус), специи, куркума, рыбный соус), луковое масло.");
    });	
    $("#but9").click(function() {
      $("#text").text("Состав: рисовая лапша, сыр тофу жаренный, грибы шиитаки, лук шалот фри, кинза свежая, соус том-ям (кокосовое молоко, имбирь, лемонграсс, лук репчатый, морковь свежая, листья лайма, паста Том Ям (*содержит рыбный соус), специи, куркума, рыбный соус), фирменный соус (соевый соус, лимонный сок, специи, вода), кунжутное масло");
    });	
    $("#but10").click(function() {
      $("#text").text("Состав: рис отварной, куриное филе в кляре (мука пшеничная, картофельный крахмал, яйцо), апельсиновый соус (сок апельсиновый, перец чили свежий, имбирь свежий, специи, куркума), фирменный соус (соевый соус, лимонный сок, специи, вода питьевая), зеленый лук, кунжут жаренный.");
    });	
    $("#but11").click(function() {
      $("#text").text("Состав: рис, томленая курица, подлива, соевая заправка, зеленый лук, лук фри, кунжут");
    });	
    $("#but12").click(function() {
      $("#text").text("Состав: пряный азиатский салат из краснокочанной капусты и моркови с кунжутом и спайси майонезом");
    });	
    $("#but13").click(function() {
      $("#text").text("Состав: рисовая бумага, креветки королевские, куриное филе свежее, лук репчатый, морковь свежая, лапша фунчоза, грибы шиитаки, соус кисло-сладкий (лимонный сок, рыбный соус, специи, вода питьевая), масло растительное.");
    });	
    $("#but14").click(function() {
      $("#text").text("Состав: рисовая бумага, креветки королевские, куриное филе свежее, лук репчатый, морковь свежая, лапша фунчоза, грибы шиитаки, соус кисло-сладкий (лимонный сок, рыбный соус, специи, вода питьевая), масло растительное.");
    });	
    $("#but15").click(function() {
      $("#text").text("Состав: рисовая бумага, начинка из курицы (куриное филе свежее, капуста белокачанная, лук репчатый, морковь свежая, лапша фунчоза, грибы шиитаки, соус кисло-сладкий (лимонный сок, рыбный соус, специи, вода питьевая), масло растительное.");
    });	
    $("#but16").click(function() {
      $("#text").text("Состав: рисовая бумага, начинка из курицы (куриное филе свежее, капуста белокачанная, лук репчатый, морковь свежая, лапша фунчоза, грибы шиитаки, соус кисло-сладкий (лимонный сок, рыбный соус, специи, вода питьевая), масло растительное.");
    });	
    $("#but17").click(function() {
      $("#text").text("Состав: куриное филе в кляре (мука пшеничная, крахмал картофельный, яйцо), масло растительное, лайм свежий, соус Спапайси Майо (соус Кимчи, майонез) Состав: картофель свежий, масло растительное");
    });	




	
  });              