import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    
    title: string;
    
    ngOnInit(): void {
        this.title = "Home";
    }
    
}
