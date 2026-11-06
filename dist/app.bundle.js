/* Auto-generated bundle from /src, /locales, and /world.svg — works on file:// and http:// */
(function () {
  "use strict";
  globalThis.__LAST_BREATH_EN__ = {
  "app": {
    "title": "LAST BREATH",
    "subtitle": "FIELD TERMINAL // REV 0.1"
  },
  "menu": {
    "kicker": "EMERGENCY BROADCAST // SURVIVAL TERMINAL",
    "lore": "Grid collapse +14 months. Shortwave relays are failing across every continent. Ration your calories, chart passable corridors, fortify an outpost, and keep breathing.",
    "active_transmission": "ACTIVE SURVIVOR SIGNAL DETECTED",
    "charted_sectors": "{count} sectors charted",
    "new_expedition_title": "CONFIGURE NEW EXPEDITION",
    "no_save_title": "SURVIVOR RECON PROTOCOL",
    "no_save_desc": "No active survivor signals detected in this sector. Register your identity, customize your background, and begin your post-apocalyptic journey.",
    "select_archetype": "1. SELECT SURVIVOR BACKGROUND",
    "select_sector": "2. SELECT STARTING SECTOR",
    "footer_hint": "ALL PROGRESS AUTOSAVED TO LOCAL TERMINAL",
    "action": {
      "continue": "RESUME TRANSMISSION",
      "start_new": "DEPLOY INTO SECTOR",
      "open_menu": "MAIN MENU",
      "new_game": "START NEW EXPEDITION →",
      "create_character": "CREATE SURVIVOR EXPEDITION →",
      "back_to_menu": "← MAIN MENU"
    },
    "archetype": {
      "scavenger": {
        "name": "Recon Scavenger",
        "desc": "Starts with a courier duffel, lensatic compass, extra rations, and Lv.1 Recon & Scavenging."
      },
      "medic": {
        "name": "Field Medic",
        "desc": "Starts with a trauma kit, antibiotics, chemical poncho, and Lv.1 Field Medicine."
      },
      "engineer": {
        "name": "Salvage Engineer",
        "desc": "Starts with a forged wrecking bar, steel plates, wiring, and Lv.1 Salvage Engineering."
      },
      "veteran": {
        "name": "Cordon Veteran",
        "desc": "Starts with a weighted machete, riding jacket, military rations, and Lv.1 Close Quarters."
      }
    }
  },
  "character": {
    "create_title": "SURVIVOR REGISTRATION // NEW EXPEDITION",
    "create_subtitle": "EMERGENCY PROTOCOL ACTIVE. CONFIGURE OPERATIVE IDENTITY, BIOMETRICS, AND DEPLOYMENT SECTOR.",
    "default_name": "Survivor",
    "callsign_kicker": "CALLSIGN // ID",
    "steps": {
      "identity": "1. IDENTITY & TRAITS",
      "archetype": "2. BACKGROUND & KIT",
      "sector": "3. DROP SECTOR",
      "summary": "4. DOSSIER & DEPLOY"
    },
    "step_subtitle": {
      "1": "Step 1/4: Enter operative callsign, age, blood type, and primary survival disposition.",
      "2": "Step 2/4: Select pre-collapse professional background and starting equipment kit.",
      "3": "Step 3/4: Choose the insertion sector to commence survival operations.",
      "4": "Step 4/4: Review survivor field dossier and initiate deployment."
    },
    "label": {
      "identity": "1. OPERATIVE IDENTITY & BIOMETRICS",
      "name": "OPERATIVE CALLSIGN / NAME",
      "age": "AGE",
      "blood": "BLOOD TYPE",
      "trait": "SURVIVOR TRAIT",
      "archetype": "2. SURVIVOR BACKGROUND & LOADOUT",
      "sector": "3. INITIAL DROP SECTOR",
      "dossier_preview": "OPERATIVE FIELD DOSSIER // REAL-TIME PREVIEW"
    },
    "placeholder": {
      "name": "Enter operative callsign..."
    },
    "action": {
      "random_name": "⚄ RANDOM",
      "deploy": "DEPLOY INTO SECTOR // COMMENCE RUN",
      "back": "← BACK TO SIGNAL",
      "back_to_menu": "← MAIN MENU",
      "next": "NEXT STEP →",
      "prev": "← PREVIOUS STEP"
    },
    "age_bracket": {
      "young": "Youth (18–25) // High Stamina & Rapid Recovery",
      "prime": "Prime (26–40) // Balanced Resilience & Composure",
      "veteran": "Veteran (41–65) // Survival Instincts & Resourcefulness"
    }
  },
  "trait": {
    "stoic": {
      "name": "Stoic",
      "desc": "High pain threshold; reduces panic and vitality loss from severe physical trauma."
    },
    "night_owl": {
      "name": "Night Owl",
      "desc": "Heightened sensory clarity during darkness; avoids nighttime disorientation."
    },
    "fast_metabolism": {
      "name": "Fast Metabolism",
      "desc": "+25% faster natural health regeneration when resting in safe structures."
    },
    "hoarder": {
      "name": "Hoarder",
      "desc": "Master of efficient pack storage; permanently expands carrying capacity by +2.5 kg."
    },
    "iron_stomach": {
      "name": "Iron Stomach",
      "desc": "Robust gastrointestinal immunity; halves infection risk from stale food and untreated water."
    }
  },
  "loot": {
    "title": {
      "scavenge_found": "RECON & SALVAGE // SUPPLIES FOUND",
      "scavenge_empty": "RECON & SALVAGE // SECTOR EMPTY",
      "combat_victory": "THREAT ELIMINATED // SPOILS OF WAR",
      "combat_scavenge": "MID-COMBAT SALVAGE // CACHE ACQUIRED",
      "survey_result": "SECTOR RECONNAISSANCE // COMPLETE",
      "rest_result": "FIELD REST // STATUS REPORT"
    },
    "desc": {
      "scavenge_found": "Scavenging in {location} yielded the following resources. Select which items to pack into your inventory:",
      "scavenge_empty": "Thorough search in {location} found nothing of immediate use. The local scrap deposits may be depleted.",
      "combat_victory": "{enemy} was neutralized (+{xp} XP). The following items were recovered from the hostile:",
      "combat_scavenge": "You swiftly scavenged {enemy} while dodging. Found:",
      "survey": "High-ground observation successfully charted {count} new neighboring corridors and waypoints.",
      "survey_empty": "Observation complete. No new uncharted sectors could be spotted from this vantage.",
      "rest": "Rested securely for {hours} hours. Vital signs stabilized and energy reserves replenished."
    },
    "load_status": "Pack Capacity: {current} / {max} kg (+{selected} kg selected)",
    "overload_warning": "⚠ WARNING: Selected items exceed your pack carrying limit!",
    "no_items": "No collectible items discovered.",
    "action": {
      "take_all": "TAKE ALL",
      "take_selected": "PACK SELECTED ({count})",
      "leave_all": "LEAVE ON GROUND",
      "close": "ACKNOWLEDGE // CONTINUE"
    }
  },
  "hud": {
    "day": "DAY {day}",
    "day_short": "D{day}",
    "daylight": "DAYLIGHT",
    "night": "NIGHTFALL",
    "new_run": "NEW EXPEDITION",
    "confirm_reset": "Abandon current survivor and start a new expedition?",
    "tab": {
      "map": "SECTOR MAP",
      "map_short": "MAP",
      "inventory": "PACK & GEAR",
      "inventory_short": "PACK",
      "craft": "CRAFT & BASE",
      "craft_short": "CRAFT",
      "status": "BIOSCAN",
      "status_short": "BIO",
      "log": "FIELD LOG",
      "log_short": "LOG"
    },
    "pill": {
      "health": "HP",
      "satiety": "KCAL",
      "hydration": "H2O",
      "energy": "STAM"
    }
  },
  "status": {
    "section": {
      "vitals": "BIOMETRIC VITALS",
      "conditions": "ACTIVE TRAUMA & PATHOGENS",
      "readout": "COMBAT & RIG TELEMETRY",
      "skills": "SURVIVAL PROFICIENCIES"
    },
    "vital": {
      "health": "INTEGRITY",
      "satiety": "CALORIES",
      "hydration": "HYDRATION",
      "energy": "STAMINA"
    },
    "band": {
      "fine": "NOMINAL",
      "low": "DEGRADED",
      "critical": "CRITICAL",
      "depleted": "FAILING"
    },
    "no_ailments": "No acute bleeding, systemic infection, or musculoskeletal trauma detected.",
    "readout": {
      "weapon": "Equipped Sidearm / Melee",
      "combat_rating": "Tactical Rating",
      "armor": "Ballistic / Slash Rating",
      "scavenge_bonus": "Search Efficiency",
      "travel_bonus": "Overland Pace"
    }
  },
  "ailment": {
    "bleeding": {
      "name": "Laceration Hemorrhage",
      "desc": "Steady blood loss each hour. Apply bandages or a field kit before shock sets in.",
      "severity": "GRADE {severity}"
    },
    "infection": {
      "name": "Systemic Sepsis",
      "desc": "Bacterial load climbing. Early stage can be fought off if well-fed; advanced stages require antiseptic or antibiotics."
    },
    "sprain": {
      "name": "Torn Ligament",
      "desc": "Slows overland travel significantly until splinted or rested.",
      "remaining": "{hours}h rem"
    }
  },
  "skill": {
    "level_short": "LVL {level}",
    "max_level": "MAX",
    "foraging": {
      "name": "Recon & Scavenging",
      "desc": "Increases salvage yield from ruins and improves evasion across collapsed terrain."
    },
    "medical": {
      "name": "Field Medicine",
      "desc": "Amplifies healing and treatment potency; raises natural wound clotting odds."
    },
    "engineering": {
      "name": "Salvage Engineering",
      "desc": "Improves vehicle stripping, jury-rigging, and mechanical hazard resolution."
    },
    "marksmanship": {
      "name": "Close Quarters & Arms",
      "desc": "Raises tactical combat rating in hostile encounters."
    }
  },
  "inventory": {
    "weight": "LOAD",
    "slots": "SLOTS",
    "overloaded_notice": "OVERBURDENED — Overland travel slowed by 30% and stamina drain increased by 35%.",
    "unarmed": "Unarmed",
    "no_ammo": "Dry / No Rounds",
    "slot_empty": "— EMPTY —",
    "empty": "No items in this category.",
    "ground_empty": "Nothing left on the ground at this sector.",
    "section": {
      "equipped": "WORN RIG & LOADOUT",
      "pack": "CARRIED INVENTORY",
      "ground": "LOCAL CACHE"
    },
    "slot": {
      "weapon": "PRIMARY",
      "body": "TORSO",
      "pack": "PACK"
    },
    "category": {
      "all": "ALL",
      "supplies": "RATIONS",
      "medical": "MEDICAL",
      "weapons": "ARMS",
      "scrap": "SALVAGE",
      "gear": "RIGGING"
    },
    "action": {
      "use": "USE",
      "equip": "EQUIP",
      "unequip": "STOW",
      "drop": "DROP",
      "take": "TAKE"
    }
  },
  "map": {
    "current_sector": "CURRENT ANCHOR",
    "selected_sector": "TARGET SECTOR",
    "no_direct_corridor": "No direct route from current anchor",
    "coords": "WGS84 GRID",
    "threat_level": "HOSTILITY INDEX",
    "scavenge_yield": "SECTOR RESERVES",
    "find_chance": "hit",
    "risk": "RISK",
    "visited_badge": "CHARTED",
    "section": {
      "routes": "CONNECTED CORRIDORS"
    },
    "mode": {
      "road": "OVERLAND",
      "sea": "MARITIME"
    },
    "action": {
      "scavenge": "SCAVENGE SECTOR (1–1.5h)",
      "patrol": "ENGAGE HOSTILES (15m)",
      "survey": "RECON PERIMETER (45m)",
      "rest_hours": "BIVOUAC {hours}h",
      "travel": "MARCH"
    },
    "control": {
      "zoom_in": "Zoom in",
      "zoom_out": "Zoom out",
      "center": "Center on survivor",
      "world": "World view"
    }
  },
  "biome": {
    "urban": "METROPOLIS RUINS",
    "suburban": "OUTER SPRAWL",
    "industrial": "HEAVY INDUSTRY",
    "rural": "HINTERLAND",
    "coastal": "LITTORAL PORT",
    "forest": "TIMBERLAND",
    "wasteland": "ARID SCORCH",
    "arctic": "PERMAFROST",
    "military": "CORDON ZONE"
  },
  "location": {
    "istanbul": "Istanbul",
    "ankara": "Ankara",
    "athens": "Athens",
    "sofia": "Sofia",
    "bucharest": "Bucharest",
    "kyiv": "Kyiv",
    "vienna": "Vienna",
    "berlin": "Berlin",
    "paris": "Paris",
    "london": "London",
    "madrid": "Madrid",
    "lisbon": "Lisbon",
    "reykjavik": "Reykjavik",
    "moscow": "Moscow",
    "tbilisi": "Tbilisi",
    "tehran": "Tehran",
    "beirut": "Beirut",
    "tangier": "Tangier",
    "cairo": "Cairo",
    "khartoum": "Khartoum",
    "addis_ababa": "Addis Ababa",
    "nairobi": "Nairobi",
    "timbuktu": "Timbuktu",
    "dakar": "Dakar",
    "lagos": "Lagos",
    "kinshasa": "Kinshasa",
    "johannesburg": "Johannesburg",
    "cape_town": "Cape Town",
    "karachi": "Karachi",
    "delhi": "Delhi",
    "mumbai": "Mumbai",
    "almaty": "Almaty",
    "novosibirsk": "Novosibirsk",
    "ulaanbaatar": "Ulaanbaatar",
    "beijing": "Beijing",
    "shanghai": "Shanghai",
    "seoul": "Seoul",
    "tokyo": "Tokyo",
    "vladivostok": "Vladivostok",
    "anadyr": "Anadyr",
    "bangkok": "Bangkok",
    "kuala_lumpur": "Kuala Lumpur",
    "jakarta": "Jakarta",
    "darwin": "Darwin",
    "alice_springs": "Alice Springs",
    "sydney": "Sydney",
    "auckland": "Auckland",
    "nome": "Nome",
    "anchorage": "Anchorage",
    "vancouver": "Vancouver",
    "san_francisco": "San Francisco",
    "los_angeles": "Los Angeles",
    "denver": "Denver",
    "chicago": "Chicago",
    "new_york": "New York",
    "montreal": "Montreal",
    "st_johns": "St. John's",
    "nuuk": "Nuuk",
    "houston": "Houston",
    "mexico_city": "Mexico City",
    "panama_city": "Panama City",
    "bogota": "Bogotá",
    "lima": "Lima",
    "manaus": "Manaus",
    "recife": "Recife",
    "sao_paulo": "São Paulo",
    "buenos_aires": "Buenos Aires",
    "santiago": "Santiago",
    "ushuaia": "Ushuaia"
  },
  "item": {
    "canned_beans": {
      "name": "Tin of Navy Beans",
      "desc": "Dented steel can of salted beans in brine. Heavy, dependable calories."
    },
    "jerky": {
      "name": "Smoked Venison Strips",
      "desc": "Dry cured meat. Keeps forever, leaves your mouth parched."
    },
    "mre": {
      "name": "Sealed Field Ration (MRE)",
      "desc": "Military-grade retort pouch with flameless heater and electrolyte pack."
    },
    "energy_bar": {
      "name": "Compressed Oat Bar",
      "desc": "Dense glucose and fat brick salvaged from an emergency kit."
    },
    "bottled_water": {
      "name": "Sealed Water Bottle",
      "desc": "Half-liter of clean, pre-collapse municipal water."
    },
    "dirty_water": {
      "name": "Brackish Runoff",
      "desc": "Cloudy water collected from cisterns. Quenches thirst at pathogen risk."
    },
    "instant_coffee": {
      "name": "Freeze-Dried Coffee Packet",
      "desc": "Chewed dry or stirred into cold water to stave off exhaustion."
    },
    "bandage": {
      "name": "Sterile Gauze Roll",
      "desc": "Tightly woven pressure dressing that staunches active bleeding."
    },
    "antiseptic": {
      "name": "Iodine Tincture",
      "desc": "Stinging topical wash that scrubs down developing infections."
    },
    "antibiotics": {
      "name": "Broad-Spectrum Capsules",
      "desc": "Blister pack of ciprofloxacin. Purges systemic bacterial sepsis."
    },
    "painkillers": {
      "name": "Analgesic Tablets",
      "desc": "Numbs musculoskeletal pain and restores short-term stamina."
    },
    "first_aid_kit": {
      "name": "Trauma Field Kit",
      "desc": "Hemostatic gauze, sutures, and staples. Restores integrity and halts bleeding."
    },
    "kitchen_knife": {
      "name": "Full-Tang Chef Knife",
      "desc": "Carbon-steel blade wrapped in cord. Better than bare knuckles."
    },
    "crowbar": {
      "name": "Forged Wrecking Bar",
      "desc": "Pries locked trunks (+12% search chance) and cracks skulls."
    },
    "machete": {
      "name": "Weighted Brush Machete",
      "desc": "Long agricultural blade suited for close quarters."
    },
    "fire_axe": {
      "name": "Municipal Fire Axe",
      "desc": "Fiberglass-handled breaching axe (+8% search chance, high impact)."
    },
    "hunting_rifle": {
      "name": "Bolt-Action .308 Rifle",
      "desc": "Long-range rifle. Requires .308 cartridges to fire at full rating."
    },
    "rifle_rounds": {
      "name": ".308 Brass Cartridges",
      "desc": "Boxed centerfire ammunition for bolt-action rifles."
    },
    "scrap_metal": {
      "name": "Sheared Steel Plate",
      "desc": "Salvaged structural metal for fortifications and toolsmithing."
    },
    "copper_wire": {
      "name": "Spool of Copper Wire",
      "desc": "Stripped windings used in traps, radios, and repairs."
    },
    "electronics": {
      "name": "Salvaged Circuitry",
      "desc": "Intact relays, capacitors, and logic boards."
    },
    "cloth_rags": {
      "name": "Torn Canvas Strips",
      "desc": "Cleanable fabric scraps for bindings and filters."
    },
    "duct_tape": {
      "name": "Industrial Cloth Tape",
      "desc": "Reinforced adhesive roll that holds the post-collapse world together."
    },
    "duffel_bag": {
      "name": "Canvas Courier Duffel",
      "desc": "Slung over one shoulder (+6 kg capacity, +3 slots)."
    },
    "hiking_pack": {
      "name": "Internal-Frame Trekker Pack",
      "desc": "Distributes weight across the hips (+12 kg capacity, +5 slots)."
    },
    "military_rucksack": {
      "name": "MOLLE Patrol Rucksack",
      "desc": "Heavy expedition rig (+18 kg capacity, +8 slots)."
    },
    "leather_jacket": {
      "name": "Abrasion Riding Jacket",
      "desc": "Thick cowhide that turns teeth and rusty shards (+1 armor)."
    },
    "hazmat_poncho": {
      "name": "Polymer Chemical Poncho",
      "desc": "Heat-sealed seams shed caustic fallout and acid rain."
    },
    "riot_vest": {
      "name": "Plated Riot Harness",
      "desc": "Polycarbonate trauma plates over ballistic weave (+3 armor)."
    },
    "flashlight": {
      "name": "Dynamo Angle Torch",
      "desc": "Hand-cranked beam that cuts night travel risk and aids indoor searches (+4%)."
    },
    "compass": {
      "name": "Liquid Lensatic Compass",
      "desc": "Keeps true bearing across dead highways (+8% overland pace)."
    }
  },
  "encounter": {
    "kicker": "FIELD CONTACT",
    "check": {
      "combat": "Combat",
      "gear": "Hazmat"
    },
    "abandoned_car": {
      "title": "Jackknifed Convoy Sedan",
      "text": "A dust-choked sedan sits wedged against a jersey barrier. The trunk latch is sprung and the wiring harness hangs below the dash.",
      "choice": {
        "search": "Ransack the glovebox and trunk (30m)",
        "strip": "Strip alternator and copper harness",
        "leave": "Keep moving along the shoulder"
      },
      "outcome": {
        "search": "You pry open the trunk and rake through scattered emergency supplies.",
        "strip_success": "You cleanly sever the harness and pull intact electronics from the dash.",
        "strip_failure": "A rusted bracket snaps under tension and slices across your forearm.",
        "leave": "You bypass the wreck without breaking stride."
      }
    },
    "feral_dogs": {
      "title": "Starved Pack on the Ridge",
      "text": "Three rib-thin hounds fan out across the rubble ahead, hackles raised and jaws flecked with foam.",
      "choice": {
        "stand": "Hold ground and drive them off",
        "feed": "Toss a ration to break their focus",
        "flee": "Scramble over the masonry wall"
      },
      "outcome": {
        "stand_success": "A decisive strike drops the lead hound; the pack scatters into the drainage ditch.",
        "stand_failure": "Teeth sink into your calf before you wrench free and club them back.",
        "feed": "The pack snaps over the thrown food while you slip two blocks downwind.",
        "flee_success": "You vault the rebar wall and lose them through a collapsed courtyard.",
        "flee_failure": "Loose brick gives way under your boot; the pack mauls your leg as you pull free."
      }
    },
    "raider_toll": {
      "title": "Barricade Checkpoint",
      "text": "Armed scavengers step out from behind a burned bus, demanding rations for safe passage through the interchange.",
      "choice": {
        "pay": "Hand over two rations of food or water",
        "fight": "Break through the barricade by force",
        "barter": "Offer to repair their jammed generator"
      },
      "outcome": {
        "pay": "They weigh your pouches, wave you through the wire, and watch until you clear the block.",
        "fight_success": "You drop the point man and strip his rig before the others retreat into the smoke.",
        "fight_failure": "Buckshot and shrapnel tear into your side as you fight your way clear.",
        "barter_success": "You clean the fouled injector; impressed, they toss you two oat bars and wave you on.",
        "barter_failure": "Your fix backfires in a shower of sparks. They beat you with rifle butts before shoving you out."
      }
    },
    "collapsed_overpass": {
      "title": "Pancaked Highway Span",
      "text": "Concrete slabs block the main corridor, leaving a treacherous tangle of rebar or a long detour around the basin.",
      "choice": {
        "climb": "Pick a route straight over the slabs",
        "detour": "Circle around the industrial perimeter (2–3h)"
      },
      "outcome": {
        "climb_success": "You test each slab and crest the rubble without losing time.",
        "climb_failure": "A slab shifts underfoot, wrenching your ankle as you slide down the scree.",
        "detour": "You spend hours skirting flooded underpasses before rejoining the route."
      }
    },
    "acid_rain": {
      "title": "Sulfa Squall on the Horizon",
      "text": "Yellow-gray clouds bruise the sky and the first oily drops hiss against rusted sheet metal.",
      "choice": {
        "shelter": "Wait out the squall under a concrete culvert",
        "push_on": "Pull up your collar and march through it"
      },
      "outcome": {
        "shelter": "You huddle beneath concrete until the caustic runoff subsides.",
        "push_on_success": "Your sealed poncho sheds the acidic downpour without a burn.",
        "push_on_failure": "Caustic rain soaks through your sleeves, blistering exposed skin."
      }
    },
    "supply_cache": {
      "title": "Tripwire Civil-Defense Locker",
      "text": "Behind a false basement wall sits a stenciled relief crate — wired to a makeshift spring gun.",
      "choice": {
        "open": "Disarm the wire and crack the crate",
        "leave": "Back away slowly and leave it"
      },
      "outcome": {
        "open_success": "You crimp the tension wire and lift the lid on untouched emergency stock.",
        "open_failure": "The wire slips — a rusted bolt fires across your thigh before the latch gives.",
        "leave": "You mark the cellar on your mental map and leave the trap untouched."
      }
    },
    "rusted_debris": {
      "title": "Shifting Steel Joists",
      "text": "A promising storeroom lies pinned beneath a groaned web of corroded roof trusses.",
      "choice": {
        "careful": "Shore the beam andworm through carefully",
        "force": "Wrench the sheet metal clear by brute force"
      },
      "outcome": {
        "careful_success": "You slip beneath the truss and clear the passage without disturbing the load.",
        "careful_failure": "Jagged flashing drops from the ceiling, raking across your shoulder.",
        "force": "You tear free a slab of steel plate at the cost of scraped knuckles."
      }
    },
    "storm_at_sea": {
      "title": "Cross-Swell Squall",
      "text": "Black swells hammer the hull and freezing spray floods the bilge halfway across the strait.",
      "choice": {
        "ride_out": "Lash the tiller and ride out the squall",
        "turn_back": "Come about and run back for the departure port"
      },
      "outcome": {
        "ride_out_success": "You keep the bow quartering the waves until the squall breaks.",
        "ride_out_failure": "A breaking crest slams the gunwale, washing gear overboard and bruising your ribs.",
        "turn_back": "You fight the rudder hard over and limp back to shore."
      }
    },
    "lone_survivor": {
      "title": "Feverish Courier by the Tracks",
      "text": "A gaunt courier sits propped against a signal box, clutching an empty canteen and a medic pouch.",
      "choice": {
        "share": "Spare a ration or bottle of water",
        "ignore": "Give a wide berth and keep walking"
      },
      "outcome": {
        "share": "Grateful, they press a handful of medical supplies into your palm before parting ways.",
        "ignore": "You keep your hand on your weapon and pass without a word."
      }
    },
    "night_prowler": {
      "title": "Footsteps Outside the Bivouac",
      "text": "Gravel crunches in the dark just beyond your shelter doorway; someone is testing the latch.",
      "choice": {
        "confront": "Lunging into the doorway with weapon raised",
        "hide": "Kill your light and slip into the crawlspace"
      },
      "outcome": {
        "confront_success": "You catch the intruder off-balance and drive them scrambling into the alley.",
        "confront_failure": "A blade flashes in the dark, catching your ribs before the prowler bolts.",
        "hide_success": "The prowler sweeps the empty room and moves on empty-handed.",
        "hide_failure": "You stay hidden, but they snatch a pouch from the floor on their way out."
      }
    },
    "radio_static": {
      "title": "Shortwave Carrier Burst",
      "text": "A solarrepeater atop a utility pole clicks to life, broadcasting automated weather beacons from distant sectors.",
      "choice": {
        "listen": "Log the coordinates from the carrier loop (30m)",
        "ignore": "Save the daylight and move on"
      },
      "outcome": {
        "listen": "You copy down grid bearings for distant transit hubs before the carrier fades.",
        "ignore": "You leave the repeater clicking into the wind."
      }
    }
  },
  "log": {
    "boot": {
      "awakened": "Cold static clears. You check your straps in the ruins of {location}."
    },
    "vital": {
      "health": {
        "low": "Your vision narrows; blood and bruising slow every movement.",
        "critical": "Integrity critical — another hard hit will put you under.",
        "depleted": "Your body gives out."
      },
      "satiety": {
        "low": "Hunger gnaws at your stomach.",
        "critical": "Severe caloric deficit; muscle tremor setting in.",
        "depleted": "Starvation is consuming your tissue."
      },
      "hydration": {
        "low": "Your tongue is dry and cracked.",
        "critical": "Severe dehydration — dizziness and kidney ache.",
        "depleted": "Organ failure from dehydration imminent."
      },
      "energy": {
        "low": "Fatigue weighs down your boots.",
        "critical": "Stamina nearly spent; every step drags.",
        "depleted": "Complete exhaustion — you are stumbling on sheer reflex."
      }
    },
    "ailment": {
      "bleeding": {
        "gained": "Fresh laceration — you are bleeding.",
        "worse": "Hemorrhage worsens as the wound tears open.",
        "stopped": "The bleeding finally clots on its own.",
        "cured": "Dressing applied; hemorrhage staunched.",
        "treated": "Pressure dressing slows the bleeding."
      },
      "infection": {
        "gained": "Contamination detected — early wound infection.",
        "worse": "Bacterial load spikes inside the wound.",
        "symptomatic": "Fever and chills take hold as sepsis turns symptomatic.",
        "severe": "Delirium and septic shock setting in!",
        "cleared": "Your immune system clears the lingering infection.",
        "cured": "Antibiotics purge the systemic infection.",
        "treated": "Antiseptic wash drives the infection back."
      },
      "sprain": {
        "gained": "Ligament wrenched — overland pace reduced.",
        "worse": "The sprained joint swells further.",
        "healed": "The sprained ligament has stabilized.",
        "cured": "Joint pain subsides completely.",
        "treated": "Analgesics dull the sprain."
      }
    },
    "effect": {
      "vital_up": "{vital} +{amount}%.",
      "vital_down": "{vital} -{amount}%.",
      "healed": "Restored +{amount}% physical integrity.",
      "damaged": "Sustained -{amount}% trauma.",
      "time_lost": "Spent {minutes} minutes."
    },
    "skill": {
      "level_up": "{skill} proficiency advanced to level {level}."
    },
    "inventory": {
      "gained": {
        "one": "Recovered {item} (×{count}).",
        "other": "Recovered {item} (×{count})."
      },
      "left_behind": "Pack full — left {item} (×{count}) on the ground.",
      "used": "Used {item}.",
      "dropped": "Dropped {item} (×{count}).",
      "picked_up": "Stowed {item} (×{count}).",
      "equipped": "Equipped {item}.",
      "unequipped": "Stowed {item} into pack.",
      "lost": "Lost {item} (×{count}).",
      "nothing_to_lose": "Nothing in your pack could be taken."
    },
    "travel": {
      "departed": "Departed {origin} toward {destination} ({km} km).",
      "arrived": "Reached {destination}.",
      "discovered": "Charted new sector: {destination}.",
      "aborted": "Retreated back to {origin}."
    },
    "scavenge": {
      "started": "Combing the ruins of {location} for salvage...",
      "empty": "Picked through collapsed structures in {location} and came up empty."
    },
    "survey": {
      "revealed": {
        "one": "Recon identified {count} unmapped corridor.",
        "other": "Recon identified {count} unmapped corridors."
      },
      "signal_node": "Radio beacon plotted: {location}.",
      "nothing": "Perimeters around {location} are already fully charted."
    },
    "rest": {
      "started": "Barricaded a corner in {location} for {hours}h of rest.",
      "finished": "Rose after {hours}h of uninterrupted rest."
    },
    "encounter": {
      "triggered": "CONTACT: {title}"
    },
    "crafting": {
      "crafted": "Fabricated {item} (×{count})."
    },
    "base": {
      "established": "Established fortified outpost at {location}.",
      "upgraded": "Constructed {structure} (Level {level}).",
      "repaired": "Reinforced outpost perimeter (+25% integrity).",
      "stored": "Locked {item} (×{count}) in outpost cache.",
      "water_collected": "Rainwater collector filtered ×{count} clean water into outpost storage."
    }
  },
  "enemy": {
    "feral_hound": {
      "name": "Rabid Feral Hound",
      "desc": "Gaunt, scarred pack predator lunging through the rubble with bared fangs."
    },
    "raider_scout": {
      "name": "Highway Scavenger Raider",
      "desc": "Outrider armed with a notched machete and welded scrap armor."
    },
    "plague_stalker": {
      "name": "Fevered Zone Stalker",
      "desc": "Delirious carrier coated in septic grime, lashing out blindly."
    },
    "cordon_deserter": {
      "name": "Rogue Cordon Deserter",
      "desc": "Former perimeter trooper in battered ballistic rig carrying a service weapon."
    }
  },
  "combat": {
    "kicker": "TACTICAL ENGAGEMENT",
    "round": "ROUND {round}",
    "enemy_hp": "HOSTILE INTEGRITY",
    "scavenge_tag": "1× per fight",
    "enemy_appeared": "HOSTILE CONTACT: {name} closes distance!",
    "player_hit": "Struck {name} for {dmg} damage.",
    "player_missed": "Your strike against {name} missed.",
    "enemy_hit": "{name} struck you for {dmg} trauma!",
    "enemy_missed": "Evaded attack from {name}.",
    "victory": "Neutralized {name}.",
    "fled_success": "Broke contact and slipped away from {name}.",
    "fled_failed": "Failed to break contact with {name}!",
    "action": {
      "strike": "Tactical Strike",
      "aimed": "Precision / Aimed Burst",
      "scavenge": "Scavenge Mid-Fight",
      "flee": "Break Contact & Flee"
    }
  },
  "crafting": {
    "station": "WORKBENCH",
    "section": {
      "recipes": "FABRICATION & SCHEMATICS"
    },
    "tier": {
      "0": "HANDCRAFT",
      "1": "WORKBENCH I",
      "2": "MACHINIST II"
    },
    "action": {
      "craft": "CRAFT"
    }
  },
  "base": {
    "location_label": "ESTABLISHED OUTPOST",
    "integrity": "PERIMETER",
    "none_established": "No permanent outpost established. Claim your current sector to build workstations and storage.",
    "storage_empty": "Outpost storage locker is empty.",
    "section": {
      "outpost": "OUTPOST INFRASTRUCTURE",
      "storage": "OUTPOST STOCKPILE"
    },
    "action": {
      "establish": "CLAIM OUTPOST AT {location}",
      "relocate": "RELOCATE OUTPOST TO {location}",
      "upgrade": "BUILD / UPGRADE",
      "repair": "REINFORCE PERIMETER (1× Steel Plate)"
    }
  },
  "structure": {
    "workbench": {
      "name": "Field Workbench",
      "desc": "Unlocks Tier I and Tier II fabrication schematics at this outpost."
    },
    "rain_catcher": {
      "name": "Atmospheric Condenser & Tarp",
      "desc": "Passively filters clean water into the outpost stockpile over time."
    },
    "barricade": {
      "name": "Rebar & Sheet-Metal Barricade",
      "desc": "Fortifies the shelter perimeter against night prowlers and raids."
    },
    "med_cot": {
      "name": "Sterile Field Cot",
      "desc": "Accelerates physical integrity recovery while resting at the outpost."
    }
  },
  "reject": {
    "dead": "Signal lost — survivor is deceased.",
    "in_encounter": "Resolve the active field contact first.",
    "in_combat": "Resolve the active combat engagement first.",
    "no_combat": "No active combat engagement.",
    "already_scavenged": "Already scavenged during this engagement.",
    "workbench_tier": "Requires a higher-tier Workbench at your current outpost.",
    "missing_materials": "Insufficient components in your pack.",
    "already_outpost": "Outpost is already established at this sector.",
    "not_at_outpost": "You must be stationed at your outpost for this action.",
    "max_level": "Structure is already at maximum level.",
    "integrity_full": "Outpost perimeter is already at 100% integrity.",
    "not_usable": "That item cannot be consumed or applied directly.",
    "not_equippable": "That item cannot be equipped.",
    "missing_item": "Item is no longer in your pack.",
    "nothing_to_treat": "No active condition requires that treatment right now.",
    "no_room_to_swap": "Not enough pack space to swap equipment.",
    "pack_too_small": "Remove items from your pack before unequipping it.",
    "slot_empty": "Nothing is equipped in that slot.",
    "no_room": "No free inventory slots remaining.",
    "too_heavy": "Exceeds maximum carry weight limit.",
    "unknown_node": "Unknown sector coordinate.",
    "already_here": "Already stationed at this sector.",
    "no_route": "No passable corridor connects directly to that sector.",
    "invalid_duration": "Invalid rest duration.",
    "no_encounter": "No active encounter.",
    "invalid_choice": "Invalid tactical option."
  },
  "death": {
    "title": "SIGNAL TERMINATED",
    "cause": {
      "starvation": "Succumbed to prolonged starvation.",
      "dehydration": "Collapsed from systemic dehydration.",
      "exhaustion": "Heart failed under total exhaustion.",
      "bleeding": "Exsanguinated from untreated lacerations.",
      "infection": "Consumed by untreated septic shock.",
      "acid": "Chemical burns from caustic fallout proved fatal.",
      "drowning": "Swallowed by storm swells in open water.",
      "wounds": "Fell to cumulative trauma in the field."
    },
    "summary": "Survived {days} days across {nodes} charted sectors. Final transmission logged at {location}."
  }
};
  globalThis.__LAST_BREATH_TR__ = {
  "app": {
    "title": "LAST BREATH",
    "subtitle": "SAHA TERMİNALİ // REV 0.1"
  },
  "menu": {
    "kicker": "ACİL DURUM YAYINI // HAYATTA KALMA TERMİNALİ",
    "lore": "Şebeke çöküşü +14 ay. Kısa dalga röleleri tüm kıtalarda susuyor. Kalorini idareli kullan, geçilebilir koridorları haritalandır, bir sığınak kur ve nefes almaya devam et.",
    "active_transmission": "AKTİF HAYATTA KALAN SİNYALİ BULUNDU",
    "charted_sectors": "{count} bölge haritalandı",
    "new_expedition_title": "YENİ SEFER YAPILANDIRMASI",
    "no_save_title": "YENİ HAYATTA KALAN PROTOKOLÜ",
    "no_save_desc": "Sektörde kayıtlı aktif hayatta kalan sinyali bulunamadı. Kıyamet sonrası harabelerde hayatta kalma mücadelenizi başlatmak için yeni bir sefer kaydı oluşturun.",
    "select_archetype": "1. UZMANLIK GEÇMİŞİNİ SEÇ",
    "select_sector": "2. BAŞLANGIÇ SEKTÖRÜNÜ SEÇ",
    "footer_hint": "TÜM İLERLEME YEREL TERMİNALE OTOMATİK KAYDEDİLİR",
    "action": {
      "continue": "KAYITLI SEFERE DEVAM ET",
      "start_new": "SEKTÖRE İNİŞ YAP",
      "open_menu": "ANA MENÜ",
      "new_game": "YENİ SEFERE BAŞLA →",
      "create_character": "YENİ HAYATTA KALAN OLUŞTUR →",
      "back_to_menu": "← ANA MENÜ"
    },
    "archetype": {
      "scavenger": {
        "name": "Keşifçi / İzci",
        "desc": "Kurye çantası, pusula, ekstra erzak ve Sv.1 Keşif & Yağmalama uzmanlığı ile başlar."
      },
      "medic": {
        "name": "Saha Sıhhiyecisi",
        "desc": "Travma kiti, antibiyotik, kimyasal panço ve Sv.1 Saha Tıbbı uzmanlığı ile başlar."
      },
      "engineer": {
        "name": "Hurda Mühendisi",
        "desc": "Levye, çelik plaka, bakır tel ve Sv.1 Hurda Mühendisliği uzmanlığı ile başlar."
      },
      "veteran": {
        "name": "Kordon Muhafızı",
        "desc": "Pala, korumalı deri ceket, askeri kumanya (MRE) ve Sv.1 Yakın Çatışma ile başlar."
      }
    }
  },
  "character": {
    "create_title": "HAYATTA KALAN KAYDI // YENİ SEFER",
    "create_subtitle": "ACİL DURUM PROTOKOLÜ AKTİF. SAHA GÖREVLİSİ KİMLİĞİNİ, BİYOMETRİK VERİLERİNİ VE İNİŞ SEKTÖRÜNÜ BELİRLEYİN.",
    "default_name": "Kazazede",
    "callsign_kicker": "ÇAĞRI KODU // KİMLİK",
    "steps": {
      "identity": "1. KİMLİK & MİZAÇ",
      "archetype": "2. GEÇMİŞ & KİT",
      "sector": "3. İNİŞ SEKTÖRÜ",
      "summary": "4. ÖZET & BAŞLAT"
    },
    "step_subtitle": {
      "1": "Adım 1/4: Çağrı kodunuzu, yaşınızı, kan grubunuzu ve hayatta kalma mizacınızı belirleyin.",
      "2": "Adım 2/4: Kıyamet öncesi uzmanlık geçmişinizi ve başlangıç ekipman kitinizi seçin.",
      "3": "Adım 3/4: Hayatta kalma operasyonuna başlayacağınız ilk iniş sektörünü seçin.",
      "4": "Adım 4/4: Saha kimlik dosyanızı gözden geçirin ve seferi başlatın."
    },
    "label": {
      "identity": "1. SAHA GÖREVLİSİ KİMLİĞİ VE BİYOMETRİ",
      "name": "ÇAĞRI KODU / İSİM",
      "age": "YAŞ",
      "blood": "KAN GRUBU",
      "trait": "HAYATTA KALMA MİZACI",
      "archetype": "2. UZMANLIK GEÇMİŞİ VE EKİPMAN",
      "sector": "3. BAŞLANGIÇ İNİŞ SEKTÖRÜ",
      "dossier_preview": "SAHA KİMLİK DOSYASI // CANLI ÖNİZLEME"
    },
    "placeholder": {
      "name": "İsim veya çağrı kodu girin..."
    },
    "action": {
      "random_name": "⚄ RASTGELE",
      "deploy": "SEKTÖRE İNİŞ YAP // SEFERİ BAŞLAT",
      "back": "← SİNYALE GERİ DÖN",
      "back_to_menu": "← ANA MENÜ",
      "next": "SONRAKİ ADIM →",
      "prev": "← ÖNCEKİ ADIM"
    },
    "age_bracket": {
      "young": "Genç (18–25) // Yüksek Kondisyon & Hızlı Enerji Yenilenmesi",
      "prime": "Olgun (26–40) // Dengeli Metanet & Çeviklik",
      "veteran": "Kıdemli (41–65) // Hayatta Kalma Tecrübesi & Ekstra Toplama Bilgisi"
    }
  },
  "trait": {
    "stoic": {
      "name": "Soğukkanlı",
      "desc": "Acı ve travmaya yüksek direnç; ağır fiziksel hasar ve kanamalarda panik ve enerji kaybını düşürür."
    },
    "night_owl": {
      "name": "Gece Kuşu",
      "desc": "Gece operasyonlarında yüksek dikkat ve duyusal avantaj; karanlıkta keşif yaparken yön şaşırmayı önler."
    },
    "fast_metabolism": {
      "name": "Hızlı İyileşme",
      "desc": "Güvenli sığınaklarda dinlenirken ve uyurken %25 daha hızlı doğal sağlık yenilenmesi."
    },
    "hoarder": {
      "name": "İstifçi",
      "desc": "Çanta istifleme ve dengeleme ustası; azami taşıma kapasitesini kalıcı olarak +2.5 kg artırır."
    },
    "iron_stomach": {
      "name": "Demir Mide",
      "desc": "Sağlam sindirim bağışıklığı; bozuk gıdalardan ve arıtılmamış sulardan enfeksiyon kapma riskini %50 düşürür."
    }
  },
  "loot": {
    "title": {
      "scavenge_found": "KEŞİF & ARAMA // KAYNAKLAR BULUNDU",
      "scavenge_empty": "KEŞİF & ARAMA // SEKTÖR BOŞ",
      "combat_victory": "TEHDİT ETKİSİZ // SAVAŞ GANİMETİ",
      "combat_scavenge": "ÇATIŞMA İÇİ YAĞMALAMA // HIZLI BULGU",
      "survey_result": "BÖLGE GÖZLEMİ // TAMAMLANDI",
      "rest_result": "SAHA İSTİRAHATİ // DURUM RAPORU"
    },
    "desc": {
      "scavenge_found": "{location} sektöründeki arama sonucunda aşağıdaki kaynaklar bulundu. Çantanıza almak istediklerinizi seçin:",
      "scavenge_empty": "{location} sektöründe yapılan detaylı aramada işe yarar bir şey bulunamadı. Bölgedeki hurda ve erzak tükenmiş olabilir.",
      "combat_victory": "{enemy} etkisiz hale getirildi (+{xp} XP). Hedefin üzerinden aşağıdaki ganimetler ele geçirildi:",
      "combat_scavenge": "Çatışma sırasında düşmanın dikkatinden kaçarak şu ganimet ele geçirildi:",
      "survey": "Yüksek bir gözetleme noktasından yapılan taramada {count} yeni komşu koridor ve sektör haritalandı.",
      "survey_empty": "Gözlem tamamlandı. Bu noktadan haritalanmamış yeni bir sektör tespit edilemedi.",
      "rest": "{hours} saat güvenli şekilde dinlenildi. Yaşamsal fonksiyonlar dengelendi ve enerji toplandı."
    },
    "load_status": "Çanta Yükü: {current} / {max} kg (+{selected} kg seçildi)",
    "overload_warning": "⚠ UYARI: Seçilen eşyalar azami çanta taşıma kapasitenizi aşıyor!",
    "no_items": "Toplanabilecek bir eşya bulunamadı.",
    "action": {
      "take_all": "TÜMÜNÜ AL",
      "take_selected": "SEÇİLENLERİ AL ({count})",
      "leave_all": "YERDE BIRAK",
      "close": "ANLADIM // DEVAM ET"
    }
  },
  "hud": {
    "day": "GÜN {day}",
    "day_short": "G{day}",
    "daylight": "GÜNDÜZ",
    "night": "GECE",
    "new_run": "YENİ SEFER",
    "confirm_reset": "Mevcut seferi bırakıp ana menüden yeni bir sefer başlatmak istiyor musunuz?",
    "tab": {
      "map": "HARİTA",
      "map_short": "HARİTA",
      "inventory": "ÇANTA & EKİPMAN",
      "inventory_short": "ÇANTA",
      "craft": "ÜRETİM & ÜS",
      "craft_short": "ÜRETİM",
      "status": "BİYOTARAMA",
      "status_short": "BİYO",
      "log": "SAHA KAYDI",
      "log_short": "GÜNLÜK"
    },
    "pill": {
      "health": "CAN",
      "satiety": "KAL",
      "hydration": "SU",
      "energy": "DAY"
    }
  },
  "status": {
    "section": {
      "vitals": "BİYOMETRİK DEĞERLER",
      "conditions": "AKTİF TRAVMA & ENFEKSİYON",
      "readout": "ÇATIŞMA & DONANIM TELEMETRİSİ",
      "skills": "HAYATTA KALMA UZMANLIKLARI"
    },
    "vital": {
      "health": "BÜTÜNLÜK",
      "satiety": "KALORİ",
      "hydration": "SU SEVİYESİ",
      "energy": "DAYANIKLILIK"
    },
    "band": {
      "fine": "NORMAL",
      "low": "DÜŞÜK",
      "critical": "KRİTİK",
      "depleted": "TÜKENDİ"
    },
    "no_ailments": "Aktif kanama, sistemik enfeksiyon veya kas-iskelet travması tespit edilmedi.",
    "readout": {
      "weapon": "Kuşanılan Silah",
      "combat_rating": "Taktik Çatışma Gücü",
      "armor": "Zırh / Koruma Değeri",
      "scavenge_bonus": "Arama Verimliliği",
      "travel_bonus": "Yürüyüş Hızı"
    }
  },
  "ailment": {
    "bleeding": {
      "name": "Açık Kanama",
      "desc": "Her saat düzenli kan kaybı. Şok başlamadan önce bandaj veya ilk yardım kiti uygulayın.",
      "severity": "DERECE {severity}"
    },
    "infection": {
      "name": "Sistemik Enfeksiyon",
      "desc": "Bakteri yükü artıyor. İleri aşamalarda antiseptik veya antibiyotik gerekir."
    },
    "sprain": {
      "name": "Bağ Burkulması",
      "desc": "İyileşene kadar bölgeler arası yürüyüş hızını düşürür.",
      "remaining": "{hours}sa kaldı"
    }
  },
  "skill": {
    "level_short": "SV {level}",
    "max_level": "MAKS",
    "foraging": {
      "name": "Keşif & Yağmalama",
      "desc": "Yıkıntılardan bulunan ganimet miktarını ve tehlikelerden kaçınma şansını artırır."
    },
    "medical": {
      "name": "Saha Tıbbı",
      "desc": "Tedavi ve iyileşme etkisini güçlendirir; doğal kan pıhtılaşma şansını artırır."
    },
    "engineering": {
      "name": "Hurda Mühendisliği",
      "desc": "Araç sökümü, tamirat ve mekanik engelleri aşma başarısını yükseltir."
    },
    "marksmanship": {
      "name": "Yakın Çatışma & Silahlar",
      "desc": "Düşman karşılaşmalarında taktik çatışma gücünü artırır."
    }
  },
  "inventory": {
    "weight": "YÜK",
    "slots": "SLOT",
    "overloaded_notice": "AŞIRI YÜK — Seyahat %30 yavaşlar ve dayanıklılık tüketimi %35 artar.",
    "unarmed": "Silahsız",
    "no_ammo": "Mermisiz",
    "slot_empty": "— BOŞ —",
    "empty": "Bu kategoride eşya yok.",
    "ground_empty": "Bu bölgede yerde bırakılmış eşya yok.",
    "section": {
      "equipped": "KUŞANILAN EKİPMAN",
      "pack": "SIRT ÇANTASI",
      "ground": "YERDEKİ ZULA"
    },
    "slot": {
      "weapon": "SİLAH",
      "body": "GÖVDE",
      "pack": "ÇANTA"
    },
    "category": {
      "all": "TÜMÜ",
      "supplies": "ERZAK",
      "medical": "TIBBİ",
      "weapons": "SİLAH",
      "scrap": "HURDA",
      "gear": "TEÇHİZAT"
    },
    "action": {
      "use": "KULLAN",
      "equip": "KUŞAN",
      "unequip": "ÇIKAR",
      "drop": "BIRAK",
      "take": "AL"
    }
  },
  "map": {
    "current_sector": "MEVCUT SEKTÖR",
    "selected_sector": "SEÇİLİ HEDEF SEKTÖR",
    "no_direct_corridor": "Mevcut sektörden doğrudan geçiş koridoru yok",
    "coords": "WGS84 KONUM",
    "threat_level": "TEHLİKE DÜZEYİ",
    "scavenge_yield": "SEKTÖR REZERVİ",
    "find_chance": "bulma",
    "risk": "RİSK",
    "visited_badge": "HARİTALANDI",
    "section": {
      "routes": "BAĞLANTILI KORİDORLAR"
    },
    "mode": {
      "road": "KARA YOLU",
      "sea": "DENİZ YOLU"
    },
    "action": {
      "scavenge": "BÖLGEYİ YAĞMALA (1–1.5sa)",
      "patrol": "DÜŞMAN ARA / ÇATIŞ (15dk)",
      "survey": "ÇEVREYİ KEŞFET (45dk)",
      "rest_hours": "DİNLEN {hours}sa",
      "travel": "İLERLE"
    },
    "control": {
      "zoom_in": "Yakınlaştır",
      "zoom_out": "Uzaklaştır",
      "center": "Karaktere odakla",
      "world": "Dünya görünümü"
    }
  },
  "location": {
    "istanbul": "İstanbul",
    "ankara": "Ankara",
    "athens": "Atina",
    "sofia": "Sofya",
    "bucharest": "Bükreş",
    "kyiv": "Kiev",
    "vienna": "Viyana",
    "berlin": "Berlin",
    "paris": "Paris",
    "london": "Londra",
    "madrid": "Madrid",
    "lisbon": "Lizbon",
    "reykjavik": "Reykjavik",
    "moscow": "Moskova",
    "tbilisi": "Tiflis",
    "tehran": "Tahran",
    "beirut": "Beyrut",
    "tangier": "Tanca",
    "cairo": "Kahire",
    "khartoum": "Hartum",
    "addis_ababa": "Addis Ababa",
    "nairobi": "Nairobi",
    "timbuktu": "Timbuktu",
    "dakar": "Dakar",
    "lagos": "Lagos",
    "kinshasa": "Kinşasa",
    "johannesburg": "Johannesburg",
    "cape_town": "Cape Town",
    "karachi": "Karaçi",
    "delhi": "Yeni Delhi",
    "mumbai": "Mumbai",
    "almaty": "Almatı",
    "novosibirsk": "Novosibirsk",
    "ulaanbaatar": "Ulanbatur",
    "beijing": "Pekin",
    "shanghai": "Şanghay",
    "seoul": "Seul",
    "tokyo": "Tokyo",
    "vladivostok": "Vladivostok",
    "anadyr": "Anadır",
    "bangkok": "Bangkok",
    "kuala_lumpur": "Kuala Lumpur",
    "jakarta": "Cakarta",
    "darwin": "Darwin",
    "alice_springs": "Alice Springs",
    "sydney": "Sidney",
    "auckland": "Auckland",
    "nome": "Nome",
    "anchorage": "Anchorage",
    "vancouver": "Vancouver",
    "san_francisco": "San Francisco",
    "los_angeles": "Los Angeles",
    "denver": "Denver",
    "chicago": "Chicago",
    "new_york": "New York",
    "montreal": "Montreal",
    "st_johns": "St. John's",
    "nuuk": "Nuuk",
    "houston": "Houston",
    "mexico_city": "Mexico City",
    "panama_city": "Panama City",
    "bogota": "Bogota",
    "lima": "Lima",
    "manaus": "Manaus",
    "recife": "Recife",
    "sao_paulo": "São Paulo",
    "buenos_aires": "Buenos Aires",
    "santiago": "Santiago",
    "ushuaia": "Ushuaia"
  },
  "biome": {
    "urban": "METROPOL YIKINTISI",
    "suburban": "KENAR MAHALLE",
    "industrial": "SANAYİ BÖLGESİ",
    "rural": "KIRSAL ALAN",
    "coastal": "LİMAN HATTI",
    "forest": "ORMANLIK",
    "wasteland": "ÇORAK TOPRAK",
    "arctic": "BUZUL HATTI",
    "military": "ASKERİ KORDON"
  },
  "enemy": {
    "feral_hound": {
      "name": "Kuduz Yaban Köpeği",
      "desc": "Enkazların arasından dişlerini göstererek atılan aç yırtıcı."
    },
    "raider_scout": {
      "name": "Otoyol Yağmacısı",
      "desc": "Çentikli pala ve kaynaklı hurda zırh kuşanmış saldırgan izci."
    },
    "plague_stalker": {
      "name": "Enfekte Bölge Avcısı",
      "desc": "Septik kirle kaplı, ne yaptığını bilmeden saldıran enfekte."
    },
    "cordon_deserter": {
      "name": "Kaçak Kordon Askeri",
      "desc": "Yıpranmış balistik yelekli, silahlı eski karantina askeri."
    }
  },
  "combat": {
    "kicker": "TAKTİK ÇATIŞMA",
    "round": "TUR {round}",
    "enemy_hp": "DÜŞMAN BÜTÜNLÜĞÜ",
    "scavenge_tag": "Çatışma başı 1×",
    "enemy_appeared": "TEMAS: {name} hızla yaklaşıyor!",
    "player_hit": "{name} hedefine {dmg} hasar verdin.",
    "player_missed": "{name} hedefine saldırın ıskaladı.",
    "enemy_hit": "{name} sana {dmg} travma hasarı verdi!",
    "enemy_missed": "{name} saldırısından sıyrıldın.",
    "victory": "{name} etkisiz hale getirildi.",
    "fled_success": "Teması kesip {name} tehdidinden uzaklaştın.",
    "fled_failed": "{name} karşısında geri çekilemedin!",
    "action": {
      "strike": "Taktik Saldırı",
      "aimed": "Nişanlı / Güçlü Atış",
      "scavenge": "Çatışma Ortasında Yağmala",
      "flee": "Teması Kes & Kaç"
    }
  },
  "crafting": {
    "station": "TEZGAH",
    "section": {
      "recipes": "ÜRETİM & ŞEMALAR"
    },
    "tier": {
      "0": "EL İŞÇİLİĞİ",
      "1": "TEZGAH I",
      "2": "TORNA II"
    },
    "action": {
      "craft": "ÜRET"
    }
  },
  "base": {
    "location_label": "KURULU SIĞINAK",
    "integrity": "SAVUNMA",
    "none_established": "Henüz kalıcı bir sığınak kurulmadı. Tezgah ve depo inşa etmek için mevcut sektörü sahiplenin.",
    "storage_empty": "Sığınak deposu boş.",
    "section": {
      "outpost": "SIĞINAK ALTYAPISI",
      "storage": "SIĞINAK DEPOSU"
    },
    "action": {
      "establish": "{location} BÖLGESİNDE SIĞINAK KUR",
      "relocate": "SIĞINAĞI {location} BÖLGESİNE TAŞI",
      "upgrade": "İNŞA ET / GELİŞTİR",
      "repair": "ÇEVREYİ ONAR (1× Çelik Plaka)"
    }
  },
  "structure": {
    "workbench": {
      "name": "Saha Çalışma Tezgahı",
      "desc": "Bu sığınakta Seviye I ve Seviye II üretim şemalarını açar."
    },
    "rain_catcher": {
      "name": "Yağmur Suyu Yoğuşturucu",
      "desc": "Zamanla sığınak deposuna otomatik temiz su biriktirir."
    },
    "barricade": {
      "name": "Çelik & Demir Barikat",
      "desc": "Sığınak çevresini gece baskınlarına karşı güçlendirir."
    },
    "med_cot": {
      "name": "Steril Revir Yatağı",
      "desc": "Sığınakta dinlenirken can yenilenmesini hızlandırır."
    }
  }
};
  globalThis.__LAST_BREATH_WORLD_SVG__ = "<?xml version=\"1.0\"?>\n<!--\n*************Map created by Simplemaps.com********************\t\t\n*************Attribution is highly appreciated!***************\n*************http://simplemaps.com****************************\n\nThe MIT License (MIT)\n\nCopyright (c) 2020 Pareto Softare, LLC DBA Simplemaps.com\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n\n-->\n<svg baseprofile=\"tiny\" fill=\"#ececec\" height=\"857\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\".2\" version=\"1.2\" viewbox=\"0 0 2000 857\" width=\"2000\" xmlns=\"http://www.w3.org/2000/svg\">\n <path d=\"M1383 261.6l1.5 1.8-2.9 0.8-2.4 1.1-5.9 0.8-5.3 1.3-2.4 2.8 1.9 2.7 1.4 3.2-2 2.7 0.8 2.5-0.9 2.3-5.2-0.2 3.1 4.2-3.1 1.7-1.4 3.8 1.1 3.9-1.8 1.8-2.1-0.6-4 0.9-0.2 1.7-4.1 0-2.3 3.7 0.8 5.4-6.6 2.7-3.9-0.6-0.9 1.4-3.4-0.8-5.3 1-9.6-3.3 3.9-5.8-1.1-4.1-4.3-1.1-1.2-4.1-2.7-5.1 1.6-3.5-2.5-1 0.5-4.7 0.6-8 5.9 2.5 3.9-0.9 0.4-2.9 4-0.9 2.6-2-0.2-5.1 4.2-1.3 0.3-2.2 2.9 1.7 1.6 0.2 3 0 4.3 1.4 1.8 0.7 3.4-2 2.1 1.2 0.9-2.9 3.2 0.1 0.6-0.9-0.2-2.6 1.7-2.2 3.3 1.4-0.1 2 1.7 0.3 0.9 5.4 2.7 2.1 1.5-1.4 2.2-0.6 2.5-2.9 3.8 0.5 5.4 0z\" id=\"AF\" name=\"Afghanistan\">\n </path>\n <path class=\"Angola\" d=\"M 1121.2 572 1121.8 574 1121.1 577.1 1122 580.1 1121.1 582.5 1121.5 584.7 1109.8 584.6 1109 605.1 1112.6 610.3 1116.2 614.3 1105.8 616.9 1092.3 616 1088.5 613 1065.8 613.2 1065 613.7 1061.7 610.8 1058.1 610.6 1054.7 611.7 1052 612.9 1051.5 608.9 1052.4 603.2 1054.4 597.3 1054.7 594.6 1056.6 588.8 1058 586.2 1061.3 582 1063.2 579.1 1063.8 574.4 1063.5 570.7 1061.9 568.4 1060.4 564.5 1059.1 560.7 1059.4 559.3 1061.1 556.8 1059.5 550.6 1058.3 546.3 1055.5 542.2 1056.1 541 1058.4 540.1 1060.1 540.2 1062.1 539.5 1078.8 539.6 1080.1 544.3 1081.7 548.2 1083 550.3 1085.1 553.6 1088.9 553.1 1090.7 552.2 1093.8 553.1 1094.7 551.5 1096.2 547.8 1099.7 547.5 1100 546.4 1102.9 546.4 1102.4 548.7 1109.2 548.6 1109.3 552.7 1110.4 555.1 1109.5 559 1109.9 563 1111.7 565.4 1111.3 573 1112.7 572.4 1115.1 572.6 1118.6 571.6 1121.2 572 Z\">\n </path>\n <path class=\"Angola\" d=\"M 1055.3 539 1053.8 534.2 1056.1 531.4 1057.8 530.3 1059.9 532.5 1057.9 533.9 1056.9 535.5 1056.7 538.3 1055.3 539 Z\">\n </path>\n <path d=\"M1088 228l0.4 1.2 1.4-0.6 1.2 1.7 1.3 0.7 0.6 2.3-0.5 2.2 1 2.7 2.3 1.5 0.1 1.7-1.7 0.9-0.1 2.1-2.2 3.1-0.9-0.4-0.2-1.4-3.1-2.2-0.7-3 0.1-4.4 0.5-1.9-0.9-1-0.5-2.1 1.9-3.1z\" id=\"AL\" name=\"Albania\">\n </path>\n <path d=\"M1296.2 336.7l1.3 5.1-2.8 0 0 4.2 1.1 0.9-2.4 1.3 0.2 2.6-1.3 2.6 0 2.6-1 1.4-16.9-3.2-2.7-6.6-0.3-1.4 0.9-0.4 0.4 1.8 4.2-1 4.6 0.2 3.4 0.2 3.3-4.4 3.7-4.1 3-4 1.3 2.2z\" id=\"AE\" name=\"United Arab Emirates\">\n </path>\n <path class=\"Argentina\" d=\"M 669.1 851.7 666.1 851.5 661.1 851.5 655.1 837.9 658.2 840.7 662.5 845.3 670.3 849 677.6 850.5 676.8 853.5 672.4 853.8 669.1 851.7 Z\">\n </path>\n <path class=\"Argentina\" d=\"M 638.6 644.7 649.9 655.1 654.5 656.1 661.8 660.9 667.7 663.4 668.8 666.2 664.6 676 670.4 677.7 676.7 678.7 680.9 677.7 685.2 672.7 685.5 667.1 688.1 665.8 691.3 669.6 691.7 674.7 687.5 678.2 684.2 680.8 678.9 687.1 672.9 695.8 672.4 701 672 707.6 673.2 714 672.3 715.4 672.7 719.5 673 722.9 680.8 728.4 681 732.8 684.9 735.6 685.2 738.7 681.9 746.9 674.9 750.4 664.7 751.7 658.7 751 660.8 754.9 660.9 759.6 662.7 762.8 660.2 765.1 655.1 766 649.5 763.6 648 765.3 650.5 771.6 654.5 773.5 656.8 771.5 659.3 774.8 655.1 776.8 652.2 780.8 653.4 787.1 653.3 790.5 648.5 790.5 645.5 793.7 645.6 798.5 652.1 803.1 657.3 804.3 657.5 810 652.9 813.5 652.3 820.8 648.8 823.2 647.9 826.1 652.1 832.6 656.7 836.1 654.6 835.8 649.7 834.8 637.6 834 634.1 830.4 632.2 825.8 629.1 826.2 626.5 823.9 623.4 817.4 626.1 814.6 626.2 810.7 624.4 807.5 625.1 802.1 624 793.8 622.2 790.1 624 788.9 622.6 786.5 619.8 785.3 620.6 782.6 617.5 780.2 613.8 772.9 615.5 771.6 612.2 763.8 611.4 757.3 611.2 751.6 613.7 749.3 610.4 743 608.8 737.2 611.8 733 610.4 727.6 612 721.4 610.6 715.5 609 714.3 604.1 703.2 606.2 696.6 604.5 690.4 605.4 684.5 608 678.5 611.3 674.5 609.3 672 610.1 669.9 608.5 659.2 614.1 656.1 615.3 649.4 614.4 647.8 618.4 642 625.9 643.6 629.6 648.2 631.2 643 637.6 643.3 638.6 644.7 Z\">\n </path>\n <path d=\"M1230.8 253l-1.8 0.2-2.8-3.7-0.2-1-2.3 0-1.9-1.7-1 0.1-2.4-1.8-4.2-1.6-0.1-3.1-1.3-2.2 7-1 1.4 1.6 2.2 1.1-0.7 1.6 3.2 2.2-1.1 2.1 2.6 1.7 2.5 1 0.9 4.5z\" id=\"AM\" name=\"Armenia\">\n </path>\n <path class=\"Australia\" d=\"M 1743 763.6 1746.7 765.8 1750 764.9 1754.9 763.7 1757.7 764.1 1753.2 771.7 1749.9 773.8 1745.9 779 1745.3 777.2 1738.7 781.6 1737.9 781.3 1734.9 781.1 1735.4 775.7 1737.4 771.5 1738 765.9 1740 763 1743 763.6 Z\">\n </path>\n <path class=\"Australia\" d=\"M 1793.5 590.2 1794.7 595.2 1798.7 592.8 1800.1 595.5 1802.4 598 1801.3 600.9 1801.5 606.4 1801.7 609.6 1803 610.4 1803.4 615.9 1802.2 619.2 1803 623.5 1808.4 626.9 1811.6 629.9 1814.8 632.7 1813.7 634.3 1816 638.3 1816.5 645.3 1819.1 643.9 1820.6 646.6 1822.2 645.7 1821.5 652.5 1824.4 656.4 1826.3 658.8 1829.1 664 1829.1 669.2 1828.1 672.9 1826.3 676.8 1827 682.3 1824.5 688 1822.4 691 1818.6 696.7 1817.1 700.4 1814 705 1809 710.8 1803.5 714 1799.1 718.9 1795.8 722.1 1791.4 727.6 1787.7 730.8 1783.8 735.6 1780.7 740 1779.9 742.1 1775.6 744.3 1769.5 744.5 1763.2 747.2 1759.4 749.6 1754.6 752.4 1751.9 749.5 1749.3 748.4 1751.9 745.1 1748.4 746.3 1741.2 750.9 1737.6 749.2 1735.2 748.2 1732.4 747.7 1728.3 745.9 1727 741.9 1728.5 737.1 1728.9 733.8 1727.5 731.2 1722.8 730.5 1726 727.3 1726.9 722.6 1722.2 727 1716.9 728.2 1721.4 724.7 1723.9 721 1727.4 717.8 1729 713.1 1722.2 718.5 1717.9 720.7 1713.6 725.8 1710.6 723.2 1712.3 719.8 1710.9 715.1 1709.1 712.7 1710.7 711.2 1705.4 707.3 1701.6 707.2 1697.6 704 1687.7 704.6 1679.8 706.9 1672.9 709.1 1667.9 708.7 1660.9 712 1655.6 713.4 1653.3 716.8 1650.3 719.4 1645.6 719.6 1642 720.1 1637.8 719 1633.6 719.7 1629.8 720 1625.3 723.4 1623.8 723.1 1620.4 724.9 1617 726.9 1613.2 726.7 1609.7 726.7 1605.6 722.6 1603.2 721.4 1604.7 717.7 1607.6 716.8 1609.1 715.4 1609.7 713.1 1612 708.6 1612.7 704.8 1612 698.3 1612.2 694.6 1613.6 691 1612.7 686.8 1613 684.9 1611.3 682.3 1612 677.3 1610.1 672.2 1610 669.5 1611.8 672.3 1611.3 666.3 1613.6 668.2 1614.7 670.7 1615.3 667.4 1613.7 662.3 1613.6 660.3 1612.8 658.4 1614.1 654.7 1615.6 653.1 1616.9 649.9 1617 646.1 1620.1 641.5 1619.7 646.4 1622.8 642 1627.7 639.8 1630.9 637.1 1635.6 634.7 1638.2 634.2 1639.6 635 1644.4 632.6 1647.9 631.9 1649 630.5 1650.5 629.9 1653.6 630.1 1659.8 628.2 1663.3 625.3 1665.3 621.9 1669.2 618.7 1669.9 616.1 1670.6 612.6 1675.5 607.1 1676.9 612.7 1679.5 611.4 1678 608.4 1680.3 605.3 1682.5 606.7 1684 601.8 1687.5 598.6 1689.3 596.1 1692.2 595 1692.6 593.2 1694.9 593.9 1695.3 592.3 1697.9 591.4 1700.7 590.5 1704.4 593.5 1707 597.3 1710.5 597.3 1714 597.9 1713.3 594.4 1716.8 589.3 1719.5 587.6 1718.9 586 1721.8 582.3 1725.5 580 1728.2 580.8 1733.1 579.6 1733.4 576.3 1729.5 574.2 1732.6 573.3 1736.2 574.9 1738.9 577.5 1743.4 579.1 1745.1 578.5 1748.4 580.5 1751.9 578.6 1753.9 579.2 1755.4 577.9 1757.6 581.1 1755.6 584.6 1753.1 587.2 1751.2 587.4 1751.5 589.9 1749.3 593.1 1746.8 596.3 1747 598.1 1750.8 601.7 1754.8 603.7 1757.3 605.9 1760.6 609.7 1762.2 609.7 1764.8 611.4 1765.3 613.4 1770.2 615.5 1774.3 613.3 1776.1 609.9 1777.8 607 1779.1 603.5 1781.7 598.4 1781.5 595.3 1782.2 593.4 1782.1 589.8 1783.5 584.9 1784.8 583.6 1784.2 581.5 1786 578.1 1787.5 574.6 1787.9 572.7 1790.2 570.3 1791.5 573.5 1791.4 577.5 1792.7 578.3 1792.6 581 1794.2 584.2 1794.1 587.9 1793.5 590.2 Z\">\n </path>\n <path d=\"M1070.6 190.8l-0.3 0.8 0.7 2.1-0.2 2.6-2.8 0 1.1 1.4-1.3 4-0.9 1.1-4.4 0.1-2.4 1.5-4.2-0.5-7.3-1.7-1.3-2.1-4.9 1.1-0.5 1.2-3.1-0.9-2.6-0.2-2.3-1.2 0.7-1.5-0.2-1.1 1.4-0.3 2.7 1.7 0.6-1.7 4.4 0.3 3.5-1.1 2.4 0.2 1.7 1.3 0.4-1.1-1-4.1 1.7-0.8 1.6-2.9 3.8 2.1 2.6-2.6 1.7-0.5 4 1.9 2.3-0.3 2.4 1.2z\" id=\"AT\" name=\"Austria\">\n </path>\n <path class=\"Azerbaijan\" d=\"M 1229 253.2 1225.2 252.3 1222 249.4 1220.8 246.9 1221.8 246.8 1223.7 248.5 1226 248.5 1226.2 249.5 1229 253.2 Z\">\n </path>\n <path class=\"Azerbaijan\" d=\"M 1235.3 236.2 1237.8 233.6 1241.3 236.9 1244.9 241.5 1247.4 241.8 1249.3 243.5 1245.1 244 1245.2 249 1244.8 251.2 1243.1 252.7 1243.9 255.8 1242.6 256.2 1238.7 252.8 1239.9 249.7 1238 247.8 1236.1 248.3 1230.8 253 1229.9 248.5 1227.4 247.5 1224.8 245.8 1225.9 243.7 1222.7 241.5 1223.4 239.9 1221.2 238.8 1219.8 237.2 1220.9 236.1 1225.1 238 1228 238.3 1228.6 237.6 1225.3 234.1 1226.5 233.3 1228 233.5 1232.3 237.3 1234.7 237.8 1235.3 236.2 Z\">\n </path>\n <path d=\"M1154.9 530.4l-0.6 0.1 0-0.3-2-6.1-0.01-0.06-0.09-1.04-1.4-2.9 3.5 0.5 1.7-3.7 3.1 0.4 0.3 2.5 1.2 1.5 0 2.1-1.4 1.3-2.3 3.4-2 2.3z\" id=\"BI\" name=\"Burundi\">\n </path>\n <path d=\"M1016.5 177.1l-0.4 4.2-1.3 0.2-0.4 3.5-4.4-2.9-2.5 0.5-3.5-2.9-2.4-2.5-2.2-0.1-0.8-2.2 3.9-1.2 3.6 0.5 4.5-1.3 3.1 2.7 2.8 1.5z\" id=\"BE\" name=\"Belgium\">\n </path>\n <path d=\"M1006.7 427l-0.2 2.1 1.3 3.8-1.1 2.6 0.6 1.7-2.8 4-1.7 2-1.1 4 0.2 4.1-0.3 10.3-4.7 0.8-1.4-4.4 0.3-14.8-1.2-1.3-0.2-3.2-2-2.2-1.7-1.9 0.7-3.4 2-0.7 1.1-2.8 2.8-0.6 1.2-1.9 1.9-1.9 2 0 4.3 3.7z\" id=\"BJ\" name=\"Benin\">\n </path>\n <path d=\"M988.5 406l-0.5 3.1 0.8 2.9 3.1 4.2 0.2 3.1 6.5 1.5-0.1 4.4-1.2 1.9-2.8 0.6-1.1 2.8-2 0.7-4.9-0.1-2.6-0.5-1.8 1-2.5-0.5-9.8 0.3-0.2 3.7 0.8 4.8-3.9-1.6-2.6 0.2-2 1.6-2.5-1.3-1-2.2-2.5-1.4-0.4-3.7 1.6-2.7-0.2-2.2 4.5-5.3 0.9-4.4 1.5-1.6 2.7 0.9 2.4-1.3 0.8-1.7 4.3-2.8 1.1-2 5.3-2.7 3.1-0.9 1.4 1.2 3.6 0z\" id=\"BF\" name=\"Burkina Faso\">\n </path>\n <path d=\"M1500.6 360.3l0.6 4.6-2.1-1 1.1 5.2-2.1-3.3-0.8-3.3-1.5-3.1-2.8-3.7-5.2-0.3 0.9 2.7-1.2 3.5-2.6-1.3-0.6 1.2-1.7-0.7-2.2-0.6-1.6-5.3-2.6-4.8 0.3-3.9-3.7-1.7 0.9-2.3 3-2.4-4.6-3.4 1.2-4.4 4.9 2.8 2.7 0.3 1.2 4.5 5.4 0.9 5.1-0.1 3.4 1.1-1.6 5.4-2.4 0.4-1.2 3.6 3.6 3.4 0.3-4.2 1.5 0 4.4 10.2z\" id=\"BD\" name=\"Bangladesh\">\n </path>\n <path d=\"M1132.6 221.6l-2.3 2.6-1.3 4.5 2.1 3.6-4.6-0.8-5 2 0.3 3.2-4.6 0.6-3.9-2.3-4 1.8-3.8-0.2-0.8-4.2-2.8-2.1 0.7-0.8-0.6-0.8 0.6-2 1.8-2-2.8-2.7-0.7-2.4 1.1-1.4 1.8 2.6 1.9-0.4 4 0.9 7.6 0.4 2.3-1.6 5.9-1.5 4 2.3 3.1 0.7z\" id=\"BG\" name=\"Bulgaria\">\n </path>\n <path d=\"M1083 214.3l1.9-0.1-1.1 2.8 2.7 2.5-0.5 2.9-1.1 0.3-0.9 0.6-1.6 1.5-0.4 3.5-4.8-2.4-2.1-2.7-2.1-1.4-2.5-2.4-1.3-1.9-2.7-3 0.8-2.6 2 1.5 1-1.4 2.3-0.1 4.5 1.1 3.5-0.1 2.4 1.4z\" id=\"BA\" name=\"Bosnia and Herzegovina\">\n </path>\n <path d=\"M1141.6 162.7l-3.9-0.2-0.8 0.6 1.5 2 2 4-4.1 0.3-1.3 1.4 0.3 3.1-2.1-0.6-4.3 0.3-1.5-1.5-1.7 1.1-1.9-0.9-3.9-0.1-5.7-1.5-4.9-0.5-3.8 0.2-2.4 1.6-2.3 0.3-0.5-2.8-1.9-2.8 2.8-1.3-0.4-2.4-1.7-2.3-0.6-2.7 4.7 0 4.8-2.3 0.5-3.4 3.6-2-1-2.7 2.7-1 4.6-2.3 5.3 1.5 0.9 1.5 2.4-0.7 4.8 1.4 1.1 2.9-0.7 1.6 3.8 4 2.1 1.1 0 1.1 3.4 1.1 1.7 1.6-1.6 1.3z\" id=\"BY\" name=\"Belarus\">\n </path>\n <path d=\"M487.8 399.8l-1.7 0 1.3-7.2 0.7-5.1 0.1-1 0.7-0.3 0.9 0.8 2.5-3.9 1.1-0.1-0.1 1 1 0-0.3 1.8-1.3 2.7 0.4 1-0.9 2.3 0.3 0.6-1 3.3-1.3 1.7-1.1 0.2-1.3 2.2z\" id=\"BZ\" name=\"Belize\">\n </path>\n <path d=\"M662.5 631.4l-0.3-2-5.4-3.3-5.2-0.1-9.6 1.9-2.1 5.6 0.2 3.5-1.5 7.7-1-1.4-6.4-0.3-1.6 5.2-3.7-4.6-7.5-1.6-4 5.8-3.9 0.9-3.1-8.9-3.7-7.2 1.1-6.2-3.2-2.7-1.2-4.6-3.2-4.4 2.9-6.9-2.9-5.4 1.1-2.2-1.2-2.4 1.9-3.2-0.3-5.4 0-4.6 1.1-2.1-5.5-10.4 4.2 0.6 2.9-0.2 1.1-1.9 4.8-2.6 2.9-2.4 7.3-1.1-0.4 4.8 0.9 2.5-0.3 4.3 6.5 5.7 6.4 1.1 2.3 2.4 3.9 1.3 2.5 1.8 3.5 0 3.4 1.9 0.5 3.7 1.2 1.9 0.3 2.7-1.7 0.1 2.8 7.5 10.7 0.3-0.5 3.7 0.8 2.5 3.2 1.8 1.7 4-0.6 5.1-1.3 2.8 0.8 3.6-1.6 1.4z\" id=\"BO\" name=\"Bolivia\">\n </path>\n <path d=\"M665.8 489.6l3.1 0.6 0.6-1.4-1-1.2 0.6-1.9 2.3 0.6 2.7-0.7 3.2 1.4 2.5 1.3 1.7-1.7 1.3 0.2 0.8 1.8 2.7-0.4 2.2-2.5 1.8-4.7 3.4-5.9 2-0.3 1.3 3.6 3 11.2 3.1 1.1 0.1 4.4-4.3 5.3 1.7 1.9 10.1 1 0.2 6.5 4.3-4.2 7.1 2.3 9.5 3.9 2.8 3.7-0.9 3.6 6.6-2 11 3.4 8.5-0.2 8.4 5.3 7.4 7.2 4.4 1.8 4.8 0.3 2.1 2 2 8.2 1.1 3.9-2.1 10.6-2.7 4.2-7.7 8.9-3.4 7.3-4 5.5-1.4 0.2-1.3 4.7 0.9 12-1.1 9.9-0.3 4.2-1.6 2.6-0.5 8.6-5.2 8.3-0.5 6.7-4.3 2.7-1.1 3.9-6 0-8.5 2.4-3.7 2.9-6 1.9-6.1 5.1-4.1 6.4-0.3 4.8 1.3 3.5-0.3 6.5-0.8 3.1-3.4 3.6-4.5 11.3-4 5-3.2 3.1-1.5 6.1-2.9 3.6-2.1-3.6 1.8-3.1-3.8-4.3-4.8-3.6-6.3-4.1-1.9 0.2-6.3-5-3.4 0.7 6-8.7 5.3-6.3 3.3-2.6 4.2-3.5-0.4-5.1-3.2-3.8-2.6 1.3 0.7-3.7 0.3-3.8-0.3-3.6-2.1-1.1-2 1-2.1-0.3-0.8-2.4-1.1-5.9-1.2-1.9-3.9-1.8-2.2 1.3-5.9-1.3-0.4-8.7-2-3.5 1.6-1.4-0.8-3.6 1.3-2.8 0.6-5.1-1.7-4-3.2-1.8-0.8-2.5 0.5-3.7-10.7-0.3-2.8-7.5 1.7-0.1-0.3-2.7-1.2-1.9-0.5-3.7-3.4-1.9-3.5 0-2.5-1.8-3.9-1.3-2.3-2.4-6.4-1.1-6.5-5.7 0.3-4.3-0.9-2.5 0.4-4.8-7.3 1.1-2.9 2.4-4.8 2.6-1.1 1.9-2.9 0.2-4.2-0.6-3.2 1.1-2.6-0.7-0.1-9.7-4.4 3.7-5-0.1-2.3-3.5-3.8-0.3 1-2.8-3.3-3.9-2.6-5.8 1.5-1.1-0.2-2.8 3.4-1.8-0.7-3.5 1.4-2.2 0.3-3 6.3-4.4 4.6-1.2 0.8-1 5.1 0.3 2.2-17.6 0.1-2.8-0.9-3.6-2.6-2.4 0.1-4.7 3.2-1 1.1 0.7 0.2-2.5-3.3-0.7 0-4 11 0.2 1.9-2.3 1.6 2.1 1 3.8 1.1-0.8 3.1 3.4 4.4-0.4 1.1-2 4.2-1.5 2.4-1.1 0.7-2.7 4.1-1.8-0.3-1.4-4.8-0.5-0.7-4.1 0.3-4.3-2.5-1.6 1.1-0.6 4.1 0.8 4.5 1.6 1.7-1.5 4.1-1 6.4-2.4 2.1-2.5-0.7-1.8 3-0.2 1.2 1.4-0.8 2.9 2 0.9 1.2 3-1.6 2.3-1 5.4 1.4 3.3 0.3 3 3.5 3 2.8 0.3 0.6-1.3 1.8-0.3 2.6-1.1 1.8-1.7 3.2 0.6 1.3-0.3z\" id=\"BR\" name=\"Brazil\">\n </path>\n <path d=\"M1633.1 472.8l2.2-2.4 4.6-3.6-0.1 3.2-0.1 4.1-2.7-0.2-1.1 2.2-2.8-3.3z\" id=\"BN\" name=\"Brunei Darussalam\">\n </path>\n <path d=\"M1488.8 323.5l2.6 2.1 0.5 3.9-4.5 0.2-4.7-0.4-3.2 1-5.5-2.5-0.4-1.2 2.6-4.8 2.6-1.6 4.3 1.4 2.9 0.2 2.8 1.7z\" id=\"BT\" name=\"Bhutan\">\n </path>\n <path d=\"M1127.6 615.7l1.9 5.1 1.1 1.2 1.6 3.7 6.1 7 2.3 0.7-0.1 2.3 1.5 4.1 4.3 1 3.4 2.9-8.1 4.7-5.2 4.8-2 4.3-1.8 2.4-3 0.5-1.2 3.1-0.6 2-3.6 1.4-4.5-0.3-2.5-1.8-2.3-0.7-2.8 1.4-1.5 3.1-2.7 1.9-2.8 2.9-4 0.7-1.1-2.3 0.6-3.9-3-6.1-1.4-1 0.6-18.7 5.5-0.2 0.8-22.9 4.2-0.2 8.7-2.3 2 2.7 3.7-2.5 1.7 0 3.2-1.5 1 0.5z\" id=\"BW\" name=\"Botswana\">\n </path>\n <path d=\"M1121.3 446.5l3.9 2.5 3.1 2.6 0.1 2.1 3.9 3.3 2.4 2.8 1.4 3.8 4.3 2.6 0.9 2-1.8 0.7-3.7-0.1-4.2-0.7-2.1 0.5-0.9 1.6-1.8 0.2-2.2-1.4-6.3 3.2-2.6-0.6-0.8 0.5-1.6 3.9-4.3-1.3-4.1-0.6-3.6-2.4-4.7-2.2-3 2.1-2.2 3.2-0.5 4.5-3.6-0.3-3.9-1.1-3.3 3.4-3 6-0.6-1.9-0.3-2.9-2.6-2.1-2.1-3.3-0.5-2.3-2.7-3.4 0.5-1.9-0.6-2.7 0.4-5 1.4-1.1 2.8-6.5 4.6-0.5 1-1.7 1 0.2 1.4 1.4 7.1-2.4 2.4-2.5 2.9-2.3-0.6-2.2 1.6-0.6 5.5 0.4 5.2-3 4-7 2.8-2.6 3.6-1.1 0.7 2.7 3.3 4 0 2.7-0.8 2.6 0.4 2 1.9 1.9 0.5 0.3z\" id=\"CF\" name=\"Central African Republic\">\n </path>\n <path class=\"Canada\" d=\"M 665.9 203.6 669.3 204.5 674 204.3 670.7 206.9 668.7 207.3 663.2 204.6 662.6 202.5 665.1 200.6 665.9 203.6 Z\">\n </path>\n <path class=\"Canada\" d=\"M 680.3 187.6 677.9 187.7 672.1 185.8 668.6 182.8 670.5 182.3 676.4 183.9 680.6 186.5 680.3 187.6 Z\">\n </path>\n <path class=\"Canada\" d=\"M 372.4 191.3 369.3 192.2 363 189.4 363 187.2 360.1 185 360.4 183.2 356.1 182.1 356.7 178.7 358.2 177.3 362.3 178.6 364.7 179.6 368.8 180.2 369 182.4 369.4 185.3 372.6 187.9 372.4 191.3 Z\">\n </path>\n <path class=\"Canada\" d=\"M 711.5 177.8 706.5 183.2 710.4 181.1 713.3 182.5 710.9 184.6 714.7 186.3 717.5 184.8 721.8 186.7 719 191.3 722.8 190.2 722.5 193.5 723 197.4 719.4 203 717 203.2 714.1 202 716.6 196.9 715.4 196.1 708.1 201.5 705.1 201.3 709.5 198.3 705.1 196.8 699.6 197.2 690 197 689.8 195.2 693.6 192.9 691.9 191.3 697.3 187.5 705.5 177.6 709.7 174.1 714.7 172 716.8 172.2 715.3 173.9 711.5 177.8 Z\">\n </path>\n <path class=\"Canada\" d=\"M 351.5 156.4 353 157.2 358 156.7 350.8 163.6 351.1 168.6 349.2 168.6 348.5 165.8 349 162.9 348.2 161 349.5 158.3 351.5 156.4 Z\">\n </path>\n <path class=\"Canada\" d=\"M 634.9 108.9 631.3 111.9 629.6 111.4 629.5 109.7 629.9 109.3 632.7 107.6 634.4 107.7 634.9 108.9 Z\">\n </path>\n <path class=\"Canada\" d=\"M 625.2 105.7 618 108.9 615 108.7 615 107.2 620 104.5 626 104.6 625.2 105.7 Z\">\n </path>\n <path class=\"Canada\" d=\"M 622.1 88.9 621.2 91.4 623.9 90.5 625.4 92 628.9 94 632.7 95.7 631.3 98.4 634.8 98 636.7 99.9 631.7 101.7 625.8 100.3 625 97.7 618.7 100.8 610.5 103.7 611.2 100.4 604.9 100.9 610.6 98.1 614.2 93.6 619.3 88.5 622.1 88.9 Z\">\n </path>\n <path class=\"Canada\" d=\"M 667 80.6 662.1 80.9 662.8 78.2 666.6 75.1 670.9 74.4 673.2 75.9 671.7 78.2 670.8 79 667 80.6 Z\">\n </path>\n <path class=\"Canada\" d=\"M 592.5 69.9 588.4 71.8 584.2 70.2 580.3 70.7 576.9 68.3 581.9 66.6 586.8 64.3 589.8 65.8 591.4 66.8 591.8 67.8 592.5 69.9 Z\">\n </path>\n <path class=\"Canada\" d=\"M 645.5 212.5 643.3 208.9 646.2 200.4 644.6 198.6 640.9 199.6 639.8 198 634.3 202.7 631.1 207.6 628.3 210.5 625.8 211.5 624.1 211.8 623 213.3 613.7 213.3 605.9 213.4 603.2 214.5 596.4 218.9 596.4 218.8 595.5 218.4 593.5 219.3 591.6 220.6 589.8 219.5 585.1 220.3 581.2 221.2 579.3 222 577 224.1 578.8 224.8 580.5 224.4 580.8 224.4 580.5 226.3 575.7 227 572.9 227.8 571.2 228.8 568.6 228.2 567 228.5 564.1 230.3 559.5 232.3 556.8 231.9 558.8 229.7 562.5 226.2 566.6 224.1 567.7 222.3 568.6 219.3 572.4 215.8 573.3 211.8 574.4 215.7 578.2 216.6 580.6 214.5 579.2 209.7 578.3 207.7 574.3 206.5 570.5 205.8 566.6 205.8 563.2 205 562.8 203.6 561.4 204.5 560.2 204.3 562.1 202.2 560.3 201.4 562.2 199 561 197.2 562.7 195.4 557.5 194.5 557.4 190.9 556.6 190.1 553.3 189.9 549.2 188.7 547.7 189.5 545.9 191 542.6 192 539.5 194.5 534.1 192.8 529.7 193.6 525.8 191.7 521.2 190.7 517.9 190.3 516.9 189.3 517.8 185.9 516.1 185.9 514.8 188.3 504.6 188.3 487.6 188.3 470.8 188.3 455.9 188.3 441.1 188.3 426.4 188.3 411.3 188.3 406.5 188.3 391.8 188.3 377.7 188.3 377 188.3 371.6 182.2 370 179.5 363 176.9 364.3 171.4 367.9 167.7 363.8 165 366.9 160.1 364.8 155.7 367.3 152.5 372.4 149.6 375.6 145.8 371 142 372.4 135.1 373.5 130.9 371.9 128.2 371.1 125.8 371.7 122.7 365.2 124.6 357.6 127.9 357.3 124.1 356.8 121.5 354 119.9 349.8 119.7 385.4 87 410 66.6 416 67.9 419.3 70.5 423 71 429.3 68.8 436.3 67.1 441.6 67.7 450.5 65.4 458.7 64.1 458.9 66.3 463.4 65 467.3 62.5 469.4 63.1 470.8 67.9 480.3 64.2 476.4 68.3 482.4 67.4 485.6 65.9 490.2 66.2 494.1 68.4 501.6 70.4 506.3 71.3 510.7 71 513.6 73.8 505.1 76.5 511.5 77.6 523.4 77 527.8 76 529.2 79.3 536.3 76.6 534.2 74.2 538.7 72.4 543.9 72.1 547.8 71.6 549.9 72.9 551.4 75.8 556.4 75.4 561.7 77.9 568.9 77 574.9 77.1 577.3 73.7 581.8 72.8 586.7 74.6 582.4 79.8 588.6 75.4 591.8 75.6 598.2 70.1 596.6 66.8 593.7 64.6 599.2 58.7 607.4 54.9 611.9 55.8 613.9 58.1 614.3 64.1 608.5 66.7 615.2 67.8 610.8 73.3 619.7 69.1 621.9 72.6 617.6 76.6 618.9 80.3 626.2 76.4 632.7 71.6 637.4 65.7 642.9 66.1 648.3 66.9 651.9 69.6 650.2 72.3 645.1 75.2 646 78.1 643.6 80.8 632.7 84.7 626.2 85.6 623 83.9 619.7 86.7 612.3 91.4 609.3 93.9 601.6 97.7 595.1 98.1 590 100.5 587.1 104.3 581.4 105 572.7 109.7 563.3 116.2 558.3 120.8 553.4 127.7 559.4 128.7 557.9 134.2 557.1 138.8 564.4 137.6 571.4 140.2 574.7 142.5 576.4 145.3 581.3 147 584.9 149.5 592.5 149.9 597.3 150.5 593.7 155.7 592 161.8 592.1 168.7 596.5 174.6 601.2 172.6 606.8 166.2 609.1 156.6 607.4 153.4 616.4 150.5 623.9 146.3 628.7 142.1 630.4 138.1 630 133 626.8 128.5 635.7 122.3 636.7 117 640.6 108 644.4 106.6 651.1 108.2 655.3 108.8 659.8 107.2 662.9 109.2 666.5 112.6 666.7 114.8 674.4 115.3 671.8 120.2 669.5 127.6 673.3 128.6 674.9 132.1 683.1 128.8 690.6 122.2 694.8 119.5 695.9 124.8 698.5 132.3 700.5 139.5 697.1 143.3 701.9 146.7 704.8 150.1 711.7 151.7 714.1 153.6 714.1 158.8 717.5 159.6 718.6 161.9 716.6 168.8 712.3 171.1 708.1 173.3 699.3 175.5 691.4 180.5 682.8 181.6 672.7 180.2 665.4 180.2 660.1 180.6 654.4 185.1 647 187.9 636.9 196.1 629 201.9 633.7 200.9 644.6 192.6 656.9 187.4 664.5 186.8 667.8 189.9 661.7 194.1 661.1 200.8 661.2 205.6 666.8 208.7 675.4 207.8 682.6 200.7 681.6 205.3 684.1 207.6 676.7 211.7 664.3 215.5 658.5 218 651.3 222.6 647.6 222.1 649.1 216.8 659.5 211.5 651.4 211.7 645.5 212.5 Z\">\n </path>\n <path class=\"Canada\" d=\"M 539 48.7 534.3 51.1 544.8 49.6 547.4 52.2 554.7 49.5 556.5 51.2 554.3 56.3 558.6 54.2 561.4 48.9 565.7 48.1 568.7 48.9 570.9 51 568.2 56.1 565.8 59.8 570 62.4 575 65 572.4 67.3 565.3 67.8 566.1 69.8 562.9 71.8 556.2 71 550.5 69.5 545.4 69.8 535.9 71.7 524.6 72.5 516.7 73 517 70.4 512.9 69 508.6 69.6 508 65.3 511.3 64.7 518.6 63.8 524.1 64.1 530.3 63.1 523.8 61.9 514.7 62.3 509 62.2 509 60.3 520.7 58.1 514.4 58.2 509 56.8 516.8 52.9 522 50.8 536.2 47.7 539 48.7 Z\">\n </path>\n <path class=\"Canada\" d=\"M 578.5 47.2 571.5 50.6 569.2 47 571.3 46.2 576.8 46 578.5 47.2 Z\">\n </path>\n <path class=\"Canada\" d=\"M 687.1 48.8 686.4 50.2 682.3 50.1 678.2 50 673.3 50.7 672.4 50.3 670.3 47.6 672 45.8 674.2 45.4 682.6 46 687.1 48.8 Z\">\n </path>\n <path class=\"Canada\" d=\"M 647.3 48.5 647.6 51.7 654.8 47.6 666.5 45.5 668.8 50.8 665.6 54.2 674.6 52.7 679.9 50.6 686.7 53.2 690.4 55.7 689.3 58 697.5 56.8 699.4 60.2 707.8 62.3 710 64.4 710.9 69.5 701.8 72 709.5 75.6 715.4 76.8 718.7 81.8 725.2 82.2 721.9 86.1 711 92.6 707 90.2 703.2 84.8 697.3 85.5 695 88.8 697.7 92 702.2 94.6 703.2 96.1 703.1 101.8 699.5 105.9 694.8 104.3 686.2 99.8 689.8 104.7 692.6 108.2 692.3 110.2 681.4 107.9 673.8 104.5 670 101.8 672.4 100.1 667.6 97.2 662.9 94.5 662 96.1 648.9 97 646.5 95.1 651.9 90.9 660 90.8 669.3 90.1 669.1 88.1 672.2 85.3 681 79.9 681.4 77.4 680.9 75.6 676.2 72.9 669.1 71.1 672.6 69.7 670.6 66.3 667.2 66 665.3 64.2 662 65.8 654.1 66.5 640.1 65.3 632.7 63.7 626.8 62.9 624.9 61 631.2 58.6 625.5 58.6 628.8 53.3 635.9 48.7 641.9 46.6 653.1 45.2 647.3 48.5 Z\">\n </path>\n <path class=\"Canada\" d=\"M 596.9 45 600.5 46.1 608.1 45.4 607.6 46.9 601.5 49.4 605.3 51.6 600.1 56.3 591.7 58.3 588.3 57.9 587.4 55.9 581.5 51.9 583.2 50.2 590.6 50.8 589.7 47.5 596.9 45 Z\">\n </path>\n <path class=\"Canada\" d=\"M 619.5 50.5 611.7 54.4 607.3 54.2 609.1 49.6 611.7 47.1 615.9 44.9 621.1 43.5 629 43.7 635.2 44.9 625.1 49.5 619.5 50.5 Z\">\n </path>\n <path class=\"Canada\" d=\"M 503.7 57.7 490.2 60.3 490.8 58 484.8 55.2 489.2 53 496.7 49.2 504.3 45.8 504.7 42.7 518.7 41.9 522.9 43 532.4 43.3 534.3 44.7 535.9 46.9 529.4 48.2 515.5 51.8 506.3 55.5 503.7 57.7 Z\">\n </path>\n <path class=\"Canada\" d=\"M 628.9 39.3 624.8 41.2 619.6 40.8 616.4 39.5 620.9 37.3 627.8 35.9 629.2 37.7 628.9 39.3 Z\">\n </path>\n <path class=\"Canada\" d=\"M 620.1 30.6 620.3 32.9 617.5 35.4 611.7 39.2 604.8 39.7 601.6 38.9 605 36 598.4 36.3 602.7 32.5 606.5 32.7 614.2 31 619.1 31.3 620.1 30.6 Z\">\n </path>\n <path class=\"Canada\" d=\"M 580.7 33.2 580 34.9 584.4 34.1 588 34.3 585.7 36.8 580.6 39.1 566.7 39.9 554.4 42.1 548.4 42.2 549.9 40.6 560.6 38.3 542.7 38.9 538.5 38 550.2 33.2 555.6 31.8 563.9 33.5 566.8 36.4 572.9 36.8 573.6 32.1 579.4 30.3 582.5 30.8 580.7 33.2 Z\">\n </path>\n <path class=\"Canada\" d=\"M 636.4 28.8 638.7 30.4 646.1 30.4 647.5 32 644.7 33.8 647.8 34.9 649 36.1 653.9 36.3 659 36.7 666.1 35.7 674.2 35.2 680 35.6 682.3 37.5 681.3 39.5 677.7 40.9 671 42 666.7 41.3 654.9 42.1 646.9 42.2 641.3 41.6 632.7 40 634.3 37.2 636.4 34.8 635 32.6 628 32 625.4 30.5 629.2 28.5 636.4 28.8 Z\">\n </path>\n <path class=\"Canada\" d=\"M 560.7 26.2 554.9 29.9 549.6 31.6 545.8 31.8 535.9 33.9 528.8 34.7 525.2 33.6 536.9 29.9 549.1 26.8 554.6 26.9 560.7 26.2 Z\">\n </path>\n <path class=\"Canada\" d=\"M 641.9 26.8 640.1 26.9 633.5 26.6 634.2 25.3 641.4 25.4 643 26.2 641.9 26.8 Z\">\n </path>\n <path class=\"Canada\" d=\"M 583.1 25.9 574.3 27.3 571 25.8 576.1 24.3 582.1 23.8 586.2 24.5 583.1 25.9 Z\">\n </path>\n <path class=\"Canada\" d=\"M 590.9 21.7 585.2 22.6 579.2 22.6 580.2 21.9 585.9 20.6 587.6 20.8 590.9 21.7 Z\">\n </path>\n <path class=\"Canada\" d=\"M 637.7 24.2 631.1 25.2 629.5 24.1 630.1 22.4 632.3 20.5 636.7 20.7 638.4 21 640.7 22.6 637.7 24.2 Z\">\n </path>\n <path class=\"Canada\" d=\"M 623.9 23 622.8 24.9 617.5 24.4 613.5 22.9 605.7 22.7 611 21.4 608.2 20.3 610.4 18.5 616.5 19.1 624 20.8 623.9 23 Z\">\n </path>\n <path class=\"Canada\" d=\"M 678 16.9 680.7 18.4 674.2 19.7 663.6 23.2 656.8 23.5 650 22.9 648.4 21 650.5 19.4 654.8 18.2 648.2 18.2 646.2 16.7 646.6 14.8 651.5 12.9 655.6 11.6 659.6 11.3 659.3 10.3 667.6 10.1 669.2 12.3 673.9 13.2 678.7 14.1 678 16.9 Z\">\n </path>\n <path class=\"Canada\" d=\"M 757.2 2.9 765.9 3.2 772.6 3.7 777.8 4.7 776.7 5.7 766.9 7.4 757.9 8.2 753.9 9.1 761.4 9.1 750.9 11.6 744.1 12.8 734.8 16.3 726.7 17 723.6 18 712.3 18.4 716.7 19 713.4 19.8 714.1 22.1 709.1 23.7 702.2 25 698.7 26.8 692.1 28.3 691.6 29.4 698.1 29.2 697 30.4 684.3 33.3 675.8 31.9 664.1 32.7 659.1 32.1 652.3 31.8 654.4 29.5 662.4 28.4 664.4 25 667 24.7 674.5 26.7 672.8 23.7 667.9 22.8 672.9 21 680.5 19.9 683.3 18.3 680.3 16.6 681.4 14.4 690.8 14.5 693 15 700.3 13.4 693 12.9 680.4 13.2 676 11.8 675.2 10.1 672.7 8.9 673.8 7.6 679.8 6.8 684 6.7 691.4 6.1 698.2 4.6 702.1 4.8 704.5 5.9 709.5 3.9 714.7 3.3 721.2 2.9 731.6 2.7 732.9 3.1 743.2 2.5 750.2 2.7 757.2 2.9 Z\">\n </path>\n <path d=\"M1034.4 197.5l0.2 1.1-0.7 1.5 2.3 1.2 2.6 0.2-0.3 2.5-2.1 1.1-3.8-0.8-1 2.5-2.4 0.2-0.9-1-2.7 2.2-2.5 0.3-2.2-1.4-1.8-2.7-2.4 1 0-2.9 3.6-3.5-0.2-1.6 2.3 0.6 1.3-1.1 4.2 0 1-1.3 5.5 1.9z\" id=\"CH\" name=\"Switzerland\">\n </path>\n <path class=\"China\" d=\"M 1602.2 381.9 1597.9 385 1593 383 1592 377.5 1594.2 374.6 1600 372.8 1603.3 372.9 1604.9 375.4 1602.9 378.2 1602.2 381.9 Z\">\n </path>\n <path class=\"China\" d=\"M 1625.6 185.5 1634.6 190 1640.6 195.8 1648.2 195.8 1650.8 193.4 1657.7 191.5 1659 197.2 1658.7 199.5 1661.5 206.3 1662.1 212.5 1655.2 211.4 1652.3 213.6 1657 219 1660.9 226.5 1658.4 226.6 1660.3 229.9 1654.8 226.1 1654.8 229.7 1648.4 232.4 1651.2 235.8 1646.6 235.5 1643 233.5 1641.9 238.1 1638 241.5 1635.9 245.6 1629.6 247.4 1627.2 250.4 1622.4 252.2 1623.7 249.2 1621.4 246.7 1623.4 242.4 1618.9 239.1 1615.5 241.3 1611.9 245.8 1610.6 249.9 1605.6 250.2 1604.3 253.2 1609.1 257.5 1613.9 258.6 1615.3 261.4 1620.4 263.3 1624.2 258.7 1630.1 261.2 1633.6 261.4 1635.9 264.7 1629.2 266.5 1628.2 270 1624.4 273.2 1623.5 277.7 1630.6 281.2 1635.2 287.5 1640.7 293.4 1646.2 298.3 1647.8 303.1 1645 304.9 1647.4 308.3 1651.3 310.3 1652.1 315.5 1652.2 320.6 1649.4 321.2 1647.3 328.1 1645 336.6 1641.6 344.2 1635.2 350.1 1628.6 355.6 1622.5 356.3 1619.6 359.1 1617.3 357.1 1614.8 360.2 1607.6 363.5 1601.8 364.4 1601.1 371.2 1598 371.6 1595.8 366.9 1596.7 364.5 1588.9 362.4 1586.5 363.5 1580.6 361.8 1577.5 359.2 1577.8 355.5 1572.5 354.3 1569.4 351.9 1565.3 355.3 1560 356.1 1555.6 356 1552.9 357.6 1550.2 358.5 1552.2 365.9 1549.2 365.7 1548.4 364.2 1547.9 361.5 1544.1 363.4 1541.5 362.2 1537 359.8 1537.8 354.5 1534.1 353.2 1531.7 347.3 1526.1 348.4 1525.4 340.8 1529.6 335.4 1528.7 330.1 1527.4 325.2 1524.7 323.7 1522 319.9 1518.9 320.4 1512.8 319.4 1514 316.7 1510.4 312.7 1507.2 315.4 1502.3 313.9 1496.9 317.9 1493 322.7 1488.8 323.5 1486 321.8 1483.1 321.6 1478.8 320.2 1476.2 321.8 1473.6 326.6 1472.1 321.5 1469 322.9 1462.5 322.2 1456 320.8 1451 317.9 1446.5 316.7 1444 313.6 1440.7 312.7 1434.3 308.5 1429.5 306.5 1427.6 308 1419 303.5 1412.8 299.5 1409.6 292.4 1413.7 293.3 1413.1 290 1410.1 286.7 1409.3 281.5 1401.6 273.9 1392.1 271.4 1389.2 266.4 1384.5 263.4 1383 261.6 1381.2 258 1380.7 255.5 1377 254 1375.5 254.7 1372.4 248.7 1373.5 247.3 1372.3 245.8 1376.4 242.8 1379.6 241.5 1385.4 242.4 1386 238.3 1392.4 237.6 1393.4 235 1400.3 231.6 1400.5 230.2 1398.8 226.5 1401.7 224.9 1392.9 213.9 1402 211.4 1404 210 1403 198.7 1413.8 200.8 1415.4 197.9 1412.9 191.7 1416.7 191.1 1418.6 186.9 1420.3 186.4 1423.6 190.8 1429.3 194.1 1437.5 196.4 1443.3 201.5 1444.7 208.8 1447.7 211.6 1454.2 212.7 1461.4 213.5 1469.4 217.5 1472.8 218.2 1477.8 224 1482.5 227.8 1488.1 227.6 1499.4 229.1 1505.8 228.2 1511.4 229.1 1520.8 233 1527 233 1530.3 234.9 1534.7 231.5 1541.9 229.3 1549.5 229.1 1554.4 226.9 1556.4 223.5 1558.8 221.3 1556.9 219.2 1554 216.8 1554.5 212.7 1557.7 213.3 1563.6 214.6 1566.8 211.2 1573.2 208.8 1574.5 204.6 1577 202.8 1583.8 202 1588.2 202.7 1587.4 200.5 1580.2 196.1 1575 194.1 1572.5 196.4 1567 195.4 1564.7 196.2 1561.9 193.7 1561.6 187.4 1561 182.7 1568.4 185.1 1572.8 181.2 1570.9 178.4 1570.7 171.9 1572 169.9 1569.5 166.5 1565.8 165.1 1567.5 162 1572.6 160.9 1578.8 160.7 1587.4 162.6 1593.4 164.8 1601.1 171 1604.9 173.7 1609.4 177.5 1615.6 183.5 1625.6 185.5 Z\">\n </path>\n <path d=\"M955.9 435.2l2.5 1.4 1 2.2 2.5 1.3 2-1.6 2.6-0.2 3.9 1.6 1.5 9.2-2.4 5.3-1.5 7.3 2.4 5.5-0.2 2.6-2.6 0-3.9-1.2-3.7 0-6.7 1.2-3.9 1.8-5.6 2.4-1.1-0.2 0.4-5.3 0.6-0.8-0.2-2.5-2.4-2.7-1.8-0.4-1.6-1.8 1.2-2.9-0.5-3.1 0.2-1.8 0.9 0 0.4-2.8-0.4-1.3 0.5-0.9 2.1-0.7-1.4-5.2-1.3-2.6 0.5-2.2 1.1-0.5 0.8-0.6 1.5 1 4.4 0 1-1.8 1 0.1 1.6-0.7 0.9 2.7 1.3-0.8 2.4-1z\" id=\"CI\" name=\"Côte d'Ivoire\">\n </path>\n <path d=\"M1072.8 454.2l-2.8 6.5-1.4 1.1-0.4 5 0.6 2.7-0.5 1.9 2.7 3.4 0.5 2.3 2.1 3.3 2.6 2.1 0.3 2.9 0.6 1.9-0.4 3.4-4.5-1.5-4.6-1.7-7.1-0.2-0.7-0.4-3.4 0.8-3.4-0.8-2.7 0.4-9.3-0.1 0.9-5.1-2.3-4.3-2.6-1-1.1-2.9-1.5-0.9 0.1-1.8 1.4-4.6 2.7-6.2 1.6 0 3.4-3.8 2.1-0.1 3.2 2.7 3.9-2.2 0.5-2.7 1.3-2.6 0.8-3.2 3-2.6 1.1-4.5 1.2-1.5 0.8-3.3 1.4-4.1 4.7-5 0.3-2.1 0.6-1.2-2.3-2.5 0.2-2.1 1.5-0.3 2.3 4.1 0.5 4.2-0.2 4.3 3.2 5.8-3.2 0-1.6 0.4-2.6-0.6-1.2 3 3.4 3.8 2.5 1.1 0.8 2.6 1.8 4.4-0.8 1.8z\" id=\"CM\" name=\"Cameroon\">\n </path>\n <path d=\"M1141.3 468.2l3.5 5.3 2.6 0.8 1.5-1.1 2.6 0.4 3.1-1.3 1.4 2.7 5.1 4.3-0.3 7.5 2.3 0.9-1.9 2.2-2.1 1.8-2.2 3.3-1.2 3-0.3 5.1-1.3 2.5-0.1 4.8-1.6 1.8-0.2 3.8-0.8 0.5-0.6 3.6 1.4 2.9 0.1 1-1.2 10.3 1.5 3.6-1 2.7 1.8 4.6 3.4 3.5 0.7 3.5 1.6 1.7-0.3 1.1-0.9-0.3-7.7 1.1-1.5 0.8-1.7 4.1 1.2 2.8-1.1 7.6-0.9 6.4 1.5 1.2 3.9 2.5 1.6-1.2 0.2 6.9-4.3 0-2.2-3.5-2-2.8-4.3-0.9-1.2-3.3-3.5 2-4.4-0.9-1.9-2.9-3.5-0.6-2.7 0.1-0.3-2-1.9-0.1-2.6-0.4-3.5 1-2.4-0.2-1.4 0.6 0.4-7.6-1.8-2.4-0.4-4 0.9-3.9-1.1-2.4-0.1-4.1-6.8 0.1 0.5-2.3-2.9 0-0.3 1.1-3.5 0.3-1.5 3.7-0.9 1.6-3.1-0.9-1.8 0.9-3.8 0.5-2.1-3.3-1.3-2.1-1.6-3.9-1.3-4.7-16.7-0.1-2 0.7-1.7-0.1-2.3 0.9-0.8-2 1.4-0.7 0.2-2.8 1-1.6 2-1.4 1.5 0.7 2-2.5 3.1 0.1 0.3 1.8 2.1 1.1 3.4-4 3.3-3.1 1.4-2.1-0.1-5.3 2.5-6.2 2.6-3.3 3.7-3.1 0.7-2 0.1-2.4 0.9-2.2-0.3-3.7 0.7-5.7 1.1-4 1.7-3.4 0.3-3.9 0.5-4.5 2.2-3.2 3-2.1 4.7 2.2 3.6 2.4 4.1 0.6 4.3 1.3 1.6-3.9 0.8-0.5 2.6 0.6 6.3-3.2 2.2 1.4 1.8-0.2 0.9-1.6 2.1-0.5 4.2 0.7 3.7 0.1 1.8-0.7z\" id=\"CD\" name=\"Democratic Republic of the Congo\">\n </path>\n <path d=\"M1090.9 479.3l-0.3 3.9-1.7 3.4-1.1 4-0.7 5.7 0.3 3.7-0.9 2.2-0.1 2.4-0.7 2-3.7 3.1-2.6 3.3-2.5 6.2 0.1 5.3-1.4 2.1-3.3 3.1-3.4 4-2.1-1.1-0.3-1.8-3.1-0.1-2 2.5-1.5-0.7-2.1-2.2-1.7 1.1-2.3 2.8-4.6-6.8 4.3-3.6-2.1-4.2 2-1.6 3.8-0.8 0.4-2.9 3.1 3.1 5 0.3 1.7-3 0.7-4.3-0.6-5-2.7-3.8 2.5-7.5-1.4-1.2-4.2 0.5-1.6-3.3 0.4-2.8 7.1 0.2 4.6 1.7 4.5 1.5 0.4-3.4 3-6 3.3-3.4 3.9 1.1 3.6 0.3z\" id=\"CG\" name=\"Republic of Congo\">\n </path>\n <path d=\"M584.4 426.2l-3.7 1.1-1.6 3.2-2.3 1.8-1.8 2.4-0.9 4.6-1.8 3.8 2.9 0.4 0.6 2.9 1.2 1.5 0.3 2.5-0.7 2.4 0.1 1.4 1.4 0.5 1.2 2.2 7.3-0.6 3.3 0.8 3.8 5.6 2.3-0.7 4.1 0.3 3.2-0.7 2 1.1-1.2 3.4-1.3 2.2-0.6 4.6 1.1 4.3 1.5 1.9 0.2 1.4-2.9 3.2 2 1.4 1.5 2.3 1.6 6.4-1.1 0.8-1-3.8-1.6-2.1-1.9 2.3-11-0.2 0 4 3.3 0.7-0.2 2.5-1.1-0.7-3.2 1-0.1 4.7 2.6 2.4 0.9 3.6-0.1 2.8-2.2 17.6-2.9-3.4-1.7-0.1 3.5-6.6-4.4-3-3.4 0.6-2.1-1.1-3.1 1.7-4.2-0.9-3.5-6.7-2.6-1.6-1.8-3.1-3.8-3-1.5 0.6-2.4-1.5-2.8-2.1-1.6 1-4.8-0.9-1.4-2.8-1.1 0.1-5.6-3.6-0.7-2 2.1-0.5-0.2-3.2 1.4-2.4 2.8-0.4 2.5-4 2.2-3.4-2-1.5 1.2-3.7-1.1-5.9 1.3-1.7-0.7-5.4-2.2-3.5 0.9-3.1 1.8 0.5 1.1-1.9-1.1-3.8 0.7-0.9 2.9 0.2 4.5-4.5 2.4-0.7 0.1-2.1 1.4-5.5 3.4-2.9 3.5-0.2 0.6-1.3 4.4 0.5 4.6-3.2 2.3-1.4 2.9-3.1 2 0.4 1.3 1.7-1.2 2.1z\" id=\"CO\" name=\"Colombia\">\n </path>\n <path d=\"M514.6 431.6l1.2 3.5 2 2.6 2.5 2.7-2.2 0.6-0.1 2.6 1.1 0.9-0.9 0.8 0.2 1.1-0.6 1.3-0.3 1.3-3-1.4-1.1-1.4 0.7-1.1-0.1-1.4-1.5-1.5-2.2-1.3-1.8-0.8-0.3-1.9-1.4-1.1 0.2 1.8-1.2 1.6-1.2-1.8-1.7-0.7-0.7-1.2 0.1-2 0.9-2-1.5-0.9 1.4-1.3 0.9-0.8 3.6 1.7 1.3-0.8 1.8 0.5 0.8 1.3 1.7 0.5 1.4-1.4z\" id=\"CR\" name=\"Costa Rica\">\n </path>\n <path d=\"M544.8 355.7l1.9 2.3 5.2-0.7 1.8 1.5 4.2 4 3.2 2.9 1.8-0.1 3.2 1.3-0.6 1.8 4 0.3 3.9 2.6-0.8 1.5-3.8 0.8-3.8 0.3-3.7-0.5-8.1 0.6 4.2-3.5-2.1-1.7-3.6-0.4-1.7-1.9-0.8-3.6-3.2 0.2-5-1.7-1.5-1.4-7.1-1-1.8-1.2 2.3-1.6-5.4-0.3-4.4 3.3-2.3 0.1-1 1.6-2.8 0.7-2.3-0.7 3.2-1.9 1.5-2.4 2.7-1.4 3-1.2 4.3-0.6 1.4-0.8 4.7 0.5 4.4 0.1 4.9 2.2z\" id=\"CU\" name=\"Cuba\">\n </path>\n <path d=\"M1059.7 175.2l2.5 2 3.7 0.5-0.2 1.7 2.8 1.3 0.6-1.6 3.4 0.7 0.7 2 3.7 0.3 2.6 3.1-1.5 0-0.7 1.1-1.1 0.3-0.2 1.4-0.9 0.3-0.1 0.6-1.6 0.6-2.2-0.1-0.6 1.4-2.4-1.2-2.3 0.3-4-1.9-1.7 0.5-2.6 2.6-3.8-2.1-3-2.6-2.6-1.5-0.7-2.7-1-1.8 3.4-1.3 1.7-1.6 3.5-1.2 1.1-1.2 1.3 0.7 2.2-0.6z\" id=\"CZ\" name=\"Czech Republic\">\n </path>\n <path d=\"M1053.9 158.9l1.4 3.1-1.2 1.7 1.9 2.1 1.5 3.3-0.2 2.2 2.4 3.9-2.2 0.6-1.3-0.7-1.1 1.2-3.5 1.2-1.7 1.6-3.4 1.3 1 1.8 0.7 2.7 2.6 1.5 3 2.6-1.6 2.9-1.7 0.8 1 4.1-0.4 1.1-1.7-1.3-2.4-0.2-3.5 1.1-4.4-0.3-0.6 1.7-2.7-1.7-1.4 0.3-5.5-1.9-1 1.3-4.2 0 0.4-4.5 2.4-4.2-7.2-1.2-2.4-1.6 0.2-2.7-1-1.4 0.4-4.2-1.1-6.5 2.9 0 1.2-2.3 0.9-5.6-0.9-2.1 0.8-1.3 4-0.3 1 1.3 3.1-3-1.3-2.3-0.4-3.4 3.7 0.8 2.9-0.9 0.3 2.3 4.9 1.4 0.1 2.2 4.7-1.2 2.6-1.6 5.6 2.4 2.4 1.9z\" id=\"DE\" name=\"Germany\">\n </path>\n <path d=\"M1229.5 428.2l-1.9 3.5-1.3-1.2-1.3 0.5-3.2-0.1-0.2-2-0.5-1.8 1.8-3 1.9-2.8 2.4 0.6 1.7-1.6 1.4 2-0.1 2.6-3.1 1.6 2.4 1.7z\" id=\"DJ\" name=\"Djibouti\">\n </path>\n <path class=\"Denmark\" d=\"M 1046.1 147.7 1043.7 152.6 1038.5 149.1 1037.6 146.6 1044.4 144.6 1046.1 147.7 Z\">\n </path>\n <path class=\"Denmark\" d=\"M 1033.3 151.5 1030.4 152.4 1026.7 151.6 1024.6 148.2 1024.2 142.1 1024.8 140.4 1026.1 138.6 1030.1 138.3 1031.7 136.6 1035.3 134.9 1035.3 138 1034.1 140 1034.8 141.6 1037.4 142.5 1036.4 144.8 1035 144.2 1031.9 148.5 1033.3 151.5 Z\">\n </path>\n <path d=\"M585.7 386l0.3-1.8-1.3-1.9 1.5-1.1 0.7-2.5-0.1-3.4 0.8-1.1 4.3 0 3.2 1.6 1.5-0.1 0.7 2.3 3.1-0.2-0.4 1.9 2.5 0.3 2.5 2.3-2.3 2.6-2.6-1.4-2.6 0.3-1.8-0.3-1.1 1.2-2.2 0.4-0.7-1.6-1.9 0.9-2.7 4.4-1.3-1-0.1-1.8z\" id=\"DO\" name=\"Dominican Republic\">\n </path>\n <path d=\"M1031 264.6l-1 3.3 1 6.1-1.1 5.3-3.2 3.6 0.6 4.8 4.5 3.9 0.1 1.5 3.4 2.6 2.6 11.5 1.9 5.7 0.4 3-0.8 5.2 0.4 3-0.6 3.5 0.6 4-2.2 2.7 3.4 4.7 0.2 2.7 2.1 3.6 2.5-1.2 4.5 3 2.5 4-18.8 12.3-16 12.6-7.8 2.8-6.2 0.7-0.1-4.1-2.6-1.1-3.5-1.8-1.3-3-18.7-14-18.6-14-20.5-15.6 0.1-1.2 0.1-0.4 0.1-7.6 8.9-4.8 5.4-1 4.5-1.7 2.1-3.2 6.4-2.5 0.3-4.8 3.1-0.6 2.5-2.3 7.1-1.1 1-2.5-1.4-1.4-1.9-6.8-0.3-3.9-1.9-4.1 5.1-3.5 5.8-1.1 3.3-2.6 5.1-2 9-1.1 8.8-0.5 2.7 0.9 4.9-2.5 5.7-0.1 2.2 1.5 3.6-0.4z\" id=\"DZ\" name=\"Algeria\">\n </path>\n <path d=\"M559 502.8l0.8 4.9-1.7 4.1-6.1 6.8-6.7 2.5-3.4 5.6-0.9 4.3-3.1 2.7-2.5-3.3-2.3-0.7-2.3 0.5-0.3-2.3 1.6-1.5-0.7-2.7 2.9-4.8-1.3-2.8-2.1 3-3.5-2.9 1.1-1.8-1-5.8 2-1 1-4 2.1-4.1-0.3-2.6 3.1-1.4 3.9-2.5 5.6 3.6 1.1-0.1 1.4 2.8 4.8 0.9 1.6-1 2.8 2.1 2.4 1.5z\" id=\"EC\" name=\"Ecuador\">\n </path>\n <path d=\"M1172.1 301.4l3.9 9.4 0.7 1.6-1.3 2.6-0.7 4.8-1.2 3.4-1.2 1.1-2-2.1-2.7-2.8-4.7-9.2-0.5 0.6 2.8 6.7 3.9 6.5 4.9 10 2.3 3.5 2 3.6 5.4 7.1-1 1.1 0.4 4.2 6.8 5.8 1.1 1.3-22.1 0-21.5 0-22.3 0-1-23.7-1.3-22.8-2-5.2 1.1-3.9-1-2.8 1.7-3.1 7.2-0.1 5.4 1.7 5.5 1.9 2.6 1 4-2 2.1-1.8 4.7-0.6 3.9 0.8 1.8 3.2 1.1-2.1 4.4 1.5 4.3 0.4 2.5-1.6z\" id=\"EG\" name=\"Egypt\">\n </path>\n <path d=\"M1228.9 420.3l-1.7 1.6-2.4-0.6-2-2.1-2.5-3.7-2.6-2.1-1.5-2.2-5-2.6-3.9-0.1-1.4-1.3-3.2 1.5-3.6-2.9-1.5 4.8-6.6-1.4-0.7-2.5 2-9.5 0.3-4.2 1.7-2 4-1.1 2.7-3.6 3.6 7.4 1.9 5.9 3.2 3.1 8 6.1 3.3 3.6 3.2 3.8 1.8 2.2 2.9 1.9z\" id=\"ER\" name=\"Eritrea\">\n </path>\n <path d=\"M1113.7 124.6l0.9 1-2.6 3.4 2.4 5.6-1.6 1.9-3.8-0.1-4.4-2.2-2.1-0.7-3.8 1-0.1-3.5-1.5 0.8-3.3-2.1-1-3.4 5.5-1.7 5.6-0.8 5.1 0.9 4.7-0.1z\" id=\"EE\" name=\"Estonia\">\n </path>\n <path d=\"M1207.3 408.5l3.9 0.1 5 2.6 1.5 2.2 2.6 2.1 2.5 3.7 2 2.1-1.9 2.8-1.8 3 0.5 1.8 0.2 2 3.2 0.1 1.3-0.5 1.3 1.2-1.2 2.2 2.2 3.6 2.2 3.1 2.2 2.3 18.7 7.6 4.8-0.1-15.6 19.3-7.3 0.3-5 4.5-3.6 0.1-1.5 2.1-3.9 0-2.3-2.2-5.2 2.7-1.6 2.7-3.8-0.6-1.3-0.7-1.3 0.2-1.8-0.1-7.2-5.4-4 0-1.9-2.1-0.1-3.6-2.9-1.1-3.5-7-2.6-1.5-1-2.6-3-3.1-3.5-0.5 1.9-3.6 3-0.2 0.8-1.9-0.2-5 0-0.8 1.5-6.7 2.6-1.8 0.5-2.6 2.3-5 3.3-3.1 2-6.4 0.7-5.5 6.6 1.4 1.5-4.8 3.6 2.9 3.2-1.5 1.4 1.3z\" id=\"ET\" name=\"Ethiopia\">\n </path>\n <path d=\"M1104.1 70.1l0.4 3.8 7.3 3.7-2.9 4.2 6.5 6.3-1.7 4.8 4.9 4.2-0.9 3.8 7.4 3.9-0.9 2.9-3.4 3.4-8 7.4-8 0.5-7.6 2.1-7.1 1.3-3.2-3.2-4.7-1.9 0.1-5.8-3-5.2 1.6-3.4 3.3-3.5 8.8-6.2 2.6-1.2-0.9-2.4-6.5-2.6-1.8-2.2-1.8-8.5-7.2-3.7-6-2.7 2.2-1.4 5.1 2.8 5.3-0.2 4.7 1.3 3.4-2.4 1.1-4 5.9-1.8 5.8 2.1-0.8 3.8z\" id=\"FI\" name=\"Finland\">\n </path>\n <path d=\"M1060.5 487.3l-0.4 2.8 1.6 3.3 4.2-0.5 1.4 1.2-2.5 7.5 2.7 3.8 0.6 5-0.7 4.3-1.7 3-5-0.3-3.1-3.1-0.4 2.9-3.8 0.8-2 1.6 2.1 4.2-4.3 3.6-5.8-6.5-3.7-5.3-3.5-6.6 0.2-2.2 1.3-2 1.3-4.7 1.2-4.8 1.9-0.3 8.2 0 0-7.7 2.7-0.4 3.4 0.8 3.4-0.8 0.7 0.4z\" id=\"GA\" name=\"Gabon\">\n </path>\n <path class=\"United Kingdom\" d=\"M 956.7 158.2 953.2 157 950.2 157.1 951.4 153.8 950.5 150.6 954.5 150.3 959.4 154.1 956.7 158.2 Z\">\n </path>\n <path class=\"United Kingdom\" d=\"M 972.6 129.5 967.5 136 972.2 135.2 977.3 135.2 976 140.1 971.7 145.5 976.6 145.8 976.9 146.5 981.1 153.6 984.3 154.6 987.2 161.6 988.6 164 994.5 165.1 993.9 169.1 991.5 170.9 993.4 174.1 989 177.3 982.5 177.2 974.1 179 971.9 177.7 968.6 180.6 964.1 179.9 960.5 182.3 958 181.1 965.3 174.6 969.7 173.2 962.1 172.2 960.8 169.7 965.9 167.8 963.4 164.5 964.4 160.5 971.5 161.1 972.3 157.5 969.2 153.8 969.1 153.7 963.4 152.6 962.3 151 964.1 148.3 962.6 146.6 960 149.5 959.9 143.6 957.7 140.6 959.6 134.4 963.4 129.6 967 130 972.6 129.5 Z\">\n </path>\n <path d=\"M1215.7 227.9l5.1 1.3 2.1 2.6 3.6 1.5-1.2 0.8 3.3 3.5-0.6 0.7-2.9-0.3-4.2-1.9-1.1 1.1-7 1-5.6-3.2-5.5 0.3 0.3-2.7-2.1-4.3-3.4-2.4-3-0.7-2.2-1.9 0.4-0.8 4.6 1.1 7.7 1 7.6 3.1 1.2 1.2 2.9-1z\" id=\"GE\" name=\"Georgia\">\n </path>\n <path d=\"M986.5 431.1l-0.4 2 2.3 3.3 0 4.7 0.6 5 1.4 2.4-1.3 5.7 0.5 3.2 1.5 4.1 1.3 2.3-8.9 3.7-3.2 2.2-5.1 1.9-5-1.8 0.2-2.6-2.4-5.5 1.5-7.3 2.4-5.3-1.5-9.2-0.8-4.8 0.2-3.7 9.8-0.3 2.5 0.5 1.8-1 2.6 0.5z\" id=\"GH\" name=\"Ghana\">\n </path>\n <path d=\"M921.5 421.9l0.3 2.4 0.9 0 1.5-0.9 0.9 0.2 1.6 1.7 2.4 0.5 1.5-1.4 1.9-0.9 1.3-0.9 1.1 0.2 1.3 1.4 0.6 1.8 2.3 2.7-1.1 1.6-0.3 2.1 1.2-0.6 0.7 0.7-0.3 1.9 1.7 1.9-1.1 0.5-0.5 2.2 1.3 2.6 1.4 5.2-2.1 0.7-0.5 0.9 0.4 1.3-0.4 2.8-0.9 0-1.6-0.2-1.1 2.6-1.6 0-1.1-1.4 0.4-2.6-2.4-3.9-1.4 0.7-1.3 0.2-1.5 0.3 0.1-2.3-0.9-1.7 0.2-1.9-1.2-2.7-1.6-2.3-4.5 0-1.3 1.2-1.6 0.2-1 1.4-0.6 1.7-3.1 2.9-2.4-3.8-2.2-2.5-1.4-0.9-1.4-1.3-0.6-2.8-0.8-1.4-1.7-1.1 2.6-3.1 1.7 0.1 1.5-1 1.2-0.1 0.9-0.8-0.4-2.1 0.6-0.7 0.1-2.2 2.7 0.1 4.1 1.5 1.2-0.1 0.4-0.7 3.1 0.5 0.8-0.4z\" id=\"GN\" name=\"Guinea\">\n </path>\n <path d=\"M891.6 417.4l0.8-2.9 6.1-0.1 1.3-1.6 1.8-0.1 2.2 1.6 1.7 0 1.9-1 1.1 1.8-2.5 1.5-2.4-0.2-2.4-1.3-2.1 1.5-1 0-1.4 0.9-5.1-0.1z\" id=\"GM\" name=\"The Gambia\">\n </path>\n <path d=\"M909.2 421l-0.1 2.2-0.6 0.7 0.4 2.1-0.9 0.8-1.2 0.1-1.5 1-1.7-0.1-2.6 3.1-2.9-2.6-2.4-0.5-1.3-1.8 0.1-1-1.7-1.3-0.4-1.4 3-1 1.9 0.2 1.5-0.8 10.4 0.3z\" id=\"GW\" name=\"Guinea-Bissau\">\n </path>\n <path d=\"M1050.3 487.3l0 7.7-8.2 0-1.9 0.3-1.1-0.9 1.9-7.2 9.3 0.1z\" id=\"GQ\" name=\"Equatorial Guinea\">\n </path>\n <path class=\"Greece\" d=\"M 1112.7 272.6 1115.8 274.8 1119.9 274.4 1123.9 274.8 1123.9 276 1126.7 275.2 1126.2 277.1 1118.6 277.6 1118.5 276.6 1111.9 275.3 1112.7 272.6 Z\">\n </path>\n <path class=\"Greece\" d=\"M 1121.9 239.9 1118.7 239.7 1116 239.1 1109.8 240.7 1113.8 244.3 1111.3 245.4 1108.4 245.4 1105.3 242.1 1104.4 243.5 1106 247.3 1108.9 250.3 1107 251.7 1110.2 254.6 1113 256.5 1113.4 260.1 1108.4 258.4 1110.2 261.7 1106.9 262.3 1109.4 268 1105.9 268.1 1101.3 265.3 1098.9 260.2 1097.6 255.9 1095.3 253 1092.3 249.3 1091.8 247.5 1094 244.4 1094.1 242.3 1095.8 241.4 1095.7 239.7 1099.1 239.2 1100.9 237.8 1103.7 237.9 1104.5 236.8 1105.5 236.6 1109.3 236.8 1113.3 235 1117.2 237.3 1121.8 236.7 1121.5 233.5 1124.2 235.2 1123.1 239.2 1121.9 239.9 Z\">\n </path>\n <path d=\"M896.3 1.4l19.9 3-6.7 1.4-13 0.2-18.5 0.4 1.4 0.7 12.3-0.5 9.7 1.4 7-1.2 2.4 1.4-4.5 2.4 9.2-1.6 17.1-1.5 10 0.8 1.7 1.7-14.8 2.9-2.2 1-11.4 0.8 8.1 0.2-4.9 3.2-3.6 2.9-1.2 5.2 3.7 3.2-5.9 0.1-6.5 1.6 6.3 2.6-0.1 4.2-4.2 0.5 4.1 4.3-8.7 0.4 4 2-1.6 1.8-5.7 0.8-5.5 0.1 4.2 3.4-0.5 2.4-7.3-2.2-2.4 1.4 5 1.3 4.6 3.2 0.6 4.3-7.4 1-2.7-2.1-4.2-3 0.5 3.6-5.4 2.8 10.7 0.2 5.5 0.3-11.9 4.7-12.2 4.3-12.7 1.8-4.6 0.1-4.9 2.1-7.5 5.8-10.2 3.9-3 0.3-6.1 1.3-6.6 1.4-4.8 3.4-1.4 4-3.4 3.8-8.6 4.6 0.3 4.5-3.6 4.8-4.1 5.7-6.5 0.4-5-4.8-9-0.1-3.2-3.2-0.8-5.6-4.8-7.2-0.7-3.7 1.5-5.1-3.7-5.1 3.3-4.1-1.9-2 7-6.4 7.2-2.1 2.6-2.2 2.8-4.2-5.5 1.9-2.6 0.8-4.1 0.7-4.2-1.7 1.5-3.7 3-2.8 3.8-0.1 7.6 1.5-5.3-3.4-2.7-1.8-4.4 0.7-2.6-1.3 7-4.8-1.3-2-1.1-3.5-1.4-5.4-3.6-1.9 1.4-2.1-8.1-2.9-7.7-0.4-10.1 0.2-9.5 0.4-3.1-1.6-3.8-3.1 11-1.5 7.6-0.2-14.6-1.3-6.5-1.9 2.2-1.8 15.7-2.2 15-2.2 2.8-1.6-8.1-1.6 4.6-1.7 14.7-2.9 5.4-0.4 0.2-1.8 9-1.1 11-0.6 10.4 0 2.8 1.2 10.6-2.2 7.1 1.5 4.6 0.3 6.2 1.3-6.7-2.1 1.6-1.7 12.7-2.2 11.6 0.2 5.1-1.4 11.9-0.3 26.3 0.4z\" id=\"GL\" name=\"Greenland\">\n </path>\n <path d=\"M488.1 387.5l-0.7 5.1-1.3 7.2 1.7 0 1.7 1.2 0.6-1 1.5 0.8-2.8 2.5-2.9 1.8-0.5 1.2 0.3 1.3-1.3 1.6-1.4 0.4 0.3 0.8-1.2 0.7-2 1.6-0.3 0.9-2.8-1.1-3.5-0.1-2.4-1.3-2.8-2.6 0.4-1.9 0.8-1.5-0.7-1.2 3.3-5.2 7.2 0 0.4-2.2-0.8-0.4-0.5-1.4-1.9-1.5-1.8-2.1 2.5-0.1 0.5-3.6 5.2 0 5.2 0.1z\" id=\"GT\" name=\"Guatemala\">\n </path>\n <path d=\"M662.9 463.5l-1 5.8-3.5 1.6 0.3 1.5-1.1 3.4 2.4 4.6 1.8 0 0.7 3.6 3.3 5.6-1.3 0.3-3.2-0.6-1.8 1.7-2.6 1.1-1.8 0.3-0.6 1.3-2.8-0.3-3.5-3-0.3-3-1.4-3.3 1-5.4 1.6-2.3-1.2-3-2-0.9 0.8-2.9-1.2-1.4-3 0.2-3.7-4.8 1.6-1.8 0-3 3.5-1 1.4-1.2-1.8-2.4 0.5-2.3 4.7-3.8 3.6 2.4 3.3 4.1 0.1 3.4 2.1 0.1 3 3.1 2.1 2.3z\" id=\"GY\" name=\"Guyana\">\n </path>\n <path d=\"M519.6 405.5l-1.9-0.1-0.9 0.9-2 0.8-1.4 0-1.3 0.8-1.1-0.2-0.9-1-0.6 0.2-0.9 1.5-0.5-0.1-0.2 1.4-2.1 1.7-1.2 0.8-0.6 0.8-1.5-1.3-1.4 1.7-1.2 0-1.3 0.1-0.2 3.2-0.8 0-0.8 1.5-1.8 0.3-0.8-2-1.7-0.6 0.7-2.6-0.7-0.7-1.2-0.4-2.5 0.7-0.1-0.8-1.6-1.1-1.1-1.2-1.6-0.6 1.3-1.6-0.3-1.3 0.5-1.2 2.9-1.8 2.8-2.5 0.6 0.3 1.3-1.1 1.6-0.1 0.5 0.5 0.9-0.3 2.6 0.6 2.6-0.2 1.8-0.7 0.8-0.7 1.7 0.3 1.3 0.4 1.5-0.1 1.2-0.6 2.5 0.9 0.8 0.2 1.6 1.2 1.5 1.4 1.9 1 1.3 1.7z\" id=\"HN\" name=\"Honduras\">\n </path>\n <path d=\"M1081.5 207.6l1.5 2.5 1.7 1.8-1.7 2.4-2.4-1.4-3.5 0.1-4.5-1.1-2.3 0.1-1 1.4-2-1.5-0.8 2.6 2.7 3 1.3 1.9 2.5 2.4 2.1 1.4 2.1 2.7 4.8 2.4-0.5 1-5-2.3-3.2-2.3-4.8-1.9-4.7-4.6 1-0.5-2.5-2.7-0.3-2.1-3.3-1-1.4 2.7-1.6-2.1 0-2.2 0.1-0.1 3.6 0.2 0.8-1 1.8 1 2 0.1-0.1-1.7 1.7-0.7 0.3-2.5 3.9-1.7 1.6 0.8 4 2.7 4.3 1.2 1.8-1z\" id=\"HR\" name=\"Croatia\">\n </path>\n <path d=\"M586.8 375.3l0.1 3.4-0.7 2.5-1.5 1.1 1.3 1.9-0.3 1.8-3.6-1.1-2.7 0.4-3.4-0.4-2.7 1.2-2.8-2 0.7-2.1 5.1 0.9 4.1 0.5 2.2-1.4-2.3-2.8 0.4-2.5-3.5-1 1.5-1.7 3.4 0.2 4.7 1.1z\" id=\"HT\" name=\"Haiti\">\n </path>\n <path d=\"M1096.2 191.9l3 1.7 0.5 1.7-2.9 1.3-1.9 4.2-2.6 4.3-3.9 1.2-3.2-0.3-3.7 1.6-1.8 1-4.3-1.2-4-2.7-1.6-0.8-1.2-2.1-0.8-0.1 1.3-4-1.1-1.4 2.8 0 0.2-2.6 2.7 1.7 1.9 0.6 4.1-0.7 0.3-1.3 1.9-0.2 2.3-0.9 0.6 0.4 2.3-0.8 1-1.5 1.6-0.4 5.5 1.9 1-0.6z\" id=\"HU\" name=\"Hungary\">\n </path>\n <path class=\"Indonesia\" d=\"M 1667.5 567.6 1665.1 567.7 1658 563.2 1663.4 561.9 1666.2 563.9 1668 565.8 1667.5 567.6 Z\">\n </path>\n <path class=\"Indonesia\" d=\"M 1692.3 558.9 1692.8 560.2 1692.7 562.1 1688.6 566.9 1683.6 568.3 1683 567.6 1683.7 565.4 1686.5 561.5 1692.3 558.9 Z\">\n </path>\n <path class=\"Indonesia\" d=\"M 1652.7 553.8 1654.6 555.5 1658.2 555 1659.4 557.7 1652.7 559 1648.8 559.9 1645.7 559.8 1647.9 556.1 1651.1 556.1 1652.7 553.8 Z\">\n </path>\n <path class=\"Indonesia\" d=\"M 1681 553.8 1679.9 557.4 1671.3 559.2 1663.8 558.4 1664 556 1668.6 554.7 1672 556.6 1675.8 556.1 1681 553.8 Z\">\n </path>\n <path class=\"Indonesia\" d=\"M 1600.8 545.3 1611.6 546 1613 543.3 1623.3 546.4 1625.1 550.6 1633.5 551.8 1640.2 555.6 1633.6 558 1627.5 555.4 1622.4 555.6 1616.6 555.1 1611.4 554 1605 551.5 1600.9 550.9 1598.5 551.7 1588.3 549 1587.5 546.3 1582.4 545.8 1586.6 539.7 1593.4 540.1 1597.8 542.6 1600.2 543.1 1600.8 545.3 Z\">\n </path>\n <path class=\"Indonesia\" d=\"M 1748.7 541.7 1745.5 546.1 1745.3 541.3 1746.4 539 1747.7 536.8 1748.9 538.7 1748.7 541.7 Z\">\n </path>\n <path class=\"Indonesia\" d=\"M 1707.3 524 1705.1 526.2 1701.3 525 1700.3 522.2 1706 521.9 1707.3 524 Z\">\n </path>\n <path class=\"Indonesia\" d=\"M 1725.7 521.7 1727.5 526.6 1722.9 523.9 1718.2 523.4 1714.9 523.8 1711 523.6 1712.5 520.1 1719.5 519.8 1725.7 521.7 Z\">\n </path>\n <path class=\"Indonesia\" d=\"M 1785.5 518.5 1784.5 539.4 1782.9 560.4 1778.3 555.1 1772.7 553.8 1771.2 555.6 1764 555.8 1766.8 550.6 1770.5 548.8 1769.5 541.8 1767.2 536.5 1756.5 531 1751.9 530.5 1743.6 524.5 1741.8 527.7 1739.6 528.2 1738.5 525.9 1738.6 523.1 1734.4 519.9 1740.6 517.6 1744.6 517.7 1744.2 516 1735.9 516 1733.7 512.2 1728.7 511 1726.4 507.8 1734 506.3 1736.9 504.2 1746 506.8 1746.9 509.2 1748.2 519.6 1753.9 523.4 1758.9 516.6 1765.5 512.8 1770.5 512.8 1775.3 515 1779.4 517.3 1785.5 518.5 Z\">\n </path>\n <path class=\"Indonesia\" d=\"M 1696.4 492.7 1691.9 499.1 1687.6 500.3 1682.2 499.1 1672.7 499.4 1667.8 500.3 1667 505.2 1672 510.9 1675.1 508 1685.7 505.8 1685.2 508.7 1682.7 507.8 1680.2 511.6 1675.1 514.1 1680.2 522.3 1679.1 524.5 1683.9 531.9 1683.6 536.1 1680.5 538 1678.4 535.7 1681.4 530.5 1675.7 533 1674.4 531.2 1675.2 528.7 1671.3 524.9 1672 518.7 1668.1 520.6 1668.3 528.1 1668.1 537.3 1664.4 538.2 1662.1 536.4 1664 530.5 1663.4 524.3 1661 524.2 1659.4 519.8 1661.9 515.6 1662.8 510.5 1665.8 500.8 1666.9 498.2 1671.7 493.4 1676.2 495.3 1683.3 496.2 1689.8 495.9 1695.4 491.3 1696.4 492.7 Z\">\n </path>\n <path class=\"Indonesia\" d=\"M 1716 494.6 1715.7 500.2 1712.8 499.5 1711.9 503.4 1714.2 506.8 1712.6 507.6 1710.4 503.5 1708.7 495.3 1709.7 490.2 1711.5 487.9 1712 491.4 1715.4 491.9 1716 494.6 Z\">\n </path>\n <path class=\"Indonesia\" d=\"M 1608 488.9 1609 493.2 1612.9 496.9 1616.6 495.6 1620.2 496 1623.5 492.8 1626.2 492.2 1631.6 494 1636.2 492.6 1638.8 483.7 1640.9 481.5 1642.6 474.2 1649.1 474.2 1654.1 475.3 1651.1 481.1 1655.5 487.1 1654.6 490.1 1661 496 1654.3 496.8 1652.5 501.2 1652.7 507 1647.2 511.4 1646.8 517.8 1644.3 527.6 1643.6 525.3 1637 528.2 1634.9 524.3 1630.9 523.9 1628.1 521.8 1621.3 524.2 1619.4 521 1615.6 521.4 1611 520.7 1610.4 512.1 1607.6 510.3 1604.9 504.8 1604.1 499.2 1604.7 493.2 1608 488.9 Z\">\n </path>\n <path class=\"Indonesia\" d=\"M 1585.2 539.4 1579 539.5 1574.5 534.2 1567.4 528.9 1565.1 525 1561 519.8 1558.3 515 1554.1 506 1549.2 500.6 1547.5 495.1 1545.3 490.1 1540.1 486.1 1537 480.6 1532.6 477 1526.4 469.9 1525.8 466.6 1529.4 466.9 1538.3 468.1 1543.5 474.4 1548.1 478.8 1551.3 481.4 1556.8 488.3 1562.6 488.4 1567.4 492.8 1570.8 498.2 1575.1 501.2 1572.8 506.4 1576.1 508.6 1578.1 508.8 1579 513.3 1580.9 516.8 1585 517.4 1587.6 521.5 1585.9 529.5 1585.2 539.4 Z\">\n </path>\n <path d=\"M1427.6 308l-2.8 3-0.9 6 5.8 2.4 5.8 3.1 7.8 3.6 7.7 0.9 3.8 3.2 4.3 0.6 6.9 1.5 4.6-0.1 0.1-2.5-1.5-4.1-0.2-2.7 3.1-1.4 1.5 5.1 0.4 1.2 5.5 2.5 3.2-1 4.7 0.4 4.5-0.2-0.5-3.9-2.6-2.1 4.2-0.8 3.9-4.8 5.4-4 4.9 1.5 3.2-2.7 3.6 4-1.2 2.7 6.1 1 1 2.4-1.7 1.2 1.4 3.9-4.2-1.1-6.2 4.4 0.9 3.7-2 5.4 0.3 3.1-1.6 5.3-4.6-1.5 0.9 6.7-1 2.2 1 2.7-2.5 1.5-4.4-10.2-1.5 0-0.3 4.2-3.6-3.4 1.2-3.6 2.4-0.4 1.6-5.4-3.4-1.1-5.1 0.1-5.4-0.9-1.2-4.5-2.7-0.3-4.9-2.8-1.2 4.4 4.6 3.4-3 2.4-0.9 2.3 3.7 1.7-0.3 3.9 2.6 4.8 1.6 5.3-0.5 2.4-3.8-0.1-6.6 1.3 0.9 4.8-2.4 3.8-7.5 4.4-5.3 7.5-3.8 4.1-5 4.2 0.3 2.9-2.6 1.6-4.8 2.3-2.6 0.3-1.2 4.9 1.9 8.4 0.7 5.3-1.9 6.1 0.7 10.9-2.9 0.3-2.3 4.9 1.9 2.2-5.1 1.8-1.7 4.3-2.2 1.9-5.6-6-3.1-9-2.5-6.5-2.2-3-3.4-6.2-2-8-1.4-4-5.9-8.8-3.5-12.5-2.6-8.2-0.8-7.8-1.7-6-7.7 3.9-4-0.8-8.1-7.8 2.4-2.3-1.9-2.5-7.1-5.5 3.2-4.3 12.1 0-1.8-5.5-3.5-3.2-1.4-5-4-2.8 4.9-6.8 6.5 0.5 4.5-6.7 2.2-6.5 3.9-6.5-1-4.6 3.8-3.7-5.1-3.1-2.9-4.4-3.3-5.6 2-2.8 8.5 1.6 5.7-1 3.8-5.4 7.7 7.6 0.8 5.2 3 3.3 0.6 3.3-4.1-0.9 3.2 7.1 6.2 4 8.6 4.5z\" id=\"IN\" name=\"India\">\n </path>\n <path d=\"M956.7 158.2l0.7 4.4-3.9 5.5-8.8 3.6-6.8-0.9 4.3-6.4-2.1-6.2 6.7-4.8 3.7-2.8 0.9 3.2-1.2 3.3 3-0.1 3.5 1.2z\" id=\"IE\" name=\"Ireland\">\n </path>\n <path d=\"M1229 253.2l1.8-0.2 5.3-4.7 1.9-0.5 1.9 1.9-1.2 3.1 3.9 3.4 1.3-0.4 2.5 4.8 5.3 1.3 4.3 3.2 7.7 1.1 8-1.7 0.2-1.5 4.4-1.2 3-3.7 3.6 0.2 2-1.2 3.9 0.6 6.6 3.3 4.3 0.7 7.3 5.6 4 0.3 1.7 5.3-0.6 8-0.5 4.7 2.5 1-1.6 3.5 2.7 5.1 1.2 4.1 4.3 1.1 1.1 4.1-3.9 5.8 3.2 3.4 2.8 3.9 5.7 2.8 1 5.6 2.7 1.1 0.9 2.9-7.5 3.4-1.1 7.4-10.6-1.9-6.2-1.5-6.3-0.8-3.3-7.9-2.8-1.1-4.1 1.1-5.1 3.1-7-2.1-6.1-5-5.5-1.8-4.4-6.1-5.2-8.5-2.8 1-3.7-2.1-1.7 2.5-3.5-3.4-0.5-3.4-1.7 0 0.2-4.7-3.5-4.8-7.1-3.6-4.6-6.1 0.5-5 2.3-2.2-0.9-3.7-3.8-2-4.7-7.6-3.8-5.1 0.7-2-2.9-7.3 3.3-1.9 1.2 2.5 3.2 2.9 3.8 0.9z\" id=\"IR\" name=\"Iran\">\n </path>\n <path d=\"M1223.5 263.2l4.7 7.6 3.8 2 0.9 3.7-2.3 2.2-0.5 5 4.6 6.1 7.1 3.6 3.5 4.8-0.2 4.7 1.7 0 0.5 3.4 3.5 3.4-3.3-0.3-3.7-0.6-3.3 6.2-10.2-0.5-16.8-12.9-8.6-4.5-6.8-1.8-3.1-7.8 11-6.7 1-7.7-1.2-4.7 2.7-1.6 2.1-4 2.1-1 6.3 0.9 2.1 1.6 2.4-1.1z\" id=\"IQ\" name=\"Iraq\">\n </path>\n <path d=\"M924.8 84.5l-1.4 3.6 4.4 3.8-6.1 4.3-13.1 3.9-3.9 1.1-5.6-0.9-11.9-1.8 4.8-2.5-9-2.7 7.9-1.1 0.1-1.7-8.8-1.3 3.6-3.7 6.6-0.8 6 3.8 7-3 5.1 1.5 7.3-2.9 7 0.4z\" id=\"IS\" name=\"Iceland\">\n </path>\n <path d=\"M1179.1 288.2l0.4 2.6-0.6 1 0.1 0-0.7 2-2.1-0.8-0.7 4.2 1.5 0.7-1.3 0.9-0.1 1.7 2.5-0.8 0.4 2.5-1.8 10.2-0.7-1.6-3.9-9.4 1.4-2.1-0.4-0.4 1.1-3 0.6-4.8 0.6-1.7 0.1 0 1.8 0 0.4-1.1 1.4-0.1z\" id=\"IL\" name=\"Israel\">\n </path>\n <path class=\"Italy\" d=\"M 1068.2 256.4 1066.5 261.5 1067.4 263.4 1066.5 266.7 1062.3 264.3 1059.6 263.6 1052.1 260.4 1052.6 257.1 1058.8 257.7 1064.2 257 1068.2 256.4 Z\">\n </path>\n <path class=\"Italy\" d=\"M 1034.2 237.4 1037.5 241.9 1037.1 250.4 1034.7 250 1032.6 252.1 1030.6 250.4 1030.1 242.7 1028.8 239.1 1031.7 239.4 1034.2 237.4 Z\">\n </path>\n <path class=\"Italy\" d=\"M 1055.9 203.9 1055.5 207 1056.9 209.7 1052.8 208.7 1048.9 211 1049.3 214.1 1048.8 215.9 1050.7 219.1 1055.7 222.3 1058.6 227.6 1064.7 232.7 1068.7 232.6 1070.1 234 1068.7 235.3 1073.5 237.6 1077.5 239.5 1082.2 242.9 1082.8 244 1082 246.3 1078.9 243.3 1074.3 242.3 1072.4 246.4 1076.3 248.8 1075.9 252.1 1073.8 252.5 1071.3 258 1069.1 258.5 1069 256.5 1069.9 253.1 1071 251.7 1068.7 248 1066.9 244.8 1064.7 244 1062.9 241.3 1059.5 240.1 1057.1 237.5 1053.3 237.1 1049 234.3 1044.1 230.1 1040.4 226.5 1038.5 220.2 1035.9 219.5 1031.7 217.4 1029.4 218.2 1026.5 221.2 1024.4 221.6 1024.9 218.9 1022.1 218.1 1020.6 213.2 1022.3 211.3 1020.8 208.9 1020.9 207.1 1023.1 208.5 1025.6 208.2 1028.3 206 1029.2 207 1031.6 206.8 1032.6 204.3 1036.4 205.1 1038.5 204 1038.8 201.5 1041.9 202.4 1042.4 201.2 1047.3 200.1 1048.6 202.2 1055.9 203.9 Z\">\n </path>\n <path d=\"M556.5 387.1l-1.8 1.1-3-1.1-2.9-2.3 0.8-1.5 2.4-0.4 1.3 0.2 3.7 0.6 2.7 1.5 0.8 1.8-4 0.1z\" id=\"JM\" name=\"Jamaica\">\n </path>\n <path d=\"M1198.1 295.3l-0.9 1-10.4 3.2 6 6.5-1.6 1-0.7 2.2-4.1 0.9-1.1 2.3-2.1 2-6.2-1.1-0.3-0.9 1.8-10.2-0.4-2.5 0.6-1.9-0.4-4 0.7-2 6.3 2.6 9.7-6.9 3.1 7.8z\" id=\"JO\" name=\"Jordan\">\n </path>\n <path class=\"Japan\" d=\"M 1708.5 282.6 1710.1 284.8 1708.8 288.7 1705.7 286.6 1703.6 288.1 1703.7 291.8 1699.4 290 1698.2 287 1699.5 283.1 1702.9 283.9 1703.9 281.2 1708.5 282.6 Z\">\n </path>\n <path class=\"Japan\" d=\"M 1733.1 263.4 1733.7 268.5 1736.2 271.7 1735.6 276.2 1730.2 279.2 1721 279.6 1716.6 287 1711.9 284.5 1709.5 279.7 1700.9 281.1 1695.8 284.1 1689.6 284.3 1697 289 1697.8 299.9 1695.3 302.6 1691.7 300.1 1690.8 294.3 1686.7 292.5 1682.7 288.1 1687 286.1 1688.1 282 1692 278.7 1694 274.3 1703.7 272.4 1710 273.7 1710 262.3 1715.1 265.4 1719.6 259 1721.3 256.5 1720.3 248.7 1715.2 241.5 1715 237.5 1719.8 236.3 1728 245.2 1730.8 250.3 1729.5 256.8 1733.1 263.4 Z\">\n </path>\n <path class=\"Japan\" d=\"M 1721.2 218.6 1725.7 219.9 1727.5 217.3 1733.5 224.4 1727.1 226.1 1726.7 232.4 1715.8 228.1 1717.4 235 1711.7 235.1 1707 228.8 1706.4 223.9 1711.6 223.6 1707.2 214.8 1705.4 209.9 1715.9 216.5 1721.2 218.6 Z\">\n </path>\n <path d=\"M1338.3 160.5l4.4-0.3 9.2-5.8-0.8 2 8.4 4.7 18.3 15.6 1.1-3.2 8.4 3.5 6.2-1.6 3.3 1.1 4.1 3.6 4 1.2 3.3 2.7 6-0.9 4.4 3.8-1.9 4.2-3.8 0.6 2.5 6.2-1.6 2.9-10.8-2.1 1 11.3-2 1.4-9.1 2.5 8.8 11-2.9 1.6 1.7 3.7-3.5-1-3.4-2.3-7.9-0.6-8.6-0.2-1.6 0.7-8.2-2.7-2.5 1.4 0.5 3.7-9.2-2.2-3.1 0.9-0.3 2.8-2.6 1.2-5.4 4.4-0.9 4.6-2 0-2.3-3-6.7-0.2-2.5-5.2-2.6-0.1-1.5-6.4-7.6-4.6-8.6 0.5-5.7 0.9-6.6-5.7-4.8-2.4-9.2-4.5-1.1-0.5-12 3.7 6.2 23.4-2.6 0.3-4.8-5-3.9-1.8-5.6 1.3-1.8 2.2-0.6-1.6 0.6-2.6-1.5-2.2-6.5-2.2-3.7-5.7-3.2-1.6-0.6-2.1 5.1 0.6-1-4.6 4.1-1 4.7 0.9-0.7-6.1-1.9-3.9-5 0.3-4.7-1.5-5.1 2.7-4.4 1.4-2.8-1.1-0.2-3.2-4.3-4.2-3.6 0.2-5.3-4.2 1.7-4.8-1.8-1.2 2.2-6.9 6 3.6-0.6-4.5 8.1-6.7 7.6-0.2 12 4.3 6.6 2.5 4.4-2.6 7.7-0.1 7.3 3.2 0.8-1.9 7 0.3 0.2-2.9-9.4-4.3 3.5-3-1.5-1.6 4-1.6-5.1-4.2 1.4-2.1 17-2.1 1.7-1.5 10.9-2.3 3.1-2.5 9.1 1.3 4.4 6.3 4.3-1.5 7.1 2.1 1.1 3.3z\" id=\"KZ\" name=\"Kazakhstan\">\n </path>\n <path d=\"M1223.5 476.7l-4.9 7.2 0.2 23.4 3.3 5.3-4 2.6-1.4 2.7-2.2 0.4-0.8 4.6-1.9 2.6-1.1 4.2-2.3 2.1-8.1-6.4-0.3-3.7-20.5-13.1 0.4-4.7-1.4-2.5 0-0.3 1.6-2.6 2.8-4.2 2.1-4.7-2.6-7.4-0.7-3.2-2.7-4.5 3.4-3.8 3.8-4.2 2.9 1.1 0.1 3.6 1.9 2.1 4 0 7.2 5.4 1.8 0.1 1.3-0.2 1.3 0.7 3.8 0.6 1.6-2.7 5.2-2.7 2.3 2.2 3.9 0z\" id=\"KE\" name=\"Kenya\">\n </path>\n <path d=\"M1400.5 230.2l-0.2 1.4-6.9 3.4-1 2.6-6.4 0.7-0.6 4.1-5.8-0.9-3.2 1.3-4.1 3 1.2 1.5-1.1 1.4-9.6 1-7.1-2.1-5.5 0.5-0.6-3.6 6 1 1.4-1.9 4.1 0.6 5.3-4.6-7.2-3.4-3.2 1.6-4.6-2.4 3-4.1-1.7-0.6 0.3-2.8 3.1-0.9 9.2 2.2-0.5-3.7 2.5-1.4 8.2 2.7 1.6-0.7 8.6 0.2 7.9 0.6 3.4 2.3 3.5 1z\" id=\"KG\" name=\"Kyrgyzstan\">\n </path>\n <path d=\"M1589.8 410.6l1.8 4.3 0.1 7.7-9 5 2.8 3.8-5.9 0.5-4.6 2.6-4.8-0.9-2.6-3.4-3.5-6.6-2.1-7.8 3.1-5.3 7.1-1.2 5.3 0.9 5 2.5 2-4.4 5.3 2.3z\" id=\"KH\" name=\"Cambodia\">\n </path>\n <path d=\"M1652.9 259.5l0-0.6 2.5 0.2 0.6-2.8 3.6-0.4 2-0.4 0-1.5 8.3 7.5 3.3 4.2 3.4 7.4-0.5 3.5-4.3 1.2-3.1 2.7-4.6 0.5-2.1-3.5-1.1-4.8-5.3-6.6 3.4-1.1-6.1-5.5z\" id=\"KR\" name=\"Republic of Korea\">\n </path>\n <path d=\"M1247.5 309.4l1.5 2.8-0.3 1.5 2.4 4.8-3.9 0.2-1.7-3.1-5-0.6 3.3-6.2 3.7 0.6z\" id=\"KW\" name=\"Kuwait\">\n </path>\n <path d=\"M1589.8 410.6l-5.3-2.3-2 4.4-5-2.5 1.5-2.9-0.4-5.4-5.3-5.6-1.3-6.4-5-5.2-4.3-0.4-0.8 2.2-3.2 0.2-1.9-1.1-5.3 3.8-1-5.8 0.4-6.7-3.8-0.3-0.9-3.9-2.7-2 0.8-2.3 4.1-4.2 0.8 1.5 3 0.2-2-7.4 2.7-0.9 4 5.1 3.5 5.8 6.8 0 3 5.6-3.3 1.7-1.2 2.3 7.3 3.9 5.7 7.6 4.4 5.6 4.9 4.5 2 4.5-0.2 6.4z\" id=\"LA\" name=\"Lao PDR\">\n </path>\n <path d=\"M1179.1 288.2l-1.4 0.1-0.4 1.1-1.8 0 1.3-5.3 2.2-4.5 0-0.2 2.5 0.3 1.2 2.5-2.7 2.5-0.9 3.5z\" id=\"LB\" name=\"Lebanon\">\n </path>\n <path d=\"M938.6 452.5l-0.2 1.8 0.5 3.1-1.2 2.9 1.6 1.8 1.8 0.4 2.4 2.7 0.2 2.5-0.6 0.8-0.4 5.3-1.5 0.1-5.8-3.1-5.2-4.9-4.8-3.5-3.8-4.1 1.4-2.1 0.3-1.9 2.6-3.4 2.6-3 1.3-0.2 1.4-0.7 2.4 3.9-0.4 2.6 1.1 1.4 1.6 0 1.1-2.6 1.6 0.2z\" id=\"LR\" name=\"Liberia\">\n </path>\n <path d=\"M1122.6 299.1l-1.7 3.1 1 2.8-1.1 3.9 2 5.2 1.3 22.8 1 23.7 0.5 12.8-6.4 0 0 2.7-22.6-12.3-22.5-12.3-5.5 3.5-3.8 2.4-3.2-3.5-8.8-2.8-2.5-4-4.5-3-2.5 1.2-2.1-3.6-0.2-2.7-3.4-4.7 2.2-2.7-0.6-4 0.6-3.5-0.4-3 0.8-5.2-0.4-3-1.9-5.7 2.6-1.4 0.4-2.8-0.6-2.6 3.6-2.5 1.6-2.1 2.6-1.8 0.1-4.9 6.4 2.2 2.3-0.6 4.5 1.1 7.3 2.9 2.8 5.7 4.9 1.2 7.8 2.7 6 3.2 2.5-1.7 2.5-2.9-1.6-4.9 1.5-3.2 3.7-3 3.7-0.8 7.4 1.3 2 2.8 2 0.1 1.8 1.1 5.4 0.7 1.5 2.1z\" id=\"LY\" name=\"Libya\">\n </path>\n <path d=\"M1445.9 462l-4.8 1.5-2.9-5.1-1.4-9.2 2-10.4 4.1 3.5 2.8 4.5 3.1 6.7-0.6 6.7-2.3 1.8z\" id=\"LK\" name=\"Sri Lanka\">\n </path>\n <path d=\"M1139.1 697.9l-2 0.7-3.7-5 3.2-4 3.1-2.5 2.7-1.4 2.2 2 1.7 2-1.9 3.1-1.1 2.1-3.1 1-1.1 2z\" id=\"LS\" name=\"Lesotho\">\n </path>\n <path d=\"M1111.1 147.6l1 2.7-3.6 2-0.5 3.4-4.8 2.3-4.7 0-1.4-1.9-2.5-0.7-0.6-1.5 0.2-1.7-2.2-0.9-5.1-1.1-1.7-5.1 5.1-1.8 7.9 0.4 4.5-0.6 0.9 1.2 2.5 0.4 5 2.9z\" id=\"LT\" name=\"Lithuania\">\n </path>\n <path d=\"M1016.9 185.4l-1.4 0.1-1.1-0.5 0.4-3.5 1.3-0.2 1 1.4-0.2 2.7z\" id=\"LU\" name=\"Luxembourg\">\n </path>\n <path d=\"M1112.8 136.5l2.5 1.3 1 2.9 2.1 3.6-4.6 2.3-2.7 1-5-2.9-2.5-0.4-0.9-1.2-4.5 0.6-7.9-0.4-5.1 1.8-0.5-4.5 1.7-3.8 4.1-2 4.4 4.5 3.7-0.2 0.1-4.6 3.8-1 2.1 0.7 4.4 2.2 3.8 0.1z\" id=\"LV\" name=\"Latvia\">\n </path>\n <path d=\"M974.8 276l1.9 4.1 0.3 3.9 1.9 6.8 1.4 1.4-1 2.5-7.1 1.1-2.5 2.3-3.1 0.6-0.3 4.8-6.4 2.5-2.1 3.2-4.5 1.7-5.4 1-8.9 4.8-0.1 7.6-0.9 0 0.1 3.4-3.4 0.2-1.8 1.5-2.5 0-2-0.9-4.6 0.7-1.9 5-1.8 0.5-2.7 8.1-7.9 6.9-2 8.9-2.4 2.9-0.7 2.3-12.5 0.5-0.1 0 0.3-3 2.2-1.7 1.9-3.4-0.3-2.2 2-4.5 3.2-4.1 1.9-1 1.6-3.7 0.2-3.5 2.1-3.9 3.8-2.4 3.6-6.5 0.1-0.1 2.9-2.5 5.1-0.7 4.4-4.4 2.8-1.7 4.7-5.4-1.2-7.9 2.2-5.6 0.9-3.4 3.6-4.3 5.4-2.9 4.1-2.7 3.7-6.6 1.8-4 3.9 0.1 3.1 2.7 5.1-0.4 5.5 1.4 2.4 0z\" id=\"MA\" name=\"Morocco\">\n </path>\n <path d=\"M1129.4 210.3l-1.3-2.9 0.2-2.7-0.6-2.7-3.4-3.8-2-2.6-1.8-1.8-1.6-0.7 1.1-0.9 3.2-0.6 4 1.9 2 0.3 2.6 1.7-0.1 2.1 2 1 1.1 2.6 2 1.6-0.2 1 1 0.6-1.3 0.5-3-0.2-0.6-0.9-1 0.5 0.6 1.1-1.1 2.1-0.6 2.1-1.2 0.7z\" id=\"MD\" name=\"Moldova\">\n </path>\n <path d=\"M1267.9 588.9l0.4 7.7 1.3 3-0.7 3.1-1.2 1.8-1.6-3.7-1.2 1.9 0.8 4.7-0.7 2.8-1.7 1.4-0.7 5.5-2.7 7.5-3.4 8.8-4.3 12.2-2.9 8.9-3.1 7.5-4.6 1.5-5.1 2.7-3-1.6-4.2-2.3-1.2-3.4 0-5.7-1.5-5.1-0.2-4.7 1.3-4.6 2.6-1.1 0.2-2.1 2.9-4.9 0.8-4.1-1.1-3-0.8-4.1-0.1-5.9 2.2-3.6 1-4.1 2.8-0.2 3.2-1.3 2.2-1.2 2.4-0.1 3.4-3.6 4.9-4 1.8-3.2-0.6-2.8 2.4 0.8 3.3-4.4 0.3-3.9 2-2.9 1.8 2.8 1.4 2.7 1.2 4.3z\" id=\"MG\" name=\"Madagascar\">\n </path>\n <path d=\"M449.3 335.9l2.2-0.2-3.2 5.7-1.8 4.6-1.8 8.6-1.1 3.1 0.4 3.5 1.3 3.2 0.4 4.9 3 4.8 0.8 3.7 1.7 3.1 5.7 1.7 1.9 2.7 5.2-1.8 4.3-0.6 4.4-1.2 3.6-1.1 3.9-2.6 1.8-3.7 1.2-5.4 1.2-1.9 4-1.7 6.1-1.5 4.9 0.3 3.4-0.6 1.2 1.4-0.6 3.1-3.5 3.8-1.8 3.9 0.9 1.1-1.2 2.8-2.1 5-1.2-1.7-1.1 0.1-1.1 0.1-2.5 3.9-0.9-0.8-0.7 0.3-0.1 1-5.2-0.1-5.2 0-0.5 3.6-2.5 0.1 1.8 2.1 1.9 1.5 0.5 1.4 0.8 0.4-0.4 2.2-7.2 0-3.3 5.2 0.7 1.2-0.8 1.5-0.4 1.9-5.6-6.9-2.6-2.1-4.4-1.7-3.2 0.5-4.8 2.4-2.9 0.6-3.7-1.7-4.1-1.2-4.8-2.9-4.1-0.9-5.9-3-4.3-3.1-1.1-1.7-3.1-0.4-5.4-2-1.9-2.9-5.4-3.7-2.2-4-0.8-3.2 1.9-0.6-0.3-1.8 1.6-1.7 0.4-2.2-1.5-2.9 0-2.5-1.3-3.3-3.8-6.4-4.6-5-1.9-4-4.1-2.6-0.7-1.6 1.7-3.9-2.4-1.5-2.5-3.2-0.2-4.4-2.8-0.6-2.3-3.3-1.7-3.2 0.3-2-1.5-4.8-0.3-4.9 0.8-2.5-3.1-2.6-1.9 0.3-2.4-1.7-1.8 2.6-0.1 3-1 4.9 1 2.6 2.8 4.4 0.4 1.6 0.7 0.4 0.1 2.2 1-0.1 0 4.2 1.3 1.6 0.5 2.3 2.7 3.2 0.4 6 1 2.8 0.9 3-0.3 3.4 2.6 0.2 1.6 2.9 1.5 2.9-0.3 1.2-2.8 2.3-1 0-0.7-3.9-2.9-3.7-3.4-3.1-2.5-1.6 1.2-4.7-0.1-3.5-2.1-2-3.1-2.8-0.9 0.8-1-1.7-3-1.5-2.2-3.8 0.5-0.4 2.1 0.3 2.7-2.4 1-2.9-2.9-4.6-2.6-1.7-0.8-4-0.6-4.3-0.8-5.1-0.2-5.8 6.3-0.5 7.1-0.7-0.9 1.3 7 3.1 10.9 4.5 10.8 0 4.3 0 0.8-2.7 9.4 0 1.3 2.3 2.1 2.1 2.4 2.8 0.8 3.3 0.4 3.6 2.3 1.9 4 1.9 4.8-5 4.5-0.2 3.2 2.6 1.6 4.4 0.9 3.8 2.4 3.6 0.2 4.5 0.9 3 3.9 2 3.6 1.4z\" id=\"MX\" name=\"Mexico\">\n </path>\n <path d=\"M1105.5 236.6l-1 0.2-0.8 1.1-2.8-0.1-1.8 1.4-3.4 0.5-2.3-1.5-1-2.7 0.5-2.2 0.7 0.1 0.1-1.3 2.9-1 1.2-0.3 1.7-0.3 2.4-0.2 2.8 2.1 0.8 4.2z\" id=\"MK\" name=\"Macedonia\">\n </path>\n <path d=\"M1010.2 378.8l0.1 14.8-3.1 4.3-0.4 4-5 1-7.7 0.5-2 2.3-3.6 0.3-3.6 0-1.4-1.2-3.1 0.9-5.3 2.7-1.1 2-4.3 2.8-0.8 1.7-2.4 1.3-2.7-0.9-1.5 1.6-0.9 4.4-4.5 5.3 0.2 2.2-1.6 2.7 0.4 3.7-2.4 1-1.3 0.8-0.9-2.7-1.6 0.7-1-0.1-1 1.8-4.4 0-1.5-1-0.8 0.6-1.7-1.9 0.3-1.9-0.7-0.7-1.2 0.6 0.3-2.1 1.1-1.6-2.3-2.7-0.6-1.8-1.3-1.4-1.1-0.2-1.3 0.9-1.9 0.9-1.5 1.4-2.4-0.5-1.6-1.7-0.9-0.2-1.5 0.9-0.9 0-0.3-2.4 0.3-2-0.5-2.4-2-1.8-1.1-3.7-0.2-4 1.9-1.2 1-3.8 1.8-0.1 3.9 1.8 3.2-1.3 2.1 0.4 0.9-1.4 22.5-0.1 1.3-4.5-1-0.8-2.5-27.7-2.4-27.7 8.5-0.1 18.6 14 18.7 14 1.3 3 3.5 1.8 2.6 1.1 0.1 4.1 6.2-0.7z\" id=\"ML\" name=\"Mali\">\n </path>\n <path d=\"M1548.4 364.2l-4.1 4.2-0.8 2.3-3 1.5-2.8 2.8-3.9 0.3-1.5 6.9-2.2 1.2 3.5 5.6 4.1 4.7 2.9 4.3-1.4 5.5-1.8 1.2 1.8 3.2 4.3 5.1 1 3.6 0.2 3 2.7 5.9-2.6 6-2.2 6.6-0.9-4.8 1.3-4.9-2.2-3.8-0.2-7-2.6-3.4-2.7-7.6-2-8.1-3.1-5.4-3.2 3.3-5.8 4.5-3.3-0.5-3.6-1.5 0.9-8-2-6-5.3-7.4 0.3-2.3-3.4-0.9-4.6-5.2-1.1-5.2 2.1 1-0.6-4.6 2.5-1.5-1-2.7 1-2.2-0.9-6.7 4.6 1.5 1.6-5.3-0.3-3.1 2-5.4-0.9-3.7 6.2-4.4 4.2 1.1-1.4-3.9 1.7-1.2-1-2.4 3.1-0.5 2.7 3.8 2.7 1.5 1.3 4.9 0.9 5.3-4.2 5.4 0.7 7.6 5.6-1.1 2.4 5.9 3.7 1.3-0.8 5.3 4.5 2.4 2.6 1.2 3.8-1.9 0.5 2.7z\" id=\"MM\" name=\"Myanmar\">\n </path>\n <path d=\"M1090.6 227.2l-0.8 1.4-1.4 0.6-0.4-1.2-1.9 3.1 0.5 2.1-1.1-0.5-1.7-2.1-2.3-1.3 0.5-1 0.4-3.5 1.6-1.5 0.9-0.6 1.4 1.1 0.9 0.9 1.7 0.7 2.1 1.3-0.4 0.5z\" id=\"ME\" name=\"Montenegro\">\n </path>\n <path d=\"M1496.2 181.5l4-1.2 5.7-0.8 5.4 0.9 6.6 2.9 4.9 3.2 4.6 0 6.8 1 3.6-1.6 5.9-1 4.4-4.4 3.4 0.7 3.9 2.1 5.6-0.6 0.6 4.7 0.3 6.3 2.8 2.5 2.3-0.8 5.5 1 2.5-2.3 5.2 2 7.2 4.4 0.8 2.2-4.4-0.7-6.8 0.8-2.5 1.8-1.3 4.2-6.4 2.4-3.2 3.4-5.9-1.3-3.2-0.6-0.5 4.1 2.9 2.4 1.9 2.1-2.4 2.2-2 3.4-4.9 2.2-7.6 0.2-7.2 2.2-4.4 3.4-3.3-1.9-6.2 0-9.4-3.9-5.6-0.9-6.4 0.9-11.3-1.5-5.6 0.2-4.7-3.8-5-5.8-3.4-0.7-8-4-7.2-0.8-6.5-1.1-3-2.8-1.4-7.3-5.8-5.1-8.2-2.3-5.7-3.3-3.3-4.4 4.7-1.1 6.7-5.3 5.9-2.9 5.3 1.9 5.2 0.1 4.8 2.9 5 0.2 8 1.6 2.4-4.4-4-3.6 1.3-6.4 7 2.5 4.8 0.8 6.7 1.6 3.6 4.6 8.5 2.6z\" id=\"MN\" name=\"Mongolia\">\n </path>\n <path d=\"M1166.7 673.5l-4.1 0-0.3-2.9-0.6-2.9-0.4-2.3 1.4-7.1-1.1-4.6-2.2-9 6.2-7.3 1.7-4.6 0.8-0.6 0.9-3.8-0.8-1.9 0.4-4.8 1.3-4.4 0.4-8.2-2.8-2-2.7-0.5-1.1-1.6-2.6-1.3-4.7 0.1-0.2-2.4-0.4-4.6 17.2-5.3 3.2 3.1 1.5-0.6 2.2 1.6 0.2 2.6-1.3 3 0.2 4.5 3.5 4 1.9-4.5 2.5-1.3-0.1-8.3-2.2-4.6-1.9-2.1-0.4 0-0.6-7.3 1.5-6.1 2.2-0.2 6.7 1.8 1.5-0.8 3.9-0.2 2.1-1.9 3.4 0.1 6.2-2.5 4.6-3.7 0.9 2.8-0.5 6.4 0.5 5.7-0.2 10 0.8 3.1-1.9 4.6-2.4 4.5-3.7 4-5.3 2.4-6.5 3.1-6.6 6.9-2.2 1.2-4.2 4.6-2.3 1.4-0.8 4.6 2.4 4.9 0.9 3.7 0 2 1-0.4-0.5 6.3-1.1 3 1.2 1.1-1 2.7-2.4 2.3-4.7 2.1-6.9 3.5-2.5 2.4 0.3 2.7 1.3 0.4-0.7 3.4z\" id=\"MZ\" name=\"Mozambique\">\n </path>\n <path d=\"M959.2 341.5l-8.5 0.1 2.4 27.7 2.5 27.7 1 0.8-1.3 4.5-22.5 0.1-0.9 1.4-2.1-0.4-3.2 1.3-3.9-1.8-1.8 0.1-1 3.8-1.9 1.2-3.6-4.4-3.4-4.8-3.6-1.7-2.7-1.8-3.1 0-2.8 1.4-2.7-0.5-2 2-0.4-3.4 1.6-3.2 0.8-6-0.4-6.4-0.6-3.2 0.6-3.2-1.4-3-2.8-2.8 1.3-2.1 21.7 0-0.9-9.3 1.5-3.3 5.2-0.5 0.2-16.5 18 0.4 0.2-9.8 20.5 15.6z\" id=\"MR\" name=\"Mauritania\">\n </path>\n <path d=\"M1182.3 588.9l0.4 0 1.9 2.1 2.2 4.6 0.1 8.3-2.5 1.3-1.9 4.5-3.5-4-0.2-4.5 1.3-3-0.2-2.6-2.2-1.6-1.5 0.6-3.2-3.1-2.9-1.6 2-6 1.8-2.2-0.9-5.4 1.3-5.2 1-1.7-1.3-5.4-2.6-2.9 5.5 1.2 1 1.7-0.1 0.8 1.8 4.1 0.2 7.7-1.8 3.6 1.6 4.7-0.2 2.8 1.2 1.9-0.1 2.4 0.9 1.4 1-1.6 1.9 2.5 0.2-0.8-1-3.4-1.1-0.3-0.1-0.9z\" id=\"MW\" name=\"Malawi\">\n </path>\n <path class=\"Malaysia\" d=\"M 1564.3 461.9 1565.7 462.5 1569.2 466.4 1571.7 470.7 1572.3 475 1571.8 477.9 1572.4 480.1 1572.9 483.9 1575 485.7 1577.3 491.4 1577.3 493.5 1573.3 494 1567.8 489.2 1561 484.1 1560.2 480.8 1556.8 476.5 1555.8 471.2 1553.6 467.7 1554 463 1552.6 460.3 1553.5 459.2 1558.3 462 1558.9 465.3 1562.6 464.5 1564.3 461.9 Z\">\n </path>\n <path class=\"Malaysia\" d=\"M 1654.1 475.3 1649.1 474.2 1642.6 474.2 1640.9 481.5 1638.8 483.7 1636.2 492.6 1631.6 494 1626.2 492.2 1623.5 492.8 1620.2 496 1616.6 495.6 1612.9 496.9 1609 493.2 1608 488.9 1612.2 491.1 1616.5 489.9 1617.5 484.5 1619.9 483.3 1626.7 481.9 1630.5 476.8 1633.1 472.8 1635.9 476.1 1637 473.9 1639.7 474.1 1639.8 470 1639.9 466.8 1644 462.4 1646.6 457.4 1648.9 457.3 1652 460.6 1652.4 463.4 1656.2 465.2 1661 467.1 1660.8 469.6 1657 469.9 1658.1 473.1 1654.1 475.3 Z\">\n </path>\n <path d=\"M1116.2 614.3l4.6-1.4 3.6 0.3 2.2 1.5 0 0.5-3.2 1.5-1.7 0-3.7 2.5-2-2.7-8.7 2.3-4.2 0.2-0.8 22.9-5.5 0.2-0.6 18.7-1.1 23.7-5 3.3-2.9 0.5-3.4-1.2-2.5-0.5-0.8-2.7-2-1.8-2.8 3.2-3.9-4.9-2-4.6-1-6.3-1.2-4.6-1.6-9.9 0.1-7.7-0.6-3.5-2.1-2.7-2.8-5.3-2.8-7.7-1.1-4-4.4-6.3-0.3-4.9 2.7-1.2 3.4-1.1 3.6 0.2 3.3 2.9 0.8-0.5 22.7-0.2 3.8 3 13.5 0.9 10.4-2.6z\" id=\"NA\" name=\"Namibia\">\n </path>\n <path d=\"M1068.6 355l1.6 10 2.2 1.7 0.1 2 2.4 2.2-1.2 2.8-1.8 13-0.2 8.4-7 6-2.3 8.5 2.4 2.4 0 4.1 3.7 0.1-0.6 3.1-1.5 0.3-0.2 2.1-1 0.1-3.9-7-1.4-0.3-4.3 3.6-4.4-1.9-3-0.3-1.6 0.9-3.3-0.2-3.3 2.7-2.9 0.2-6.8-3.3-2.7 1.5-2.9-0.1-2.1-2.4-5.6-2.4-6.1 0.8-1.4 1.3-0.8 3.7-1.6 2.6-0.4 5.8-4.3-3.7-2 0-1.9 1.9 0.1-4.4-6.5-1.5-0.2-3.1-3.1-4.2-0.8-2.9 0.5-3.1 3.6-0.3 2-2.3 7.7-0.5 5-1 0.4-4 3.1-4.3-0.1-14.8 7.8-2.8 16-12.6 18.8-12.3 8.8 2.8 3.2 3.5 3.8-2.4z\" id=\"NE\" name=\"Niger\">\n </path>\n <path d=\"M1066.2 421.7l2.3 2.5-0.6 1.2-0.3 2.1-4.7 5-1.4 4.1-0.8 3.3-1.2 1.5-1.1 4.5-3 2.6-0.8 3.2-1.3 2.6-0.5 2.7-3.9 2.2-3.2-2.7-2.1 0.1-3.4 3.8-1.6 0-2.7 6.2-1.4 4.6-5.9 2.3-2.1-0.3-2.2 1.4-4.5-0.1-3.1-4.1-1.9-4.6-4-4.2-4.2 0-5 0 0.3-10.3-0.2-4.1 1.1-4 1.7-2 2.8-4-0.6-1.7 1.1-2.6-1.3-3.8 0.2-2.1 0.4-5.8 1.6-2.6 0.8-3.7 1.4-1.3 6.1-0.8 5.6 2.4 2.1 2.4 2.9 0.1 2.7-1.5 6.8 3.3 2.9-0.2 3.3-2.7 3.3 0.2 1.6-0.9 3 0.3 4.4 1.9 4.3-3.6 1.4 0.3 3.9 7 1-0.1z\" id=\"NG\" name=\"Nigeria\">\n </path>\n <path d=\"M519.6 405.5l-0.5 0.7-0.5 1.4 0.4 2.3-1.5 2.2-0.8 2.6-0.5 2.8 0.2 1.7-0.1 2.9-0.9 0.6-0.7 2.8 0.2 1.7-1.2 1.6 0.1 1.7 0.8 1.1-1.4 1.4-1.7-0.5-0.8-1.3-1.8-0.5-1.3 0.8-3.6-1.7-0.9 0.8-1.8-2-2.5-2.6-1.1-2.1-2.2-2.1-2.5-2.9 0.7-1 0.8 1 0.5-0.4 1.8-0.3 0.8-1.5 0.8 0 0.2-3.2 1.3-0.1 1.2 0 1.4-1.7 1.5 1.3 0.6-0.8 1.2-0.8 2.1-1.7 0.2-1.4 0.5 0.1 0.9-1.5 0.6-0.2 0.9 1 1.1 0.2 1.3-0.8 1.4 0 2-0.8 0.9-0.9 1.9 0.1z\" id=\"NI\" name=\"Nicaragua\">\n </path>\n <path class=\"Norway\" d=\"M 1113.7 67.5 1107.3 69.6 1104.1 70.1 1104.9 66.3 1099.1 64.2 1093.2 66 1092.1 70 1088.7 72.4 1084 71.1 1078.7 71.3 1073.6 68.5 1071.4 69.9 1068.8 70.1 1068.9 73.7 1060.9 72.8 1060.3 75.9 1056.3 75.9 1054 79.8 1050.6 85.9 1044.9 93.8 1046.7 95.8 1045.4 98 1041.1 97.9 1038.7 103.3 1039.7 111 1042.8 113.9 1042 120.8 1038.6 124.8 1036.8 128.2 1033.5 124.6 1024.9 131.4 1018.8 132.8 1012.3 129.8 1010.5 123.5 1008.5 110 1012.5 106.3 1023.8 101.4 1031.9 95.5 1039.1 87.7 1048 77 1054.4 72.9 1064.7 66.1 1073.2 63.7 1079.9 64 1085.1 59.6 1092.5 59.8 1099.5 58.8 1113.2 62.7 1108.3 64.1 1113.7 67.5 Z\">\n </path>\n <path class=\"Norway\" d=\"M 1076.6 25.2 1069 27.1 1062.2 26 1064.4 24.8 1061.8 23.3 1069.1 22.4 1071 24.1 1076.6 25.2 Z\">\n </path>\n <path class=\"Norway\" d=\"M 1051 16.7 1063.6 20.1 1055 21.9 1053.8 25.3 1050.8 26.2 1049.9 30.2 1045.5 30.4 1037 27.5 1040 25.8 1034.3 24.4 1026.6 20.5 1023.4 17 1032.7 15.4 1035 16.9 1040 16.9 1041 15.4 1046.2 15.2 1051 16.7 Z\">\n </path>\n <path class=\"Norway\" d=\"M 1075.4 13.7 1082.8 15.2 1078.4 17.6 1068.3 18.1 1057.6 17.3 1056.6 16.1 1051.5 16.1 1047.2 14.1 1057.7 12.9 1063.1 13.9 1066.2 12.6 1075.4 13.7 Z\">\n </path>\n <path d=\"M1469 322.9l0.2 2.7 1.5 4.1-0.1 2.5-4.6 0.1-6.9-1.5-4.3-0.6-3.8-3.2-7.7-0.9-7.8-3.6-5.8-3.1-5.8-2.4 0.9-6 2.8-3 1.9-1.5 4.8 2 6.4 4.2 3.3 0.9 2.5 3.1 4.5 1.2 5 2.9 6.5 1.4 6.5 0.7z\" id=\"NP\" name=\"Nepal\">\n </path>\n <path class=\"Oman\" d=\"M 1283.8 394.9 1281.6 390.4 1276.4 379.8 1292.7 373.4 1295.3 360.6 1292.3 356 1292.3 353.4 1293.6 350.8 1293.4 348.2 1295.8 346.9 1294.7 346 1294.7 341.8 1297.5 341.8 1300.5 346.2 1303.8 348.5 1307.9 349.4 1311.3 350.5 1314.2 354.2 1315.9 356.3 1317.9 357.2 1318.1 358.6 1316.4 362.4 1315.7 364.2 1313.5 366.3 1311.8 370.7 1309.3 370.3 1308.3 371.9 1307.6 375.1 1308.7 379.4 1308.2 380.2 1305.7 380.2 1302.4 382.6 1302.1 385.7 1300.9 387.1 1297.4 387 1295.4 388.6 1295.6 391.2 1293 393 1289.9 392.4 1286.3 394.6 1283.8 394.9 Z\">\n </path>\n <path class=\"Oman\" d=\"M 1296.2 336.7 1294.9 334.5 1296.3 332.4 1297 332.9 1296.8 335.6 1296.2 336.7 Z\">\n </path>\n <path d=\"M1401.6 273.9l-3.8 5.4-5.7 1-8.5-1.6-2 2.8 3.3 5.6 2.9 4.4 5.1 3.1-3.8 3.7 1 4.6-3.9 6.5-2.2 6.5-4.5 6.7-6.5-0.5-4.9 6.8 4 2.8 1.4 5 3.5 3.2 1.8 5.5-12.1 0-3.2 4.3-4.2-1.6-2.2-4.6-4.9-4.9-10 1.2-9 0.1-7.6 0.9 1.1-7.4 7.5-3.4-0.9-2.9-2.7-1.1-1-5.6-5.7-2.8-2.8-3.9-3.2-3.4 9.6 3.3 5.3-1 3.4 0.8 0.9-1.4 3.9 0.6 6.6-2.7-0.8-5.4 2.3-3.7 4.1 0 0.2-1.7 4-0.9 2.1 0.6 1.8-1.8-1.1-3.9 1.4-3.8 3.1-1.7-3.1-4.2 5.2 0.2 0.9-2.3-0.8-2.5 2-2.7-1.4-3.2-1.9-2.7 2.4-2.8 5.3-1.3 5.9-0.8 2.4-1.1 2.9-0.8 4.7 3 2.9 5 9.5 2.5z\" id=\"PK\" name=\"Pakistan\">\n </path>\n <path d=\"M549.3 446.2l-0.7 0.9 1.1 3.8-1.1 1.9-1.8-0.5-0.9 3.1-1.8-1.8-1-3.5 1.4-1.7-1.4-0.4-0.9-2.1-2.8-1.8-2.4 0.4-1.3 2.2-2.4 1.6-1.2 0.2-0.6 1.4 2.5 3.5-1.6 0.8-0.8 0.9-2.7 0.4-0.8-3.9-0.8 1.1-1.8-0.4-1-2.5-2.3-0.5-1.5-0.7-2.4 0-0.2 1.4-0.6-1 0.3-1.3 0.6-1.3-0.2-1.1 0.9-0.8-1.1-0.9 0.1-2.6 2.2-0.6 1.9 2.3-0.2 1.4 2.2 0.3 0.6-0.6 1.5 1.6 2.8-0.5 2.5-1.6 3.5-1.3 2-1.9 3.1 0.4-0.2 0.6 3.1 0.2 2.4 1.2 1.8 1.9 2 1.8z\" id=\"PA\" name=\"Panama\">\n </path>\n <path d=\"M590.5 529.4l-5.1-0.3-0.8 1-4.6 1.2-6.3 4.4-0.3 3-1.4 2.2 0.7 3.5-3.4 1.8 0.2 2.8-1.5 1.1 2.6 5.8 3.3 3.9-1 2.8 3.8 0.3 2.3 3.5 5 0.1 4.4-3.7 0.1 9.7 2.6 0.7 3.2-1.1 5.5 10.4-1.1 2.1 0 4.6 0.3 5.4-1.9 3.2 1.2 2.4-1.1 2.2 2.9 5.4-2.9 6.9-1.1 3.3-2.8 1.6-5.9-3.7-0.8-2.6-11.7-6.4-10.7-7.1-4.7-3.9-2.8-5.3 0.8-1.9-5.4-8.4-6.4-11.8-6-12.8-2.4-3-2-4.7-4.6-4.2-4.1-2.6 1.7-2.8-3-6.2 1.7-4.5 4.4-4 0.7 2.7-1.6 1.5 0.3 2.3 2.3-0.5 2.3 0.7 2.5 3.3 3.1-2.7 0.9-4.3 3.4-5.6 6.7-2.5 6.1-6.8 1.7-4.1-0.8-4.9 1.5-0.6 3.8 3 1.8 3.1 2.6 1.6 3.5 6.7 4.2 0.9 3.1-1.7 2.1 1.1 3.4-0.6 4.4 3-3.5 6.6 1.7 0.1 2.9 3.4z\" id=\"PE\" name=\"Peru\">\n </path>\n <path class=\"Philippines\" d=\"M 1700.5 447.8 1701.4 452.1 1702 455.7 1700.4 461.5 1697.9 455 1695.5 458.3 1697.6 463 1696.2 466 1689.3 462.3 1687.4 457.6 1688.9 454.6 1685.1 451.5 1683.5 454.2 1680.9 453.9 1676.9 457.5 1675.9 455.6 1677.7 450.2 1681.1 448.4 1684 446 1686.2 448.9 1690.4 447.2 1691.1 444.3 1695.1 444.1 1694.3 439.2 1699.2 442.2 1699.9 445.4 1700.5 447.8 Z\">\n </path>\n <path class=\"Philippines\" d=\"M 1685.9 435.8 1684.1 437.9 1682.7 442 1681.1 443.9 1677.2 439.5 1678.2 437.7 1679.5 435.9 1679.7 432 1682.8 431.6 1682.3 435.9 1685.9 429.7 1685.9 435.8 Z\">\n </path>\n <path class=\"Philippines\" d=\"M 1655.6 442 1648.5 448.1 1650.9 443.6 1654.7 439.6 1657.7 435.2 1660 428.8 1661.6 434.1 1658.1 437.6 1655.6 442 Z\">\n </path>\n <path class=\"Philippines\" d=\"M 1673.1 425.5 1676.7 427.5 1680.2 427.5 1680.4 430.1 1678.1 432.9 1674.7 434.8 1674.2 431.8 1674.3 428.5 1673.1 425.5 Z\">\n </path>\n <path class=\"Philippines\" d=\"M 1693.2 423.7 1695.6 430.9 1691.1 429.2 1691.4 431.4 1693.2 435.3 1690.6 436.8 1690 432.2 1688.2 431.9 1687 428 1690.3 428.5 1690 426.1 1686 421.2 1691.4 421.3 1693.2 423.7 Z\">\n </path>\n <path class=\"Philippines\" d=\"M 1670.2 417.9 1669.3 423.5 1666.6 420.3 1663.1 415.4 1667.9 415.6 1670.2 417.9 Z\">\n </path>\n <path class=\"Philippines\" d=\"M 1663.7 383 1667.5 384.9 1668.9 383.2 1669.7 384.8 1669.3 387.5 1671.9 392.1 1671.3 397.4 1668.4 399.5 1668.3 404.7 1670.3 409.8 1673.3 410.5 1675.7 409.8 1683.2 413.3 1683.1 416.8 1685.2 418.4 1684.9 421.3 1680.2 418.2 1677.7 414.8 1676.5 417.2 1672.5 413.3 1667.5 414.3 1664.5 412.9 1664.4 410.2 1666 408.6 1664.1 407.1 1663.7 409.4 1660.4 405.7 1659.1 402.9 1658 396.8 1660.6 398.9 1659.5 388.8 1660.3 383 1663.7 383 Z\">\n </path>\n <path class=\"Papua New Guinea\" d=\"M 1868.1 545.6 1866.5 546.3 1864.2 543.8 1862 539.7 1861.2 534.8 1862 534.2 1862.5 536.1 1864.1 537.6 1866.5 541.6 1869 543.8 1868.1 545.6 Z\">\n </path>\n <path class=\"Papua New Guinea\" d=\"M 1846.7 537 1843.7 537.5 1842.7 539.3 1839.5 540.9 1836.5 542.4 1833.4 542.4 1828.9 540.5 1825.8 538.7 1826.4 536.7 1831.4 537.7 1834.6 537.2 1835.6 534.1 1836.5 533.9 1836.8 537.3 1840 536.9 1841.8 534.7 1845.1 532.4 1844.7 528.6 1848.1 528.5 1849.2 529.5 1848.8 533.1 1846.7 537 Z\">\n </path>\n <path class=\"Papua New Guinea\" d=\"M 1782.9 560.4 1784.5 539.4 1785.5 518.5 1795.1 522.9 1805.4 526.6 1809.1 529.9 1812.1 533.1 1812.7 536.9 1821.9 540.9 1823 544.3 1817.8 545 1818.7 549.3 1823.4 553.5 1826.4 560.3 1829.7 560.1 1829.1 562.9 1833.4 564 1831.6 565.2 1837.3 567.9 1836.4 569.8 1832.6 570.2 1831.4 568.6 1826.7 567.8 1821.1 566.9 1817.1 562.8 1814.3 559.2 1811.8 553.6 1804.7 550.8 1799.8 552.6 1796.1 554.8 1796.4 559.5 1791.8 561.7 1788.7 560.6 1782.9 560.4 Z\">\n </path>\n <path class=\"Papua New Guinea\" d=\"M 1853.6 530.7 1851.8 532.4 1850.9 528.6 1849.8 526.2 1847.3 524.1 1844.2 521.3 1840.2 519.4 1841.8 517.9 1844.8 519.7 1846.7 521.1 1849 522.6 1851.1 525.3 1853.2 527.4 1853.6 530.7 Z\">\n </path>\n <path d=\"M1079.9 154.8l5.9 0.7 8.8-0.1 2.5 0.7 1.4 1.9 0.6 2.7 1.7 2.3 0.4 2.4-2.8 1.3 1.9 2.8 0.5 2.8 3.2 5.4-0.3 1.7-2.3 0.7-3.8 5.2 1.6 2.8-1.1-0.4-5-2.4-3.5 0.9-2.4-0.6-2.8 1.3-2.7-2.2-1.9 0.9-0.3-0.4-2.6-3.1-3.7-0.3-0.7-2-3.4-0.7-0.6 1.6-2.8-1.3 0.2-1.7-3.7-0.5-2.5-2-2.4-3.9 0.2-2.2-1.5-3.3-1.9-2.1 1.2-1.7-1.4-3.1 3.1-1.8 7.1-2.8 5.8-2 4.8 1 0.6 1.5 4.6 0z\" id=\"PL\" name=\"Poland\">\n </path>\n <path d=\"M1660.3 229.9l1.4 1.1-2.2-0.4-1 2.2-0.3 2.1 2.8 4.6-1.9 1.4-0.3 1.1-0.9 1.9-2.9 1.1-1.4 1.7 1.3 2.7-0.3 0.7 2.6 1.1 4.4 2.8 0 1.5-2 0.4-3.6 0.4-0.6 2.8-2.5-0.2 0 0.6-3.2-1.2-0.1 1.2-1.3 0.5-0.7-1.2-1.7-0.6-1.9-1 0.1-2.8 0.9-0.8-1-1.1-0.4-3.5-0.9-1-3.4-0.7-3.4-1.7 2.1-4.1 3.9-3.4 1.1-4.6 3.6 2 4.6 0.3-2.8-3.4 6.4-2.7 0-3.6 5.5 3.8z\" id=\"KP\" name=\"Dem. Rep. Korea\">\n </path>\n <path d=\"M662.5 631.4l2 3.5 0.4 8.7 5.9 1.3 2.2-1.3 3.9 1.8 1.2 1.9 1.1 5.9 0.8 2.4 2.1 0.3 2-1 2.1 1.1 0.3 3.6-0.3 3.8-0.7 3.7-0.3 5.6-4.3 5-4.2 1-6.3-1-5.8-1.7 4.2-9.8-1.1-2.8-5.9-2.5-7.3-4.8-4.6-1-11.3-10.4 1.5-7.7-0.2-3.5 2.1-5.6 9.6-1.9 5.2 0.1 5.4 3.3 0.3 2z\" id=\"PY\" name=\"Paraguay\">\n </path>\n <path d=\"M1178.3 293.8l0.4 4-0.6 1.9-2.5 0.8 0.1-1.7 1.3-0.9-1.5-0.7 0.7-4.2 2.1 0.8z\" id=\"PS\" name=\"Palestine\">\n </path>\n <path d=\"M1270.1 343.7l-1.5 0.5-1.8-1.3-0.8-4.7 1.1-3.3 1.5-0.7 1.8 2 0.5 3.7-0.8 3.8z\" id=\"QA\" name=\"Qatar\">\n </path>\n <path d=\"M1118.9 193.1l1.6 0.7 1.8 1.8 2 2.6 3.4 3.8 0.6 2.7-0.2 2.7 1.3 2.9 2.4 1.2 2.3-1.1 2.4 1.1 0.4 1.7-2.3 1.3-1.6-0.6-0.4 7.7-3.1-0.7-4-2.3-5.9 1.5-2.3 1.6-7.6-0.4-4-0.9-1.9 0.4-1.8-2.6-1-1.1 1-1.1-1.3-0.7-1.5 1.4-3.1-1.9-0.7-2.6-3.2-1.4-0.8-2.1-3-2.4 3.9-1.2 2.6-4.3 1.9-4.2 2.9-1.3 2-1.4 3.2 0.7 3.2 0 2.5 1.6 1.6-1 3.6-0.6 1-1.5 2.1 0z\" id=\"RO\" name=\"Romania\">\n </path>\n <path d=\"M1158.8 509.1l2.2 3.6-0.3 3.8-1.6 0.8-3.1-0.4-1.7 3.7-3.5-0.5 0.6-3.6 0.8-0.5 0.2-3.8 1.6-1.8 1.4 0.7 3.4-2z\" id=\"RW\" name=\"Rwanda\">\n </path>\n <path d=\"M938.9 324.3l-0.1 0.4-0.1 1.2-0.2 9.8-18-0.4-0.2 16.5-5.2 0.5-1.5 3.3 0.9 9.3-21.7 0-1.3 2.1 0.3-2.7 0.1 0 12.5-0.5 0.7-2.3 2.4-2.9 2-8.9 7.9-6.9 2.7-8.1 1.8-0.5 1.9-5 4.6-0.7 2 0.9 2.5 0 1.8-1.5 3.4-0.2-0.1-3.4 0.9 0z\" id=\"EH\" name=\"Western Sahara\">\n </path>\n <path d=\"M1240.5 315l5 0.6 1.7 3.1 3.9-0.2 2.7 5.6 2.9 1.4 1.2 2.3 4 2.7 0.7 2.6-0.4 2.2 0.9 2.1 1.8 1.8 0.9 2.1 1 1.6 1.8 1.3 1.5-0.5 1.3 2.5 0.3 1.4 2.7 6.6 16.9 3.2 1-1.4 3 4.6-2.6 12.8-16.3 6.4-15.9 2.5-5 2.9-3.5 6.7-2.6 1.1-1.5-2.1-2.1 0.3-5.5-0.7-1.1-0.6-6.4 0.1-1.5 0.6-2.4-1.6-1.3 3.1 0.8 2.7-2.4 2.1-0.9-2.8-1.8-1.9-0.5-2.6-3.1-2.3-3.3-5.4-1.9-5.2-4.1-4.4-2.5-1.1-4.1-6.1-0.9-4.4 0-3.8-3.6-7.2-2.8-2.5-3-1.3-2.1-3.7 0.2-1.4-1.8-3.4-1.7-1.4-2.5-4.8-3.8-5.1-3.1-4.4-2.7 0 0.5-3.5 0.1-2.3 0.4-2.6 6.2 1.1 2.1-2 1.1-2.3 4.1-0.9 0.7-2.2 1.6-1-6-6.5 10.4-3.2 0.9-1 6.8 1.8 8.6 4.5 16.8 12.9 10.2 0.5z\" id=\"SA\" name=\"Saudi Arabia\">\n </path>\n <path d=\"M1191 409.2l-0.7 5.5-2 6.4-3.3 3.1-2.3 5-0.5 2.6-2.6 1.8-1.5 6.7 0 0.8-0.8-0.2 0.1-3.2-0.8-2.2-2.9-2.5-0.9-4.6 0.6-4.8-2.6-0.4-0.4 1.4-3.4 0.4 1.5 1.8 0.5 3.9-3 3.5-2.7 4.6-2.9 0.7-4.8-3.7-2.1 1.3-0.5 1.8-2.9 1.3-0.2 1.3-5.6 0-0.8-1.3-4.1-0.3-2 1.1-1.6-0.5-2.9-3.8-1-1.7-4.1 0.9-1.5 2.9-1.3 5.8-2 1.2-1.7 0.7-0.5-0.3-1.9-1.9-0.4-2 0.8-2.6 0-2.7-3.3-4-0.7-2.7 0-1.6-2.1-1.9-0.1-3.7-1.3-2.5-1.9 0.4 0.5-2.4 1.4-2.6-0.7-2.7 1.8-2-1.2-1.5 1.3-3.9 2.5-4.8 4.8 0.5-1.1-25.5 0-2.7 6.4 0-0.5-12.8 22.3 0 21.5 0 22.1 0 2.1 6.3-1.2 1.1 1.2 6.7 2.5 7.6 2.2 1.6 3.2 2.4-2.7 3.6-4 1.1-1.7 2-0.3 4.2-2 9.5 0.7 2.5z\" id=\"SD\" name=\"Sudan\">\n </path>\n <path d=\"M1178.1 441.1l0.2 5-0.8 1.9-3 0.2-1.9 3.6 3.5 0.5 3 3.1 1 2.6 2.6 1.5 3.5 7-3.8 4.2-3.4 3.8-3.5 3-4 0-4.5 1.5-3.6-1.5-2.3 1.8-5.1-4.3-1.4-2.7-3.1 1.3-2.6-0.4-1.5 1.1-2.6-0.8-3.5-5.3-0.9-2-4.3-2.6-1.4-3.8-2.4-2.8-3.9-3.3-0.1-2.1-3.1-2.6-3.9-2.5 1.7-0.7 2-1.2 1.3-5.8 1.5-2.9 4.1-0.9 1 1.7 2.9 3.8 1.6 0.5 2-1.1 4.1 0.3 0.8 1.3 5.6 0 0.2-1.3 2.9-1.3 0.5-1.8 2.1-1.3 4.8 3.7 2.9-0.7 2.7-4.6 3-3.5-0.5-3.9-1.5-1.8 3.4-0.4 0.4-1.4 2.6 0.4-0.6 4.8 0.9 4.6 2.9 2.5 0.8 2.2-0.1 3.2 0.8 0.2z\" id=\"SS\" name=\"South Sudan\">\n </path>\n <path d=\"M918 408l0.2 4 1.1 3.7 2 1.8 0.5 2.4-0.3 2-0.8 0.4-3.1-0.5-0.4 0.7-1.2 0.1-4.1-1.5-2.7-0.1-10.4-0.3-1.5 0.8-1.9-0.2-3 1-0.8-4.9 5.1 0.1 1.4-0.9 1 0 2.1-1.5 2.4 1.3 2.4 0.2 2.5-1.5-1.1-1.8-1.9 1-1.7 0-2.2-1.6-1.8 0.1-1.3 1.6-6.1 0.1-2.3-5-2.7-2.2 2.5-1.3 2.8-4.5 1.4-3.3 2-2 2.7 0.5 2.8-1.4 3.1 0 2.7 1.8 3.6 1.7 3.4 4.8 3.6 4.4z\" id=\"SN\" name=\"Senegal\">\n </path>\n <path d=\"M928.5 447.9l-2.6 3-2.6 3.4-0.3 1.9-1.4 2.1-1.5-0.5-4-2.6-3-3.4-0.9-2.4-0.7-4.7 3.1-2.9 0.6-1.7 1-1.4 1.6-0.2 1.3-1.2 4.5 0 1.6 2.3 1.2 2.7-0.2 1.9 0.9 1.7-0.1 2.3 1.5-0.3z\" id=\"SL\" name=\"Sierra Leone\">\n </path>\n <path d=\"M492.5 415.9l-0.7 1.5-3.3-0.1-2-0.6-2.2-1.3-3-0.4-1.5-1.4 0.3-0.9 2-1.6 1.2-0.7-0.3-0.8 1.4-0.4 1.6 0.6 1.1 1.2 1.6 1.1 0.1 0.8 2.5-0.7 1.2 0.4 0.7 0.7-0.7 2.6z\" id=\"SV\" name=\"El Salvador\">\n </path>\n <path d=\"M1102 218.2l-1.1 1.4 0.7 2.4 2.8 2.7-1.8 2-0.6 2 0.6 0.8-0.7 0.8-2.4 0.2-1.7 0.3-0.3-0.5 0.6-0.7 0.4-1.6-0.7 0.1-1.1-1.2-0.9-0.3-0.8-1-1-0.4-0.8-0.9-0.9 0.4-0.5 2.1-1.2 0.4 0.4-0.5-2.1-1.3-1.7-0.7-0.9-0.9-1.4-1.1 1.1-0.3 0.5-2.9-2.7-2.5 1.1-2.8-1.9 0.1 1.7-2.4-1.7-1.8-1.5-2.5 3.7-1.6 3.2 0.3 3 2.4 0.8 2.1 3.2 1.4 0.7 2.6 3.1 1.9 1.5-1.4 1.3 0.7-1 1.1 1 1.1z\" id=\"RS\" name=\"Serbia\">\n </path>\n <path d=\"M681 464.9l-3.1 5.5 0.3 4.4 2.2 3.8-1.1 2.7-0.5 3-1.5 2.7-3.2-1.4-2.7 0.7-2.3-0.6-0.6 1.9 1 1.2-0.6 1.4-3.1-0.6-3.3-5.6-0.7-3.6-1.8 0-2.4-4.6 1.1-3.4-0.3-1.5 3.5-1.6 1-5.8 6.8 1.3 0.6-1.2 4.6-0.5 6.1 1.8z\" id=\"SR\" name=\"Suriname\">\n </path>\n <path d=\"M1098.1 187.7l-1.2 1.7-0.7 2.5-1 0.6-5.5-1.9-1.6 0.4-1 1.5-2.3 0.8-0.6-0.4-2.3 0.9-1.9 0.2-0.3 1.3-4.1 0.7-1.9-0.6-2.7-1.7-0.7-2.1 0.3-0.8 0.6-1.4 2.2 0.1 1.6-0.6 0.1-0.6 0.9-0.3 0.2-1.4 1.1-0.3 0.7-1.1 1.5 0 0.3 0.4 1.9-0.9 2.7 2.2 2.8-1.3 2.4 0.6 3.5-0.9 5 2.4z\" id=\"SK\" name=\"Slovakia\">\n </path>\n <path d=\"M1069.8 203.9l-3.9 1.7-0.3 2.5-1.7 0.7 0.1 1.7-2-0.1-1.8-1-0.8 1-3.6-0.2 1.1-0.5-1.4-2.7 0.4-3.1 4.2 0.5 2.4-1.5 4.4-0.1 0.9-1.1 0.8 0.1 1.2 2.1z\" id=\"SI\" name=\"Slovenia\">\n </path>\n <path d=\"M1088.2 87l-7 1.6-3.5 3.9 1.3 3.5-6.2 4.5-7.8 5-2.1 8.1 3.7 4.1 4.8 3.3-3.3 6.6-4.6 1.4-0.6 10-2.1 5.7-5.7-0.6-2.2 4.8-5.5 0.3-1.9-5.7-4.5-6.9-4.2-8.4 1.8-3.4 3.4-4 0.8-6.9-3.1-2.9-1-7.7 2.4-5.4 4.3 0.1 1.3-2.2-1.8-2 5.7-7.9 3.4-6.1 2.3-3.9 4 0 0.6-3.1 8 0.9-0.1-3.6 2.6-0.2 6 2.7 7.2 3.7 1.8 8.5 1.8 2.2z\" id=\"SE\" name=\"Sweden\">\n </path>\n <path d=\"M1161.7 667.7l0.6 2.9 0.3 2.9-1.4 2.8-3.2 0.7-3.1-3.5 0.1-2.2 1.7-2.4 0.6-1.9 1.7-0.4 2.7 1.1z\" id=\"SZ\" name=\"Swaziland\">\n </path>\n <path d=\"M1195 287.5l-9.7 6.9-6.3-2.6-0.1 0 0.6-1-0.4-2.6 0.9-3.5 2.7-2.5-1.2-2.5-2.5-0.3-1.1-4.9 1-2.7 1.3-1.4 1.2-1.4-0.2-3.5 1.9 1.2 5.6-1.8 3 1.2 4.4 0 5.7-2.4 2.9 0.1 5.9-1-2.1 4-2.7 1.6 1.2 4.7-1 7.7-11 6.7z\" id=\"SY\" name=\"Syria\">\n </path>\n <path d=\"M1119.2 376.1l1.1 25.5-4.8-0.5-2.5 4.8-1.3 3.9 1.2 1.5-1.8 2 0.7 2.7-1.4 2.6-0.5 2.4 1.9-0.4 1.3 2.5 0.1 3.7 2.1 1.9 0 1.6-3.6 1.1-2.8 2.6-4 7-5.2 3-5.5-0.4-1.6 0.6 0.6 2.2-2.9 2.3-2.4 2.5-7.1 2.4-1.4-1.4-1-0.2-1 1.7-4.6 0.5 0.8-1.8-1.8-4.4-0.8-2.6-2.5-1.1-3.4-3.8 1.2-3 2.6 0.6 1.6-0.4 3.2 0-3.2-5.8 0.2-4.3-0.5-4.2-2.3-4.1 0.6-3.1-3.7-0.1 0-4.1-2.4-2.4 2.3-8.5 7-6 0.2-8.4 1.8-13 1.2-2.8-2.4-2.2-0.1-2-2.2-1.7-1.6-10 5.5-3.5 22.5 12.3 22.6 12.3z\" id=\"TD\" name=\"Chad\">\n </path>\n <path d=\"M991.4 431.2l-0.7 3.4 1.7 1.9 2 2.2 0.2 3.2 1.2 1.3-0.3 14.8 1.4 4.4-4.5 1.4-1.3-2.3-1.5-4.1-0.5-3.2 1.3-5.7-1.4-2.4-0.6-5 0-4.7-2.3-3.3 0.4-2 4.9 0.1z\" id=\"TG\" name=\"Togo\">\n </path>\n <path d=\"M1577.5 410.2l-5.3-0.9-7.1 1.2-3.1 5.3 2.1 7.8-5.3-3-4.8 0.2 0.3-5.1-4.9 0 0.2 7.1-2.2 9.4-1.4 5.7 0.7 4.6 3.7 0.2 2.7 5.9 1.3 5.5 3.4 3.7 3.4 0.7 3.1 3.4-1.7 2.6-3.7 0.8-0.6-3.3-4.8-2.8-0.9 1.1-2.3-2.4-1.2-3.2-3.2-3.6-2.9-3.1-0.7 3.8-1.3-3.6 0.4-4 1.2-6.1 2.2-6.6 2.6-6-2.7-5.9-0.2-3-1-3.6-4.3-5.1-1.8-3.2 1.8-1.2 1.4-5.5-2.9-4.3-4.1-4.7-3.5-5.6 2.2-1.2 1.5-6.9 3.9-0.3 2.8-2.8 3-1.5 2.7 2 0.9 3.9 3.8 0.3-0.4 6.7 1 5.8 5.3-3.8 1.9 1.1 3.2-0.2 0.8-2.2 4.3 0.4 5 5.2 1.3 6.4 5.3 5.6 0.4 5.4-1.5 2.9z\" id=\"TH\" name=\"Thailand\">\n </path>\n <path d=\"M1357 243.6l-1.4 1.9-6-1 0.6 3.6 5.5-0.5 7.1 2.1 9.6-1 3.1 6 1.5-0.7 3.7 1.5 0.5 2.5 1.8 3.6-5.4 0-3.8-0.5-2.5 2.9-2.2 0.6-1.5 1.4-2.7-2.1-0.9-5.4-1.7-0.3 0.1-2-3.3-1.4-1.7 2.2 0.2 2.6-0.6 0.9-3.2-0.1-0.9 2.9-2.1-1.2-3.4 2-1.8-0.7 1.3-6.5-2.4-4.8-4.2-1.5 0.6-2.8 4.4 0.3 1.5-3.5 0.5-4.1 6.5-1.5-0.2 3 1.3 1.7 2.1-0.1z\" id=\"TJ\" name=\"Tajikistan\">\n </path>\n <path d=\"M1338.3 262l-1.6-0.2-2.9-1.7-0.3 2.2-4.2 1.3 0.2 5.1-2.6 2-4 0.9-0.4 2.9-3.9 0.9-5.9-2.5-1.7-5.3-4-0.3-7.3-5.6-4.3-0.7-6.6-3.3-3.9-0.6-2 1.2-3.6-0.2-3 3.7-4.4 1.2-1.9-4.5-0.6-6.7-4.6-2.2 0.4-4.3-3.5-0.4-0.1-5.4 5.3 1.6 4.1-2-4.7-3.9-2.4-3.6-3.8 1.6 0.6 4.7-2.6-4.1 1.8-2.2 5.6-1.3 3.9 1.8 4.8 5 2.6-0.3 5.9-0.1-1.7-3.2 3.8-2.2 3.4-3.7 7.9 3.4 1.9 5 2.3 1.3 5.5-0.3 2.1 1.2 4.3 6.6 7.1 4.4 4.2 3 6.3 3.1 7.7 2.8 0.8 3.9z\" id=\"TM\" name=\"Turkmenistan\">\n </path>\n <path d=\"M1692.7 562.1l0.1-1.9-0.5-1.3 0.8-1.5 4.9-1.4 4-0.3 1.8-0.8 2.1 0.8-2.2 1.8-6.1 2.8-4.9 1.8z\" id=\"TL\" name=\"Timor-Leste\">\n </path>\n <path d=\"M1048.2 289.1l-0.1 4.9-2.6 1.8-1.6 2.1-3.6 2.5 0.6 2.6-0.4 2.8-2.6 1.4-2.6-11.5-3.4-2.6-0.1-1.5-4.5-3.9-0.6-4.8 3.2-3.6 1.1-5.3-1-6.1 1-3.3 5.7-2.5 3.7 0.7 0 3.3 4.4-2.4 0.4 1.2-2.5 3.2 0.1 2.9 1.9 1.6-0.5 5.6-3.5 3.2 1.2 3.5 2.8 0.1 1.4 3.1 2.1 1z\" id=\"TN\" name=\"Tunisia\">\n </path>\n <path class=\"Turkey\" d=\"M 1201.7 235.3 1207.2 235 1212.8 238.2 1214.1 240.4 1214.2 243.5 1218.4 245.1 1220.8 246.9 1217.5 248.8 1220.4 256.1 1219.7 258.1 1223.5 263.2 1221.1 264.3 1219 262.7 1212.7 261.8 1210.6 262.8 1204.7 263.8 1201.8 263.7 1196.1 266.1 1191.7 266.1 1188.7 264.9 1183.1 266.7 1181.2 265.5 1181.4 269 1180.2 270.4 1178.9 271.8 1176.6 268.9 1178.3 266.5 1175.1 267.1 1170.5 265.6 1167.3 269.3 1159.3 270 1154.6 266.6 1148.9 266.4 1147.9 269 1144.3 269.8 1138.9 266.4 1133.1 266.5 1129.3 260.1 1125.1 256.6 1127.1 251.6 1123.5 248.5 1128.6 242.4 1136.6 242.2 1138.2 237.3 1148.2 238.2 1153.8 234.1 1159.6 232.3 1168.1 232.1 1177.9 236.6 1185.8 239.1 1191.6 238.1 1196.2 238.7 1201.7 235.3 Z\">\n </path>\n <path class=\"Turkey\" d=\"M 1121.9 239.9 1123.1 239.2 1124.2 235.2 1121.5 233.5 1126.5 231.5 1131.1 232.3 1132 234.8 1136.8 236.8 1136.1 238.4 1129.9 238.7 1127.9 240.7 1124 244.1 1122 241.2 1121.9 239.9 Z\">\n </path>\n <path d=\"M1657.9 355.5l-1.4 5.3-4-5.5-1.5-4.7 1.9-6.3 3.3-4.9 3 1.9-0.1 3.9-1.2 10.3z\" id=\"TW\" name=\"Taiwan\">\n </path>\n <path d=\"M1167 508.4l-0.2 3.9-1.1 4.5 1.6 2.5 2.5-1.5 3.3-0.4 0.7 0.8 3.3-1.6-2.3-2.2 1.9-2.9 2.8-2.9 20.5 13.1 0.3 3.7 8.1 6.4-2.8 8 0.3 3.6 3.5 2.3 0.2 1.7-1.7 3.9 0.3 1.9-0.4 3.1 1.8 4 2.2 6.4 2 1.4-4.6 3.7-6.2 2.5-3.4-0.1-2.1 1.9-3.9 0.2-1.5 0.8-6.7-1.8-2.2 0.2 0.1-0.1-1.8-2.4-0.3-6.8-2.9-3.4-0.4 1.2-1-1.7-5.5-1.2-3.2-1.9-3.6-1.1-2.2-1.1-0.3-0.2-2.7-6.6-0.4-3.9-4.5-4.4 1.4-2.4-1.1-2.6 0.2-2.7-1-0.9 0.3-2.8 0.6-0.1 2-2.3 2.3-3.4 1.4-1.3 0-2.1-1.2-1.5-0.3-2.5 1.6-0.8 0.3-3.8-2.2-3.6 2-0.8 6.2 0.1z\" id=\"TZ\" name=\"Tanzania\">\n </path>\n <path d=\"M1179 474.5l2.7 4.5 0.7 3.2 2.6 7.4-2.1 4.7-2.8 4.2-1.6 2.6 0 0.3-0.2-0.4-3-1.3-2.4 1.6-3.6 0.9-2.6 3.7 0.3 2.5-6.2-0.1-2 0.8-3.4 2-1.4-0.7 0.1-4.8 1.3-2.5 0.3-5.1 1.2-3 2.2-3.3 2.1-1.8 1.9-2.2-2.3-0.9 0.3-7.5 2.3-1.8 3.6 1.5 4.5-1.5 4 0 3.5-3z\" id=\"UG\" name=\"Uganda\">\n </path>\n <path d=\"M1157.2 174.6l2.3 2.7 0.1 1.2 6.7 2.2 3.6-1 3.6 2.9 2.9-0.1 7.7 2 0.4 1.9-1.3 3.2 1.8 3.5-0.3 2.1-4.8 0.4-2.2 1.8 0.4 2.7-3.9 0.5-3 2.1-4.6 0.3-4 2.4 1 3.9 2.8 1.5 5.1-0.4-0.6 2.3-5.4 1.1-6.3 3.6-3.1-1.3 0.7-2.9-5.9-1.9 0.7-1.2 4.6-2.1-1.7-1.4-8.1-1.6-0.8-2.4-4.5 0.8-1.3 3.5-3.3 4.6-2.4-1.1-2.3 1.1-2.4-1.2 1.2-0.7 0.6-2.1 1.1-2.1-0.6-1.1 1-0.5 0.6 0.9 3 0.2 1.3-0.5-1-0.6 0.2-1-2-1.6-1.1-2.6-2-1 0.1-2.1-2.6-1.7-2-0.3-4-1.9-3.2 0.6-1.1 0.9-2.1 0-1 1.5-3.6 0.6-1.6 1-2.5-1.6-3.2 0-3.2-0.7-2 1.4-0.5-1.7-3-1.7 0.7-2.5 1.2-1.7 1.1 0.4-1.6-2.8 3.8-5.2 2.3-0.7 0.3-1.7-3.2-5.4 2.3-0.3 2.4-1.6 3.8-0.2 4.9 0.5 5.7 1.5 3.9 0.1 1.9 0.9 1.7-1.1 1.5 1.5 4.3-0.3 2.1 0.6-0.3-3.1 1.3-1.4 4.1-0.3 1.8 0.2 1-1.4 1.5 0.3 4.9-0.6 3.8 3.5-0.9 1.3 0.8 1.9 3.9 0.3z\" id=\"UA\" name=\"Ukraine\">\n </path>\n <path d=\"M699.7 718.6l-1.6 4.1-5.4 3.5-4.2-1.3-2.8 0.7-5.5-2.7-3.6 0.2-3.9-3.6-0.4-4.1 0.9-1.4-1.2-6.4 0.4-6.6 0.5-5.2 3.4-0.7 6.3 5 1.9-0.2 6.3 4.1 4.8 3.6 3.8 4.3-1.8 3.1 2.1 3.6z\" id=\"UY\" name=\"Uruguay\">\n </path>\n <path d=\"M1352.7 230.7l1.7 0.6-3 4.1 4.6 2.4 3.2-1.6 7.2 3.4-5.3 4.6-4.1-0.6-2.1 0.1-1.3-1.7 0.2-3-6.5 1.5-0.5 4.1-1.5 3.5-4.4-0.3-0.6 2.8 4.2 1.5 2.4 4.8-1.3 6.5-4.3-1.4-3 0-0.8-3.9-7.7-2.8-6.3-3.1-4.2-3-7.1-4.4-4.3-6.6-2.1-1.2-5.5 0.3-2.3-1.3-1.9-5-7.9-3.4-3.4 3.7-3.8 2.2 1.7 3.2-5.9 0.1-6.2-23.4 12-3.7 1.1 0.5 9.2 4.5 4.8 2.4 6.6 5.7 5.7-0.9 8.6-0.5 7.6 4.6 1.5 6.4 2.6 0.1 2.5 5.2 6.7 0.2 2.3 3 2 0 0.9-4.6 5.4-4.4 2.6-1.2z\" id=\"UZ\" name=\"Uzbekistan\">\n </path>\n <path d=\"M648.7 448.1l-4.7 3.8-0.5 2.3 1.8 2.4-1.4 1.2-3.5 1 0 3-1.6 1.8 3.7 4.8 0.7 1.8-2.1 2.5-6.4 2.4-4.1 1-1.7 1.5-4.5-1.6-4.1-0.8-1.1 0.6 2.5 1.6-0.3 4.3 0.7 4.1 4.8 0.5 0.3 1.4-4.1 1.8-0.7 2.7-2.4 1.1-4.2 1.5-1.1 2-4.4 0.4-3.1-3.4-1.6-6.4-1.5-2.3-2-1.4 2.9-3.2-0.2-1.4-1.5-1.9-1.1-4.3 0.6-4.6 1.3-2.2 1.2-3.4-2-1.1-3.2 0.7-4.1-0.3-2.3 0.7-3.8-5.6-3.3-0.8-7.3 0.6-1.2-2.2-1.4-0.5-0.1-1.4 0.7-2.4-0.3-2.5-1.2-1.5-0.6-2.9-2.9-0.4 1.8-3.8 0.9-4.6 1.8-2.4 2.3-1.8 1.6-3.2 3.7-1.1-0.2 1.5-3.4 0.8 1.7 2.9-0.3 3.4-2.7 3.7 1.9 5.1 2.5-0.4 1.5-4.7-1.7-2.2 0-4.9 7.2-2.6-0.6-3 2.1-2.1 1.7 4.6 4 0.1 3.4 3.5 0.2 2.2 5 0 6.1-0.6 3.1 2.8 4.2 0.8 3.3-2 0.1-1.6 7.1-0.4 6.7-0.1-4.9 1.9 1.8 3.1 4.5 0.4 4.2 3.2 0.7 5.1 2.9-0.1 2.2 1.5z\" id=\"VE\" name=\"Venezuela\">\n </path>\n <path d=\"M1586.5 363.5l-6.5 5.4-3.7 6.1-0.6 4.5 5.3 6.7 6.5 8.4 5.7 4 4.1 5.1 4 11.9 0.4 11.3-4.3 4.2-6.1 4.2-4.2 5.3-6.6 6-2.3-4.1 1.2-4.4-4.4-3.6 4.6-2.6 5.9-0.5-2.8-3.8 9-5-0.1-7.7-1.8-4.3 0.2-6.4-2-4.5-4.9-4.5-4.4-5.6-5.7-7.6-7.3-3.9 1.2-2.3 3.3-1.7-3-5.6-6.8 0-3.5-5.8-4-5.1 2.7-1.6 4.4 0.1 5.3-0.8 4.1-3.4 3.1 2.4 5.3 1.2-0.3 3.7 3.1 2.6 5.9 1.7z\" id=\"VN\" name=\"Vietnam\">\n </path>\n <path d=\"M1283.8 394.9l-4 1.7-0.9 2.9 0 2.2-5.4 2.7-8.8 3-4.7 4.5-2.5 0.4-1.7-0.4-3.2 2.7-3.5 1.2-4.7 0.3-1.4 0.4-1.1 1.7-1.5 0.5-0.8 1.6-2.8-0.2-1.7 0.9-4-0.3-1.6-3.8 0-3.5-1-1.9-1.3-4.7-1.8-2.6 1.1-0.4-0.7-2.9 0.6-1.2-0.4-2.8 2.4-2.1-0.8-2.7 1.3-3.1 2.4 1.6 1.5-0.6 6.4-0.1 1.1 0.6 5.5 0.7 2.1-0.3 1.5 2.1 2.6-1.1 3.5-6.7 5-2.9 15.9-2.5 5.2 10.6 2.2 4.5z\" id=\"YE\" name=\"Yemen\">\n </path>\n <path d=\"M1162.1 556.8l0.3 0.2 2.2 1.1 3.6 1.1 3.2 1.9 2.6 2.9 1.3 5.4-1 1.7-1.3 5.2 0.9 5.4-1.8 2.2-2 6 2.9 1.6-17.2 5.3 0.4 4.6-4.3 0.9-3.3 2.5-0.8 2.2-2 0.6-5.1 5.2-3.2 4.2-1.9 0.1-1.8-0.7-6.2-0.7-1-0.5 0-0.5-2.2-1.5-3.6-0.3-4.6 1.4-3.6-4-3.6-5.2 0.8-20.5 11.7 0.1-0.4-2.2 0.9-2.4-0.9-3 0.7-3.1-0.6-2 1.9 0.1 0.3 2 2.7-0.1 3.5 0.6 1.9 2.9 4.4 0.9 3.5-2 1.2 3.3 4.3 0.9 2 2.8 2.2 3.5 4.3 0-0.2-6.9-1.6 1.2-3.9-2.5-1.5-1.2 0.9-6.4 1.1-7.6-1.2-2.8 1.7-4.1 1.5-0.8 7.7-1.1 0.9 0.3-0.3 1.4 1.9 0.5 1.2 1.3 1-0.3-0.5-1.1z\" id=\"ZM\" name=\"Zambia\">\n </path>\n <path d=\"M1159.4 644.7l-2.9-0.7-1.9 0.8-2.7-1.1-2.2 0-3.4-2.9-4.3-1-1.5-4.1 0.1-2.3-2.3-0.7-6.1-7-1.6-3.7-1.1-1.2-1.9-5.1 6.2 0.7 1.8 0.7 1.9-0.1 3.2-4.2 5.1-5.2 2-0.6 0.8-2.2 3.3-2.5 4.3-0.9 0.2 2.4 4.7-0.1 2.6 1.3 1.1 1.6 2.7 0.5 2.8 2-0.4 8.2-1.3 4.4-0.4 4.8 0.8 1.9-0.9 3.8-0.8 0.6-1.7 4.6-6.2 7.3z\" id=\"ZW\" name=\"Zimbabwe\">\n </path>\n <path d=\"M1222.1 512.6l-3.3-5.3-0.2-23.4 4.9-7.2 1.5-2.1 3.6-0.1 5-4.5 7.3-0.3 15.6-19.3-4.8 0.1-18.7-7.6-2.2-2.3-2.2-3.1-2.2-3.6 1.2-2.2 1.9-3.5 1.9 1.2 1.2 2.7 2.7 2.7 2.8 0 5.2-1.7 6.1-0.7 4.9-2 2.8-0.4 2-1.2 3.2-0.2 1.8-0.2 2.5-0.9 3-0.7 2.5-2.2 2.2 0 0.2 1.8-0.4 3.7 0.2 3.4-1.1 2.3-1.4 7-2.4 7.1-3.3 8.2-4.6 9.4-4.7 7.2-6.6 8.8-5.6 5.2-8.4 6.4-5.3 4.8-6.2 7.8-1.3 3.4-1.3 1.5z\" id=\"SO\" name=\"Somalia\">\n </path>\n <path d=\"M1097.8 230.8l-1.2 0.3-2.9 1-0.1 1.3-0.7-0.1-0.6-2.3-1.3-0.7-1.2-1.7 0.8-1.4 1.2-0.4 0.5-2.1 0.9-0.4 0.8 0.9 1 0.4 0.8 1 0.9 0.3 1.1 1.2 0.7-0.1-0.4 1.6-0.6 0.7 0.3 0.5z\" id=\"XK\" name=\"Kosovo\">\n </path>\n <path d=\"M1159.4 644.7l2.2 9 1.1 4.6-1.4 7.1 0.4 2.3-2.7-1.1-1.7 0.4-0.6 1.9-1.7 2.4-0.1 2.2 3.1 3.5 3.2-0.7 1.4-2.8 4.1 0-1.7 4.7-1 5.3-1.7 2.9-4 3.3-1.1 0.9-2.6 3.3-1.8 3.3-3.5 4.6-6.7 6.6-4.1 3.8-4.3 3-5.9 2.4-2.7 0.4-0.9 1.8-3.2-1-2.7 1.2-5.7-1.2-3.3 0.8-2.2-0.4-5.8 2.6-4.6 1-3.5 2.4-2.4 0.2-2.1-2.3-1.8-0.1-2.2-2.9-0.3 0.9-0.6-1.7 0.3-3.8-1.5-4.3 1.8-1.2 0.1-4.9-3.3-6-2.4-5.4 0-0.1-3.6-8.3 2.8-3.2 2 1.8 0.8 2.7 2.5 0.5 3.4 1.2 2.9-0.5 5-3.3 1.1-23.7 1.4 1 3 6.1-0.6 3.9 1.1 2.3 4-0.7 2.8-2.9 2.7-1.9 1.5-3.1 2.8-1.4 2.3 0.7 2.5 1.8 4.5 0.3 3.6-1.4 0.6-2 1.2-3.1 3-0.5 1.8-2.4 2-4.3 5.2-4.8 8.1-4.7 2.2 0 2.7 1.1 1.9-0.8 2.9 0.7z m-20.3 53.2l1.1-2 3.1-1 1.1-2.1 1.9-3.1-1.7-2-2.2-2-2.7 1.4-3.1 2.5-3.2 4 3.7 5 2-0.7z\" id=\"ZA\" name=\"South Africa\">\n </path>\n <path class=\"New Zealand\" d=\"M 1886.2 764.4 1885.4 767 1891 764.4 1890.5 767.1 1888.4 769.8 1884.2 772.7 1877.1 777.4 1872.4 780 1871.8 783 1867.8 783.1 1861.5 785.5 1856.8 789.6 1848.6 796 1842.3 798.8 1838.3 800.6 1833.7 800.5 1832.2 798.4 1827.1 798 1828.1 795.6 1834.6 791 1846 784.7 1850.3 783.5 1855.9 781.1 1862.9 777.8 1868.6 774.5 1874.6 769.8 1877.7 768.2 1881.2 764.6 1887 761.7 1886.2 764.4 Z\">\n </path>\n <path class=\"New Zealand\" d=\"M 1915.2 733.9 1914.8 740.7 1917.7 736.3 1919 738.1 1916.6 742.9 1919.5 745 1922.7 745.5 1927.4 743.1 1929.6 743.8 1924.4 749.5 1920.2 753.2 1916.3 753.1 1913.5 755 1912 757.8 1910.4 758.9 1905.8 762.4 1899.9 766.7 1893.9 769.3 1894.4 767.6 1892.9 766.7 1899.8 761.5 1900.7 757.9 1896.9 755.4 1898.7 753.1 1904 750.9 1908.2 745.9 1910.7 741.8 1911.3 737.5 1912.1 736.4 1911.2 733.7 1910.5 728.1 1910.9 723.5 1913.1 723 1914 726.6 1917.2 728.2 1915.2 733.9 Z\">\n </path>\n <path class=\"Chile\" d=\"M 655.1 837.9 661.1 851.5 666.1 851.5 669.1 851.7 668.6 854.1 665.4 856 663 855.8 659.9 855.3 655.7 853.5 650.3 852.6 642.8 849.2 636.4 846 626.6 839.1 631.2 840.4 639.8 844.5 647.1 846.7 648.3 843.9 648 839.7 651.4 837.1 655.1 837.9 Z\">\n </path>\n <path class=\"Chile\" d=\"M 614.4 647.8 615.3 649.4 614.1 656.1 608.5 659.2 610.1 669.9 609.3 672 611.3 674.5 608 678.5 605.4 684.5 604.5 690.4 606.2 696.6 604.1 703.2 609 714.3 610.6 715.5 612 721.4 610.4 727.6 611.8 733 608.8 737.2 610.4 743 613.7 749.3 611.2 751.6 611.4 757.3 612.2 763.8 615.5 771.6 613.8 772.9 617.5 780.2 620.6 782.6 619.8 785.3 622.6 786.5 624 788.9 622.2 790.1 624 793.8 625.1 802.1 624.4 807.5 626.2 810.7 626.1 814.6 623.4 817.4 626.5 823.9 629.1 826.2 632.2 825.8 634.1 830.4 637.6 834 649.7 834.8 654.6 835.8 650.3 835.8 648.6 837.3 645.2 839.5 646.9 845.2 645 845.3 638.7 843.4 631.2 839.1 623.6 835.6 620.4 831.7 620.1 828.1 615.9 823.9 610.9 813.3 610.7 807.3 614.1 802.5 605.8 800.6 608.5 795.1 606.5 784.6 613 786.8 611.2 773.7 607.2 772 608.2 779.9 604.7 779 603.2 770 601.2 758.2 602.3 753.8 599 747.6 596.6 740.4 598.8 740.1 599.4 729.8 600.6 719.5 600.7 710 597.4 700.3 598 695 595.9 687.1 597.7 679.3 596.8 666.9 596.8 653.5 596.9 639.2 595.4 628.7 593.3 619.6 596.1 618 597.2 614.7 600.4 619.1 601.6 623.7 604.8 626.4 603.7 632.6 607.4 639.8 610.5 648.7 614.4 647.8 Z\">\n </path>\n <path d=\"M1016.5 177.1l-2.8-1.5-3.1-2.7-4.5 1.3-3.6-0.5 2.5-1.7 4-9 6.5-2.6 4 0.2 0.9 2.1-0.9 5.6-1.2 2.3-2.9 0 1.1 6.5z\" id=\"NL\" name=\"Netherlands\">\n </path>\n <path d=\"M946.9 263.7l-2.2 1.6-2.8-0.9-2.7 0.7 0.9-5-0.3-3.9-2.4-0.6-1.1-2.4 0.5-4.2 2.2-2.3 0.5-2.6 1.2-3.8 0-2.7-0.9-2.3-0.2-2.2 1.9-1.6 2.2-0.9 1.2 3.1 3 0 0.9-0.8 3.1 0.2 1.3 3.2-2.4 1.7-0.3 5-0.8 0.9-0.3 3.1-2.3 0.5 2 3.8-1.6 4.2 1.8 1.9-0.8 1.7-2 2.4 0.4 2.2z\" id=\"PT\" name=\"Portugal\">\n </path>\n <path class=\"Russian Federation\" d=\"M 1689.5 177.4 1703.2 188.4 1694.3 186.4 1698 195.4 1707.6 201.8 1710.6 206.2 1704.1 202.4 1704.2 207.3 1699.5 202 1695.7 195.9 1690.1 189.2 1687.7 184.4 1681.3 176.2 1673.3 170.1 1666.5 161.7 1668.4 158.9 1664 156.1 1665.3 155.2 1670.2 159.2 1677.1 165.1 1682.3 171.2 1689.5 177.4 Z\">\n </path>\n <path class=\"Russian Federation\" d=\"M 1094.6 155.4 1085.8 155.5 1079.9 154.8 1080.6 152.2 1086.9 150.2 1092 151.3 1094.2 152.2 1094 153.9 1094.6 155.4 Z\">\n </path>\n <path class=\"Russian Federation\" d=\"M 1548.4 48.2 1542.5 48.3 1533.6 47.7 1532.6 47.4 1533.3 45.4 1537.5 44.9 1545.9 46.9 1548.4 48.2 Z\">\n </path>\n <path class=\"Russian Federation\" d=\"M 1561 38.7 1559.9 40.7 1553 40.3 1542.7 38.3 1540.9 36.7 1549.2 37.4 1561 38.7 Z\">\n </path>\n <path class=\"Russian Federation\" d=\"M 1535.5 36.3 1538.6 40.1 1524.3 39.9 1519.7 41.1 1507.2 37.8 1503.8 34.4 1507.3 33.5 1517.5 33.7 1535.5 36.3 Z\">\n </path>\n <path class=\"Russian Federation\" d=\"M 1218.8 61.3 1216.6 61.7 1203.1 61 1200.8 58.7 1192.9 57.3 1190.9 54.4 1194.4 53.3 1192.8 50.5 1198.2 46.1 1194.2 45.5 1200.9 41 1198.4 38.7 1205.2 36.1 1215.5 32.9 1227.2 32 1232.2 30.2 1238.9 29.6 1243.1 31.5 1241.8 33 1230.4 35.5 1220.5 37.8 1211.8 42.6 1209 47.6 1205.7 52.6 1208.8 56.9 1218.8 61.3 Z\">\n </path>\n <path class=\"Russian Federation\" d=\"M 1661.7 231 1660.3 229.9 1658.4 226.6 1660.9 226.5 1657 219 1652.3 213.6 1655.2 211.4 1662.1 212.5 1661.5 206.3 1658.7 199.5 1659 197.2 1657.7 191.5 1650.8 193.4 1648.2 195.8 1640.6 195.8 1634.6 190 1625.6 185.5 1615.6 183.5 1609.4 177.5 1604.9 173.7 1601.1 171 1593.4 164.8 1587.4 162.6 1578.8 160.7 1572.6 160.9 1567.5 162 1565.8 165.1 1569.5 166.5 1572 169.9 1570.7 171.9 1570.9 178.4 1572.8 181.2 1568.4 185.1 1561 182.7 1555.4 183.3 1551.5 181.2 1548.1 180.5 1543.7 184.9 1537.8 185.9 1534.2 187.5 1527.4 186.5 1522.8 186.5 1517.9 183.3 1511.3 180.4 1505.9 179.5 1500.2 180.3 1496.2 181.5 1487.7 178.9 1484.1 174.3 1477.4 172.7 1472.6 171.9 1465.6 169.4 1464.3 175.8 1468.3 179.4 1465.9 183.8 1457.9 182.2 1452.9 182 1448.1 179.1 1442.9 179 1437.6 177.1 1431.7 180 1425 185.3 1420.3 186.4 1418.6 186.9 1414.2 183.1 1408.2 184 1404.9 181.3 1400.9 180.1 1396.8 176.5 1393.5 175.4 1387.3 177 1378.9 173.5 1377.8 176.7 1359.5 161.1 1351.1 156.4 1351.9 154.4 1342.7 160.2 1338.3 160.5 1337.2 157.2 1330.1 155.1 1325.8 156.6 1321.4 150.3 1312.3 149 1309.2 151.5 1298.3 153.8 1296.6 155.3 1279.6 157.4 1278.2 159.5 1283.3 163.7 1279.3 165.3 1280.8 166.9 1277.3 169.9 1286.7 174.2 1286.5 177.1 1279.5 176.8 1278.7 178.7 1271.4 175.5 1263.7 175.6 1259.3 178.2 1252.7 175.7 1240.7 171.4 1233.1 171.6 1225 178.3 1225.6 182.8 1219.6 179.2 1217.4 186.1 1219.2 187.3 1217.5 192.1 1222.8 196.3 1226.4 196.1 1230.7 200.3 1230.9 203.5 1233.7 204.6 1232.3 208.3 1227.7 209.3 1224.1 215.8 1230.1 221.9 1230.5 226.1 1237.8 233.6 1235.3 236.2 1234.7 237.8 1232.3 237.3 1228 233.5 1226.5 233.3 1222.9 231.8 1220.8 229.2 1215.7 227.9 1212.8 228.9 1211.6 227.7 1204 224.6 1196.3 223.6 1191.7 222.5 1191.3 223.3 1183.7 217.9 1177.5 215.5 1172.4 211.8 1176 210.8 1179.2 205.6 1175.9 203.1 1182.8 200.5 1182.4 199.1 1178.1 200.1 1177.7 197.4 1179.9 195.6 1184.7 195.2 1185 193.1 1183.2 189.6 1184.5 186.4 1184.1 184.5 1176.4 182.5 1173.5 182.6 1169.9 179.7 1166.3 180.7 1159.6 178.5 1159.5 177.3 1157.2 174.6 1153.3 174.3 1152.5 172.4 1153.4 171.1 1149.6 167.6 1144.7 168.2 1143.2 167.9 1142.2 169.3 1140.4 169.1 1138.4 165.1 1136.9 163.1 1137.7 162.5 1141.6 162.7 1143.2 161.4 1141.5 159.8 1138.1 158.7 1138.1 157.6 1136 156.5 1132.2 152.5 1132.9 150.9 1131.8 148 1127 146.6 1124.6 147.3 1123.7 145.8 1118.4 144.3 1116.3 140.7 1115.3 137.8 1112.8 136.5 1114.4 134.6 1112 129 1114.6 125.6 1113.7 124.6 1118.2 121.3 1112.8 118.5 1120.8 111.1 1124.2 107.7 1125.1 104.8 1117.7 100.9 1118.6 97.1 1113.7 92.9 1115.4 88.1 1108.9 81.8 1111.8 77.6 1104.5 73.9 1104.1 70.1 1107.3 69.6 1113.7 67.5 1117.4 65.6 1125.1 68.8 1136.8 70.1 1154.5 76.3 1158.6 78.9 1160.1 82.6 1156.4 85.5 1149.9 87 1129.7 82.8 1126.8 83.5 1134.9 87.6 1135.9 90.2 1137.8 96 1143.9 97.7 1147.7 99.2 1147.5 96.4 1144.1 94 1146.2 91.8 1157.8 95.4 1161 94 1156.7 89.8 1164.8 84.4 1168.9 84.7 1173.5 86.6 1174.6 82.8 1169.9 79.5 1170.7 76.2 1166.4 72.8 1178.7 74.6 1182.3 77.6 1177.2 78.3 1178.4 81.4 1182.5 83.3 1188.5 82.1 1188.1 78.6 1195.8 75.9 1208.2 71.3 1211.4 71.5 1208.9 74.8 1214.3 75.4 1216.4 73.5 1224.1 73.4 1229.1 71.1 1235.5 74.4 1238.3 70.8 1232.3 67.7 1233.5 65.9 1246.5 67.5 1253.1 69.2 1271.7 75.4 1272.8 72.6 1266.9 69.7 1266.1 68.6 1260.8 68 1260.6 65.5 1255.9 61.3 1254.8 59.6 1259.1 54.9 1258.5 50.1 1260.7 49.1 1272.1 50.5 1275 53.4 1274.1 57.6 1277.8 59.3 1281.6 63 1285.4 70.4 1292.1 73.7 1292.6 77.4 1289.1 85.2 1294.4 86 1294.9 84 1298.7 82.6 1298.2 79.9 1300.1 77.2 1295.7 74.1 1295.3 70.5 1290.5 70.1 1287.6 67.1 1287.2 61.7 1279 57.4 1283.7 53.9 1280 50.2 1281.9 50.1 1286.1 52.9 1288.2 58 1293.2 59 1288.6 55.2 1293.7 53.1 1301.8 52.8 1311.4 55.8 1304.5 51.5 1299.6 46 1305.5 45 1315 45.2 1322.8 44.5 1317.2 41.9 1318.5 38.6 1322.7 38.4 1327.6 36 1336.9 35.3 1336.7 33.9 1346 33.5 1350.3 34.6 1355.7 32 1362.7 32.1 1361.2 29.9 1362.1 27.9 1368.3 25.9 1376.6 27.5 1373.1 28.7 1382.5 29.4 1386.6 31.8 1388.5 30.6 1399.4 30.7 1411 33.1 1416.5 34.9 1419 37.5 1416.6 39 1410 41.8 1408.9 43.3 1414.5 44 1421.7 45.3 1424.1 44.3 1429.9 47.6 1430.1 46.3 1435.3 45.5 1448.9 46.3 1452.7 48.7 1470.1 49.5 1465.3 45.6 1474.8 46.5 1480.9 46.4 1490.8 49.1 1496.8 52.4 1497.2 54.6 1507.3 58.8 1516.3 60.9 1513.3 55.4 1522.7 57.7 1527.7 56.3 1537.5 57.9 1538.5 56.5 1546.1 57.2 1536.7 52.3 1538.8 50.1 1579.2 53.5 1587.1 56.6 1603.4 60.6 1618.2 59.6 1627.5 60.5 1634.1 62.7 1639.2 66.6 1646.5 68.1 1650.4 67 1657.4 66.9 1666.7 67.9 1673.6 67.3 1687.9 72.1 1690.4 70.4 1681.9 67 1680.1 64.6 1695.4 66.1 1703.4 65.8 1719.2 68.3 1728.7 70.7 1761.9 92.8 1759.9 95.3 1753.7 94.9 1761.9 97.9 1771 102.6 1775.2 104.1 1779 106.5 1780 108 1770 106.8 1763.4 111.1 1760.4 111.8 1758.8 115.9 1756.8 119.5 1758.5 122.2 1747 118.1 1740.9 122.7 1736.2 120.5 1734.8 123.1 1727.8 122.2 1730.9 126.1 1732 131.9 1734.9 134.3 1741.7 135.6 1750.8 144.3 1746.7 144.6 1750.1 149.6 1754.8 152.2 1749.8 155.3 1755.2 162.3 1749.5 163.8 1754 170 1752.3 175.8 1746.6 171.5 1736.1 162.6 1719.9 149 1713.4 140.7 1713.5 137.1 1710.7 134.3 1716.4 133 1716.2 125.5 1716.9 119.5 1719.4 114.8 1712.8 106.6 1708.1 107.1 1711.3 111.9 1707.7 118.3 1695.4 111.1 1686.3 113.1 1686.3 122.9 1694 126.5 1685.5 128.1 1679.1 128.7 1674.8 124.4 1666.8 123.5 1664.3 126.4 1649.2 125.4 1636 127.1 1632.5 138.8 1627.5 153 1635.7 153.8 1641.4 157.6 1647.2 158.9 1647.6 155.9 1653.2 156.3 1666 163 1670.7 168.2 1672.1 174.4 1677.6 181.8 1682.9 191.7 1681.9 200.8 1683.2 205.1 1681.2 212.5 1679.1 219.8 1678.2 223.5 1673.6 227.2 1670.5 227.3 1665.3 224.2 1661.2 228.9 1661.7 231 Z\">\n </path>\n <path class=\"Russian Federation\" d=\"M 1367.1 23.1 1349 24.9 1347.7 18.8 1349.9 18.3 1353 18.6 1365.6 21.2 1367.1 23.1 Z\">\n </path>\n <path class=\"Russian Federation\" d=\"M 1164.8 13.1 1160.5 13.6 1157.6 14 1157.6 14.7 1154 15.4 1149.5 14.4 1150.6 13 1142.8 12.9 1149.1 12.1 1154.3 12.1 1155.8 13.2 1157.1 12.2 1159.9 11.5 1165.7 12.4 1164.8 13.1 Z\">\n </path>\n <path class=\"Russian Federation\" d=\"M 1345.1 20.4 1338 21 1326.3 19.7 1318.2 18 1311.6 14.8 1305.7 14 1311.1 11.1 1317.3 10.2 1326.9 12.2 1340.6 16.4 1345.1 20.4 Z\">\n </path>\n <path d=\"M976.6 223.4l2 2.4 9.5 2.9 1.9-1.4 5.8 2.9 5.9-0.8 0.4 3.7-4.9 4.2-6.6 1.4-0.5 2.1-3.2 3.5-2 5.2 2 3.7-3 2.8-1.2 4.2-4 1.3-3.7 4.9-6.8 0.1-5-0.1-3.4 2.2-2.1 2.4-2.6-0.5-1.9-2.2-1.4-3.6-4.9-1-0.4-2.2 2-2.4 0.8-1.7-1.8-1.9 1.6-4.2-2-3.8 2.3-0.5 0.3-3.1 0.8-0.9 0.3-5 2.4-1.7-1.3-3.2-3.1-0.2-0.9 0.8-3 0-1.2-3.1-2.2 0.9-1.9 1.6 0.5-4.5-2-2.7 7.4-4.6 6.2 1.1 6.9 0 5.4 1.1 4.3-0.4 8.3 0.3z\" id=\"ES\" name=\"Spain\">\n </path>\n <path class=\"France\" d=\"M 1035.7 231.4 1034.2 236.3 1031.8 235 1030.5 230.8 1031.4 228.4 1034.6 226 1035.7 231.4 Z\">\n </path>\n <path class=\"France\" d=\"M 1014.4 185 1015.5 185.5 1016.9 185.4 1019.3 187 1026.5 188.2 1024.1 192.4 1023.7 196.9 1022.4 198 1020.1 197.4 1020.3 199 1016.7 202.5 1016.7 205.4 1019.1 204.4 1020.9 207.1 1020.8 208.9 1022.3 211.3 1020.6 213.2 1022.1 218.1 1024.9 218.9 1024.4 221.6 1019.9 225.2 1009.7 223.5 1002.3 225.6 1001.7 229.4 995.8 230.2 990 227.3 988.1 228.7 978.6 225.8 976.6 223.4 979.3 219.6 980.3 207 975.2 200.4 971.5 197.2 963.9 194.8 963.5 190.2 970 188.9 978.3 190.5 976.8 183.4 981.5 186.1 992.9 181.3 994.4 176.2 998.6 174.9 999.4 177.1 1001.6 177.2 1004 179.7 1007.5 182.6 1010 182.1 1014.4 185 Z\">\n </path>\n <path class=\"United States\" d=\"M 118.8 379.3 117.7 380.4 116.5 379.5 117.1 377.7 116.7 375.3 117.2 374.6 118.4 373.6 118.3 372.3 118.7 371.7 119.1 371.8 121 372.9 121.9 373.5 122.6 374.3 123.5 376.6 123.3 376.9 120.8 378.3 118.8 379.3 Z\">\n </path>\n <path class=\"United States\" d=\"M 118.1 369.3 116.1 369.7 115.5 368.4 115 367.9 115 367.5 115.7 366.9 117.5 367.5 118.7 368.5 118.1 369.3 Z\">\n </path>\n <path class=\"United States\" d=\"M 115.1 365.9 114.8 366.6 111.8 366.4 112.4 365.6 115.1 365.9 Z\">\n </path>\n <path class=\"United States\" d=\"M 110.4 364.9 110 365.3 109.6 365.2 107.7 365 107.4 363.5 107.2 363.3 108.9 362.4 109.3 362.8 110.4 364.9 Z\">\n </path>\n <path class=\"United States\" d=\"M 102 360.7 101.2 361.3 99.6 360.2 100 359.7 101 359.1 102.3 359.2 102 360.7 Z\">\n </path>\n <path class=\"United States\" d=\"M 539.5 194.5 533.4 196.5 528.7 199 524.1 201.7 523.6 202.6 529.3 201.3 531.4 203.4 536 201.9 540.9 199.8 546.3 197.7 543.2 201 545.7 201.8 548.2 204.2 553.3 202.8 558.4 202.3 558.7 204.1 560.2 204.3 561.4 204.5 562.9 207 558.2 207.6 558.1 207.6 554.4 206.9 549.9 208.1 546.2 208.7 541.5 212.8 538.5 215.1 538.9 215.8 544.4 211.7 545.1 211.7 540.4 216.6 537.5 221 535 224.6 534.4 227.7 533.6 229.2 533 230.9 533.1 234.2 533.4 234.7 535.2 234.6 536.8 233.9 538.2 233.1 541.5 230 543.3 225.8 543.2 221.9 544.6 219.2 547.2 216.1 549.3 213.9 552 212.4 551.6 214.5 553.8 211.4 555.1 210.8 556.8 208.4 560.6 209.7 563.4 212.1 562.6 215 561 217.9 557.2 220.4 556.8 222 557.8 222 562.1 219.3 563.7 219.9 563.2 223.6 562.5 226.2 558.8 229.7 556.8 231.9 554.1 234.3 556.8 235.6 559.3 236 563.3 235.1 567 233.4 570 232.5 574.6 230.7 580.4 226.9 580.5 226.3 580.8 224.4 583.5 223.6 587.4 223.9 591.4 224.4 596 222.3 596.6 219.8 596.4 218.9 603.2 214.5 605.9 213.4 613.7 213.3 623 213.3 624.1 211.8 625.8 211.5 628.3 210.5 631.1 207.6 634.3 202.7 639.8 198 640.9 199.6 644.6 198.6 646.2 200.4 643.3 208.9 645.5 212.5 645.7 214.6 639.3 217.6 633.3 219.8 627.3 221.7 623.3 225.5 622 226.9 620.8 230.3 621.5 233.6 623.6 233.8 623.8 231.5 624.9 232.9 623.9 234.7 620.1 235.7 617.6 235.6 613.4 236.7 611.1 237 608 237.3 603 239.2 611.1 238 612.2 239.2 604.3 241.1 601 241.1 601.4 240.3 599.3 242.1 600.7 242.4 598.2 247 592.9 251.9 593 250.2 591.9 249.9 590.7 248.3 590.7 251.8 591.7 252.9 591.1 255.3 588.7 257.8 584.2 262.9 583.8 262.7 586.7 258.3 584.7 255.9 585.7 250.5 583.8 253.3 583.8 257.4 580.6 256.4 583.6 258.4 582.1 264.5 583.5 265 583.5 267.2 582.5 273.6 577.9 278.3 571.8 280.2 567.4 284 564.6 284.4 561.2 286.8 559.9 288.9 553 293.1 549.2 296.2 545.7 300 543.8 304.5 543.8 309 544.4 314.5 545.9 319 545.4 321.8 546.7 329.2 545.7 333.6 545.1 336.1 543.1 340 541.3 340.8 538.7 340 538.3 337.2 536.5 335.7 534.5 330.2 532.9 325.3 532.5 322.8 534.5 318.5 533.7 315 530.6 309.6 528.7 308.6 522.6 311.6 521.7 311.2 519.7 308.2 516.7 306.6 510.3 307.5 505.7 306.7 501.4 307.2 498.9 308.2 499.5 309.9 498.8 312.5 499.6 313.8 498.4 314.6 496.6 313.7 494.3 314.9 490.4 314.7 487.1 311.3 482.2 312.1 478.6 310.6 475.1 311.1 470.1 312.6 464 317.3 457.9 320.1 454.2 323.1 452.3 326 451.3 330.5 450.9 333.5 451.5 335.7 449.3 335.9 445.7 334.5 441.8 332.5 440.9 329.5 440.7 325 438.3 321.4 437.4 317.6 435.8 313.2 432.6 310.6 428.1 310.8 423.3 315.8 419.3 313.9 417 312 416.6 308.4 415.8 305.1 413.4 302.3 411.3 300.2 410 297.9 400.6 297.9 399.8 300.6 395.5 300.6 384.7 300.6 373.8 296.1 366.8 293 367.7 291.7 360.6 292.4 354.3 292.9 354.6 289.7 352.5 286 350.3 285.2 350.4 283.4 347.5 283 346.3 281.3 341.5 280.7 340.6 279.6 341.4 276.1 338.9 269.7 338.4 260.8 339.3 259.3 338 257.2 336.5 251.8 338.3 246.6 337.4 243.1 341.3 237.8 344.1 232.4 345.2 227.5 350.7 221.5 354.7 215.8 358.7 210.1 363 201.6 364.8 196.3 365.2 193.4 366.6 192.1 372.4 194.3 371.4 200.2 373.6 198.5 376.1 193.4 377.7 188.3 391.8 188.3 406.5 188.3 411.3 188.3 426.4 188.3 441.1 188.3 455.9 188.3 470.8 188.3 487.6 188.3 504.6 188.3 514.8 188.3 516.1 185.9 517.8 185.9 516.9 189.3 517.9 190.3 521.2 190.7 525.8 191.7 529.7 193.6 534.1 192.8 539.5 194.5 Z\">\n </path>\n <path class=\"United States\" d=\"M 275 138.6 268 140.9 267.2 139.3 269.5 136.5 275.9 134.4 279.4 133.5 282 133.9 282 135.8 275 138.6 Z\">\n </path>\n <path class=\"United States\" d=\"M 236 122 232.1 122.9 230.4 121.8 229.6 120.2 235.3 119.2 238.3 119.8 236 122 Z\">\n </path>\n <path class=\"United States\" d=\"M 237.2 99.6 238.4 100.6 241.9 100.1 243.5 101.6 246.8 102.3 245.6 103 240.7 104.2 239 102.9 238.7 101.9 234.4 102.2 234.1 101.7 237.2 99.6 Z\">\n </path>\n <path class=\"United States\" d=\"M 410 66.6 385.4 87 349.8 119.7 354 119.9 356.8 121.5 357.3 124.1 357.6 127.9 365.2 124.6 371.7 122.7 371.1 125.8 371.9 128.2 373.5 130.9 372.4 135.1 371 142 375.6 145.8 372.4 149.6 367.3 152.5 366.7 150.3 364.2 148.3 367.5 143.1 365.9 138.2 368.6 132.6 364.5 132.2 357.4 132.1 353.6 130.3 350.3 124.2 347 123.1 341.3 121 334.5 121.5 328.5 118.8 325.8 116.3 319.5 117.5 316 121.6 313.1 122 306.5 123.2 300.3 125.2 293.9 126.5 297.1 123 305.5 117.2 312.3 115.4 312.7 114 303.3 117.2 295.9 121.1 284.7 125.3 284.9 128.2 275.9 132.4 268.2 134.9 261.6 136.8 257.6 139.4 247 142.5 242.5 145.3 234.3 147.9 231.6 147.5 225.4 149.1 218.4 151.2 212.3 153.2 202.3 155 202.7 153.9 210.9 151.1 217.5 149.2 226.1 145.9 232.6 145.3 237.6 142.8 248 139.2 250.3 138 256 135.9 261.8 131.4 268 127.9 260.7 129.7 260.4 128.6 255.5 130.8 255.9 127.8 252.3 129.9 253.9 127 246.6 129.3 243.8 129.3 247.5 125.8 250.8 123.6 250.4 121.5 243.2 122.7 242.6 119.9 241.3 118.5 245.3 115.2 244.9 112.7 250.8 109.4 258.5 106.1 263.8 103.2 267.9 102.8 269.7 103.7 276.8 100.9 279.3 101.4 284.9 99.6 287.4 97 286.3 96 292.3 93.8 289.5 93.9 283.3 95.1 280.4 96.4 278.6 95.1 271.7 95.8 267.1 94.4 268.3 92.1 267.3 88.9 276.5 86.5 289.7 83.8 293.2 83.8 288.9 86.6 298.1 86.4 299.3 82.9 297 80.8 297.8 78 297.1 75.7 293.8 74 300.3 71.1 307.8 70.9 316.6 68.5 321.4 65.9 329.3 63.3 334.1 62.7 345.3 60.3 348.4 60.7 358.8 57.9 363.2 59 362.7 61.4 366 60.4 372.3 60.7 370.4 61.9 375.3 62.8 380.2 62.3 386.4 63.9 393.6 64.5 395.8 65.1 402.4 64.3 406.5 65.9 410 66.6 Z\">\n </path>\n <path d=\"M677.3 487l1.5-2.8 0.5-2.9 1-2.7-2.1-3.8-0.3-4.4 3.1-5.5 1.9 0.7 4.1 1.5 5.9 5.4 0.8 2.6-3.4 5.9-1.8 4.7-2.2 2.5-2.7 0.4-0.8-1.8-1.3-0.2-1.7 1.7-2.5-1.3z\" id=\"GF\" name=\"French Guiana\">\n </path>\n <path d=\"M592.9 422l-0.5-0.2-0.5-0.5 0.1-0.6 0.2 0.3 0.4 0.4 0.3 0.5 0 0.1z\" id=\"AW\" name=\"Aruba\">\n </path>\n <path d=\"M634.2 384.9l-0.2 0 0.3-0.4 0.3 0-0.2 0.3-0.2 0.1z\" id=\"AI\" name=\"Anguilla\">\n </path>\n <path class=\"American Samoa\" d=\"M 27.7 593.3 27.4 593.7 27.2 594 27 594.1 26.6 593.8 26.8 593.6 27.1 593.6 27.2 593.4 27.7 593.3 Z\">\n </path>\n <path class=\"American Samoa\" d=\"M 34.3 593.3 33.8 593.4 33.7 593.2 34.1 593.1 34.3 593.3 Z\">\n </path>\n <path class=\"Antigua and Barbuda\" d=\"M 640.7 391.9 641.3 392.2 641.1 392.5 640.9 392.5 640.2 392.6 640 392.5 640 392 640.3 391.9 640.4 391.6 640.6 391.6 640.7 391.9 Z\">\n </path>\n <path class=\"Antigua and Barbuda\" d=\"M 640.7 388.2 640.9 388.2 641.1 388.4 641.2 388.8 641.1 389.1 640.9 389.2 640.8 389 640.5 388.8 640.5 388.3 640.7 388.2 Z\">\n </path>\n <path d=\"M1264.1 333.3l0.3 0.1 0.2-0.1 0.4 0.7-0.1 0.2 0.1 0.9 0 0.7-0.2 0.4-0.1-0.4-0.6-0.8 0.1-0.4-0.2-0.7 0-0.4 0.1-0.2z\" id=\"BH\" name=\"Bahrain\">\n </path>\n <path class=\"Bahamas\" d=\"M 580.4 366 580 366.5 579.8 367 579.2 367.3 578.7 367.3 578.6 367.2 578.2 367.4 577.7 367.5 577.1 367.3 576.7 367.4 576.6 366.9 576.9 366.7 577.1 366.4 577.5 366.2 577.8 365.8 578.2 365.8 578.5 365.6 578.7 365.9 579.2 366.1 579.7 365.9 580.4 364.9 580.7 364.9 580.7 365.1 580.4 366 Z\">\n </path>\n <path class=\"Bahamas\" d=\"M 580.6 364.3 580.4 363.7 581 363.4 581.3 363.7 581.3 363.9 581 364 580.6 364.3 Z\">\n </path>\n <path class=\"Bahamas\" d=\"M 581 357.8 581.2 357.7 581.7 358 582.1 358 582.5 358.1 582.8 358.3 582.8 358.6 582.6 358.7 582.1 358.3 581.7 358.3 581.6 358.2 581.1 358.4 580.6 358.2 580.6 358.1 580.8 357.6 581 357.8 Z\">\n </path>\n <path class=\"Bahamas\" d=\"M 577.1 356 576.9 356.4 576.9 357.1 576.8 357.5 576.4 357.8 576.2 358.2 575.8 358.5 575.1 358.8 575 359 574.8 358.8 574.9 358.6 575.3 358.5 575.5 358.3 575.5 358.1 575.9 358 576.1 357.6 576.5 357.5 576.8 357.1 576.6 356.8 576.2 356.8 576 356.6 576.4 356.1 576.5 356 577.1 356 Z\">\n </path>\n <path class=\"Bahamas\" d=\"M 575.2 355.7 575.3 355.8 575.7 355.8 576.1 356 575.7 356.4 575.6 356.2 575.4 356.2 575 356.1 574.6 355.9 574.3 355.3 574.6 355.2 575 355.3 575.2 355.7 Z\">\n </path>\n <path class=\"Bahamas\" d=\"M 566 349.8 566.6 350.5 566.9 350.7 567.2 351.2 566.9 351.1 566.8 350.9 566.5 350.8 566.1 350.4 565.9 350.3 565.7 349.9 566 349.8 Z\">\n </path>\n <path class=\"Bahamas\" d=\"M 569.7 349.8 570 350.4 570.2 350.9 570.2 351.3 570.4 351.5 570.6 352.2 570.6 353.1 570.8 353.4 571.3 353.6 571.7 354.2 571.7 355 571.3 354.3 571.3 354.1 571 353.7 570.4 353.5 570.6 353.3 570.3 353 570.3 352.7 570.5 352.4 570.4 351.9 570.1 351.5 570.2 351.4 569.9 351 569.8 350.4 569.6 350.5 569.7 349.8 Z\">\n </path>\n <path class=\"Bahamas\" d=\"M 572.6 349.8 572.3 350 572 349.9 571.9 349.7 572.5 349.5 572.6 349.8 Z\">\n </path>\n <path class=\"Bahamas\" d=\"M 564.4 347.9 564.3 347.8 564 347.1 564.2 347.1 564.4 347.9 Z\">\n </path>\n <path class=\"Bahamas\" d=\"M 574.9 347.4 574.5 348 574.1 348 574.3 347.7 574.4 347.1 574.8 346.8 574.9 347.2 574.9 347.4 Z\">\n </path>\n <path class=\"Bahamas\" d=\"M 556.4 346.2 556.1 346.3 555.9 346.6 555.6 346.5 556.2 346.1 556.4 346.2 Z\">\n </path>\n <path class=\"Bahamas\" d=\"M 556.6 346.9 557 347.1 557.2 346.9 557.3 346.4 557.5 346.3 557.7 346.9 557.7 347.4 557.6 347.7 557.7 348.3 557.7 348.6 557.3 349.4 557.1 349.5 556.7 349.3 556.9 349 557.3 348.8 557.2 348.7 556.6 349.1 556.4 348.9 556.8 348.6 556.4 348.6 556.2 348.7 556 348.5 556 347.8 556.1 347.6 555.7 347.1 555.7 346.9 556.1 346.7 556.2 346.4 556.5 346.3 556.6 346.1 557.2 345.8 557.3 346.2 556.8 346.6 556.6 346.9 Z\">\n </path>\n <path class=\"Bahamas\" d=\"M 570.1 346.3 570.2 346.8 570 346.7 569.5 346.8 569.1 346.9 569 346.7 569.3 346.5 569.7 346.2 569.7 346 569.3 345.8 569.1 345.2 569 344.6 568.6 344.2 568.6 344 568.1 343.5 568.4 343.2 568.8 343.6 568.8 344.1 569 344.4 569.1 344.9 569.4 345.4 569.8 345.7 569.9 346 570.1 346.3 Z\">\n </path>\n <path class=\"Bahamas\" d=\"M 559.8 340.8 560.1 341 559.5 341.3 559.2 341.2 559 341.4 558.5 341.3 558.7 341 559.1 340.8 559.8 340.8 Z\">\n </path>\n <path class=\"Bahamas\" d=\"M 555.6 340.3 556 340.1 556.3 340.4 556.2 340.6 556.3 340.8 556.1 341.2 556.4 341.5 556.6 342.4 556.8 342.7 557.2 343.2 557 343.9 557.1 344.5 556.9 344.8 556.6 344.9 556.2 345.3 555.9 345.5 555.6 345.5 555.3 345.7 555 345.7 555 345.3 554.7 345.1 554.8 344.5 554.5 344.8 554.3 344.7 553.7 344.3 553.4 344 553.2 343.7 553.9 343.4 554.4 344.1 554.5 343.5 554.2 343.4 554.1 343.1 554.2 342.8 554.8 342.2 555 341.8 554.9 341.7 555.2 341.3 555.2 340.8 555 340.1 555.1 340 555.4 340 555.6 340.3 Z\">\n </path>\n <path class=\"Bahamas\" d=\"M 563.7 337.7 563.8 337.9 564.1 338.3 564.9 339 565.4 339.1 565.5 339.2 565.7 339.6 566 340 566.5 340.4 566.5 340.6 566.3 341.4 566.2 341.6 566.2 341.9 566.1 342.4 565.9 342.7 565.8 343.4 565.7 343.5 565.5 342.9 565.1 342.6 565.2 342.4 565.7 342.5 565.9 342.3 565.8 342.1 565.9 341.7 566.2 341.3 566.3 340.8 566.3 340.5 565.8 340.1 565.4 339.4 565.1 339.2 564.5 338.9 564.2 338.6 563.6 338.4 563.2 338.6 563.6 337.7 563.7 337.7 Z\">\n </path>\n <path class=\"Bahamas\" d=\"M 554.9 330.2 555.4 330.4 555.5 330.4 556.2 330.5 556.4 330.3 556.6 330.4 557.1 330.4 557.5 330.2 557.9 330.2 558.2 330 558.3 330.5 558.2 330.7 557.9 330.7 557.5 330.7 556.4 330.9 556.1 330.9 554.6 331.3 553.9 331.7 553.5 331.7 553.3 331.6 553 331.3 552.5 330.7 553.1 331 553.2 331.2 553.7 331.2 554.2 331 554.6 330.4 554.3 330.3 554.5 330 554.6 329.7 554.9 330.2 Z\">\n </path>\n <path class=\"Bahamas\" d=\"M 559.2 328.9 560 329.1 560.2 329 560.6 329.3 561.5 330.3 561.7 330.9 562.1 331 562.8 331.5 562.8 331.7 562.6 332.2 562.8 332.9 562.4 332.9 561.9 333.3 561.8 333.5 561.5 334.5 561.4 335.4 561.2 335.6 560.9 335.4 560.8 335 560.4 334.9 560.7 334.4 560.9 334.4 561.4 334 561.3 333.6 561.5 333.2 561.5 332.9 561.7 332.6 561.7 332 561.9 331.9 562.1 331.6 562.2 331.3 561.9 331.2 561.4 331.1 561.3 330.8 561.3 330.6 560.9 330.4 560.9 330.1 560.6 329.4 560.4 329.3 560.1 329.4 559.6 329.3 559.3 329.3 558.7 328.9 559.2 328.9 Z\">\n </path>\n <path d=\"M635.2 387l-0.1-0.3 0.3 0.1-0.2 0.2z\" id=\"BL\" name=\"Saint-Barthélemy\">\n </path>\n <path d=\"M637.3 294l-0.3 0-0.1 0.1 0.1 0.2-0.4 0.2-0.1-0.1 0.2-0.1 0.1 0 0.1-0.3 0.3-0.1 0.1 0.1z\" id=\"BM\" name=\"Bermuda\">\n </path>\n <path d=\"M651.5 418l-0.6-0.2-0.1-0.5 0-0.8 0.2-0.4 0.2 0.2 0.2 0.6 0.5 0.3 0.1 0.4-0.5 0.4z\" id=\"BB\" name=\"Barbados\">\n </path>\n <path class=\"Comoros\" d=\"M 1233.2 581.3 1232.3 581.2 1232.1 580.8 1232.1 580.5 1232.6 580.6 1233.3 581.1 1233.2 581.3 Z\">\n </path>\n <path class=\"Comoros\" d=\"M 1236.9 579.4 1237.1 580.4 1237.1 581.1 1237 581.3 1236.8 581 1236.4 580.7 1236.3 580.5 1236 580.4 1235.4 580 1235.5 579.9 1236 580.1 1236.3 580 1236.5 579.6 1236.5 579.4 1236.8 579.3 1236.9 579.4 Z\">\n </path>\n <path class=\"Comoros\" d=\"M 1231.2 578.4 1230.7 578 1230.4 577.9 1230.1 577.7 1229.9 577.1 1230 576.8 1230 576.6 1230.2 575.4 1230.1 575.3 1230.3 574.9 1230.8 574.8 1231 575.1 1230.8 576.3 1230.9 576.6 1231.1 577 1231.2 577.5 1231.4 578.1 1231.2 578.4 Z\">\n </path>\n <path class=\"Cape Verde\" d=\"M 847.8 406.5 847.6 406.8 847.4 406.6 847.4 406.3 847.7 406.2 847.8 406.5 Z\">\n </path>\n <path class=\"Cape Verde\" d=\"M 849.7 406.6 849.5 406.7 849.1 406.6 848.8 406.3 848.7 406 848.9 405.6 849.4 405.3 849.8 405.3 850 406 849.9 406.4 849.7 406.6 Z\">\n </path>\n <path class=\"Cape Verde\" d=\"M 853.2 403.5 853.4 403.6 853.4 403.8 853.6 404 854 404.5 854.2 404.5 854.4 404.8 854.6 405.3 854.8 405.5 854.5 406 854.2 406.1 853.7 406 853.4 405.9 853.1 405.6 853.1 405.4 852.9 405.3 852.8 404.9 852.9 404.7 852.9 404.4 853.1 404 852.9 403.5 853.2 403.5 Z\">\n </path>\n <path class=\"Cape Verde\" d=\"M 856.3 403.5 856.6 403.6 856.7 404.2 856.6 404.6 856.2 404.8 855.8 404.4 856 404 855.9 403.8 856.3 403.5 Z\">\n </path>\n <path class=\"Cape Verde\" d=\"M 858.3 397.8 858.6 397.6 859.1 397.8 859.2 398 859.2 398.7 858.8 399 858.5 399.2 858.2 399.2 857.7 399 857.7 398.5 857.9 398.3 857.9 397.7 858 397.6 858.3 397.8 Z\">\n </path>\n <path class=\"Cape Verde\" d=\"M 850.3 395 850.7 394.9 851 395.1 851.4 395.1 851.7 395.3 851.8 395.5 851.3 395.5 850.6 395.2 850.4 395.3 850.1 395.9 849.8 395.3 849.7 395.2 849.6 394.8 849.9 394.7 850.3 395 Z\">\n </path>\n <path class=\"Cape Verde\" d=\"M 858.1 394.5 858.2 394.6 858.1 395.2 857.9 395.3 857.9 394.8 857.7 394.5 857.7 394.2 857.6 393.9 858 393.6 858.2 393.8 858.1 394.4 858.1 394.5 Z\">\n </path>\n <path class=\"Cape Verde\" d=\"M 846.8 393.2 847 393.5 847.1 393.8 846.4 394.1 846.1 393.9 845.9 393.7 846.3 393.3 846.8 393.2 Z\">\n </path>\n <path class=\"Cape Verde\" d=\"M 846 391.4 846.3 391.5 846.3 391.7 846.6 392 846.4 392.4 845.8 392.7 845.4 393.1 844.7 393.2 844.7 393.1 844.7 392.6 844.5 392.4 844.5 392.2 844.7 392 844.9 392 845.1 391.8 845.8 391.4 846 391.4 Z\">\n </path>\n <path d=\"M599 424.5l-0.3 0-0.4-0.3-0.3-0.1-0.3-0.3-0.1-0.2-0.3-0.1-0.2-0.4-0.3-0.3 0.1-0.5 0.5 0.3 0.1 0.5 0.4 0.4 0.7 0.2 0.2 0.3 0.3 0.4-0.1 0.1z\" id=\"CW\" name=\"Curaçao\">\n </path>\n <path class=\"Cayman Islands\" d=\"M 532.7 377.8 533 377.9 533.2 377.5 533.6 377.6 534.1 377.6 534.2 377.8 534 378 533.8 377.9 533.4 378 533.2 378.1 532.5 378.1 532.7 377.8 Z\">\n </path>\n <path class=\"Cayman Islands\" d=\"M 540.8 375.3 540.1 375.6 540.3 375.3 540.8 375.3 Z\">\n </path>\n <path class=\"Cayman Islands\" d=\"M 541.4 375.4 541.3 375.3 542.1 375 541.9 375.3 541.4 375.4 Z\">\n </path>\n <path class=\"Cyprus\" d=\"M 1168.2 276.7 1168.3 276.9 1168.6 277.3 1168.2 277.2 1167.9 277.2 1167.5 277.4 1167.2 277.1 1167.2 276.8 1167.5 276.7 1167.7 276.8 1168.2 276.7 Z\">\n </path>\n <path class=\"Cyprus\" d=\"M 1166.5 277.2 1166.5 277.3 1166.3 277.5 1166.2 278.1 1166.1 278.3 1165.8 278.3 1165.6 278.5 1165.1 278.7 1164.9 278.8 1164.3 279.1 1163.9 279 1163.4 279.1 1163.1 279.5 1162.9 279.2 1162.6 279.3 1162.4 279.3 1162.1 279 1161.7 279.3 1161.2 279.3 1160.7 279.1 1160.2 279 1159.8 278.7 1159.5 278.1 1159.2 277.8 1159 277.1 1158.8 276.8 1158.9 276.5 1159.4 276.8 1159.8 276.7 1160 276.4 1160.1 276.1 1160.4 276 1160.6 276.1 1160.8 275.9 1161 275.9 1161.1 276.3 1161.6 276.5 1161.7 276.7 1162.3 276.7 1162.9 276.2 1163.3 276.3 1163.6 276.1 1163.9 276.2 1164.3 276.4 1164.5 276.1 1164.8 276.1 1165.1 276.5 1165.1 277.1 1165.4 276.9 1165.7 277.1 1165.8 277 1166.5 277.2 Z\">\n </path>\n <path d=\"M642 401.7l0.5 0.1 0.2 0.5 0 0.6-0.1 0.8-0.1 0.2-0.2 0.1-0.4 0.2 0.1-0.4-0.1-0.2-0.1-0.7-0.3-0.5 0-0.3 0.1-0.3 0-0.3 0.2 0 0.2 0.2z\" id=\"DM\" name=\"Dominica\">\n </path>\n <path class=\"Falkland Islands\" d=\"M 697.4 836.2 697.8 836.1 697.8 836.5 697 836.2 697.3 835.9 697.5 835.8 697.4 836.2 Z\">\n </path>\n <path class=\"Falkland Islands\" d=\"M 696.7 834.8 696.9 835 697.3 835.1 697.4 835.5 697.1 835.6 697 835.2 696.8 835 696.7 834.8 Z\">\n </path>\n <path class=\"Falkland Islands\" d=\"M 702.9 834 703.1 834.1 703 834.5 702.7 834.4 702.5 834.1 702.8 833.9 702.9 834 Z\">\n </path>\n <path class=\"Falkland Islands\" d=\"M 690.8 833.1 690.8 833.3 690.9 833.6 690.5 833.7 690.2 833.6 690 833.4 689.7 833.3 689.6 832.9 689.8 832.9 689.9 832.7 690.2 832.6 690.4 832.7 690.1 833 690.4 833.1 690.7 832.8 690.8 833.1 Z\">\n </path>\n <path class=\"Falkland Islands\" d=\"M 693.7 831.8 693.3 831.6 692.8 831.3 692 831 692.1 830.6 691.4 830.5 691.1 830.4 690.8 830 691 829.9 691.8 830.2 692.6 830.6 693.1 830.7 693.5 830.8 693.8 830.5 693.9 830.2 694.1 830.3 694.5 830.1 694.6 830.3 695.1 830.3 695.1 830.6 695.4 830.6 696.3 830.4 696.4 830.6 696.7 830.6 697.1 830.5 696.8 830.3 696.7 830 697.1 830 697.7 830.2 697.8 830.6 697.4 831.1 697.5 831.4 697.3 831.6 696.9 831.6 696.6 832.4 696.3 832.7 696 833.3 695.9 833.6 695.4 833.9 695.3 833.7 694.9 833.7 694.9 834 694.1 833.9 694 834 694.3 834.4 694.2 834.5 694 834.9 693.6 834.9 693.3 835.3 693 835.4 692.8 835.4 692.6 835.1 692.2 834.8 692.2 834.6 691.7 834.6 692.3 835 691.9 835 691.4 834.7 691.2 834.6 690.8 834.4 690.5 834.2 690.5 834 691.2 834.2 691.8 834 691.3 833.8 691.2 833.7 692.1 833.7 692.5 833.8 692.8 834 692.8 833.8 693.2 833.7 693.3 833.4 692.9 833.2 692.7 832.7 692.8 832.5 693.4 832.5 693.6 832.6 694 832.5 693.9 832.2 693.1 832.2 693.1 832.3 692.7 832.5 692.1 832.5 691.6 832.2 691.6 831.9 692.3 832.1 692.9 831.9 693.2 831.9 693.7 831.8 694.1 832 694.1 831.9 693.7 831.8 Z\">\n </path>\n <path class=\"Falkland Islands\" d=\"M 695.3 829.9 695.6 829.9 695.9 830.2 695.6 830.3 695.3 830.3 695.3 829.9 Z\">\n </path>\n <path class=\"Falkland Islands\" d=\"M 694.3 829.9 694 829.9 693.9 829.6 694.3 829.7 694.3 829.9 Z\">\n </path>\n <path class=\"Falkland Islands\" d=\"M 692.9 829.7 693.5 829.6 693.7 829.9 693.4 830.3 693.2 830.2 692.9 830.3 692.6 830.1 692.9 829.9 693.2 830.1 693.3 829.9 692.8 829.8 692.9 829.7 Z\">\n </path>\n <path class=\"Falkland Islands\" d=\"M 700.1 829.8 700.7 829.8 700.8 829.7 701.3 829.6 701.7 829.8 702.1 830.1 702.2 830.4 702.2 830.5 701.7 830.6 701.5 830.3 701.3 830.2 701.2 830.5 701.4 830.6 701.5 830.9 701.8 830.7 702 830.8 702.1 831.2 702.4 831.3 702.5 831.2 703 831.5 703.1 831.1 702.3 830.9 702.4 830.4 702.7 830.2 704.2 830.1 704.9 830.7 705.1 830.8 705.1 831.2 704.5 831.1 704 830.9 703.4 831.1 703.7 831.3 704.1 831.4 705 831.5 705.3 831.6 705.4 831.8 705.2 832.3 704.7 832.3 704.6 832.4 703.9 832.5 703.4 832.7 703.7 832.9 702.8 833.3 702.4 833.2 701.9 833.3 701.2 833.3 700.6 833.1 700 832.7 700 833 700.3 833.2 700.9 833.4 701.2 833.7 701.4 833.6 701.8 833.7 702.2 834 702 834.1 702.2 834.6 702 834.6 701.7 834.3 701.3 834.2 700.8 834.6 700.6 834.3 700.3 834.1 700 834.1 699.5 833.9 699.3 834 699.5 834.4 699.8 834.4 700 834.6 699.8 834.7 700.5 835.3 700.3 835.4 699.9 835.2 699.6 835.2 699.3 834.9 699 834.8 698.7 834.7 698.6 835.3 699.1 835.4 699.1 835.7 699 835.9 698.6 835.8 698.5 835.6 698 835.4 697.9 835.2 697.7 835.2 697.3 834.7 697.6 834.3 697.6 834.1 697.2 833.6 697.2 833.4 697.7 833.2 697.6 833 698.1 832.9 698 832.6 698.6 832.2 699.2 832 699.6 832.4 699.6 832.8 699.9 832.7 699.4 832.1 699.5 831.8 698.9 831.6 698.5 831.3 698.6 831.1 699 831.3 699.1 830.8 698.4 830.6 698.5 830.3 698.7 830.4 699 830.2 699.3 830.2 699.5 829.9 699.2 829.6 699.6 829.6 700.1 829.8 Z\">\n </path>\n <path class=\"Falkland Islands\" d=\"M 695.1 829.4 695.8 829.4 696 829.6 696.2 829.4 696.4 829.5 696.6 829.8 696.4 829.9 696 829.8 695.6 829.6 694.8 829.5 694.9 829.3 695.1 829.4 Z\">\n </path>\n <path class=\"Falkland Islands\" d=\"M 688.3 828.3 687.8 828.2 687.9 828 688.3 828.3 Z\">\n </path>\n <path class=\"Faeroe Islands\" d=\"M 955.6 112 956 112.2 956.3 112.2 956.4 112.4 956.4 112.8 956.6 113.1 956.5 113.3 955.9 112.9 955.7 112.5 955.5 112.3 955.3 112 955.6 112 Z\">\n </path>\n <path class=\"Faeroe Islands\" d=\"M 955.9 110.4 956.7 110.6 956.9 110.8 956.8 111.2 956.7 111.3 956.3 110.8 955.8 110.7 955.6 110.3 955.9 110.4 Z\">\n </path>\n <path class=\"Faeroe Islands\" d=\"M 954.62 109.03999999999999 954.7 109.2 955 109.2 955 109.5 954.6 109.5 954.4 109.7 953.8 109.5 953.6 109.4 953.4 109.1 953.9 109 954 108.9 954.5571428571428 108.99285714285715 954.3 108.8 954.5 108 955 108.1 955.3 108.6 955.3 108.7 955.9 108.9 956.2 109.4 956.5 109.6 956.4 110.2 955.9 109.8 955.7 109.6 955.5 109.5 955.4 109.3 955.2 109.1 954.7 109.1 954.62 109.03999999999999 Z\">\n </path>\n <path class=\"Faeroe Islands\" d=\"M 958.3 108.4 958.1 108.2 958.4 108 958.3 108.4 Z\">\n </path>\n <path class=\"Faeroe Islands\" d=\"M 955.9 108.9 955.5 108.7 955.2 108.4 955.1 108.1 955.2 108 955.6 107.9 955.9 107.9 956.5 108.3 956.4 108.5 956.5 108.7 957.1 108.9 957.1 109.1 956.7 109.4 955.9 108.9 Z\">\n </path>\n <path class=\"Faeroe Islands\" d=\"M 958.1 108.3 957.8 108.7 957.5 108.5 957.2 108.5 957.4 108.2 957.3 107.8 957.4 107.7 957.6 108.1 958.1 108.3 Z\">\n </path>\n <path class=\"Faeroe Islands\" d=\"M 957.2 108.3 957 108.3 956.8 107.9 956.9 107.6 957.1 108 957.2 108.3 Z\">\n </path>\n <path class=\"Federated States of Micronesia\" d=\"M 1909.4 467.7 1909.2 468 1908.7 467.9 1908.7 467.7 1909.2 467.3 1909.4 467.7 Z\">\n </path>\n <path class=\"Federated States of Micronesia\" d=\"M 1881.2 457.1 1881.6 457.1 1881.9 457.3 1882 457.7 1881.8 457.8 1881.9 458 1881.8 458.2 1881.2 458.2 1881 458 1881 457.8 1880.8 457.5 1880.8 457.2 1881.2 457.1 Z\">\n </path>\n <path class=\"Federated States of Micronesia\" d=\"M 1766.5 440.5 1766.6 440.8 1766.3 440.8 1766 441.3 1765.9 441.2 1766.2 440.4 1766.6 440.3 1766.5 440.5 Z\">\n </path>\n <path d=\"M639.2 424.5l-0.4 0.3-0.2-0.1-0.1-0.5 0.2-0.5 0.3-0.4 0.3 0 0.1 0.3-0.1 0.7-0.1 0.2z\" id=\"GD\" name=\"Grenada\">\n </path>\n <path d=\"M1800.8 415.5l-0.1 0.4 0 0.6-0.1 0.3-0.3 0-0.2-0.3-0.1-0.5 0-0.5 0.6-0.5 0.1-0.2 0.1-0.5 0.2-0.1 0.1 0.2 0.4 0.1-0.2 0.5-0.5 0.5z\" id=\"GU\" name=\"Guam\">\n </path>\n <path class=\"Saint Kitts and Nevis\" d=\"M 636.3 392 636 392 635.9 391.8 636.1 391.4 636.3 391.4 636.4 391.6 636.3 392 Z\">\n </path>\n <path class=\"Saint Kitts and Nevis\" d=\"M 635.6 390.5 635.5 390.8 635.3 390.8 634.9 390.6 634.7 390.4 635 390 635.5 390.4 635.6 390.5 Z\">\n </path>\n <path d=\"M643.7 413.8l-0.2-0.2-0.4-0.2-0.1-0.2 0-0.6 0.1-0.2 0.7-1.1 0.3 0.2 0 0.7-0.1 0.8-0.1 0.4-0.2 0.4z\" id=\"LC\" name=\"Saint Lucia\">\n </path>\n <path d=\"M634.2 386l-0.4-0.1 0.2-0.3 0.3-0.1-0.1 0.5z\" id=\"MF\" name=\"Saint-Martin\">\n </path>\n <path d=\"M1402.9 474.8l0 0.2-0.2-0.1 0.2-0.2 0 0.1z\" id=\"MV\" name=\"Maldives\">\n </path>\n <path d=\"M1953.8 456l1 0.4-0.2 0-0.8-0.4z\" id=\"MH\" name=\"Marshall Islands\">\n </path>\n <path class=\"Malta\" d=\"M 1063.9 271.7 1063.7 272 1063.2 271.8 1062.7 271.5 1062.7 271 1062.6 270.9 1063.2 270.9 1063.6 271.2 1063.8 271.4 1063.9 271.7 Z\">\n </path>\n <path class=\"Malta\" d=\"M 1062.3 270.6 1061.8 270.5 1061.8 270.3 1062.2 270.2 1062.6 270.5 1062.3 270.6 Z\">\n </path>\n <path class=\"Northern Mariana Islands\" d=\"M 1802.5 411.1 1802.4 411.2 1802.2 411.1 1802.1 410.9 1802.6 410.7 1802.8 410.9 1802.5 411.1 Z\">\n </path>\n <path class=\"Northern Mariana Islands\" d=\"M 1804 406 1803.8 406 1803.5 405.4 1803.6 405.1 1803.9 405.1 1803.9 405.4 1804.1 405.6 1804 406 Z\">\n </path>\n <path class=\"Northern Mariana Islands\" d=\"M 1804.5 404.4 1804.3 404.6 1804.4 404.9 1804 404.9 1804 404.2 1804.1 404 1804.5 403.8 1804.4 404.3 1804.5 404.4 Z\">\n </path>\n <path class=\"Northern Mariana Islands\" d=\"M 1802.6 396.9 1802.3 396.9 1802.2 396.7 1802.6 396.7 1802.6 396.9 Z\">\n </path>\n <path class=\"Northern Mariana Islands\" d=\"M 1800.7 385.9 1800.6 385.7 1800.6 385.2 1800.9 385.1 1801.1 385.4 1800.7 385.9 Z\">\n </path>\n <path class=\"Northern Mariana Islands\" d=\"M 1799.5 381.6 1799.1 381.5 1799.1 381.2 1799.3 381.1 1799.5 381.3 1799.5 381.6 Z\">\n </path>\n <path d=\"M638.2 393.9l0.2 0.4 0 0.3-0.2 0.2-0.2-0.1-0.1-0.3 0.3-0.5z\" id=\"MS\" name=\"Montserrat\">\n </path>\n <path class=\"Mauritius\" d=\"M 1307.7 630.8 1308.1 631.7 1307.9 632.3 1307.5 632.7 1307.6 633 1307.3 633.3 1306.8 633.5 1306.3 633.5 1305.7 633.4 1305.6 633.5 1305.3 633.2 1305.5 633 1305.6 632.6 1305.7 631.9 1305.9 631.5 1306.4 631.1 1306.5 630.9 1306.7 630.4 1307.1 630.1 1307.5 630.2 1307.7 630.8 Z\">\n </path>\n <path class=\"Mauritius\" d=\"M 1339.5 628.7 1339.2 628.4 1339.6 628.2 1339.9 628.1 1340.1 628.2 1340 628.4 1339.5 628.7 Z\">\n </path>\n <path class=\"New Caledonia\" d=\"M 1915.2 646.9 1915 647 1914.8 647.4 1914.4 647.2 1914.6 646.7 1914.7 646.5 1915 646.6 1915.2 646.9 Z\">\n </path>\n <path class=\"New Caledonia\" d=\"M 1919.6 639.1 1919.5 639.2 1919.7 639.6 1920 639.6 1920.4 639.4 1920.3 640 1920.1 640.2 1920 640.6 1919.5 640.9 1919.1 640.7 1919.1 640.6 1918.8 640.3 1918.9 640.1 1918.7 639.9 1918.8 639.5 1918.7 639.1 1918.8 639.1 1919.2 639.2 1919.6 639.1 Z\">\n </path>\n <path class=\"New Caledonia\" d=\"M 1916.9 634.8 1916.7 635.3 1916.7 635.7 1916.5 636 1916.8 636.2 1917 636.3 1917.1 636.5 1917 636.7 1917.3 637.1 1917.1 637.1 1916.9 637.6 1916.7 637.8 1916.4 637.7 1916.2 637.4 1916.1 637.2 1915.5 637.1 1915.2 636.6 1915.2 636.4 1915.1 636.1 1915.4 636.1 1915.7 635.9 1916.1 635.6 1916.2 635.3 1915.8 635.1 1915.4 635.2 1915.6 634.8 1915.9 634.7 1916.1 634.8 1916.5 634.5 1916.9 634.8 Z\">\n </path>\n <path class=\"New Caledonia\" d=\"M 1913.5 633.2 1913.2 633.8 1913.1 634.1 1913.4 634.1 1912.9 634.6 1912.7 634.8 1912.6 634.6 1912.9 634.2 1913.1 633.7 1913.5 633.2 Z\">\n </path>\n <path class=\"New Caledonia\" d=\"M 1913.5 633.2 1913.3 632.8 1913.7 632.8 1913.8 633.2 1913.5 633.2 Z\">\n </path>\n <path class=\"New Caledonia\" d=\"M 1899.6 630.8 1899.8 630.9 1900.3 631.8 1900.6 632.1 1900.9 632 1901.1 631.7 1902 632.2 1902.3 632.7 1903 633.3 1903.3 633.7 1903.4 634 1903.8 634.4 1903.9 634.6 1904.1 634.6 1904.4 634.9 1905.3 635.1 1905.4 635.4 1905.4 635.8 1905.7 636.2 1906.1 636.3 1905.8 636.8 1905.9 637 1906.3 637.5 1906.4 637.5 1906.8 638 1906.7 638.4 1907.4 638.6 1907.8 639.1 1908.1 639.1 1908.4 639.3 1908.9 639.7 1908.8 640 1909.1 640 1909.5 640.5 1910.1 640.9 1910.1 641.1 1910.4 641.2 1910.7 641.5 1910.7 641.7 1911 642.3 1911.4 642.7 1911.5 642.6 1911.9 643.2 1912.4 643.3 1912.7 643.6 1912.7 644 1912.8 644.4 1912.9 644.5 1912.7 645.1 1912 645.5 1911.9 645.2 1911.6 645.3 1911.3 645.6 1910.7 644.8 1910.3 644.8 1910.2 644.6 1910 644.6 1909.8 644.9 1908.9 644 1908.7 644 1908.3 643.5 1908.4 642.7 1908.1 642.7 1907.7 642.7 1907.4 642.5 1907.3 642.3 1907.1 642.2 1906.8 642.2 1906.8 641.9 1906.6 641.4 1906.2 641.5 1905.4 641 1905.3 640.8 1905.3 640.5 1905 640.7 1904.4 640.4 1904.3 640 1903.9 639.7 1903.7 639.2 1903.2 639.1 1903.4 638.9 1903.1 638.6 1902.8 638.5 1902.5 637.8 1902.5 637.4 1902.3 637.1 1902 637.1 1901.8 636.5 1901.9 636.3 1901.2 635.9 1900.9 635.7 1900.5 635.1 1900.8 634.9 1900.6 634.7 1900.4 634.4 1900.4 633.9 1899.9 633.6 1899.9 633 1899.7 632.7 1900 632.7 1900.1 632.4 1900 632.2 1899.4 632.2 1899.2 631.9 1899.7 631.2 1899.4 630.9 1899.6 630.8 Z\">\n </path>\n <path class=\"New Caledonia\" d=\"M 1900.7 631.1 1900.4 631 1900.5 630.6 1900.7 631.1 Z\">\n </path>\n <path class=\"New Caledonia\" d=\"M 1898.4 628.7 1898.2 628.9 1898.1 628.5 1898.3 628.3 1898.4 628.7 Z\">\n </path>\n <path d=\"M1933 505.3l-0.2 0-0.1-0.3 0.3 0 0 0.3z\" id=\"NR\" name=\"Nauru\">\n </path>\n <path d=\"M1747.7 453.1l-0.2 0.4 0.1 0.1-0.2 0.6 0.1 0.2-0.5 0.2-0.2-0.7 0.3-0.2-0.2-0.2 0.3-0.6 0.3-0.1 0.2 0.3z\" id=\"PW\" name=\"Palau\">\n </path>\n <path class=\"Puerto Rico\" d=\"M 607.1 385.9 606.8 385.7 606.9 385.5 607.2 385.5 607.3 385.6 607.1 385.9 Z\">\n </path>\n <path class=\"Puerto Rico\" d=\"M 621.7 385.4 621.5 385.4 620.6 385.7 620 385.7 620.2 385.5 620.6 385.3 621 385.2 621.6 385.3 621.7 385.4 Z\">\n </path>\n <path class=\"Puerto Rico\" d=\"M 612.2 383 612.8 383.1 613.4 383.1 613.7 383.2 614.3 383.1 614.6 383.2 615 383.1 615.2 383.2 615.7 383.1 616.1 383.2 616.4 383.2 617.2 383.4 617.2 383.2 617.8 383.4 617.9 383.3 618.7 383.4 618.9 383.6 619.1 383.6 619.7 383.9 619.9 383.8 619.8 384.5 620 384.8 619.1 385.1 618.8 385.5 618.5 386.1 618.2 386.3 617.9 386.4 617.5 386.4 616.9 386.5 616.6 386.7 615.9 386.6 615.7 386.4 615.2 386.6 614.9 386.3 614.2 386.5 613.3 386.4 613 386.5 612.4 386.6 612.2 386.7 612 386.5 611.6 386.4 611.3 386.6 610.7 386.5 611 385.8 611 385.4 611.2 385 611 384.4 610.8 384.3 610.7 383.9 611.1 383.7 611.3 383.6 611.3 383.1 611.7 382.9 612.2 383 Z\">\n </path>\n <path class=\"French Polynesia\" d=\"M 195.3 679.3 195.2 679.2 195 678.9 195.1 678.7 195.4 678.9 195.3 679.3 Z\">\n </path>\n <path class=\"French Polynesia\" d=\"M 205.6 641.2 205.5 641.3 205.2 641.1 205.4 640.9 205.6 641.2 Z\">\n </path>\n <path class=\"French Polynesia\" d=\"M 199.4 616.5 199.2 616.4 199.4 615.8 199.9 615.4 200.2 615.4 200.2 615.6 200 616 199.4 616.5 Z\">\n </path>\n <path class=\"French Polynesia\" d=\"M 151.7 615.5 152.4 615.7 152.7 616.1 152.7 616.4 152.5 616.5 152 616.4 151.6 615.8 151.5 615.6 150.9 615.8 150.7 615.8 150.1 615.7 149.9 615.3 149.6 614.8 149.6 614.5 149.7 614.3 150.2 614.2 150.7 614.2 151.2 614.4 151.4 614.8 151.5 615.4 151.7 615.5 Z\">\n </path>\n <path class=\"French Polynesia\" d=\"M 148.7 614 148.5 614.6 148 614.4 148.1 614.1 148.6 613.9 148.7 614 Z\">\n </path>\n <path class=\"French Polynesia\" d=\"M 141.1 609.7 140.9 609.8 140.7 609.5 141 609.4 141.1 609.7 Z\">\n </path>\n <path class=\"French Polynesia\" d=\"M 139 610.1 138.7 610.3 138.4 610.3 138.2 609.5 138.4 609.3 139.1 610.1 139 610.1 Z\">\n </path>\n <path class=\"French Polynesia\" d=\"M 138 608.3 138.2 608.4 138.2 608.9 137.8 608.7 137.7 608.4 138 608.3 Z\">\n </path>\n <path class=\"French Polynesia\" d=\"M 166.3 605.4 166 605.5 166.1 605.2 166.3 605.4 Z\">\n </path>\n <path class=\"French Polynesia\" d=\"M 204.3 569.5 204 569.5 204 569.1 203.8 568.8 204.2 568.9 204.3 569.3 204.3 569.5 Z\">\n </path>\n <path class=\"French Polynesia\" d=\"M 201.2 566 201 566 201 565.6 201.2 565.3 201.5 565.5 201.3 565.7 201.2 566 Z\">\n </path>\n <path class=\"French Polynesia\" d=\"M 202.4 564.4 202.4 564.7 202 564.8 201.4 564.8 201.4 565.1 201 565 200.8 564.8 200.7 564.5 201.4 564.1 201.7 564.1 201.9 564.3 202.4 564.4 Z\">\n </path>\n <path class=\"French Polynesia\" d=\"M 195.5 561.8 195.5 562.2 195.5 562.4 195.2 562.4 194.9 562 195.2 561.7 195.5 561.8 Z\">\n </path>\n <path class=\"French Polynesia\" d=\"M 197.9 558.8 198.2 558.9 198.3 559 197.7 559.2 197.6 558.9 197.9 558.8 Z\">\n </path>\n <path class=\"French Polynesia\" d=\"M 194.2 558.2 195.1 558.3 195.4 558.6 195.4 558.8 195 559.1 194.2 559.1 194.1 558.6 194 558.2 194.2 558.2 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1926.8 576.2 1927.1 576.4 1927 576.8 1927.3 576.8 1927.3 577 1926.5 577 1926.2 576.5 1926.4 576.2 1926.8 576.2 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1888.5 575.6 1888.7 575.6 1889.7 576.4 1890.2 576.7 1891.1 577.4 1891 577.7 1890.8 577.7 1890.6 577.9 1890.4 577.6 1890.3 577.6 1890.1 577.4 1890 577 1889.6 576.9 1889.6 576.6 1889.3 576.5 1889.2 576.6 1889 576.6 1888.1 576.2 1887.9 575.8 1888.2 575.4 1888.5 575.6 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1925.4 574.1 1925.2 574.4 1924.9 574.2 1924.9 574 1925.2 573.8 1925.4 574.1 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1923.1 570.2 1923.2 570.3 1923.5 570.3 1923.4 570.7 1922.9 570.9 1922.6 570.9 1922.2 571 1921.8 571.6 1921.7 571.3 1921.4 571.4 1921.2 571.2 1921.2 570.9 1921.7 570.8 1921.7 570.6 1922 570.2 1922.7 570.3 1923.1 570.2 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1896.8 567.4 1897.1 567.3 1897.7 567.6 1898.2 568.1 1898.5 568.4 1898.7 568.4 1898.9 568.6 1899.1 568.6 1899.4 568.9 1899.7 568.8 1900.1 568.9 1900.3 569.1 1900.7 569.1 1901 569 1901.2 569.3 1901.4 570.1 1901.7 570.4 1901.7 570.9 1901.5 571.1 1901.6 571.4 1901.2 571.2 1900.9 571.4 1900.6 571.3 1900.1 571 1899.9 571 1899.3 570.8 1898.9 570.7 1898.7 570.4 1898.4 570.2 1898.1 570.1 1897.9 569.8 1897.5 569.6 1897.7 569.2 1897.6 568.8 1897.6 568.4 1897.4 568.3 1896.8 568.1 1896.5 568.2 1896.4 568 1896.5 567.7 1896.6 567.4 1896.8 567.4 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1900.8 564 1900.7 564.2 1900.7 564.9 1900.5 564.7 1900.5 564.2 1900.8 564 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1897.9 562.2 1898.2 563.1 1898.4 563.5 1898.4 563.9 1898.5 564.4 1898.3 564.7 1897.9 564 1897.8 564.3 1897.5 563.8 1897.6 562.8 1897.7 562.6 1897.7 562.3 1897.9 562.2 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1889.5 562.4 1889.8 562.4 1890.1 562.3 1890.5 562.4 1890.6 562.3 1891.1 562.3 1891.9 562.3 1892.1 562.6 1892.4 562.7 1892.6 563 1892.8 563 1893 563.1 1893.4 563.5 1893.4 564.1 1893.6 564.1 1894 564.3 1894.1 564.6 1894.1 565.2 1894 565.3 1893.3 565.5 1893.1 565.6 1892.7 565.5 1892.3 565.3 1891.9 565.3 1891.8 565.1 1891.3 564.8 1890.7 564.8 1890.2 564.9 1889.7 564.9 1889.2 564.8 1888.9 564.6 1888.6 564.7 1888.3 564.3 1888 564.1 1887.7 563.3 1887.5 562.9 1887.7 562.7 1887.6 562.5 1887.6 561.8 1887.7 561.5 1888.3 561.2 1888.7 561.4 1889.1 561.9 1889.2 562.2 1889.5 562.4 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1891.8 560 1892.3 560.5 1892 560.8 1891.7 560.6 1891.7 560.5 1891.8 560 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1891.8 560 1891.6 560.4 1891.5 560.4 1891.1 560.1 1890.8 560.2 1890.6 560.1 1890.5 559.9 1890.8 559.8 1891 559.6 1891.5 559.7 1891.8 560 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1885.2 559.5 1885.3 559.7 1885.5 559.8 1885.3 560.2 1884.9 560.4 1884.6 560 1885.2 559.5 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1876.7 557.7 1876.9 558 1876.8 558.3 1876 557.9 1876.5 557.6 1876.7 557.7 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1880.1 558.5 1879.8 558.3 1879.9 558 1880.2 557.7 1880.2 558.2 1880.3 558.4 1880.1 558.5 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1879.2 556.7 1879.4 556.6 1879.8 556.6 1879.8 556.8 1879.4 557.1 1879.6 557.3 1879.6 557.6 1879.2 558 1879 558.1 1878.7 558 1878.3 557.6 1878.4 557 1878.7 556.9 1878.9 556.5 1879.2 556.4 1879.2 556.7 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1875.6 556.8 1875.4 556.9 1875.2 557.4 1875.6 557.9 1875.1 557.7 1875.1 557.5 1875 557.2 1874.6 556.8 1874.6 556.6 1875 556.4 1875.1 556.1 1875.5 555.8 1875.8 556 1875.8 556.4 1875.6 556.8 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1888.5 556.3 1888.7 556.5 1888.6 556.7 1888.4 556.6 1887.8 556.1 1888 555.7 1888.3 555.6 1888.5 555.8 1888.4 556.1 1888.5 556.3 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1895 555.5 1895.4 556.3 1896 557.1 1896 557.4 1895.6 557.6 1895.6 558.1 1895.6 558.4 1895.7 558.6 1895.9 558.6 1896.1 558.9 1896.6 559.3 1896.7 559.8 1896.8 560.1 1897 560.3 1896.8 560.5 1897.1 560.8 1897 560.9 1897.1 561.4 1896.9 561.6 1897.2 561.9 1897.3 562.4 1897.5 562.9 1897.5 563.5 1897.4 563.6 1897.1 563.3 1896.8 562.8 1896.8 562.5 1896.5 562.1 1896.1 561.8 1895.8 561.5 1895.3 560.9 1894.9 560.6 1894.6 559.7 1894.4 558.7 1894.2 558 1894.2 557.5 1894.1 557.1 1894.5 556.7 1894.4 556.4 1893.9 555.7 1893.8 555.4 1893.9 555.3 1894.3 555.4 1894.5 555.5 1894.8 555.2 1895 555.5 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1874.3 555.2 1874.1 554.8 1873.8 554.5 1874.2 554.5 1874.3 555.2 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1874.2 554.2 1874.6 554.3 1874.7 554.4 1874.8 554.9 1874.6 554.9 1874.4 554.5 1874.2 554.2 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1877.3 554.4 1877.2 554.7 1877.4 554.7 1877.9 554.7 1878.3 555.4 1878.3 555.6 1878.5 555.9 1878.6 556.4 1878.4 556.6 1878.4 556.9 1877.8 556.7 1877.6 556.5 1877.3 556.5 1876.9 556.2 1876.8 556 1876.7 555.7 1877.1 555.8 1876.8 555 1876.7 554.8 1876.2 554.9 1876 555 1875.6 555 1875.3 555.4 1874.9 555.2 1874.9 554.6 1875.1 554.4 1875.5 554.4 1875.5 554 1875.9 553.4 1876.3 553.1 1876.6 552.9 1877 553.2 1877.2 553.6 1877.1 554.3 1877.3 554.4 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1871.4 554.4 1871.3 554.4 1871.1 553.6 1871.2 553.3 1871.2 552.9 1871.4 553 1871.5 553.4 1871.5 554.1 1871.4 554.4 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1874.8 553.9 1874.5 554.1 1874.4 554 1874 554 1873.7 553.7 1873.6 553.4 1873.5 553.1 1873.6 552.8 1873.9 552.4 1874.4 552.2 1874.6 552.4 1874.9 552.9 1874.9 553.5 1874.8 553.9 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1871.8 550.4 1872.2 550.9 1872.2 551 1872.9 551.4 1872.8 551.7 1872.2 552.4 1872.2 552.7 1871.9 552.8 1871.9 552.4 1871.7 552.4 1871.7 552 1871.5 551.6 1871.2 551.4 1871.1 551.1 1871.2 550.8 1871.4 550.6 1871.6 550.4 1871.8 550.4 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1882.1 550.5 1882.4 550.7 1882.2 550.8 1881.7 550.9 1881.6 550.6 1881.8 550.4 1882.1 550.5 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1883 550.5 1883.2 550.4 1883.7 550.7 1884 550.8 1884.2 551 1884.5 551.5 1884.8 551.6 1885.1 551.9 1885.1 552.2 1885.6 552.3 1885.6 552.6 1885.9 552.7 1886.2 552.6 1886.3 552.7 1886.7 552.9 1886.8 553.1 1887.1 553 1887.4 553.1 1887.5 553.4 1887.9 553.7 1888.2 554 1888.6 554.3 1889.6 555.3 1889.3 555.7 1889.6 556.2 1889.7 556.8 1889.4 556.7 1889.1 556.3 1888.4 555.5 1888 555.4 1887.5 555 1886.9 554.9 1886.8 554.6 1886.2 554.4 1885.7 553.9 1885.5 553.9 1884.7 553.3 1884.2 553 1884.2 552.8 1883.8 552.6 1883.6 552.4 1883.4 552 1883 551.7 1882.9 551.5 1882.9 551.1 1882.5 550.6 1882.3 550.5 1882.3 550.2 1883 550.5 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1881.5 549.9 1881.7 550.1 1881.9 550 1882.2 550.2 1882.1 550.4 1881.8 550.3 1881.5 549.9 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1877 549.3 1877.5 549.3 1877.3 549.5 1877 549.4 1877 549.3 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1881.3 549.3 1881.1 549.8 1881 549.6 1881.3 549.3 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1878.6 549.7 1878.1 549.8 1877.9 549.6 1878.2 549.2 1878.5 549.3 1878.6 549.7 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1866.1 548.8 1866.3 549.1 1866.1 549.3 1865.8 549.2 1865.7 549.1 1866.1 548.8 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1867.6 546.9 1867.9 547.1 1867.8 547.4 1867.1 547.6 1866.8 547.3 1867.1 546.7 1867.3 546.6 1867.6 546.9 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1869.3 546 1869.3 546.5 1869.1 546.3 1869.1 546.1 1869.3 546 Z\">\n </path>\n <path class=\"Solomon Islands\" d=\"M 1872.2 544.5 1872.5 544.6 1872.9 545.1 1873.2 545.3 1873.5 545.4 1873.8 545.7 1874.6 546.1 1875 546.6 1875 547 1875.1 547.6 1875.3 547.8 1875.6 548.1 1875.8 548.1 1875.9 548.5 1876.6 548.8 1877 548.7 1877.1 548.8 1877.1 549.1 1876.8 549.2 1876.6 549.5 1876.1 549.3 1875.3 548.9 1874.8 548.9 1874.5 548.5 1873.8 548.1 1873.2 547.1 1872.6 546.1 1872.1 545.8 1871.4 545.1 1871.4 544.6 1871.4 544.4 1871.7 544.2 1872 544.3 1872.2 544.5 Z\">\n </path>\n <path class=\"São Tomé and Principe\" d=\"M 1023.9 501.3 1023.7 501.3 1023.5 501.6 1023.3 501.6 1023.2 501.2 1023 500.4 1023 500.1 1023.4 499.6 1023.7 499.5 1024 499.2 1024.4 499.3 1024.6 499.7 1024.7 500 1024.6 500.4 1024.4 500.7 1024.1 501.1 1023.9 501.3 Z\">\n </path>\n <path class=\"São Tomé and Principe\" d=\"M 1028.5 491.5 1028.4 491.8 1028.2 491.9 1027.9 491.8 1027.9 491.5 1028.1 491.4 1028.1 491.1 1028.3 490.9 1028.6 491 1028.5 491.5 Z\">\n </path>\n <path d=\"M634.2 386l0 0.1-0.4-0.1 0-0.1 0.4 0.1z\" id=\"SX\" name=\"Sint Maarten\">\n </path>\n <path class=\"Seychelles\" d=\"M 1249 562.1 1248.7 562.3 1248.2 562.3 1247.8 562.5 1247.4 562.5 1247.4 562.3 1247.9 562.3 1248.3 562.2 1248.7 561.9 1248.9 561.9 1249 562.1 Z\">\n </path>\n <path class=\"Seychelles\" d=\"M 1248.5 561.8 1248.3 561.9 1247.9 561.9 1247.9 561.7 1248.5 561.8 Z\">\n </path>\n <path class=\"Seychelles\" d=\"M 1300.4 531.5 1300.8 531.9 1300.6 532.2 1300.4 531.9 1300.1 531.7 1300.3 531.2 1300.4 531.5 Z\">\n </path>\n <path class=\"Turks and Caicos Islands\" d=\"M 587.7 361.6 588.4 361.6 588.7 362 588.4 362 588.1 361.9 587.6 362 587.5 361.7 587.7 361.6 Z\">\n </path>\n <path class=\"Turks and Caicos Islands\" d=\"M 585 361.5 585.3 361.9 585.9 361.8 585.7 362 585.1 362 584.7 361.8 585 361.5 Z\">\n </path>\n <path class=\"Turks and Caicos Islands\" d=\"M 587.2 360.9 587.2 361.4 586.7 361.2 586.6 360.9 586.7 360.8 587.2 360.9 Z\">\n </path>\n <path class=\"Tonga\" d=\"M 14.7 639.5 14.2 639.2 14.2 639 14.5 638.8 14.7 639.5 Z\">\n </path>\n <path class=\"Tonga\" d=\"M 11.9 637.4 12.2 637.4 12.6 637.7 12.9 637.8 13.1 637.4 13.4 637.7 13.1 638 13.2 638.2 13.1 638.4 12.9 638.3 12.6 638 11.9 637.8 11.9 637.4 Z\">\n </path>\n <path class=\"Tonga\" d=\"M 11.1 628.8 10.9 628.9 10.8 628.4 11 628.5 11.1 628.8 Z\">\n </path>\n <path class=\"Tonga\" d=\"M 15.5 621.3 15 621.6 14.8 621.6 14.7 621.5 15 621 15.3 621.1 15.5 621.3 Z\">\n </path>\n <path class=\"Tonga\" d=\"M 1.4 602 1.3 602.1 1 602 1.1 601.8 1.4 601.8 1.4 602 Z\">\n </path>\n <path class=\"Trinidad and Tobago\" d=\"M 642.8 432.2 642.6 432.7 642.3 433.1 642.1 433.2 642 433.6 642.2 434.2 642 434.3 642 435 642.2 435.3 642.4 435.5 642.2 435.7 642.1 436 642.1 436.7 641.9 436.8 641.5 437 641 437.1 640.7 437.1 640.2 437.2 639.7 437.1 639.3 437.2 639 437.1 638.5 437.3 638.1 437.1 637.5 437.1 637.2 437.3 636.9 437.2 637.4 437 637.7 436.7 638.1 436.6 638.5 436.3 638.7 436 639.3 436.1 639.6 435.7 639.4 434.9 639.6 434.5 639.6 434 639.6 433.8 639.3 433.4 639 433.3 638.6 433.2 638.5 433.1 638.9 432.8 640 432.7 640.2 432.5 641.3 432.5 641.4 432.4 642.6 432.2 642.8 432.2 Z\">\n </path>\n <path class=\"Trinidad and Tobago\" d=\"M 645.2 429 645.1 429.5 644.8 429.6 644.4 429.9 644.2 429.9 643.5 430.3 643.3 430.1 643.6 429.8 644.3 429.3 645.2 429 Z\">\n </path>\n <path d=\"M1998.9 556.6l0-0.2 0.1 0 0 0.1-0.1 0.1z\" id=\"TV\" name=\"Tuvalu\">\n </path>\n <path d=\"M642.2 417.4l-0.1 0.1-0.5-0.3 0-0.4 0.2-0.3 0.2-0.5 0.4 0 0.1 0.4-0.1 0.8-0.2 0.2z\" id=\"VC\" name=\"Saint Vincent and the Grenadines\">\n </path>\n <path d=\"M626.1 383.4l-0.4 0.2-0.1 0-0.3 0.2-0.1-0.1 0.1-0.3 0.6-0.1 0.2 0.1z\" id=\"VG\" name=\"British Virgin Islands\">\n </path>\n <path class=\"United States Virgin Islands\" d=\"M 624.5 387.8 624.8 388.1 623.7 388.3 623.6 387.8 624.3 387.6 624.5 387.8 Z\">\n </path>\n <path class=\"United States Virgin Islands\" d=\"M 625.2 384 625 384.2 624.5 384.2 624.5 384 624.8 383.9 625.2 384 Z\">\n </path>\n <path class=\"United States Virgin Islands\" d=\"M 623.8 383.8 624.2 384.1 624 384.3 623.7 384.1 623.2 384.1 623.4 383.9 623.8 383.8 Z\">\n </path>\n <path class=\"Vanuatu\" d=\"M 1931.8 631.8 1931.3 631.6 1931.5 631.2 1932 631.1 1932.2 631.5 1932.1 631.7 1931.8 631.8 Z\">\n </path>\n <path class=\"Vanuatu\" d=\"M 1930.6 628 1930.4 628 1930.1 627.9 1929.7 627.4 1929.6 627 1929.6 626.6 1929.8 626.4 1929.9 626 1930.2 625.9 1930.6 625.9 1930.4 626.2 1930.4 626.7 1931.1 627.2 1930.8 627.5 1930.6 628 Z\">\n </path>\n <path class=\"Vanuatu\" d=\"M 1930.6 622.1 1930.9 622.1 1931 622.3 1930.5 622.4 1930.6 622.7 1931 622.9 1931.1 623.2 1931 623.6 1930.6 623.7 1930.2 623.4 1929.8 623.4 1929.6 623.2 1929.3 623 1929.4 622.6 1929.4 622.3 1929.6 621.8 1929.9 621.4 1930.4 621.4 1930.6 621.5 1930.5 621.9 1930.6 622.1 Z\">\n </path>\n <path class=\"Vanuatu\" d=\"M 1927.6 614.5 1928.2 614.4 1928.3 614.5 1928.5 615.1 1928.7 615.4 1928.8 615.5 1928.4 616.1 1927.6 616.3 1927.3 616 1927.2 615.5 1926.9 615.4 1926.5 615.7 1926.4 615.6 1926.6 615.2 1927 614.9 1927.4 614.4 1927.6 614.5 Z\">\n </path>\n <path class=\"Vanuatu\" d=\"M 1929.9 610.6 1929.8 610.3 1930.1 610.3 1929.9 610.6 Z\">\n </path>\n <path class=\"Vanuatu\" d=\"M 1928.3 608.2 1928.4 608.7 1928.4 608.9 1928.8 609 1929 609.5 1929.5 609.5 1929.5 609.9 1929.4 610 1929.1 609.7 1928.8 609.6 1928.2 609.8 1927.9 609.7 1927.8 609.5 1927.7 609.1 1927.9 608.6 1928.1 608.3 1928.3 608.2 Z\">\n </path>\n <path class=\"Vanuatu\" d=\"M 1929.2 608 1929.1 608 1929 607.7 1929.2 607.7 1929.2 608 Z\">\n </path>\n <path class=\"Vanuatu\" d=\"M 1929.4 606.6 1929.2 606.8 1928.6 606.8 1928.3 606.9 1928.1 606.7 1927.7 606.6 1927.2 606.2 1927.3 606 1927.8 605.8 1928.2 605.7 1928.6 605.4 1928.7 605.1 1928.9 605.1 1929 605.4 1929 606 1929.5 606.4 1929.4 606.6 Z\">\n </path>\n <path class=\"Vanuatu\" d=\"M 1924.7 605.3 1924.9 605.6 1925.5 606 1926.2 606.7 1926.3 606.8 1926.3 607.2 1926.5 607.5 1926.2 607.7 1925.8 608.1 1925.8 607.9 1925.5 607.8 1925.1 607.8 1924.9 607.9 1924.9 608.1 1924.5 608.3 1924.2 608.2 1924.2 607.5 1924.1 606.9 1924.2 606.3 1924.3 605.8 1924.1 605.3 1923.5 605.6 1923.3 605.4 1923.2 605.1 1923.2 604.8 1923.5 604.5 1923.5 604.1 1923.6 603.8 1923.9 603.7 1924.5 604 1924.4 604.2 1924.6 604.7 1924.5 604.9 1924.7 605.3 Z\">\n </path>\n <path class=\"Vanuatu\" d=\"M 1924.1 602.9 1923.8 602.9 1923.3 602.6 1923.3 602.5 1923.5 602.2 1923.7 602.1 1924.2 602.2 1924.1 602.6 1924.1 602.9 Z\">\n </path>\n <path class=\"Vanuatu\" d=\"M 1923.6 601.9 1924 601.6 1924.1 601.7 1924.2 602 1923.7 602 1923.6 601.9 Z\">\n </path>\n <path class=\"Vanuatu\" d=\"M 1929.3 604.5 1929.1 604.4 1929.2 603.2 1929.1 602.9 1929.2 602.4 1929.5 601.6 1929.6 601.1 1929.8 601.7 1929.7 602 1929.7 602.6 1929.7 603.6 1929.6 604.2 1929.3 604.5 Z\">\n </path>\n <path class=\"Vanuatu\" d=\"M 1928 601.2 1927.3 601.2 1927 601.1 1927 600.9 1927.9 600.2 1928.4 600 1928.9 599.9 1928.9 600.1 1928.6 600.5 1928.4 600.8 1928 601.2 Z\">\n </path>\n <path class=\"Vanuatu\" d=\"M 1929.9 600.5 1929.9 600.7 1929.6 600.7 1929.7 600.4 1929.9 599.1 1929.9 599 1930 597.8 1930.2 597.9 1930.1 599.2 1930.2 599.5 1930.1 600 1929.9 600.5 Z\">\n </path>\n <path class=\"Vanuatu\" d=\"M 1923.6 601.9 1922.7 601.8 1922.1 602.1 1922 602.3 1921.8 602.3 1921.7 601.7 1921.5 601.6 1921.1 600.6 1921.5 599.8 1921.5 599.4 1921.4 599.2 1921.4 597.8 1921.3 597.5 1921.3 597 1921.5 596.7 1921.5 596.4 1921.7 596.1 1921.7 595.9 1922 595.8 1922.1 596.3 1922.3 596.7 1922.5 597 1922.6 598.3 1922.5 599.1 1922.5 599.2 1923.1 599.1 1923.4 598.8 1923.6 598 1923.6 597.8 1923.9 597.6 1924.2 597.7 1924.1 598.1 1924.1 599 1924.4 599.1 1924.4 599.6 1924.2 599.7 1924.5 600.1 1924.3 600.3 1924.3 600.8 1924.5 601.3 1924.4 601.5 1924.1 601.5 1923.6 601.9 Z\">\n </path>\n <path class=\"Vanuatu\" d=\"M 1927.8 592.6 1928.2 592.9 1928.1 593.3 1927.8 593.6 1927.6 593.8 1927 593.8 1927 593.4 1927.1 593 1927.3 592.7 1927.8 592.6 Z\">\n </path>\n <path class=\"Vanuatu\" d=\"M 1928.4 590.7 1928.1 590.9 1927.9 591 1927.9 591.2 1927.7 591.3 1927.7 591 1927.5 590.8 1927.4 590.5 1927.5 590.1 1927.7 590 1928.1 589.8 1928.2 590 1928.3 590.4 1928.3 590.5 1928.4 590.7 Z\">\n </path>\n <path class=\"Vanuatu\" d=\"M 1923.4 586.5 1923.3 586.4 1923.4 585.9 1923.6 586.1 1923.4 586.5 Z\">\n </path>\n <path class=\"Samoa\" d=\"M 21.9 591.3 22.2 591.4 22.5 591.5 22.8 591.7 22.7 592 21.7 592 21.4 591.9 21.1 592 20.9 591.9 20.5 591.7 20.2 591.8 19.9 591.6 19.7 591.4 19.1 591.1 19.2 590.7 19.6 590.5 20 590.5 20.5 590.5 21.4 590.9 21.9 591 21.9 591.3 Z\">\n </path>\n <path class=\"Samoa\" d=\"M 17.4 588.5 18 589.1 18.2 589.8 18.1 590.1 18.2 590.4 17.9 590.4 17.6 590.2 17.3 590.4 16.4 590.5 16.1 590.2 15.9 589.8 15.7 589.7 15.4 589.4 14.9 589 14.7 588.8 14.7 588.6 15.1 588.7 15.4 588.6 16 588.4 16.4 588.4 16.9 588.3 17.2 588.3 17.4 588.5 Z\">\n </path>\n <path d=\"M602 424.6l-0.2 0-0.1-0.5 0.1-0.3-0.1-0.3-0.4-0.1-0.3-0.3 0.1-0.3 1.2 0.6-0.1 0.2 0 0.4-0.2 0.2 0 0.4z\" id=\"BQBO\" name=\"Netherlands\">\n </path>\n <path d=\"M634.3 389.6l-0.2 0.1 0-0.2 0.1-0.1 0.1 0.2z\" id=\"BQSE\" name=\"St. Eustatius (Netherlands)\">\n </path>\n <path d=\"M632.8 388.7l-0.1 0 0.1-0.2 0.1 0.1-0.1 0.1z\" id=\"BQSA\" name=\"Saba (Netherlands)\">\n </path>\n <path d=\"M644 406.9l0 0.2 0.4-0.1-0.2 0.5 0.2 0.2 0 0.2 0.2 0.2 0.2 0.9-0.3 0.3-0.1-0.4-0.1 0.1-0.6-0.1-0.4 0-0.2-0.3 0.6-0.5-0.4 0-0.4-0.4-0.1-0.5-0.2-0.5 0.3-0.4 0.4 0.1 0.5 0.3 0.2 0.2z\" id=\"MQ\" name=\"Martinique\">\n </path>\n <path class=\"Canary Islands (Spain)\" d=\"M 888.4 323.4 888.1 323.9 887.7 324.4 887.4 324 887 324 886.8 323.8 887 323.5 887.4 323.6 887.8 323.2 888.1 323 888.3 323.1 888.4 323.4 Z\">\n </path>\n <path class=\"Canary Islands (Spain)\" d=\"M 902 321.1 902 321.6 902.2 322 902 322.7 902.1 323 901.7 323.4 901.2 323.6 901 323.8 900.4 323.6 899.9 323.1 899.7 322.7 899.7 322.1 900.3 321.7 900.4 321.2 900.4 321 901 321.1 901.4 321.1 901.7 321.2 902 321.1 Z\">\n </path>\n <path class=\"Canary Islands (Spain)\" d=\"M 892.1 321.9 891.9 321.9 891.6 321.7 891.4 321.4 891.5 321 891.6 320.7 891.9 320.7 892.2 320.7 892.7 321.1 892.8 321.4 892.3 321.9 892.1 321.9 Z\">\n </path>\n <path class=\"Canary Islands (Spain)\" d=\"M 898.2 318.4 898.2 318.6 897.6 318.9 897.2 319.4 896.9 319.6 896.9 320 896.5 320.7 896.4 321.1 895.9 321.7 895.8 321.9 895.6 321.9 895 322.1 894.9 322 894.8 321.6 894.5 321.2 894.4 321 894.2 320.7 894.2 320.4 893.8 319.8 894.3 319.5 894.6 319.7 895.2 319.5 895.6 319.5 896.1 319.3 896.6 318.9 896.6 318.7 897.2 318.4 897.8 318.4 898.1 318.3 898.2 318.4 Z\">\n </path>\n <path class=\"Canary Islands (Spain)\" d=\"M 908.4 321.2 908.1 321.6 907.7 321.7 907.4 321.6 907 321.6 907 321.4 907.3 321.4 907.9 321.2 908.3 320.9 908.6 320.6 908.7 320.1 908.8 319.8 909 319.3 909.3 318.9 909.6 318.3 909.8 317.5 910 317.3 910.4 317.2 910.7 317.5 910.8 318 910.7 318.5 910.6 319 910.6 319.5 910.5 319.6 910.2 320.3 909.9 320.6 909.3 320.7 908.6 321 908.4 321.2 Z\">\n </path>\n <path class=\"Canary Islands (Spain)\" d=\"M 888.8 316.7 889.1 316.6 889.3 316.9 889.5 317.4 889.3 317.7 889.4 318.1 888.8 319.1 888.7 319 888.6 318.6 888.2 317.7 888.1 317.4 888 317.2 888.2 316.8 888.5 316.6 888.8 316.7 Z\">\n </path>\n <path class=\"Canary Islands (Spain)\" d=\"M 912.9 314.7 912.9 315.1 912.7 315.6 912 316.1 911.5 316.2 911.1 316.7 910.6 316.5 910.6 316.4 910.8 316 910.8 315.6 911 315.3 911.3 315.1 911.6 315.1 911.9 314.8 912.4 314.8 912.5 314.7 912.7 314.2 912.9 314.1 913.1 314.3 912.9 314.7 Z\">\n </path>\n <path d=\"M1240.2 583.1l0.2 0.3 0.5 0.2 0 0.3-0.2 0.2 0.1 0.2-0.3 0.6 0.1 0.2-0.3 0.1-0.2-0.3 0-0.3 0.2-0.2-0.2-0.7-0.1-0.1-0.1-0.2 0.3-0.3z\" id=\"YT\" name=\"Mayotte\">\n </path>\n <path d=\"M1295 635.8l0.4 0 0.4 0.2 0.3 0.3 0 0.3 0.1 0.5 0.3 0.2 0.2 0.2 0.1 0.2-0.2 0.6-0.1 0.4-0.2 0.2-0.4 0.1-0.9 0-0.2-0.2-0.8-0.4-0.3-0.5 0-0.3-0.3-0.6 0.1-0.4 0.2-0.2 0.2-0.4 0.1 0 0.5-0.2 0.5 0z\" id=\"RE\" name=\"Reunion\">\n </path>\n <path class=\"Guadeloupe\" d=\"M 643 399.9 642.7 399.9 642.5 399.5 642.6 399.3 642.9 399 643.2 399.2 643.3 399.5 643.3 399.7 643 399.9 Z\">\n </path>\n <path class=\"Guadeloupe\" d=\"M 641.2 397.3 641.5 397.3 641.5 397.5 641.5 397.6 641.3 397.7 641.3 398.5 641.3 398.9 641.1 399.1 640.5 399.4 640.5 399.2 640.3 399 640.2 398.5 640.2 398 640.1 397.5 640.1 397.2 640.3 396.9 640.6 396.8 641.1 397.1 641.2 397.3 Z\">\n </path>\n <path class=\"Guadeloupe\" d=\"M 642.6 396.9 643 397 643.5 397.4 642.2 397.7 641.9 397.8 641.5 397.5 641.6 396.9 641.8 396.8 641.7 396.2 641.8 396 642.1 395.8 642.4 396.2 642.4 396.6 642.6 396.9 Z\">\n </path>\n <path class=\"Fiji\" d=\"M 1989.1 624.9 1988.8 625 1988.9 624.6 1989.1 624.9 Z\">\n </path>\n <path class=\"Fiji\" d=\"M 1981.6 623.3 1981.8 623.5 1982.1 623.6 1982.1 623.9 1981.6 624.1 1981.1 623.8 1980.6 624.1 1980.3 624.1 1980.1 624.4 1980.2 624.7 1979.8 624.6 1979.7 624.8 1979.3 624.7 1979.2 624.8 1978.8 624.6 1979.1 624.5 1979.3 624.4 1979.5 624.2 1979.9 624.3 1980.2 624 1980.4 623.7 1980.9 623.6 1981.4 623.3 1981.6 623.3 Z\">\n </path>\n <path class=\"Fiji\" d=\"M 1982.5 623.2 1982.3 623.3 1982.1 623.2 1982.3 623 1982.5 623.2 Z\">\n </path>\n <path class=\"Fiji\" d=\"M 1988.4 617.1 1988.5 617.6 1988.3 618.2 1988.2 618 1988.1 617.6 1987.9 617.6 1988 617.1 1988.2 617 1988.4 617.1 Z\">\n </path>\n <path class=\"Fiji\" d=\"M 1985.8 615.7 1985.7 615.7 1985.6 615.3 1985.8 615.1 1986.2 615 1986.2 615.4 1986 615.6 1985.8 615.7 Z\">\n </path>\n <path class=\"Fiji\" d=\"M 1983.6 613.2 1983.5 613.6 1983.8 613.8 1983.9 614.1 1984.2 614.5 1984.5 614.6 1984.6 614.9 1984.8 614.9 1984.9 615.3 1984.6 615.8 1984.7 616 1984.8 616.5 1984.5 616.7 1984.5 617.2 1984.7 617.2 1984.8 617.7 1984.5 618 1983.9 618.2 1983.8 618 1983.5 618.1 1983.4 618.3 1983.1 618 1982.3 618.3 1981.5 619 1981.2 618.9 1980.8 619.1 1980.5 619 1979.9 619.1 1979.6 618.9 1978.7 618.6 1978.4 618.5 1977.8 618.4 1977.6 618.3 1977.1 618.1 1976.9 617.1 1977.2 616.4 1977.5 616.4 1977.8 616.3 1977.9 615.8 1978.2 615.7 1978.3 615.3 1978.1 615.1 1978.7 614.7 1979.1 614.2 1979.2 614.3 1979.8 613.8 1980 613.8 1980.9 613.4 1981.5 613.6 1981.8 613.5 1982.3 613.3 1982.9 613.2 1983.2 612.9 1983.6 613.2 Z\">\n </path>\n <path class=\"Fiji\" d=\"M 1989.9 613.4 1989.7 613.5 1989.9 612.6 1990.3 612.6 1990.2 613 1989.9 613.4 Z\">\n </path>\n <path class=\"Fiji\" d=\"M 1978.5 611.4 1978.3 611.7 1977.8 612 1977.8 611.7 1978.2 611.3 1978.5 611.4 Z\">\n </path>\n <path class=\"Fiji\" d=\"M 1993.4 611 1993.2 610.8 1993.3 610.6 1993.8 610.1 1994.1 609.6 1993.8 610.7 1993.4 611 Z\">\n </path>\n <path class=\"Fiji\" d=\"M 1994.4 606 1994 606.4 1993.2 607.5 1992.9 607.6 1992.2 608 1992 608.6 1991.6 608.8 1991.4 609.1 1991.3 609.3 1991.6 609.4 1992.2 609.1 1992.3 609 1992.6 608.7 1992.8 608.4 1993.4 608.1 1993.7 607.8 1994.3 607.5 1994.3 607.8 1993.8 608.5 1993.6 608.6 1993.7 609.2 1993.4 609.5 1993.1 609.2 1992.7 609.2 1992.2 609.3 1991.8 609.6 1991.1 609.7 1990.1 609.7 1990.6 609.2 1990.2 609 1989.6 609.2 1989.2 609.4 1989.2 609.6 1988.9 609.7 1988.7 609.8 1988.6 610.2 1988.4 610.5 1988.1 610.4 1988.1 610.2 1987.7 610.1 1987.3 610.3 1987.1 610.8 1986.8 611 1986.5 611 1986.5 610.7 1986.5 610.3 1986.3 609.9 1986.4 609.7 1986.3 609.6 1985.7 609.8 1985.7 609.4 1986.1 609.1 1986.2 609.1 1986.1 608.6 1986.4 608.5 1986.9 608.8 1987.5 608.4 1987.7 608.4 1988 608.1 1988.2 608.1 1988.5 607.8 1988.5 607.6 1989.3 607.5 1990.2 607.2 1990.5 607.1 1990.9 607.2 1991.4 607 1991.6 606.6 1991.8 606.6 1992 606.2 1992.4 606.3 1992.5 606.1 1992.7 606.2 1993.7 605.7 1993.8 606 1994 605.9 1994.2 606 1994.5 605.7 1995 605.5 1995.1 605.6 1994.6 606 1994.4 606 Z\">\n </path>\n <circle cx=\"997.9\" cy=\"189.1\" id=\"0\">\n </circle>\n <circle cx=\"673.5\" cy=\"724.1\" id=\"1\">\n </circle>\n <circle cx=\"1798.2\" cy=\"719.3\" id=\"2\">\n </circle>\n</svg>";

  // --- src/core/eventBus.js ---
/**
 * Minimal synchronous pub/sub. Handlers are isolated: one throwing listener
 * never prevents the rest of the chain from running.
 */
class EventBus {
  #listeners = new Map();

  on(event, handler) {
    if (!this.#listeners.has(event)) this.#listeners.set(event, new Set());
    this.#listeners.get(event).add(handler);
    return () => this.off(event, handler);
  }

  once(event, handler) {
    const unsubscribe = this.on(event, (payload) => {
      unsubscribe();
      handler(payload);
    });
    return unsubscribe;
  }

  off(event, handler) {
    const handlers = this.#listeners.get(event);
    if (!handlers) return;
    handlers.delete(handler);
    if (handlers.size === 0) this.#listeners.delete(event);
  }

  emit(event, payload) {
    this.#dispatch(event, event, payload);
    this.#dispatch('*', event, payload);
  }

  #dispatch(channel, event, payload) {
    const handlers = this.#listeners.get(channel);
    if (!handlers) return;
    for (const handler of [...handlers]) {
      try {
        channel === '*' ? handler(event, payload) : handler(payload);
      } catch (error) {
        console.error(`[bus] listener for "${event}" failed`, error);
      }
    }
  }
}



  // --- src/core/store.js ---
/**
 * Central state container. State is only ever changed through named mutations
 * registered by modules, so every change is traceable as `namespace/name`.
 *
 * Mutations may write in place; observers are notified once per outermost
 * batch with the list of mutation types that ran.
 */
class Store {
  #state;
  #bus;
  #mutations = new Map();
  #batchDepth = 0;
  #pendingTypes = [];

  constructor(initialState, bus) {
    this.#state = initialState;
    this.#bus = bus;
  }

  get state() {
    return this.#state;
  }

  registerMutations(namespace, handlers) {
    for (const [name, handler] of Object.entries(handlers)) {
      const type = `${namespace}/${name}`;
      if (this.#mutations.has(type)) throw new Error(`Mutation "${type}" registered twice`);
      this.#mutations.set(type, handler);
    }
  }

  commit(type, payload) {
    const mutation = this.#mutations.get(type);
    if (!mutation) throw new Error(`Unknown mutation "${type}"`);
    const result = mutation(this.#state, payload);
    this.#pendingTypes.push(type);
    this.#bus.emit('state:committed', { type, payload });
    if (this.#batchDepth === 0) this.#flush();
    return result;
  }

  batch(work) {
    this.#batchDepth += 1;
    try {
      return work();
    } finally {
      this.#batchDepth -= 1;
      if (this.#batchDepth === 0) this.#flush();
    }
  }

  replace(nextState) {
    this.#state = nextState;
    this.#pendingTypes.push('*');
    this.#bus.emit('state:replaced', nextState);
    this.#flush();
  }

  snapshot() {
    return structuredClone(this.#state);
  }

  #flush() {
    if (this.#pendingTypes.length === 0) return;
    const types = this.#pendingTypes;
    this.#pendingTypes = [];
    this.#bus.emit('state:changed', { types, state: this.#state });
  }
}



  // --- src/core/rng.js ---
/**
 * Seedable PRNG (mulberry32). Its internal state is persisted with the save,
 * so reloading never re-rolls an outcome the player has already seen.
 */
class Rng {
  constructor(seed) {
    this.state = seed >>> 0;
  }

  reseed(seed) {
    this.state = seed >>> 0;
  }

  next() {
    this.state = (this.state + 0x6d2b79f5) >>> 0;
    let t = this.state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  int(min, max) {
    return min + Math.floor(this.next() * (max - min + 1));
  }

  float(min, max) {
    return min + this.next() * (max - min);
  }

  chance(probability) {
    if (probability <= 0) return false;
    if (probability >= 1) return true;
    return this.next() < probability;
  }

  pick(list) {
    return list[Math.floor(this.next() * list.length)];
  }

  weighted(entries, weightOf = (entry) => entry.weight) {
    const total = entries.reduce((sum, entry) => sum + Math.max(0, weightOf(entry)), 0);
    if (total <= 0) return null;
    let roll = this.next() * total;
    for (const entry of entries) {
      roll -= Math.max(0, weightOf(entry));
      if (roll < 0) return entry;
    }
    return entries[entries.length - 1];
  }
}

const randomSeed = () => Math.floor(Math.random() * 2 ** 32) >>> 0;

/** Accepts either a fixed number or an inclusive `[min, max]` tuple. */
function rollRange(rng, value) {
  return Array.isArray(value) ? rng.int(value[0], value[1]) : value;
}



  // --- src/core/effects.js ---
/**
 * Data-driven effect pipeline shared by items, encounters and (later) crafting
 * and combat. Modules register the effect types they own; data files only
 * describe effects as plain objects, e.g. `{ type: 'damage', amount: [4, 9] }`.
 *
 * Any effect may carry `chance` (0..1); it is rolled before the handler runs.
 */
class EffectRegistry {
  #handlers = new Map();

  register(type, handler) {
    if (this.#handlers.has(type)) throw new Error(`Effect "${type}" registered twice`);
    this.#handlers.set(type, handler);
  }

  apply(effects = [], context, source = {}) {
    for (const effect of effects) {
      if (!context.store.state.player.alive) return;
      if (effect.chance != null && !context.rng.chance(effect.chance)) continue;
      const handler = this.#handlers.get(effect.type);
      if (!handler) {
        console.warn(`[effects] no handler for "${effect.type}"`, source);
        continue;
      }
      handler(effect, context, source);
    }
  }
}



  // --- src/core/clock.js ---
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = 24 * MINUTES_PER_HOUR;

/** The collapse clock starts on day 1 at 06:00. */
const START_MINUTES = 6 * MINUTES_PER_HOUR;

function readClock(totalMinutes) {
  const day = Math.floor(totalMinutes / MINUTES_PER_DAY) + 1;
  const minuteOfDay = totalMinutes % MINUTES_PER_DAY;
  return {
    day,
    hour: Math.floor(minuteOfDay / MINUTES_PER_HOUR),
    minute: Math.floor(minuteOfDay % MINUTES_PER_HOUR),
  };
}

function formatClock(totalMinutes) {
  const { hour, minute } = readClock(totalMinutes);
  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
}

function isNight(totalMinutes) {
  const { hour } = readClock(totalMinutes);
  return hour >= 20 || hour < 6;
}

function daysElapsed(totalMinutes) {
  return Math.max(0, (totalMinutes - START_MINUTES) / MINUTES_PER_DAY);
}



  // --- src/core/engine.js ---


const TICK_MINUTES = MINUTES_PER_HOUR;

/**
 * The engine owns orchestration only: module registration, the action
 * pipeline (commands issued by the UI) and the passage of time. All game rules
 * live in modules.
 *
 *   UI ──dispatch──▶ action ──commit──▶ mutation ──▶ state:changed ──▶ views
 *                      │
 *                      └─ advanceTime ──▶ time:tick ──▶ module tick handlers
 */
class Engine {
  #modules = [];
  #actions = new Map();
  #guards = [];

  constructor({ bus, store, rng, effects }) {
    this.bus = bus;
    this.store = store;
    this.rng = rng;
    this.effects = effects;
    this.context = Object.freeze({ bus, store, rng, effects, engine: this });
  }

  register(module) {
    if (this.#modules.some(({ id }) => id === module.id)) {
      throw new Error(`Module "${module.id}" registered twice`);
    }
    this.#modules.push(module);
    module.install?.(this.context);
    return this;
  }

  createInitialState(baseState) {
    const state = structuredClone(baseState);
    for (const module of this.#modules) {
      if (module.createState) state[module.id] = module.createState(this.context);
    }
    return state;
  }

  /** Back-fills slices added by modules after a save was written. */
  hydrateState(freshState, savedState) {
    const hydrated = { ...freshState, ...savedState };
    for (const module of this.#modules) {
      if (!module.createState) continue;
      hydrated[module.id] = { ...freshState[module.id], ...savedState[module.id] };
    }
    return hydrated;
  }

  registerAction(type, handler, options = {}) {
    if (this.#actions.has(type)) throw new Error(`Action "${type}" registered twice`);
    this.#actions.set(type, { handler, options });
  }

  /** A guard returns a rejection reason (i18n key) or null to allow the action. */
  addGuard(guard) {
    this.#guards.push(guard);
  }

  dispatch(type, payload = {}) {
    const action = this.#actions.get(type);
    if (!action) throw new Error(`Unknown action "${type}"`);

    for (const guard of this.#guards) {
      const reason = guard(type, action.options, this.store.state);
      if (reason) return this.#reject(type, reason);
    }

    const result = this.store.batch(() => action.handler(payload, this.context)) ?? { ok: true };
    if (!result.ok) return this.#reject(type, result.reason, result.params);
    this.bus.emit('action:completed', { type, payload, result });
    return result;
  }

  /**
   * Advances the world clock in hourly ticks. Modules react to `time:tick`
   * (needs decay, ailments, depletion recovery). Stops early on death.
   */
  advanceTime(minutes, activity = 'idle') {
    let remaining = Math.max(0, Math.round(minutes));
    let elapsed = 0;
    this.store.batch(() => {
      while (remaining > 0 && this.store.state.player.alive) {
        const step = Math.min(TICK_MINUTES, remaining);
        this.store.commit('time/advance', step);
        this.bus.emit('time:tick', { minutes: step, hours: step / MINUTES_PER_HOUR, activity });
        remaining -= step;
        elapsed += step;
      }
    });
    return elapsed;
  }

  log(key, params = {}, tone = 'plain') {
    this.store.commit('log/push', { key, params, tone });
  }

  #reject(type, reason, params = {}) {
    const rejection = { ok: false, reason, params };
    this.bus.emit('action:rejected', { type, ...rejection });
    return rejection;
  }
}



  // --- src/core/coreModule.js ---


const SAVE_VERSION = 1;
const LOG_LIMIT = 150;

function createBaseState(seed) {
  return {
    meta: { version: SAVE_VERSION, seed, startedAt: Date.now(), logSeq: 0 },
    time: { minutes: START_MINUTES },
    log: [],
  };
}

/** Engine-level mutations and effects that do not belong to any gameplay module. */
const coreModule = {
  id: 'core',

  install({ store, effects, engine, rng }) {
    store.registerMutations('time', {
      advance(state, minutes) {
        state.time.minutes += minutes;
      },
    });

    store.registerMutations('log', {
      push(state, { key, params, tone }) {
        state.meta.logSeq += 1;
        state.log.push({ id: state.meta.logSeq, at: state.time.minutes, key, params, tone });
        if (state.log.length > LOG_LIMIT) state.log.splice(0, state.log.length - LOG_LIMIT);
      },
    });

    effects.register('time', (effect) => {
      const minutes = Array.isArray(effect.minutes)
        ? rng.int(effect.minutes[0], effect.minutes[1])
        : effect.minutes;
      engine.log('log.effect.time_lost', { minutes }, 'plain');
      engine.advanceTime(minutes, effect.activity ?? 'idle');
    });

    effects.register('log', (effect) => {
      engine.log(effect.key, effect.params, effect.tone);
    });
  },
};



  // --- src/core/saveManager.js ---


const SAVE_KEY = 'lastbreath.save';
const AUTOSAVE_DELAY_MS = 600;

/**
 * Ordered upgrade steps. MIGRATIONS[n] upgrades a version-n payload to n + 1.
 * Add an entry here whenever the persisted shape changes incompatibly.
 */
const MIGRATIONS = {};

function migrate(payload) {
  let current = payload;
  while (current.version < SAVE_VERSION) {
    const step = MIGRATIONS[current.version];
    if (!step) throw new Error(`No migration from save version ${current.version}`);
    current = { ...step(current), version: current.version + 1 };
  }
  return current;
}

class SaveManager {
  #store;
  #rng;
  #storage;
  #timer = null;

  constructor({ store, rng, storage = globalThis.localStorage }) {
    this.#store = store;
    this.#rng = rng;
    this.#storage = storage;
  }

  save() {
    const payload = {
      version: SAVE_VERSION,
      savedAt: Date.now(),
      rng: this.#rng.state,
      state: this.#store.state,
    };
    try {
      this.#storage.setItem(SAVE_KEY, JSON.stringify(payload));
      return true;
    } catch (error) {
      console.error('[save] write failed', error);
      return false;
    }
  }

  load() {
    const raw = this.#storage.getItem(SAVE_KEY);
    if (!raw) return null;
    try {
      const payload = migrate(JSON.parse(raw));
      return { state: payload.state, rng: payload.rng, savedAt: payload.savedAt };
    } catch (error) {
      console.error('[save] unreadable save discarded', error);
      return null;
    }
  }

  clear() {
    clearTimeout(this.#timer);
    this.#storage.removeItem(SAVE_KEY);
  }

  watch(bus) {
    return bus.on('state:changed', () => {
      clearTimeout(this.#timer);
      this.#timer = setTimeout(() => this.save(), AUTOSAVE_DELAY_MS);
    });
  }
}



  // --- src/i18n/i18n.js ---
/**
 * Lightweight i18n runtime.
 *
 * - Dictionaries are nested JSON; keys are dot paths (`combat.enemy_appeared`).
 * - `{name}` placeholders are interpolated. A param may itself be a deferred
 *   reference created with `ref(key, params)`, so stored log entries stay
 *   language-neutral and re-render correctly after a locale swap.
 * - Plural entries are objects keyed by Intl.PluralRules categories
 *   (`one`, `few`, `other`, ...) and are selected by `params.count`.
 * - Missing keys fall back to the default locale, then to a visible marker.
 */
const DEFAULT_LOCALE = 'en';
const LOCALE_BASE_URL = './locales';

class I18n {
  #dictionaries = new Map();
  #locale = DEFAULT_LOCALE;
  #listeners = new Set();
  #pluralRules = new Map();
  #numberFormats = new Map();
  #reportedMissing = new Set();

  get locale() {
    return this.#locale;
  }

  register(locale, dictionary) {
    this.#dictionaries.set(locale, dictionary);
  }

  async load(locale) {
    if (this.#dictionaries.has(locale)) return;
    const response = await fetch(`${LOCALE_BASE_URL}/${locale}.json`);
    if (!response.ok) throw new Error(`Locale "${locale}" failed to load (${response.status})`);
    this.register(locale, await response.json());
  }

  async setLocale(locale) {
    await this.load(DEFAULT_LOCALE);
    await this.load(locale);
    this.#locale = locale;
    if (globalThis.document?.documentElement) {
      globalThis.document.documentElement.lang = locale;
    }
    for (const listener of this.#listeners) listener(locale);
  }

  onChange(listener) {
    this.#listeners.add(listener);
    return () => this.#listeners.delete(listener);
  }

  has(key) {
    return this.#lookup(this.#locale, key) != null || this.#lookup(DEFAULT_LOCALE, key) != null;
  }

  t(key, params = {}) {
    const entry = this.#lookup(this.#locale, key) ?? this.#lookup(DEFAULT_LOCALE, key);
    if (entry == null) return this.#missing(key);

    const template = typeof entry === 'object' ? this.#selectPlural(entry, params.count) : entry;
    if (typeof template !== 'string') return this.#missing(key);
    return template.replace(/\{(\w+)\}/g, (match, name) =>
      name in params ? this.#formatParam(params[name]) : match,
    );
  }

  formatNumber(value, maximumFractionDigits = 1) {
    const cacheKey = `${this.#locale}:${maximumFractionDigits}`;
    if (!this.#numberFormats.has(cacheKey)) {
      this.#numberFormats.set(cacheKey, new Intl.NumberFormat(this.#locale, { maximumFractionDigits }));
    }
    return this.#numberFormats.get(cacheKey).format(value);
  }

  /** Applies `data-i18n="key"` and `data-i18n-attr="attr:key;attr:key"` within a subtree. */
  translateTree(root) {
    for (const node of root.querySelectorAll('[data-i18n]')) {
      node.textContent = this.t(node.dataset.i18n);
    }
    for (const node of root.querySelectorAll('[data-i18n-attr]')) {
      for (const pair of node.dataset.i18nAttr.split(';')) {
        const [attribute, key] = pair.split(':').map((part) => part.trim());
        if (attribute && key) node.setAttribute(attribute, this.t(key));
      }
    }
  }

  #lookup(locale, key) {
    let node = this.#dictionaries.get(locale);
    for (const segment of key.split('.')) {
      if (node == null || typeof node !== 'object') return null;
      node = node[segment];
    }
    return node ?? null;
  }

  #selectPlural(entry, count = 0) {
    if (!this.#pluralRules.has(this.#locale)) {
      this.#pluralRules.set(this.#locale, new Intl.PluralRules(this.#locale));
    }
    const category = this.#pluralRules.get(this.#locale).select(count);
    return entry[category] ?? entry.other;
  }

  #formatParam(value) {
    if (value && typeof value === 'object' && 'key' in value) return this.t(value.key, value.params);
    if (typeof value === 'number') return this.formatNumber(value);
    return String(value);
  }

  #missing(key) {
    if (!this.#reportedMissing.has(key)) {
      this.#reportedMissing.add(key);
      console.warn(`[i18n] missing key "${key}" (${this.#locale})`);
    }
    return `⟦${key}⟧`;
  }
}

const i18n = new I18n();
const t = (key, params) => i18n.t(key, params);

/** Deferred translation, safe to persist in state. */
const ref = (key, params) => (params ? { key, params } : { key });



  // --- src/i18n/locales.js ---
/**
 * Locales offered in the settings and main menu.
 */
const LOCALES = [
  { code: 'en', label: 'English' },
  { code: 'tr', label: 'Türkçe' },
];

const LOCALE_STORAGE_KEY = 'lastbreath.locale';

function readPreferredLocale(storage = globalThis.localStorage) {
  const stored = storage?.getItem(LOCALE_STORAGE_KEY);
  if (stored && LOCALES.some(({ code }) => code === stored)) return stored;
  const browser = globalThis.navigator?.language?.slice(0, 2);
  return LOCALES.find(({ code }) => code === browser)?.code ?? LOCALES[0].code;
}

function storePreferredLocale(code, storage = globalThis.localStorage) {
  storage?.setItem(LOCALE_STORAGE_KEY, code);
}


  // --- src/data/skills.js ---
/**
 * Skill definitions. Level n is reached at `xpPerLevelSquared * n²` XP.
 * `bonusPerLevel` is the generic efficiency multiplier step consumed by other
 * modules through `skillMultiplier()`.
 */
const SKILL_RULES = Object.freeze({ maxLevel: 10, xpPerLevelSquared: 20 });

const SKILLS = {
  foraging:     { glyph: '♣', bonusPerLevel: 0.05 },
  medical:      { glyph: '✚', bonusPerLevel: 0.08 },
  engineering:  { glyph: '⚙', bonusPerLevel: 0.06 },
  marksmanship: { glyph: '⊹', bonusPerLevel: 0.5 },
};



  // --- src/modules/skills/skillSelectors.js ---


const SKILL_IDS = Object.keys(SKILLS);

function levelForXp(xp) {
  return Math.min(SKILL_RULES.maxLevel, Math.floor(Math.sqrt(xp / SKILL_RULES.xpPerLevelSquared)));
}

function xpForLevel(level) {
  return SKILL_RULES.xpPerLevelSquared * level * level;
}

function skillLevel(state, skillId) {
  return levelForXp(state.skills[skillId]?.xp ?? 0);
}

/** 1.0 at level 0, growing by the skill's `bonusPerLevel` per level. */
function skillMultiplier(state, skillId) {
  return 1 + skillLevel(state, skillId) * SKILLS[skillId].bonusPerLevel;
}

function skillProgress(state, skillId) {
  const xp = state.skills[skillId]?.xp ?? 0;
  const level = levelForXp(xp);
  if (level >= SKILL_RULES.maxLevel) return { level, xp, ratio: 1, next: null };
  const floor = xpForLevel(level);
  const next = xpForLevel(level + 1);
  return { level, xp, next, ratio: (xp - floor) / (next - floor) };
}



  // --- src/modules/skills/index.js ---



const skillsModule = {
  id: 'skills',

  createState() {
    return Object.fromEntries(SKILL_IDS.map((skillId) => [skillId, { xp: 0 }]));
  },

  install({ store, effects, engine }) {
    store.registerMutations('skills', {
      addXp(state, { skill, amount }) {
        state.skills[skill].xp += amount;
      },
    });

    effects.register('xp', ({ skill, amount }) => {
      const before = levelForXp(store.state.skills[skill].xp);
      store.commit('skills/addXp', { skill, amount });
      const after = levelForXp(store.state.skills[skill].xp);
      if (after > before) {
        engine.log('log.skill.level_up', { skill: ref(`skill.${skill}.name`), level: after }, 'good');
      }
    });
  },
};



  // --- src/data/balance.js ---
/**
 * Tunable numbers in one place. Rates are per in-game hour unless noted.
 */
const BALANCE = Object.freeze({
  vitals: {
    max: 100,
    start: { health: 100, satiety: 70, hydration: 65, energy: 85 },
    bands: { fine: 60, low: 30, critical: 1 },
  },

  /** Per-hour vital drift by what the player is doing. */
  activities: {
    idle:     { satiety: -2.5, hydration: -3.5, energy: -2 },
    travel:   { satiety: -3.5, hydration: -5,   energy: -4.5 },
    scavenge: { satiety: -3,   hydration: -4.5, energy: -4 },
    rest:     { satiety: -1.5, hydration: -2.5, energy: 9 },
  },

  deprivationDamage: { satiety: 3.5, hydration: 6, energy: 1.5 },

  regeneration: {
    requires: { satiety: 50, hydration: 50 },
    idle: 0.6,
    rest: 2.5,
  },

  inventory: {
    baseCapacityKg: 16,
    baseSlots: 10,
    hardLimitRatio: 1.5,
    overloadTravelPenalty: 1.3,
    overloadEnergyDrain: 1.35,
    armorDamageReduction: 0.08,
  },

  travel: {
    baseHours: 1.5,
    kmPerHour: 80,
    seaTimeMultiplier: 1.25,
    segmentMinutes: 8 * 60,
    roundToMinutes: 15,
    exhaustedThreshold: 20,
    exhaustedTimeMultiplier: 1.35,
    nightRiskMultiplier: 1.35,
    seaRiskBonus: 0.1,
    maxEncounterChance: 0.85,
  },

  scavenge: {
    minutes: [60, 90],
    findChance: 0.72,
    depletionPerSearch: 0.2,
    depletionRecoveryPerHour: 0.002,
    nightPenalty: 0.2,
    hazardChancePerDanger: 0.05,
  },

  survey: { minutes: 45, twoHopRumorChance: 0.35 },

  rest: { options: [1, 4, 8], ambushChancePerDanger: 0.018 },

  checks: { minChance: 0.05, maxChance: 0.95, combatPerRating: 0.06 },

  startingNode: 'istanbul',
  startingKit: [
    { itemId: 'bottled_water', qty: 2 },
    { itemId: 'canned_beans', qty: 1 },
    { itemId: 'bandage', qty: 1 },
    { itemId: 'cloth_rags', qty: 2 },
  ],
  startingEquipment: { weapon: 'kitchen_knife', body: null, pack: null },
});



  // --- src/data/items.js ---
/**
 * Item registry. Display text lives in the locale under `item.<id>.name` and
 * `item.<id>.desc`.
 *
 *   category  supplies | medical | weapons | scrap | gear
 *   stack     max quantity per inventory slot
 *   use       { minutes, effects[] } — consumed on use
 *   equip     { slot, power?, armor?, capacityKg?, slots?, flags?, ammo? }
 *   passive   bonuses granted while carried (not stacked per unit)
 */
const CATEGORIES = ['supplies', 'medical', 'weapons', 'scrap', 'gear'];
const EQUIPMENT_SLOTS = ['weapon', 'body', 'pack'];

const ITEMS = {
  canned_beans: {
    category: 'supplies', weight: 0.45, stack: 6, tags: ['food'], glyph: '▤',
    use: { minutes: 10, effects: [{ type: 'vital', vital: 'satiety', amount: 28 }] },
  },
  jerky: {
    category: 'supplies', weight: 0.15, stack: 10, tags: ['food'], glyph: '≋',
    use: { minutes: 5, effects: [
      { type: 'vital', vital: 'satiety', amount: 16 },
      { type: 'vital', vital: 'hydration', amount: -4 },
    ] },
  },
  mre: {
    category: 'supplies', weight: 0.7, stack: 3, tags: ['food'], glyph: '▣',
    use: { minutes: 15, effects: [
      { type: 'vital', vital: 'satiety', amount: 45 },
      { type: 'vital', vital: 'hydration', amount: 6 },
    ] },
  },
  energy_bar: {
    category: 'supplies', weight: 0.08, stack: 10, tags: ['food'], glyph: '▬',
    use: { minutes: 2, effects: [
      { type: 'vital', vital: 'satiety', amount: 10 },
      { type: 'vital', vital: 'energy', amount: 6 },
    ] },
  },
  bottled_water: {
    category: 'supplies', weight: 0.55, stack: 6, tags: ['drink'], glyph: '◊',
    use: { minutes: 2, effects: [{ type: 'vital', vital: 'hydration', amount: 32 }] },
  },
  dirty_water: {
    category: 'supplies', weight: 0.55, stack: 6, tags: ['drink'], glyph: '◇',
    use: { minutes: 2, effects: [
      { type: 'vital', vital: 'hydration', amount: 24 },
      { type: 'ailment', id: 'infection', chance: 0.25 },
    ] },
  },
  instant_coffee: {
    category: 'supplies', weight: 0.05, stack: 10, tags: ['drink'], glyph: '◘',
    use: { minutes: 5, effects: [
      { type: 'vital', vital: 'energy', amount: 14 },
      { type: 'vital', vital: 'hydration', amount: -3 },
    ] },
  },

  bandage: {
    category: 'medical', weight: 0.04, stack: 10, glyph: '+',
    use: { minutes: 5, effects: [
      { type: 'cure', id: 'bleeding' },
      { type: 'xp', skill: 'medical', amount: 4 },
    ] },
  },
  antiseptic: {
    category: 'medical', weight: 0.25, stack: 4, glyph: '¤',
    use: { minutes: 5, effects: [
      { type: 'cure', id: 'infection', amount: 35 },
      { type: 'xp', skill: 'medical', amount: 6 },
    ] },
  },
  antibiotics: {
    category: 'medical', weight: 0.03, stack: 10, glyph: '∘',
    use: { minutes: 2, effects: [
      { type: 'cure', id: 'infection' },
      { type: 'xp', skill: 'medical', amount: 8 },
    ] },
  },
  painkillers: {
    category: 'medical', weight: 0.03, stack: 12, glyph: '·',
    use: { minutes: 2, effects: [
      { type: 'vital', vital: 'energy', amount: 8 },
      { type: 'cure', id: 'sprain', amount: 12 },
      { type: 'xp', skill: 'medical', amount: 3 },
    ] },
  },
  first_aid_kit: {
    category: 'medical', weight: 0.9, stack: 2, glyph: '⊞',
    use: { minutes: 20, effects: [
      { type: 'heal', amount: 30 },
      { type: 'cure', id: 'bleeding' },
      { type: 'xp', skill: 'medical', amount: 10 },
    ] },
  },

  kitchen_knife: { category: 'weapons', weight: 0.3, stack: 1, glyph: '/', equip: { slot: 'weapon', power: 2 } },
  crowbar: {
    category: 'weapons', weight: 1.9, stack: 1, glyph: '⌐',
    equip: { slot: 'weapon', power: 3 }, passive: { scavengeBonus: 0.12 },
  },
  machete: { category: 'weapons', weight: 0.9, stack: 1, glyph: '⟋', equip: { slot: 'weapon', power: 4 } },
  fire_axe: {
    category: 'weapons', weight: 2.6, stack: 1, glyph: '¶',
    equip: { slot: 'weapon', power: 5 }, passive: { scavengeBonus: 0.08 },
  },
  hunting_rifle: {
    category: 'weapons', weight: 4.1, stack: 1, glyph: '╾',
    equip: { slot: 'weapon', power: 7, ammo: 'rifle_rounds', unloadedPower: 1 },
  },
  rifle_rounds: { category: 'weapons', weight: 0.02, stack: 30, glyph: '⁝' },

  scrap_metal: { category: 'scrap', weight: 1.0, stack: 10, glyph: '#' },
  copper_wire: { category: 'scrap', weight: 0.2, stack: 15, glyph: '~' },
  electronics: { category: 'scrap', weight: 0.3, stack: 10, glyph: '≡' },
  cloth_rags: { category: 'scrap', weight: 0.1, stack: 20, glyph: '%' },
  duct_tape: { category: 'scrap', weight: 0.15, stack: 5, glyph: 'o' },

  duffel_bag: { category: 'gear', weight: 1.0, stack: 1, glyph: 'U', equip: { slot: 'pack', capacityKg: 6, slots: 3 } },
  hiking_pack: { category: 'gear', weight: 1.4, stack: 1, glyph: 'Ů', equip: { slot: 'pack', capacityKg: 12, slots: 5 } },
  military_rucksack: { category: 'gear', weight: 2.2, stack: 1, glyph: 'Ŵ', equip: { slot: 'pack', capacityKg: 18, slots: 8 } },
  leather_jacket: { category: 'gear', weight: 1.6, stack: 1, glyph: 'Ʌ', equip: { slot: 'body', armor: 1 } },
  hazmat_poncho: { category: 'gear', weight: 0.8, stack: 1, glyph: 'Δ', equip: { slot: 'body', armor: 0, flags: ['acidProof'] } },
  riot_vest: { category: 'gear', weight: 3.4, stack: 1, glyph: 'Ш', equip: { slot: 'body', armor: 3 } },
  flashlight: { category: 'gear', weight: 0.3, stack: 1, glyph: '¡', passive: { scavengeBonus: 0.04, nightVision: 1 } },
  compass: { category: 'gear', weight: 0.1, stack: 1, glyph: '⊕', passive: { travelSpeed: 0.08 } },
};

function getItem(itemId) {
  const item = ITEMS[itemId];
  if (!item) throw new Error(`Unknown item "${itemId}"`);
  return item;
}



  // --- src/modules/inventory/inventoryModel.js ---



/**
 * Pure inventory model. Every operation takes an inventory value and returns a
 * new one, so actions can dry-run a change before committing it.
 *
 * Inventory shape:
 *   stacks     [{ itemId, qty }]   — each stack occupies one slot
 *   equipment  { weapon, body, pack } — worn items: no slot, but full weight
 *   ground     { [nodeId]: [{ itemId, qty }] } — items left behind per location
 */
const EPSILON = 1e-6;
const { baseCapacityKg, baseSlots, hardLimitRatio } = BALANCE.inventory;

const cloneInventory = (inventory) => structuredClone(inventory);

function capacity(inventory) {
  const pack = inventory.equipment.pack ? getItem(inventory.equipment.pack).equip : null;
  return {
    kg: baseCapacityKg + (pack?.capacityKg ?? 0),
    slots: baseSlots + (pack?.slots ?? 0),
  };
}

function carriedWeight(inventory) {
  const packed = inventory.stacks.reduce((sum, { itemId, qty }) => sum + getItem(itemId).weight * qty, 0);
  const worn = Object.values(inventory.equipment)
    .filter(Boolean)
    .reduce((sum, itemId) => sum + getItem(itemId).weight, 0);
  return packed + worn;
}

const weightLimit = (inventory) => capacity(inventory).kg * hardLimitRatio;
const usedSlots = (inventory) => inventory.stacks.length;

function countItem(inventory, itemId) {
  return inventory.stacks.reduce((sum, stack) => (stack.itemId === itemId ? sum + stack.qty : sum), 0);
}

function addItem(inventory, itemId, qty) {
  const item = getItem(itemId);
  const next = cloneInventory(inventory);
  const roomByWeight = item.weight > 0
    ? Math.floor((weightLimit(next) - carriedWeight(next) + EPSILON) / item.weight)
    : Infinity;
  let remaining = Math.max(0, Math.min(qty, roomByWeight));
  const weightBound = remaining < qty;

  for (const stack of next.stacks) {
    if (remaining === 0) break;
    if (stack.itemId !== itemId || stack.qty >= item.stack) continue;
    const moved = Math.min(item.stack - stack.qty, remaining);
    stack.qty += moved;
    remaining -= moved;
  }

  const slotLimit = capacity(next).slots;
  while (remaining > 0 && next.stacks.length < slotLimit) {
    const moved = Math.min(item.stack, remaining);
    next.stacks.push({ itemId, qty: moved });
    remaining -= moved;
  }

  const accepted = Math.min(qty, roomByWeight) - remaining;
  const rejected = qty - accepted;
  const reason = rejected === 0 ? null : weightBound && remaining === 0 ? 'weight' : 'slots';
  return { inventory: next, accepted, rejected, reason };
}

function removeItem(inventory, itemId, qty) {
  const next = cloneInventory(inventory);
  let remaining = qty;
  for (let index = next.stacks.length - 1; index >= 0 && remaining > 0; index -= 1) {
    const stack = next.stacks[index];
    if (stack.itemId !== itemId) continue;
    const taken = Math.min(stack.qty, remaining);
    stack.qty -= taken;
    remaining -= taken;
    if (stack.qty === 0) next.stacks.splice(index, 1);
  }
  return { inventory: next, removed: qty - remaining };
}

function equipItem(inventory, itemId) {
  const item = getItem(itemId);
  if (!item.equip) return { error: 'reject.not_equippable' };
  if (countItem(inventory, itemId) < 1) return { error: 'reject.missing_item' };

  let next = removeItem(inventory, itemId, 1).inventory;
  const { slot } = item.equip;
  const previous = next.equipment[slot];
  next.equipment[slot] = itemId;

  if (previous) {
    const swap = addItem(next, previous, 1);
    if (swap.accepted === 0) return { error: 'reject.no_room_to_swap' };
    next = swap.inventory;
  }
  if (usedSlots(next) > capacity(next).slots) return { error: 'reject.pack_too_small' };
  return { inventory: next, previous };
}

function unequipSlot(inventory, slot) {
  const itemId = inventory.equipment[slot];
  if (!itemId) return { error: 'reject.slot_empty' };

  const next = cloneInventory(inventory);
  next.equipment[slot] = null;
  if (usedSlots(next) >= capacity(next).slots) return { error: 'reject.pack_too_small' };

  const result = addItem(next, itemId, 1);
  if (result.accepted === 0) return { error: 'reject.no_room' };
  return { inventory: result.inventory, itemId };
}

function groundAt(inventory, nodeId) {
  return inventory.ground[nodeId] ?? [];
}

function addToGround(inventory, nodeId, itemId, qty) {
  const next = cloneInventory(inventory);
  const pile = (next.ground[nodeId] ??= []);
  const existing = pile.find((stack) => stack.itemId === itemId);
  if (existing) existing.qty += qty;
  else pile.push({ itemId, qty });
  return next;
}

function removeFromGround(inventory, nodeId, itemId, qty) {
  const next = cloneInventory(inventory);
  const pile = next.ground[nodeId] ?? [];
  const existing = pile.find((stack) => stack.itemId === itemId);
  const removed = Math.min(existing?.qty ?? 0, qty);
  if (existing) existing.qty -= removed;
  next.ground[nodeId] = pile.filter((stack) => stack.qty > 0);
  if (next.ground[nodeId].length === 0) delete next.ground[nodeId];
  return { inventory: next, removed };
}

/** Passive bonuses count once per distinct carried item type. */
function passiveTotal(inventory, key) {
  const carried = new Set([
    ...inventory.stacks.map(({ itemId }) => itemId),
    ...Object.values(inventory.equipment).filter(Boolean),
  ]);
  let total = 0;
  for (const itemId of carried) total += getItem(itemId).passive?.[key] ?? 0;
  return total;
}

function hasEquippedFlag(inventory, flag) {
  return Object.values(inventory.equipment)
    .filter(Boolean)
    .some((itemId) => getItem(itemId).equip?.flags?.includes(flag));
}

function itemMatches(itemId, { itemId: wantedId, tags, category } = {}) {
  const item = getItem(itemId);
  if (wantedId && itemId !== wantedId) return false;
  if (category && item.category !== category) return false;
  if (tags && !tags.some((tag) => item.tags?.includes(tag))) return false;
  return true;
}

function matchingStacks(inventory, matcher) {
  return inventory.stacks.filter(({ itemId }) => itemMatches(itemId, matcher));
}



  // --- src/data/lootTables.js ---
/**
 * Loot tables: `[itemId, weight, qty]` where qty is a number or `[min, max]`.
 * Biome tables feed scavenging; the rest are referenced by encounter effects.
 */
const entry = (itemId, weight, qty = 1) => ({ itemId, weight, qty });

const LOOT_TABLES = {
  urban: [
    entry('canned_beans', 6), entry('bottled_water', 6), entry('energy_bar', 4, [1, 2]),
    entry('instant_coffee', 2), entry('bandage', 4), entry('painkillers', 3, [1, 3]),
    entry('electronics', 4), entry('copper_wire', 3, [1, 3]), entry('duct_tape', 2),
    entry('cloth_rags', 4, [1, 3]), entry('duffel_bag', 1), entry('flashlight', 1),
    entry('kitchen_knife', 1), entry('dirty_water', 3),
  ],
  suburban: [
    entry('canned_beans', 6), entry('bottled_water', 5), entry('jerky', 3, [1, 2]),
    entry('dirty_water', 4), entry('bandage', 4), entry('antiseptic', 2),
    entry('cloth_rags', 5, [1, 3]), entry('duct_tape', 3), entry('hiking_pack', 1),
    entry('leather_jacket', 1), entry('crowbar', 1), entry('flashlight', 1),
  ],
  industrial: [
    entry('scrap_metal', 8, [1, 3]), entry('copper_wire', 6, [1, 4]), entry('electronics', 4),
    entry('duct_tape', 4), entry('dirty_water', 4), entry('crowbar', 2), entry('fire_axe', 1),
    entry('hazmat_poncho', 1), entry('energy_bar', 2), entry('instant_coffee', 2),
  ],
  rural: [
    entry('jerky', 5, [1, 2]), entry('canned_beans', 4), entry('dirty_water', 6),
    entry('cloth_rags', 4, [1, 2]), entry('machete', 1), entry('hunting_rifle', 1),
    entry('rifle_rounds', 2, [3, 8]), entry('bandage', 2), entry('compass', 1),
  ],
  coastal: [
    entry('dirty_water', 6), entry('bottled_water', 3), entry('jerky', 4, [1, 2]),
    entry('canned_beans', 3), entry('cloth_rags', 4, [1, 3]), entry('duct_tape', 2),
    entry('scrap_metal', 3), entry('compass', 1), entry('antiseptic', 1),
  ],
  forest: [
    entry('dirty_water', 7), entry('jerky', 3), entry('cloth_rags', 2),
    entry('machete', 1), entry('rifle_rounds', 2, [2, 6]), entry('bandage', 2),
    entry('compass', 1),
  ],
  wasteland: [
    entry('dirty_water', 5), entry('scrap_metal', 6, [1, 2]), entry('copper_wire', 3),
    entry('energy_bar', 2), entry('hazmat_poncho', 1), entry('painkillers', 1),
  ],
  arctic: [
    entry('mre', 2), entry('bottled_water', 3), entry('instant_coffee', 3),
    entry('leather_jacket', 1), entry('scrap_metal', 3), entry('rifle_rounds', 2, [2, 6]),
  ],
  military: [
    entry('mre', 6), entry('bottled_water', 4), entry('rifle_rounds', 5, [4, 12]),
    entry('first_aid_kit', 2), entry('antibiotics', 2), entry('riot_vest', 1),
    entry('military_rucksack', 1), entry('hunting_rifle', 1), entry('electronics', 3),
  ],

  roadside: [
    entry('bottled_water', 4), entry('energy_bar', 4, [1, 2]), entry('duct_tape', 3),
    entry('scrap_metal', 3), entry('copper_wire', 3, [1, 2]), entry('flashlight', 1),
    entry('painkillers', 2, [1, 2]),
  ],
  cache: [
    entry('mre', 3), entry('bottled_water', 4, [1, 2]), entry('antibiotics', 2),
    entry('first_aid_kit', 1), entry('rifle_rounds', 2, [4, 10]), entry('hiking_pack', 1),
    entry('canned_beans', 3, [1, 2]),
  ],
  raider: [
    entry('rifle_rounds', 4, [3, 8]), entry('jerky', 3, [1, 3]), entry('machete', 1),
    entry('painkillers', 2, [1, 2]), entry('bottled_water', 3), entry('leather_jacket', 1),
  ],
  survivor_gift: [
    entry('antibiotics', 2), entry('bandage', 4, [1, 2]), entry('antiseptic', 2),
    entry('compass', 1),
  ],
};



  // --- src/modules/inventory/loot.js ---



/** Rolls a loot table `rolls` times and merges duplicate items. */
function rollLoot(rng, tableId, rolls = 1) {
  const table = LOOT_TABLES[tableId];
  if (!table) throw new Error(`Unknown loot table "${tableId}"`);

  const found = new Map();
  for (let roll = 0; roll < rolls; roll += 1) {
    const entry = rng.weighted(table);
    const qty = rollRange(rng, entry.qty);
    found.set(entry.itemId, (found.get(entry.itemId) ?? 0) + qty);
  }
  return [...found].map(([itemId, qty]) => ({ itemId, qty }));
}



  // --- src/modules/inventory/index.js ---







const EQUIP_MINUTES = 5;
const itemName = (itemId) => ref(`item.${itemId}.name`);

function createStartingInventory() {
  let inventory = { stacks: [], equipment: { ...BALANCE.startingEquipment }, ground: {} };
  for (const { itemId, qty } of BALANCE.startingKit) inventory = addItem(inventory, itemId, qty).inventory;
  return inventory;
}

/** Treatment items are refused when they would do nothing, instead of silently wasting them. */
function wouldBeWasted(item, player) {
  const effects = item.use.effects;
  const cures = effects.filter((effect) => effect.type === 'cure');
  const onlyTreats = effects.every((effect) => effect.type === 'cure' || effect.type === 'xp');
  return onlyTreats && cures.length > 0 && cures.every((effect) => !player.ailments[effect.id]);
}

/** Puts items in the pack; whatever does not fit is dropped where the player stands. */
function grantItems({ store, engine }, itemId, qty) {
  const accepted = store.commit('inventory/add', { itemId, qty });
  if (accepted > 0) engine.log('log.inventory.gained', { item: itemName(itemId), count: accepted }, 'good');
  const overflow = qty - accepted;
  if (overflow > 0) {
    store.commit('inventory/toGround', { nodeId: store.state.world.currentNodeId, itemId, qty: overflow });
    engine.log('log.inventory.left_behind', { item: itemName(itemId), count: overflow }, 'warn');
  }
}

function registerInventoryMutations(store) {
  store.registerMutations('inventory', {
    add(state, { itemId, qty }) {
      const result = addItem(state.inventory, itemId, qty);
      state.inventory = result.inventory;
      return result.accepted;
    },
    remove(state, { itemId, qty }) {
      const result = removeItem(state.inventory, itemId, qty);
      state.inventory = result.inventory;
      return result.removed;
    },
    equip(state, { itemId }) {
      state.inventory = equipItem(state.inventory, itemId).inventory;
    },
    unequip(state, { slot }) {
      state.inventory = unequipSlot(state.inventory, slot).inventory;
    },
    toGround(state, { nodeId, itemId, qty }) {
      state.inventory = addToGround(state.inventory, nodeId, itemId, qty);
    },
    fromGround(state, { nodeId, itemId, qty }) {
      const result = removeFromGround(state.inventory, nodeId, itemId, qty);
      state.inventory = result.inventory;
      return result.removed;
    },
  });
}

function registerInventoryActions(engine) {
  engine.registerAction('inventory/use', ({ itemId }, ctx) => {
    const { store, effects } = ctx;
    const item = getItem(itemId);
    if (!item.use) return { ok: false, reason: 'reject.not_usable' };
    if (countItem(store.state.inventory, itemId) < 1) return { ok: false, reason: 'reject.missing_item' };
    if (wouldBeWasted(item, store.state.player)) return { ok: false, reason: 'reject.nothing_to_treat' };

    store.commit('inventory/remove', { itemId, qty: 1 });
    engine.log('log.inventory.used', { item: itemName(itemId) });
    effects.apply(item.use.effects, ctx, { kind: 'item', itemId });
    engine.advanceTime(item.use.minutes);
    return { ok: true };
  }, { allowDuringEncounter: true });

  engine.registerAction('inventory/drop', ({ itemId, qty = 1 }, { store }) => {
    const removed = store.commit('inventory/remove', { itemId, qty });
    if (removed === 0) return { ok: false, reason: 'reject.missing_item' };
    store.commit('inventory/toGround', { nodeId: store.state.world.currentNodeId, itemId, qty: removed });
    engine.log('log.inventory.dropped', { item: itemName(itemId), count: removed });
    return { ok: true };
  });

  engine.registerAction('inventory/pickup', ({ itemId, qty = 1 }, { store }) => {
    const nodeId = store.state.world.currentNodeId;
    const planned = addItem(store.state.inventory, itemId, qty);
    if (planned.accepted === 0) {
      return { ok: false, reason: planned.reason === 'weight' ? 'reject.too_heavy' : 'reject.no_room' };
    }
    const lifted = store.commit('inventory/fromGround', { nodeId, itemId, qty: planned.accepted });
    store.commit('inventory/add', { itemId, qty: lifted });
    engine.log('log.inventory.picked_up', { item: itemName(itemId), count: lifted });
    return { ok: true };
  });

  engine.registerAction('inventory/equip', ({ itemId }, { store }) => {
    const result = equipItem(store.state.inventory, itemId);
    if (result.error) return { ok: false, reason: result.error };
    store.commit('inventory/equip', { itemId });
    engine.log('log.inventory.equipped', { item: itemName(itemId) });
    engine.advanceTime(EQUIP_MINUTES);
    return { ok: true };
  });

  engine.registerAction('inventory/unequip', ({ slot }, { store }) => {
    const result = unequipSlot(store.state.inventory, slot);
    if (result.error) return { ok: false, reason: result.error };
    store.commit('inventory/unequip', { slot });
    engine.log('log.inventory.unequipped', { item: itemName(result.itemId) });
    engine.advanceTime(EQUIP_MINUTES);
    return { ok: true };
  });
}

function registerInventoryEffects(effects, ctx) {
  const { store, rng, engine } = ctx;

  effects.register('loot', ({ table, rolls = 1 }) => {
    const found = rollLoot(rng, table, rollRange(rng, rolls));
    for (const { itemId, qty } of found) grantItems(ctx, itemId, qty);
  });

  effects.register('give', ({ itemId, qty = 1 }) => grantItems(ctx, itemId, qty));

  effects.register('take', ({ qty = 1, random, ...matcher }) => {
    for (let taken = 0; taken < qty; taken += 1) {
      const candidates = random
        ? store.state.inventory.stacks
        : matchingStacks(store.state.inventory, matcher);
      if (candidates.length === 0) {
        if (taken === 0) engine.log('log.inventory.nothing_to_lose', {}, 'plain');
        return;
      }
      const { itemId } = rng.pick(candidates);
      store.commit('inventory/remove', { itemId, qty: 1 });
      engine.log('log.inventory.lost', { item: itemName(itemId), count: 1 }, 'bad');
    }
  });
}

const inventoryModule = {
  id: 'inventory',
  createState: createStartingInventory,

  install(ctx) {
    registerInventoryMutations(ctx.store);
    registerInventoryActions(ctx.engine);
    registerInventoryEffects(ctx.effects, ctx);
  },
};


  // --- src/data/ailments.js ---
/**
 * Ailment rules. Runtime instances live in `player.ailments[id]` and carry a
 * single magnitude field: `severity` (bleeding), `progress` (infection) or
 * `hours` remaining (sprain).
 */
const AILMENTS = {
  bleeding: {
    glyph: '♦',
    tone: 'bad',
    initial: { severity: 1 },
    maxSeverity: 3,
    healthPerHourPerSeverity: 2.5,
    stopChancePerHour: 0.12,
    infectionChancePerHour: 0.04,
  },
  infection: {
    glyph: '☣',
    tone: 'bad',
    initial: { progress: 10 },
    growthPerHour: 1.2,
    recoveryPerHour: 1,
    recoveryBelow: 25,
    symptomaticAt: 35,
    severeAt: 80,
    healthPerHourSymptomatic: 1.5,
    healthPerHourSevere: 5,
    energyPerHourSymptomatic: 1.5,
  },
  sprain: {
    glyph: '⌇',
    tone: 'warn',
    initial: { hours: 30 },
    travelTimeMultiplier: 1.3,
  },
};



  // --- src/modules/inventory/inventorySelectors.js ---






const UNARMED_POWER = 1;

function loadSummary(state) {
  const { inventory, player } = state;
  const extraKg = player?.trait === 'hoarder' ? 2.5 : 0;
  const limits = capacity(inventory);
  const totalKg = limits.kg + extraKg;
  const weight = carriedWeight(inventory);
  return {
    weight,
    capacityKg: totalKg,
    hardLimitKg: totalKg * BALANCE.inventory.hardLimitRatio,
    slotsUsed: inventory.stacks.length,
    slotsTotal: limits.slots,
    overloaded: weight > totalKg,
  };
}

const isOverloaded = (state) => loadSummary(state).overloaded;

function weaponProfile(state) {
  const weaponId = state.inventory.equipment.weapon;
  if (!weaponId) return { itemId: null, power: UNARMED_POWER, ammoId: null, loaded: true };
  const { power, ammo, unloadedPower } = getItem(weaponId).equip;
  const loaded = !ammo || countItem(state.inventory, ammo) > 0;
  return { itemId: weaponId, power: loaded ? power : unloadedPower, ammoId: ammo ?? null, loaded };
}

function combatRating(state) {
  return weaponProfile(state).power + skillLevel(state, 'marksmanship') * SKILLS.marksmanship.bonusPerLevel;
}

function armorValue(state) {
  const bodyId = state.inventory.equipment.body;
  return bodyId ? getItem(bodyId).equip.armor ?? 0 : 0;
}

function incomingDamageMultiplier(state) {
  return Math.max(0.4, 1 - armorValue(state) * BALANCE.inventory.armorDamageReduction);
}

const passiveBonus = (state, key) => passiveTotal(state.inventory, key);
const hasGearFlag = (state, flag) => hasEquippedFlag(state.inventory, flag);
const groundHere = (state) => groundAt(state.inventory, state.world.currentNodeId);

function meetsRequirement(state, requires) {
  if (!requires) return true;
  return matchingStacks(state.inventory, requires).length > 0;
}



  // --- src/modules/status/statusSelectors.js ---



const VITALS = ['health', 'satiety', 'hydration', 'energy'];
const NEEDS = ['satiety', 'hydration', 'energy'];

function vitalBand(value) {
  const { fine, low, critical } = BALANCE.vitals.bands;
  if (value >= fine) return 'fine';
  if (value >= low) return 'low';
  if (value >= critical) return 'critical';
  return 'depleted';
}

function isSymptomatic(player) {
  const infection = player.ailments.infection;
  return Boolean(infection && infection.progress >= AILMENTS.infection.symptomaticAt);
}

function canRegenerate(player) {
  const { requires } = BALANCE.regeneration;
  return !player.ailments.bleeding
    && !isSymptomatic(player)
    && player.satiety >= requires.satiety
    && player.hydration >= requires.hydration;
}

/** Multiplier (>1 means slower) applied to journey duration by the body's condition. */
function statusTravelMultiplier(state) {
  const { player } = state;
  let multiplier = 1;
  if (player.energy < BALANCE.travel.exhaustedThreshold) multiplier *= BALANCE.travel.exhaustedTimeMultiplier;
  if (player.ailments.sprain) multiplier *= AILMENTS.sprain.travelTimeMultiplier;
  return multiplier;
}

/** Ailment magnitude normalised to 0..1 for meters. */
function ailmentIntensity(id, data) {
  switch (id) {
    case 'bleeding': return data.severity / AILMENTS.bleeding.maxSeverity;
    case 'infection': return data.progress / 100;
    case 'sprain': return Math.min(1, data.hours / AILMENTS.sprain.initial.hours);
    default: return 0;
  }
}



  // --- src/modules/status/index.js ---








const BAND_ORDER = ['fine', 'low', 'critical', 'depleted'];
const DEPRIVATION_CAUSE = { satiety: 'starvation', hydration: 'dehydration', energy: 'exhaustion' };
const clampVital = (value) => Math.max(0, Math.min(BALANCE.vitals.max, value));

function createPlayer() {
  return {
    name: 'Survivor',
    age: 28,
    bloodType: 'A+',
    trait: 'stoic',
    archetype: 'scavenger',
    ...BALANCE.vitals.start,
    ailments: {},
    alive: true,
    causeOfDeath: null,
    diedAt: null,
  };
}

/** Changes a vital and narrates the moment it slides into a worse band. */
function adjustVital({ store, engine }, vital, delta) {
  const before = store.state.player[vital];
  const applied = store.commit('player/changeVital', { vital, delta });
  const fromBand = vitalBand(before);
  const toBand = vitalBand(store.state.player[vital]);
  if (BAND_ORDER.indexOf(toBand) > BAND_ORDER.indexOf(fromBand)) {
    engine.log(`log.vital.${vital}.${toBand}`, {}, toBand === 'low' ? 'warn' : 'bad');
  }
  return applied;
}

function inflictDamage(ctx, amount, cause) {
  if (amount <= 0 || !ctx.store.state.player.alive) return 0;
  const dealt = -adjustVital(ctx, 'health', -amount);
  if (ctx.store.state.player.health <= 0) {
    ctx.store.commit('player/die', { cause });
    ctx.engine.log(`death.cause.${cause}`, {}, 'bad');
    ctx.bus.emit('player:died', { cause });
  }
  return dealt;
}

function tickBleeding(ctx, bleeding, hours, harm) {
  const { store, rng, engine } = ctx;
  const rules = AILMENTS.bleeding;
  harm.add('bleeding', bleeding.severity * rules.healthPerHourPerSeverity * hours);

  const stopChance = (rules.stopChancePerHour * skillMultiplier(store.state, 'medical') * hours) / bleeding.severity;
  if (rng.chance(stopChance)) {
    store.commit('player/clearAilment', 'bleeding');
    engine.log('log.ailment.bleeding.stopped', {}, 'good');
    return;
  }
  if (!store.state.player.ailments.infection && rng.chance(rules.infectionChancePerHour * hours)) {
    store.commit('player/setAilment', { id: 'infection', data: { ...AILMENTS.infection.initial } });
    engine.log('log.ailment.infection.gained', {}, 'bad');
  }
}

function tickInfection(ctx, infection, hours, harm) {
  const { store, engine } = ctx;
  const rules = AILMENTS.infection;
  const { player } = store.state;
  const fightingItOff = infection.progress < rules.recoveryBelow && player.satiety > 60 && player.hydration > 60;

  const progress = fightingItOff
    ? infection.progress - rules.recoveryPerHour * hours
    : Math.min(100, infection.progress + rules.growthPerHour * hours);

  if (progress <= 0) {
    store.commit('player/clearAilment', 'infection');
    engine.log('log.ailment.infection.cleared', {}, 'good');
    return;
  }
  store.commit('player/setAilment', { id: 'infection', data: { progress } });

  if (infection.progress < rules.symptomaticAt && progress >= rules.symptomaticAt) {
    engine.log('log.ailment.infection.symptomatic', {}, 'bad');
  }
  if (infection.progress < rules.severeAt && progress >= rules.severeAt) {
    engine.log('log.ailment.infection.severe', {}, 'bad');
  }
  if (progress >= rules.severeAt) harm.add('infection', rules.healthPerHourSevere * hours);
  else if (progress >= rules.symptomaticAt) harm.add('infection', rules.healthPerHourSymptomatic * hours);
  if (progress >= rules.symptomaticAt) adjustVital(ctx, 'energy', -rules.energyPerHourSymptomatic * hours);
}

function tickSprain(ctx, sprain, hours) {
  const remaining = sprain.hours - hours;
  if (remaining <= 0) {
    ctx.store.commit('player/clearAilment', 'sprain');
    ctx.engine.log('log.ailment.sprain.healed', {}, 'good');
    return;
  }
  ctx.store.commit('player/setAilment', { id: 'sprain', data: { hours: remaining } });
}

/** Accumulates damage per cause so a death can be attributed to the worst one. */
function createHarmLedger() {
  const byCause = new Map();
  return {
    add(cause, amount) {
      byCause.set(cause, (byCause.get(cause) ?? 0) + amount);
    },
    total: () => [...byCause.values()].reduce((sum, amount) => sum + amount, 0),
    worstCause: () => [...byCause].sort((a, b) => b[1] - a[1])[0]?.[0],
    isEmpty: () => byCause.size === 0,
  };
}

function tickStatus(ctx, { hours, activity }) {
  const { store } = ctx;
  if (!store.state.player.alive) return;

  const profile = BALANCE.activities[activity] ?? BALANCE.activities.idle;
  const overloadDrain = activity === 'travel' && isOverloaded(store.state)
    ? BALANCE.inventory.overloadEnergyDrain
    : 1;

  for (const need of NEEDS) {
    let delta = profile[need] * hours;
    if (need === 'energy' && delta < 0) delta *= overloadDrain;
    adjustVital(ctx, need, delta);
  }

  const harm = createHarmLedger();
  for (const need of NEEDS) {
    if (store.state.player[need] <= 0) harm.add(DEPRIVATION_CAUSE[need], BALANCE.deprivationDamage[need] * hours);
  }

  const { ailments } = store.state.player;
  if (ailments.bleeding) tickBleeding(ctx, ailments.bleeding, hours, harm);
  if (ailments.infection) tickInfection(ctx, ailments.infection, hours, harm);
  if (ailments.sprain) tickSprain(ctx, ailments.sprain, hours);

  if (harm.isEmpty() && canRegenerate(store.state.player)) {
    let rate = activity === 'rest' ? BALANCE.regeneration.rest : BALANCE.regeneration.idle;
    if (store.state.player.trait === 'fast_metabolism') rate *= 1.25;
    adjustVital(ctx, 'health', rate * hours);
  }
  if (!harm.isEmpty()) inflictDamage(ctx, harm.total(), harm.worstCause());
}

function registerStatusEffects(ctx) {
  const { effects, store, rng, engine } = ctx;

  effects.register('vital', ({ vital, amount }) => {
    const applied = adjustVital(ctx, vital, amount);
    if (Math.round(applied) === 0) return;
    const key = applied > 0 ? 'log.effect.vital_up' : 'log.effect.vital_down';
    engine.log(key, { vital: ref(`status.vital.${vital}`), amount: Math.abs(Math.round(applied)) });
  });

  effects.register('heal', ({ amount }) => {
    const healed = adjustVital(ctx, 'health', rollRange(rng, amount) * skillMultiplier(store.state, 'medical'));
    engine.log('log.effect.healed', { amount: Math.round(healed) }, 'good');
  });

  effects.register('damage', ({ amount, cause = 'wounds' }) => {
    const raw = rollRange(rng, amount) * incomingDamageMultiplier(store.state);
    const dealt = inflictDamage(ctx, Math.max(1, Math.round(raw)), cause);
    if (store.state.player.alive) engine.log('log.effect.damaged', { amount: Math.round(dealt) }, 'bad');
  });

  effects.register('ailment', ({ id, severity = 1 }) => {
    const current = store.state.player.ailments[id];
    const rules = AILMENTS[id];
    let data;
    if (id === 'bleeding') {
      data = { severity: Math.min(rules.maxSeverity, (current?.severity ?? 0) + severity) };
    } else if (id === 'infection') {
      data = { progress: Math.min(100, (current?.progress ?? 0) + rules.initial.progress) };
    } else {
      data = { ...rules.initial };
    }
    store.commit('player/setAilment', { id, data });
    engine.log(current ? `log.ailment.${id}.worse` : `log.ailment.${id}.gained`, {}, 'bad');
  });

  effects.register('cure', ({ id, amount }) => {
    const current = store.state.player.ailments[id];
    if (!current) return;
    const field = Object.keys(AILMENTS[id].initial)[0];
    const remaining = amount == null ? 0 : current[field] - amount * skillMultiplier(store.state, 'medical');
    if (remaining <= 0) {
      store.commit('player/clearAilment', id);
      engine.log(`log.ailment.${id}.cured`, {}, 'good');
    } else {
      store.commit('player/setAilment', { id, data: { [field]: remaining } });
      engine.log(`log.ailment.${id}.treated`, {}, 'good');
    }
  });
}

const statusModule = {
  id: 'player',
  createState: createPlayer,

  install(ctx) {
    const { store, bus, engine } = ctx;

    store.registerMutations('player', {
      changeVital(state, { vital, delta }) {
        const before = state.player[vital];
        state.player[vital] = clampVital(before + delta);
        return state.player[vital] - before;
      },
      setAilment(state, { id, data }) {
        state.player.ailments[id] = data;
      },
      clearAilment(state, id) {
        delete state.player.ailments[id];
      },
      setProfile(state, { name, age, bloodType, trait, archetype }) {
        if (name !== undefined) state.player.name = name;
        if (age !== undefined) state.player.age = age;
        if (bloodType !== undefined) state.player.bloodType = bloodType;
        if (trait !== undefined) state.player.trait = trait;
        if (archetype !== undefined) state.player.archetype = archetype;
      },
      die(state, { cause }) {
        state.player.alive = false;
        state.player.health = 0;
        state.player.causeOfDeath = cause;
        state.player.diedAt = state.time.minutes;
      },
    });

    engine.addGuard((type, options, state) => (state.player.alive ? null : 'reject.dead'));
    bus.on('time:tick', (tick) => tickStatus(ctx, tick));
    registerStatusEffects(ctx);
  },
};



  // --- src/data/encounters.js ---
/**
 * Encounter definitions. Text lives under `encounter.<id>` in the locale:
 *   .title  .text  .choice.<choiceId>
 *   .outcome.<choiceId>            (no check)
 *   .outcome.<choiceId>_success / _failure
 *
 * contexts  where it can fire: travel | scavenge | rest
 * terrain   land (default) | sea | any
 * biomes    restricts to destination/current biomes; omit for all
 * requires  { tags?, itemId?, category? } — choice disabled when unmet
 * check     { kind: 'skill', skill, base, perLevel } | { kind: 'combat', base }
 *           | { kind: 'gear', flag, base }
 */
const SETTLED = ['urban', 'suburban', 'industrial'];
const WILD = ['rural', 'forest', 'wasteland', 'suburban', 'coastal'];
const FOOD_OR_DRINK = { tags: ['food', 'drink'] };

const ENCOUNTERS = {
  abandoned_car: {
    contexts: ['travel'], biomes: [...SETTLED, 'rural', 'wasteland'], weight: 4,
    choices: [
      { id: 'search', effects: [
        { type: 'time', minutes: 30 },
        { type: 'loot', table: 'roadside', rolls: [1, 2] },
        { type: 'xp', skill: 'foraging', amount: 4 },
      ] },
      { id: 'strip', check: { kind: 'skill', skill: 'engineering', base: 0.45, perLevel: 0.07 },
        success: [
          { type: 'give', itemId: 'copper_wire', qty: 2 },
          { type: 'give', itemId: 'electronics', qty: 1 },
          { type: 'xp', skill: 'engineering', amount: 8 },
        ],
        failure: [
          { type: 'damage', amount: [2, 5] },
          { type: 'ailment', id: 'bleeding', chance: 0.5 },
          { type: 'xp', skill: 'engineering', amount: 3 },
        ] },
      { id: 'leave', effects: [] },
    ],
  },

  feral_dogs: {
    contexts: ['travel', 'scavenge'], biomes: WILD, weight: 3,
    choices: [
      { id: 'stand', check: { kind: 'combat', base: 0.35 },
        success: [{ type: 'xp', skill: 'marksmanship', amount: 15 }],
        failure: [
          { type: 'damage', amount: [8, 15] },
          { type: 'ailment', id: 'bleeding', chance: 0.6 },
        ] },
      { id: 'feed', requires: { tags: ['food'] }, effects: [{ type: 'take', tags: ['food'], qty: 1 }] },
      { id: 'flee', check: { kind: 'skill', skill: 'foraging', base: 0.5, perLevel: 0.05 },
        success: [{ type: 'vital', vital: 'energy', amount: -8 }],
        failure: [
          { type: 'vital', vital: 'energy', amount: -10 },
          { type: 'damage', amount: [5, 10] },
          { type: 'ailment', id: 'bleeding', chance: 0.4 },
        ] },
    ],
  },

  raider_toll: {
    contexts: ['travel', 'scavenge'], biomes: [...SETTLED, 'military', 'wasteland'], weight: 3, minDanger: 2,
    choices: [
      { id: 'pay', requires: FOOD_OR_DRINK, effects: [{ type: 'take', tags: ['food', 'drink'], qty: 2 }] },
      { id: 'fight', check: { kind: 'combat', base: 0.25 },
        success: [
          { type: 'xp', skill: 'marksmanship', amount: 20 },
          { type: 'loot', table: 'raider', rolls: [1, 2] },
        ],
        failure: [
          { type: 'damage', amount: [14, 24] },
          { type: 'ailment', id: 'bleeding', severity: 2, chance: 0.7 },
        ] },
      { id: 'barter', check: { kind: 'skill', skill: 'engineering', base: 0.3, perLevel: 0.08 },
        success: [
          { type: 'xp', skill: 'engineering', amount: 10 },
          { type: 'give', itemId: 'energy_bar', qty: 2 },
        ],
        failure: [{ type: 'damage', amount: [6, 12] }] },
    ],
  },

  collapsed_overpass: {
    contexts: ['travel'], biomes: SETTLED, weight: 3,
    choices: [
      { id: 'climb', check: { kind: 'skill', skill: 'foraging', base: 0.55, perLevel: 0.05 },
        success: [{ type: 'xp', skill: 'foraging', amount: 6 }],
        failure: [
          { type: 'damage', amount: [4, 9] },
          { type: 'ailment', id: 'sprain', chance: 0.7 },
        ] },
      { id: 'detour', effects: [
        { type: 'time', minutes: [120, 180], activity: 'travel' },
      ] },
    ],
  },

  acid_rain: {
    contexts: ['travel', 'rest'], biomes: ['urban', 'suburban', 'industrial', 'rural', 'coastal', 'forest', 'wasteland', 'military'], weight: 2,
    choices: [
      { id: 'shelter', effects: [{ type: 'time', minutes: [90, 150] }] },
      { id: 'push_on', check: { kind: 'gear', flag: 'acidProof', base: 0.15 },
        success: [],
        failure: [
          { type: 'damage', amount: [5, 11], cause: 'acid' },
          { type: 'ailment', id: 'infection', chance: 0.15 },
        ] },
    ],
  },

  supply_cache: {
    contexts: ['travel', 'scavenge'], weight: 1,
    choices: [
      { id: 'open', check: { kind: 'skill', skill: 'foraging', base: 0.72, perLevel: 0.03 },
        success: [
          { type: 'time', minutes: 20 },
          { type: 'loot', table: 'cache', rolls: [1, 2] },
          { type: 'xp', skill: 'foraging', amount: 8 },
        ],
        failure: [
          { type: 'damage', amount: [3, 8] },
          { type: 'ailment', id: 'bleeding', chance: 0.6 },
        ] },
      { id: 'leave', effects: [] },
    ],
  },

  rusted_debris: {
    contexts: ['scavenge'], weight: 3,
    choices: [
      { id: 'careful', check: { kind: 'skill', skill: 'foraging', base: 0.65, perLevel: 0.04 },
        success: [{ type: 'xp', skill: 'foraging', amount: 5 }],
        failure: [
          { type: 'damage', amount: [3, 6] },
          { type: 'ailment', id: 'bleeding', chance: 0.6 },
          { type: 'ailment', id: 'infection', chance: 0.2 },
        ] },
      { id: 'force', effects: [
        { type: 'damage', amount: [2, 4] },
        { type: 'ailment', id: 'bleeding', chance: 0.35 },
        { type: 'give', itemId: 'scrap_metal', qty: 1 },
      ] },
    ],
  },

  storm_at_sea: {
    contexts: ['travel'], terrain: 'sea', weight: 4,
    choices: [
      { id: 'ride_out', check: { kind: 'skill', skill: 'engineering', base: 0.5, perLevel: 0.06 },
        success: [
          { type: 'xp', skill: 'engineering', amount: 10 },
          { type: 'vital', vital: 'energy', amount: -10 },
        ],
        failure: [
          { type: 'damage', amount: [5, 12], cause: 'drowning' },
          { type: 'take', random: true, qty: 1 },
          { type: 'vital', vital: 'energy', amount: -15 },
        ] },
      { id: 'turn_back', effects: [{ type: 'travel_abort' }] },
    ],
  },

  lone_survivor: {
    contexts: ['travel', 'rest'], terrain: 'any', weight: 2,
    choices: [
      { id: 'share', requires: FOOD_OR_DRINK, effects: [
        { type: 'take', tags: ['food', 'drink'], qty: 1 },
        { type: 'loot', table: 'survivor_gift', rolls: 1 },
        { type: 'xp', skill: 'medical', amount: 6 },
      ] },
      { id: 'ignore', effects: [] },
    ],
  },

  night_prowler: {
    contexts: ['rest'], weight: 3,
    choices: [
      { id: 'confront', check: { kind: 'combat', base: 0.4 },
        success: [{ type: 'xp', skill: 'marksmanship', amount: 12 }],
        failure: [
          { type: 'damage', amount: [8, 16] },
          { type: 'ailment', id: 'bleeding', chance: 0.5 },
        ] },
      { id: 'hide', check: { kind: 'skill', skill: 'foraging', base: 0.5, perLevel: 0.05 },
        success: [],
        failure: [{ type: 'take', random: true, qty: 1 }] },
    ],
  },

  radio_static: {
    contexts: ['travel', 'rest'], terrain: 'any', weight: 2,
    choices: [
      { id: 'listen', effects: [
        { type: 'time', minutes: 30 },
        { type: 'reveal', count: 2 },
      ] },
      { id: 'ignore', effects: [] },
    ],
  },
};



  // --- src/data/locations.js ---
/**
 * Real-world anchors. Coordinates are WGS84 and projected onto world.svg at
 * runtime; `country` must match the `name`/`class` attribute of the SVG path
 * so the map can chart the territory once the player sets foot there.
 *
 * danger: 1 (quiet) … 5 (lethal)
 */
const node = (id, lat, lon, biome, danger, country) => ({ id, lat, lon, biome, danger, country });

const LOCATIONS = [
  // Europe & Near East
  node('istanbul', 41.01, 28.98, 'urban', 2, 'Turkey'),
  node('ankara', 39.93, 32.86, 'suburban', 2, 'Turkey'),
  node('athens', 37.98, 23.73, 'coastal', 2, 'Greece'),
  node('sofia', 42.7, 23.32, 'suburban', 2, 'Bulgaria'),
  node('bucharest', 44.43, 26.1, 'urban', 3, 'Romania'),
  node('kyiv', 50.45, 30.52, 'military', 4, 'Ukraine'),
  node('vienna', 48.21, 16.37, 'urban', 3, 'Austria'),
  node('berlin', 52.52, 13.4, 'urban', 4, 'Germany'),
  node('paris', 48.86, 2.35, 'urban', 4, 'France'),
  node('london', 51.51, -0.13, 'urban', 4, 'United Kingdom'),
  node('madrid', 40.42, -3.7, 'suburban', 3, 'Spain'),
  node('lisbon', 38.72, -9.14, 'coastal', 2, 'Portugal'),
  node('reykjavik', 64.15, -21.94, 'arctic', 2, 'Iceland'),
  node('moscow', 55.76, 37.62, 'military', 5, 'Russian Federation'),
  node('tbilisi', 41.72, 44.79, 'rural', 2, 'Georgia'),
  node('tehran', 35.69, 51.39, 'wasteland', 3, 'Iran'),
  node('beirut', 33.89, 35.5, 'coastal', 3, 'Lebanon'),

  // Africa
  node('tangier', 35.76, -5.83, 'coastal', 2, 'Morocco'),
  node('cairo', 30.04, 31.24, 'wasteland', 3, 'Egypt'),
  node('khartoum', 15.5, 32.56, 'wasteland', 3, 'Sudan'),
  node('addis_ababa', 9.03, 38.74, 'rural', 2, 'Ethiopia'),
  node('nairobi', -1.29, 36.82, 'rural', 3, 'Kenya'),
  node('timbuktu', 16.77, -3.01, 'wasteland', 2, 'Mali'),
  node('dakar', 14.72, -17.47, 'coastal', 3, 'Senegal'),
  node('lagos', 6.52, 3.38, 'urban', 4, 'Nigeria'),
  node('kinshasa', -4.44, 15.27, 'forest', 4, 'Democratic Republic of the Congo'),
  node('johannesburg', -26.2, 28.05, 'industrial', 4, 'South Africa'),
  node('cape_town', -33.92, 18.42, 'coastal', 3, 'South Africa'),

  // Asia
  node('karachi', 24.86, 67.0, 'coastal', 3, 'Pakistan'),
  node('delhi', 28.61, 77.21, 'urban', 5, 'India'),
  node('mumbai', 19.08, 72.88, 'coastal', 4, 'India'),
  node('almaty', 43.24, 76.89, 'rural', 2, 'Kazakhstan'),
  node('novosibirsk', 55.01, 82.93, 'forest', 3, 'Russian Federation'),
  node('ulaanbaatar', 47.89, 106.91, 'wasteland', 2, 'Mongolia'),
  node('beijing', 39.9, 116.4, 'urban', 5, 'China'),
  node('shanghai', 31.23, 121.47, 'industrial', 4, 'China'),
  node('seoul', 37.57, 126.98, 'urban', 4, 'Republic of Korea'),
  node('tokyo', 35.68, 139.69, 'urban', 4, 'Japan'),
  node('vladivostok', 43.12, 131.89, 'coastal', 3, 'Russian Federation'),
  node('anadyr', 64.73, 177.51, 'arctic', 3, 'Russian Federation'),
  node('bangkok', 13.76, 100.5, 'urban', 3, 'Thailand'),
  node('kuala_lumpur', 3.14, 101.69, 'forest', 3, 'Malaysia'),
  node('jakarta', -6.21, 106.85, 'urban', 4, 'Indonesia'),

  // Oceania
  node('darwin', -12.46, 130.84, 'wasteland', 2, 'Australia'),
  node('alice_springs', -23.7, 133.88, 'wasteland', 2, 'Australia'),
  node('sydney', -33.87, 151.21, 'coastal', 3, 'Australia'),
  node('auckland', -36.85, 174.76, 'coastal', 2, 'New Zealand'),

  // Americas
  node('nome', 64.5, -165.41, 'arctic', 3, 'United States'),
  node('anchorage', 61.22, -149.9, 'arctic', 2, 'United States'),
  node('vancouver', 49.28, -123.12, 'forest', 3, 'Canada'),
  node('san_francisco', 37.77, -122.42, 'coastal', 4, 'United States'),
  node('los_angeles', 34.05, -118.24, 'urban', 5, 'United States'),
  node('denver', 39.74, -104.99, 'rural', 3, 'United States'),
  node('chicago', 41.88, -87.63, 'urban', 4, 'United States'),
  node('new_york', 40.71, -74.01, 'urban', 5, 'United States'),
  node('montreal', 45.5, -73.57, 'suburban', 3, 'Canada'),
  node('st_johns', 47.56, -52.71, 'coastal', 2, 'Canada'),
  node('nuuk', 64.18, -51.72, 'arctic', 3, 'Greenland'),
  node('houston', 29.76, -95.37, 'industrial', 4, 'United States'),
  node('mexico_city', 19.43, -99.13, 'urban', 5, 'Mexico'),
  node('panama_city', 8.98, -79.52, 'forest', 3, 'Panama'),
  node('bogota', 4.71, -74.07, 'rural', 3, 'Colombia'),
  node('lima', -12.05, -77.04, 'coastal', 3, 'Peru'),
  node('manaus', -3.12, -60.02, 'forest', 4, 'Brazil'),
  node('recife', -8.05, -34.88, 'coastal', 3, 'Brazil'),
  node('sao_paulo', -23.55, -46.63, 'urban', 5, 'Brazil'),
  node('buenos_aires', -34.6, -58.38, 'urban', 4, 'Argentina'),
  node('santiago', -33.45, -70.67, 'suburban', 3, 'Chile'),
  node('ushuaia', -54.8, -68.3, 'arctic', 2, 'Argentina'),
];

/**
 * Known passable routes. `sea` crossings are slower and stormier but are the
 * only way between continents.
 */
const road = (a, b) => ({ a, b, mode: 'road' });
const sea = (a, b) => ({ a, b, mode: 'sea' });

const ROUTES = [
  road('istanbul', 'ankara'), road('istanbul', 'sofia'), road('istanbul', 'bucharest'),
  sea('istanbul', 'athens'), road('sofia', 'athens'), road('sofia', 'bucharest'),
  road('sofia', 'vienna'), road('bucharest', 'kyiv'), road('bucharest', 'vienna'),
  road('kyiv', 'moscow'), road('kyiv', 'berlin'), road('vienna', 'berlin'),
  road('berlin', 'paris'), road('berlin', 'moscow'), road('paris', 'london'),
  road('paris', 'madrid'), road('madrid', 'lisbon'), sea('london', 'reykjavik'),
  road('ankara', 'tbilisi'), road('ankara', 'beirut'), road('tbilisi', 'tehran'),
  road('tbilisi', 'moscow'), road('beirut', 'cairo'), sea('athens', 'cairo'),

  sea('madrid', 'tangier'), sea('lisbon', 'tangier'), road('tangier', 'timbuktu'),
  road('tangier', 'dakar'), road('timbuktu', 'dakar'), road('timbuktu', 'lagos'),
  road('dakar', 'lagos'), road('cairo', 'khartoum'), road('khartoum', 'addis_ababa'),
  road('addis_ababa', 'nairobi'), road('lagos', 'kinshasa'), road('kinshasa', 'nairobi'),
  road('kinshasa', 'johannesburg'), road('nairobi', 'johannesburg'), road('johannesburg', 'cape_town'),

  road('tehran', 'karachi'), road('tehran', 'almaty'), road('karachi', 'mumbai'),
  road('karachi', 'delhi'), road('mumbai', 'delhi'), road('delhi', 'bangkok'),
  road('almaty', 'novosibirsk'), road('moscow', 'novosibirsk'), road('novosibirsk', 'ulaanbaatar'),
  road('almaty', 'beijing'), road('ulaanbaatar', 'beijing'), road('beijing', 'shanghai'),
  road('beijing', 'seoul'), road('beijing', 'vladivostok'), road('seoul', 'vladivostok'),
  sea('seoul', 'tokyo'), sea('shanghai', 'tokyo'), sea('vladivostok', 'anadyr'),
  road('shanghai', 'bangkok'), road('bangkok', 'kuala_lumpur'), sea('kuala_lumpur', 'jakarta'),

  sea('jakarta', 'darwin'), road('darwin', 'alice_springs'), road('alice_springs', 'sydney'),
  sea('sydney', 'auckland'),

  sea('anadyr', 'nome'), road('nome', 'anchorage'), road('anchorage', 'vancouver'),
  road('vancouver', 'san_francisco'), road('vancouver', 'denver'), road('san_francisco', 'los_angeles'),
  road('san_francisco', 'denver'), road('los_angeles', 'denver'), road('denver', 'chicago'),
  road('denver', 'houston'), road('chicago', 'new_york'), road('chicago', 'montreal'),
  road('new_york', 'montreal'), road('montreal', 'st_johns'), sea('st_johns', 'nuuk'),
  sea('nuuk', 'reykjavik'), road('houston', 'mexico_city'), road('mexico_city', 'panama_city'),
  road('panama_city', 'bogota'), road('bogota', 'lima'), road('bogota', 'manaus'),
  road('lima', 'santiago'), road('manaus', 'recife'), road('manaus', 'sao_paulo'),
  road('recife', 'sao_paulo'), road('sao_paulo', 'buenos_aires'), road('buenos_aires', 'santiago'),
  road('buenos_aires', 'ushuaia'), sea('dakar', 'recife'),
];



  // --- src/data/biomes.js ---
/**
 * Biomes shape travel cost, encounter pressure and what scavenging yields.
 * `travelTime` multiplies journey duration into a node of that biome.
 */
const BIOMES = {
  urban:      { travelTime: 1.15, encounterRate: 0.32, lootTable: 'urban',      yield: [1, 3] },
  suburban:   { travelTime: 1.0,  encounterRate: 0.24, lootTable: 'suburban',   yield: [1, 3] },
  industrial: { travelTime: 1.1,  encounterRate: 0.28, lootTable: 'industrial', yield: [1, 3] },
  rural:      { travelTime: 0.95, encounterRate: 0.2,  lootTable: 'rural',      yield: [1, 2] },
  coastal:    { travelTime: 1.0,  encounterRate: 0.22, lootTable: 'coastal',    yield: [1, 3] },
  forest:     { travelTime: 1.3,  encounterRate: 0.26, lootTable: 'forest',     yield: [1, 2] },
  wasteland:  { travelTime: 1.2,  encounterRate: 0.28, lootTable: 'wasteland',  yield: [0, 2] },
  arctic:     { travelTime: 1.5,  encounterRate: 0.22, lootTable: 'arctic',     yield: [0, 2] },
  military:   { travelTime: 1.1,  encounterRate: 0.42, lootTable: 'military',   yield: [1, 3] },
};



  // --- src/modules/map/projection.js ---
/**
 * Robinson projection calibrated against the bundled Simplemaps world.svg
 * (viewBox 0 0 2000 857). Calibration was fitted on country bounding boxes
 * (Egypt, Iceland, Ecuador, Sri Lanka); expect ~3px error, which is far below
 * the size of a node marker.
 */

// Robinson lookup: [parallel length ratio, distance-from-equator ratio] per 5°.
const ROBINSON_TABLE = [
  [1.0000, 0.0000], [0.9986, 0.0620], [0.9954, 0.1240], [0.9900, 0.1860],
  [0.9822, 0.2480], [0.9730, 0.3100], [0.9600, 0.3720], [0.9427, 0.4340],
  [0.9216, 0.4958], [0.8962, 0.5571], [0.8679, 0.6176], [0.8350, 0.6769],
  [0.7986, 0.7346], [0.7597, 0.7903], [0.7186, 0.8435], [0.6732, 0.8936],
  [0.6213, 0.9394], [0.5722, 0.9761], [0.5322, 1.0000],
];

const MAP_ORIGIN_X = 987.3;
const MAP_EQUATOR_Y = 501.4;
const PX_PER_DEGREE_LON = 5.658;
const PX_PER_UNIT_LAT = 516.6;

const MAP_VIEWBOX = Object.freeze({ width: 2000, height: 857 });

function robinsonCoefficients(latitude) {
  const absLat = Math.min(Math.abs(latitude), 90);
  const index = Math.min(Math.floor(absLat / 5), ROBINSON_TABLE.length - 2);
  const fraction = (absLat - index * 5) / 5;
  const [x0, y0] = ROBINSON_TABLE[index];
  const [x1, y1] = ROBINSON_TABLE[index + 1];
  return {
    lengthRatio: x0 + (x1 - x0) * fraction,
    heightRatio: (y0 + (y1 - y0) * fraction) * Math.sign(latitude),
  };
}

function project({ lat, lon }) {
  const { lengthRatio, heightRatio } = robinsonCoefficients(lat);
  return {
    x: MAP_ORIGIN_X + lon * PX_PER_DEGREE_LON * lengthRatio,
    y: MAP_EQUATOR_Y - heightRatio * PX_PER_UNIT_LAT,
  };
}

const EARTH_RADIUS_KM = 6371;
const toRadians = (deg) => (deg * Math.PI) / 180;

function greatCircleKm(a, b) {
  const dLat = toRadians(b.lat - a.lat);
  const dLon = toRadians(b.lon - a.lon);
  const h = Math.sin(dLat / 2) ** 2
    + Math.cos(toRadians(a.lat)) * Math.cos(toRadians(b.lat)) * Math.sin(dLon / 2) ** 2;
  return 2 * EARTH_RADIUS_KM * Math.asin(Math.sqrt(h));
}



  // --- src/modules/map/mapGraph.js ---








/**
 * Precomputed static graph of real-world anchor nodes and connections,
 * projected onto the 2000x857 SVG coordinate space.
 */
const NODE_BY_ID = new Map();
const ADJACENCY = new Map();

for (const raw of LOCATIONS) {
  const { x, y } = project(raw);
  NODE_BY_ID.set(raw.id, Object.freeze({ ...raw, x, y }));
  ADJACENCY.set(raw.id, []);
}

const EDGES = Object.freeze(
  ROUTES.map(({ a, b, mode }) => {
    const nodeA = NODE_BY_ID.get(a);
    const nodeB = NODE_BY_ID.get(b);
    if (!nodeA || !nodeB) throw new Error(`Route references unknown node: ${a} <-> ${b}`);
    const km = Math.round(greatCircleKm(nodeA, nodeB));
    const edge = Object.freeze({ id: `${a}--${b}`, a, b, mode, km });
    ADJACENCY.get(a).push(Object.freeze({ to: b, mode, km, edgeId: edge.id }));
    ADJACENCY.get(b).push(Object.freeze({ to: a, mode, km, edgeId: edge.id }));
    return edge;
  }),
);

const ALL_NODES = Object.freeze([...NODE_BY_ID.values()]);

function getNode(nodeId) {
  const node = NODE_BY_ID.get(nodeId);
  if (!node) throw new Error(`Unknown location node "${nodeId}"`);
  return node;
}

function neighborsOf(nodeId) {
  return ADJACENCY.get(nodeId) ?? [];
}

function findRoute(fromId, toId) {
  return neighborsOf(fromId).find((edge) => edge.to === toId) ?? null;
}

/**
 * Node visibility states:
 * - 'visited': player has physically entered this node
 * - 'known': adjacent to a visited node or revealed via survey/radio
 * - 'fog': unknown
 */
function nodeVisibility(state, nodeId) {
  const entry = state.world.nodes[nodeId];
  if (entry?.visited) return 'visited';
  if (entry?.known) return 'known';
  return 'fog';
}

function chartedCountries(state) {
  const countries = new Set();
  for (const [nodeId, entry] of Object.entries(state.world.nodes)) {
    if (entry.visited) countries.add(getNode(nodeId).country);
  }
  return countries;
}

/**
 * Computes travel duration (minutes), encounter risk (0..1), and segment count
 * for a route between `fromId` and `toId` given current player & world state.
 */
function estimateJourney(state, fromId, toId) {
  const route = findRoute(fromId, toId);
  if (!route) return null;

  const destination = getNode(toId);
  const biome = BIOMES[destination.biome];
  const {
    baseHours, kmPerHour, seaTimeMultiplier, segmentMinutes,
    roundToMinutes, nightRiskMultiplier, seaRiskBonus, maxEncounterChance,
  } = BALANCE.travel;

  let hours = (baseHours + route.km / kmPerHour) * biome.travelTime;
  if (route.mode === 'sea') hours *= seaTimeMultiplier;
  if (isOverloaded(state)) hours *= BALANCE.inventory.overloadTravelPenalty;
  hours *= statusTravelMultiplier(state);
  hours *= Math.max(0.75, 1 - passiveBonus(state, 'travelSpeed'));

  const totalMinutes = Math.max(
    roundToMinutes,
    Math.round((hours * 60) / roundToMinutes) * roundToMinutes,
  );
  const segments = Math.max(1, Math.ceil(totalMinutes / segmentMinutes));

  let risk = biome.encounterRate + (destination.danger - 1) * 0.06;
  if (route.mode === 'sea') risk += seaRiskBonus;
  if (isNight(state.time.minutes) && passiveBonus(state, 'nightVision') <= 0) {
    risk *= nightRiskMultiplier;
  }
  risk = Math.min(maxEncounterChance, Math.max(0.05, risk));

  return {
    fromId,
    toId,
    mode: route.mode,
    km: route.km,
    minutes: totalMinutes,
    segments,
    risk,
    destination,
  };
}

function scavengeProfile(state, nodeId = state.world.currentNodeId) {
  const node = getNode(nodeId);
  const biome = BIOMES[node.biome];
  const depletion = state.world.nodes[nodeId]?.depletion ?? 0;
  const night = isNight(state.time.minutes) && passiveBonus(state, 'nightVision') <= 0;

  let chance = BALANCE.scavenge.findChance * (1 - depletion * 0.75);
  chance += passiveBonus(state, 'scavengeBonus');
  if (night) chance -= BALANCE.scavenge.nightPenalty;
  chance = Math.max(0.08, Math.min(0.95, chance));

  const hazardRisk = Math.min(0.65, node.danger * BALANCE.scavenge.hazardChancePerDanger * (night ? 1.25 : 1));
  return { node, biome, depletion, chance, hazardRisk };
}



  // --- src/modules/map/encounters.js ---






const clampChance = (value) =>
  Math.max(BALANCE.checks.minChance, Math.min(BALANCE.checks.maxChance, value));

function pickEncounter(rng, { context, nodeId, mode = 'road' }) {
  const node = getNode(nodeId);
  const terrain = mode === 'sea' ? 'sea' : 'land';

  const pool = Object.entries(ENCOUNTERS)
    .filter(([, def]) => {
      if (!def.contexts.includes(context)) return false;
      const defTerrain = def.terrain ?? 'land';
      if (defTerrain !== 'any' && defTerrain !== terrain) return false;
      if (def.biomes && !def.biomes.includes(node.biome)) return false;
      if (def.minDanger && node.danger < def.minDanger) return false;
      return true;
    })
    .map(([id, def]) => ({ id, ...def }));

  if (pool.length === 0) return null;
  return rng.weighted(pool, (entry) => entry.weight ?? 1);
}

/** Computes the exact success probability (0..1) of a choice check. */
function evaluateCheckChance(state, check) {
  if (!check) return 1;
  switch (check.kind) {
    case 'skill': {
      const level = skillLevel(state, check.skill);
      return clampChance(check.base + level * (check.perLevel ?? 0.05));
    }
    case 'combat': {
      const rating = combatRating(state);
      return clampChance(check.base + rating * BALANCE.checks.combatPerRating);
    }
    case 'gear': {
      return hasGearFlag(state, check.flag) ? 0.95 : clampChance(check.base ?? 0.15);
    }
    default:
      return 0.5;
  }
}

function describeEncounter(state, encounterState) {
  if (!encounterState) return null;
  const def = ENCOUNTERS[encounterState.id];
  if (!def) return null;

  const choices = def.choices.map((choice) => {
    const available = meetsRequirement(state, choice.requires);
    const chance = choice.check ? evaluateCheckChance(state, choice.check) : null;
    return {
      id: choice.id,
      available,
      requires: choice.requires ?? null,
      check: choice.check ? { ...choice.check, chance } : null,
    };
  });

  return {
    id: encounterState.id,
    context: encounterState.context,
    nodeId: encounterState.nodeId,
    choices,
  };
}

function consumeCombatAmmo(store, check) {
  if (check?.kind !== 'combat') return;
  const weapon = weaponProfile(store.state);
  if (weapon.ammoId && weapon.loaded) {
    store.commit('inventory/remove', { itemId: weapon.ammoId, qty: 1 });
  }
}



  // --- src/modules/map/index.js ---










const locName = (nodeId) => ref(`location.${nodeId}`);

function createInitialWorld() {
  const startId = BALANCE.startingNode;
  const nodes = {};
  nodes[startId] = { visited: true, known: true, depletion: 0, scavenges: 0 };
  for (const edge of neighborsOf(startId)) {
    nodes[edge.to] = { visited: false, known: true, depletion: 0, scavenges: 0 };
  }
  return {
    currentNodeId: startId,
    selectedNodeId: startId,
    nodes,
    encounter: null,
  };
}

function registerMapMutations(store) {
  store.registerMutations('world', {
    selectNode(state, nodeId) {
      state.world.selectedNodeId = nodeId;
    },
    visitNode(state, nodeId) {
      state.world.currentNodeId = nodeId;
      state.world.selectedNodeId = nodeId;
      const entry = (state.world.nodes[nodeId] ??= { visited: false, known: true, depletion: 0, scavenges: 0 });
      const firstVisit = !entry.visited;
      entry.visited = true;
      entry.known = true;
      for (const edge of neighborsOf(nodeId)) {
        const neighbor = (state.world.nodes[edge.to] ??= { visited: false, known: false, depletion: 0, scavenges: 0 });
        neighbor.known = true;
      }
      return firstVisit;
    },
    revealNode(state, nodeId) {
      const entry = (state.world.nodes[nodeId] ??= { visited: false, known: false, depletion: 0, scavenges: 0 });
      const wasHidden = !entry.known;
      entry.known = true;
      return wasHidden;
    },
    depleteNode(state, { nodeId, amount }) {
      const entry = (state.world.nodes[nodeId] ??= { visited: true, known: true, depletion: 0, scavenges: 0 });
      entry.depletion = Math.min(1, Math.max(0, entry.depletion + amount));
      if (amount > 0) entry.scavenges += 1;
    },
    recoverDepletion(state, amount) {
      for (const entry of Object.values(state.world.nodes)) {
        if (entry.depletion > 0) {
          entry.depletion = Math.max(0, entry.depletion - amount);
        }
      }
    },
    setEncounter(state, encounter) {
      state.world.encounter = encounter;
    },
    clearEncounter(state) {
      state.world.encounter = null;
    },
  });
}

function startEncounter(ctx, { context, nodeId, mode = 'road', pendingTravel = null }) {
  const chosen = pickEncounter(ctx.rng, { context, nodeId, mode });
  if (!chosen) return false;
  ctx.store.commit('world/setEncounter', {
    id: chosen.id,
    context,
    nodeId,
    mode,
    pendingTravel,
  });
  ctx.engine.log('log.encounter.triggered', { title: ref(`encounter.${chosen.id}.title`) }, 'warn');
  return true;
}

/**
 * Advances a multi-segment journey until either an encounter interrupts it,
 * the player dies en route, or the destination is reached.
 */
function runTravelSegments(ctx, plan) {
  const { store, rng, engine } = ctx;
  const { fromId, toId, mode, remainingMinutes, remainingSegments, risk } = plan;

  let minutesLeft = remainingMinutes;
  let segmentsLeft = remainingSegments;

  while (segmentsLeft > 0 && store.state.player.alive) {
    const stepMinutes = Math.round(minutesLeft / segmentsLeft);
    engine.advanceTime(stepMinutes, 'travel');
    minutesLeft -= stepMinutes;
    segmentsLeft -= 1;

    if (!store.state.player.alive) return;

    const perSegmentChance = 1 - (1 - risk) ** (1 / Math.max(1, plan.totalSegments));
    if (rng.chance(perSegmentChance)) {
      const interrupted = startEncounter(ctx, {
        context: 'travel',
        nodeId: toId,
        mode,
        pendingTravel: {
          fromId,
          toId,
          mode,
          remainingMinutes: minutesLeft,
          remainingSegments: segmentsLeft,
          totalSegments: plan.totalSegments,
          risk,
        },
      });
      if (interrupted) return;
    }
  }

  if (!store.state.player.alive) return;
  const firstVisit = store.commit('world/visitNode', toId);
  engine.log(
    firstVisit ? 'log.travel.discovered' : 'log.travel.arrived',
    { destination: locName(toId) },
    firstVisit ? 'good' : 'plain',
  );
  if (firstVisit) {
    ctx.effects.apply([{ type: 'xp', skill: 'foraging', amount: 8 }], ctx);
  }
}

function registerMapActions(engine, ctx) {
  const { store, rng, effects } = ctx;

  engine.registerAction('map/select', ({ nodeId }) => {
    if (!ALL_NODES.some((node) => node.id === nodeId)) return { ok: false, reason: 'reject.unknown_node' };
    store.commit('world/selectNode', nodeId);
    return { ok: true };
  }, { allowDuringEncounter: true });

  engine.registerAction('map/travel', ({ toId }) => {
    const fromId = store.state.world.currentNodeId;
    if (fromId === toId) return { ok: false, reason: 'reject.already_here' };
    if (!findRoute(fromId, toId)) return { ok: false, reason: 'reject.no_route' };

    const plan = estimateJourney(store.state, fromId, toId);
    engine.log('log.travel.departed', {
      origin: locName(fromId),
      destination: locName(toId),
      km: plan.km,
    });

    runTravelSegments(ctx, {
      fromId,
      toId,
      mode: plan.mode,
      remainingMinutes: plan.minutes,
      remainingSegments: plan.segments,
      totalSegments: plan.segments,
      risk: plan.risk,
    });
    return { ok: true };
  });

  engine.registerAction('map/scavenge', () => {
    const nodeId = store.state.world.currentNodeId;
    const profile = scavengeProfile(store.state, nodeId);
    const minutes = rollRange(rng, BALANCE.scavenge.minutes);

    engine.log('log.scavenge.started', { location: locName(nodeId) });
    engine.advanceTime(minutes, 'scavenge');
    if (!store.state.player.alive) return { ok: true };

    store.commit('world/depleteNode', { nodeId, amount: BALANCE.scavenge.depletionPerSearch });

    if (rng.chance(profile.chance)) {
      const bonus = skillMultiplier(store.state, 'foraging');
      const baseRolls = rollRange(rng, profile.biome.yield);
      const rolls = Math.max(1, Math.round(baseRolls * bonus));
      const items = rollLoot(rng, profile.biome.lootTable, rolls);
      effects.apply([{ type: 'xp', skill: 'foraging', amount: 5 }], ctx);
      engine.bus.emit('loot:modal', {
        type: 'scavenge',
        titleKey: 'loot.title.scavenge_found',
        descKey: 'loot.desc.scavenge_found',
        descParams: { location: locName(nodeId) },
        items,
        nodeId,
        onConfirm: (taken, left) => {
          for (const { itemId, qty } of taken) grantItems(ctx, itemId, qty);
          for (const { itemId, qty } of left) {
            store.commit('inventory/toGround', { nodeId, itemId, qty });
          }
        },
      });
    } else {
      engine.log('log.scavenge.empty', { location: locName(nodeId) }, 'warn');
      effects.apply([{ type: 'xp', skill: 'foraging', amount: 2 }], ctx);
      engine.bus.emit('loot:modal', {
        type: 'scavenge_empty',
        titleKey: 'loot.title.scavenge_empty',
        descKey: 'loot.desc.scavenge_empty',
        descParams: { location: locName(nodeId) },
        items: [],
        nodeId,
        onConfirm: () => {},
      });
    }

    if (store.state.player.alive && rng.chance(profile.hazardRisk)) {
      startEncounter(ctx, { context: 'scavenge', nodeId });
    }
    return { ok: true };
  });

  engine.registerAction('map/survey', () => {
    const nodeId = store.state.world.currentNodeId;
    engine.advanceTime(BALANCE.survey.minutes, 'idle');
    if (!store.state.player.alive) return { ok: true };

    let newlyRevealed = 0;
    for (const edge of neighborsOf(nodeId)) {
      if (store.commit('world/revealNode', edge.to)) newlyRevealed += 1;
      for (const twoHop of neighborsOf(edge.to)) {
        if (rng.chance(BALANCE.survey.twoHopRumorChance) && store.commit('world/revealNode', twoHop.to)) {
          newlyRevealed += 1;
        }
      }
    }

    if (newlyRevealed > 0) {
      engine.log('log.survey.revealed', { count: newlyRevealed }, 'good');
      effects.apply([{ type: 'xp', skill: 'foraging', amount: 4 }], ctx);
      engine.bus.emit('loot:modal', {
        type: 'survey',
        titleKey: 'loot.title.survey_result',
        descKey: 'loot.desc.survey',
        descParams: { count: newlyRevealed },
        items: [],
        nodeId,
        onConfirm: () => {},
      });
    } else {
      engine.log('log.survey.nothing', { location: locName(nodeId) });
      engine.bus.emit('loot:modal', {
        type: 'survey',
        titleKey: 'loot.title.survey_result',
        descKey: 'loot.desc.survey_empty',
        descParams: { location: locName(nodeId) },
        items: [],
        nodeId,
        onConfirm: () => {},
      });
    }
    return { ok: true };
  });

  engine.registerAction('map/rest', ({ hours = 4 }) => {
    if (!BALANCE.rest.options.includes(hours)) return { ok: false, reason: 'reject.invalid_duration' };
    const nodeId = store.state.world.currentNodeId;
    const node = getNode(nodeId);

    engine.log('log.rest.started', { hours, location: locName(nodeId) });
    for (let hour = 0; hour < hours && store.state.player.alive; hour += 1) {
      engine.advanceTime(60, 'rest');
      if (!store.state.player.alive) return { ok: true };
      if (rng.chance(node.danger * BALANCE.rest.ambushChancePerDanger)) {
        if (startEncounter(ctx, { context: 'rest', nodeId })) return { ok: true };
      }
    }
    engine.log('log.rest.finished', { hours }, 'good');
    engine.bus.emit('loot:modal', {
      type: 'rest',
      titleKey: 'loot.title.rest_result',
      descKey: 'loot.desc.rest',
      descParams: { hours },
      items: [],
      nodeId,
      onConfirm: () => {},
    });
    return { ok: true };
  });

  engine.registerAction('encounter/choose', ({ choiceId }) => {
    const active = store.state.world.encounter;
    if (!active) return { ok: false, reason: 'reject.no_encounter' };

    const def = ENCOUNTERS[active.id];
    const choice = def?.choices.find((entry) => entry.id === choiceId);
    if (!choice) return { ok: false, reason: 'reject.invalid_choice' };

    let outcomeKey = `encounter.${active.id}.outcome.${choiceId}`;
    let effectsToRun = choice.effects ?? [];
    let tone = 'plain';

    if (choice.check) {
      const chance = evaluateCheckChance(store.state, choice.check);
      consumeCombatAmmo(store, choice.check);
      const passed = rng.chance(chance);
      outcomeKey = `encounter.${active.id}.outcome.${choiceId}_${passed ? 'success' : 'failure'}`;
      effectsToRun = passed ? (choice.success ?? []) : (choice.failure ?? []);
      tone = passed ? 'good' : 'bad';
    }

    let abortedTravel = false;
    store.commit('world/clearEncounter');
    engine.log(outcomeKey, {}, tone);

    const filteredEffects = effectsToRun.filter((effect) => {
      if (effect.type === 'travel_abort') {
        abortedTravel = true;
        return false;
      }
      return true;
    });
    effects.apply(filteredEffects, ctx, { kind: 'encounter', id: active.id, choiceId });

    if (active.pendingTravel && store.state.player.alive) {
      if (abortedTravel) {
        engine.log('log.travel.aborted', { origin: locName(active.pendingTravel.fromId) }, 'warn');
      } else {
        runTravelSegments(ctx, active.pendingTravel);
      }
    }
    return { ok: true };
  }, { allowDuringEncounter: true });
}

function registerMapEffects(ctx) {
  const { effects, store, rng, engine } = ctx;

  effects.register('reveal', ({ count = 1 }) => {
    const unknown = ALL_NODES.filter((node) => !store.state.world.nodes[node.id]?.known);
    let revealed = 0;
    for (let i = 0; i < count && unknown.length > 0; i += 1) {
      const index = rng.int(0, unknown.length - 1);
      const [picked] = unknown.splice(index, 1);
      if (store.commit('world/revealNode', picked.id)) {
        revealed += 1;
        engine.log('log.survey.signal_node', { location: locName(picked.id) }, 'good');
      }
    }
    if (revealed === 0) engine.log('log.survey.nothing', { location: locName(store.state.world.currentNodeId) });
  });
}

const mapModule = {
  id: 'world',
  createState: createInitialWorld,

  install(ctx) {
    registerMapMutations(ctx.store);
    registerMapActions(ctx.engine, ctx);
    registerMapEffects(ctx);

    ctx.engine.addGuard((type, options, state) => {
      if (state.world.encounter && !options.allowDuringEncounter) {
        return 'reject.in_encounter';
      }
      return null;
    });

    ctx.bus.on('time:tick', ({ hours }) => {
      ctx.store.commit('world/recoverDepletion', BALANCE.scavenge.depletionRecoveryPerHour * hours);
    });
  },
};



  // --- src/data/enemies.js ---
/**
 * Hostile enemy registry for turn-based tactical combat encounters.
 * Text lives in `locales/en.json` under `enemy.<id>.name` and `enemy.<id>.desc`.
 */
const ENEMIES = {
  feral_hound: {
    hp: 22,
    damage: [4, 8],
    accuracy: 0.72,
    evasion: 0.1,
    bleedChance: 0.35,
    infectChance: 0.25,
    xp: 12,
    lootTable: 'wasteland',
    biomes: ['rural', 'suburban', 'forest', 'wasteland', 'coastal'],
    minDanger: 1,
  },
  raider_scout: {
    hp: 32,
    damage: [6, 11],
    accuracy: 0.75,
    evasion: 0.15,
    bleedChance: 0.4,
    infectChance: 0.05,
    xp: 18,
    lootTable: 'raider',
    biomes: ['urban', 'suburban', 'industrial', 'wasteland'],
    minDanger: 2,
  },
  plague_stalker: {
    hp: 28,
    damage: [5, 10],
    accuracy: 0.68,
    evasion: 0.08,
    bleedChance: 0.3,
    infectChance: 0.5,
    xp: 16,
    lootTable: 'urban',
    biomes: ['urban', 'industrial', 'forest'],
    minDanger: 2,
  },
  cordon_deserter: {
    hp: 45,
    damage: [8, 15],
    accuracy: 0.8,
    evasion: 0.18,
    bleedChance: 0.5,
    infectChance: 0.1,
    xp: 28,
    lootTable: 'military',
    biomes: ['military', 'urban', 'arctic'],
    minDanger: 3,
  },
};

function getEnemy(enemyId) {
  const enemy = ENEMIES[enemyId];
  if (!enemy) throw new Error(`Unknown enemy "${enemyId}"`);
  return enemy;
}



  // --- src/modules/combat/index.js ---









const enemyName = (enemyId) => ref(`enemy.${enemyId}.name`);

function pickEnemyForNode(rng, nodeId) {
  const node = getNode(nodeId);
  const pool = Object.entries(ENEMIES)
    .filter(([, def]) => {
      if (def.minDanger && node.danger < def.minDanger) return false;
      if (def.biomes && !def.biomes.includes(node.biome)) return false;
      return true;
    })
    .map(([id, def]) => ({ id, ...def }));

  if (pool.length === 0) return { id: 'feral_hound', ...ENEMIES.feral_hound };
  return rng.pick(pool);
}

function resolveEnemyTurn(ctx, enemyId) {
  const { store, rng, effects, engine } = ctx;
  const enemy = getEnemy(enemyId);
  const dodgeBonus = skillLevel(store.state, 'foraging') * 0.02;
  const hitChance = Math.max(0.25, enemy.accuracy - dodgeBonus);

  if (!rng.chance(hitChance)) {
    engine.log('combat.enemy_missed', { name: enemyName(enemyId) }, 'good');
    return;
  }

  const dmg = rollRange(rng, enemy.damage);
  engine.log('combat.enemy_hit', { name: enemyName(enemyId), dmg }, 'bad');
  const combatEffects = [{ type: 'damage', amount: dmg, cause: 'wounds' }];
  if (enemy.bleedChance && rng.chance(enemy.bleedChance)) {
    combatEffects.push({ type: 'ailment', id: 'bleeding' });
  }
  if (enemy.infectChance && rng.chance(enemy.infectChance)) {
    combatEffects.push({ type: 'ailment', id: 'infection' });
  }
  effects.apply(combatEffects, ctx, { kind: 'combat', enemyId });
}

const combatModule = {
  id: 'combat',

  createState() {
    return { activeEngagement: null, victories: 0 };
  },

  install(ctx) {
    const { store, rng, effects, engine } = ctx;

    store.registerMutations('combat', {
      start(state, { enemyId, hp }) {
        state.combat.activeEngagement = {
          enemyId,
          hp,
          maxHp: hp,
          round: 1,
          scavenged: false,
        };
      },
      damageEnemy(state, amount) {
        const active = state.combat.activeEngagement;
        if (!active) return 0;
        active.hp = Math.max(0, active.hp - amount);
        active.round += 1;
        return active.hp;
      },
      markScavenged(state) {
        if (state.combat.activeEngagement) {
          state.combat.activeEngagement.scavenged = true;
          state.combat.activeEngagement.round += 1;
        }
      },
      nextRound(state) {
        if (state.combat.activeEngagement) state.combat.activeEngagement.round += 1;
      },
      end(state, { won = false } = {}) {
        state.combat.activeEngagement = null;
        if (won) state.combat.victories = (state.combat.victories ?? 0) + 1;
      },
    });

    engine.addGuard((type, options, state) => {
      if (state.combat.activeEngagement && !options.allowDuringCombat && !options.allowDuringEncounter) {
        return 'reject.in_combat';
      }
      return null;
    });

    engine.registerAction('combat/patrol', () => {
      const nodeId = store.state.world.currentNodeId;
      const picked = pickEnemyForNode(rng, nodeId);
      store.commit('combat/start', { enemyId: picked.id, hp: picked.hp });
      engine.log('combat.enemy_appeared', { name: enemyName(picked.id) }, 'warn');
      engine.advanceTime(15, 'scavenge');
      return { ok: true };
    });

    engine.registerAction('combat/action', ({ move }) => {
      const active = store.state.combat.activeEngagement;
      if (!active) return { ok: false, reason: 'reject.no_combat' };
      const enemy = getEnemy(active.enemyId);
      const rating = combatRating(store.state);
      const weapon = weaponProfile(store.state);

      if (move === 'flee') {
        const escapeChance = Math.min(0.9, 0.55 + skillLevel(store.state, 'foraging') * 0.05);
        effects.apply([{ type: 'vital', vital: 'energy', amount: -6 }], ctx);
        if (rng.chance(escapeChance)) {
          store.commit('combat/end', { won: false });
          engine.log('combat.fled_success', { name: enemyName(active.enemyId) }, 'warn');
          return { ok: true };
        }
        engine.log('combat.fled_failed', { name: enemyName(active.enemyId) }, 'bad');
        store.commit('combat/nextRound');
        resolveEnemyTurn(ctx, active.enemyId);
        return { ok: true };
      }

      if (move === 'scavenge') {
        if (active.scavenged) return { ok: false, reason: 'reject.already_scavenged' };
        store.commit('combat/markScavenged');
        const loot = rollLoot(rng, enemy.lootTable, 1);
        effects.apply([
          { type: 'xp', skill: 'foraging', amount: 6 },
          { type: 'vital', vital: 'energy', amount: -4 },
        ], ctx);
        const nodeId = store.state.world.currentNodeId;
        engine.bus.emit('loot:modal', {
          type: 'combat_scavenge',
          titleKey: 'loot.title.combat_scavenge',
          descKey: 'loot.desc.combat_scavenge',
          descParams: {},
          items: loot,
          nodeId,
          onConfirm: (taken, left) => {
            for (const { itemId, qty } of taken) grantItems(ctx, itemId, qty);
            for (const { itemId, qty } of left) {
              store.commit('inventory/toGround', { nodeId, itemId, qty });
            }
          },
        });
        resolveEnemyTurn(ctx, active.enemyId);
        return { ok: true };
      }

      const isAimed = move === 'aimed';
      if (isAimed && weapon.ammoId && weapon.loaded) {
        store.commit('inventory/remove', { itemId: weapon.ammoId, qty: 1 });
      }

      const hitChance = Math.min(
        0.95,
        (isAimed ? 0.75 : 0.84) + skillLevel(store.state, 'marksmanship') * 0.02 - enemy.evasion,
      );
      effects.apply([{ type: 'vital', vital: 'energy', amount: isAimed ? -5 : -3 }], ctx);

      if (rng.chance(hitChance)) {
        const baseDmg = Math.round(rating * (isAimed ? 3.4 : 2.4)) + rng.int(2, 6);
        const remainingHp = store.commit('combat/damageEnemy', baseDmg);
        engine.log('combat.player_hit', { name: enemyName(active.enemyId), dmg: baseDmg }, 'good');

        if (remainingHp <= 0) {
          store.commit('combat/end', { won: true });
          engine.log('combat.victory', { name: enemyName(active.enemyId) }, 'good');
          const drops = rollLoot(rng, enemy.lootTable, rng.int(1, 2));
          effects.apply([{ type: 'xp', skill: 'marksmanship', amount: enemy.xp }], ctx);
          const nodeId = store.state.world.currentNodeId;
          engine.bus.emit('loot:modal', {
            type: 'combat_victory',
            titleKey: 'loot.title.combat_victory',
            descKey: 'loot.desc.combat_victory',
            descParams: { enemy: enemyName(active.enemyId), xp: enemy.xp },
            items: drops,
            nodeId,
            onConfirm: (taken, left) => {
              for (const { itemId, qty } of taken) grantItems(ctx, itemId, qty);
              for (const { itemId, qty } of left) {
                store.commit('inventory/toGround', { nodeId, itemId, qty });
              }
            },
          });
          return { ok: true };
        }
      } else {
        store.commit('combat/nextRound');
        engine.log('combat.player_missed', { name: enemyName(active.enemyId) }, 'warn');
      }

      resolveEnemyTurn(ctx, active.enemyId);
      return { ok: true };
    }, { allowDuringCombat: true });
  },
};


  // --- src/data/recipes.js ---
/**
 * Crafting recipes.
 *   tier         0 = handcraft anywhere, 1 = Field Workbench, 2 = Machinist Bench
 *   minutes      time spent crafting
 *   ingredients  [{ itemId, qty }]
 *   output       { itemId, qty }
 *   xp           { skill, amount }
 */
const RECIPES = {
  makeshift_bandage: {
    tier: 0,
    minutes: 15,
    ingredients: [{ itemId: 'cloth_rags', qty: 2 }],
    output: { itemId: 'bandage', qty: 1 },
    xp: { skill: 'medical', amount: 5 },
  },
  clean_water: {
    tier: 0,
    minutes: 20,
    ingredients: [
      { itemId: 'dirty_water', qty: 1 },
      { itemId: 'cloth_rags', qty: 1 },
    ],
    output: { itemId: 'bottled_water', qty: 1 },
    xp: { skill: 'foraging', amount: 5 },
  },
  antiseptic_compress: {
    tier: 0,
    minutes: 20,
    ingredients: [
      { itemId: 'bandage', qty: 1 },
      { itemId: 'antiseptic', qty: 1 },
    ],
    output: { itemId: 'first_aid_kit', qty: 1 },
    xp: { skill: 'medical', amount: 12 },
  },
  salvaged_blade: {
    tier: 1,
    minutes: 45,
    ingredients: [
      { itemId: 'scrap_metal', qty: 2 },
      { itemId: 'duct_tape', qty: 1 },
      { itemId: 'cloth_rags', qty: 1 },
    ],
    output: { itemId: 'machete', qty: 1 },
    xp: { skill: 'engineering', amount: 14 },
  },
  patched_leathers: {
    tier: 1,
    minutes: 60,
    ingredients: [
      { itemId: 'cloth_rags', qty: 4 },
      { itemId: 'duct_tape', qty: 2 },
      { itemId: 'scrap_metal', qty: 1 },
    ],
    output: { itemId: 'leather_jacket', qty: 1 },
    xp: { skill: 'engineering', amount: 16 },
  },
  dynamo_lamp: {
    tier: 1,
    minutes: 45,
    ingredients: [
      { itemId: 'electronics', qty: 1 },
      { itemId: 'copper_wire', qty: 2 },
      { itemId: 'duct_tape', qty: 1 },
    ],
    output: { itemId: 'flashlight', qty: 1 },
    xp: { skill: 'engineering', amount: 15 },
  },
  reloaded_ammo: {
    tier: 2,
    minutes: 45,
    ingredients: [
      { itemId: 'scrap_metal', qty: 1 },
      { itemId: 'copper_wire', qty: 2 },
    ],
    output: { itemId: 'rifle_rounds', qty: 6 },
    xp: { skill: 'engineering', amount: 18 },
  },
  plated_rig: {
    tier: 2,
    minutes: 90,
    ingredients: [
      { itemId: 'scrap_metal', qty: 3 },
      { itemId: 'duct_tape', qty: 2 },
      { itemId: 'cloth_rags', qty: 3 },
    ],
    output: { itemId: 'riot_vest', qty: 1 },
    xp: { skill: 'engineering', amount: 25 },
  },
};

function getRecipe(recipeId) {
  const recipe = RECIPES[recipeId];
  if (!recipe) throw new Error(`Unknown recipe "${recipeId}"`);
  return recipe;
}



  // --- src/data/structures.js ---
/**
 * Outpost / settlement structures.
 *   maxLevel     maximum upgrade tier
 *   minutes      construction time per level
 *   costs        cost per level (index 0 = level 1, index 1 = level 2)
 */
const STRUCTURES = {
  workbench: {
    glyph: '⚙',
    maxLevel: 2,
    minutes: 60,
    costs: [
      [
        { itemId: 'scrap_metal', qty: 2 },
        { itemId: 'duct_tape', qty: 1 },
      ],
      [
        { itemId: 'scrap_metal', qty: 3 },
        { itemId: 'electronics', qty: 2 },
        { itemId: 'copper_wire', qty: 2 },
      ],
    ],
    grantsStationTier: [1, 2],
  },
  rain_catcher: {
    glyph: '◊',
    maxLevel: 2,
    minutes: 45,
    costs: [
      [
        { itemId: 'cloth_rags', qty: 3 },
        { itemId: 'duct_tape', qty: 1 },
      ],
      [
        { itemId: 'scrap_metal', qty: 2 },
        { itemId: 'cloth_rags', qty: 3 },
      ],
    ],
    waterEveryHours: [12, 6],
  },
  barricade: {
    glyph: '▤',
    maxLevel: 3,
    minutes: 45,
    costs: [
      [{ itemId: 'scrap_metal', qty: 2 }],
      [
        { itemId: 'scrap_metal', qty: 3 },
        { itemId: 'duct_tape', qty: 1 },
      ],
      [
        { itemId: 'scrap_metal', qty: 4 },
        { itemId: 'copper_wire', qty: 2 },
      ],
    ],
    defenseBonus: [1, 2, 3],
  },
  med_cot: {
    glyph: '✚',
    maxLevel: 1,
    minutes: 45,
    costs: [
      [
        { itemId: 'cloth_rags', qty: 4 },
        { itemId: 'bandage', qty: 2 },
      ],
    ],
    restHealBonus: 2.0,
  },
};

function getStructure(structureId) {
  const structure = STRUCTURES[structureId];
  if (!structure) throw new Error(`Unknown structure "${structureId}"`);
  return structure;
}



  // --- src/modules/base/index.js ---





const baseLocName = (nodeId) => ref(`location.${nodeId}`);
const baseItemName = (itemId) => ref(`item.${itemId}.name`);

function isAtOutpost(state) {
  return Boolean(state.base.outpostNodeId && state.base.outpostNodeId === state.world.currentNodeId);
}

function activeWorkbenchTier(state) {
  if (!isAtOutpost(state)) return 0;
  return state.base.structures.workbench ?? 0;
}

function canAffordCost(state, costs) {
  return costs.every(({ itemId, qty }) => countItem(state.inventory, itemId) >= qty);
}

const baseModule = {
  id: 'base',

  createState() {
    return {
      outpostNodeId: null,
      structures: { workbench: 0, rain_catcher: 0, barricade: 0, med_cot: 0 },
      integrity: 100,
      storage: [],
      waterHoursAccum: 0,
    };
  },

  install(ctx) {
    const { store, engine, bus, effects } = ctx;

    store.registerMutations('base', {
      establishOutpost(state, nodeId) {
        state.base.outpostNodeId = nodeId;
        state.base.integrity = 100;
        state.base.structures = { workbench: 0, rain_catcher: 0, barricade: 0, med_cot: 0 };
      },
      upgradeStructure(state, structureId) {
        state.base.structures[structureId] = (state.base.structures[structureId] ?? 0) + 1;
      },
      changeIntegrity(state, delta) {
        state.base.integrity = Math.max(0, Math.min(100, (state.base.integrity ?? 100) + delta));
      },
      storeItem(state, { itemId, qty }) {
        state.base.storage ??= [];
        const existing = state.base.storage.find((entry) => entry.itemId === itemId);
        if (existing) existing.qty += qty;
        else state.base.storage.push({ itemId, qty });
      },
      withdrawItem(state, { itemId, qty }) {
        state.base.storage ??= [];
        const existing = state.base.storage.find((entry) => entry.itemId === itemId);
        const taken = Math.min(existing?.qty ?? 0, qty);
        if (existing) existing.qty -= taken;
        state.base.storage = state.base.storage.filter((entry) => entry.qty > 0);
        return taken;
      },
      tickCollector(state, hours) {
        const level = state.base.structures?.rain_catcher ?? 0;
        if (!state.base.outpostNodeId || level <= 0) return 0;
        const interval = STRUCTURES.rain_catcher.waterEveryHours[level - 1];
        state.base.waterHoursAccum = (state.base.waterHoursAccum ?? 0) + hours;
        const bottles = Math.floor(state.base.waterHoursAccum / interval);
        if (bottles > 0) state.base.waterHoursAccum -= bottles * interval;
        return bottles;
      },
    });

    engine.registerAction('base/establish', () => {
      const nodeId = store.state.world.currentNodeId;
      if (store.state.base.outpostNodeId === nodeId) {
        return { ok: false, reason: 'reject.already_outpost' };
      }
      store.commit('base/establishOutpost', nodeId);
      engine.log('log.base.established', { location: baseLocName(nodeId) }, 'good');
      engine.advanceTime(30, 'idle');
      return { ok: true };
    });

    engine.registerAction('base/upgrade', ({ structureId }) => {
      if (!isAtOutpost(store.state)) return { ok: false, reason: 'reject.not_at_outpost' };
      const def = getStructure(structureId);
      const currentLevel = store.state.base.structures?.[structureId] ?? 0;
      if (currentLevel >= def.maxLevel) return { ok: false, reason: 'reject.max_level' };

      const cost = def.costs[currentLevel];
      if (!canAffordCost(store.state, cost)) return { ok: false, reason: 'reject.missing_materials' };

      for (const { itemId, qty } of cost) {
        store.commit('inventory/remove', { itemId, qty });
      }
      store.commit('base/upgradeStructure', structureId);
      const nextLevel = currentLevel + 1;
      engine.log('log.base.upgraded', {
        structure: ref(`structure.${structureId}.name`),
        level: nextLevel,
      }, 'good');
      effects.apply([{ type: 'xp', skill: 'engineering', amount: 15 * nextLevel }], ctx);
      engine.advanceTime(def.minutes, 'idle');
      return { ok: true };
    });

    engine.registerAction('base/repair', () => {
      if (!isAtOutpost(store.state)) return { ok: false, reason: 'reject.not_at_outpost' };
      if ((store.state.base.integrity ?? 100) >= 100) return { ok: false, reason: 'reject.integrity_full' };
      if (countItem(store.state.inventory, 'scrap_metal') < 1) {
        return { ok: false, reason: 'reject.missing_materials' };
      }
      store.commit('inventory/remove', { itemId: 'scrap_metal', qty: 1 });
      store.commit('base/changeIntegrity', 25);
      engine.log('log.base.repaired', {}, 'good');
      effects.apply([{ type: 'xp', skill: 'engineering', amount: 8 }], ctx);
      engine.advanceTime(30, 'idle');
      return { ok: true };
    });

    engine.registerAction('base/store', ({ itemId, qty = 1 }) => {
      if (!isAtOutpost(store.state)) return { ok: false, reason: 'reject.not_at_outpost' };
      const removed = store.commit('inventory/remove', { itemId, qty });
      if (removed === 0) return { ok: false, reason: 'reject.missing_item' };
      store.commit('base/storeItem', { itemId, qty: removed });
      engine.log('log.base.stored', { item: baseItemName(itemId), count: removed });
      return { ok: true };
    });

    engine.registerAction('base/withdraw', ({ itemId, qty = 1 }) => {
      if (!isAtOutpost(store.state)) return { ok: false, reason: 'reject.not_at_outpost' };
      const taken = store.commit('base/withdrawItem', { itemId, qty });
      if (taken === 0) return { ok: false, reason: 'reject.missing_item' };
      grantItems(ctx, itemId, taken);
      return { ok: true };
    });

    bus.on('time:tick', ({ hours, activity }) => {
      const bottles = store.commit('base/tickCollector', hours);
      if (bottles > 0) {
        store.commit('base/storeItem', { itemId: 'bottled_water', qty: bottles });
        engine.log('log.base.water_collected', { count: bottles }, 'good');
      }
      if (activity === 'rest' && isAtOutpost(store.state) && (store.state.base.structures?.med_cot ?? 0) > 0) {
        store.commit('player/changeVital', {
          vital: 'health',
          delta: STRUCTURES.med_cot.restHealBonus * hours,
        });
      }
    });
  },
};


  // --- src/modules/crafting/index.js ---





function canCraftRecipe(state, recipeId) {
  const recipe = getRecipe(recipeId);
  if (activeWorkbenchTier(state) < recipe.tier) return { ok: false, reason: 'reject.workbench_tier' };
  if (!canAffordCost(state, recipe.ingredients)) return { ok: false, reason: 'reject.missing_materials' };
  return { ok: true };
}

const craftingModule = {
  id: 'crafting',

  createState() {
    return {
      unlockedRecipes: Object.keys(RECIPES),
      craftedCount: 0,
    };
  },

  install(ctx) {
    const { store, engine, effects } = ctx;

    store.registerMutations('crafting', {
      unlockRecipe(state, recipeId) {
        if (!state.crafting.unlockedRecipes.includes(recipeId)) {
          state.crafting.unlockedRecipes.push(recipeId);
        }
      },
      recordCraft(state) {
        state.crafting.craftedCount = (state.crafting.craftedCount ?? 0) + 1;
      },
    });

    engine.registerAction('crafting/craft', ({ recipeId }) => {
      const recipe = getRecipe(recipeId);
      const check = canCraftRecipe(store.state, recipeId);
      if (!check.ok) return check;

      for (const { itemId, qty } of recipe.ingredients) {
        store.commit('inventory/remove', { itemId, qty });
      }
      store.commit('crafting/recordCraft');

      const { itemId, qty } = recipe.output;
      engine.log('log.crafting.crafted', {
        item: ref(`item.${itemId}.name`),
        count: qty,
      }, 'good');
      grantItems(ctx, itemId, qty);

      if (recipe.xp) {
        effects.apply([{ type: 'xp', skill: recipe.xp.skill, amount: recipe.xp.amount }], ctx);
      }
      engine.advanceTime(recipe.minutes, 'idle');
      return { ok: true };
    });
  },
};


  // --- src/data/archetypes.js ---
/**
 * Selectable survivor backgrounds and starting anchors for the Main Menu
 * New Expedition screen.
 */
const STARTING_LOCATIONS = [
  'istanbul',
  'berlin',
  'london',
  'cairo',
  'moscow',
  'tokyo',
  'new_york',
  'sao_paulo',
  'sydney',
];

const ARCHETYPES = {
  scavenger: {
    glyph: '⊕',
    equipment: { weapon: 'kitchen_knife', body: null, pack: 'duffel_bag' },
    kit: [
      { itemId: 'bottled_water', qty: 2 },
      { itemId: 'canned_beans', qty: 2 },
      { itemId: 'bandage', qty: 1 },
      { itemId: 'cloth_rags', qty: 2 },
      { itemId: 'compass', qty: 1 },
    ],
    skills: { foraging: 25 },
  },
  medic: {
    glyph: '✚',
    equipment: { weapon: 'kitchen_knife', body: 'hazmat_poncho', pack: null },
    kit: [
      { itemId: 'bottled_water', qty: 2 },
      { itemId: 'energy_bar', qty: 2 },
      { itemId: 'first_aid_kit', qty: 1 },
      { itemId: 'antibiotics', qty: 2 },
      { itemId: 'antiseptic', qty: 1 },
      { itemId: 'bandage', qty: 3 },
    ],
    skills: { medical: 30 },
  },
  engineer: {
    glyph: '⚙',
    equipment: { weapon: 'crowbar', body: null, pack: null },
    kit: [
      { itemId: 'bottled_water', qty: 2 },
      { itemId: 'canned_beans', qty: 1 },
      { itemId: 'scrap_metal', qty: 3 },
      { itemId: 'duct_tape', qty: 2 },
      { itemId: 'copper_wire', qty: 3 },
      { itemId: 'electronics', qty: 1 },
    ],
    skills: { engineering: 30 },
  },
  veteran: {
    glyph: '⊹',
    equipment: { weapon: 'machete', body: 'leather_jacket', pack: null },
    kit: [
      { itemId: 'bottled_water', qty: 2 },
      { itemId: 'mre', qty: 2 },
      { itemId: 'bandage', qty: 2 },
      { itemId: 'painkillers', qty: 2 },
    ],
    skills: { marksmanship: 30 },
  },
};



  // --- src/ui/dom.js ---
const SVG_NS = 'http://www.w3.org/2000/svg';

function el(tag, attrs = {}, ...children) {
  const element = document.createElement(tag);
  applyAttributes(element, attrs);
  appendChildren(element, children);
  return element;
}

function svgEl(tag, attrs = {}, ...children) {
  const element = document.createElementNS(SVG_NS, tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (value != null && value !== false) element.setAttribute(key, String(value));
  }
  appendChildren(element, children);
  return element;
}

function applyAttributes(element, attrs) {
  for (const [key, value] of Object.entries(attrs)) {
    if (value == null || value === false) continue;
    if (key === 'class') {
      element.className = Array.isArray(value) ? value.filter(Boolean).join(' ') : value;
    } else if (key === 'dataset') {
      Object.assign(element.dataset, value);
    } else if (key.startsWith('on') && typeof value === 'function') {
      element.addEventListener(key.slice(2).toLowerCase(), value);
    } else if (value === true) {
      element.setAttribute(key, '');
    } else {
      element.setAttribute(key, String(value));
    }
  }
}

function appendChildren(parent, children) {
  for (const child of children.flat(Infinity)) {
    if (child == null || child === false) continue;
    if (typeof child === 'object' && child !== null && 'nodeType' in child) {
      parent.append(child);
    } else if (typeof Node !== 'undefined' && child instanceof Node) {
      parent.append(child);
    } else {
      parent.append(document.createTextNode ? document.createTextNode(String(child)) : String(child));
    }
  }
}



  // --- src/ui/mapView.js ---









class MapView {
  #viewportEl;
  #dossierEl;
  #encounterHostEl;
  #engine;
  #svgEl = null;
  #routesLayer = null;
  #nodesLayer = null;
  #countryPaths = new Map();
  #camera = { x: 0, y: 0, width: MAP_VIEWBOX.width, height: MAP_VIEWBOX.height };
  #drag = null;
  #lastState = null;

  constructor({ viewportEl, dossierEl, encounterHostEl, engine }) {
    this.#viewportEl = viewportEl;
    this.#dossierEl = dossierEl;
    this.#encounterHostEl = encounterHostEl;
    this.#engine = engine;
  }

  async mount(inlineSvgText = null) {
    let svgText = inlineSvgText;
    if (!svgText) {
      const response = await fetch('./world.svg');
      if (!response.ok) throw new Error(`Failed to load world.svg (${response.status})`);
      svgText = await response.text();
    }

    const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml');
    const sourceSvg = doc.querySelector('svg');
    if (!sourceSvg) throw new Error('Invalid world.svg document');
    const parsedSvg = document.importNode(sourceSvg, true);

    parsedSvg.classList.add('world-svg');
    parsedSvg.removeAttribute('width');
    parsedSvg.removeAttribute('height');
    parsedSvg.setAttribute('viewBox', `0 0 ${MAP_VIEWBOX.width} ${MAP_VIEWBOX.height}`);

    for (const path of parsedSvg.querySelectorAll('path')) {
      const country = path.getAttribute('name') || path.getAttribute('class');
      path.classList.add('landmass');
      if (country) {
        if (!this.#countryPaths.has(country)) this.#countryPaths.set(country, []);
        this.#countryPaths.get(country).push(path);
        path.addEventListener('click', () => this.#onCountryClick(country));
      }
    }

    this.#routesLayer = svgEl('g', { class: 'map-routes-layer' });
    this.#nodesLayer = svgEl('g', { class: 'map-nodes-layer' });
    parsedSvg.append(this.#routesLayer, this.#nodesLayer);

    this.#svgEl = parsedSvg;
    this.#viewportEl.prepend(parsedSvg);
    this.#bindPanZoom();
  }

  #onCountryClick(country) {
    if (!this.#lastState) return;
    const candidates = ALL_NODES.filter(
      (node) => node.country === country && nodeVisibility(this.#lastState, node.id) !== 'fog',
    );
    if (candidates.length > 0) {
      this.#engine.dispatch('map/select', { nodeId: candidates[0].id });
    }
  }

  centerOnNode(nodeId, zoom = 3.2) {
    const node = getNode(nodeId);
    const width = MAP_VIEWBOX.width / zoom;
    const height = MAP_VIEWBOX.height / zoom;
    this.#setCamera({
      x: node.x - width / 2,
      y: node.y - height / 2,
      width,
      height,
    });
  }

  resetZoom() {
    this.#setCamera({ x: 0, y: 0, width: MAP_VIEWBOX.width, height: MAP_VIEWBOX.height });
  }

  zoomBy(factor) {
    const cx = this.#camera.x + this.#camera.width / 2;
    const cy = this.#camera.y + this.#camera.height / 2;
    const width = Math.max(220, Math.min(MAP_VIEWBOX.width, this.#camera.width / factor));
    const height = (width / MAP_VIEWBOX.width) * MAP_VIEWBOX.height;
    this.#setCamera({ x: cx - width / 2, y: cy - height / 2, width, height });
  }

  render(state) {
    this.#lastState = state;
    if (this.#svgEl) {
      this.#renderMapOverlay(state);
    }
    this.#renderDossier(state);
    this.#renderModalOverlay(state);
  }

  #renderMapOverlay(state) {
    const charted = chartedCountries(state);
    const selectedCountry = getNode(state.world.selectedNodeId).country;
    for (const [country, paths] of this.#countryPaths) {
      const isCharted = charted.has(country);
      const isSelectedCountry = country === selectedCountry;
      for (const path of paths) {
        path.classList.toggle('is-charted', isCharted);
        path.classList.toggle('is-selected-country', isSelectedCountry);
      }
    }

    const { currentNodeId, selectedNodeId } = state.world;
    const routeEls = [];
    for (const edge of EDGES) {
      const visA = nodeVisibility(state, edge.a);
      const visB = nodeVisibility(state, edge.b);
      if (visA === 'fog' && visB === 'fog') continue;
      if (visA !== 'visited' && visB !== 'visited') continue;

      const nodeA = getNode(edge.a);
      const nodeB = getNode(edge.b);
      const isActiveEdge =
        (edge.a === currentNodeId && edge.b === selectedNodeId) ||
        (edge.b === currentNodeId && edge.a === selectedNodeId);

      routeEls.push(
        svgEl('line', {
          x1: nodeA.x.toFixed(1),
          y1: nodeA.y.toFixed(1),
          x2: nodeB.x.toFixed(1),
          y2: nodeB.y.toFixed(1),
          class: [
            'map-route',
            edge.mode === 'sea' && 'is-sea',
            isActiveEdge && 'is-selected',
          ].filter(Boolean).join(' '),
        }),
      );
    }
    this.#routesLayer.replaceChildren(...routeEls);

    const nodeEls = [];
    for (const node of ALL_NODES) {
      const vis = nodeVisibility(state, node.id);
      if (vis === 'fog') continue;

      const isCurrent = node.id === currentNodeId;
      const isSelected = node.id === selectedNodeId;
      const isOutpost = state.base.outpostNodeId === node.id;

      const group = svgEl(
        'g',
        {
          class: [
            'map-node',
            `vis-${vis}`,
            isCurrent && 'is-current',
            isSelected && 'is-selected',
            isOutpost && 'is-outpost',
          ].filter(Boolean).join(' '),
          transform: `translate(${node.x.toFixed(1)}, ${node.y.toFixed(1)})`,
          'data-node-id': node.id,
        },
        svgEl('circle', { class: 'node-hit-area', r: 12 }),
        isCurrent && svgEl('circle', { class: 'node-pulse', r: 11 }),
        isSelected && svgEl('circle', { class: 'node-reticle', r: 8 }),
        svgEl('circle', { class: 'node-dot', r: isCurrent ? 4.8 : 3.8 }),
        svgEl(
          'text',
          { class: 'node-label', x: 6.5, y: 3 },
          isOutpost ? `⌂ ${t(`location.${node.id}`)}` : t(`location.${node.id}`),
        ),
      );

      group.addEventListener('click', (event) => {
        event.stopPropagation();
        this.#engine.dispatch('map/select', { nodeId: node.id });
      });
      group.addEventListener('dblclick', (event) => {
        event.stopPropagation();
        if (findRoute(currentNodeId, node.id)) {
          this.#engine.dispatch('map/travel', { toId: node.id });
        }
      });
      nodeEls.push(group);
    }
    this.#nodesLayer.replaceChildren(...nodeEls);
  }

  #renderDossier(state) {
    const { currentNodeId, selectedNodeId } = state.world;
    const current = getNode(currentNodeId);
    const selected = getNode(selectedNodeId);
    const scavenge = scavengeProfile(state, currentNodeId);
    const yieldPct = Math.round((1 - scavenge.depletion) * 100);

    const selectedTargetBanner = selected.id !== current.id && this.#renderSelectedBanner(state, current, selected);

    const localOps = el(
      'section',
      { class: 'panel-block' },
      el(
        'div',
        { class: 'sector-header' },
        el(
          'div',
          {},
          el('span', { class: 'meta-label' }, t('map.current_sector')),
          el('h3', { class: 'sector-title' }, t(`location.${current.id}`)),
        ),
        el('span', { class: ['biome-badge', `biome-${current.biome}`] }, t(`biome.${current.biome}`)),
      ),
      el(
        'dl',
        { class: 'kv-grid kv-compact' },
        el('dt', {}, t('map.coords')),
        el('dd', {}, this.#formatCoords(current)),
        el('dt', {}, t('map.threat_level')),
        el('dd', { class: `danger-${current.danger}` }, '▲'.repeat(current.danger)),
        el('dt', {}, t('map.scavenge_yield')),
        el('dd', {}, `${yieldPct}% (${Math.round(scavenge.chance * 100)}% ${t('map.find_chance')})`),
      ),
      el(
        'div',
        { class: 'ops-actions' },
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-accent',
            onClick: () => this.#engine.dispatch('map/scavenge'),
          },
          t('map.action.scavenge'),
        ),
        el(
          'button',
          {
            type: 'button',
            class: 'btn',
            onClick: () => this.#engine.dispatch('combat/patrol'),
          },
          t('map.action.patrol'),
        ),
        el(
          'button',
          {
            type: 'button',
            class: 'btn',
            onClick: () => this.#engine.dispatch('map/survey'),
          },
          t('map.action.survey'),
        ),
        ...BALANCE.rest.options.map((hours) =>
          el(
            'button',
            {
              type: 'button',
              class: 'btn btn-ghost',
              onClick: () => this.#engine.dispatch('map/rest', { hours }),
            },
            t('map.action.rest_hours', { hours }),
          ),
        ),
      ),
    );

    const routesSection = this.#renderRoutesList(state, current, selected);
    this.#dossierEl.replaceChildren(selectedTargetBanner, localOps, routesSection);
  }

  #renderSelectedBanner(state, current, selected) {
    const directPlan = estimateJourney(state, current.id, selected.id);
    return el(
      'section',
      { class: 'panel-block selected-target-block' },
      el(
        'div',
        { class: 'sector-header' },
        el(
          'div',
          {},
          el('span', { class: 'meta-label' }, t('map.selected_sector')),
          el('strong', { class: 'sector-title' }, t(`location.${selected.id}`)),
          el(
            'div',
            { class: 'route-meta' },
            el('span', {}, `${t(`biome.${selected.biome}`)} · ${this.#formatCoords(selected)}`),
            directPlan
              ? el('span', {}, `${directPlan.km} km · ~${(directPlan.minutes / 60).toFixed(1)}h`)
              : el('span', { class: 'tone-warn' }, t('map.no_direct_corridor')),
          ),
        ),
        directPlan && el(
          'button',
          {
            type: 'button',
            class: 'btn btn-accent',
            onClick: () => this.#engine.dispatch('map/travel', { toId: selected.id }),
          },
          `${t('map.action.travel')} → ${t(`location.${selected.id}`)}`,
        ),
      ),
    );
  }

  #renderRoutesList(state, current, selected) {
    const edges = neighborsOf(current.id);
    const items = edges.map((edge) => {
      const target = getNode(edge.to);
      const vis = nodeVisibility(state, edge.to);
      const plan = estimateJourney(state, current.id, edge.to);
      const hours = (plan.minutes / 60).toFixed(1);
      const riskPct = Math.round(plan.risk * 100);
      const isSelected = selected.id === edge.to;

      return el(
        'li',
        {
          class: ['route-card', isSelected && 'is-selected'],
          onClick: () => this.#engine.dispatch('map/select', { nodeId: edge.to }),
        },
        el(
          'div',
          { class: 'route-main' },
          el(
            'div',
            { class: 'route-title-line' },
            el('span', { class: 'route-name' }, t(`location.${target.id}`)),
            el('span', { class: 'route-mode-tag' }, t(`map.mode.${edge.mode}`)),
            vis === 'visited' && el('span', { class: 'route-visited-tag' }, t('map.visited_badge')),
          ),
          el(
            'div',
            { class: 'route-meta' },
            el('span', {}, `${t(`biome.${target.biome}`)} · ${plan.km} km`),
            el('span', {}, `~${hours}h`),
            el('span', { class: riskPct >= 45 ? 'tone-warn' : '' }, `${t('map.risk')} ${riskPct}%`),
          ),
        ),
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-accent btn-xs',
            onClick: (event) => {
              event.stopPropagation();
              this.#engine.dispatch('map/travel', { toId: edge.to });
            },
          },
          t('map.action.travel'),
        ),
      );
    });

    return el(
      'section',
      { class: 'panel-block' },
      el('h3', { class: 'block-title' }, t('map.section.routes')),
      el('ul', { class: 'routes-list' }, items),
    );
  }

  #renderModalOverlay(state) {
    if (state.combat.activeEngagement) {
      this.#renderCombatCard(state, state.combat.activeEngagement);
      return;
    }
    const info = describeEncounter(state, state.world.encounter);
    if (info) {
      this.#renderEncounterCard(info);
      return;
    }
    this.#encounterHostEl.replaceChildren();
    this.#encounterHostEl.hidden = true;
  }

  #renderCombatCard(state, engagement) {
    this.#encounterHostEl.hidden = false;
    const hpPct = Math.max(0, Math.min(100, Math.round((engagement.hp / engagement.maxHp) * 100)));
    const weapon = weaponProfile(state);
    const weaponLabel = weapon.itemId ? t(`item.${weapon.itemId}.name`) : t('inventory.unarmed');

    const medStacks = state.inventory.stacks.filter(
      ({ itemId }) => getItem(itemId).category === 'medical' && getItem(itemId).use,
    );

    const card = el(
      'div',
      { class: 'encounter-card combat-card' },
      el(
        'div',
        { class: 'encounter-kicker' },
        `${t('combat.kicker')} // ${t('combat.round', { round: engagement.round })}`,
      ),
      el('h3', { class: 'encounter-title' }, t(`enemy.${engagement.enemyId}.name`)),
      el('p', { class: 'encounter-text' }, t(`enemy.${engagement.enemyId}.desc`)),
      el(
        'div',
        { class: 'vital-row band-critical' },
        el(
          'div',
          { class: 'vital-head' },
          el('span', { class: 'vital-label' }, t('combat.enemy_hp')),
          el('span', { class: 'vital-value' }, `${engagement.hp} / ${engagement.maxHp} HP`),
        ),
        el(
          'div',
          { class: 'meter-track' },
          el('div', { class: 'meter-fill', style: `width: ${hpPct}%` }),
        ),
      ),
      el(
        'div',
        { class: 'encounter-choices' },
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-accent encounter-choice-btn',
            onClick: () => this.#engine.dispatch('combat/action', { move: 'strike' }),
          },
          el('span', {}, `${t('combat.action.strike')} (${weaponLabel})`),
          el('span', { class: 'choice-odds' }, '-3 STAM'),
        ),
        el(
          'button',
          {
            type: 'button',
            class: 'btn encounter-choice-btn',
            onClick: () => this.#engine.dispatch('combat/action', { move: 'aimed' }),
          },
          el('span', {}, t('combat.action.aimed')),
          el('span', { class: 'choice-odds' }, '1.5× DMG · -5 STAM'),
        ),
        el(
          'button',
          {
            type: 'button',
            class: ['btn', 'encounter-choice-btn', engagement.scavenged && 'is-disabled'],
            disabled: engagement.scavenged,
            onClick: () => this.#engine.dispatch('combat/action', { move: 'scavenge' }),
          },
          el('span', {}, t('combat.action.scavenge')),
          el('span', { class: 'choice-odds' }, t('combat.scavenge_tag')),
        ),
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-ghost encounter-choice-btn',
            onClick: () => this.#engine.dispatch('combat/action', { move: 'flee' }),
          },
          el('span', {}, t('combat.action.flee')),
          el('span', { class: 'choice-odds' }, '-6 STAM'),
        ),
      ),
      medStacks.length > 0 && el(
        'div',
        { class: 'ops-actions' },
        ...medStacks.map(({ itemId, qty }) =>
          el(
            'button',
            {
              type: 'button',
              class: 'btn btn-xs',
              onClick: () => this.#engine.dispatch('inventory/use', { itemId }),
            },
            `+ ${t(`item.${itemId}.name`)} (${qty})`,
          ),
        ),
      ),
    );

    this.#encounterHostEl.replaceChildren(card);
  }

  #renderEncounterCard(info) {
    this.#encounterHostEl.hidden = false;
    const choiceBtns = info.choices.map((choice) => {
      const label = t(`encounter.${info.id}.choice.${choice.id}`);
      const badge = choice.check
        ? `${this.#checkLabel(choice.check)} ${Math.round(choice.check.chance * 100)}%`
        : null;

      return el(
        'button',
        {
          type: 'button',
          class: ['btn', 'encounter-choice-btn', !choice.available && 'is-disabled'],
          disabled: !choice.available,
          onClick: () => this.#engine.dispatch('encounter/choose', { choiceId: choice.id }),
        },
        el('span', { class: 'choice-label' }, label),
        badge && el('span', { class: 'choice-odds' }, badge),
      );
    });

    const card = el(
      'div',
      { class: 'encounter-card' },
      el(
        'div',
        { class: 'encounter-kicker' },
        `${t('encounter.kicker')} // ${t(`location.${info.nodeId}`)}`,
      ),
      el('h3', { class: 'encounter-title' }, t(`encounter.${info.id}.title`)),
      el('p', { class: 'encounter-text' }, t(`encounter.${info.id}.text`)),
      el('div', { class: 'encounter-choices' }, choiceBtns),
    );

    this.#encounterHostEl.replaceChildren(card);
  }

  #checkLabel(check) {
    if (check.kind === 'skill') return t(`skill.${check.skill}.name`);
    if (check.kind === 'combat') return t('encounter.check.combat');
    if (check.kind === 'gear') return t('encounter.check.gear');
    return '';
  }

  #formatCoords({ lat, lon }) {
    const ns = lat >= 0 ? 'N' : 'S';
    const ew = lon >= 0 ? 'E' : 'W';
    return `${Math.abs(lat).toFixed(1)}°${ns} ${Math.abs(lon).toFixed(1)}°${ew}`;
  }

  #setCamera({ x, y, width, height }) {
    const clampedW = Math.max(200, Math.min(MAP_VIEWBOX.width, width));
    const clampedH = Math.max(85, Math.min(MAP_VIEWBOX.height, height));
    const clampedX = Math.max(0, Math.min(MAP_VIEWBOX.width - clampedW, x));
    const clampedY = Math.max(0, Math.min(MAP_VIEWBOX.height - clampedH, y));
    this.#camera = { x: clampedX, y: clampedY, width: clampedW, height: clampedH };
    if (this.#svgEl) {
      this.#svgEl.setAttribute(
        'viewBox',
        `${clampedX.toFixed(1)} ${clampedY.toFixed(1)} ${clampedW.toFixed(1)} ${clampedH.toFixed(1)}`,
      );
    }
  }

  #pointers = new Map();
  #pinchDist = null;

  #bindPanZoom() {
    this.#viewportEl.addEventListener(
      'wheel',
      (event) => {
        event.preventDefault();
        this.zoomBy(event.deltaY < 0 ? 1.2 : 1 / 1.2);
      },
      { passive: false },
    );

    this.#viewportEl.addEventListener('pointerdown', (event) => {
      if (event.target.closest('.map-node, .map-ctrl-btn')) return;
      this.#pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

      if (this.#pointers.size === 1) {
        this.#drag = {
          pointerId: event.pointerId,
          startX: event.clientX,
          startY: event.clientY,
          camX: this.#camera.x,
          camY: this.#camera.y,
        };
      } else if (this.#pointers.size === 2) {
        const [p1, p2] = Array.from(this.#pointers.values());
        this.#pinchDist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
      }
      try {
        this.#viewportEl.setPointerCapture?.(event.pointerId);
      } catch {}
    });

    this.#viewportEl.addEventListener('pointermove', (event) => {
      if (this.#pointers.has(event.pointerId)) {
        this.#pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      }

      if (this.#pointers.size === 2 && this.#pinchDist) {
        const [p1, p2] = Array.from(this.#pointers.values());
        const newDist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        const factor = newDist / this.#pinchDist;
        if (Math.abs(factor - 1) > 0.03) {
          this.zoomBy(factor);
          this.#pinchDist = newDist;
        }
        return;
      }

      if (!this.#drag || event.pointerId !== this.#drag.pointerId) return;
      const rect = this.#viewportEl.getBoundingClientRect();
      const dx = ((event.clientX - this.#drag.startX) / rect.width) * this.#camera.width;
      const dy = ((event.clientY - this.#drag.startY) / rect.height) * this.#camera.height;
      this.#setCamera({
        x: this.#drag.camX - dx,
        y: this.#drag.camY - dy,
        width: this.#camera.width,
        height: this.#camera.height,
      });
    });

    const release = (event) => {
      this.#pointers.delete(event.pointerId);
      if (this.#pointers.size < 2) this.#pinchDist = null;
      if (this.#drag && event.pointerId === this.#drag.pointerId) {
        this.#drag = null;
      }
    };
    this.#viewportEl.addEventListener('pointerup', release);
    this.#viewportEl.addEventListener('pointercancel', release);
  }
}


  // --- src/ui/inventoryView.js ---






class InventoryView {
  #root;
  #engine;
  #activeCategory = 'all';
  #lastState = null;

  constructor(root, engine) {
    this.#root = root;
    this.#engine = engine;
  }

  render(state) {
    this.#lastState = state;
    this.#root.replaceChildren(
      this.#renderLoadBar(state),
      this.#renderEquipment(state),
      this.#renderPackSection(state),
      this.#renderGroundSection(state),
    );
  }

  #renderLoadBar(state) {
    const summary = loadSummary(state);
    const weightPct = Math.min(100, Math.round((summary.weight / summary.capacityKg) * 100));
    const weightStr = `${i18n.formatNumber(summary.weight, 2)} / ${i18n.formatNumber(summary.capacityKg, 1)} kg`;
    const slotStr = `${summary.slotsUsed} / ${summary.slotsTotal}`;

    return el(
      'section',
      { class: ['panel-block', summary.overloaded && 'is-overloaded'] },
      el(
        'div',
        { class: 'load-header' },
        el(
          'div',
          {},
          el('span', { class: 'meta-label' }, t('inventory.weight')),
          el('strong', { class: 'meta-val' }, weightStr),
        ),
        el(
          'div',
          {},
          el('span', { class: 'meta-label' }, t('inventory.slots')),
          el('strong', { class: 'meta-val' }, slotStr),
        ),
      ),
      el(
        'div',
        { class: 'meter-track' },
        el('div', {
          class: ['meter-fill', summary.overloaded && 'fill-warn'],
          style: `width: ${weightPct}%`,
        }),
      ),
      summary.overloaded && el('p', { class: 'overload-warning' }, t('inventory.overloaded_notice')),
    );
  }

  #renderEquipment(state) {
    const slots = EQUIPMENT_SLOTS.map((slot) => {
      const itemId = state.inventory.equipment[slot];
      const item = itemId ? getItem(itemId) : null;
      return el(
        'div',
        { class: ['equip-slot', itemId && 'is-filled'] },
        el('span', { class: 'equip-slot-label' }, t(`inventory.slot.${slot}`)),
        item
          ? el(
            'div',
            { class: 'equip-slot-body' },
            el('span', { class: 'item-glyph' }, item.glyph),
            el('span', { class: 'equip-item-name' }, t(`item.${itemId}.name`)),
            el(
              'button',
              {
                type: 'button',
                class: 'btn btn-ghost btn-xs',
                onClick: () => this.#engine.dispatch('inventory/unequip', { slot }),
              },
              t('inventory.action.unequip'),
            ),
          )
          : el('span', { class: 'equip-empty' }, t('inventory.slot_empty')),
      );
    });

    return el(
      'section',
      { class: 'panel-block' },
      el('h3', { class: 'block-title' }, t('inventory.section.equipped')),
      el('div', { class: 'equip-grid' }, slots),
    );
  }

  #renderPackSection(state) {
    const tabs = ['all', ...CATEGORIES].map((cat) =>
      el(
        'button',
        {
          type: 'button',
          class: ['filter-chip', this.#activeCategory === cat && 'is-active'],
          onClick: () => {
            this.#activeCategory = cat;
            if (this.#lastState) this.render(this.#lastState);
          },
        },
        t(`inventory.category.${cat}`),
      ),
    );

    const visibleStacks = state.inventory.stacks.filter(({ itemId }) =>
      this.#activeCategory === 'all' ? true : getItem(itemId).category === this.#activeCategory,
    );

    const list = visibleStacks.length === 0
      ? el('p', { class: 'muted-note' }, t('inventory.empty'))
      : el(
        'ul',
        { class: 'item-list' },
        visibleStacks.map(({ itemId, qty }) => this.#renderItemRow(itemId, qty)),
      );

    return el(
      'section',
      { class: 'panel-block' },
      el('h3', { class: 'block-title' }, t('inventory.section.pack')),
      el('div', { class: 'filter-row' }, tabs),
      list,
    );
  }

  #renderItemRow(itemId, qty) {
    const item = getItem(itemId);
    const totalKg = i18n.formatNumber(item.weight * qty, 2);

    const actions = [];
    if (item.use) {
      actions.push(
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-accent btn-xs',
            onClick: () => this.#engine.dispatch('inventory/use', { itemId }),
          },
          t('inventory.action.use'),
        ),
      );
    }
    if (item.equip) {
      actions.push(
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-xs',
            onClick: () => this.#engine.dispatch('inventory/equip', { itemId }),
          },
          t('inventory.action.equip'),
        ),
      );
    }
    actions.push(
      el(
        'button',
        {
          type: 'button',
          class: 'btn btn-ghost btn-xs',
          onClick: () => this.#engine.dispatch('inventory/drop', { itemId, qty: 1 }),
        },
        t('inventory.action.drop'),
      ),
    );

    return el(
      'li',
      { class: 'item-row' },
      el('span', { class: 'item-glyph' }, item.glyph),
      el(
        'div',
        { class: 'item-main' },
        el(
          'div',
          { class: 'item-title-line' },
          el('span', { class: 'item-name' }, t(`item.${itemId}.name`)),
          qty > 1 && el('span', { class: 'item-qty' }, `×${qty}`),
          el('span', { class: 'item-weight' }, `${totalKg} kg`),
        ),
        el('p', { class: 'item-desc' }, t(`item.${itemId}.desc`)),
      ),
      el('div', { class: 'item-actions' }, actions),
    );
  }

  #renderGroundSection(state) {
    const pile = groundHere(state);
    const node = getNode(state.world.currentNodeId);
    const body = pile.length === 0
      ? el('p', { class: 'muted-note' }, t('inventory.ground_empty'))
      : el(
        'ul',
        { class: 'item-list' },
        pile.map(({ itemId, qty }) => {
          const item = getItem(itemId);
          return el(
            'li',
            { class: 'item-row is-ground' },
            el('span', { class: 'item-glyph' }, item.glyph),
            el(
              'div',
              { class: 'item-main' },
              el(
                'div',
                { class: 'item-title-line' },
                el('span', { class: 'item-name' }, t(`item.${itemId}.name`)),
                el('span', { class: 'item-qty' }, `×${qty}`),
              ),
            ),
            el(
              'div',
              { class: 'item-actions' },
              el(
                'button',
                {
                  type: 'button',
                  class: 'btn btn-xs',
                  onClick: () => this.#engine.dispatch('inventory/pickup', { itemId, qty: 1 }),
                },
                t('inventory.action.take'),
              ),
            ),
          );
        }),
      );

    return el(
      'section',
      { class: 'panel-block' },
      el(
        'h3',
        { class: 'block-title' },
        `${t('inventory.section.ground')} — ${t(`location.${node.id}`)}`,
      ),
      body,
    );
  }
}



  // --- src/ui/craftBaseView.js ---









class CraftBaseView {
  #root;
  #engine;

  constructor(root, engine) {
    this.#root = root;
    this.#engine = engine;
  }

  render(state) {
    this.#root.replaceChildren(
      this.#renderCraftingSection(state),
      this.#renderOutpostSection(state),
      this.#renderLockerSection(state),
    );
  }

  #renderCraftingSection(state) {
    const stationTier = activeWorkbenchTier(state);
    const rows = Object.entries(RECIPES).map(([recipeId, recipe]) => {
      const outItem = getItem(recipe.output.itemId);
      const check = canCraftRecipe(state, recipeId);
      const ingredients = recipe.ingredients.map(({ itemId, qty }) => {
        const have = countItem(state.inventory, itemId);
        const enough = have >= qty;
        return el(
          'span',
          { class: ['ing-pill', enough ? 'tone-good' : 'tone-bad'] },
          `${t(`item.${itemId}.name`)} ${have}/${qty}`,
        );
      });

      return el(
        'li',
        { class: 'item-row' },
        el('span', { class: 'item-glyph' }, outItem.glyph),
        el(
          'div',
          { class: 'item-main' },
          el(
            'div',
            { class: 'item-title-line' },
            el('span', { class: 'item-name' }, t(`item.${recipe.output.itemId}.name`)),
            recipe.output.qty > 1 && el('span', { class: 'item-qty' }, `×${recipe.output.qty}`),
            el(
              'span',
              { class: ['route-mode-tag', stationTier < recipe.tier && 'tone-warn'] },
              t(`crafting.tier.${recipe.tier}`),
            ),
            el('span', { class: 'item-weight' }, `${recipe.minutes}m`),
          ),
          el('div', { class: 'ing-list' }, ingredients),
        ),
        el(
          'div',
          { class: 'item-actions' },
          el(
            'button',
            {
              type: 'button',
              class: ['btn', 'btn-accent', 'btn-xs', !check.ok && 'is-disabled'],
              disabled: !check.ok,
              onClick: () => this.#engine.dispatch('crafting/craft', { recipeId }),
            },
            t('crafting.action.craft'),
          ),
        ),
      );
    });

    return el(
      'section',
      { class: 'panel-block' },
      el(
        'div',
        { class: 'load-header' },
        el('h3', { class: 'block-title' }, t('crafting.section.recipes')),
        el('span', { class: 'meta-label' }, `${t('crafting.station')}: ${t(`crafting.tier.${stationTier}`)}`),
      ),
      el('ul', { class: 'item-list' }, rows),
    );
  }

  #renderOutpostSection(state) {
    const { outpostNodeId, integrity = 100, structures = {} } = state.base;
    const hereId = state.world.currentNodeId;
    const atOutpost = isAtOutpost(state);

    const headerInfo = outpostNodeId
      ? el(
        'div',
        { class: 'sector-header' },
        el(
          'div',
          {},
          el('span', { class: 'meta-label' }, t('base.location_label')),
          el('strong', { class: 'sector-title' }, t(`location.${outpostNodeId}`)),
        ),
        el(
          'div',
          {},
          el('span', { class: 'meta-label' }, t('base.integrity')),
          el('strong', { class: 'meta-val' }, `${Math.round(integrity)}%`),
        ),
      )
      : el('p', { class: 'muted-note' }, t('base.none_established'));

    const establishBtn = !atOutpost && el(
      'div',
      { class: 'ops-actions' },
      el(
        'button',
        {
          type: 'button',
          class: 'btn btn-accent',
          onClick: () => this.#engine.dispatch('base/establish'),
        },
        outpostNodeId
          ? t('base.action.relocate', { location: t(`location.${hereId}`) })
          : t('base.action.establish', { location: t(`location.${hereId}`) }),
      ),
    );

    if (!atOutpost) {
      return el(
        'section',
        { class: 'panel-block' },
        el('h3', { class: 'block-title' }, t('base.section.outpost')),
        headerInfo,
        establishBtn,
      );
    }

    const structureRows = Object.entries(STRUCTURES).map(([id, def]) => {
      const level = structures[id] ?? 0;
      const maxed = level >= def.maxLevel;
      const cost = maxed ? [] : def.costs[level];
      const affordable = !maxed && canAffordCost(state, cost);

      const costPills = cost.map(({ itemId, qty }) => {
        const have = countItem(state.inventory, itemId);
        return el(
          'span',
          { class: ['ing-pill', have >= qty ? 'tone-good' : 'tone-bad'] },
          `${t(`item.${itemId}.name`)} ${have}/${qty}`,
        );
      });

      return el(
        'li',
        { class: 'item-row' },
        el('span', { class: 'item-glyph' }, def.glyph),
        el(
          'div',
          { class: 'item-main' },
          el(
            'div',
            { class: 'item-title-line' },
            el('span', { class: 'item-name' }, t(`structure.${id}.name`)),
            el('span', { class: 'item-qty' }, `${t('skill.level_short', { level })} / ${def.maxLevel}`),
          ),
          el('p', { class: 'item-desc' }, t(`structure.${id}.desc`)),
          !maxed && el('div', { class: 'ing-list' }, costPills),
        ),
        el(
          'div',
          { class: 'item-actions' },
          el(
            'button',
            {
              type: 'button',
              class: ['btn', 'btn-xs', (!affordable || maxed) && 'is-disabled'],
              disabled: !affordable || maxed,
              onClick: () => this.#engine.dispatch('base/upgrade', { structureId: id }),
            },
            maxed ? t('skill.max_level') : t('base.action.upgrade'),
          ),
        ),
      );
    });

    return el(
      'section',
      { class: 'panel-block' },
      el('h3', { class: 'block-title' }, t('base.section.outpost')),
      headerInfo,
      integrity < 100 && el(
        'div',
        { class: 'ops-actions' },
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-xs',
            onClick: () => this.#engine.dispatch('base/repair'),
          },
          t('base.action.repair'),
        ),
      ),
      el('ul', { class: 'item-list' }, structureRows),
    );
  }

  #renderLockerSection(state) {
    if (!isAtOutpost(state)) return null;
    const storage = state.base.storage ?? [];
    const packStacks = state.inventory.stacks;

    const storedList = storage.length === 0
      ? el('p', { class: 'muted-note' }, t('base.storage_empty'))
      : el(
        'ul',
        { class: 'item-list' },
        storage.map(({ itemId, qty }) => {
          const item = getItem(itemId);
          return el(
            'li',
            { class: 'item-row' },
            el('span', { class: 'item-glyph' }, item.glyph),
            el(
              'div',
              { class: 'item-main' },
              el(
                'div',
                { class: 'item-title-line' },
                el('span', { class: 'item-name' }, t(`item.${itemId}.name`)),
                el('span', { class: 'item-qty' }, `×${qty}`),
              ),
            ),
            el(
              'div',
              { class: 'item-actions' },
              el(
                'button',
                {
                  type: 'button',
                  class: 'btn btn-xs',
                  onClick: () => this.#engine.dispatch('base/withdraw', { itemId, qty: 1 }),
                },
                t('inventory.action.take'),
              ),
            ),
          );
        }),
      );

    const stashQuickBtns = packStacks.map(({ itemId, qty }) =>
      el(
        'button',
        {
          type: 'button',
          class: 'btn btn-ghost btn-xs',
          onClick: () => this.#engine.dispatch('base/store', { itemId, qty: 1 }),
        },
        `+ ${t(`item.${itemId}.name`)} (${qty})`,
      ),
    );

    return el(
      'section',
      { class: 'panel-block' },
      el('h3', { class: 'block-title' }, t('base.section.storage')),
      storedList,
      packStacks.length > 0 && el(
        'div',
        { class: 'ops-actions' },
        ...stashQuickBtns,
      ),
    );
  }
}



  // --- src/ui/statusView.js ---








class StatusView {
  #root;

  constructor(root) {
    this.#root = root;
  }

  render(state) {
    const { player } = state;
    this.#root.replaceChildren(
      this.#renderDossier(player),
      this.#renderVitals(player),
      this.#renderAilments(player),
      this.#renderReadout(state),
      this.#renderSkills(state),
    );
  }

  #renderDossier(player) {
    const name = player.name || t('character.default_name');
    const age = player.age ?? 28;
    const blood = player.bloodType ?? 'A+';
    const traitKey = player.trait ?? 'stoic';
    const archetypeKey = player.archetype ?? 'scavenger';

    return el(
      'section',
      { class: 'panel-block dossier-block' },
      el(
        'div',
        { class: 'dossier-id-row' },
        el(
          'div',
          { class: 'dossier-callsign-wrap' },
          el('span', { class: 'dossier-callsign-kicker' }, t('character.callsign_kicker')),
          el('strong', { class: 'dossier-callsign' }, name.toUpperCase()),
        ),
        el('span', { class: 'dossier-badge' }, t(`menu.archetype.${archetypeKey}.name`)),
      ),
      el(
        'div',
        { class: 'dossier-stats-strip' },
        el(
          'div',
          { class: 'dossier-stat' },
          el('span', { class: 'dossier-stat-label' }, t('character.label.age')),
          el('strong', { class: 'dossier-stat-value' }, String(age)),
        ),
        el(
          'div',
          { class: 'dossier-stat' },
          el('span', { class: 'dossier-stat-label' }, t('character.label.blood')),
          el('strong', { class: 'dossier-stat-value' }, blood),
        ),
        el(
          'div',
          { class: 'dossier-stat' },
          el('span', { class: 'dossier-stat-label' }, t('character.label.trait')),
          el('strong', { class: 'dossier-stat-value' }, t(`trait.${traitKey}.name`)),
        ),
      ),
    );
  }

  #renderVitals(player) {
    const rows = VITALS.map((vital) => {
      const value = Math.round(player[vital]);
      const band = vitalBand(value);
      return el(
        'div',
        { class: ['vital-row', `band-${band}`] },
        el(
          'div',
          { class: 'vital-head' },
          el('span', { class: 'vital-label' }, t(`status.vital.${vital}`)),
          el('span', { class: 'vital-band-tag' }, t(`status.band.${band}`)),
          el('span', { class: 'vital-value' }, `${value}%`),
        ),
        el(
          'div',
          { class: 'meter-track' },
          el('div', { class: 'meter-fill', style: `width: ${Math.max(0, Math.min(100, value))}%` }),
        ),
      );
    });

    return el(
      'section',
      { class: 'panel-block' },
      el('h3', { class: 'block-title' }, t('status.section.vitals')),
      el('div', { class: 'vitals-list' }, rows),
    );
  }

  #renderAilments(player) {
    const entries = Object.entries(player.ailments);
    const body = entries.length === 0
      ? el('p', { class: 'muted-note' }, t('status.no_ailments'))
      : el(
        'ul',
        { class: 'ailment-list' },
        entries.map(([id, data]) => {
          const def = AILMENTS[id];
          const pct = Math.round(ailmentIntensity(id, data) * 100);
          const detail = this.#describeAilment(id, data);
          return el(
            'li',
            { class: ['ailment-item', `tone-${def.tone}`] },
            el(
              'div',
              { class: 'ailment-head' },
              el('span', { class: 'ailment-glyph' }, def.glyph),
              el('span', { class: 'ailment-name' }, t(`ailment.${id}.name`)),
              el('span', { class: 'ailment-detail' }, detail),
            ),
            el(
              'div',
              { class: 'meter-track meter-thin' },
              el('div', { class: 'meter-fill', style: `width: ${pct}%` }),
            ),
            el('p', { class: 'ailment-desc' }, t(`ailment.${id}.desc`)),
          );
        }),
      );

    return el(
      'section',
      { class: 'panel-block' },
      el('h3', { class: 'block-title' }, t('status.section.conditions')),
      body,
    );
  }

  #describeAilment(id, data) {
    if (id === 'bleeding') return t('ailment.bleeding.severity', { severity: data.severity });
    if (id === 'infection') return `${Math.round(data.progress)}%`;
    if (id === 'sprain') return t('ailment.sprain.remaining', { hours: Math.ceil(data.hours) });
    return '';
  }

  #renderReadout(state) {
    const weapon = weaponProfile(state);
    const weaponLabel = weapon.itemId ? t(`item.${weapon.itemId}.name`) : t('inventory.unarmed');
    const scavengeBonus = Math.round(passiveBonus(state, 'scavengeBonus') * 100);
    const travelBonus = Math.round(passiveBonus(state, 'travelSpeed') * 100);

    const stats = [
      [t('status.readout.weapon'), weapon.loaded ? weaponLabel : `${weaponLabel} (${t('inventory.no_ammo')})`],
      [t('status.readout.combat_rating'), i18n.formatNumber(combatRating(state), 1)],
      [t('status.readout.armor'), String(armorValue(state))],
      [t('status.readout.scavenge_bonus'), `+${scavengeBonus}%`],
      [t('status.readout.travel_bonus'), `+${travelBonus}%`],
    ];

    return el(
      'section',
      { class: 'panel-block' },
      el('h3', { class: 'block-title' }, t('status.section.readout')),
      el(
        'dl',
        { class: 'kv-grid' },
        stats.flatMap(([label, val]) => [
          el('dt', {}, label),
          el('dd', {}, val),
        ]),
      ),
    );
  }

  #renderSkills(state) {
    const rows = SKILL_IDS.map((skillId) => {
      const def = SKILLS[skillId];
      const progress = skillProgress(state, skillId);
      const pct = Math.round(progress.ratio * 100);
      const xpNote = progress.next
        ? `${progress.xp} / ${progress.next} XP`
        : t('skill.max_level');

      return el(
        'div',
        { class: 'skill-row' },
        el(
          'div',
          { class: 'skill-head' },
          el('span', { class: 'skill-glyph' }, def.glyph),
          el('span', { class: 'skill-name' }, t(`skill.${skillId}.name`)),
          el('span', { class: 'skill-level' }, t('skill.level_short', { level: progress.level })),
          el('span', { class: 'skill-xp' }, xpNote),
        ),
        el(
          'div',
          { class: 'meter-track meter-thin' },
          el('div', { class: 'meter-fill', style: `width: ${pct}%` }),
        ),
        el('p', { class: 'skill-desc' }, t(`skill.${skillId}.desc`)),
      );
    });

    return el(
      'section',
      { class: 'panel-block' },
      el('h3', { class: 'block-title' }, t('status.section.skills')),
      el('div', { class: 'skills-list' }, rows),
    );
  }
}



  // --- src/ui/logView.js ---




class LogView {
  #listEl;
  #toastEl;
  #toastTimer = null;

  constructor({ listEl, toastEl }) {
    this.#listEl = listEl;
    this.#toastEl = toastEl;
  }

  render(state) {
    const entries = state.log.slice(-60).reverse();
    const nodes = entries.map((entry) => {
      const { day } = readClock(entry.at);
      const stamp = `${t('hud.day_short', { day })} ${formatClock(entry.at)}`;
      return el(
        'li',
        { class: ['log-entry', `tone-${entry.tone ?? 'plain'}`] },
        el('span', { class: 'log-stamp' }, stamp),
        el('span', { class: 'log-msg' }, t(entry.key, entry.params)),
      );
    });
    this.#listEl.replaceChildren(...nodes);
  }

  flashRejection(reasonKey, params = {}) {
    if (!this.#toastEl) return;
    this.#toastEl.textContent = t(reasonKey, params);
    this.#toastEl.classList.add('is-visible');
    clearTimeout(this.#toastTimer);
    this.#toastTimer = setTimeout(() => {
      this.#toastEl.classList.remove('is-visible');
    }, 2400);
  }
}



  // --- src/data/traits.js ---
const BLOOD_TYPES = ['0-', '0+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'];

const TRAITS = {
  stoic: {
    id: 'stoic',
    glyph: '◆',
  },
  night_owl: {
    id: 'night_owl',
    glyph: '☽',
  },
  fast_metabolism: {
    id: 'fast_metabolism',
    glyph: '⚕',
  },
  hoarder: {
    id: 'hoarder',
    glyph: '▤',
  },
  iron_stomach: {
    id: 'iron_stomach',
    glyph: '🛡',
  },
};

const RANDOM_NAMES = [
  'Deniz',
  'Kerem',
  'Elena',
  'Viktor',
  'Mara',
  'Marcus',
  'Leyla',
  'Nora',
  'Barış',
  'Zehra',
  'Roland',
  'Sarp',
  'Maya',
  'Kaan',
  'Selin',
  'Jax',
  'Silas',
  'Tariq',
  'Cem',
  'Bora',
  'Derya',
  'Aylin',
  'Vera',
  'Iskandar',
];

function getRandomName(exclude = '') {
  const pool = RANDOM_NAMES.filter((name) => name !== exclude);
  return pool[Math.floor(Math.random() * pool.length)] || 'Survivor';
}

function getAgeBracket(age) {
  if (age <= 25) return 'young';
  if (age <= 40) return 'prime';
  return 'veteran';
}



  // --- src/ui/menuView.js ---








class MenuView {
  #root;
  #onContinue;
  #onStartNew;
  #onLocaleChange;
  #name = 'Mara';
  #age = 28;
  #bloodType = 'A+';
  #selectedTrait = 'stoic';
  #selectedArchetype = 'scavenger';
  #selectedLocation = 'istanbul';
  #hasSave = false;
  #savedState = null;
  #mode = 'menu'; // 'menu' | 'create'
  #currentStep = 1; // 1: Identity, 2: Archetype, 3: Sector, 4: Summary

  constructor({ root, onContinue, onStartNew, onLocaleChange }) {
    this.#root = root;
    this.#onContinue = onContinue;
    this.#onStartNew = onStartNew;
    this.#onLocaleChange = onLocaleChange;
  }

  get isOpen() {
    return !this.#root.hidden;
  }

  open({ hasSave, state, mode } = {}) {
    this.#hasSave = Boolean(hasSave && state?.player?.alive);
    this.#savedState = state;
    this.#mode = mode || 'menu';
    this.#currentStep = 1;
    this.#root.hidden = false;
    document.body?.classList.add('is-menu-open');
    this.render();
  }

  close() {
    this.#root.hidden = true;
    document.body?.classList.remove('is-menu-open');
  }

  render() {
    if (this.#root.hidden) return;

    const localeBtn = el(
      'button',
      {
        type: 'button',
        class: 'menu-locale-toggle-btn',
        title: i18n.locale === 'tr' ? 'Switch to English' : 'Türkçe Dilini Seç',
        onClick: () => {
          const nextLocale = i18n.locale === 'tr' ? 'en' : 'tr';
          this.#onLocaleChange(nextLocale);
        },
      },
      el('span', { class: 'menu-locale-icon' }, '🌐'),
      el('span', { class: 'menu-locale-code' }, (i18n.locale || 'en').toUpperCase()),
    );

    const isCreate = this.#mode === 'create';

    const header = el(
      'header',
      { class: 'menu-header' },
      el(
        'div',
        { class: 'menu-top-line' },
        el(
          'div',
          { class: 'menu-signal-line' },
          el('span', { class: 'signal-dot' }),
          el('span', { class: 'menu-signal-label' }, isCreate ? t('character.create_title') : t('menu.kicker')),
        ),
        localeBtn,
      ),
      el('h1', { class: 'menu-title' }, t('app.title')),
      el(
        'p',
        { class: 'menu-lore' },
        isCreate ? t(`character.step_subtitle.${this.#currentStep}`) : t('menu.lore'),
      ),
    );

    let frame;
    if (isCreate) {
      const stepTabs = [
        { step: 1, key: 'character.steps.identity', glyph: '🆔' },
        { step: 2, key: 'character.steps.archetype', glyph: '🎒' },
        { step: 3, key: 'character.steps.sector', glyph: '📍' },
        { step: 4, key: 'character.steps.summary', glyph: '📋' },
      ].map(({ step, key, glyph }) => {
        const isActive = this.#currentStep === step;
        return el(
          'button',
          {
            type: 'button',
            class: ['menu-stepper-tab', isActive && 'is-active'],
            onClick: () => {
              this.#currentStep = step;
              this.render();
            },
          },
          el('span', { class: 'stepper-tab-glyph' }, glyph),
          el('span', { class: 'stepper-tab-label' }, t(key)),
        );
      });

      const stepperBar = el('div', { class: 'menu-stepper-bar' }, stepTabs);
      const stepBody = this.#renderActiveStep();
      const navBar = this.#renderStepNavBar();

      frame = el(
        'div',
        { class: 'menu-frame' },
        header,
        stepperBar,
        el('div', { class: 'menu-body' }, stepBody),
        navBar,
      );
    } else {
      const bodyContent = this.#renderMainMenuScreen();
      frame = el(
        'div',
        { class: 'menu-frame' },
        header,
        el('div', { class: 'menu-body' }, bodyContent),
        el(
          'footer',
          { class: 'menu-footer' },
          el('span', { class: 'menu-footer-sub' }, t('app.subtitle')),
          el('span', { class: 'menu-footer-hint' }, t('menu.footer_hint')),
        ),
      );
    }

    this.#root.replaceChildren(frame);
  }

  #renderActiveStep() {
    switch (this.#currentStep) {
      case 1:
        return this.#renderStepIdentity();
      case 2:
        return this.#renderStepArchetype();
      case 3:
        return this.#renderStepSector();
      case 4:
      default:
        return this.#renderStepSummary();
    }
  }

  #renderMainMenuScreen() {
    if (this.#hasSave && this.#savedState) {
      const continueSection = this.#renderContinueCard(this.#savedState);

      const newExpeditionPrompt = el(
        'section',
        { class: 'menu-section menu-prompt-card' },
        el(
          'div',
          { class: 'menu-prompt-copy' },
          el('h2', { class: 'block-title' }, t('menu.new_expedition_title')),
          el('p', { class: 'muted-note' }, t('character.create_subtitle')),
        ),
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-ghost menu-cta-btn',
            onClick: () => {
              this.#mode = 'create';
              this.#currentStep = 1;
              this.render();
            },
          },
          t('menu.action.create_character'),
        ),
      );

      return [continueSection, newExpeditionPrompt];
    }

    // No save: Present prominent New Game landing card
    const newGameCard = el(
      'section',
      { class: 'menu-section menu-welcome-card' },
      el(
        'div',
        { class: 'menu-welcome-header' },
        el('span', { class: 'meta-label' }, t('menu.no_save_title')),
        el('h2', { class: 'menu-welcome-title' }, t('menu.new_expedition_title')),
      ),
      el('p', { class: 'menu-welcome-lore' }, t('menu.no_save_desc')),
      el(
        'button',
        {
          type: 'button',
          class: 'btn btn-accent menu-cta-btn menu-cta-large',
          onClick: () => {
            this.#mode = 'create';
            this.#currentStep = 1;
            this.render();
          },
        },
        t('menu.action.new_game'),
      ),
    );

    return [newGameCard];
  }

  #renderContinueCard(state) {
    const { day } = readClock(state.time.minutes);
    const clock = formatClock(state.time.minutes);
    const location = t(`location.${state.world.currentNodeId}`);
    const hp = Math.round(state.player.health);
    const charted = Object.values(state.world.nodes).filter((n) => n.visited).length;
    const name = state.player?.name || t('character.default_name');
    const archetypeKey = state.player?.archetype || 'scavenger';

    return el(
      'section',
      { class: 'menu-section menu-continue-card' },
      el(
        'div',
        { class: 'menu-continue-info' },
        el(
          'div',
          { class: 'menu-continue-header-line' },
          el('span', { class: 'meta-label' }, t('menu.active_transmission')),
          el('span', { class: 'menu-continue-tag' }, `${name.toUpperCase()} // ${t(`menu.archetype.${archetypeKey}.name`)}`),
        ),
        el('h2', { class: 'menu-continue-title' }, `${location} — ${t('hud.day', { day })} · ${clock}`),
        el(
          'div',
          { class: 'route-meta menu-continue-stats' },
          el('span', {}, `${t('status.vital.health')}: ${hp}%`),
          el('span', {}, `·`),
          el('span', {}, `${t('menu.charted_sectors', { count: charted })}`),
        ),
      ),
      el(
        'button',
        {
          type: 'button',
          class: 'btn btn-accent menu-cta-btn',
          onClick: () => this.#onContinue(),
        },
        t('menu.action.continue'),
      ),
    );
  }

  #renderStepIdentity() {
    // Name & Randomize
    const nameInput = el('input', {
      type: 'text',
      class: 'menu-text-input',
      maxlength: '24',
      value: this.#name,
      placeholder: t('character.placeholder.name'),
      onInput: (e) => {
        this.#name = e.target.value;
      },
    });

    const randomNameBtn = el(
      'button',
      {
        type: 'button',
        class: 'btn btn-ghost menu-random-btn',
        onClick: () => {
          this.#name = getRandomName(this.#name);
          nameInput.value = this.#name;
        },
      },
      t('character.action.random_name'),
    );

    // Age & Bracket
    const ageBracket = getAgeBracket(this.#age);
    const ageValueBadge = el('strong', { class: 'menu-badge-val' }, `${this.#age}`);
    const ageBracketDesc = el('span', { class: 'menu-sub-note' }, t(`character.age_bracket.${ageBracket}`));

    const ageSlider = el('input', {
      type: 'range',
      class: 'menu-range-slider',
      min: '18',
      max: '65',
      value: String(this.#age),
      onInput: (e) => {
        this.#age = Number(e.target.value);
        ageValueBadge.textContent = `${this.#age}`;
        const nextBracket = getAgeBracket(this.#age);
        ageBracketDesc.textContent = t(`character.age_bracket.${nextBracket}`);
      },
    });

    // Blood Type
    const bloodChips = BLOOD_TYPES.map((type) => {
      const isSelected = this.#bloodType === type;
      return el(
        'button',
        {
          type: 'button',
          class: ['menu-blood-chip', isSelected && 'is-selected'],
          onClick: () => {
            this.#bloodType = type;
            this.render();
          },
        },
        type,
      );
    });

    // Traits
    const traitCards = Object.entries(TRAITS).map(([id, def]) => {
      const isSelected = this.#selectedTrait === id;
      return el(
        'button',
        {
          type: 'button',
          class: ['menu-trait-card', isSelected && 'is-selected'],
          onClick: () => {
            this.#selectedTrait = id;
            this.render();
          },
        },
        el(
          'div',
          { class: 'menu-option-head' },
          el('span', { class: 'item-glyph' }, def.glyph),
          el('strong', { class: 'menu-option-name' }, t(`trait.${id}.name`)),
          isSelected && el('span', { class: 'menu-check-badge' }, '✓'),
        ),
        el('p', { class: 'menu-option-desc' }, t(`trait.${id}.desc`)),
      );
    });

    return el(
      'section',
      { class: 'menu-section menu-step-section' },
      el('h2', { class: 'block-title' }, t('character.label.identity')),
      el(
        'div',
        { class: 'menu-form-row' },
        el(
          'div',
          { class: 'menu-form-col' },
          el('label', { class: 'meta-label' }, t('character.label.name')),
          el('div', { class: 'menu-input-cluster' }, nameInput, randomNameBtn),
        ),
        el(
          'div',
          { class: 'menu-form-col' },
          el(
            'div',
            { class: 'menu-label-spread' },
            el('label', { class: 'meta-label' }, t('character.label.age')),
            ageValueBadge,
          ),
          ageSlider,
          ageBracketDesc,
        ),
      ),
      el('div', { class: 'menu-label-row' }, el('label', { class: 'meta-label' }, t('character.label.blood'))),
      el('div', { class: 'menu-blood-grid' }, bloodChips),
      el('div', { class: 'menu-label-row' }, el('label', { class: 'meta-label' }, t('character.label.trait'))),
      el('div', { class: 'menu-trait-grid' }, traitCards),
    );
  }

  #renderStepArchetype() {
    const archetypeCards = Object.entries(ARCHETYPES).map(([id, def]) => {
      const isSelected = this.#selectedArchetype === id;
      const itemLabels = def.kit
        .map(({ itemId, qty }) => `${t(`item.${itemId}.name`)}${qty > 1 ? ` ×${qty}` : ''}`)
        .join(' · ');

      return el(
        'button',
        {
          type: 'button',
          class: ['menu-option-card', isSelected && 'is-selected'],
          onClick: () => {
            this.#selectedArchetype = id;
            this.render();
          },
        },
        el(
          'div',
          { class: 'menu-option-head' },
          el('span', { class: 'item-glyph' }, def.glyph),
          el('strong', { class: 'menu-option-name' }, t(`menu.archetype.${id}.name`)),
          isSelected && el('span', { class: 'menu-check-badge' }, '✓'),
        ),
        el('p', { class: 'menu-option-desc' }, t(`menu.archetype.${id}.desc`)),
        el('span', { class: 'menu-option-kit' }, `📦 ${itemLabels}`),
      );
    });

    return el(
      'section',
      { class: 'menu-section menu-step-section' },
      el('h2', { class: 'block-title' }, t('character.label.archetype')),
      el('div', { class: 'menu-archetype-grid' }, archetypeCards),
    );
  }

  #renderStepSector() {
    const locationChips = STARTING_LOCATIONS.map((nodeId) => {
      const node = getNode(nodeId);
      const isSelected = this.#selectedLocation === nodeId;
      return el(
        'button',
        {
          type: 'button',
          class: ['menu-sector-chip', isSelected && 'is-selected'],
          onClick: () => {
            this.#selectedLocation = nodeId;
            this.render();
          },
        },
        el(
          'div',
          { class: 'sector-chip-top' },
          el('span', { class: 'sector-chip-name' }, t(`location.${nodeId}`)),
          isSelected && el('span', { class: 'menu-check-badge' }, '✓'),
        ),
        el(
          'span',
          { class: 'sector-chip-meta' },
          `${t(`biome.${node.biome}`)} · ${'▲'.repeat(node.danger)}`,
        ),
      );
    });

    return el(
      'section',
      { class: 'menu-section menu-step-section' },
      el('h2', { class: 'block-title' }, t('character.label.sector')),
      el('div', { class: 'menu-sector-grid' }, locationChips),
    );
  }

  #renderStepSummary() {
    const finalName = (this.#name.trim() || t('character.default_name')).toUpperCase();
    const archetype = ARCHETYPES[this.#selectedArchetype] || ARCHETYPES.scavenger;
    const node = getNode(this.#selectedLocation);

    const kitSummary = archetype.kit
      .map(({ itemId, qty }) => `${t(`item.${itemId}.name`)}${qty > 1 ? ` ×${qty}` : ''}`)
      .join(', ');

    const dossierCard = el(
      'div',
      { class: 'menu-live-dossier' },
      el(
        'div',
        { class: 'live-dossier-header' },
        el('span', { class: 'live-dossier-kicker' }, t('character.label.dossier_preview')),
        el(
          'strong',
          { class: 'live-dossier-callsign' },
          `${finalName} // ${t(`menu.archetype.${this.#selectedArchetype}.name`)}`,
        ),
      ),
      el(
        'div',
        { class: 'live-dossier-meta' },
        el('span', {}, `${t('character.label.age')}: ${this.#age}`),
        el('span', {}, `·`),
        el('span', {}, `${t('character.label.blood')}: ${this.#bloodType}`),
        el('span', {}, `·`),
        el('span', {}, `${t('character.label.trait')}: ${t(`trait.${this.#selectedTrait}.name`)}`),
        el('span', {}, `·`),
        el(
          'span',
          {},
          `${t('character.label.sector')}: ${t(`location.${this.#selectedLocation}`)} (${t(`biome.${node.biome}`)})`,
        ),
      ),
      el('div', { class: 'live-dossier-kit' }, `📦 ${t('character.label.archetype')}: ${kitSummary}`),
    );

    return el(
      'section',
      { class: 'menu-section menu-step-section' },
      el('h2', { class: 'block-title' }, t('character.label.dossier_preview')),
      dossierCard,
    );
  }

  #renderStepNavBar() {
    const isFirstStep = this.#currentStep === 1;
    const isLastStep = this.#currentStep === 4;

    const leftBtn = isFirstStep
      ? el(
          'button',
          {
            type: 'button',
            class: 'btn btn-ghost menu-nav-btn',
            onClick: () => {
              this.#mode = 'menu';
              this.render();
            },
          },
          t('character.action.back_to_menu'),
        )
      : el(
          'button',
          {
            type: 'button',
            class: 'btn btn-ghost menu-nav-btn',
            onClick: () => {
              this.#currentStep = Math.max(1, this.#currentStep - 1);
              this.render();
            },
          },
          t('character.action.prev'),
        );

    const rightBtn = isLastStep
      ? el(
          'button',
          {
            type: 'button',
            class: 'btn btn-accent menu-nav-btn menu-deploy-btn',
            onClick: () => {
              const finalName = this.#name.trim() || t('character.default_name');
              this.#onStartNew({
                name: finalName,
                age: this.#age,
                bloodType: this.#bloodType,
                trait: this.#selectedTrait,
                archetypeId: this.#selectedArchetype,
                locationId: this.#selectedLocation,
              });
            },
          },
          t('character.action.deploy'),
        )
      : el(
          'button',
          {
            type: 'button',
            class: 'btn btn-accent menu-nav-btn',
            onClick: () => {
              this.#currentStep = Math.min(4, this.#currentStep + 1);
              this.render();
            },
          },
          t('character.action.next'),
        );

    return el('div', { class: 'menu-step-nav-bar' }, leftBtn, rightBtn);
  }
}


  // --- src/ui/lootModalView.js ---





class LootModalView {
  #root;
  #engine;
  #current = null;
  #selectedMap = new Map(); // index -> boolean

  constructor(root, engine) {
    this.#root = root;
    this.#engine = engine;
  }

  get isOpen() {
    return !this.#root.hidden;
  }

  open({ type, titleKey, descKey, descParams = {}, items = [], nodeId, onConfirm }) {
    this.#current = {
      type,
      titleKey,
      descKey,
      descParams,
      items,
      nodeId,
      onConfirm,
    };
    this.#selectedMap.clear();
    // Default: select all discovered items
    items.forEach((_, idx) => this.#selectedMap.set(idx, true));
    this.#root.hidden = false;
    this.render();
  }

  close() {
    this.#root.hidden = true;
    this.#current = null;
    this.#selectedMap.clear();
  }

  render() {
    if (this.#root.hidden || !this.#current) return;

    const { titleKey, descKey, descParams, items, onConfirm } = this.#current;
    const state = this.#engine.store.state;
    const summary = loadSummary(state);

    const hasItems = items.length > 0;

    // Calculate selected weight
    let selectedWeight = 0;
    let selectedCount = 0;
    items.forEach((item, idx) => {
      if (this.#selectedMap.get(idx)) {
        const itemDef = getItem(item.itemId);
        selectedWeight += itemDef.weight * item.qty;
        selectedCount += 1;
      }
    });

    const projectedWeight = summary.weight + selectedWeight;
    const isOverload = projectedWeight > summary.capacityKg;

    // Header
    const kickerText = t(titleKey);
    const descText = t(descKey, descParams);

    // Items list
    const itemRows = items.map((item, idx) => {
      const def = getItem(item.itemId);
      const isSelected = Boolean(this.#selectedMap.get(idx));
      const totalItemWeight = i18n.formatNumber(def.weight * item.qty, 2);

      return el(
        'div',
        {
          class: ['loot-item-row', isSelected && 'is-selected'],
          onClick: () => {
            this.#selectedMap.set(idx, !isSelected);
            this.render();
          },
        },
        el(
          'div',
          { class: 'loot-item-check-col' },
          el('input', {
            type: 'checkbox',
            class: 'loot-item-checkbox',
            checked: isSelected,
            onChange: (e) => {
              this.#selectedMap.set(idx, e.target.checked);
              this.render();
            },
          }),
        ),
        el('span', { class: 'item-glyph' }, def.glyph),
        el(
          'div',
          { class: 'loot-item-details' },
          el(
            'div',
            { class: 'loot-item-title-line' },
            el('strong', { class: 'loot-item-name' }, t(`item.${item.itemId}.name`)),
            el('span', { class: 'loot-item-qty' }, `×${item.qty}`),
          ),
          el('span', { class: 'loot-item-weight' }, `${totalItemWeight} kg`),
        ),
        el(
          'button',
          {
            type: 'button',
            class: ['btn', 'btn-xs', isSelected ? 'btn-accent' : 'btn-ghost'],
          },
          isSelected ? '✓' : '−',
        ),
      );
    });

    // Capacity bar
    const capacityText = t('loot.load_status', {
      current: i18n.formatNumber(summary.weight, 1),
      max: i18n.formatNumber(summary.capacityKg, 1),
      selected: i18n.formatNumber(selectedWeight, 2),
    });

    const capacityCard = hasItems
      ? el(
          'div',
          { class: ['loot-capacity-bar', isOverload && 'is-overload'] },
          el('span', { class: 'loot-capacity-label' }, capacityText),
          isOverload && el('span', { class: 'loot-overload-alert' }, t('loot.overload_warning')),
        )
      : null;

    // Action buttons
    let actionButtons = [];
    if (hasItems) {
      actionButtons = [
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-ghost loot-action-btn',
            onClick: () => {
              // Leave all
              const left = [...items];
              this.close();
              onConfirm?.([], left);
            },
          },
          t('loot.action.leave_all'),
        ),
        el(
          'button',
          {
            type: 'button',
            class: ['btn', 'loot-action-btn', selectedCount === 0 && 'is-disabled'],
            disabled: selectedCount === 0,
            onClick: () => {
              const taken = [];
              const left = [];
              items.forEach((it, idx) => {
                if (this.#selectedMap.get(idx)) taken.push(it);
                else left.push(it);
              });
              this.close();
              onConfirm?.(taken, left);
            },
          },
          t('loot.action.take_selected', { count: selectedCount }),
        ),
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-accent loot-action-btn',
            onClick: () => {
              const taken = [...items];
              this.close();
              onConfirm?.(taken, []);
            },
          },
          t('loot.action.take_all'),
        ),
      ];
    } else {
      actionButtons = [
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-accent loot-action-btn',
            onClick: () => {
              this.close();
              onConfirm?.([], []);
            },
          },
          t('loot.action.close'),
        ),
      ];
    }

    const card = el(
      'div',
      { class: 'action-modal-card' },
      el('div', { class: 'action-modal-header' }, el('h3', { class: 'action-modal-title' }, kickerText)),
      el('p', { class: 'action-modal-desc' }, descText),
      hasItems
        ? el('div', { class: 'loot-items-list' }, itemRows)
        : el('div', { class: 'loot-empty-note' }, t('loot.no_items')),
      capacityCard,
      el('div', { class: 'action-modal-footer' }, actionButtons),
    );

    this.#root.replaceChildren(card);
  }
}



  // --- src/main.js ---





























function createNewRunState({
  engine,
  seed,
  name = 'Mara',
  age = 28,
  bloodType = 'A+',
  trait = 'stoic',
  archetypeId = 'scavenger',
  locationId = 'istanbul',
}) {
  const fresh = engine.createInitialState(createBaseState(seed));
  const locId = getNode(locationId) ? locationId : 'istanbul';

  fresh.world.currentNodeId = locId;
  fresh.world.selectedNodeId = locId;
  fresh.world.nodes = {};
  fresh.world.nodes[locId] = { visited: true, known: true, depletion: 0, scavenges: 0 };
  for (const edge of neighborsOf(locId)) {
    fresh.world.nodes[edge.to] = { visited: false, known: true, depletion: 0, scavenges: 0 };
  }

  // Survivor identity & traits
  fresh.player.name = name;
  fresh.player.age = age;
  fresh.player.bloodType = bloodType;
  fresh.player.trait = trait;
  fresh.player.archetype = archetypeId;

  const arch = ARCHETYPES[archetypeId] || ARCHETYPES.scavenger;
  fresh.inventory.equipment = {
    weapon: arch.equipment?.weapon || null,
    body: arch.equipment?.body || null,
    pack: arch.equipment?.pack || null,
  };
  fresh.inventory.stacks = [];
  fresh.inventory.ground = fresh.inventory.ground || {};
  for (const { itemId, qty } of arch.kit || []) {
    const res = addItem(fresh.inventory, itemId, qty);
    fresh.inventory = res.inventory;
  }
  if (arch.skills) {
    for (const [skillId, xp] of Object.entries(arch.skills)) {
      if (fresh.skills && fresh.skills[skillId]) {
        fresh.skills[skillId].xp = xp;
      }
    }
  }

  return fresh;
}

async function bootstrap() {
  if (globalThis.__LAST_BREATH_EN__) {
    i18n.register('en', globalThis.__LAST_BREATH_EN__);
  }
  if (globalThis.__LAST_BREATH_TR__) {
    i18n.register('tr', globalThis.__LAST_BREATH_TR__);
  }
  const preferredLocale = readPreferredLocale();
  await i18n.setLocale(preferredLocale);

  const bus = new EventBus();
  const seed = randomSeed();
  const rng = new Rng(seed);
  const effects = new EffectRegistry();
  const store = new Store({}, bus);
  const engine = new Engine({ bus, store, rng, effects });

  engine
    .register(coreModule)
    .register(skillsModule)
    .register(inventoryModule)
    .register(statusModule)
    .register(mapModule)
    .register(combatModule)
    .register(craftingModule)
    .register(baseModule);

  const saveManager = new SaveManager({ store, rng });
  const defaultState = createNewRunState({ engine, seed, archetypeId: 'scavenger', locationId: 'istanbul' });
  const saved = saveManager.load();
  let hasValidSave = false;

  if (saved && saved.state) {
    rng.reseed(saved.rng);
    const hydrated = engine.hydrateState(defaultState, saved.state);
    store.replace(hydrated);
    hasValidSave = Boolean(hydrated.player?.alive);
  } else {
    store.replace(defaultState);
  }
  saveManager.watch(bus);

  const mapView = new MapView({
    viewportEl: document.getElementById('map-viewport'),
    dossierEl: document.getElementById('map-dossier'),
    encounterHostEl: document.getElementById('encounter-host'),
    engine,
  });
  await mapView.mount(globalThis.__LAST_BREATH_WORLD_SVG__ ?? null);

  const inventoryView = new InventoryView(document.getElementById('inventory-root'), engine);
  const craftBaseView = new CraftBaseView(document.getElementById('craft-root'), engine);
  const statusView = new StatusView(document.getElementById('status-root'));
  const logView = new LogView({
    listEl: document.getElementById('log-list'),
    toastEl: document.getElementById('toast-banner'),
  });
  const lootModalView = new LootModalView(document.getElementById('action-modal'), engine);

  const menuView = new MenuView({
    root: document.getElementById('main-menu'),
    onContinue: () => {
      menuView.close();
      mapView.centerOnNode(store.state.world.currentNodeId, 3.2);
    },
    onStartNew: ({ name, age, bloodType, trait, archetypeId, locationId }) => {
      const newSeed = randomSeed();
      rng.reseed(newSeed);
      saveManager.clear();
      const fresh = createNewRunState({
        engine,
        seed: newSeed,
        name,
        age,
        bloodType,
        trait,
        archetypeId,
        locationId,
      });
      store.replace(fresh);
      engine.log('log.boot.awakened', {
        location: ref(`location.${store.state.world.currentNodeId}`),
      });
      saveManager.save();
      lootModalView.close();
      menuView.close();
      mapView.centerOnNode(store.state.world.currentNodeId, 3.2);
    },
    onLocaleChange: async (nextCode) => {
      storePreferredLocale(nextCode);
      await i18n.setLocale(nextCode);
      const indicator = document.getElementById('locale-indicator');
      if (indicator) indicator.textContent = nextCode.toUpperCase();
    },
  });

  bindTopControls({ engine, store, rng, saveManager, mapView, menuView });
  bindMapControls(mapView, store);
  bindNavigationTabs();

  const renderAll = () => {
    const { state } = store;
    i18n.translateTree(document);
    renderHudHeader(state);
    mapView.render(state);
    inventoryView.render(state);
    craftBaseView.render(state);
    statusView.render(state);
    logView.render(state);
    renderDeathModal(state, menuView);
    const indicator = document.getElementById('locale-indicator');
    if (indicator) indicator.textContent = (i18n.locale || 'en').toUpperCase();
    if (menuView.isOpen) {
      menuView.render();
    }
    if (lootModalView.isOpen) {
      lootModalView.render();
    }
  };

  bus.on('loot:modal', (payload) => lootModalView.open(payload));
  bus.on('state:changed', renderAll);
  bus.on('action:rejected', ({ reason, params }) => logView.flashRejection(reason, params));
  bus.on('state:committed', ({ type, payload }) => {
    if (type === 'world/visitNode') mapView.centerOnNode(payload, 3.2);
  });
  i18n.onChange(renderAll);

  renderAll();
  mapView.centerOnNode(store.state.world.currentNodeId, 3.2);

  // Open the main menu on initial boot so survivor can choose to continue or customize a new run
  menuView.open({ hasSave: hasValidSave, state: store.state });
}

function renderHudHeader(state) {
  const { day } = readClock(state.time.minutes);
  const nameEl = document.getElementById('hud-name');
  const clockEl = document.getElementById('hud-clock');
  const dayEl = document.getElementById('hud-day');
  const phaseEl = document.getElementById('hud-phase');
  const locEl = document.getElementById('hud-location');

  if (nameEl) {
    nameEl.textContent = (state.player.name || t('character.default_name')).toUpperCase();
  }
  dayEl.textContent = t('hud.day', { day });
  clockEl.textContent = formatClock(state.time.minutes);
  const night = isNight(state.time.minutes);
  phaseEl.textContent = night ? t('hud.night') : t('hud.daylight');
  phaseEl.classList.toggle('is-night', night);
  locEl.textContent = t(`location.${state.world.currentNodeId}`);

  const stripEl = document.getElementById('hud-vitals-strip');
  for (const vital of VITALS) {
    const val = Math.round(state.player[vital]);
    const pill = stripEl.querySelector(`[data-vital="${vital}"]`);
    if (!pill) continue;
    pill.className = `hud-vital-pill band-${vitalBand(val)}`;
    pill.querySelector('.pill-val').textContent = `${val}%`;
  }
}

function renderDeathModal(state) {
  const modal = document.getElementById('death-modal');
  if (state.player.alive) {
    modal.hidden = true;
    return;
  }
  modal.hidden = false;
  const causeEl = document.getElementById('death-cause');
  const summaryEl = document.getElementById('death-summary');
  const days = i18n.formatNumber(daysElapsed(state.player.diedAt ?? state.time.minutes), 1);
  const visitedCount = Object.values(state.world.nodes).filter((node) => node.visited).length;
  const survivorName = (state.player.name || t('character.default_name')).toUpperCase();

  causeEl.textContent = t(`death.cause.${state.player.causeOfDeath ?? 'wounds'}`);
  summaryEl.textContent = `${survivorName} · ${t('death.summary', {
    days,
    nodes: visitedCount,
    location: t(`location.${state.world.currentNodeId}`),
  })}`;
}

function bindTopControls({ engine, store, rng, saveManager, mapView, menuView }) {
  const toggleBtn = document.getElementById('btn-locale-toggle');
  const indicator = document.getElementById('locale-indicator');

  const updateLocaleUi = () => {
    if (indicator) {
      indicator.textContent = (i18n.locale || 'en').toUpperCase();
    }
    if (toggleBtn) {
      toggleBtn.title = i18n.locale === 'tr' ? 'Switch Language (EN)' : 'Dili Değiştir (TR)';
      toggleBtn.setAttribute('aria-label', toggleBtn.title);
    }
  };

  updateLocaleUi();

  if (toggleBtn) {
    toggleBtn.addEventListener('click', async () => {
      const nextCode = i18n.locale === 'tr' ? 'en' : 'tr';
      storePreferredLocale(nextCode);
      await i18n.setLocale(nextCode);
      updateLocaleUi();
    });
  }

  const openBtn = document.getElementById('btn-open-menu');
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      menuView.open({ hasSave: store.state.player?.alive, state: store.state });
    });
  }

  const newRunBtn = document.getElementById('btn-new-run');
  if (newRunBtn) {
    newRunBtn.addEventListener('click', () => {
      menuView.open({ hasSave: false, state: store.state, mode: 'create' });
    });
  }

  const deathRestartBtn = document.getElementById('btn-death-restart');
  if (deathRestartBtn) {
    deathRestartBtn.addEventListener('click', () => {
      document.getElementById('death-modal').hidden = true;
      menuView.open({ hasSave: false, state: store.state, mode: 'create' });
    });
  }
}

function bindMapControls(mapView, store) {
  document.getElementById('map-zoom-in').addEventListener('click', () => mapView.zoomBy(1.35));
  document.getElementById('map-zoom-out').addEventListener('click', () => mapView.zoomBy(1 / 1.35));
  document.getElementById('map-center').addEventListener('click', () =>
    mapView.centerOnNode(store.state.world.currentNodeId, 3.2),
  );
  document.getElementById('map-world').addEventListener('click', () => mapView.resetZoom());
}

function bindNavigationTabs() {
  const tabButtons = document.querySelectorAll('[data-tab-target]');
  const panels = document.querySelectorAll('[data-tab-panel]');
  const rightButtons = document.querySelectorAll('[data-right-tab]');

  const activateRightPane = (target) => {
    for (const btn of rightButtons) {
      btn.classList.toggle('is-active', btn.dataset.rightTab === target);
    }
    const invPane = document.querySelector('[data-tab-panel="inventory"]');
    const craftPane = document.querySelector('[data-tab-panel="craft"]');
    if (invPane && craftPane) {
      invPane.classList.toggle('is-desktop-right-hidden', target !== 'inventory');
      craftPane.classList.toggle('is-desktop-right-hidden', target !== 'craft');
    }
  };

  for (const button of rightButtons) {
    button.addEventListener('click', () => activateRightPane(button.dataset.rightTab));
  }

  for (const button of tabButtons) {
    button.addEventListener('click', () => {
      const target = button.dataset.tabTarget;
      for (const btn of tabButtons) btn.classList.toggle('is-active', btn === button);
      for (const panel of panels) {
        panel.classList.toggle('is-active-panel', panel.dataset.tabPanel === target);
      }
      if (target === 'inventory' || target === 'craft') {
        activateRightPane(target);
      }
    });
  }
}

bootstrap().catch((error) => {
  console.error('[boot] failed to initialize Last Breath', error);
  const toastEl = document.getElementById('toast-banner');
  if (toastEl) {
    toastEl.textContent = `BOOT ERROR: ${error.message || error}`;
    toastEl.classList.add('is-visible');
  }
});

})();
