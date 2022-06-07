import {Component, OnInit} from '@angular/core';

interface user{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  constructor() {}
  nom!: string;
  prenom!: string;
  idad!: string;
  numerolong!:string;
  site!:string;

  user: user[] = [{value: 'Utilisateur', viewValue: 'Utilisateur'},
    {value: 'Groupe', viewValue: 'Groupe'},
    {value: 'VDN', viewValue: 'VDN'}];
  ngOnInit(): void {
  }
  changeClient(value: string) {
    console.log(value);
    var usertype = document.getElementById("userselected");
    var othertype = document.getElementById("otherselected");
    var errorusernotfund = document.getElementById("errorusernotfund");
    // @ts-ignore
    errorusernotfund.style.display = "none"
    if (value === "Utilisateur") {
      // @ts-ignore
      usertype.style.display = "block"
      // @ts-ignore
      othertype.style.display = "none"
    } else {
      // @ts-ignore
      usertype.style.display = "none"
      // @ts-ignore
      othertype.style.display = "block"
      // @ts-ignore
    }
    return value;
  }
  changenumerocourt(){
    // @ts-ignore
    // @ts-ignore
    this.numerolong = document.getElementById("numerocourt").value;
    console.log("test")
  }
  confirmation(): void {
    this.nom = "Recherche d'un nom";
    this.prenom = "Recherche d'un prenom";
    this.idad = "test"
    this.site = "Kerlan"
    var errorusernotfund = document.getElementById("errorusernotfund");
    // @ts-ignore
    errorusernotfund.style.display = "block"
    // @ts-ignore
    boutonconfirmer.disabled = "block";
  }
}
