/**
 * Country-exclusive items (528 items across 48 countries).
 * Each item is tagged with `countryExclusive` and only drops in its home country.
 */
export const COUNTRY_EXCLUSIVE_ITEMS = {
  "tr_sucuk_ration": {
    "countryExclusive": "Turkey",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "tr_pestil_bars": {
    "countryExclusive": "Turkey",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "tr_salgam_bottle": {
    "countryExclusive": "Turkey",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "tr_kantaron_oil": {
    "countryExclusive": "Turkey",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "tr_kekik_antiseptic": {
    "countryExclusive": "Turkey",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "tr_yatagan_blade": {
    "countryExclusive": "Turkey",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "tr_sarsilmaz_9mm": {
    "countryExclusive": "Turkey",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "tr_kepenek_coat": {
    "countryExclusive": "Turkey",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "tr_toros_pack": {
    "countryExclusive": "Turkey",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "tr_boron_cell": {
    "countryExclusive": "Turkey",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "tr_iznik_insulator": {
    "countryExclusive": "Turkey",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "gr_paximadi_rusk": {
    "countryExclusive": "Greece",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "gr_pasteli_bar": {
    "countryExclusive": "Greece",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "gr_mountain_tea": {
    "countryExclusive": "Greece",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "gr_mastic_salve": {
    "countryExclusive": "Greece",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "gr_olive_iodine": {
    "countryExclusive": "Greece",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "gr_kopis_machete": {
    "countryExclusive": "Greece",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "gr_hellenic_g3": {
    "countryExclusive": "Greece",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "gr_epirus_cloak": {
    "countryExclusive": "Greece",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "gr_aegean_drybag": {
    "countryExclusive": "Greece",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "gr_piraeus_relay": {
    "countryExclusive": "Greece",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "gr_pentelic_flux": {
    "countryExclusive": "Greece",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "bg_lukanka_pack": {
    "countryExclusive": "Bulgaria",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "bg_halva_tin": {
    "countryExclusive": "Bulgaria",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "bg_boza_flask": {
    "countryExclusive": "Bulgaria",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "bg_rose_oil_balm": {
    "countryExclusive": "Bulgaria",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "bg_balkan_propolis": {
    "countryExclusive": "Bulgaria",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "bg_haiduk_knife": {
    "countryExclusive": "Bulgaria",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "bg_arsenal_ak": {
    "countryExclusive": "Bulgaria",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "bg_rodopi_parka": {
    "countryExclusive": "Bulgaria",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "bg_rila_pack": {
    "countryExclusive": "Bulgaria",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "bg_sofiya_capacitor": {
    "countryExclusive": "Bulgaria",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "bg_kremikovtzi_steel": {
    "countryExclusive": "Bulgaria",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "ro_tochitura_tin": {
    "countryExclusive": "Romania",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "ro_covrigi_pack": {
    "countryExclusive": "Romania",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "ro_borsec_water": {
    "countryExclusive": "Romania",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "ro_comfrey_salve": {
    "countryExclusive": "Romania",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "ro_silver_colloid": {
    "countryExclusive": "Romania",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "ro_dacian_falx": {
    "countryExclusive": "Romania",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "ro_cugir_wasr": {
    "countryExclusive": "Romania",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "ro_carpathian_coat": {
    "countryExclusive": "Romania",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "ro_bucegi_pack": {
    "countryExclusive": "Romania",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "ro_ploiesti_valve": {
    "countryExclusive": "Romania",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "ro_danube_cable": {
    "countryExclusive": "Romania",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "ua_salo_ration": {
    "countryExclusive": "Ukraine",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "ua_buckwheat_bar": {
    "countryExclusive": "Ukraine",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "ua_uzvar_canteen": {
    "countryExclusive": "Ukraine",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "ua_chernozem_gel": {
    "countryExclusive": "Ukraine",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "ua_iodine_tablets": {
    "countryExclusive": "Ukraine",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "ua_cossack_shashka": {
    "countryExclusive": "Ukraine",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "ua_fort221_rifle": {
    "countryExclusive": "Ukraine",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "ua_korsar_vest": {
    "countryExclusive": "Ukraine",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "ua_dnipro_pack": {
    "countryExclusive": "Ukraine",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "ua_antonov_servo": {
    "countryExclusive": "Ukraine",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "ua_kryvyi_plate": {
    "countryExclusive": "Ukraine",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "at_gulasch_tin": {
    "countryExclusive": "Austria",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "at_manner_wafer": {
    "countryExclusive": "Austria",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "at_almdudler_flask": {
    "countryExclusive": "Austria",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "at_tyrol_arnica": {
    "countryExclusive": "Austria",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "at_vienna_antiseptic": {
    "countryExclusive": "Austria",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "at_glock_fm78": {
    "countryExclusive": "Austria",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "at_steyr_aug": {
    "countryExclusive": "Austria",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "at_alpen_goretex": {
    "countryExclusive": "Austria",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "at_innsbruck_pack": {
    "countryExclusive": "Austria",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "at_voestalpine_chip": {
    "countryExclusive": "Austria",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "at_styrian_spring": {
    "countryExclusive": "Austria",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "de_epas_ration": {
    "countryExclusive": "Germany",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "de_pumpernickel": {
    "countryExclusive": "Germany",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "de_apfelschorle": {
    "countryExclusive": "Germany",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "de_bayer_gel": {
    "countryExclusive": "Germany",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "de_charite_kit": {
    "countryExclusive": "Germany",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "de_solingen_bowie": {
    "countryExclusive": "Germany",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "de_hk_g36c": {
    "countryExclusive": "Germany",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "de_flecktarn_smock": {
    "countryExclusive": "Germany",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "de_ruhr_pack": {
    "countryExclusive": "Germany",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "de_siemens_plc": {
    "countryExclusive": "Germany",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "de_krupp_bearing": {
    "countryExclusive": "Germany",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "fr_rcir_ration": {
    "countryExclusive": "France",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "fr_biscotte_pack": {
    "countryExclusive": "France",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "fr_evian_canteen": {
    "countryExclusive": "France",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "fr_pasteur_serum": {
    "countryExclusive": "France",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "fr_lavande_tincture": {
    "countryExclusive": "France",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "fr_laguiole_folder": {
    "countryExclusive": "France",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "fr_famas_f1": {
    "countryExclusive": "France",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "fr_chasseur_cape": {
    "countryExclusive": "France",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "fr_legion_pack": {
    "countryExclusive": "France",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "fr_areva_cell": {
    "countryExclusive": "France",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "fr_lyon_wire": {
    "countryExclusive": "France",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "uk_orp_ration": {
    "countryExclusive": "United Kingdom",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "uk_shortbread_tin": {
    "countryExclusive": "United Kingdom",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "uk_earl_grey_flask": {
    "countryExclusive": "United Kingdom",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "uk_nhs_trauma": {
    "countryExclusive": "United Kingdom",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "uk_tcp_antiseptic": {
    "countryExclusive": "United Kingdom",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "uk_fairbairn_dagger": {
    "countryExclusive": "United Kingdom",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "uk_sa80_l85a2": {
    "countryExclusive": "United Kingdom",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "uk_waxed_barbour": {
    "countryExclusive": "United Kingdom",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "uk_bergen_pack": {
    "countryExclusive": "United Kingdom",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "uk_sheffield_blade": {
    "countryExclusive": "United Kingdom",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "uk_thames_brass": {
    "countryExclusive": "United Kingdom",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "es_fabada_tin": {
    "countryExclusive": "Spain",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "es_turron_bar": {
    "countryExclusive": "Spain",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "es_horchata_flask": {
    "countryExclusive": "Spain",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "es_olive_salve": {
    "countryExclusive": "Spain",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "es_madrid_iodine": {
    "countryExclusive": "Spain",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "es_navaja_knife": {
    "countryExclusive": "Spain",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "es_cetme_c": {
    "countryExclusive": "Spain",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "es_pyrenees_jacket": {
    "countryExclusive": "Spain",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "es_camino_pack": {
    "countryExclusive": "Spain",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "es_bilbao_inverter": {
    "countryExclusive": "Spain",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "es_toledo_spring": {
    "countryExclusive": "Spain",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "pt_bacalhau_tin": {
    "countryExclusive": "Portugal",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "pt_pastel_ration": {
    "countryExclusive": "Portugal",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "pt_agua_pedras": {
    "countryExclusive": "Portugal",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "pt_eucalyptus_balm": {
    "countryExclusive": "Portugal",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "pt_atlantic_saline": {
    "countryExclusive": "Portugal",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "pt_maritime_rigging": {
    "countryExclusive": "Portugal",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "pt_fmp_g3": {
    "countryExclusive": "Portugal",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "pt_atlantic_oilskin": {
    "countryExclusive": "Portugal",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "pt_algarve_pack": {
    "countryExclusive": "Portugal",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "pt_cork_insulator": {
    "countryExclusive": "Portugal",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "pt_porto_bronze": {
    "countryExclusive": "Portugal",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "is_harðfiskur_pack": {
    "countryExclusive": "Iceland",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "is_skyr_powder": {
    "countryExclusive": "Iceland",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "is_glacial_water": {
    "countryExclusive": "Iceland",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "is_iceland_moss": {
    "countryExclusive": "Iceland",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "is_sulfur_wash": {
    "countryExclusive": "Iceland",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "is_whaler_flensing": {
    "countryExclusive": "Iceland",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "is_coastguard_rifle": {
    "countryExclusive": "Iceland",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "is_lopapeysa_parka": {
    "countryExclusive": "Iceland",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "is_highland_pack": {
    "countryExclusive": "Iceland",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "is_geothermal_thermo": {
    "countryExclusive": "Iceland",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "is_basalt_fiber": {
    "countryExclusive": "Iceland",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "ru_tushonka_tin": {
    "countryExclusive": "Russian Federation",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "ru_suhari_bag": {
    "countryExclusive": "Russian Federation",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "ru_baikal_canteen": {
    "countryExclusive": "Russian Federation",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "ru_ai2_medkit": {
    "countryExclusive": "Russian Federation",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "ru_vishnevsky_salve": {
    "countryExclusive": "Russian Federation",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "ru_nr40_knife": {
    "countryExclusive": "Russian Federation",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "ru_vss_vintorez": {
    "countryExclusive": "Russian Federation",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "ru_gorka3_suit": {
    "countryExclusive": "Russian Federation",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "ru_smerch_rig": {
    "countryExclusive": "Russian Federation",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "ru_ural_magneto": {
    "countryExclusive": "Russian Federation",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "ru_siberian_titanium": {
    "countryExclusive": "Russian Federation",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "ge_khachapuri_pack": {
    "countryExclusive": "Georgia",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "ge_churchkhela": {
    "countryExclusive": "Georgia",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "ge_borjomi_bottle": {
    "countryExclusive": "Georgia",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "ge_caucasus_propolis": {
    "countryExclusive": "Georgia",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "ge_tbilisi_antiseptic": {
    "countryExclusive": "Georgia",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "ge_khevsur_kindjal": {
    "countryExclusive": "Georgia",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "ge_gtc_carbine": {
    "countryExclusive": "Georgia",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "ge_svaneti_cloak": {
    "countryExclusive": "Georgia",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "ge_kazbegi_pack": {
    "countryExclusive": "Georgia",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "ge_rustavi_motor": {
    "countryExclusive": "Georgia",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "ge_caucasus_copper": {
    "countryExclusive": "Georgia",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "ir_abgoosht_tin": {
    "countryExclusive": "Iran",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "ir_gaz_nougat": {
    "countryExclusive": "Iran",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "ir_doogh_flask": {
    "countryExclusive": "Iran",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "ir_shiraz_rosewater": {
    "countryExclusive": "Iran",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "ir_alborz_antiseptic": {
    "countryExclusive": "Iran",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "ir_shamshir_blade": {
    "countryExclusive": "Iran",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "ir_khaybar_rifle": {
    "countryExclusive": "Iran",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "ir_zagros_coat": {
    "countryExclusive": "Iran",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "ir_damavand_pack": {
    "countryExclusive": "Iran",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "ir_isfahan_optics": {
    "countryExclusive": "Iran",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "ir_kerman_brass": {
    "countryExclusive": "Iran",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "lb_hummus_tin": {
    "countryExclusive": "Lebanon",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "lb_zaatar_flatbread": {
    "countryExclusive": "Lebanon",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "lb_jallab_bottle": {
    "countryExclusive": "Lebanon",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "lb_cedar_resin": {
    "countryExclusive": "Lebanon",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "lb_beirut_kit": {
    "countryExclusive": "Lebanon",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "lb_levant_dagger": {
    "countryExclusive": "Lebanon",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "lb_cedar_carbine": {
    "countryExclusive": "Lebanon",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "lb_chouf_jacket": {
    "countryExclusive": "Lebanon",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "lb_bekaa_pack": {
    "countryExclusive": "Lebanon",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "lb_byblos_transceiver": {
    "countryExclusive": "Lebanon",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "lb_tripoli_cable": {
    "countryExclusive": "Lebanon",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "ma_tagine_tin": {
    "countryExclusive": "Morocco",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "ma_amlou_pack": {
    "countryExclusive": "Morocco",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "ma_mint_tea_flask": {
    "countryExclusive": "Morocco",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "ma_argan_salve": {
    "countryExclusive": "Morocco",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "ma_atlas_antiseptic": {
    "countryExclusive": "Morocco",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "ma_koummya_dagger": {
    "countryExclusive": "Morocco",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "ma_strait_rifle": {
    "countryExclusive": "Morocco",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "ma_djellaba_coat": {
    "countryExclusive": "Morocco",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "ma_rif_pack": {
    "countryExclusive": "Morocco",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "ma_tangier_radar": {
    "countryExclusive": "Morocco",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "ma_fez_leather": {
    "countryExclusive": "Morocco",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "eg_ful_tin": {
    "countryExclusive": "Egypt",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "eg_halawa_bar": {
    "countryExclusive": "Egypt",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "eg_karkadeh_flask": {
    "countryExclusive": "Egypt",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "eg_black_seed_oil": {
    "countryExclusive": "Egypt",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "eg_cairo_antiseptic": {
    "countryExclusive": "Egypt",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "eg_khopesh_cleaver": {
    "countryExclusive": "Egypt",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "eg_maadi_akm": {
    "countryExclusive": "Egypt",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "eg_sinai_rig": {
    "countryExclusive": "Egypt",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "eg_nile_pack": {
    "countryExclusive": "Egypt",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "eg_suez_alternator": {
    "countryExclusive": "Egypt",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "eg_aswan_copper": {
    "countryExclusive": "Egypt",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "sd_kisra_pack": {
    "countryExclusive": "Sudan",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "sd_peanut_paste": {
    "countryExclusive": "Sudan",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "sd_baobab_drink": {
    "countryExclusive": "Sudan",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "sd_acacia_gum": {
    "countryExclusive": "Sudan",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "sd_khartoum_quinine": {
    "countryExclusive": "Sudan",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "sd_kaskara_blade": {
    "countryExclusive": "Sudan",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "sd_nile_fal": {
    "countryExclusive": "Sudan",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "sd_nubian_duster": {
    "countryExclusive": "Sudan",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "sd_savanna_pack": {
    "countryExclusive": "Sudan",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "sd_merowe_relay": {
    "countryExclusive": "Sudan",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "sd_omdurman_iron": {
    "countryExclusive": "Sudan",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "et_injera_dried": {
    "countryExclusive": "Ethiopia",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "et_kolo_pouch": {
    "countryExclusive": "Ethiopia",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "et_sidamo_coffee": {
    "countryExclusive": "Ethiopia",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "et_kosso_remedy": {
    "countryExclusive": "Ethiopia",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "et_addis_saline": {
    "countryExclusive": "Ethiopia",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "et_shotel_blade": {
    "countryExclusive": "Ethiopia",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "et_abyssinia_ak": {
    "countryExclusive": "Ethiopia",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "et_bale_cloak": {
    "countryExclusive": "Ethiopia",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "et_rift_pack": {
    "countryExclusive": "Ethiopia",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "et_entoto_solar": {
    "countryExclusive": "Ethiopia",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "et_axum_bronze": {
    "countryExclusive": "Ethiopia",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "ke_nyama_jerky": {
    "countryExclusive": "Kenya",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "ke_ugali_biscuit": {
    "countryExclusive": "Kenya",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "ke_kericho_tea": {
    "countryExclusive": "Kenya",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "ke_aloe_gel": {
    "countryExclusive": "Kenya",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "ke_nairobi_kit": {
    "countryExclusive": "Kenya",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "ke_simi_sword": {
    "countryExclusive": "Kenya",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "ke_scar_patrol": {
    "countryExclusive": "Kenya",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "ke_safari_jacket": {
    "countryExclusive": "Kenya",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "ke_tsavo_pack": {
    "countryExclusive": "Kenya",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "ke_olkaria_valve": {
    "countryExclusive": "Kenya",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "ke_mombasa_rope": {
    "countryExclusive": "Kenya",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "ml_millet_ration": {
    "countryExclusive": "Mali",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "ml_date_cake": {
    "countryExclusive": "Mali",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "ml_touareg_tea": {
    "countryExclusive": "Mali",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "ml_shea_salve": {
    "countryExclusive": "Mali",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "ml_neem_tincture": {
    "countryExclusive": "Mali",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "ml_takouba_blade": {
    "countryExclusive": "Mali",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "ml_sahel_carbine": {
    "countryExclusive": "Mali",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "ml_indigo_tagelmust": {
    "countryExclusive": "Mali",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "ml_timbuktu_pack": {
    "countryExclusive": "Mali",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "ml_niger_pump": {
    "countryExclusive": "Mali",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "ml_sankore_leather": {
    "countryExclusive": "Mali",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "sn_thieb_tin": {
    "countryExclusive": "Senegal",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "sn_mango_strips": {
    "countryExclusive": "Senegal",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "sn_bissap_flask": {
    "countryExclusive": "Senegal",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "sn_moringa_balm": {
    "countryExclusive": "Senegal",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "sn_dakar_antiseptic": {
    "countryExclusive": "Senegal",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "sn_atlantic_harpoon": {
    "countryExclusive": "Senegal",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "sn_capvert_smg": {
    "countryExclusive": "Senegal",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "sn_atlantic_raincoat": {
    "countryExclusive": "Senegal",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "sn_dakar_pack": {
    "countryExclusive": "Senegal",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "sn_goree_dynamo": {
    "countryExclusive": "Senegal",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "sn_saloum_salt": {
    "countryExclusive": "Senegal",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "ng_jollof_tin": {
    "countryExclusive": "Nigeria",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "ng_kilishi_pack": {
    "countryExclusive": "Nigeria",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "ng_zobo_flask": {
    "countryExclusive": "Nigeria",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "ng_bitter_leaf": {
    "countryExclusive": "Nigeria",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "ng_lagos_antibiotic": {
    "countryExclusive": "Nigeria",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "ng_benin_cleaver": {
    "countryExclusive": "Nigeria",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "ng_ikeja_carbine": {
    "countryExclusive": "Nigeria",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "ng_delta_vest": {
    "countryExclusive": "Nigeria",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "ng_abuja_pack": {
    "countryExclusive": "Nigeria",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "ng_apapa_transformer": {
    "countryExclusive": "Nigeria",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "ng_kano_leather": {
    "countryExclusive": "Nigeria",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "cd_cassava_pack": {
    "countryExclusive": "Democratic Republic of the Congo",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "cd_plantain_chips": {
    "countryExclusive": "Democratic Republic of the Congo",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "cd_tangawisi_flask": {
    "countryExclusive": "Democratic Republic of the Congo",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "cd_cinchona_bark": {
    "countryExclusive": "Democratic Republic of the Congo",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "cd_kinshasa_kit": {
    "countryExclusive": "Democratic Republic of the Congo",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "cd_ngombe_blade": {
    "countryExclusive": "Democratic Republic of the Congo",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "cd_katanga_rifle": {
    "countryExclusive": "Democratic Republic of the Congo",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "cd_rainforest_poncho": {
    "countryExclusive": "Democratic Republic of the Congo",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "cd_congo_pack": {
    "countryExclusive": "Democratic Republic of the Congo",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "cd_katanga_cobalt": {
    "countryExclusive": "Democratic Republic of the Congo",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "cd_lubumbashi_ore": {
    "countryExclusive": "Democratic Republic of the Congo",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "za_biltong_pack": {
    "countryExclusive": "South Africa",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "za_rusk_tin": {
    "countryExclusive": "South Africa",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "za_rooibos_flask": {
    "countryExclusive": "South Africa",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "za_buchu_salve": {
    "countryExclusive": "South Africa",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "za_joburg_kit": {
    "countryExclusive": "South Africa",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "za_assegai_spear": {
    "countryExclusive": "South Africa",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "za_r4_vektor": {
    "countryExclusive": "South Africa",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "za_karoo_jacket": {
    "countryExclusive": "South Africa",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "za_drakensberg_pack": {
    "countryExclusive": "South Africa",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "za_witwatersrand_cell": {
    "countryExclusive": "South Africa",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "za_sasol_polymer": {
    "countryExclusive": "South Africa",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "pk_nihari_tin": {
    "countryExclusive": "Pakistan",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "pk_sohan_halwa": {
    "countryExclusive": "Pakistan",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "pk_lassi_canteen": {
    "countryExclusive": "Pakistan",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "pk_himalayan_salve": {
    "countryExclusive": "Pakistan",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "pk_karachi_kit": {
    "countryExclusive": "Pakistan",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "pk_peshawari_choora": {
    "countryExclusive": "Pakistan",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "pk_pof_g3p4": {
    "countryExclusive": "Pakistan",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "pk_karakoram_parka": {
    "countryExclusive": "Pakistan",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "pk_hindukush_pack": {
    "countryExclusive": "Pakistan",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "pk_sindh_regulator": {
    "countryExclusive": "Pakistan",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "pk_sialkot_steel": {
    "countryExclusive": "Pakistan",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "in_dal_mre": {
    "countryExclusive": "India",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "in_chikki_bar": {
    "countryExclusive": "India",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "in_nimbu_pani": {
    "countryExclusive": "India",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "in_turmeric_paste": {
    "countryExclusive": "India",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "in_mumbai_antibiotic": {
    "countryExclusive": "India",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "in_gurkha_kukri": {
    "countryExclusive": "India",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "in_insas_556": {
    "countryExclusive": "India",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "in_ladakh_parka": {
    "countryExclusive": "India",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "in_western_ghats_pack": {
    "countryExclusive": "India",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "in_bengaluru_board": {
    "countryExclusive": "India",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "in_jamshedpur_plate": {
    "countryExclusive": "India",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "kz_kazy_tin": {
    "countryExclusive": "Kazakhstan",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "kz_kurt_balls": {
    "countryExclusive": "Kazakhstan",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "kz_shubat_flask": {
    "countryExclusive": "Kazakhstan",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "kz_altai_mumijo": {
    "countryExclusive": "Kazakhstan",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "kz_almaty_iodine": {
    "countryExclusive": "Kazakhstan",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "kz_steppe_kinjal": {
    "countryExclusive": "Kazakhstan",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "kz_baikonur_ak74": {
    "countryExclusive": "Kazakhstan",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "kz_shapan_coat": {
    "countryExclusive": "Kazakhstan",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "kz_tian_shan_pack": {
    "countryExclusive": "Kazakhstan",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "kz_baikonur_gyro": {
    "countryExclusive": "Kazakhstan",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "kz_karaganda_alloy": {
    "countryExclusive": "Kazakhstan",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "mn_borts_pack": {
    "countryExclusive": "Mongolia",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "mn_aaruul_bag": {
    "countryExclusive": "Mongolia",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "mn_suutei_tsai": {
    "countryExclusive": "Mongolia",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "mn_seabuckthorn_oil": {
    "countryExclusive": "Mongolia",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "mn_ub_antiseptic": {
    "countryExclusive": "Mongolia",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "mn_mongol_utga": {
    "countryExclusive": "Mongolia",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "mn_gobi_sks": {
    "countryExclusive": "Mongolia",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "mn_deel_parka": {
    "countryExclusive": "Mongolia",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "mn_nomad_pack": {
    "countryExclusive": "Mongolia",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "mn_gobi_wind_coil": {
    "countryExclusive": "Mongolia",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "mn_tavan_copper": {
    "countryExclusive": "Mongolia",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "cn_pla_mre": {
    "countryExclusive": "China",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "cn_compressed_biscuit": {
    "countryExclusive": "China",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "cn_oolong_flask": {
    "countryExclusive": "China",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "cn_yunnan_baiyao": {
    "countryExclusive": "China",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "cn_shanghai_ampoule": {
    "countryExclusive": "China",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "cn_tang_dao": {
    "countryExclusive": "China",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "cn_qbz95_rifle": {
    "countryExclusive": "China",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "cn_alpine_shell": {
    "countryExclusive": "China",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "cn_shenzhen_pack": {
    "countryExclusive": "China",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "cn_shenzhen_lithium": {
    "countryExclusive": "China",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "cn_baoshan_steel": {
    "countryExclusive": "China",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "kr_kimchi_mre": {
    "countryExclusive": "Republic of Korea",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "kr_yakgwa_pack": {
    "countryExclusive": "Republic of Korea",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "kr_ginseng_tonic": {
    "countryExclusive": "Republic of Korea",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "kr_jeju_centella": {
    "countryExclusive": "Republic of Korea",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "kr_seoul_antiseptic": {
    "countryExclusive": "Republic of Korea",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "kr_udt_knife": {
    "countryExclusive": "Republic of Korea",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "kr_daewoo_k2": {
    "countryExclusive": "Republic of Korea",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "kr_taebaek_parka": {
    "countryExclusive": "Republic of Korea",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "kr_seoul_pack": {
    "countryExclusive": "Republic of Korea",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "kr_suwon_ic": {
    "countryExclusive": "Republic of Korea",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "kr_posco_alloy": {
    "countryExclusive": "Republic of Korea",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "jp_onigiri_mre": {
    "countryExclusive": "Japan",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "jp_yokan_bar": {
    "countryExclusive": "Japan",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "jp_pocari_flask": {
    "countryExclusive": "Japan",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "jp_kyoto_plaster": {
    "countryExclusive": "Japan",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "jp_tokyo_antiseptic": {
    "countryExclusive": "Japan",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "jp_wakizashi_blade": {
    "countryExclusive": "Japan",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "jp_howa_type89": {
    "countryExclusive": "Japan",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "jp_hokkaido_parka": {
    "countryExclusive": "Japan",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "jp_osaka_pack": {
    "countryExclusive": "Japan",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "jp_akihabara_cap": {
    "countryExclusive": "Japan",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "jp_seki_steel": {
    "countryExclusive": "Japan",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "th_khao_pad_tin": {
    "countryExclusive": "Thailand",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "th_mango_sticky_bar": {
    "countryExclusive": "Thailand",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "th_cha_yen_flask": {
    "countryExclusive": "Thailand",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "th_tiger_balm": {
    "countryExclusive": "Thailand",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "th_fah_talai_jone": {
    "countryExclusive": "Thailand",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "th_enep_machete": {
    "countryExclusive": "Thailand",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "th_bangkok_m16": {
    "countryExclusive": "Thailand",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "th_monsoon_poncho": {
    "countryExclusive": "Thailand",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "th_chiangmai_pack": {
    "countryExclusive": "Thailand",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "th_rayong_relay": {
    "countryExclusive": "Thailand",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "th_ayutthaya_brass": {
    "countryExclusive": "Thailand",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "my_rendang_tin": {
    "countryExclusive": "Malaysia",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "my_kaya_pack": {
    "countryExclusive": "Malaysia",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "my_teh_tarik_flask": {
    "countryExclusive": "Malaysia",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "my_gamat_balm": {
    "countryExclusive": "Malaysia",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "my_kl_antiseptic": {
    "countryExclusive": "Malaysia",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "my_parang_blade": {
    "countryExclusive": "Malaysia",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "my_vita_carbine": {
    "countryExclusive": "Malaysia",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "my_taman_poncho": {
    "countryExclusive": "Malaysia",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "my_malacca_pack": {
    "countryExclusive": "Malaysia",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "my_penang_chip": {
    "countryExclusive": "Malaysia",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "my_ipoh_tin": {
    "countryExclusive": "Malaysia",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "id_nasi_goreng_tin": {
    "countryExclusive": "Indonesia",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "id_tempeh_chips": {
    "countryExclusive": "Indonesia",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "id_jamu_tonic": {
    "countryExclusive": "Indonesia",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "id_minyak_kayu": {
    "countryExclusive": "Indonesia",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "id_jakarta_kit": {
    "countryExclusive": "Indonesia",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "id_golok_machete": {
    "countryExclusive": "Indonesia",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "id_pindad_ss2": {
    "countryExclusive": "Indonesia",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "id_java_jacket": {
    "countryExclusive": "Indonesia",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "id_bromo_pack": {
    "countryExclusive": "Indonesia",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "id_java_battery": {
    "countryExclusive": "Indonesia",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "id_java_rubber": {
    "countryExclusive": "Indonesia",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "au_beef_pie_tin": {
    "countryExclusive": "Australia",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "au_anzac_biscuit": {
    "countryExclusive": "Australia",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "au_electrolyte_jug": {
    "countryExclusive": "Australia",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "au_tea_tree_oil": {
    "countryExclusive": "Australia",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "au_eucalyptus_gel": {
    "countryExclusive": "Australia",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "au_bowie_outback": {
    "countryExclusive": "Australia",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "au_ef88_austeyr": {
    "countryExclusive": "Australia",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "au_driza_bone": {
    "countryExclusive": "Australia",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "au_alice_pack": {
    "countryExclusive": "Australia",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "au_pilbara_sensor": {
    "countryExclusive": "Australia",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "au_broken_hill_lead": {
    "countryExclusive": "Australia",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "nz_lamb_stew_tin": {
    "countryExclusive": "New Zealand",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "nz_hokey_bar": {
    "countryExclusive": "New Zealand",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "nz_fiordland_water": {
    "countryExclusive": "New Zealand",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "nz_manuka_honey": {
    "countryExclusive": "New Zealand",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "nz_kawakawa_balm": {
    "countryExclusive": "New Zealand",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "nz_pounamu_knife": {
    "countryExclusive": "New Zealand",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "nz_mars_l_rifle": {
    "countryExclusive": "New Zealand",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "nz_swanndri_coat": {
    "countryExclusive": "New Zealand",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "nz_milford_pack": {
    "countryExclusive": "New Zealand",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "nz_wairakei_coil": {
    "countryExclusive": "New Zealand",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "nz_rotorua_sulfur": {
    "countryExclusive": "New Zealand",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "us_first_strike": {
    "countryExclusive": "United States",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "us_pemmican_bar": {
    "countryExclusive": "United States",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "us_electrolyte_canteen": {
    "countryExclusive": "United States",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "us_quikclot_combat": {
    "countryExclusive": "United States",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "us_betadine_swabs": {
    "countryExclusive": "United States",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "us_kabar_usmc": {
    "countryExclusive": "United States",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "us_m4a1_sopmod": {
    "countryExclusive": "United States",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "us_ecwcs_parka": {
    "countryExclusive": "United States",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "us_alice_large": {
    "countryExclusive": "United States",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "us_mil_spec_battery": {
    "countryExclusive": "United States",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "us_detroit_steel": {
    "countryExclusive": "United States",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "ca_imp_ration": {
    "countryExclusive": "Canada",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "ca_maple_bar": {
    "countryExclusive": "Canada",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "ca_yukon_flask": {
    "countryExclusive": "Canada",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "ca_spruce_pitch": {
    "countryExclusive": "Canada",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "ca_ottawa_kit": {
    "countryExclusive": "Canada",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "ca_grohmann_knife": {
    "countryExclusive": "Canada",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "ca_colt_c7a2": {
    "countryExclusive": "Canada",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "ca_hudson_parka": {
    "countryExclusive": "Canada",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "ca_banff_pack": {
    "countryExclusive": "Canada",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "ca_hydro_quebec": {
    "countryExclusive": "Canada",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "ca_sudbury_nickel": {
    "countryExclusive": "Canada",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "gl_mattak_tin": {
    "countryExclusive": "Greenland",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "gl_crowberry_bar": {
    "countryExclusive": "Greenland",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "gl_ilulissat_ice": {
    "countryExclusive": "Greenland",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "gl_arctic_angelica": {
    "countryExclusive": "Greenland",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "gl_nuuk_saline": {
    "countryExclusive": "Greenland",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "gl_inuit_ulu": {
    "countryExclusive": "Greenland",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "gl_sirius_enfield": {
    "countryExclusive": "Greenland",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "gl_anorak_seal": {
    "countryExclusive": "Greenland",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "gl_sled_pack": {
    "countryExclusive": "Greenland",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "gl_thule_beacon": {
    "countryExclusive": "Greenland",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "gl_ivittuut_cryolite": {
    "countryExclusive": "Greenland",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "mx_birria_tin": {
    "countryExclusive": "Mexico",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "mx_pinole_bar": {
    "countryExclusive": "Mexico",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "mx_jamaica_flask": {
    "countryExclusive": "Mexico",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "mx_tepezcohuite": {
    "countryExclusive": "Mexico",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "mx_cdmx_antiseptic": {
    "countryExclusive": "Mexico",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "mx_oaxaca_machete": {
    "countryExclusive": "Mexico",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "mx_fx05_xiuhcoatl": {
    "countryExclusive": "Mexico",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "mx_sonora_duster": {
    "countryExclusive": "Mexico",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "mx_sierra_pack": {
    "countryExclusive": "Mexico",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "mx_monterrey_motor": {
    "countryExclusive": "Mexico",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "mx_zacatecas_silver": {
    "countryExclusive": "Mexico",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "pa_sancocho_tin": {
    "countryExclusive": "Panama",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "pa_plantain_bar": {
    "countryExclusive": "Panama",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "pa_chicheme_flask": {
    "countryExclusive": "Panama",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "pa_darien_salve": {
    "countryExclusive": "Panama",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "pa_canal_kit": {
    "countryExclusive": "Panama",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "pa_darien_bolo": {
    "countryExclusive": "Panama",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "pa_colon_carbine": {
    "countryExclusive": "Panama",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "pa_gamboa_poncho": {
    "countryExclusive": "Panama",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "pa_gatun_pack": {
    "countryExclusive": "Panama",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "pa_miraflores_switch": {
    "countryExclusive": "Panama",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "pa_balboa_brass": {
    "countryExclusive": "Panama",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "co_bandeja_tin": {
    "countryExclusive": "Colombia",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "co_bocadillo_bar": {
    "countryExclusive": "Colombia",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "co_juan_valdez": {
    "countryExclusive": "Colombia",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "co_calendula_gel": {
    "countryExclusive": "Colombia",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "co_andean_quinine": {
    "countryExclusive": "Colombia",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "co_coffee_machete": {
    "countryExclusive": "Colombia",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "co_indumil_galil": {
    "countryExclusive": "Colombia",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "co_ruana_coat": {
    "countryExclusive": "Colombia",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "co_andes_pack": {
    "countryExclusive": "Colombia",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "co_medellin_board": {
    "countryExclusive": "Colombia",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "co_muzom_copper": {
    "countryExclusive": "Colombia",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "pe_seco_tin": {
    "countryExclusive": "Peru",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "pe_canchita_maca": {
    "countryExclusive": "Peru",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "pe_chicha_morada": {
    "countryExclusive": "Peru",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "pe_cats_claw": {
    "countryExclusive": "Peru",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "pe_coca_altitude": {
    "countryExclusive": "Peru",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "pe_inca_tumi": {
    "countryExclusive": "Peru",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "pe_scar_peru": {
    "countryExclusive": "Peru",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "pe_alpaca_parka": {
    "countryExclusive": "Peru",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "pe_huaraz_pack": {
    "countryExclusive": "Peru",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "pe_callao_inverter": {
    "countryExclusive": "Peru",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "pe_cerro_copper": {
    "countryExclusive": "Peru",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "br_feijoada_tin": {
    "countryExclusive": "Brazil",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "br_pacoca_bar": {
    "countryExclusive": "Brazil",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "br_guarana_flask": {
    "countryExclusive": "Brazil",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "br_copaiba_oil": {
    "countryExclusive": "Brazil",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "br_butantan_serum": {
    "countryExclusive": "Brazil",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "br_tramontina_machete": {
    "countryExclusive": "Brazil",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "br_imbel_ia2": {
    "countryExclusive": "Brazil",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "br_amazon_poncho": {
    "countryExclusive": "Brazil",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "br_pantanal_pack": {
    "countryExclusive": "Brazil",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "br_itaipu_relay": {
    "countryExclusive": "Brazil",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "br_minas_iron": {
    "countryExclusive": "Brazil",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "ar_locro_tin": {
    "countryExclusive": "Argentina",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "ar_dulce_bar": {
    "countryExclusive": "Argentina",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "ar_yerba_mate": {
    "countryExclusive": "Argentina",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "ar_patagonia_calafate": {
    "countryExclusive": "Argentina",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "ar_malbran_serum": {
    "countryExclusive": "Argentina",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "ar_gaucho_facon": {
    "countryExclusive": "Argentina",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "ar_fm_fal": {
    "countryExclusive": "Argentina",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "ar_ushuaia_parka": {
    "countryExclusive": "Argentina",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "ar_fitzroy_pack": {
    "countryExclusive": "Argentina",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "ar_pampa_wind": {
    "countryExclusive": "Argentina",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "ar_rio_negro_wire": {
    "countryExclusive": "Argentina",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  },
  "cl_curanto_tin": {
    "countryExclusive": "Chile",
    "rarity": "rare",
    "category": "supplies",
    "weight": 0.5,
    "stack": 4,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍲",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 36
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 10
        }
      ]
    }
  },
  "cl_harina_tostada": {
    "countryExclusive": "Chile",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.15,
    "stack": 8,
    "tags": [
      "food",
      "regional"
    ],
    "glyph": "🍪",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "satiety",
          "amount": 18
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 12
        }
      ]
    }
  },
  "cl_mote_huesillo": {
    "countryExclusive": "Chile",
    "rarity": "common",
    "category": "supplies",
    "weight": 0.45,
    "stack": 6,
    "tags": [
      "water",
      "drink",
      "regional"
    ],
    "glyph": "🥤",
    "use": {
      "minutes": 5,
      "effects": [
        {
          "type": "vital",
          "vital": "hydration",
          "amount": 34
        },
        {
          "type": "vital",
          "vital": "energy",
          "amount": 6
        }
      ]
    }
  },
  "cl_boldo_tonic": {
    "countryExclusive": "Chile",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.25,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🩹",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 22
        },
        {
          "type": "cureAilment",
          "ailment": "bleeding",
          "cure": false,
          "reduce": 1
        }
      ]
    }
  },
  "cl_santiago_kit": {
    "countryExclusive": "Chile",
    "rarity": "rare",
    "category": "medical",
    "weight": 0.2,
    "stack": 5,
    "tags": [
      "medical",
      "regional"
    ],
    "glyph": "🧪",
    "use": {
      "minutes": 10,
      "effects": [
        {
          "type": "heal",
          "amount": 10
        },
        {
          "type": "cureAilment",
          "ailment": "infection",
          "cure": true
        }
      ]
    }
  },
  "cl_corvo_knife": {
    "countryExclusive": "Chile",
    "rarity": "rare",
    "category": "weapons",
    "weight": 0.9,
    "stack": 1,
    "tags": [
      "weapon",
      "melee",
      "regional"
    ],
    "glyph": "🗡️",
    "equip": {
      "slot": "weapon",
      "damage": 18,
      "range": "melee",
      "hitBonus": 0.08,
      "bleedChance": 0.28
    }
  },
  "cl_famae_sg540": {
    "countryExclusive": "Chile",
    "rarity": "epic",
    "category": "weapons",
    "weight": 3.4,
    "stack": 1,
    "tags": [
      "weapon",
      "firearm",
      "regional"
    ],
    "glyph": "🔫",
    "equip": {
      "slot": "weapon",
      "damage": 34,
      "range": "long",
      "hitBonus": 0.14,
      "ammoType": "rifle_rounds"
    }
  },
  "cl_torres_shell": {
    "countryExclusive": "Chile",
    "rarity": "epic",
    "category": "gear",
    "weight": 2.4,
    "stack": 1,
    "tags": [
      "armor",
      "regional"
    ],
    "glyph": "🧥",
    "equip": {
      "slot": "body",
      "armor": 14,
      "coldRes": 10,
      "acidRes": 0.2,
      "ashRes": 0.2
    }
  },
  "cl_atacama_pack": {
    "countryExclusive": "Chile",
    "rarity": "rare",
    "category": "gear",
    "weight": 1.4,
    "stack": 1,
    "tags": [
      "pack",
      "regional"
    ],
    "glyph": "🎒",
    "equip": {
      "slot": "pack",
      "slots": 8,
      "capacityKg": 14
    }
  },
  "cl_atacama_solar": {
    "countryExclusive": "Chile",
    "rarity": "rare",
    "category": "scrap",
    "weight": 0.4,
    "stack": 10,
    "tags": [
      "scrap",
      "electronics",
      "regional"
    ],
    "glyph": "🔌"
  },
  "cl_chuquicamata_copper": {
    "countryExclusive": "Chile",
    "rarity": "common",
    "category": "scrap",
    "weight": 0.55,
    "stack": 12,
    "tags": [
      "scrap",
      "metal",
      "regional"
    ],
    "glyph": "⚙️"
  }
};

export const COUNTRY_EXCLUSIVE_LOOT = {
  "Turkey": [
    {
      "itemId": "tr_sucuk_ration",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "tr_pestil_bars",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "tr_salgam_bottle",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "tr_kantaron_oil",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "tr_kekik_antiseptic",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "tr_yatagan_blade",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "tr_sarsilmaz_9mm",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "tr_kepenek_coat",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "tr_toros_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "tr_boron_cell",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "tr_iznik_insulator",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Greece": [
    {
      "itemId": "gr_paximadi_rusk",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "gr_pasteli_bar",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "gr_mountain_tea",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "gr_mastic_salve",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "gr_olive_iodine",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "gr_kopis_machete",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "gr_hellenic_g3",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "gr_epirus_cloak",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "gr_aegean_drybag",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "gr_piraeus_relay",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "gr_pentelic_flux",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Bulgaria": [
    {
      "itemId": "bg_lukanka_pack",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "bg_halva_tin",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "bg_boza_flask",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "bg_rose_oil_balm",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "bg_balkan_propolis",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "bg_haiduk_knife",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "bg_arsenal_ak",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "bg_rodopi_parka",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "bg_rila_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "bg_sofiya_capacitor",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "bg_kremikovtzi_steel",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Romania": [
    {
      "itemId": "ro_tochitura_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "ro_covrigi_pack",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "ro_borsec_water",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "ro_comfrey_salve",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "ro_silver_colloid",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "ro_dacian_falx",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "ro_cugir_wasr",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "ro_carpathian_coat",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "ro_bucegi_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "ro_ploiesti_valve",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "ro_danube_cable",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Ukraine": [
    {
      "itemId": "ua_salo_ration",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "ua_buckwheat_bar",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "ua_uzvar_canteen",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "ua_chernozem_gel",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "ua_iodine_tablets",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "ua_cossack_shashka",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "ua_fort221_rifle",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "ua_korsar_vest",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "ua_dnipro_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "ua_antonov_servo",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "ua_kryvyi_plate",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Austria": [
    {
      "itemId": "at_gulasch_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "at_manner_wafer",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "at_almdudler_flask",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "at_tyrol_arnica",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "at_vienna_antiseptic",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "at_glock_fm78",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "at_steyr_aug",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "at_alpen_goretex",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "at_innsbruck_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "at_voestalpine_chip",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "at_styrian_spring",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Germany": [
    {
      "itemId": "de_epas_ration",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "de_pumpernickel",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "de_apfelschorle",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "de_bayer_gel",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "de_charite_kit",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "de_solingen_bowie",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "de_hk_g36c",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "de_flecktarn_smock",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "de_ruhr_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "de_siemens_plc",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "de_krupp_bearing",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "France": [
    {
      "itemId": "fr_rcir_ration",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "fr_biscotte_pack",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "fr_evian_canteen",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "fr_pasteur_serum",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "fr_lavande_tincture",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "fr_laguiole_folder",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "fr_famas_f1",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "fr_chasseur_cape",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "fr_legion_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "fr_areva_cell",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "fr_lyon_wire",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "United Kingdom": [
    {
      "itemId": "uk_orp_ration",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "uk_shortbread_tin",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "uk_earl_grey_flask",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "uk_nhs_trauma",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "uk_tcp_antiseptic",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "uk_fairbairn_dagger",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "uk_sa80_l85a2",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "uk_waxed_barbour",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "uk_bergen_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "uk_sheffield_blade",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "uk_thames_brass",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Spain": [
    {
      "itemId": "es_fabada_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "es_turron_bar",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "es_horchata_flask",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "es_olive_salve",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "es_madrid_iodine",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "es_navaja_knife",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "es_cetme_c",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "es_pyrenees_jacket",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "es_camino_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "es_bilbao_inverter",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "es_toledo_spring",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Portugal": [
    {
      "itemId": "pt_bacalhau_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "pt_pastel_ration",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "pt_agua_pedras",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "pt_eucalyptus_balm",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "pt_atlantic_saline",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "pt_maritime_rigging",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "pt_fmp_g3",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "pt_atlantic_oilskin",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "pt_algarve_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "pt_cork_insulator",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "pt_porto_bronze",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Iceland": [
    {
      "itemId": "is_harðfiskur_pack",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "is_skyr_powder",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "is_glacial_water",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "is_iceland_moss",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "is_sulfur_wash",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "is_whaler_flensing",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "is_coastguard_rifle",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "is_lopapeysa_parka",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "is_highland_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "is_geothermal_thermo",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "is_basalt_fiber",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Russian Federation": [
    {
      "itemId": "ru_tushonka_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "ru_suhari_bag",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "ru_baikal_canteen",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "ru_ai2_medkit",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "ru_vishnevsky_salve",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "ru_nr40_knife",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "ru_vss_vintorez",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "ru_gorka3_suit",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "ru_smerch_rig",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "ru_ural_magneto",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "ru_siberian_titanium",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Georgia": [
    {
      "itemId": "ge_khachapuri_pack",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "ge_churchkhela",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "ge_borjomi_bottle",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "ge_caucasus_propolis",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "ge_tbilisi_antiseptic",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "ge_khevsur_kindjal",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "ge_gtc_carbine",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "ge_svaneti_cloak",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "ge_kazbegi_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "ge_rustavi_motor",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "ge_caucasus_copper",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Iran": [
    {
      "itemId": "ir_abgoosht_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "ir_gaz_nougat",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "ir_doogh_flask",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "ir_shiraz_rosewater",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "ir_alborz_antiseptic",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "ir_shamshir_blade",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "ir_khaybar_rifle",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "ir_zagros_coat",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "ir_damavand_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "ir_isfahan_optics",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "ir_kerman_brass",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Lebanon": [
    {
      "itemId": "lb_hummus_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "lb_zaatar_flatbread",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "lb_jallab_bottle",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "lb_cedar_resin",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "lb_beirut_kit",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "lb_levant_dagger",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "lb_cedar_carbine",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "lb_chouf_jacket",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "lb_bekaa_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "lb_byblos_transceiver",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "lb_tripoli_cable",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Morocco": [
    {
      "itemId": "ma_tagine_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "ma_amlou_pack",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "ma_mint_tea_flask",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "ma_argan_salve",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "ma_atlas_antiseptic",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "ma_koummya_dagger",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "ma_strait_rifle",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "ma_djellaba_coat",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "ma_rif_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "ma_tangier_radar",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "ma_fez_leather",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Egypt": [
    {
      "itemId": "eg_ful_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "eg_halawa_bar",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "eg_karkadeh_flask",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "eg_black_seed_oil",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "eg_cairo_antiseptic",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "eg_khopesh_cleaver",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "eg_maadi_akm",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "eg_sinai_rig",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "eg_nile_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "eg_suez_alternator",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "eg_aswan_copper",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Sudan": [
    {
      "itemId": "sd_kisra_pack",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "sd_peanut_paste",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "sd_baobab_drink",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "sd_acacia_gum",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "sd_khartoum_quinine",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "sd_kaskara_blade",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "sd_nile_fal",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "sd_nubian_duster",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "sd_savanna_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "sd_merowe_relay",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "sd_omdurman_iron",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Ethiopia": [
    {
      "itemId": "et_injera_dried",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "et_kolo_pouch",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "et_sidamo_coffee",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "et_kosso_remedy",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "et_addis_saline",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "et_shotel_blade",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "et_abyssinia_ak",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "et_bale_cloak",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "et_rift_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "et_entoto_solar",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "et_axum_bronze",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Kenya": [
    {
      "itemId": "ke_nyama_jerky",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "ke_ugali_biscuit",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "ke_kericho_tea",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "ke_aloe_gel",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "ke_nairobi_kit",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "ke_simi_sword",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "ke_scar_patrol",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "ke_safari_jacket",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "ke_tsavo_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "ke_olkaria_valve",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "ke_mombasa_rope",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Mali": [
    {
      "itemId": "ml_millet_ration",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "ml_date_cake",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "ml_touareg_tea",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "ml_shea_salve",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "ml_neem_tincture",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "ml_takouba_blade",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "ml_sahel_carbine",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "ml_indigo_tagelmust",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "ml_timbuktu_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "ml_niger_pump",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "ml_sankore_leather",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Senegal": [
    {
      "itemId": "sn_thieb_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "sn_mango_strips",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "sn_bissap_flask",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "sn_moringa_balm",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "sn_dakar_antiseptic",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "sn_atlantic_harpoon",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "sn_capvert_smg",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "sn_atlantic_raincoat",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "sn_dakar_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "sn_goree_dynamo",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "sn_saloum_salt",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Nigeria": [
    {
      "itemId": "ng_jollof_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "ng_kilishi_pack",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "ng_zobo_flask",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "ng_bitter_leaf",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "ng_lagos_antibiotic",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "ng_benin_cleaver",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "ng_ikeja_carbine",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "ng_delta_vest",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "ng_abuja_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "ng_apapa_transformer",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "ng_kano_leather",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Democratic Republic of the Congo": [
    {
      "itemId": "cd_cassava_pack",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "cd_plantain_chips",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "cd_tangawisi_flask",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "cd_cinchona_bark",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "cd_kinshasa_kit",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "cd_ngombe_blade",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "cd_katanga_rifle",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "cd_rainforest_poncho",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "cd_congo_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "cd_katanga_cobalt",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "cd_lubumbashi_ore",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "South Africa": [
    {
      "itemId": "za_biltong_pack",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "za_rusk_tin",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "za_rooibos_flask",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "za_buchu_salve",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "za_joburg_kit",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "za_assegai_spear",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "za_r4_vektor",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "za_karoo_jacket",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "za_drakensberg_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "za_witwatersrand_cell",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "za_sasol_polymer",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Pakistan": [
    {
      "itemId": "pk_nihari_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "pk_sohan_halwa",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "pk_lassi_canteen",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "pk_himalayan_salve",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "pk_karachi_kit",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "pk_peshawari_choora",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "pk_pof_g3p4",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "pk_karakoram_parka",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "pk_hindukush_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "pk_sindh_regulator",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "pk_sialkot_steel",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "India": [
    {
      "itemId": "in_dal_mre",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "in_chikki_bar",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "in_nimbu_pani",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "in_turmeric_paste",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "in_mumbai_antibiotic",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "in_gurkha_kukri",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "in_insas_556",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "in_ladakh_parka",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "in_western_ghats_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "in_bengaluru_board",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "in_jamshedpur_plate",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Kazakhstan": [
    {
      "itemId": "kz_kazy_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "kz_kurt_balls",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "kz_shubat_flask",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "kz_altai_mumijo",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "kz_almaty_iodine",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "kz_steppe_kinjal",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "kz_baikonur_ak74",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "kz_shapan_coat",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "kz_tian_shan_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "kz_baikonur_gyro",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "kz_karaganda_alloy",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Mongolia": [
    {
      "itemId": "mn_borts_pack",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "mn_aaruul_bag",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "mn_suutei_tsai",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "mn_seabuckthorn_oil",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "mn_ub_antiseptic",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "mn_mongol_utga",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "mn_gobi_sks",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "mn_deel_parka",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "mn_nomad_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "mn_gobi_wind_coil",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "mn_tavan_copper",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "China": [
    {
      "itemId": "cn_pla_mre",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "cn_compressed_biscuit",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "cn_oolong_flask",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "cn_yunnan_baiyao",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "cn_shanghai_ampoule",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "cn_tang_dao",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "cn_qbz95_rifle",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "cn_alpine_shell",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "cn_shenzhen_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "cn_shenzhen_lithium",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "cn_baoshan_steel",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Republic of Korea": [
    {
      "itemId": "kr_kimchi_mre",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "kr_yakgwa_pack",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "kr_ginseng_tonic",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "kr_jeju_centella",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "kr_seoul_antiseptic",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "kr_udt_knife",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "kr_daewoo_k2",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "kr_taebaek_parka",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "kr_seoul_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "kr_suwon_ic",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "kr_posco_alloy",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Japan": [
    {
      "itemId": "jp_onigiri_mre",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "jp_yokan_bar",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "jp_pocari_flask",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "jp_kyoto_plaster",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "jp_tokyo_antiseptic",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "jp_wakizashi_blade",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "jp_howa_type89",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "jp_hokkaido_parka",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "jp_osaka_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "jp_akihabara_cap",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "jp_seki_steel",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Thailand": [
    {
      "itemId": "th_khao_pad_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "th_mango_sticky_bar",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "th_cha_yen_flask",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "th_tiger_balm",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "th_fah_talai_jone",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "th_enep_machete",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "th_bangkok_m16",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "th_monsoon_poncho",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "th_chiangmai_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "th_rayong_relay",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "th_ayutthaya_brass",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Malaysia": [
    {
      "itemId": "my_rendang_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "my_kaya_pack",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "my_teh_tarik_flask",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "my_gamat_balm",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "my_kl_antiseptic",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "my_parang_blade",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "my_vita_carbine",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "my_taman_poncho",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "my_malacca_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "my_penang_chip",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "my_ipoh_tin",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Indonesia": [
    {
      "itemId": "id_nasi_goreng_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "id_tempeh_chips",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "id_jamu_tonic",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "id_minyak_kayu",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "id_jakarta_kit",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "id_golok_machete",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "id_pindad_ss2",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "id_java_jacket",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "id_bromo_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "id_java_battery",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "id_java_rubber",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Australia": [
    {
      "itemId": "au_beef_pie_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "au_anzac_biscuit",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "au_electrolyte_jug",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "au_tea_tree_oil",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "au_eucalyptus_gel",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "au_bowie_outback",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "au_ef88_austeyr",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "au_driza_bone",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "au_alice_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "au_pilbara_sensor",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "au_broken_hill_lead",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "New Zealand": [
    {
      "itemId": "nz_lamb_stew_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "nz_hokey_bar",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "nz_fiordland_water",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "nz_manuka_honey",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "nz_kawakawa_balm",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "nz_pounamu_knife",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "nz_mars_l_rifle",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "nz_swanndri_coat",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "nz_milford_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "nz_wairakei_coil",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "nz_rotorua_sulfur",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "United States": [
    {
      "itemId": "us_first_strike",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "us_pemmican_bar",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "us_electrolyte_canteen",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "us_quikclot_combat",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "us_betadine_swabs",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "us_kabar_usmc",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "us_m4a1_sopmod",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "us_ecwcs_parka",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "us_alice_large",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "us_mil_spec_battery",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "us_detroit_steel",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Canada": [
    {
      "itemId": "ca_imp_ration",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "ca_maple_bar",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "ca_yukon_flask",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "ca_spruce_pitch",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "ca_ottawa_kit",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "ca_grohmann_knife",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "ca_colt_c7a2",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "ca_hudson_parka",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "ca_banff_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "ca_hydro_quebec",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "ca_sudbury_nickel",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Greenland": [
    {
      "itemId": "gl_mattak_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "gl_crowberry_bar",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "gl_ilulissat_ice",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "gl_arctic_angelica",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "gl_nuuk_saline",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "gl_inuit_ulu",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "gl_sirius_enfield",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "gl_anorak_seal",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "gl_sled_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "gl_thule_beacon",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "gl_ivittuut_cryolite",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Mexico": [
    {
      "itemId": "mx_birria_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "mx_pinole_bar",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "mx_jamaica_flask",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "mx_tepezcohuite",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "mx_cdmx_antiseptic",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "mx_oaxaca_machete",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "mx_fx05_xiuhcoatl",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "mx_sonora_duster",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "mx_sierra_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "mx_monterrey_motor",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "mx_zacatecas_silver",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Panama": [
    {
      "itemId": "pa_sancocho_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "pa_plantain_bar",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "pa_chicheme_flask",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "pa_darien_salve",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "pa_canal_kit",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "pa_darien_bolo",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "pa_colon_carbine",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "pa_gamboa_poncho",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "pa_gatun_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "pa_miraflores_switch",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "pa_balboa_brass",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Colombia": [
    {
      "itemId": "co_bandeja_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "co_bocadillo_bar",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "co_juan_valdez",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "co_calendula_gel",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "co_andean_quinine",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "co_coffee_machete",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "co_indumil_galil",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "co_ruana_coat",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "co_andes_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "co_medellin_board",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "co_muzom_copper",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Peru": [
    {
      "itemId": "pe_seco_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "pe_canchita_maca",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "pe_chicha_morada",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "pe_cats_claw",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "pe_coca_altitude",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "pe_inca_tumi",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "pe_scar_peru",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "pe_alpaca_parka",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "pe_huaraz_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "pe_callao_inverter",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "pe_cerro_copper",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Brazil": [
    {
      "itemId": "br_feijoada_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "br_pacoca_bar",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "br_guarana_flask",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "br_copaiba_oil",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "br_butantan_serum",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "br_tramontina_machete",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "br_imbel_ia2",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "br_amazon_poncho",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "br_pantanal_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "br_itaipu_relay",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "br_minas_iron",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Argentina": [
    {
      "itemId": "ar_locro_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "ar_dulce_bar",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "ar_yerba_mate",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "ar_patagonia_calafate",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "ar_malbran_serum",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "ar_gaucho_facon",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "ar_fm_fal",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "ar_ushuaia_parka",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "ar_fitzroy_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "ar_pampa_wind",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "ar_rio_negro_wire",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ],
  "Chile": [
    {
      "itemId": "cl_curanto_tin",
      "weight": 6,
      "qty": 1
    },
    {
      "itemId": "cl_harina_tostada",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "cl_mote_huesillo",
      "weight": 8,
      "qty": 1
    },
    {
      "itemId": "cl_boldo_tonic",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "cl_santiago_kit",
      "weight": 5,
      "qty": 1
    },
    {
      "itemId": "cl_corvo_knife",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "cl_famae_sg540",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "cl_torres_shell",
      "weight": 2,
      "qty": 1
    },
    {
      "itemId": "cl_atacama_pack",
      "weight": 3,
      "qty": 1
    },
    {
      "itemId": "cl_atacama_solar",
      "weight": 5,
      "qty": [
        1,
        2
      ]
    },
    {
      "itemId": "cl_chuquicamata_copper",
      "weight": 7,
      "qty": [
        1,
        2
      ]
    }
  ]
};
