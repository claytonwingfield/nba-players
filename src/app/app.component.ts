import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Giannis Antetokounmpo',
      imageUrl: 'assets/giannas.jpg',
      username: '@Giannis_An34',
      twitterLink: 'https://twitter.com/Giannis_An34',
      content: 'Milwaukee Bucks',
    },
    {
      title: 'Kevin Durant',
      imageUrl: 'assets/KD.jpg',
      username: '@KDTrey5',
      twitterLink: 'https://twitter.com/KDTrey5',
      content: 'Brooklyn Nets',
    },
    {
      title: 'Lebron James',
      imageUrl: 'assets/lebron-james.jpeg',
      username: '@KingJames',
      twitterLink: 'https://twitter.com/KingJames',
      content: 'Los Angeles Lakers',
    },
    {
      title: 'Luka Doncic',
      imageUrl: 'assets/luka.jpg',
      username: '@luka7doncic',
      twitterLink: 'https://twitter.com/luka7doncic',
      content: 'Dallas Mavericks',
    },
    {
      title: 'Devin Booker',
      imageUrl: 'assets/devin.jpg',
      username: '@devinbook',
      twitterLink: 'https://twitter.com/devinbook',
      content: 'Phoenix Suns',
    },
    {
      title: 'Jayson Tatum',
      imageUrl: 'assets/jason.jpeg',
      username: '@jaytatum0',
      twitterLink: 'https://twitter.com/jaytatum0',
      content: 'Boston Celtics',
    },
  ];
  myTitle: string = 'Basketball Players';
}
