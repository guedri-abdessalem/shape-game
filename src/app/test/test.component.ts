import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  imageEstNoir = true;

  onClickImage() {
    this.imageEstNoir = !this.imageEstNoir;
  }





  formesGeometriques = [
    { id: 1, type: 'cercle', svg: '<svg width="100" height="100"><circle cx="50" cy="50" r="40" /></svg>' },
    { id: 2, type: 'triangle', svg: '<svg width="100" height="100"><polygon points="50,10 10,90 90,90" /></svg>' },
    { id: 3, type: 'carre', svg: '<svg width="100" height="100"><rect x="10" y="10" width="80" height="80" /></svg>' },
    { id: 4, type: 'rectangle', svg: '<svg width="100" height="100"><rect x="10" y="20" width="80" height="60" /></svg>' },
    { id: 5, type: 'losange', svg: '<svg width="100" height="100"><polygon points="50,10 90,50 50,90 10,50" /></svg>' },
    { id: 6, type: 'pentagone', svg: '<svg width="100" height="100"><polygon points="50,10 90,30 80,80 20,80 10,30" /></svg>' }
  ];
  melangerFormes() {
    this.formesGeometriques = this.shuffle(this.formesGeometriques);
  }

  shuffle(array: any[]) {
    let currentIndex = array.length;
    let temporaryValue: any;
    let randomIndex: number;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  /*selectionnerForme(forme: any) {
    if (this.formeSelectionnee) {
      // Vérifie si les deux formes sont identiques
      if (forme.id === this.formeSelectionnee.id) {
        forme.trouvee = true;
        this.formeSelectionnee.trouvee = true;
      } else {
        // Réinitialise les deux formes après un délai de 1 seconde
        setTimeout(() => {
          forme.visible = false;
          this.formeSelectionnee.visible = false;
          this.formeSelectionnee = null;
        }, 1000);
      }

      this.formeSelectionnee = null;
    } else {
      forme.visible = true;
      this.formeSelectionnee = forme;
    }
  }*/
}
