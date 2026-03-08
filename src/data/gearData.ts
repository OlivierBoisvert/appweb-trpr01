import { type Gear } from "../scripts/types";
import { type Grade } from "../scripts/types";

const ZAYIN: Grade = {
  name: "Zayin",
  path: "/images/zayin.webp",
};

const TETH: Grade = {
  name: "Teth",
  path: "/images/teth.webp",
};

const HE: Grade = {
  name: "He",
  path: "/images/he.webp",
};

const WAW: Grade = {
  name: "Waw",
  path: "/images/waw.webp",
};

const ALEPH: Grade = {
  name: "Aleph",
  path: "/images/aleph.webp",
};

//ChatGPT, README
export const defaultGear: Gear[] = [
  {
    id: 1,
    name: "Penitence",
    description:
      "To know means to understand.\n\
			We successfully extracted the archetype and materialized it, and the observer reshaped it into a weapon.\n\
			This is why we highly regarded the act of observation.\n\
			The eye sockets of the hollow skull stare into sins, and the crown of thorns casts blame.\n\
			Those who are willing to spill blood for the greater good will be readily given approval for its use.\n\
			Though this weapon is not as strong as other E.G.O weapons in our possession, it provides psychological comfort to the wielder.\n\
			However, it is useless to those who do not know justice.",
    cost: 15.0,
    stock: 5,
    category: ZAYIN,
  },

  {
    id: 2,
    name: "Soda",
    description:
      "This E.G.O was last extracted by an employee who particularly loved shrimp.\n\
			A pistol painted in a refreshing purple.\n\
			Whenever this E.G.O. is used, a faint scent of grapes wafts through the air.",
    cost: 20.0,
    stock: 2,
    category: ZAYIN,
  },

  {
    id: 3,
    name: "Wingbeat",
    description:
      "Graced by the fairies, the weapon radiates a pale light.\n\
			Despite its cute shape, the E.G.O. itself is rather heavy.",
    cost: 10.0,
    stock: 5,
    category: ZAYIN,
  },

  {
    id: 4,
    name: "Standard Training E.G.O",
    description: "E.G.O intended for Manager Education.",
    cost: 1.0,
    stock: 5,
    category: TETH,
  },

  {
    id: 5,
    name: "Fourth Match Flame",
    description:
      "The fire roars and burns like the first flame.\n\
			The light of the match will not go out until it has burned away happiness, warmth, light, and all the other good things of the world; there's no need to worry about it being quenched.\n\
			The experiments with lighting the matches could not be completed without collateral damage.\n\
			Those who are burned will feel infinite hatred towards the world until the last flicker of their consciousness is snuffed out.",
    cost: 35.0,
    stock: 1,
    category: TETH,
  },

  {
    id: 6,
    name: "Solitude",
    description:
      "A strong sense of loneliness still lingers, even in the form of an E.G.O.\n\
			Its bullets create a void that cannot be filled on the victim's soul, rather than a wound upon their flesh and bones.\n\
			It was a rusty weapon from the beginning.",
    cost: 30.0,
    stock: 2,
    category: TETH,
  },

  {
    id: 7,
    name: "Red Eyes",
    description:
      "The Spider Bud had dozens of eyes, and its children were always hungry.\n\
			This tenacity carried over to the E.G.O, demonstrating an outstanding ability to track down targets.\n\
			The eyes shone in the dark, searching for prey to feed to its spiderlings. The weapon emits a glowing red aura to find victims in the darkness.\n\
			One should maintain caution, as the wielder can become possessed by the spider should they look into its alluring eyes for too long.",
    cost: 20.0,
    stock: 3,
    category: TETH,
  },

  {
    id: 8,
    name: "Horn",
    description:
      "The green-eyed beauty's favorite flower was the dahlia; “Your love makes me happy.”\n\
			The lady's happiness came to an end with the budding of those unsightly horns. The dahlia’s unfulfilled meaning was borne as a seed in this E.G.O, carrying a lingering emotion.\n\
			No matter how many times the equipment is produced, the bud never withers.\n\
			As the horn digs deep into the enemy's heart, it will turn blood red to show off the glamor that she couldn't in her life.",
    cost: 30.0,
    stock: 3,
    category: TETH,
  },

  {
    id: 9,
    name: "Wrist Cutter",
    description:
      "It bears bloodstains as if it were gripped by hands soaked in ever-lasting red.\n\
			To ease the pain of its victim, its sharp blade can make a clean cut through bone like a hot knife through butter, leaving a wound that will never heal.\n\
			It will also permanently cut off the will to pursue happiness.",
    cost: 25.0,
    stock: 2,
    category: TETH,
  },

  {
    id: 10,
    name: "Regret",
    description:
      "Bearing unlimited possibility to change humanity's future, confidential research began in the underground.\n\
			The researchers laid down all sense of dignity, but they did not feel guilty as they had the greater good to pursue.\n\
			Even the merciful Carmen condoned the project.\n\
			Enemies crushed by this regret can never return to their normal life.\n\
			Before swinging this weapon, expressing one’s condolences for the demise of the inmate who couldn't even have a funeral would be nice.",
    cost: 25.0,
    stock: 2,
    category: TETH,
  },

  {
    id: 11,
    name: "Beak",
    description:
      "As if to prove that size doesn't matter when it comes to force, the weapon has high firepower despite its small size.\n\
			Unleash it on those standing in the way with no hesitation or forgiveness.\n\
			The bullet's surface is covered with numerous spikes resembling small teeth, so it can inflict quite a bit of pain when it penetrates an enemy.",
    cost: 30.0,
    stock: 2,
    category: TETH,
  },

  {
    id: 12,
    name: "Fragments From Somewhere",
    description:
      "Do not attempt to understand it, just use it.\n\
			The spear often tries to lead the wielder into a long and endless realm of mind, but they must try to not be swayed by it.\n\
			It took a different form every time it was produced, but we managed to stabilize the gestalt after a lot of effort and trouble.\n\
			There is a rumor that this spear emits a bright light when it hears an echo from another world.",
    cost: 20.0,
    stock: 3,
    category: TETH,
  },

  {
    id: 13,
    name: "Lantern",
    description:
      "The luminous organ shines brilliantly, making it useful for lighting up the dark.\n\
			It's also great as a lure.\n\
			Though teeth sticking out of some spots of the equipment is a rather frightening sight.",
    cost: 25.0,
    stock: 2,
    category: TETH,
  },

  {
    id: 14,
    name: "Today's Expression",
    description:
      "Many different expressions are padded on the equipment like patches.\n\
			The inability to show one's face is perhaps a form of shyness.\n\
			When throbbing emotions surge up from time to time, it's best to simply cover the face.",
    cost: 25.0,
    stock: 2,
    category: TETH,
  },

  {
    id: 15,
    name: "Engulfing Dream",
    description:
      "We must be awake at all times.\n\
			Not even sweet dreams in a sound sleep are allowed here; this weapon shall wake those who swim in such illusions.\n\
			And when the crying stops, dawn will break.",
    cost: 25.0,
    stock: 2,
    category: TETH,
  },

  {
    id: 16,
    name: "Cherry Blossoms",
    description:
      "Petals scatter from the fan like afterimages, longing for the view of the flowers that withered away as soon as they bloomed.\n\
			The spring breeze clad in cherry blossom petals is still cold and painful.\n\
			Do not miss me, for I shall return as buds when winter leaves.",
    cost: 25.0,
    stock: 1,
    category: TETH,
  },

  {
    id: 17,
    name: "SO CUTE!!!",
    description:
      "One may think, “How can a weapon drawn from such a cute Abnormality be any good?”\n\
			However, the claws are actually quite durable and sharp.\n\
			Beware that the beast inside you may awaken if you use this weapon too much...\n\
			Oh but the soft jelly-like pawbs feel vewwy nice to touch.",
    cost: 25.0,
    stock: 2,
    category: TETH,
  },

  {
    id: 18,
    name: "Tough",
    description:
      "A glock reminiscent of a certain detective who fought evil for 25 years, losing hair as time went by.\n\
			Only those who maintain a clean “hairstyle” with no impurities on their head will be deemed worthy of equipping this weapon.\n\
			Perhaps it could even shoot down a helicopter, if used well.",
    cost: 15.0,
    stock: 3,
    category: TETH,
  },

  {
    id: 19,
    name: "Bear Paws",
    description:
      "The stuffing spilling out of it hangs miserably as if to represent the innocence that was forgotten over time.\n\
			Its adorable appearance makes it something that might even appeal to a child as a gift.\n\
			It's evident that using this equipment recklessly will cause it to tear, so extra caution is needed.\n\
			Some sympathetic employees felt sorry for it and asked for it to be repaired, however the outcome of the repairs was unforeseeable, so the proposal was rejected.\n\
			Do not underestimate the weapon’s power because of its fluffy exterior.",
    cost: 40.0,
    stock: 2,
    category: HE,
  },

  {
    id: 20,
    name: "Sanguine Desire",
    description:
      "Its tenacity couldn't be exterminated even after the legs were cut off, and it bored its way through the woods to come back to us.\n\
			Most employees have heard a single word of the tragedy of the past.\n\
			The axe may seem light, but the wielder musn't forget that it has hurt countless people as a consequence of poor choices.\n\
			The weapon is stronger when used by an employee with strong conviction.\n\
			However, the moment you're blinded by desire, there is no way to wake up from the dreamlike throes of obsession.",
    cost: 40.0,
    stock: 2,
    category: HE,
  },

  {
    id: 21,
    name: "Syrinx",
    description:
      "What cry could be more powerful than one spurred by primal instinct?\n\
			As if everything else were hollow and pointless, the wailing numbs even the brain, making it impossible to think.",
    cost: 45.0,
    stock: 1,
    category: HE,
  },

  {
    id: 22,
    name: "Screaming Wedge",
    description:
      "Hair has grown on the crossbow as if to express that the woman’s dejection will never be forgotten.\n\
			The sound of the projectile splitting the air is reminiscent of her piercing scream.\n\
			Those who wield this must be careful, as her hair can tangle the wielder's hands and drag them into an endless path of sorrow.\n\
			Only iron-willed employees with a cold-blooded disposition can use this without letting the deep-rooted sorrow weave its strands around their heart.",
    cost: 35.0,
    stock: 2,
    category: HE,
  },

  {
    id: 23,
    name: "Harmony",
    description:
      "It may look like a deteriorating machine at first glance, but the music it makes captures its audience more than any other instrument could.\n\
			The wielder must dedicate himself in return.\n\
			After all, art is a devil's gift, born from despair and suffering.\n\
			Never stop performing until the body crumbles to dust.",
    cost: 40.0,
    stock: 2,
    category: HE,
  },

  {
    id: 24,
    name: "Logging",
    description:
      "A versatile equipment made to cut down trees and people alike.\n\
			Perhaps sharpening the axe was the one thing it didn't neglect. The blade is always shiny.",
    cost: 40.0,
    stock: 2,
    category: HE,
  },

  {
    id: 25,
    name: "Frost Splinter",
    description:
      "The Snow Queen was beautiful, but where her heart should have been was empty and frozen.\n\
			The edge of the spear is both straight and icy. Anyone damaged by it will lose themselves for a moment.\n\
			As the equipment was forged from snow, it shall disappear without a trace someday.\n\
			Someday, when the weather warms enough to melt the snow, it may thaw the heart as well; if you truly believe so.",
    cost: 35.0,
    stock: 3,
    category: HE,
  },

  {
    id: 26,
    name: "Grinder Mk4",
    description:
      "The sharp sawtooth of the grinder makes a clean cut through its enemy.\n\
			Its operation is simple and straightforward, but that doesn't necessarily make it easy to wield.\n\
			As machines have no morals of their own, there was no clear boundary between good and evil.\n\
			This disregard for value is precisely reflected by the weapon’s reliable dicing force.\n\
			People used to be afraid of machines in the beginning, but a mechanical rebellion soon became a myth of the past in our world.",
    cost: 50.0,
    stock: 1,
    category: HE,
  },

  {
    id: 27,
    name: "Christmas",
    description:
      "It is patched with heavy leather of unknown origin.\n\
			The colorful leather pieces remind one of a festive holiday that is now long forgotten.\n\
			The stitches are carefully woven, but for whom or for what, exactly, is unclear.\n\
			It is not elegant, but you can feel the devotion of its creator.\n\
			What is truly under the leather is classified, but that secrecy only makes the weapon all the more powerful.",
    cost: 35.0,
    stock: 3,
    category: HE,
  },

  {
    id: 28,
    name: "Our Galaxy",
    description:
      "The pebble dropped into your hand sparkles, sways, tickles, and eventually becomes the universe.\n\
			“There's a universe inside a pebble. When the child cries, the stars in the galaxy light the void. In your universe, am I to be found?”",
    cost: 45.0,
    stock: 1,
    category: HE,
  },

  {
    id: 29,
    name: "Life For A Daredevil",
    description:
      "An ancient sword.\n\
			Just as its archetype desired, it will be useless in the hands of the frightened.",
    cost: 35.0,
    stock: 1,
    category: HE,
  },

  {
    id: 30,
    name: "Laetitia",
    description:
      "It takes a lot of time to extract, but its power cannot be ignored.\n\
			The crude design appears to have been made a long time ago.\n\
			The small accessory remains like the wishes of a child who yearned for happiness.",
    cost: 40.0,
    stock: 2,
    category: HE,
  },

  {
    id: 31,
    name: "Gaze",
    description:
      "The gaze from the keyhole is fixed on its target without ever stopping. No one knows what it wanted to peep at so dearly.\n\
			As long as this is equipped, ambush won't be a concern.",
    cost: 45.0,
    stock: 1,
    category: HE,
  },

  {
    id: 32,
    name: "Harvest",
    description:
      "The last legacy of the man who sought wisdom.\n\
			The rake tilled the human brain instead of farmland.\n\
			How many of the wise people among us have lost their lives to this rake?",
    cost: 45.0,
    stock: 3,
    category: HE,
  },

  {
    id: 33,
    name: "Pleasure",
    description:
      "If you grasp for pleasure you cannot endure, you will end up losing yourself.\n\
			When the powder that falls from the thorns becomes known to the world, people may forever sink into the swamp of intoxication.",
    cost: 45.0,
    stock: 1,
    category: HE,
  },

  {
    id: 34,
    name: "Lamp",
    description:
      "Big Bird's eyes gained another in number for every creature it saved.\n\
      On this weapon, the radiant pride is apparent.",
    cost: 70.0,
    stock: 1,
    category: WAW,
  },

  {
    id: 35,
    name: "Justitia",
    description:
      "It remembers the scales of the Long Bird that sought not to neglect the weight of even the smallest sins.\n\
      This weapon may be able to cut not only flesh, but traces of sin as well.\n\
      The person who extracted this E.G.O was the most righteous person in the company.\n\
      You need not bother to remove the bandages wrapping the equipment; there's a sorrowful past that it does not want to reveal.\n\
      Hopefully this E.G.O will aid in keeping the peace as it was originally meant to.",
    cost: 150.0,
    stock: 1,
    category: ALEPH,
  },
];
