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
    positioning: { x: 808, y: 265, width: 100, height: 100, rotation: 0 }
  },
  {
    photo: bigFoot,
    caption: 'Big Foot',
    positioning: { x: 480, y: 150, width: 140, height: 140, rotation: 0 }
  },
  {
    photo: pringlesPose,
    caption: 'Pringles Pose',
    positioning: { x: 470, y: 113, width: 135, height: 135, rotation: 0 }
  },
  {
    photo: stompScare,
    caption: 'Stomp Scare',
    positioning: { x: 385, y: 547, width: 170, height: 170, rotation: -40 }
  },
  {
    photo: bottleBalance,
    caption: 'Bottle Balance',
    positioning: { x: 457, y: -20, width: 160, height: 160, rotation: 0 }
  },
  {
    photo: hatTrick,
    caption: 'Hat-trick',
    positioning: { x: 592, y: 288, width: 102, height: 102, rotation: 10 }
  }
];

export { photoTemplates };