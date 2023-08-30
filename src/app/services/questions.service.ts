import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private apiUrl = 'http://localhost:3000/api/audio/';
  constructor(private http: HttpClient) {}

  playQuestion(audioIndex: string | number) {
    return this.http.get<ArrayBuffer>(this.apiUrl + audioIndex, {
      responseType: 'arraybuffer' as 'json',
    });
  }
}
