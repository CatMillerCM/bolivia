import bottleBalance from '../../public/templates/bottle-balance.webp';
import bigFoot from '../../public/templates/big-foot.webp';
import hatTrick from '../../public/templates/hat-trick.webp';
import pringlesPose from '../../public/templates/pringles-pose.webp';
import spoonScoop from '../../public/templates/spoon-scoop.webp';
import stompScare from '../../public/templates/stomp-scare.webp';

const photoTemplates = [
  {
    photo: spoonScoop,
    caption: 'Spoon Scoop',
    positioning: { x: 819, y: 288, width: 73, height: 63, rotation: -10 }
  },
  {
    photo: bigFoot,
    caption: 'Big Foot',
    positioning: { x: 470, y: 135, width: 160, height: 140, rotation: 0 }
  },
  {
    photo: pringlesPose,
    caption: 'Pringles Pose',
    positioning: { x: 480, y: 123, width: 125, height: 115, rotation: 0 }
  },
  {
    photo: stompScare,
    caption: 'Stomp Scare',
    positioning: { x: 387, y: 550, width: 165, height: 150, rotation: -40 }
  },
  {
    photo: bottleBalance,
    caption: 'Bottle Balance',
    positioning: { x: 467, y: -10, width: 140, height: 140, rotation: 0 }
  },
  {
    photo: hatTrick,
    caption: 'Hat-trick',
    positioning: { x: 592, y: 293, width: 102, height: 92, rotation: 10 }
  }
];

export { photoTemplates };