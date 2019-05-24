import { Component,Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  searchResponse = {
    artists: [
      {name: 'Lady Gaga',desc:'desc desc',image: ''},
      {name: 'Ladytron',imagedesc:'desc desc',image: ''},
      {name: 'Lady Antebellum',desc:'',image: ''},
      {name: 'Lady Gaga',desc:'',image: ''},
      {name: 'Ladytron',imagedesc:'',image: ''},
      {name: 'Lady Antebellum',desc:'',image: ''},
      {name: 'Lady Gaga',desc:'',image: ''},
      {name: 'Lady Gaga',desc:'',image: ''},
      {name: 'Ladytron',imagedesc:'',image: ''},
      {name: 'Lady Antebellum',desc:'',image: ''},
      {name: 'Lady Gaga',desc:'',image: ''},
      {name: 'Lady Gaga',desc:'',image: ''},
      {name: 'Ladytron',imagedesc:'',image: ''},
      {name: 'Lady Antebellum',desc:'',image: ''},
      {name: 'Lady Gaga',desc:'',image: ''},
      {name: 'Ladytron',imagedesc:'desc desc',image: ''},
      { name: 'Lady Antebellum',desc:'',image: ''}],
    songs: [
      {name:'Lady song1',desc:'desc desc', image: ''},
      {name:'Lady song1',desc:'', image: ''},
      {name:'Lady song1',desc:'desc desc', image: ''},
      {name:'Lady song1',desc:'desc desc', image: ''},
      {name:'Lady song1',desc:'desc desc', image: ''},
      {name:'Lady song1',desc:'', image: ''},
      {name:'Lady song1',desc:'desc desc', image: ''},
      {name:'Lady song1',desc:'desc desc', image: ''},
      {name:'Lady song1',desc:'', image: ''},
      {name:'Lady song1',desc:'desc desc', image: ''},
      {name:'Lady song1',desc:'desc desc', image: ''},
      {name:'Lady song1',desc:'desc desc', image: ''},
      {name:'Lady song1',desc:'', image: ''},
      {name:'Lady song1',desc:'desc desc', image: ''},
      {name:'Lady song1',desc:'', image: ''},
      {name:'Lady song1',desc:'desc desc', image: ''},
      {name:'Lady song1',desc:'desc desc', image: ''},
      {name:'Lady song1',desc:'desc desc', image: ''},
      {name:'Lady song1',desc:'', image: ''},
      {name:'Lady song1',desc:'desc desc', image: ''},
      {name:'Lady song1',desc:'desc desc', image: ''},
      {name:'Lady song1',desc:'desc desc', image: ''},
      {name:'Lady song1',desc:'desc desc', image: ''}
    ],
    albuns: [
      {name:'Lady albun',desc:'', image: ''},
      {name:'Lady albun',desc:'desc desc', image: ''},
      {name:'Lady albun',desc:'desc desc', image: ''},
      {name:'Lady albun',desc:'desc desc', image: ''},
      {name:'Lady albun',desc:'desc desc', image: ''},
      {name:'Lady albun',desc:'desc desc', image: ''},
      {name:'Lady albun',desc:'desc desc', image: ''},
      {name:'Lady albun',desc:'desc desc', image: ''},
      {name:'Lady albun',desc:'desc desc', image: ''},
      {name:'Lady albun',desc:'desc desc', image: ''},
      {name:'Lady albun',desc:'desc desc', image: ''},
      {name:'Lady albun',desc:'desc desc', image: ''},
      {name:'Lady albun',desc:'desc desc', image: ''},
      {name:'Lady albun',desc:'desc desc', image: ''},
      {name:'Lady albun',desc:'desc desc', image: ''},
      {name:'Lady albun',desc:'desc desc', image: ''},
      {name:'Lady albun',desc:'desc desc', image: ''},
      {name:'Lady albun',desc:'desc desc', image: ''},
      {name:'Lady albun',desc:'desc desc', image: ''},
      {name:'Lady albun',desc:'desc desc', image: ''}]
  }
  @Input()selectedTab = 0
  @Input()lastPage = 'search';
  @Input()resultTitles = Object.keys(this.searchResponse)
  @Input()all = false
  @Input()array =  [
    {name:'Lady albun',desc:'', image: ''},
    {name:'Lady albun',desc:'desc desc', image: ''},
    {name:'Lady albun',desc:'desc desc', image: ''},
    {name:'Lady albun',desc:'desc desc', image: ''},
    {name:'Lady albun',desc:'desc desc', image: ''},
    {name:'Lady albun',desc:'desc desc', image: ''},
    {name:'Lady albun',desc:'desc desc', image: ''},
    {name:'Lady albun',desc:'desc desc', image: ''},
    {name:'Lady song1',desc:'', image: ''},
    {name:'Lady song1',desc:'desc desc', image: ''},
    {name:'Lady song1',desc:'desc desc', image: ''},
    {name:'Lady song1',desc:'', image: ''},
    {name:'Lady song1',desc:'desc desc', image: ''},
    {name:'Lady song1',desc:'desc desc', image: ''},
    {name:'Lady song1',desc:'desc desc', image: ''},
    {name:'Lady song1',desc:'', image: ''},
    {name:'Lady song1',desc:'desc desc', image: ''},
    {name:'Lady song1',desc:'', image: ''},
    {name:'Lady song1',desc:'desc desc', image: ''},
    {name:'Lady song1',desc:'desc desc', image: ''},
    {name:'Lady song1',desc:'desc desc', image: ''},
    {name:'Lady song1',desc:'', image: ''}]

constructor(private router:Router) { }

  ngOnInit() {
    console.log(this.array.length)
  }

  getContentArray(index){
    return this.searchResponse[Object.keys(this.searchResponse)[index].toString()];
  }

  seeAll(resultTitle){
    this.router.navigate(['/resultAll'], { queryParams: { 
      title: resultTitle,
      selectedTab: this.selectedTab} });
  }

  goToProfile(profile){
    this.router.navigate(['/profile'], { queryParams: {
       profileId: 1,
       lastPage: this.lastPage,
       selectedTab: this.selectedTab} 
    });

  }

}
