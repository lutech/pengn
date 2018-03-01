import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "AppSideNav",
    moduleId: module.id,
    templateUrl: "./side-nav.component.html",
    styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent implements OnInit {

    @Input() selectedPage: string;

    ngOnInit(): void {
    }

    isPageSelected(pageTitle: string): boolean {
        return pageTitle === this.selectedPage;
    }
}
