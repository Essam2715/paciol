import { Component } from "@angular/core";

@Component({
  selector: "task-post",
  templateUrl: "./taskPost.component.html",
  styleUrls: ["./taskPost.component.scss"],
})
export class TaskPost {
  colors: Array<any> = [
    {
      class: "create-post",
      icon: "created",
      post: `Before Monday finish the report and send it itme by email, Please let me know if you need any clarification. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error siterti nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error siterti incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis voluptatem accusantium doloremque laudantium `,
      show: " d-none",
      taskToDo: " d-none",
    },
    {
      class: "complete-post",
      icon: "completed",
      post: `
    
       Before Monday finish the report and send it itme by email
       Before Monday finish the report and send it itme by email
       Before Monday finish the report and send it itme by email
       Before Monday finish the report and send it itme by email
      
    
    `,
      show: " d-none",
      taskToDo: " d-blok",
    },
    {
      class: "expired-post",
      icon: "expired",
      post: "Done expired",
      show: " d-inline-block",
      taskToDo: " d-blok",
      mt: "margin-top: 43px",
    },
  ];
}
