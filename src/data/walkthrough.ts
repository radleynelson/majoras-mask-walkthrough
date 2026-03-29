import type { Section } from '../types';

export const walkthrough: Section[] = [
  // ==============================
  // CHAPTER 1: FIRST THREE DAYS
  // ==============================
  {
    id: 'first-three-days',
    title: 'First Three Days',
    icon: '🎭',
    description: 'Your arrival in Termina as Deku Link. Learn the basics, recover your Ocarina, and turn back time.',
    items: [
      { id: 'f3d-1', text: 'Follow Skull Kid into the tunnel, get transformed into Deku Link', type: 'main' },
      { id: 'f3d-2', text: 'Meet the Happy Mask Salesman — he gives you 3 days', type: 'main' },
      { id: 'f3d-3', text: 'Explore Clock Town as Deku Link', type: 'main' },
      { id: 'f3d-4', text: 'Find the Great Fairy in North Clock Town (restore her with the Stray Fairy from the Laundry Pool)', type: 'main', detail: 'The Stray Fairy is in the Laundry Pool area. Return it to the Fairy Fountain in North Clock Town.' },
      { id: 'f3d-5', text: 'Get the Magic Meter from the Great Fairy', type: 'fairy_reward', detail: 'Reward for restoring the Clock Town Great Fairy.' },
      { id: 'f3d-6', text: 'Learn the Bombers\' code from Jim (Bomber kid on North Clock Town roof)', type: 'main', detail: 'Pop Jim\'s balloon with a bubble blast, then play hide and seek with the 5 Bombers.' },
      { id: 'f3d-7', text: 'Enter the Bombers\' Hideout using the code', type: 'main' },
      { id: 'f3d-8', text: 'Navigate the underground passage to reach the Astral Observatory', type: 'main' },
      { id: 'f3d-9', text: 'Look through the telescope and observe the Skull Kid on the Clock Tower', type: 'main' },
      { id: 'f3d-10', text: 'Pick up the Moon\'s Tear outside the observatory', type: 'key_item' },
      { id: 'f3d-11', text: 'Trade Moon\'s Tear to the Deku Scrub in South Clock Town for the Land Title Deed', type: 'key_item', detail: 'Use the Deku Flower launch pad after trading.' },
      { id: 'f3d-hp-1', text: 'Heart Piece: Use the Deku Flower in South Clock Town to reach the Heart Piece on the Clock Tower platform', type: 'heart_piece', detail: 'After getting the Land Title Deed, use the Deku Flower to fly up to the ledge.' },
      { id: 'f3d-12', text: 'Wait until midnight on the Final Day, climb the Clock Tower', type: 'main' },
      { id: 'f3d-13', text: 'Confront Skull Kid and shoot him with a bubble to recover the Ocarina of Time', type: 'main' },
      { id: 'f3d-14', text: 'Play the Song of Time to go back to Dawn of the First Day', type: 'song', detail: 'The Song of Time resets you to the First Day. Your key items and masks are kept, but Rupees (in wallet) and expendable items are lost.' },
      { id: 'f3d-15', text: 'Visit the Happy Mask Salesman — learn Song of Healing, get Deku Mask', type: 'mask', detail: 'The Song of Healing cures you and traps the Deku spirit in a mask.' },
      { id: 'f3d-song-1', text: 'Learn the Song of Healing', type: 'song' },
      { id: 'f3d-nb-1', text: "Bomber's Notebook: Receive the Bomber's Notebook from Jim", type: 'bombers_notebook', detail: 'Talk to Jim as human Link and give him the code.' },
    ],
  },

  // ==============================
  // CHAPTER 2: CLOCK TOWN
  // ==============================
  {
    id: 'clock-town',
    title: 'Clock Town Side Quests',
    icon: '🏘️',
    description: 'Optional activities in Clock Town to do before or between dungeons.',
    items: [
      { id: 'ct-hp-1', text: 'Heart Piece: Win all days of the Postman\'s timing game (hit 10.00 exactly)', type: 'heart_piece', detail: 'Located in the Post Office in West Clock Town. Stop the timer at exactly 10.00 seconds.' },
      { id: 'ct-hp-2', text: 'Heart Piece: Deposit 200 Rupees in the Clock Town Bank', type: 'heart_piece', detail: 'The bank is in West Clock Town. Your deposits persist through time resets.' },
      { id: 'ct-hp-3', text: 'Heart Piece: Win the Expert Deku Scrub Playground game (all 3 days)', type: 'heart_piece', detail: 'In North Clock Town. Must win on Day 1, 2, and 3 in the same cycle.' },
      { id: 'ct-hp-4', text: 'Heart Piece: Win the Honey & Darling\'s Shop game on all 3 days', type: 'heart_piece', detail: 'In East Clock Town. Different minigame each day; must win all three in one cycle.' },
      { id: 'ct-hp-5', text: 'Heart Piece: Win the Treasure Chest Shop game as Goron Link', type: 'heart_piece', detail: 'In East Clock Town. Use Goron Link to see through the correct chests (need Goron Mask and Lens of Truth helps).' },
      { id: 'ct-hp-6', text: 'Heart Piece: Win the Swordsman\'s School Expert Course', type: 'heart_piece', detail: 'In West Clock Town. Score 30+ points on the Expert Course.' },
      { id: 'ct-hp-7', text: 'Heart Piece: Win the Town Shooting Gallery perfect score (50)', type: 'heart_piece', detail: 'In East Clock Town. Must get a perfect 50 with the Hero\'s Bow.' },
      { id: 'ct-up-1', text: 'Upgrade: Get the Adult Wallet from the Clock Town Bank (deposit 200 Rupees)', type: 'upgrade', detail: 'Deposit 200 total Rupees at the bank in West Clock Town. Holds 200 Rupees.' },
      { id: 'ct-up-2', text: 'Upgrade: Get the Giant Wallet from the Oceanside Spider House', type: 'upgrade', detail: 'Destroy all 30 Gold Skulltulas in the Oceanside Spider House before morning of Day 1. Holds 500 Rupees.' },
      { id: 'ct-mask-1', text: 'Mask: Get the Postman\'s Hat (give the Priority Mail to the Postman on the Final Night)', type: 'mask', detail: 'During the Anju & Kafei quest. Give the Postman the Priority Mail on the Final Night; he delivers it to Madame Aroma then gives you his hat.' },
      { id: 'ct-mask-2', text: 'Mask: Get the All-Night Mask (buy from Curiosity Shop for 500 Rupees on Final Night)', type: 'mask', detail: 'Available at the Curiosity Shop on the Night of the Final Day for 500 Rupees.' },
      { id: 'ct-mask-3', text: 'Mask: Get the Blast Mask (save the Old Lady from Sakon on Night 1)', type: 'mask', detail: 'At midnight of the First Day in North Clock Town, stop Sakon from stealing the Old Lady\'s bomb bag by slashing him.' },
      { id: 'ct-mask-4', text: 'Mask: Get the Keaton Mask (from Kafei during Anju & Kafei quest)', type: 'mask', detail: 'Given by the Man from the Curiosity Shop in Kafei\'s stead during the quest.' },
      { id: 'ct-mask-5', text: 'Mask: Get Kafei\'s Mask (from Madame Aroma in the Mayor\'s office)', type: 'mask', detail: 'Talk to Madame Aroma in the Mayor\'s Residence during the afternoon of Day 1.' },
      { id: 'ct-mask-6', text: 'Mask: Get the Couple\'s Mask (complete the Anju & Kafei quest)', type: 'mask', detail: 'Reunite Anju and Kafei on the Final Night. They give you the Couple\'s Mask.' },
      { id: 'ct-mask-7', text: 'Mask: Get the Kamaro\'s Mask (heal Kamaro with Song of Healing)', type: 'mask', detail: 'Find Kamaro dancing on a mushroom-shaped rock in Termina Field (north area) at night. Play the Song of Healing.' },
      { id: 'ct-mask-8', text: 'Mask: Get the Bremen Mask (from Guru-Guru in the Laundry Pool at night)', type: 'mask', detail: 'Talk to Guru-Guru in the Laundry Pool on Night 1 or Night 2.' },
      { id: 'ct-mask-9', text: 'Mask: Get the Bunny Hood (use Bremen Mask on chicks at Romani Ranch)', type: 'mask', detail: 'March in front of the baby chicks at Romani Ranch using the Bremen Mask until they all grow into roosters. Grog gives you the Bunny Hood.' },
      { id: 'ct-mask-10', text: 'Mask: Get the Great Fairy Mask (from the Clock Town Great Fairy)', type: 'mask', detail: 'Return to the Great Fairy in North Clock Town as human Link after restoring her.' },
      { id: 'ct-mask-11', text: 'Mask: Get the Stone Mask (give Red Potion to invisible soldier in Ikana)', type: 'mask', detail: 'Use the Lens of Truth near the entrance to Ikana Canyon to find Shiro the invisible soldier. Give him a Red Potion.' },
      { id: 'ct-nb-1', text: "Bomber's Notebook: Complete the Anju & Kafei quest", type: 'bombers_notebook', detail: 'The longest side quest. Involves multiple steps over all 3 days. Results in the Couple\'s Mask.' },
      { id: 'ct-nb-2', text: "Bomber's Notebook: Help the Old Lady from being robbed", type: 'bombers_notebook' },
      { id: 'ct-nb-3', text: "Bomber's Notebook: Resolve the Mayor\'s meeting with the Couple\'s Mask", type: 'bombers_notebook', detail: 'Wear the Couple\'s Mask in the Mayor\'s office during the meeting to get a Heart Piece.' },
      { id: 'ct-hp-8', text: 'Heart Piece: Resolve the Mayor\'s meeting using the Couple\'s Mask', type: 'heart_piece' },
      { id: 'ct-nb-4', text: "Bomber's Notebook: Listen to Anju\'s Grandmother\'s stories with the All-Night Mask", type: 'bombers_notebook', detail: 'Wear the All-Night Mask and listen to both stories in the Stock Pot Inn on Day 1 or 2 night.' },
      { id: 'ct-hp-9', text: 'Heart Piece: Answer "I dunno" to Anju\'s Grandmother\'s first story', type: 'heart_piece' },
      { id: 'ct-hp-10', text: 'Heart Piece: Answer correctly to Anju\'s Grandmother\'s second story', type: 'heart_piece' },
      { id: 'ct-hp-11', text: 'Heart Piece: Collect all Stray Fairies from Clock Town and answer Keaton Quiz correctly', type: 'heart_piece', detail: 'Slash the moving bushes while wearing the Keaton Mask, then answer the Keaton\'s questions.' },
      { id: 'ct-bottle-1', text: 'Bottle: Get bottle from Kotake at the Southern Swamp potion shop', type: 'bottle', detail: 'After visiting the swamp, Kotake gives you a bottle with Red Potion to bring to her sister Koume in the Woods of Mystery.' },
    ],
  },

  // ==============================
  // CHAPTER 3: SOUTHERN SWAMP & WOODFALL
  // ==============================
  {
    id: 'southern-swamp',
    title: 'Southern Swamp',
    icon: '🌿',
    description: 'Navigate the poisoned swamp, rescue the Deku Princess, and clear Woodfall Temple.',
    items: [
      { id: 'ss-1', text: 'Head south from Clock Town to reach Termina Field, then Southern Swamp', type: 'main' },
      { id: 'ss-2', text: 'Get the bottle with Red Potion from Kotake at the Magic Hags\' Potion Shop', type: 'bottle', detail: 'First visit the potion shop, then find Koume in the Woods of Mystery and give her the potion.' },
      { id: 'ss-3', text: 'Find Koume injured in the Woods of Mystery, give her the Red Potion', type: 'main' },
      { id: 'ss-4', text: 'Get a free boat tour from Koume at the Swamp Tourist Center', type: 'main' },
      { id: 'ss-5', text: 'Ride the boat to the Deku Palace', type: 'main' },
      { id: 'ss-6', text: 'Navigate the Deku Palace to find the imprisoned monkey', type: 'main' },
      { id: 'ss-7', text: 'Learn the Sonata of Awakening from the monkey', type: 'song', detail: 'The monkey teaches you this song in the Deku Palace cage room.' },
      { id: 'ss-8', text: 'Head to Woodfall and play the Sonata of Awakening to raise the temple', type: 'main' },
      { id: 'ss-hp-1', text: 'Heart Piece: Win the Koume boat cruise target game (20+ hits)', type: 'heart_piece', detail: 'After clearing the swamp, talk to Koume for the archery boat cruise.' },
      { id: 'ss-hp-2', text: 'Heart Piece: Win the Deku Scrub Playground in the Deku Palace', type: 'heart_piece', detail: 'In the Deku Palace gardens, win the Deku Scrub mini-game.' },
      { id: 'ss-hp-3', text: 'Heart Piece: Found on a ledge in the swamp (use Deku Flower)', type: 'heart_piece', detail: 'Near the entrance to Woodfall, use Deku Flowers to reach a ledge with the Heart Piece.' },
      { id: 'ss-hp-4', text: 'Heart Piece: In a tree hole in the Woods of Mystery', type: 'heart_piece', detail: 'In the Woods of Mystery, follow the monkey during the day; at a certain point, find a hidden hole with a Heart Piece.' },
      { id: 'ss-mask-1', text: 'Mask: Get the Mask of Scents (save the Deku Princess and return her to the palace)', type: 'mask', detail: 'After beating Woodfall Temple, capture the Deku Princess in a bottle and bring her back. The Deku Butler later gives you this mask after a race.' },
      { id: 'ss-up-1', text: 'Upgrade: Get the Big Bomb Bag from the Bomb Shop after saving the Old Lady', type: 'upgrade', detail: 'If you saved the Old Lady on Night 1, the Big Bomb Bag is available at the Bomb Shop.' },
      { id: 'ss-swamp-spider', text: 'Complete the Swamp Spider House (all 30 Gold Skulltulas)', type: 'side_quest', detail: 'Located in the Southern Swamp. Destroy all 30 Gold Skulltulas to get the Mask of Truth.' },
      { id: 'ss-mask-2', text: 'Mask: Get the Mask of Truth from the Swamp Spider House', type: 'mask', detail: 'Reward for destroying all 30 Gold Skulltulas in the Swamp Spider House.' },
    ],
  },

  // ==============================
  // CHAPTER 4: WOODFALL TEMPLE
  // ==============================
  {
    id: 'woodfall-temple',
    title: 'Woodfall Temple',
    icon: '🌺',
    description: 'The first dungeon. Collect all 15 Stray Fairies, defeat Odolwa, and rescue the Deku Princess.',
    items: [
      { id: 'wf-1', text: 'Enter Woodfall Temple', type: 'main' },
      { id: 'wf-2', text: 'Get the Hero\'s Bow', type: 'upgrade', detail: 'The dungeon item of Woodfall Temple. Found in the mini-boss room after defeating Dinolfos.' },
      { id: 'wf-3', text: 'Collect all 15 Stray Fairies', type: 'stray_fairy', detail: 'Use the Great Fairy Mask to attract nearby fairies. Check every room carefully.' },
      { id: 'wf-4', text: 'Defeat Odolwa (Boss)', type: 'main', detail: 'Use arrows and your sword. As Deku Link, use Deku Flowers. Hit him when stunned.' },
      { id: 'wf-5', text: 'Collect the Boss Remains', type: 'main' },
      { id: 'wf-6', text: 'Get the Heart Container from Odolwa', type: 'heart_piece' },
      { id: 'wf-7', text: 'Return the 15 Stray Fairies to the Woodfall Fairy Fountain', type: 'fairy_reward', detail: 'The Great Fairy gives you an extended magic meter (double magic).' },
      { id: 'wf-8', text: 'Capture the Deku Princess in a bottle', type: 'main', detail: 'She\'s in the room after the boss. Scoop her up in an empty bottle.' },
      { id: 'wf-9', text: 'Return the Deku Princess to the Deku Palace', type: 'main' },
      { id: 'wf-10', text: 'Race the Deku Butler for the Mask of Scents', type: 'mask', detail: 'After returning the princess, talk to the Deku Butler in the Deku Shrine for a race. Win to get the Mask of Scents.' },
    ],
  },

  // ==============================
  // CHAPTER 5: SNOWHEAD
  // ==============================
  {
    id: 'snowhead',
    title: 'Snowhead',
    icon: '❄️',
    description: 'Journey to the frozen mountains. Help the Gorons and gain the Goron Mask.',
    items: [
      { id: 'sh-1', text: 'Head north from Clock Town through Termina Field to the Mountain Village', type: 'main' },
      { id: 'sh-2', text: 'Find the frozen Goron Elder on the path to Snowhead', type: 'main', detail: 'Use the Lens of Truth to see him (if you have it), or look for the large snowball.' },
      { id: 'sh-3', text: 'Learn the Goron Lullaby Intro from the Goron Elder', type: 'main', detail: 'Play the Song of Healing near the Goron Elder\'s ghost to get the Goron Mask first (at Goron Village).' },
      { id: 'sh-4', text: 'Visit the Goron Shrine in Goron Village', type: 'main' },
      { id: 'sh-5', text: 'Play the Song of Healing for Darmani\'s ghost to get the Goron Mask', type: 'mask', detail: 'Follow the ghost of Darmani (use Lens of Truth) from Mountain Village to his grave. Play the Song of Healing.' },
      { id: 'sh-6', text: 'Learn the full Goron Lullaby from the Goron Elder\'s son', type: 'song', detail: 'Play the Lullaby Intro for the crying baby in the Goron Shrine. The baby completes the song.' },
      { id: 'sh-7', text: 'Play the Goron Lullaby to clear the path to Snowhead Temple', type: 'main', detail: 'Play it for the large Goron blocking the path. He falls asleep and rolls away.' },
      { id: 'sh-8', text: 'Get the Lens of Truth from the cave beneath the frozen lake', type: 'key_item', detail: 'In Goron Village, fall through the ice using the hidden cave. Follow the path and defeat the mini-boss to get it.' },
      { id: 'sh-hp-1', text: 'Heart Piece: Hidden in a cave behind a wall of ice near the Mountain Village', type: 'heart_piece', detail: 'Use Hot Spring Water to melt ice blocking a cave in the Mountain Smithy area.' },
      { id: 'sh-hp-2', text: 'Heart Piece: Win the Goron Race after clearing Snowhead Temple', type: 'heart_piece', detail: 'Spring must have returned to the mountains. Race as Goron Link on the racetrack.' },
      { id: 'sh-hp-3', text: 'Heart Piece: Scarecrow\'s Song — use it on the ledge in Mountain Village', type: 'heart_piece', detail: 'Play the Scarecrow\'s Song near the cliff face to spawn Pierre, then hookshot up.' },
      { id: 'sh-hp-4', text: 'Heart Piece: In a snowball in the Twin Islands area', type: 'heart_piece', detail: 'Smash snowballs in the area with Goron punches to find one containing a Heart Piece.' },
      { id: 'sh-up-1', text: 'Upgrade: Get the Razor Sword from the Mountain Smithy (100 Rupees + 1 day)', type: 'upgrade', detail: 'Bring your sword to the smithy and pay 100 Rupees. Wait until the next day to pick it up.' },
      { id: 'sh-up-2', text: 'Upgrade: Get the Gilded Sword (bring Gold Dust to the smithy with Razor Sword)', type: 'upgrade', detail: 'Win Gold Dust from the Goron Race, then bring it + Razor Sword to the smithy. Permanent upgrade.' },
      { id: 'sh-bottle-1', text: 'Bottle: Win the Goron Race (Spring, after Snowhead Temple)', type: 'bottle', detail: 'First place in the Goron Race gives you a bottle of Gold Dust.' },
    ],
  },

  // ==============================
  // CHAPTER 6: SNOWHEAD TEMPLE
  // ==============================
  {
    id: 'snowhead-temple',
    title: 'Snowhead Temple',
    icon: '🏔️',
    description: 'The second dungeon. Navigate the icy fortress, collect Stray Fairies, and defeat Goht.',
    items: [
      { id: 'st-1', text: 'Enter Snowhead Temple as Goron Link', type: 'main' },
      { id: 'st-2', text: 'Get the Fire Arrows', type: 'upgrade', detail: 'The dungeon item. Found after defeating the mini-boss Wizrobe.' },
      { id: 'st-3', text: 'Collect all 15 Stray Fairies', type: 'stray_fairy', detail: 'Many are frozen in ice — use Fire Arrows to melt the ice. Use the Great Fairy Mask.' },
      { id: 'st-4', text: 'Defeat Goht (Boss)', type: 'main', detail: 'Roll into the boss as Goron Link using magic. Keep rolling and hitting it around the circular arena.' },
      { id: 'st-5', text: 'Collect the Boss Remains', type: 'main' },
      { id: 'st-6', text: 'Get the Heart Container from Goht', type: 'heart_piece' },
      { id: 'st-7', text: 'Return the 15 Stray Fairies to the Snowhead Fairy Fountain', type: 'fairy_reward', detail: 'The Great Fairy gives you an enhanced spin attack (double damage).' },
    ],
  },

  // ==============================
  // CHAPTER 7: GREAT BAY
  // ==============================
  {
    id: 'great-bay',
    title: 'Great Bay Coast',
    icon: '🌊',
    description: 'Head west to the ocean. Help the Zora guitarist Mikau and explore the Pirates\' Fortress.',
    items: [
      { id: 'gb-1', text: 'Head west from Clock Town to Great Bay Coast', type: 'main' },
      { id: 'gb-2', text: 'Find Mikau the Zora dying in the water, push him to shore', type: 'main' },
      { id: 'gb-3', text: 'Play the Song of Healing for Mikau to get the Zora Mask', type: 'mask', detail: 'Listen to Mikau\'s song, then play the Song of Healing to trap his spirit in the mask.' },
      { id: 'gb-4', text: 'Enter Zora Hall and talk to the Zora band members', type: 'main' },
      { id: 'gb-5', text: 'Learn the New Wave Bossa Nova', type: 'song', detail: 'Help Lulu by getting her eggs back from the Pirates and the sea snakes. After returning all 7 eggs to the Marine Lab, the song is revealed.' },
      { id: 'gb-6', text: 'Infiltrate the Pirates\' Fortress', type: 'main', detail: 'Swim as Zora Link to the fortress. The Stone Mask makes this much easier.' },
      { id: 'gb-7', text: 'Rescue 4 Zora Eggs from the Pirates\' Fortress', type: 'main', detail: 'Each egg is in a fish tank guarded by pirates. Use bottles to carry them.' },
      { id: 'gb-8', text: 'Get the Hookshot from the Pirates\' Fortress', type: 'upgrade', detail: 'Found in the Pirates\' Fortress after defeating a Gerudo pirate mini-boss.' },
      { id: 'gb-9', text: 'Rescue 3 Zora Eggs from Pinnacle Rock (defeat the sea snakes)', type: 'main', detail: 'Follow the seahorse to Pinnacle Rock. Use Zora Link\'s boomerangs to defeat the Deep Pythons.' },
      { id: 'gb-10', text: 'Bring all 7 Zora Eggs to the Marine Research Lab', type: 'main', detail: 'Put all eggs in the fish tank. They arrange into the notes of the New Wave Bossa Nova.' },
      { id: 'gb-11', text: 'Play the New Wave Bossa Nova for Lulu to open the Great Bay Temple', type: 'main' },
      { id: 'gb-hp-1', text: 'Heart Piece: On a ledge in the waterfall area near Zora Hall (Hookshot)', type: 'heart_piece' },
      { id: 'gb-hp-2', text: 'Heart Piece: Win the Beaver Race (both rounds) at the Waterfall Rapids', type: 'heart_piece', detail: 'Race through rings as Zora Link. Win both the younger and older brother races.' },
      { id: 'gb-hp-3', text: 'Heart Piece: Jump game on the beach using Zora Mask', type: 'heart_piece', detail: 'Near the fisherman\'s hut, play the jumping game as Zora Link.' },
      { id: 'gb-hp-4', text: 'Heart Piece: Win the Fisherman\'s Jumping Game', type: 'heart_piece' },
      { id: 'gb-hp-5', text: 'Heart Piece: Like Like in the oceanside area (requires Zora swimming)', type: 'heart_piece' },
      { id: 'gb-mask-1', text: 'Mask: Get the Romani\'s Mask (complete Romani Ranch alien defense + Cremia escort)', type: 'mask', detail: 'Day 1 Night: Help Romani defend the ranch from "ghosts." Day 2 Night: Help Cremia deliver milk. She gives you Romani\'s Mask.' },
      { id: 'gb-mask-2', text: 'Mask: Get the Circus Leader\'s Mask (help the Zora band perform in the Milk Bar)', type: 'mask', detail: 'After learning all songs, attend the rehearsal and perform. Gorman cries and gives you the mask.' },
      { id: 'gb-spider', text: 'Complete the Oceanside Spider House (all 30 Gold Skulltulas)', type: 'side_quest', detail: 'Located along the Great Bay Coast. Destroy all 30 Gold Skulltulas on Day 1 to get the Giant Wallet.' },
      { id: 'gb-bottle-2', text: 'Bottle: Catch a seahorse in a bottle at the Fisherman\'s hut', type: 'bottle', detail: 'The fisherman gives you a seahorse for taking a photo of a Gerudo Pirate. Release it at Pinnacle Rock.' },
      { id: 'gb-up-1', text: 'Upgrade: Get the Large Quiver (win Swamp Shooting Gallery with perfect score)', type: 'upgrade', detail: 'Score a perfect 2120 at the Swamp Shooting Gallery (requires Hero\'s Bow).' },
      { id: 'gb-up-2', text: 'Upgrade: Get the Largest Quiver (win Town Shooting Gallery with perfect score)', type: 'upgrade', detail: 'Score a perfect 50 at the Town Shooting Gallery.' },
    ],
  },

  // ==============================
  // CHAPTER 8: GREAT BAY TEMPLE
  // ==============================
  {
    id: 'great-bay-temple',
    title: 'Great Bay Temple',
    icon: '🐚',
    description: 'The third dungeon. Master the water currents, collect Stray Fairies, and defeat Gyorg.',
    items: [
      { id: 'gbt-1', text: 'Enter the Great Bay Temple (ride the turtle)', type: 'main' },
      { id: 'gbt-2', text: 'Get the Ice Arrows', type: 'upgrade', detail: 'The dungeon item. Found after defeating the Wart mini-boss.' },
      { id: 'gbt-3', text: 'Collect all 15 Stray Fairies', type: 'stray_fairy', detail: 'Many are underwater. Use Zora Link for swimming. Check behind waterfalls and under platforms.' },
      { id: 'gbt-4', text: 'Defeat Gyorg (Boss)', type: 'main', detail: 'Shoot arrows from the platform, then dive in as Zora Link to hit it with the boomerang shield.' },
      { id: 'gbt-5', text: 'Collect the Boss Remains', type: 'main' },
      { id: 'gbt-6', text: 'Get the Heart Container from Gyorg', type: 'heart_piece' },
      { id: 'gbt-7', text: 'Return the 15 Stray Fairies to the Great Bay Fairy Fountain', type: 'fairy_reward', detail: 'The Great Fairy gives you enhanced defense (halves damage taken).' },
    ],
  },

  // ==============================
  // CHAPTER 9: BETWEEN TEMPLES
  // ==============================
  {
    id: 'between-temples',
    title: 'Romani Ranch & Side Quests',
    icon: '🐄',
    description: 'Help at Romani Ranch and complete various side quests between dungeons.',
    items: [
      { id: 'bt-1', text: 'Open the path to Romani Ranch (destroy the boulder on Milk Road with Powder Keg)', type: 'main', detail: 'Buy a Powder Keg from the Goron in the Bomb Shop or as Goron Link from the Goron Powder Keg shop.' },
      { id: 'bt-2', text: 'Defend Romani Ranch from aliens (Night 1, 2:30 AM)', type: 'side_quest', detail: 'Shoot the alien ghosts approaching the barn with arrows from 2:30 AM until 5:15 AM.' },
      { id: 'bt-3', text: 'Help Cremia deliver milk (Day 2 evening)', type: 'side_quest', detail: 'Ride with Cremia on the milk wagon. Shoot the Gorman Brothers\' masked bandits with arrows.' },
      { id: 'bt-mask-1', text: 'Mask: Get the Garo\'s Mask (win the horse race against the Gorman Brothers)', type: 'mask', detail: 'Race the Gorman Brothers at the Gorman Track as human Link on Epona. Win to get the Garo\'s Mask.' },
      { id: 'bt-song-1', text: 'Learn Epona\'s Song (from Romani at Romani Ranch)', type: 'song', detail: 'Talk to Romani on Day 1 to learn Epona\'s Song and get Epona.' },
      { id: 'bt-hp-1', text: 'Heart Piece: Ride Epona and jump the fences at the Gorman Track', type: 'heart_piece' },
      { id: 'bt-hp-2', text: 'Heart Piece: Win the dog race at Romani Ranch', type: 'heart_piece', detail: 'Pick the right dog using the Mask of Truth to read their thoughts.' },
      { id: 'bt-hp-3', text: 'Heart Piece: Feed the fish at Marine Research Lab (catch fish in a bottle)', type: 'heart_piece' },
      { id: 'bt-mask-2', text: 'Mask: Get Don Gero\'s Mask (give Rock Sirloin to the hungry Goron)', type: 'mask', detail: 'In Mountain Village, after spring returns, find the hungry Goron on the cliff. Give him a Rock Sirloin from Goron Village as Goron Link.' },
      { id: 'bt-mask-3', text: 'Mask: Get the Gibdo Mask (play Song of Healing for the father in Ikana)', type: 'mask', detail: 'In the Music Box House in Ikana Canyon, play the Song of Storms to start the music box, then play Song of Healing for the half-mummy father.' },
      { id: 'bt-hp-4', text: 'Heart Piece: Bring all frogs together using Don Gero\'s Mask', type: 'heart_piece', detail: 'There are 5 frogs scattered across Termina. Wear Don Gero\'s Mask to talk to each, then lead the final concert at Mountain Village in spring.' },
      { id: 'bt-nb-1', text: "Bomber's Notebook: Help Romani defend the ranch", type: 'bombers_notebook' },
      { id: 'bt-nb-2', text: "Bomber's Notebook: Help Cremia deliver milk", type: 'bombers_notebook' },
    ],
  },

  // ==============================
  // CHAPTER 10: IKANA CANYON
  // ==============================
  {
    id: 'ikana-canyon',
    title: 'Ikana Canyon',
    icon: '💀',
    description: 'Enter the cursed land of the dead. Clear the Ancient Castle of Ikana and reach Stone Tower.',
    items: [
      { id: 'ik-1', text: 'Head east from Clock Town toward Ikana Canyon', type: 'main' },
      { id: 'ik-2', text: 'Use the Garo\'s Mask to get past the gate guardian', type: 'main', detail: 'Wear the Garo\'s Mask and talk to the shrouded figure at the entrance to Ikana.' },
      { id: 'ik-3', text: 'Get the Stone Mask from the invisible soldier (Lens of Truth + Red Potion)', type: 'mask', detail: 'On the path to Ikana, use Lens of Truth to see the invisible soldier. Give him a Red/Blue Potion.' },
      { id: 'ik-4', text: 'Explore Ikana Graveyard — open graves on each night', type: 'main', detail: 'Night 1: Learn Song of Storms from Flat. Night 2: Get the Mirror Shield. Night 3: Get a bottle of Milk.' },
      { id: 'ik-5', text: 'Learn the Song of Storms from Flat in the graveyard (Night 1)', type: 'song', detail: 'Grave under the large headstone on Night 1. Fight through enemies to reach Flat\'s chamber.' },
      { id: 'ik-6', text: 'Get the Captain\'s Hat from Captain Keeta (fight him in the graveyard)', type: 'mask', detail: 'Play the Sonata of Awakening to wake Captain Keeta, defeat him, then play the Song of Healing.' },
      { id: 'ik-7', text: 'Get the Mirror Shield from the graveyard (Night 2)', type: 'upgrade', detail: 'Open the grave on Night 2. Navigate the dungeon underneath to find the Mirror Shield.' },
      { id: 'ik-8', text: 'Clear the Ancient Castle of Ikana', type: 'main', detail: 'Use the Mirror Shield to reflect light and defeat the king. Defeat King Igos du Ikana and his guards.' },
      { id: 'ik-9', text: 'Learn the Elegy of Emptiness from King Igos du Ikana', type: 'song', detail: 'After defeating the king, he teaches you this song. Creates statues of your forms to hold switches.' },
      { id: 'ik-10', text: 'Use the Elegy of Emptiness to climb Stone Tower', type: 'main', detail: 'Place statues on switches as Link, Goron, and Zora to raise platforms up the tower.' },
      { id: 'ik-11', text: 'Navigate the Well (Beneath the Well mini-dungeon)', type: 'side_quest', detail: 'Use the Gibdo Mask to trade items with Gibdos. Get the Mirror Shield after completing it.' },
      { id: 'ik-hp-1', text: 'Heart Piece: Defeat the Iron Knuckle in Ikana Graveyard (Night 3)', type: 'heart_piece' },
      { id: 'ik-hp-2', text: 'Heart Piece: Light all torches in the Secret Shrine (requires all forms)', type: 'heart_piece', detail: 'Found in Ikana Canyon. Requires defeating multiple mini-bosses using different masks.' },
      { id: 'ik-hp-3', text: 'Heart Piece: Use Ice Arrows to reach a cave in Ikana Canyon', type: 'heart_piece' },
      { id: 'ik-hp-4', text: 'Heart Piece: Play the Song of Storms for Sharp in the Music Box House area', type: 'heart_piece' },
      { id: 'ik-mask-1', text: 'Mask: Get the Gibdo Mask (play Song of Healing for Pamela\'s Father)', type: 'mask', detail: 'Play the Song of Storms at the Music Box House to make the Gibdos retreat. Enter the house, go to the basement, and play Song of Healing for the half-mummy.' },
    ],
  },

  // ==============================
  // CHAPTER 11: STONE TOWER TEMPLE
  // ==============================
  {
    id: 'stone-tower-temple',
    title: 'Stone Tower Temple',
    icon: '🗼',
    description: 'The fourth and final dungeon. Master gravity-flipping mechanics and defeat Twinmold.',
    items: [
      { id: 'stt-1', text: 'Enter Stone Tower Temple', type: 'main' },
      { id: 'stt-2', text: 'Get the Light Arrows', type: 'upgrade', detail: 'The dungeon item. Found after defeating the Garo Master mini-boss.' },
      { id: 'stt-3', text: 'Use Light Arrows on the red emblems outside to flip the temple upside down', type: 'main', detail: 'Exit the temple and shoot the red jewel on top of the tower with a Light Arrow to invert the temple.' },
      { id: 'stt-4', text: 'Navigate the inverted Stone Tower Temple', type: 'main' },
      { id: 'stt-5', text: 'Collect all 15 Stray Fairies', type: 'stray_fairy', detail: 'Split between the normal and inverted temple. Some require flipping multiple times.' },
      { id: 'stt-6', text: 'Defeat Twinmold (Boss)', type: 'main', detail: 'Use the Giant\'s Mask to grow large and fight the two worms.' },
      { id: 'stt-7', text: 'Get the Giant\'s Mask in the boss room area', type: 'mask', detail: 'Found in a chest in the room before Twinmold. Allows you to become a giant during the boss fight.' },
      { id: 'stt-8', text: 'Collect the Boss Remains', type: 'main' },
      { id: 'stt-9', text: 'Get the Heart Container from Twinmold', type: 'heart_piece' },
      { id: 'stt-10', text: 'Return the 15 Stray Fairies to the Stone Tower Fairy Fountain', type: 'fairy_reward', detail: 'The Great Fairy gives you the Great Fairy\'s Sword — the strongest sword in the game.' },
    ],
  },

  // ==============================
  // CHAPTER 12: THE MOON & FINAL BATTLE
  // ==============================
  {
    id: 'the-moon',
    title: 'The Moon & Final Battle',
    icon: '🌕',
    description: 'Ascend the Clock Tower, summon the Giants, enter the Moon, and defeat Majora.',
    items: [
      { id: 'moon05', text: 'Buy Chateau Romani from the Milk Bar (Night 3, need Romani\'s Mask)', type: 'main', detail: 'Gives unlimited magic for the rest of the cycle. Very helpful for the Moon.' },
      { id: 'moon06', text: 'Stock up on Fairies in bottles', type: 'main', detail: 'Fill all empty bottles with fairies from Zora Cape jars (leave and re-enter to respawn).' },
      { id: 'moon07', text: 'Climb Clock Tower at midnight on the Final Night', type: 'main' },
      { id: 'moon08', text: 'Play the Oath to Order to summon the four Giants', type: 'main' },
      { id: 'moon-2', text: 'Enter the Moon', type: 'main' },
      { id: 'moon09', text: 'Odolwa Child Dungeon — give 1 mask, complete Deku flower challenge', type: 'main', detail: 'Navigate the Deku Flower platforming section. Get Heart Piece #49.' },
      { id: 'moon10', text: 'Goht Child Dungeon — give 2 masks, complete Goron rolling path', type: 'main', detail: 'Roll through the obstacle course as Goron Link. Get Heart Piece #50.' },
      { id: 'moon11', text: 'Gyorg Child Dungeon — give 3 masks, complete Zora swimming maze', type: 'main', detail: 'Swim through the underwater course as Zora Link. Get Heart Piece #51.' },
      { id: 'moon12', text: 'Twinmold Child Dungeon — give 4 masks, complete combat gauntlet', type: 'main', detail: 'Defeat Dinofols, Garo Master, and Iron Knuckle. Get Heart Piece #52.' },
      { id: 'moon13', text: 'Obtain the Fierce Deity\'s Mask from the Majora child', type: 'mask', detail: 'After giving all 20 non-transformation masks to the four children, speak to the lonely child wearing Majora\'s Mask.' },
      { id: 'moon14', text: 'Defeat Majora\'s Mask (Phase 1)', type: 'main', detail: 'The mask flies around the room. Stun with arrows to its back, then slash. Boss Remains also attack.' },
      { id: 'moon15', text: 'Defeat Majora\'s Incarnation (Phase 2)', type: 'main', detail: 'Fast, erratic form. Shield against blasts, shoot arrows to stun, then slash. Fierce Deity trivializes it.' },
      { id: 'moon16', text: 'Defeat Majora\'s Wrath (Phase 3)', type: 'main', detail: 'Uses whip tentacles and spinning tops. Light Arrows to stun, then slash. Fierce Deity\'s Mask recommended.' },
      { id: 'moon-11', text: 'Watch the ending and credits — congratulations on 100%!', type: 'main' },
    ],
  },

  // ================================================================
  // COLLECTOR CHECKLISTS — Detailed reference sections
  // ================================================================

  // ALL 52 HEART PIECES
  {
    id: 'heart_pieces',
    title: 'All 52 Heart Pieces',
    icon: '💗',
    description: 'Complete tracker for all 52 Pieces of Heart (4 pieces = 1 full Heart Container).',
    items: [
      { id: 'hp01', text: '#1 - Clock Tower Platform (South Clock Town)', type: 'heart_piece', detail: 'Use the Deku Flower to fly to the ledge above the Clock Tower entrance.' },
      { id: 'hp02', text: '#2 - North Clock Tree (Deku Flower)', type: 'heart_piece', detail: 'North Clock Town: Use Deku Flower to reach the tree hollow on the upper ledge.' },
      { id: 'hp03', text: '#3 - Postbox (Postman\'s Hat)', type: 'heart_piece', detail: 'Check any postbox while wearing the Postman\'s Hat.' },
      { id: 'hp04', text: '#4 - Deku Scrub Playground (all 3 days)', type: 'heart_piece', detail: 'North Clock Town: Win all three days of the Deku Scrub Playground.' },
      { id: 'hp05', text: '#5 - Treasure Chest Shop (Goron)', type: 'heart_piece', detail: 'East Clock Town: Win as Goron Link.' },
      { id: 'hp06', text: '#6 - Honey & Darling (all 3 days)', type: 'heart_piece', detail: 'East Clock Town: Win all three days in one cycle.' },
      { id: 'hp07', text: '#7 - Town Shooting Gallery (perfect 50)', type: 'heart_piece', detail: 'East Clock Town: Score a perfect 50 with the Hero\'s Bow.' },
      { id: 'hp08', text: '#8 - Swordsman School (Expert)', type: 'heart_piece', detail: 'West Clock Town: Score Expert rating.' },
      { id: 'hp09', text: '#9 - Bank Reward (5000 Rupees total)', type: 'heart_piece', detail: 'Deposit 5000 total rupees at the Clock Town bank.' },
      { id: 'hp10', text: '#10 - Keaton Quiz', type: 'heart_piece', detail: 'Slash circle of bushes while wearing Keaton Mask, answer all questions correctly.' },
      { id: 'hp11', text: '#11 - Mayor\'s Office (Couple\'s Mask)', type: 'heart_piece', detail: 'Wear Couple\'s Mask during the argument to end the debate.' },
      { id: 'hp12', text: '#12 - Termina Field Bio Baba', type: 'heart_piece', detail: 'Defeat the Bio Deku Baba in the tall grass south of town.' },
      { id: 'hp13', text: '#13 - Termina Field Peahat Grotto', type: 'heart_piece', detail: 'Enter the grotto near the Observatory, defeat Peahat.' },
      { id: 'hp14', text: '#14 - Termina Field Dodongo Grotto', type: 'heart_piece', detail: 'Grotto on the path to Snowhead, defeat two Dodongos.' },
      { id: 'hp15', text: '#15 - Observatory Garden Deku Scrub', type: 'heart_piece', detail: 'From the Astral Observatory garden, use Deku Flower to reach the fenced area.' },
      { id: 'hp16', text: '#16 - Termina Field Pillar (Hookshot)', type: 'heart_piece', detail: 'Hookshot to the tree on top of a pillar near the path to Great Bay.' },
      { id: 'hp17', text: '#17 - Swamp Shooting Gallery (perfect)', type: 'heart_piece', detail: 'Score a perfect 2120 in the Swamp Shooting Gallery.' },
      { id: 'hp18', text: '#18 - Deku Palace Grotto', type: 'heart_piece', detail: 'Hidden grotto in the palace gardens (right side garden as Deku).' },
      { id: 'hp19', text: '#19 - Boat Cruise (Koume\'s target game)', type: 'heart_piece', detail: 'Hit all targets during Koume\'s Boat Cruise.' },
      { id: 'hp20', text: '#20 - Swamp Spider House', type: 'heart_piece', detail: 'Collect all 30 Gold Skulltulas on Day 1.' },
      { id: 'hp21', text: '#21 - Mountain Village Grotto (spring)', type: 'heart_piece', detail: 'In spring, enter the grotto near Don Gero\'s frog.' },
      { id: 'hp22', text: '#22 - Goron Race (spring)', type: 'heart_piece', detail: 'Win the Goron Race after clearing Snowhead Temple.' },
      { id: 'hp23', text: '#23 - Don Gero\'s Frog Choir', type: 'heart_piece', detail: 'Gather all 5 frogs and conduct the choir in spring Mountain Village.' },
      { id: 'hp24', text: '#24 - Road to Snowhead Scarecrow', type: 'heart_piece', detail: 'Play Scarecrow\'s Song, Hookshot up and enter the grotto.' },
      { id: 'hp25', text: '#25 - Mountain Village Ice Ledge', type: 'heart_piece', detail: 'Use Scarecrow\'s Song + Hookshot to reach.' },
      { id: 'hp26', text: '#26 - Great Bay Like-Like', type: 'heart_piece', detail: 'Defeat the Like-Like on the small island near Fisherman\'s Island.' },
      { id: 'hp27', text: '#27 - Beaver Race (1st win)', type: 'heart_piece', detail: 'Win the first Beaver Race as Zora Link.' },
      { id: 'hp28', text: '#28 - Beaver Race (2nd win)', type: 'heart_piece', detail: 'Win the harder second round.' },
      { id: 'hp29', text: '#29 - Fisherman\'s Seahorse', type: 'heart_piece', detail: 'Bring seahorse to Pinnacle Rock; guide it to its partner.' },
      { id: 'hp30', text: '#30 - Oceanside Spider House', type: 'heart_piece', detail: 'Collect all 30 Gold Skulltulas on Day 1.' },
      { id: 'hp31', text: '#31 - Pirates\' Fortress (Hookshot)', type: 'heart_piece', detail: 'Hookshot to the top of the exterior fortress.' },
      { id: 'hp32', text: '#32 - Pinnacle Rock (sea snakes)', type: 'heart_piece', detail: 'Defeat the Deep Pythons and reunite the seahorses.' },
      { id: 'hp33', text: '#33 - Marine Research Lab (fish)', type: 'heart_piece', detail: 'Bring a fish in a bottle to the aquarium.' },
      { id: 'hp34', text: '#34 - Zora Cape Ledge (Hookshot)', type: 'heart_piece', detail: 'Hookshot from palm tree near Zora Hall to upper ledge.' },
      { id: 'hp35', text: '#35 - Romani Ranch Dog Race', type: 'heart_piece', detail: 'Pick the winning dog (use Mask of Truth to read thoughts).' },
      { id: 'hp36', text: '#36 - Cucco Shack (Bremen Mask)', type: 'heart_piece', detail: 'March chicks into adults with Bremen Mask. Grog gives Bunny Hood.' },
      { id: 'hp37', text: '#37 - Ikana Graveyard Night 1 (Iron Knuckle)', type: 'heart_piece', detail: 'Have Stalchildren open the grave, defeat Iron Knuckle.' },
      { id: 'hp38', text: '#38 - Ikana Graveyard Night 2', type: 'heart_piece', detail: 'Open second grave, navigate the dungeon.' },
      { id: 'hp39', text: '#39 - Ikana Canyon Ledge (Ice Arrows)', type: 'heart_piece', detail: 'Create ice platforms to reach the upper ledge.' },
      { id: 'hp40', text: '#40 - Spirit House / Poe Hut', type: 'heart_piece', detail: 'Defeat all four Poe Sisters in the Spirit House.' },
      { id: 'hp41', text: '#41 - Secret Shrine (4 mini-bosses)', type: 'heart_piece', detail: 'Ikana Canyon: Complete all 4 rooms.' },
      { id: 'hp42', text: '#42 - Stone Tower Owl Statue Ledge', type: 'heart_piece', detail: 'Use Elegy of Emptiness statues to reach side platform.' },
      { id: 'hp43', text: '#43 - Gossip Stones (all 4 instruments)', type: 'heart_piece', detail: 'Play each instrument for the Gossip Stones as each form.' },
      { id: 'hp44', text: '#44 - Anju\'s Grandmother Story 1', type: 'heart_piece', detail: 'Wear All-Night Mask, answer "I dunno" to the first story.' },
      { id: 'hp45', text: '#45 - Anju\'s Grandmother Story 2', type: 'heart_piece', detail: 'Wear All-Night Mask, answer correctly to the second story.' },
      { id: 'hp46', text: '#46 - Toilet Hand (give any paper item)', type: 'heart_piece', detail: 'Stock Pot Inn at midnight: Give any paper to the hand.' },
      { id: 'hp47', text: '#47 - Woodfall Temple (Boss Heart Container)', type: 'heart_piece', detail: 'Heart Container from defeating Odolwa.' },
      { id: 'hp48', text: '#48 - Snowhead Temple (Boss Heart Container)', type: 'heart_piece', detail: 'Heart Container from defeating Goht.' },
      { id: 'hp49', text: '#49 - Moon: Odolwa Child Dungeon', type: 'heart_piece', detail: 'Complete the Deku flower-flying challenge.' },
      { id: 'hp50', text: '#50 - Moon: Goht Child Dungeon', type: 'heart_piece', detail: 'Complete the Goron rolling path.' },
      { id: 'hp51', text: '#51 - Moon: Gyorg Child Dungeon', type: 'heart_piece', detail: 'Complete the Zora swimming maze.' },
      { id: 'hp52', text: '#52 - Moon: Twinmold Child Dungeon', type: 'heart_piece', detail: 'Complete the combat gauntlet (Dinofols, Garo Master, Iron Knuckle).' },
    ],
  },

  // ALL 24 MASKS
  {
    id: 'all-masks',
    title: 'All 24 Masks',
    icon: '🎭',
    description: 'Complete checklist of all 24 masks (4 transformation + 20 regular).',
    items: [
      { id: 'mask01', text: 'Deku Mask', type: 'mask', detail: 'Happy Mask Salesman teaches Song of Healing after you recover the Ocarina.' },
      { id: 'mask02', text: 'Goron Mask', type: 'mask', detail: 'Mountain Village: Play Song of Healing for Darmani\'s ghost.' },
      { id: 'mask03', text: 'Zora Mask', type: 'mask', detail: 'Great Bay Coast: Play Song of Healing for dying Mikau.' },
      { id: 'mask04', text: 'Fierce Deity\'s Mask', type: 'mask', detail: 'Inside the Moon: Give all 20 non-transformation masks to Moon Children.' },
      { id: 'mask05', text: 'Postman\'s Hat', type: 'mask', detail: 'Anju & Kafei Quest: Give Special Delivery Letter to Postman on Night 3.' },
      { id: 'mask06', text: 'All-Night Mask', type: 'mask', detail: 'Curiosity Shop: Buy for 500 rupees on Night 3 (must NOT have saved Old Lady from Sakon).' },
      { id: 'mask07', text: 'Blast Mask', type: 'mask', detail: 'North Clock Town: Save Old Lady from Sakon at 12:00 AM Night 1.' },
      { id: 'mask08', text: 'Stone Mask', type: 'mask', detail: 'Road to Ikana: Give Red/Blue Potion to invisible soldier Shiro (Lens of Truth).' },
      { id: 'mask09', text: 'Great Fairy Mask', type: 'mask', detail: 'North Clock Town: Return the Stray Fairy to the Great Fairy Fountain.' },
      { id: 'mask10', text: 'Keaton Mask', type: 'mask', detail: 'From Curiosity Shop Man during Anju & Kafei quest on Day 3.' },
      { id: 'mask11', text: 'Bremen Mask', type: 'mask', detail: 'Laundry Pool: Talk to Guru-Guru at night.' },
      { id: 'mask12', text: 'Bunny Hood', type: 'mask', detail: 'Romani Ranch: Use Bremen Mask to march chicks into roosters. Grog rewards you.' },
      { id: 'mask13', text: 'Don Gero\'s Mask', type: 'mask', detail: 'Mountain Village: As Goron, bring Rock Sirloin to the freezing Goron on the ledge.' },
      { id: 'mask14', text: 'Mask of Scents', type: 'mask', detail: 'Deku Palace: Win the Deku Butler race after clearing Woodfall Temple.' },
      { id: 'mask15', text: 'Romani\'s Mask', type: 'mask', detail: 'Romani Ranch: Defend from aliens Night 1, escort Cremia Night 2.' },
      { id: 'mask16', text: 'Circus Leader\'s Mask', type: 'mask', detail: 'Milk Bar: Play all four instruments for Gorman. He cries and gives it.' },
      { id: 'mask17', text: 'Kafei\'s Mask', type: 'mask', detail: 'Mayor\'s Residence: Speak to Madame Aroma on Day 1 afternoon.' },
      { id: 'mask18', text: 'Couple\'s Mask', type: 'mask', detail: 'Stock Pot Inn: Complete the Anju & Kafei quest, witness reunion on Final Night.' },
      { id: 'mask19', text: 'Mask of Truth', type: 'mask', detail: 'Southern Swamp Spider House: Collect all 30 Gold Skulltulas.' },
      { id: 'mask20', text: 'Kamaro\'s Mask', type: 'mask', detail: 'Termina Field: Play Song of Healing for dancing ghost on mushroom rocks at night.' },
      { id: 'mask21', text: 'Gibdo Mask', type: 'mask', detail: 'Ikana Canyon: Play Song of Storms for Sharp, then Song of Healing for half-Gibdo father.' },
      { id: 'mask22', text: 'Garo\'s Mask', type: 'mask', detail: 'Gorman Track: Win horse race against Gorman Brothers on Epona.' },
      { id: 'mask23', text: 'Captain\'s Hat', type: 'mask', detail: 'Ikana Graveyard: Wake Captain Keeta with Sonata of Awakening, defeat him.' },
      { id: 'mask24', text: 'Giant\'s Mask', type: 'mask', detail: 'Stone Tower Temple: Found in a chest in the inverted temple.' },
    ],
  },

  // ALL SONGS
  {
    id: 'songs',
    title: 'All 13 Songs',
    icon: '🎵',
    description: 'All Ocarina songs and variants.',
    items: [
      { id: 'song01', text: 'Song of Time', type: 'song', detail: 'Recovered via flashback when you get the Ocarina back from Skull Kid.' },
      { id: 'song02', text: 'Song of Healing', type: 'song', detail: 'Taught by the Happy Mask Salesman.' },
      { id: 'song03', text: 'Epona\'s Song', type: 'song', detail: 'Romani Ranch: Talk to Romani on Day 1.' },
      { id: 'song04', text: 'Song of Soaring', type: 'song', detail: 'Road to Woodfall: From the owl Kaepora Gaebora. Warps to Owl Statues.' },
      { id: 'song05', text: 'Song of Storms', type: 'song', detail: 'Ikana Graveyard Night 1: Taught by the composer Flat.' },
      { id: 'song06', text: 'Scarecrow\'s Song', type: 'song', detail: 'Make up your own 8-note song for the scarecrow. Summons Pierre.' },
      { id: 'song07', text: 'Sonata of Awakening', type: 'song', detail: 'Deku Palace: Taught by the imprisoned monkey. Opens Woodfall Temple.' },
      { id: 'song08', text: 'Goron Lullaby', type: 'song', detail: 'Learn intro from Goron Elder, full song from Baby Goron. Opens Snowhead.' },
      { id: 'song09', text: 'New Wave Bossa Nova', type: 'song', detail: 'Hatch all 7 Zora Eggs at Marine Lab. Opens Great Bay Temple.' },
      { id: 'song10', text: 'Elegy of Emptiness', type: 'song', detail: 'Taught by King Igos du Ikana. Creates statue clones for switches.' },
      { id: 'song11', text: 'Oath to Order', type: 'song', detail: 'Taught by the Giant after Woodfall Temple. Summons the four Giants.' },
      { id: 'song12', text: 'Inverted Song of Time', type: 'song', detail: 'Play Song of Time backwards. Slows time to half speed.' },
      { id: 'song13', text: 'Song of Double Time', type: 'song', detail: 'Play each note of Song of Time twice. Skips to next time period.' },
    ],
  },

  // ALL BOTTLES
  {
    id: 'bottles',
    title: 'All Bottles',
    icon: '🧪',
    description: 'All obtainable bottles (6 on N64, 7 on 3DS).',
    items: [
      { id: 'bottle01', text: 'Bottle #1 — Kotake\'s Potion (Southern Swamp)', type: 'bottle', detail: 'Given by Kotake to deliver medicine to Koume in the Woods of Mystery.' },
      { id: 'bottle02', text: 'Bottle #2 — Goron Race (Gold Dust)', type: 'bottle', detail: 'Win the Goron Race in spring after clearing Snowhead Temple.' },
      { id: 'bottle03', text: 'Bottle #3 — Romani Ranch Aliens', type: 'bottle', detail: 'Defend the barn from aliens on Night 1. Romani gives you milk the next morning.' },
      { id: 'bottle04', text: 'Bottle #4 — Beaver Race', type: 'bottle', detail: 'Win both rounds of the Beaver Race as Zora Link at Waterfall Rapids.' },
      { id: 'bottle05', text: 'Bottle #5 — Ikana Graveyard Night 3', type: 'bottle', detail: 'Have Stalchildren open the third grave, navigate to find the bottle.' },
      { id: 'bottle06', text: 'Bottle #6 — Madame Aroma (Special Delivery)', type: 'bottle', detail: 'Deliver the Special Delivery Letter to Madame Aroma at the Milk Bar on Night 3.' },
      { id: 'bottle07', text: 'Bottle #7 — Mystery Milk (3DS Only)', type: 'bottle', detail: '3DS exclusive: Obtained during the Gorman quest.' },
    ],
  },

  // STRAY FAIRIES
  {
    id: 'stray_fairies_woodfall',
    title: 'Stray Fairies — Woodfall',
    icon: '🧚',
    description: '15 Stray Fairies in Woodfall Temple. Use the Great Fairy Mask to attract nearby fairies.',
    items: Array.from({ length: 15 }, (_, i) => ({
      id: `sf_woodfall_${String(i + 1).padStart(2, '0')}`,
      text: `Woodfall Fairy #${i + 1}`,
      type: 'stray_fairy' as const,
      detail: `Stray Fairy ${i + 1} of 15. Check chests, bubbles, hidden alcoves, and use the Great Fairy Mask.`,
    })),
  },
  {
    id: 'stray_fairies_snowhead',
    title: 'Stray Fairies — Snowhead',
    icon: '🧚',
    description: '15 Stray Fairies in Snowhead Temple. Many are frozen — use Fire Arrows.',
    items: Array.from({ length: 15 }, (_, i) => ({
      id: `sf_snowhead_${String(i + 1).padStart(2, '0')}`,
      text: `Snowhead Fairy #${i + 1}`,
      type: 'stray_fairy' as const,
      detail: `Stray Fairy ${i + 1} of 15. Check behind pillars, in ice blocks (Fire Arrows), and use the Great Fairy Mask.`,
    })),
  },
  {
    id: 'stray_fairies_great_bay',
    title: 'Stray Fairies — Great Bay',
    icon: '🧚',
    description: '15 Stray Fairies in Great Bay Temple. Many are underwater.',
    items: Array.from({ length: 15 }, (_, i) => ({
      id: `sf_greatbay_${String(i + 1).padStart(2, '0')}`,
      text: `Great Bay Fairy #${i + 1}`,
      type: 'stray_fairy' as const,
      detail: `Stray Fairy ${i + 1} of 15. Use Zora Mask for swimming and Great Fairy Mask to attract.`,
    })),
  },
  {
    id: 'stray_fairies_stone_tower',
    title: 'Stray Fairies — Stone Tower',
    icon: '🧚',
    description: '15 Stray Fairies in Stone Tower Temple. Check both normal and inverted orientations.',
    items: Array.from({ length: 15 }, (_, i) => ({
      id: `sf_stonetower_${String(i + 1).padStart(2, '0')}`,
      text: `Stone Tower Fairy #${i + 1}`,
      type: 'stray_fairy' as const,
      detail: `Stray Fairy ${i + 1} of 15. Split between normal and inverted temple.`,
    })),
  },

  // GREAT FAIRY REWARDS
  {
    id: 'fairy_rewards',
    title: 'Great Fairy Rewards',
    icon: '✨',
    description: 'Rewards from each Great Fairy Fountain.',
    items: [
      { id: 'gf01', text: 'Clock Town — Magic Power + Great Fairy Mask', type: 'fairy_reward', detail: 'Return the Stray Fairy from the Laundry Pool to North Clock Town Fairy Fountain.' },
      { id: 'gf02', text: 'Woodfall — Spin Attack Upgrade', type: 'fairy_reward', detail: 'Return all 15 Woodfall Temple Stray Fairies. Extended spin attack.' },
      { id: 'gf03', text: 'Snowhead — Enhanced Magic Meter', type: 'fairy_reward', detail: 'Return all 15 Snowhead Temple Stray Fairies. Double magic bar.' },
      { id: 'gf04', text: 'Great Bay — Enhanced Defense', type: 'fairy_reward', detail: 'Return all 15 Great Bay Temple Stray Fairies. Half damage taken.' },
      { id: 'gf05', text: 'Stone Tower — Great Fairy\'s Sword', type: 'fairy_reward', detail: 'Return all 15 Stone Tower Temple Stray Fairies. Most powerful weapon in the game.' },
    ],
  },

  // EQUIPMENT UPGRADES
  {
    id: 'upgrades',
    title: 'Equipment Upgrades',
    icon: '⬆️',
    description: 'Wallets, swords, quivers, bomb bags, and key equipment.',
    items: [
      { id: 'up01', text: 'Adult Wallet (200 Rupees)', type: 'upgrade', detail: 'Deposit 200 rupees at the Clock Town Bank.' },
      { id: 'up02', text: 'Giant Wallet (500 Rupees)', type: 'upgrade', detail: 'Oceanside Spider House: Collect all 30 Gold Skulltulas on Day 1.' },
      { id: 'up03', text: 'Razor Sword', type: 'upgrade', detail: 'Mountain Smithy: Pay 100 rupees, pick up next day. 100 hits before breaking.' },
      { id: 'up04', text: 'Gilded Sword (Permanent)', type: 'upgrade', detail: 'Bring Gold Dust + Razor Sword to the smithy. Survives Song of Time.' },
      { id: 'up05', text: 'Large Quiver (40 Arrows)', type: 'upgrade', detail: 'Town Shooting Gallery: Score a perfect 50.' },
      { id: 'up06', text: 'Largest Quiver (50 Arrows)', type: 'upgrade', detail: 'Swamp Shooting Gallery: Score a perfect 2120.' },
      { id: 'up07', text: 'Big Bomb Bag (30 Bombs)', type: 'upgrade', detail: 'Buy from the Business Scrub or Bomb Shop.' },
      { id: 'up08', text: 'Biggest Bomb Bag (40 Bombs)', type: 'upgrade', detail: 'Buy from the Goron Village Business Scrub (as Goron).' },
      { id: 'up09', text: 'Hero\'s Bow', type: 'upgrade', detail: 'Woodfall Temple dungeon item.' },
      { id: 'up10', text: 'Fire Arrows', type: 'upgrade', detail: 'Snowhead Temple dungeon item.' },
      { id: 'up11', text: 'Ice Arrows', type: 'upgrade', detail: 'Great Bay Temple dungeon item.' },
      { id: 'up12', text: 'Light Arrows', type: 'upgrade', detail: 'Stone Tower Temple dungeon item.' },
      { id: 'up13', text: 'Hookshot', type: 'upgrade', detail: 'Found in the Pirates\' Fortress.' },
      { id: 'up14', text: 'Lens of Truth', type: 'upgrade', detail: 'Cave beneath the frozen lake on the road to Goron Village.' },
      { id: 'up15', text: 'Powder Keg License', type: 'upgrade', detail: 'As Goron Link, pass the Powder Keg trial in Goron Village.' },
      { id: 'up16', text: 'Mirror Shield', type: 'upgrade', detail: 'Beneath the Well (Ikana): Navigate using Gibdo Mask.' },
      { id: 'up17', text: 'Great Fairy\'s Sword', type: 'upgrade', detail: 'Return all 15 Stone Tower Temple Stray Fairies.' },
    ],
  },

  // BOMBER'S NOTEBOOK
  {
    id: 'bombers_notebook',
    title: "Bomber's Notebook (20 Entries)",
    icon: '📓',
    description: 'All 20 people to help for 100% Bomber\'s Notebook completion.',
    items: [
      { id: 'bn01', text: 'The Postman', type: 'bombers_notebook', detail: 'Give Priority Mail on Night 3 during Anju & Kafei quest. Reward: Postman\'s Hat.' },
      { id: 'bn02', text: 'Bombers', type: 'bombers_notebook', detail: 'Play hide-and-seek as Human Link. Reward: Bomber\'s Notebook / code.' },
      { id: 'bn03', text: 'Anju', type: 'bombers_notebook', detail: 'Complete the Anju & Kafei quest. Reunite her with Kafei on the Final Night.' },
      { id: 'bn04', text: 'Kafei', type: 'bombers_notebook', detail: 'Help retrieve Sun\'s Mask from Sakon\'s Hideout. Reunite with Anju.' },
      { id: 'bn05', text: 'Man from Curiosity Shop', type: 'bombers_notebook', detail: 'Visit Kafei\'s Hideout Day 3. Reward: Keaton Mask + Special Delivery Letter.' },
      { id: 'bn06', text: 'Old Lady from Bomb Shop', type: 'bombers_notebook', detail: 'Save her from Sakon at 12:00 AM Night 1. Reward: Blast Mask.' },
      { id: 'bn07', text: 'Romani', type: 'bombers_notebook', detail: 'Defend barn from aliens Night 1 (2 AM - 5:15 AM). Reward: Bottle of Milk.' },
      { id: 'bn08', text: 'Cremia', type: 'bombers_notebook', detail: 'Escort milk delivery Night 2. Defend wagon from bandits. Reward: Romani\'s Mask.' },
      { id: 'bn09', text: 'Madame Aroma', type: 'bombers_notebook', detail: 'Get Kafei\'s Mask Day 1, deliver Special Delivery Letter Night 3. Reward: Bottle.' },
      { id: 'bn10', text: 'Guru-Guru', type: 'bombers_notebook', detail: 'Talk to him in Laundry Pool at night. Reward: Bremen Mask.' },
      { id: 'bn11', text: 'Gorman', type: 'bombers_notebook', detail: 'Play all four instruments for him at the Milk Bar. Reward: Circus Leader\'s Mask.' },
      { id: 'bn12', text: 'Rosa Sisters', type: 'bombers_notebook', detail: 'Dance for them in West Clock Town at night wearing Kamaro\'s Mask.' },
      { id: 'bn13', text: 'Toilet Hand (???)', type: 'bombers_notebook', detail: 'Stock Pot Inn at midnight: Give any paper item. Reward: Heart Piece.' },
      { id: 'bn14', text: 'Anju\'s Grandmother', type: 'bombers_notebook', detail: 'Wear All-Night Mask, listen to both stories. Reward: 2 Heart Pieces.' },
      { id: 'bn15', text: 'Kamaro', type: 'bombers_notebook', detail: 'Play Song of Healing for dancing ghost north of Clock Town at night. Reward: Kamaro\'s Mask.' },
      { id: 'bn16', text: 'Grog', type: 'bombers_notebook', detail: 'March chicks with Bremen Mask at Cucco Shack. Reward: Bunny Hood.' },
      { id: 'bn17', text: 'Gorman Brothers', type: 'bombers_notebook', detail: 'Race on Epona for Garo\'s Mask. Wear Circus Leader\'s Mask during milk run to stop them.' },
      { id: 'bn18', text: 'Shiro (Invisible Soldier)', type: 'bombers_notebook', detail: 'Road to Ikana: Lens of Truth to find him, give Red/Blue Potion. Reward: Stone Mask.' },
      { id: 'bn19', text: 'Mayor Dotour', type: 'bombers_notebook', detail: 'Wear Couple\'s Mask in Mayor\'s Residence. Reward: Heart Piece.' },
      { id: 'bn20', text: 'Tingle', type: 'bombers_notebook', detail: 'Pop his balloon in each region and buy maps.' },
    ],
  },
];
