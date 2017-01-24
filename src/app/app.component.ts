import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
  selector: 'reddit',
  templateUrl: './app.component.html'
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article ('Angular 2', 'http://angular.io', 3),
      new Article ('Nativescript', 'http://Nativescript.io', 4),
      new Article ('Fullstack', 'http://Fullstack.io', 8),
    ];
  }

  //Agregar articulo con el boton submit
  addArticle(title: HTMLInputElement, link: HTMLInputElement) : boolean {
    console.log(`Adding article title: ${ title.value } and link ${ link.value }`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}

@Component({
  selector: 'reddit-article',
  inputs: ['article'],
  host: {
    class: 'row'
  },
  templateUrl: './intermediates/article.html'
})

export class ArticleComponent {

  article: Article;

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
}

export class Article {
  title: string;
  votes: number;
  link: string;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.votes = votes || 0;
    this.link = link;
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void{
    this.votes -= 1;
  }

  domain(): string {
    try {
      const link: string = this.link.split('//')[1];
      return link.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}