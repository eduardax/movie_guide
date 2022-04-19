const $ = document.querySelector.bind(document)

//Tabs laterais
function openGuide(evt, universeName) {
    // Declara as variáveis
    var i, tabcontent, tablinks;
  
    // Pega todos os elementos com class="tabcontent" e oculta
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Pega todos os elementos com class="tablinks" e remova a classe "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Mostra a aba atual e adiciona uma classe "active" ao link que abriu a aba
    document.getElementById(universeName).style.display = "block";
    
    evt.currentTarget.className += " active";
}  

//Tabs superiores
function TabNavigation(type){

    const html = {
        //Pegando os filhos das classes tab-links e tab-content
        links: [...$('#'+type).getElementsByClassName('tab-links')[0].children],
        contents: [...$('#'+type).getElementsByClassName('tab-content')[0].children],
        //Pegando a classe data-open para dar click
        openTab: $('#'+type).querySelectorAll('[data-open]')[0]
    }

    //Esconde os conteúdos das abas não ativas
    function hideAllTabContent(){
        html.contents.forEach(section => {
        section.style.display = "none"
       })
    }

    //Remove o class active de todas as classes
    function removeAllActiveClass(){
        html.links.forEach(tab => {
        tab.className = tab.className.replace(" active", "")
        })
    }

    //Mostra o conteudo da classe ativa
    function showCurrentTab(id){
        const tabcontent = $('#' + id)
        tabcontent.style.display = "block"
    }

    //Ao selecionar a tab, chamas as funções declaradas
    function selectTab(event){
        hideAllTabContent()
        removeAllActiveClass()

        const target = event.currentTarget
        showCurrentTab(target.dataset.id)
      
        target.className += " active"
    }

    //"Ouvindo" o site
    function listenForChange(){
        html.links.forEach(tab => {
        tab.addEventListener('click', selectTab)
        })
    }

    function init(){
        hideAllTabContent()
        listenForChange()
      
        html.openTab.click()
    }
    
    return {
        init
    }

}

window.addEventListener('load', () =>{
    tabNavigation = TabNavigation('Marvel')
    tabNavigation.init()
    tabNavigation = TabNavigation('dc')
    tabNavigation.init()   
})