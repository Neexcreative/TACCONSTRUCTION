import fs from 'node:fs';

const dirs = ['public/images/hero','public/images/logo','public/images/about','public/images/services/renovation','public/images/services/heating','public/images/services/roofing','public/images/services/plumbing','public/images/services/construction'];
dirs.forEach(d => fs.mkdirSync(d, { recursive: true }));
const items = [
['public/images/hero/hero-bg.svg','HERO BACKGROUND'],
['public/images/logo/logo-dark.svg','LOGO DARK'],
['public/images/logo/logo-light.svg','LOGO LIGHT'],
['public/images/about/project-main.svg','MAIN PROJECT PHOTO'],
['public/images/about/onsite.svg','ON SITE PHOTO'],
['public/images/about/detail.svg','DETAIL PHOTO'],
['public/images/about/team-full.svg','FULL TEAM PHOTO'],
['public/images/about/fleet.svg','FLEET PHOTO'],
['public/images/services/renovation/01-full-home-renovation.svg','FULL HOME RENOVATION - Dublin 2024'],
['public/images/services/renovation/02-period-house-restore.svg','PERIOD HOUSE RESTORE - Wicklow 2024'],
['public/images/services/renovation/03-kitchen-extension.svg','KITCHEN EXTENSION - Dublin 2023'],
['public/images/services/renovation/04-interior-fitout.svg','INTERIOR FIT-OUT - Meath 2023'],
['public/images/services/heating/01-ch-installation.svg','FULL CH INSTALLATION - Dublin 2024'],
['public/images/services/heating/02-boiler-upgrade.svg','BOILER UPGRADE - Kildare 2024'],
['public/images/services/heating/03-underfloor-heating.svg','UNDERFLOOR HEATING - Dublin 2023'],
['public/images/services/heating/04-heat-pump-install.svg','HEAT PUMP INSTALL - Wicklow 2023'],
['public/images/services/roofing/01-full-reroof.svg','FULL RE-ROOF - Dublin 2024'],
['public/images/services/roofing/02-flat-roof-replacement.svg','FLAT ROOF REPLACEMENT - Meath 2024'],
['public/images/services/roofing/03-ridge-hip-repair.svg','RIDGE & HIP REPAIR - Dublin 2023'],
['public/images/services/roofing/04-chimney-repointing.svg','CHIMNEY REPOINTING - Wicklow 2023'],
['public/images/services/plumbing/01-bathroom-suite.svg','BATHROOM SUITE INSTALL - Dublin 2024'],
['public/images/services/plumbing/02-pipework-upgrade.svg','FULL PIPEWORK UPGRADE - Dublin 2024'],
['public/images/services/plumbing/03-ensuite-renovation.svg','ENSUITE RENOVATION - Kildare 2023'],
['public/images/services/plumbing/04-kitchen-plumbing.svg','KITCHEN PLUMBING - Dublin 2023'],
['public/images/services/construction/01-two-storey-extension.svg','TWO-STOREY EXTENSION - Dublin 2024'],
['public/images/services/construction/02-garage-conversion.svg','GARAGE CONVERSION - Meath 2024'],
['public/images/services/construction/03-attic-conversion.svg','ATTIC CONVERSION - Dublin 2023'],
['public/images/services/construction/04-garden-room.svg','GARDEN ROOM BUILD - Wicklow 2023'],
];
items.forEach(([p,l]) => { fs.writeFileSync(p, '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900"><rect width="1200" height="900" fill="#B0ABA6"/><rect x="0" y="450" width="1200" height="450" fill="rgba(0,0,0,0.55)"/><line x1="550" y1="400" x2="650" y2="400" stroke="white" stroke-width="2"/><line x1="600" y1="350" x2="600" y2="450" stroke="white" stroke-width="2"/><rect x="560" y="360" width="80" height="80" fill="none" stroke="white" stroke-width="1"/><text x="600" y="810" font-family="Arial" font-size="28" fill="white" text-anchor="middle" font-weight="bold">'+l+'</text><text x="600" y="855" font-family="Arial" font-size="18" fill="rgba(255,255,255,0.5)" text-anchor="middle">Replace with real photo</text></svg>'); console.log('OK:',p); });
console.log('DONE - 28 placeholders created');
