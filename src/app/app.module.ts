import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AdduserComponent } from './adduser/adduser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { ShowuserComponent } from './showuser/showuser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MatGridListModule} from "@angular/material/grid-list";
import { GraphiqueComponent } from './graphique/graphique.component';
import { HistoriqueComponent } from './historique/historique.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { ModifyuserComponent } from './modifyuser/modifyuser.component';
import {FormsModule} from "@angular/forms";
import { TimelineClientComponent } from './timeline-client/timeline-client.component';

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    ShowuserComponent,
    DashboardComponent,
    GraphiqueComponent,
    HistoriqueComponent,
    DeleteuserComponent,
    ModifyuserComponent,
    TimelineClientComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonToggleModule,
        MatIconModule,
        MatTabsModule,
        MatGridListModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
