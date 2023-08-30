import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import playAudio from 'src/utils/playAudio';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  title: string = 'About Interview Asker';

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {}

  demoQuestion(audioIndex: string | number) {
    this.questionsService
      .playQuestion(audioIndex)
      .subscribe((audioBuffer: ArrayBuffer) => {
        playAudio(audioBuffer);
      });
  }
}
