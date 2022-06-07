import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['date', 'intervenant', 'action', 'utilisateur'];
  dataSource = new MatTableDataSource<Showhistorique>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
  }

}
export interface Showhistorique {
  date: string;
  intervenant: string;
  action: string;
  utilisateur : string;
}

const ELEMENT_DATA: Showhistorique[] = [
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
  {date: '02/03/2022 00/11', intervenant: "Delphine PLASSE",action:"modifier", utilisateur: 'John DOE'},
];

