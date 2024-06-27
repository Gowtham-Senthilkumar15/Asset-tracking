import { Component, OnInit } from '@angular/core';

interface Asset {
  assetName: string;
  assetType: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  companyName: string = '';
  companyAddress: string = '';
  trackingManager: string = '';
  numberOfLaptops: number = 0;

  assets: Asset[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  submitCompanyDetails() {
    console.log('Company Name:', this.companyName);
    console.log('Company Address:', this.companyAddress);
    console.log('Tracking Manager:', this.trackingManager);
    console.log('Number of Laptops:', this.numberOfLaptops);

    // Initialize assets array based on numberOfLaptops
    this.assets = new Array(this.numberOfLaptops).fill({ assetName: '', assetType: '' });
  }

  submitAssetDetails() {
    console.log('Assets:', this.assets);

    // Logic to save asset details or perform other actions
  }
}
