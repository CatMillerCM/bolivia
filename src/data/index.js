import beerBottleBalance from '../../public/templates/beer-bottle-balance.webp';
import bigFoot from '../../public/templates/big-foot.webp';
import hatTrick from '../../public/templates/hat-trick.webp';
import pringlesPose from '../../public/templates/pringles-pose.webp';
import spoonScoop from '../../public/templates/spoon-scoop.webp';
import stompScare from '../../public/templates/stomp-scare.webp';

const photoTemplates = [
  {
    photo: spoonScoop,
    caption: 'Spoon Scoop',
    positioning: { x: 840, y: 300, width: 40, height: 50 }
  },
  {
    photo: bigFoot,
    caption: 'Big Foot',
    positioning: { x: 530, y: 200, width: 50, height: 65 }
  },
  {
    photo: pringlesPose,
    caption: 'Pringles Pose',
    positioning: { x: 510, y: 170, width: 50, height: 65 }
  },
  {
    photo: stompScare,
    caption: 'Stomp Scare',
    positioning: { x: 430, y: 580, width: 50, height: 65 }
  },
  {
    photo: beerBottleBalance,
    caption: 'Beer Bottle Balance',
    positioning: { x: 500, y: 20, width: 60, height: 75 }
  },
  {
    photo: hatTrick,
    caption: 'Hat-trick',
    positioning: { x: 600, y: 300, width: 50, height: 65 }
  }
];

export { photoTemplates };