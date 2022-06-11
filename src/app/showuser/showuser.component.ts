import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatCheckboxChange} from "@angular/material/checkbox";

interface user{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit {
  checked = false;
  constructor() { }
  exemplerecherche : string = "";
  typerecherche : string = "";
  increment : string = "";
  user: user[] = [{value: 'Numéro', viewValue: 'Numéro'},
    {value: 'Numéro court', viewValue: 'Numéro court'},
    {value: 'Identifiant', viewValue: 'Identifiant'},
    {value: 'Type d\'utilisateur', viewValue: 'Type d\'utilisateur'},];
  displayedColumns: string[] = ['numero', 'numerocourt', 'iduser', 'typeuser', 'boutonmodifier'];
  dataSource = [...ELEMENT_DATA];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  changetypeuser(value: string) {
    console.log(value);
    // @ts-ignore
    if (value == "Numéro"){
      this.exemplerecherche = "Ex : 0212345678";
      this.typerecherche = " un numéro de téléphone";
    } else {
      if (value == "Numéro court"){
        this.exemplerecherche = "Ex : 345678";
        this.typerecherche = " un numéro court";
      }else {
        if (value == "Identifiant"){
          this.exemplerecherche = "Ex : j.doe";
          this.typerecherche = " un identifiant";
        } else {
          if (value == "Type d\'utilisateur"){
            this.exemplerecherche = "Ex : Utilisateur";
            this.typerecherche = " un type d'utilisateur";
          }
        }
      }
    }
    return value;
  }

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {

  }


  toggleEditable($event: MatCheckboxChange) {
    var recherchesimple = document.getElementById("rechercheavance");
    var rechercheavance = document.getElementById("recherchesimple");
    // @ts-ignore
    if ($event.checked){
      // @ts-ignore
      rechercheavance.style.display = "none"
      // @ts-ignore
      recherchesimple.style.display = "block"
    }else{
      // @ts-ignore
      rechercheavance.style.display = "block"
      // @ts-ignore
      recherchesimple.style.display = "none"
    }
  }
  rechercheruser(){

  };

}
export interface Showuser {
  numero: string;
  numerocourt: string;
  iduser: string;
  typeuser: string;
  boutonmodifier: string;
  site : string;
}

// @ts-ignore
const ELEMENT_DATA: Showuser[] = [{numero: '0000000000', numerocourt: '000000', iduser: "j.doe",typeuser:"Utilisateur", site:"Site", boutonmodifier: 'H'},]

