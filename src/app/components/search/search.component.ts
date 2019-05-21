import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchAComponent implements OnInit {
  contacts = [{
    firstName: 'Everton',
    nickname: '@tom'
  },{
    firstName: 'Everton',
    nickname: '@tom'
  },{
    firstName: 'Everton',
    nickname: '@tom'
  }];

  resultPage = false
  content = {
    title:'',
    header:''
  }
  searchItens = ['Pessoas', 'Música', 'Cinema', 'Literatura']
  constructor(private router:Router,private activatedRoute: ActivatedRoute) {

    this.activatedRoute.queryParams.subscribe(params => {
      this.setUpContent(params.opt)
    });
  }

  ngOnInit() {
  }

  setUpContent(param){
    switch (param) {
      case 'listen':
      this.content.title = "O QUE VOCÊ ESTÁ OUVINDO AGORA?"
        break;
      case 'topic':
      this.content.title = "SOBRE O QUE VOCÊ QUER FALAR?"
        break;
      case 'Listen':
      this.content.title = "O QUE VOCÊ ASSISTIU?"
        break;
      case 'Listen':
      this.content.title = "O QUE VOCÊ ESTÁ LENDO?"
        break;
      case 'search':
        this.content.title = "O QUE VOCÊ ESTÁ BUSCANDO?"
        break;
      case 'Listen':
        this.content.title = "NENHUM RESULTADO ENCONTRADO"
        break;

      default:
        this.content.title = "NENHUM RESULTADO ENCONTRADO"
        break;
    }
  }

  backPage(){
    this.router.navigateByUrl('home')
  }
  search(){
    this.resultPage = true;
  }

}
