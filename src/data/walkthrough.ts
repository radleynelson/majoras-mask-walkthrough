import type { Section } from '../types';

export const walkthrough: Section[] = [
  // ================================================================
  // CHAPTER 1: FIRST THREE DAYS
  // ================================================================
  {
    id: 'first-three-days',
    title: 'First Three Days',
    icon: '🎭',
    description: 'Your arrival in Termina. Get transformed, explore Clock Town, recover your Ocarina, and learn to turn back time.',
    items: [
      // 1.1 Unfortunate Events
      { id: 'c1-01', text: 'Follow Skull Kid into the tunnel and get transformed into Deku Link', type: 'main', subsection: 'Unfortunate Events', detail: 'After the opening cutscene, chase Skull Kid through the hollow log. You\'ll be cursed and turned into a Deku Scrub. You\'ll land in the underground area beneath the Clock Tower.' },
      { id: 'c1-02', text: 'Meet the Happy Mask Salesman in the Clock Tower basement', type: 'main', subsection: 'Unfortunate Events', detail: 'He tells you he can help if you retrieve your stolen Ocarina and his stolen mask within 3 days. Exit through the door to reach South Clock Town.' },

      // 1.2 Great Fairy
      { id: 'c1-03', text: 'Find the Stray Fairy in Clock Town', type: 'main', subsection: 'Great Fairy', detail: 'During the day, the Stray Fairy is in the Laundry Pool area (floating around). At night, it\'s in East Clock Town. Grab it by touching it.' },
      { id: 'c1-04', text: 'Return the Stray Fairy to the Great Fairy Fountain in North Clock Town', type: 'main', subsection: 'Great Fairy', detail: 'The fountain is in the cave in North Clock Town. Enter and release the fairy to restore the Great Fairy.' },
      { id: 'c1-05', text: 'Receive Magic Power from the Great Fairy', type: 'fairy_reward', subsection: 'Great Fairy', detail: 'You now have a magic meter! As Deku Link, press B to shoot a bubble blast. This is essential for progressing.' },

      // 1.3 Bomber's Code
      { id: 'c1-06', text: 'Pop Jim\'s balloon with a bubble blast in North Clock Town', type: 'main', subsection: 'Bomber\'s Code', detail: 'Jim is the Bomber kid standing on top of a post/ledge in North Clock Town. Shoot his balloon with your new bubble blast (B button) to get his attention.' },
      { id: 'c1-07', text: 'Play hide-and-seek with the 5 Bomber kids to get their code', type: 'main', subsection: 'Bomber\'s Code', detail: 'The 5 Bombers scatter around Clock Town. Find them all: North Clock Town (hiding behind slide, in tree), East Clock Town (near Honey & Darling, on rooftop), West Clock Town (near Swordsman\'s School). The code is 5 random digits — write it down!' },

      // 1.4 Moon's Tear
      { id: 'c1-08', text: 'Enter the Bombers\' Hideout in East Clock Town', type: 'main', subsection: 'Moon\'s Tear', detail: 'Give the code to the Bomber kid guarding the entrance in East Clock Town (near the alley with the yellow cap kid). He\'ll let you through.' },
      { id: 'c1-09', text: 'Navigate the underground passage to reach the Astral Observatory', type: 'main', subsection: 'Moon\'s Tear', detail: 'Follow the passage. There\'s a Skulltula enemy — pop it with a bubble or dodge around it. Use the Deku Flower near the water to skip across to the ladder at the end.' },
      { id: 'c1-10', text: 'Look through the telescope and observe Skull Kid on the Clock Tower', type: 'main', subsection: 'Moon\'s Tear', detail: 'The old man lets you use his telescope. Look up at the top of the Clock Tower to see Skull Kid. A Moon\'s Tear falls from the moon and lands outside.' },
      { id: 'c1-11', text: 'Pick up the Moon\'s Tear outside the observatory', type: 'key_item', subsection: 'Moon\'s Tear', detail: 'Exit through the observatory door to the exterior. The Moon\'s Tear is on the ground right outside. Pick it up.' },
      { id: 'c1-12', text: 'Trade Moon\'s Tear to the Business Scrub in South Clock Town', type: 'key_item', subsection: 'Moon\'s Tear', detail: 'The Business Scrub is standing near the Deku Flower in South Clock Town (near the Clock Tower entrance). Give him the Moon\'s Tear and he\'ll leave, giving you the Land Title Deed and access to his Deku Flower.' },

      // 1.5 Get the Ocarina Back
      { id: 'c1-13', text: 'Deposit your rupees at the Bank in West Clock Town', type: 'main', subsection: 'Get the Ocarina Back', detail: 'The bank is in West Clock Town. Your rupee count resets when you play the Song of Time, but bank deposits carry over. Stamp your deposit amount now so you don\'t lose your money.' },
      { id: 'c1-14', text: 'Activate the Owl Statue near the Clock Tower', type: 'main', subsection: 'Get the Ocarina Back', detail: 'Hit the Owl Statue in South Clock Town with your sword (or interact with it). This lets you save your game. Owl Statues serve as warp points when you learn the Song of Soaring later.' },
      { id: 'c1-15', text: 'Heart Piece #1: Fly to the Clock Tower ledge with the Deku Flower', type: 'heart_piece', subsection: 'Get the Ocarina Back', detail: 'Use the Deku Flower that the Business Scrub left behind in South Clock Town. Launch up and glide to the platform on the Clock Tower. The Heart Piece is sitting on the ledge.' },
      { id: 'c1-16', text: 'Wait until midnight on the Final Night and climb the Clock Tower', type: 'main', subsection: 'Get the Ocarina Back', detail: 'You need to wait until 12:00 AM on the Final Night (Night 3). To pass time: play mini-games (Treasure Chest Shop, Deku Scrub Playground), deposit rupees, or just wait. At midnight, the Clock Tower doors open and a ramp extends. Climb up.' },
      { id: 'c1-17', text: 'Shoot Skull Kid with a bubble blast to recover the Ocarina', type: 'main', subsection: 'Get the Ocarina Back', detail: 'On top of the Clock Tower, Skull Kid is floating with Tael. Shoot him with a Deku bubble blast (B button). He drops the Ocarina of Time. Pick it up.' },
      { id: 'c1-18', text: 'Learn the Song of Time and play it to return to Dawn of the First Day', type: 'song', subsection: 'Get the Ocarina Back', detail: 'After picking up the Ocarina, you\'ll have a flashback of Princess Zelda teaching you the Song of Time. Play it immediately (C-Right, A, C-Down, C-Right, A, C-Down) to reset time. You\'ll return to Dawn of the First Day with the Ocarina in hand. Key items and masks are kept, but rupees in your wallet and consumables are lost.' },

      // 1.6 The Deku Mask
      { id: 'c1-19', text: 'Visit the Happy Mask Salesman and learn the Song of Healing', type: 'song', subsection: 'The Deku Mask', detail: 'Go back to the Clock Tower basement. The Happy Mask Salesman teaches you the Song of Healing (C-Left, C-Right, C-Down, C-Left, C-Right, C-Down). This song heals troubled spirits and transforms curses into masks.' },
      { id: 'c1-20', text: 'Receive the Deku Mask — you can now switch between Deku and Human Link', type: 'mask', subsection: 'The Deku Mask', detail: 'The Song of Healing cures your Deku curse and traps the spirit in the Deku Mask. Put it on to become Deku Link anytime. The Mask Salesman gets upset that you don\'t have Majora\'s Mask yet but lets you go.' },
      { id: 'c1-21', text: 'Get the Bomber\'s Notebook from Jim', type: 'bombers_notebook', subsection: 'The Deku Mask', detail: 'As human Link, talk to Jim (the Bomber leader) in North Clock Town and give him the code. He\'ll give you the Bomber\'s Notebook, which tracks all the people you can help in Clock Town and their schedules.' },
    ],
  },

  // ================================================================
  // CHAPTER 2: SOUTHERN SWAMP
  // ================================================================
  {
    id: 'southern-swamp',
    title: 'Southern Swamp',
    icon: '🌿',
    description: 'Optional Clock Town collection, then head south to the poisoned swamp. Help the monkeys and raise Woodfall Temple.',
    items: [
      // 2.1 Item Collection #1 (Optional)
      { id: 'c2-01', text: 'Great Fairy\'s Mask: Visit the Great Fairy as human Link', type: 'mask', subsection: 'Item Collection #1 (Optional)', detail: 'Return to the Great Fairy Fountain in North Clock Town as human Link (not Deku). She gives you the Great Fairy\'s Mask, which attracts Stray Fairies in dungeons. Essential for 100%!' },
      { id: 'c2-02', text: 'Heart Piece #2: Climb to the tree in North Clock Town', type: 'heart_piece', subsection: 'Item Collection #1 (Optional)', detail: 'In North Clock Town, climb up the slide structure on the playground. From the top, jump across to the tree. The Heart Piece is in the tree hollow. Use the Deku Flower if needed.' },
      { id: 'c2-03', text: 'Adult Wallet: Deposit 200 rupees total at the bank', type: 'upgrade', subsection: 'Item Collection #1 (Optional)', detail: 'The bank is in West Clock Town. Once your total deposits reach 200, you get the Adult Wallet which holds 200 rupees. Deposits carry through time resets, so farm rupees across cycles if needed.' },
      { id: 'c2-04', text: 'Blast Mask: Save the Old Lady from Sakon at 12:00 AM Night 1', type: 'mask', subsection: 'Item Collection #1 (Optional)', detail: 'At exactly 12:00 AM on Night 1, go to North Clock Town. You\'ll see Sakon (the thief) running toward the Old Lady from the Bomb Shop. Slash him with your sword before he steals her bag. She gives you the Blast Mask as thanks. WARNING: If you save her, the Big Bomb Bag becomes available at the Bomb Shop, but the All-Night Mask won\'t appear at the Curiosity Shop this cycle.' },
      { id: 'c2-05', text: 'Kamaro\'s Mask: Heal Kamaro\'s ghost north of Clock Town at night', type: 'mask', subsection: 'Item Collection #1 (Optional)', detail: 'At night, go to the northern part of Termina Field (toward Snowhead). Look for a ghostly figure dancing on top of mushroom-shaped rocks. Play the Song of Healing to give him peace and receive Kamaro\'s Mask.' },
      { id: 'c2-06', text: 'Heart Piece #3: Give the Land Title Deed to ??? in Stock Pot Inn at midnight', type: 'heart_piece', subsection: 'Item Collection #1 (Optional)', detail: 'At midnight (any night), go to the Stock Pot Inn toilet (first floor bathroom). A hand reaches out of the toilet — this is ???. Give him any paper item (the Land Title Deed works). He gives you a Heart Piece. You\'ll need to redo the Moon\'s Tear trade to get another deed later.' },
      { id: 'c2-07', text: 'Bremen Mask: Talk to Guru-Guru in the Laundry Pool at night', type: 'mask', subsection: 'Item Collection #1 (Optional)', detail: 'Visit the Laundry Pool in Clock Town at night (Night 1 or 2). Talk to Guru-Guru (the musician with the music box). He confesses about stealing the Bremen Mask and gives it to you.' },
      { id: 'c2-08', text: 'Heart Piece #4: Dance for the Rosa Sisters with Kamaro\'s Mask', type: 'heart_piece', subsection: 'Item Collection #1 (Optional)', detail: 'At night, find the Rosa Sisters dancing in West Clock Town. Wear Kamaro\'s Mask and dance in front of them (press B). They\'re amazed by the moves and give you a Heart Piece.' },
      { id: 'c2-09', text: 'Big Bomb Bag: Buy from the Bomb Shop (90 rupees)', type: 'upgrade', subsection: 'Item Collection #1 (Optional)', detail: 'Available at the Bomb Shop in West Clock Town for 90 rupees, but only if you saved the Old Lady from Sakon on Night 1. Holds 30 bombs instead of 20.' },
      { id: 'c2-10', text: 'Heart Piece #5: Score 30+ on the Swordsman\'s School Expert Course', type: 'heart_piece', subsection: 'Item Collection #1 (Optional)', detail: 'The Swordsman\'s School is in West Clock Town. Pay to play the Expert Course. Score at least 30 points by slashing the logs as they pop up. Spin attack is effective for hitting multiple targets.' },
      { id: 'c2-11', text: 'Heart Piece #6: Defeat 2 Dodongos in a grotto north of Clock Town', type: 'heart_piece', subsection: 'Item Collection #1 (Optional)', detail: 'In Termina Field, go north toward Snowhead. Find the grotto (hole) hidden in the area. Drop down and defeat the two Dodongos inside. Use bombs or the Blast Mask. A chest with a Heart Piece appears.' },
      { id: 'c2-12', text: 'Heart Piece #7: Defeat a Peahat in the grotto near Milk Road', type: 'heart_piece', subsection: 'Item Collection #1 (Optional)', detail: 'In Termina Field near the entrance to Milk Road (southwest), find a grotto. Drop down and defeat the Peahat (flying plant enemy). Jump attack its roots when it lands. Heart Piece in the chest.' },
      { id: 'c2-13', text: 'Bunny Hood: Use Bremen Mask on chicks at Romani Ranch Cucco Shack', type: 'mask', subsection: 'Item Collection #1 (Optional)', detail: 'Go to the Cucco Shack at Romani Ranch (you need a Powder Keg to open the path first, or wait until later). Wear the Bremen Mask and march in front of the baby chicks. They\'ll follow you and grow into roosters. Grog, the guy watching them, gives you the Bunny Hood. Makes you run much faster!' },

      // 2.2 Southern Swamp
      { id: 'c2-14', text: 'Activate the Owl Statue in South Clock Town', type: 'main', subsection: 'Southern Swamp', detail: 'Before leaving town, make sure the Owl Statue in South Clock Town is activated (slash it with your sword). This will be your first warp point.' },
      { id: 'c2-15', text: 'Head south through Termina Field to the Southern Swamp', type: 'main', subsection: 'Southern Swamp', detail: 'Exit Clock Town through the south gate. Follow the path south through Termina Field. You\'ll pass through a small area with Chuchus and reach the swamp entrance.' },
      { id: 'c2-16', text: 'Heart Piece #8: Climb the tree on the Road to Southern Swamp', type: 'heart_piece', subsection: 'Southern Swamp', detail: 'On the path between Termina Field and the Southern Swamp, look for a tall tree with vines you can climb. The Heart Piece is at the top. Climb the vines to reach it.' },
      { id: 'c2-17', text: 'Buy a Map of Woodfall from Tingle (20 rupees)', type: 'main', subsection: 'Southern Swamp', detail: 'Tingle is floating on his balloon in the Southern Swamp area. Pop his balloon with a bubble/arrow and buy the Map of Woodfall for 20 rupees.' },
      { id: 'c2-18', text: 'Learn the Song of Soaring from the owl', type: 'song', subsection: 'Southern Swamp', detail: 'Near the Southern Swamp Owl Statue, you\'ll find Kaepora Gaebora (the owl). He teaches you the Song of Soaring (C-Down, C-Left, C-Up, C-Down, C-Left, C-Up). This lets you warp to any activated Owl Statue! Incredibly useful for the rest of the game.' },
      { id: 'c2-19', text: 'Find Koume injured in the Woods of Mystery (follow the monkey)', type: 'main', subsection: 'Southern Swamp', detail: 'Enter the Woods of Mystery from the Southern Swamp. Follow the monkey through the changing rooms — he leads you to Koume (the witch) who is injured on the ground.' },
      { id: 'c2-20', text: 'Bottle #1: Get Red Potion from Kotake at the Magic Hags\' Potion Shop', type: 'bottle', subsection: 'Southern Swamp', detail: 'Go to the Magic Hags\' Potion Shop near the swamp entrance. Talk to Kotake (Koume\'s twin sister). She gives you a free bottle of Red Potion to bring to Koume. This is your first Bottle!' },
      { id: 'c2-21', text: 'Give the Red Potion to Koume in the Woods of Mystery', type: 'main', subsection: 'Southern Swamp', detail: 'Return to the Woods of Mystery (follow the monkey again) and give the Red Potion to Koume. She heals up and heads back to run the Swamp Tourist Center boat tours.' },

      // 2.3 Monkeys
      { id: 'c2-22', text: 'Get a free boat ride from Koume at the Swamp Tourist Center', type: 'main', subsection: 'Monkeys', detail: 'Visit the Swamp Tourist Center (the large building on the water). Talk to Koume behind the counter. She offers you a free boat tour through the poisoned swamp as thanks for saving her.' },
      { id: 'c2-23', text: 'Get the Pictograph Box from the Tourist Center', type: 'key_item', subsection: 'Monkeys', detail: 'Inside the Swamp Tourist Center, check the corner area for the Pictograph Box (camera). It lets you take pictures — useful for a Heart Piece later.' },
      { id: 'c2-24', text: 'Ride the boat to the Deku Palace', type: 'main', subsection: 'Monkeys', detail: 'Take Koume\'s boat ride. It takes you through the poisoned water (you can\'t swim in it) to a dock near the Deku Palace entrance.' },
      { id: 'c2-25', text: 'Enter the Deku Palace as Deku Link and visit the throne room', type: 'main', subsection: 'Monkeys', detail: 'Put on the Deku Mask to enter the palace (only Deku can enter). Navigate to the throne room where the Deku King is holding a monkey prisoner, blaming it for the princess\'s disappearance.' },
      { id: 'c2-26', text: 'Heart Piece #9: Find the Heart Piece in the west palace gardens', type: 'heart_piece', subsection: 'Monkeys', detail: 'In the Deku Palace, head to the outer gardens on the west side. Navigate carefully to avoid being caught by the guards (they throw you out). The Heart Piece is on a ledge in the garden area. Use Deku Flowers to fly to it.' },
      { id: 'c2-27', text: 'Buy a Magic Bean from the Bean Salesman in the east garden grotto', type: 'key_item', subsection: 'Monkeys', detail: 'In the east palace garden, find the grotto (hole). Drop down and buy a Magic Bean from the salesman for 10 rupees. You can plant these in soft soil patches.' },
      { id: 'c2-28', text: 'Reach the monkey\'s cage and learn the Sonata of Awakening', type: 'song', subsection: 'Monkeys', detail: 'Navigate through the palace gardens to reach the imprisoned monkey. As Deku Link, he teaches you the Sonata of Awakening. This is the song that opens the path to Woodfall Temple. Play it on the Deku pipes.' },

      // 2.4 Woodfall
      { id: 'c2-29', text: 'Take the Deku Flower shortcut from the swamp to Woodfall', type: 'main', subsection: 'Woodfall', detail: 'From the Southern Swamp, head toward the Woodfall area. As Deku Link, use the Deku Flowers to hop across lily pads and platforms through the poisoned water. Follow the path upward to Woodfall.' },
      { id: 'c2-30', text: 'Heart Piece #10: Open the chest on the east side of Woodfall', type: 'heart_piece', subsection: 'Woodfall', detail: 'Before entering the temple, explore the Woodfall area. On the east side, there\'s a chest on a platform reachable with Deku Flowers. The Heart Piece is inside.' },
      { id: 'c2-31', text: 'Play the Sonata of Awakening on the Deku platform to raise the temple', type: 'main', subsection: 'Woodfall', detail: 'Stand on the large Deku symbol platform in Woodfall (the raised central area). As Deku Link, play the Sonata of Awakening. The Woodfall Temple rises from the poisoned water!' },
    ],
  },

  // ================================================================
  // CHAPTER 3: WOODFALL TEMPLE
  // ================================================================
  {
    id: 'woodfall-temple',
    title: 'Woodfall Temple',
    icon: '🌺',
    description: 'The first dungeon. Navigate the poisoned rooms, collect all 15 Stray Fairies, and defeat the Masked Jungle Warrior.',
    items: [
      // 3.1 Dungeon Map
      { id: 'c3-01', text: 'Enter Woodfall Temple', type: 'main', subsection: 'Dungeon Map', detail: 'Cross the bridge to the temple entrance. Make sure you have the Great Fairy Mask equipped for finding Stray Fairies! Deku Nuts and arrows (when you get the bow) are useful here.' },
      { id: 'c3-02', text: 'Stray Fairy #1: Chest in the entrance room', type: 'stray_fairy', subsection: 'Dungeon Map', detail: 'In the very first room, look for a chest on one of the platforms. Open it for the first Stray Fairy.' },
      { id: 'c3-03', text: 'Stray Fairy #2: Hidden in a pot/bubble in the entrance area', type: 'stray_fairy', subsection: 'Dungeon Map', detail: 'Still in the entrance area, check the pots and look for a fairy bubble floating near the ceiling. The Great Fairy Mask will attract it if you\'re close enough.' },
      { id: 'c3-04', text: 'Navigate to the central flower room and cross to the far door', type: 'main', subsection: 'Dungeon Map', detail: 'The main room has a large poison flower in the center. As Deku Link, use the Deku Flowers around the room to fly across. Reach the door on the far side.' },
      { id: 'c3-05', text: 'Stray Fairy #3: Bubble/chest in the central room', type: 'stray_fairy', subsection: 'Dungeon Map', detail: 'In the central flower room, look for a fairy in a bubble or chest. Use the Great Fairy Mask to spot it — it may be floating above one of the platforms or behind a destructible object.' },
      { id: 'c3-06', text: 'Get the Dungeon Map', type: 'key_item', subsection: 'Dungeon Map', detail: 'After navigating through the initial rooms, find the chest containing the Dungeon Map. This shows you the layout of all the temple\'s rooms.' },
      { id: 'c3-07', text: 'Stray Fairy #4: Near the Dungeon Map area', type: 'stray_fairy', subsection: 'Dungeon Map', detail: 'In the same area as the Dungeon Map, check for a Stray Fairy in a pot, bubble, or chest. Wear the Great Fairy Mask to help locate it.' },

      // 3.2 Compass
      { id: 'c3-08', text: 'Find a Small Key in the dragonfly corridor', type: 'key_item', subsection: 'Compass', detail: 'Navigate to the room with Dragonfly enemies (they shoot fireballs). Defeat them or dodge past to find a Small Key in a chest.' },
      { id: 'c3-09', text: 'Stray Fairy #5: In the dragonfly room', type: 'stray_fairy', subsection: 'Compass', detail: 'Look for a Stray Fairy in a bubble near the ceiling of the dragonfly room, or check the pots along the edges.' },
      { id: 'c3-10', text: 'Stray Fairy #6: In a pot near the compass area', type: 'stray_fairy', subsection: 'Compass', detail: 'Check all the pots in the compass room area. One contains a Stray Fairy. Break them all to be sure.' },
      { id: 'c3-11', text: 'Get the Compass', type: 'key_item', subsection: 'Compass', detail: 'Find and open the Compass chest. The Compass shows treasure chest and Stray Fairy locations on your map — very helpful!' },

      // 3.3 Hero's Bow
      { id: 'c3-12', text: 'Stray Fairy #7: Chest behind a torch puzzle', type: 'stray_fairy', subsection: 'Hero\'s Bow', detail: 'Light all the torches in a room to unlock a chest containing this Stray Fairy. Use Deku Sticks or fire to light them.' },
      { id: 'c3-13', text: 'Stray Fairy #8: Hidden in a pot near the mini-boss door', type: 'stray_fairy', subsection: 'Hero\'s Bow', detail: 'Before entering the mini-boss room, check the pots in the nearby area for a hidden Stray Fairy.' },
      { id: 'c3-14', text: 'Stray Fairy #9: Use Deku Flower to reach an elevated chest', type: 'stray_fairy', subsection: 'Hero\'s Bow', detail: 'In one of the rooms near the mini-boss area, look for a Deku Flower. Launch from it and glide to an elevated platform with a chest containing a Stray Fairy.' },
      { id: 'c3-15', text: 'Defeat the Dinolfos mini-boss', type: 'main', subsection: 'Hero\'s Bow', detail: 'The Dinolfos is a sword-wielding lizard warrior. Z-target it, wait for it to attack, dodge, then counter with your sword. It will jump back and breathe fire — keep your distance during fire attacks. 4-5 hits should do it.' },
      { id: 'c3-16', text: 'Get the Hero\'s Bow', type: 'upgrade', subsection: 'Hero\'s Bow', detail: 'After defeating the Dinolfos, a chest appears containing the Hero\'s Bow! This is Woodfall Temple\'s dungeon item. You can now shoot arrows — incredibly useful. Comes with a quiver of 30 arrows.' },

      // 3.4 Boss Key
      { id: 'c3-17', text: 'Defeat the Gekko + Snapper mini-boss', type: 'main', subsection: 'Boss Key', detail: 'Gekko rides on top of a Snapper (turtle). Shoot the Gekko with an arrow when he climbs the walls/ceiling. When the Snapper flips over, attack its belly. Repeat until defeated. The Gekko becomes a frog (remember this for the Don Gero quest later).' },
      { id: 'c3-18', text: 'Get the Boss Key', type: 'key_item', subsection: 'Boss Key', detail: 'After defeating Gekko + Snapper, a chest appears with the Boss Key. This unlocks the door to Odolwa\'s boss room.' },

      // 3.5 Cleansing the Poison
      { id: 'c3-19', text: 'Light the torch shrine to cleanse the poisoned water', type: 'main', subsection: 'Cleansing the Poison', detail: 'Use Fire Arrows (or carry fire with Deku Sticks) to light the unlit torches in the shrine area. This purifies the poisoned water in several rooms, opening up new areas and making navigation easier.' },
      { id: 'c3-20', text: 'Stray Fairy #10: Revealed after cleansing the water', type: 'stray_fairy', subsection: 'Cleansing the Poison', detail: 'Once the water is cleansed, a previously submerged or hidden Stray Fairy becomes accessible. Check the newly accessible water areas.' },
      { id: 'c3-21', text: 'Stray Fairy #11: Chest in the cleansed area', type: 'stray_fairy', subsection: 'Cleansing the Poison', detail: 'With the poison cleared, reach a chest in the lower areas of the room. It contains a Stray Fairy.' },

      // 3.6 Temple Boss
      { id: 'c3-22', text: 'Stray Fairy #12: In the pre-boss alcoves (use Deku Flowers)', type: 'stray_fairy', subsection: 'Temple Boss: Odolwa', detail: 'The large room before the boss has multiple alcoves accessible with Deku Flowers. Launch from the flowers and glide to alcoves on the upper walls. This fairy is in one of them.' },
      { id: 'c3-23', text: 'Stray Fairy #13: Second alcove in the pre-boss room', type: 'stray_fairy', subsection: 'Temple Boss: Odolwa', detail: 'Another alcove in the same large room. Fly to it with the Deku Flowers and check behind the torch or in the pot.' },
      { id: 'c3-24', text: 'Stray Fairy #14: Third alcove — look for the bubble', type: 'stray_fairy', subsection: 'Temple Boss: Odolwa', detail: 'This Stray Fairy may be in a bubble floating in one of the alcoves. The Great Fairy Mask will attract it once you\'re on the same platform.' },
      { id: 'c3-25', text: 'Stray Fairy #15: Final fairy in the pre-boss area', type: 'stray_fairy', subsection: 'Temple Boss: Odolwa', detail: 'The last Stray Fairy in Woodfall Temple. Check the remaining alcove or hidden area in the pre-boss room. With all 15, you can visit the Great Fairy after the boss.' },
      { id: 'c3-26', text: 'Defeat Odolwa — Masked Jungle Warrior', type: 'main', subsection: 'Temple Boss: Odolwa', detail: 'BOSS FIGHT: Odolwa dances and swings his giant sword. N64 Strategy: Shoot him with arrows to stun, then run in and slash with your sword. When he summons bugs or does his dance, keep distance and shoot arrows. 3DS Strategy: Use Deku Flowers to hover above him, drop Deku Nuts on his head to stun, then slash the eye. Repeat several times. Avoid his sword swings and the ring of fire he summons.' },
      { id: 'c3-27', text: 'Collect the Heart Container', type: 'heart_piece', subsection: 'Temple Boss: Odolwa', detail: 'After defeating Odolwa, pick up the Heart Container that appears. This gives you a full extra heart of health.' },
      { id: 'c3-28', text: 'Collect Odolwa\'s Remains — Boss Remains #1', type: 'main', subsection: 'Temple Boss: Odolwa', detail: 'Touch the floating Boss Remains to collect them. You now have 1 of 4 Boss Remains needed to reach the final battle.' },
      { id: 'c3-29', text: 'Learn the Oath to Order from the freed Giant', type: 'song', subsection: 'Temple Boss: Odolwa', detail: 'You\'re transported to a cloudy realm where a Giant teaches you the Oath to Order. This is the song you\'ll play at the end to summon all four Giants and stop the moon from falling.' },
    ],
  },

  // ================================================================
  // CHAPTER 4: COLLECTION (Post-Woodfall)
  // ================================================================
  {
    id: 'collection',
    title: 'Collection',
    icon: '🏆',
    description: 'Post-temple rewards and optional collectibles. Return the Deku Princess, cash in your Stray Fairies, and tackle side activities.',
    items: [
      // 4.1 Post Temple Collection
      { id: 'c4-01', text: 'Capture the Deku Princess in a bottle', type: 'main', subsection: 'Post Temple Collection', detail: 'After beating Odolwa, go through the door behind where the boss was. The Deku Princess is there. Scoop her up in an empty bottle (she asks you to take her home).' },
      { id: 'c4-02', text: 'Return 15 Stray Fairies to the Woodfall Great Fairy', type: 'fairy_reward', subsection: 'Post Temple Collection', detail: 'The Great Fairy Fountain is near the Woodfall entrance (outside the temple). Bring all 15 Stray Fairies to the fountain. N64: Great Fairy of Power gives you an enhanced Spin Attack. 3DS: Gives you a Magic Meter upgrade (double magic).' },
      { id: 'c4-03', text: 'Return the Deku Princess to the Deku Palace', type: 'main', subsection: 'Post Temple Collection', detail: 'Bring the bottled Deku Princess back to the Deku Palace throne room. Release her in front of the Deku King. She\'ll berate her father for imprisoning the monkey, and the monkey is set free.' },
      { id: 'c4-04', text: 'Mask of Scents: Win the Deku Butler race', type: 'mask', subsection: 'Post Temple Collection', detail: 'After returning the princess, the Deku Butler challenges you to a race through an underground shrine. As Deku Link, use the Deku Flowers to fly through the cave. Follow the butler and stay close — it\'s a speed challenge. Win to receive the Mask of Scents.' },
      { id: 'c4-05', text: 'Heart Piece #11: Win Koume\'s Boat Cruise Target Game', type: 'heart_piece', subsection: 'Post Temple Collection', detail: 'After clearing the swamp\'s poison (by beating the temple), talk to Koume at the Swamp Tourist Center for the target shooting boat ride. Shoot the targets with your bow as the boat moves. Score 20+ hits to win a Heart Piece (N64) or a Bottle (3DS).' },

      // 4.2 Item Collection #2
      { id: 'c4-06', text: 'Heart Piece #12: Win the Photo Contest (take a picture of Tingle)', type: 'heart_piece', subsection: 'Item Collection #2', detail: 'At the Swamp Tourist Center, there\'s a photo contest. Take a picture of Tingle (the guy floating on balloons) with the Pictograph Box. Submit it to win a Heart Piece. Other subjects may work, but Tingle is a guaranteed winner.' },
      { id: 'c4-07', text: 'Mask of Truth: Complete the Swamp Spider House (30 Gold Skulltulas)', type: 'mask', subsection: 'Item Collection #2', detail: 'The Swamp Spider House is in the Southern Swamp area. Enter and destroy all 30 Gold Skulltulas inside. You need to explore every room and use various masks and items to find them all. Completing it gives you the Mask of Truth, which lets you read Gossip Stones and animals\' thoughts.' },
      { id: 'c4-08', text: 'Heart Piece #13: Win the Postman\'s timing game (hit exactly 10.00)', type: 'heart_piece', subsection: 'Item Collection #2', detail: 'At the Post Office in West Clock Town, play the Postman\'s timing game. You need to stop the timer at exactly 10.00 seconds. Count carefully in your head! Alternatively, wear the Bunny Hood and the timer becomes visible, making it much easier.' },
      { id: 'c4-09', text: 'Heart Piece #14: Play for the 4 Gossip Stones in Termina Field grottos', type: 'heart_piece', subsection: 'Item Collection #2', detail: 'Find the 4 colored Gossip Stone grottos in Termina Field (one in each cardinal direction). Play the correct instrument for each stone using different masks — normal Link\'s Ocarina, Deku pipes, Goron drums, and Zora guitar. When all 4 are activated, a Heart Piece appears. (You\'ll need all transformation masks first.)' },
      { id: 'c4-10', text: 'Heart Piece #15: Win the Dog Race at Mamamu Yan\'s', type: 'heart_piece', subsection: 'Item Collection #2', detail: 'At the Romani Ranch dog track (or Mamamu Yan\'s in some versions), pick a dog and bet on it. The Mask of Truth helps — read the dogs\' thoughts to find the winner. Win enough times to get a Heart Piece. The golden dog is a good bet.' },
      { id: 'c4-11', text: 'Large Quiver: Score 40+ at the Town Shooting Gallery', type: 'upgrade', subsection: 'Item Collection #2', detail: 'In the Town Shooting Gallery (East Clock Town), use the Hero\'s Bow to shoot targets. Score 40+ points on a single game to receive the Large Quiver upgrade (holds 40 arrows instead of 30).' },
      { id: 'c4-12', text: 'Heart Piece #16: Score a perfect 50 at the Town Shooting Gallery', type: 'heart_piece', subsection: 'Item Collection #2', detail: 'Get a perfect score of 50 at the Town Shooting Gallery. Every target must be hit. This is tough — practice the patterns and aim quickly. The Heart Piece is the reward for perfection.' },
      { id: 'c4-13', text: 'Largest Quiver: Score 2120+ at the Swamp Shooting Gallery', type: 'upgrade', subsection: 'Item Collection #2', detail: 'At the Swamp Shooting Gallery (Southern Swamp), shoot the targets for a high score. Score 2120 or higher to get the Largest Quiver (holds 50 arrows). The targets move faster here than the town gallery.' },
      { id: 'c4-14', text: 'Heart Piece #17: Win the Deku Scrub Playground on all 3 days', type: 'heart_piece', subsection: 'Item Collection #2', detail: 'In North Clock Town, play the Deku Scrub Playground (only accessible as Deku Link). You must win on Day 1, Day 2, AND Day 3 in the same 3-day cycle. The challenge gets harder each day but the Heart Piece is worth it.' },
      { id: 'c4-15', text: 'Heart Piece #18: Win Honey & Darling\'s game on all 3 days', type: 'heart_piece', subsection: 'Item Collection #2', detail: 'Honey & Darling\'s Shop is in East Clock Town. The game changes each day: Day 1 is bombchu bowling, Day 2 is basket bomb throwing, Day 3 is archery. Win all three in the same cycle for a Heart Piece.' },
    ],
  },

  // ================================================================
  // CHAPTER 5: SNOWHEAD
  // ================================================================
  {
    id: 'snowhead',
    title: 'Snowhead',
    icon: '❄️',
    description: 'Journey to the frozen mountains. Follow a ghost, gain the Goron Mask, learn the Goron Lullaby, and reach the temple.',
    items: [
      // 5.1 Snowhead Mountain
      { id: 'c5-01', text: 'Head north from Clock Town through Termina Field to Mountain Village', type: 'main', subsection: 'Snowhead Mountain', detail: 'Exit Clock Town through the north gate. You need Bombs to blow up boulders blocking the path. Navigate through the snowy mountain area. Enemies here include Eeno (snowball-throwing creatures), Blue Tektites, and White Wolfos.' },
      { id: 'c5-02', text: 'Activate the Mountain Village Owl Statue', type: 'main', subsection: 'Snowhead Mountain', detail: 'Find and activate the Owl Statue in Mountain Village. This is your warp point for the Snowhead region.' },
      { id: 'c5-03', text: 'Buy a Map of Snowhead from Tingle (20 rupees)', type: 'main', subsection: 'Snowhead Mountain', detail: 'Tingle is floating on his balloon somewhere in the mountain area. Pop his balloon and buy the map for 20 rupees.' },

      // 5.2 Goron Mask
      { id: 'c5-04', text: 'Get the Lens of Truth from the Lone Peak Shrine', type: 'upgrade', subsection: 'Goron Mask', detail: 'In the Goron Village area, follow Kaepora Gaebora\'s (the owl\'s) feathers across invisible platforms. They guide you to the Lone Peak Shrine cave. Inside, follow the path (it\'s cold — you lose health over time). Defeat the mini-boss (a Wizzrobe) at the end to receive the Lens of Truth. This lets you see invisible objects and enemies!' },
      { id: 'c5-05', text: 'Follow Darmani\'s ghost to the Goron Graveyard', type: 'main', subsection: 'Goron Mask', detail: 'Use the Lens of Truth to see Darmani\'s ghost in Goron Village. Follow him — he leads you through the Road to Goron Village, Mountain Village, and finally to the Goron Graveyard. Don\'t lose sight of him.' },
      { id: 'c5-06', text: 'Play the Song of Healing to receive the Goron Mask', type: 'mask', subsection: 'Goron Mask', detail: 'At Darmani\'s grave, his ghost asks you to heal him. Play the Song of Healing. Darmani\'s spirit is trapped in the Goron Mask. Wear it to transform into Goron Link — you can roll at high speed, punch powerfully, and pound the ground!' },

      // 5.3 Goron Lullaby
      { id: 'c5-07', text: 'Get Hot Spring Water from under Darmani\'s gravestone', type: 'key_item', subsection: 'Goron Lullaby', detail: 'Push Darmani\'s gravestone to reveal a hidden cave with Hot Spring Water. Scoop it in a bottle. You need to deliver it quickly — it cools down to regular water over time.' },
      { id: 'c5-08', text: 'Melt the ice blocking the Road to Goron Village', type: 'main', subsection: 'Goron Lullaby', detail: 'Use the Hot Spring Water to melt the ice blocking a hole in the Road to Goron Village area. This opens a path you need.' },
      { id: 'c5-09', text: 'Talk to the crying baby in the Goron Shrine (as Goron Link)', type: 'main', subsection: 'Goron Lullaby', detail: 'Inside the Goron Shrine in Goron Village, the baby Goron (the Elder\'s son) is crying non-stop. As Goron Link, try playing the Lullaby Intro for him, but he says it\'s not the full song.' },
      { id: 'c5-10', text: 'Find the Goron Elder frozen in a snowball and thaw him', type: 'main', subsection: 'Goron Lullaby', detail: 'The Goron Elder is frozen in a large snowball somewhere along the Road to Goron Village. The location varies by day. Goron punch the snowball to free him, then pour Hot Spring Water on him to thaw him out.' },
      { id: 'c5-11', text: 'Learn the Lullaby Intro from the Goron Elder', type: 'song', subsection: 'Goron Lullaby', detail: 'Talk to the thawed Goron Elder as Goron Link. He teaches you the Goron Lullaby Intro — the first part of the full lullaby. He\'s too cold to remember the rest.' },
      { id: 'c5-12', text: 'Play the Lullaby Intro for the baby to learn the full Goron Lullaby', type: 'song', subsection: 'Goron Lullaby', detail: 'Return to the Goron Shrine and play the Lullaby Intro for the crying baby as Goron Link. He completes the song! You now know the full Goron Lullaby. This puts Gorons to sleep and is needed to reach Snowhead Temple.' },

      // 5.4 Goron Goodies (Optional)
      { id: 'c5-13', text: 'Don Gero\'s Mask: Light torches in Goron Shrine, give Rock Sirloin to the hungry Goron', type: 'mask', subsection: 'Goron Goodies (Optional)', detail: 'As Goron Link, light all the torches around the perimeter of the Goron Shrine. This makes the central chandelier spin. Roll into the pots on the chandelier to knock a Rock Sirloin off. Pick it up and bring it to the freezing, starving Goron on the ledge in Mountain Village. He gives you Don Gero\'s Mask as thanks.' },
      { id: 'c5-14', text: 'Heart Piece #19: Win the Treasure Chest Shop as Goron Link', type: 'heart_piece', subsection: 'Goron Goodies (Optional)', detail: 'In East Clock Town, play the Treasure Chest Shop as Goron Link. The Lens of Truth helps you see which chest has the prize. Win to get a Heart Piece.' },
      { id: 'c5-15', text: 'Biggest Bomb Bag: Buy from Business Scrub in Goron Village (200 rupees)', type: 'upgrade', subsection: 'Goron Goodies (Optional)', detail: 'As Goron Link, talk to the Business Scrub in Goron Village. He sells the Biggest Bomb Bag for 200 rupees. Holds 40 bombs.' },

      // 5.5 To the Temple
      { id: 'c5-16', text: 'Activate the Snowhead Owl Statue', type: 'main', subsection: 'To the Temple', detail: 'On the path to Snowhead, activate the Owl Statue. This is important for warping back later.' },
      { id: 'c5-17', text: 'Use Lens of Truth to see the invisible Biggoron blocking the path', type: 'main', subsection: 'To the Temple', detail: 'At the entrance to Snowhead Temple\'s area, use the Lens of Truth. You\'ll see a massive invisible Goron (Biggoron) blocking the path. You can\'t fight him — you need to put him to sleep.' },
      { id: 'c5-18', text: 'Play the Goron Lullaby to put Biggoron to sleep', type: 'main', subsection: 'To the Temple', detail: 'As Goron Link, play the Goron Lullaby near the invisible Biggoron. He falls asleep and rolls away, clearing the path to the temple.' },
      { id: 'c5-19', text: 'Roll as Goron through the snow boulders up to Snowhead Temple', type: 'main', subsection: 'To the Temple', detail: 'Use Goron Link\'s rolling ability (A then hold, use magic for spikes) to roll up the hill and smash through snow boulders blocking the path. The wind tries to blow you off, so stay in the center. Reach the top and enter the temple.' },
    ],
  },

  // ================================================================
  // CHAPTER 6: SNOWHEAD TEMPLE
  // ================================================================
  {
    id: 'snowhead-temple',
    title: 'Snowhead Temple',
    icon: '🏔️',
    description: 'The second dungeon. Navigate icy floors, melt frozen enemies, raise the central pillar, and defeat the mechanical beast.',
    items: [
      // 6.1 First Floor
      { id: 'c6-01', text: 'Enter Snowhead Temple', type: 'main', subsection: 'First Floor', detail: 'The temple is built around a massive central pillar that goes up several floors. You\'ll need to raise this pillar by activating switches. Watch out for icy floors and freezing enemies.' },
      { id: 'c6-02', text: 'Stray Fairy #1: In a chest on the first floor', type: 'stray_fairy', subsection: 'First Floor', detail: 'In the first room, look for a chest. It may be on a ledge or behind some ice. Contains the first Stray Fairy.' },
      { id: 'c6-03', text: 'Stray Fairy #2: Frozen in ice or in a bubble on the first floor', type: 'stray_fairy', subsection: 'First Floor', detail: 'Look for a fairy frozen in a block of ice (you\'ll need Fire Arrows later to melt it) or floating in a bubble. Mark it and come back if needed.' },
      { id: 'c6-04', text: 'Stray Fairy #3: In a snowball/pot on the first floor', type: 'stray_fairy', subsection: 'First Floor', detail: 'Break all the snowballs and pots on the first floor. One contains a Stray Fairy. Use Goron punches to break snowballs.' },
      { id: 'c6-05', text: 'Get the Dungeon Map and Compass', type: 'key_item', subsection: 'First Floor', detail: 'Explore the first floor rooms to find both the Dungeon Map and Compass chests. These help you navigate and find remaining Stray Fairies.' },

      // 6.2 Second Floor
      { id: 'c6-06', text: 'Stray Fairy #4: On the second floor, in a chest after icicle room', type: 'stray_fairy', subsection: 'Second Floor', detail: 'Navigate the room with falling icicles and freezing hazards. Clear the room to find a chest with a Stray Fairy.' },
      { id: 'c6-07', text: 'Stray Fairy #5: In a bubble near the second floor ceiling', type: 'stray_fairy', subsection: 'Second Floor', detail: 'Look up near the ceiling on the second floor. A Stray Fairy floats in a bubble. You may need to shoot it down with an arrow or use the Great Fairy Mask to attract it when on an upper ledge.' },
      { id: 'c6-08', text: 'Find a Small Key in the icicle room', type: 'key_item', subsection: 'Second Floor', detail: 'In the room with the icicle hazards, solve the switch puzzle to get a Small Key from a chest.' },
      { id: 'c6-09', text: 'Defeat the Wizrobe mini-boss', type: 'main', subsection: 'Second Floor', detail: 'Wizrobe teleports around the room, appearing on different platforms. Watch the mini-map for his position (red dot). When he materializes, quickly shoot him with an arrow or hit him with a Goron punch before he fires an ice beam. After several hits he goes down.' },
      { id: 'c6-10', text: 'Get the Fire Arrows', type: 'upgrade', subsection: 'Second Floor', detail: 'After defeating the Wizrobe, a chest appears with Fire Arrows! You can now melt ice blocks, light torches from a distance, and deal fire damage. This is Snowhead Temple\'s dungeon item.' },

      // 6.3 Raising the Pillar
      { id: 'c6-11', text: 'Stray Fairy #6: Melt ice block with Fire Arrow', type: 'stray_fairy', subsection: 'Raising the Pillar', detail: 'Now that you have Fire Arrows, go back and melt the ice blocks you found earlier. One contains a Stray Fairy.' },
      { id: 'c6-12', text: 'Stray Fairy #7: In the pillar room, accessible with Fire Arrows', type: 'stray_fairy', subsection: 'Raising the Pillar', detail: 'In the central pillar room, use Fire Arrows to melt ice and reach a previously inaccessible area with this Stray Fairy.' },
      { id: 'c6-13', text: 'Stray Fairy #8: Behind a frozen eye switch', type: 'stray_fairy', subsection: 'Raising the Pillar', detail: 'Find a frozen eye switch — melt it with a Fire Arrow, then hit the exposed eye with a regular arrow. This opens a passage to a chest with a Stray Fairy.' },
      { id: 'c6-14', text: 'Stray Fairy #9: In the upper level of the pillar room', type: 'stray_fairy', subsection: 'Raising the Pillar', detail: 'As you climb higher in the temple, find this fairy in a pot or chest on one of the upper platforms around the central pillar.' },
      { id: 'c6-15', text: 'Stray Fairy #10: Chest on an elevated platform', type: 'stray_fairy', subsection: 'Raising the Pillar', detail: 'Use Deku Flowers or platforms to reach an elevated chest containing this Stray Fairy.' },
      { id: 'c6-16', text: 'Pound the switches to raise the central pillar', type: 'main', subsection: 'Raising the Pillar', detail: 'As Goron Link, ground-pound the large switches around the temple. Each switch raises the central pillar higher. You need to hit them in sequence to raise it to the top floor where the boss door is.' },

      // 6.4 Boss Key
      { id: 'c6-17', text: 'Stray Fairy #11: In the Freezard corridor', type: 'stray_fairy', subsection: 'Boss Key', detail: 'In the corridor with Freezard enemies (stationary ice-breathing statues), melt them with Fire Arrows. A Stray Fairy is hidden behind or near one of them.' },
      { id: 'c6-18', text: 'Stray Fairy #12: In the elevator room', type: 'stray_fairy', subsection: 'Boss Key', detail: 'In the room with moving platforms/elevators, ride them to reach a chest or bubble containing a Stray Fairy.' },
      { id: 'c6-19', text: 'Stray Fairy #13: In a chest in the Dinolfos room', type: 'stray_fairy', subsection: 'Boss Key', detail: 'Defeat the Dinolfos in this room (same strategy as Woodfall — dodge and counter). A chest appears with a Stray Fairy.' },
      { id: 'c6-20', text: 'Stray Fairy #14: Near the second Wizrobe fight', type: 'stray_fairy', subsection: 'Boss Key', detail: 'Before or after the second Wizrobe fight, check the area for a Stray Fairy in a pot or chest.' },
      { id: 'c6-21', text: 'Defeat the second Wizrobe and get the Boss Key', type: 'key_item', subsection: 'Boss Key', detail: 'Another Wizrobe fight, same strategy but he\'s faster. Shoot him with arrows when he appears. After defeating him, open the chest for the Boss Key.' },

      // 6.5 Temple Boss
      { id: 'c6-22', text: 'Stray Fairy #15: Hidden alcove (use Lens of Truth + Deku Flower)', type: 'stray_fairy', subsection: 'Temple Boss: Goht', detail: 'The final Stray Fairy is in a hidden alcove near the top of the temple. Use the Lens of Truth to spot a hidden passage, then use a Deku Flower to fly to it. This one is tricky!' },
      { id: 'c6-23', text: 'Punch out the 4 ice pillars from the central column', type: 'main', subsection: 'Temple Boss: Goht', detail: 'Before the boss fight, as Goron Link, punch out the 4 ice pillars/blocks from the central column to access the boss door at the top of the raised pillar.' },
      { id: 'c6-24', text: 'Defeat Goht — Masked Mechanical Monster', type: 'main', subsection: 'Temple Boss: Goht', detail: 'BOSS FIGHT: Goht is a giant mechanical bull frozen in ice. Melt him with a Fire Arrow to start the fight. As Goron Link, ROLL (hold A, use magic for spike roll) and chase Goht around the circular arena. Ram into him repeatedly. Use the speed bumps on the arena floor to launch onto his back. He drops magic jars — collect them to keep rolling. Watch out for his lightning attacks, bombs he drops, and falling rocks. 3DS: Hit the eye on his back when stunned. Keep rolling and ramming!' },
      { id: 'c6-25', text: 'Collect the Heart Container', type: 'heart_piece', subsection: 'Temple Boss: Goht', detail: 'Pick up the Heart Container dropped by Goht. Another full heart added to your health.' },
      { id: 'c6-26', text: 'Collect Goht\'s Remains — Boss Remains #2', type: 'main', subsection: 'Temple Boss: Goht', detail: 'Touch the Boss Remains to collect them. 2 of 4 Giants are now freed! Spring returns to the mountains.' },
    ],
  },

  // ================================================================
  // CHAPTER 7: SPRING, ROMANI RANCH, IKANA GRAVEYARD
  // ================================================================
  {
    id: 'spring-ranch-graveyard',
    title: 'Spring, Romani Ranch & Graveyard',
    icon: '🌸',
    description: 'Spring returns! Forge the Gilded Sword, help at Romani Ranch, and explore the Ikana Graveyard.',
    items: [
      // 7.1 Spring
      { id: 'c7-01', text: 'Return 15 Stray Fairies to the Snowhead Great Fairy', type: 'fairy_reward', subsection: 'Spring', detail: 'The Snowhead Great Fairy Fountain is in a cave near the Snowhead entrance. Bring all 15 Stray Fairies. N64: Get Enhanced Spin Attack (double damage). 3DS: Get Magic Meter upgrade (double magic).' },
      { id: 'c7-02', text: 'Get the Razor Sword from the Mountain Smithy (100 rupees)', type: 'upgrade', subsection: 'Spring', detail: 'Visit the Mountain Smithy in the Mountain Village. Pay 100 rupees and leave your sword. Come back the next day (must be done by Day 1 to pick up Day 2). The Razor Sword does double damage but breaks after 100 hits and is lost on time reset.' },
      { id: 'c7-03', text: 'Get Powder Keg Certification from Medigoron in Goron Village', type: 'upgrade', subsection: 'Spring', detail: 'As Goron Link, talk to the big Goron Medigoron in Goron Village. He gives you a Powder Keg and asks you to blow up the boulder blocking the Goron Racetrack. Carry it there (don\'t get hit!) and blow it up to get certified to buy Powder Kegs.' },
      { id: 'c7-04', text: 'Win the Goron Race — get Bottle with Gold Dust', type: 'bottle', subsection: 'Spring', detail: 'With spring returned, the Goron Racetrack is accessible. As Goron Link, race against other Gorons. Roll (A then hold) and use magic for spike roll on straightaways. Take the inside of turns. First place gives you a Bottle with Gold Dust! (N64: Bottle #2, 3DS: Bottle #3).' },
      { id: 'c7-05', text: 'Get the Gilded Sword (bring Gold Dust + Razor Sword to the smithy)', type: 'upgrade', subsection: 'Spring', detail: 'With the Razor Sword and Gold Dust, visit the Mountain Smithy. He\'ll forge the Gilded Sword — a permanent upgrade that survives the Song of Time! Does triple damage. Must start on Day 1 to finish by Day 2.' },

      // 7.2 Romani Ranch
      { id: 'c7-06', text: 'Buy a Powder Keg and blow up the boulder on Milk Road', type: 'main', subsection: 'Romani Ranch', detail: 'As Goron Link, buy a Powder Keg from the Bomb Shop (50 rupees) or the Goron in Goron Village. Carry it to the boulder blocking Milk Road (south-west Termina Field) and blow it up to access Romani Ranch.' },
      { id: 'c7-07', text: 'Learn Epona\'s Song from Romani', type: 'song', subsection: 'Romani Ranch', detail: 'At Romani Ranch on Day 1, talk to the young girl Romani. She teaches you Epona\'s Song and asks you to help practice for "them" (the aliens). Play Epona\'s Song near a horse to call Epona!' },
      { id: 'c7-08', text: 'Defend the barn from aliens (Night 1, 2:00 AM - 5:15 AM)', type: 'side_quest', subsection: 'Romani Ranch', detail: 'On Night 1 at 2:00 AM, aliens (ghostly UFO things) start approaching the barn from all directions. Ride Epona and shoot them with arrows. They come in waves from the fields. If even one reaches the barn, you fail. Keep shooting until 5:15 AM when dawn breaks. Romani gives you a Bottle with Milk as thanks (N64: Bottle #3, 3DS: Bottle #4).' },
      { id: 'c7-09', text: 'Bottle: Receive milk from Romani after defending the barn', type: 'bottle', subsection: 'Romani Ranch', detail: 'After successfully defending the barn through the night, Romani thanks you the next morning with a Bottle of Chateau Romani milk.' },
      { id: 'c7-10', text: 'Help Cremia deliver milk (Night 2) — get Romani\'s Mask', type: 'mask', subsection: 'Romani Ranch', detail: 'On Night 2, talk to Cremia (Romani\'s older sister) at the ranch. She needs help delivering milk to Clock Town. Ride on the back of her wagon and shoot the Gorman Brothers (bandits on horses) with arrows to protect the milk. If the delivery succeeds, she gives you Romani\'s Mask, which grants access to the Milk Bar in Clock Town.' },

      // 7.3 Ikana Graveyard
      { id: 'c7-11', text: 'Stone Mask: Give Red Potion to the invisible soldier (N64: Road to Ikana)', type: 'mask', subsection: 'Ikana Graveyard', detail: 'N64: On the Road to Ikana Canyon, use the Lens of Truth to find an invisible soldier (Shiro) sitting on a rock. Give him a Red Potion or Blue Potion. He gives you the Stone Mask, which makes you invisible to most enemies! 3DS: This is found later in the Pirates\' Fortress instead.' },
      { id: 'c7-12', text: 'Defeat Captain Keeta in the graveyard — get Captain\'s Hat', type: 'mask', subsection: 'Ikana Graveyard', detail: 'In Ikana Graveyard, play the Sonata of Awakening near the giant skeleton (Captain Keeta) to wake him. Chase him and hit him with arrows to slow him down. When you catch up, slash him with your sword. After defeating him, he drops a chest with the Captain\'s Hat. Wearing it lets you command Stalchildren.' },
      { id: 'c7-13', text: 'Night 1 grave: Defeat the Iron Knuckle, learn Song of Storms', type: 'song', subsection: 'Ikana Graveyard', detail: 'On Night 1, wear the Captain\'s Hat and command the Stalchildren to open the large grave. Drop in, navigate the underground, and defeat an Iron Knuckle (heavy armored knight — dodge his slow but devastating swings, counterattack). In the final room, meet Flat the composer who teaches you the Song of Storms.' },
      { id: 'c7-14', text: 'Heart Piece #20: Night 2 grave — navigate the invisible path', type: 'heart_piece', subsection: 'Ikana Graveyard', detail: 'On Night 2, have the Stalchildren open the second grave. Inside is a room with an invisible path over a pit. Use the Lens of Truth to see the platforms. Navigate carefully to reach a chest with a Heart Piece.' },
      { id: 'c7-15', text: 'Night 3 grave: Help Dampe find 3 blue flames, defeat Big Poe', type: 'side_quest', subsection: 'Ikana Graveyard', detail: 'On Night 3, have the Stalchildren open the third grave. You team up with Dampe the gravedigger. Guide him to dig up 3 blue flames while defeating Bats and enemies. Then fight a Big Poe. Reward: Heart Piece (3DS) or Bottle (N64).' },
      { id: 'c7-16', text: 'Heart Piece #21 / Bottle: Night 3 grave reward', type: 'heart_piece', subsection: 'Ikana Graveyard', detail: '3DS: You receive a Heart Piece from the Night 3 grave. N64: You receive a Bottle instead (Bottle #4). Either way, a valuable reward.' },
    ],
  },

  // ================================================================
  // CHAPTER 8: GREAT BAY & ZORA CAPE
  // ================================================================
  {
    id: 'great-bay',
    title: 'Great Bay & Zora Cape',
    icon: '🌊',
    description: 'Head west to the ocean. Become a Zora, infiltrate the Pirates\' Fortress, rescue Zora Eggs, and open the path to the temple.',
    items: [
      // 8.1 Zora Mask
      { id: 'c8-01', text: 'Ride Epona west to Great Bay Coast', type: 'main', subsection: 'Zora Mask', detail: 'Exit Clock Town through the west gate and ride Epona through Termina Field to reach the Great Bay Coast. The ocean stretches before you.' },
      { id: 'c8-02', text: 'Push dying Mikau the Zora to shore', type: 'main', subsection: 'Zora Mask', detail: 'In the shallow water near the beach, you\'ll find Mikau (a Zora guitarist) floating and dying. Swim out to him and push him to shore. He sings his story of trying to save the Zora Eggs from pirates.' },
      { id: 'c8-03', text: 'Play the Song of Healing to receive the Zora Mask', type: 'mask', subsection: 'Zora Mask', detail: 'After Mikau tells his story, play the Song of Healing. His spirit is captured in the Zora Mask. Wear it to become Zora Link — you can swim fast underwater, walk on ocean floor, use boomerang fins, and create an electric barrier!' },
      { id: 'c8-04', text: 'Buy a Map of Great Bay from Tingle (20 rupees)', type: 'main', subsection: 'Zora Mask', detail: 'Find Tingle floating in the Great Bay area. Pop his balloon and buy the map.' },
      { id: 'c8-05', text: 'Activate the Great Bay Coast Owl Statue', type: 'main', subsection: 'Zora Mask', detail: 'Find and activate the Owl Statue along Great Bay Coast. This is your warp point for the ocean region.' },

      // 8.2 Pirates' Fortress
      { id: 'c8-06', text: 'Swim as Zora Link to the Pirates\' Fortress', type: 'main', subsection: 'Pirates\' Fortress', detail: 'As Zora Link, swim north from Great Bay Coast into the Pirates\' Cove. Look for the entrance — swim through the second skull board from the left on the fortress wall. Avoid the patrol boats.' },
      { id: 'c8-07', text: 'Stone Mask (3DS only): Give Red Potion to invisible soldier in the fortress', type: 'mask', subsection: 'Pirates\' Fortress', detail: '3DS version only: Inside the Pirates\' Fortress, use the Lens of Truth to find the invisible soldier Shiro. Give him a Red Potion to receive the Stone Mask. Makes you invisible to most enemies — incredibly useful for sneaking through the fortress!' },
      { id: 'c8-08', text: 'Get the Hookshot from the Pirates\' Fortress', type: 'upgrade', subsection: 'Pirates\' Fortress', detail: 'Navigate through the fortress (the Stone Mask helps enormously). In the main interior room, you\'ll face a Gerudo Pirate. Defeat her and open the chest to get the Hookshot! You can now grapple to targets, chests, and certain surfaces.' },
      { id: 'c8-09', text: 'Collect 4 Zora Eggs from the fortress tanks', type: 'main', subsection: 'Pirates\' Fortress', detail: 'There are 4 Zora Eggs in fish tanks inside the Pirates\' Fortress, each in a different room. You need bottles to carry them (one egg per bottle). Sneak into each room (Stone Mask helps!), fight or avoid the Gerudo Pirates, and scoop the eggs from the tanks. Take them to the Marine Research Lab.' },
      { id: 'c8-10', text: 'Heart Piece #22: In a cage/room in the fortress water area', type: 'heart_piece', subsection: 'Pirates\' Fortress', detail: 'While exploring the Pirates\' Fortress, look for a Heart Piece in a cage or alcove in the water channel area. Use the Hookshot to reach it.' },
      { id: 'c8-11', text: 'Take a Pictograph of a Gerudo Pirate', type: 'main', subsection: 'Pirates\' Fortress', detail: 'While in the fortress, use the Pictograph Box to take a clear photo of one of the Gerudo Pirates. You\'ll need this for the next step to get the Seahorse.' },

      // 8.3 Pinnacle Rock
      { id: 'c8-12', text: 'Trade the Gerudo photo to the Fisherman for a Seahorse', type: 'bottle', subsection: 'Pinnacle Rock', detail: 'Go to the Fisherman\'s hut on Great Bay Coast. Show him the Pictograph of the Gerudo Pirate. He gives you a Seahorse in a Bottle. The seahorse will guide you to Pinnacle Rock.' },
      { id: 'c8-13', text: 'Follow the Seahorse through murky water to Pinnacle Rock', type: 'main', subsection: 'Pinnacle Rock', detail: 'Release the Seahorse in the murky water area near the fortress. Follow it — it leads you through the visibility-limited waters to Pinnacle Rock.' },
      { id: 'c8-14', text: 'Defeat 8 Deep Pythons (sea snakes) and collect 3 Zora Eggs', type: 'main', subsection: 'Pinnacle Rock', detail: 'Pinnacle Rock has underwater caves with Deep Pythons (giant sea snakes). As Zora Link, swim into each cave and defeat the snakes with your boomerang fins. 3 of the caves contain Zora Eggs — collect them in bottles. You need to defeat all 8 snakes to fully explore the area.' },
      { id: 'c8-15', text: 'Heart Piece #23: Reunite the Seahorses at Pinnacle Rock', type: 'heart_piece', subsection: 'Pinnacle Rock', detail: 'After clearing the sea snakes, the Seahorse you released finds its partner at Pinnacle Rock. Their reunion rewards you with a Heart Piece.' },
      { id: 'c8-16', text: 'Bring all 7 Zora Eggs to the Marine Research Lab', type: 'main', subsection: 'Pinnacle Rock', detail: 'Take all 7 Zora Eggs (4 from Pirates\' Fortress + 3 from Pinnacle Rock) to the Marine Research Lab on Great Bay Coast. Drop them all in the large fish tank. They arrange themselves into musical notes.' },
      { id: 'c8-17', text: 'Learn the New Wave Bossa Nova', type: 'song', subsection: 'Pinnacle Rock', detail: 'After placing all 7 eggs in the tank, they hatch and the baby Zoras form the notes of the New Wave Bossa Nova. Learn it! This song will open the path to the Great Bay Temple.' },

      // 8.4 Great Bay Collection (Optional)
      { id: 'c8-18', text: 'Compose the Scarecrow\'s Song', type: 'song', subsection: 'Great Bay Collection (Optional)', detail: 'At the Trading Post or Astral Observatory, find the Scarecrow and compose a custom 8-note song. Playing this song in certain locations summons Pierre (a hookshot-able scarecrow) to help you reach high places.' },
      { id: 'c8-19', text: 'Heart Piece #24: Grotto in west Termina Field (beehives + Zora swimming)', type: 'heart_piece', subsection: 'Great Bay Collection (Optional)', detail: 'In western Termina Field, find a grotto. Inside, destroy the beehives and swim as Zora Link through the underwater passage to reach a Heart Piece.' },
      { id: 'c8-20', text: 'Heart Piece #25: Snowhead Scarecrow\'s Song spot (Hookshot)', type: 'heart_piece', subsection: 'Great Bay Collection (Optional)', detail: 'In the Mountain Village area (with spring returned), find the Scarecrow\'s Song spot. Play it to summon Pierre, then Hookshot up to reach a ledge with a Heart Piece.' },
      { id: 'c8-21', text: 'Heart Piece #26: Great Bay Scarecrow\'s Song spot (Hookshot)', type: 'heart_piece', subsection: 'Great Bay Collection (Optional)', detail: 'Near Great Bay Coast, plant a Magic Bean in a soft soil spot, then use the Scarecrow\'s Song and Hookshot to reach an elevated Heart Piece.' },
      { id: 'c8-22', text: 'Heart Piece #27: Feed a fish at the Marine Research Lab', type: 'heart_piece', subsection: 'Great Bay Collection (Optional)', detail: 'Catch a fish in a bottle (from the ocean water) and bring it to the Marine Research Lab. Drop it in the large tank where the Zora Eggs were. The large fish eats it and a Heart Piece appears.' },
      { id: 'c8-23', text: 'Heart Piece #28: Defeat the Like-Like at Zora Cape', type: 'heart_piece', subsection: 'Great Bay Collection (Optional)', detail: 'At Zora Cape, dive into the waterfall pit area as Zora Link. Find and defeat the Like-Like (the tube-shaped enemy that swallows you). It drops a Heart Piece.' },
      { id: 'c8-24', text: 'Heart Piece #29: Win the Beaver Race at Waterfall Rapids', type: 'heart_piece', subsection: 'Great Bay Collection (Optional)', detail: 'At the Waterfall Rapids (behind the waterfall near Zora Cape), swim through rings as Zora Link to race the Beavers. Beat both the younger and older brother races. Win twice total to get a Heart Piece (first win gives a Bottle).' },
      { id: 'c8-25', text: 'Bottle #5: Win the first Beaver Race', type: 'bottle', subsection: 'Great Bay Collection (Optional)', detail: 'Your first victory in the Beaver Race gives you a Bottle. Swim through all the rings before time runs out.' },
      { id: 'c8-26', text: 'Complete the Oceanside Spider House (30 Gold Skulltulas)', type: 'side_quest', subsection: 'Great Bay Collection (Optional)', detail: 'The Oceanside Spider House is along Great Bay Coast. Enter on Day 1 and destroy all 30 Gold Skulltulas. You need the Hookshot, arrows, and Fire Arrows to reach them all. The order you need to shoot the colored skulls is told by the Stalchildren inside. Completing it gives you the Giant Wallet (holds 500 rupees).' },
      { id: 'c8-27', text: 'Giant Wallet: Reward from the Oceanside Spider House', type: 'upgrade', subsection: 'Great Bay Collection (Optional)', detail: 'After clearing all 30 Gold Skulltulas and talking to the man at the entrance, you receive the Giant Wallet. It holds 500 rupees!' },
      { id: 'c8-28', text: 'Heart Piece #30: Also from the Oceanside Spider House', type: 'heart_piece', subsection: 'Great Bay Collection (Optional)', detail: 'Use the colored skull order from the Stalchildren to solve a puzzle inside the Spider House. This gives you a Heart Piece in addition to the Giant Wallet.' },

      // 8.5 Zora Hall
      { id: 'c8-29', text: 'Heart Piece #31: Jam session with Evan at Zora Hall', type: 'heart_piece', subsection: 'Zora Hall', detail: 'In Zora Hall, visit the band members\' rooms. Learn notes from Mikau\'s diary, jam with Japas (the bassist), then play the full song for Evan (the band leader) WITHOUT wearing the Zora Mask (play as human Link). He\'s amazed by the song and gives you a Heart Piece for keeping quiet about where you got it.' },
      { id: 'c8-30', text: 'Activate the Zora Cape Owl Statue', type: 'main', subsection: 'Zora Hall', detail: 'Find and activate the Owl Statue at Zora Cape. Important warp point for returning to this area.' },
      { id: 'c8-31', text: 'Play the New Wave Bossa Nova for Lulu to awaken the Giant Turtle', type: 'main', subsection: 'Zora Hall', detail: 'Stand in front of Lulu (on the ledge overlooking the ocean at Zora Cape) and play the New Wave Bossa Nova as Zora Link. Her voice returns, and the sound awakens a massive Giant Turtle sleeping in the bay.' },
      { id: 'c8-32', text: 'Hookshot onto the Giant Turtle and ride to Great Bay Temple', type: 'main', subsection: 'Zora Hall', detail: 'The Giant Turtle surfaces and offers to take you to the temple. Hookshot onto the palm tree on his back. He swims through a storm to deliver you to the entrance of the Great Bay Temple.' },
    ],
  },

  // ================================================================
  // CHAPTER 9: GREAT BAY TEMPLE
  // ================================================================
  {
    id: 'great-bay-temple',
    title: 'Great Bay Temple',
    icon: '🐚',
    description: 'The third dungeon. Master the colored water pipe system, freeze enemies with Ice Arrows, and defeat the monstrous fish.',
    items: [
      // 9.1 Small Key
      { id: 'c9-01', text: 'Enter Great Bay Temple', type: 'main', subsection: 'Navigating the Pipes', detail: 'The temple is a water-filled mechanical structure built around colored pipe systems (Red, Green, Yellow). Switches control water flow direction. Stock up on arrows and magic before entering.' },
      { id: 'c9-02', text: 'Stray Fairy #1: Light all torches in the entrance room', type: 'stray_fairy', subsection: 'Navigating the Pipes', detail: 'In the entrance room, light all the unlit torches using Fire Arrows. This reveals a chest containing the first Stray Fairy.' },
      { id: 'c9-03', text: 'Stray Fairy #2: Bubble under the platform in the Waterwheel Room', type: 'stray_fairy', subsection: 'Navigating the Pipes', detail: 'In the large Waterwheel Room, dive underwater and look beneath the entrance platform. A Stray Fairy is in a bubble. Use the Great Fairy Mask or pop the bubble.' },
      { id: 'c9-04', text: 'Stray Fairy #3: Kill the Big Skulltula in the Waterwheel Room', type: 'stray_fairy', subsection: 'Navigating the Pipes', detail: 'On the west rising platform in the Waterwheel Room, there\'s a Big Skulltula (large spider). Defeat it with arrows or Hookshot to reveal a Stray Fairy.' },
      { id: 'c9-05', text: 'Stray Fairy #4: Barrels on the west side of the Central Chamber', type: 'stray_fairy', subsection: 'Navigating the Pipes', detail: 'In the Central Chamber (the room with rotating platforms), check the barrels on the western platform. Break them to find a Stray Fairy.' },
      { id: 'c9-06', text: 'Stray Fairy #5: Jar in the spinning water vortex', type: 'stray_fairy', subsection: 'Navigating the Pipes', detail: 'In the Central Chamber, look at the center where water spins. There\'s a jar in the vortex — break it (shoot with an arrow) to free a Stray Fairy.' },
      { id: 'c9-07', text: 'Get the Dungeon Map', type: 'key_item', subsection: 'Navigating the Pipes', detail: 'Navigate through the pipe rooms to find the Dungeon Map chest. Use the Hookshot to reach platforms and Zora Link to swim through submerged passages. Watch for Skullfish enemies underwater.' },
      { id: 'c9-08', text: 'Stray Fairy #6: Pot on a platform in the Dungeon Map room', type: 'stray_fairy', subsection: 'Navigating the Pipes', detail: 'In the room where you found the Dungeon Map, Hookshot to a platform with pots. One pot contains a Stray Fairy. Use the Great Fairy Mask to attract it.' },
      { id: 'c9-09', text: 'Stray Fairy #7: Kill all Bio Deku Babas in the green path room', type: 'stray_fairy', subsection: 'Navigating the Pipes', detail: 'In the room along the green pipe path, defeat all the Bio Deku Babas (plant enemies on lily pads). Killing them all reveals a Stray Fairy.' },
      { id: 'c9-10', text: 'Get the Compass and a Small Key', type: 'key_item', subsection: 'Navigating the Pipes', detail: 'Continue through the Bio Deku Baba room. Find the Compass in an upper chest and a Small Key in an underwater chest. Navigate past Dexihands (the grabbing hands) and Real Bombchus.' },
      { id: 'c9-11', text: 'Stray Fairy #8: Jar between Dexihands in the flowing water', type: 'stray_fairy', subsection: 'Navigating the Pipes', detail: 'In the Compass room area, look for a jar between the Dexihands in the flowing water. Break it to get this Stray Fairy. Be careful not to get grabbed.' },

      // 9.2 Ice Arrows
      { id: 'c9-12', text: 'Navigate up the Red pipe to the locked door', type: 'main', subsection: 'Ice Arrows', detail: 'Use the Small Key to unlock the door along the Red pipe path. Climb/swim through the red-colored passages. Watch for Shell Blades, Skullfish, and Octoroks.' },
      { id: 'c9-13', text: 'Defeat the Wart mini-boss', type: 'main', subsection: 'Ice Arrows', detail: 'MINI-BOSS: Wart is a giant eyeball surrounded by protective bubbles. Remove the bubbles first — use Deku Nuts, Fire Arrows, Blast Mask explosions, or Hookshot to pop them. Once the eye is exposed, shoot it with arrows. After enough damage, Wart drops its remaining bubbles and charges around the room. Dodge and keep shooting the exposed eye.' },
      { id: 'c9-14', text: 'Get the Ice Arrows', type: 'upgrade', subsection: 'Ice Arrows', detail: 'After defeating Wart, open the chest for the Ice Arrows! These freeze enemies and can create ice platforms on water. This is Great Bay Temple\'s dungeon item and essential for solving the remaining puzzles.' },

      // 9.3 Boss Key
      { id: 'c9-15', text: 'Push the first Red switch using Ice Arrow platforms', type: 'main', subsection: 'Red Switches & Boss Key', detail: 'Return to the central area. Freeze an Octorok with an Ice Arrow to create a stepping stone. Jump on it to reach the platform with the first Red switch. Push it to change the water flow.' },
      { id: 'c9-16', text: 'Push the second Red switch (freeze a Blue ChuChu as a block)', type: 'main', subsection: 'Red Switches & Boss Key', detail: 'Navigate to the Dungeon Map room via the yellow path. Use Ice Arrows to create platforms to reach a door you couldn\'t access before. Inside, freeze a Blue ChuChu with an Ice Arrow — it becomes a solid block you can push. Use it to reach the second Red switch.' },
      { id: 'c9-17', text: 'Defeat Gekko + Mad Jellies and get the Boss Key', type: 'key_item', subsection: 'Red Switches & Boss Key', detail: 'Navigate to the new area accessible after both Red switches. Fight Gekko again — this time with Mad Jellies. Chase Gekko and slash him. When the jelly blob is on the ceiling, freeze it with Ice Arrows — Gekko falls down for more hits. The Boss Key is in the chest that appears.' },

      // 9.4 Green Switches
      { id: 'c9-18', text: 'Change the water flow by pushing the Red platform in the Waterwheel Room', type: 'main', subsection: 'Green Switches & Final Fairies', detail: 'Return to the Waterwheel Room. Hookshot up and push the Red platform to power the waterwheel. Shut off the Yellow platform — this reverses the water flow direction, opening new paths.' },
      { id: 'c9-19', text: 'Push the first Green switch (freeze the waterfall, climb up)', type: 'main', subsection: 'Green Switches & Final Fairies', detail: 'Find a waterfall — freeze it with an Ice Arrow to create a climbable surface. Climb up, fight Blue Tektites, and use Ice Arrow platforms to reach the first Green switch.' },
      { id: 'c9-20', text: 'Stray Fairy #9: Upper area above a grate, use Hookshot', type: 'stray_fairy', subsection: 'Green Switches & Final Fairies', detail: 'In the Green switch room area, look above you for a Hookshot target leading to an upper area above a grate. The Stray Fairy is in a chest or bubble up there.' },
      { id: 'c9-21', text: 'Stray Fairy #10: Hookshot to a torch in the SE corner of the moving platform room', type: 'stray_fairy', subsection: 'Green Switches & Final Fairies', detail: 'In the room with rising platforms and turning gears, look for a torch in the southeast corner alcove. Hookshot to it to reach a Stray Fairy.' },
      { id: 'c9-22', text: 'Stray Fairy #11: Chest above the frozen waterwheel', type: 'stray_fairy', subsection: 'Green Switches & Final Fairies', detail: 'Freeze the waterwheel with an Ice Arrow to stop it. Walk across it to reach a Hookshot target on the wall. Hookshot up to find a chest with a Stray Fairy.' },
      { id: 'c9-23', text: 'Push the second Green switch (melt frozen water above see-saws)', type: 'main', subsection: 'Green Switches & Final Fairies', detail: 'In the see-saw room, use Fire Arrows to melt the frozen water above the see-saws. This raises the platforms. Navigate to the second Green switch and push it.' },
      { id: 'c9-24', text: 'Stray Fairy #12: Barrel underwater beneath the first see-saw', type: 'stray_fairy', subsection: 'Green Switches & Final Fairies', detail: 'Dive underwater beneath the first see-saw platform. Break the barrel down there to find a Stray Fairy.' },
      { id: 'c9-25', text: 'Stray Fairy #13: Enclosed area via climbing the Green pipe', type: 'stray_fairy', subsection: 'Green Switches & Final Fairies', detail: 'After pushing the Green switch, climb up the Green pipe to reach an enclosed area with this Stray Fairy.' },

      // 9.5 Temple Boss
      { id: 'c9-26', text: 'Stray Fairy #14: Bubble in the path to the boss door', type: 'stray_fairy', subsection: 'Temple Boss: Gyorg', detail: 'Take the bottom path (Green pipes now flowing). In the exit path, look for a Stray Fairy in a bubble floating along the passage.' },
      { id: 'c9-27', text: 'Stray Fairy #15: Bubble under a Green platform near the boss door', type: 'stray_fairy', subsection: 'Temple Boss: Gyorg', detail: 'Near the boss door, dive under a Green platform and look for the final Stray Fairy in a bubble. Shoot it from the pipe vantage point or swim to it as Zora Link.' },
      { id: 'c9-28', text: 'Push the final Green switch and ride the water pump to the boss door', type: 'main', subsection: 'Temple Boss: Gyorg', detail: 'Push the last Green switch to activate the final water pump. Ride it up to reach the Boss Door. Use the Boss Key to enter.' },
      { id: 'c9-29', text: 'Defeat Gyorg — Gargantuan Masked Fish', type: 'main', subsection: 'Temple Boss: Gyorg', detail: 'BOSS FIGHT: You fight on a small platform in the middle of water. N64: Shoot Gyorg with arrows when he surfaces. When stunned, jump into the water as Zora Link and use the Electric Barrier (R+B) to damage him. Get back on the platform quickly — he rams it. When he spawns small fish, kill them with Electric Barrier for hearts. 3DS: Phase 1: Shoot Gyorg with arrows when he surfaces, then hit the exposed eyeball. Phase 2 (underwater): Trick Gyorg into swallowing Spike Mines, then hit the exposed eye with Electric Barrier.' },
      { id: 'c9-30', text: 'Collect the Heart Container', type: 'heart_piece', subsection: 'Temple Boss: Gyorg', detail: 'Pick up the Heart Container after defeating Gyorg.' },
      { id: 'c9-31', text: 'Collect Gyorg\'s Remains — Boss Remains #3', type: 'main', subsection: 'Temple Boss: Gyorg', detail: 'Touch the Boss Remains. 3 of 4 Giants are now freed! The ocean currents calm.' },
    ],
  },

  // ================================================================
  // CHAPTER 10: IKANA CANYON
  // ================================================================
  {
    id: 'ikana-canyon',
    title: 'Ikana Canyon',
    icon: '💀',
    description: 'Enter the cursed land of the dead. Post-temple collection, reach Ikana Canyon, and tackle the title deed trading sequence.',
    items: [
      // 10.1 Post-Temple Collection #3
      { id: 'c10-01', text: 'Return 15 Stray Fairies to the Great Bay Great Fairy', type: 'fairy_reward', subsection: 'Post-Temple Collection #3', detail: 'The Great Fairy of Courage\'s fountain is at Zora Cape. Bring all 15 Great Bay Temple Stray Fairies. You receive Defense Enhancement — you now take half damage from all sources!' },
      { id: 'c10-02', text: 'Heart Piece #32: Win the Fisherman\'s Jumping Game', type: 'heart_piece', subsection: 'Post-Temple Collection #3', detail: 'At the Fisherman\'s hut on Great Bay Coast, take a boat to the islands. Play the jumping torch game — hop between platforms and touch all the torches within the time limit (score 20+ in 2 minutes). Heart Piece for winning.' },
      { id: 'c10-03', text: 'Heart Piece #33: Conduct the Frog Choir with Don Gero\'s Mask', type: 'heart_piece', subsection: 'Post-Temple Collection #3', detail: 'Gather all 5 frogs using Don Gero\'s Mask: 1) Mountain Village lake (spring), 2) Laundry Pool in Clock Town, 3) Southern Swamp log, 4) Woodfall Temple Gekko (beat him again), 5) Great Bay Temple Gekko. Once all 5 are at Mountain Village (in spring), wear Don Gero\'s Mask to conduct the choir. Heart Piece reward!' },
      { id: 'c10-04', text: 'Heart Piece #34: Underwater chest near Goron Village in spring', type: 'heart_piece', subsection: 'Post-Temple Collection #3', detail: 'With spring in effect at the mountains, the lake near Goron Village is thawed. Dive underwater as Zora Link to find a chest with a Heart Piece.' },

      // 10.2 Ikana Canyon
      { id: 'c10-05', text: 'Garo\'s Mask: Win the horse race against the Gorman Brothers', type: 'mask', subsection: 'Ikana Canyon', detail: 'Go to the Gorman Track (accessible via Milk Road). Race the Gorman Brothers on Epona. Use carrots wisely — don\'t use them all at once. Win the race to receive the Garo\'s Mask. This mask lets you see the spirits of Garo ninjas and is required to enter Ikana Canyon.' },
      { id: 'c10-06', text: 'Ride Epona through the Ikana Valley and reach the canyon', type: 'main', subsection: 'Ikana Canyon', detail: 'Ride Epona east from Termina Field. Jump the fences along the path. Avoid the Real Bombchus. You\'ll reach a cliff area.' },
      { id: 'c10-07', text: 'Wear the Garo\'s Mask to make the one-eyed man create a Hookshot tree', type: 'main', subsection: 'Ikana Canyon', detail: 'On a ledge, talk to the one-eyed man while wearing the Garo\'s Mask. He\'ll place a Hookshot tree on the cliff above, giving you a way up into Ikana Canyon.' },
      { id: 'c10-08', text: 'Hookshot up the cliffs to reach Ikana Canyon', type: 'main', subsection: 'Ikana Canyon', detail: 'Use the Hookshot on the tree to pull yourself up. Navigate past Nejirons (rolling explosive rocks — use Lens of Truth to distinguish from real boulders). Shoot Octoroks with Ice Arrows to create platforms. Hookshot up additional trees on the cliffs.' },
      { id: 'c10-09', text: 'Activate the Ikana Canyon Owl Statue', type: 'main', subsection: 'Ikana Canyon', detail: 'Once in Ikana Canyon proper, find and activate the Owl Statue. This is your essential warp point for this region.' },
      { id: 'c10-10', text: 'Buy a Map of Stone Tower from Tingle (20 rupees)', type: 'main', subsection: 'Ikana Canyon', detail: 'Tingle is floating in the Ikana Canyon area. Pop his balloon and buy the map.' },
      { id: 'c10-11', text: 'Heart Piece #35: Win the Spirit House fight (defeat 4 Poe Sisters)', type: 'heart_piece', subsection: 'Ikana Canyon', detail: 'The Spirit House is in Ikana Canyon. Pay 30 rupees to enter. You must defeat all four Poe Sisters (Amy, Beth, Joelle, Meg) within 3 minutes. Use the Gilded Sword and Great Fairy\'s Sword (if you have it) for quick kills. Heart Piece reward!' },

      // 10.3 Item Collection #4
      { id: 'c10-12', text: 'Title Deed trade: Swamp Title Deed + Heart Piece #36', type: 'heart_piece', subsection: 'Item Collection #4', detail: 'Start the trading sequence: Get a Moon\'s Tear from the observatory telescope, trade it for the Land Title Deed in South Clock Town. Then trade the Land Title Deed to the Business Scrub at the Southern Swamp. He gives you the Swamp Title Deed and vacates his Deku Flower. Use it to fly to a Heart Piece.' },
      { id: 'c10-13', text: 'Title Deed trade: Mountain Title Deed + Heart Piece #37', type: 'heart_piece', subsection: 'Item Collection #4', detail: 'Trade the Swamp Title Deed to the Business Scrub in Goron Village. He gives you the Mountain Title Deed and leaves his Deku Flower. Use the flower to fly to a Heart Piece.' },
      { id: 'c10-14', text: 'Title Deed trade: Ocean Title Deed + Heart Piece #38', type: 'heart_piece', subsection: 'Item Collection #4', detail: 'Trade the Mountain Title Deed to the Business Scrub at Zora Cape. He gives you the Ocean Title Deed and leaves. Use the Deku Flower to reach a Heart Piece.' },
      { id: 'c10-15', text: 'Title Deed trade: Final trade in Ikana Canyon + Heart Piece #39', type: 'heart_piece', subsection: 'Item Collection #4', detail: 'Trade the Ocean Title Deed to the Business Scrub in Ikana Canyon. He gives you 200 rupees and vacates his spot. Use the Deku Flower to reach a Heart Piece.' },
      { id: 'c10-16', text: 'Heart Piece #40: Buy from Business Scrub underground (150→100 rupees)', type: 'heart_piece', subsection: 'Item Collection #4', detail: 'In the underground passage near the Astral Observatory (Bombers\' Hideout), a Business Scrub sells a Heart Piece. He first offers it for 150 rupees — say no! He\'ll drop the price to 100 rupees.' },
      { id: 'c10-17', text: 'All-Night Mask: Buy from the Curiosity Shop (500 rupees, Final Night)', type: 'mask', subsection: 'Item Collection #4', detail: 'On the Final Night, visit the Curiosity Shop in West Clock Town. The All-Night Mask is for sale for 500 rupees. It only appears if you did NOT save the Old Lady from Sakon on Night 1 (she must have been robbed). Wearing it prevents you from falling asleep during Anju\'s Grandmother\'s stories.' },
      { id: 'c10-18', text: 'Heart Piece #41: Listen to Grandmother\'s first story (answer correctly)', type: 'heart_piece', subsection: 'Item Collection #4', detail: 'At the Stock Pot Inn, wear the All-Night Mask and talk to Anju\'s Grandmother on Day 1 or Day 2 evening. Listen to her first story all the way through (the mask keeps you awake). When asked, answer with the top choice. Heart Piece reward!' },
      { id: 'c10-19', text: 'Heart Piece #42: Listen to Grandmother\'s second story (answer "I dunno")', type: 'heart_piece', subsection: 'Item Collection #4', detail: 'Listen to Anju\'s Grandmother\'s second story (different night or reload). Wear the All-Night Mask. When asked a question, answer "I dunno." She gives you a Heart Piece.' },
      { id: 'c10-20', text: 'Circus Leader\'s Mask: Play all 4 instruments for Gorman at the Milk Bar', type: 'mask', subsection: 'Item Collection #4', detail: 'Go to the Milk Bar on Night 1 or 2 (need Romani\'s Mask to enter). Talk to Toto (the Zora band\'s manager). He asks you to help with a sound check. Play each of your 4 instruments on the stage (human Link Ocarina, Deku pipes, Goron drums, Zora guitar). Gorman, watching from the bar, is moved to tears by the Indigo-Go\'s music and gives you the Circus Leader\'s Mask.' },
    ],
  },

  // ================================================================
  // CHAPTER 11: WELL & IKANA CASTLE
  // ================================================================
  {
    id: 'well-and-ikana-castle',
    title: 'Well & Ikana Castle',
    icon: '🏰',
    description: 'Get the Gibdo Mask, navigate Beneath the Well, storm Ikana Castle, and learn the Elegy of Emptiness to climb Stone Tower.',
    items: [
      // 11.1 Gibdo Mask
      { id: 'c11-01', text: 'Play the Song of Storms in the cave north of Ikana Canyon to dispel Sharp', type: 'main', subsection: 'Gibdo Mask', detail: 'Enter the cave to the north side of Ikana Canyon. Inside, you encounter Sharp (one of the composer brothers). He\'s cursing the river to stop flowing. Play the Song of Storms — it breaks his curse and the river begins flowing again. The Music Box House nearby starts playing, driving away the Gibdos.' },
      { id: 'c11-02', text: 'Enter the Music Box House and find Pamela\'s father in the basement', type: 'main', subsection: 'Gibdo Mask', detail: 'Wait for Pamela to come outside (or use a Bomb/Blast Mask near the house to scare her out). Sneak into the house and go to the basement. Pamela\'s father is partially mummified — he\'s turning into a Gibdo.' },
      { id: 'c11-03', text: 'Gibdo Mask: Play the Song of Healing for Pamela\'s father', type: 'mask', subsection: 'Gibdo Mask', detail: 'Play the Song of Healing for the half-mummy father. He\'s healed, and the Gibdo curse is trapped in the Gibdo Mask. Wearing this mask lets you talk to Gibdos and ReDeads without them attacking you — essential for Beneath the Well.' },

      // 11.2 Beneath the Well
      { id: 'c11-04', text: 'Gather supplies: Magic Beans, Deku Nuts, Bombs, Fish, Milk, Blue Potion', type: 'main', subsection: 'Beneath the Well', detail: 'Before entering the well, you need specific items to trade with Gibdos inside: 5 Magic Beans (buy from the Bean Salesman), 10 Deku Nuts, 10 Bombs, a Fish (catch in a bottle), a bottle of Milk, and optionally a Blue Potion and a Big Poe (you\'ll capture one inside). 3DS requires fewer of each.' },
      { id: 'c11-05', text: 'Enter the Well in upper Ikana Canyon', type: 'main', subsection: 'Beneath the Well', detail: 'The well is in the upper part of Ikana Canyon. Drop in wearing the Gibdo Mask. The dungeon is a trading sequence — each Gibdo blocking a door wants a specific item.' },
      { id: 'c11-06', text: 'Navigate the Gibdo trading maze (give items to pass each Gibdo)', type: 'main', subsection: 'Beneath the Well', detail: 'Wearing the Gibdo Mask, talk to each Gibdo. They request specific items: Magic Beans, Deku Nuts, Bombs, Fish, Big Poe, Milk, etc. Give them what they want to pass. In the center room, defeat a Big Poe and capture its spirit in a bottle — a Gibdo further in wants it. The exact order: East Gibdo wants Magic Beans, then Deku Nuts, then Bombs. North wants Fish, then Big Poe, then Milk.' },
      { id: 'c11-07', text: 'Light all torches with Fire Arrows in the final room', type: 'main', subsection: 'Beneath the Well', detail: 'In the final room, use Fire Arrows to light all the torches. This opens the large chest.' },
      { id: 'c11-08', text: 'Get the Mirror Shield', type: 'upgrade', subsection: 'Beneath the Well', detail: 'Open the large chest to receive the Mirror Shield! This shield can reflect light — you\'ll use it to solve puzzles involving sun blocks and light beams. Essential for Ikana Castle and Stone Tower Temple.' },

      // 11.3 Ikana Castle
      { id: 'c11-09', text: 'Enter Ikana Castle (use Garo/Gibdo/Captain\'s Hat to pacify ReDeads)', type: 'main', subsection: 'Ikana Castle', detail: 'Ikana Castle is in the upper area of Ikana Canyon. Enter through the main gate. Inside, ReDeads are everywhere — wear the Garo\'s Mask, Gibdo Mask, or Captain\'s Hat to make them dance harmlessly instead of attacking.' },
      { id: 'c11-10', text: 'Left path: Navigate fire room and reach the north rooftop', type: 'main', subsection: 'Ikana Castle', detail: 'Take the left path through the castle. Melt a frozen eye switch with Fire Arrow. Navigate the fire platform room (time your jumps). Fight through Blue Bubbles. Reach the North Rooftop.' },
      { id: 'c11-11', text: 'Press the floor switch on the rooftop to let light into the room below', type: 'main', subsection: 'Ikana Castle', detail: 'On the north rooftop, step on the floor switch. This opens a hole in the ceiling of the room below, allowing sunlight to stream in. You\'ll need this light for the Mirror Shield puzzles.' },
      { id: 'c11-12', text: 'Heart Piece #43: Fly across flaming pillars using Deku Flowers', type: 'heart_piece', subsection: 'Ikana Castle', detail: 'From the rooftop, look for a crystal switch — shoot it to temporarily extinguish the flames on nearby pillars. Quickly use the Deku Flowers to fly across the pillars to a ledge with a Heart Piece.' },
      { id: 'c11-13', text: 'Right path: Defeat Floormaster and Wizrobe, reach the south rooftop', type: 'main', subsection: 'Ikana Castle', detail: 'Take the right path. Melt the right frozen eye switch. In the next room, use the Mirror Shield to reflect light onto the Floormaster to defeat it. Then fight a Wizrobe (same strategy as before). Reach the South Rooftop.' },
      { id: 'c11-14', text: 'Blow up the cracked roof with a Powder Keg', type: 'main', subsection: 'Ikana Castle', detail: 'On the south rooftop, place a Powder Keg on the cracked floor. The explosion opens a hole letting more light into the throne room below.' },
      { id: 'c11-15', text: 'Defeat King Igos du Ikana and his two guards', type: 'main', subsection: 'Ikana Castle', detail: 'BOSS FIGHT: First, fight the two guards. Burn the curtains with Fire Arrows to let light in. Slash the guards — when they fall, use the Mirror Shield to reflect light on their bodies to destroy them. Then fight King Igos himself. He attacks with his detachable head. Dodge his sword attacks, slash him, and when he falls, reflect light on him with the Mirror Shield. After enough hits, he yields.' },
      { id: 'c11-16', text: 'Learn the Elegy of Emptiness from King Igos du Ikana', type: 'song', subsection: 'Ikana Castle', detail: 'After defeating him, King Igos teaches you the Elegy of Emptiness. This song creates a statue clone of your current form (human, Goron, Zora, or Deku Link). The statues hold down switches — essential for climbing Stone Tower.' },

      // 11.4 Stone Tower
      { id: 'c11-17', text: 'Go to the Stone Tower entrance at the far north of Ikana Canyon', type: 'main', subsection: 'Stone Tower', detail: 'Head to the very north of Ikana Canyon. The Stone Tower entrance is a long vertical climb with many switch-activated platforms.' },
      { id: 'c11-18', text: 'Use the Elegy of Emptiness to place statues on switches and climb the tower', type: 'main', subsection: 'Stone Tower', detail: 'The tower has multiple sets of switches that need statues to hold them down. Play the Elegy of Emptiness as Human Link, Goron Link, and Zora Link to create 3 different statues. Place them on switches in the right order: typically right, left, middle. Each set of switches creates floating block bridges leading higher up.' },
      { id: 'c11-19', text: 'Activate the Stone Tower Owl Statue at the top', type: 'main', subsection: 'Stone Tower', detail: 'At the very top of Stone Tower, activate the Owl Statue. This is critical — you\'ll be warping here often during the temple.' },
      { id: 'c11-20', text: 'Enter Stone Tower Temple', type: 'main', subsection: 'Stone Tower', detail: 'Stock up: full arrows, bombs, magic. Bring a Green Potion or Chateau Romani for unlimited magic. Fill bottles with Fairies. Place the three Elegy statues on switches (right, left, middle) at the top to open the temple entrance.' },
    ],
  },

  // ================================================================
  // CHAPTER 12: STONE TOWER TEMPLE
  // ================================================================
  {
    id: 'stone-tower-temple',
    title: 'Stone Tower Temple',
    icon: '🗼',
    description: 'The final dungeon. Master light puzzles, flip the temple upside-down, collect Stray Fairies, and defeat the twin sandworms.',
    items: [
      // 12.1 Small Keys
      { id: 'c12-01', text: 'Enter the temple and shoot the golden eye switch', type: 'main', subsection: 'Small Keys', detail: 'In the entrance hall, look for a golden eye switch on the wall ahead. Shoot it with an arrow to activate it.' },
      { id: 'c12-02', text: 'Stray Fairy #1: Chest on a platform in the entrance', type: 'stray_fairy', subsection: 'Small Keys', detail: 'On a platform in the entrance room, reach a chest containing the first Stray Fairy. Use the Bunny Hood to jump further or Zora Link to reach it.' },
      { id: 'c12-03', text: 'Use Elegy of Emptiness statues to solve the floor switch puzzle', type: 'main', subsection: 'Small Keys', detail: 'In the left room, blow up the cracked wall with a bomb. Push the large block onto a switch. Use the Elegy of Emptiness to place Human and Zora statues on the small switches, and Goron on the big switch.' },
      { id: 'c12-04', text: 'Reflect light with the Mirror Shield to remove a Sun Block', type: 'main', subsection: 'Small Keys', detail: 'Bomb the dark floor patch to reach the basement. Use the Mirror Shield to catch a beam of light and reflect it onto the Sun Block (a block with a sun face). It dissolves, opening the way forward.' },
      { id: 'c12-05', text: 'Defeat 6 Armos Statues as Goron Link — get a Small Key', type: 'key_item', subsection: 'Small Keys', detail: 'As Goron Link, punch the Armos Statues to defeat them. They wake up when you get close. Goron punches are effective. After defeating all 6, a chest appears with a Small Key.' },
      { id: 'c12-06', text: 'Get the Dungeon Map', type: 'key_item', subsection: 'Small Keys', detail: 'Open the chest in this area for the Dungeon Map.' },
      { id: 'c12-07', text: 'Stray Fairy #2: Hookshot to ceiling target, open the chest', type: 'stray_fairy', subsection: 'Small Keys', detail: 'Look for a Hookshot target on the ceiling. Grapple up to reach a hidden chest with a Stray Fairy.' },
      { id: 'c12-08', text: 'Get a second Small Key from the bridge room', type: 'key_item', subsection: 'Small Keys', detail: 'In the bridge room, step on the floor switch to make a chest appear. Get the second Small Key.' },
      { id: 'c12-09', text: 'Get the Compass in the water-filled room', type: 'key_item', subsection: 'Small Keys', detail: 'In the water-filled room, defeat underwater enemies as Zora Link. Reflect light using the Mirror Shield onto mirrors and a Sun Block. The Compass is in the chest behind it.' },

      // 12.2 Light Arrows
      { id: 'c12-10', text: 'Mirror Chamber: Punch pillars as Goron to reveal light beams', type: 'main', subsection: 'Light Arrows', detail: 'In the Mirror Chamber, as Goron Link, punch the suspicious-looking pillars to break them. This reveals light beams that you can redirect with the Mirror Shield.' },
      { id: 'c12-11', text: 'Stray Fairy #3: Reflect light onto the leftmost Sun Face', type: 'stray_fairy', subsection: 'Light Arrows', detail: 'Use the Mirror Shield to reflect the light beam onto the leftmost Sun Face on the wall. This reveals a chest or alcove with a Stray Fairy.' },
      { id: 'c12-12', text: 'Stray Fairy #4: Reflect light onto a mirror, remove Sun Block, find chest', type: 'stray_fairy', subsection: 'Light Arrows', detail: 'Direct light to the right mirror, which bounces it to a Sun Block. The block dissolves. Go through and past a Nejiron to find a chest with a Stray Fairy.' },
      { id: 'c12-13', text: 'Navigate the U-shaped room as Goron (pound switches in lava)', type: 'main', subsection: 'Light Arrows', detail: 'As Goron Link, ground-pound a switch that rises from the lava. Quickly roll to the opposite end of the U-shaped room and pound the switch there before the first one resets.' },
      { id: 'c12-14', text: 'Stray Fairy #5: Use Deku Mask and air pumps to reach an alcove', type: 'stray_fairy', subsection: 'Light Arrows', detail: 'In the U-shaped room, find air pumps. As Deku Link, use the air pumps to float up to an otherwise unreachable alcove containing a Stray Fairy.' },
      { id: 'c12-15', text: 'Stray Fairy #6: Reach the large chest using air pumps', type: 'stray_fairy', subsection: 'Light Arrows', detail: 'Use the Deku Mask and air pumps at the end of the room to float to a large chest. Inside is a Stray Fairy.' },
      { id: 'c12-16', text: 'Defeat the Garo Master mini-boss', type: 'main', subsection: 'Light Arrows', detail: 'MINI-BOSS: The Garo Master is a fast ninja. He charges and slashes with two swords. Strafe to dodge his charges, then slash him when he misses. He also throws fireballs — block with your shield. After enough hits, he goes down and self-destructs with a bomb (back away!).' },
      { id: 'c12-17', text: 'Get the Light Arrows', type: 'upgrade', subsection: 'Light Arrows', detail: 'After defeating the Garo Master, open the chest for the Light Arrows! These are extremely powerful — they deal massive damage, can flip Stone Tower upside-down by hitting the red emblems, and destroy certain special enemies. Stone Tower Temple\'s dungeon item.' },

      // 12.3 Flipping the Temple
      { id: 'c12-18', text: 'Defeat the Eyegore in the bridge room', type: 'main', subsection: 'Flipping the Temple', detail: 'In the top of the bridge room, face an Eyegore (large stone golem). Taunt it to make it approach, dodge its attack, then shoot its yellow eye with an arrow when it opens. Repeat.' },
      { id: 'c12-19', text: 'Stray Fairy #7: Chest after defeating the Eyegore', type: 'stray_fairy', subsection: 'Flipping the Temple', detail: 'After the Eyegore falls, a chest appears with a Stray Fairy.' },
      { id: 'c12-20', text: 'Exit the temple and shoot the red emblem with a Light Arrow to flip it', type: 'main', subsection: 'Flipping the Temple', detail: 'Leave the temple and look for the red emblem (3DS: above the entrance, N64: step on a switch first to reveal it). Shoot it with a Light Arrow. The ENTIRE Stone Tower flips upside-down! The temple is now inverted — gravity is reversed.' },
      { id: 'c12-21', text: 'Enter the inverted temple', type: 'main', subsection: 'Flipping the Temple', detail: 'Re-enter the temple. Everything is upside-down — former ceilings are now floors. Water flows differently. New areas are accessible. Stand on the Majora\'s Mask symbol and shoot the Sun Face above with a Light Arrow to proceed.' },
      { id: 'c12-22', text: 'Stray Fairy #8: Open chest created by Light Arrow on Sun Face', type: 'stray_fairy', subsection: 'Flipping the Temple', detail: 'After shooting the Sun Face with a Light Arrow in the inverted entrance, a chest appears. Open it for a Stray Fairy.' },
      { id: 'c12-23', text: 'Stray Fairy #9: Shoot Sun Block with Light Arrow, melt frozen eye', type: 'stray_fairy', subsection: 'Flipping the Temple', detail: 'In the Air Pump Room (inverted), shoot the Sun Block with a Light Arrow. Then shoot the frozen eye switch with a Fire Arrow. A chest appears with a Stray Fairy.' },
      { id: 'c12-24', text: 'Get a Small Key (kill Hiploop, step on floor switch)', type: 'key_item', subsection: 'Flipping the Temple', detail: 'Kill the Masked Hiploop (use Hookshot to remove its mask, then attack). Step on the floor switch that appears to get a Small Key from the chest.' },
      { id: 'c12-25', text: 'Stray Fairy #10: Place statue on floor switch, fly to chest', type: 'stray_fairy', subsection: 'Flipping the Temple', detail: 'Use the Elegy of Emptiness to place a statue on the eastern floor switch. This extinguishes flames blocking a northern platform. Fly there as Deku Link and open the chest for a Stray Fairy.' },
      { id: 'c12-26', text: 'Solve the flipping lava and block puzzles', type: 'main', subsection: 'Flipping the Temple', detail: 'Two tricky puzzles: Lava puzzle — shoot the red emblem to flip the room, walk across as Goron, shoot again to flip back. Block puzzle — flip the room repeatedly to move a Majora block from one corner to the opposite corner. Takes multiple flips.' },
      { id: 'c12-27', text: 'Defeat the Wizrobe and get Stray Fairy #11', type: 'stray_fairy', subsection: 'Flipping the Temple', detail: 'Fight a Wizrobe again (4th time in the game). Watch the mini-map for the red dot showing where he\'ll appear. Shoot or Goron punch him. A chest with a Stray Fairy appears after.' },

      // 12.4 Boss Key
      { id: 'c12-28', text: 'Navigate past Death Armos (flip them with Light Arrows)', type: 'main', subsection: 'Boss Key', detail: 'Death Armos are invincible stone statues. Shoot them with Light Arrows to flip them over. While flipped, they self-destruct. Or wear the Stone Mask to avoid them entirely. Use Deku Flowers to cross the platforms in this area.' },
      { id: 'c12-29', text: 'Get another Small Key using Elegy of Emptiness', type: 'key_item', subsection: 'Boss Key', detail: 'Step on a floor switch, then play the Elegy of Emptiness to leave a statue holding it. This opens a chest with a Small Key.' },
      { id: 'c12-30', text: 'Defeat Gomess mini-boss — get the Boss Key', type: 'key_item', subsection: 'Boss Key', detail: 'MINI-BOSS: Gomess surrounds himself with bats. Use the Zora Electric Barrier to kill the bats for supplies. Z-target Gomess, wait for him to swing his scythe, then shoot a Light Arrow to expose the glowing weak point in his chest. Slash the sphere repeatedly. Repeat until defeated. The Boss Key is in the chest.' },

      // 12.5 Remaining Fairies & Giant's Mask
      { id: 'c12-31', text: 'Stray Fairy #12: Entrance room lower area (right-side up)', type: 'stray_fairy', subsection: 'Remaining Fairies', detail: 'Flip the temple back to right-side up. In the entrance room, check the lower area for a chest with this Stray Fairy.' },
      { id: 'c12-32', text: 'Stray Fairy #13: Bridge room — hit crystal switch, remove Sun Block', type: 'stray_fairy', subsection: 'Remaining Fairies', detail: 'In the bridge room, hit the crystal switch (you may have triggered this earlier). Shoot the Sun Block with a Light Arrow. Open the revealed chest for a Stray Fairy.' },
      { id: 'c12-33', text: 'Stray Fairy #14: Water-filled chamber — chest on southern platform', type: 'stray_fairy', subsection: 'Remaining Fairies', detail: 'In the water-filled room (right-side up), the upside-down chest you created earlier is now accessible on a southern platform. Open it for a Stray Fairy.' },
      { id: 'c12-34', text: 'Stray Fairy #15: Hiploop bridge area — drop down to the chest', type: 'stray_fairy', subsection: 'Remaining Fairies', detail: 'In the inverted temple Hiploop bridge area, drop down to a lower platform. A chest with the final Stray Fairy is there. You now have all 15!' },

      // 12.6 Temple Boss
      { id: 'c12-35', text: 'Return to the inverted temple and reach the Boss Door', type: 'main', subsection: 'Temple Boss: Twinmold', detail: 'Flip the temple back to inverted. Navigate through the Spiked Log Room (hit Crystal Switch, Hookshot to platforms). Make your way to the Boss Door.' },
      { id: 'c12-36', text: 'Defeat the Eyegore in the bridge room (inverted)', type: 'main', subsection: 'Temple Boss: Twinmold', detail: 'This Eyegore shoots energy beams. Same strategy — taunt, dodge, shoot its eye when it opens. After defeating it: N64: Get the Giant\'s Mask from the chest. 3DS: You\'ll get it during the boss fight.' },
      { id: 'c12-37', text: 'Giant\'s Mask: Get from the Eyegore room (N64) or during boss (3DS)', type: 'mask', subsection: 'Temple Boss: Twinmold', detail: 'N64: The Giant\'s Mask is in a chest after the Eyegore. 3DS: You receive it during the boss fight when Blue Twinmold is defeated. The mask transforms you into a GIANT — massive Link who can punch and grab enemies.' },
      { id: 'c12-38', text: 'Defeat Twinmold — Giant Masked Insect', type: 'main', subsection: 'Temple Boss: Twinmold', detail: 'BOSS FIGHT: Two giant sandworms! N64: Wear the Giant\'s Mask immediately. Chase Twinmold around the sandy arena and slash their heads or tails. Stay away from the sand edges (instant death). Magic drains while giant — break ruins for magic refills. 3DS Phase 1 (Blue): Shoot its 3 belly eyes with arrows, then hit the massive eye with Light Arrows. Second round has 5 belly eyes. Blue drops the Giant\'s Mask. Phase 2 (Red): Wear Giant\'s Mask, punch Red Twinmold. Dodge fireballs and underground charges. When it falls, grab its tail and smash it into the ground. 4 smashes total to win.' },
      { id: 'c12-39', text: 'Collect the Heart Container', type: 'heart_piece', subsection: 'Temple Boss: Twinmold', detail: 'Pick up the Heart Container from defeating Twinmold.' },
      { id: 'c12-40', text: 'Collect Twinmold\'s Remains — Boss Remains #4', type: 'main', subsection: 'Temple Boss: Twinmold', detail: 'Touch the Boss Remains. All four Giants are now freed! You have all 4 Boss Remains and can now challenge the final boss.' },
    ],
  },

  // ================================================================
  // CHAPTER 13: THE MOON
  // ================================================================
  {
    id: 'the-moon',
    title: 'The Moon',
    icon: '🌕',
    description: 'Final preparations, the epic Anju & Kafei quest, the Secret Shrine, the Moon dungeons, and the final battle against Majora.',
    items: [
      // 13.1 Post-Temple Collection #4
      { id: 'c13-01', text: 'Return 15 Stray Fairies to the Stone Tower Great Fairy', type: 'fairy_reward', subsection: 'Post-Temple Collection', detail: 'The Great Fairy of Kindness is in Ikana Canyon (between the Stone Tower entrance and Ikana Castle). Bring all 15 Stone Tower Temple Stray Fairies. She gives you the Great Fairy\'s Sword — the most powerful weapon in the game!' },

      // 13.2 Anju & Kafei Quest
      { id: 'c13-02', text: 'Day 1, 10 AM: Get Kafei\'s Mask from Madame Aroma at Mayor\'s Residence', type: 'mask', subsection: 'Anju & Kafei Quest', detail: 'This is the longest side quest in the game. Requirements: Epona\'s Song, Hookshot, Garo\'s Mask, Romani\'s Mask. IMPORTANT: Do NOT save the Old Lady on Night 1 for this quest. Go to the Mayor\'s Residence between 10 AM and 12 PM on Day 1. Talk to Madame Aroma and she gives you Kafei\'s Mask to help find her missing son.' },
      { id: 'c13-03', text: 'Day 1, 2:10-8 PM: Talk to Anju wearing Kafei\'s Mask — meet at kitchen at night', type: 'side_quest', subsection: 'Anju & Kafei Quest', detail: 'Between 2:10 PM and 8 PM on Day 1, talk to Anju at the Stock Pot Inn front desk while wearing Kafei\'s Mask. She asks you to meet her in the kitchen at night.' },
      { id: 'c13-04', text: 'Night 1, 12-6 AM: Meet Anju in the kitchen, get Letter to Kafei', type: 'key_item', subsection: 'Anju & Kafei Quest', detail: 'Between midnight and 6 AM, go to the Stock Pot Inn kitchen. Anju gives you the Letter to Kafei. DO NOT give this to the hand in the toilet! DO NOT stop Sakon on this cycle!' },
      { id: 'c13-05', text: 'Mail the Letter to Kafei (put in any mailbox)', type: 'main', subsection: 'Anju & Kafei Quest', detail: 'Drop the Letter to Kafei in any postbox around Clock Town. The Postman will deliver it.' },
      { id: 'c13-06', text: 'Day 2, 3:10-3:50 PM: Go to Laundry Pool, sneak into Kafei\'s hideout', type: 'main', subsection: 'Anju & Kafei Quest', detail: 'Between 3:10 and 3:50 PM on Day 2, go to the Laundry Pool. Wait for the Postman to deliver the letter to the back door. After the Postman leaves, sneak inside.' },
      { id: 'c13-07', text: 'Day 2, 4:10-6 PM: Talk to Kafei, get Pendant of Memories', type: 'key_item', subsection: 'Anju & Kafei Quest', detail: 'Inside Kafei\'s hideout, talk to Kafei between 4:10 and 6 PM. He tells you his story — Skull Kid turned him into a child, and Sakon stole his Sun\'s Mask. He gives you the Pendant of Memories to give to Anju.' },
      { id: 'c13-08', text: 'Give the Pendant to Anju at the Stock Pot Inn', type: 'main', subsection: 'Anju & Kafei Quest', detail: 'Between Day 2 10 AM and Day 3 7 PM, give the Pendant of Memories to Anju at the Stock Pot Inn. This convinces her to wait for Kafei instead of fleeing the falling moon.' },
      { id: 'c13-09', text: 'Day 3, 1 PM: Visit Kafei\'s hideout, get Keaton Mask + Letter to Mama', type: 'key_item', subsection: 'Anju & Kafei Quest', detail: 'On Day 3 (1 PM-6 PM on N64, 6 AM-6 PM on 3DS), visit Kafei\'s hideout again. The Man from the Curiosity Shop is there instead. He gives you the Keaton Mask and the Letter to Mama (Special Delivery Letter).' },
      { id: 'c13-10', text: 'Night 3: Go to Ikana Canyon, hide with Kafei near Sakon\'s hideout', type: 'main', subsection: 'Anju & Kafei Quest', detail: 'Just after 6 PM on Night 3, go to lower Ikana Canyon. Find Kafei hiding behind a rock near Sakon\'s Hideout entrance. Wait with him. Sakon arrives and enters — you follow him in.' },
      { id: 'c13-11', text: 'Complete Sakon\'s Hideout puzzle (play as both Link and Kafei)', type: 'main', subsection: 'Anju & Kafei Quest', detail: 'Inside Sakon\'s Hideout, you alternate between Link and Kafei. The room has conveyor belts moving the Sun\'s Mask toward a trap. Link fights enemies (Deku Babas, Wolfos) while Kafei solves block puzzles. AVOID RED SWITCHES (they speed up the conveyor). Step on blue and yellow switches only. If Kafei reaches the mask before it falls into the trap, he recovers the Sun\'s Mask!' },
      { id: 'c13-12', text: 'CHOICE A: Give Letter to Mama to Madame Aroma (Milk Bar, Night 3) — Bottle', type: 'bottle', subsection: 'Anju & Kafei Quest', detail: 'ONE of two choices (need separate cycles for both): At the Milk Bar on Night 3, find Madame Aroma. Give her the Letter to Mama while wearing Kafei\'s Mask. She gives you a Bottle with Chateau Romani.' },
      { id: 'c13-13', text: 'CHOICE B: Give letter to the Postman (Night 3) — Postman\'s Hat', type: 'mask', subsection: 'Anju & Kafei Quest', detail: 'The OTHER choice (do on a separate cycle): Give the Special Delivery Letter to the Postman. Follow him — he delivers it to Madame Aroma, who releases him from his duties. He gives you the Postman\'s Hat and leaves town.' },
      { id: 'c13-14', text: 'Night 3, 4:30 AM: Watch Anju & Kafei reunite — get Couple\'s Mask', type: 'mask', subsection: 'Anju & Kafei Quest', detail: 'At 4:30 AM on the Final Night, go to the Employee Room in the Stock Pot Inn. Anju and Kafei reunite. They combine the Sun\'s Mask and Moon\'s Mask to create the Couple\'s Mask, which they give to you. Quickly play the Song of Time to save!' },
      { id: 'c13-15', text: 'Heart Piece #44: Keaton Quiz (slash bushes wearing Keaton Mask)', type: 'heart_piece', subsection: 'Anju & Kafei Quest', detail: 'Wear the Keaton Mask and slash the circles of moving bushes (found in North Clock Town, Milk Road, or Mountain Village in spring). A Keaton fox appears and asks you quiz questions about the game. Answer all correctly for a Heart Piece.' },
      { id: 'c13-16', text: 'Heart Piece #45: Check any postbox wearing the Postman\'s Hat', type: 'heart_piece', subsection: 'Anju & Kafei Quest', detail: 'Wear the Postman\'s Hat and check any mailbox in Clock Town. A letter falls out with a Heart Piece.' },
      { id: 'c13-17', text: 'Heart Piece #46: Wear Couple\'s Mask at the Mayor\'s meeting', type: 'heart_piece', subsection: 'Anju & Kafei Quest', detail: 'Go to the Mayor\'s Residence during the argument between Mutoh (carpenter) and Captain Viscen (guard). Wear the Couple\'s Mask. Both sides are moved by the symbol of love and end the argument. The Mayor gives you a Heart Piece.' },

      // 13.3 Secret Shrine
      { id: 'c13-18', text: 'Heart Piece #47: Deposit 5000 total rupees at the bank', type: 'heart_piece', subsection: 'Secret Shrine', detail: 'Deposit a total of 5000 rupees at the Clock Town Bank across multiple cycles. When you reach 5000, the banker gives you a Heart Piece. Farm rupees with Light Arrows — kill Guays in Ikana Canyon or Blue Bubbles in Termina Field for 50-rupee drops.' },
      { id: 'c13-19', text: 'Heart Piece #48: Complete the Secret Shrine (4 mini-bosses)', type: 'heart_piece', subsection: 'Secret Shrine', detail: 'In Ikana Canyon, swim upstream in the river as Zora Link. Find a hidden door. Shoot a Light Arrow at the Sun Crest above it to open it. Inside are 4 rooms, each with a mini-boss: 1) Dinolfos (Goron Pound one-hit), 2) Wizrobe (arrows when he appears), 3) Wart (Deku Nuts to remove bubbles, arrows for eye), 4) Garo Master (strafe and slash). Each gives 100 rupees. After all 4, the large central chest opens with a Heart Piece.' },

      // 13.4 The Moon
      { id: 'c13-20', text: 'Final prep: Buy Chateau Romani from the Milk Bar (Night 3)', type: 'main', subsection: 'The Moon', detail: 'On the Final Night, go to the Milk Bar (need Romani\'s Mask). Buy Chateau Romani for 200 rupees. Drinking it gives you UNLIMITED MAGIC for the rest of the 3-day cycle. Incredibly useful for the final battles.' },
      { id: 'c13-21', text: 'Fill all bottles with Fairies', type: 'main', subsection: 'The Moon', detail: 'Fill every empty bottle with a fairy. The best spot is the jars at Zora Cape — leave and re-enter to respawn them. Fairies auto-revive you when you die.' },
      { id: 'c13-22', text: 'Climb the Clock Tower at midnight on the Final Night', type: 'main', subsection: 'The Moon', detail: 'At midnight on Night 3, the Clock Tower doors open. Climb the ramp to the top.' },
      { id: 'c13-23', text: 'Play the Oath to Order to summon the four Giants', type: 'main', subsection: 'The Moon', detail: 'On top of the Clock Tower, play the Oath to Order. The four Giants appear and catch the falling Moon, holding it up! But Majora\'s Mask separates from Skull Kid and flies into the Moon. The Moon\'s mouth opens — you follow it inside.' },
      { id: 'c13-24', text: 'Enter the Moon', type: 'main', subsection: 'The Moon', detail: 'Inside the Moon is a peaceful grassy field with a single large tree. Five children are playing — four wear Boss Remains masks, one wears Majora\'s Mask. Each Boss Remains child gives you a mini-dungeon. You need ALL 20 non-transformation masks to get the Fierce Deity\'s Mask.' },

      // Moon Dungeons
      { id: 'c13-25', text: 'Odolwa Child Dungeon: Give 1 mask, complete Deku flower challenge', type: 'main', subsection: 'Moon Dungeons', detail: 'Give 1 mask to the Odolwa Child. The dungeon is a Deku Flower platforming challenge. As Deku Link, fly between spinning platforms and flowers. Navigate to the exit. Give 1 more mask to the child at the end.' },
      { id: 'c13-26', text: 'Heart Piece #49: Found in the Odolwa Child Dungeon', type: 'heart_piece', subsection: 'Moon Dungeons', detail: 'During the Deku flower challenge, navigate to the Yellow Flower and fly to the northeast corner. The Heart Piece is on a platform there.' },
      { id: 'c13-27', text: 'Goht Child Dungeon: Give 2 masks, complete Goron rolling path', type: 'main', subsection: 'Moon Dungeons', detail: 'Give 2 masks to the Goht Child. The dungeon is a Goron rolling obstacle course. Roll between empty chests (they auto-turn you at 90 degrees). Walk narrow platforms carefully. Reach the end to find the child. Give 2 more masks.' },
      { id: 'c13-28', text: 'Heart Piece #50: Found in the Goht Child Dungeon', type: 'heart_piece', subsection: 'Moon Dungeons', detail: 'At the end of the Goron rolling path, before talking to the child, the Heart Piece is on a platform.' },
      { id: 'c13-29', text: 'Gyorg Child Dungeon: Give 3 masks, complete Zora swimming maze', type: 'main', subsection: 'Moon Dungeons', detail: 'Give 3 masks to the Gyorg Child. The dungeon is an underwater Zora maze with branching paths. Navigate through the tubes and rooms. N64 route to Heart Piece: Left, Left, Right, Left. 3DS route: Left, Right, Middle. Give 3 more masks at the end.' },
      { id: 'c13-30', text: 'Heart Piece #51: Found in the Gyorg Child Dungeon', type: 'heart_piece', subsection: 'Moon Dungeons', detail: 'Follow the correct path through the underwater maze to find this Heart Piece before reaching the child.' },
      { id: 'c13-31', text: 'Twinmold Child Dungeon: Give 4 masks, complete combat gauntlet', type: 'main', subsection: 'Moon Dungeons', detail: 'Give 4 masks to the Twinmold Child. The dungeon is a combat gauntlet with 3 mini-bosses: 1) Dinolfos (Goron Pound or Great Fairy\'s Sword), 2) Garo Master (strafe and slash), 3) Iron Knuckle (stab repeatedly with Great Fairy\'s Sword). Get Bombchus from the Iron Knuckle chest. Use them to blow up cracked walls and ceilings. Give 4 more masks at the end.' },
      { id: 'c13-32', text: 'Heart Piece #52: Found in the Twinmold Child Dungeon', type: 'heart_piece', subsection: 'Moon Dungeons', detail: 'After the Iron Knuckle, use Bombchus to blow up a cracked wall. The Heart Piece is in the next room. You now have all 52 Heart Pieces!' },

      // Fierce Deity's Mask
      { id: 'c13-33', text: 'Fierce Deity\'s Mask: Talk to the Majora child (need all 20 masks)', type: 'mask', subsection: 'Moon Dungeons', detail: 'After giving away all 20 non-transformation masks to the four children (1+1 + 2+2 + 3+3 + 4+4 = 20 masks), talk to the lonely child sitting under the tree wearing Majora\'s Mask. He asks "Let\'s play good guys against bad guys" and gives you the Fierce Deity\'s Mask — the most powerful mask in the game! Wearing it transforms you into a god-like warrior who fires sword beams.' },

      // 13.5 Final Boss
      { id: 'c13-34', text: 'Defeat Majora\'s Mask (Phase 1)', type: 'main', subsection: 'Final Boss: Majora', detail: 'PHASE 1 — Majora\'s Mask: The mask flies around the room. It\'s invulnerable from the front. Wait for it to do its sawing charge attack — dodge and use a Spin Attack to stun it, then slash. Or shoot arrows at its back. The Boss Remains come off the walls and attack — kill them with Light Arrows. The Fierce Deity\'s Mask makes this fight trivial — just Z-target and fire sword beams.' },
      { id: 'c13-35', text: 'Defeat Majora\'s Incarnation (Phase 2)', type: 'main', subsection: 'Final Boss: Majora', detail: 'PHASE 2 — Majora\'s Incarnation: An erratic, dancing form that runs at supersonic speed. Hold still and Shield when it shoots energy blasts. Walk toward it while defending, shoot with an arrow when close to stun it, then slash while it\'s down. This is the easiest phase. Fierce Deity sword beams destroy it quickly.' },
      { id: 'c13-36', text: 'Defeat Majora\'s Wrath (Phase 3)', type: 'main', subsection: 'Final Boss: Majora', detail: 'PHASE 3 — Majora\'s Wrath: The hardest form. It has long whip-like tentacles and devastating spinning attacks. Keep your distance. Use Light Arrows to stun it, run in and slash repeatedly. Later it spawns spiked spinning tops that chase you. Run along the walls, defend, find openings. Light Arrow + slash combo is your bread and butter. With the Fierce Deity\'s Mask, just keep firing sword beams while strafing.' },
      { id: 'c13-37', text: 'Watch the ending — congratulations on 100% completion!', type: 'main', subsection: 'Final Boss: Majora', detail: 'After defeating Majora, the Moon disappears in a rainbow across the land. Skull Kid reconciles with the Giants and asks to be Link\'s friend. The Happy Mask Salesman takes the depowered Majora\'s Mask and departs. Link rides off into the forest. The credits show the outcomes for all characters you helped (black/empty for unfinished quests). Notable: The Deku Butler is shown crying at the twisted tree from the game\'s beginning — his son\'s spirit was in the Deku Mask all along.' },
    ],
  },
];
