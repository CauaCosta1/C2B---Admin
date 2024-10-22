import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiUrl = 'url_do_seu_backend/api/reports';

  constructor(private http: HttpClient) {}

  getReports(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  uploadReport(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('reportFile', file, file.name);
    return this.http.post(`${this.apiUrl}/upload`, formData);
  }

  searchReports(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?query=${query}`);
  }
}
