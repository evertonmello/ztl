import {
  Component,
  QueryList, Directive, OnInit, ViewChild, ViewChildren, ElementRef, Input, AfterViewInit
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Directive({ selector: 'child-directive' })
class ChildDirective {
}

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchAComponent implements OnInit, AfterViewInit {

  @ViewChild('ipt', { read: ElementRef }) private ipt: ElementRef;
  @Input() postSearch = false;

  selectedTab = 0
  contacts = [{
    firstName: 'Everton',
    nickname: '@tom'
  }, {
    firstName: 'Everton',
    nickname: '@tom'
  }, {
    firstName: 'Everton',
    nickname: '@tom'
  }];

  icoOpt = 'search'
  resultPage = true;
  content = {
    title: '',
    header: '',
    desc: ''
  }
  searchCategories = [];
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.setUpSearch(params)
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.ipt.nativeElement.focus()
  }

  setUpSearch(params){
    if (params.coverView) { this.setSearchCover(params.coverView) }
    this.selectedTab = params.selectedTab || 0;
    this.setTabItens(params.postSearch)
  }

  setTabItens(postSearch) {
    if(postSearch){
      this.postSearch = true
    }else{
      this.postSearch = false;
    }

    this.searchCategories = this.postSearch ? ['Música', 'Cinema', 'Literatura'] : ['Pessoas', 'Música', 'Cinema', 'Literatura'];
  }

  checkIcon(ipt) {
    this.icoOpt = ipt.value ? 'clear' : 'search'
  }

  showCoverView(coverView) {
    this.resultPage = coverView ? false : true;
  }

  setSearchCover(params) {
    switch (params) {
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
    this.showCoverView(params)

  }

  backPage() {
    this.router.navigateByUrl('home')
  }
  search() {
    this.resultPage = true;
    window['result'] = "[asd]"
  }

}
