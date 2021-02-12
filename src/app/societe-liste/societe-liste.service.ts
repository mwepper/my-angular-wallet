import {Societe} from '../shared/societe.model';

export class SocieteListeService {
  private societes: Societe[] = [
    new Societe('ACCOR', 'FR0000120404', 'AC', 'TOURISME_TRANSPORT', 'Value'),
    new Societe('ADP', 'FR0010340141', 'ADP', 'CONSTRUCTION_CONCESSION', 'Growth'),
    new Societe('Air Liquide', 'FR0000120073', 'AI', 'PRODUIT_BASE', 'Growth')
  ];

  getSocieteListe() {
    return this.societes.slice();
  }
}
