import { Component, Input, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

/* ***********************************************************
* Keep data that is displayed as drawer items in the MyDrawer component class.
*************************************************************/
@Component({
    selector: "AppSideNavItem",
    moduleId: module.id,
    templateUrl: "./side-nav-item.component.html",
    styleUrls: ["./side-nav-item.component.scss"]
})
export class SideNavItemComponent implements OnInit {
    @Input() title: string;
    @Input() route: string;
    @Input() icon: string;
    @Input() isSelected: boolean;

    constructor(private routerExtensions: RouterExtensions) {

    }

    ngOnInit(): void {
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
    }
}
