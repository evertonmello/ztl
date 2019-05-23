import { Component, OnInit,ViewChild,ElementRef, AfterViewInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchAComponent implements OnInit,AfterViewInit {

  @ViewChild('ipt', {read: ElementRef}) private ipt: ElementRef;

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

  icoOpt = 'search'
  resultPage = false
  content = {
    title:'',
    header:'',
    desc:''
  }
  searchCategory = ['Pessoas', 'Música', 'Cinema', 'Literatura']
  constructor(private router:Router,private activatedRoute: ActivatedRoute) {

    this.activatedRoute.queryParams.subscribe(params => {
      this.setUpContent(params.opt)
      this.showCoverView(params.coverView)
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
      this.ipt.nativeElement.focus()
  }
  
  checkIcon(ipt){
    this.icoOpt = ipt.value? 'clear': 'search'
  }

  showCoverView(coverView){
    this.resultPage = coverView ? false: true;
  }

  setUpContent(param){
    switch (param) {
      case 'listen':
      this.content.title = "O QUE VOCÊ ESTÁ OUVINDO AGORA?"
      this.content.desc = 'Pesquise pelo nome do artista, albúm ou música.'
        break;
      case 'topic':
      this.content.title = "SOBRE O QUE VOCÊ QUER FALAR?"
      this.content.desc = 'Pesquise por nome ou título.'
        break;
      case 'Listen':
      this.content.title = "O QUE VOCÊ ASSISTIU?"
      this.content.desc = 'Pesquise pelo título.'
        break;
      case 'Listen':
      this.content.title = "O QUE VOCÊ ESTÁ LENDO?"
      this.content.desc = 'Pesquise pelo título.'
      break;
      case 'search':
        this.content.title = "O QUE VOCÊ ESTÁ BUSCANDO?"
       this.content.desc = 'Pesquise por pessoas, artistas ou títulos de obras.'
      break;
      case 'Listen':
        this.content.title = "NENHUM RESULTADO ENCONTRADO"
        this.content.desc = 'refine os termos de sua busca e tente novamente.'
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
    window['result'] = "[asd]"
  }

}
