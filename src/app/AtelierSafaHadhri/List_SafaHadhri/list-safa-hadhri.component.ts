import { Component, OnInit } from '@angular/core';
import { AtelierSafaHadhri } from '../../models/atelierSafaHadhri';
import { AtelierSafaHadhriService } from '../../services/atelierSafaHadhri.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-safa-hadhri',
  templateUrl: './list-safa-hadhri.component.html',
  styleUrl: './list-safa-hadhri.component.css'
})
export class ListSafaHadhriComponent implements OnInit {

  ateliers: AtelierSafaHadhri[] = [];
  searchTerm: string = '';

  constructor(private atelierService: AtelierSafaHadhriService, private router: Router) {}

  ngOnInit() {
    this.atelierService.readAllAteliers().subscribe((data) => {
      this.ateliers = data;
    });
  }

  filterAteliers(): AtelierSafaHadhri[] {
    if (!this.searchTerm || this.searchTerm === '') {
      return this.ateliers;
    }
    return this.ateliers.filter(
      atelier =>
        atelier.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        atelier.emailFormateur.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  deleteAtelier(id: any) {
    this.atelierService.deleteAtelier(id).subscribe(() => {
      this.ateliers = this.ateliers.filter(a => a.id != id);
    });
  }
}
