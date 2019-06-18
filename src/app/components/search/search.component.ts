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
    header: 'Nova publicação',
    desc: ''
  }
  showSuggestions = false;
  searchCategories = [];
  suggestionsNames = ['generic', 'songs', 'movies']
  suggestions = {
    generic: [
      {name: 'Lady Gaga',desc:'desc desc',image: ''},
      {name: 'Ladytron',imagedesc:'desc desc',image: ''},
      {name: 'Lady Antebellum',desc:'',image: ''}
    ],
    songs: [
      {name: 'Lady Gaga',desc:'desc desc',image: ''},
      {name: 'Ladytron',imagedesc:'desc desc',image: ''},
      {name: 'Lady Antebellum',desc:'',image: ''},
      {name: 'Lady Gaga',desc:'',image: ''},
      {name: 'Ladytron',imagedesc:'',image: ''},
      {name: 'Lady Antebellum',desc:'',image: ''},
    ],
    movies: [
      {name: 'Lady Gaga',desc:'desc desc',image: ''},
      {name: 'Ladytron',imagedesc:'desc desc',image: ''},
      {name: 'Lady Antebellum',desc:'',image: ''},
      {name: 'Lady Gaga',desc:'',image: ''},
      {name: 'Ladytron',imagedesc:'',image: ''},
      {name: 'Lady Antebellum',desc:'',image: ''},
    ],
  }
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.setUpSearch(params)
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
   // this.ipt.nativeElement.focus()
  }

  setUpSearch(params){
    if (params.coverView) { this.setSearchCover(params.coverView, params.tab) }
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

  setSearchCover(params, tab) {
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
      case 'reading':
        this.content.title = "O QUE VOCÊ ESTÁ LENDO?"
        this.content.desc = 'Pesquise pelo título.'
        break;
      case 'search':
        this.content.title = "O QUE VOCÊ ESTÁ BUSCANDO?"
        this.content.desc = 'Pesquise por pessoas, artistas ou títulos de obras.'
        this.showSuggestions = true;
        break;
      case 'Listen':
        this.content.title = "NENHUM RESULTADO ENCONTRADO"
        this.content.desc = 'refine os termos de sua busca e tente novamente.'
        break;
      case 'fav':
        this.content.title = "O QUE É QUE VOCÊ GOSTA?"
        this.content.desc = 'Pesquise pelo nome do artista, albúm ou música.';
        this.content.header = 'Adicionar Favorito (' + tab + ')'
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
