import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../services/weather.service';
import { wheaterDatas } from 'src/app/models/interfaces/weather';

@Component({
  selector: 'app-weater-home',
  templateUrl: './Weater-home.component.html',
  styleUrls: [],
})
export class WeatherHomeComponent implements OnInit {
  initialCityName = 'São Paulo';
  WeatherDatas!: wheaterDatas;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.initialCityName);

  }
  getWeatherData(cityName: string): void {
      this.weatherService.getWeatherDatas(cityName).subscribe({
        next: (response) => {
          response && (this.WeatherDatas = response);
          console.log(this.WeatherDatas)
        },
        error: (error) => console.log(error),

  });
    }
  }
