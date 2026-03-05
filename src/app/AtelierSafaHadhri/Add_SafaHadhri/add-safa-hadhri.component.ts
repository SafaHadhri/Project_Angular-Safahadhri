import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AtelierSafaHadhriService } from '../../services/atelierSafaHadhri.service';

@Component({
  selector: 'app-add-safa-hadhri',
  templateUrl: './add-safa-hadhri.component.html',
  styleUrl: './add-safa-hadhri.component.css'
})
export class AddSafaHadhriComponent implements OnInit {

  atelierForm!: FormGroup;

  constructor(private atelierService: AtelierSafaHadhriService, private router: Router) {}

  ngOnInit() {
    this.atelierForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      nom: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      emailFormateur: new FormControl(null, [Validators.required, Validators.email]),
      nbrParticipant: new FormControl(null, [Validators.required, Validators.min(16)]),
      statut: new FormControl(true)
    });
  }

  get idField() { return this.atelierForm.get('id'); }
  get nom() { return this.atelierForm.get('nom'); }
  get emailFormateur() { return this.atelierForm.get('emailFormateur'); }
  get nbrParticipant() { return this.atelierForm.get('nbrParticipant'); }

  onSubmit() {
    if (this.atelierForm.invalid) {
      this.atelierForm.markAllAsTouched();
      return;
    }
    this.atelierService.createAtelier(this.atelierForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/atelierSafaHadhri/list');
      },
      error: (err) => {
        console.error('Erreur lors de la création:', err);
        this.router.navigateByUrl('/atelierSafaHadhri/list');
      }
    });
  }
}
