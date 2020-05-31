import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 spa_openMenu_section(){

  }

/*   var spa_openMenu_section= function(ObjRef){
    ObjRef.classList.toggle("change");
    var menu_selector = document.querySelector(".myLinks");
    if (menu_selector.style.display === "block") {
      menu_selector.style.display = "none";
    } else {
      document.querySelector(".myLinks").classList.add('changeHeight');
      menu_selector.style.display = "block";
    }
  } */

/*   var hide_menuItems_click = function(){
    var elementsArray = document.querySelectorAll("#navbar a");

    elementsArray.forEach(function(elem) {
        elem.addEventListener("click", function() {
            //this function does stuff
            document.querySelector(".myLinks").style.display = "none";
            document.querySelector(".container.icon").classList.toggle("change");
        });
    });
  } */

}
