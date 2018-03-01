import { Component, Input, OnInit } from "@angular/core";

/* ***********************************************************
* Keep data that is displayed in your app drawer in the MyDrawer component class.
* Add new data objects that you want to display in the drawer here in the form of properties.
*************************************************************/
@Component({
    selector: "AppSideNav",
    moduleId: module.id,
    templateUrl: "./side-nav-item.component.html",
    styleUrls: ["./side-nav-item.component.scss"]
})
export class SideNavItemComponent implements OnInit {

    @Input() selectedPage: string;

    ngOnInit(): void {
    }

    isPageSelected(pageTitle: string): boolean {
        return pageTitle === this.selectedPage;
    }
}
