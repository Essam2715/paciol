import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule } from "@angular/forms";
import { Nav } from "./components/header/nav.component";
import { SideNav } from "./components/sideNav/sideNav.component";
import { LineChartComponent } from "./components/charts/lineChart.component";
import { RightSideBlock } from "./components/rightSideNav/rightSideBlock.component";
import { MainTasks } from "./components/mainTasks/mainTasks.component";
import { NoticeBoardComponent } from "./notice-board/notice-board.component";
import { RouterModule } from "@angular/router";
import { WareHouseComponent } from "./ware-house/ware-house.component";
import { DoughnutBarChartComponent } from "./components/doughnut-bar-chart/doughnut-bar-chart.component";
import { TimelineComponent } from "./components/timeline/timeline.component";
import { TableResponsiveComponent } from "./components/table-responsive/table-responsive.component";
import { MailingListComponent } from "./mailing-list/mailing-list.component";
import { CalculatorComponent } from "./components/calculator/calculator.component";
import { CircleChartComponent } from "./components/circle-chart/circle-chart.component";
import { MailCompaginComponent } from "./mail-compagin/mail-compagin.component";
import { CreateCampaginComponent } from "./mail-compagin/create-campagin/create-campagin.component";
import { SelectTemplateComponent } from "./mail-compagin/select-template/select-template.component";
import { ShowProductComponent } from "./mail-compagin/show-product/show-product.component";
import { ProductsComponent } from "./products/products.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { PlansComponent } from "./plans/plans.component";
import { UpgradeFeautresComponent } from "./upgrade-feautres/upgrade-feautres.component";
import { OrderHistoryComponent } from "./order-history/order-history.component";
import { PostCreationComponent } from "./post-creation/post-creation.component";
import { TodoComponent } from "./components/todo/todo.component";
import { BasicPostComponent } from './posts/basic-post/basic-post.component';
import { MailPostComponent } from './posts/mail-post/mail-post.component';
import { TaskListDoneComponent } from './posts/task-list-done/task-list-done.component';
import { TaskListExpiredComponent } from './posts/task-list-expired/task-list-expired.component';
import { TaskListInProgressComponent } from './posts/task-list-in-progress/task-list-in-progress.component';
import { TaskListNotDoneComponent } from './posts/task-list-not-done/task-list-not-done.component';
import { TaskPostDoneComponent } from './posts/task-post-done/task-post-done.component';
import { TaskPostNotDoneComponent } from './posts/task-post-not-done/task-post-not-done.component';
import { TasklistDateDoneComponent } from './posts/tasklist-date-done/tasklist-date-done.component';
import { TasklistDateExpiredComponent } from './posts/tasklist-date-expired/tasklist-date-expired.component';
import { TasklistDateInProgressComponent } from './posts/tasklist-date-in-progress/tasklist-date-in-progress.component';
import { TasklistDateNotDoneComponent } from './posts/tasklist-date-not-done/tasklist-date-not-done.component';


@NgModule({
  declarations: [
    AppComponent,
    Nav,
    SideNav,
    LineChartComponent,
    RightSideBlock,
    MainTasks,
    NoticeBoardComponent,
    WareHouseComponent,
    DoughnutBarChartComponent,
    TimelineComponent,
    TableResponsiveComponent,
    MailingListComponent,
    CalculatorComponent,
    CircleChartComponent,
    MailCompaginComponent,
    CreateCampaginComponent,
    SelectTemplateComponent,
    ShowProductComponent,
    ProductsComponent,
    CheckoutComponent,
    PlansComponent,
    UpgradeFeautresComponent,
    OrderHistoryComponent,
    PostCreationComponent,
    TodoComponent,
    BasicPostComponent,
    MailPostComponent,
    TaskListDoneComponent,
    TaskListExpiredComponent,
    TaskListInProgressComponent,
    TaskListNotDoneComponent,
    TaskPostDoneComponent,
    TaskPostNotDoneComponent,
    TasklistDateDoneComponent,
    TasklistDateExpiredComponent,
    TasklistDateInProgressComponent,
    TasklistDateNotDoneComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: NoticeBoardComponent },
      { path: "WareHouse", component: WareHouseComponent },
      { path: "mailingList", component: MailingListComponent },
      { path: "mail-compagin", component: MailCompaginComponent },
      { path: "create-campagin", component: CreateCampaginComponent },
      { path: "select-template", component: SelectTemplateComponent },
      { path: "show-product", component: ShowProductComponent },
      { path: "products", component: ProductsComponent },
      { path: "checkout", component: CheckoutComponent },
      { path: "plans", component: PlansComponent },
      { path: "upgrade-features", component: UpgradeFeautresComponent },
      { path: "order-history", component: OrderHistoryComponent },
      { path: "show-posts", component: PostCreationComponent },
    ]),
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    Nav,
    SideNav,
    LineChartComponent,
    RightSideBlock,
    MainTasks,
  ],
})
export class AppModule {}
