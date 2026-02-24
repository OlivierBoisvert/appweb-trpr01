import { type Gear } from "../scripts/types";
import { type Grade } from "../scripts/types";

const ZAYIN: Grade = {
  name: "Zayin",
  path: "../assets/images/zayin.webp",
};

const TETH: Grade = {
  name: "Teth",
  path: "../assets/images/teth.webp",
};

const HE: Grade = {
  name: "He",
  path: "../assets/images/he.webp",
};

//ChatGPT, README
export const defaultGear: Gear[] = [
  {
    id: 1,
    nom: "Penitence",
    description:
      "To know means to understand.\
			We successfully extracted the archetype and materialized it, and the observer reshaped it into a weapon.\
			This is why we highly regarded the act of observation.\
			The eye sockets of the hollow skull stare into sins, and the crown of thorns casts blame.\
			Those who are willing to spill blood for the greater good will be readily given approval for its use.\
			Though this weapon is not as strong as other E.G.O weapons in our possession, it provides psychological comfort to the wielder.\
			However, it is useless to those who do not know justice.",
    prix: 15.0,
    stock: 50,
    categorie: ZAYIN,
  },

  {
    id: 2,
    nom: "Soda",
    description:
      "This E.G.O was last extracted by an employee who particularly loved shrimp.\
			A pistol painted in a refreshing purple.\
			Whenever this E.G.O. is used, a faint scent of grapes wafts through the air.",
    prix: 20.0,
    stock: 20,
    categorie: ZAYIN,
  },

  {
    id: 3,
    nom: "Wingbeat",
    description:
      "Graced by the fairies, the weapon radiates a pale light.\
			Despite its cute shape, the E.G.O. itself is rather heavy.",
    prix: 10.0,
    stock: 50,
    categorie: ZAYIN,
  },

  {
    id: 4,
    nom: "Standard Training E.G.O",
    description: "E.G.O intended for Manager Education.",
    prix: 1.0,
    stock: 50,
    categorie: TETH,
  },

  {
    id: 5,
    nom: "Fourth Match Flame",
    description:
      "The fire roars and burns like the first flame.\
			The light of the match will not go out until it has burned away happiness, warmth, light, and all the other good things of the world; there's no need to worry about it being quenched.\
			The experiments with lighting the matches could not be completed without collateral damage.\
			Those who are burned will feel infinite hatred towards the world until the last flicker of their consciousness is snuffed out.",
    prix: 35.0,
    stock: 10,
    categorie: TETH,
  },

  {
    id: 6,
    nom: "Solitude",
    description:
      "A strong sense of loneliness still lingers, even in the form of an E.G.O.\
			Its bullets create a void that cannot be filled on the victim's soul, rather than a wound upon their flesh and bones.\
			It was a rusty weapon from the beginning.",
    prix: 30.0,
    stock: 20,
    categorie: TETH,
  },

  {
    id: 7,
    nom: "Red Eyes",
    description:
      "The Spider Bud had dozens of eyes, and its children were always hungry.\
			This tenacity carried over to the E.G.O, demonstrating an outstanding ability to track down targets.\
			The eyes shone in the dark, searching for prey to feed to its spiderlings. The weapon emits a glowing red aura to find victims in the darkness.\
			One should maintain caution, as the wielder can become possessed by the spider should they look into its alluring eyes for too long.",
    prix: 20.0,
    stock: 30,
    categorie: TETH,
  },

  {
    id: 8,
    nom: "Horn",
    description:
      "The green-eyed beauty's favorite flower was the dahlia; “Your love makes me happy.”\
			The lady's happiness came to an end with the budding of those unsightly horns. The dahlia’s unfulfilled meaning was borne as a seed in this E.G.O, carrying a lingering emotion.\
			No matter how many times the equipment is produced, the bud never withers.\
			As the horn digs deep into the enemy's heart, it will turn blood red to show off the glamor that she couldn't in her life.",
    prix: 30.0,
    stock: 30,
    categorie: TETH,
  },

  {
    id: 9,
    nom: "Wrist Cutter",
    description:
      "It bears bloodstains as if it were gripped by hands soaked in ever-lasting red.\
			To ease the pain of its victim, its sharp blade can make a clean cut through bone like a hot knife through butter, leaving a wound that will never heal.\
			It will also permanently cut off the will to pursue happiness.",
    prix: 25.0,
    stock: 20,
    categorie: TETH,
  },

  {
    id: 10,
    nom: "Regret",
    description:
      "Bearing unlimited possibility to change humanity's future, confidential research began in the underground.\
			The researchers laid down all sense of dignity, but they did not feel guilty as they had the greater good to pursue.\
			Even the merciful Carmen condoned the project.\
			Enemies crushed by this regret can never return to their normal life.\
			Before swinging this weapon, expressing one’s condolences for the demise of the inmate who couldn't even have a funeral would be nice.",
    prix: 25.0,
    stock: 20,
    categorie: TETH,
  },

  {
    id: 11,
    nom: "Beak",
    description:
      "As if to prove that size doesn't matter when it comes to force, the weapon has high firepower despite its small size.\
			Unleash it on those standing in the way with no hesitation or forgiveness.\
			The bullet's surface is covered with numerous spikes resembling small teeth, so it can inflict quite a bit of pain when it penetrates an enemy.",
    prix: 30.0,
    stock: 20,
    categorie: TETH,
  },

  {
    id: 12,
    nom: "Fragments From Somewhere",
    description:
      "Do not attempt to understand it, just use it.\
			The spear often tries to lead the wielder into a long and endless realm of mind, but they must try to not be swayed by it.\
			It took a different form every time it was produced, but we managed to stabilize the gestalt after a lot of effort and trouble.\
			There is a rumor that this spear emits a bright light when it hears an echo from another world.",
    prix: 20.0,
    stock: 30,
    categorie: TETH,
  },

  {
    id: 13,
    nom: "Lantern",
    description:
      "The luminous organ shines brilliantly, making it useful for lighting up the dark.\
			It's also great as a lure.\
			Though teeth sticking out of some spots of the equipment is a rather frightening sight.",
    prix: 25.0,
    stock: 20,
    categorie: TETH,
  },

  {
    id: 14,
    nom: "Today's Expression",
    description:
      "Many different expressions are padded on the equipment like patches.\
			The inability to show one's face is perhaps a form of shyness.\
			When throbbing emotions surge up from time to time, it's best to simply cover the face.",
    prix: 25.0,
    stock: 20,
    categorie: TETH,
  },

  {
    id: 15,
    nom: "Engulfing Dream",
    description:
      "We must be awake at all times.\
			Not even sweet dreams in a sound sleep are allowed here; this weapon shall wake those who swim in such illusions.\
			And when the crying stops, dawn will break.",
    prix: 25.0,
    stock: 20,
    categorie: TETH,
  },

  {
    id: 16,
    nom: "Cherry Blossoms",
    description:
      "Petals scatter from the fan like afterimages, longing for the view of the flowers that withered away as soon as they bloomed.\
			The spring breeze clad in cherry blossom petals is still cold and painful.\
			Do not miss me, for I shall return as buds when winter leaves.",
    prix: 25.0,
    stock: 10,
    categorie: TETH,
  },

  {
    id: 17,
    nom: "SO CUTE!!!",
    description:
      "One may think, “How can a weapon drawn from such a cute Abnormality be any good?”\
			However, the claws are actually quite durable and sharp.\
			Beware that the beast inside you may awaken if you use this weapon too much...\
			Oh but the soft jelly-like pawbs feel vewwy nice to touch.",
    prix: 25.0,
    stock: 20,
    categorie: TETH,
  },

  {
    id: 18,
    nom: "Tough",
    description:
      "A glock reminiscent of a certain detective who fought evil for 25 years, losing hair as time went by.\
			Only those who maintain a clean “hairstyle” with no impurities on their head will be deemed worthy of equipping this weapon.\
			Perhaps it could even shoot down a helicopter, if used well.",
    prix: 15.0,
    stock: 30,
    categorie: TETH,
  },

  {
    id: 19,
    nom: "Bear Paws",
    description:
      "The stuffing spilling out of it hangs miserably as if to represent the innocence that was forgotten over time.\
			Its adorable appearance makes it something that might even appeal to a child as a gift.\
			It's evident that using this equipment recklessly will cause it to tear, so extra caution is needed.\
			Some sympathetic employees felt sorry for it and asked for it to be repaired, however the outcome of the repairs was unforeseeable, so the proposal was rejected.\
			Do not underestimate the weapon’s power because of its fluffy exterior.",
    prix: 40.0,
    stock: 20,
    categorie: HE,
  },

  {
    id: 20,
    nom: "Sanguine Desire",
    description:
      "Its tenacity couldn't be exterminated even after the legs were cut off, and it bored its way through the woods to come back to us.\
			Most employees have heard a single word of the tragedy of the past.\
			The axe may seem light, but the wielder musn't forget that it has hurt countless people as a consequence of poor choices.\
			The weapon is stronger when used by an employee with strong conviction.\
			However, the moment you're blinded by desire, there is no way to wake up from the dreamlike throes of obsession.",
    prix: 40.0,
    stock: 20,
    categorie: HE,
  },

  {
    id: 21,
    nom: "Syrinx",
    description:
      "What cry could be more powerful than one spurred by primal instinct?\
			As if everything else were hollow and pointless, the wailing numbs even the brain, making it impossible to think.",
    prix: 45.0,
    stock: 10,
    categorie: HE,
  },

  {
    id: 22,
    nom: "Screaming Wedge",
    description:
      "Hair has grown on the crossbow as if to express that the woman’s dejection will never be forgotten.\
			The sound of the projectile splitting the air is reminiscent of her piercing scream.\
			Those who wield this must be careful, as her hair can tangle the wielder's hands and drag them into an endless path of sorrow.\
			Only iron-willed employees with a cold-blooded disposition can use this without letting the deep-rooted sorrow weave its strands around their heart.",
    prix: 35.0,
    stock: 20,
    categorie: HE,
  },

  {
    id: 23,
    nom: "Harmony",
    description:
      "It may look like a deteriorating machine at first glance, but the music it makes captures its audience more than any other instrument could.\
			The wielder must dedicate himself in return.\
			After all, art is a devil's gift, born from despair and suffering.\
			Never stop performing until the body crumbles to dust.",
    prix: 40.0,
    stock: 20,
    categorie: HE,
  },

  {
    id: 24,
    nom: "Logging",
    description:
      "A versatile equipment made to cut down trees and people alike.\
			Perhaps sharpening the axe was the one thing it didn't neglect. The blade is always shiny.",
    prix: 40.0,
    stock: 20,
    categorie: HE,
  },

  {
    id: 25,
    nom: "Frost Splinter",
    description:
      "The Snow Queen was beautiful, but where her heart should have been was empty and frozen.\
			The edge of the spear is both straight and icy. Anyone damaged by it will lose themselves for a moment.\
			As the equipment was forged from snow, it shall disappear without a trace someday.\
			Someday, when the weather warms enough to melt the snow, it may thaw the heart as well; if you truly believe so.",
    prix: 35.0,
    stock: 30,
    categorie: HE,
  },

  {
    id: 26,
    nom: "Grinder Mk4",
    description:
      "The sharp sawtooth of the grinder makes a clean cut through its enemy.\
			Its operation is simple and straightforward, but that doesn't necessarily make it easy to wield.\
			As machines have no morals of their own, there was no clear boundary between good and evil.\
			This disregard for value is precisely reflected by the weapon’s reliable dicing force.\
			People used to be afraid of machines in the beginning, but a mechanical rebellion soon became a myth of the past in our world.",
    prix: 50.0,
    stock: 10,
    categorie: HE,
  },

  {
    id: 27,
    nom: "Christmas",
    description:
      "It is patched with heavy leather of unknown origin.\
			The colorful leather pieces remind one of a festive holiday that is now long forgotten.\
			The stitches are carefully woven, but for whom or for what, exactly, is unclear.\
			It is not elegant, but you can feel the devotion of its creator.\
			What is truly under the leather is classified, but that secrecy only makes the weapon all the more powerful.",
    prix: 35.0,
    stock: 30,
    categorie: HE,
  },

  {
    id: 28,
    nom: "Our Galaxy",
    description:
      "The pebble dropped into your hand sparkles, sways, tickles, and eventually becomes the universe.\
			“There's a universe inside a pebble. When the child cries, the stars in the galaxy light the void. In your universe, am I to be found?”",
    prix: 45.0,
    stock: 10,
    categorie: HE,
  },

  {
    id: 29,
    nom: "Life For A Daredevil",
    description:
      "An ancient sword.\
			Just as its archetype desired, it will be useless in the hands of the frightened.",
    prix: 35.0,
    stock: 10,
    categorie: HE,
  },

  {
    id: 30,
    nom: "Laetitia",
    description:
      "It takes a lot of time to extract, but its power cannot be ignored.\
			The crude design appears to have been made a long time ago.\
			The small accessory remains like the wishes of a child who yearned for happiness.",
    prix: 40.0,
    stock: 20,
    categorie: HE,
  },

  {
    id: 31,
    nom: "Gaze",
    description:
      "The gaze from the keyhole is fixed on its target without ever stopping. No one knows what it wanted to peep at so dearly.\
			As long as this is equipped, ambush won't be a concern.",
    prix: 45.0,
    stock: 10,
    categorie: HE,
  },

  {
    id: 32,
    nom: "Harvest",
    description:
      "The last legacy of the man who sought wisdom.\
			The rake tilled the human brain instead of farmland.\
			How many of the wise people among us have lost their lives to this rake?",
    prix: 45.0,
    stock: 30,
    categorie: HE,
  },

  {
    id: 33,
    nom: "Pleasure",
    description:
      "If you grasp for pleasure you cannot endure, you will end up losing yourself.\
			When the powder that falls from the thorns becomes known to the world, people may forever sink into the swamp of intoxication.",
    prix: 45.0,
    stock: 10,
    categorie: HE,
  },
];
