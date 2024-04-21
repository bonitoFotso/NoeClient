export const sites = [
  { id: 1, name: 'Yaoundé', appareil: 25, inspection: 20, rapport: 15, status: 'incomplet' },
  { id: 2, name: 'Douala', appareil: 32, inspection: 22, rapport: 17, status: 'incomplet' },
  { id: 3, name: 'Bamenda', appareil: 18, inspection: 24, rapport: 19, status: 'incomplet' },
  { id: 4, name: 'Bafoussam', appareil: 12, inspection: 26, rapport: 21, status: 'incomplet' },
  { id: 5, name: 'Ngaoundéré', appareil: 15, inspection: 15, rapport: 15, status: 'complet' },
  { id: 6, name: 'Maroua', appareil: 10, inspection: 10, rapport: 10, status: 'complet' },
];

export const equipments = [
    // Pour Yaoundé (25 appareils)
    { site: 'Yaoundé', type: 'Tractopelle', immatriculation: 'ABC123', numeroSerie: '12345', model: 'X100', marque: 'Caterpillar', anneeFabrication: 2018, anneeMiseService: 2019 },
    { site: 'Yaoundé', type: 'Chariot élévateur', immatriculation: 'DEF456', numeroSerie: '67890', model: 'Y200', marque: 'Toyota', anneeFabrication: 2019, anneeMiseService: 2020 },
    // Ajoutez d'autres appareils pour Yaoundé ici...
  
    // Pour Douala (32 appareils)
    { site: 'Douala', type: 'Grue', immatriculation: 'GHI789', numeroSerie: '54321', model: 'Z300', marque: 'Liebherr', anneeFabrication: 2020, anneeMiseService: 2021 },
    { site: 'Douala', type: 'Palan manuel', immatriculation: 'JKL012', numeroSerie: '13579', model: 'P400', marque: 'DEMAG', anneeFabrication: 2017, anneeMiseService: 2018 },
    // Ajoutez d'autres appareils pour Douala ici...
  
    // Pour Bamenda (18 appareils)
    { site: 'Bamenda', type: 'Tractopelle', immatriculation: 'MNO345', numeroSerie: '24680', model: 'X200', marque: 'Volvo', anneeFabrication: 2019, anneeMiseService: 2020 },
    { site: 'Bamenda', type: 'Chariot élévateur', immatriculation: 'PQR678', numeroSerie: '97531', model: 'Y300', marque: 'Hyster', anneeFabrication: 2018, anneeMiseService: 2019 },
    // Ajoutez d'autres appareils pour Bamenda ici...
  
    // Pour Bafoussam 
    { site: 'Bafoussam', type: 'Grue', immatriculation: 'BAF001', numeroSerie: '12345', model: 'G100', marque: 'Liebherr', anneeFabrication: 2018, anneeMiseService: 2019 },
  { site: 'Bafoussam', type: 'Chariot élévateur', immatriculation: 'BAF002', numeroSerie: '67890', model: 'C200', marque: 'Toyota', anneeFabrication: 2019, anneeMiseService: 2020 },
  { site: 'Bafoussam', type: 'Tractopelle', immatriculation: 'BAF003', numeroSerie: '24680', model: 'T300', marque: 'Caterpillar', anneeFabrication: 2020, anneeMiseService: 2021 },
  { site: 'Bafoussam', type: 'Palan manuel', immatriculation: 'BAF004', numeroSerie: '97531', model: 'P400', marque: 'DEMAG', anneeFabrication: 2017, anneeMiseService: 2018 },
  { site: 'Bafoussam', type: 'Grue', immatriculation: 'BAF005', numeroSerie: '86420', model: 'Z500', marque: 'Tadano', anneeFabrication: 2021, anneeMiseService: 2022 },
  { site: 'Bafoussam', type: 'Chariot élévateur', immatriculation: 'BAF006', numeroSerie: '75319', model: 'M600', marque: 'Hyster', anneeFabrication: 2020, anneeMiseService: 2021 },
  { site: 'Bafoussam', type: 'Tractopelle', immatriculation: 'BAF007', numeroSerie: '80246', model: 'X700', marque: 'Volvo', anneeFabrication: 2018, anneeMiseService: 2019 },
  { site: 'Bafoussam', type: 'Palan manuel', immatriculation: 'BAF008', numeroSerie: '41937', model: 'P800', marque: 'Konecranes', anneeFabrication: 2019, anneeMiseService: 2020 },
  { site: 'Bafoussam', type: 'Grue', immatriculation: 'BAF009', numeroSerie: '62874', model: 'Z900', marque: 'Zoomlion', anneeFabrication: 2020, anneeMiseService: 2021 },
  { site: 'Bafoussam', type: 'Chariot élévateur', immatriculation: 'BAF010', numeroSerie: '39486', model: 'Y1000', marque: 'Mitsubishi', anneeFabrication: 2018, anneeMiseService: 2019 },
  
    // Pour Ngaoundéré 
    { site: 'Ngaoundéré', type: 'Grue', immatriculation: 'NGA001', numeroSerie: '12345', model: 'G100', marque: 'Liebherr', anneeFabrication: 2018, anneeMiseService: 2019 },
    { site: 'Ngaoundéré', type: 'Chariot élévateur', immatriculation: 'NGA002', numeroSerie: '67890', model: 'C200', marque: 'Toyota', anneeFabrication: 2019, anneeMiseService: 2020 },
    { site: 'Ngaoundéré', type: 'Tractopelle', immatriculation: 'NGA003', numeroSerie: '24680', model: 'T300', marque: 'Caterpillar', anneeFabrication: 2020, anneeMiseService: 2021 },
    { site: 'Ngaoundéré', type: 'Palan manuel', immatriculation: 'NGA004', numeroSerie: '97531', model: 'P400', marque: 'DEMAG', anneeFabrication: 2017, anneeMiseService: 2018 },
    { site: 'Ngaoundéré', type: 'Grue', immatriculation: 'NGA005', numeroSerie: '86420', model: 'Z500', marque: 'Tadano', anneeFabrication: 2021, anneeMiseService: 2022 },
    { site: 'Ngaoundéré', type: 'Chariot élévateur', immatriculation: 'NGA006', numeroSerie: '75319', model: 'M600', marque: 'Hyster', anneeFabrication: 2020, anneeMiseService: 2021 },
    { site: 'Ngaoundéré', type: 'Tractopelle', immatriculation: 'NGA007', numeroSerie: '80246', model: 'X700', marque: 'Volvo', anneeFabrication: 2018, anneeMiseService: 2019 },
    { site: 'Ngaoundéré', type: 'Palan manuel', immatriculation: 'NGA008', numeroSerie: '41937', model: 'P800', marque: 'Konecranes', anneeFabrication: 2019, anneeMiseService: 2020 },
    { site: 'Ngaoundéré', type: 'Grue', immatriculation: 'NGA009', numeroSerie: '62874', model: 'Z900', marque: 'Zoomlion', anneeFabrication: 2020, anneeMiseService: 2021 },
    { site: 'Ngaoundéré', type: 'Chariot élévateur', immatriculation: 'NGA010', numeroSerie: '39486', model: 'Y1000', marque: 'Mitsubishi', anneeFabrication: 2018, anneeMiseService: 2019 },
  
    // Pour Maroua 
    { site: 'Maroua', type: 'Grue', immatriculation: 'MAR001', numeroSerie: '12345', model: 'G100', marque: 'Liebherr', anneeFabrication: 2018, anneeMiseService: 2019 },
    { site: 'Maroua', type: 'Chariot élévateur', immatriculation: 'MAR002', numeroSerie: '67890', model: 'C200', marque: 'Toyota', anneeFabrication: 2019, anneeMiseService: 2020 },
    { site: 'Maroua', type: 'Tractopelle', immatriculation: 'MAR003', numeroSerie: '24680', model: 'T300', marque: 'Caterpillar', anneeFabrication: 2020, anneeMiseService: 2021 },
    { site: 'Maroua', type: 'Palan manuel', immatriculation: 'MAR004', numeroSerie: '97531', model: 'P400', marque: 'DEMAG', anneeFabrication: 2017, anneeMiseService: 2018 },
    { site: 'Maroua', type: 'Grue', immatriculation: 'MAR005', numeroSerie: '86420', model: 'Z500', marque: 'Tadano', anneeFabrication: 2021, anneeMiseService: 2022 },
    { site: 'Maroua', type: 'Chariot élévateur', immatriculation: 'MAR006', numeroSerie: '75319', model: 'M600', marque: 'Hyster', anneeFabrication: 2020, anneeMiseService: 2021 },
    { site: 'Maroua', type: 'Tractopelle', immatriculation: 'MAR007', numeroSerie: '80246', model: 'X700', marque: 'Volvo', anneeFabrication: 2018, anneeMiseService: 2019 },
    { site: 'Maroua', type: 'Palan manuel', immatriculation: 'MAR008', numeroSerie: '41937', model: 'P800', marque: 'Konecranes', anneeFabrication: 2019, anneeMiseService: 2020 },
    { site: 'Maroua', type: 'Grue', immatriculation: 'MAR009', numeroSerie: '62874', model: 'Z900', marque: 'Zoomlion', anneeFabrication: 2020, anneeMiseService: 2021 },
    { site: 'Maroua', type: 'Chariot élévateur', immatriculation: 'MAR010', numeroSerie: '39486', model: 'Y1000', marque: 'Mitsubishi', anneeFabrication: 2018, anneeMiseService: 2019 }
  ];
  