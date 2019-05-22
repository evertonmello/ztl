import { Component, OnInit } from '@angular/core';

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
      {name: 'Ladytron',imagedesc:'desc desc',image: ''},
      { name: 'Lady Antebellum',desc:'',image: ''}],
    songs: [
      {name:'Lady song1',desc:'desc desc', image: ''},
      {name:'Lady song1',desc:'', image: ''},
      {name:'Lady song1',desc:'desc desc', image: ''},
      {name:'Lady song1',desc:'desc desc', image: ''},
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
      {name:'Lady albun',desc:'desc desc', image: ''}]
  }
//  resultTypes = ['musicas', 'as']
  resultTypes = Object.keys(this.searchResponse)

  array =  [
    {name:'Lady albun',desc:'', image: ''},
    {name:'Lady albun',desc:'desc desc', image: ''},
    {name:'Lady albun',desc:'desc desc', image: ''},
    {name:'Lady albun',desc:'desc desc', image: ''},
    {name:'Lady albun',desc:'desc desc', image: ''},
    {name:'Lady albun',desc:'desc desc', image: ''},
    {name:'Lady albun',desc:'desc desc', image: ''},
    {name:'Lady albun',desc:'desc desc', image: ''}]

/*   songs: ['Lady song1', 'Lady song1', 'Lady song1', 'Lady song1', 'Lady song1', 'Lady song1', 'Lady song1', 'Lady song1', 'Lady song1'],
  albuns: ['Lady Soul', 'Lady2', 'Lady3', 'Lady4', 'Lady5', 'Lady6', 'Lady7', 'Lady8', 'Lady9'], */
constructor() { }

ngOnInit() {
  console.log(this.array.length)
}

getContentArray(index){
  return this.searchResponse[Object.keys(this.searchResponse)[index].toString()];
}

}
