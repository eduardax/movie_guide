const $ = document.querySelector.bind(document)

//Tabs laterais
function openGuide(evt, universeName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(universeName).style.display = "block";
    evt.currentTarget.className += " active";
}  

//Tabs superiores
function TabNavigation(){
  
    const html = {
        links: [...$('.tab-links').children],
        contents: [...$('.tab-content').children],
        openTab: $('[data-open]')
    }

    function hideAllTabContent(){
        html.contents.forEach(section => {
        section.style.display = "none"
       })
    }

    function removeAllActiveClass(){
        html.links.forEach(tab => {
        tab.className = tab.className.replace(" active", "")
        })
    }

    function showCurrentTab(id){
        const tabcontent = $('#' + id)
        tabcontent.style.display = "block"
    }

    function selectTab(event){
        hideAllTabContent()
        removeAllActiveClass()

        const target = event.currentTarget
        showCurrentTab(target.dataset.id)
      
        target.className += " active"
    }

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
    const tabNavigation = TabNavigation()
    
    tabNavigation.init()
        
})