const video = document.getElementById('webcam');
const resultBox = document.getElementById('result-box');

// ฐานข้อมูลแคลอรีจำลอง (ต่อ 100 กรัม หรือ 1 ชิ้นมาตรฐาน)
const calorieDatabase = {
    "banana": {
        "name": "กล้วย",
        "cal": 89
    },
    "apple": {
        "name": "แอปเปิล",
        "cal": 52
    },
    "pizza": {
        "name": "พิซซ่า",
        "cal": 266
    },
    "hotdog": {
        "name": "ฮอทดอก",
        "cal": 290
    },
    "hamburger": {
        "name": "แฮมเบอร์เกอร์",
        "cal": 295
    },
    "orange": {
        "name": "ส้ม",
        "cal": 47
    },
    "strawberry": {
        "name": "สตรอว์เบอร์รี",
        "cal": 32
    },
    "stir_fried_beef_1": {
        "name": "เนื้อผัด สูตร 1",
        "cal": 57
    },
    "stir_fried_chicken_2": {
        "name": "ไก่ผัด สูตร 2",
        "cal": 842
    },
    "steamed_noodle_3": {
        "name": "บะหมี่นึ่ง สูตร 3",
        "cal": 732
    },
    "grilled_noodle_4": {
        "name": "บะหมี่ย่าง สูตร 4",
        "cal": 276
    },
    "spicy_fish_5": {
        "name": "ปลายำ สูตร 5",
        "cal": 568
    },
    "fried_chicken_6": {
        "name": "ไก่ทอด สูตร 6",
        "cal": 59
    },
    "fried_noodle_7": {
        "name": "บะหมี่ทอด สูตร 7",
        "cal": 722
    },
    "grilled_chicken_8": {
        "name": "ไก่ย่าง สูตร 8",
        "cal": 742
    },
    "grilled_squid_9": {
        "name": "ปลาหมึกย่าง สูตร 9",
        "cal": 347
    },
    "spicy_chicken_10": {
        "name": "ไก่ยำ สูตร 10",
        "cal": 113
    },
    "fried_shrimp_11": {
        "name": "กุ้งทอด สูตร 11",
        "cal": 794
    },
    "steamed_pork_12": {
        "name": "หมูนึ่ง สูตร 12",
        "cal": 536
    },
    "steamed_rice_13": {
        "name": "ข้าวนึ่ง สูตร 13",
        "cal": 490
    },
    "steamed_rice_14": {
        "name": "ข้าวนึ่ง สูตร 14",
        "cal": 625
    },
    "fried_rice_15": {
        "name": "ข้าวทอด สูตร 15",
        "cal": 717
    },
    "steamed_noodle_16": {
        "name": "บะหมี่นึ่ง สูตร 16",
        "cal": 36
    },
    "grilled_squid_17": {
        "name": "ปลาหมึกย่าง สูตร 17",
        "cal": 798
    },
    "fried_fish_18": {
        "name": "ปลาทอด สูตร 18",
        "cal": 534
    },
    "fried_fish_19": {
        "name": "ปลาทอด สูตร 19",
        "cal": 360
    },
    "boiled_fish_20": {
        "name": "ปลาต้ม สูตร 20",
        "cal": 588
    },
    "boiled_pork_21": {
        "name": "หมูต้ม สูตร 21",
        "cal": 845
    },
    "boiled_squid_22": {
        "name": "ปลาหมึกต้ม สูตร 22",
        "cal": 749
    },
    "steamed_pork_23": {
        "name": "หมูนึ่ง สูตร 23",
        "cal": 205
    },
    "steamed_fish_24": {
        "name": "ปลานึ่ง สูตร 24",
        "cal": 118
    },
    "fried_rice_25": {
        "name": "ข้าวทอด สูตร 25",
        "cal": 126
    },
    "stir_fried_rice_26": {
        "name": "ข้าวผัด สูตร 26",
        "cal": 264
    },
    "spicy_fish_27": {
        "name": "ปลายำ สูตร 27",
        "cal": 577
    },
    "steamed_soup_28": {
        "name": "ซุปนึ่ง สูตร 28",
        "cal": 468
    },
    "stir_fried_beef_29": {
        "name": "เนื้อผัด สูตร 29",
        "cal": 815
    },
    "steamed_soup_30": {
        "name": "ซุปนึ่ง สูตร 30",
        "cal": 146
    },
    "fried_beef_31": {
        "name": "เนื้อทอด สูตร 31",
        "cal": 455
    },
    "steamed_shrimp_32": {
        "name": "กุ้งนึ่ง สูตร 32",
        "cal": 819
    },
    "spicy_chicken_33": {
        "name": "ไก่ยำ สูตร 33",
        "cal": 480
    },
    "spicy_shrimp_34": {
        "name": "กุ้งยำ สูตร 34",
        "cal": 568
    },
    "steamed_fish_35": {
        "name": "ปลานึ่ง สูตร 35",
        "cal": 452
    },
    "boiled_noodle_36": {
        "name": "บะหมี่ต้ม สูตร 36",
        "cal": 228
    },
    "spicy_soup_37": {
        "name": "ซุปยำ สูตร 37",
        "cal": 774
    },
    "fried_squid_38": {
        "name": "ปลาหมึกทอด สูตร 38",
        "cal": 800
    },
    "steamed_noodle_39": {
        "name": "บะหมี่นึ่ง สูตร 39",
        "cal": 407
    },
    "spicy_rice_40": {
        "name": "ข้าวยำ สูตร 40",
        "cal": 461
    },
    "grilled_soup_41": {
        "name": "ซุปย่าง สูตร 41",
        "cal": 64
    },
    "grilled_fish_42": {
        "name": "ปลาย่าง สูตร 42",
        "cal": 557
    },
    "stir_fried_pork_43": {
        "name": "หมูผัด สูตร 43",
        "cal": 357
    },
    "steamed_soup_44": {
        "name": "ซุปนึ่ง สูตร 44",
        "cal": 97
    },
    "steamed_noodle_45": {
        "name": "บะหมี่นึ่ง สูตร 45",
        "cal": 585
    },
    "steamed_rice_46": {
        "name": "ข้าวนึ่ง สูตร 46",
        "cal": 783
    },
    "spicy_beef_47": {
        "name": "เนื้อยำ สูตร 47",
        "cal": 732
    },
    "boiled_chicken_48": {
        "name": "ไก่ต้ม สูตร 48",
        "cal": 508
    },
    "fried_squid_49": {
        "name": "ปลาหมึกทอด สูตร 49",
        "cal": 218
    },
    "stir_fried_rice_50": {
        "name": "ข้าวผัด สูตร 50",
        "cal": 318
    },
    "stir_fried_pork_51": {
        "name": "หมูผัด สูตร 51",
        "cal": 486
    },
    "spicy_soup_52": {
        "name": "ซุปยำ สูตร 52",
        "cal": 117
    },
    "boiled_squid_53": {
        "name": "ปลาหมึกต้ม สูตร 53",
        "cal": 300
    },
    "steamed_fish_54": {
        "name": "ปลานึ่ง สูตร 54",
        "cal": 241
    },
    "spicy_beef_55": {
        "name": "เนื้อยำ สูตร 55",
        "cal": 761
    },
    "stir_fried_rice_56": {
        "name": "ข้าวผัด สูตร 56",
        "cal": 807
    },
    "stir_fried_chicken_57": {
        "name": "ไก่ผัด สูตร 57",
        "cal": 481
    },
    "stir_fried_pork_58": {
        "name": "หมูผัด สูตร 58",
        "cal": 94
    },
    "fried_shrimp_59": {
        "name": "กุ้งทอด สูตร 59",
        "cal": 254
    },
    "fried_shrimp_60": {
        "name": "กุ้งทอด สูตร 60",
        "cal": 566
    },
    "grilled_rice_61": {
        "name": "ข้าวย่าง สูตร 61",
        "cal": 568
    },
    "stir_fried_squid_62": {
        "name": "ปลาหมึกผัด สูตร 62",
        "cal": 771
    },
    "stir_fried_squid_63": {
        "name": "ปลาหมึกผัด สูตร 63",
        "cal": 630
    },
    "steamed_soup_64": {
        "name": "ซุปนึ่ง สูตร 64",
        "cal": 352
    },
    "fried_pork_65": {
        "name": "หมูทอด สูตร 65",
        "cal": 138
    },
    "spicy_soup_66": {
        "name": "ซุปยำ สูตร 66",
        "cal": 611
    },
    "grilled_fish_67": {
        "name": "ปลาย่าง สูตร 67",
        "cal": 764
    },
    "fried_rice_68": {
        "name": "ข้าวทอด สูตร 68",
        "cal": 568
    },
    "stir_fried_fish_69": {
        "name": "ปลาผัด สูตร 69",
        "cal": 128
    },
    "grilled_noodle_70": {
        "name": "บะหมี่ย่าง สูตร 70",
        "cal": 714
    },
    "fried_beef_71": {
        "name": "เนื้อทอด สูตร 71",
        "cal": 738
    },
    "stir_fried_shrimp_72": {
        "name": "กุ้งผัด สูตร 72",
        "cal": 713
    },
    "spicy_shrimp_73": {
        "name": "กุ้งยำ สูตร 73",
        "cal": 292
    },
    "steamed_shrimp_74": {
        "name": "กุ้งนึ่ง สูตร 74",
        "cal": 238
    },
    "spicy_soup_75": {
        "name": "ซุปยำ สูตร 75",
        "cal": 776
    },
    "spicy_rice_76": {
        "name": "ข้าวยำ สูตร 76",
        "cal": 31
    },
    "fried_noodle_77": {
        "name": "บะหมี่ทอด สูตร 77",
        "cal": 224
    },
    "fried_chicken_78": {
        "name": "ไก่ทอด สูตร 78",
        "cal": 285
    },
    "spicy_fish_79": {
        "name": "ปลายำ สูตร 79",
        "cal": 287
    },
    "fried_fish_80": {
        "name": "ปลาทอด สูตร 80",
        "cal": 655
    },
    "steamed_chicken_81": {
        "name": "ไก่นึ่ง สูตร 81",
        "cal": 179
    },
    "steamed_chicken_82": {
        "name": "ไก่นึ่ง สูตร 82",
        "cal": 184
    },
    "grilled_fish_83": {
        "name": "ปลาย่าง สูตร 83",
        "cal": 774
    },
    "boiled_shrimp_84": {
        "name": "กุ้งต้ม สูตร 84",
        "cal": 718
    },
    "fried_soup_85": {
        "name": "ซุปทอด สูตร 85",
        "cal": 87
    },
    "stir_fried_pork_86": {
        "name": "หมูผัด สูตร 86",
        "cal": 269
    },
    "fried_rice_87": {
        "name": "ข้าวทอด สูตร 87",
        "cal": 551
    },
    "grilled_chicken_88": {
        "name": "ไก่ย่าง สูตร 88",
        "cal": 604
    },
    "grilled_pork_89": {
        "name": "หมูย่าง สูตร 89",
        "cal": 838
    },
    "steamed_beef_90": {
        "name": "เนื้อนึ่ง สูตร 90",
        "cal": 686
    },
    "boiled_shrimp_91": {
        "name": "กุ้งต้ม สูตร 91",
        "cal": 95
    },
    "spicy_chicken_92": {
        "name": "ไก่ยำ สูตร 92",
        "cal": 603
    },
    "grilled_noodle_93": {
        "name": "บะหมี่ย่าง สูตร 93",
        "cal": 69
    },
    "boiled_fish_94": {
        "name": "ปลาต้ม สูตร 94",
        "cal": 564
    },
    "spicy_beef_95": {
        "name": "เนื้อยำ สูตร 95",
        "cal": 227
    },
    "fried_squid_96": {
        "name": "ปลาหมึกทอด สูตร 96",
        "cal": 742
    },
    "fried_rice_97": {
        "name": "ข้าวทอด สูตร 97",
        "cal": 605
    },
    "fried_soup_98": {
        "name": "ซุปทอด สูตร 98",
        "cal": 478
    },
    "spicy_pork_99": {
        "name": "หมูยำ สูตร 99",
        "cal": 523
    },
    "fried_noodle_100": {
        "name": "บะหมี่ทอด สูตร 100",
        "cal": 464
    },
    "grilled_shrimp_101": {
        "name": "กุ้งย่าง สูตร 101",
        "cal": 167
    },
    "fried_chicken_102": {
        "name": "ไก่ทอด สูตร 102",
        "cal": 126
    },
    "fried_rice_103": {
        "name": "ข้าวทอด สูตร 103",
        "cal": 232
    },
    "spicy_noodle_104": {
        "name": "บะหมี่ยำ สูตร 104",
        "cal": 803
    },
    "grilled_pork_105": {
        "name": "หมูย่าง สูตร 105",
        "cal": 536
    },
    "fried_squid_106": {
        "name": "ปลาหมึกทอด สูตร 106",
        "cal": 176
    },
    "stir_fried_fish_107": {
        "name": "ปลาผัด สูตร 107",
        "cal": 510
    },
    "spicy_rice_108": {
        "name": "ข้าวยำ สูตร 108",
        "cal": 153
    },
    "stir_fried_beef_109": {
        "name": "เนื้อผัด สูตร 109",
        "cal": 382
    },
    "fried_soup_110": {
        "name": "ซุปทอด สูตร 110",
        "cal": 139
    },
    "fried_rice_111": {
        "name": "ข้าวทอด สูตร 111",
        "cal": 539
    },
    "grilled_fish_112": {
        "name": "ปลาย่าง สูตร 112",
        "cal": 342
    },
    "spicy_beef_113": {
        "name": "เนื้อยำ สูตร 113",
        "cal": 75
    },
    "spicy_noodle_114": {
        "name": "บะหมี่ยำ สูตร 114",
        "cal": 47
    },
    "boiled_rice_115": {
        "name": "ข้าวต้ม สูตร 115",
        "cal": 158
    },
    "fried_beef_116": {
        "name": "เนื้อทอด สูตร 116",
        "cal": 141
    },
    "steamed_noodle_117": {
        "name": "บะหมี่นึ่ง สูตร 117",
        "cal": 741
    },
    "stir_fried_chicken_118": {
        "name": "ไก่ผัด สูตร 118",
        "cal": 643
    },
    "steamed_chicken_119": {
        "name": "ไก่นึ่ง สูตร 119",
        "cal": 257
    },
    "boiled_rice_120": {
        "name": "ข้าวต้ม สูตร 120",
        "cal": 802
    },
    "steamed_chicken_121": {
        "name": "ไก่นึ่ง สูตร 121",
        "cal": 424
    },
    "spicy_shrimp_122": {
        "name": "กุ้งยำ สูตร 122",
        "cal": 647
    },
    "steamed_pork_123": {
        "name": "หมูนึ่ง สูตร 123",
        "cal": 615
    },
    "fried_soup_124": {
        "name": "ซุปทอด สูตร 124",
        "cal": 493
    },
    "spicy_squid_125": {
        "name": "ปลาหมึกยำ สูตร 125",
        "cal": 800
    },
    "grilled_soup_126": {
        "name": "ซุปย่าง สูตร 126",
        "cal": 383
    },
    "grilled_squid_127": {
        "name": "ปลาหมึกย่าง สูตร 127",
        "cal": 140
    },
    "spicy_noodle_128": {
        "name": "บะหมี่ยำ สูตร 128",
        "cal": 678
    },
    "stir_fried_beef_129": {
        "name": "เนื้อผัด สูตร 129",
        "cal": 142
    },
    "grilled_squid_130": {
        "name": "ปลาหมึกย่าง สูตร 130",
        "cal": 634
    },
    "boiled_pork_131": {
        "name": "หมูต้ม สูตร 131",
        "cal": 290
    },
    "fried_shrimp_132": {
        "name": "กุ้งทอด สูตร 132",
        "cal": 316
    },
    "fried_chicken_133": {
        "name": "ไก่ทอด สูตร 133",
        "cal": 507
    },
    "steamed_shrimp_134": {
        "name": "กุ้งนึ่ง สูตร 134",
        "cal": 310
    },
    "stir_fried_beef_135": {
        "name": "เนื้อผัด สูตร 135",
        "cal": 86
    },
    "fried_pork_136": {
        "name": "หมูทอด สูตร 136",
        "cal": 91
    },
    "grilled_fish_137": {
        "name": "ปลาย่าง สูตร 137",
        "cal": 375
    },
    "grilled_soup_138": {
        "name": "ซุปย่าง สูตร 138",
        "cal": 448
    },
    "stir_fried_soup_139": {
        "name": "ซุปผัด สูตร 139",
        "cal": 142
    },
    "spicy_beef_140": {
        "name": "เนื้อยำ สูตร 140",
        "cal": 701
    },
    "grilled_shrimp_141": {
        "name": "กุ้งย่าง สูตร 141",
        "cal": 624
    },
    "steamed_soup_142": {
        "name": "ซุปนึ่ง สูตร 142",
        "cal": 244
    },
    "steamed_chicken_143": {
        "name": "ไก่นึ่ง สูตร 143",
        "cal": 23
    },
    "stir_fried_soup_144": {
        "name": "ซุปผัด สูตร 144",
        "cal": 224
    },
    "grilled_chicken_145": {
        "name": "ไก่ย่าง สูตร 145",
        "cal": 639
    },
    "spicy_pork_146": {
        "name": "หมูยำ สูตร 146",
        "cal": 319
    },
    "steamed_noodle_147": {
        "name": "บะหมี่นึ่ง สูตร 147",
        "cal": 611
    },
    "grilled_soup_148": {
        "name": "ซุปย่าง สูตร 148",
        "cal": 472
    },
    "spicy_squid_149": {
        "name": "ปลาหมึกยำ สูตร 149",
        "cal": 340
    },
    "spicy_fish_150": {
        "name": "ปลายำ สูตร 150",
        "cal": 742
    },
    "steamed_rice_151": {
        "name": "ข้าวนึ่ง สูตร 151",
        "cal": 330
    },
    "grilled_shrimp_152": {
        "name": "กุ้งย่าง สูตร 152",
        "cal": 227
    },
    "grilled_pork_153": {
        "name": "หมูย่าง สูตร 153",
        "cal": 245
    },
    "grilled_fish_154": {
        "name": "ปลาย่าง สูตร 154",
        "cal": 144
    },
    "spicy_beef_155": {
        "name": "เนื้อยำ สูตร 155",
        "cal": 810
    },
    "boiled_rice_156": {
        "name": "ข้าวต้ม สูตร 156",
        "cal": 589
    },
    "fried_chicken_157": {
        "name": "ไก่ทอด สูตร 157",
        "cal": 622
    },
    "stir_fried_shrimp_158": {
        "name": "กุ้งผัด สูตร 158",
        "cal": 701
    },
    "steamed_rice_159": {
        "name": "ข้าวนึ่ง สูตร 159",
        "cal": 675
    },
    "spicy_beef_160": {
        "name": "เนื้อยำ สูตร 160",
        "cal": 590
    },
    "stir_fried_beef_161": {
        "name": "เนื้อผัด สูตร 161",
        "cal": 724
    },
    "boiled_beef_162": {
        "name": "เนื้อต้ม สูตร 162",
        "cal": 132
    },
    "steamed_fish_163": {
        "name": "ปลานึ่ง สูตร 163",
        "cal": 593
    },
    "grilled_rice_164": {
        "name": "ข้าวย่าง สูตร 164",
        "cal": 618
    },
    "spicy_soup_165": {
        "name": "ซุปยำ สูตร 165",
        "cal": 484
    },
    "stir_fried_shrimp_166": {
        "name": "กุ้งผัด สูตร 166",
        "cal": 264
    },
    "stir_fried_chicken_167": {
        "name": "ไก่ผัด สูตร 167",
        "cal": 414
    },
    "boiled_chicken_168": {
        "name": "ไก่ต้ม สูตร 168",
        "cal": 352
    },
    "fried_pork_169": {
        "name": "หมูทอด สูตร 169",
        "cal": 242
    },
    "spicy_beef_170": {
        "name": "เนื้อยำ สูตร 170",
        "cal": 443
    },
    "grilled_shrimp_171": {
        "name": "กุ้งย่าง สูตร 171",
        "cal": 369
    },
    "grilled_beef_172": {
        "name": "เนื้อย่าง สูตร 172",
        "cal": 199
    },
    "fried_squid_173": {
        "name": "ปลาหมึกทอด สูตร 173",
        "cal": 589
    },
    "steamed_pork_174": {
        "name": "หมูนึ่ง สูตร 174",
        "cal": 808
    },
    "grilled_rice_175": {
        "name": "ข้าวย่าง สูตร 175",
        "cal": 633
    },
    "fried_squid_176": {
        "name": "ปลาหมึกทอด สูตร 176",
        "cal": 422
    },
    "steamed_noodle_177": {
        "name": "บะหมี่นึ่ง สูตร 177",
        "cal": 332
    },
    "stir_fried_squid_178": {
        "name": "ปลาหมึกผัด สูตร 178",
        "cal": 794
    },
    "spicy_squid_179": {
        "name": "ปลาหมึกยำ สูตร 179",
        "cal": 188
    },
    "stir_fried_soup_180": {
        "name": "ซุปผัด สูตร 180",
        "cal": 767
    },
    "boiled_noodle_181": {
        "name": "บะหมี่ต้ม สูตร 181",
        "cal": 59
    },
    "spicy_squid_182": {
        "name": "ปลาหมึกยำ สูตร 182",
        "cal": 792
    },
    "grilled_chicken_183": {
        "name": "ไก่ย่าง สูตร 183",
        "cal": 195
    },
    "stir_fried_squid_184": {
        "name": "ปลาหมึกผัด สูตร 184",
        "cal": 676
    },
    "steamed_beef_185": {
        "name": "เนื้อนึ่ง สูตร 185",
        "cal": 686
    },
    "grilled_beef_186": {
        "name": "เนื้อย่าง สูตร 186",
        "cal": 520
    },
    "steamed_shrimp_187": {
        "name": "กุ้งนึ่ง สูตร 187",
        "cal": 39
    },
    "grilled_fish_188": {
        "name": "ปลาย่าง สูตร 188",
        "cal": 732
    },
    "spicy_pork_189": {
        "name": "หมูยำ สูตร 189",
        "cal": 62
    },
    "steamed_rice_190": {
        "name": "ข้าวนึ่ง สูตร 190",
        "cal": 632
    },
    "steamed_chicken_191": {
        "name": "ไก่นึ่ง สูตร 191",
        "cal": 448
    },
    "spicy_squid_192": {
        "name": "ปลาหมึกยำ สูตร 192",
        "cal": 186
    },
    "stir_fried_fish_193": {
        "name": "ปลาผัด สูตร 193",
        "cal": 540
    },
    "spicy_noodle_194": {
        "name": "บะหมี่ยำ สูตร 194",
        "cal": 456
    },
    "steamed_shrimp_195": {
        "name": "กุ้งนึ่ง สูตร 195",
        "cal": 249
    },
    "boiled_squid_196": {
        "name": "ปลาหมึกต้ม สูตร 196",
        "cal": 249
    },
    "stir_fried_fish_197": {
        "name": "ปลาผัด สูตร 197",
        "cal": 309
    },
    "steamed_fish_198": {
        "name": "ปลานึ่ง สูตร 198",
        "cal": 102
    },
    "stir_fried_shrimp_199": {
        "name": "กุ้งผัด สูตร 199",
        "cal": 361
    },
    "stir_fried_fish_200": {
        "name": "ปลาผัด สูตร 200",
        "cal": 78
    },
    "grilled_noodle_201": {
        "name": "บะหมี่ย่าง สูตร 201",
        "cal": 803
    },
    "boiled_beef_202": {
        "name": "เนื้อต้ม สูตร 202",
        "cal": 105
    },
    "spicy_beef_203": {
        "name": "เนื้อยำ สูตร 203",
        "cal": 693
    },
    "spicy_noodle_204": {
        "name": "บะหมี่ยำ สูตร 204",
        "cal": 785
    },
    "grilled_shrimp_205": {
        "name": "กุ้งย่าง สูตร 205",
        "cal": 137
    },
    "steamed_noodle_206": {
        "name": "บะหมี่นึ่ง สูตร 206",
        "cal": 757
    },
    "steamed_fish_207": {
        "name": "ปลานึ่ง สูตร 207",
        "cal": 574
    },
    "boiled_shrimp_208": {
        "name": "กุ้งต้ม สูตร 208",
        "cal": 463
    },
    "grilled_noodle_209": {
        "name": "บะหมี่ย่าง สูตร 209",
        "cal": 770
    },
    "grilled_soup_210": {
        "name": "ซุปย่าง สูตร 210",
        "cal": 501
    },
    "grilled_shrimp_211": {
        "name": "กุ้งย่าง สูตร 211",
        "cal": 319
    },
    "steamed_pork_212": {
        "name": "หมูนึ่ง สูตร 212",
        "cal": 646
    },
    "spicy_soup_213": {
        "name": "ซุปยำ สูตร 213",
        "cal": 420
    },
    "fried_chicken_214": {
        "name": "ไก่ทอด สูตร 214",
        "cal": 464
    },
    "fried_rice_215": {
        "name": "ข้าวทอด สูตร 215",
        "cal": 142
    },
    "fried_squid_216": {
        "name": "ปลาหมึกทอด สูตร 216",
        "cal": 163
    },
    "boiled_rice_217": {
        "name": "ข้าวต้ม สูตร 217",
        "cal": 184
    },
    "grilled_rice_218": {
        "name": "ข้าวย่าง สูตร 218",
        "cal": 532
    },
    "fried_noodle_219": {
        "name": "บะหมี่ทอด สูตร 219",
        "cal": 422
    },
    "fried_noodle_220": {
        "name": "บะหมี่ทอด สูตร 220",
        "cal": 230
    },
    "fried_rice_221": {
        "name": "ข้าวทอด สูตร 221",
        "cal": 89
    },
    "boiled_fish_222": {
        "name": "ปลาต้ม สูตร 222",
        "cal": 454
    },
    "boiled_fish_223": {
        "name": "ปลาต้ม สูตร 223",
        "cal": 598
    },
    "grilled_pork_224": {
        "name": "หมูย่าง สูตร 224",
        "cal": 518
    },
    "boiled_soup_225": {
        "name": "ซุปต้ม สูตร 225",
        "cal": 579
    },
    "stir_fried_rice_226": {
        "name": "ข้าวผัด สูตร 226",
        "cal": 764
    },
    "spicy_rice_227": {
        "name": "ข้าวยำ สูตร 227",
        "cal": 393
    },
    "boiled_shrimp_228": {
        "name": "กุ้งต้ม สูตร 228",
        "cal": 638
    },
    "fried_soup_229": {
        "name": "ซุปทอด สูตร 229",
        "cal": 840
    },
    "grilled_beef_230": {
        "name": "เนื้อย่าง สูตร 230",
        "cal": 281
    },
    "grilled_shrimp_231": {
        "name": "กุ้งย่าง สูตร 231",
        "cal": 128
    },
    "spicy_beef_232": {
        "name": "เนื้อยำ สูตร 232",
        "cal": 83
    },
    "spicy_beef_233": {
        "name": "เนื้อยำ สูตร 233",
        "cal": 269
    },
    "grilled_rice_234": {
        "name": "ข้าวย่าง สูตร 234",
        "cal": 311
    },
    "fried_beef_235": {
        "name": "เนื้อทอด สูตร 235",
        "cal": 518
    },
    "steamed_pork_236": {
        "name": "หมูนึ่ง สูตร 236",
        "cal": 326
    },
    "fried_shrimp_237": {
        "name": "กุ้งทอด สูตร 237",
        "cal": 565
    },
    "spicy_pork_238": {
        "name": "หมูยำ สูตร 238",
        "cal": 36
    },
    "boiled_soup_239": {
        "name": "ซุปต้ม สูตร 239",
        "cal": 58
    },
    "boiled_soup_240": {
        "name": "ซุปต้ม สูตร 240",
        "cal": 626
    },
    "stir_fried_shrimp_241": {
        "name": "กุ้งผัด สูตร 241",
        "cal": 106
    },
    "grilled_rice_242": {
        "name": "ข้าวย่าง สูตร 242",
        "cal": 28
    },
    "stir_fried_beef_243": {
        "name": "เนื้อผัด สูตร 243",
        "cal": 819
    },
    "grilled_shrimp_244": {
        "name": "กุ้งย่าง สูตร 244",
        "cal": 85
    },
    "spicy_rice_245": {
        "name": "ข้าวยำ สูตร 245",
        "cal": 31
    },
    "spicy_beef_246": {
        "name": "เนื้อยำ สูตร 246",
        "cal": 743
    },
    "steamed_shrimp_247": {
        "name": "กุ้งนึ่ง สูตร 247",
        "cal": 751
    },
    "boiled_beef_248": {
        "name": "เนื้อต้ม สูตร 248",
        "cal": 677
    },
    "steamed_chicken_249": {
        "name": "ไก่นึ่ง สูตร 249",
        "cal": 118
    },
    "fried_noodle_250": {
        "name": "บะหมี่ทอด สูตร 250",
        "cal": 274
    },
    "fried_noodle_251": {
        "name": "บะหมี่ทอด สูตร 251",
        "cal": 775
    },
    "grilled_fish_252": {
        "name": "ปลาย่าง สูตร 252",
        "cal": 332
    },
    "stir_fried_rice_253": {
        "name": "ข้าวผัด สูตร 253",
        "cal": 728
    },
    "steamed_beef_254": {
        "name": "เนื้อนึ่ง สูตร 254",
        "cal": 331
    },
    "spicy_pork_255": {
        "name": "หมูยำ สูตร 255",
        "cal": 796
    },
    "spicy_pork_256": {
        "name": "หมูยำ สูตร 256",
        "cal": 502
    },
    "grilled_soup_257": {
        "name": "ซุปย่าง สูตร 257",
        "cal": 822
    },
    "stir_fried_fish_258": {
        "name": "ปลาผัด สูตร 258",
        "cal": 170
    },
    "steamed_noodle_259": {
        "name": "บะหมี่นึ่ง สูตร 259",
        "cal": 603
    },
    "spicy_pork_260": {
        "name": "หมูยำ สูตร 260",
        "cal": 738
    },
    "boiled_rice_261": {
        "name": "ข้าวต้ม สูตร 261",
        "cal": 596
    },
    "spicy_shrimp_262": {
        "name": "กุ้งยำ สูตร 262",
        "cal": 324
    },
    "spicy_chicken_263": {
        "name": "ไก่ยำ สูตร 263",
        "cal": 160
    },
    "grilled_shrimp_264": {
        "name": "กุ้งย่าง สูตร 264",
        "cal": 133
    },
    "spicy_soup_265": {
        "name": "ซุปยำ สูตร 265",
        "cal": 142
    },
    "boiled_noodle_266": {
        "name": "บะหมี่ต้ม สูตร 266",
        "cal": 708
    },
    "boiled_noodle_267": {
        "name": "บะหมี่ต้ม สูตร 267",
        "cal": 513
    },
    "boiled_soup_268": {
        "name": "ซุปต้ม สูตร 268",
        "cal": 836
    },
    "fried_fish_269": {
        "name": "ปลาทอด สูตร 269",
        "cal": 515
    },
    "fried_shrimp_270": {
        "name": "กุ้งทอด สูตร 270",
        "cal": 47
    },
    "steamed_shrimp_271": {
        "name": "กุ้งนึ่ง สูตร 271",
        "cal": 670
    },
    "grilled_squid_272": {
        "name": "ปลาหมึกย่าง สูตร 272",
        "cal": 613
    },
    "fried_beef_273": {
        "name": "เนื้อทอด สูตร 273",
        "cal": 779
    },
    "boiled_fish_274": {
        "name": "ปลาต้ม สูตร 274",
        "cal": 147
    },
    "steamed_soup_275": {
        "name": "ซุปนึ่ง สูตร 275",
        "cal": 195
    },
    "fried_pork_276": {
        "name": "หมูทอด สูตร 276",
        "cal": 808
    },
    "grilled_squid_277": {
        "name": "ปลาหมึกย่าง สูตร 277",
        "cal": 539
    },
    "steamed_noodle_278": {
        "name": "บะหมี่นึ่ง สูตร 278",
        "cal": 221
    },
    "grilled_squid_279": {
        "name": "ปลาหมึกย่าง สูตร 279",
        "cal": 166
    },
    "stir_fried_shrimp_280": {
        "name": "กุ้งผัด สูตร 280",
        "cal": 63
    },
    "boiled_noodle_281": {
        "name": "บะหมี่ต้ม สูตร 281",
        "cal": 608
    },
    "spicy_soup_282": {
        "name": "ซุปยำ สูตร 282",
        "cal": 816
    },
    "stir_fried_rice_283": {
        "name": "ข้าวผัด สูตร 283",
        "cal": 475
    },
    "fried_pork_284": {
        "name": "หมูทอด สูตร 284",
        "cal": 56
    },
    "boiled_squid_285": {
        "name": "ปลาหมึกต้ม สูตร 285",
        "cal": 187
    },
    "steamed_shrimp_286": {
        "name": "กุ้งนึ่ง สูตร 286",
        "cal": 618
    },
    "grilled_chicken_287": {
        "name": "ไก่ย่าง สูตร 287",
        "cal": 742
    },
    "stir_fried_soup_288": {
        "name": "ซุปผัด สูตร 288",
        "cal": 226
    },
    "boiled_beef_289": {
        "name": "เนื้อต้ม สูตร 289",
        "cal": 451
    },
    "grilled_noodle_290": {
        "name": "บะหมี่ย่าง สูตร 290",
        "cal": 709
    },
    "grilled_soup_291": {
        "name": "ซุปย่าง สูตร 291",
        "cal": 80
    },
    "steamed_fish_292": {
        "name": "ปลานึ่ง สูตร 292",
        "cal": 707
    },
    "boiled_chicken_293": {
        "name": "ไก่ต้ม สูตร 293",
        "cal": 575
    },
    "boiled_squid_294": {
        "name": "ปลาหมึกต้ม สูตร 294",
        "cal": 184
    },
    "grilled_noodle_295": {
        "name": "บะหมี่ย่าง สูตร 295",
        "cal": 459
    },
    "boiled_chicken_296": {
        "name": "ไก่ต้ม สูตร 296",
        "cal": 311
    },
    "fried_rice_297": {
        "name": "ข้าวทอด สูตร 297",
        "cal": 488
    },
    "fried_beef_298": {
        "name": "เนื้อทอด สูตร 298",
        "cal": 541
    },
    "fried_soup_299": {
        "name": "ซุปทอด สูตร 299",
        "cal": 663
    },
    "stir_fried_soup_300": {
        "name": "ซุปผัด สูตร 300",
        "cal": 42
    },
    "steamed_chicken_301": {
        "name": "ไก่นึ่ง สูตร 301",
        "cal": 442
    },
    "stir_fried_squid_302": {
        "name": "ปลาหมึกผัด สูตร 302",
        "cal": 474
    },
    "spicy_noodle_303": {
        "name": "บะหมี่ยำ สูตร 303",
        "cal": 420
    },
    "spicy_pork_304": {
        "name": "หมูยำ สูตร 304",
        "cal": 201
    },
    "grilled_shrimp_305": {
        "name": "กุ้งย่าง สูตร 305",
        "cal": 557
    },
    "steamed_squid_306": {
        "name": "ปลาหมึกนึ่ง สูตร 306",
        "cal": 333
    },
    "spicy_fish_307": {
        "name": "ปลายำ สูตร 307",
        "cal": 129
    },
    "stir_fried_shrimp_308": {
        "name": "กุ้งผัด สูตร 308",
        "cal": 366
    },
    "spicy_soup_309": {
        "name": "ซุปยำ สูตร 309",
        "cal": 59
    },
    "fried_soup_310": {
        "name": "ซุปทอด สูตร 310",
        "cal": 688
    },
    "stir_fried_shrimp_311": {
        "name": "กุ้งผัด สูตร 311",
        "cal": 268
    },
    "fried_squid_312": {
        "name": "ปลาหมึกทอด สูตร 312",
        "cal": 485
    },
    "spicy_shrimp_313": {
        "name": "กุ้งยำ สูตร 313",
        "cal": 512
    },
    "stir_fried_pork_314": {
        "name": "หมูผัด สูตร 314",
        "cal": 114
    },
    "boiled_fish_315": {
        "name": "ปลาต้ม สูตร 315",
        "cal": 220
    },
    "fried_rice_316": {
        "name": "ข้าวทอด สูตร 316",
        "cal": 398
    },
    "boiled_fish_317": {
        "name": "ปลาต้ม สูตร 317",
        "cal": 633
    },
    "steamed_soup_318": {
        "name": "ซุปนึ่ง สูตร 318",
        "cal": 422
    },
    "fried_beef_319": {
        "name": "เนื้อทอด สูตร 319",
        "cal": 546
    },
    "steamed_fish_320": {
        "name": "ปลานึ่ง สูตร 320",
        "cal": 713
    },
    "boiled_noodle_321": {
        "name": "บะหมี่ต้ม สูตร 321",
        "cal": 835
    },
    "stir_fried_rice_322": {
        "name": "ข้าวผัด สูตร 322",
        "cal": 137
    },
    "stir_fried_rice_323": {
        "name": "ข้าวผัด สูตร 323",
        "cal": 234
    },
    "stir_fried_pork_324": {
        "name": "หมูผัด สูตร 324",
        "cal": 241
    },
    "steamed_fish_325": {
        "name": "ปลานึ่ง สูตร 325",
        "cal": 210
    },
    "spicy_noodle_326": {
        "name": "บะหมี่ยำ สูตร 326",
        "cal": 292
    },
    "spicy_squid_327": {
        "name": "ปลาหมึกยำ สูตร 327",
        "cal": 63
    },
    "spicy_fish_328": {
        "name": "ปลายำ สูตร 328",
        "cal": 775
    },
    "grilled_squid_329": {
        "name": "ปลาหมึกย่าง สูตร 329",
        "cal": 37
    },
    "stir_fried_beef_330": {
        "name": "เนื้อผัด สูตร 330",
        "cal": 351
    },
    "fried_pork_331": {
        "name": "หมูทอด สูตร 331",
        "cal": 525
    },
    "spicy_soup_332": {
        "name": "ซุปยำ สูตร 332",
        "cal": 542
    },
    "fried_shrimp_333": {
        "name": "กุ้งทอด สูตร 333",
        "cal": 48
    },
    "fried_rice_334": {
        "name": "ข้าวทอด สูตร 334",
        "cal": 91
    },
    "grilled_shrimp_335": {
        "name": "กุ้งย่าง สูตร 335",
        "cal": 131
    },
    "boiled_beef_336": {
        "name": "เนื้อต้ม สูตร 336",
        "cal": 485
    },
    "spicy_noodle_337": {
        "name": "บะหมี่ยำ สูตร 337",
        "cal": 725
    },
    "grilled_beef_338": {
        "name": "เนื้อย่าง สูตร 338",
        "cal": 482
    },
    "boiled_fish_339": {
        "name": "ปลาต้ม สูตร 339",
        "cal": 441
    },
    "spicy_chicken_340": {
        "name": "ไก่ยำ สูตร 340",
        "cal": 485
    },
    "spicy_beef_341": {
        "name": "เนื้อยำ สูตร 341",
        "cal": 222
    },
    "steamed_squid_342": {
        "name": "ปลาหมึกนึ่ง สูตร 342",
        "cal": 109
    },
    "boiled_fish_343": {
        "name": "ปลาต้ม สูตร 343",
        "cal": 221
    },
    "boiled_chicken_344": {
        "name": "ไก่ต้ม สูตร 344",
        "cal": 231
    },
    "grilled_chicken_345": {
        "name": "ไก่ย่าง สูตร 345",
        "cal": 352
    },
    "steamed_noodle_346": {
        "name": "บะหมี่นึ่ง สูตร 346",
        "cal": 411
    },
    "fried_chicken_347": {
        "name": "ไก่ทอด สูตร 347",
        "cal": 314
    },
    "spicy_beef_348": {
        "name": "เนื้อยำ สูตร 348",
        "cal": 437
    },
    "fried_shrimp_349": {
        "name": "กุ้งทอด สูตร 349",
        "cal": 561
    },
    "fried_shrimp_350": {
        "name": "กุ้งทอด สูตร 350",
        "cal": 832
    },
    "fried_chicken_351": {
        "name": "ไก่ทอด สูตร 351",
        "cal": 444
    },
    "stir_fried_fish_352": {
        "name": "ปลาผัด สูตร 352",
        "cal": 489
    },
    "spicy_soup_353": {
        "name": "ซุปยำ สูตร 353",
        "cal": 290
    },
    "stir_fried_soup_354": {
        "name": "ซุปผัด สูตร 354",
        "cal": 449
    },
    "spicy_pork_355": {
        "name": "หมูยำ สูตร 355",
        "cal": 256
    },
    "grilled_chicken_356": {
        "name": "ไก่ย่าง สูตร 356",
        "cal": 164
    },
    "steamed_shrimp_357": {
        "name": "กุ้งนึ่ง สูตร 357",
        "cal": 426
    },
    "steamed_noodle_358": {
        "name": "บะหมี่นึ่ง สูตร 358",
        "cal": 486
    },
    "grilled_fish_359": {
        "name": "ปลาย่าง สูตร 359",
        "cal": 225
    },
    "fried_squid_360": {
        "name": "ปลาหมึกทอด สูตร 360",
        "cal": 447
    },
    "spicy_beef_361": {
        "name": "เนื้อยำ สูตร 361",
        "cal": 457
    },
    "stir_fried_fish_362": {
        "name": "ปลาผัด สูตร 362",
        "cal": 456
    },
    "fried_rice_363": {
        "name": "ข้าวทอด สูตร 363",
        "cal": 847
    },
    "grilled_squid_364": {
        "name": "ปลาหมึกย่าง สูตร 364",
        "cal": 496
    },
    "boiled_chicken_365": {
        "name": "ไก่ต้ม สูตร 365",
        "cal": 780
    },
    "stir_fried_fish_366": {
        "name": "ปลาผัด สูตร 366",
        "cal": 204
    },
    "fried_soup_367": {
        "name": "ซุปทอด สูตร 367",
        "cal": 846
    },
    "stir_fried_beef_368": {
        "name": "เนื้อผัด สูตร 368",
        "cal": 392
    },
    "spicy_squid_369": {
        "name": "ปลาหมึกยำ สูตร 369",
        "cal": 393
    },
    "grilled_chicken_370": {
        "name": "ไก่ย่าง สูตร 370",
        "cal": 87
    },
    "spicy_squid_371": {
        "name": "ปลาหมึกยำ สูตร 371",
        "cal": 529
    },
    "boiled_chicken_372": {
        "name": "ไก่ต้ม สูตร 372",
        "cal": 505
    },
    "boiled_chicken_373": {
        "name": "ไก่ต้ม สูตร 373",
        "cal": 423
    },
    "stir_fried_chicken_374": {
        "name": "ไก่ผัด สูตร 374",
        "cal": 203
    },
    "fried_beef_375": {
        "name": "เนื้อทอด สูตร 375",
        "cal": 585
    },
    "grilled_squid_376": {
        "name": "ปลาหมึกย่าง สูตร 376",
        "cal": 652
    },
    "boiled_rice_377": {
        "name": "ข้าวต้ม สูตร 377",
        "cal": 544
    },
    "grilled_pork_378": {
        "name": "หมูย่าง สูตร 378",
        "cal": 198
    },
    "boiled_noodle_379": {
        "name": "บะหมี่ต้ม สูตร 379",
        "cal": 333
    },
    "spicy_fish_380": {
        "name": "ปลายำ สูตร 380",
        "cal": 547
    },
    "stir_fried_noodle_381": {
        "name": "บะหมี่ผัด สูตร 381",
        "cal": 87
    },
    "steamed_shrimp_382": {
        "name": "กุ้งนึ่ง สูตร 382",
        "cal": 558
    },
    "steamed_noodle_383": {
        "name": "บะหมี่นึ่ง สูตร 383",
        "cal": 346
    },
    "fried_beef_384": {
        "name": "เนื้อทอด สูตร 384",
        "cal": 821
    },
    "steamed_noodle_385": {
        "name": "บะหมี่นึ่ง สูตร 385",
        "cal": 58
    },
    "grilled_noodle_386": {
        "name": "บะหมี่ย่าง สูตร 386",
        "cal": 810
    },
    "stir_fried_rice_387": {
        "name": "ข้าวผัด สูตร 387",
        "cal": 289
    },
    "spicy_pork_388": {
        "name": "หมูยำ สูตร 388",
        "cal": 503
    },
    "spicy_fish_389": {
        "name": "ปลายำ สูตร 389",
        "cal": 289
    },
    "stir_fried_shrimp_390": {
        "name": "กุ้งผัด สูตร 390",
        "cal": 156
    },
    "boiled_shrimp_391": {
        "name": "กุ้งต้ม สูตร 391",
        "cal": 295
    },
    "spicy_pork_392": {
        "name": "หมูยำ สูตร 392",
        "cal": 299
    },
    "grilled_rice_393": {
        "name": "ข้าวย่าง สูตร 393",
        "cal": 836
    },
    "grilled_pork_394": {
        "name": "หมูย่าง สูตร 394",
        "cal": 547
    },
    "stir_fried_beef_395": {
        "name": "เนื้อผัด สูตร 395",
        "cal": 70
    },
    "fried_chicken_396": {
        "name": "ไก่ทอด สูตร 396",
        "cal": 389
    },
    "steamed_fish_397": {
        "name": "ปลานึ่ง สูตร 397",
        "cal": 714
    },
    "stir_fried_shrimp_398": {
        "name": "กุ้งผัด สูตร 398",
        "cal": 812
    },
    "fried_squid_399": {
        "name": "ปลาหมึกทอด สูตร 399",
        "cal": 627
    },
    "grilled_soup_400": {
        "name": "ซุปย่าง สูตร 400",
        "cal": 336
    },
    "steamed_soup_401": {
        "name": "ซุปนึ่ง สูตร 401",
        "cal": 40
    },
    "grilled_noodle_402": {
        "name": "บะหมี่ย่าง สูตร 402",
        "cal": 487
    },
    "boiled_rice_403": {
        "name": "ข้าวต้ม สูตร 403",
        "cal": 526
    },
    "stir_fried_noodle_404": {
        "name": "บะหมี่ผัด สูตร 404",
        "cal": 656
    },
    "grilled_beef_405": {
        "name": "เนื้อย่าง สูตร 405",
        "cal": 798
    },
    "boiled_fish_406": {
        "name": "ปลาต้ม สูตร 406",
        "cal": 175
    },
    "steamed_pork_407": {
        "name": "หมูนึ่ง สูตร 407",
        "cal": 640
    },
    "fried_rice_408": {
        "name": "ข้าวทอด สูตร 408",
        "cal": 622
    },
    "spicy_noodle_409": {
        "name": "บะหมี่ยำ สูตร 409",
        "cal": 101
    },
    "spicy_noodle_410": {
        "name": "บะหมี่ยำ สูตร 410",
        "cal": 396
    },
    "fried_soup_411": {
        "name": "ซุปทอด สูตร 411",
        "cal": 456
    },
    "boiled_rice_412": {
        "name": "ข้าวต้ม สูตร 412",
        "cal": 737
    },
    "boiled_squid_413": {
        "name": "ปลาหมึกต้ม สูตร 413",
        "cal": 204
    },
    "boiled_soup_414": {
        "name": "ซุปต้ม สูตร 414",
        "cal": 568
    },
    "steamed_chicken_415": {
        "name": "ไก่นึ่ง สูตร 415",
        "cal": 659
    },
    "grilled_fish_416": {
        "name": "ปลาย่าง สูตร 416",
        "cal": 615
    },
    "spicy_fish_417": {
        "name": "ปลายำ สูตร 417",
        "cal": 365
    },
    "grilled_fish_418": {
        "name": "ปลาย่าง สูตร 418",
        "cal": 22
    },
    "grilled_fish_419": {
        "name": "ปลาย่าง สูตร 419",
        "cal": 160
    },
    "boiled_rice_420": {
        "name": "ข้าวต้ม สูตร 420",
        "cal": 285
    },
    "stir_fried_shrimp_421": {
        "name": "กุ้งผัด สูตร 421",
        "cal": 829
    },
    "boiled_soup_422": {
        "name": "ซุปต้ม สูตร 422",
        "cal": 809
    },
    "steamed_squid_423": {
        "name": "ปลาหมึกนึ่ง สูตร 423",
        "cal": 100
    },
    "fried_chicken_424": {
        "name": "ไก่ทอด สูตร 424",
        "cal": 375
    },
    "stir_fried_chicken_425": {
        "name": "ไก่ผัด สูตร 425",
        "cal": 544
    },
    "fried_soup_426": {
        "name": "ซุปทอด สูตร 426",
        "cal": 723
    },
    "fried_beef_427": {
        "name": "เนื้อทอด สูตร 427",
        "cal": 132
    },
    "boiled_rice_428": {
        "name": "ข้าวต้ม สูตร 428",
        "cal": 749
    },
    "grilled_beef_429": {
        "name": "เนื้อย่าง สูตร 429",
        "cal": 704
    },
    "boiled_chicken_430": {
        "name": "ไก่ต้ม สูตร 430",
        "cal": 386
    },
    "boiled_pork_431": {
        "name": "หมูต้ม สูตร 431",
        "cal": 418
    },
    "grilled_pork_432": {
        "name": "หมูย่าง สูตร 432",
        "cal": 583
    },
    "stir_fried_beef_433": {
        "name": "เนื้อผัด สูตร 433",
        "cal": 542
    },
    "steamed_chicken_434": {
        "name": "ไก่นึ่ง สูตร 434",
        "cal": 290
    },
    "fried_beef_435": {
        "name": "เนื้อทอด สูตร 435",
        "cal": 133
    },
    "steamed_shrimp_436": {
        "name": "กุ้งนึ่ง สูตร 436",
        "cal": 816
    },
    "steamed_shrimp_437": {
        "name": "กุ้งนึ่ง สูตร 437",
        "cal": 340
    },
    "fried_beef_438": {
        "name": "เนื้อทอด สูตร 438",
        "cal": 288
    },
    "boiled_soup_439": {
        "name": "ซุปต้ม สูตร 439",
        "cal": 325
    },
    "grilled_squid_440": {
        "name": "ปลาหมึกย่าง สูตร 440",
        "cal": 565
    },
    "steamed_pork_441": {
        "name": "หมูนึ่ง สูตร 441",
        "cal": 74
    },
    "boiled_rice_442": {
        "name": "ข้าวต้ม สูตร 442",
        "cal": 239
    },
    "grilled_beef_443": {
        "name": "เนื้อย่าง สูตร 443",
        "cal": 823
    },
    "boiled_fish_444": {
        "name": "ปลาต้ม สูตร 444",
        "cal": 351
    },
    "fried_noodle_445": {
        "name": "บะหมี่ทอด สูตร 445",
        "cal": 417
    },
    "boiled_fish_446": {
        "name": "ปลาต้ม สูตร 446",
        "cal": 289
    },
    "steamed_soup_447": {
        "name": "ซุปนึ่ง สูตร 447",
        "cal": 235
    },
    "stir_fried_squid_448": {
        "name": "ปลาหมึกผัด สูตร 448",
        "cal": 133
    },
    "spicy_fish_449": {
        "name": "ปลายำ สูตร 449",
        "cal": 98
    },
    "grilled_pork_450": {
        "name": "หมูย่าง สูตร 450",
        "cal": 57
    },
    "boiled_fish_451": {
        "name": "ปลาต้ม สูตร 451",
        "cal": 207
    },
    "boiled_rice_452": {
        "name": "ข้าวต้ม สูตร 452",
        "cal": 215
    },
    "steamed_shrimp_453": {
        "name": "กุ้งนึ่ง สูตร 453",
        "cal": 657
    },
    "spicy_beef_454": {
        "name": "เนื้อยำ สูตร 454",
        "cal": 78
    },
    "steamed_beef_455": {
        "name": "เนื้อนึ่ง สูตร 455",
        "cal": 196
    },
    "grilled_rice_456": {
        "name": "ข้าวย่าง สูตร 456",
        "cal": 729
    },
    "steamed_rice_457": {
        "name": "ข้าวนึ่ง สูตร 457",
        "cal": 828
    },
    "fried_noodle_458": {
        "name": "บะหมี่ทอด สูตร 458",
        "cal": 680
    },
    "spicy_fish_459": {
        "name": "ปลายำ สูตร 459",
        "cal": 552
    },
    "fried_soup_460": {
        "name": "ซุปทอด สูตร 460",
        "cal": 459
    },
    "stir_fried_chicken_461": {
        "name": "ไก่ผัด สูตร 461",
        "cal": 128
    },
    "stir_fried_noodle_462": {
        "name": "บะหมี่ผัด สูตร 462",
        "cal": 724
    },
    "spicy_shrimp_463": {
        "name": "กุ้งยำ สูตร 463",
        "cal": 68
    },
    "stir_fried_shrimp_464": {
        "name": "กุ้งผัด สูตร 464",
        "cal": 510
    },
    "boiled_squid_465": {
        "name": "ปลาหมึกต้ม สูตร 465",
        "cal": 370
    },
    "grilled_noodle_466": {
        "name": "บะหมี่ย่าง สูตร 466",
        "cal": 675
    },
    "grilled_noodle_467": {
        "name": "บะหมี่ย่าง สูตร 467",
        "cal": 243
    },
    "spicy_beef_468": {
        "name": "เนื้อยำ สูตร 468",
        "cal": 110
    },
    "stir_fried_beef_469": {
        "name": "เนื้อผัด สูตร 469",
        "cal": 608
    },
    "spicy_chicken_470": {
        "name": "ไก่ยำ สูตร 470",
        "cal": 778
    },
    "stir_fried_chicken_471": {
        "name": "ไก่ผัด สูตร 471",
        "cal": 255
    },
    "steamed_fish_472": {
        "name": "ปลานึ่ง สูตร 472",
        "cal": 741
    },
    "steamed_soup_473": {
        "name": "ซุปนึ่ง สูตร 473",
        "cal": 630
    },
    "boiled_fish_474": {
        "name": "ปลาต้ม สูตร 474",
        "cal": 389
    },
    "grilled_shrimp_475": {
        "name": "กุ้งย่าง สูตร 475",
        "cal": 364
    },
    "fried_shrimp_476": {
        "name": "กุ้งทอด สูตร 476",
        "cal": 417
    },
    "boiled_rice_477": {
        "name": "ข้าวต้ม สูตร 477",
        "cal": 703
    },
    "grilled_shrimp_478": {
        "name": "กุ้งย่าง สูตร 478",
        "cal": 206
    },
    "spicy_shrimp_479": {
        "name": "กุ้งยำ สูตร 479",
        "cal": 795
    },
    "boiled_rice_480": {
        "name": "ข้าวต้ม สูตร 480",
        "cal": 612
    },
    "stir_fried_fish_481": {
        "name": "ปลาผัด สูตร 481",
        "cal": 850
    },
    "steamed_soup_482": {
        "name": "ซุปนึ่ง สูตร 482",
        "cal": 415
    },
    "boiled_soup_483": {
        "name": "ซุปต้ม สูตร 483",
        "cal": 744
    },
    "steamed_beef_484": {
        "name": "เนื้อนึ่ง สูตร 484",
        "cal": 456
    },
    "boiled_squid_485": {
        "name": "ปลาหมึกต้ม สูตร 485",
        "cal": 457
    },
    "spicy_soup_486": {
        "name": "ซุปยำ สูตร 486",
        "cal": 236
    },
    "fried_rice_487": {
        "name": "ข้าวทอด สูตร 487",
        "cal": 475
    },
    "grilled_soup_488": {
        "name": "ซุปย่าง สูตร 488",
        "cal": 282
    },
    "stir_fried_chicken_489": {
        "name": "ไก่ผัด สูตร 489",
        "cal": 583
    },
    "steamed_chicken_490": {
        "name": "ไก่นึ่ง สูตร 490",
        "cal": 44
    },
    "steamed_squid_491": {
        "name": "ปลาหมึกนึ่ง สูตร 491",
        "cal": 538
    },
    "fried_squid_492": {
        "name": "ปลาหมึกทอด สูตร 492",
        "cal": 779
    },
    "stir_fried_squid_493": {
        "name": "ปลาหมึกผัด สูตร 493",
        "cal": 271
    },
    "stir_fried_rice_494": {
        "name": "ข้าวผัด สูตร 494",
        "cal": 328
    },
    "spicy_noodle_495": {
        "name": "บะหมี่ยำ สูตร 495",
        "cal": 831
    },
    "fried_rice_496": {
        "name": "ข้าวทอด สูตร 496",
        "cal": 50
    },
    "spicy_fish_497": {
        "name": "ปลายำ สูตร 497",
        "cal": 552
    },
    "fried_squid_498": {
        "name": "ปลาหมึกทอด สูตร 498",
        "cal": 201
    },
    "fried_rice_499": {
        "name": "ข้าวทอด สูตร 499",
        "cal": 728
    },
    "stir_fried_rice_500": {
        "name": "ข้าวผัด สูตร 500",
        "cal": 429
    },
    "stir_fried_soup_501": {
        "name": "ซุปผัด สูตร 501",
        "cal": 263
    },
    "boiled_rice_502": {
        "name": "ข้าวต้ม สูตร 502",
        "cal": 301
    },
    "grilled_shrimp_503": {
        "name": "กุ้งย่าง สูตร 503",
        "cal": 340
    },
    "boiled_rice_504": {
        "name": "ข้าวต้ม สูตร 504",
        "cal": 554
    },
    "stir_fried_chicken_505": {
        "name": "ไก่ผัด สูตร 505",
        "cal": 849
    },
    "boiled_soup_506": {
        "name": "ซุปต้ม สูตร 506",
        "cal": 599
    },
    "fried_squid_507": {
        "name": "ปลาหมึกทอด สูตร 507",
        "cal": 485
    },
    "steamed_rice_508": {
        "name": "ข้าวนึ่ง สูตร 508",
        "cal": 504
    },
    "grilled_noodle_509": {
        "name": "บะหมี่ย่าง สูตร 509",
        "cal": 24
    },
    "steamed_rice_510": {
        "name": "ข้าวนึ่ง สูตร 510",
        "cal": 120
    },
    "boiled_chicken_511": {
        "name": "ไก่ต้ม สูตร 511",
        "cal": 170
    },
    "grilled_beef_512": {
        "name": "เนื้อย่าง สูตร 512",
        "cal": 350
    },
    "grilled_shrimp_513": {
        "name": "กุ้งย่าง สูตร 513",
        "cal": 619
    },
    "steamed_squid_514": {
        "name": "ปลาหมึกนึ่ง สูตร 514",
        "cal": 428
    },
    "boiled_shrimp_515": {
        "name": "กุ้งต้ม สูตร 515",
        "cal": 324
    },
    "grilled_pork_516": {
        "name": "หมูย่าง สูตร 516",
        "cal": 197
    },
    "grilled_soup_517": {
        "name": "ซุปย่าง สูตร 517",
        "cal": 316
    },
    "boiled_beef_518": {
        "name": "เนื้อต้ม สูตร 518",
        "cal": 179
    },
    "grilled_pork_519": {
        "name": "หมูย่าง สูตร 519",
        "cal": 236
    },
    "grilled_noodle_520": {
        "name": "บะหมี่ย่าง สูตร 520",
        "cal": 524
    },
    "grilled_shrimp_521": {
        "name": "กุ้งย่าง สูตร 521",
        "cal": 31
    },
    "grilled_beef_522": {
        "name": "เนื้อย่าง สูตร 522",
        "cal": 252
    },
    "stir_fried_beef_523": {
        "name": "เนื้อผัด สูตร 523",
        "cal": 98
    },
    "steamed_shrimp_524": {
        "name": "กุ้งนึ่ง สูตร 524",
        "cal": 683
    },
    "boiled_squid_525": {
        "name": "ปลาหมึกต้ม สูตร 525",
        "cal": 742
    },
    "grilled_squid_526": {
        "name": "ปลาหมึกย่าง สูตร 526",
        "cal": 205
    },
    "steamed_pork_527": {
        "name": "หมูนึ่ง สูตร 527",
        "cal": 229
    },
    "steamed_squid_528": {
        "name": "ปลาหมึกนึ่ง สูตร 528",
        "cal": 819
    },
    "spicy_soup_529": {
        "name": "ซุปยำ สูตร 529",
        "cal": 174
    },
    "steamed_chicken_530": {
        "name": "ไก่นึ่ง สูตร 530",
        "cal": 402
    },
    "boiled_pork_531": {
        "name": "หมูต้ม สูตร 531",
        "cal": 213
    },
    "stir_fried_squid_532": {
        "name": "ปลาหมึกผัด สูตร 532",
        "cal": 412
    },
    "grilled_squid_533": {
        "name": "ปลาหมึกย่าง สูตร 533",
        "cal": 336
    },
    "steamed_squid_534": {
        "name": "ปลาหมึกนึ่ง สูตร 534",
        "cal": 458
    },
    "fried_noodle_535": {
        "name": "บะหมี่ทอด สูตร 535",
        "cal": 651
    },
    "fried_rice_536": {
        "name": "ข้าวทอด สูตร 536",
        "cal": 375
    },
    "grilled_squid_537": {
        "name": "ปลาหมึกย่าง สูตร 537",
        "cal": 576
    },
    "steamed_noodle_538": {
        "name": "บะหมี่นึ่ง สูตร 538",
        "cal": 442
    },
    "grilled_noodle_539": {
        "name": "บะหมี่ย่าง สูตร 539",
        "cal": 824
    },
    "grilled_shrimp_540": {
        "name": "กุ้งย่าง สูตร 540",
        "cal": 169
    },
    "steamed_soup_541": {
        "name": "ซุปนึ่ง สูตร 541",
        "cal": 843
    },
    "grilled_rice_542": {
        "name": "ข้าวย่าง สูตร 542",
        "cal": 840
    },
    "fried_shrimp_543": {
        "name": "กุ้งทอด สูตร 543",
        "cal": 798
    },
    "fried_rice_544": {
        "name": "ข้าวทอด สูตร 544",
        "cal": 659
    },
    "grilled_chicken_545": {
        "name": "ไก่ย่าง สูตร 545",
        "cal": 226
    },
    "boiled_squid_546": {
        "name": "ปลาหมึกต้ม สูตร 546",
        "cal": 106
    },
    "fried_beef_547": {
        "name": "เนื้อทอด สูตร 547",
        "cal": 219
    },
    "boiled_beef_548": {
        "name": "เนื้อต้ม สูตร 548",
        "cal": 447
    },
    "steamed_chicken_549": {
        "name": "ไก่นึ่ง สูตร 549",
        "cal": 166
    },
    "steamed_soup_550": {
        "name": "ซุปนึ่ง สูตร 550",
        "cal": 714
    },
    "steamed_pork_551": {
        "name": "หมูนึ่ง สูตร 551",
        "cal": 599
    },
    "spicy_beef_552": {
        "name": "เนื้อยำ สูตร 552",
        "cal": 370
    },
    "spicy_rice_553": {
        "name": "ข้าวยำ สูตร 553",
        "cal": 190
    },
    "spicy_squid_554": {
        "name": "ปลาหมึกยำ สูตร 554",
        "cal": 349
    },
    "steamed_squid_555": {
        "name": "ปลาหมึกนึ่ง สูตร 555",
        "cal": 182
    },
    "fried_noodle_556": {
        "name": "บะหมี่ทอด สูตร 556",
        "cal": 333
    },
    "fried_noodle_557": {
        "name": "บะหมี่ทอด สูตร 557",
        "cal": 478
    },
    "steamed_rice_558": {
        "name": "ข้าวนึ่ง สูตร 558",
        "cal": 760
    },
    "grilled_shrimp_559": {
        "name": "กุ้งย่าง สูตร 559",
        "cal": 750
    },
    "spicy_soup_560": {
        "name": "ซุปยำ สูตร 560",
        "cal": 243
    },
    "spicy_fish_561": {
        "name": "ปลายำ สูตร 561",
        "cal": 776
    },
    "steamed_beef_562": {
        "name": "เนื้อนึ่ง สูตร 562",
        "cal": 659
    },
    "steamed_pork_563": {
        "name": "หมูนึ่ง สูตร 563",
        "cal": 805
    },
    "spicy_noodle_564": {
        "name": "บะหมี่ยำ สูตร 564",
        "cal": 691
    },
    "fried_shrimp_565": {
        "name": "กุ้งทอด สูตร 565",
        "cal": 754
    },
    "spicy_beef_566": {
        "name": "เนื้อยำ สูตร 566",
        "cal": 469
    },
    "grilled_beef_567": {
        "name": "เนื้อย่าง สูตร 567",
        "cal": 839
    },
    "boiled_pork_568": {
        "name": "หมูต้ม สูตร 568",
        "cal": 241
    },
    "steamed_noodle_569": {
        "name": "บะหมี่นึ่ง สูตร 569",
        "cal": 81
    },
    "fried_soup_570": {
        "name": "ซุปทอด สูตร 570",
        "cal": 571
    },
    "grilled_pork_571": {
        "name": "หมูย่าง สูตร 571",
        "cal": 414
    },
    "stir_fried_beef_572": {
        "name": "เนื้อผัด สูตร 572",
        "cal": 793
    },
    "fried_beef_573": {
        "name": "เนื้อทอด สูตร 573",
        "cal": 273
    },
    "grilled_soup_574": {
        "name": "ซุปย่าง สูตร 574",
        "cal": 445
    },
    "grilled_beef_575": {
        "name": "เนื้อย่าง สูตร 575",
        "cal": 628
    },
    "grilled_chicken_576": {
        "name": "ไก่ย่าง สูตร 576",
        "cal": 784
    },
    "grilled_pork_577": {
        "name": "หมูย่าง สูตร 577",
        "cal": 371
    },
    "boiled_beef_578": {
        "name": "เนื้อต้ม สูตร 578",
        "cal": 632
    },
    "fried_rice_579": {
        "name": "ข้าวทอด สูตร 579",
        "cal": 131
    },
    "steamed_noodle_580": {
        "name": "บะหมี่นึ่ง สูตร 580",
        "cal": 631
    },
    "spicy_beef_581": {
        "name": "เนื้อยำ สูตร 581",
        "cal": 443
    },
    "fried_chicken_582": {
        "name": "ไก่ทอด สูตร 582",
        "cal": 451
    },
    "grilled_chicken_583": {
        "name": "ไก่ย่าง สูตร 583",
        "cal": 785
    },
    "grilled_noodle_584": {
        "name": "บะหมี่ย่าง สูตร 584",
        "cal": 330
    },
    "stir_fried_rice_585": {
        "name": "ข้าวผัด สูตร 585",
        "cal": 249
    },
    "steamed_chicken_586": {
        "name": "ไก่นึ่ง สูตร 586",
        "cal": 820
    },
    "stir_fried_shrimp_587": {
        "name": "กุ้งผัด สูตร 587",
        "cal": 358
    },
    "spicy_rice_588": {
        "name": "ข้าวยำ สูตร 588",
        "cal": 253
    },
    "boiled_noodle_589": {
        "name": "บะหมี่ต้ม สูตร 589",
        "cal": 598
    },
    "stir_fried_soup_590": {
        "name": "ซุปผัด สูตร 590",
        "cal": 100
    },
    "steamed_chicken_591": {
        "name": "ไก่นึ่ง สูตร 591",
        "cal": 381
    },
    "boiled_beef_592": {
        "name": "เนื้อต้ม สูตร 592",
        "cal": 432
    },
    "grilled_soup_593": {
        "name": "ซุปย่าง สูตร 593",
        "cal": 137
    },
    "boiled_shrimp_594": {
        "name": "กุ้งต้ม สูตร 594",
        "cal": 376
    },
    "stir_fried_chicken_595": {
        "name": "ไก่ผัด สูตร 595",
        "cal": 92
    },
    "fried_squid_596": {
        "name": "ปลาหมึกทอด สูตร 596",
        "cal": 684
    },
    "boiled_soup_597": {
        "name": "ซุปต้ม สูตร 597",
        "cal": 750
    },
    "boiled_shrimp_598": {
        "name": "กุ้งต้ม สูตร 598",
        "cal": 294
    },
    "stir_fried_noodle_599": {
        "name": "บะหมี่ผัด สูตร 599",
        "cal": 719
    },
    "stir_fried_fish_600": {
        "name": "ปลาผัด สูตร 600",
        "cal": 194
    },
    "spicy_shrimp_601": {
        "name": "กุ้งยำ สูตร 601",
        "cal": 249
    },
    "boiled_beef_602": {
        "name": "เนื้อต้ม สูตร 602",
        "cal": 508
    },
    "fried_fish_603": {
        "name": "ปลาทอด สูตร 603",
        "cal": 669
    },
    "fried_beef_604": {
        "name": "เนื้อทอด สูตร 604",
        "cal": 212
    },
    "stir_fried_pork_605": {
        "name": "หมูผัด สูตร 605",
        "cal": 613
    },
    "grilled_squid_606": {
        "name": "ปลาหมึกย่าง สูตร 606",
        "cal": 603
    },
    "spicy_rice_607": {
        "name": "ข้าวยำ สูตร 607",
        "cal": 234
    },
    "stir_fried_beef_608": {
        "name": "เนื้อผัด สูตร 608",
        "cal": 784
    },
    "boiled_fish_609": {
        "name": "ปลาต้ม สูตร 609",
        "cal": 479
    },
    "fried_fish_610": {
        "name": "ปลาทอด สูตร 610",
        "cal": 365
    },
    "stir_fried_rice_611": {
        "name": "ข้าวผัด สูตร 611",
        "cal": 90
    },
    "steamed_noodle_612": {
        "name": "บะหมี่นึ่ง สูตร 612",
        "cal": 27
    },
    "steamed_beef_613": {
        "name": "เนื้อนึ่ง สูตร 613",
        "cal": 429
    },
    "spicy_shrimp_614": {
        "name": "กุ้งยำ สูตร 614",
        "cal": 606
    },
    "fried_squid_615": {
        "name": "ปลาหมึกทอด สูตร 615",
        "cal": 302
    },
    "grilled_squid_616": {
        "name": "ปลาหมึกย่าง สูตร 616",
        "cal": 693
    },
    "steamed_beef_617": {
        "name": "เนื้อนึ่ง สูตร 617",
        "cal": 766
    },
    "fried_chicken_618": {
        "name": "ไก่ทอด สูตร 618",
        "cal": 381
    },
    "boiled_beef_619": {
        "name": "เนื้อต้ม สูตร 619",
        "cal": 201
    },
    "spicy_soup_620": {
        "name": "ซุปยำ สูตร 620",
        "cal": 382
    },
    "steamed_noodle_621": {
        "name": "บะหมี่นึ่ง สูตร 621",
        "cal": 459
    },
    "grilled_soup_622": {
        "name": "ซุปย่าง สูตร 622",
        "cal": 476
    },
    "steamed_squid_623": {
        "name": "ปลาหมึกนึ่ง สูตร 623",
        "cal": 592
    },
    "grilled_fish_624": {
        "name": "ปลาย่าง สูตร 624",
        "cal": 366
    },
    "boiled_noodle_625": {
        "name": "บะหมี่ต้ม สูตร 625",
        "cal": 106
    },
    "steamed_chicken_626": {
        "name": "ไก่นึ่ง สูตร 626",
        "cal": 763
    },
    "steamed_rice_627": {
        "name": "ข้าวนึ่ง สูตร 627",
        "cal": 768
    },
    "stir_fried_rice_628": {
        "name": "ข้าวผัด สูตร 628",
        "cal": 189
    },
    "fried_beef_629": {
        "name": "เนื้อทอด สูตร 629",
        "cal": 693
    },
    "steamed_noodle_630": {
        "name": "บะหมี่นึ่ง สูตร 630",
        "cal": 562
    },
    "steamed_chicken_631": {
        "name": "ไก่นึ่ง สูตร 631",
        "cal": 346
    },
    "steamed_noodle_632": {
        "name": "บะหมี่นึ่ง สูตร 632",
        "cal": 170
    },
    "grilled_shrimp_633": {
        "name": "กุ้งย่าง สูตร 633",
        "cal": 620
    },
    "spicy_beef_634": {
        "name": "เนื้อยำ สูตร 634",
        "cal": 37
    },
    "steamed_soup_635": {
        "name": "ซุปนึ่ง สูตร 635",
        "cal": 782
    },
    "fried_fish_636": {
        "name": "ปลาทอด สูตร 636",
        "cal": 850
    },
    "fried_fish_637": {
        "name": "ปลาทอด สูตร 637",
        "cal": 420
    },
    "grilled_beef_638": {
        "name": "เนื้อย่าง สูตร 638",
        "cal": 119
    },
    "grilled_chicken_639": {
        "name": "ไก่ย่าง สูตร 639",
        "cal": 666
    },
    "boiled_shrimp_640": {
        "name": "กุ้งต้ม สูตร 640",
        "cal": 654
    },
    "stir_fried_chicken_641": {
        "name": "ไก่ผัด สูตร 641",
        "cal": 353
    },
    "fried_shrimp_642": {
        "name": "กุ้งทอด สูตร 642",
        "cal": 350
    },
    "spicy_rice_643": {
        "name": "ข้าวยำ สูตร 643",
        "cal": 180
    },
    "steamed_chicken_644": {
        "name": "ไก่นึ่ง สูตร 644",
        "cal": 640
    },
    "stir_fried_squid_645": {
        "name": "ปลาหมึกผัด สูตร 645",
        "cal": 673
    },
    "fried_chicken_646": {
        "name": "ไก่ทอด สูตร 646",
        "cal": 171
    },
    "stir_fried_pork_647": {
        "name": "หมูผัด สูตร 647",
        "cal": 536
    },
    "steamed_rice_648": {
        "name": "ข้าวนึ่ง สูตร 648",
        "cal": 57
    },
    "spicy_shrimp_649": {
        "name": "กุ้งยำ สูตร 649",
        "cal": 697
    },
    "grilled_soup_650": {
        "name": "ซุปย่าง สูตร 650",
        "cal": 617
    },
    "spicy_fish_651": {
        "name": "ปลายำ สูตร 651",
        "cal": 183
    },
    "steamed_rice_652": {
        "name": "ข้าวนึ่ง สูตร 652",
        "cal": 367
    },
    "steamed_shrimp_653": {
        "name": "กุ้งนึ่ง สูตร 653",
        "cal": 630
    },
    "stir_fried_beef_654": {
        "name": "เนื้อผัด สูตร 654",
        "cal": 493
    },
    "fried_pork_655": {
        "name": "หมูทอด สูตร 655",
        "cal": 186
    },
    "boiled_pork_656": {
        "name": "หมูต้ม สูตร 656",
        "cal": 74
    },
    "boiled_noodle_657": {
        "name": "บะหมี่ต้ม สูตร 657",
        "cal": 397
    },
    "grilled_chicken_658": {
        "name": "ไก่ย่าง สูตร 658",
        "cal": 822
    },
    "spicy_shrimp_659": {
        "name": "กุ้งยำ สูตร 659",
        "cal": 328
    },
    "stir_fried_soup_660": {
        "name": "ซุปผัด สูตร 660",
        "cal": 616
    },
    "stir_fried_soup_661": {
        "name": "ซุปผัด สูตร 661",
        "cal": 535
    },
    "fried_rice_662": {
        "name": "ข้าวทอด สูตร 662",
        "cal": 188
    },
    "boiled_noodle_663": {
        "name": "บะหมี่ต้ม สูตร 663",
        "cal": 495
    },
    "steamed_chicken_664": {
        "name": "ไก่นึ่ง สูตร 664",
        "cal": 466
    },
    "boiled_rice_665": {
        "name": "ข้าวต้ม สูตร 665",
        "cal": 197
    },
    "stir_fried_pork_666": {
        "name": "หมูผัด สูตร 666",
        "cal": 691
    },
    "spicy_pork_667": {
        "name": "หมูยำ สูตร 667",
        "cal": 447
    },
    "fried_pork_668": {
        "name": "หมูทอด สูตร 668",
        "cal": 210
    },
    "steamed_noodle_669": {
        "name": "บะหมี่นึ่ง สูตร 669",
        "cal": 526
    },
    "grilled_soup_670": {
        "name": "ซุปย่าง สูตร 670",
        "cal": 850
    },
    "spicy_noodle_671": {
        "name": "บะหมี่ยำ สูตร 671",
        "cal": 675
    },
    "boiled_beef_672": {
        "name": "เนื้อต้ม สูตร 672",
        "cal": 209
    },
    "boiled_soup_673": {
        "name": "ซุปต้ม สูตร 673",
        "cal": 536
    },
    "stir_fried_rice_674": {
        "name": "ข้าวผัด สูตร 674",
        "cal": 781
    },
    "boiled_noodle_675": {
        "name": "บะหมี่ต้ม สูตร 675",
        "cal": 583
    },
    "fried_fish_676": {
        "name": "ปลาทอด สูตร 676",
        "cal": 242
    },
    "fried_noodle_677": {
        "name": "บะหมี่ทอด สูตร 677",
        "cal": 139
    },
    "grilled_chicken_678": {
        "name": "ไก่ย่าง สูตร 678",
        "cal": 193
    },
    "steamed_soup_679": {
        "name": "ซุปนึ่ง สูตร 679",
        "cal": 598
    },
    "boiled_shrimp_680": {
        "name": "กุ้งต้ม สูตร 680",
        "cal": 608
    },
    "grilled_noodle_681": {
        "name": "บะหมี่ย่าง สูตร 681",
        "cal": 150
    },
    "stir_fried_rice_682": {
        "name": "ข้าวผัด สูตร 682",
        "cal": 96
    },
    "grilled_rice_683": {
        "name": "ข้าวย่าง สูตร 683",
        "cal": 420
    },
    "boiled_fish_684": {
        "name": "ปลาต้ม สูตร 684",
        "cal": 561
    },
    "grilled_rice_685": {
        "name": "ข้าวย่าง สูตร 685",
        "cal": 848
    },
    "spicy_pork_686": {
        "name": "หมูยำ สูตร 686",
        "cal": 691
    },
    "grilled_shrimp_687": {
        "name": "กุ้งย่าง สูตร 687",
        "cal": 221
    },
    "fried_beef_688": {
        "name": "เนื้อทอด สูตร 688",
        "cal": 150
    },
    "fried_beef_689": {
        "name": "เนื้อทอด สูตร 689",
        "cal": 85
    },
    "grilled_squid_690": {
        "name": "ปลาหมึกย่าง สูตร 690",
        "cal": 456
    },
    "boiled_beef_691": {
        "name": "เนื้อต้ม สูตร 691",
        "cal": 619
    },
    "boiled_shrimp_692": {
        "name": "กุ้งต้ม สูตร 692",
        "cal": 470
    },
    "steamed_beef_693": {
        "name": "เนื้อนึ่ง สูตร 693",
        "cal": 440
    },
    "fried_squid_694": {
        "name": "ปลาหมึกทอด สูตร 694",
        "cal": 79
    },
    "boiled_fish_695": {
        "name": "ปลาต้ม สูตร 695",
        "cal": 458
    },
    "fried_chicken_696": {
        "name": "ไก่ทอด สูตร 696",
        "cal": 218
    },
    "spicy_beef_697": {
        "name": "เนื้อยำ สูตร 697",
        "cal": 296
    },
    "steamed_beef_698": {
        "name": "เนื้อนึ่ง สูตร 698",
        "cal": 250
    },
    "steamed_soup_699": {
        "name": "ซุปนึ่ง สูตร 699",
        "cal": 480
    },
    "fried_squid_700": {
        "name": "ปลาหมึกทอด สูตร 700",
        "cal": 42
    },
    "fried_shrimp_701": {
        "name": "กุ้งทอด สูตร 701",
        "cal": 647
    },
    "spicy_pork_702": {
        "name": "หมูยำ สูตร 702",
        "cal": 532
    },
    "boiled_beef_703": {
        "name": "เนื้อต้ม สูตร 703",
        "cal": 350
    },
    "grilled_shrimp_704": {
        "name": "กุ้งย่าง สูตร 704",
        "cal": 260
    },
    "spicy_chicken_705": {
        "name": "ไก่ยำ สูตร 705",
        "cal": 531
    },
    "spicy_rice_706": {
        "name": "ข้าวยำ สูตร 706",
        "cal": 329
    },
    "spicy_fish_707": {
        "name": "ปลายำ สูตร 707",
        "cal": 38
    },
    "fried_squid_708": {
        "name": "ปลาหมึกทอด สูตร 708",
        "cal": 370
    },
    "boiled_pork_709": {
        "name": "หมูต้ม สูตร 709",
        "cal": 458
    },
    "fried_shrimp_710": {
        "name": "กุ้งทอด สูตร 710",
        "cal": 733
    },
    "boiled_beef_711": {
        "name": "เนื้อต้ม สูตร 711",
        "cal": 301
    },
    "grilled_pork_712": {
        "name": "หมูย่าง สูตร 712",
        "cal": 99
    },
    "grilled_noodle_713": {
        "name": "บะหมี่ย่าง สูตร 713",
        "cal": 707
    },
    "fried_squid_714": {
        "name": "ปลาหมึกทอด สูตร 714",
        "cal": 91
    },
    "grilled_shrimp_715": {
        "name": "กุ้งย่าง สูตร 715",
        "cal": 793
    },
    "grilled_pork_716": {
        "name": "หมูย่าง สูตร 716",
        "cal": 607
    },
    "grilled_pork_717": {
        "name": "หมูย่าง สูตร 717",
        "cal": 504
    },
    "steamed_rice_718": {
        "name": "ข้าวนึ่ง สูตร 718",
        "cal": 390
    },
    "spicy_chicken_719": {
        "name": "ไก่ยำ สูตร 719",
        "cal": 592
    },
    "stir_fried_fish_720": {
        "name": "ปลาผัด สูตร 720",
        "cal": 160
    },
    "grilled_shrimp_721": {
        "name": "กุ้งย่าง สูตร 721",
        "cal": 421
    },
    "steamed_noodle_722": {
        "name": "บะหมี่นึ่ง สูตร 722",
        "cal": 321
    },
    "grilled_fish_723": {
        "name": "ปลาย่าง สูตร 723",
        "cal": 768
    },
    "fried_fish_724": {
        "name": "ปลาทอด สูตร 724",
        "cal": 595
    },
    "boiled_squid_725": {
        "name": "ปลาหมึกต้ม สูตร 725",
        "cal": 205
    },
    "stir_fried_fish_726": {
        "name": "ปลาผัด สูตร 726",
        "cal": 631
    },
    "boiled_beef_727": {
        "name": "เนื้อต้ม สูตร 727",
        "cal": 267
    },
    "fried_shrimp_728": {
        "name": "กุ้งทอด สูตร 728",
        "cal": 210
    },
    "stir_fried_rice_729": {
        "name": "ข้าวผัด สูตร 729",
        "cal": 271
    },
    "fried_soup_730": {
        "name": "ซุปทอด สูตร 730",
        "cal": 727
    },
    "boiled_squid_731": {
        "name": "ปลาหมึกต้ม สูตร 731",
        "cal": 645
    },
    "boiled_shrimp_732": {
        "name": "กุ้งต้ม สูตร 732",
        "cal": 488
    },
    "fried_shrimp_733": {
        "name": "กุ้งทอด สูตร 733",
        "cal": 494
    },
    "grilled_noodle_734": {
        "name": "บะหมี่ย่าง สูตร 734",
        "cal": 361
    },
    "steamed_chicken_735": {
        "name": "ไก่นึ่ง สูตร 735",
        "cal": 280
    },
    "stir_fried_shrimp_736": {
        "name": "กุ้งผัด สูตร 736",
        "cal": 409
    },
    "stir_fried_rice_737": {
        "name": "ข้าวผัด สูตร 737",
        "cal": 343
    },
    "grilled_chicken_738": {
        "name": "ไก่ย่าง สูตร 738",
        "cal": 220
    },
    "boiled_squid_739": {
        "name": "ปลาหมึกต้ม สูตร 739",
        "cal": 745
    },
    "stir_fried_beef_740": {
        "name": "เนื้อผัด สูตร 740",
        "cal": 249
    },
    "fried_shrimp_741": {
        "name": "กุ้งทอด สูตร 741",
        "cal": 215
    },
    "fried_beef_742": {
        "name": "เนื้อทอด สูตร 742",
        "cal": 830
    },
    "fried_chicken_743": {
        "name": "ไก่ทอด สูตร 743",
        "cal": 791
    },
    "stir_fried_rice_744": {
        "name": "ข้าวผัด สูตร 744",
        "cal": 376
    },
    "boiled_chicken_745": {
        "name": "ไก่ต้ม สูตร 745",
        "cal": 404
    },
    "fried_beef_746": {
        "name": "เนื้อทอด สูตร 746",
        "cal": 770
    },
    "spicy_beef_747": {
        "name": "เนื้อยำ สูตร 747",
        "cal": 357
    },
    "fried_soup_748": {
        "name": "ซุปทอด สูตร 748",
        "cal": 625
    },
    "grilled_squid_749": {
        "name": "ปลาหมึกย่าง สูตร 749",
        "cal": 707
    },
    "stir_fried_beef_750": {
        "name": "เนื้อผัด สูตร 750",
        "cal": 784
    },
    "grilled_rice_751": {
        "name": "ข้าวย่าง สูตร 751",
        "cal": 650
    },
    "steamed_chicken_752": {
        "name": "ไก่นึ่ง สูตร 752",
        "cal": 220
    },
    "grilled_rice_753": {
        "name": "ข้าวย่าง สูตร 753",
        "cal": 204
    },
    "stir_fried_beef_754": {
        "name": "เนื้อผัด สูตร 754",
        "cal": 55
    },
    "grilled_fish_755": {
        "name": "ปลาย่าง สูตร 755",
        "cal": 368
    },
    "steamed_rice_756": {
        "name": "ข้าวนึ่ง สูตร 756",
        "cal": 804
    },
    "boiled_shrimp_757": {
        "name": "กุ้งต้ม สูตร 757",
        "cal": 21
    },
    "grilled_pork_758": {
        "name": "หมูย่าง สูตร 758",
        "cal": 848
    },
    "grilled_noodle_759": {
        "name": "บะหมี่ย่าง สูตร 759",
        "cal": 359
    },
    "stir_fried_soup_760": {
        "name": "ซุปผัด สูตร 760",
        "cal": 75
    },
    "boiled_pork_761": {
        "name": "หมูต้ม สูตร 761",
        "cal": 46
    },
    "boiled_chicken_762": {
        "name": "ไก่ต้ม สูตร 762",
        "cal": 133
    },
    "fried_chicken_763": {
        "name": "ไก่ทอด สูตร 763",
        "cal": 569
    },
    "grilled_beef_764": {
        "name": "เนื้อย่าง สูตร 764",
        "cal": 168
    },
    "spicy_chicken_765": {
        "name": "ไก่ยำ สูตร 765",
        "cal": 803
    },
    "boiled_fish_766": {
        "name": "ปลาต้ม สูตร 766",
        "cal": 721
    },
    "spicy_fish_767": {
        "name": "ปลายำ สูตร 767",
        "cal": 755
    },
    "boiled_shrimp_768": {
        "name": "กุ้งต้ม สูตร 768",
        "cal": 446
    },
    "spicy_pork_769": {
        "name": "หมูยำ สูตร 769",
        "cal": 348
    },
    "grilled_noodle_770": {
        "name": "บะหมี่ย่าง สูตร 770",
        "cal": 385
    },
    "fried_chicken_771": {
        "name": "ไก่ทอด สูตร 771",
        "cal": 414
    },
    "boiled_noodle_772": {
        "name": "บะหมี่ต้ม สูตร 772",
        "cal": 692
    },
    "fried_chicken_773": {
        "name": "ไก่ทอด สูตร 773",
        "cal": 520
    },
    "steamed_shrimp_774": {
        "name": "กุ้งนึ่ง สูตร 774",
        "cal": 786
    },
    "fried_rice_775": {
        "name": "ข้าวทอด สูตร 775",
        "cal": 407
    },
    "boiled_shrimp_776": {
        "name": "กุ้งต้ม สูตร 776",
        "cal": 126
    },
    "grilled_squid_777": {
        "name": "ปลาหมึกย่าง สูตร 777",
        "cal": 160
    },
    "steamed_chicken_778": {
        "name": "ไก่นึ่ง สูตร 778",
        "cal": 51
    },
    "steamed_shrimp_779": {
        "name": "กุ้งนึ่ง สูตร 779",
        "cal": 295
    },
    "fried_shrimp_780": {
        "name": "กุ้งทอด สูตร 780",
        "cal": 459
    },
    "boiled_chicken_781": {
        "name": "ไก่ต้ม สูตร 781",
        "cal": 502
    },
    "grilled_squid_782": {
        "name": "ปลาหมึกย่าง สูตร 782",
        "cal": 642
    },
    "spicy_pork_783": {
        "name": "หมูยำ สูตร 783",
        "cal": 96
    },
    "stir_fried_shrimp_784": {
        "name": "กุ้งผัด สูตร 784",
        "cal": 443
    },
    "stir_fried_chicken_785": {
        "name": "ไก่ผัด สูตร 785",
        "cal": 618
    },
    "steamed_noodle_786": {
        "name": "บะหมี่นึ่ง สูตร 786",
        "cal": 526
    },
    "stir_fried_soup_787": {
        "name": "ซุปผัด สูตร 787",
        "cal": 257
    },
    "boiled_squid_788": {
        "name": "ปลาหมึกต้ม สูตร 788",
        "cal": 432
    },
    "stir_fried_beef_789": {
        "name": "เนื้อผัด สูตร 789",
        "cal": 371
    },
    "stir_fried_soup_790": {
        "name": "ซุปผัด สูตร 790",
        "cal": 643
    },
    "steamed_pork_791": {
        "name": "หมูนึ่ง สูตร 791",
        "cal": 387
    },
    "fried_pork_792": {
        "name": "หมูทอด สูตร 792",
        "cal": 346
    },
    "spicy_squid_793": {
        "name": "ปลาหมึกยำ สูตร 793",
        "cal": 356
    },
    "boiled_squid_794": {
        "name": "ปลาหมึกต้ม สูตร 794",
        "cal": 535
    },
    "boiled_rice_795": {
        "name": "ข้าวต้ม สูตร 795",
        "cal": 715
    },
    "spicy_beef_796": {
        "name": "เนื้อยำ สูตร 796",
        "cal": 349
    },
    "spicy_fish_797": {
        "name": "ปลายำ สูตร 797",
        "cal": 353
    },
    "spicy_fish_798": {
        "name": "ปลายำ สูตร 798",
        "cal": 352
    },
    "boiled_noodle_799": {
        "name": "บะหมี่ต้ม สูตร 799",
        "cal": 649
    },
    "stir_fried_squid_800": {
        "name": "ปลาหมึกผัด สูตร 800",
        "cal": 685
    },
    "stir_fried_fish_801": {
        "name": "ปลาผัด สูตร 801",
        "cal": 451
    },
    "stir_fried_chicken_802": {
        "name": "ไก่ผัด สูตร 802",
        "cal": 299
    },
    "spicy_shrimp_803": {
        "name": "กุ้งยำ สูตร 803",
        "cal": 578
    },
    "boiled_shrimp_804": {
        "name": "กุ้งต้ม สูตร 804",
        "cal": 349
    },
    "steamed_soup_805": {
        "name": "ซุปนึ่ง สูตร 805",
        "cal": 606
    },
    "grilled_squid_806": {
        "name": "ปลาหมึกย่าง สูตร 806",
        "cal": 446
    },
    "fried_pork_807": {
        "name": "หมูทอด สูตร 807",
        "cal": 681
    },
    "stir_fried_soup_808": {
        "name": "ซุปผัด สูตร 808",
        "cal": 421
    },
    "stir_fried_beef_809": {
        "name": "เนื้อผัด สูตร 809",
        "cal": 673
    },
    "boiled_beef_810": {
        "name": "เนื้อต้ม สูตร 810",
        "cal": 619
    },
    "boiled_fish_811": {
        "name": "ปลาต้ม สูตร 811",
        "cal": 444
    },
    "grilled_soup_812": {
        "name": "ซุปย่าง สูตร 812",
        "cal": 197
    },
    "stir_fried_pork_813": {
        "name": "หมูผัด สูตร 813",
        "cal": 319
    },
    "stir_fried_noodle_814": {
        "name": "บะหมี่ผัด สูตร 814",
        "cal": 244
    },
    "grilled_beef_815": {
        "name": "เนื้อย่าง สูตร 815",
        "cal": 659
    },
    "grilled_rice_816": {
        "name": "ข้าวย่าง สูตร 816",
        "cal": 191
    },
    "spicy_chicken_817": {
        "name": "ไก่ยำ สูตร 817",
        "cal": 299
    },
    "grilled_rice_818": {
        "name": "ข้าวย่าง สูตร 818",
        "cal": 50
    },
    "steamed_fish_819": {
        "name": "ปลานึ่ง สูตร 819",
        "cal": 211
    },
    "steamed_chicken_820": {
        "name": "ไก่นึ่ง สูตร 820",
        "cal": 631
    },
    "steamed_fish_821": {
        "name": "ปลานึ่ง สูตร 821",
        "cal": 89
    },
    "steamed_chicken_822": {
        "name": "ไก่นึ่ง สูตร 822",
        "cal": 574
    },
    "fried_beef_823": {
        "name": "เนื้อทอด สูตร 823",
        "cal": 63
    },
    "boiled_soup_824": {
        "name": "ซุปต้ม สูตร 824",
        "cal": 817
    },
    "spicy_beef_825": {
        "name": "เนื้อยำ สูตร 825",
        "cal": 479
    },
    "steamed_chicken_826": {
        "name": "ไก่นึ่ง สูตร 826",
        "cal": 532
    },
    "stir_fried_noodle_827": {
        "name": "บะหมี่ผัด สูตร 827",
        "cal": 204
    },
    "boiled_chicken_828": {
        "name": "ไก่ต้ม สูตร 828",
        "cal": 747
    },
    "boiled_pork_829": {
        "name": "หมูต้ม สูตร 829",
        "cal": 723
    },
    "stir_fried_noodle_830": {
        "name": "บะหมี่ผัด สูตร 830",
        "cal": 728
    },
    "steamed_fish_831": {
        "name": "ปลานึ่ง สูตร 831",
        "cal": 465
    },
    "fried_fish_832": {
        "name": "ปลาทอด สูตร 832",
        "cal": 398
    },
    "spicy_chicken_833": {
        "name": "ไก่ยำ สูตร 833",
        "cal": 160
    },
    "grilled_beef_834": {
        "name": "เนื้อย่าง สูตร 834",
        "cal": 224
    },
    "grilled_beef_835": {
        "name": "เนื้อย่าง สูตร 835",
        "cal": 813
    },
    "boiled_soup_836": {
        "name": "ซุปต้ม สูตร 836",
        "cal": 624
    },
    "grilled_shrimp_837": {
        "name": "กุ้งย่าง สูตร 837",
        "cal": 643
    },
    "steamed_noodle_838": {
        "name": "บะหมี่นึ่ง สูตร 838",
        "cal": 300
    },
    "spicy_fish_839": {
        "name": "ปลายำ สูตร 839",
        "cal": 482
    },
    "spicy_squid_840": {
        "name": "ปลาหมึกยำ สูตร 840",
        "cal": 587
    },
    "grilled_beef_841": {
        "name": "เนื้อย่าง สูตร 841",
        "cal": 314
    },
    "spicy_noodle_842": {
        "name": "บะหมี่ยำ สูตร 842",
        "cal": 826
    },
    "stir_fried_noodle_843": {
        "name": "บะหมี่ผัด สูตร 843",
        "cal": 95
    },
    "spicy_fish_844": {
        "name": "ปลายำ สูตร 844",
        "cal": 501
    },
    "fried_pork_845": {
        "name": "หมูทอด สูตร 845",
        "cal": 492
    },
    "grilled_chicken_846": {
        "name": "ไก่ย่าง สูตร 846",
        "cal": 178
    },
    "boiled_soup_847": {
        "name": "ซุปต้ม สูตร 847",
        "cal": 519
    },
    "stir_fried_squid_848": {
        "name": "ปลาหมึกผัด สูตร 848",
        "cal": 373
    },
    "boiled_noodle_849": {
        "name": "บะหมี่ต้ม สูตร 849",
        "cal": 429
    },
    "grilled_chicken_850": {
        "name": "ไก่ย่าง สูตร 850",
        "cal": 511
    },
    "stir_fried_shrimp_851": {
        "name": "กุ้งผัด สูตร 851",
        "cal": 846
    },
    "spicy_soup_852": {
        "name": "ซุปยำ สูตร 852",
        "cal": 510
    },
    "steamed_fish_853": {
        "name": "ปลานึ่ง สูตร 853",
        "cal": 180
    },
    "fried_squid_854": {
        "name": "ปลาหมึกทอด สูตร 854",
        "cal": 21
    },
    "boiled_beef_855": {
        "name": "เนื้อต้ม สูตร 855",
        "cal": 676
    },
    "grilled_beef_856": {
        "name": "เนื้อย่าง สูตร 856",
        "cal": 826
    },
    "fried_soup_857": {
        "name": "ซุปทอด สูตร 857",
        "cal": 660
    },
    "steamed_soup_858": {
        "name": "ซุปนึ่ง สูตร 858",
        "cal": 787
    },
    "fried_pork_859": {
        "name": "หมูทอด สูตร 859",
        "cal": 633
    },
    "spicy_squid_860": {
        "name": "ปลาหมึกยำ สูตร 860",
        "cal": 631
    },
    "steamed_chicken_861": {
        "name": "ไก่นึ่ง สูตร 861",
        "cal": 129
    },
    "boiled_fish_862": {
        "name": "ปลาต้ม สูตร 862",
        "cal": 376
    },
    "spicy_shrimp_863": {
        "name": "กุ้งยำ สูตร 863",
        "cal": 539
    },
    "steamed_shrimp_864": {
        "name": "กุ้งนึ่ง สูตร 864",
        "cal": 762
    },
    "spicy_rice_865": {
        "name": "ข้าวยำ สูตร 865",
        "cal": 118
    },
    "stir_fried_squid_866": {
        "name": "ปลาหมึกผัด สูตร 866",
        "cal": 794
    },
    "boiled_chicken_867": {
        "name": "ไก่ต้ม สูตร 867",
        "cal": 330
    },
    "grilled_chicken_868": {
        "name": "ไก่ย่าง สูตร 868",
        "cal": 637
    },
    "fried_rice_869": {
        "name": "ข้าวทอด สูตร 869",
        "cal": 743
    },
    "stir_fried_rice_870": {
        "name": "ข้าวผัด สูตร 870",
        "cal": 195
    },
    "grilled_noodle_871": {
        "name": "บะหมี่ย่าง สูตร 871",
        "cal": 102
    },
    "boiled_soup_872": {
        "name": "ซุปต้ม สูตร 872",
        "cal": 65
    },
    "grilled_shrimp_873": {
        "name": "กุ้งย่าง สูตร 873",
        "cal": 721
    },
    "fried_chicken_874": {
        "name": "ไก่ทอด สูตร 874",
        "cal": 607
    },
    "grilled_chicken_875": {
        "name": "ไก่ย่าง สูตร 875",
        "cal": 189
    },
    "grilled_pork_876": {
        "name": "หมูย่าง สูตร 876",
        "cal": 191
    },
    "spicy_noodle_877": {
        "name": "บะหมี่ยำ สูตร 877",
        "cal": 152
    },
    "spicy_rice_878": {
        "name": "ข้าวยำ สูตร 878",
        "cal": 558
    },
    "spicy_pork_879": {
        "name": "หมูยำ สูตร 879",
        "cal": 755
    },
    "spicy_noodle_880": {
        "name": "บะหมี่ยำ สูตร 880",
        "cal": 308
    },
    "grilled_soup_881": {
        "name": "ซุปย่าง สูตร 881",
        "cal": 837
    },
    "steamed_fish_882": {
        "name": "ปลานึ่ง สูตร 882",
        "cal": 707
    },
    "stir_fried_chicken_883": {
        "name": "ไก่ผัด สูตร 883",
        "cal": 326
    },
    "steamed_shrimp_884": {
        "name": "กุ้งนึ่ง สูตร 884",
        "cal": 254
    },
    "fried_shrimp_885": {
        "name": "กุ้งทอด สูตร 885",
        "cal": 665
    },
    "stir_fried_beef_886": {
        "name": "เนื้อผัด สูตร 886",
        "cal": 523
    },
    "spicy_pork_887": {
        "name": "หมูยำ สูตร 887",
        "cal": 333
    },
    "stir_fried_squid_888": {
        "name": "ปลาหมึกผัด สูตร 888",
        "cal": 668
    },
    "boiled_noodle_889": {
        "name": "บะหมี่ต้ม สูตร 889",
        "cal": 516
    },
    "stir_fried_beef_890": {
        "name": "เนื้อผัด สูตร 890",
        "cal": 145
    },
    "boiled_soup_891": {
        "name": "ซุปต้ม สูตร 891",
        "cal": 706
    },
    "boiled_fish_892": {
        "name": "ปลาต้ม สูตร 892",
        "cal": 841
    },
    "fried_noodle_893": {
        "name": "บะหมี่ทอด สูตร 893",
        "cal": 100
    },
    "boiled_pork_894": {
        "name": "หมูต้ม สูตร 894",
        "cal": 456
    },
    "steamed_noodle_895": {
        "name": "บะหมี่นึ่ง สูตร 895",
        "cal": 100
    },
    "spicy_noodle_896": {
        "name": "บะหมี่ยำ สูตร 896",
        "cal": 171
    },
    "boiled_fish_897": {
        "name": "ปลาต้ม สูตร 897",
        "cal": 189
    },
    "fried_beef_898": {
        "name": "เนื้อทอด สูตร 898",
        "cal": 217
    },
    "stir_fried_beef_899": {
        "name": "เนื้อผัด สูตร 899",
        "cal": 723
    },
    "grilled_beef_900": {
        "name": "เนื้อย่าง สูตร 900",
        "cal": 411
    },
    "spicy_soup_901": {
        "name": "ซุปยำ สูตร 901",
        "cal": 488
    },
    "spicy_chicken_902": {
        "name": "ไก่ยำ สูตร 902",
        "cal": 603
    },
    "fried_rice_903": {
        "name": "ข้าวทอด สูตร 903",
        "cal": 645
    },
    "fried_beef_904": {
        "name": "เนื้อทอด สูตร 904",
        "cal": 440
    },
    "steamed_rice_905": {
        "name": "ข้าวนึ่ง สูตร 905",
        "cal": 435
    },
    "steamed_beef_906": {
        "name": "เนื้อนึ่ง สูตร 906",
        "cal": 88
    },
    "spicy_chicken_907": {
        "name": "ไก่ยำ สูตร 907",
        "cal": 628
    },
    "stir_fried_rice_908": {
        "name": "ข้าวผัด สูตร 908",
        "cal": 702
    },
    "spicy_rice_909": {
        "name": "ข้าวยำ สูตร 909",
        "cal": 25
    },
    "stir_fried_squid_910": {
        "name": "ปลาหมึกผัด สูตร 910",
        "cal": 421
    },
    "grilled_beef_911": {
        "name": "เนื้อย่าง สูตร 911",
        "cal": 57
    },
    "fried_chicken_912": {
        "name": "ไก่ทอด สูตร 912",
        "cal": 478
    },
    "steamed_pork_913": {
        "name": "หมูนึ่ง สูตร 913",
        "cal": 305
    },
    "grilled_chicken_914": {
        "name": "ไก่ย่าง สูตร 914",
        "cal": 331
    },
    "boiled_shrimp_915": {
        "name": "กุ้งต้ม สูตร 915",
        "cal": 585
    },
    "fried_noodle_916": {
        "name": "บะหมี่ทอด สูตร 916",
        "cal": 323
    },
    "steamed_rice_917": {
        "name": "ข้าวนึ่ง สูตร 917",
        "cal": 605
    },
    "fried_chicken_918": {
        "name": "ไก่ทอด สูตร 918",
        "cal": 392
    },
    "boiled_soup_919": {
        "name": "ซุปต้ม สูตร 919",
        "cal": 735
    },
    "spicy_fish_920": {
        "name": "ปลายำ สูตร 920",
        "cal": 370
    },
    "grilled_pork_921": {
        "name": "หมูย่าง สูตร 921",
        "cal": 40
    },
    "stir_fried_beef_922": {
        "name": "เนื้อผัด สูตร 922",
        "cal": 116
    },
    "fried_rice_923": {
        "name": "ข้าวทอด สูตร 923",
        "cal": 677
    },
    "grilled_fish_924": {
        "name": "ปลาย่าง สูตร 924",
        "cal": 529
    },
    "boiled_shrimp_925": {
        "name": "กุ้งต้ม สูตร 925",
        "cal": 603
    },
    "stir_fried_noodle_926": {
        "name": "บะหมี่ผัด สูตร 926",
        "cal": 501
    },
    "spicy_pork_927": {
        "name": "หมูยำ สูตร 927",
        "cal": 406
    },
    "grilled_rice_928": {
        "name": "ข้าวย่าง สูตร 928",
        "cal": 755
    },
    "boiled_shrimp_929": {
        "name": "กุ้งต้ม สูตร 929",
        "cal": 437
    },
    "spicy_soup_930": {
        "name": "ซุปยำ สูตร 930",
        "cal": 111
    },
    "stir_fried_noodle_931": {
        "name": "บะหมี่ผัด สูตร 931",
        "cal": 313
    },
    "fried_chicken_932": {
        "name": "ไก่ทอด สูตร 932",
        "cal": 206
    },
    "fried_shrimp_933": {
        "name": "กุ้งทอด สูตร 933",
        "cal": 68
    },
    "grilled_soup_934": {
        "name": "ซุปย่าง สูตร 934",
        "cal": 435
    },
    "grilled_squid_935": {
        "name": "ปลาหมึกย่าง สูตร 935",
        "cal": 501
    },
    "spicy_chicken_936": {
        "name": "ไก่ยำ สูตร 936",
        "cal": 848
    },
    "stir_fried_soup_937": {
        "name": "ซุปผัด สูตร 937",
        "cal": 288
    },
    "steamed_chicken_938": {
        "name": "ไก่นึ่ง สูตร 938",
        "cal": 835
    },
    "spicy_beef_939": {
        "name": "เนื้อยำ สูตร 939",
        "cal": 629
    },
    "fried_beef_940": {
        "name": "เนื้อทอด สูตร 940",
        "cal": 171
    },
    "grilled_rice_941": {
        "name": "ข้าวย่าง สูตร 941",
        "cal": 179
    },
    "spicy_chicken_942": {
        "name": "ไก่ยำ สูตร 942",
        "cal": 198
    },
    "boiled_fish_943": {
        "name": "ปลาต้ม สูตร 943",
        "cal": 487
    },
    "stir_fried_soup_944": {
        "name": "ซุปผัด สูตร 944",
        "cal": 43
    },
    "grilled_shrimp_945": {
        "name": "กุ้งย่าง สูตร 945",
        "cal": 445
    },
    "fried_soup_946": {
        "name": "ซุปทอด สูตร 946",
        "cal": 576
    },
    "fried_squid_947": {
        "name": "ปลาหมึกทอด สูตร 947",
        "cal": 63
    },
    "fried_squid_948": {
        "name": "ปลาหมึกทอด สูตร 948",
        "cal": 289
    },
    "grilled_squid_949": {
        "name": "ปลาหมึกย่าง สูตร 949",
        "cal": 40
    },
    "spicy_rice_950": {
        "name": "ข้าวยำ สูตร 950",
        "cal": 267
    },
    "stir_fried_noodle_951": {
        "name": "บะหมี่ผัด สูตร 951",
        "cal": 175
    },
    "spicy_pork_952": {
        "name": "หมูยำ สูตร 952",
        "cal": 327
    },
    "boiled_chicken_953": {
        "name": "ไก่ต้ม สูตร 953",
        "cal": 516
    },
    "grilled_noodle_954": {
        "name": "บะหมี่ย่าง สูตร 954",
        "cal": 717
    },
    "spicy_beef_955": {
        "name": "เนื้อยำ สูตร 955",
        "cal": 431
    },
    "boiled_shrimp_956": {
        "name": "กุ้งต้ม สูตร 956",
        "cal": 435
    },
    "fried_fish_957": {
        "name": "ปลาทอด สูตร 957",
        "cal": 739
    },
    "spicy_rice_958": {
        "name": "ข้าวยำ สูตร 958",
        "cal": 52
    },
    "stir_fried_pork_959": {
        "name": "หมูผัด สูตร 959",
        "cal": 261
    },
    "grilled_squid_960": {
        "name": "ปลาหมึกย่าง สูตร 960",
        "cal": 124
    },
    "steamed_noodle_961": {
        "name": "บะหมี่นึ่ง สูตร 961",
        "cal": 712
    },
    "steamed_chicken_962": {
        "name": "ไก่นึ่ง สูตร 962",
        "cal": 515
    },
    "steamed_pork_963": {
        "name": "หมูนึ่ง สูตร 963",
        "cal": 587
    },
    "boiled_rice_964": {
        "name": "ข้าวต้ม สูตร 964",
        "cal": 369
    },
    "fried_fish_965": {
        "name": "ปลาทอด สูตร 965",
        "cal": 789
    },
    "grilled_beef_966": {
        "name": "เนื้อย่าง สูตร 966",
        "cal": 310
    },
    "grilled_pork_967": {
        "name": "หมูย่าง สูตร 967",
        "cal": 360
    },
    "grilled_beef_968": {
        "name": "เนื้อย่าง สูตร 968",
        "cal": 685
    },
    "steamed_beef_969": {
        "name": "เนื้อนึ่ง สูตร 969",
        "cal": 248
    },
    "spicy_noodle_970": {
        "name": "บะหมี่ยำ สูตร 970",
        "cal": 631
    },
    "boiled_soup_971": {
        "name": "ซุปต้ม สูตร 971",
        "cal": 397
    },
    "steamed_beef_972": {
        "name": "เนื้อนึ่ง สูตร 972",
        "cal": 625
    },
    "stir_fried_beef_973": {
        "name": "เนื้อผัด สูตร 973",
        "cal": 818
    },
    "grilled_beef_974": {
        "name": "เนื้อย่าง สูตร 974",
        "cal": 200
    },
    "steamed_shrimp_975": {
        "name": "กุ้งนึ่ง สูตร 975",
        "cal": 230
    },
    "boiled_shrimp_976": {
        "name": "กุ้งต้ม สูตร 976",
        "cal": 589
    },
    "steamed_squid_977": {
        "name": "ปลาหมึกนึ่ง สูตร 977",
        "cal": 316
    },
    "grilled_beef_978": {
        "name": "เนื้อย่าง สูตร 978",
        "cal": 721
    },
    "grilled_soup_979": {
        "name": "ซุปย่าง สูตร 979",
        "cal": 291
    },
    "steamed_soup_980": {
        "name": "ซุปนึ่ง สูตร 980",
        "cal": 97
    },
    "boiled_noodle_981": {
        "name": "บะหมี่ต้ม สูตร 981",
        "cal": 844
    },
    "stir_fried_soup_982": {
        "name": "ซุปผัด สูตร 982",
        "cal": 406
    },
    "fried_squid_983": {
        "name": "ปลาหมึกทอด สูตร 983",
        "cal": 696
    },
    "grilled_squid_984": {
        "name": "ปลาหมึกย่าง สูตร 984",
        "cal": 717
    },
    "stir_fried_fish_985": {
        "name": "ปลาผัด สูตร 985",
        "cal": 194
    },
    "boiled_shrimp_986": {
        "name": "กุ้งต้ม สูตร 986",
        "cal": 205
    },
    "boiled_fish_987": {
        "name": "ปลาต้ม สูตร 987",
        "cal": 40
    },
    "steamed_shrimp_988": {
        "name": "กุ้งนึ่ง สูตร 988",
        "cal": 344
    },
    "grilled_noodle_989": {
        "name": "บะหมี่ย่าง สูตร 989",
        "cal": 845
    },
    "steamed_chicken_990": {
        "name": "ไก่นึ่ง สูตร 990",
        "cal": 608
    },
    "fried_rice_991": {
        "name": "ข้าวทอด สูตร 991",
        "cal": 709
    },
    "spicy_noodle_992": {
        "name": "บะหมี่ยำ สูตร 992",
        "cal": 204
    },
    "stir_fried_rice_993": {
        "name": "ข้าวผัด สูตร 993",
        "cal": 406
    },
    "spicy_soup_994": {
        "name": "ซุปยำ สูตร 994",
        "cal": 400
    },
    "fried_noodle_995": {
        "name": "บะหมี่ทอด สูตร 995",
        "cal": 221
    },
    "stir_fried_pork_996": {
        "name": "หมูผัด สูตร 996",
        "cal": 800
    },
    "spicy_noodle_997": {
        "name": "บะหมี่ยำ สูตร 997",
        "cal": 428
    },
    "fried_beef_998": {
        "name": "เนื้อทอด สูตร 998",
        "cal": 285
    },
    "boiled_chicken_999": {
        "name": "ไก่ต้ม สูตร 999",
        "cal": 815
    },
    "fried_noodle_1000": {
        "name": "บะหมี่ทอด สูตร 1000",
        "cal": 107
    },
    "fried_pork_1001": {
        "name": "หมูทอด สูตร 1001",
        "cal": 86
    },
    "fried_rice_1002": {
        "name": "ข้าวทอด สูตร 1002",
        "cal": 242
    },
    "spicy_fish_1003": {
        "name": "ปลายำ สูตร 1003",
        "cal": 176
    },
    "steamed_beef_1004": {
        "name": "เนื้อนึ่ง สูตร 1004",
        "cal": 667
    },
    "fried_shrimp_1005": {
        "name": "กุ้งทอด สูตร 1005",
        "cal": 293
    },
    "grilled_pork_1006": {
        "name": "หมูย่าง สูตร 1006",
        "cal": 436
    },
    "steamed_noodle_1007": {
        "name": "บะหมี่นึ่ง สูตร 1007",
        "cal": 619
    },
    "grilled_rice_1008": {
        "name": "ข้าวย่าง สูตร 1008",
        "cal": 747
    },
    "boiled_shrimp_1009": {
        "name": "กุ้งต้ม สูตร 1009",
        "cal": 841
    },
    "boiled_noodle_1010": {
        "name": "บะหมี่ต้ม สูตร 1010",
        "cal": 718
    },
    "steamed_rice_1011": {
        "name": "ข้าวนึ่ง สูตร 1011",
        "cal": 545
    },
    "fried_soup_1012": {
        "name": "ซุปทอด สูตร 1012",
        "cal": 457
    },
    "boiled_rice_1013": {
        "name": "ข้าวต้ม สูตร 1013",
        "cal": 564
    },
    "spicy_rice_1014": {
        "name": "ข้าวยำ สูตร 1014",
        "cal": 481
    },
    "grilled_fish_1015": {
        "name": "ปลาย่าง สูตร 1015",
        "cal": 710
    },
    "fried_noodle_1016": {
        "name": "บะหมี่ทอด สูตร 1016",
        "cal": 298
    },
    "stir_fried_noodle_1017": {
        "name": "บะหมี่ผัด สูตร 1017",
        "cal": 31
    },
    "fried_rice_1018": {
        "name": "ข้าวทอด สูตร 1018",
        "cal": 374
    },
    "spicy_rice_1019": {
        "name": "ข้าวยำ สูตร 1019",
        "cal": 68
    },
    "spicy_rice_1020": {
        "name": "ข้าวยำ สูตร 1020",
        "cal": 827
    },
    "spicy_soup_1021": {
        "name": "ซุปยำ สูตร 1021",
        "cal": 143
    },
    "steamed_fish_1022": {
        "name": "ปลานึ่ง สูตร 1022",
        "cal": 332
    },
    "fried_pork_1023": {
        "name": "หมูทอด สูตร 1023",
        "cal": 752
    },
    "steamed_fish_1024": {
        "name": "ปลานึ่ง สูตร 1024",
        "cal": 633
    },
    "boiled_noodle_1025": {
        "name": "บะหมี่ต้ม สูตร 1025",
        "cal": 50
    },
    "spicy_soup_1026": {
        "name": "ซุปยำ สูตร 1026",
        "cal": 718
    },
    "steamed_squid_1027": {
        "name": "ปลาหมึกนึ่ง สูตร 1027",
        "cal": 685
    },
    "spicy_beef_1028": {
        "name": "เนื้อยำ สูตร 1028",
        "cal": 45
    },
    "stir_fried_soup_1029": {
        "name": "ซุปผัด สูตร 1029",
        "cal": 283
    },
    "steamed_rice_1030": {
        "name": "ข้าวนึ่ง สูตร 1030",
        "cal": 85
    },
    "fried_rice_1031": {
        "name": "ข้าวทอด สูตร 1031",
        "cal": 846
    },
    "spicy_fish_1032": {
        "name": "ปลายำ สูตร 1032",
        "cal": 749
    },
    "grilled_fish_1033": {
        "name": "ปลาย่าง สูตร 1033",
        "cal": 674
    },
    "steamed_pork_1034": {
        "name": "หมูนึ่ง สูตร 1034",
        "cal": 51
    },
    "fried_soup_1035": {
        "name": "ซุปทอด สูตร 1035",
        "cal": 797
    },
    "grilled_squid_1036": {
        "name": "ปลาหมึกย่าง สูตร 1036",
        "cal": 800
    },
    "boiled_fish_1037": {
        "name": "ปลาต้ม สูตร 1037",
        "cal": 437
    },
    "stir_fried_rice_1038": {
        "name": "ข้าวผัด สูตร 1038",
        "cal": 47
    },
    "fried_rice_1039": {
        "name": "ข้าวทอด สูตร 1039",
        "cal": 160
    },
    "boiled_squid_1040": {
        "name": "ปลาหมึกต้ม สูตร 1040",
        "cal": 94
    },
    "boiled_fish_1041": {
        "name": "ปลาต้ม สูตร 1041",
        "cal": 517
    },
    "spicy_squid_1042": {
        "name": "ปลาหมึกยำ สูตร 1042",
        "cal": 696
    },
    "grilled_beef_1043": {
        "name": "เนื้อย่าง สูตร 1043",
        "cal": 429
    },
    "fried_shrimp_1044": {
        "name": "กุ้งทอด สูตร 1044",
        "cal": 665
    },
    "boiled_soup_1045": {
        "name": "ซุปต้ม สูตร 1045",
        "cal": 357
    },
    "boiled_rice_1046": {
        "name": "ข้าวต้ม สูตร 1046",
        "cal": 44
    },
    "grilled_rice_1047": {
        "name": "ข้าวย่าง สูตร 1047",
        "cal": 184
    },
    "boiled_shrimp_1048": {
        "name": "กุ้งต้ม สูตร 1048",
        "cal": 336
    },
    "grilled_rice_1049": {
        "name": "ข้าวย่าง สูตร 1049",
        "cal": 347
    },
    "grilled_chicken_1050": {
        "name": "ไก่ย่าง สูตร 1050",
        "cal": 371
    },
    "stir_fried_beef_1051": {
        "name": "เนื้อผัด สูตร 1051",
        "cal": 266
    },
    "stir_fried_pork_1052": {
        "name": "หมูผัด สูตร 1052",
        "cal": 104
    },
    "boiled_chicken_1053": {
        "name": "ไก่ต้ม สูตร 1053",
        "cal": 748
    },
    "steamed_shrimp_1054": {
        "name": "กุ้งนึ่ง สูตร 1054",
        "cal": 431
    },
    "fried_noodle_1055": {
        "name": "บะหมี่ทอด สูตร 1055",
        "cal": 829
    },
    "boiled_shrimp_1056": {
        "name": "กุ้งต้ม สูตร 1056",
        "cal": 725
    },
    "stir_fried_soup_1057": {
        "name": "ซุปผัด สูตร 1057",
        "cal": 749
    },
    "grilled_beef_1058": {
        "name": "เนื้อย่าง สูตร 1058",
        "cal": 613
    },
    "spicy_chicken_1059": {
        "name": "ไก่ยำ สูตร 1059",
        "cal": 686
    },
    "fried_soup_1060": {
        "name": "ซุปทอด สูตร 1060",
        "cal": 136
    },
    "fried_pork_1061": {
        "name": "หมูทอด สูตร 1061",
        "cal": 410
    },
    "boiled_soup_1062": {
        "name": "ซุปต้ม สูตร 1062",
        "cal": 567
    },
    "grilled_fish_1063": {
        "name": "ปลาย่าง สูตร 1063",
        "cal": 49
    },
    "spicy_rice_1064": {
        "name": "ข้าวยำ สูตร 1064",
        "cal": 229
    },
    "stir_fried_fish_1065": {
        "name": "ปลาผัด สูตร 1065",
        "cal": 791
    },
    "boiled_noodle_1066": {
        "name": "บะหมี่ต้ม สูตร 1066",
        "cal": 358
    },
    "steamed_noodle_1067": {
        "name": "บะหมี่นึ่ง สูตร 1067",
        "cal": 237
    },
    "spicy_shrimp_1068": {
        "name": "กุ้งยำ สูตร 1068",
        "cal": 721
    },
    "fried_noodle_1069": {
        "name": "บะหมี่ทอด สูตร 1069",
        "cal": 506
    },
    "fried_noodle_1070": {
        "name": "บะหมี่ทอด สูตร 1070",
        "cal": 247
    },
    "boiled_soup_1071": {
        "name": "ซุปต้ม สูตร 1071",
        "cal": 479
    },
    "steamed_shrimp_1072": {
        "name": "กุ้งนึ่ง สูตร 1072",
        "cal": 84
    },
    "steamed_soup_1073": {
        "name": "ซุปนึ่ง สูตร 1073",
        "cal": 372
    },
    "steamed_soup_1074": {
        "name": "ซุปนึ่ง สูตร 1074",
        "cal": 412
    },
    "boiled_noodle_1075": {
        "name": "บะหมี่ต้ม สูตร 1075",
        "cal": 556
    },
    "boiled_chicken_1076": {
        "name": "ไก่ต้ม สูตร 1076",
        "cal": 265
    },
    "steamed_rice_1077": {
        "name": "ข้าวนึ่ง สูตร 1077",
        "cal": 738
    },
    "stir_fried_beef_1078": {
        "name": "เนื้อผัด สูตร 1078",
        "cal": 331
    },
    "steamed_soup_1079": {
        "name": "ซุปนึ่ง สูตร 1079",
        "cal": 750
    },
    "boiled_noodle_1080": {
        "name": "บะหมี่ต้ม สูตร 1080",
        "cal": 79
    },
    "stir_fried_chicken_1081": {
        "name": "ไก่ผัด สูตร 1081",
        "cal": 354
    },
    "steamed_fish_1082": {
        "name": "ปลานึ่ง สูตร 1082",
        "cal": 570
    },
    "fried_pork_1083": {
        "name": "หมูทอด สูตร 1083",
        "cal": 234
    },
    "grilled_fish_1084": {
        "name": "ปลาย่าง สูตร 1084",
        "cal": 557
    },
    "steamed_shrimp_1085": {
        "name": "กุ้งนึ่ง สูตร 1085",
        "cal": 772
    },
    "stir_fried_squid_1086": {
        "name": "ปลาหมึกผัด สูตร 1086",
        "cal": 121
    },
    "fried_shrimp_1087": {
        "name": "กุ้งทอด สูตร 1087",
        "cal": 69
    },
    "steamed_chicken_1088": {
        "name": "ไก่นึ่ง สูตร 1088",
        "cal": 244
    },
    "steamed_squid_1089": {
        "name": "ปลาหมึกนึ่ง สูตร 1089",
        "cal": 818
    },
    "stir_fried_shrimp_1090": {
        "name": "กุ้งผัด สูตร 1090",
        "cal": 590
    },
    "steamed_shrimp_1091": {
        "name": "กุ้งนึ่ง สูตร 1091",
        "cal": 43
    },
    "stir_fried_chicken_1092": {
        "name": "ไก่ผัด สูตร 1092",
        "cal": 697
    },
    "spicy_squid_1093": {
        "name": "ปลาหมึกยำ สูตร 1093",
        "cal": 388
    },
    "boiled_fish_1094": {
        "name": "ปลาต้ม สูตร 1094",
        "cal": 320
    },
    "fried_chicken_1095": {
        "name": "ไก่ทอด สูตร 1095",
        "cal": 324
    },
    "boiled_noodle_1096": {
        "name": "บะหมี่ต้ม สูตร 1096",
        "cal": 99
    },
    "boiled_noodle_1097": {
        "name": "บะหมี่ต้ม สูตร 1097",
        "cal": 252
    },
    "fried_pork_1098": {
        "name": "หมูทอด สูตร 1098",
        "cal": 254
    },
    "grilled_chicken_1099": {
        "name": "ไก่ย่าง สูตร 1099",
        "cal": 61
    },
    "grilled_beef_1100": {
        "name": "เนื้อย่าง สูตร 1100",
        "cal": 308
    },
    "stir_fried_beef_1101": {
        "name": "เนื้อผัด สูตร 1101",
        "cal": 751
    },
    "fried_beef_1102": {
        "name": "เนื้อทอด สูตร 1102",
        "cal": 241
    },
    "spicy_chicken_1103": {
        "name": "ไก่ยำ สูตร 1103",
        "cal": 752
    },
    "steamed_rice_1104": {
        "name": "ข้าวนึ่ง สูตร 1104",
        "cal": 544
    },
    "steamed_squid_1105": {
        "name": "ปลาหมึกนึ่ง สูตร 1105",
        "cal": 107
    },
    "steamed_beef_1106": {
        "name": "เนื้อนึ่ง สูตร 1106",
        "cal": 397
    },
    "spicy_pork_1107": {
        "name": "หมูยำ สูตร 1107",
        "cal": 511
    },
    "grilled_squid_1108": {
        "name": "ปลาหมึกย่าง สูตร 1108",
        "cal": 572
    },
    "grilled_chicken_1109": {
        "name": "ไก่ย่าง สูตร 1109",
        "cal": 785
    },
    "spicy_rice_1110": {
        "name": "ข้าวยำ สูตร 1110",
        "cal": 442
    },
    "fried_squid_1111": {
        "name": "ปลาหมึกทอด สูตร 1111",
        "cal": 204
    },
    "boiled_soup_1112": {
        "name": "ซุปต้ม สูตร 1112",
        "cal": 302
    },
    "fried_noodle_1113": {
        "name": "บะหมี่ทอด สูตร 1113",
        "cal": 338
    },
    "spicy_rice_1114": {
        "name": "ข้าวยำ สูตร 1114",
        "cal": 757
    },
    "boiled_chicken_1115": {
        "name": "ไก่ต้ม สูตร 1115",
        "cal": 403
    },
    "steamed_fish_1116": {
        "name": "ปลานึ่ง สูตร 1116",
        "cal": 297
    },
    "stir_fried_pork_1117": {
        "name": "หมูผัด สูตร 1117",
        "cal": 342
    },
    "steamed_squid_1118": {
        "name": "ปลาหมึกนึ่ง สูตร 1118",
        "cal": 392
    },
    "stir_fried_noodle_1119": {
        "name": "บะหมี่ผัด สูตร 1119",
        "cal": 65
    },
    "spicy_noodle_1120": {
        "name": "บะหมี่ยำ สูตร 1120",
        "cal": 419
    },
    "grilled_beef_1121": {
        "name": "เนื้อย่าง สูตร 1121",
        "cal": 53
    },
    "stir_fried_beef_1122": {
        "name": "เนื้อผัด สูตร 1122",
        "cal": 412
    },
    "stir_fried_pork_1123": {
        "name": "หมูผัด สูตร 1123",
        "cal": 155
    },
    "fried_squid_1124": {
        "name": "ปลาหมึกทอด สูตร 1124",
        "cal": 523
    },
    "fried_squid_1125": {
        "name": "ปลาหมึกทอด สูตร 1125",
        "cal": 488
    },
    "steamed_beef_1126": {
        "name": "เนื้อนึ่ง สูตร 1126",
        "cal": 735
    },
    "steamed_noodle_1127": {
        "name": "บะหมี่นึ่ง สูตร 1127",
        "cal": 391
    },
    "stir_fried_chicken_1128": {
        "name": "ไก่ผัด สูตร 1128",
        "cal": 224
    },
    "stir_fried_rice_1129": {
        "name": "ข้าวผัด สูตร 1129",
        "cal": 834
    },
    "stir_fried_soup_1130": {
        "name": "ซุปผัด สูตร 1130",
        "cal": 69
    },
    "fried_beef_1131": {
        "name": "เนื้อทอด สูตร 1131",
        "cal": 686
    },
    "grilled_squid_1132": {
        "name": "ปลาหมึกย่าง สูตร 1132",
        "cal": 550
    },
    "stir_fried_chicken_1133": {
        "name": "ไก่ผัด สูตร 1133",
        "cal": 552
    },
    "fried_rice_1134": {
        "name": "ข้าวทอด สูตร 1134",
        "cal": 220
    },
    "fried_pork_1135": {
        "name": "หมูทอด สูตร 1135",
        "cal": 43
    },
    "stir_fried_fish_1136": {
        "name": "ปลาผัด สูตร 1136",
        "cal": 161
    },
    "boiled_rice_1137": {
        "name": "ข้าวต้ม สูตร 1137",
        "cal": 33
    },
    "boiled_squid_1138": {
        "name": "ปลาหมึกต้ม สูตร 1138",
        "cal": 432
    },
    "boiled_pork_1139": {
        "name": "หมูต้ม สูตร 1139",
        "cal": 690
    },
    "boiled_squid_1140": {
        "name": "ปลาหมึกต้ม สูตร 1140",
        "cal": 354
    },
    "stir_fried_pork_1141": {
        "name": "หมูผัด สูตร 1141",
        "cal": 681
    },
    "boiled_squid_1142": {
        "name": "ปลาหมึกต้ม สูตร 1142",
        "cal": 662
    },
    "fried_soup_1143": {
        "name": "ซุปทอด สูตร 1143",
        "cal": 154
    },
    "fried_shrimp_1144": {
        "name": "กุ้งทอด สูตร 1144",
        "cal": 154
    },
    "grilled_chicken_1145": {
        "name": "ไก่ย่าง สูตร 1145",
        "cal": 101
    },
    "stir_fried_beef_1146": {
        "name": "เนื้อผัด สูตร 1146",
        "cal": 52
    },
    "grilled_rice_1147": {
        "name": "ข้าวย่าง สูตร 1147",
        "cal": 653
    },
    "stir_fried_rice_1148": {
        "name": "ข้าวผัด สูตร 1148",
        "cal": 521
    },
    "grilled_fish_1149": {
        "name": "ปลาย่าง สูตร 1149",
        "cal": 227
    },
    "steamed_noodle_1150": {
        "name": "บะหมี่นึ่ง สูตร 1150",
        "cal": 306
    },
    "spicy_soup_1151": {
        "name": "ซุปยำ สูตร 1151",
        "cal": 380
    },
    "spicy_pork_1152": {
        "name": "หมูยำ สูตร 1152",
        "cal": 394
    },
    "stir_fried_pork_1153": {
        "name": "หมูผัด สูตร 1153",
        "cal": 443
    },
    "stir_fried_beef_1154": {
        "name": "เนื้อผัด สูตร 1154",
        "cal": 42
    },
    "boiled_squid_1155": {
        "name": "ปลาหมึกต้ม สูตร 1155",
        "cal": 554
    },
    "steamed_fish_1156": {
        "name": "ปลานึ่ง สูตร 1156",
        "cal": 413
    },
    "steamed_soup_1157": {
        "name": "ซุปนึ่ง สูตร 1157",
        "cal": 494
    },
    "grilled_shrimp_1158": {
        "name": "กุ้งย่าง สูตร 1158",
        "cal": 797
    },
    "steamed_pork_1159": {
        "name": "หมูนึ่ง สูตร 1159",
        "cal": 294
    },
    "spicy_squid_1160": {
        "name": "ปลาหมึกยำ สูตร 1160",
        "cal": 358
    },
    "boiled_pork_1161": {
        "name": "หมูต้ม สูตร 1161",
        "cal": 455
    },
    "boiled_beef_1162": {
        "name": "เนื้อต้ม สูตร 1162",
        "cal": 74
    },
    "steamed_beef_1163": {
        "name": "เนื้อนึ่ง สูตร 1163",
        "cal": 123
    },
    "spicy_rice_1164": {
        "name": "ข้าวยำ สูตร 1164",
        "cal": 549
    },
    "spicy_noodle_1165": {
        "name": "บะหมี่ยำ สูตร 1165",
        "cal": 694
    },
    "steamed_pork_1166": {
        "name": "หมูนึ่ง สูตร 1166",
        "cal": 846
    },
    "stir_fried_noodle_1167": {
        "name": "บะหมี่ผัด สูตร 1167",
        "cal": 406
    },
    "fried_soup_1168": {
        "name": "ซุปทอด สูตร 1168",
        "cal": 724
    },
    "spicy_rice_1169": {
        "name": "ข้าวยำ สูตร 1169",
        "cal": 754
    },
    "boiled_squid_1170": {
        "name": "ปลาหมึกต้ม สูตร 1170",
        "cal": 257
    },
    "grilled_shrimp_1171": {
        "name": "กุ้งย่าง สูตร 1171",
        "cal": 138
    },
    "steamed_fish_1172": {
        "name": "ปลานึ่ง สูตร 1172",
        "cal": 553
    },
    "boiled_beef_1173": {
        "name": "เนื้อต้ม สูตร 1173",
        "cal": 478
    },
    "stir_fried_soup_1174": {
        "name": "ซุปผัด สูตร 1174",
        "cal": 285
    },
    "fried_soup_1175": {
        "name": "ซุปทอด สูตร 1175",
        "cal": 243
    },
    "stir_fried_beef_1176": {
        "name": "เนื้อผัด สูตร 1176",
        "cal": 230
    },
    "spicy_pork_1177": {
        "name": "หมูยำ สูตร 1177",
        "cal": 116
    },
    "spicy_beef_1178": {
        "name": "เนื้อยำ สูตร 1178",
        "cal": 491
    },
    "grilled_noodle_1179": {
        "name": "บะหมี่ย่าง สูตร 1179",
        "cal": 134
    },
    "stir_fried_shrimp_1180": {
        "name": "กุ้งผัด สูตร 1180",
        "cal": 764
    },
    "fried_soup_1181": {
        "name": "ซุปทอด สูตร 1181",
        "cal": 541
    },
    "steamed_shrimp_1182": {
        "name": "กุ้งนึ่ง สูตร 1182",
        "cal": 797
    },
    "boiled_squid_1183": {
        "name": "ปลาหมึกต้ม สูตร 1183",
        "cal": 195
    },
    "spicy_beef_1184": {
        "name": "เนื้อยำ สูตร 1184",
        "cal": 167
    },
    "boiled_rice_1185": {
        "name": "ข้าวต้ม สูตร 1185",
        "cal": 671
    },
    "spicy_beef_1186": {
        "name": "เนื้อยำ สูตร 1186",
        "cal": 499
    },
    "spicy_chicken_1187": {
        "name": "ไก่ยำ สูตร 1187",
        "cal": 547
    },
    "stir_fried_fish_1188": {
        "name": "ปลาผัด สูตร 1188",
        "cal": 719
    },
    "fried_rice_1189": {
        "name": "ข้าวทอด สูตร 1189",
        "cal": 372
    },
    "grilled_noodle_1190": {
        "name": "บะหมี่ย่าง สูตร 1190",
        "cal": 651
    },
    "steamed_squid_1191": {
        "name": "ปลาหมึกนึ่ง สูตร 1191",
        "cal": 318
    },
    "fried_fish_1192": {
        "name": "ปลาทอด สูตร 1192",
        "cal": 470
    },
    "grilled_beef_1193": {
        "name": "เนื้อย่าง สูตร 1193",
        "cal": 421
    },
    "grilled_shrimp_1194": {
        "name": "กุ้งย่าง สูตร 1194",
        "cal": 511
    },
    "steamed_beef_1195": {
        "name": "เนื้อนึ่ง สูตร 1195",
        "cal": 149
    },
    "fried_shrimp_1196": {
        "name": "กุ้งทอด สูตร 1196",
        "cal": 43
    },
    "steamed_fish_1197": {
        "name": "ปลานึ่ง สูตร 1197",
        "cal": 491
    },
    "spicy_soup_1198": {
        "name": "ซุปยำ สูตร 1198",
        "cal": 736
    },
    "grilled_squid_1199": {
        "name": "ปลาหมึกย่าง สูตร 1199",
        "cal": 364
    },
    "boiled_shrimp_1200": {
        "name": "กุ้งต้ม สูตร 1200",
        "cal": 192
    },
    "fried_squid_1201": {
        "name": "ปลาหมึกทอด สูตร 1201",
        "cal": 31
    },
    "grilled_chicken_1202": {
        "name": "ไก่ย่าง สูตร 1202",
        "cal": 804
    },
    "stir_fried_rice_1203": {
        "name": "ข้าวผัด สูตร 1203",
        "cal": 125
    },
    "stir_fried_fish_1204": {
        "name": "ปลาผัด สูตร 1204",
        "cal": 402
    },
    "spicy_beef_1205": {
        "name": "เนื้อยำ สูตร 1205",
        "cal": 830
    },
    "steamed_squid_1206": {
        "name": "ปลาหมึกนึ่ง สูตร 1206",
        "cal": 545
    },
    "boiled_squid_1207": {
        "name": "ปลาหมึกต้ม สูตร 1207",
        "cal": 562
    },
    "steamed_soup_1208": {
        "name": "ซุปนึ่ง สูตร 1208",
        "cal": 388
    },
    "boiled_beef_1209": {
        "name": "เนื้อต้ม สูตร 1209",
        "cal": 515
    },
    "grilled_pork_1210": {
        "name": "หมูย่าง สูตร 1210",
        "cal": 195
    },
    "boiled_chicken_1211": {
        "name": "ไก่ต้ม สูตร 1211",
        "cal": 154
    },
    "spicy_soup_1212": {
        "name": "ซุปยำ สูตร 1212",
        "cal": 727
    },
    "steamed_soup_1213": {
        "name": "ซุปนึ่ง สูตร 1213",
        "cal": 608
    },
    "boiled_beef_1214": {
        "name": "เนื้อต้ม สูตร 1214",
        "cal": 564
    },
    "boiled_shrimp_1215": {
        "name": "กุ้งต้ม สูตร 1215",
        "cal": 75
    },
    "spicy_beef_1216": {
        "name": "เนื้อยำ สูตร 1216",
        "cal": 681
    },
    "fried_soup_1217": {
        "name": "ซุปทอด สูตร 1217",
        "cal": 703
    },
    "boiled_beef_1218": {
        "name": "เนื้อต้ม สูตร 1218",
        "cal": 446
    },
    "stir_fried_noodle_1219": {
        "name": "บะหมี่ผัด สูตร 1219",
        "cal": 127
    },
    "grilled_squid_1220": {
        "name": "ปลาหมึกย่าง สูตร 1220",
        "cal": 758
    },
    "stir_fried_fish_1221": {
        "name": "ปลาผัด สูตร 1221",
        "cal": 403
    },
    "spicy_noodle_1222": {
        "name": "บะหมี่ยำ สูตร 1222",
        "cal": 143
    },
    "steamed_rice_1223": {
        "name": "ข้าวนึ่ง สูตร 1223",
        "cal": 733
    },
    "grilled_pork_1224": {
        "name": "หมูย่าง สูตร 1224",
        "cal": 310
    },
    "grilled_rice_1225": {
        "name": "ข้าวย่าง สูตร 1225",
        "cal": 490
    },
    "fried_rice_1226": {
        "name": "ข้าวทอด สูตร 1226",
        "cal": 69
    },
    "fried_soup_1227": {
        "name": "ซุปทอด สูตร 1227",
        "cal": 798
    },
    "fried_rice_1228": {
        "name": "ข้าวทอด สูตร 1228",
        "cal": 655
    },
    "spicy_noodle_1229": {
        "name": "บะหมี่ยำ สูตร 1229",
        "cal": 591
    },
    "stir_fried_beef_1230": {
        "name": "เนื้อผัด สูตร 1230",
        "cal": 169
    },
    "steamed_shrimp_1231": {
        "name": "กุ้งนึ่ง สูตร 1231",
        "cal": 695
    },
    "steamed_chicken_1232": {
        "name": "ไก่นึ่ง สูตร 1232",
        "cal": 821
    },
    "boiled_chicken_1233": {
        "name": "ไก่ต้ม สูตร 1233",
        "cal": 659
    },
    "spicy_soup_1234": {
        "name": "ซุปยำ สูตร 1234",
        "cal": 664
    },
    "steamed_noodle_1235": {
        "name": "บะหมี่นึ่ง สูตร 1235",
        "cal": 295
    },
    "steamed_noodle_1236": {
        "name": "บะหมี่นึ่ง สูตร 1236",
        "cal": 814
    },
    "fried_shrimp_1237": {
        "name": "กุ้งทอด สูตร 1237",
        "cal": 542
    },
    "grilled_soup_1238": {
        "name": "ซุปย่าง สูตร 1238",
        "cal": 514
    },
    "boiled_chicken_1239": {
        "name": "ไก่ต้ม สูตร 1239",
        "cal": 794
    },
    "fried_chicken_1240": {
        "name": "ไก่ทอด สูตร 1240",
        "cal": 57
    },
    "stir_fried_pork_1241": {
        "name": "หมูผัด สูตร 1241",
        "cal": 802
    },
    "boiled_rice_1242": {
        "name": "ข้าวต้ม สูตร 1242",
        "cal": 713
    },
    "steamed_rice_1243": {
        "name": "ข้าวนึ่ง สูตร 1243",
        "cal": 279
    },
    "boiled_noodle_1244": {
        "name": "บะหมี่ต้ม สูตร 1244",
        "cal": 102
    },
    "stir_fried_beef_1245": {
        "name": "เนื้อผัด สูตร 1245",
        "cal": 64
    },
    "steamed_noodle_1246": {
        "name": "บะหมี่นึ่ง สูตร 1246",
        "cal": 40
    },
    "boiled_soup_1247": {
        "name": "ซุปต้ม สูตร 1247",
        "cal": 635
    },
    "grilled_soup_1248": {
        "name": "ซุปย่าง สูตร 1248",
        "cal": 60
    },
    "boiled_beef_1249": {
        "name": "เนื้อต้ม สูตร 1249",
        "cal": 367
    },
    "steamed_fish_1250": {
        "name": "ปลานึ่ง สูตร 1250",
        "cal": 655
    },
    "boiled_rice_1251": {
        "name": "ข้าวต้ม สูตร 1251",
        "cal": 215
    },
    "grilled_chicken_1252": {
        "name": "ไก่ย่าง สูตร 1252",
        "cal": 505
    },
    "grilled_fish_1253": {
        "name": "ปลาย่าง สูตร 1253",
        "cal": 616
    },
    "stir_fried_fish_1254": {
        "name": "ปลาผัด สูตร 1254",
        "cal": 455
    },
    "boiled_noodle_1255": {
        "name": "บะหมี่ต้ม สูตร 1255",
        "cal": 63
    },
    "steamed_rice_1256": {
        "name": "ข้าวนึ่ง สูตร 1256",
        "cal": 598
    },
    "grilled_rice_1257": {
        "name": "ข้าวย่าง สูตร 1257",
        "cal": 115
    },
    "spicy_chicken_1258": {
        "name": "ไก่ยำ สูตร 1258",
        "cal": 754
    },
    "steamed_soup_1259": {
        "name": "ซุปนึ่ง สูตร 1259",
        "cal": 784
    },
    "stir_fried_noodle_1260": {
        "name": "บะหมี่ผัด สูตร 1260",
        "cal": 540
    },
    "spicy_pork_1261": {
        "name": "หมูยำ สูตร 1261",
        "cal": 816
    },
    "spicy_noodle_1262": {
        "name": "บะหมี่ยำ สูตร 1262",
        "cal": 54
    },
    "fried_squid_1263": {
        "name": "ปลาหมึกทอด สูตร 1263",
        "cal": 453
    },
    "steamed_squid_1264": {
        "name": "ปลาหมึกนึ่ง สูตร 1264",
        "cal": 713
    },
    "steamed_soup_1265": {
        "name": "ซุปนึ่ง สูตร 1265",
        "cal": 214
    },
    "spicy_noodle_1266": {
        "name": "บะหมี่ยำ สูตร 1266",
        "cal": 297
    },
    "stir_fried_chicken_1267": {
        "name": "ไก่ผัด สูตร 1267",
        "cal": 170
    },
    "stir_fried_soup_1268": {
        "name": "ซุปผัด สูตร 1268",
        "cal": 775
    },
    "stir_fried_soup_1269": {
        "name": "ซุปผัด สูตร 1269",
        "cal": 181
    },
    "stir_fried_chicken_1270": {
        "name": "ไก่ผัด สูตร 1270",
        "cal": 34
    },
    "stir_fried_shrimp_1271": {
        "name": "กุ้งผัด สูตร 1271",
        "cal": 29
    },
    "grilled_squid_1272": {
        "name": "ปลาหมึกย่าง สูตร 1272",
        "cal": 777
    },
    "stir_fried_beef_1273": {
        "name": "เนื้อผัด สูตร 1273",
        "cal": 199
    },
    "steamed_soup_1274": {
        "name": "ซุปนึ่ง สูตร 1274",
        "cal": 585
    },
    "stir_fried_chicken_1275": {
        "name": "ไก่ผัด สูตร 1275",
        "cal": 608
    },
    "fried_pork_1276": {
        "name": "หมูทอด สูตร 1276",
        "cal": 144
    },
    "grilled_beef_1277": {
        "name": "เนื้อย่าง สูตร 1277",
        "cal": 170
    },
    "boiled_rice_1278": {
        "name": "ข้าวต้ม สูตร 1278",
        "cal": 423
    },
    "fried_squid_1279": {
        "name": "ปลาหมึกทอด สูตร 1279",
        "cal": 802
    },
    "fried_pork_1280": {
        "name": "หมูทอด สูตร 1280",
        "cal": 790
    },
    "boiled_pork_1281": {
        "name": "หมูต้ม สูตร 1281",
        "cal": 753
    },
    "spicy_beef_1282": {
        "name": "เนื้อยำ สูตร 1282",
        "cal": 545
    },
    "fried_shrimp_1283": {
        "name": "กุ้งทอด สูตร 1283",
        "cal": 782
    },
    "fried_fish_1284": {
        "name": "ปลาทอด สูตร 1284",
        "cal": 409
    },
    "fried_fish_1285": {
        "name": "ปลาทอด สูตร 1285",
        "cal": 30
    },
    "steamed_fish_1286": {
        "name": "ปลานึ่ง สูตร 1286",
        "cal": 818
    },
    "fried_noodle_1287": {
        "name": "บะหมี่ทอด สูตร 1287",
        "cal": 396
    },
    "stir_fried_squid_1288": {
        "name": "ปลาหมึกผัด สูตร 1288",
        "cal": 119
    },
    "fried_squid_1289": {
        "name": "ปลาหมึกทอด สูตร 1289",
        "cal": 529
    },
    "boiled_rice_1290": {
        "name": "ข้าวต้ม สูตร 1290",
        "cal": 552
    },
    "spicy_beef_1291": {
        "name": "เนื้อยำ สูตร 1291",
        "cal": 369
    },
    "spicy_fish_1292": {
        "name": "ปลายำ สูตร 1292",
        "cal": 332
    },
    "stir_fried_pork_1293": {
        "name": "หมูผัด สูตร 1293",
        "cal": 594
    },
    "stir_fried_chicken_1294": {
        "name": "ไก่ผัด สูตร 1294",
        "cal": 477
    },
    "stir_fried_noodle_1295": {
        "name": "บะหมี่ผัด สูตร 1295",
        "cal": 179
    },
    "boiled_squid_1296": {
        "name": "ปลาหมึกต้ม สูตร 1296",
        "cal": 356
    },
    "boiled_rice_1297": {
        "name": "ข้าวต้ม สูตร 1297",
        "cal": 70
    },
    "stir_fried_chicken_1298": {
        "name": "ไก่ผัด สูตร 1298",
        "cal": 290
    },
    "stir_fried_soup_1299": {
        "name": "ซุปผัด สูตร 1299",
        "cal": 551
    },
    "boiled_shrimp_1300": {
        "name": "กุ้งต้ม สูตร 1300",
        "cal": 808
    },
    "fried_chicken_1301": {
        "name": "ไก่ทอด สูตร 1301",
        "cal": 333
    },
    "grilled_chicken_1302": {
        "name": "ไก่ย่าง สูตร 1302",
        "cal": 296
    },
    "spicy_squid_1303": {
        "name": "ปลาหมึกยำ สูตร 1303",
        "cal": 793
    },
    "fried_soup_1304": {
        "name": "ซุปทอด สูตร 1304",
        "cal": 128
    },
    "spicy_pork_1305": {
        "name": "หมูยำ สูตร 1305",
        "cal": 387
    },
    "boiled_beef_1306": {
        "name": "เนื้อต้ม สูตร 1306",
        "cal": 551
    },
    "spicy_pork_1307": {
        "name": "หมูยำ สูตร 1307",
        "cal": 392
    },
    "fried_rice_1308": {
        "name": "ข้าวทอด สูตร 1308",
        "cal": 849
    },
    "grilled_rice_1309": {
        "name": "ข้าวย่าง สูตร 1309",
        "cal": 442
    },
    "spicy_chicken_1310": {
        "name": "ไก่ยำ สูตร 1310",
        "cal": 476
    },
    "spicy_fish_1311": {
        "name": "ปลายำ สูตร 1311",
        "cal": 181
    },
    "spicy_pork_1312": {
        "name": "หมูยำ สูตร 1312",
        "cal": 513
    },
    "stir_fried_noodle_1313": {
        "name": "บะหมี่ผัด สูตร 1313",
        "cal": 72
    },
    "stir_fried_shrimp_1314": {
        "name": "กุ้งผัด สูตร 1314",
        "cal": 508
    },
    "fried_shrimp_1315": {
        "name": "กุ้งทอด สูตร 1315",
        "cal": 680
    },
    "steamed_noodle_1316": {
        "name": "บะหมี่นึ่ง สูตร 1316",
        "cal": 643
    },
    "stir_fried_soup_1317": {
        "name": "ซุปผัด สูตร 1317",
        "cal": 299
    },
    "grilled_fish_1318": {
        "name": "ปลาย่าง สูตร 1318",
        "cal": 110
    },
    "stir_fried_squid_1319": {
        "name": "ปลาหมึกผัด สูตร 1319",
        "cal": 249
    },
    "grilled_fish_1320": {
        "name": "ปลาย่าง สูตร 1320",
        "cal": 601
    },
    "grilled_noodle_1321": {
        "name": "บะหมี่ย่าง สูตร 1321",
        "cal": 721
    },
    "stir_fried_noodle_1322": {
        "name": "บะหมี่ผัด สูตร 1322",
        "cal": 789
    },
    "spicy_chicken_1323": {
        "name": "ไก่ยำ สูตร 1323",
        "cal": 638
    },
    "boiled_soup_1324": {
        "name": "ซุปต้ม สูตร 1324",
        "cal": 668
    },
    "spicy_fish_1325": {
        "name": "ปลายำ สูตร 1325",
        "cal": 397
    },
    "boiled_beef_1326": {
        "name": "เนื้อต้ม สูตร 1326",
        "cal": 305
    },
    "spicy_chicken_1327": {
        "name": "ไก่ยำ สูตร 1327",
        "cal": 253
    },
    "fried_fish_1328": {
        "name": "ปลาทอด สูตร 1328",
        "cal": 630
    },
    "stir_fried_pork_1329": {
        "name": "หมูผัด สูตร 1329",
        "cal": 111
    },
    "stir_fried_chicken_1330": {
        "name": "ไก่ผัด สูตร 1330",
        "cal": 556
    },
    "steamed_soup_1331": {
        "name": "ซุปนึ่ง สูตร 1331",
        "cal": 293
    },
    "boiled_beef_1332": {
        "name": "เนื้อต้ม สูตร 1332",
        "cal": 153
    },
    "boiled_beef_1333": {
        "name": "เนื้อต้ม สูตร 1333",
        "cal": 287
    },
    "stir_fried_chicken_1334": {
        "name": "ไก่ผัด สูตร 1334",
        "cal": 136
    },
    "stir_fried_shrimp_1335": {
        "name": "กุ้งผัด สูตร 1335",
        "cal": 819
    },
    "stir_fried_rice_1336": {
        "name": "ข้าวผัด สูตร 1336",
        "cal": 525
    },
    "stir_fried_squid_1337": {
        "name": "ปลาหมึกผัด สูตร 1337",
        "cal": 744
    },
    "grilled_beef_1338": {
        "name": "เนื้อย่าง สูตร 1338",
        "cal": 194
    },
    "stir_fried_rice_1339": {
        "name": "ข้าวผัด สูตร 1339",
        "cal": 306
    },
    "spicy_shrimp_1340": {
        "name": "กุ้งยำ สูตร 1340",
        "cal": 632
    },
    "stir_fried_fish_1341": {
        "name": "ปลาผัด สูตร 1341",
        "cal": 586
    },
    "boiled_fish_1342": {
        "name": "ปลาต้ม สูตร 1342",
        "cal": 507
    },
    "stir_fried_chicken_1343": {
        "name": "ไก่ผัด สูตร 1343",
        "cal": 548
    },
    "spicy_rice_1344": {
        "name": "ข้าวยำ สูตร 1344",
        "cal": 378
    },
    "fried_beef_1345": {
        "name": "เนื้อทอด สูตร 1345",
        "cal": 593
    },
    "steamed_beef_1346": {
        "name": "เนื้อนึ่ง สูตร 1346",
        "cal": 191
    },
    "fried_shrimp_1347": {
        "name": "กุ้งทอด สูตร 1347",
        "cal": 455
    },
    "steamed_pork_1348": {
        "name": "หมูนึ่ง สูตร 1348",
        "cal": 297
    },
    "fried_shrimp_1349": {
        "name": "กุ้งทอด สูตร 1349",
        "cal": 707
    },
    "stir_fried_soup_1350": {
        "name": "ซุปผัด สูตร 1350",
        "cal": 728
    },
    "spicy_fish_1351": {
        "name": "ปลายำ สูตร 1351",
        "cal": 346
    },
    "fried_squid_1352": {
        "name": "ปลาหมึกทอด สูตร 1352",
        "cal": 813
    },
    "fried_soup_1353": {
        "name": "ซุปทอด สูตร 1353",
        "cal": 367
    },
    "grilled_shrimp_1354": {
        "name": "กุ้งย่าง สูตร 1354",
        "cal": 46
    },
    "stir_fried_soup_1355": {
        "name": "ซุปผัด สูตร 1355",
        "cal": 73
    },
    "fried_soup_1356": {
        "name": "ซุปทอด สูตร 1356",
        "cal": 380
    },
    "fried_soup_1357": {
        "name": "ซุปทอด สูตร 1357",
        "cal": 552
    },
    "boiled_pork_1358": {
        "name": "หมูต้ม สูตร 1358",
        "cal": 828
    },
    "fried_shrimp_1359": {
        "name": "กุ้งทอด สูตร 1359",
        "cal": 850
    },
    "boiled_pork_1360": {
        "name": "หมูต้ม สูตร 1360",
        "cal": 383
    },
    "boiled_fish_1361": {
        "name": "ปลาต้ม สูตร 1361",
        "cal": 376
    },
    "fried_fish_1362": {
        "name": "ปลาทอด สูตร 1362",
        "cal": 372
    },
    "steamed_fish_1363": {
        "name": "ปลานึ่ง สูตร 1363",
        "cal": 201
    },
    "steamed_rice_1364": {
        "name": "ข้าวนึ่ง สูตร 1364",
        "cal": 63
    },
    "boiled_noodle_1365": {
        "name": "บะหมี่ต้ม สูตร 1365",
        "cal": 427
    },
    "spicy_chicken_1366": {
        "name": "ไก่ยำ สูตร 1366",
        "cal": 348
    },
    "spicy_soup_1367": {
        "name": "ซุปยำ สูตร 1367",
        "cal": 60
    },
    "grilled_chicken_1368": {
        "name": "ไก่ย่าง สูตร 1368",
        "cal": 607
    },
    "spicy_rice_1369": {
        "name": "ข้าวยำ สูตร 1369",
        "cal": 426
    },
    "steamed_pork_1370": {
        "name": "หมูนึ่ง สูตร 1370",
        "cal": 647
    },
    "fried_soup_1371": {
        "name": "ซุปทอด สูตร 1371",
        "cal": 97
    },
    "boiled_chicken_1372": {
        "name": "ไก่ต้ม สูตร 1372",
        "cal": 823
    },
    "grilled_fish_1373": {
        "name": "ปลาย่าง สูตร 1373",
        "cal": 661
    },
    "boiled_soup_1374": {
        "name": "ซุปต้ม สูตร 1374",
        "cal": 825
    },
    "spicy_beef_1375": {
        "name": "เนื้อยำ สูตร 1375",
        "cal": 145
    },
    "fried_pork_1376": {
        "name": "หมูทอด สูตร 1376",
        "cal": 813
    },
    "spicy_fish_1377": {
        "name": "ปลายำ สูตร 1377",
        "cal": 408
    },
    "stir_fried_shrimp_1378": {
        "name": "กุ้งผัด สูตร 1378",
        "cal": 286
    },
    "steamed_shrimp_1379": {
        "name": "กุ้งนึ่ง สูตร 1379",
        "cal": 180
    },
    "spicy_shrimp_1380": {
        "name": "กุ้งยำ สูตร 1380",
        "cal": 263
    },
    "grilled_fish_1381": {
        "name": "ปลาย่าง สูตร 1381",
        "cal": 191
    },
    "stir_fried_rice_1382": {
        "name": "ข้าวผัด สูตร 1382",
        "cal": 179
    },
    "grilled_rice_1383": {
        "name": "ข้าวย่าง สูตร 1383",
        "cal": 654
    },
    "spicy_soup_1384": {
        "name": "ซุปยำ สูตร 1384",
        "cal": 489
    },
    "fried_pork_1385": {
        "name": "หมูทอด สูตร 1385",
        "cal": 462
    },
    "steamed_noodle_1386": {
        "name": "บะหมี่นึ่ง สูตร 1386",
        "cal": 429
    },
    "fried_soup_1387": {
        "name": "ซุปทอด สูตร 1387",
        "cal": 101
    },
    "spicy_rice_1388": {
        "name": "ข้าวยำ สูตร 1388",
        "cal": 726
    },
    "steamed_pork_1389": {
        "name": "หมูนึ่ง สูตร 1389",
        "cal": 157
    },
    "boiled_soup_1390": {
        "name": "ซุปต้ม สูตร 1390",
        "cal": 551
    },
    "fried_beef_1391": {
        "name": "เนื้อทอด สูตร 1391",
        "cal": 78
    },
    "grilled_noodle_1392": {
        "name": "บะหมี่ย่าง สูตร 1392",
        "cal": 653
    },
    "steamed_soup_1393": {
        "name": "ซุปนึ่ง สูตร 1393",
        "cal": 483
    },
    "fried_beef_1394": {
        "name": "เนื้อทอด สูตร 1394",
        "cal": 163
    },
    "grilled_beef_1395": {
        "name": "เนื้อย่าง สูตร 1395",
        "cal": 557
    },
    "steamed_chicken_1396": {
        "name": "ไก่นึ่ง สูตร 1396",
        "cal": 693
    },
    "grilled_pork_1397": {
        "name": "หมูย่าง สูตร 1397",
        "cal": 437
    },
    "steamed_beef_1398": {
        "name": "เนื้อนึ่ง สูตร 1398",
        "cal": 649
    },
    "fried_beef_1399": {
        "name": "เนื้อทอด สูตร 1399",
        "cal": 546
    },
    "fried_soup_1400": {
        "name": "ซุปทอด สูตร 1400",
        "cal": 125
    },
    "grilled_squid_1401": {
        "name": "ปลาหมึกย่าง สูตร 1401",
        "cal": 663
    },
    "spicy_shrimp_1402": {
        "name": "กุ้งยำ สูตร 1402",
        "cal": 578
    },
    "grilled_beef_1403": {
        "name": "เนื้อย่าง สูตร 1403",
        "cal": 359
    },
    "grilled_shrimp_1404": {
        "name": "กุ้งย่าง สูตร 1404",
        "cal": 236
    },
    "boiled_shrimp_1405": {
        "name": "กุ้งต้ม สูตร 1405",
        "cal": 767
    },
    "boiled_noodle_1406": {
        "name": "บะหมี่ต้ม สูตร 1406",
        "cal": 804
    },
    "grilled_beef_1407": {
        "name": "เนื้อย่าง สูตร 1407",
        "cal": 416
    },
    "boiled_soup_1408": {
        "name": "ซุปต้ม สูตร 1408",
        "cal": 650
    },
    "stir_fried_pork_1409": {
        "name": "หมูผัด สูตร 1409",
        "cal": 719
    },
    "grilled_shrimp_1410": {
        "name": "กุ้งย่าง สูตร 1410",
        "cal": 457
    },
    "fried_soup_1411": {
        "name": "ซุปทอด สูตร 1411",
        "cal": 804
    },
    "boiled_rice_1412": {
        "name": "ข้าวต้ม สูตร 1412",
        "cal": 451
    },
    "boiled_chicken_1413": {
        "name": "ไก่ต้ม สูตร 1413",
        "cal": 601
    },
    "stir_fried_chicken_1414": {
        "name": "ไก่ผัด สูตร 1414",
        "cal": 777
    },
    "stir_fried_rice_1415": {
        "name": "ข้าวผัด สูตร 1415",
        "cal": 269
    },
    "grilled_noodle_1416": {
        "name": "บะหมี่ย่าง สูตร 1416",
        "cal": 78
    },
    "fried_rice_1417": {
        "name": "ข้าวทอด สูตร 1417",
        "cal": 632
    },
    "steamed_squid_1418": {
        "name": "ปลาหมึกนึ่ง สูตร 1418",
        "cal": 65
    },
    "boiled_chicken_1419": {
        "name": "ไก่ต้ม สูตร 1419",
        "cal": 195
    },
    "spicy_noodle_1420": {
        "name": "บะหมี่ยำ สูตร 1420",
        "cal": 228
    },
    "steamed_fish_1421": {
        "name": "ปลานึ่ง สูตร 1421",
        "cal": 428
    },
    "stir_fried_shrimp_1422": {
        "name": "กุ้งผัด สูตร 1422",
        "cal": 710
    },
    "spicy_fish_1423": {
        "name": "ปลายำ สูตร 1423",
        "cal": 125
    },
    "fried_soup_1424": {
        "name": "ซุปทอด สูตร 1424",
        "cal": 732
    },
    "spicy_soup_1425": {
        "name": "ซุปยำ สูตร 1425",
        "cal": 714
    },
    "fried_shrimp_1426": {
        "name": "กุ้งทอด สูตร 1426",
        "cal": 742
    },
    "stir_fried_squid_1427": {
        "name": "ปลาหมึกผัด สูตร 1427",
        "cal": 256
    },
    "steamed_chicken_1428": {
        "name": "ไก่นึ่ง สูตร 1428",
        "cal": 105
    },
    "spicy_squid_1429": {
        "name": "ปลาหมึกยำ สูตร 1429",
        "cal": 392
    },
    "stir_fried_noodle_1430": {
        "name": "บะหมี่ผัด สูตร 1430",
        "cal": 45
    },
    "boiled_shrimp_1431": {
        "name": "กุ้งต้ม สูตร 1431",
        "cal": 269
    },
    "grilled_shrimp_1432": {
        "name": "กุ้งย่าง สูตร 1432",
        "cal": 315
    },
    "steamed_squid_1433": {
        "name": "ปลาหมึกนึ่ง สูตร 1433",
        "cal": 37
    },
    "fried_fish_1434": {
        "name": "ปลาทอด สูตร 1434",
        "cal": 117
    },
    "grilled_noodle_1435": {
        "name": "บะหมี่ย่าง สูตร 1435",
        "cal": 528
    },
    "fried_soup_1436": {
        "name": "ซุปทอด สูตร 1436",
        "cal": 31
    },
    "stir_fried_beef_1437": {
        "name": "เนื้อผัด สูตร 1437",
        "cal": 332
    },
    "boiled_rice_1438": {
        "name": "ข้าวต้ม สูตร 1438",
        "cal": 768
    },
    "steamed_rice_1439": {
        "name": "ข้าวนึ่ง สูตร 1439",
        "cal": 480
    },
    "boiled_squid_1440": {
        "name": "ปลาหมึกต้ม สูตร 1440",
        "cal": 829
    },
    "spicy_noodle_1441": {
        "name": "บะหมี่ยำ สูตร 1441",
        "cal": 516
    },
    "stir_fried_beef_1442": {
        "name": "เนื้อผัด สูตร 1442",
        "cal": 822
    },
    "spicy_shrimp_1443": {
        "name": "กุ้งยำ สูตร 1443",
        "cal": 623
    },
    "fried_noodle_1444": {
        "name": "บะหมี่ทอด สูตร 1444",
        "cal": 752
    },
    "grilled_pork_1445": {
        "name": "หมูย่าง สูตร 1445",
        "cal": 389
    },
    "stir_fried_fish_1446": {
        "name": "ปลาผัด สูตร 1446",
        "cal": 69
    },
    "grilled_noodle_1447": {
        "name": "บะหมี่ย่าง สูตร 1447",
        "cal": 609
    },
    "spicy_rice_1448": {
        "name": "ข้าวยำ สูตร 1448",
        "cal": 680
    },
    "fried_noodle_1449": {
        "name": "บะหมี่ทอด สูตร 1449",
        "cal": 669
    },
    "fried_shrimp_1450": {
        "name": "กุ้งทอด สูตร 1450",
        "cal": 770
    },
    "stir_fried_shrimp_1451": {
        "name": "กุ้งผัด สูตร 1451",
        "cal": 769
    },
    "stir_fried_beef_1452": {
        "name": "เนื้อผัด สูตร 1452",
        "cal": 626
    },
    "fried_squid_1453": {
        "name": "ปลาหมึกทอด สูตร 1453",
        "cal": 706
    },
    "stir_fried_beef_1454": {
        "name": "เนื้อผัด สูตร 1454",
        "cal": 664
    },
    "steamed_soup_1455": {
        "name": "ซุปนึ่ง สูตร 1455",
        "cal": 298
    },
    "stir_fried_rice_1456": {
        "name": "ข้าวผัด สูตร 1456",
        "cal": 705
    },
    "fried_beef_1457": {
        "name": "เนื้อทอด สูตร 1457",
        "cal": 650
    },
    "boiled_noodle_1458": {
        "name": "บะหมี่ต้ม สูตร 1458",
        "cal": 575
    },
    "grilled_noodle_1459": {
        "name": "บะหมี่ย่าง สูตร 1459",
        "cal": 716
    },
    "spicy_shrimp_1460": {
        "name": "กุ้งยำ สูตร 1460",
        "cal": 565
    },
    "stir_fried_rice_1461": {
        "name": "ข้าวผัด สูตร 1461",
        "cal": 102
    },
    "spicy_soup_1462": {
        "name": "ซุปยำ สูตร 1462",
        "cal": 463
    },
    "boiled_soup_1463": {
        "name": "ซุปต้ม สูตร 1463",
        "cal": 319
    },
    "fried_pork_1464": {
        "name": "หมูทอด สูตร 1464",
        "cal": 777
    },
    "stir_fried_chicken_1465": {
        "name": "ไก่ผัด สูตร 1465",
        "cal": 75
    },
    "steamed_rice_1466": {
        "name": "ข้าวนึ่ง สูตร 1466",
        "cal": 289
    },
    "stir_fried_squid_1467": {
        "name": "ปลาหมึกผัด สูตร 1467",
        "cal": 837
    },
    "stir_fried_fish_1468": {
        "name": "ปลาผัด สูตร 1468",
        "cal": 96
    },
    "boiled_rice_1469": {
        "name": "ข้าวต้ม สูตร 1469",
        "cal": 583
    },
    "spicy_soup_1470": {
        "name": "ซุปยำ สูตร 1470",
        "cal": 51
    },
    "grilled_pork_1471": {
        "name": "หมูย่าง สูตร 1471",
        "cal": 404
    },
    "fried_fish_1472": {
        "name": "ปลาทอด สูตร 1472",
        "cal": 217
    },
    "grilled_chicken_1473": {
        "name": "ไก่ย่าง สูตร 1473",
        "cal": 69
    },
    "fried_chicken_1474": {
        "name": "ไก่ทอด สูตร 1474",
        "cal": 338
    },
    "fried_pork_1475": {
        "name": "หมูทอด สูตร 1475",
        "cal": 726
    },
    "steamed_soup_1476": {
        "name": "ซุปนึ่ง สูตร 1476",
        "cal": 160
    },
    "fried_rice_1477": {
        "name": "ข้าวทอด สูตร 1477",
        "cal": 799
    },
    "fried_noodle_1478": {
        "name": "บะหมี่ทอด สูตร 1478",
        "cal": 222
    },
    "fried_beef_1479": {
        "name": "เนื้อทอด สูตร 1479",
        "cal": 797
    },
    "stir_fried_rice_1480": {
        "name": "ข้าวผัด สูตร 1480",
        "cal": 315
    },
    "stir_fried_pork_1481": {
        "name": "หมูผัด สูตร 1481",
        "cal": 120
    },
    "fried_fish_1482": {
        "name": "ปลาทอด สูตร 1482",
        "cal": 40
    },
    "boiled_chicken_1483": {
        "name": "ไก่ต้ม สูตร 1483",
        "cal": 22
    },
    "stir_fried_squid_1484": {
        "name": "ปลาหมึกผัด สูตร 1484",
        "cal": 162
    },
    "fried_shrimp_1485": {
        "name": "กุ้งทอด สูตร 1485",
        "cal": 646
    },
    "fried_soup_1486": {
        "name": "ซุปทอด สูตร 1486",
        "cal": 500
    },
    "grilled_soup_1487": {
        "name": "ซุปย่าง สูตร 1487",
        "cal": 273
    },
    "spicy_pork_1488": {
        "name": "หมูยำ สูตร 1488",
        "cal": 398
    },
    "grilled_noodle_1489": {
        "name": "บะหมี่ย่าง สูตร 1489",
        "cal": 587
    },
    "boiled_pork_1490": {
        "name": "หมูต้ม สูตร 1490",
        "cal": 221
    },
    "stir_fried_noodle_1491": {
        "name": "บะหมี่ผัด สูตร 1491",
        "cal": 432
    },
    "fried_chicken_1492": {
        "name": "ไก่ทอด สูตร 1492",
        "cal": 552
    },
    "steamed_soup_1493": {
        "name": "ซุปนึ่ง สูตร 1493",
        "cal": 789
    },
    "stir_fried_pork_1494": {
        "name": "หมูผัด สูตร 1494",
        "cal": 812
    },
    "stir_fried_pork_1495": {
        "name": "หมูผัด สูตร 1495",
        "cal": 776
    },
    "boiled_rice_1496": {
        "name": "ข้าวต้ม สูตร 1496",
        "cal": 115
    },
    "boiled_fish_1497": {
        "name": "ปลาต้ม สูตร 1497",
        "cal": 114
    },
    "boiled_pork_1498": {
        "name": "หมูต้ม สูตร 1498",
        "cal": 787
    },
    "spicy_rice_1499": {
        "name": "ข้าวยำ สูตร 1499",
        "cal": 181
    },
    "boiled_chicken_1500": {
        "name": "ไก่ต้ม สูตร 1500",
        "cal": 791
    },
    "fried_soup_1501": {
        "name": "ซุปทอด สูตร 1501",
        "cal": 631
    },
    "steamed_chicken_1502": {
        "name": "ไก่นึ่ง สูตร 1502",
        "cal": 382
    },
    "steamed_noodle_1503": {
        "name": "บะหมี่นึ่ง สูตร 1503",
        "cal": 683
    },
    "fried_shrimp_1504": {
        "name": "กุ้งทอด สูตร 1504",
        "cal": 622
    },
    "grilled_fish_1505": {
        "name": "ปลาย่าง สูตร 1505",
        "cal": 157
    },
    "grilled_chicken_1506": {
        "name": "ไก่ย่าง สูตร 1506",
        "cal": 554
    },
    "spicy_squid_1507": {
        "name": "ปลาหมึกยำ สูตร 1507",
        "cal": 420
    },
    "stir_fried_soup_1508": {
        "name": "ซุปผัด สูตร 1508",
        "cal": 189
    },
    "boiled_fish_1509": {
        "name": "ปลาต้ม สูตร 1509",
        "cal": 129
    },
    "stir_fried_pork_1510": {
        "name": "หมูผัด สูตร 1510",
        "cal": 595
    },
    "spicy_chicken_1511": {
        "name": "ไก่ยำ สูตร 1511",
        "cal": 728
    },
    "stir_fried_pork_1512": {
        "name": "หมูผัด สูตร 1512",
        "cal": 191
    },
    "boiled_soup_1513": {
        "name": "ซุปต้ม สูตร 1513",
        "cal": 22
    },
    "boiled_noodle_1514": {
        "name": "บะหมี่ต้ม สูตร 1514",
        "cal": 809
    },
    "fried_pork_1515": {
        "name": "หมูทอด สูตร 1515",
        "cal": 766
    },
    "stir_fried_chicken_1516": {
        "name": "ไก่ผัด สูตร 1516",
        "cal": 607
    },
    "boiled_rice_1517": {
        "name": "ข้าวต้ม สูตร 1517",
        "cal": 588
    },
    "grilled_chicken_1518": {
        "name": "ไก่ย่าง สูตร 1518",
        "cal": 278
    },
    "steamed_beef_1519": {
        "name": "เนื้อนึ่ง สูตร 1519",
        "cal": 514
    },
    "fried_squid_1520": {
        "name": "ปลาหมึกทอด สูตร 1520",
        "cal": 790
    },
    "spicy_soup_1521": {
        "name": "ซุปยำ สูตร 1521",
        "cal": 111
    },
    "boiled_pork_1522": {
        "name": "หมูต้ม สูตร 1522",
        "cal": 43
    },
    "spicy_rice_1523": {
        "name": "ข้าวยำ สูตร 1523",
        "cal": 427
    },
    "spicy_squid_1524": {
        "name": "ปลาหมึกยำ สูตร 1524",
        "cal": 47
    },
    "stir_fried_beef_1525": {
        "name": "เนื้อผัด สูตร 1525",
        "cal": 477
    },
    "stir_fried_soup_1526": {
        "name": "ซุปผัด สูตร 1526",
        "cal": 640
    },
    "grilled_chicken_1527": {
        "name": "ไก่ย่าง สูตร 1527",
        "cal": 278
    },
    "stir_fried_beef_1528": {
        "name": "เนื้อผัด สูตร 1528",
        "cal": 437
    },
    "spicy_fish_1529": {
        "name": "ปลายำ สูตร 1529",
        "cal": 416
    },
    "grilled_squid_1530": {
        "name": "ปลาหมึกย่าง สูตร 1530",
        "cal": 447
    },
    "steamed_beef_1531": {
        "name": "เนื้อนึ่ง สูตร 1531",
        "cal": 802
    },
    "spicy_pork_1532": {
        "name": "หมูยำ สูตร 1532",
        "cal": 33
    },
    "boiled_noodle_1533": {
        "name": "บะหมี่ต้ม สูตร 1533",
        "cal": 699
    },
    "fried_pork_1534": {
        "name": "หมูทอด สูตร 1534",
        "cal": 130
    },
    "spicy_fish_1535": {
        "name": "ปลายำ สูตร 1535",
        "cal": 685
    },
    "steamed_squid_1536": {
        "name": "ปลาหมึกนึ่ง สูตร 1536",
        "cal": 740
    },
    "fried_squid_1537": {
        "name": "ปลาหมึกทอด สูตร 1537",
        "cal": 147
    },
    "boiled_rice_1538": {
        "name": "ข้าวต้ม สูตร 1538",
        "cal": 721
    },
    "grilled_soup_1539": {
        "name": "ซุปย่าง สูตร 1539",
        "cal": 306
    },
    "stir_fried_fish_1540": {
        "name": "ปลาผัด สูตร 1540",
        "cal": 632
    },
    "stir_fried_squid_1541": {
        "name": "ปลาหมึกผัด สูตร 1541",
        "cal": 531
    },
    "grilled_squid_1542": {
        "name": "ปลาหมึกย่าง สูตร 1542",
        "cal": 754
    },
    "spicy_soup_1543": {
        "name": "ซุปยำ สูตร 1543",
        "cal": 244
    },
    "fried_fish_1544": {
        "name": "ปลาทอด สูตร 1544",
        "cal": 330
    },
    "steamed_squid_1545": {
        "name": "ปลาหมึกนึ่ง สูตร 1545",
        "cal": 739
    },
    "grilled_squid_1546": {
        "name": "ปลาหมึกย่าง สูตร 1546",
        "cal": 370
    },
    "grilled_beef_1547": {
        "name": "เนื้อย่าง สูตร 1547",
        "cal": 449
    },
    "stir_fried_chicken_1548": {
        "name": "ไก่ผัด สูตร 1548",
        "cal": 447
    },
    "spicy_pork_1549": {
        "name": "หมูยำ สูตร 1549",
        "cal": 297
    },
    "boiled_noodle_1550": {
        "name": "บะหมี่ต้ม สูตร 1550",
        "cal": 197
    },
    "grilled_rice_1551": {
        "name": "ข้าวย่าง สูตร 1551",
        "cal": 307
    },
    "spicy_beef_1552": {
        "name": "เนื้อยำ สูตร 1552",
        "cal": 759
    },
    "steamed_pork_1553": {
        "name": "หมูนึ่ง สูตร 1553",
        "cal": 152
    },
    "grilled_pork_1554": {
        "name": "หมูย่าง สูตร 1554",
        "cal": 673
    },
    "grilled_squid_1555": {
        "name": "ปลาหมึกย่าง สูตร 1555",
        "cal": 772
    },
    "boiled_pork_1556": {
        "name": "หมูต้ม สูตร 1556",
        "cal": 405
    },
    "spicy_noodle_1557": {
        "name": "บะหมี่ยำ สูตร 1557",
        "cal": 478
    },
    "boiled_pork_1558": {
        "name": "หมูต้ม สูตร 1558",
        "cal": 741
    },
    "grilled_chicken_1559": {
        "name": "ไก่ย่าง สูตร 1559",
        "cal": 627
    },
    "fried_noodle_1560": {
        "name": "บะหมี่ทอด สูตร 1560",
        "cal": 20
    },
    "boiled_soup_1561": {
        "name": "ซุปต้ม สูตร 1561",
        "cal": 275
    },
    "stir_fried_soup_1562": {
        "name": "ซุปผัด สูตร 1562",
        "cal": 682
    },
    "stir_fried_soup_1563": {
        "name": "ซุปผัด สูตร 1563",
        "cal": 143
    },
    "steamed_fish_1564": {
        "name": "ปลานึ่ง สูตร 1564",
        "cal": 699
    },
    "stir_fried_fish_1565": {
        "name": "ปลาผัด สูตร 1565",
        "cal": 41
    },
    "grilled_chicken_1566": {
        "name": "ไก่ย่าง สูตร 1566",
        "cal": 503
    },
    "steamed_squid_1567": {
        "name": "ปลาหมึกนึ่ง สูตร 1567",
        "cal": 559
    },
    "fried_chicken_1568": {
        "name": "ไก่ทอด สูตร 1568",
        "cal": 579
    },
    "boiled_chicken_1569": {
        "name": "ไก่ต้ม สูตร 1569",
        "cal": 53
    },
    "fried_beef_1570": {
        "name": "เนื้อทอด สูตร 1570",
        "cal": 544
    },
    "fried_rice_1571": {
        "name": "ข้าวทอด สูตร 1571",
        "cal": 303
    },
    "grilled_beef_1572": {
        "name": "เนื้อย่าง สูตร 1572",
        "cal": 712
    },
    "fried_pork_1573": {
        "name": "หมูทอด สูตร 1573",
        "cal": 265
    },
    "steamed_soup_1574": {
        "name": "ซุปนึ่ง สูตร 1574",
        "cal": 180
    },
    "stir_fried_rice_1575": {
        "name": "ข้าวผัด สูตร 1575",
        "cal": 444
    },
    "steamed_soup_1576": {
        "name": "ซุปนึ่ง สูตร 1576",
        "cal": 206
    },
    "grilled_soup_1577": {
        "name": "ซุปย่าง สูตร 1577",
        "cal": 540
    },
    "steamed_pork_1578": {
        "name": "หมูนึ่ง สูตร 1578",
        "cal": 140
    },
    "fried_soup_1579": {
        "name": "ซุปทอด สูตร 1579",
        "cal": 669
    },
    "steamed_soup_1580": {
        "name": "ซุปนึ่ง สูตร 1580",
        "cal": 847
    },
    "fried_rice_1581": {
        "name": "ข้าวทอด สูตร 1581",
        "cal": 360
    },
    "grilled_fish_1582": {
        "name": "ปลาย่าง สูตร 1582",
        "cal": 548
    },
    "grilled_rice_1583": {
        "name": "ข้าวย่าง สูตร 1583",
        "cal": 69
    },
    "boiled_noodle_1584": {
        "name": "บะหมี่ต้ม สูตร 1584",
        "cal": 342
    },
    "stir_fried_soup_1585": {
        "name": "ซุปผัด สูตร 1585",
        "cal": 341
    },
    "stir_fried_beef_1586": {
        "name": "เนื้อผัด สูตร 1586",
        "cal": 201
    },
    "stir_fried_chicken_1587": {
        "name": "ไก่ผัด สูตร 1587",
        "cal": 412
    },
    "boiled_noodle_1588": {
        "name": "บะหมี่ต้ม สูตร 1588",
        "cal": 648
    },
    "boiled_pork_1589": {
        "name": "หมูต้ม สูตร 1589",
        "cal": 581
    },
    "spicy_shrimp_1590": {
        "name": "กุ้งยำ สูตร 1590",
        "cal": 240
    },
    "spicy_noodle_1591": {
        "name": "บะหมี่ยำ สูตร 1591",
        "cal": 727
    },
    "fried_soup_1592": {
        "name": "ซุปทอด สูตร 1592",
        "cal": 72
    },
    "fried_rice_1593": {
        "name": "ข้าวทอด สูตร 1593",
        "cal": 47
    },
    "spicy_pork_1594": {
        "name": "หมูยำ สูตร 1594",
        "cal": 312
    },
    "stir_fried_beef_1595": {
        "name": "เนื้อผัด สูตร 1595",
        "cal": 240
    },
    "fried_pork_1596": {
        "name": "หมูทอด สูตร 1596",
        "cal": 88
    },
    "steamed_shrimp_1597": {
        "name": "กุ้งนึ่ง สูตร 1597",
        "cal": 767
    },
    "spicy_noodle_1598": {
        "name": "บะหมี่ยำ สูตร 1598",
        "cal": 707
    },
    "boiled_squid_1599": {
        "name": "ปลาหมึกต้ม สูตร 1599",
        "cal": 596
    },
    "steamed_noodle_1600": {
        "name": "บะหมี่นึ่ง สูตร 1600",
        "cal": 113
    },
    "fried_fish_1601": {
        "name": "ปลาทอด สูตร 1601",
        "cal": 71
    },
    "spicy_chicken_1602": {
        "name": "ไก่ยำ สูตร 1602",
        "cal": 724
    },
    "spicy_rice_1603": {
        "name": "ข้าวยำ สูตร 1603",
        "cal": 595
    },
    "boiled_beef_1604": {
        "name": "เนื้อต้ม สูตร 1604",
        "cal": 229
    },
    "boiled_rice_1605": {
        "name": "ข้าวต้ม สูตร 1605",
        "cal": 397
    },
    "boiled_pork_1606": {
        "name": "หมูต้ม สูตร 1606",
        "cal": 596
    },
    "steamed_soup_1607": {
        "name": "ซุปนึ่ง สูตร 1607",
        "cal": 400
    },
    "grilled_beef_1608": {
        "name": "เนื้อย่าง สูตร 1608",
        "cal": 172
    },
    "grilled_squid_1609": {
        "name": "ปลาหมึกย่าง สูตร 1609",
        "cal": 744
    },
    "boiled_squid_1610": {
        "name": "ปลาหมึกต้ม สูตร 1610",
        "cal": 438
    },
    "steamed_pork_1611": {
        "name": "หมูนึ่ง สูตร 1611",
        "cal": 83
    },
    "spicy_noodle_1612": {
        "name": "บะหมี่ยำ สูตร 1612",
        "cal": 43
    },
    "grilled_squid_1613": {
        "name": "ปลาหมึกย่าง สูตร 1613",
        "cal": 719
    },
    "stir_fried_chicken_1614": {
        "name": "ไก่ผัด สูตร 1614",
        "cal": 272
    },
    "steamed_fish_1615": {
        "name": "ปลานึ่ง สูตร 1615",
        "cal": 293
    },
    "stir_fried_noodle_1616": {
        "name": "บะหมี่ผัด สูตร 1616",
        "cal": 114
    },
    "fried_rice_1617": {
        "name": "ข้าวทอด สูตร 1617",
        "cal": 207
    },
    "spicy_chicken_1618": {
        "name": "ไก่ยำ สูตร 1618",
        "cal": 84
    },
    "fried_squid_1619": {
        "name": "ปลาหมึกทอด สูตร 1619",
        "cal": 551
    },
    "boiled_fish_1620": {
        "name": "ปลาต้ม สูตร 1620",
        "cal": 783
    },
    "fried_rice_1621": {
        "name": "ข้าวทอด สูตร 1621",
        "cal": 20
    },
    "boiled_rice_1622": {
        "name": "ข้าวต้ม สูตร 1622",
        "cal": 316
    },
    "steamed_chicken_1623": {
        "name": "ไก่นึ่ง สูตร 1623",
        "cal": 203
    },
    "spicy_beef_1624": {
        "name": "เนื้อยำ สูตร 1624",
        "cal": 654
    },
    "stir_fried_soup_1625": {
        "name": "ซุปผัด สูตร 1625",
        "cal": 230
    },
    "steamed_fish_1626": {
        "name": "ปลานึ่ง สูตร 1626",
        "cal": 537
    },
    "spicy_pork_1627": {
        "name": "หมูยำ สูตร 1627",
        "cal": 475
    },
    "fried_beef_1628": {
        "name": "เนื้อทอด สูตร 1628",
        "cal": 56
    },
    "grilled_noodle_1629": {
        "name": "บะหมี่ย่าง สูตร 1629",
        "cal": 835
    },
    "stir_fried_soup_1630": {
        "name": "ซุปผัด สูตร 1630",
        "cal": 590
    },
    "fried_noodle_1631": {
        "name": "บะหมี่ทอด สูตร 1631",
        "cal": 356
    },
    "steamed_soup_1632": {
        "name": "ซุปนึ่ง สูตร 1632",
        "cal": 597
    },
    "spicy_chicken_1633": {
        "name": "ไก่ยำ สูตร 1633",
        "cal": 289
    },
    "fried_beef_1634": {
        "name": "เนื้อทอด สูตร 1634",
        "cal": 291
    },
    "boiled_beef_1635": {
        "name": "เนื้อต้ม สูตร 1635",
        "cal": 297
    },
    "boiled_soup_1636": {
        "name": "ซุปต้ม สูตร 1636",
        "cal": 531
    },
    "grilled_noodle_1637": {
        "name": "บะหมี่ย่าง สูตร 1637",
        "cal": 427
    },
    "stir_fried_noodle_1638": {
        "name": "บะหมี่ผัด สูตร 1638",
        "cal": 691
    },
    "spicy_beef_1639": {
        "name": "เนื้อยำ สูตร 1639",
        "cal": 114
    },
    "grilled_fish_1640": {
        "name": "ปลาย่าง สูตร 1640",
        "cal": 71
    },
    "steamed_pork_1641": {
        "name": "หมูนึ่ง สูตร 1641",
        "cal": 166
    },
    "steamed_pork_1642": {
        "name": "หมูนึ่ง สูตร 1642",
        "cal": 86
    },
    "steamed_beef_1643": {
        "name": "เนื้อนึ่ง สูตร 1643",
        "cal": 794
    },
    "boiled_rice_1644": {
        "name": "ข้าวต้ม สูตร 1644",
        "cal": 513
    },
    "steamed_fish_1645": {
        "name": "ปลานึ่ง สูตร 1645",
        "cal": 624
    },
    "fried_pork_1646": {
        "name": "หมูทอด สูตร 1646",
        "cal": 582
    },
    "boiled_squid_1647": {
        "name": "ปลาหมึกต้ม สูตร 1647",
        "cal": 826
    },
    "spicy_noodle_1648": {
        "name": "บะหมี่ยำ สูตร 1648",
        "cal": 302
    },
    "steamed_beef_1649": {
        "name": "เนื้อนึ่ง สูตร 1649",
        "cal": 694
    },
    "grilled_fish_1650": {
        "name": "ปลาย่าง สูตร 1650",
        "cal": 692
    },
    "fried_pork_1651": {
        "name": "หมูทอด สูตร 1651",
        "cal": 770
    },
    "grilled_pork_1652": {
        "name": "หมูย่าง สูตร 1652",
        "cal": 200
    },
    "fried_chicken_1653": {
        "name": "ไก่ทอด สูตร 1653",
        "cal": 542
    },
    "steamed_beef_1654": {
        "name": "เนื้อนึ่ง สูตร 1654",
        "cal": 653
    },
    "fried_beef_1655": {
        "name": "เนื้อทอด สูตร 1655",
        "cal": 544
    },
    "steamed_pork_1656": {
        "name": "หมูนึ่ง สูตร 1656",
        "cal": 256
    },
    "stir_fried_noodle_1657": {
        "name": "บะหมี่ผัด สูตร 1657",
        "cal": 306
    },
    "spicy_pork_1658": {
        "name": "หมูยำ สูตร 1658",
        "cal": 750
    },
    "boiled_pork_1659": {
        "name": "หมูต้ม สูตร 1659",
        "cal": 84
    },
    "steamed_beef_1660": {
        "name": "เนื้อนึ่ง สูตร 1660",
        "cal": 462
    },
    "boiled_rice_1661": {
        "name": "ข้าวต้ม สูตร 1661",
        "cal": 168
    },
    "steamed_chicken_1662": {
        "name": "ไก่นึ่ง สูตร 1662",
        "cal": 673
    },
    "spicy_rice_1663": {
        "name": "ข้าวยำ สูตร 1663",
        "cal": 364
    },
    "spicy_fish_1664": {
        "name": "ปลายำ สูตร 1664",
        "cal": 347
    },
    "boiled_rice_1665": {
        "name": "ข้าวต้ม สูตร 1665",
        "cal": 694
    },
    "steamed_squid_1666": {
        "name": "ปลาหมึกนึ่ง สูตร 1666",
        "cal": 782
    },
    "steamed_beef_1667": {
        "name": "เนื้อนึ่ง สูตร 1667",
        "cal": 849
    },
    "steamed_squid_1668": {
        "name": "ปลาหมึกนึ่ง สูตร 1668",
        "cal": 470
    },
    "stir_fried_beef_1669": {
        "name": "เนื้อผัด สูตร 1669",
        "cal": 180
    },
    "boiled_beef_1670": {
        "name": "เนื้อต้ม สูตร 1670",
        "cal": 52
    },
    "spicy_shrimp_1671": {
        "name": "กุ้งยำ สูตร 1671",
        "cal": 732
    },
    "stir_fried_beef_1672": {
        "name": "เนื้อผัด สูตร 1672",
        "cal": 30
    },
    "fried_soup_1673": {
        "name": "ซุปทอด สูตร 1673",
        "cal": 568
    },
    "grilled_chicken_1674": {
        "name": "ไก่ย่าง สูตร 1674",
        "cal": 101
    },
    "grilled_shrimp_1675": {
        "name": "กุ้งย่าง สูตร 1675",
        "cal": 742
    },
    "steamed_pork_1676": {
        "name": "หมูนึ่ง สูตร 1676",
        "cal": 237
    },
    "steamed_beef_1677": {
        "name": "เนื้อนึ่ง สูตร 1677",
        "cal": 105
    },
    "grilled_fish_1678": {
        "name": "ปลาย่าง สูตร 1678",
        "cal": 80
    },
    "grilled_pork_1679": {
        "name": "หมูย่าง สูตร 1679",
        "cal": 560
    },
    "stir_fried_pork_1680": {
        "name": "หมูผัด สูตร 1680",
        "cal": 694
    },
    "grilled_squid_1681": {
        "name": "ปลาหมึกย่าง สูตร 1681",
        "cal": 793
    },
    "stir_fried_chicken_1682": {
        "name": "ไก่ผัด สูตร 1682",
        "cal": 624
    },
    "stir_fried_fish_1683": {
        "name": "ปลาผัด สูตร 1683",
        "cal": 139
    },
    "steamed_noodle_1684": {
        "name": "บะหมี่นึ่ง สูตร 1684",
        "cal": 207
    },
    "spicy_beef_1685": {
        "name": "เนื้อยำ สูตร 1685",
        "cal": 688
    },
    "spicy_beef_1686": {
        "name": "เนื้อยำ สูตร 1686",
        "cal": 555
    },
    "steamed_soup_1687": {
        "name": "ซุปนึ่ง สูตร 1687",
        "cal": 296
    },
    "spicy_shrimp_1688": {
        "name": "กุ้งยำ สูตร 1688",
        "cal": 810
    },
    "spicy_fish_1689": {
        "name": "ปลายำ สูตร 1689",
        "cal": 643
    },
    "grilled_shrimp_1690": {
        "name": "กุ้งย่าง สูตร 1690",
        "cal": 386
    },
    "steamed_soup_1691": {
        "name": "ซุปนึ่ง สูตร 1691",
        "cal": 451
    },
    "fried_soup_1692": {
        "name": "ซุปทอด สูตร 1692",
        "cal": 71
    },
    "fried_noodle_1693": {
        "name": "บะหมี่ทอด สูตร 1693",
        "cal": 427
    },
    "boiled_pork_1694": {
        "name": "หมูต้ม สูตร 1694",
        "cal": 600
    },
    "fried_squid_1695": {
        "name": "ปลาหมึกทอด สูตร 1695",
        "cal": 586
    },
    "boiled_shrimp_1696": {
        "name": "กุ้งต้ม สูตร 1696",
        "cal": 192
    },
    "spicy_pork_1697": {
        "name": "หมูยำ สูตร 1697",
        "cal": 619
    },
    "stir_fried_beef_1698": {
        "name": "เนื้อผัด สูตร 1698",
        "cal": 440
    },
    "grilled_pork_1699": {
        "name": "หมูย่าง สูตร 1699",
        "cal": 95
    },
    "steamed_soup_1700": {
        "name": "ซุปนึ่ง สูตร 1700",
        "cal": 52
    },
    "spicy_beef_1701": {
        "name": "เนื้อยำ สูตร 1701",
        "cal": 232
    },
    "spicy_beef_1702": {
        "name": "เนื้อยำ สูตร 1702",
        "cal": 452
    },
    "boiled_squid_1703": {
        "name": "ปลาหมึกต้ม สูตร 1703",
        "cal": 799
    },
    "grilled_rice_1704": {
        "name": "ข้าวย่าง สูตร 1704",
        "cal": 619
    },
    "fried_noodle_1705": {
        "name": "บะหมี่ทอด สูตร 1705",
        "cal": 38
    },
    "steamed_rice_1706": {
        "name": "ข้าวนึ่ง สูตร 1706",
        "cal": 372
    },
    "boiled_chicken_1707": {
        "name": "ไก่ต้ม สูตร 1707",
        "cal": 802
    },
    "fried_squid_1708": {
        "name": "ปลาหมึกทอด สูตร 1708",
        "cal": 756
    },
    "fried_soup_1709": {
        "name": "ซุปทอด สูตร 1709",
        "cal": 152
    },
    "fried_beef_1710": {
        "name": "เนื้อทอด สูตร 1710",
        "cal": 693
    },
    "stir_fried_fish_1711": {
        "name": "ปลาผัด สูตร 1711",
        "cal": 834
    },
    "steamed_noodle_1712": {
        "name": "บะหมี่นึ่ง สูตร 1712",
        "cal": 223
    },
    "boiled_noodle_1713": {
        "name": "บะหมี่ต้ม สูตร 1713",
        "cal": 236
    },
    "steamed_pork_1714": {
        "name": "หมูนึ่ง สูตร 1714",
        "cal": 418
    },
    "steamed_shrimp_1715": {
        "name": "กุ้งนึ่ง สูตร 1715",
        "cal": 725
    },
    "grilled_beef_1716": {
        "name": "เนื้อย่าง สูตร 1716",
        "cal": 184
    },
    "boiled_rice_1717": {
        "name": "ข้าวต้ม สูตร 1717",
        "cal": 268
    },
    "steamed_rice_1718": {
        "name": "ข้าวนึ่ง สูตร 1718",
        "cal": 85
    },
    "spicy_squid_1719": {
        "name": "ปลาหมึกยำ สูตร 1719",
        "cal": 517
    },
    "grilled_beef_1720": {
        "name": "เนื้อย่าง สูตร 1720",
        "cal": 630
    },
    "fried_squid_1721": {
        "name": "ปลาหมึกทอด สูตร 1721",
        "cal": 470
    },
    "stir_fried_squid_1722": {
        "name": "ปลาหมึกผัด สูตร 1722",
        "cal": 87
    },
    "grilled_noodle_1723": {
        "name": "บะหมี่ย่าง สูตร 1723",
        "cal": 430
    },
    "fried_chicken_1724": {
        "name": "ไก่ทอด สูตร 1724",
        "cal": 636
    },
    "steamed_squid_1725": {
        "name": "ปลาหมึกนึ่ง สูตร 1725",
        "cal": 172
    },
    "grilled_soup_1726": {
        "name": "ซุปย่าง สูตร 1726",
        "cal": 367
    },
    "steamed_shrimp_1727": {
        "name": "กุ้งนึ่ง สูตร 1727",
        "cal": 259
    },
    "fried_rice_1728": {
        "name": "ข้าวทอด สูตร 1728",
        "cal": 848
    },
    "steamed_soup_1729": {
        "name": "ซุปนึ่ง สูตร 1729",
        "cal": 572
    },
    "stir_fried_soup_1730": {
        "name": "ซุปผัด สูตร 1730",
        "cal": 564
    },
    "stir_fried_pork_1731": {
        "name": "หมูผัด สูตร 1731",
        "cal": 790
    },
    "boiled_chicken_1732": {
        "name": "ไก่ต้ม สูตร 1732",
        "cal": 667
    },
    "grilled_shrimp_1733": {
        "name": "กุ้งย่าง สูตร 1733",
        "cal": 289
    },
    "boiled_noodle_1734": {
        "name": "บะหมี่ต้ม สูตร 1734",
        "cal": 153
    },
    "steamed_soup_1735": {
        "name": "ซุปนึ่ง สูตร 1735",
        "cal": 367
    },
    "grilled_squid_1736": {
        "name": "ปลาหมึกย่าง สูตร 1736",
        "cal": 432
    },
    "grilled_chicken_1737": {
        "name": "ไก่ย่าง สูตร 1737",
        "cal": 680
    },
    "stir_fried_fish_1738": {
        "name": "ปลาผัด สูตร 1738",
        "cal": 539
    },
    "boiled_rice_1739": {
        "name": "ข้าวต้ม สูตร 1739",
        "cal": 339
    },
    "fried_fish_1740": {
        "name": "ปลาทอด สูตร 1740",
        "cal": 444
    },
    "boiled_noodle_1741": {
        "name": "บะหมี่ต้ม สูตร 1741",
        "cal": 261
    },
    "boiled_pork_1742": {
        "name": "หมูต้ม สูตร 1742",
        "cal": 35
    },
    "steamed_beef_1743": {
        "name": "เนื้อนึ่ง สูตร 1743",
        "cal": 211
    },
    "boiled_soup_1744": {
        "name": "ซุปต้ม สูตร 1744",
        "cal": 582
    },
    "boiled_noodle_1745": {
        "name": "บะหมี่ต้ม สูตร 1745",
        "cal": 843
    },
    "boiled_beef_1746": {
        "name": "เนื้อต้ม สูตร 1746",
        "cal": 44
    },
    "steamed_chicken_1747": {
        "name": "ไก่นึ่ง สูตร 1747",
        "cal": 27
    },
    "steamed_squid_1748": {
        "name": "ปลาหมึกนึ่ง สูตร 1748",
        "cal": 822
    },
    "steamed_chicken_1749": {
        "name": "ไก่นึ่ง สูตร 1749",
        "cal": 313
    },
    "steamed_soup_1750": {
        "name": "ซุปนึ่ง สูตร 1750",
        "cal": 252
    },
    "fried_rice_1751": {
        "name": "ข้าวทอด สูตร 1751",
        "cal": 114
    },
    "grilled_shrimp_1752": {
        "name": "กุ้งย่าง สูตร 1752",
        "cal": 618
    },
    "boiled_squid_1753": {
        "name": "ปลาหมึกต้ม สูตร 1753",
        "cal": 75
    },
    "spicy_rice_1754": {
        "name": "ข้าวยำ สูตร 1754",
        "cal": 531
    },
    "boiled_pork_1755": {
        "name": "หมูต้ม สูตร 1755",
        "cal": 237
    },
    "steamed_pork_1756": {
        "name": "หมูนึ่ง สูตร 1756",
        "cal": 457
    },
    "grilled_beef_1757": {
        "name": "เนื้อย่าง สูตร 1757",
        "cal": 263
    },
    "stir_fried_fish_1758": {
        "name": "ปลาผัด สูตร 1758",
        "cal": 842
    },
    "boiled_pork_1759": {
        "name": "หมูต้ม สูตร 1759",
        "cal": 365
    },
    "stir_fried_soup_1760": {
        "name": "ซุปผัด สูตร 1760",
        "cal": 519
    },
    "boiled_shrimp_1761": {
        "name": "กุ้งต้ม สูตร 1761",
        "cal": 300
    },
    "grilled_squid_1762": {
        "name": "ปลาหมึกย่าง สูตร 1762",
        "cal": 576
    },
    "spicy_soup_1763": {
        "name": "ซุปยำ สูตร 1763",
        "cal": 101
    },
    "stir_fried_rice_1764": {
        "name": "ข้าวผัด สูตร 1764",
        "cal": 676
    },
    "stir_fried_fish_1765": {
        "name": "ปลาผัด สูตร 1765",
        "cal": 308
    },
    "fried_squid_1766": {
        "name": "ปลาหมึกทอด สูตร 1766",
        "cal": 168
    },
    "steamed_beef_1767": {
        "name": "เนื้อนึ่ง สูตร 1767",
        "cal": 700
    },
    "fried_squid_1768": {
        "name": "ปลาหมึกทอด สูตร 1768",
        "cal": 226
    },
    "grilled_chicken_1769": {
        "name": "ไก่ย่าง สูตร 1769",
        "cal": 36
    },
    "grilled_soup_1770": {
        "name": "ซุปย่าง สูตร 1770",
        "cal": 818
    },
    "spicy_chicken_1771": {
        "name": "ไก่ยำ สูตร 1771",
        "cal": 129
    },
    "stir_fried_chicken_1772": {
        "name": "ไก่ผัด สูตร 1772",
        "cal": 657
    },
    "spicy_fish_1773": {
        "name": "ปลายำ สูตร 1773",
        "cal": 543
    },
    "spicy_squid_1774": {
        "name": "ปลาหมึกยำ สูตร 1774",
        "cal": 479
    },
    "grilled_noodle_1775": {
        "name": "บะหมี่ย่าง สูตร 1775",
        "cal": 773
    },
    "grilled_pork_1776": {
        "name": "หมูย่าง สูตร 1776",
        "cal": 348
    },
    "grilled_noodle_1777": {
        "name": "บะหมี่ย่าง สูตร 1777",
        "cal": 735
    },
    "grilled_pork_1778": {
        "name": "หมูย่าง สูตร 1778",
        "cal": 727
    },
    "boiled_fish_1779": {
        "name": "ปลาต้ม สูตร 1779",
        "cal": 669
    },
    "stir_fried_fish_1780": {
        "name": "ปลาผัด สูตร 1780",
        "cal": 220
    },
    "grilled_soup_1781": {
        "name": "ซุปย่าง สูตร 1781",
        "cal": 554
    },
    "stir_fried_fish_1782": {
        "name": "ปลาผัด สูตร 1782",
        "cal": 427
    },
    "stir_fried_shrimp_1783": {
        "name": "กุ้งผัด สูตร 1783",
        "cal": 457
    },
    "spicy_soup_1784": {
        "name": "ซุปยำ สูตร 1784",
        "cal": 526
    },
    "fried_pork_1785": {
        "name": "หมูทอด สูตร 1785",
        "cal": 720
    },
    "stir_fried_shrimp_1786": {
        "name": "กุ้งผัด สูตร 1786",
        "cal": 29
    },
    "fried_beef_1787": {
        "name": "เนื้อทอด สูตร 1787",
        "cal": 328
    },
    "stir_fried_beef_1788": {
        "name": "เนื้อผัด สูตร 1788",
        "cal": 642
    },
    "steamed_pork_1789": {
        "name": "หมูนึ่ง สูตร 1789",
        "cal": 131
    },
    "steamed_noodle_1790": {
        "name": "บะหมี่นึ่ง สูตร 1790",
        "cal": 786
    },
    "stir_fried_beef_1791": {
        "name": "เนื้อผัด สูตร 1791",
        "cal": 463
    },
    "spicy_beef_1792": {
        "name": "เนื้อยำ สูตร 1792",
        "cal": 713
    },
    "fried_fish_1793": {
        "name": "ปลาทอด สูตร 1793",
        "cal": 32
    },
    "steamed_noodle_1794": {
        "name": "บะหมี่นึ่ง สูตร 1794",
        "cal": 427
    },
    "fried_pork_1795": {
        "name": "หมูทอด สูตร 1795",
        "cal": 702
    },
    "fried_rice_1796": {
        "name": "ข้าวทอด สูตร 1796",
        "cal": 148
    },
    "spicy_pork_1797": {
        "name": "หมูยำ สูตร 1797",
        "cal": 468
    },
    "spicy_chicken_1798": {
        "name": "ไก่ยำ สูตร 1798",
        "cal": 802
    },
    "grilled_shrimp_1799": {
        "name": "กุ้งย่าง สูตร 1799",
        "cal": 79
    },
    "stir_fried_squid_1800": {
        "name": "ปลาหมึกผัด สูตร 1800",
        "cal": 380
    },
    "grilled_fish_1801": {
        "name": "ปลาย่าง สูตร 1801",
        "cal": 479
    },
    "spicy_noodle_1802": {
        "name": "บะหมี่ยำ สูตร 1802",
        "cal": 359
    },
    "grilled_squid_1803": {
        "name": "ปลาหมึกย่าง สูตร 1803",
        "cal": 824
    },
    "stir_fried_chicken_1804": {
        "name": "ไก่ผัด สูตร 1804",
        "cal": 210
    },
    "fried_rice_1805": {
        "name": "ข้าวทอด สูตร 1805",
        "cal": 76
    },
    "steamed_noodle_1806": {
        "name": "บะหมี่นึ่ง สูตร 1806",
        "cal": 79
    },
    "grilled_rice_1807": {
        "name": "ข้าวย่าง สูตร 1807",
        "cal": 765
    },
    "boiled_shrimp_1808": {
        "name": "กุ้งต้ม สูตร 1808",
        "cal": 360
    },
    "spicy_squid_1809": {
        "name": "ปลาหมึกยำ สูตร 1809",
        "cal": 108
    },
    "steamed_soup_1810": {
        "name": "ซุปนึ่ง สูตร 1810",
        "cal": 35
    },
    "stir_fried_chicken_1811": {
        "name": "ไก่ผัด สูตร 1811",
        "cal": 429
    },
    "boiled_squid_1812": {
        "name": "ปลาหมึกต้ม สูตร 1812",
        "cal": 77
    },
    "steamed_noodle_1813": {
        "name": "บะหมี่นึ่ง สูตร 1813",
        "cal": 811
    },
    "steamed_chicken_1814": {
        "name": "ไก่นึ่ง สูตร 1814",
        "cal": 86
    },
    "stir_fried_rice_1815": {
        "name": "ข้าวผัด สูตร 1815",
        "cal": 543
    },
    "grilled_rice_1816": {
        "name": "ข้าวย่าง สูตร 1816",
        "cal": 410
    },
    "spicy_rice_1817": {
        "name": "ข้าวยำ สูตร 1817",
        "cal": 728
    },
    "grilled_soup_1818": {
        "name": "ซุปย่าง สูตร 1818",
        "cal": 430
    },
    "boiled_pork_1819": {
        "name": "หมูต้ม สูตร 1819",
        "cal": 561
    },
    "fried_chicken_1820": {
        "name": "ไก่ทอด สูตร 1820",
        "cal": 258
    },
    "boiled_noodle_1821": {
        "name": "บะหมี่ต้ม สูตร 1821",
        "cal": 279
    },
    "fried_beef_1822": {
        "name": "เนื้อทอด สูตร 1822",
        "cal": 110
    },
    "grilled_soup_1823": {
        "name": "ซุปย่าง สูตร 1823",
        "cal": 651
    },
    "boiled_pork_1824": {
        "name": "หมูต้ม สูตร 1824",
        "cal": 694
    },
    "spicy_beef_1825": {
        "name": "เนื้อยำ สูตร 1825",
        "cal": 51
    },
    "fried_fish_1826": {
        "name": "ปลาทอด สูตร 1826",
        "cal": 42
    },
    "stir_fried_fish_1827": {
        "name": "ปลาผัด สูตร 1827",
        "cal": 127
    },
    "boiled_noodle_1828": {
        "name": "บะหมี่ต้ม สูตร 1828",
        "cal": 123
    },
    "steamed_rice_1829": {
        "name": "ข้าวนึ่ง สูตร 1829",
        "cal": 745
    },
    "spicy_soup_1830": {
        "name": "ซุปยำ สูตร 1830",
        "cal": 820
    },
    "grilled_fish_1831": {
        "name": "ปลาย่าง สูตร 1831",
        "cal": 430
    },
    "boiled_shrimp_1832": {
        "name": "กุ้งต้ม สูตร 1832",
        "cal": 279
    },
    "grilled_shrimp_1833": {
        "name": "กุ้งย่าง สูตร 1833",
        "cal": 203
    },
    "boiled_fish_1834": {
        "name": "ปลาต้ม สูตร 1834",
        "cal": 414
    },
    "stir_fried_pork_1835": {
        "name": "หมูผัด สูตร 1835",
        "cal": 572
    },
    "steamed_shrimp_1836": {
        "name": "กุ้งนึ่ง สูตร 1836",
        "cal": 521
    },
    "stir_fried_chicken_1837": {
        "name": "ไก่ผัด สูตร 1837",
        "cal": 337
    },
    "boiled_beef_1838": {
        "name": "เนื้อต้ม สูตร 1838",
        "cal": 690
    },
    "steamed_chicken_1839": {
        "name": "ไก่นึ่ง สูตร 1839",
        "cal": 391
    },
    "grilled_shrimp_1840": {
        "name": "กุ้งย่าง สูตร 1840",
        "cal": 85
    },
    "steamed_fish_1841": {
        "name": "ปลานึ่ง สูตร 1841",
        "cal": 275
    },
    "stir_fried_noodle_1842": {
        "name": "บะหมี่ผัด สูตร 1842",
        "cal": 398
    },
    "spicy_soup_1843": {
        "name": "ซุปยำ สูตร 1843",
        "cal": 391
    },
    "stir_fried_soup_1844": {
        "name": "ซุปผัด สูตร 1844",
        "cal": 186
    },
    "fried_beef_1845": {
        "name": "เนื้อทอด สูตร 1845",
        "cal": 255
    },
    "stir_fried_chicken_1846": {
        "name": "ไก่ผัด สูตร 1846",
        "cal": 828
    },
    "grilled_noodle_1847": {
        "name": "บะหมี่ย่าง สูตร 1847",
        "cal": 749
    },
    "spicy_beef_1848": {
        "name": "เนื้อยำ สูตร 1848",
        "cal": 559
    },
    "spicy_pork_1849": {
        "name": "หมูยำ สูตร 1849",
        "cal": 779
    },
    "stir_fried_beef_1850": {
        "name": "เนื้อผัด สูตร 1850",
        "cal": 457
    },
    "boiled_beef_1851": {
        "name": "เนื้อต้ม สูตร 1851",
        "cal": 188
    },
    "stir_fried_noodle_1852": {
        "name": "บะหมี่ผัด สูตร 1852",
        "cal": 163
    },
    "steamed_squid_1853": {
        "name": "ปลาหมึกนึ่ง สูตร 1853",
        "cal": 228
    },
    "grilled_fish_1854": {
        "name": "ปลาย่าง สูตร 1854",
        "cal": 698
    },
    "steamed_soup_1855": {
        "name": "ซุปนึ่ง สูตร 1855",
        "cal": 772
    },
    "grilled_fish_1856": {
        "name": "ปลาย่าง สูตร 1856",
        "cal": 74
    },
    "steamed_chicken_1857": {
        "name": "ไก่นึ่ง สูตร 1857",
        "cal": 404
    },
    "boiled_rice_1858": {
        "name": "ข้าวต้ม สูตร 1858",
        "cal": 27
    },
    "spicy_shrimp_1859": {
        "name": "กุ้งยำ สูตร 1859",
        "cal": 699
    },
    "spicy_rice_1860": {
        "name": "ข้าวยำ สูตร 1860",
        "cal": 498
    },
    "boiled_shrimp_1861": {
        "name": "กุ้งต้ม สูตร 1861",
        "cal": 395
    },
    "fried_noodle_1862": {
        "name": "บะหมี่ทอด สูตร 1862",
        "cal": 523
    },
    "stir_fried_noodle_1863": {
        "name": "บะหมี่ผัด สูตร 1863",
        "cal": 63
    },
    "boiled_pork_1864": {
        "name": "หมูต้ม สูตร 1864",
        "cal": 801
    },
    "fried_fish_1865": {
        "name": "ปลาทอด สูตร 1865",
        "cal": 544
    },
    "spicy_shrimp_1866": {
        "name": "กุ้งยำ สูตร 1866",
        "cal": 796
    },
    "spicy_fish_1867": {
        "name": "ปลายำ สูตร 1867",
        "cal": 307
    },
    "stir_fried_squid_1868": {
        "name": "ปลาหมึกผัด สูตร 1868",
        "cal": 633
    },
    "spicy_shrimp_1869": {
        "name": "กุ้งยำ สูตร 1869",
        "cal": 812
    },
    "boiled_soup_1870": {
        "name": "ซุปต้ม สูตร 1870",
        "cal": 461
    },
    "stir_fried_squid_1871": {
        "name": "ปลาหมึกผัด สูตร 1871",
        "cal": 740
    },
    "steamed_fish_1872": {
        "name": "ปลานึ่ง สูตร 1872",
        "cal": 450
    },
    "boiled_beef_1873": {
        "name": "เนื้อต้ม สูตร 1873",
        "cal": 844
    },
    "spicy_chicken_1874": {
        "name": "ไก่ยำ สูตร 1874",
        "cal": 282
    },
    "spicy_chicken_1875": {
        "name": "ไก่ยำ สูตร 1875",
        "cal": 750
    },
    "steamed_rice_1876": {
        "name": "ข้าวนึ่ง สูตร 1876",
        "cal": 383
    },
    "spicy_squid_1877": {
        "name": "ปลาหมึกยำ สูตร 1877",
        "cal": 713
    },
    "spicy_squid_1878": {
        "name": "ปลาหมึกยำ สูตร 1878",
        "cal": 703
    },
    "boiled_shrimp_1879": {
        "name": "กุ้งต้ม สูตร 1879",
        "cal": 789
    },
    "boiled_soup_1880": {
        "name": "ซุปต้ม สูตร 1880",
        "cal": 637
    },
    "steamed_squid_1881": {
        "name": "ปลาหมึกนึ่ง สูตร 1881",
        "cal": 790
    },
    "steamed_rice_1882": {
        "name": "ข้าวนึ่ง สูตร 1882",
        "cal": 698
    },
    "fried_fish_1883": {
        "name": "ปลาทอด สูตร 1883",
        "cal": 792
    },
    "boiled_noodle_1884": {
        "name": "บะหมี่ต้ม สูตร 1884",
        "cal": 176
    },
    "fried_beef_1885": {
        "name": "เนื้อทอด สูตร 1885",
        "cal": 664
    },
    "boiled_rice_1886": {
        "name": "ข้าวต้ม สูตร 1886",
        "cal": 543
    },
    "steamed_shrimp_1887": {
        "name": "กุ้งนึ่ง สูตร 1887",
        "cal": 412
    },
    "spicy_shrimp_1888": {
        "name": "กุ้งยำ สูตร 1888",
        "cal": 219
    },
    "fried_rice_1889": {
        "name": "ข้าวทอด สูตร 1889",
        "cal": 442
    },
    "steamed_squid_1890": {
        "name": "ปลาหมึกนึ่ง สูตร 1890",
        "cal": 548
    },
    "grilled_rice_1891": {
        "name": "ข้าวย่าง สูตร 1891",
        "cal": 297
    },
    "fried_chicken_1892": {
        "name": "ไก่ทอด สูตร 1892",
        "cal": 397
    },
    "spicy_pork_1893": {
        "name": "หมูยำ สูตร 1893",
        "cal": 432
    },
    "boiled_beef_1894": {
        "name": "เนื้อต้ม สูตร 1894",
        "cal": 465
    },
    "steamed_squid_1895": {
        "name": "ปลาหมึกนึ่ง สูตร 1895",
        "cal": 23
    },
    "fried_soup_1896": {
        "name": "ซุปทอด สูตร 1896",
        "cal": 783
    },
    "steamed_beef_1897": {
        "name": "เนื้อนึ่ง สูตร 1897",
        "cal": 605
    },
    "stir_fried_pork_1898": {
        "name": "หมูผัด สูตร 1898",
        "cal": 575
    },
    "grilled_rice_1899": {
        "name": "ข้าวย่าง สูตร 1899",
        "cal": 627
    },
    "stir_fried_chicken_1900": {
        "name": "ไก่ผัด สูตร 1900",
        "cal": 342
    },
    "boiled_chicken_1901": {
        "name": "ไก่ต้ม สูตร 1901",
        "cal": 227
    },
    "fried_shrimp_1902": {
        "name": "กุ้งทอด สูตร 1902",
        "cal": 717
    },
    "spicy_pork_1903": {
        "name": "หมูยำ สูตร 1903",
        "cal": 397
    },
    "steamed_beef_1904": {
        "name": "เนื้อนึ่ง สูตร 1904",
        "cal": 677
    },
    "boiled_soup_1905": {
        "name": "ซุปต้ม สูตร 1905",
        "cal": 149
    },
    "spicy_soup_1906": {
        "name": "ซุปยำ สูตร 1906",
        "cal": 849
    },
    "grilled_beef_1907": {
        "name": "เนื้อย่าง สูตร 1907",
        "cal": 786
    },
    "boiled_squid_1908": {
        "name": "ปลาหมึกต้ม สูตร 1908",
        "cal": 393
    },
    "fried_pork_1909": {
        "name": "หมูทอด สูตร 1909",
        "cal": 337
    },
    "stir_fried_noodle_1910": {
        "name": "บะหมี่ผัด สูตร 1910",
        "cal": 188
    },
    "stir_fried_noodle_1911": {
        "name": "บะหมี่ผัด สูตร 1911",
        "cal": 591
    },
    "fried_chicken_1912": {
        "name": "ไก่ทอด สูตร 1912",
        "cal": 780
    },
    "grilled_chicken_1913": {
        "name": "ไก่ย่าง สูตร 1913",
        "cal": 412
    },
    "grilled_noodle_1914": {
        "name": "บะหมี่ย่าง สูตร 1914",
        "cal": 332
    },
    "grilled_chicken_1915": {
        "name": "ไก่ย่าง สูตร 1915",
        "cal": 588
    },
    "fried_squid_1916": {
        "name": "ปลาหมึกทอด สูตร 1916",
        "cal": 272
    },
    "fried_shrimp_1917": {
        "name": "กุ้งทอด สูตร 1917",
        "cal": 182
    },
    "spicy_noodle_1918": {
        "name": "บะหมี่ยำ สูตร 1918",
        "cal": 173
    },
    "fried_soup_1919": {
        "name": "ซุปทอด สูตร 1919",
        "cal": 795
    },
    "fried_chicken_1920": {
        "name": "ไก่ทอด สูตร 1920",
        "cal": 766
    },
    "boiled_squid_1921": {
        "name": "ปลาหมึกต้ม สูตร 1921",
        "cal": 266
    },
    "boiled_chicken_1922": {
        "name": "ไก่ต้ม สูตร 1922",
        "cal": 628
    },
    "stir_fried_rice_1923": {
        "name": "ข้าวผัด สูตร 1923",
        "cal": 45
    },
    "boiled_fish_1924": {
        "name": "ปลาต้ม สูตร 1924",
        "cal": 719
    },
    "stir_fried_shrimp_1925": {
        "name": "กุ้งผัด สูตร 1925",
        "cal": 560
    },
    "boiled_noodle_1926": {
        "name": "บะหมี่ต้ม สูตร 1926",
        "cal": 55
    },
    "stir_fried_beef_1927": {
        "name": "เนื้อผัด สูตร 1927",
        "cal": 730
    },
    "spicy_noodle_1928": {
        "name": "บะหมี่ยำ สูตร 1928",
        "cal": 691
    },
    "boiled_shrimp_1929": {
        "name": "กุ้งต้ม สูตร 1929",
        "cal": 836
    },
    "stir_fried_chicken_1930": {
        "name": "ไก่ผัด สูตร 1930",
        "cal": 310
    },
    "boiled_fish_1931": {
        "name": "ปลาต้ม สูตร 1931",
        "cal": 701
    },
    "spicy_noodle_1932": {
        "name": "บะหมี่ยำ สูตร 1932",
        "cal": 39
    },
    "spicy_chicken_1933": {
        "name": "ไก่ยำ สูตร 1933",
        "cal": 128
    },
    "stir_fried_beef_1934": {
        "name": "เนื้อผัด สูตร 1934",
        "cal": 584
    },
    "spicy_soup_1935": {
        "name": "ซุปยำ สูตร 1935",
        "cal": 334
    },
    "spicy_fish_1936": {
        "name": "ปลายำ สูตร 1936",
        "cal": 391
    },
    "spicy_rice_1937": {
        "name": "ข้าวยำ สูตร 1937",
        "cal": 469
    },
    "boiled_noodle_1938": {
        "name": "บะหมี่ต้ม สูตร 1938",
        "cal": 776
    },
    "spicy_chicken_1939": {
        "name": "ไก่ยำ สูตร 1939",
        "cal": 608
    },
    "stir_fried_squid_1940": {
        "name": "ปลาหมึกผัด สูตร 1940",
        "cal": 99
    },
    "fried_fish_1941": {
        "name": "ปลาทอด สูตร 1941",
        "cal": 350
    },
    "fried_noodle_1942": {
        "name": "บะหมี่ทอด สูตร 1942",
        "cal": 727
    },
    "stir_fried_soup_1943": {
        "name": "ซุปผัด สูตร 1943",
        "cal": 293
    },
    "boiled_rice_1944": {
        "name": "ข้าวต้ม สูตร 1944",
        "cal": 537
    },
    "steamed_rice_1945": {
        "name": "ข้าวนึ่ง สูตร 1945",
        "cal": 91
    },
    "stir_fried_pork_1946": {
        "name": "หมูผัด สูตร 1946",
        "cal": 577
    },
    "grilled_rice_1947": {
        "name": "ข้าวย่าง สูตร 1947",
        "cal": 87
    },
    "spicy_shrimp_1948": {
        "name": "กุ้งยำ สูตร 1948",
        "cal": 794
    },
    "grilled_squid_1949": {
        "name": "ปลาหมึกย่าง สูตร 1949",
        "cal": 114
    },
    "steamed_pork_1950": {
        "name": "หมูนึ่ง สูตร 1950",
        "cal": 348
    },
    "stir_fried_shrimp_1951": {
        "name": "กุ้งผัด สูตร 1951",
        "cal": 838
    },
    "steamed_squid_1952": {
        "name": "ปลาหมึกนึ่ง สูตร 1952",
        "cal": 546
    },
    "spicy_noodle_1953": {
        "name": "บะหมี่ยำ สูตร 1953",
        "cal": 623
    },
    "spicy_soup_1954": {
        "name": "ซุปยำ สูตร 1954",
        "cal": 246
    },
    "boiled_rice_1955": {
        "name": "ข้าวต้ม สูตร 1955",
        "cal": 157
    },
    "stir_fried_noodle_1956": {
        "name": "บะหมี่ผัด สูตร 1956",
        "cal": 455
    },
    "boiled_rice_1957": {
        "name": "ข้าวต้ม สูตร 1957",
        "cal": 363
    },
    "spicy_shrimp_1958": {
        "name": "กุ้งยำ สูตร 1958",
        "cal": 332
    },
    "boiled_soup_1959": {
        "name": "ซุปต้ม สูตร 1959",
        "cal": 333
    },
    "stir_fried_chicken_1960": {
        "name": "ไก่ผัด สูตร 1960",
        "cal": 233
    },
    "spicy_shrimp_1961": {
        "name": "กุ้งยำ สูตร 1961",
        "cal": 95
    },
    "steamed_rice_1962": {
        "name": "ข้าวนึ่ง สูตร 1962",
        "cal": 223
    },
    "spicy_shrimp_1963": {
        "name": "กุ้งยำ สูตร 1963",
        "cal": 670
    },
    "spicy_squid_1964": {
        "name": "ปลาหมึกยำ สูตร 1964",
        "cal": 558
    },
    "fried_rice_1965": {
        "name": "ข้าวทอด สูตร 1965",
        "cal": 421
    },
    "steamed_fish_1966": {
        "name": "ปลานึ่ง สูตร 1966",
        "cal": 55
    },
    "boiled_noodle_1967": {
        "name": "บะหมี่ต้ม สูตร 1967",
        "cal": 91
    },
    "fried_noodle_1968": {
        "name": "บะหมี่ทอด สูตร 1968",
        "cal": 283
    },
    "stir_fried_chicken_1969": {
        "name": "ไก่ผัด สูตร 1969",
        "cal": 84
    },
    "fried_beef_1970": {
        "name": "เนื้อทอด สูตร 1970",
        "cal": 83
    },
    "steamed_noodle_1971": {
        "name": "บะหมี่นึ่ง สูตร 1971",
        "cal": 145
    },
    "boiled_soup_1972": {
        "name": "ซุปต้ม สูตร 1972",
        "cal": 108
    },
    "steamed_chicken_1973": {
        "name": "ไก่นึ่ง สูตร 1973",
        "cal": 308
    },
    "fried_chicken_1974": {
        "name": "ไก่ทอด สูตร 1974",
        "cal": 156
    },
    "stir_fried_chicken_1975": {
        "name": "ไก่ผัด สูตร 1975",
        "cal": 402
    },
    "steamed_beef_1976": {
        "name": "เนื้อนึ่ง สูตร 1976",
        "cal": 451
    },
    "fried_shrimp_1977": {
        "name": "กุ้งทอด สูตร 1977",
        "cal": 326
    },
    "boiled_chicken_1978": {
        "name": "ไก่ต้ม สูตร 1978",
        "cal": 59
    },
    "fried_soup_1979": {
        "name": "ซุปทอด สูตร 1979",
        "cal": 38
    },
    "spicy_squid_1980": {
        "name": "ปลาหมึกยำ สูตร 1980",
        "cal": 422
    },
    "grilled_noodle_1981": {
        "name": "บะหมี่ย่าง สูตร 1981",
        "cal": 84
    },
    "spicy_soup_1982": {
        "name": "ซุปยำ สูตร 1982",
        "cal": 36
    },
    "steamed_soup_1983": {
        "name": "ซุปนึ่ง สูตร 1983",
        "cal": 204
    },
    "spicy_pork_1984": {
        "name": "หมูยำ สูตร 1984",
        "cal": 581
    },
    "boiled_rice_1985": {
        "name": "ข้าวต้ม สูตร 1985",
        "cal": 410
    },
    "boiled_soup_1986": {
        "name": "ซุปต้ม สูตร 1986",
        "cal": 760
    },
    "spicy_shrimp_1987": {
        "name": "กุ้งยำ สูตร 1987",
        "cal": 715
    },
    "grilled_chicken_1988": {
        "name": "ไก่ย่าง สูตร 1988",
        "cal": 192
    },
    "boiled_fish_1989": {
        "name": "ปลาต้ม สูตร 1989",
        "cal": 132
    },
    "fried_fish_1990": {
        "name": "ปลาทอด สูตร 1990",
        "cal": 617
    },
    "fried_fish_1991": {
        "name": "ปลาทอด สูตร 1991",
        "cal": 395
    },
    "grilled_fish_1992": {
        "name": "ปลาย่าง สูตร 1992",
        "cal": 558
    },
    "boiled_squid_1993": {
        "name": "ปลาหมึกต้ม สูตร 1993",
        "cal": 330
    },
    "stir_fried_soup_1994": {
        "name": "ซุปผัด สูตร 1994",
        "cal": 217
    },
    "fried_soup_1995": {
        "name": "ซุปทอด สูตร 1995",
        "cal": 495
    },
    "steamed_soup_1996": {
        "name": "ซุปนึ่ง สูตร 1996",
        "cal": 488
    },
    "grilled_noodle_1997": {
        "name": "บะหมี่ย่าง สูตร 1997",
        "cal": 622
    },
    "spicy_beef_1998": {
        "name": "เนื้อยำ สูตร 1998",
        "cal": 266
    },
    "fried_pork_1999": {
        "name": "หมูทอด สูตร 1999",
        "cal": 336
    },
    "spicy_noodle_2000": {
        "name": "บะหมี่ยำ สูตร 2000",
        "cal": 471
    },
    "boiled_beef_2001": {
        "name": "เนื้อต้ม สูตร 2001",
        "cal": 329
    },
    "spicy_beef_2002": {
        "name": "เนื้อยำ สูตร 2002",
        "cal": 838
    },
    "fried_pork_2003": {
        "name": "หมูทอด สูตร 2003",
        "cal": 798
    },
    "fried_pork_2004": {
        "name": "หมูทอด สูตร 2004",
        "cal": 588
    },
    "grilled_pork_2005": {
        "name": "หมูย่าง สูตร 2005",
        "cal": 681
    },
    "boiled_chicken_2006": {
        "name": "ไก่ต้ม สูตร 2006",
        "cal": 179
    },
    "stir_fried_noodle_2007": {
        "name": "บะหมี่ผัด สูตร 2007",
        "cal": 639
    },
    "boiled_squid_2008": {
        "name": "ปลาหมึกต้ม สูตร 2008",
        "cal": 510
    },
    "boiled_soup_2009": {
        "name": "ซุปต้ม สูตร 2009",
        "cal": 244
    },
    "fried_fish_2010": {
        "name": "ปลาทอด สูตร 2010",
        "cal": 688
    },
    "stir_fried_shrimp_2011": {
        "name": "กุ้งผัด สูตร 2011",
        "cal": 614
    },
    "fried_pork_2012": {
        "name": "หมูทอด สูตร 2012",
        "cal": 308
    },
    "grilled_beef_2013": {
        "name": "เนื้อย่าง สูตร 2013",
        "cal": 495
    },
    "boiled_soup_2014": {
        "name": "ซุปต้ม สูตร 2014",
        "cal": 493
    },
    "spicy_pork_2015": {
        "name": "หมูยำ สูตร 2015",
        "cal": 251
    },
    "stir_fried_beef_2016": {
        "name": "เนื้อผัด สูตร 2016",
        "cal": 111
    },
    "boiled_beef_2017": {
        "name": "เนื้อต้ม สูตร 2017",
        "cal": 708
    },
    "grilled_rice_2018": {
        "name": "ข้าวย่าง สูตร 2018",
        "cal": 709
    },
    "boiled_noodle_2019": {
        "name": "บะหมี่ต้ม สูตร 2019",
        "cal": 281
    },
    "fried_beef_2020": {
        "name": "เนื้อทอด สูตร 2020",
        "cal": 565
    },
    "boiled_beef_2021": {
        "name": "เนื้อต้ม สูตร 2021",
        "cal": 280
    },
    "stir_fried_shrimp_2022": {
        "name": "กุ้งผัด สูตร 2022",
        "cal": 221
    },
    "grilled_pork_2023": {
        "name": "หมูย่าง สูตร 2023",
        "cal": 238
    },
    "fried_fish_2024": {
        "name": "ปลาทอด สูตร 2024",
        "cal": 33
    },
    "steamed_soup_2025": {
        "name": "ซุปนึ่ง สูตร 2025",
        "cal": 748
    },
    "grilled_squid_2026": {
        "name": "ปลาหมึกย่าง สูตร 2026",
        "cal": 631
    },
    "fried_pork_2027": {
        "name": "หมูทอด สูตร 2027",
        "cal": 288
    },
    "grilled_soup_2028": {
        "name": "ซุปย่าง สูตร 2028",
        "cal": 63
    },
    "steamed_shrimp_2029": {
        "name": "กุ้งนึ่ง สูตร 2029",
        "cal": 32
    },
    "stir_fried_pork_2030": {
        "name": "หมูผัด สูตร 2030",
        "cal": 473
    },
    "fried_noodle_2031": {
        "name": "บะหมี่ทอด สูตร 2031",
        "cal": 223
    },
    "stir_fried_noodle_2032": {
        "name": "บะหมี่ผัด สูตร 2032",
        "cal": 158
    },
    "fried_soup_2033": {
        "name": "ซุปทอด สูตร 2033",
        "cal": 128
    },
    "stir_fried_shrimp_2034": {
        "name": "กุ้งผัด สูตร 2034",
        "cal": 725
    },
    "spicy_squid_2035": {
        "name": "ปลาหมึกยำ สูตร 2035",
        "cal": 815
    },
    "boiled_pork_2036": {
        "name": "หมูต้ม สูตร 2036",
        "cal": 54
    },
    "steamed_fish_2037": {
        "name": "ปลานึ่ง สูตร 2037",
        "cal": 813
    },
    "stir_fried_shrimp_2038": {
        "name": "กุ้งผัด สูตร 2038",
        "cal": 587
    },
    "fried_pork_2039": {
        "name": "หมูทอด สูตร 2039",
        "cal": 109
    },
    "stir_fried_chicken_2040": {
        "name": "ไก่ผัด สูตร 2040",
        "cal": 502
    },
    "steamed_squid_2041": {
        "name": "ปลาหมึกนึ่ง สูตร 2041",
        "cal": 459
    },
    "spicy_soup_2042": {
        "name": "ซุปยำ สูตร 2042",
        "cal": 445
    },
    "stir_fried_beef_2043": {
        "name": "เนื้อผัด สูตร 2043",
        "cal": 606
    },
    "steamed_shrimp_2044": {
        "name": "กุ้งนึ่ง สูตร 2044",
        "cal": 329
    },
    "fried_rice_2045": {
        "name": "ข้าวทอด สูตร 2045",
        "cal": 558
    },
    "spicy_beef_2046": {
        "name": "เนื้อยำ สูตร 2046",
        "cal": 615
    },
    "grilled_fish_2047": {
        "name": "ปลาย่าง สูตร 2047",
        "cal": 405
    },
    "steamed_fish_2048": {
        "name": "ปลานึ่ง สูตร 2048",
        "cal": 350
    },
    "grilled_shrimp_2049": {
        "name": "กุ้งย่าง สูตร 2049",
        "cal": 282
    },
    "stir_fried_shrimp_2050": {
        "name": "กุ้งผัด สูตร 2050",
        "cal": 489
    },
    "boiled_soup_2051": {
        "name": "ซุปต้ม สูตร 2051",
        "cal": 657
    },
    "stir_fried_soup_2052": {
        "name": "ซุปผัด สูตร 2052",
        "cal": 106
    },
    "fried_chicken_2053": {
        "name": "ไก่ทอด สูตร 2053",
        "cal": 190
    },
    "fried_fish_2054": {
        "name": "ปลาทอด สูตร 2054",
        "cal": 574
    },
    "boiled_pork_2055": {
        "name": "หมูต้ม สูตร 2055",
        "cal": 324
    },
    "steamed_chicken_2056": {
        "name": "ไก่นึ่ง สูตร 2056",
        "cal": 116
    },
    "spicy_rice_2057": {
        "name": "ข้าวยำ สูตร 2057",
        "cal": 385
    },
    "steamed_rice_2058": {
        "name": "ข้าวนึ่ง สูตร 2058",
        "cal": 610
    },
    "spicy_shrimp_2059": {
        "name": "กุ้งยำ สูตร 2059",
        "cal": 315
    },
    "boiled_shrimp_2060": {
        "name": "กุ้งต้ม สูตร 2060",
        "cal": 714
    },
    "grilled_squid_2061": {
        "name": "ปลาหมึกย่าง สูตร 2061",
        "cal": 601
    },
    "spicy_noodle_2062": {
        "name": "บะหมี่ยำ สูตร 2062",
        "cal": 723
    },
    "stir_fried_shrimp_2063": {
        "name": "กุ้งผัด สูตร 2063",
        "cal": 361
    },
    "steamed_shrimp_2064": {
        "name": "กุ้งนึ่ง สูตร 2064",
        "cal": 453
    },
    "boiled_fish_2065": {
        "name": "ปลาต้ม สูตร 2065",
        "cal": 284
    },
    "grilled_chicken_2066": {
        "name": "ไก่ย่าง สูตร 2066",
        "cal": 146
    },
    "fried_shrimp_2067": {
        "name": "กุ้งทอด สูตร 2067",
        "cal": 722
    },
    "boiled_rice_2068": {
        "name": "ข้าวต้ม สูตร 2068",
        "cal": 607
    },
    "spicy_beef_2069": {
        "name": "เนื้อยำ สูตร 2069",
        "cal": 801
    },
    "steamed_shrimp_2070": {
        "name": "กุ้งนึ่ง สูตร 2070",
        "cal": 138
    },
    "spicy_soup_2071": {
        "name": "ซุปยำ สูตร 2071",
        "cal": 827
    },
    "boiled_soup_2072": {
        "name": "ซุปต้ม สูตร 2072",
        "cal": 726
    },
    "grilled_squid_2073": {
        "name": "ปลาหมึกย่าง สูตร 2073",
        "cal": 89
    },
    "spicy_chicken_2074": {
        "name": "ไก่ยำ สูตร 2074",
        "cal": 543
    },
    "steamed_shrimp_2075": {
        "name": "กุ้งนึ่ง สูตร 2075",
        "cal": 277
    },
    "spicy_noodle_2076": {
        "name": "บะหมี่ยำ สูตร 2076",
        "cal": 310
    },
    "grilled_rice_2077": {
        "name": "ข้าวย่าง สูตร 2077",
        "cal": 274
    },
    "fried_squid_2078": {
        "name": "ปลาหมึกทอด สูตร 2078",
        "cal": 386
    },
    "stir_fried_rice_2079": {
        "name": "ข้าวผัด สูตร 2079",
        "cal": 371
    },
    "steamed_chicken_2080": {
        "name": "ไก่นึ่ง สูตร 2080",
        "cal": 417
    },
    "fried_rice_2081": {
        "name": "ข้าวทอด สูตร 2081",
        "cal": 477
    },
    "spicy_soup_2082": {
        "name": "ซุปยำ สูตร 2082",
        "cal": 244
    },
    "fried_rice_2083": {
        "name": "ข้าวทอด สูตร 2083",
        "cal": 183
    },
    "grilled_squid_2084": {
        "name": "ปลาหมึกย่าง สูตร 2084",
        "cal": 660
    },
    "stir_fried_shrimp_2085": {
        "name": "กุ้งผัด สูตร 2085",
        "cal": 721
    },
    "stir_fried_pork_2086": {
        "name": "หมูผัด สูตร 2086",
        "cal": 396
    },
    "steamed_beef_2087": {
        "name": "เนื้อนึ่ง สูตร 2087",
        "cal": 447
    },
    "stir_fried_noodle_2088": {
        "name": "บะหมี่ผัด สูตร 2088",
        "cal": 842
    },
    "grilled_rice_2089": {
        "name": "ข้าวย่าง สูตร 2089",
        "cal": 747
    },
    "fried_rice_2090": {
        "name": "ข้าวทอด สูตร 2090",
        "cal": 110
    },
    "spicy_soup_2091": {
        "name": "ซุปยำ สูตร 2091",
        "cal": 485
    },
    "boiled_squid_2092": {
        "name": "ปลาหมึกต้ม สูตร 2092",
        "cal": 766
    },
    "boiled_fish_2093": {
        "name": "ปลาต้ม สูตร 2093",
        "cal": 806
    },
    "grilled_pork_2094": {
        "name": "หมูย่าง สูตร 2094",
        "cal": 239
    },
    "grilled_squid_2095": {
        "name": "ปลาหมึกย่าง สูตร 2095",
        "cal": 190
    },
    "grilled_pork_2096": {
        "name": "หมูย่าง สูตร 2096",
        "cal": 359
    },
    "boiled_pork_2097": {
        "name": "หมูต้ม สูตร 2097",
        "cal": 788
    },
    "boiled_pork_2098": {
        "name": "หมูต้ม สูตร 2098",
        "cal": 263
    },
    "spicy_shrimp_2099": {
        "name": "กุ้งยำ สูตร 2099",
        "cal": 80
    },
    "grilled_noodle_2100": {
        "name": "บะหมี่ย่าง สูตร 2100",
        "cal": 729
    },
    "steamed_noodle_2101": {
        "name": "บะหมี่นึ่ง สูตร 2101",
        "cal": 160
    },
    "boiled_noodle_2102": {
        "name": "บะหมี่ต้ม สูตร 2102",
        "cal": 146
    },
    "spicy_chicken_2103": {
        "name": "ไก่ยำ สูตร 2103",
        "cal": 700
    },
    "spicy_fish_2104": {
        "name": "ปลายำ สูตร 2104",
        "cal": 202
    },
    "grilled_noodle_2105": {
        "name": "บะหมี่ย่าง สูตร 2105",
        "cal": 481
    },
    "grilled_noodle_2106": {
        "name": "บะหมี่ย่าง สูตร 2106",
        "cal": 634
    },
    "stir_fried_shrimp_2107": {
        "name": "กุ้งผัด สูตร 2107",
        "cal": 540
    },
    "spicy_rice_2108": {
        "name": "ข้าวยำ สูตร 2108",
        "cal": 701
    },
    "spicy_noodle_2109": {
        "name": "บะหมี่ยำ สูตร 2109",
        "cal": 215
    },
    "boiled_soup_2110": {
        "name": "ซุปต้ม สูตร 2110",
        "cal": 669
    },
    "steamed_beef_2111": {
        "name": "เนื้อนึ่ง สูตร 2111",
        "cal": 760
    },
    "boiled_squid_2112": {
        "name": "ปลาหมึกต้ม สูตร 2112",
        "cal": 743
    },
    "steamed_fish_2113": {
        "name": "ปลานึ่ง สูตร 2113",
        "cal": 108
    },
    "stir_fried_squid_2114": {
        "name": "ปลาหมึกผัด สูตร 2114",
        "cal": 712
    },
    "fried_chicken_2115": {
        "name": "ไก่ทอด สูตร 2115",
        "cal": 434
    },
    "fried_beef_2116": {
        "name": "เนื้อทอด สูตร 2116",
        "cal": 703
    },
    "fried_beef_2117": {
        "name": "เนื้อทอด สูตร 2117",
        "cal": 489
    },
    "steamed_rice_2118": {
        "name": "ข้าวนึ่ง สูตร 2118",
        "cal": 321
    },
    "steamed_beef_2119": {
        "name": "เนื้อนึ่ง สูตร 2119",
        "cal": 741
    },
    "spicy_shrimp_2120": {
        "name": "กุ้งยำ สูตร 2120",
        "cal": 600
    },
    "fried_noodle_2121": {
        "name": "บะหมี่ทอด สูตร 2121",
        "cal": 135
    },
    "fried_fish_2122": {
        "name": "ปลาทอด สูตร 2122",
        "cal": 252
    },
    "fried_fish_2123": {
        "name": "ปลาทอด สูตร 2123",
        "cal": 440
    },
    "boiled_squid_2124": {
        "name": "ปลาหมึกต้ม สูตร 2124",
        "cal": 274
    },
    "fried_shrimp_2125": {
        "name": "กุ้งทอด สูตร 2125",
        "cal": 85
    },
    "fried_beef_2126": {
        "name": "เนื้อทอด สูตร 2126",
        "cal": 31
    },
    "spicy_chicken_2127": {
        "name": "ไก่ยำ สูตร 2127",
        "cal": 258
    },
    "stir_fried_beef_2128": {
        "name": "เนื้อผัด สูตร 2128",
        "cal": 321
    },
    "grilled_noodle_2129": {
        "name": "บะหมี่ย่าง สูตร 2129",
        "cal": 587
    },
    "boiled_chicken_2130": {
        "name": "ไก่ต้ม สูตร 2130",
        "cal": 796
    },
    "grilled_shrimp_2131": {
        "name": "กุ้งย่าง สูตร 2131",
        "cal": 604
    },
    "fried_noodle_2132": {
        "name": "บะหมี่ทอด สูตร 2132",
        "cal": 369
    },
    "stir_fried_beef_2133": {
        "name": "เนื้อผัด สูตร 2133",
        "cal": 658
    },
    "steamed_shrimp_2134": {
        "name": "กุ้งนึ่ง สูตร 2134",
        "cal": 328
    },
    "spicy_soup_2135": {
        "name": "ซุปยำ สูตร 2135",
        "cal": 440
    },
    "steamed_squid_2136": {
        "name": "ปลาหมึกนึ่ง สูตร 2136",
        "cal": 747
    },
    "boiled_soup_2137": {
        "name": "ซุปต้ม สูตร 2137",
        "cal": 585
    },
    "boiled_squid_2138": {
        "name": "ปลาหมึกต้ม สูตร 2138",
        "cal": 375
    },
    "steamed_squid_2139": {
        "name": "ปลาหมึกนึ่ง สูตร 2139",
        "cal": 400
    },
    "spicy_shrimp_2140": {
        "name": "กุ้งยำ สูตร 2140",
        "cal": 560
    },
    "steamed_soup_2141": {
        "name": "ซุปนึ่ง สูตร 2141",
        "cal": 799
    },
    "spicy_soup_2142": {
        "name": "ซุปยำ สูตร 2142",
        "cal": 622
    },
    "spicy_shrimp_2143": {
        "name": "กุ้งยำ สูตร 2143",
        "cal": 763
    },
    "stir_fried_chicken_2144": {
        "name": "ไก่ผัด สูตร 2144",
        "cal": 627
    },
    "fried_chicken_2145": {
        "name": "ไก่ทอด สูตร 2145",
        "cal": 53
    },
    "grilled_squid_2146": {
        "name": "ปลาหมึกย่าง สูตร 2146",
        "cal": 526
    },
    "spicy_fish_2147": {
        "name": "ปลายำ สูตร 2147",
        "cal": 299
    },
    "fried_chicken_2148": {
        "name": "ไก่ทอด สูตร 2148",
        "cal": 576
    },
    "grilled_rice_2149": {
        "name": "ข้าวย่าง สูตร 2149",
        "cal": 490
    },
    "fried_fish_2150": {
        "name": "ปลาทอด สูตร 2150",
        "cal": 553
    },
    "grilled_fish_2151": {
        "name": "ปลาย่าง สูตร 2151",
        "cal": 611
    },
    "spicy_fish_2152": {
        "name": "ปลายำ สูตร 2152",
        "cal": 118
    },
    "fried_beef_2153": {
        "name": "เนื้อทอด สูตร 2153",
        "cal": 573
    },
    "spicy_fish_2154": {
        "name": "ปลายำ สูตร 2154",
        "cal": 39
    },
    "spicy_rice_2155": {
        "name": "ข้าวยำ สูตร 2155",
        "cal": 802
    },
    "boiled_fish_2156": {
        "name": "ปลาต้ม สูตร 2156",
        "cal": 522
    },
    "fried_pork_2157": {
        "name": "หมูทอด สูตร 2157",
        "cal": 806
    },
    "grilled_beef_2158": {
        "name": "เนื้อย่าง สูตร 2158",
        "cal": 333
    },
    "grilled_soup_2159": {
        "name": "ซุปย่าง สูตร 2159",
        "cal": 744
    },
    "steamed_shrimp_2160": {
        "name": "กุ้งนึ่ง สูตร 2160",
        "cal": 320
    },
    "steamed_chicken_2161": {
        "name": "ไก่นึ่ง สูตร 2161",
        "cal": 770
    },
    "grilled_pork_2162": {
        "name": "หมูย่าง สูตร 2162",
        "cal": 562
    },
    "boiled_chicken_2163": {
        "name": "ไก่ต้ม สูตร 2163",
        "cal": 733
    },
    "grilled_noodle_2164": {
        "name": "บะหมี่ย่าง สูตร 2164",
        "cal": 146
    },
    "fried_pork_2165": {
        "name": "หมูทอด สูตร 2165",
        "cal": 651
    },
    "spicy_beef_2166": {
        "name": "เนื้อยำ สูตร 2166",
        "cal": 714
    },
    "steamed_soup_2167": {
        "name": "ซุปนึ่ง สูตร 2167",
        "cal": 763
    },
    "steamed_beef_2168": {
        "name": "เนื้อนึ่ง สูตร 2168",
        "cal": 334
    },
    "stir_fried_shrimp_2169": {
        "name": "กุ้งผัด สูตร 2169",
        "cal": 294
    },
    "grilled_chicken_2170": {
        "name": "ไก่ย่าง สูตร 2170",
        "cal": 111
    },
    "boiled_squid_2171": {
        "name": "ปลาหมึกต้ม สูตร 2171",
        "cal": 45
    },
    "steamed_fish_2172": {
        "name": "ปลานึ่ง สูตร 2172",
        "cal": 596
    },
    "spicy_fish_2173": {
        "name": "ปลายำ สูตร 2173",
        "cal": 517
    },
    "grilled_beef_2174": {
        "name": "เนื้อย่าง สูตร 2174",
        "cal": 144
    },
    "spicy_pork_2175": {
        "name": "หมูยำ สูตร 2175",
        "cal": 730
    },
    "grilled_noodle_2176": {
        "name": "บะหมี่ย่าง สูตร 2176",
        "cal": 250
    },
    "grilled_noodle_2177": {
        "name": "บะหมี่ย่าง สูตร 2177",
        "cal": 351
    },
    "boiled_chicken_2178": {
        "name": "ไก่ต้ม สูตร 2178",
        "cal": 782
    },
    "boiled_shrimp_2179": {
        "name": "กุ้งต้ม สูตร 2179",
        "cal": 480
    },
    "steamed_squid_2180": {
        "name": "ปลาหมึกนึ่ง สูตร 2180",
        "cal": 210
    },
    "spicy_soup_2181": {
        "name": "ซุปยำ สูตร 2181",
        "cal": 472
    },
    "boiled_noodle_2182": {
        "name": "บะหมี่ต้ม สูตร 2182",
        "cal": 269
    },
    "stir_fried_pork_2183": {
        "name": "หมูผัด สูตร 2183",
        "cal": 526
    },
    "grilled_chicken_2184": {
        "name": "ไก่ย่าง สูตร 2184",
        "cal": 395
    },
    "grilled_chicken_2185": {
        "name": "ไก่ย่าง สูตร 2185",
        "cal": 175
    },
    "fried_fish_2186": {
        "name": "ปลาทอด สูตร 2186",
        "cal": 684
    },
    "steamed_beef_2187": {
        "name": "เนื้อนึ่ง สูตร 2187",
        "cal": 164
    },
    "steamed_chicken_2188": {
        "name": "ไก่นึ่ง สูตร 2188",
        "cal": 161
    },
    "spicy_soup_2189": {
        "name": "ซุปยำ สูตร 2189",
        "cal": 578
    },
    "stir_fried_squid_2190": {
        "name": "ปลาหมึกผัด สูตร 2190",
        "cal": 420
    },
    "steamed_beef_2191": {
        "name": "เนื้อนึ่ง สูตร 2191",
        "cal": 55
    },
    "stir_fried_noodle_2192": {
        "name": "บะหมี่ผัด สูตร 2192",
        "cal": 545
    },
    "spicy_fish_2193": {
        "name": "ปลายำ สูตร 2193",
        "cal": 558
    },
    "stir_fried_rice_2194": {
        "name": "ข้าวผัด สูตร 2194",
        "cal": 613
    },
    "stir_fried_soup_2195": {
        "name": "ซุปผัด สูตร 2195",
        "cal": 510
    },
    "boiled_shrimp_2196": {
        "name": "กุ้งต้ม สูตร 2196",
        "cal": 37
    },
    "steamed_squid_2197": {
        "name": "ปลาหมึกนึ่ง สูตร 2197",
        "cal": 39
    },
    "fried_fish_2198": {
        "name": "ปลาทอด สูตร 2198",
        "cal": 273
    },
    "grilled_pork_2199": {
        "name": "หมูย่าง สูตร 2199",
        "cal": 281
    },
    "steamed_beef_2200": {
        "name": "เนื้อนึ่ง สูตร 2200",
        "cal": 294
    },
    "spicy_shrimp_2201": {
        "name": "กุ้งยำ สูตร 2201",
        "cal": 783
    },
    "steamed_soup_2202": {
        "name": "ซุปนึ่ง สูตร 2202",
        "cal": 421
    },
    "boiled_noodle_2203": {
        "name": "บะหมี่ต้ม สูตร 2203",
        "cal": 464
    },
    "grilled_squid_2204": {
        "name": "ปลาหมึกย่าง สูตร 2204",
        "cal": 517
    },
    "fried_fish_2205": {
        "name": "ปลาทอด สูตร 2205",
        "cal": 270
    },
    "stir_fried_pork_2206": {
        "name": "หมูผัด สูตร 2206",
        "cal": 245
    },
    "steamed_soup_2207": {
        "name": "ซุปนึ่ง สูตร 2207",
        "cal": 659
    },
    "stir_fried_fish_2208": {
        "name": "ปลาผัด สูตร 2208",
        "cal": 159
    },
    "steamed_fish_2209": {
        "name": "ปลานึ่ง สูตร 2209",
        "cal": 558
    },
    "fried_squid_2210": {
        "name": "ปลาหมึกทอด สูตร 2210",
        "cal": 297
    },
    "spicy_beef_2211": {
        "name": "เนื้อยำ สูตร 2211",
        "cal": 658
    },
    "stir_fried_squid_2212": {
        "name": "ปลาหมึกผัด สูตร 2212",
        "cal": 345
    },
    "grilled_rice_2213": {
        "name": "ข้าวย่าง สูตร 2213",
        "cal": 382
    },
    "grilled_fish_2214": {
        "name": "ปลาย่าง สูตร 2214",
        "cal": 361
    },
    "steamed_beef_2215": {
        "name": "เนื้อนึ่ง สูตร 2215",
        "cal": 318
    },
    "grilled_rice_2216": {
        "name": "ข้าวย่าง สูตร 2216",
        "cal": 175
    },
    "grilled_noodle_2217": {
        "name": "บะหมี่ย่าง สูตร 2217",
        "cal": 216
    },
    "boiled_beef_2218": {
        "name": "เนื้อต้ม สูตร 2218",
        "cal": 293
    },
    "grilled_noodle_2219": {
        "name": "บะหมี่ย่าง สูตร 2219",
        "cal": 637
    },
    "spicy_pork_2220": {
        "name": "หมูยำ สูตร 2220",
        "cal": 405
    },
    "spicy_squid_2221": {
        "name": "ปลาหมึกยำ สูตร 2221",
        "cal": 214
    },
    "stir_fried_chicken_2222": {
        "name": "ไก่ผัด สูตร 2222",
        "cal": 387
    },
    "spicy_rice_2223": {
        "name": "ข้าวยำ สูตร 2223",
        "cal": 449
    },
    "grilled_beef_2224": {
        "name": "เนื้อย่าง สูตร 2224",
        "cal": 372
    },
    "stir_fried_rice_2225": {
        "name": "ข้าวผัด สูตร 2225",
        "cal": 575
    },
    "stir_fried_soup_2226": {
        "name": "ซุปผัด สูตร 2226",
        "cal": 603
    },
    "steamed_shrimp_2227": {
        "name": "กุ้งนึ่ง สูตร 2227",
        "cal": 248
    },
    "stir_fried_beef_2228": {
        "name": "เนื้อผัด สูตร 2228",
        "cal": 613
    },
    "spicy_rice_2229": {
        "name": "ข้าวยำ สูตร 2229",
        "cal": 400
    },
    "grilled_soup_2230": {
        "name": "ซุปย่าง สูตร 2230",
        "cal": 42
    },
    "stir_fried_rice_2231": {
        "name": "ข้าวผัด สูตร 2231",
        "cal": 349
    },
    "steamed_squid_2232": {
        "name": "ปลาหมึกนึ่ง สูตร 2232",
        "cal": 541
    },
    "stir_fried_squid_2233": {
        "name": "ปลาหมึกผัด สูตร 2233",
        "cal": 334
    },
    "spicy_fish_2234": {
        "name": "ปลายำ สูตร 2234",
        "cal": 633
    },
    "steamed_shrimp_2235": {
        "name": "กุ้งนึ่ง สูตร 2235",
        "cal": 653
    },
    "steamed_shrimp_2236": {
        "name": "กุ้งนึ่ง สูตร 2236",
        "cal": 662
    },
    "steamed_chicken_2237": {
        "name": "ไก่นึ่ง สูตร 2237",
        "cal": 104
    },
    "stir_fried_fish_2238": {
        "name": "ปลาผัด สูตร 2238",
        "cal": 324
    },
    "grilled_chicken_2239": {
        "name": "ไก่ย่าง สูตร 2239",
        "cal": 586
    },
    "fried_shrimp_2240": {
        "name": "กุ้งทอด สูตร 2240",
        "cal": 211
    },
    "grilled_rice_2241": {
        "name": "ข้าวย่าง สูตร 2241",
        "cal": 248
    },
    "stir_fried_shrimp_2242": {
        "name": "กุ้งผัด สูตร 2242",
        "cal": 306
    },
    "steamed_squid_2243": {
        "name": "ปลาหมึกนึ่ง สูตร 2243",
        "cal": 694
    },
    "steamed_squid_2244": {
        "name": "ปลาหมึกนึ่ง สูตร 2244",
        "cal": 151
    },
    "steamed_squid_2245": {
        "name": "ปลาหมึกนึ่ง สูตร 2245",
        "cal": 344
    },
    "boiled_shrimp_2246": {
        "name": "กุ้งต้ม สูตร 2246",
        "cal": 154
    },
    "spicy_beef_2247": {
        "name": "เนื้อยำ สูตร 2247",
        "cal": 213
    },
    "stir_fried_beef_2248": {
        "name": "เนื้อผัด สูตร 2248",
        "cal": 658
    },
    "spicy_soup_2249": {
        "name": "ซุปยำ สูตร 2249",
        "cal": 610
    },
    "steamed_shrimp_2250": {
        "name": "กุ้งนึ่ง สูตร 2250",
        "cal": 697
    },
    "stir_fried_fish_2251": {
        "name": "ปลาผัด สูตร 2251",
        "cal": 428
    },
    "grilled_beef_2252": {
        "name": "เนื้อย่าง สูตร 2252",
        "cal": 680
    },
    "boiled_squid_2253": {
        "name": "ปลาหมึกต้ม สูตร 2253",
        "cal": 351
    },
    "steamed_pork_2254": {
        "name": "หมูนึ่ง สูตร 2254",
        "cal": 142
    },
    "steamed_shrimp_2255": {
        "name": "กุ้งนึ่ง สูตร 2255",
        "cal": 518
    },
    "steamed_noodle_2256": {
        "name": "บะหมี่นึ่ง สูตร 2256",
        "cal": 446
    },
    "spicy_fish_2257": {
        "name": "ปลายำ สูตร 2257",
        "cal": 648
    },
    "stir_fried_squid_2258": {
        "name": "ปลาหมึกผัด สูตร 2258",
        "cal": 261
    },
    "fried_chicken_2259": {
        "name": "ไก่ทอด สูตร 2259",
        "cal": 187
    },
    "steamed_pork_2260": {
        "name": "หมูนึ่ง สูตร 2260",
        "cal": 697
    },
    "grilled_noodle_2261": {
        "name": "บะหมี่ย่าง สูตร 2261",
        "cal": 683
    },
    "spicy_chicken_2262": {
        "name": "ไก่ยำ สูตร 2262",
        "cal": 166
    },
    "boiled_pork_2263": {
        "name": "หมูต้ม สูตร 2263",
        "cal": 621
    },
    "stir_fried_squid_2264": {
        "name": "ปลาหมึกผัด สูตร 2264",
        "cal": 49
    },
    "fried_soup_2265": {
        "name": "ซุปทอด สูตร 2265",
        "cal": 778
    },
    "stir_fried_pork_2266": {
        "name": "หมูผัด สูตร 2266",
        "cal": 682
    },
    "boiled_noodle_2267": {
        "name": "บะหมี่ต้ม สูตร 2267",
        "cal": 116
    },
    "spicy_squid_2268": {
        "name": "ปลาหมึกยำ สูตร 2268",
        "cal": 644
    },
    "fried_fish_2269": {
        "name": "ปลาทอด สูตร 2269",
        "cal": 338
    },
    "steamed_shrimp_2270": {
        "name": "กุ้งนึ่ง สูตร 2270",
        "cal": 764
    },
    "steamed_soup_2271": {
        "name": "ซุปนึ่ง สูตร 2271",
        "cal": 769
    },
    "steamed_chicken_2272": {
        "name": "ไก่นึ่ง สูตร 2272",
        "cal": 307
    },
    "steamed_pork_2273": {
        "name": "หมูนึ่ง สูตร 2273",
        "cal": 500
    },
    "grilled_rice_2274": {
        "name": "ข้าวย่าง สูตร 2274",
        "cal": 118
    },
    "steamed_pork_2275": {
        "name": "หมูนึ่ง สูตร 2275",
        "cal": 178
    },
    "grilled_shrimp_2276": {
        "name": "กุ้งย่าง สูตร 2276",
        "cal": 289
    },
    "boiled_rice_2277": {
        "name": "ข้าวต้ม สูตร 2277",
        "cal": 334
    },
    "fried_fish_2278": {
        "name": "ปลาทอด สูตร 2278",
        "cal": 587
    },
    "boiled_chicken_2279": {
        "name": "ไก่ต้ม สูตร 2279",
        "cal": 34
    },
    "spicy_beef_2280": {
        "name": "เนื้อยำ สูตร 2280",
        "cal": 271
    },
    "boiled_pork_2281": {
        "name": "หมูต้ม สูตร 2281",
        "cal": 769
    },
    "steamed_soup_2282": {
        "name": "ซุปนึ่ง สูตร 2282",
        "cal": 364
    },
    "stir_fried_chicken_2283": {
        "name": "ไก่ผัด สูตร 2283",
        "cal": 366
    },
    "grilled_chicken_2284": {
        "name": "ไก่ย่าง สูตร 2284",
        "cal": 402
    },
    "grilled_beef_2285": {
        "name": "เนื้อย่าง สูตร 2285",
        "cal": 316
    },
    "steamed_beef_2286": {
        "name": "เนื้อนึ่ง สูตร 2286",
        "cal": 365
    },
    "stir_fried_pork_2287": {
        "name": "หมูผัด สูตร 2287",
        "cal": 763
    },
    "stir_fried_shrimp_2288": {
        "name": "กุ้งผัด สูตร 2288",
        "cal": 688
    },
    "steamed_pork_2289": {
        "name": "หมูนึ่ง สูตร 2289",
        "cal": 336
    },
    "stir_fried_rice_2290": {
        "name": "ข้าวผัด สูตร 2290",
        "cal": 462
    },
    "spicy_fish_2291": {
        "name": "ปลายำ สูตร 2291",
        "cal": 820
    },
    "fried_shrimp_2292": {
        "name": "กุ้งทอด สูตร 2292",
        "cal": 777
    },
    "stir_fried_pork_2293": {
        "name": "หมูผัด สูตร 2293",
        "cal": 168
    },
    "fried_squid_2294": {
        "name": "ปลาหมึกทอด สูตร 2294",
        "cal": 655
    },
    "boiled_beef_2295": {
        "name": "เนื้อต้ม สูตร 2295",
        "cal": 770
    },
    "steamed_noodle_2296": {
        "name": "บะหมี่นึ่ง สูตร 2296",
        "cal": 366
    },
    "boiled_squid_2297": {
        "name": "ปลาหมึกต้ม สูตร 2297",
        "cal": 507
    },
    "grilled_squid_2298": {
        "name": "ปลาหมึกย่าง สูตร 2298",
        "cal": 670
    },
    "boiled_fish_2299": {
        "name": "ปลาต้ม สูตร 2299",
        "cal": 540
    },
    "boiled_chicken_2300": {
        "name": "ไก่ต้ม สูตร 2300",
        "cal": 97
    },
    "boiled_beef_2301": {
        "name": "เนื้อต้ม สูตร 2301",
        "cal": 158
    },
    "fried_soup_2302": {
        "name": "ซุปทอด สูตร 2302",
        "cal": 205
    },
    "stir_fried_pork_2303": {
        "name": "หมูผัด สูตร 2303",
        "cal": 841
    },
    "fried_shrimp_2304": {
        "name": "กุ้งทอด สูตร 2304",
        "cal": 317
    },
    "boiled_soup_2305": {
        "name": "ซุปต้ม สูตร 2305",
        "cal": 583
    },
    "stir_fried_soup_2306": {
        "name": "ซุปผัด สูตร 2306",
        "cal": 526
    },
    "fried_pork_2307": {
        "name": "หมูทอด สูตร 2307",
        "cal": 673
    },
    "boiled_chicken_2308": {
        "name": "ไก่ต้ม สูตร 2308",
        "cal": 821
    },
    "grilled_chicken_2309": {
        "name": "ไก่ย่าง สูตร 2309",
        "cal": 165
    },
    "fried_noodle_2310": {
        "name": "บะหมี่ทอด สูตร 2310",
        "cal": 407
    },
    "grilled_rice_2311": {
        "name": "ข้าวย่าง สูตร 2311",
        "cal": 212
    },
    "steamed_rice_2312": {
        "name": "ข้าวนึ่ง สูตร 2312",
        "cal": 314
    },
    "boiled_shrimp_2313": {
        "name": "กุ้งต้ม สูตร 2313",
        "cal": 505
    },
    "stir_fried_rice_2314": {
        "name": "ข้าวผัด สูตร 2314",
        "cal": 179
    },
    "stir_fried_rice_2315": {
        "name": "ข้าวผัด สูตร 2315",
        "cal": 514
    },
    "grilled_rice_2316": {
        "name": "ข้าวย่าง สูตร 2316",
        "cal": 447
    },
    "fried_pork_2317": {
        "name": "หมูทอด สูตร 2317",
        "cal": 194
    },
    "stir_fried_noodle_2318": {
        "name": "บะหมี่ผัด สูตร 2318",
        "cal": 604
    },
    "fried_shrimp_2319": {
        "name": "กุ้งทอด สูตร 2319",
        "cal": 806
    },
    "grilled_beef_2320": {
        "name": "เนื้อย่าง สูตร 2320",
        "cal": 348
    },
    "fried_chicken_2321": {
        "name": "ไก่ทอด สูตร 2321",
        "cal": 31
    },
    "stir_fried_fish_2322": {
        "name": "ปลาผัด สูตร 2322",
        "cal": 403
    },
    "spicy_chicken_2323": {
        "name": "ไก่ยำ สูตร 2323",
        "cal": 95
    },
    "fried_chicken_2324": {
        "name": "ไก่ทอด สูตร 2324",
        "cal": 197
    },
    "spicy_shrimp_2325": {
        "name": "กุ้งยำ สูตร 2325",
        "cal": 615
    },
    "spicy_squid_2326": {
        "name": "ปลาหมึกยำ สูตร 2326",
        "cal": 56
    },
    "boiled_beef_2327": {
        "name": "เนื้อต้ม สูตร 2327",
        "cal": 219
    },
    "grilled_noodle_2328": {
        "name": "บะหมี่ย่าง สูตร 2328",
        "cal": 114
    },
    "fried_soup_2329": {
        "name": "ซุปทอด สูตร 2329",
        "cal": 692
    },
    "stir_fried_chicken_2330": {
        "name": "ไก่ผัด สูตร 2330",
        "cal": 602
    },
    "boiled_beef_2331": {
        "name": "เนื้อต้ม สูตร 2331",
        "cal": 452
    },
    "grilled_chicken_2332": {
        "name": "ไก่ย่าง สูตร 2332",
        "cal": 461
    },
    "fried_fish_2333": {
        "name": "ปลาทอด สูตร 2333",
        "cal": 638
    },
    "grilled_chicken_2334": {
        "name": "ไก่ย่าง สูตร 2334",
        "cal": 85
    },
    "fried_rice_2335": {
        "name": "ข้าวทอด สูตร 2335",
        "cal": 303
    },
    "grilled_soup_2336": {
        "name": "ซุปย่าง สูตร 2336",
        "cal": 616
    },
    "stir_fried_squid_2337": {
        "name": "ปลาหมึกผัด สูตร 2337",
        "cal": 59
    },
    "stir_fried_rice_2338": {
        "name": "ข้าวผัด สูตร 2338",
        "cal": 322
    },
    "fried_squid_2339": {
        "name": "ปลาหมึกทอด สูตร 2339",
        "cal": 681
    },
    "grilled_pork_2340": {
        "name": "หมูย่าง สูตร 2340",
        "cal": 181
    },
    "fried_shrimp_2341": {
        "name": "กุ้งทอด สูตร 2341",
        "cal": 431
    },
    "spicy_beef_2342": {
        "name": "เนื้อยำ สูตร 2342",
        "cal": 312
    },
    "fried_squid_2343": {
        "name": "ปลาหมึกทอด สูตร 2343",
        "cal": 595
    },
    "fried_squid_2344": {
        "name": "ปลาหมึกทอด สูตร 2344",
        "cal": 36
    },
    "spicy_shrimp_2345": {
        "name": "กุ้งยำ สูตร 2345",
        "cal": 31
    },
    "steamed_beef_2346": {
        "name": "เนื้อนึ่ง สูตร 2346",
        "cal": 422
    },
    "spicy_chicken_2347": {
        "name": "ไก่ยำ สูตร 2347",
        "cal": 708
    },
    "steamed_soup_2348": {
        "name": "ซุปนึ่ง สูตร 2348",
        "cal": 445
    },
    "boiled_noodle_2349": {
        "name": "บะหมี่ต้ม สูตร 2349",
        "cal": 728
    },
    "stir_fried_noodle_2350": {
        "name": "บะหมี่ผัด สูตร 2350",
        "cal": 488
    },
    "steamed_squid_2351": {
        "name": "ปลาหมึกนึ่ง สูตร 2351",
        "cal": 700
    },
    "grilled_soup_2352": {
        "name": "ซุปย่าง สูตร 2352",
        "cal": 117
    },
    "grilled_shrimp_2353": {
        "name": "กุ้งย่าง สูตร 2353",
        "cal": 257
    },
    "stir_fried_chicken_2354": {
        "name": "ไก่ผัด สูตร 2354",
        "cal": 253
    },
    "fried_shrimp_2355": {
        "name": "กุ้งทอด สูตร 2355",
        "cal": 636
    },
    "grilled_fish_2356": {
        "name": "ปลาย่าง สูตร 2356",
        "cal": 639
    },
    "stir_fried_noodle_2357": {
        "name": "บะหมี่ผัด สูตร 2357",
        "cal": 140
    },
    "grilled_fish_2358": {
        "name": "ปลาย่าง สูตร 2358",
        "cal": 741
    },
    "spicy_pork_2359": {
        "name": "หมูยำ สูตร 2359",
        "cal": 23
    },
    "fried_soup_2360": {
        "name": "ซุปทอด สูตร 2360",
        "cal": 520
    },
    "boiled_shrimp_2361": {
        "name": "กุ้งต้ม สูตร 2361",
        "cal": 728
    },
    "stir_fried_fish_2362": {
        "name": "ปลาผัด สูตร 2362",
        "cal": 576
    },
    "steamed_beef_2363": {
        "name": "เนื้อนึ่ง สูตร 2363",
        "cal": 815
    },
    "boiled_noodle_2364": {
        "name": "บะหมี่ต้ม สูตร 2364",
        "cal": 723
    },
    "steamed_soup_2365": {
        "name": "ซุปนึ่ง สูตร 2365",
        "cal": 334
    },
    "steamed_noodle_2366": {
        "name": "บะหมี่นึ่ง สูตร 2366",
        "cal": 575
    },
    "stir_fried_beef_2367": {
        "name": "เนื้อผัด สูตร 2367",
        "cal": 709
    },
    "stir_fried_noodle_2368": {
        "name": "บะหมี่ผัด สูตร 2368",
        "cal": 549
    },
    "boiled_squid_2369": {
        "name": "ปลาหมึกต้ม สูตร 2369",
        "cal": 311
    },
    "stir_fried_rice_2370": {
        "name": "ข้าวผัด สูตร 2370",
        "cal": 448
    },
    "grilled_fish_2371": {
        "name": "ปลาย่าง สูตร 2371",
        "cal": 670
    },
    "fried_pork_2372": {
        "name": "หมูทอด สูตร 2372",
        "cal": 113
    },
    "boiled_noodle_2373": {
        "name": "บะหมี่ต้ม สูตร 2373",
        "cal": 716
    },
    "steamed_fish_2374": {
        "name": "ปลานึ่ง สูตร 2374",
        "cal": 791
    },
    "spicy_shrimp_2375": {
        "name": "กุ้งยำ สูตร 2375",
        "cal": 596
    },
    "spicy_noodle_2376": {
        "name": "บะหมี่ยำ สูตร 2376",
        "cal": 57
    },
    "spicy_noodle_2377": {
        "name": "บะหมี่ยำ สูตร 2377",
        "cal": 117
    },
    "stir_fried_squid_2378": {
        "name": "ปลาหมึกผัด สูตร 2378",
        "cal": 699
    },
    "fried_noodle_2379": {
        "name": "บะหมี่ทอด สูตร 2379",
        "cal": 25
    },
    "boiled_beef_2380": {
        "name": "เนื้อต้ม สูตร 2380",
        "cal": 77
    },
    "fried_noodle_2381": {
        "name": "บะหมี่ทอด สูตร 2381",
        "cal": 602
    },
    "grilled_beef_2382": {
        "name": "เนื้อย่าง สูตร 2382",
        "cal": 733
    },
    "fried_beef_2383": {
        "name": "เนื้อทอด สูตร 2383",
        "cal": 93
    },
    "fried_noodle_2384": {
        "name": "บะหมี่ทอด สูตร 2384",
        "cal": 689
    },
    "boiled_squid_2385": {
        "name": "ปลาหมึกต้ม สูตร 2385",
        "cal": 453
    },
    "spicy_noodle_2386": {
        "name": "บะหมี่ยำ สูตร 2386",
        "cal": 445
    },
    "stir_fried_pork_2387": {
        "name": "หมูผัด สูตร 2387",
        "cal": 328
    },
    "spicy_squid_2388": {
        "name": "ปลาหมึกยำ สูตร 2388",
        "cal": 241
    },
    "fried_chicken_2389": {
        "name": "ไก่ทอด สูตร 2389",
        "cal": 282
    },
    "stir_fried_beef_2390": {
        "name": "เนื้อผัด สูตร 2390",
        "cal": 773
    },
    "spicy_shrimp_2391": {
        "name": "กุ้งยำ สูตร 2391",
        "cal": 667
    },
    "grilled_chicken_2392": {
        "name": "ไก่ย่าง สูตร 2392",
        "cal": 564
    },
    "boiled_rice_2393": {
        "name": "ข้าวต้ม สูตร 2393",
        "cal": 278
    },
    "spicy_soup_2394": {
        "name": "ซุปยำ สูตร 2394",
        "cal": 694
    },
    "spicy_soup_2395": {
        "name": "ซุปยำ สูตร 2395",
        "cal": 414
    },
    "boiled_squid_2396": {
        "name": "ปลาหมึกต้ม สูตร 2396",
        "cal": 177
    },
    "spicy_noodle_2397": {
        "name": "บะหมี่ยำ สูตร 2397",
        "cal": 255
    },
    "grilled_fish_2398": {
        "name": "ปลาย่าง สูตร 2398",
        "cal": 364
    },
    "grilled_rice_2399": {
        "name": "ข้าวย่าง สูตร 2399",
        "cal": 143
    },
    "spicy_rice_2400": {
        "name": "ข้าวยำ สูตร 2400",
        "cal": 389
    },
    "steamed_squid_2401": {
        "name": "ปลาหมึกนึ่ง สูตร 2401",
        "cal": 837
    },
    "spicy_shrimp_2402": {
        "name": "กุ้งยำ สูตร 2402",
        "cal": 399
    },
    "stir_fried_shrimp_2403": {
        "name": "กุ้งผัด สูตร 2403",
        "cal": 92
    },
    "boiled_fish_2404": {
        "name": "ปลาต้ม สูตร 2404",
        "cal": 821
    },
    "steamed_squid_2405": {
        "name": "ปลาหมึกนึ่ง สูตร 2405",
        "cal": 661
    },
    "grilled_pork_2406": {
        "name": "หมูย่าง สูตร 2406",
        "cal": 238
    },
    "steamed_chicken_2407": {
        "name": "ไก่นึ่ง สูตร 2407",
        "cal": 61
    },
    "steamed_squid_2408": {
        "name": "ปลาหมึกนึ่ง สูตร 2408",
        "cal": 383
    },
    "boiled_soup_2409": {
        "name": "ซุปต้ม สูตร 2409",
        "cal": 452
    },
    "steamed_fish_2410": {
        "name": "ปลานึ่ง สูตร 2410",
        "cal": 671
    },
    "fried_rice_2411": {
        "name": "ข้าวทอด สูตร 2411",
        "cal": 505
    },
    "boiled_squid_2412": {
        "name": "ปลาหมึกต้ม สูตร 2412",
        "cal": 64
    },
    "spicy_squid_2413": {
        "name": "ปลาหมึกยำ สูตร 2413",
        "cal": 675
    },
    "spicy_beef_2414": {
        "name": "เนื้อยำ สูตร 2414",
        "cal": 210
    },
    "stir_fried_beef_2415": {
        "name": "เนื้อผัด สูตร 2415",
        "cal": 279
    },
    "fried_squid_2416": {
        "name": "ปลาหมึกทอด สูตร 2416",
        "cal": 718
    },
    "steamed_rice_2417": {
        "name": "ข้าวนึ่ง สูตร 2417",
        "cal": 480
    },
    "grilled_soup_2418": {
        "name": "ซุปย่าง สูตร 2418",
        "cal": 217
    },
    "spicy_squid_2419": {
        "name": "ปลาหมึกยำ สูตร 2419",
        "cal": 834
    },
    "boiled_fish_2420": {
        "name": "ปลาต้ม สูตร 2420",
        "cal": 597
    },
    "boiled_noodle_2421": {
        "name": "บะหมี่ต้ม สูตร 2421",
        "cal": 232
    },
    "steamed_fish_2422": {
        "name": "ปลานึ่ง สูตร 2422",
        "cal": 235
    },
    "grilled_beef_2423": {
        "name": "เนื้อย่าง สูตร 2423",
        "cal": 773
    },
    "stir_fried_chicken_2424": {
        "name": "ไก่ผัด สูตร 2424",
        "cal": 443
    },
    "grilled_soup_2425": {
        "name": "ซุปย่าง สูตร 2425",
        "cal": 72
    },
    "grilled_beef_2426": {
        "name": "เนื้อย่าง สูตร 2426",
        "cal": 794
    },
    "stir_fried_soup_2427": {
        "name": "ซุปผัด สูตร 2427",
        "cal": 572
    },
    "boiled_fish_2428": {
        "name": "ปลาต้ม สูตร 2428",
        "cal": 507
    },
    "steamed_noodle_2429": {
        "name": "บะหมี่นึ่ง สูตร 2429",
        "cal": 462
    },
    "spicy_shrimp_2430": {
        "name": "กุ้งยำ สูตร 2430",
        "cal": 130
    },
    "spicy_beef_2431": {
        "name": "เนื้อยำ สูตร 2431",
        "cal": 65
    },
    "steamed_fish_2432": {
        "name": "ปลานึ่ง สูตร 2432",
        "cal": 619
    },
    "boiled_noodle_2433": {
        "name": "บะหมี่ต้ม สูตร 2433",
        "cal": 774
    },
    "boiled_soup_2434": {
        "name": "ซุปต้ม สูตร 2434",
        "cal": 245
    },
    "stir_fried_pork_2435": {
        "name": "หมูผัด สูตร 2435",
        "cal": 537
    },
    "stir_fried_pork_2436": {
        "name": "หมูผัด สูตร 2436",
        "cal": 437
    },
    "grilled_squid_2437": {
        "name": "ปลาหมึกย่าง สูตร 2437",
        "cal": 260
    },
    "boiled_pork_2438": {
        "name": "หมูต้ม สูตร 2438",
        "cal": 48
    },
    "fried_rice_2439": {
        "name": "ข้าวทอด สูตร 2439",
        "cal": 142
    },
    "spicy_noodle_2440": {
        "name": "บะหมี่ยำ สูตร 2440",
        "cal": 219
    },
    "grilled_soup_2441": {
        "name": "ซุปย่าง สูตร 2441",
        "cal": 389
    },
    "fried_rice_2442": {
        "name": "ข้าวทอด สูตร 2442",
        "cal": 662
    },
    "stir_fried_chicken_2443": {
        "name": "ไก่ผัด สูตร 2443",
        "cal": 262
    },
    "fried_rice_2444": {
        "name": "ข้าวทอด สูตร 2444",
        "cal": 664
    },
    "stir_fried_rice_2445": {
        "name": "ข้าวผัด สูตร 2445",
        "cal": 33
    },
    "stir_fried_squid_2446": {
        "name": "ปลาหมึกผัด สูตร 2446",
        "cal": 470
    },
    "steamed_chicken_2447": {
        "name": "ไก่นึ่ง สูตร 2447",
        "cal": 712
    },
    "boiled_rice_2448": {
        "name": "ข้าวต้ม สูตร 2448",
        "cal": 266
    },
    "grilled_rice_2449": {
        "name": "ข้าวย่าง สูตร 2449",
        "cal": 465
    },
    "stir_fried_chicken_2450": {
        "name": "ไก่ผัด สูตร 2450",
        "cal": 212
    },
    "fried_rice_2451": {
        "name": "ข้าวทอด สูตร 2451",
        "cal": 658
    },
    "grilled_soup_2452": {
        "name": "ซุปย่าง สูตร 2452",
        "cal": 382
    },
    "fried_rice_2453": {
        "name": "ข้าวทอด สูตร 2453",
        "cal": 724
    },
    "stir_fried_soup_2454": {
        "name": "ซุปผัด สูตร 2454",
        "cal": 599
    },
    "steamed_pork_2455": {
        "name": "หมูนึ่ง สูตร 2455",
        "cal": 429
    },
    "fried_fish_2456": {
        "name": "ปลาทอด สูตร 2456",
        "cal": 762
    },
    "steamed_beef_2457": {
        "name": "เนื้อนึ่ง สูตร 2457",
        "cal": 573
    },
    "boiled_chicken_2458": {
        "name": "ไก่ต้ม สูตร 2458",
        "cal": 453
    },
    "boiled_chicken_2459": {
        "name": "ไก่ต้ม สูตร 2459",
        "cal": 393
    },
    "stir_fried_chicken_2460": {
        "name": "ไก่ผัด สูตร 2460",
        "cal": 329
    },
    "spicy_rice_2461": {
        "name": "ข้าวยำ สูตร 2461",
        "cal": 341
    },
    "steamed_rice_2462": {
        "name": "ข้าวนึ่ง สูตร 2462",
        "cal": 827
    },
    "steamed_noodle_2463": {
        "name": "บะหมี่นึ่ง สูตร 2463",
        "cal": 818
    },
    "spicy_pork_2464": {
        "name": "หมูยำ สูตร 2464",
        "cal": 644
    },
    "spicy_noodle_2465": {
        "name": "บะหมี่ยำ สูตร 2465",
        "cal": 106
    },
    "grilled_fish_2466": {
        "name": "ปลาย่าง สูตร 2466",
        "cal": 431
    },
    "stir_fried_beef_2467": {
        "name": "เนื้อผัด สูตร 2467",
        "cal": 727
    },
    "boiled_shrimp_2468": {
        "name": "กุ้งต้ม สูตร 2468",
        "cal": 588
    },
    "stir_fried_rice_2469": {
        "name": "ข้าวผัด สูตร 2469",
        "cal": 219
    },
    "steamed_pork_2470": {
        "name": "หมูนึ่ง สูตร 2470",
        "cal": 47
    },
    "boiled_fish_2471": {
        "name": "ปลาต้ม สูตร 2471",
        "cal": 676
    },
    "fried_soup_2472": {
        "name": "ซุปทอด สูตร 2472",
        "cal": 247
    },
    "steamed_beef_2473": {
        "name": "เนื้อนึ่ง สูตร 2473",
        "cal": 64
    },
    "fried_rice_2474": {
        "name": "ข้าวทอด สูตร 2474",
        "cal": 111
    },
    "steamed_fish_2475": {
        "name": "ปลานึ่ง สูตร 2475",
        "cal": 296
    },
    "fried_pork_2476": {
        "name": "หมูทอด สูตร 2476",
        "cal": 845
    },
    "steamed_rice_2477": {
        "name": "ข้าวนึ่ง สูตร 2477",
        "cal": 54
    },
    "stir_fried_noodle_2478": {
        "name": "บะหมี่ผัด สูตร 2478",
        "cal": 428
    },
    "steamed_fish_2479": {
        "name": "ปลานึ่ง สูตร 2479",
        "cal": 148
    },
    "spicy_beef_2480": {
        "name": "เนื้อยำ สูตร 2480",
        "cal": 389
    },
    "boiled_beef_2481": {
        "name": "เนื้อต้ม สูตร 2481",
        "cal": 559
    },
    "stir_fried_fish_2482": {
        "name": "ปลาผัด สูตร 2482",
        "cal": 151
    },
    "grilled_pork_2483": {
        "name": "หมูย่าง สูตร 2483",
        "cal": 517
    },
    "steamed_rice_2484": {
        "name": "ข้าวนึ่ง สูตร 2484",
        "cal": 163
    },
    "steamed_rice_2485": {
        "name": "ข้าวนึ่ง สูตร 2485",
        "cal": 816
    },
    "stir_fried_noodle_2486": {
        "name": "บะหมี่ผัด สูตร 2486",
        "cal": 719
    },
    "fried_squid_2487": {
        "name": "ปลาหมึกทอด สูตร 2487",
        "cal": 284
    },
    "fried_noodle_2488": {
        "name": "บะหมี่ทอด สูตร 2488",
        "cal": 255
    },
    "boiled_chicken_2489": {
        "name": "ไก่ต้ม สูตร 2489",
        "cal": 244
    },
    "fried_noodle_2490": {
        "name": "บะหมี่ทอด สูตร 2490",
        "cal": 280
    },
    "steamed_squid_2491": {
        "name": "ปลาหมึกนึ่ง สูตร 2491",
        "cal": 788
    },
    "spicy_squid_2492": {
        "name": "ปลาหมึกยำ สูตร 2492",
        "cal": 147
    },
    "stir_fried_fish_2493": {
        "name": "ปลาผัด สูตร 2493",
        "cal": 507
    },
    "boiled_soup_2494": {
        "name": "ซุปต้ม สูตร 2494",
        "cal": 571
    },
    "grilled_pork_2495": {
        "name": "หมูย่าง สูตร 2495",
        "cal": 796
    },
    "fried_shrimp_2496": {
        "name": "กุ้งทอด สูตร 2496",
        "cal": 23
    },
    "fried_noodle_2497": {
        "name": "บะหมี่ทอด สูตร 2497",
        "cal": 749
    },
    "fried_noodle_2498": {
        "name": "บะหมี่ทอด สูตร 2498",
        "cal": 201
    },
    "fried_pork_2499": {
        "name": "หมูทอด สูตร 2499",
        "cal": 199
    },
    "steamed_beef_2500": {
        "name": "เนื้อนึ่ง สูตร 2500",
        "cal": 794
    },
    "fried_beef_2501": {
        "name": "เนื้อทอด สูตร 2501",
        "cal": 131
    },
    "grilled_chicken_2502": {
        "name": "ไก่ย่าง สูตร 2502",
        "cal": 496
    },
    "fried_soup_2503": {
        "name": "ซุปทอด สูตร 2503",
        "cal": 234
    },
    "stir_fried_noodle_2504": {
        "name": "บะหมี่ผัด สูตร 2504",
        "cal": 593
    },
    "fried_squid_2505": {
        "name": "ปลาหมึกทอด สูตร 2505",
        "cal": 163
    },
    "spicy_beef_2506": {
        "name": "เนื้อยำ สูตร 2506",
        "cal": 575
    },
    "fried_pork_2507": {
        "name": "หมูทอด สูตร 2507",
        "cal": 335
    },
    "fried_chicken_2508": {
        "name": "ไก่ทอด สูตร 2508",
        "cal": 87
    },
    "spicy_noodle_2509": {
        "name": "บะหมี่ยำ สูตร 2509",
        "cal": 43
    },
    "fried_noodle_2510": {
        "name": "บะหมี่ทอด สูตร 2510",
        "cal": 129
    },
    "stir_fried_rice_2511": {
        "name": "ข้าวผัด สูตร 2511",
        "cal": 237
    },
    "steamed_shrimp_2512": {
        "name": "กุ้งนึ่ง สูตร 2512",
        "cal": 84
    },
    "spicy_beef_2513": {
        "name": "เนื้อยำ สูตร 2513",
        "cal": 103
    },
    "grilled_squid_2514": {
        "name": "ปลาหมึกย่าง สูตร 2514",
        "cal": 336
    },
    "boiled_noodle_2515": {
        "name": "บะหมี่ต้ม สูตร 2515",
        "cal": 750
    },
    "steamed_beef_2516": {
        "name": "เนื้อนึ่ง สูตร 2516",
        "cal": 633
    },
    "spicy_rice_2517": {
        "name": "ข้าวยำ สูตร 2517",
        "cal": 658
    },
    "spicy_rice_2518": {
        "name": "ข้าวยำ สูตร 2518",
        "cal": 467
    },
    "boiled_pork_2519": {
        "name": "หมูต้ม สูตร 2519",
        "cal": 315
    },
    "spicy_chicken_2520": {
        "name": "ไก่ยำ สูตร 2520",
        "cal": 399
    },
    "stir_fried_beef_2521": {
        "name": "เนื้อผัด สูตร 2521",
        "cal": 296
    },
    "boiled_pork_2522": {
        "name": "หมูต้ม สูตร 2522",
        "cal": 80
    },
    "spicy_rice_2523": {
        "name": "ข้าวยำ สูตร 2523",
        "cal": 710
    },
    "stir_fried_soup_2524": {
        "name": "ซุปผัด สูตร 2524",
        "cal": 672
    },
    "fried_noodle_2525": {
        "name": "บะหมี่ทอด สูตร 2525",
        "cal": 446
    },
    "stir_fried_soup_2526": {
        "name": "ซุปผัด สูตร 2526",
        "cal": 542
    },
    "stir_fried_noodle_2527": {
        "name": "บะหมี่ผัด สูตร 2527",
        "cal": 141
    },
    "fried_rice_2528": {
        "name": "ข้าวทอด สูตร 2528",
        "cal": 681
    },
    "fried_chicken_2529": {
        "name": "ไก่ทอด สูตร 2529",
        "cal": 736
    },
    "stir_fried_shrimp_2530": {
        "name": "กุ้งผัด สูตร 2530",
        "cal": 573
    },
    "fried_squid_2531": {
        "name": "ปลาหมึกทอด สูตร 2531",
        "cal": 559
    },
    "steamed_rice_2532": {
        "name": "ข้าวนึ่ง สูตร 2532",
        "cal": 591
    },
    "grilled_fish_2533": {
        "name": "ปลาย่าง สูตร 2533",
        "cal": 260
    },
    "fried_pork_2534": {
        "name": "หมูทอด สูตร 2534",
        "cal": 218
    },
    "boiled_soup_2535": {
        "name": "ซุปต้ม สูตร 2535",
        "cal": 475
    },
    "steamed_pork_2536": {
        "name": "หมูนึ่ง สูตร 2536",
        "cal": 371
    },
    "spicy_squid_2537": {
        "name": "ปลาหมึกยำ สูตร 2537",
        "cal": 86
    },
    "fried_noodle_2538": {
        "name": "บะหมี่ทอด สูตร 2538",
        "cal": 268
    },
    "fried_chicken_2539": {
        "name": "ไก่ทอด สูตร 2539",
        "cal": 460
    },
    "stir_fried_pork_2540": {
        "name": "หมูผัด สูตร 2540",
        "cal": 735
    },
    "grilled_soup_2541": {
        "name": "ซุปย่าง สูตร 2541",
        "cal": 729
    },
    "boiled_pork_2542": {
        "name": "หมูต้ม สูตร 2542",
        "cal": 25
    },
    "boiled_shrimp_2543": {
        "name": "กุ้งต้ม สูตร 2543",
        "cal": 402
    },
    "spicy_noodle_2544": {
        "name": "บะหมี่ยำ สูตร 2544",
        "cal": 503
    },
    "steamed_squid_2545": {
        "name": "ปลาหมึกนึ่ง สูตร 2545",
        "cal": 208
    },
    "boiled_pork_2546": {
        "name": "หมูต้ม สูตร 2546",
        "cal": 180
    },
    "grilled_chicken_2547": {
        "name": "ไก่ย่าง สูตร 2547",
        "cal": 574
    },
    "fried_shrimp_2548": {
        "name": "กุ้งทอด สูตร 2548",
        "cal": 601
    },
    "stir_fried_noodle_2549": {
        "name": "บะหมี่ผัด สูตร 2549",
        "cal": 184
    },
    "grilled_chicken_2550": {
        "name": "ไก่ย่าง สูตร 2550",
        "cal": 189
    },
    "grilled_pork_2551": {
        "name": "หมูย่าง สูตร 2551",
        "cal": 253
    },
    "spicy_pork_2552": {
        "name": "หมูยำ สูตร 2552",
        "cal": 55
    },
    "steamed_noodle_2553": {
        "name": "บะหมี่นึ่ง สูตร 2553",
        "cal": 424
    },
    "stir_fried_noodle_2554": {
        "name": "บะหมี่ผัด สูตร 2554",
        "cal": 340
    },
    "fried_soup_2555": {
        "name": "ซุปทอด สูตร 2555",
        "cal": 24
    },
    "spicy_noodle_2556": {
        "name": "บะหมี่ยำ สูตร 2556",
        "cal": 565
    },
    "stir_fried_soup_2557": {
        "name": "ซุปผัด สูตร 2557",
        "cal": 226
    },
    "boiled_rice_2558": {
        "name": "ข้าวต้ม สูตร 2558",
        "cal": 362
    },
    "steamed_fish_2559": {
        "name": "ปลานึ่ง สูตร 2559",
        "cal": 656
    },
    "grilled_chicken_2560": {
        "name": "ไก่ย่าง สูตร 2560",
        "cal": 572
    },
    "boiled_beef_2561": {
        "name": "เนื้อต้ม สูตร 2561",
        "cal": 132
    },
    "steamed_beef_2562": {
        "name": "เนื้อนึ่ง สูตร 2562",
        "cal": 738
    },
    "spicy_pork_2563": {
        "name": "หมูยำ สูตร 2563",
        "cal": 236
    },
    "fried_pork_2564": {
        "name": "หมูทอด สูตร 2564",
        "cal": 405
    },
    "steamed_soup_2565": {
        "name": "ซุปนึ่ง สูตร 2565",
        "cal": 117
    },
    "grilled_pork_2566": {
        "name": "หมูย่าง สูตร 2566",
        "cal": 536
    },
    "spicy_soup_2567": {
        "name": "ซุปยำ สูตร 2567",
        "cal": 125
    },
    "fried_beef_2568": {
        "name": "เนื้อทอด สูตร 2568",
        "cal": 549
    },
    "steamed_soup_2569": {
        "name": "ซุปนึ่ง สูตร 2569",
        "cal": 130
    },
    "steamed_chicken_2570": {
        "name": "ไก่นึ่ง สูตร 2570",
        "cal": 739
    },
    "steamed_beef_2571": {
        "name": "เนื้อนึ่ง สูตร 2571",
        "cal": 515
    },
    "stir_fried_fish_2572": {
        "name": "ปลาผัด สูตร 2572",
        "cal": 190
    },
    "spicy_squid_2573": {
        "name": "ปลาหมึกยำ สูตร 2573",
        "cal": 731
    },
    "fried_pork_2574": {
        "name": "หมูทอด สูตร 2574",
        "cal": 768
    },
    "boiled_noodle_2575": {
        "name": "บะหมี่ต้ม สูตร 2575",
        "cal": 282
    },
    "fried_noodle_2576": {
        "name": "บะหมี่ทอด สูตร 2576",
        "cal": 262
    },
    "steamed_noodle_2577": {
        "name": "บะหมี่นึ่ง สูตร 2577",
        "cal": 392
    },
    "stir_fried_chicken_2578": {
        "name": "ไก่ผัด สูตร 2578",
        "cal": 709
    },
    "stir_fried_noodle_2579": {
        "name": "บะหมี่ผัด สูตร 2579",
        "cal": 816
    },
    "boiled_rice_2580": {
        "name": "ข้าวต้ม สูตร 2580",
        "cal": 129
    },
    "fried_squid_2581": {
        "name": "ปลาหมึกทอด สูตร 2581",
        "cal": 63
    },
    "boiled_pork_2582": {
        "name": "หมูต้ม สูตร 2582",
        "cal": 579
    },
    "stir_fried_beef_2583": {
        "name": "เนื้อผัด สูตร 2583",
        "cal": 36
    },
    "boiled_fish_2584": {
        "name": "ปลาต้ม สูตร 2584",
        "cal": 220
    },
    "boiled_chicken_2585": {
        "name": "ไก่ต้ม สูตร 2585",
        "cal": 582
    },
    "grilled_pork_2586": {
        "name": "หมูย่าง สูตร 2586",
        "cal": 86
    },
    "stir_fried_rice_2587": {
        "name": "ข้าวผัด สูตร 2587",
        "cal": 471
    },
    "spicy_noodle_2588": {
        "name": "บะหมี่ยำ สูตร 2588",
        "cal": 658
    },
    "stir_fried_squid_2589": {
        "name": "ปลาหมึกผัด สูตร 2589",
        "cal": 74
    },
    "fried_pork_2590": {
        "name": "หมูทอด สูตร 2590",
        "cal": 354
    },
    "steamed_chicken_2591": {
        "name": "ไก่นึ่ง สูตร 2591",
        "cal": 88
    },
    "boiled_shrimp_2592": {
        "name": "กุ้งต้ม สูตร 2592",
        "cal": 224
    },
    "spicy_beef_2593": {
        "name": "เนื้อยำ สูตร 2593",
        "cal": 521
    },
    "spicy_fish_2594": {
        "name": "ปลายำ สูตร 2594",
        "cal": 674
    },
    "steamed_squid_2595": {
        "name": "ปลาหมึกนึ่ง สูตร 2595",
        "cal": 727
    },
    "grilled_rice_2596": {
        "name": "ข้าวย่าง สูตร 2596",
        "cal": 49
    },
    "grilled_rice_2597": {
        "name": "ข้าวย่าง สูตร 2597",
        "cal": 516
    },
    "fried_fish_2598": {
        "name": "ปลาทอด สูตร 2598",
        "cal": 194
    },
    "stir_fried_beef_2599": {
        "name": "เนื้อผัด สูตร 2599",
        "cal": 311
    },
    "boiled_pork_2600": {
        "name": "หมูต้ม สูตร 2600",
        "cal": 223
    },
    "boiled_noodle_2601": {
        "name": "บะหมี่ต้ม สูตร 2601",
        "cal": 570
    },
    "stir_fried_shrimp_2602": {
        "name": "กุ้งผัด สูตร 2602",
        "cal": 329
    },
    "spicy_chicken_2603": {
        "name": "ไก่ยำ สูตร 2603",
        "cal": 101
    },
    "fried_rice_2604": {
        "name": "ข้าวทอด สูตร 2604",
        "cal": 504
    },
    "grilled_fish_2605": {
        "name": "ปลาย่าง สูตร 2605",
        "cal": 374
    },
    "boiled_soup_2606": {
        "name": "ซุปต้ม สูตร 2606",
        "cal": 579
    },
    "grilled_squid_2607": {
        "name": "ปลาหมึกย่าง สูตร 2607",
        "cal": 240
    },
    "fried_fish_2608": {
        "name": "ปลาทอด สูตร 2608",
        "cal": 266
    },
    "grilled_rice_2609": {
        "name": "ข้าวย่าง สูตร 2609",
        "cal": 454
    },
    "boiled_rice_2610": {
        "name": "ข้าวต้ม สูตร 2610",
        "cal": 708
    },
    "fried_chicken_2611": {
        "name": "ไก่ทอด สูตร 2611",
        "cal": 245
    },
    "spicy_fish_2612": {
        "name": "ปลายำ สูตร 2612",
        "cal": 539
    },
    "grilled_noodle_2613": {
        "name": "บะหมี่ย่าง สูตร 2613",
        "cal": 241
    },
    "grilled_soup_2614": {
        "name": "ซุปย่าง สูตร 2614",
        "cal": 160
    },
    "stir_fried_soup_2615": {
        "name": "ซุปผัด สูตร 2615",
        "cal": 513
    },
    "fried_pork_2616": {
        "name": "หมูทอด สูตร 2616",
        "cal": 758
    },
    "stir_fried_chicken_2617": {
        "name": "ไก่ผัด สูตร 2617",
        "cal": 135
    },
    "fried_shrimp_2618": {
        "name": "กุ้งทอด สูตร 2618",
        "cal": 470
    },
    "fried_squid_2619": {
        "name": "ปลาหมึกทอด สูตร 2619",
        "cal": 502
    },
    "steamed_fish_2620": {
        "name": "ปลานึ่ง สูตร 2620",
        "cal": 685
    },
    "spicy_shrimp_2621": {
        "name": "กุ้งยำ สูตร 2621",
        "cal": 123
    },
    "grilled_beef_2622": {
        "name": "เนื้อย่าง สูตร 2622",
        "cal": 610
    },
    "boiled_noodle_2623": {
        "name": "บะหมี่ต้ม สูตร 2623",
        "cal": 842
    },
    "steamed_chicken_2624": {
        "name": "ไก่นึ่ง สูตร 2624",
        "cal": 30
    },
    "fried_pork_2625": {
        "name": "หมูทอด สูตร 2625",
        "cal": 829
    },
    "boiled_beef_2626": {
        "name": "เนื้อต้ม สูตร 2626",
        "cal": 332
    },
    "steamed_soup_2627": {
        "name": "ซุปนึ่ง สูตร 2627",
        "cal": 378
    },
    "fried_pork_2628": {
        "name": "หมูทอด สูตร 2628",
        "cal": 344
    },
    "steamed_squid_2629": {
        "name": "ปลาหมึกนึ่ง สูตร 2629",
        "cal": 353
    },
    "steamed_rice_2630": {
        "name": "ข้าวนึ่ง สูตร 2630",
        "cal": 621
    },
    "stir_fried_chicken_2631": {
        "name": "ไก่ผัด สูตร 2631",
        "cal": 183
    },
    "boiled_chicken_2632": {
        "name": "ไก่ต้ม สูตร 2632",
        "cal": 693
    },
    "spicy_soup_2633": {
        "name": "ซุปยำ สูตร 2633",
        "cal": 76
    },
    "stir_fried_beef_2634": {
        "name": "เนื้อผัด สูตร 2634",
        "cal": 343
    },
    "fried_shrimp_2635": {
        "name": "กุ้งทอด สูตร 2635",
        "cal": 608
    },
    "stir_fried_rice_2636": {
        "name": "ข้าวผัด สูตร 2636",
        "cal": 583
    },
    "boiled_noodle_2637": {
        "name": "บะหมี่ต้ม สูตร 2637",
        "cal": 306
    },
    "grilled_soup_2638": {
        "name": "ซุปย่าง สูตร 2638",
        "cal": 742
    },
    "boiled_beef_2639": {
        "name": "เนื้อต้ม สูตร 2639",
        "cal": 504
    },
    "boiled_beef_2640": {
        "name": "เนื้อต้ม สูตร 2640",
        "cal": 734
    },
    "boiled_noodle_2641": {
        "name": "บะหมี่ต้ม สูตร 2641",
        "cal": 103
    },
    "spicy_rice_2642": {
        "name": "ข้าวยำ สูตร 2642",
        "cal": 194
    },
    "steamed_rice_2643": {
        "name": "ข้าวนึ่ง สูตร 2643",
        "cal": 716
    },
    "grilled_pork_2644": {
        "name": "หมูย่าง สูตร 2644",
        "cal": 351
    },
    "spicy_fish_2645": {
        "name": "ปลายำ สูตร 2645",
        "cal": 583
    },
    "boiled_pork_2646": {
        "name": "หมูต้ม สูตร 2646",
        "cal": 633
    },
    "steamed_pork_2647": {
        "name": "หมูนึ่ง สูตร 2647",
        "cal": 566
    },
    "stir_fried_beef_2648": {
        "name": "เนื้อผัด สูตร 2648",
        "cal": 539
    },
    "boiled_shrimp_2649": {
        "name": "กุ้งต้ม สูตร 2649",
        "cal": 211
    },
    "steamed_chicken_2650": {
        "name": "ไก่นึ่ง สูตร 2650",
        "cal": 819
    },
    "stir_fried_squid_2651": {
        "name": "ปลาหมึกผัด สูตร 2651",
        "cal": 414
    },
    "steamed_soup_2652": {
        "name": "ซุปนึ่ง สูตร 2652",
        "cal": 521
    },
    "stir_fried_chicken_2653": {
        "name": "ไก่ผัด สูตร 2653",
        "cal": 266
    },
    "steamed_fish_2654": {
        "name": "ปลานึ่ง สูตร 2654",
        "cal": 529
    },
    "grilled_fish_2655": {
        "name": "ปลาย่าง สูตร 2655",
        "cal": 219
    },
    "grilled_shrimp_2656": {
        "name": "กุ้งย่าง สูตร 2656",
        "cal": 577
    },
    "steamed_fish_2657": {
        "name": "ปลานึ่ง สูตร 2657",
        "cal": 413
    },
    "grilled_soup_2658": {
        "name": "ซุปย่าง สูตร 2658",
        "cal": 810
    },
    "spicy_soup_2659": {
        "name": "ซุปยำ สูตร 2659",
        "cal": 158
    },
    "steamed_chicken_2660": {
        "name": "ไก่นึ่ง สูตร 2660",
        "cal": 438
    },
    "grilled_shrimp_2661": {
        "name": "กุ้งย่าง สูตร 2661",
        "cal": 492
    },
    "boiled_shrimp_2662": {
        "name": "กุ้งต้ม สูตร 2662",
        "cal": 524
    },
    "steamed_shrimp_2663": {
        "name": "กุ้งนึ่ง สูตร 2663",
        "cal": 728
    },
    "boiled_chicken_2664": {
        "name": "ไก่ต้ม สูตร 2664",
        "cal": 532
    },
    "grilled_chicken_2665": {
        "name": "ไก่ย่าง สูตร 2665",
        "cal": 429
    },
    "grilled_shrimp_2666": {
        "name": "กุ้งย่าง สูตร 2666",
        "cal": 513
    },
    "spicy_noodle_2667": {
        "name": "บะหมี่ยำ สูตร 2667",
        "cal": 78
    },
    "grilled_rice_2668": {
        "name": "ข้าวย่าง สูตร 2668",
        "cal": 337
    },
    "stir_fried_chicken_2669": {
        "name": "ไก่ผัด สูตร 2669",
        "cal": 503
    },
    "boiled_chicken_2670": {
        "name": "ไก่ต้ม สูตร 2670",
        "cal": 800
    },
    "stir_fried_chicken_2671": {
        "name": "ไก่ผัด สูตร 2671",
        "cal": 304
    },
    "stir_fried_fish_2672": {
        "name": "ปลาผัด สูตร 2672",
        "cal": 570
    },
    "steamed_soup_2673": {
        "name": "ซุปนึ่ง สูตร 2673",
        "cal": 605
    },
    "spicy_beef_2674": {
        "name": "เนื้อยำ สูตร 2674",
        "cal": 441
    },
    "spicy_rice_2675": {
        "name": "ข้าวยำ สูตร 2675",
        "cal": 641
    },
    "spicy_fish_2676": {
        "name": "ปลายำ สูตร 2676",
        "cal": 525
    },
    "spicy_noodle_2677": {
        "name": "บะหมี่ยำ สูตร 2677",
        "cal": 339
    },
    "fried_rice_2678": {
        "name": "ข้าวทอด สูตร 2678",
        "cal": 549
    },
    "fried_fish_2679": {
        "name": "ปลาทอด สูตร 2679",
        "cal": 351
    },
    "stir_fried_noodle_2680": {
        "name": "บะหมี่ผัด สูตร 2680",
        "cal": 179
    },
    "boiled_shrimp_2681": {
        "name": "กุ้งต้ม สูตร 2681",
        "cal": 39
    },
    "boiled_rice_2682": {
        "name": "ข้าวต้ม สูตร 2682",
        "cal": 729
    },
    "steamed_fish_2683": {
        "name": "ปลานึ่ง สูตร 2683",
        "cal": 445
    },
    "boiled_rice_2684": {
        "name": "ข้าวต้ม สูตร 2684",
        "cal": 415
    },
    "grilled_pork_2685": {
        "name": "หมูย่าง สูตร 2685",
        "cal": 228
    },
    "boiled_noodle_2686": {
        "name": "บะหมี่ต้ม สูตร 2686",
        "cal": 183
    },
    "steamed_noodle_2687": {
        "name": "บะหมี่นึ่ง สูตร 2687",
        "cal": 121
    },
    "stir_fried_soup_2688": {
        "name": "ซุปผัด สูตร 2688",
        "cal": 233
    },
    "steamed_chicken_2689": {
        "name": "ไก่นึ่ง สูตร 2689",
        "cal": 769
    },
    "grilled_pork_2690": {
        "name": "หมูย่าง สูตร 2690",
        "cal": 493
    },
    "grilled_pork_2691": {
        "name": "หมูย่าง สูตร 2691",
        "cal": 359
    },
    "grilled_pork_2692": {
        "name": "หมูย่าง สูตร 2692",
        "cal": 273
    },
    "fried_shrimp_2693": {
        "name": "กุ้งทอด สูตร 2693",
        "cal": 372
    },
    "stir_fried_beef_2694": {
        "name": "เนื้อผัด สูตร 2694",
        "cal": 509
    },
    "grilled_noodle_2695": {
        "name": "บะหมี่ย่าง สูตร 2695",
        "cal": 365
    },
    "boiled_soup_2696": {
        "name": "ซุปต้ม สูตร 2696",
        "cal": 564
    },
    "fried_noodle_2697": {
        "name": "บะหมี่ทอด สูตร 2697",
        "cal": 228
    },
    "spicy_pork_2698": {
        "name": "หมูยำ สูตร 2698",
        "cal": 199
    },
    "steamed_pork_2699": {
        "name": "หมูนึ่ง สูตร 2699",
        "cal": 635
    },
    "steamed_fish_2700": {
        "name": "ปลานึ่ง สูตร 2700",
        "cal": 541
    },
    "stir_fried_squid_2701": {
        "name": "ปลาหมึกผัด สูตร 2701",
        "cal": 812
    },
    "spicy_noodle_2702": {
        "name": "บะหมี่ยำ สูตร 2702",
        "cal": 524
    },
    "spicy_fish_2703": {
        "name": "ปลายำ สูตร 2703",
        "cal": 743
    },
    "stir_fried_beef_2704": {
        "name": "เนื้อผัด สูตร 2704",
        "cal": 471
    },
    "fried_chicken_2705": {
        "name": "ไก่ทอด สูตร 2705",
        "cal": 130
    },
    "stir_fried_beef_2706": {
        "name": "เนื้อผัด สูตร 2706",
        "cal": 144
    },
    "grilled_beef_2707": {
        "name": "เนื้อย่าง สูตร 2707",
        "cal": 456
    },
    "boiled_pork_2708": {
        "name": "หมูต้ม สูตร 2708",
        "cal": 751
    },
    "spicy_soup_2709": {
        "name": "ซุปยำ สูตร 2709",
        "cal": 383
    },
    "stir_fried_rice_2710": {
        "name": "ข้าวผัด สูตร 2710",
        "cal": 632
    },
    "stir_fried_chicken_2711": {
        "name": "ไก่ผัด สูตร 2711",
        "cal": 472
    },
    "spicy_soup_2712": {
        "name": "ซุปยำ สูตร 2712",
        "cal": 154
    },
    "spicy_shrimp_2713": {
        "name": "กุ้งยำ สูตร 2713",
        "cal": 813
    },
    "steamed_noodle_2714": {
        "name": "บะหมี่นึ่ง สูตร 2714",
        "cal": 252
    },
    "fried_shrimp_2715": {
        "name": "กุ้งทอด สูตร 2715",
        "cal": 160
    },
    "stir_fried_soup_2716": {
        "name": "ซุปผัด สูตร 2716",
        "cal": 149
    },
    "boiled_beef_2717": {
        "name": "เนื้อต้ม สูตร 2717",
        "cal": 761
    },
    "boiled_pork_2718": {
        "name": "หมูต้ม สูตร 2718",
        "cal": 383
    },
    "grilled_shrimp_2719": {
        "name": "กุ้งย่าง สูตร 2719",
        "cal": 298
    },
    "grilled_rice_2720": {
        "name": "ข้าวย่าง สูตร 2720",
        "cal": 490
    },
    "stir_fried_shrimp_2721": {
        "name": "กุ้งผัด สูตร 2721",
        "cal": 113
    },
    "grilled_fish_2722": {
        "name": "ปลาย่าง สูตร 2722",
        "cal": 535
    },
    "fried_pork_2723": {
        "name": "หมูทอด สูตร 2723",
        "cal": 679
    },
    "spicy_chicken_2724": {
        "name": "ไก่ยำ สูตร 2724",
        "cal": 123
    },
    "grilled_chicken_2725": {
        "name": "ไก่ย่าง สูตร 2725",
        "cal": 761
    },
    "stir_fried_shrimp_2726": {
        "name": "กุ้งผัด สูตร 2726",
        "cal": 364
    },
    "spicy_chicken_2727": {
        "name": "ไก่ยำ สูตร 2727",
        "cal": 202
    },
    "spicy_soup_2728": {
        "name": "ซุปยำ สูตร 2728",
        "cal": 268
    },
    "spicy_noodle_2729": {
        "name": "บะหมี่ยำ สูตร 2729",
        "cal": 444
    },
    "stir_fried_shrimp_2730": {
        "name": "กุ้งผัด สูตร 2730",
        "cal": 509
    },
    "boiled_noodle_2731": {
        "name": "บะหมี่ต้ม สูตร 2731",
        "cal": 571
    },
    "stir_fried_squid_2732": {
        "name": "ปลาหมึกผัด สูตร 2732",
        "cal": 268
    },
    "grilled_rice_2733": {
        "name": "ข้าวย่าง สูตร 2733",
        "cal": 570
    },
    "fried_noodle_2734": {
        "name": "บะหมี่ทอด สูตร 2734",
        "cal": 568
    },
    "grilled_fish_2735": {
        "name": "ปลาย่าง สูตร 2735",
        "cal": 423
    },
    "fried_fish_2736": {
        "name": "ปลาทอด สูตร 2736",
        "cal": 773
    },
    "fried_soup_2737": {
        "name": "ซุปทอด สูตร 2737",
        "cal": 744
    },
    "grilled_beef_2738": {
        "name": "เนื้อย่าง สูตร 2738",
        "cal": 724
    },
    "grilled_beef_2739": {
        "name": "เนื้อย่าง สูตร 2739",
        "cal": 746
    },
    "steamed_squid_2740": {
        "name": "ปลาหมึกนึ่ง สูตร 2740",
        "cal": 402
    },
    "fried_pork_2741": {
        "name": "หมูทอด สูตร 2741",
        "cal": 790
    },
    "fried_beef_2742": {
        "name": "เนื้อทอด สูตร 2742",
        "cal": 81
    },
    "stir_fried_chicken_2743": {
        "name": "ไก่ผัด สูตร 2743",
        "cal": 516
    },
    "steamed_fish_2744": {
        "name": "ปลานึ่ง สูตร 2744",
        "cal": 263
    },
    "steamed_soup_2745": {
        "name": "ซุปนึ่ง สูตร 2745",
        "cal": 226
    },
    "grilled_soup_2746": {
        "name": "ซุปย่าง สูตร 2746",
        "cal": 821
    },
    "spicy_noodle_2747": {
        "name": "บะหมี่ยำ สูตร 2747",
        "cal": 787
    },
    "boiled_shrimp_2748": {
        "name": "กุ้งต้ม สูตร 2748",
        "cal": 292
    },
    "boiled_rice_2749": {
        "name": "ข้าวต้ม สูตร 2749",
        "cal": 201
    },
    "stir_fried_rice_2750": {
        "name": "ข้าวผัด สูตร 2750",
        "cal": 34
    },
    "boiled_shrimp_2751": {
        "name": "กุ้งต้ม สูตร 2751",
        "cal": 179
    },
    "spicy_squid_2752": {
        "name": "ปลาหมึกยำ สูตร 2752",
        "cal": 728
    },
    "boiled_pork_2753": {
        "name": "หมูต้ม สูตร 2753",
        "cal": 848
    },
    "grilled_rice_2754": {
        "name": "ข้าวย่าง สูตร 2754",
        "cal": 618
    },
    "steamed_chicken_2755": {
        "name": "ไก่นึ่ง สูตร 2755",
        "cal": 729
    },
    "fried_shrimp_2756": {
        "name": "กุ้งทอด สูตร 2756",
        "cal": 259
    },
    "spicy_beef_2757": {
        "name": "เนื้อยำ สูตร 2757",
        "cal": 243
    },
    "boiled_soup_2758": {
        "name": "ซุปต้ม สูตร 2758",
        "cal": 238
    },
    "grilled_noodle_2759": {
        "name": "บะหมี่ย่าง สูตร 2759",
        "cal": 170
    },
    "steamed_soup_2760": {
        "name": "ซุปนึ่ง สูตร 2760",
        "cal": 795
    },
    "steamed_pork_2761": {
        "name": "หมูนึ่ง สูตร 2761",
        "cal": 584
    },
    "spicy_fish_2762": {
        "name": "ปลายำ สูตร 2762",
        "cal": 225
    },
    "spicy_noodle_2763": {
        "name": "บะหมี่ยำ สูตร 2763",
        "cal": 565
    },
    "boiled_fish_2764": {
        "name": "ปลาต้ม สูตร 2764",
        "cal": 790
    },
    "stir_fried_squid_2765": {
        "name": "ปลาหมึกผัด สูตร 2765",
        "cal": 635
    },
    "spicy_squid_2766": {
        "name": "ปลาหมึกยำ สูตร 2766",
        "cal": 265
    },
    "stir_fried_squid_2767": {
        "name": "ปลาหมึกผัด สูตร 2767",
        "cal": 139
    },
    "fried_rice_2768": {
        "name": "ข้าวทอด สูตร 2768",
        "cal": 770
    },
    "steamed_soup_2769": {
        "name": "ซุปนึ่ง สูตร 2769",
        "cal": 731
    },
    "grilled_rice_2770": {
        "name": "ข้าวย่าง สูตร 2770",
        "cal": 328
    },
    "boiled_soup_2771": {
        "name": "ซุปต้ม สูตร 2771",
        "cal": 310
    },
    "stir_fried_squid_2772": {
        "name": "ปลาหมึกผัด สูตร 2772",
        "cal": 59
    },
    "boiled_chicken_2773": {
        "name": "ไก่ต้ม สูตร 2773",
        "cal": 307
    },
    "spicy_rice_2774": {
        "name": "ข้าวยำ สูตร 2774",
        "cal": 48
    },
    "spicy_beef_2775": {
        "name": "เนื้อยำ สูตร 2775",
        "cal": 502
    },
    "stir_fried_soup_2776": {
        "name": "ซุปผัด สูตร 2776",
        "cal": 733
    },
    "boiled_pork_2777": {
        "name": "หมูต้ม สูตร 2777",
        "cal": 782
    },
    "spicy_pork_2778": {
        "name": "หมูยำ สูตร 2778",
        "cal": 778
    },
    "steamed_squid_2779": {
        "name": "ปลาหมึกนึ่ง สูตร 2779",
        "cal": 319
    },
    "boiled_rice_2780": {
        "name": "ข้าวต้ม สูตร 2780",
        "cal": 690
    },
    "grilled_soup_2781": {
        "name": "ซุปย่าง สูตร 2781",
        "cal": 791
    },
    "fried_soup_2782": {
        "name": "ซุปทอด สูตร 2782",
        "cal": 405
    },
    "fried_soup_2783": {
        "name": "ซุปทอด สูตร 2783",
        "cal": 813
    },
    "spicy_soup_2784": {
        "name": "ซุปยำ สูตร 2784",
        "cal": 629
    },
    "boiled_beef_2785": {
        "name": "เนื้อต้ม สูตร 2785",
        "cal": 843
    },
    "stir_fried_squid_2786": {
        "name": "ปลาหมึกผัด สูตร 2786",
        "cal": 718
    },
    "steamed_fish_2787": {
        "name": "ปลานึ่ง สูตร 2787",
        "cal": 725
    },
    "steamed_beef_2788": {
        "name": "เนื้อนึ่ง สูตร 2788",
        "cal": 732
    },
    "steamed_noodle_2789": {
        "name": "บะหมี่นึ่ง สูตร 2789",
        "cal": 561
    },
    "grilled_chicken_2790": {
        "name": "ไก่ย่าง สูตร 2790",
        "cal": 73
    },
    "grilled_shrimp_2791": {
        "name": "กุ้งย่าง สูตร 2791",
        "cal": 100
    },
    "grilled_noodle_2792": {
        "name": "บะหมี่ย่าง สูตร 2792",
        "cal": 515
    },
    "grilled_soup_2793": {
        "name": "ซุปย่าง สูตร 2793",
        "cal": 816
    },
    "spicy_fish_2794": {
        "name": "ปลายำ สูตร 2794",
        "cal": 132
    },
    "fried_chicken_2795": {
        "name": "ไก่ทอด สูตร 2795",
        "cal": 436
    },
    "boiled_fish_2796": {
        "name": "ปลาต้ม สูตร 2796",
        "cal": 468
    },
    "steamed_rice_2797": {
        "name": "ข้าวนึ่ง สูตร 2797",
        "cal": 251
    },
    "grilled_pork_2798": {
        "name": "หมูย่าง สูตร 2798",
        "cal": 221
    },
    "boiled_beef_2799": {
        "name": "เนื้อต้ม สูตร 2799",
        "cal": 86
    },
    "grilled_squid_2800": {
        "name": "ปลาหมึกย่าง สูตร 2800",
        "cal": 405
    },
    "stir_fried_noodle_2801": {
        "name": "บะหมี่ผัด สูตร 2801",
        "cal": 767
    },
    "steamed_fish_2802": {
        "name": "ปลานึ่ง สูตร 2802",
        "cal": 519
    },
    "fried_chicken_2803": {
        "name": "ไก่ทอด สูตร 2803",
        "cal": 203
    },
    "stir_fried_fish_2804": {
        "name": "ปลาผัด สูตร 2804",
        "cal": 194
    },
    "spicy_squid_2805": {
        "name": "ปลาหมึกยำ สูตร 2805",
        "cal": 118
    },
    "steamed_squid_2806": {
        "name": "ปลาหมึกนึ่ง สูตร 2806",
        "cal": 581
    },
    "fried_beef_2807": {
        "name": "เนื้อทอด สูตร 2807",
        "cal": 630
    },
    "stir_fried_beef_2808": {
        "name": "เนื้อผัด สูตร 2808",
        "cal": 149
    },
    "boiled_squid_2809": {
        "name": "ปลาหมึกต้ม สูตร 2809",
        "cal": 508
    },
    "grilled_chicken_2810": {
        "name": "ไก่ย่าง สูตร 2810",
        "cal": 427
    },
    "fried_chicken_2811": {
        "name": "ไก่ทอด สูตร 2811",
        "cal": 116
    },
    "spicy_soup_2812": {
        "name": "ซุปยำ สูตร 2812",
        "cal": 472
    },
    "stir_fried_squid_2813": {
        "name": "ปลาหมึกผัด สูตร 2813",
        "cal": 157
    },
    "boiled_chicken_2814": {
        "name": "ไก่ต้ม สูตร 2814",
        "cal": 377
    },
    "spicy_shrimp_2815": {
        "name": "กุ้งยำ สูตร 2815",
        "cal": 152
    },
    "grilled_fish_2816": {
        "name": "ปลาย่าง สูตร 2816",
        "cal": 27
    },
    "stir_fried_fish_2817": {
        "name": "ปลาผัด สูตร 2817",
        "cal": 46
    },
    "steamed_squid_2818": {
        "name": "ปลาหมึกนึ่ง สูตร 2818",
        "cal": 729
    },
    "boiled_squid_2819": {
        "name": "ปลาหมึกต้ม สูตร 2819",
        "cal": 744
    },
    "stir_fried_beef_2820": {
        "name": "เนื้อผัด สูตร 2820",
        "cal": 763
    },
    "fried_soup_2821": {
        "name": "ซุปทอด สูตร 2821",
        "cal": 602
    },
    "steamed_shrimp_2822": {
        "name": "กุ้งนึ่ง สูตร 2822",
        "cal": 228
    },
    "grilled_rice_2823": {
        "name": "ข้าวย่าง สูตร 2823",
        "cal": 493
    },
    "grilled_chicken_2824": {
        "name": "ไก่ย่าง สูตร 2824",
        "cal": 233
    },
    "spicy_pork_2825": {
        "name": "หมูยำ สูตร 2825",
        "cal": 441
    },
    "steamed_beef_2826": {
        "name": "เนื้อนึ่ง สูตร 2826",
        "cal": 701
    },
    "boiled_rice_2827": {
        "name": "ข้าวต้ม สูตร 2827",
        "cal": 129
    },
    "steamed_chicken_2828": {
        "name": "ไก่นึ่ง สูตร 2828",
        "cal": 414
    },
    "stir_fried_noodle_2829": {
        "name": "บะหมี่ผัด สูตร 2829",
        "cal": 248
    },
    "grilled_noodle_2830": {
        "name": "บะหมี่ย่าง สูตร 2830",
        "cal": 368
    },
    "stir_fried_beef_2831": {
        "name": "เนื้อผัด สูตร 2831",
        "cal": 640
    },
    "stir_fried_shrimp_2832": {
        "name": "กุ้งผัด สูตร 2832",
        "cal": 660
    },
    "grilled_beef_2833": {
        "name": "เนื้อย่าง สูตร 2833",
        "cal": 535
    },
    "fried_chicken_2834": {
        "name": "ไก่ทอด สูตร 2834",
        "cal": 462
    },
    "steamed_beef_2835": {
        "name": "เนื้อนึ่ง สูตร 2835",
        "cal": 398
    },
    "spicy_fish_2836": {
        "name": "ปลายำ สูตร 2836",
        "cal": 668
    },
    "boiled_fish_2837": {
        "name": "ปลาต้ม สูตร 2837",
        "cal": 228
    },
    "spicy_squid_2838": {
        "name": "ปลาหมึกยำ สูตร 2838",
        "cal": 214
    },
    "stir_fried_chicken_2839": {
        "name": "ไก่ผัด สูตร 2839",
        "cal": 241
    },
    "grilled_pork_2840": {
        "name": "หมูย่าง สูตร 2840",
        "cal": 496
    },
    "steamed_squid_2841": {
        "name": "ปลาหมึกนึ่ง สูตร 2841",
        "cal": 727
    },
    "fried_noodle_2842": {
        "name": "บะหมี่ทอด สูตร 2842",
        "cal": 241
    },
    "fried_pork_2843": {
        "name": "หมูทอด สูตร 2843",
        "cal": 718
    },
    "grilled_beef_2844": {
        "name": "เนื้อย่าง สูตร 2844",
        "cal": 330
    },
    "boiled_noodle_2845": {
        "name": "บะหมี่ต้ม สูตร 2845",
        "cal": 613
    },
    "spicy_noodle_2846": {
        "name": "บะหมี่ยำ สูตร 2846",
        "cal": 564
    },
    "steamed_shrimp_2847": {
        "name": "กุ้งนึ่ง สูตร 2847",
        "cal": 23
    },
    "steamed_squid_2848": {
        "name": "ปลาหมึกนึ่ง สูตร 2848",
        "cal": 386
    },
    "spicy_beef_2849": {
        "name": "เนื้อยำ สูตร 2849",
        "cal": 495
    },
    "steamed_rice_2850": {
        "name": "ข้าวนึ่ง สูตร 2850",
        "cal": 731
    },
    "fried_pork_2851": {
        "name": "หมูทอด สูตร 2851",
        "cal": 329
    },
    "grilled_shrimp_2852": {
        "name": "กุ้งย่าง สูตร 2852",
        "cal": 524
    },
    "steamed_noodle_2853": {
        "name": "บะหมี่นึ่ง สูตร 2853",
        "cal": 267
    },
    "stir_fried_noodle_2854": {
        "name": "บะหมี่ผัด สูตร 2854",
        "cal": 567
    },
    "grilled_pork_2855": {
        "name": "หมูย่าง สูตร 2855",
        "cal": 538
    },
    "grilled_rice_2856": {
        "name": "ข้าวย่าง สูตร 2856",
        "cal": 715
    },
    "steamed_beef_2857": {
        "name": "เนื้อนึ่ง สูตร 2857",
        "cal": 230
    },
    "steamed_squid_2858": {
        "name": "ปลาหมึกนึ่ง สูตร 2858",
        "cal": 479
    },
    "boiled_chicken_2859": {
        "name": "ไก่ต้ม สูตร 2859",
        "cal": 43
    },
    "steamed_beef_2860": {
        "name": "เนื้อนึ่ง สูตร 2860",
        "cal": 151
    },
    "boiled_fish_2861": {
        "name": "ปลาต้ม สูตร 2861",
        "cal": 258
    },
    "stir_fried_noodle_2862": {
        "name": "บะหมี่ผัด สูตร 2862",
        "cal": 102
    },
    "spicy_fish_2863": {
        "name": "ปลายำ สูตร 2863",
        "cal": 46
    },
    "steamed_squid_2864": {
        "name": "ปลาหมึกนึ่ง สูตร 2864",
        "cal": 601
    },
    "fried_soup_2865": {
        "name": "ซุปทอด สูตร 2865",
        "cal": 201
    },
    "stir_fried_noodle_2866": {
        "name": "บะหมี่ผัด สูตร 2866",
        "cal": 754
    },
    "boiled_shrimp_2867": {
        "name": "กุ้งต้ม สูตร 2867",
        "cal": 307
    },
    "spicy_fish_2868": {
        "name": "ปลายำ สูตร 2868",
        "cal": 316
    },
    "steamed_rice_2869": {
        "name": "ข้าวนึ่ง สูตร 2869",
        "cal": 350
    },
    "grilled_noodle_2870": {
        "name": "บะหมี่ย่าง สูตร 2870",
        "cal": 465
    },
    "stir_fried_squid_2871": {
        "name": "ปลาหมึกผัด สูตร 2871",
        "cal": 86
    },
    "grilled_soup_2872": {
        "name": "ซุปย่าง สูตร 2872",
        "cal": 40
    },
    "fried_beef_2873": {
        "name": "เนื้อทอด สูตร 2873",
        "cal": 635
    },
    "grilled_soup_2874": {
        "name": "ซุปย่าง สูตร 2874",
        "cal": 144
    },
    "spicy_shrimp_2875": {
        "name": "กุ้งยำ สูตร 2875",
        "cal": 611
    },
    "fried_rice_2876": {
        "name": "ข้าวทอด สูตร 2876",
        "cal": 393
    },
    "stir_fried_chicken_2877": {
        "name": "ไก่ผัด สูตร 2877",
        "cal": 609
    },
    "grilled_shrimp_2878": {
        "name": "กุ้งย่าง สูตร 2878",
        "cal": 360
    },
    "grilled_squid_2879": {
        "name": "ปลาหมึกย่าง สูตร 2879",
        "cal": 466
    },
    "spicy_soup_2880": {
        "name": "ซุปยำ สูตร 2880",
        "cal": 191
    },
    "steamed_soup_2881": {
        "name": "ซุปนึ่ง สูตร 2881",
        "cal": 344
    },
    "spicy_fish_2882": {
        "name": "ปลายำ สูตร 2882",
        "cal": 198
    },
    "grilled_beef_2883": {
        "name": "เนื้อย่าง สูตร 2883",
        "cal": 501
    },
    "grilled_beef_2884": {
        "name": "เนื้อย่าง สูตร 2884",
        "cal": 541
    },
    "stir_fried_soup_2885": {
        "name": "ซุปผัด สูตร 2885",
        "cal": 567
    },
    "grilled_rice_2886": {
        "name": "ข้าวย่าง สูตร 2886",
        "cal": 819
    },
    "steamed_beef_2887": {
        "name": "เนื้อนึ่ง สูตร 2887",
        "cal": 312
    },
    "steamed_pork_2888": {
        "name": "หมูนึ่ง สูตร 2888",
        "cal": 549
    },
    "boiled_squid_2889": {
        "name": "ปลาหมึกต้ม สูตร 2889",
        "cal": 436
    },
    "boiled_shrimp_2890": {
        "name": "กุ้งต้ม สูตร 2890",
        "cal": 794
    },
    "fried_chicken_2891": {
        "name": "ไก่ทอด สูตร 2891",
        "cal": 514
    },
    "steamed_beef_2892": {
        "name": "เนื้อนึ่ง สูตร 2892",
        "cal": 534
    },
    "grilled_shrimp_2893": {
        "name": "กุ้งย่าง สูตร 2893",
        "cal": 377
    },
    "grilled_rice_2894": {
        "name": "ข้าวย่าง สูตร 2894",
        "cal": 175
    },
    "spicy_soup_2895": {
        "name": "ซุปยำ สูตร 2895",
        "cal": 49
    },
    "grilled_shrimp_2896": {
        "name": "กุ้งย่าง สูตร 2896",
        "cal": 758
    },
    "steamed_chicken_2897": {
        "name": "ไก่นึ่ง สูตร 2897",
        "cal": 578
    },
    "grilled_rice_2898": {
        "name": "ข้าวย่าง สูตร 2898",
        "cal": 582
    },
    "spicy_soup_2899": {
        "name": "ซุปยำ สูตร 2899",
        "cal": 465
    },
    "fried_chicken_2900": {
        "name": "ไก่ทอด สูตร 2900",
        "cal": 531
    },
    "steamed_noodle_2901": {
        "name": "บะหมี่นึ่ง สูตร 2901",
        "cal": 665
    },
    "fried_shrimp_2902": {
        "name": "กุ้งทอด สูตร 2902",
        "cal": 819
    },
    "fried_fish_2903": {
        "name": "ปลาทอด สูตร 2903",
        "cal": 643
    },
    "fried_beef_2904": {
        "name": "เนื้อทอด สูตร 2904",
        "cal": 117
    },
    "fried_fish_2905": {
        "name": "ปลาทอด สูตร 2905",
        "cal": 691
    },
    "fried_noodle_2906": {
        "name": "บะหมี่ทอด สูตร 2906",
        "cal": 626
    },
    "grilled_beef_2907": {
        "name": "เนื้อย่าง สูตร 2907",
        "cal": 227
    },
    "stir_fried_beef_2908": {
        "name": "เนื้อผัด สูตร 2908",
        "cal": 813
    },
    "spicy_pork_2909": {
        "name": "หมูยำ สูตร 2909",
        "cal": 807
    },
    "boiled_squid_2910": {
        "name": "ปลาหมึกต้ม สูตร 2910",
        "cal": 519
    },
    "stir_fried_chicken_2911": {
        "name": "ไก่ผัด สูตร 2911",
        "cal": 386
    },
    "stir_fried_rice_2912": {
        "name": "ข้าวผัด สูตร 2912",
        "cal": 339
    },
    "grilled_soup_2913": {
        "name": "ซุปย่าง สูตร 2913",
        "cal": 218
    },
    "stir_fried_noodle_2914": {
        "name": "บะหมี่ผัด สูตร 2914",
        "cal": 731
    },
    "grilled_chicken_2915": {
        "name": "ไก่ย่าง สูตร 2915",
        "cal": 30
    },
    "stir_fried_chicken_2916": {
        "name": "ไก่ผัด สูตร 2916",
        "cal": 133
    },
    "spicy_pork_2917": {
        "name": "หมูยำ สูตร 2917",
        "cal": 132
    },
    "spicy_pork_2918": {
        "name": "หมูยำ สูตร 2918",
        "cal": 645
    },
    "spicy_pork_2919": {
        "name": "หมูยำ สูตร 2919",
        "cal": 604
    },
    "stir_fried_squid_2920": {
        "name": "ปลาหมึกผัด สูตร 2920",
        "cal": 715
    },
    "stir_fried_rice_2921": {
        "name": "ข้าวผัด สูตร 2921",
        "cal": 245
    },
    "fried_beef_2922": {
        "name": "เนื้อทอด สูตร 2922",
        "cal": 771
    },
    "stir_fried_rice_2923": {
        "name": "ข้าวผัด สูตร 2923",
        "cal": 317
    },
    "steamed_fish_2924": {
        "name": "ปลานึ่ง สูตร 2924",
        "cal": 629
    },
    "boiled_soup_2925": {
        "name": "ซุปต้ม สูตร 2925",
        "cal": 559
    },
    "grilled_squid_2926": {
        "name": "ปลาหมึกย่าง สูตร 2926",
        "cal": 550
    },
    "fried_soup_2927": {
        "name": "ซุปทอด สูตร 2927",
        "cal": 441
    },
    "grilled_squid_2928": {
        "name": "ปลาหมึกย่าง สูตร 2928",
        "cal": 208
    },
    "fried_fish_2929": {
        "name": "ปลาทอด สูตร 2929",
        "cal": 93
    },
    "stir_fried_chicken_2930": {
        "name": "ไก่ผัด สูตร 2930",
        "cal": 107
    },
    "steamed_rice_2931": {
        "name": "ข้าวนึ่ง สูตร 2931",
        "cal": 57
    },
    "steamed_pork_2932": {
        "name": "หมูนึ่ง สูตร 2932",
        "cal": 143
    },
    "grilled_chicken_2933": {
        "name": "ไก่ย่าง สูตร 2933",
        "cal": 127
    },
    "spicy_shrimp_2934": {
        "name": "กุ้งยำ สูตร 2934",
        "cal": 40
    },
    "boiled_shrimp_2935": {
        "name": "กุ้งต้ม สูตร 2935",
        "cal": 249
    },
    "spicy_chicken_2936": {
        "name": "ไก่ยำ สูตร 2936",
        "cal": 249
    },
    "grilled_squid_2937": {
        "name": "ปลาหมึกย่าง สูตร 2937",
        "cal": 553
    },
    "fried_noodle_2938": {
        "name": "บะหมี่ทอด สูตร 2938",
        "cal": 452
    },
    "spicy_squid_2939": {
        "name": "ปลาหมึกยำ สูตร 2939",
        "cal": 636
    },
    "stir_fried_pork_2940": {
        "name": "หมูผัด สูตร 2940",
        "cal": 467
    },
    "stir_fried_rice_2941": {
        "name": "ข้าวผัด สูตร 2941",
        "cal": 518
    },
    "fried_chicken_2942": {
        "name": "ไก่ทอด สูตร 2942",
        "cal": 680
    },
    "stir_fried_rice_2943": {
        "name": "ข้าวผัด สูตร 2943",
        "cal": 278
    },
    "stir_fried_noodle_2944": {
        "name": "บะหมี่ผัด สูตร 2944",
        "cal": 367
    },
    "spicy_chicken_2945": {
        "name": "ไก่ยำ สูตร 2945",
        "cal": 708
    },
    "steamed_chicken_2946": {
        "name": "ไก่นึ่ง สูตร 2946",
        "cal": 564
    },
    "stir_fried_noodle_2947": {
        "name": "บะหมี่ผัด สูตร 2947",
        "cal": 113
    },
    "boiled_beef_2948": {
        "name": "เนื้อต้ม สูตร 2948",
        "cal": 604
    },
    "boiled_soup_2949": {
        "name": "ซุปต้ม สูตร 2949",
        "cal": 90
    },
    "boiled_shrimp_2950": {
        "name": "กุ้งต้ม สูตร 2950",
        "cal": 678
    },
    "boiled_chicken_2951": {
        "name": "ไก่ต้ม สูตร 2951",
        "cal": 488
    },
    "fried_fish_2952": {
        "name": "ปลาทอด สูตร 2952",
        "cal": 769
    },
    "spicy_shrimp_2953": {
        "name": "กุ้งยำ สูตร 2953",
        "cal": 196
    },
    "spicy_pork_2954": {
        "name": "หมูยำ สูตร 2954",
        "cal": 819
    },
    "grilled_soup_2955": {
        "name": "ซุปย่าง สูตร 2955",
        "cal": 316
    },
    "boiled_squid_2956": {
        "name": "ปลาหมึกต้ม สูตร 2956",
        "cal": 607
    },
    "stir_fried_rice_2957": {
        "name": "ข้าวผัด สูตร 2957",
        "cal": 210
    },
    "boiled_beef_2958": {
        "name": "เนื้อต้ม สูตร 2958",
        "cal": 346
    },
    "steamed_rice_2959": {
        "name": "ข้าวนึ่ง สูตร 2959",
        "cal": 464
    },
    "stir_fried_fish_2960": {
        "name": "ปลาผัด สูตร 2960",
        "cal": 748
    },
    "stir_fried_chicken_2961": {
        "name": "ไก่ผัด สูตร 2961",
        "cal": 834
    },
    "spicy_chicken_2962": {
        "name": "ไก่ยำ สูตร 2962",
        "cal": 230
    },
    "spicy_shrimp_2963": {
        "name": "กุ้งยำ สูตร 2963",
        "cal": 604
    },
    "steamed_noodle_2964": {
        "name": "บะหมี่นึ่ง สูตร 2964",
        "cal": 496
    },
    "stir_fried_noodle_2965": {
        "name": "บะหมี่ผัด สูตร 2965",
        "cal": 611
    },
    "boiled_rice_2966": {
        "name": "ข้าวต้ม สูตร 2966",
        "cal": 307
    },
    "boiled_chicken_2967": {
        "name": "ไก่ต้ม สูตร 2967",
        "cal": 331
    },
    "boiled_soup_2968": {
        "name": "ซุปต้ม สูตร 2968",
        "cal": 132
    },
    "boiled_squid_2969": {
        "name": "ปลาหมึกต้ม สูตร 2969",
        "cal": 343
    },
    "steamed_fish_2970": {
        "name": "ปลานึ่ง สูตร 2970",
        "cal": 392
    },
    "steamed_squid_2971": {
        "name": "ปลาหมึกนึ่ง สูตร 2971",
        "cal": 667
    },
    "stir_fried_fish_2972": {
        "name": "ปลาผัด สูตร 2972",
        "cal": 773
    },
    "fried_squid_2973": {
        "name": "ปลาหมึกทอด สูตร 2973",
        "cal": 75
    },
    "spicy_beef_2974": {
        "name": "เนื้อยำ สูตร 2974",
        "cal": 444
    },
    "grilled_noodle_2975": {
        "name": "บะหมี่ย่าง สูตร 2975",
        "cal": 542
    },
    "steamed_soup_2976": {
        "name": "ซุปนึ่ง สูตร 2976",
        "cal": 512
    },
    "grilled_soup_2977": {
        "name": "ซุปย่าง สูตร 2977",
        "cal": 674
    },
    "grilled_rice_2978": {
        "name": "ข้าวย่าง สูตร 2978",
        "cal": 65
    },
    "fried_squid_2979": {
        "name": "ปลาหมึกทอด สูตร 2979",
        "cal": 505
    },
    "spicy_beef_2980": {
        "name": "เนื้อยำ สูตร 2980",
        "cal": 213
    },
    "fried_shrimp_2981": {
        "name": "กุ้งทอด สูตร 2981",
        "cal": 367
    },
    "stir_fried_soup_2982": {
        "name": "ซุปผัด สูตร 2982",
        "cal": 631
    },
    "fried_shrimp_2983": {
        "name": "กุ้งทอด สูตร 2983",
        "cal": 120
    },
    "spicy_rice_2984": {
        "name": "ข้าวยำ สูตร 2984",
        "cal": 804
    },
    "boiled_noodle_2985": {
        "name": "บะหมี่ต้ม สูตร 2985",
        "cal": 518
    },
    "fried_pork_2986": {
        "name": "หมูทอด สูตร 2986",
        "cal": 184
    },
    "stir_fried_rice_2987": {
        "name": "ข้าวผัด สูตร 2987",
        "cal": 799
    },
    "steamed_shrimp_2988": {
        "name": "กุ้งนึ่ง สูตร 2988",
        "cal": 818
    },
    "spicy_pork_2989": {
        "name": "หมูยำ สูตร 2989",
        "cal": 434
    },
    "spicy_fish_2990": {
        "name": "ปลายำ สูตร 2990",
        "cal": 158
    },
    "steamed_soup_2991": {
        "name": "ซุปนึ่ง สูตร 2991",
        "cal": 77
    },
    "grilled_beef_2992": {
        "name": "เนื้อย่าง สูตร 2992",
        "cal": 107
    },
    "grilled_pork_2993": {
        "name": "หมูย่าง สูตร 2993",
        "cal": 226
    },
    "fried_chicken_2994": {
        "name": "ไก่ทอด สูตร 2994",
        "cal": 150
    },
    "stir_fried_squid_2995": {
        "name": "ปลาหมึกผัด สูตร 2995",
        "cal": 251
    },
    "fried_fish_2996": {
        "name": "ปลาทอด สูตร 2996",
        "cal": 802
    },
    "boiled_pork_2997": {
        "name": "หมูต้ม สูตร 2997",
        "cal": 355
    },
    "steamed_soup_2998": {
        "name": "ซุปนึ่ง สูตร 2998",
        "cal": 165
    },
    "spicy_pork_2999": {
        "name": "หมูยำ สูตร 2999",
        "cal": 639
    },
    "fried_soup_3000": {
        "name": "ซุปทอด สูตร 3000",
        "cal": 584
    },
    "spicy_noodle_3001": {
        "name": "บะหมี่ยำ สูตร 3001",
        "cal": 665
    },
    "steamed_rice_3002": {
        "name": "ข้าวนึ่ง สูตร 3002",
        "cal": 797
    },
    "grilled_pork_3003": {
        "name": "หมูย่าง สูตร 3003",
        "cal": 555
    },
    "steamed_beef_3004": {
        "name": "เนื้อนึ่ง สูตร 3004",
        "cal": 603
    },
    "stir_fried_beef_3005": {
        "name": "เนื้อผัด สูตร 3005",
        "cal": 46
    },
    "spicy_soup_3006": {
        "name": "ซุปยำ สูตร 3006",
        "cal": 163
    },
    "boiled_fish_3007": {
        "name": "ปลาต้ม สูตร 3007",
        "cal": 597
    },
    "grilled_beef_3008": {
        "name": "เนื้อย่าง สูตร 3008",
        "cal": 298
    },
    "grilled_squid_3009": {
        "name": "ปลาหมึกย่าง สูตร 3009",
        "cal": 779
    },
    "grilled_squid_3010": {
        "name": "ปลาหมึกย่าง สูตร 3010",
        "cal": 220
    },
    "fried_fish_3011": {
        "name": "ปลาทอด สูตร 3011",
        "cal": 591
    },
    "spicy_pork_3012": {
        "name": "หมูยำ สูตร 3012",
        "cal": 224
    },
    "stir_fried_squid_3013": {
        "name": "ปลาหมึกผัด สูตร 3013",
        "cal": 767
    },
    "stir_fried_soup_3014": {
        "name": "ซุปผัด สูตร 3014",
        "cal": 357
    },
    "fried_noodle_3015": {
        "name": "บะหมี่ทอด สูตร 3015",
        "cal": 411
    },
    "grilled_soup_3016": {
        "name": "ซุปย่าง สูตร 3016",
        "cal": 715
    },
    "stir_fried_beef_3017": {
        "name": "เนื้อผัด สูตร 3017",
        "cal": 26
    },
    "steamed_rice_3018": {
        "name": "ข้าวนึ่ง สูตร 3018",
        "cal": 700
    },
    "boiled_rice_3019": {
        "name": "ข้าวต้ม สูตร 3019",
        "cal": 495
    },
    "spicy_shrimp_3020": {
        "name": "กุ้งยำ สูตร 3020",
        "cal": 228
    },
    "stir_fried_chicken_3021": {
        "name": "ไก่ผัด สูตร 3021",
        "cal": 313
    },
    "steamed_noodle_3022": {
        "name": "บะหมี่นึ่ง สูตร 3022",
        "cal": 380
    },
    "spicy_noodle_3023": {
        "name": "บะหมี่ยำ สูตร 3023",
        "cal": 726
    },
    "grilled_rice_3024": {
        "name": "ข้าวย่าง สูตร 3024",
        "cal": 768
    },
    "grilled_beef_3025": {
        "name": "เนื้อย่าง สูตร 3025",
        "cal": 306
    },
    "fried_beef_3026": {
        "name": "เนื้อทอด สูตร 3026",
        "cal": 279
    },
    "fried_pork_3027": {
        "name": "หมูทอด สูตร 3027",
        "cal": 225
    },
    "fried_pork_3028": {
        "name": "หมูทอด สูตร 3028",
        "cal": 726
    },
    "grilled_noodle_3029": {
        "name": "บะหมี่ย่าง สูตร 3029",
        "cal": 107
    },
    "spicy_beef_3030": {
        "name": "เนื้อยำ สูตร 3030",
        "cal": 710
    },
    "spicy_squid_3031": {
        "name": "ปลาหมึกยำ สูตร 3031",
        "cal": 71
    },
    "spicy_pork_3032": {
        "name": "หมูยำ สูตร 3032",
        "cal": 525
    },
    "grilled_squid_3033": {
        "name": "ปลาหมึกย่าง สูตร 3033",
        "cal": 849
    },
    "grilled_fish_3034": {
        "name": "ปลาย่าง สูตร 3034",
        "cal": 387
    },
    "steamed_noodle_3035": {
        "name": "บะหมี่นึ่ง สูตร 3035",
        "cal": 692
    },
    "stir_fried_noodle_3036": {
        "name": "บะหมี่ผัด สูตร 3036",
        "cal": 552
    },
    "fried_shrimp_3037": {
        "name": "กุ้งทอด สูตร 3037",
        "cal": 356
    },
    "spicy_shrimp_3038": {
        "name": "กุ้งยำ สูตร 3038",
        "cal": 751
    },
    "steamed_rice_3039": {
        "name": "ข้าวนึ่ง สูตร 3039",
        "cal": 720
    },
    "grilled_rice_3040": {
        "name": "ข้าวย่าง สูตร 3040",
        "cal": 690
    },
    "steamed_chicken_3041": {
        "name": "ไก่นึ่ง สูตร 3041",
        "cal": 696
    },
    "steamed_shrimp_3042": {
        "name": "กุ้งนึ่ง สูตร 3042",
        "cal": 541
    },
    "steamed_soup_3043": {
        "name": "ซุปนึ่ง สูตร 3043",
        "cal": 182
    },
    "spicy_pork_3044": {
        "name": "หมูยำ สูตร 3044",
        "cal": 706
    },
    "boiled_beef_3045": {
        "name": "เนื้อต้ม สูตร 3045",
        "cal": 206
    },
    "boiled_chicken_3046": {
        "name": "ไก่ต้ม สูตร 3046",
        "cal": 102
    },
    "steamed_rice_3047": {
        "name": "ข้าวนึ่ง สูตร 3047",
        "cal": 537
    },
    "fried_rice_3048": {
        "name": "ข้าวทอด สูตร 3048",
        "cal": 788
    },
    "stir_fried_rice_3049": {
        "name": "ข้าวผัด สูตร 3049",
        "cal": 528
    },
    "boiled_beef_3050": {
        "name": "เนื้อต้ม สูตร 3050",
        "cal": 706
    },
    "steamed_noodle_3051": {
        "name": "บะหมี่นึ่ง สูตร 3051",
        "cal": 264
    },
    "fried_beef_3052": {
        "name": "เนื้อทอด สูตร 3052",
        "cal": 78
    },
    "fried_noodle_3053": {
        "name": "บะหมี่ทอด สูตร 3053",
        "cal": 797
    },
    "fried_fish_3054": {
        "name": "ปลาทอด สูตร 3054",
        "cal": 114
    },
    "boiled_chicken_3055": {
        "name": "ไก่ต้ม สูตร 3055",
        "cal": 247
    },
    "grilled_chicken_3056": {
        "name": "ไก่ย่าง สูตร 3056",
        "cal": 45
    },
    "grilled_beef_3057": {
        "name": "เนื้อย่าง สูตร 3057",
        "cal": 222
    },
    "stir_fried_fish_3058": {
        "name": "ปลาผัด สูตร 3058",
        "cal": 496
    },
    "stir_fried_pork_3059": {
        "name": "หมูผัด สูตร 3059",
        "cal": 158
    },
    "stir_fried_rice_3060": {
        "name": "ข้าวผัด สูตร 3060",
        "cal": 403
    },
    "spicy_noodle_3061": {
        "name": "บะหมี่ยำ สูตร 3061",
        "cal": 581
    },
    "boiled_pork_3062": {
        "name": "หมูต้ม สูตร 3062",
        "cal": 815
    },
    "grilled_pork_3063": {
        "name": "หมูย่าง สูตร 3063",
        "cal": 824
    },
    "stir_fried_beef_3064": {
        "name": "เนื้อผัด สูตร 3064",
        "cal": 549
    },
    "stir_fried_pork_3065": {
        "name": "หมูผัด สูตร 3065",
        "cal": 38
    },
    "spicy_soup_3066": {
        "name": "ซุปยำ สูตร 3066",
        "cal": 149
    },
    "fried_fish_3067": {
        "name": "ปลาทอด สูตร 3067",
        "cal": 733
    },
    "grilled_rice_3068": {
        "name": "ข้าวย่าง สูตร 3068",
        "cal": 444
    },
    "fried_squid_3069": {
        "name": "ปลาหมึกทอด สูตร 3069",
        "cal": 568
    },
    "stir_fried_rice_3070": {
        "name": "ข้าวผัด สูตร 3070",
        "cal": 99
    },
    "stir_fried_shrimp_3071": {
        "name": "กุ้งผัด สูตร 3071",
        "cal": 727
    },
    "grilled_beef_3072": {
        "name": "เนื้อย่าง สูตร 3072",
        "cal": 238
    },
    "spicy_shrimp_3073": {
        "name": "กุ้งยำ สูตร 3073",
        "cal": 539
    },
    "grilled_noodle_3074": {
        "name": "บะหมี่ย่าง สูตร 3074",
        "cal": 449
    },
    "grilled_beef_3075": {
        "name": "เนื้อย่าง สูตร 3075",
        "cal": 789
    },
    "spicy_beef_3076": {
        "name": "เนื้อยำ สูตร 3076",
        "cal": 405
    },
    "boiled_noodle_3077": {
        "name": "บะหมี่ต้ม สูตร 3077",
        "cal": 27
    },
    "fried_noodle_3078": {
        "name": "บะหมี่ทอด สูตร 3078",
        "cal": 685
    },
    "boiled_chicken_3079": {
        "name": "ไก่ต้ม สูตร 3079",
        "cal": 183
    },
    "boiled_pork_3080": {
        "name": "หมูต้ม สูตร 3080",
        "cal": 673
    },
    "grilled_shrimp_3081": {
        "name": "กุ้งย่าง สูตร 3081",
        "cal": 38
    },
    "boiled_soup_3082": {
        "name": "ซุปต้ม สูตร 3082",
        "cal": 488
    },
    "boiled_fish_3083": {
        "name": "ปลาต้ม สูตร 3083",
        "cal": 643
    },
    "fried_squid_3084": {
        "name": "ปลาหมึกทอด สูตร 3084",
        "cal": 810
    },
    "fried_fish_3085": {
        "name": "ปลาทอด สูตร 3085",
        "cal": 727
    },
    "grilled_shrimp_3086": {
        "name": "กุ้งย่าง สูตร 3086",
        "cal": 585
    },
    "spicy_noodle_3087": {
        "name": "บะหมี่ยำ สูตร 3087",
        "cal": 473
    },
    "grilled_shrimp_3088": {
        "name": "กุ้งย่าง สูตร 3088",
        "cal": 49
    },
    "steamed_rice_3089": {
        "name": "ข้าวนึ่ง สูตร 3089",
        "cal": 52
    },
    "grilled_soup_3090": {
        "name": "ซุปย่าง สูตร 3090",
        "cal": 680
    },
    "boiled_shrimp_3091": {
        "name": "กุ้งต้ม สูตร 3091",
        "cal": 597
    },
    "spicy_chicken_3092": {
        "name": "ไก่ยำ สูตร 3092",
        "cal": 104
    },
    "steamed_noodle_3093": {
        "name": "บะหมี่นึ่ง สูตร 3093",
        "cal": 489
    },
    "grilled_fish_3094": {
        "name": "ปลาย่าง สูตร 3094",
        "cal": 743
    },
    "grilled_rice_3095": {
        "name": "ข้าวย่าง สูตร 3095",
        "cal": 232
    },
    "grilled_shrimp_3096": {
        "name": "กุ้งย่าง สูตร 3096",
        "cal": 35
    },
    "spicy_fish_3097": {
        "name": "ปลายำ สูตร 3097",
        "cal": 798
    },
    "boiled_squid_3098": {
        "name": "ปลาหมึกต้ม สูตร 3098",
        "cal": 102
    },
    "steamed_shrimp_3099": {
        "name": "กุ้งนึ่ง สูตร 3099",
        "cal": 319
    },
    "fried_noodle_3100": {
        "name": "บะหมี่ทอด สูตร 3100",
        "cal": 707
    },
    "grilled_shrimp_3101": {
        "name": "กุ้งย่าง สูตร 3101",
        "cal": 393
    },
    "fried_chicken_3102": {
        "name": "ไก่ทอด สูตร 3102",
        "cal": 63
    },
    "steamed_pork_3103": {
        "name": "หมูนึ่ง สูตร 3103",
        "cal": 410
    },
    "grilled_rice_3104": {
        "name": "ข้าวย่าง สูตร 3104",
        "cal": 237
    },
    "grilled_soup_3105": {
        "name": "ซุปย่าง สูตร 3105",
        "cal": 352
    },
    "spicy_chicken_3106": {
        "name": "ไก่ยำ สูตร 3106",
        "cal": 94
    },
    "steamed_rice_3107": {
        "name": "ข้าวนึ่ง สูตร 3107",
        "cal": 53
    },
    "boiled_shrimp_3108": {
        "name": "กุ้งต้ม สูตร 3108",
        "cal": 302
    },
    "grilled_squid_3109": {
        "name": "ปลาหมึกย่าง สูตร 3109",
        "cal": 503
    },
    "boiled_noodle_3110": {
        "name": "บะหมี่ต้ม สูตร 3110",
        "cal": 180
    },
    "boiled_fish_3111": {
        "name": "ปลาต้ม สูตร 3111",
        "cal": 561
    },
    "spicy_chicken_3112": {
        "name": "ไก่ยำ สูตร 3112",
        "cal": 730
    },
    "fried_rice_3113": {
        "name": "ข้าวทอด สูตร 3113",
        "cal": 115
    },
    "stir_fried_noodle_3114": {
        "name": "บะหมี่ผัด สูตร 3114",
        "cal": 586
    },
    "fried_soup_3115": {
        "name": "ซุปทอด สูตร 3115",
        "cal": 737
    },
    "stir_fried_pork_3116": {
        "name": "หมูผัด สูตร 3116",
        "cal": 570
    },
    "fried_chicken_3117": {
        "name": "ไก่ทอด สูตร 3117",
        "cal": 182
    },
    "boiled_chicken_3118": {
        "name": "ไก่ต้ม สูตร 3118",
        "cal": 753
    },
    "boiled_squid_3119": {
        "name": "ปลาหมึกต้ม สูตร 3119",
        "cal": 696
    },
    "steamed_soup_3120": {
        "name": "ซุปนึ่ง สูตร 3120",
        "cal": 192
    },
    "spicy_noodle_3121": {
        "name": "บะหมี่ยำ สูตร 3121",
        "cal": 179
    },
    "fried_pork_3122": {
        "name": "หมูทอด สูตร 3122",
        "cal": 252
    },
    "fried_squid_3123": {
        "name": "ปลาหมึกทอด สูตร 3123",
        "cal": 524
    },
    "grilled_beef_3124": {
        "name": "เนื้อย่าง สูตร 3124",
        "cal": 705
    },
    "boiled_beef_3125": {
        "name": "เนื้อต้ม สูตร 3125",
        "cal": 402
    },
    "stir_fried_shrimp_3126": {
        "name": "กุ้งผัด สูตร 3126",
        "cal": 653
    },
    "spicy_chicken_3127": {
        "name": "ไก่ยำ สูตร 3127",
        "cal": 700
    },
    "fried_pork_3128": {
        "name": "หมูทอด สูตร 3128",
        "cal": 242
    },
    "steamed_soup_3129": {
        "name": "ซุปนึ่ง สูตร 3129",
        "cal": 36
    },
    "steamed_chicken_3130": {
        "name": "ไก่นึ่ง สูตร 3130",
        "cal": 696
    },
    "grilled_squid_3131": {
        "name": "ปลาหมึกย่าง สูตร 3131",
        "cal": 698
    },
    "spicy_rice_3132": {
        "name": "ข้าวยำ สูตร 3132",
        "cal": 108
    },
    "fried_shrimp_3133": {
        "name": "กุ้งทอด สูตร 3133",
        "cal": 312
    },
    "grilled_pork_3134": {
        "name": "หมูย่าง สูตร 3134",
        "cal": 253
    },
    "grilled_squid_3135": {
        "name": "ปลาหมึกย่าง สูตร 3135",
        "cal": 256
    },
    "stir_fried_noodle_3136": {
        "name": "บะหมี่ผัด สูตร 3136",
        "cal": 441
    },
    "spicy_rice_3137": {
        "name": "ข้าวยำ สูตร 3137",
        "cal": 477
    },
    "steamed_fish_3138": {
        "name": "ปลานึ่ง สูตร 3138",
        "cal": 519
    },
    "stir_fried_pork_3139": {
        "name": "หมูผัด สูตร 3139",
        "cal": 130
    },
    "stir_fried_shrimp_3140": {
        "name": "กุ้งผัด สูตร 3140",
        "cal": 362
    },
    "fried_pork_3141": {
        "name": "หมูทอด สูตร 3141",
        "cal": 724
    },
    "boiled_fish_3142": {
        "name": "ปลาต้ม สูตร 3142",
        "cal": 97
    },
    "spicy_chicken_3143": {
        "name": "ไก่ยำ สูตร 3143",
        "cal": 668
    },
    "steamed_pork_3144": {
        "name": "หมูนึ่ง สูตร 3144",
        "cal": 472
    },
    "spicy_soup_3145": {
        "name": "ซุปยำ สูตร 3145",
        "cal": 337
    },
    "grilled_beef_3146": {
        "name": "เนื้อย่าง สูตร 3146",
        "cal": 798
    },
    "stir_fried_soup_3147": {
        "name": "ซุปผัด สูตร 3147",
        "cal": 633
    },
    "grilled_rice_3148": {
        "name": "ข้าวย่าง สูตร 3148",
        "cal": 87
    },
    "boiled_rice_3149": {
        "name": "ข้าวต้ม สูตร 3149",
        "cal": 640
    },
    "fried_soup_3150": {
        "name": "ซุปทอด สูตร 3150",
        "cal": 770
    },
    "spicy_shrimp_3151": {
        "name": "กุ้งยำ สูตร 3151",
        "cal": 238
    },
    "steamed_soup_3152": {
        "name": "ซุปนึ่ง สูตร 3152",
        "cal": 186
    },
    "fried_rice_3153": {
        "name": "ข้าวทอด สูตร 3153",
        "cal": 703
    },
    "steamed_shrimp_3154": {
        "name": "กุ้งนึ่ง สูตร 3154",
        "cal": 800
    },
    "grilled_soup_3155": {
        "name": "ซุปย่าง สูตร 3155",
        "cal": 723
    },
    "stir_fried_pork_3156": {
        "name": "หมูผัด สูตร 3156",
        "cal": 600
    },
    "grilled_noodle_3157": {
        "name": "บะหมี่ย่าง สูตร 3157",
        "cal": 473
    },
    "grilled_beef_3158": {
        "name": "เนื้อย่าง สูตร 3158",
        "cal": 607
    },
    "boiled_pork_3159": {
        "name": "หมูต้ม สูตร 3159",
        "cal": 829
    },
    "stir_fried_shrimp_3160": {
        "name": "กุ้งผัด สูตร 3160",
        "cal": 291
    },
    "stir_fried_noodle_3161": {
        "name": "บะหมี่ผัด สูตร 3161",
        "cal": 776
    },
    "steamed_soup_3162": {
        "name": "ซุปนึ่ง สูตร 3162",
        "cal": 369
    },
    "steamed_rice_3163": {
        "name": "ข้าวนึ่ง สูตร 3163",
        "cal": 586
    },
    "boiled_rice_3164": {
        "name": "ข้าวต้ม สูตร 3164",
        "cal": 629
    },
    "steamed_shrimp_3165": {
        "name": "กุ้งนึ่ง สูตร 3165",
        "cal": 782
    },
    "stir_fried_beef_3166": {
        "name": "เนื้อผัด สูตร 3166",
        "cal": 170
    },
    "boiled_noodle_3167": {
        "name": "บะหมี่ต้ม สูตร 3167",
        "cal": 682
    },
    "steamed_noodle_3168": {
        "name": "บะหมี่นึ่ง สูตร 3168",
        "cal": 380
    },
    "stir_fried_rice_3169": {
        "name": "ข้าวผัด สูตร 3169",
        "cal": 815
    },
    "stir_fried_shrimp_3170": {
        "name": "กุ้งผัด สูตร 3170",
        "cal": 641
    },
    "fried_squid_3171": {
        "name": "ปลาหมึกทอด สูตร 3171",
        "cal": 363
    },
    "boiled_soup_3172": {
        "name": "ซุปต้ม สูตร 3172",
        "cal": 67
    },
    "spicy_pork_3173": {
        "name": "หมูยำ สูตร 3173",
        "cal": 415
    },
    "grilled_soup_3174": {
        "name": "ซุปย่าง สูตร 3174",
        "cal": 824
    },
    "boiled_rice_3175": {
        "name": "ข้าวต้ม สูตร 3175",
        "cal": 454
    },
    "fried_fish_3176": {
        "name": "ปลาทอด สูตร 3176",
        "cal": 703
    },
    "spicy_noodle_3177": {
        "name": "บะหมี่ยำ สูตร 3177",
        "cal": 232
    },
    "grilled_fish_3178": {
        "name": "ปลาย่าง สูตร 3178",
        "cal": 528
    },
    "fried_pork_3179": {
        "name": "หมูทอด สูตร 3179",
        "cal": 109
    },
    "fried_shrimp_3180": {
        "name": "กุ้งทอด สูตร 3180",
        "cal": 295
    },
    "boiled_pork_3181": {
        "name": "หมูต้ม สูตร 3181",
        "cal": 681
    },
    "grilled_soup_3182": {
        "name": "ซุปย่าง สูตร 3182",
        "cal": 637
    },
    "boiled_soup_3183": {
        "name": "ซุปต้ม สูตร 3183",
        "cal": 617
    },
    "fried_rice_3184": {
        "name": "ข้าวทอด สูตร 3184",
        "cal": 745
    },
    "grilled_squid_3185": {
        "name": "ปลาหมึกย่าง สูตร 3185",
        "cal": 272
    },
    "boiled_beef_3186": {
        "name": "เนื้อต้ม สูตร 3186",
        "cal": 448
    },
    "boiled_fish_3187": {
        "name": "ปลาต้ม สูตร 3187",
        "cal": 797
    },
    "steamed_chicken_3188": {
        "name": "ไก่นึ่ง สูตร 3188",
        "cal": 343
    },
    "spicy_chicken_3189": {
        "name": "ไก่ยำ สูตร 3189",
        "cal": 717
    },
    "fried_rice_3190": {
        "name": "ข้าวทอด สูตร 3190",
        "cal": 147
    },
    "stir_fried_soup_3191": {
        "name": "ซุปผัด สูตร 3191",
        "cal": 268
    },
    "fried_fish_3192": {
        "name": "ปลาทอด สูตร 3192",
        "cal": 311
    },
    "grilled_shrimp_3193": {
        "name": "กุ้งย่าง สูตร 3193",
        "cal": 373
    },
    "spicy_pork_3194": {
        "name": "หมูยำ สูตร 3194",
        "cal": 395
    },
    "grilled_pork_3195": {
        "name": "หมูย่าง สูตร 3195",
        "cal": 317
    },
    "grilled_noodle_3196": {
        "name": "บะหมี่ย่าง สูตร 3196",
        "cal": 89
    },
    "steamed_beef_3197": {
        "name": "เนื้อนึ่ง สูตร 3197",
        "cal": 585
    },
    "boiled_shrimp_3198": {
        "name": "กุ้งต้ม สูตร 3198",
        "cal": 613
    },
    "spicy_beef_3199": {
        "name": "เนื้อยำ สูตร 3199",
        "cal": 783
    },
    "fried_pork_3200": {
        "name": "หมูทอด สูตร 3200",
        "cal": 279
    },
    "boiled_pork_3201": {
        "name": "หมูต้ม สูตร 3201",
        "cal": 714
    },
    "steamed_squid_3202": {
        "name": "ปลาหมึกนึ่ง สูตร 3202",
        "cal": 787
    },
    "steamed_shrimp_3203": {
        "name": "กุ้งนึ่ง สูตร 3203",
        "cal": 538
    },
    "stir_fried_shrimp_3204": {
        "name": "กุ้งผัด สูตร 3204",
        "cal": 96
    },
    "grilled_chicken_3205": {
        "name": "ไก่ย่าง สูตร 3205",
        "cal": 192
    },
    "grilled_shrimp_3206": {
        "name": "กุ้งย่าง สูตร 3206",
        "cal": 576
    },
    "spicy_fish_3207": {
        "name": "ปลายำ สูตร 3207",
        "cal": 168
    },
    "stir_fried_shrimp_3208": {
        "name": "กุ้งผัด สูตร 3208",
        "cal": 623
    },
    "steamed_chicken_3209": {
        "name": "ไก่นึ่ง สูตร 3209",
        "cal": 625
    },
    "grilled_beef_3210": {
        "name": "เนื้อย่าง สูตร 3210",
        "cal": 705
    },
    "steamed_soup_3211": {
        "name": "ซุปนึ่ง สูตร 3211",
        "cal": 831
    },
    "grilled_shrimp_3212": {
        "name": "กุ้งย่าง สูตร 3212",
        "cal": 54
    },
    "stir_fried_squid_3213": {
        "name": "ปลาหมึกผัด สูตร 3213",
        "cal": 504
    },
    "grilled_squid_3214": {
        "name": "ปลาหมึกย่าง สูตร 3214",
        "cal": 793
    },
    "boiled_fish_3215": {
        "name": "ปลาต้ม สูตร 3215",
        "cal": 552
    },
    "stir_fried_rice_3216": {
        "name": "ข้าวผัด สูตร 3216",
        "cal": 83
    },
    "boiled_chicken_3217": {
        "name": "ไก่ต้ม สูตร 3217",
        "cal": 737
    },
    "stir_fried_noodle_3218": {
        "name": "บะหมี่ผัด สูตร 3218",
        "cal": 242
    },
    "spicy_beef_3219": {
        "name": "เนื้อยำ สูตร 3219",
        "cal": 794
    },
    "steamed_noodle_3220": {
        "name": "บะหมี่นึ่ง สูตร 3220",
        "cal": 361
    },
    "steamed_rice_3221": {
        "name": "ข้าวนึ่ง สูตร 3221",
        "cal": 320
    },
    "grilled_fish_3222": {
        "name": "ปลาย่าง สูตร 3222",
        "cal": 40
    },
    "boiled_soup_3223": {
        "name": "ซุปต้ม สูตร 3223",
        "cal": 554
    },
    "spicy_fish_3224": {
        "name": "ปลายำ สูตร 3224",
        "cal": 676
    },
    "steamed_noodle_3225": {
        "name": "บะหมี่นึ่ง สูตร 3225",
        "cal": 62
    },
    "spicy_noodle_3226": {
        "name": "บะหมี่ยำ สูตร 3226",
        "cal": 516
    },
    "grilled_shrimp_3227": {
        "name": "กุ้งย่าง สูตร 3227",
        "cal": 780
    },
    "boiled_fish_3228": {
        "name": "ปลาต้ม สูตร 3228",
        "cal": 413
    },
    "boiled_rice_3229": {
        "name": "ข้าวต้ม สูตร 3229",
        "cal": 164
    },
    "steamed_squid_3230": {
        "name": "ปลาหมึกนึ่ง สูตร 3230",
        "cal": 613
    },
    "steamed_soup_3231": {
        "name": "ซุปนึ่ง สูตร 3231",
        "cal": 302
    },
    "fried_squid_3232": {
        "name": "ปลาหมึกทอด สูตร 3232",
        "cal": 78
    },
    "fried_beef_3233": {
        "name": "เนื้อทอด สูตร 3233",
        "cal": 815
    },
    "spicy_rice_3234": {
        "name": "ข้าวยำ สูตร 3234",
        "cal": 524
    },
    "grilled_noodle_3235": {
        "name": "บะหมี่ย่าง สูตร 3235",
        "cal": 701
    },
    "fried_rice_3236": {
        "name": "ข้าวทอด สูตร 3236",
        "cal": 325
    },
    "boiled_rice_3237": {
        "name": "ข้าวต้ม สูตร 3237",
        "cal": 87
    },
    "steamed_shrimp_3238": {
        "name": "กุ้งนึ่ง สูตร 3238",
        "cal": 266
    },
    "boiled_soup_3239": {
        "name": "ซุปต้ม สูตร 3239",
        "cal": 808
    },
    "steamed_pork_3240": {
        "name": "หมูนึ่ง สูตร 3240",
        "cal": 782
    },
    "fried_squid_3241": {
        "name": "ปลาหมึกทอด สูตร 3241",
        "cal": 563
    },
    "grilled_rice_3242": {
        "name": "ข้าวย่าง สูตร 3242",
        "cal": 436
    },
    "grilled_shrimp_3243": {
        "name": "กุ้งย่าง สูตร 3243",
        "cal": 629
    },
    "stir_fried_noodle_3244": {
        "name": "บะหมี่ผัด สูตร 3244",
        "cal": 107
    },
    "spicy_squid_3245": {
        "name": "ปลาหมึกยำ สูตร 3245",
        "cal": 113
    },
    "boiled_soup_3246": {
        "name": "ซุปต้ม สูตร 3246",
        "cal": 272
    },
    "steamed_noodle_3247": {
        "name": "บะหมี่นึ่ง สูตร 3247",
        "cal": 356
    },
    "steamed_soup_3248": {
        "name": "ซุปนึ่ง สูตร 3248",
        "cal": 340
    },
    "spicy_soup_3249": {
        "name": "ซุปยำ สูตร 3249",
        "cal": 255
    },
    "steamed_shrimp_3250": {
        "name": "กุ้งนึ่ง สูตร 3250",
        "cal": 257
    },
    "fried_squid_3251": {
        "name": "ปลาหมึกทอด สูตร 3251",
        "cal": 771
    },
    "boiled_shrimp_3252": {
        "name": "กุ้งต้ม สูตร 3252",
        "cal": 135
    },
    "fried_soup_3253": {
        "name": "ซุปทอด สูตร 3253",
        "cal": 512
    },
    "stir_fried_shrimp_3254": {
        "name": "กุ้งผัด สูตร 3254",
        "cal": 411
    },
    "stir_fried_chicken_3255": {
        "name": "ไก่ผัด สูตร 3255",
        "cal": 121
    },
    "fried_shrimp_3256": {
        "name": "กุ้งทอด สูตร 3256",
        "cal": 32
    },
    "grilled_shrimp_3257": {
        "name": "กุ้งย่าง สูตร 3257",
        "cal": 166
    },
    "boiled_rice_3258": {
        "name": "ข้าวต้ม สูตร 3258",
        "cal": 584
    },
    "fried_fish_3259": {
        "name": "ปลาทอด สูตร 3259",
        "cal": 331
    },
    "grilled_noodle_3260": {
        "name": "บะหมี่ย่าง สูตร 3260",
        "cal": 721
    },
    "stir_fried_beef_3261": {
        "name": "เนื้อผัด สูตร 3261",
        "cal": 813
    },
    "spicy_pork_3262": {
        "name": "หมูยำ สูตร 3262",
        "cal": 131
    },
    "fried_rice_3263": {
        "name": "ข้าวทอด สูตร 3263",
        "cal": 232
    },
    "fried_shrimp_3264": {
        "name": "กุ้งทอด สูตร 3264",
        "cal": 156
    },
    "spicy_rice_3265": {
        "name": "ข้าวยำ สูตร 3265",
        "cal": 694
    },
    "stir_fried_squid_3266": {
        "name": "ปลาหมึกผัด สูตร 3266",
        "cal": 70
    },
    "stir_fried_fish_3267": {
        "name": "ปลาผัด สูตร 3267",
        "cal": 197
    },
    "fried_soup_3268": {
        "name": "ซุปทอด สูตร 3268",
        "cal": 754
    },
    "stir_fried_shrimp_3269": {
        "name": "กุ้งผัด สูตร 3269",
        "cal": 766
    },
    "steamed_squid_3270": {
        "name": "ปลาหมึกนึ่ง สูตร 3270",
        "cal": 59
    },
    "stir_fried_noodle_3271": {
        "name": "บะหมี่ผัด สูตร 3271",
        "cal": 366
    },
    "steamed_noodle_3272": {
        "name": "บะหมี่นึ่ง สูตร 3272",
        "cal": 226
    },
    "grilled_beef_3273": {
        "name": "เนื้อย่าง สูตร 3273",
        "cal": 186
    },
    "spicy_squid_3274": {
        "name": "ปลาหมึกยำ สูตร 3274",
        "cal": 102
    },
    "spicy_rice_3275": {
        "name": "ข้าวยำ สูตร 3275",
        "cal": 129
    },
    "boiled_shrimp_3276": {
        "name": "กุ้งต้ม สูตร 3276",
        "cal": 113
    },
    "stir_fried_shrimp_3277": {
        "name": "กุ้งผัด สูตร 3277",
        "cal": 211
    },
    "steamed_beef_3278": {
        "name": "เนื้อนึ่ง สูตร 3278",
        "cal": 480
    },
    "spicy_chicken_3279": {
        "name": "ไก่ยำ สูตร 3279",
        "cal": 72
    },
    "fried_squid_3280": {
        "name": "ปลาหมึกทอด สูตร 3280",
        "cal": 670
    },
    "steamed_noodle_3281": {
        "name": "บะหมี่นึ่ง สูตร 3281",
        "cal": 599
    },
    "boiled_soup_3282": {
        "name": "ซุปต้ม สูตร 3282",
        "cal": 442
    },
    "grilled_shrimp_3283": {
        "name": "กุ้งย่าง สูตร 3283",
        "cal": 215
    },
    "fried_beef_3284": {
        "name": "เนื้อทอด สูตร 3284",
        "cal": 509
    },
    "fried_squid_3285": {
        "name": "ปลาหมึกทอด สูตร 3285",
        "cal": 686
    },
    "steamed_noodle_3286": {
        "name": "บะหมี่นึ่ง สูตร 3286",
        "cal": 456
    },
    "spicy_soup_3287": {
        "name": "ซุปยำ สูตร 3287",
        "cal": 511
    },
    "steamed_rice_3288": {
        "name": "ข้าวนึ่ง สูตร 3288",
        "cal": 841
    },
    "spicy_shrimp_3289": {
        "name": "กุ้งยำ สูตร 3289",
        "cal": 121
    },
    "stir_fried_fish_3290": {
        "name": "ปลาผัด สูตร 3290",
        "cal": 150
    },
    "grilled_shrimp_3291": {
        "name": "กุ้งย่าง สูตร 3291",
        "cal": 783
    },
    "steamed_beef_3292": {
        "name": "เนื้อนึ่ง สูตร 3292",
        "cal": 736
    },
    "steamed_fish_3293": {
        "name": "ปลานึ่ง สูตร 3293",
        "cal": 542
    },
    "boiled_rice_3294": {
        "name": "ข้าวต้ม สูตร 3294",
        "cal": 208
    },
    "stir_fried_rice_3295": {
        "name": "ข้าวผัด สูตร 3295",
        "cal": 811
    },
    "spicy_squid_3296": {
        "name": "ปลาหมึกยำ สูตร 3296",
        "cal": 309
    },
    "grilled_chicken_3297": {
        "name": "ไก่ย่าง สูตร 3297",
        "cal": 750
    },
    "boiled_noodle_3298": {
        "name": "บะหมี่ต้ม สูตร 3298",
        "cal": 454
    },
    "boiled_soup_3299": {
        "name": "ซุปต้ม สูตร 3299",
        "cal": 59
    },
    "boiled_fish_3300": {
        "name": "ปลาต้ม สูตร 3300",
        "cal": 625
    },
    "steamed_beef_3301": {
        "name": "เนื้อนึ่ง สูตร 3301",
        "cal": 74
    },
    "fried_shrimp_3302": {
        "name": "กุ้งทอด สูตร 3302",
        "cal": 592
    },
    "grilled_fish_3303": {
        "name": "ปลาย่าง สูตร 3303",
        "cal": 591
    },
    "grilled_chicken_3304": {
        "name": "ไก่ย่าง สูตร 3304",
        "cal": 288
    },
    "boiled_fish_3305": {
        "name": "ปลาต้ม สูตร 3305",
        "cal": 353
    },
    "stir_fried_fish_3306": {
        "name": "ปลาผัด สูตร 3306",
        "cal": 420
    },
    "boiled_chicken_3307": {
        "name": "ไก่ต้ม สูตร 3307",
        "cal": 468
    },
    "steamed_squid_3308": {
        "name": "ปลาหมึกนึ่ง สูตร 3308",
        "cal": 637
    },
    "grilled_pork_3309": {
        "name": "หมูย่าง สูตร 3309",
        "cal": 772
    },
    "stir_fried_noodle_3310": {
        "name": "บะหมี่ผัด สูตร 3310",
        "cal": 725
    },
    "grilled_rice_3311": {
        "name": "ข้าวย่าง สูตร 3311",
        "cal": 261
    },
    "steamed_fish_3312": {
        "name": "ปลานึ่ง สูตร 3312",
        "cal": 367
    },
    "spicy_rice_3313": {
        "name": "ข้าวยำ สูตร 3313",
        "cal": 393
    },
    "stir_fried_soup_3314": {
        "name": "ซุปผัด สูตร 3314",
        "cal": 583
    },
    "steamed_squid_3315": {
        "name": "ปลาหมึกนึ่ง สูตร 3315",
        "cal": 764
    },
    "spicy_soup_3316": {
        "name": "ซุปยำ สูตร 3316",
        "cal": 321
    },
    "boiled_beef_3317": {
        "name": "เนื้อต้ม สูตร 3317",
        "cal": 334
    },
    "grilled_soup_3318": {
        "name": "ซุปย่าง สูตร 3318",
        "cal": 163
    },
    "fried_noodle_3319": {
        "name": "บะหมี่ทอด สูตร 3319",
        "cal": 708
    },
    "fried_rice_3320": {
        "name": "ข้าวทอด สูตร 3320",
        "cal": 314
    },
    "fried_squid_3321": {
        "name": "ปลาหมึกทอด สูตร 3321",
        "cal": 76
    },
    "spicy_noodle_3322": {
        "name": "บะหมี่ยำ สูตร 3322",
        "cal": 488
    },
    "steamed_noodle_3323": {
        "name": "บะหมี่นึ่ง สูตร 3323",
        "cal": 375
    },
    "steamed_rice_3324": {
        "name": "ข้าวนึ่ง สูตร 3324",
        "cal": 262
    },
    "fried_noodle_3325": {
        "name": "บะหมี่ทอด สูตร 3325",
        "cal": 331
    },
    "fried_pork_3326": {
        "name": "หมูทอด สูตร 3326",
        "cal": 290
    },
    "grilled_rice_3327": {
        "name": "ข้าวย่าง สูตร 3327",
        "cal": 661
    },
    "steamed_noodle_3328": {
        "name": "บะหมี่นึ่ง สูตร 3328",
        "cal": 155
    },
    "grilled_soup_3329": {
        "name": "ซุปย่าง สูตร 3329",
        "cal": 822
    },
    "boiled_pork_3330": {
        "name": "หมูต้ม สูตร 3330",
        "cal": 629
    },
    "steamed_shrimp_3331": {
        "name": "กุ้งนึ่ง สูตร 3331",
        "cal": 121
    },
    "steamed_beef_3332": {
        "name": "เนื้อนึ่ง สูตร 3332",
        "cal": 282
    },
    "boiled_rice_3333": {
        "name": "ข้าวต้ม สูตร 3333",
        "cal": 188
    },
    "steamed_squid_3334": {
        "name": "ปลาหมึกนึ่ง สูตร 3334",
        "cal": 492
    },
    "boiled_fish_3335": {
        "name": "ปลาต้ม สูตร 3335",
        "cal": 132
    },
    "fried_rice_3336": {
        "name": "ข้าวทอด สูตร 3336",
        "cal": 502
    },
    "stir_fried_shrimp_3337": {
        "name": "กุ้งผัด สูตร 3337",
        "cal": 722
    },
    "grilled_chicken_3338": {
        "name": "ไก่ย่าง สูตร 3338",
        "cal": 296
    },
    "steamed_soup_3339": {
        "name": "ซุปนึ่ง สูตร 3339",
        "cal": 464
    },
    "steamed_rice_3340": {
        "name": "ข้าวนึ่ง สูตร 3340",
        "cal": 397
    },
    "steamed_pork_3341": {
        "name": "หมูนึ่ง สูตร 3341",
        "cal": 100
    },
    "steamed_squid_3342": {
        "name": "ปลาหมึกนึ่ง สูตร 3342",
        "cal": 724
    },
    "steamed_beef_3343": {
        "name": "เนื้อนึ่ง สูตร 3343",
        "cal": 242
    },
    "stir_fried_pork_3344": {
        "name": "หมูผัด สูตร 3344",
        "cal": 693
    },
    "boiled_soup_3345": {
        "name": "ซุปต้ม สูตร 3345",
        "cal": 730
    },
    "boiled_soup_3346": {
        "name": "ซุปต้ม สูตร 3346",
        "cal": 707
    },
    "stir_fried_pork_3347": {
        "name": "หมูผัด สูตร 3347",
        "cal": 505
    },
    "spicy_beef_3348": {
        "name": "เนื้อยำ สูตร 3348",
        "cal": 313
    },
    "steamed_shrimp_3349": {
        "name": "กุ้งนึ่ง สูตร 3349",
        "cal": 372
    },
    "grilled_squid_3350": {
        "name": "ปลาหมึกย่าง สูตร 3350",
        "cal": 568
    },
    "fried_soup_3351": {
        "name": "ซุปทอด สูตร 3351",
        "cal": 462
    },
    "boiled_rice_3352": {
        "name": "ข้าวต้ม สูตร 3352",
        "cal": 399
    },
    "stir_fried_beef_3353": {
        "name": "เนื้อผัด สูตร 3353",
        "cal": 850
    },
    "fried_chicken_3354": {
        "name": "ไก่ทอด สูตร 3354",
        "cal": 312
    },
    "boiled_chicken_3355": {
        "name": "ไก่ต้ม สูตร 3355",
        "cal": 516
    },
    "fried_rice_3356": {
        "name": "ข้าวทอด สูตร 3356",
        "cal": 722
    },
    "steamed_chicken_3357": {
        "name": "ไก่นึ่ง สูตร 3357",
        "cal": 565
    },
    "fried_shrimp_3358": {
        "name": "กุ้งทอด สูตร 3358",
        "cal": 737
    },
    "steamed_beef_3359": {
        "name": "เนื้อนึ่ง สูตร 3359",
        "cal": 637
    },
    "steamed_soup_3360": {
        "name": "ซุปนึ่ง สูตร 3360",
        "cal": 417
    },
    "boiled_rice_3361": {
        "name": "ข้าวต้ม สูตร 3361",
        "cal": 388
    },
    "fried_fish_3362": {
        "name": "ปลาทอด สูตร 3362",
        "cal": 565
    },
    "steamed_soup_3363": {
        "name": "ซุปนึ่ง สูตร 3363",
        "cal": 597
    },
    "stir_fried_chicken_3364": {
        "name": "ไก่ผัด สูตร 3364",
        "cal": 479
    },
    "fried_fish_3365": {
        "name": "ปลาทอด สูตร 3365",
        "cal": 549
    },
    "grilled_fish_3366": {
        "name": "ปลาย่าง สูตร 3366",
        "cal": 598
    },
    "stir_fried_squid_3367": {
        "name": "ปลาหมึกผัด สูตร 3367",
        "cal": 846
    },
    "fried_chicken_3368": {
        "name": "ไก่ทอด สูตร 3368",
        "cal": 510
    },
    "spicy_fish_3369": {
        "name": "ปลายำ สูตร 3369",
        "cal": 256
    },
    "fried_chicken_3370": {
        "name": "ไก่ทอด สูตร 3370",
        "cal": 434
    },
    "spicy_chicken_3371": {
        "name": "ไก่ยำ สูตร 3371",
        "cal": 385
    },
    "fried_soup_3372": {
        "name": "ซุปทอด สูตร 3372",
        "cal": 531
    },
    "spicy_pork_3373": {
        "name": "หมูยำ สูตร 3373",
        "cal": 791
    },
    "spicy_pork_3374": {
        "name": "หมูยำ สูตร 3374",
        "cal": 460
    },
    "grilled_noodle_3375": {
        "name": "บะหมี่ย่าง สูตร 3375",
        "cal": 780
    },
    "fried_beef_3376": {
        "name": "เนื้อทอด สูตร 3376",
        "cal": 48
    },
    "steamed_beef_3377": {
        "name": "เนื้อนึ่ง สูตร 3377",
        "cal": 555
    },
    "boiled_beef_3378": {
        "name": "เนื้อต้ม สูตร 3378",
        "cal": 510
    },
    "fried_beef_3379": {
        "name": "เนื้อทอด สูตร 3379",
        "cal": 625
    },
    "boiled_noodle_3380": {
        "name": "บะหมี่ต้ม สูตร 3380",
        "cal": 284
    },
    "spicy_noodle_3381": {
        "name": "บะหมี่ยำ สูตร 3381",
        "cal": 760
    },
    "grilled_squid_3382": {
        "name": "ปลาหมึกย่าง สูตร 3382",
        "cal": 354
    },
    "fried_noodle_3383": {
        "name": "บะหมี่ทอด สูตร 3383",
        "cal": 560
    },
    "steamed_soup_3384": {
        "name": "ซุปนึ่ง สูตร 3384",
        "cal": 485
    },
    "stir_fried_pork_3385": {
        "name": "หมูผัด สูตร 3385",
        "cal": 686
    },
    "steamed_beef_3386": {
        "name": "เนื้อนึ่ง สูตร 3386",
        "cal": 408
    },
    "spicy_fish_3387": {
        "name": "ปลายำ สูตร 3387",
        "cal": 69
    },
    "steamed_shrimp_3388": {
        "name": "กุ้งนึ่ง สูตร 3388",
        "cal": 78
    },
    "steamed_chicken_3389": {
        "name": "ไก่นึ่ง สูตร 3389",
        "cal": 558
    },
    "boiled_pork_3390": {
        "name": "หมูต้ม สูตร 3390",
        "cal": 627
    },
    "stir_fried_squid_3391": {
        "name": "ปลาหมึกผัด สูตร 3391",
        "cal": 800
    },
    "spicy_rice_3392": {
        "name": "ข้าวยำ สูตร 3392",
        "cal": 258
    },
    "grilled_fish_3393": {
        "name": "ปลาย่าง สูตร 3393",
        "cal": 406
    },
    "boiled_chicken_3394": {
        "name": "ไก่ต้ม สูตร 3394",
        "cal": 342
    },
    "fried_soup_3395": {
        "name": "ซุปทอด สูตร 3395",
        "cal": 847
    },
    "grilled_beef_3396": {
        "name": "เนื้อย่าง สูตร 3396",
        "cal": 441
    },
    "steamed_shrimp_3397": {
        "name": "กุ้งนึ่ง สูตร 3397",
        "cal": 787
    },
    "grilled_fish_3398": {
        "name": "ปลาย่าง สูตร 3398",
        "cal": 472
    },
    "boiled_squid_3399": {
        "name": "ปลาหมึกต้ม สูตร 3399",
        "cal": 625
    },
    "stir_fried_noodle_3400": {
        "name": "บะหมี่ผัด สูตร 3400",
        "cal": 296
    },
    "spicy_soup_3401": {
        "name": "ซุปยำ สูตร 3401",
        "cal": 114
    },
    "boiled_shrimp_3402": {
        "name": "กุ้งต้ม สูตร 3402",
        "cal": 156
    },
    "grilled_shrimp_3403": {
        "name": "กุ้งย่าง สูตร 3403",
        "cal": 148
    },
    "spicy_fish_3404": {
        "name": "ปลายำ สูตร 3404",
        "cal": 375
    },
    "boiled_noodle_3405": {
        "name": "บะหมี่ต้ม สูตร 3405",
        "cal": 580
    },
    "grilled_rice_3406": {
        "name": "ข้าวย่าง สูตร 3406",
        "cal": 741
    },
    "stir_fried_fish_3407": {
        "name": "ปลาผัด สูตร 3407",
        "cal": 422
    },
    "fried_squid_3408": {
        "name": "ปลาหมึกทอด สูตร 3408",
        "cal": 769
    },
    "fried_noodle_3409": {
        "name": "บะหมี่ทอด สูตร 3409",
        "cal": 296
    },
    "grilled_chicken_3410": {
        "name": "ไก่ย่าง สูตร 3410",
        "cal": 175
    },
    "steamed_chicken_3411": {
        "name": "ไก่นึ่ง สูตร 3411",
        "cal": 505
    },
    "spicy_beef_3412": {
        "name": "เนื้อยำ สูตร 3412",
        "cal": 411
    },
    "steamed_shrimp_3413": {
        "name": "กุ้งนึ่ง สูตร 3413",
        "cal": 813
    },
    "steamed_rice_3414": {
        "name": "ข้าวนึ่ง สูตร 3414",
        "cal": 553
    },
    "steamed_soup_3415": {
        "name": "ซุปนึ่ง สูตร 3415",
        "cal": 737
    },
    "steamed_rice_3416": {
        "name": "ข้าวนึ่ง สูตร 3416",
        "cal": 563
    },
    "steamed_soup_3417": {
        "name": "ซุปนึ่ง สูตร 3417",
        "cal": 28
    },
    "steamed_pork_3418": {
        "name": "หมูนึ่ง สูตร 3418",
        "cal": 598
    },
    "grilled_chicken_3419": {
        "name": "ไก่ย่าง สูตร 3419",
        "cal": 109
    },
    "spicy_chicken_3420": {
        "name": "ไก่ยำ สูตร 3420",
        "cal": 121
    },
    "steamed_rice_3421": {
        "name": "ข้าวนึ่ง สูตร 3421",
        "cal": 67
    },
    "spicy_squid_3422": {
        "name": "ปลาหมึกยำ สูตร 3422",
        "cal": 719
    },
    "stir_fried_noodle_3423": {
        "name": "บะหมี่ผัด สูตร 3423",
        "cal": 778
    },
    "grilled_shrimp_3424": {
        "name": "กุ้งย่าง สูตร 3424",
        "cal": 414
    },
    "stir_fried_squid_3425": {
        "name": "ปลาหมึกผัด สูตร 3425",
        "cal": 84
    },
    "spicy_soup_3426": {
        "name": "ซุปยำ สูตร 3426",
        "cal": 418
    },
    "fried_rice_3427": {
        "name": "ข้าวทอด สูตร 3427",
        "cal": 668
    },
    "boiled_soup_3428": {
        "name": "ซุปต้ม สูตร 3428",
        "cal": 200
    },
    "spicy_beef_3429": {
        "name": "เนื้อยำ สูตร 3429",
        "cal": 121
    },
    "steamed_fish_3430": {
        "name": "ปลานึ่ง สูตร 3430",
        "cal": 445
    },
    "fried_fish_3431": {
        "name": "ปลาทอด สูตร 3431",
        "cal": 725
    },
    "fried_soup_3432": {
        "name": "ซุปทอด สูตร 3432",
        "cal": 637
    },
    "boiled_soup_3433": {
        "name": "ซุปต้ม สูตร 3433",
        "cal": 142
    },
    "spicy_rice_3434": {
        "name": "ข้าวยำ สูตร 3434",
        "cal": 538
    },
    "stir_fried_rice_3435": {
        "name": "ข้าวผัด สูตร 3435",
        "cal": 341
    },
    "fried_fish_3436": {
        "name": "ปลาทอด สูตร 3436",
        "cal": 122
    },
    "grilled_noodle_3437": {
        "name": "บะหมี่ย่าง สูตร 3437",
        "cal": 647
    },
    "steamed_fish_3438": {
        "name": "ปลานึ่ง สูตร 3438",
        "cal": 178
    },
    "spicy_fish_3439": {
        "name": "ปลายำ สูตร 3439",
        "cal": 191
    },
    "stir_fried_fish_3440": {
        "name": "ปลาผัด สูตร 3440",
        "cal": 791
    },
    "fried_noodle_3441": {
        "name": "บะหมี่ทอด สูตร 3441",
        "cal": 80
    },
    "spicy_noodle_3442": {
        "name": "บะหมี่ยำ สูตร 3442",
        "cal": 543
    },
    "stir_fried_beef_3443": {
        "name": "เนื้อผัด สูตร 3443",
        "cal": 670
    },
    "stir_fried_beef_3444": {
        "name": "เนื้อผัด สูตร 3444",
        "cal": 617
    },
    "steamed_chicken_3445": {
        "name": "ไก่นึ่ง สูตร 3445",
        "cal": 199
    },
    "steamed_beef_3446": {
        "name": "เนื้อนึ่ง สูตร 3446",
        "cal": 142
    },
    "spicy_chicken_3447": {
        "name": "ไก่ยำ สูตร 3447",
        "cal": 324
    },
    "spicy_noodle_3448": {
        "name": "บะหมี่ยำ สูตร 3448",
        "cal": 405
    },
    "boiled_beef_3449": {
        "name": "เนื้อต้ม สูตร 3449",
        "cal": 610
    },
    "boiled_rice_3450": {
        "name": "ข้าวต้ม สูตร 3450",
        "cal": 684
    },
    "steamed_beef_3451": {
        "name": "เนื้อนึ่ง สูตร 3451",
        "cal": 694
    },
    "stir_fried_rice_3452": {
        "name": "ข้าวผัด สูตร 3452",
        "cal": 447
    },
    "boiled_noodle_3453": {
        "name": "บะหมี่ต้ม สูตร 3453",
        "cal": 258
    },
    "grilled_shrimp_3454": {
        "name": "กุ้งย่าง สูตร 3454",
        "cal": 764
    },
    "steamed_fish_3455": {
        "name": "ปลานึ่ง สูตร 3455",
        "cal": 821
    },
    "boiled_pork_3456": {
        "name": "หมูต้ม สูตร 3456",
        "cal": 628
    },
    "steamed_beef_3457": {
        "name": "เนื้อนึ่ง สูตร 3457",
        "cal": 760
    },
    "steamed_fish_3458": {
        "name": "ปลานึ่ง สูตร 3458",
        "cal": 400
    },
    "fried_rice_3459": {
        "name": "ข้าวทอด สูตร 3459",
        "cal": 519
    },
    "steamed_pork_3460": {
        "name": "หมูนึ่ง สูตร 3460",
        "cal": 763
    },
    "steamed_squid_3461": {
        "name": "ปลาหมึกนึ่ง สูตร 3461",
        "cal": 26
    },
    "fried_soup_3462": {
        "name": "ซุปทอด สูตร 3462",
        "cal": 434
    },
    "stir_fried_shrimp_3463": {
        "name": "กุ้งผัด สูตร 3463",
        "cal": 786
    },
    "stir_fried_shrimp_3464": {
        "name": "กุ้งผัด สูตร 3464",
        "cal": 707
    },
    "fried_shrimp_3465": {
        "name": "กุ้งทอด สูตร 3465",
        "cal": 207
    },
    "stir_fried_shrimp_3466": {
        "name": "กุ้งผัด สูตร 3466",
        "cal": 126
    },
    "grilled_shrimp_3467": {
        "name": "กุ้งย่าง สูตร 3467",
        "cal": 472
    },
    "fried_noodle_3468": {
        "name": "บะหมี่ทอด สูตร 3468",
        "cal": 509
    },
    "spicy_shrimp_3469": {
        "name": "กุ้งยำ สูตร 3469",
        "cal": 685
    },
    "boiled_rice_3470": {
        "name": "ข้าวต้ม สูตร 3470",
        "cal": 378
    },
    "grilled_chicken_3471": {
        "name": "ไก่ย่าง สูตร 3471",
        "cal": 525
    },
    "fried_beef_3472": {
        "name": "เนื้อทอด สูตร 3472",
        "cal": 317
    },
    "boiled_rice_3473": {
        "name": "ข้าวต้ม สูตร 3473",
        "cal": 475
    },
    "grilled_rice_3474": {
        "name": "ข้าวย่าง สูตร 3474",
        "cal": 552
    },
    "stir_fried_squid_3475": {
        "name": "ปลาหมึกผัด สูตร 3475",
        "cal": 126
    },
    "boiled_shrimp_3476": {
        "name": "กุ้งต้ม สูตร 3476",
        "cal": 131
    },
    "boiled_beef_3477": {
        "name": "เนื้อต้ม สูตร 3477",
        "cal": 311
    },
    "spicy_noodle_3478": {
        "name": "บะหมี่ยำ สูตร 3478",
        "cal": 348
    },
    "grilled_soup_3479": {
        "name": "ซุปย่าง สูตร 3479",
        "cal": 638
    },
    "grilled_beef_3480": {
        "name": "เนื้อย่าง สูตร 3480",
        "cal": 133
    },
    "spicy_pork_3481": {
        "name": "หมูยำ สูตร 3481",
        "cal": 387
    },
    "boiled_beef_3482": {
        "name": "เนื้อต้ม สูตร 3482",
        "cal": 109
    },
    "grilled_beef_3483": {
        "name": "เนื้อย่าง สูตร 3483",
        "cal": 775
    },
    "fried_shrimp_3484": {
        "name": "กุ้งทอด สูตร 3484",
        "cal": 178
    },
    "stir_fried_squid_3485": {
        "name": "ปลาหมึกผัด สูตร 3485",
        "cal": 784
    },
    "stir_fried_fish_3486": {
        "name": "ปลาผัด สูตร 3486",
        "cal": 834
    },
    "grilled_pork_3487": {
        "name": "หมูย่าง สูตร 3487",
        "cal": 656
    },
    "stir_fried_fish_3488": {
        "name": "ปลาผัด สูตร 3488",
        "cal": 303
    },
    "fried_pork_3489": {
        "name": "หมูทอด สูตร 3489",
        "cal": 192
    },
    "spicy_soup_3490": {
        "name": "ซุปยำ สูตร 3490",
        "cal": 122
    },
    "boiled_rice_3491": {
        "name": "ข้าวต้ม สูตร 3491",
        "cal": 155
    },
    "grilled_shrimp_3492": {
        "name": "กุ้งย่าง สูตร 3492",
        "cal": 108
    },
    "stir_fried_squid_3493": {
        "name": "ปลาหมึกผัด สูตร 3493",
        "cal": 79
    },
    "spicy_soup_3494": {
        "name": "ซุปยำ สูตร 3494",
        "cal": 63
    },
    "grilled_shrimp_3495": {
        "name": "กุ้งย่าง สูตร 3495",
        "cal": 249
    },
    "stir_fried_chicken_3496": {
        "name": "ไก่ผัด สูตร 3496",
        "cal": 298
    },
    "grilled_squid_3497": {
        "name": "ปลาหมึกย่าง สูตร 3497",
        "cal": 715
    },
    "stir_fried_fish_3498": {
        "name": "ปลาผัด สูตร 3498",
        "cal": 239
    },
    "boiled_squid_3499": {
        "name": "ปลาหมึกต้ม สูตร 3499",
        "cal": 32
    },
    "boiled_beef_3500": {
        "name": "เนื้อต้ม สูตร 3500",
        "cal": 598
    },
    "fried_rice_3501": {
        "name": "ข้าวทอด สูตร 3501",
        "cal": 390
    },
    "grilled_chicken_3502": {
        "name": "ไก่ย่าง สูตร 3502",
        "cal": 101
    },
    "steamed_noodle_3503": {
        "name": "บะหมี่นึ่ง สูตร 3503",
        "cal": 472
    },
    "stir_fried_noodle_3504": {
        "name": "บะหมี่ผัด สูตร 3504",
        "cal": 520
    },
    "steamed_noodle_3505": {
        "name": "บะหมี่นึ่ง สูตร 3505",
        "cal": 818
    },
    "boiled_beef_3506": {
        "name": "เนื้อต้ม สูตร 3506",
        "cal": 375
    },
    "steamed_fish_3507": {
        "name": "ปลานึ่ง สูตร 3507",
        "cal": 633
    },
    "boiled_soup_3508": {
        "name": "ซุปต้ม สูตร 3508",
        "cal": 145
    },
    "steamed_shrimp_3509": {
        "name": "กุ้งนึ่ง สูตร 3509",
        "cal": 103
    },
    "spicy_beef_3510": {
        "name": "เนื้อยำ สูตร 3510",
        "cal": 784
    },
    "stir_fried_soup_3511": {
        "name": "ซุปผัด สูตร 3511",
        "cal": 60
    },
    "boiled_pork_3512": {
        "name": "หมูต้ม สูตร 3512",
        "cal": 216
    },
    "fried_chicken_3513": {
        "name": "ไก่ทอด สูตร 3513",
        "cal": 811
    },
    "spicy_squid_3514": {
        "name": "ปลาหมึกยำ สูตร 3514",
        "cal": 480
    },
    "fried_chicken_3515": {
        "name": "ไก่ทอด สูตร 3515",
        "cal": 32
    },
    "boiled_rice_3516": {
        "name": "ข้าวต้ม สูตร 3516",
        "cal": 285
    },
    "fried_soup_3517": {
        "name": "ซุปทอด สูตร 3517",
        "cal": 667
    },
    "steamed_noodle_3518": {
        "name": "บะหมี่นึ่ง สูตร 3518",
        "cal": 506
    },
    "grilled_squid_3519": {
        "name": "ปลาหมึกย่าง สูตร 3519",
        "cal": 342
    },
    "spicy_soup_3520": {
        "name": "ซุปยำ สูตร 3520",
        "cal": 284
    },
    "spicy_fish_3521": {
        "name": "ปลายำ สูตร 3521",
        "cal": 783
    },
    "steamed_shrimp_3522": {
        "name": "กุ้งนึ่ง สูตร 3522",
        "cal": 268
    },
    "fried_fish_3523": {
        "name": "ปลาทอด สูตร 3523",
        "cal": 701
    },
    "steamed_beef_3524": {
        "name": "เนื้อนึ่ง สูตร 3524",
        "cal": 503
    },
    "boiled_chicken_3525": {
        "name": "ไก่ต้ม สูตร 3525",
        "cal": 305
    },
    "grilled_rice_3526": {
        "name": "ข้าวย่าง สูตร 3526",
        "cal": 398
    },
    "stir_fried_soup_3527": {
        "name": "ซุปผัด สูตร 3527",
        "cal": 134
    },
    "fried_pork_3528": {
        "name": "หมูทอด สูตร 3528",
        "cal": 286
    },
    "fried_soup_3529": {
        "name": "ซุปทอด สูตร 3529",
        "cal": 237
    },
    "spicy_noodle_3530": {
        "name": "บะหมี่ยำ สูตร 3530",
        "cal": 226
    },
    "steamed_pork_3531": {
        "name": "หมูนึ่ง สูตร 3531",
        "cal": 820
    },
    "grilled_soup_3532": {
        "name": "ซุปย่าง สูตร 3532",
        "cal": 809
    },
    "spicy_soup_3533": {
        "name": "ซุปยำ สูตร 3533",
        "cal": 846
    },
    "boiled_beef_3534": {
        "name": "เนื้อต้ม สูตร 3534",
        "cal": 343
    },
    "stir_fried_pork_3535": {
        "name": "หมูผัด สูตร 3535",
        "cal": 180
    },
    "grilled_pork_3536": {
        "name": "หมูย่าง สูตร 3536",
        "cal": 374
    },
    "fried_squid_3537": {
        "name": "ปลาหมึกทอด สูตร 3537",
        "cal": 200
    },
    "stir_fried_fish_3538": {
        "name": "ปลาผัด สูตร 3538",
        "cal": 567
    },
    "fried_beef_3539": {
        "name": "เนื้อทอด สูตร 3539",
        "cal": 828
    },
    "boiled_rice_3540": {
        "name": "ข้าวต้ม สูตร 3540",
        "cal": 167
    },
    "steamed_squid_3541": {
        "name": "ปลาหมึกนึ่ง สูตร 3541",
        "cal": 226
    },
    "boiled_pork_3542": {
        "name": "หมูต้ม สูตร 3542",
        "cal": 603
    },
    "grilled_soup_3543": {
        "name": "ซุปย่าง สูตร 3543",
        "cal": 790
    },
    "grilled_soup_3544": {
        "name": "ซุปย่าง สูตร 3544",
        "cal": 104
    },
    "spicy_noodle_3545": {
        "name": "บะหมี่ยำ สูตร 3545",
        "cal": 515
    },
    "boiled_shrimp_3546": {
        "name": "กุ้งต้ม สูตร 3546",
        "cal": 344
    },
    "fried_fish_3547": {
        "name": "ปลาทอด สูตร 3547",
        "cal": 24
    },
    "stir_fried_fish_3548": {
        "name": "ปลาผัด สูตร 3548",
        "cal": 645
    },
    "spicy_noodle_3549": {
        "name": "บะหมี่ยำ สูตร 3549",
        "cal": 816
    },
    "spicy_fish_3550": {
        "name": "ปลายำ สูตร 3550",
        "cal": 151
    },
    "steamed_pork_3551": {
        "name": "หมูนึ่ง สูตร 3551",
        "cal": 587
    },
    "fried_squid_3552": {
        "name": "ปลาหมึกทอด สูตร 3552",
        "cal": 510
    },
    "stir_fried_rice_3553": {
        "name": "ข้าวผัด สูตร 3553",
        "cal": 524
    },
    "stir_fried_shrimp_3554": {
        "name": "กุ้งผัด สูตร 3554",
        "cal": 849
    },
    "steamed_beef_3555": {
        "name": "เนื้อนึ่ง สูตร 3555",
        "cal": 823
    },
    "stir_fried_squid_3556": {
        "name": "ปลาหมึกผัด สูตร 3556",
        "cal": 676
    },
    "boiled_beef_3557": {
        "name": "เนื้อต้ม สูตร 3557",
        "cal": 730
    },
    "grilled_pork_3558": {
        "name": "หมูย่าง สูตร 3558",
        "cal": 135
    },
    "steamed_soup_3559": {
        "name": "ซุปนึ่ง สูตร 3559",
        "cal": 376
    },
    "grilled_soup_3560": {
        "name": "ซุปย่าง สูตร 3560",
        "cal": 809
    },
    "boiled_chicken_3561": {
        "name": "ไก่ต้ม สูตร 3561",
        "cal": 124
    },
    "boiled_fish_3562": {
        "name": "ปลาต้ม สูตร 3562",
        "cal": 130
    },
    "steamed_pork_3563": {
        "name": "หมูนึ่ง สูตร 3563",
        "cal": 449
    },
    "fried_rice_3564": {
        "name": "ข้าวทอด สูตร 3564",
        "cal": 313
    },
    "grilled_shrimp_3565": {
        "name": "กุ้งย่าง สูตร 3565",
        "cal": 461
    },
    "spicy_squid_3566": {
        "name": "ปลาหมึกยำ สูตร 3566",
        "cal": 475
    },
    "fried_pork_3567": {
        "name": "หมูทอด สูตร 3567",
        "cal": 788
    },
    "grilled_fish_3568": {
        "name": "ปลาย่าง สูตร 3568",
        "cal": 351
    },
    "spicy_soup_3569": {
        "name": "ซุปยำ สูตร 3569",
        "cal": 261
    },
    "spicy_shrimp_3570": {
        "name": "กุ้งยำ สูตร 3570",
        "cal": 305
    },
    "fried_rice_3571": {
        "name": "ข้าวทอด สูตร 3571",
        "cal": 456
    },
    "steamed_chicken_3572": {
        "name": "ไก่นึ่ง สูตร 3572",
        "cal": 562
    },
    "grilled_beef_3573": {
        "name": "เนื้อย่าง สูตร 3573",
        "cal": 500
    },
    "steamed_pork_3574": {
        "name": "หมูนึ่ง สูตร 3574",
        "cal": 471
    },
    "stir_fried_chicken_3575": {
        "name": "ไก่ผัด สูตร 3575",
        "cal": 608
    },
    "fried_soup_3576": {
        "name": "ซุปทอด สูตร 3576",
        "cal": 561
    },
    "steamed_pork_3577": {
        "name": "หมูนึ่ง สูตร 3577",
        "cal": 39
    },
    "fried_soup_3578": {
        "name": "ซุปทอด สูตร 3578",
        "cal": 581
    },
    "boiled_fish_3579": {
        "name": "ปลาต้ม สูตร 3579",
        "cal": 488
    },
    "spicy_beef_3580": {
        "name": "เนื้อยำ สูตร 3580",
        "cal": 311
    },
    "fried_beef_3581": {
        "name": "เนื้อทอด สูตร 3581",
        "cal": 219
    },
    "boiled_chicken_3582": {
        "name": "ไก่ต้ม สูตร 3582",
        "cal": 826
    },
    "fried_noodle_3583": {
        "name": "บะหมี่ทอด สูตร 3583",
        "cal": 488
    },
    "steamed_fish_3584": {
        "name": "ปลานึ่ง สูตร 3584",
        "cal": 495
    },
    "steamed_soup_3585": {
        "name": "ซุปนึ่ง สูตร 3585",
        "cal": 437
    },
    "spicy_squid_3586": {
        "name": "ปลาหมึกยำ สูตร 3586",
        "cal": 171
    },
    "spicy_rice_3587": {
        "name": "ข้าวยำ สูตร 3587",
        "cal": 302
    },
    "boiled_chicken_3588": {
        "name": "ไก่ต้ม สูตร 3588",
        "cal": 612
    },
    "steamed_soup_3589": {
        "name": "ซุปนึ่ง สูตร 3589",
        "cal": 156
    },
    "steamed_rice_3590": {
        "name": "ข้าวนึ่ง สูตร 3590",
        "cal": 397
    },
    "fried_rice_3591": {
        "name": "ข้าวทอด สูตร 3591",
        "cal": 421
    },
    "steamed_soup_3592": {
        "name": "ซุปนึ่ง สูตร 3592",
        "cal": 292
    },
    "fried_soup_3593": {
        "name": "ซุปทอด สูตร 3593",
        "cal": 365
    },
    "steamed_pork_3594": {
        "name": "หมูนึ่ง สูตร 3594",
        "cal": 412
    },
    "grilled_fish_3595": {
        "name": "ปลาย่าง สูตร 3595",
        "cal": 148
    },
    "spicy_rice_3596": {
        "name": "ข้าวยำ สูตร 3596",
        "cal": 115
    },
    "steamed_soup_3597": {
        "name": "ซุปนึ่ง สูตร 3597",
        "cal": 92
    },
    "steamed_rice_3598": {
        "name": "ข้าวนึ่ง สูตร 3598",
        "cal": 122
    },
    "boiled_beef_3599": {
        "name": "เนื้อต้ม สูตร 3599",
        "cal": 441
    },
    "steamed_soup_3600": {
        "name": "ซุปนึ่ง สูตร 3600",
        "cal": 710
    },
    "fried_pork_3601": {
        "name": "หมูทอด สูตร 3601",
        "cal": 505
    },
    "fried_soup_3602": {
        "name": "ซุปทอด สูตร 3602",
        "cal": 475
    },
    "fried_chicken_3603": {
        "name": "ไก่ทอด สูตร 3603",
        "cal": 604
    },
    "boiled_shrimp_3604": {
        "name": "กุ้งต้ม สูตร 3604",
        "cal": 359
    },
    "grilled_shrimp_3605": {
        "name": "กุ้งย่าง สูตร 3605",
        "cal": 607
    },
    "boiled_soup_3606": {
        "name": "ซุปต้ม สูตร 3606",
        "cal": 476
    },
    "stir_fried_pork_3607": {
        "name": "หมูผัด สูตร 3607",
        "cal": 25
    },
    "boiled_fish_3608": {
        "name": "ปลาต้ม สูตร 3608",
        "cal": 526
    },
    "spicy_chicken_3609": {
        "name": "ไก่ยำ สูตร 3609",
        "cal": 767
    },
    "stir_fried_fish_3610": {
        "name": "ปลาผัด สูตร 3610",
        "cal": 602
    },
    "stir_fried_squid_3611": {
        "name": "ปลาหมึกผัด สูตร 3611",
        "cal": 625
    },
    "grilled_squid_3612": {
        "name": "ปลาหมึกย่าง สูตร 3612",
        "cal": 546
    },
    "boiled_fish_3613": {
        "name": "ปลาต้ม สูตร 3613",
        "cal": 552
    },
    "fried_chicken_3614": {
        "name": "ไก่ทอด สูตร 3614",
        "cal": 244
    },
    "spicy_chicken_3615": {
        "name": "ไก่ยำ สูตร 3615",
        "cal": 430
    },
    "stir_fried_chicken_3616": {
        "name": "ไก่ผัด สูตร 3616",
        "cal": 270
    },
    "steamed_pork_3617": {
        "name": "หมูนึ่ง สูตร 3617",
        "cal": 744
    },
    "boiled_beef_3618": {
        "name": "เนื้อต้ม สูตร 3618",
        "cal": 775
    },
    "spicy_beef_3619": {
        "name": "เนื้อยำ สูตร 3619",
        "cal": 510
    },
    "stir_fried_noodle_3620": {
        "name": "บะหมี่ผัด สูตร 3620",
        "cal": 782
    },
    "steamed_soup_3621": {
        "name": "ซุปนึ่ง สูตร 3621",
        "cal": 404
    },
    "fried_shrimp_3622": {
        "name": "กุ้งทอด สูตร 3622",
        "cal": 679
    },
    "grilled_rice_3623": {
        "name": "ข้าวย่าง สูตร 3623",
        "cal": 226
    },
    "grilled_rice_3624": {
        "name": "ข้าวย่าง สูตร 3624",
        "cal": 205
    },
    "grilled_squid_3625": {
        "name": "ปลาหมึกย่าง สูตร 3625",
        "cal": 405
    },
    "grilled_rice_3626": {
        "name": "ข้าวย่าง สูตร 3626",
        "cal": 443
    },
    "fried_chicken_3627": {
        "name": "ไก่ทอด สูตร 3627",
        "cal": 79
    },
    "steamed_pork_3628": {
        "name": "หมูนึ่ง สูตร 3628",
        "cal": 677
    },
    "steamed_noodle_3629": {
        "name": "บะหมี่นึ่ง สูตร 3629",
        "cal": 266
    },
    "grilled_beef_3630": {
        "name": "เนื้อย่าง สูตร 3630",
        "cal": 256
    },
    "boiled_beef_3631": {
        "name": "เนื้อต้ม สูตร 3631",
        "cal": 747
    },
    "spicy_rice_3632": {
        "name": "ข้าวยำ สูตร 3632",
        "cal": 774
    },
    "boiled_soup_3633": {
        "name": "ซุปต้ม สูตร 3633",
        "cal": 355
    },
    "steamed_soup_3634": {
        "name": "ซุปนึ่ง สูตร 3634",
        "cal": 240
    },
    "stir_fried_beef_3635": {
        "name": "เนื้อผัด สูตร 3635",
        "cal": 653
    },
    "grilled_soup_3636": {
        "name": "ซุปย่าง สูตร 3636",
        "cal": 419
    },
    "steamed_chicken_3637": {
        "name": "ไก่นึ่ง สูตร 3637",
        "cal": 454
    },
    "stir_fried_noodle_3638": {
        "name": "บะหมี่ผัด สูตร 3638",
        "cal": 636
    },
    "grilled_pork_3639": {
        "name": "หมูย่าง สูตร 3639",
        "cal": 751
    },
    "fried_fish_3640": {
        "name": "ปลาทอด สูตร 3640",
        "cal": 819
    },
    "fried_noodle_3641": {
        "name": "บะหมี่ทอด สูตร 3641",
        "cal": 833
    },
    "grilled_noodle_3642": {
        "name": "บะหมี่ย่าง สูตร 3642",
        "cal": 519
    },
    "spicy_pork_3643": {
        "name": "หมูยำ สูตร 3643",
        "cal": 486
    },
    "boiled_beef_3644": {
        "name": "เนื้อต้ม สูตร 3644",
        "cal": 206
    },
    "boiled_pork_3645": {
        "name": "หมูต้ม สูตร 3645",
        "cal": 335
    },
    "fried_rice_3646": {
        "name": "ข้าวทอด สูตร 3646",
        "cal": 66
    },
    "boiled_noodle_3647": {
        "name": "บะหมี่ต้ม สูตร 3647",
        "cal": 534
    },
    "grilled_rice_3648": {
        "name": "ข้าวย่าง สูตร 3648",
        "cal": 274
    },
    "steamed_noodle_3649": {
        "name": "บะหมี่นึ่ง สูตร 3649",
        "cal": 741
    },
    "fried_rice_3650": {
        "name": "ข้าวทอด สูตร 3650",
        "cal": 639
    },
    "grilled_fish_3651": {
        "name": "ปลาย่าง สูตร 3651",
        "cal": 664
    },
    "grilled_pork_3652": {
        "name": "หมูย่าง สูตร 3652",
        "cal": 53
    },
    "boiled_pork_3653": {
        "name": "หมูต้ม สูตร 3653",
        "cal": 717
    },
    "spicy_chicken_3654": {
        "name": "ไก่ยำ สูตร 3654",
        "cal": 697
    },
    "stir_fried_pork_3655": {
        "name": "หมูผัด สูตร 3655",
        "cal": 734
    },
    "steamed_fish_3656": {
        "name": "ปลานึ่ง สูตร 3656",
        "cal": 92
    },
    "boiled_shrimp_3657": {
        "name": "กุ้งต้ม สูตร 3657",
        "cal": 39
    },
    "grilled_beef_3658": {
        "name": "เนื้อย่าง สูตร 3658",
        "cal": 651
    },
    "stir_fried_fish_3659": {
        "name": "ปลาผัด สูตร 3659",
        "cal": 200
    },
    "stir_fried_soup_3660": {
        "name": "ซุปผัด สูตร 3660",
        "cal": 122
    },
    "boiled_shrimp_3661": {
        "name": "กุ้งต้ม สูตร 3661",
        "cal": 619
    },
    "fried_rice_3662": {
        "name": "ข้าวทอด สูตร 3662",
        "cal": 616
    },
    "spicy_chicken_3663": {
        "name": "ไก่ยำ สูตร 3663",
        "cal": 168
    },
    "spicy_soup_3664": {
        "name": "ซุปยำ สูตร 3664",
        "cal": 768
    },
    "stir_fried_noodle_3665": {
        "name": "บะหมี่ผัด สูตร 3665",
        "cal": 225
    },
    "boiled_fish_3666": {
        "name": "ปลาต้ม สูตร 3666",
        "cal": 62
    },
    "spicy_shrimp_3667": {
        "name": "กุ้งยำ สูตร 3667",
        "cal": 492
    },
    "spicy_noodle_3668": {
        "name": "บะหมี่ยำ สูตร 3668",
        "cal": 677
    },
    "stir_fried_squid_3669": {
        "name": "ปลาหมึกผัด สูตร 3669",
        "cal": 723
    },
    "grilled_chicken_3670": {
        "name": "ไก่ย่าง สูตร 3670",
        "cal": 81
    },
    "fried_fish_3671": {
        "name": "ปลาทอด สูตร 3671",
        "cal": 573
    },
    "fried_noodle_3672": {
        "name": "บะหมี่ทอด สูตร 3672",
        "cal": 723
    },
    "spicy_chicken_3673": {
        "name": "ไก่ยำ สูตร 3673",
        "cal": 657
    },
    "boiled_rice_3674": {
        "name": "ข้าวต้ม สูตร 3674",
        "cal": 218
    },
    "stir_fried_noodle_3675": {
        "name": "บะหมี่ผัด สูตร 3675",
        "cal": 611
    },
    "steamed_rice_3676": {
        "name": "ข้าวนึ่ง สูตร 3676",
        "cal": 293
    },
    "fried_shrimp_3677": {
        "name": "กุ้งทอด สูตร 3677",
        "cal": 431
    },
    "stir_fried_chicken_3678": {
        "name": "ไก่ผัด สูตร 3678",
        "cal": 569
    },
    "boiled_chicken_3679": {
        "name": "ไก่ต้ม สูตร 3679",
        "cal": 676
    },
    "stir_fried_squid_3680": {
        "name": "ปลาหมึกผัด สูตร 3680",
        "cal": 408
    },
    "steamed_pork_3681": {
        "name": "หมูนึ่ง สูตร 3681",
        "cal": 310
    },
    "grilled_pork_3682": {
        "name": "หมูย่าง สูตร 3682",
        "cal": 289
    },
    "boiled_squid_3683": {
        "name": "ปลาหมึกต้ม สูตร 3683",
        "cal": 706
    },
    "spicy_soup_3684": {
        "name": "ซุปยำ สูตร 3684",
        "cal": 39
    },
    "steamed_pork_3685": {
        "name": "หมูนึ่ง สูตร 3685",
        "cal": 806
    },
    "fried_noodle_3686": {
        "name": "บะหมี่ทอด สูตร 3686",
        "cal": 543
    },
    "stir_fried_shrimp_3687": {
        "name": "กุ้งผัด สูตร 3687",
        "cal": 189
    },
    "steamed_soup_3688": {
        "name": "ซุปนึ่ง สูตร 3688",
        "cal": 477
    },
    "spicy_fish_3689": {
        "name": "ปลายำ สูตร 3689",
        "cal": 371
    },
    "steamed_fish_3690": {
        "name": "ปลานึ่ง สูตร 3690",
        "cal": 415
    },
    "stir_fried_rice_3691": {
        "name": "ข้าวผัด สูตร 3691",
        "cal": 192
    },
    "fried_shrimp_3692": {
        "name": "กุ้งทอด สูตร 3692",
        "cal": 248
    },
    "fried_chicken_3693": {
        "name": "ไก่ทอด สูตร 3693",
        "cal": 819
    },
    "stir_fried_squid_3694": {
        "name": "ปลาหมึกผัด สูตร 3694",
        "cal": 429
    },
    "fried_noodle_3695": {
        "name": "บะหมี่ทอด สูตร 3695",
        "cal": 730
    },
    "steamed_squid_3696": {
        "name": "ปลาหมึกนึ่ง สูตร 3696",
        "cal": 522
    },
    "boiled_noodle_3697": {
        "name": "บะหมี่ต้ม สูตร 3697",
        "cal": 261
    },
    "stir_fried_soup_3698": {
        "name": "ซุปผัด สูตร 3698",
        "cal": 482
    },
    "boiled_squid_3699": {
        "name": "ปลาหมึกต้ม สูตร 3699",
        "cal": 105
    },
    "spicy_soup_3700": {
        "name": "ซุปยำ สูตร 3700",
        "cal": 707
    },
    "grilled_soup_3701": {
        "name": "ซุปย่าง สูตร 3701",
        "cal": 35
    },
    "boiled_soup_3702": {
        "name": "ซุปต้ม สูตร 3702",
        "cal": 545
    },
    "grilled_chicken_3703": {
        "name": "ไก่ย่าง สูตร 3703",
        "cal": 813
    },
    "spicy_shrimp_3704": {
        "name": "กุ้งยำ สูตร 3704",
        "cal": 265
    },
    "stir_fried_pork_3705": {
        "name": "หมูผัด สูตร 3705",
        "cal": 113
    },
    "steamed_soup_3706": {
        "name": "ซุปนึ่ง สูตร 3706",
        "cal": 451
    },
    "stir_fried_beef_3707": {
        "name": "เนื้อผัด สูตร 3707",
        "cal": 557
    },
    "grilled_fish_3708": {
        "name": "ปลาย่าง สูตร 3708",
        "cal": 497
    },
    "spicy_noodle_3709": {
        "name": "บะหมี่ยำ สูตร 3709",
        "cal": 235
    },
    "grilled_noodle_3710": {
        "name": "บะหมี่ย่าง สูตร 3710",
        "cal": 621
    },
    "boiled_pork_3711": {
        "name": "หมูต้ม สูตร 3711",
        "cal": 212
    },
    "fried_noodle_3712": {
        "name": "บะหมี่ทอด สูตร 3712",
        "cal": 496
    },
    "stir_fried_soup_3713": {
        "name": "ซุปผัด สูตร 3713",
        "cal": 196
    },
    "steamed_rice_3714": {
        "name": "ข้าวนึ่ง สูตร 3714",
        "cal": 767
    },
    "spicy_fish_3715": {
        "name": "ปลายำ สูตร 3715",
        "cal": 573
    },
    "spicy_beef_3716": {
        "name": "เนื้อยำ สูตร 3716",
        "cal": 21
    },
    "grilled_soup_3717": {
        "name": "ซุปย่าง สูตร 3717",
        "cal": 813
    },
    "steamed_rice_3718": {
        "name": "ข้าวนึ่ง สูตร 3718",
        "cal": 487
    },
    "grilled_beef_3719": {
        "name": "เนื้อย่าง สูตร 3719",
        "cal": 352
    },
    "grilled_noodle_3720": {
        "name": "บะหมี่ย่าง สูตร 3720",
        "cal": 784
    },
    "boiled_chicken_3721": {
        "name": "ไก่ต้ม สูตร 3721",
        "cal": 208
    },
    "grilled_pork_3722": {
        "name": "หมูย่าง สูตร 3722",
        "cal": 689
    },
    "spicy_chicken_3723": {
        "name": "ไก่ยำ สูตร 3723",
        "cal": 442
    },
    "grilled_noodle_3724": {
        "name": "บะหมี่ย่าง สูตร 3724",
        "cal": 700
    },
    "boiled_fish_3725": {
        "name": "ปลาต้ม สูตร 3725",
        "cal": 598
    },
    "boiled_rice_3726": {
        "name": "ข้าวต้ม สูตร 3726",
        "cal": 838
    },
    "steamed_rice_3727": {
        "name": "ข้าวนึ่ง สูตร 3727",
        "cal": 823
    },
    "grilled_soup_3728": {
        "name": "ซุปย่าง สูตร 3728",
        "cal": 548
    },
    "fried_beef_3729": {
        "name": "เนื้อทอด สูตร 3729",
        "cal": 635
    },
    "spicy_rice_3730": {
        "name": "ข้าวยำ สูตร 3730",
        "cal": 44
    },
    "boiled_rice_3731": {
        "name": "ข้าวต้ม สูตร 3731",
        "cal": 787
    },
    "fried_pork_3732": {
        "name": "หมูทอด สูตร 3732",
        "cal": 735
    },
    "boiled_beef_3733": {
        "name": "เนื้อต้ม สูตร 3733",
        "cal": 74
    },
    "spicy_rice_3734": {
        "name": "ข้าวยำ สูตร 3734",
        "cal": 419
    },
    "steamed_shrimp_3735": {
        "name": "กุ้งนึ่ง สูตร 3735",
        "cal": 195
    },
    "steamed_rice_3736": {
        "name": "ข้าวนึ่ง สูตร 3736",
        "cal": 145
    },
    "spicy_soup_3737": {
        "name": "ซุปยำ สูตร 3737",
        "cal": 432
    },
    "stir_fried_pork_3738": {
        "name": "หมูผัด สูตร 3738",
        "cal": 324
    },
    "spicy_squid_3739": {
        "name": "ปลาหมึกยำ สูตร 3739",
        "cal": 337
    },
    "spicy_beef_3740": {
        "name": "เนื้อยำ สูตร 3740",
        "cal": 262
    },
    "stir_fried_fish_3741": {
        "name": "ปลาผัด สูตร 3741",
        "cal": 256
    },
    "grilled_beef_3742": {
        "name": "เนื้อย่าง สูตร 3742",
        "cal": 723
    },
    "grilled_pork_3743": {
        "name": "หมูย่าง สูตร 3743",
        "cal": 121
    },
    "steamed_chicken_3744": {
        "name": "ไก่นึ่ง สูตร 3744",
        "cal": 807
    },
    "boiled_soup_3745": {
        "name": "ซุปต้ม สูตร 3745",
        "cal": 61
    },
    "stir_fried_shrimp_3746": {
        "name": "กุ้งผัด สูตร 3746",
        "cal": 181
    },
    "grilled_rice_3747": {
        "name": "ข้าวย่าง สูตร 3747",
        "cal": 21
    },
    "boiled_fish_3748": {
        "name": "ปลาต้ม สูตร 3748",
        "cal": 95
    },
    "grilled_shrimp_3749": {
        "name": "กุ้งย่าง สูตร 3749",
        "cal": 83
    },
    "grilled_shrimp_3750": {
        "name": "กุ้งย่าง สูตร 3750",
        "cal": 794
    },
    "spicy_chicken_3751": {
        "name": "ไก่ยำ สูตร 3751",
        "cal": 838
    },
    "fried_pork_3752": {
        "name": "หมูทอด สูตร 3752",
        "cal": 117
    },
    "fried_soup_3753": {
        "name": "ซุปทอด สูตร 3753",
        "cal": 713
    },
    "grilled_shrimp_3754": {
        "name": "กุ้งย่าง สูตร 3754",
        "cal": 174
    },
    "grilled_chicken_3755": {
        "name": "ไก่ย่าง สูตร 3755",
        "cal": 636
    },
    "grilled_fish_3756": {
        "name": "ปลาย่าง สูตร 3756",
        "cal": 625
    },
    "grilled_pork_3757": {
        "name": "หมูย่าง สูตร 3757",
        "cal": 632
    },
    "grilled_rice_3758": {
        "name": "ข้าวย่าง สูตร 3758",
        "cal": 94
    },
    "spicy_rice_3759": {
        "name": "ข้าวยำ สูตร 3759",
        "cal": 633
    },
    "stir_fried_noodle_3760": {
        "name": "บะหมี่ผัด สูตร 3760",
        "cal": 362
    },
    "stir_fried_beef_3761": {
        "name": "เนื้อผัด สูตร 3761",
        "cal": 533
    },
    "grilled_soup_3762": {
        "name": "ซุปย่าง สูตร 3762",
        "cal": 446
    },
    "stir_fried_squid_3763": {
        "name": "ปลาหมึกผัด สูตร 3763",
        "cal": 102
    },
    "fried_noodle_3764": {
        "name": "บะหมี่ทอด สูตร 3764",
        "cal": 769
    },
    "steamed_fish_3765": {
        "name": "ปลานึ่ง สูตร 3765",
        "cal": 301
    },
    "fried_beef_3766": {
        "name": "เนื้อทอด สูตร 3766",
        "cal": 158
    },
    "grilled_soup_3767": {
        "name": "ซุปย่าง สูตร 3767",
        "cal": 433
    },
    "spicy_fish_3768": {
        "name": "ปลายำ สูตร 3768",
        "cal": 541
    },
    "spicy_noodle_3769": {
        "name": "บะหมี่ยำ สูตร 3769",
        "cal": 548
    },
    "fried_soup_3770": {
        "name": "ซุปทอด สูตร 3770",
        "cal": 216
    },
    "stir_fried_soup_3771": {
        "name": "ซุปผัด สูตร 3771",
        "cal": 667
    },
    "boiled_noodle_3772": {
        "name": "บะหมี่ต้ม สูตร 3772",
        "cal": 113
    },
    "fried_beef_3773": {
        "name": "เนื้อทอด สูตร 3773",
        "cal": 113
    },
    "stir_fried_noodle_3774": {
        "name": "บะหมี่ผัด สูตร 3774",
        "cal": 625
    },
    "fried_shrimp_3775": {
        "name": "กุ้งทอด สูตร 3775",
        "cal": 315
    },
    "spicy_noodle_3776": {
        "name": "บะหมี่ยำ สูตร 3776",
        "cal": 106
    },
    "grilled_chicken_3777": {
        "name": "ไก่ย่าง สูตร 3777",
        "cal": 612
    },
    "grilled_squid_3778": {
        "name": "ปลาหมึกย่าง สูตร 3778",
        "cal": 595
    },
    "spicy_rice_3779": {
        "name": "ข้าวยำ สูตร 3779",
        "cal": 769
    },
    "steamed_fish_3780": {
        "name": "ปลานึ่ง สูตร 3780",
        "cal": 687
    },
    "grilled_fish_3781": {
        "name": "ปลาย่าง สูตร 3781",
        "cal": 570
    },
    "fried_soup_3782": {
        "name": "ซุปทอด สูตร 3782",
        "cal": 558
    },
    "stir_fried_beef_3783": {
        "name": "เนื้อผัด สูตร 3783",
        "cal": 167
    },
    "steamed_pork_3784": {
        "name": "หมูนึ่ง สูตร 3784",
        "cal": 729
    },
    "fried_rice_3785": {
        "name": "ข้าวทอด สูตร 3785",
        "cal": 409
    },
    "steamed_fish_3786": {
        "name": "ปลานึ่ง สูตร 3786",
        "cal": 604
    },
    "spicy_squid_3787": {
        "name": "ปลาหมึกยำ สูตร 3787",
        "cal": 434
    },
    "steamed_fish_3788": {
        "name": "ปลานึ่ง สูตร 3788",
        "cal": 392
    },
    "boiled_pork_3789": {
        "name": "หมูต้ม สูตร 3789",
        "cal": 442
    },
    "steamed_fish_3790": {
        "name": "ปลานึ่ง สูตร 3790",
        "cal": 487
    },
    "spicy_noodle_3791": {
        "name": "บะหมี่ยำ สูตร 3791",
        "cal": 690
    },
    "spicy_noodle_3792": {
        "name": "บะหมี่ยำ สูตร 3792",
        "cal": 550
    },
    "spicy_squid_3793": {
        "name": "ปลาหมึกยำ สูตร 3793",
        "cal": 91
    },
    "stir_fried_fish_3794": {
        "name": "ปลาผัด สูตร 3794",
        "cal": 779
    },
    "boiled_soup_3795": {
        "name": "ซุปต้ม สูตร 3795",
        "cal": 645
    },
    "boiled_noodle_3796": {
        "name": "บะหมี่ต้ม สูตร 3796",
        "cal": 213
    },
    "boiled_beef_3797": {
        "name": "เนื้อต้ม สูตร 3797",
        "cal": 154
    },
    "stir_fried_chicken_3798": {
        "name": "ไก่ผัด สูตร 3798",
        "cal": 587
    },
    "spicy_noodle_3799": {
        "name": "บะหมี่ยำ สูตร 3799",
        "cal": 40
    },
    "fried_soup_3800": {
        "name": "ซุปทอด สูตร 3800",
        "cal": 248
    },
    "spicy_chicken_3801": {
        "name": "ไก่ยำ สูตร 3801",
        "cal": 311
    },
    "boiled_beef_3802": {
        "name": "เนื้อต้ม สูตร 3802",
        "cal": 690
    },
    "stir_fried_shrimp_3803": {
        "name": "กุ้งผัด สูตร 3803",
        "cal": 301
    },
    "grilled_rice_3804": {
        "name": "ข้าวย่าง สูตร 3804",
        "cal": 145
    },
    "grilled_noodle_3805": {
        "name": "บะหมี่ย่าง สูตร 3805",
        "cal": 614
    },
    "fried_soup_3806": {
        "name": "ซุปทอด สูตร 3806",
        "cal": 146
    },
    "spicy_fish_3807": {
        "name": "ปลายำ สูตร 3807",
        "cal": 811
    },
    "steamed_chicken_3808": {
        "name": "ไก่นึ่ง สูตร 3808",
        "cal": 212
    },
    "spicy_noodle_3809": {
        "name": "บะหมี่ยำ สูตร 3809",
        "cal": 734
    },
    "fried_chicken_3810": {
        "name": "ไก่ทอด สูตร 3810",
        "cal": 751
    },
    "fried_fish_3811": {
        "name": "ปลาทอด สูตร 3811",
        "cal": 292
    },
    "spicy_soup_3812": {
        "name": "ซุปยำ สูตร 3812",
        "cal": 706
    },
    "stir_fried_shrimp_3813": {
        "name": "กุ้งผัด สูตร 3813",
        "cal": 639
    },
    "grilled_soup_3814": {
        "name": "ซุปย่าง สูตร 3814",
        "cal": 139
    },
    "grilled_squid_3815": {
        "name": "ปลาหมึกย่าง สูตร 3815",
        "cal": 284
    },
    "fried_shrimp_3816": {
        "name": "กุ้งทอด สูตร 3816",
        "cal": 402
    },
    "steamed_squid_3817": {
        "name": "ปลาหมึกนึ่ง สูตร 3817",
        "cal": 463
    },
    "fried_fish_3818": {
        "name": "ปลาทอด สูตร 3818",
        "cal": 364
    },
    "steamed_chicken_3819": {
        "name": "ไก่นึ่ง สูตร 3819",
        "cal": 676
    },
    "grilled_fish_3820": {
        "name": "ปลาย่าง สูตร 3820",
        "cal": 489
    },
    "boiled_chicken_3821": {
        "name": "ไก่ต้ม สูตร 3821",
        "cal": 396
    },
    "steamed_chicken_3822": {
        "name": "ไก่นึ่ง สูตร 3822",
        "cal": 415
    },
    "spicy_soup_3823": {
        "name": "ซุปยำ สูตร 3823",
        "cal": 748
    },
    "boiled_shrimp_3824": {
        "name": "กุ้งต้ม สูตร 3824",
        "cal": 733
    },
    "steamed_beef_3825": {
        "name": "เนื้อนึ่ง สูตร 3825",
        "cal": 563
    },
    "fried_fish_3826": {
        "name": "ปลาทอด สูตร 3826",
        "cal": 527
    },
    "boiled_rice_3827": {
        "name": "ข้าวต้ม สูตร 3827",
        "cal": 142
    },
    "grilled_fish_3828": {
        "name": "ปลาย่าง สูตร 3828",
        "cal": 370
    },
    "stir_fried_chicken_3829": {
        "name": "ไก่ผัด สูตร 3829",
        "cal": 601
    },
    "grilled_rice_3830": {
        "name": "ข้าวย่าง สูตร 3830",
        "cal": 610
    },
    "fried_rice_3831": {
        "name": "ข้าวทอด สูตร 3831",
        "cal": 747
    },
    "stir_fried_squid_3832": {
        "name": "ปลาหมึกผัด สูตร 3832",
        "cal": 382
    },
    "steamed_squid_3833": {
        "name": "ปลาหมึกนึ่ง สูตร 3833",
        "cal": 639
    },
    "steamed_rice_3834": {
        "name": "ข้าวนึ่ง สูตร 3834",
        "cal": 623
    },
    "spicy_squid_3835": {
        "name": "ปลาหมึกยำ สูตร 3835",
        "cal": 161
    },
    "stir_fried_fish_3836": {
        "name": "ปลาผัด สูตร 3836",
        "cal": 726
    },
    "steamed_beef_3837": {
        "name": "เนื้อนึ่ง สูตร 3837",
        "cal": 695
    },
    "fried_noodle_3838": {
        "name": "บะหมี่ทอด สูตร 3838",
        "cal": 568
    },
    "spicy_beef_3839": {
        "name": "เนื้อยำ สูตร 3839",
        "cal": 682
    },
    "grilled_fish_3840": {
        "name": "ปลาย่าง สูตร 3840",
        "cal": 643
    },
    "stir_fried_pork_3841": {
        "name": "หมูผัด สูตร 3841",
        "cal": 230
    },
    "spicy_rice_3842": {
        "name": "ข้าวยำ สูตร 3842",
        "cal": 479
    },
    "spicy_pork_3843": {
        "name": "หมูยำ สูตร 3843",
        "cal": 224
    },
    "grilled_noodle_3844": {
        "name": "บะหมี่ย่าง สูตร 3844",
        "cal": 572
    },
    "stir_fried_noodle_3845": {
        "name": "บะหมี่ผัด สูตร 3845",
        "cal": 106
    },
    "spicy_squid_3846": {
        "name": "ปลาหมึกยำ สูตร 3846",
        "cal": 508
    },
    "stir_fried_soup_3847": {
        "name": "ซุปผัด สูตร 3847",
        "cal": 495
    },
    "stir_fried_beef_3848": {
        "name": "เนื้อผัด สูตร 3848",
        "cal": 59
    },
    "boiled_chicken_3849": {
        "name": "ไก่ต้ม สูตร 3849",
        "cal": 711
    },
    "grilled_squid_3850": {
        "name": "ปลาหมึกย่าง สูตร 3850",
        "cal": 471
    },
    "fried_beef_3851": {
        "name": "เนื้อทอด สูตร 3851",
        "cal": 738
    },
    "stir_fried_squid_3852": {
        "name": "ปลาหมึกผัด สูตร 3852",
        "cal": 425
    },
    "spicy_pork_3853": {
        "name": "หมูยำ สูตร 3853",
        "cal": 145
    },
    "spicy_squid_3854": {
        "name": "ปลาหมึกยำ สูตร 3854",
        "cal": 52
    },
    "fried_beef_3855": {
        "name": "เนื้อทอด สูตร 3855",
        "cal": 532
    },
    "stir_fried_chicken_3856": {
        "name": "ไก่ผัด สูตร 3856",
        "cal": 293
    },
    "stir_fried_beef_3857": {
        "name": "เนื้อผัด สูตร 3857",
        "cal": 238
    },
    "grilled_squid_3858": {
        "name": "ปลาหมึกย่าง สูตร 3858",
        "cal": 28
    },
    "boiled_shrimp_3859": {
        "name": "กุ้งต้ม สูตร 3859",
        "cal": 357
    },
    "fried_soup_3860": {
        "name": "ซุปทอด สูตร 3860",
        "cal": 782
    },
    "steamed_rice_3861": {
        "name": "ข้าวนึ่ง สูตร 3861",
        "cal": 735
    },
    "stir_fried_beef_3862": {
        "name": "เนื้อผัด สูตร 3862",
        "cal": 80
    },
    "stir_fried_rice_3863": {
        "name": "ข้าวผัด สูตร 3863",
        "cal": 94
    },
    "boiled_squid_3864": {
        "name": "ปลาหมึกต้ม สูตร 3864",
        "cal": 330
    },
    "spicy_fish_3865": {
        "name": "ปลายำ สูตร 3865",
        "cal": 757
    },
    "stir_fried_soup_3866": {
        "name": "ซุปผัด สูตร 3866",
        "cal": 622
    },
    "spicy_fish_3867": {
        "name": "ปลายำ สูตร 3867",
        "cal": 698
    },
    "fried_squid_3868": {
        "name": "ปลาหมึกทอด สูตร 3868",
        "cal": 496
    },
    "grilled_noodle_3869": {
        "name": "บะหมี่ย่าง สูตร 3869",
        "cal": 46
    },
    "spicy_rice_3870": {
        "name": "ข้าวยำ สูตร 3870",
        "cal": 332
    },
    "boiled_squid_3871": {
        "name": "ปลาหมึกต้ม สูตร 3871",
        "cal": 654
    },
    "spicy_shrimp_3872": {
        "name": "กุ้งยำ สูตร 3872",
        "cal": 456
    },
    "steamed_noodle_3873": {
        "name": "บะหมี่นึ่ง สูตร 3873",
        "cal": 158
    },
    "boiled_noodle_3874": {
        "name": "บะหมี่ต้ม สูตร 3874",
        "cal": 582
    },
    "steamed_fish_3875": {
        "name": "ปลานึ่ง สูตร 3875",
        "cal": 457
    },
    "steamed_soup_3876": {
        "name": "ซุปนึ่ง สูตร 3876",
        "cal": 634
    },
    "grilled_pork_3877": {
        "name": "หมูย่าง สูตร 3877",
        "cal": 488
    },
    "fried_pork_3878": {
        "name": "หมูทอด สูตร 3878",
        "cal": 733
    },
    "stir_fried_rice_3879": {
        "name": "ข้าวผัด สูตร 3879",
        "cal": 274
    },
    "boiled_chicken_3880": {
        "name": "ไก่ต้ม สูตร 3880",
        "cal": 786
    },
    "steamed_beef_3881": {
        "name": "เนื้อนึ่ง สูตร 3881",
        "cal": 200
    },
    "boiled_pork_3882": {
        "name": "หมูต้ม สูตร 3882",
        "cal": 629
    },
    "steamed_fish_3883": {
        "name": "ปลานึ่ง สูตร 3883",
        "cal": 263
    },
    "fried_soup_3884": {
        "name": "ซุปทอด สูตร 3884",
        "cal": 241
    },
    "spicy_squid_3885": {
        "name": "ปลาหมึกยำ สูตร 3885",
        "cal": 314
    },
    "spicy_chicken_3886": {
        "name": "ไก่ยำ สูตร 3886",
        "cal": 48
    },
    "steamed_squid_3887": {
        "name": "ปลาหมึกนึ่ง สูตร 3887",
        "cal": 784
    },
    "boiled_squid_3888": {
        "name": "ปลาหมึกต้ม สูตร 3888",
        "cal": 586
    },
    "grilled_squid_3889": {
        "name": "ปลาหมึกย่าง สูตร 3889",
        "cal": 439
    },
    "fried_pork_3890": {
        "name": "หมูทอด สูตร 3890",
        "cal": 664
    },
    "steamed_pork_3891": {
        "name": "หมูนึ่ง สูตร 3891",
        "cal": 183
    },
    "boiled_squid_3892": {
        "name": "ปลาหมึกต้ม สูตร 3892",
        "cal": 538
    },
    "fried_beef_3893": {
        "name": "เนื้อทอด สูตร 3893",
        "cal": 633
    },
    "steamed_soup_3894": {
        "name": "ซุปนึ่ง สูตร 3894",
        "cal": 633
    },
    "steamed_squid_3895": {
        "name": "ปลาหมึกนึ่ง สูตร 3895",
        "cal": 51
    },
    "stir_fried_rice_3896": {
        "name": "ข้าวผัด สูตร 3896",
        "cal": 305
    },
    "stir_fried_soup_3897": {
        "name": "ซุปผัด สูตร 3897",
        "cal": 66
    },
    "stir_fried_beef_3898": {
        "name": "เนื้อผัด สูตร 3898",
        "cal": 617
    },
    "spicy_squid_3899": {
        "name": "ปลาหมึกยำ สูตร 3899",
        "cal": 358
    },
    "grilled_squid_3900": {
        "name": "ปลาหมึกย่าง สูตร 3900",
        "cal": 276
    },
    "grilled_pork_3901": {
        "name": "หมูย่าง สูตร 3901",
        "cal": 226
    },
    "fried_pork_3902": {
        "name": "หมูทอด สูตร 3902",
        "cal": 809
    },
    "fried_fish_3903": {
        "name": "ปลาทอด สูตร 3903",
        "cal": 403
    },
    "boiled_chicken_3904": {
        "name": "ไก่ต้ม สูตร 3904",
        "cal": 515
    },
    "stir_fried_noodle_3905": {
        "name": "บะหมี่ผัด สูตร 3905",
        "cal": 545
    },
    "spicy_rice_3906": {
        "name": "ข้าวยำ สูตร 3906",
        "cal": 558
    },
    "steamed_chicken_3907": {
        "name": "ไก่นึ่ง สูตร 3907",
        "cal": 516
    },
    "stir_fried_chicken_3908": {
        "name": "ไก่ผัด สูตร 3908",
        "cal": 322
    },
    "fried_pork_3909": {
        "name": "หมูทอด สูตร 3909",
        "cal": 34
    },
    "fried_soup_3910": {
        "name": "ซุปทอด สูตร 3910",
        "cal": 637
    },
    "steamed_shrimp_3911": {
        "name": "กุ้งนึ่ง สูตร 3911",
        "cal": 174
    },
    "grilled_soup_3912": {
        "name": "ซุปย่าง สูตร 3912",
        "cal": 64
    },
    "steamed_rice_3913": {
        "name": "ข้าวนึ่ง สูตร 3913",
        "cal": 298
    },
    "fried_rice_3914": {
        "name": "ข้าวทอด สูตร 3914",
        "cal": 390
    },
    "steamed_rice_3915": {
        "name": "ข้าวนึ่ง สูตร 3915",
        "cal": 440
    },
    "steamed_squid_3916": {
        "name": "ปลาหมึกนึ่ง สูตร 3916",
        "cal": 666
    },
    "boiled_squid_3917": {
        "name": "ปลาหมึกต้ม สูตร 3917",
        "cal": 482
    },
    "steamed_noodle_3918": {
        "name": "บะหมี่นึ่ง สูตร 3918",
        "cal": 126
    },
    "steamed_fish_3919": {
        "name": "ปลานึ่ง สูตร 3919",
        "cal": 134
    },
    "fried_shrimp_3920": {
        "name": "กุ้งทอด สูตร 3920",
        "cal": 416
    },
    "steamed_chicken_3921": {
        "name": "ไก่นึ่ง สูตร 3921",
        "cal": 650
    },
    "grilled_chicken_3922": {
        "name": "ไก่ย่าง สูตร 3922",
        "cal": 329
    },
    "spicy_noodle_3923": {
        "name": "บะหมี่ยำ สูตร 3923",
        "cal": 830
    },
    "boiled_beef_3924": {
        "name": "เนื้อต้ม สูตร 3924",
        "cal": 747
    },
    "fried_noodle_3925": {
        "name": "บะหมี่ทอด สูตร 3925",
        "cal": 49
    },
    "grilled_chicken_3926": {
        "name": "ไก่ย่าง สูตร 3926",
        "cal": 73
    },
    "boiled_beef_3927": {
        "name": "เนื้อต้ม สูตร 3927",
        "cal": 264
    },
    "fried_rice_3928": {
        "name": "ข้าวทอด สูตร 3928",
        "cal": 52
    },
    "steamed_shrimp_3929": {
        "name": "กุ้งนึ่ง สูตร 3929",
        "cal": 822
    },
    "steamed_fish_3930": {
        "name": "ปลานึ่ง สูตร 3930",
        "cal": 540
    },
    "spicy_rice_3931": {
        "name": "ข้าวยำ สูตร 3931",
        "cal": 435
    },
    "spicy_squid_3932": {
        "name": "ปลาหมึกยำ สูตร 3932",
        "cal": 834
    },
    "spicy_soup_3933": {
        "name": "ซุปยำ สูตร 3933",
        "cal": 384
    },
    "grilled_noodle_3934": {
        "name": "บะหมี่ย่าง สูตร 3934",
        "cal": 379
    },
    "spicy_squid_3935": {
        "name": "ปลาหมึกยำ สูตร 3935",
        "cal": 77
    },
    "spicy_pork_3936": {
        "name": "หมูยำ สูตร 3936",
        "cal": 634
    },
    "boiled_squid_3937": {
        "name": "ปลาหมึกต้ม สูตร 3937",
        "cal": 145
    },
    "fried_fish_3938": {
        "name": "ปลาทอด สูตร 3938",
        "cal": 274
    },
    "stir_fried_squid_3939": {
        "name": "ปลาหมึกผัด สูตร 3939",
        "cal": 484
    },
    "grilled_noodle_3940": {
        "name": "บะหมี่ย่าง สูตร 3940",
        "cal": 722
    },
    "grilled_soup_3941": {
        "name": "ซุปย่าง สูตร 3941",
        "cal": 383
    },
    "fried_shrimp_3942": {
        "name": "กุ้งทอด สูตร 3942",
        "cal": 340
    },
    "boiled_beef_3943": {
        "name": "เนื้อต้ม สูตร 3943",
        "cal": 186
    },
    "steamed_pork_3944": {
        "name": "หมูนึ่ง สูตร 3944",
        "cal": 547
    },
    "spicy_shrimp_3945": {
        "name": "กุ้งยำ สูตร 3945",
        "cal": 623
    },
    "fried_squid_3946": {
        "name": "ปลาหมึกทอด สูตร 3946",
        "cal": 782
    },
    "steamed_squid_3947": {
        "name": "ปลาหมึกนึ่ง สูตร 3947",
        "cal": 128
    },
    "steamed_beef_3948": {
        "name": "เนื้อนึ่ง สูตร 3948",
        "cal": 388
    },
    "grilled_beef_3949": {
        "name": "เนื้อย่าง สูตร 3949",
        "cal": 786
    },
    "grilled_pork_3950": {
        "name": "หมูย่าง สูตร 3950",
        "cal": 121
    },
    "fried_shrimp_3951": {
        "name": "กุ้งทอด สูตร 3951",
        "cal": 624
    },
    "grilled_rice_3952": {
        "name": "ข้าวย่าง สูตร 3952",
        "cal": 266
    },
    "grilled_shrimp_3953": {
        "name": "กุ้งย่าง สูตร 3953",
        "cal": 582
    },
    "fried_shrimp_3954": {
        "name": "กุ้งทอด สูตร 3954",
        "cal": 565
    },
    "fried_fish_3955": {
        "name": "ปลาทอด สูตร 3955",
        "cal": 655
    },
    "boiled_soup_3956": {
        "name": "ซุปต้ม สูตร 3956",
        "cal": 838
    },
    "fried_soup_3957": {
        "name": "ซุปทอด สูตร 3957",
        "cal": 525
    },
    "boiled_shrimp_3958": {
        "name": "กุ้งต้ม สูตร 3958",
        "cal": 797
    },
    "spicy_rice_3959": {
        "name": "ข้าวยำ สูตร 3959",
        "cal": 641
    },
    "fried_fish_3960": {
        "name": "ปลาทอด สูตร 3960",
        "cal": 451
    },
    "boiled_rice_3961": {
        "name": "ข้าวต้ม สูตร 3961",
        "cal": 147
    },
    "steamed_noodle_3962": {
        "name": "บะหมี่นึ่ง สูตร 3962",
        "cal": 425
    },
    "fried_rice_3963": {
        "name": "ข้าวทอด สูตร 3963",
        "cal": 713
    },
    "spicy_chicken_3964": {
        "name": "ไก่ยำ สูตร 3964",
        "cal": 478
    },
    "fried_beef_3965": {
        "name": "เนื้อทอด สูตร 3965",
        "cal": 136
    },
    "grilled_fish_3966": {
        "name": "ปลาย่าง สูตร 3966",
        "cal": 390
    },
    "boiled_chicken_3967": {
        "name": "ไก่ต้ม สูตร 3967",
        "cal": 61
    },
    "stir_fried_beef_3968": {
        "name": "เนื้อผัด สูตร 3968",
        "cal": 191
    },
    "spicy_rice_3969": {
        "name": "ข้าวยำ สูตร 3969",
        "cal": 59
    },
    "fried_pork_3970": {
        "name": "หมูทอด สูตร 3970",
        "cal": 739
    },
    "spicy_rice_3971": {
        "name": "ข้าวยำ สูตร 3971",
        "cal": 144
    },
    "grilled_fish_3972": {
        "name": "ปลาย่าง สูตร 3972",
        "cal": 644
    },
    "stir_fried_squid_3973": {
        "name": "ปลาหมึกผัด สูตร 3973",
        "cal": 747
    },
    "stir_fried_pork_3974": {
        "name": "หมูผัด สูตร 3974",
        "cal": 44
    },
    "grilled_rice_3975": {
        "name": "ข้าวย่าง สูตร 3975",
        "cal": 592
    },
    "stir_fried_squid_3976": {
        "name": "ปลาหมึกผัด สูตร 3976",
        "cal": 800
    },
    "spicy_rice_3977": {
        "name": "ข้าวยำ สูตร 3977",
        "cal": 197
    },
    "grilled_rice_3978": {
        "name": "ข้าวย่าง สูตร 3978",
        "cal": 528
    },
    "spicy_beef_3979": {
        "name": "เนื้อยำ สูตร 3979",
        "cal": 748
    },
    "steamed_chicken_3980": {
        "name": "ไก่นึ่ง สูตร 3980",
        "cal": 208
    },
    "spicy_soup_3981": {
        "name": "ซุปยำ สูตร 3981",
        "cal": 257
    },
    "steamed_squid_3982": {
        "name": "ปลาหมึกนึ่ง สูตร 3982",
        "cal": 779
    },
    "stir_fried_soup_3983": {
        "name": "ซุปผัด สูตร 3983",
        "cal": 384
    },
    "boiled_pork_3984": {
        "name": "หมูต้ม สูตร 3984",
        "cal": 508
    },
    "fried_rice_3985": {
        "name": "ข้าวทอด สูตร 3985",
        "cal": 600
    },
    "spicy_rice_3986": {
        "name": "ข้าวยำ สูตร 3986",
        "cal": 277
    },
    "grilled_fish_3987": {
        "name": "ปลาย่าง สูตร 3987",
        "cal": 307
    },
    "grilled_squid_3988": {
        "name": "ปลาหมึกย่าง สูตร 3988",
        "cal": 797
    },
    "fried_beef_3989": {
        "name": "เนื้อทอด สูตร 3989",
        "cal": 356
    },
    "fried_rice_3990": {
        "name": "ข้าวทอด สูตร 3990",
        "cal": 146
    },
    "steamed_shrimp_3991": {
        "name": "กุ้งนึ่ง สูตร 3991",
        "cal": 177
    },
    "stir_fried_soup_3992": {
        "name": "ซุปผัด สูตร 3992",
        "cal": 472
    },
    "spicy_rice_3993": {
        "name": "ข้าวยำ สูตร 3993",
        "cal": 191
    },
    "boiled_rice_3994": {
        "name": "ข้าวต้ม สูตร 3994",
        "cal": 514
    },
    "stir_fried_fish_3995": {
        "name": "ปลาผัด สูตร 3995",
        "cal": 494
    },
    "fried_beef_3996": {
        "name": "เนื้อทอด สูตร 3996",
        "cal": 24
    },
    "spicy_rice_3997": {
        "name": "ข้าวยำ สูตร 3997",
        "cal": 828
    },
    "boiled_rice_3998": {
        "name": "ข้าวต้ม สูตร 3998",
        "cal": 152
    },
    "stir_fried_rice_3999": {
        "name": "ข้าวผัด สูตร 3999",
        "cal": 327
    },
    "grilled_soup_4000": {
        "name": "ซุปย่าง สูตร 4000",
        "cal": 100
    },
    "fried_rice_4001": {
        "name": "ข้าวทอด สูตร 4001",
        "cal": 339
    },
    "fried_squid_4002": {
        "name": "ปลาหมึกทอด สูตร 4002",
        "cal": 404
    },
    "boiled_rice_4003": {
        "name": "ข้าวต้ม สูตร 4003",
        "cal": 312
    },
    "stir_fried_soup_4004": {
        "name": "ซุปผัด สูตร 4004",
        "cal": 297
    },
    "fried_soup_4005": {
        "name": "ซุปทอด สูตร 4005",
        "cal": 168
    },
    "stir_fried_chicken_4006": {
        "name": "ไก่ผัด สูตร 4006",
        "cal": 834
    },
    "fried_shrimp_4007": {
        "name": "กุ้งทอด สูตร 4007",
        "cal": 271
    },
    "spicy_rice_4008": {
        "name": "ข้าวยำ สูตร 4008",
        "cal": 229
    },
    "fried_shrimp_4009": {
        "name": "กุ้งทอด สูตร 4009",
        "cal": 134
    },
    "stir_fried_beef_4010": {
        "name": "เนื้อผัด สูตร 4010",
        "cal": 460
    },
    "stir_fried_chicken_4011": {
        "name": "ไก่ผัด สูตร 4011",
        "cal": 481
    },
    "boiled_beef_4012": {
        "name": "เนื้อต้ม สูตร 4012",
        "cal": 492
    },
    "stir_fried_shrimp_4013": {
        "name": "กุ้งผัด สูตร 4013",
        "cal": 93
    },
    "grilled_fish_4014": {
        "name": "ปลาย่าง สูตร 4014",
        "cal": 631
    },
    "stir_fried_rice_4015": {
        "name": "ข้าวผัด สูตร 4015",
        "cal": 20
    },
    "spicy_fish_4016": {
        "name": "ปลายำ สูตร 4016",
        "cal": 213
    },
    "stir_fried_chicken_4017": {
        "name": "ไก่ผัด สูตร 4017",
        "cal": 278
    },
    "boiled_rice_4018": {
        "name": "ข้าวต้ม สูตร 4018",
        "cal": 656
    },
    "boiled_squid_4019": {
        "name": "ปลาหมึกต้ม สูตร 4019",
        "cal": 635
    },
    "fried_rice_4020": {
        "name": "ข้าวทอด สูตร 4020",
        "cal": 293
    },
    "spicy_chicken_4021": {
        "name": "ไก่ยำ สูตร 4021",
        "cal": 813
    },
    "stir_fried_chicken_4022": {
        "name": "ไก่ผัด สูตร 4022",
        "cal": 782
    },
    "grilled_rice_4023": {
        "name": "ข้าวย่าง สูตร 4023",
        "cal": 833
    },
    "stir_fried_soup_4024": {
        "name": "ซุปผัด สูตร 4024",
        "cal": 822
    },
    "steamed_chicken_4025": {
        "name": "ไก่นึ่ง สูตร 4025",
        "cal": 713
    },
    "grilled_soup_4026": {
        "name": "ซุปย่าง สูตร 4026",
        "cal": 367
    },
    "fried_chicken_4027": {
        "name": "ไก่ทอด สูตร 4027",
        "cal": 730
    },
    "fried_shrimp_4028": {
        "name": "กุ้งทอด สูตร 4028",
        "cal": 251
    },
    "boiled_shrimp_4029": {
        "name": "กุ้งต้ม สูตร 4029",
        "cal": 222
    },
    "boiled_fish_4030": {
        "name": "ปลาต้ม สูตร 4030",
        "cal": 469
    },
    "grilled_noodle_4031": {
        "name": "บะหมี่ย่าง สูตร 4031",
        "cal": 197
    },
    "fried_pork_4032": {
        "name": "หมูทอด สูตร 4032",
        "cal": 561
    },
    "boiled_rice_4033": {
        "name": "ข้าวต้ม สูตร 4033",
        "cal": 136
    },
    "spicy_pork_4034": {
        "name": "หมูยำ สูตร 4034",
        "cal": 69
    },
    "boiled_pork_4035": {
        "name": "หมูต้ม สูตร 4035",
        "cal": 794
    },
    "stir_fried_rice_4036": {
        "name": "ข้าวผัด สูตร 4036",
        "cal": 808
    },
    "stir_fried_shrimp_4037": {
        "name": "กุ้งผัด สูตร 4037",
        "cal": 544
    },
    "steamed_soup_4038": {
        "name": "ซุปนึ่ง สูตร 4038",
        "cal": 780
    },
    "spicy_pork_4039": {
        "name": "หมูยำ สูตร 4039",
        "cal": 101
    },
    "stir_fried_fish_4040": {
        "name": "ปลาผัด สูตร 4040",
        "cal": 693
    },
    "stir_fried_shrimp_4041": {
        "name": "กุ้งผัด สูตร 4041",
        "cal": 210
    },
    "boiled_pork_4042": {
        "name": "หมูต้ม สูตร 4042",
        "cal": 521
    },
    "fried_beef_4043": {
        "name": "เนื้อทอด สูตร 4043",
        "cal": 604
    },
    "grilled_beef_4044": {
        "name": "เนื้อย่าง สูตร 4044",
        "cal": 796
    },
    "grilled_soup_4045": {
        "name": "ซุปย่าง สูตร 4045",
        "cal": 217
    },
    "fried_fish_4046": {
        "name": "ปลาทอด สูตร 4046",
        "cal": 335
    },
    "steamed_fish_4047": {
        "name": "ปลานึ่ง สูตร 4047",
        "cal": 466
    },
    "boiled_soup_4048": {
        "name": "ซุปต้ม สูตร 4048",
        "cal": 565
    },
    "grilled_shrimp_4049": {
        "name": "กุ้งย่าง สูตร 4049",
        "cal": 746
    },
    "spicy_noodle_4050": {
        "name": "บะหมี่ยำ สูตร 4050",
        "cal": 609
    },
    "grilled_shrimp_4051": {
        "name": "กุ้งย่าง สูตร 4051",
        "cal": 91
    },
    "spicy_soup_4052": {
        "name": "ซุปยำ สูตร 4052",
        "cal": 603
    },
    "stir_fried_beef_4053": {
        "name": "เนื้อผัด สูตร 4053",
        "cal": 491
    },
    "grilled_rice_4054": {
        "name": "ข้าวย่าง สูตร 4054",
        "cal": 149
    },
    "stir_fried_chicken_4055": {
        "name": "ไก่ผัด สูตร 4055",
        "cal": 809
    },
    "steamed_soup_4056": {
        "name": "ซุปนึ่ง สูตร 4056",
        "cal": 394
    },
    "fried_beef_4057": {
        "name": "เนื้อทอด สูตร 4057",
        "cal": 373
    },
    "spicy_pork_4058": {
        "name": "หมูยำ สูตร 4058",
        "cal": 102
    },
    "boiled_noodle_4059": {
        "name": "บะหมี่ต้ม สูตร 4059",
        "cal": 795
    },
    "fried_beef_4060": {
        "name": "เนื้อทอด สูตร 4060",
        "cal": 704
    },
    "boiled_fish_4061": {
        "name": "ปลาต้ม สูตร 4061",
        "cal": 687
    },
    "grilled_fish_4062": {
        "name": "ปลาย่าง สูตร 4062",
        "cal": 734
    },
    "boiled_fish_4063": {
        "name": "ปลาต้ม สูตร 4063",
        "cal": 231
    },
    "fried_fish_4064": {
        "name": "ปลาทอด สูตร 4064",
        "cal": 76
    },
    "boiled_beef_4065": {
        "name": "เนื้อต้ม สูตร 4065",
        "cal": 509
    },
    "spicy_rice_4066": {
        "name": "ข้าวยำ สูตร 4066",
        "cal": 433
    },
    "spicy_rice_4067": {
        "name": "ข้าวยำ สูตร 4067",
        "cal": 356
    },
    "steamed_squid_4068": {
        "name": "ปลาหมึกนึ่ง สูตร 4068",
        "cal": 734
    },
    "spicy_soup_4069": {
        "name": "ซุปยำ สูตร 4069",
        "cal": 205
    },
    "boiled_fish_4070": {
        "name": "ปลาต้ม สูตร 4070",
        "cal": 164
    },
    "stir_fried_rice_4071": {
        "name": "ข้าวผัด สูตร 4071",
        "cal": 359
    },
    "stir_fried_soup_4072": {
        "name": "ซุปผัด สูตร 4072",
        "cal": 811
    },
    "spicy_fish_4073": {
        "name": "ปลายำ สูตร 4073",
        "cal": 800
    },
    "grilled_pork_4074": {
        "name": "หมูย่าง สูตร 4074",
        "cal": 173
    },
    "steamed_fish_4075": {
        "name": "ปลานึ่ง สูตร 4075",
        "cal": 726
    },
    "steamed_chicken_4076": {
        "name": "ไก่นึ่ง สูตร 4076",
        "cal": 403
    },
    "stir_fried_chicken_4077": {
        "name": "ไก่ผัด สูตร 4077",
        "cal": 558
    },
    "boiled_shrimp_4078": {
        "name": "กุ้งต้ม สูตร 4078",
        "cal": 165
    },
    "fried_rice_4079": {
        "name": "ข้าวทอด สูตร 4079",
        "cal": 659
    },
    "steamed_chicken_4080": {
        "name": "ไก่นึ่ง สูตร 4080",
        "cal": 473
    },
    "spicy_beef_4081": {
        "name": "เนื้อยำ สูตร 4081",
        "cal": 628
    },
    "fried_beef_4082": {
        "name": "เนื้อทอด สูตร 4082",
        "cal": 66
    },
    "grilled_soup_4083": {
        "name": "ซุปย่าง สูตร 4083",
        "cal": 689
    },
    "spicy_soup_4084": {
        "name": "ซุปยำ สูตร 4084",
        "cal": 616
    },
    "fried_beef_4085": {
        "name": "เนื้อทอด สูตร 4085",
        "cal": 68
    },
    "grilled_fish_4086": {
        "name": "ปลาย่าง สูตร 4086",
        "cal": 556
    },
    "boiled_squid_4087": {
        "name": "ปลาหมึกต้ม สูตร 4087",
        "cal": 836
    },
    "steamed_chicken_4088": {
        "name": "ไก่นึ่ง สูตร 4088",
        "cal": 479
    },
    "steamed_soup_4089": {
        "name": "ซุปนึ่ง สูตร 4089",
        "cal": 832
    },
    "fried_fish_4090": {
        "name": "ปลาทอด สูตร 4090",
        "cal": 167
    },
    "fried_shrimp_4091": {
        "name": "กุ้งทอด สูตร 4091",
        "cal": 827
    },
    "boiled_squid_4092": {
        "name": "ปลาหมึกต้ม สูตร 4092",
        "cal": 427
    },
    "fried_rice_4093": {
        "name": "ข้าวทอด สูตร 4093",
        "cal": 508
    },
    "stir_fried_noodle_4094": {
        "name": "บะหมี่ผัด สูตร 4094",
        "cal": 166
    },
    "grilled_fish_4095": {
        "name": "ปลาย่าง สูตร 4095",
        "cal": 425
    },
    "stir_fried_beef_4096": {
        "name": "เนื้อผัด สูตร 4096",
        "cal": 34
    },
    "spicy_fish_4097": {
        "name": "ปลายำ สูตร 4097",
        "cal": 323
    },
    "stir_fried_fish_4098": {
        "name": "ปลาผัด สูตร 4098",
        "cal": 342
    },
    "stir_fried_pork_4099": {
        "name": "หมูผัด สูตร 4099",
        "cal": 347
    },
    "fried_chicken_4100": {
        "name": "ไก่ทอด สูตร 4100",
        "cal": 342
    },
    "boiled_rice_4101": {
        "name": "ข้าวต้ม สูตร 4101",
        "cal": 755
    },
    "fried_beef_4102": {
        "name": "เนื้อทอด สูตร 4102",
        "cal": 156
    },
    "spicy_noodle_4103": {
        "name": "บะหมี่ยำ สูตร 4103",
        "cal": 712
    },
    "grilled_beef_4104": {
        "name": "เนื้อย่าง สูตร 4104",
        "cal": 788
    },
    "grilled_shrimp_4105": {
        "name": "กุ้งย่าง สูตร 4105",
        "cal": 530
    },
    "steamed_soup_4106": {
        "name": "ซุปนึ่ง สูตร 4106",
        "cal": 400
    },
    "spicy_beef_4107": {
        "name": "เนื้อยำ สูตร 4107",
        "cal": 655
    },
    "fried_shrimp_4108": {
        "name": "กุ้งทอด สูตร 4108",
        "cal": 367
    },
    "stir_fried_rice_4109": {
        "name": "ข้าวผัด สูตร 4109",
        "cal": 776
    },
    "stir_fried_soup_4110": {
        "name": "ซุปผัด สูตร 4110",
        "cal": 495
    },
    "spicy_pork_4111": {
        "name": "หมูยำ สูตร 4111",
        "cal": 203
    },
    "steamed_shrimp_4112": {
        "name": "กุ้งนึ่ง สูตร 4112",
        "cal": 833
    },
    "grilled_soup_4113": {
        "name": "ซุปย่าง สูตร 4113",
        "cal": 299
    },
    "steamed_squid_4114": {
        "name": "ปลาหมึกนึ่ง สูตร 4114",
        "cal": 225
    },
    "spicy_chicken_4115": {
        "name": "ไก่ยำ สูตร 4115",
        "cal": 491
    },
    "spicy_rice_4116": {
        "name": "ข้าวยำ สูตร 4116",
        "cal": 38
    },
    "fried_squid_4117": {
        "name": "ปลาหมึกทอด สูตร 4117",
        "cal": 527
    },
    "steamed_beef_4118": {
        "name": "เนื้อนึ่ง สูตร 4118",
        "cal": 622
    },
    "steamed_shrimp_4119": {
        "name": "กุ้งนึ่ง สูตร 4119",
        "cal": 78
    },
    "fried_shrimp_4120": {
        "name": "กุ้งทอด สูตร 4120",
        "cal": 690
    },
    "spicy_soup_4121": {
        "name": "ซุปยำ สูตร 4121",
        "cal": 196
    },
    "stir_fried_shrimp_4122": {
        "name": "กุ้งผัด สูตร 4122",
        "cal": 636
    },
    "boiled_soup_4123": {
        "name": "ซุปต้ม สูตร 4123",
        "cal": 682
    },
    "steamed_shrimp_4124": {
        "name": "กุ้งนึ่ง สูตร 4124",
        "cal": 685
    },
    "grilled_rice_4125": {
        "name": "ข้าวย่าง สูตร 4125",
        "cal": 569
    },
    "spicy_shrimp_4126": {
        "name": "กุ้งยำ สูตร 4126",
        "cal": 80
    },
    "fried_squid_4127": {
        "name": "ปลาหมึกทอด สูตร 4127",
        "cal": 365
    },
    "grilled_pork_4128": {
        "name": "หมูย่าง สูตร 4128",
        "cal": 616
    },
    "stir_fried_squid_4129": {
        "name": "ปลาหมึกผัด สูตร 4129",
        "cal": 426
    },
    "steamed_beef_4130": {
        "name": "เนื้อนึ่ง สูตร 4130",
        "cal": 246
    },
    "fried_chicken_4131": {
        "name": "ไก่ทอด สูตร 4131",
        "cal": 384
    },
    "steamed_beef_4132": {
        "name": "เนื้อนึ่ง สูตร 4132",
        "cal": 545
    },
    "stir_fried_rice_4133": {
        "name": "ข้าวผัด สูตร 4133",
        "cal": 69
    },
    "grilled_shrimp_4134": {
        "name": "กุ้งย่าง สูตร 4134",
        "cal": 715
    },
    "steamed_chicken_4135": {
        "name": "ไก่นึ่ง สูตร 4135",
        "cal": 732
    },
    "fried_fish_4136": {
        "name": "ปลาทอด สูตร 4136",
        "cal": 169
    },
    "stir_fried_pork_4137": {
        "name": "หมูผัด สูตร 4137",
        "cal": 102
    },
    "grilled_rice_4138": {
        "name": "ข้าวย่าง สูตร 4138",
        "cal": 502
    },
    "grilled_beef_4139": {
        "name": "เนื้อย่าง สูตร 4139",
        "cal": 432
    },
    "spicy_soup_4140": {
        "name": "ซุปยำ สูตร 4140",
        "cal": 383
    },
    "boiled_shrimp_4141": {
        "name": "กุ้งต้ม สูตร 4141",
        "cal": 543
    },
    "boiled_beef_4142": {
        "name": "เนื้อต้ม สูตร 4142",
        "cal": 653
    },
    "spicy_noodle_4143": {
        "name": "บะหมี่ยำ สูตร 4143",
        "cal": 658
    },
    "grilled_pork_4144": {
        "name": "หมูย่าง สูตร 4144",
        "cal": 186
    },
    "boiled_beef_4145": {
        "name": "เนื้อต้ม สูตร 4145",
        "cal": 193
    },
    "boiled_rice_4146": {
        "name": "ข้าวต้ม สูตร 4146",
        "cal": 422
    },
    "grilled_beef_4147": {
        "name": "เนื้อย่าง สูตร 4147",
        "cal": 588
    },
    "grilled_squid_4148": {
        "name": "ปลาหมึกย่าง สูตร 4148",
        "cal": 249
    },
    "boiled_rice_4149": {
        "name": "ข้าวต้ม สูตร 4149",
        "cal": 688
    },
    "steamed_noodle_4150": {
        "name": "บะหมี่นึ่ง สูตร 4150",
        "cal": 714
    },
    "fried_pork_4151": {
        "name": "หมูทอด สูตร 4151",
        "cal": 507
    },
    "spicy_beef_4152": {
        "name": "เนื้อยำ สูตร 4152",
        "cal": 229
    },
    "stir_fried_rice_4153": {
        "name": "ข้าวผัด สูตร 4153",
        "cal": 578
    },
    "spicy_noodle_4154": {
        "name": "บะหมี่ยำ สูตร 4154",
        "cal": 96
    },
    "boiled_soup_4155": {
        "name": "ซุปต้ม สูตร 4155",
        "cal": 566
    },
    "grilled_soup_4156": {
        "name": "ซุปย่าง สูตร 4156",
        "cal": 376
    },
    "steamed_shrimp_4157": {
        "name": "กุ้งนึ่ง สูตร 4157",
        "cal": 504
    },
    "fried_fish_4158": {
        "name": "ปลาทอด สูตร 4158",
        "cal": 157
    },
    "spicy_shrimp_4159": {
        "name": "กุ้งยำ สูตร 4159",
        "cal": 719
    },
    "boiled_pork_4160": {
        "name": "หมูต้ม สูตร 4160",
        "cal": 333
    },
    "boiled_soup_4161": {
        "name": "ซุปต้ม สูตร 4161",
        "cal": 392
    },
    "boiled_rice_4162": {
        "name": "ข้าวต้ม สูตร 4162",
        "cal": 703
    },
    "stir_fried_soup_4163": {
        "name": "ซุปผัด สูตร 4163",
        "cal": 109
    },
    "boiled_squid_4164": {
        "name": "ปลาหมึกต้ม สูตร 4164",
        "cal": 257
    },
    "boiled_fish_4165": {
        "name": "ปลาต้ม สูตร 4165",
        "cal": 420
    },
    "steamed_shrimp_4166": {
        "name": "กุ้งนึ่ง สูตร 4166",
        "cal": 387
    },
    "stir_fried_chicken_4167": {
        "name": "ไก่ผัด สูตร 4167",
        "cal": 248
    },
    "steamed_soup_4168": {
        "name": "ซุปนึ่ง สูตร 4168",
        "cal": 196
    },
    "grilled_chicken_4169": {
        "name": "ไก่ย่าง สูตร 4169",
        "cal": 49
    },
    "grilled_rice_4170": {
        "name": "ข้าวย่าง สูตร 4170",
        "cal": 826
    },
    "spicy_chicken_4171": {
        "name": "ไก่ยำ สูตร 4171",
        "cal": 598
    },
    "grilled_fish_4172": {
        "name": "ปลาย่าง สูตร 4172",
        "cal": 609
    },
    "stir_fried_shrimp_4173": {
        "name": "กุ้งผัด สูตร 4173",
        "cal": 201
    },
    "grilled_squid_4174": {
        "name": "ปลาหมึกย่าง สูตร 4174",
        "cal": 194
    },
    "stir_fried_fish_4175": {
        "name": "ปลาผัด สูตร 4175",
        "cal": 666
    },
    "stir_fried_fish_4176": {
        "name": "ปลาผัด สูตร 4176",
        "cal": 498
    },
    "boiled_noodle_4177": {
        "name": "บะหมี่ต้ม สูตร 4177",
        "cal": 735
    },
    "steamed_pork_4178": {
        "name": "หมูนึ่ง สูตร 4178",
        "cal": 838
    },
    "grilled_pork_4179": {
        "name": "หมูย่าง สูตร 4179",
        "cal": 738
    },
    "fried_shrimp_4180": {
        "name": "กุ้งทอด สูตร 4180",
        "cal": 489
    },
    "fried_rice_4181": {
        "name": "ข้าวทอด สูตร 4181",
        "cal": 574
    },
    "spicy_noodle_4182": {
        "name": "บะหมี่ยำ สูตร 4182",
        "cal": 194
    },
    "spicy_soup_4183": {
        "name": "ซุปยำ สูตร 4183",
        "cal": 581
    },
    "stir_fried_beef_4184": {
        "name": "เนื้อผัด สูตร 4184",
        "cal": 564
    },
    "steamed_rice_4185": {
        "name": "ข้าวนึ่ง สูตร 4185",
        "cal": 56
    },
    "spicy_squid_4186": {
        "name": "ปลาหมึกยำ สูตร 4186",
        "cal": 571
    },
    "grilled_squid_4187": {
        "name": "ปลาหมึกย่าง สูตร 4187",
        "cal": 496
    },
    "grilled_fish_4188": {
        "name": "ปลาย่าง สูตร 4188",
        "cal": 454
    },
    "boiled_squid_4189": {
        "name": "ปลาหมึกต้ม สูตร 4189",
        "cal": 436
    },
    "grilled_shrimp_4190": {
        "name": "กุ้งย่าง สูตร 4190",
        "cal": 148
    },
    "stir_fried_rice_4191": {
        "name": "ข้าวผัด สูตร 4191",
        "cal": 66
    },
    "spicy_beef_4192": {
        "name": "เนื้อยำ สูตร 4192",
        "cal": 763
    },
    "fried_rice_4193": {
        "name": "ข้าวทอด สูตร 4193",
        "cal": 235
    },
    "spicy_rice_4194": {
        "name": "ข้าวยำ สูตร 4194",
        "cal": 575
    },
    "spicy_squid_4195": {
        "name": "ปลาหมึกยำ สูตร 4195",
        "cal": 445
    },
    "steamed_noodle_4196": {
        "name": "บะหมี่นึ่ง สูตร 4196",
        "cal": 638
    },
    "fried_rice_4197": {
        "name": "ข้าวทอด สูตร 4197",
        "cal": 114
    },
    "spicy_fish_4198": {
        "name": "ปลายำ สูตร 4198",
        "cal": 463
    },
    "fried_rice_4199": {
        "name": "ข้าวทอด สูตร 4199",
        "cal": 600
    },
    "grilled_noodle_4200": {
        "name": "บะหมี่ย่าง สูตร 4200",
        "cal": 522
    },
    "fried_fish_4201": {
        "name": "ปลาทอด สูตร 4201",
        "cal": 725
    },
    "spicy_soup_4202": {
        "name": "ซุปยำ สูตร 4202",
        "cal": 259
    },
    "grilled_rice_4203": {
        "name": "ข้าวย่าง สูตร 4203",
        "cal": 465
    },
    "fried_fish_4204": {
        "name": "ปลาทอด สูตร 4204",
        "cal": 659
    },
    "spicy_beef_4205": {
        "name": "เนื้อยำ สูตร 4205",
        "cal": 312
    },
    "grilled_shrimp_4206": {
        "name": "กุ้งย่าง สูตร 4206",
        "cal": 640
    },
    "fried_pork_4207": {
        "name": "หมูทอด สูตร 4207",
        "cal": 459
    },
    "boiled_rice_4208": {
        "name": "ข้าวต้ม สูตร 4208",
        "cal": 588
    },
    "steamed_soup_4209": {
        "name": "ซุปนึ่ง สูตร 4209",
        "cal": 87
    },
    "boiled_rice_4210": {
        "name": "ข้าวต้ม สูตร 4210",
        "cal": 505
    },
    "stir_fried_pork_4211": {
        "name": "หมูผัด สูตร 4211",
        "cal": 670
    },
    "steamed_chicken_4212": {
        "name": "ไก่นึ่ง สูตร 4212",
        "cal": 799
    },
    "grilled_pork_4213": {
        "name": "หมูย่าง สูตร 4213",
        "cal": 587
    },
    "boiled_shrimp_4214": {
        "name": "กุ้งต้ม สูตร 4214",
        "cal": 69
    },
    "steamed_pork_4215": {
        "name": "หมูนึ่ง สูตร 4215",
        "cal": 64
    },
    "fried_rice_4216": {
        "name": "ข้าวทอด สูตร 4216",
        "cal": 90
    },
    "boiled_chicken_4217": {
        "name": "ไก่ต้ม สูตร 4217",
        "cal": 212
    },
    "steamed_beef_4218": {
        "name": "เนื้อนึ่ง สูตร 4218",
        "cal": 635
    },
    "boiled_shrimp_4219": {
        "name": "กุ้งต้ม สูตร 4219",
        "cal": 255
    },
    "steamed_soup_4220": {
        "name": "ซุปนึ่ง สูตร 4220",
        "cal": 99
    },
    "fried_shrimp_4221": {
        "name": "กุ้งทอด สูตร 4221",
        "cal": 305
    },
    "grilled_squid_4222": {
        "name": "ปลาหมึกย่าง สูตร 4222",
        "cal": 277
    },
    "steamed_chicken_4223": {
        "name": "ไก่นึ่ง สูตร 4223",
        "cal": 145
    },
    "fried_fish_4224": {
        "name": "ปลาทอด สูตร 4224",
        "cal": 116
    },
    "fried_squid_4225": {
        "name": "ปลาหมึกทอด สูตร 4225",
        "cal": 411
    },
    "grilled_pork_4226": {
        "name": "หมูย่าง สูตร 4226",
        "cal": 454
    },
    "steamed_rice_4227": {
        "name": "ข้าวนึ่ง สูตร 4227",
        "cal": 802
    },
    "boiled_fish_4228": {
        "name": "ปลาต้ม สูตร 4228",
        "cal": 35
    },
    "boiled_squid_4229": {
        "name": "ปลาหมึกต้ม สูตร 4229",
        "cal": 431
    },
    "spicy_chicken_4230": {
        "name": "ไก่ยำ สูตร 4230",
        "cal": 22
    },
    "boiled_beef_4231": {
        "name": "เนื้อต้ม สูตร 4231",
        "cal": 542
    },
    "boiled_fish_4232": {
        "name": "ปลาต้ม สูตร 4232",
        "cal": 771
    },
    "boiled_beef_4233": {
        "name": "เนื้อต้ม สูตร 4233",
        "cal": 145
    },
    "boiled_beef_4234": {
        "name": "เนื้อต้ม สูตร 4234",
        "cal": 217
    },
    "boiled_beef_4235": {
        "name": "เนื้อต้ม สูตร 4235",
        "cal": 285
    },
    "grilled_rice_4236": {
        "name": "ข้าวย่าง สูตร 4236",
        "cal": 154
    },
    "steamed_beef_4237": {
        "name": "เนื้อนึ่ง สูตร 4237",
        "cal": 655
    },
    "fried_rice_4238": {
        "name": "ข้าวทอด สูตร 4238",
        "cal": 690
    },
    "stir_fried_pork_4239": {
        "name": "หมูผัด สูตร 4239",
        "cal": 536
    },
    "stir_fried_rice_4240": {
        "name": "ข้าวผัด สูตร 4240",
        "cal": 171
    },
    "boiled_fish_4241": {
        "name": "ปลาต้ม สูตร 4241",
        "cal": 186
    },
    "spicy_noodle_4242": {
        "name": "บะหมี่ยำ สูตร 4242",
        "cal": 586
    },
    "spicy_squid_4243": {
        "name": "ปลาหมึกยำ สูตร 4243",
        "cal": 262
    },
    "grilled_soup_4244": {
        "name": "ซุปย่าง สูตร 4244",
        "cal": 232
    },
    "boiled_fish_4245": {
        "name": "ปลาต้ม สูตร 4245",
        "cal": 521
    },
    "fried_rice_4246": {
        "name": "ข้าวทอด สูตร 4246",
        "cal": 823
    },
    "boiled_rice_4247": {
        "name": "ข้าวต้ม สูตร 4247",
        "cal": 559
    },
    "stir_fried_shrimp_4248": {
        "name": "กุ้งผัด สูตร 4248",
        "cal": 681
    },
    "grilled_rice_4249": {
        "name": "ข้าวย่าง สูตร 4249",
        "cal": 675
    },
    "grilled_soup_4250": {
        "name": "ซุปย่าง สูตร 4250",
        "cal": 680
    },
    "fried_squid_4251": {
        "name": "ปลาหมึกทอด สูตร 4251",
        "cal": 38
    },
    "fried_soup_4252": {
        "name": "ซุปทอด สูตร 4252",
        "cal": 490
    },
    "fried_soup_4253": {
        "name": "ซุปทอด สูตร 4253",
        "cal": 264
    },
    "grilled_pork_4254": {
        "name": "หมูย่าง สูตร 4254",
        "cal": 680
    },
    "boiled_beef_4255": {
        "name": "เนื้อต้ม สูตร 4255",
        "cal": 261
    },
    "boiled_pork_4256": {
        "name": "หมูต้ม สูตร 4256",
        "cal": 510
    },
    "boiled_fish_4257": {
        "name": "ปลาต้ม สูตร 4257",
        "cal": 756
    },
    "spicy_squid_4258": {
        "name": "ปลาหมึกยำ สูตร 4258",
        "cal": 511
    },
    "spicy_pork_4259": {
        "name": "หมูยำ สูตร 4259",
        "cal": 498
    },
    "boiled_beef_4260": {
        "name": "เนื้อต้ม สูตร 4260",
        "cal": 591
    },
    "spicy_chicken_4261": {
        "name": "ไก่ยำ สูตร 4261",
        "cal": 188
    },
    "spicy_shrimp_4262": {
        "name": "กุ้งยำ สูตร 4262",
        "cal": 104
    },
    "boiled_beef_4263": {
        "name": "เนื้อต้ม สูตร 4263",
        "cal": 801
    },
    "steamed_rice_4264": {
        "name": "ข้าวนึ่ง สูตร 4264",
        "cal": 699
    },
    "grilled_beef_4265": {
        "name": "เนื้อย่าง สูตร 4265",
        "cal": 473
    },
    "boiled_beef_4266": {
        "name": "เนื้อต้ม สูตร 4266",
        "cal": 315
    },
    "steamed_squid_4267": {
        "name": "ปลาหมึกนึ่ง สูตร 4267",
        "cal": 605
    },
    "steamed_squid_4268": {
        "name": "ปลาหมึกนึ่ง สูตร 4268",
        "cal": 514
    },
    "spicy_soup_4269": {
        "name": "ซุปยำ สูตร 4269",
        "cal": 574
    },
    "fried_beef_4270": {
        "name": "เนื้อทอด สูตร 4270",
        "cal": 694
    },
    "fried_squid_4271": {
        "name": "ปลาหมึกทอด สูตร 4271",
        "cal": 495
    },
    "steamed_rice_4272": {
        "name": "ข้าวนึ่ง สูตร 4272",
        "cal": 813
    },
    "fried_noodle_4273": {
        "name": "บะหมี่ทอด สูตร 4273",
        "cal": 167
    },
    "boiled_soup_4274": {
        "name": "ซุปต้ม สูตร 4274",
        "cal": 626
    },
    "spicy_pork_4275": {
        "name": "หมูยำ สูตร 4275",
        "cal": 236
    },
    "spicy_beef_4276": {
        "name": "เนื้อยำ สูตร 4276",
        "cal": 503
    },
    "boiled_shrimp_4277": {
        "name": "กุ้งต้ม สูตร 4277",
        "cal": 370
    },
    "stir_fried_chicken_4278": {
        "name": "ไก่ผัด สูตร 4278",
        "cal": 129
    },
    "steamed_fish_4279": {
        "name": "ปลานึ่ง สูตร 4279",
        "cal": 807
    },
    "grilled_chicken_4280": {
        "name": "ไก่ย่าง สูตร 4280",
        "cal": 270
    },
    "grilled_beef_4281": {
        "name": "เนื้อย่าง สูตร 4281",
        "cal": 530
    },
    "boiled_shrimp_4282": {
        "name": "กุ้งต้ม สูตร 4282",
        "cal": 64
    },
    "grilled_beef_4283": {
        "name": "เนื้อย่าง สูตร 4283",
        "cal": 229
    },
    "boiled_fish_4284": {
        "name": "ปลาต้ม สูตร 4284",
        "cal": 310
    },
    "steamed_soup_4285": {
        "name": "ซุปนึ่ง สูตร 4285",
        "cal": 671
    },
    "stir_fried_chicken_4286": {
        "name": "ไก่ผัด สูตร 4286",
        "cal": 248
    },
    "spicy_fish_4287": {
        "name": "ปลายำ สูตร 4287",
        "cal": 181
    },
    "grilled_rice_4288": {
        "name": "ข้าวย่าง สูตร 4288",
        "cal": 396
    },
    "spicy_beef_4289": {
        "name": "เนื้อยำ สูตร 4289",
        "cal": 718
    },
    "grilled_soup_4290": {
        "name": "ซุปย่าง สูตร 4290",
        "cal": 185
    },
    "grilled_soup_4291": {
        "name": "ซุปย่าง สูตร 4291",
        "cal": 312
    },
    "fried_squid_4292": {
        "name": "ปลาหมึกทอด สูตร 4292",
        "cal": 537
    },
    "fried_beef_4293": {
        "name": "เนื้อทอด สูตร 4293",
        "cal": 399
    },
    "boiled_squid_4294": {
        "name": "ปลาหมึกต้ม สูตร 4294",
        "cal": 63
    },
    "boiled_fish_4295": {
        "name": "ปลาต้ม สูตร 4295",
        "cal": 440
    },
    "spicy_fish_4296": {
        "name": "ปลายำ สูตร 4296",
        "cal": 107
    },
    "boiled_shrimp_4297": {
        "name": "กุ้งต้ม สูตร 4297",
        "cal": 787
    },
    "steamed_noodle_4298": {
        "name": "บะหมี่นึ่ง สูตร 4298",
        "cal": 218
    },
    "boiled_noodle_4299": {
        "name": "บะหมี่ต้ม สูตร 4299",
        "cal": 600
    },
    "fried_pork_4300": {
        "name": "หมูทอด สูตร 4300",
        "cal": 550
    },
    "steamed_shrimp_4301": {
        "name": "กุ้งนึ่ง สูตร 4301",
        "cal": 817
    },
    "fried_squid_4302": {
        "name": "ปลาหมึกทอด สูตร 4302",
        "cal": 45
    },
    "grilled_rice_4303": {
        "name": "ข้าวย่าง สูตร 4303",
        "cal": 297
    },
    "boiled_squid_4304": {
        "name": "ปลาหมึกต้ม สูตร 4304",
        "cal": 93
    },
    "spicy_fish_4305": {
        "name": "ปลายำ สูตร 4305",
        "cal": 459
    },
    "spicy_squid_4306": {
        "name": "ปลาหมึกยำ สูตร 4306",
        "cal": 658
    },
    "stir_fried_soup_4307": {
        "name": "ซุปผัด สูตร 4307",
        "cal": 743
    },
    "stir_fried_fish_4308": {
        "name": "ปลาผัด สูตร 4308",
        "cal": 629
    },
    "grilled_noodle_4309": {
        "name": "บะหมี่ย่าง สูตร 4309",
        "cal": 464
    },
    "spicy_rice_4310": {
        "name": "ข้าวยำ สูตร 4310",
        "cal": 363
    },
    "fried_squid_4311": {
        "name": "ปลาหมึกทอด สูตร 4311",
        "cal": 551
    },
    "grilled_soup_4312": {
        "name": "ซุปย่าง สูตร 4312",
        "cal": 531
    },
    "spicy_pork_4313": {
        "name": "หมูยำ สูตร 4313",
        "cal": 485
    },
    "stir_fried_beef_4314": {
        "name": "เนื้อผัด สูตร 4314",
        "cal": 410
    },
    "stir_fried_squid_4315": {
        "name": "ปลาหมึกผัด สูตร 4315",
        "cal": 669
    },
    "stir_fried_fish_4316": {
        "name": "ปลาผัด สูตร 4316",
        "cal": 525
    },
    "stir_fried_squid_4317": {
        "name": "ปลาหมึกผัด สูตร 4317",
        "cal": 630
    },
    "boiled_shrimp_4318": {
        "name": "กุ้งต้ม สูตร 4318",
        "cal": 234
    },
    "stir_fried_rice_4319": {
        "name": "ข้าวผัด สูตร 4319",
        "cal": 347
    },
    "spicy_soup_4320": {
        "name": "ซุปยำ สูตร 4320",
        "cal": 620
    },
    "grilled_rice_4321": {
        "name": "ข้าวย่าง สูตร 4321",
        "cal": 721
    },
    "spicy_pork_4322": {
        "name": "หมูยำ สูตร 4322",
        "cal": 492
    },
    "boiled_soup_4323": {
        "name": "ซุปต้ม สูตร 4323",
        "cal": 326
    },
    "grilled_squid_4324": {
        "name": "ปลาหมึกย่าง สูตร 4324",
        "cal": 728
    },
    "stir_fried_rice_4325": {
        "name": "ข้าวผัด สูตร 4325",
        "cal": 445
    },
    "spicy_noodle_4326": {
        "name": "บะหมี่ยำ สูตร 4326",
        "cal": 548
    },
    "steamed_rice_4327": {
        "name": "ข้าวนึ่ง สูตร 4327",
        "cal": 358
    },
    "stir_fried_soup_4328": {
        "name": "ซุปผัด สูตร 4328",
        "cal": 395
    },
    "boiled_chicken_4329": {
        "name": "ไก่ต้ม สูตร 4329",
        "cal": 113
    },
    "grilled_soup_4330": {
        "name": "ซุปย่าง สูตร 4330",
        "cal": 350
    },
    "spicy_pork_4331": {
        "name": "หมูยำ สูตร 4331",
        "cal": 171
    },
    "grilled_beef_4332": {
        "name": "เนื้อย่าง สูตร 4332",
        "cal": 247
    },
    "boiled_rice_4333": {
        "name": "ข้าวต้ม สูตร 4333",
        "cal": 332
    },
    "grilled_rice_4334": {
        "name": "ข้าวย่าง สูตร 4334",
        "cal": 589
    },
    "grilled_shrimp_4335": {
        "name": "กุ้งย่าง สูตร 4335",
        "cal": 746
    },
    "spicy_soup_4336": {
        "name": "ซุปยำ สูตร 4336",
        "cal": 402
    },
    "boiled_squid_4337": {
        "name": "ปลาหมึกต้ม สูตร 4337",
        "cal": 231
    },
    "stir_fried_noodle_4338": {
        "name": "บะหมี่ผัด สูตร 4338",
        "cal": 584
    },
    "spicy_shrimp_4339": {
        "name": "กุ้งยำ สูตร 4339",
        "cal": 85
    },
    "grilled_noodle_4340": {
        "name": "บะหมี่ย่าง สูตร 4340",
        "cal": 601
    },
    "steamed_beef_4341": {
        "name": "เนื้อนึ่ง สูตร 4341",
        "cal": 273
    },
    "grilled_beef_4342": {
        "name": "เนื้อย่าง สูตร 4342",
        "cal": 622
    },
    "fried_fish_4343": {
        "name": "ปลาทอด สูตร 4343",
        "cal": 210
    },
    "stir_fried_pork_4344": {
        "name": "หมูผัด สูตร 4344",
        "cal": 662
    },
    "boiled_shrimp_4345": {
        "name": "กุ้งต้ม สูตร 4345",
        "cal": 67
    },
    "steamed_beef_4346": {
        "name": "เนื้อนึ่ง สูตร 4346",
        "cal": 187
    },
    "grilled_rice_4347": {
        "name": "ข้าวย่าง สูตร 4347",
        "cal": 478
    },
    "boiled_beef_4348": {
        "name": "เนื้อต้ม สูตร 4348",
        "cal": 333
    },
    "spicy_shrimp_4349": {
        "name": "กุ้งยำ สูตร 4349",
        "cal": 133
    },
    "boiled_shrimp_4350": {
        "name": "กุ้งต้ม สูตร 4350",
        "cal": 352
    },
    "stir_fried_beef_4351": {
        "name": "เนื้อผัด สูตร 4351",
        "cal": 66
    },
    "grilled_squid_4352": {
        "name": "ปลาหมึกย่าง สูตร 4352",
        "cal": 467
    },
    "spicy_fish_4353": {
        "name": "ปลายำ สูตร 4353",
        "cal": 755
    },
    "steamed_fish_4354": {
        "name": "ปลานึ่ง สูตร 4354",
        "cal": 714
    },
    "fried_noodle_4355": {
        "name": "บะหมี่ทอด สูตร 4355",
        "cal": 428
    },
    "grilled_squid_4356": {
        "name": "ปลาหมึกย่าง สูตร 4356",
        "cal": 562
    },
    "grilled_soup_4357": {
        "name": "ซุปย่าง สูตร 4357",
        "cal": 474
    },
    "grilled_rice_4358": {
        "name": "ข้าวย่าง สูตร 4358",
        "cal": 651
    },
    "boiled_chicken_4359": {
        "name": "ไก่ต้ม สูตร 4359",
        "cal": 424
    },
    "fried_squid_4360": {
        "name": "ปลาหมึกทอด สูตร 4360",
        "cal": 170
    },
    "grilled_noodle_4361": {
        "name": "บะหมี่ย่าง สูตร 4361",
        "cal": 476
    },
    "steamed_soup_4362": {
        "name": "ซุปนึ่ง สูตร 4362",
        "cal": 692
    },
    "spicy_fish_4363": {
        "name": "ปลายำ สูตร 4363",
        "cal": 500
    },
    "steamed_chicken_4364": {
        "name": "ไก่นึ่ง สูตร 4364",
        "cal": 672
    },
    "boiled_fish_4365": {
        "name": "ปลาต้ม สูตร 4365",
        "cal": 240
    },
    "spicy_fish_4366": {
        "name": "ปลายำ สูตร 4366",
        "cal": 399
    },
    "fried_pork_4367": {
        "name": "หมูทอด สูตร 4367",
        "cal": 80
    },
    "grilled_pork_4368": {
        "name": "หมูย่าง สูตร 4368",
        "cal": 557
    },
    "spicy_pork_4369": {
        "name": "หมูยำ สูตร 4369",
        "cal": 548
    },
    "fried_beef_4370": {
        "name": "เนื้อทอด สูตร 4370",
        "cal": 330
    },
    "spicy_pork_4371": {
        "name": "หมูยำ สูตร 4371",
        "cal": 339
    },
    "fried_shrimp_4372": {
        "name": "กุ้งทอด สูตร 4372",
        "cal": 74
    },
    "spicy_rice_4373": {
        "name": "ข้าวยำ สูตร 4373",
        "cal": 184
    },
    "stir_fried_shrimp_4374": {
        "name": "กุ้งผัด สูตร 4374",
        "cal": 741
    },
    "grilled_fish_4375": {
        "name": "ปลาย่าง สูตร 4375",
        "cal": 190
    },
    "boiled_squid_4376": {
        "name": "ปลาหมึกต้ม สูตร 4376",
        "cal": 772
    },
    "grilled_beef_4377": {
        "name": "เนื้อย่าง สูตร 4377",
        "cal": 399
    },
    "fried_noodle_4378": {
        "name": "บะหมี่ทอด สูตร 4378",
        "cal": 108
    },
    "spicy_pork_4379": {
        "name": "หมูยำ สูตร 4379",
        "cal": 271
    },
    "grilled_fish_4380": {
        "name": "ปลาย่าง สูตร 4380",
        "cal": 676
    },
    "steamed_soup_4381": {
        "name": "ซุปนึ่ง สูตร 4381",
        "cal": 277
    },
    "steamed_squid_4382": {
        "name": "ปลาหมึกนึ่ง สูตร 4382",
        "cal": 99
    },
    "boiled_rice_4383": {
        "name": "ข้าวต้ม สูตร 4383",
        "cal": 629
    },
    "grilled_squid_4384": {
        "name": "ปลาหมึกย่าง สูตร 4384",
        "cal": 27
    },
    "fried_noodle_4385": {
        "name": "บะหมี่ทอด สูตร 4385",
        "cal": 762
    },
    "fried_squid_4386": {
        "name": "ปลาหมึกทอด สูตร 4386",
        "cal": 92
    },
    "boiled_squid_4387": {
        "name": "ปลาหมึกต้ม สูตร 4387",
        "cal": 672
    },
    "fried_soup_4388": {
        "name": "ซุปทอด สูตร 4388",
        "cal": 448
    },
    "steamed_soup_4389": {
        "name": "ซุปนึ่ง สูตร 4389",
        "cal": 113
    },
    "stir_fried_chicken_4390": {
        "name": "ไก่ผัด สูตร 4390",
        "cal": 524
    },
    "boiled_pork_4391": {
        "name": "หมูต้ม สูตร 4391",
        "cal": 474
    },
    "steamed_pork_4392": {
        "name": "หมูนึ่ง สูตร 4392",
        "cal": 716
    },
    "boiled_beef_4393": {
        "name": "เนื้อต้ม สูตร 4393",
        "cal": 421
    },
    "steamed_noodle_4394": {
        "name": "บะหมี่นึ่ง สูตร 4394",
        "cal": 186
    },
    "grilled_pork_4395": {
        "name": "หมูย่าง สูตร 4395",
        "cal": 825
    },
    "fried_fish_4396": {
        "name": "ปลาทอด สูตร 4396",
        "cal": 729
    },
    "fried_beef_4397": {
        "name": "เนื้อทอด สูตร 4397",
        "cal": 782
    },
    "spicy_fish_4398": {
        "name": "ปลายำ สูตร 4398",
        "cal": 289
    },
    "fried_shrimp_4399": {
        "name": "กุ้งทอด สูตร 4399",
        "cal": 302
    },
    "spicy_beef_4400": {
        "name": "เนื้อยำ สูตร 4400",
        "cal": 663
    },
    "spicy_fish_4401": {
        "name": "ปลายำ สูตร 4401",
        "cal": 827
    },
    "fried_soup_4402": {
        "name": "ซุปทอด สูตร 4402",
        "cal": 441
    },
    "boiled_squid_4403": {
        "name": "ปลาหมึกต้ม สูตร 4403",
        "cal": 406
    },
    "fried_soup_4404": {
        "name": "ซุปทอด สูตร 4404",
        "cal": 304
    },
    "boiled_noodle_4405": {
        "name": "บะหมี่ต้ม สูตร 4405",
        "cal": 236
    },
    "fried_noodle_4406": {
        "name": "บะหมี่ทอด สูตร 4406",
        "cal": 846
    },
    "stir_fried_fish_4407": {
        "name": "ปลาผัด สูตร 4407",
        "cal": 736
    },
    "fried_fish_4408": {
        "name": "ปลาทอด สูตร 4408",
        "cal": 742
    },
    "grilled_rice_4409": {
        "name": "ข้าวย่าง สูตร 4409",
        "cal": 577
    },
    "steamed_squid_4410": {
        "name": "ปลาหมึกนึ่ง สูตร 4410",
        "cal": 778
    },
    "steamed_squid_4411": {
        "name": "ปลาหมึกนึ่ง สูตร 4411",
        "cal": 102
    },
    "boiled_noodle_4412": {
        "name": "บะหมี่ต้ม สูตร 4412",
        "cal": 825
    },
    "fried_beef_4413": {
        "name": "เนื้อทอด สูตร 4413",
        "cal": 511
    },
    "spicy_pork_4414": {
        "name": "หมูยำ สูตร 4414",
        "cal": 486
    },
    "steamed_shrimp_4415": {
        "name": "กุ้งนึ่ง สูตร 4415",
        "cal": 599
    },
    "boiled_shrimp_4416": {
        "name": "กุ้งต้ม สูตร 4416",
        "cal": 497
    },
    "spicy_shrimp_4417": {
        "name": "กุ้งยำ สูตร 4417",
        "cal": 588
    },
    "spicy_squid_4418": {
        "name": "ปลาหมึกยำ สูตร 4418",
        "cal": 491
    },
    "grilled_rice_4419": {
        "name": "ข้าวย่าง สูตร 4419",
        "cal": 40
    },
    "steamed_squid_4420": {
        "name": "ปลาหมึกนึ่ง สูตร 4420",
        "cal": 615
    },
    "grilled_fish_4421": {
        "name": "ปลาย่าง สูตร 4421",
        "cal": 549
    },
    "spicy_pork_4422": {
        "name": "หมูยำ สูตร 4422",
        "cal": 671
    },
    "spicy_beef_4423": {
        "name": "เนื้อยำ สูตร 4423",
        "cal": 558
    },
    "boiled_rice_4424": {
        "name": "ข้าวต้ม สูตร 4424",
        "cal": 700
    },
    "stir_fried_rice_4425": {
        "name": "ข้าวผัด สูตร 4425",
        "cal": 651
    },
    "stir_fried_chicken_4426": {
        "name": "ไก่ผัด สูตร 4426",
        "cal": 530
    },
    "fried_beef_4427": {
        "name": "เนื้อทอด สูตร 4427",
        "cal": 815
    },
    "stir_fried_soup_4428": {
        "name": "ซุปผัด สูตร 4428",
        "cal": 137
    },
    "spicy_beef_4429": {
        "name": "เนื้อยำ สูตร 4429",
        "cal": 396
    },
    "spicy_rice_4430": {
        "name": "ข้าวยำ สูตร 4430",
        "cal": 110
    },
    "spicy_soup_4431": {
        "name": "ซุปยำ สูตร 4431",
        "cal": 255
    },
    "spicy_soup_4432": {
        "name": "ซุปยำ สูตร 4432",
        "cal": 387
    },
    "stir_fried_beef_4433": {
        "name": "เนื้อผัด สูตร 4433",
        "cal": 654
    },
    "spicy_rice_4434": {
        "name": "ข้าวยำ สูตร 4434",
        "cal": 435
    },
    "fried_squid_4435": {
        "name": "ปลาหมึกทอด สูตร 4435",
        "cal": 244
    },
    "spicy_shrimp_4436": {
        "name": "กุ้งยำ สูตร 4436",
        "cal": 168
    },
    "grilled_fish_4437": {
        "name": "ปลาย่าง สูตร 4437",
        "cal": 789
    },
    "fried_pork_4438": {
        "name": "หมูทอด สูตร 4438",
        "cal": 511
    },
    "spicy_shrimp_4439": {
        "name": "กุ้งยำ สูตร 4439",
        "cal": 238
    },
    "fried_pork_4440": {
        "name": "หมูทอด สูตร 4440",
        "cal": 568
    },
    "grilled_noodle_4441": {
        "name": "บะหมี่ย่าง สูตร 4441",
        "cal": 639
    },
    "grilled_squid_4442": {
        "name": "ปลาหมึกย่าง สูตร 4442",
        "cal": 196
    },
    "steamed_rice_4443": {
        "name": "ข้าวนึ่ง สูตร 4443",
        "cal": 344
    },
    "steamed_squid_4444": {
        "name": "ปลาหมึกนึ่ง สูตร 4444",
        "cal": 371
    },
    "fried_shrimp_4445": {
        "name": "กุ้งทอด สูตร 4445",
        "cal": 24
    },
    "stir_fried_beef_4446": {
        "name": "เนื้อผัด สูตร 4446",
        "cal": 272
    },
    "boiled_shrimp_4447": {
        "name": "กุ้งต้ม สูตร 4447",
        "cal": 680
    },
    "steamed_squid_4448": {
        "name": "ปลาหมึกนึ่ง สูตร 4448",
        "cal": 595
    },
    "steamed_squid_4449": {
        "name": "ปลาหมึกนึ่ง สูตร 4449",
        "cal": 621
    },
    "fried_rice_4450": {
        "name": "ข้าวทอด สูตร 4450",
        "cal": 117
    },
    "fried_chicken_4451": {
        "name": "ไก่ทอด สูตร 4451",
        "cal": 399
    },
    "spicy_beef_4452": {
        "name": "เนื้อยำ สูตร 4452",
        "cal": 548
    },
    "fried_fish_4453": {
        "name": "ปลาทอด สูตร 4453",
        "cal": 591
    },
    "steamed_beef_4454": {
        "name": "เนื้อนึ่ง สูตร 4454",
        "cal": 592
    },
    "spicy_squid_4455": {
        "name": "ปลาหมึกยำ สูตร 4455",
        "cal": 365
    },
    "grilled_noodle_4456": {
        "name": "บะหมี่ย่าง สูตร 4456",
        "cal": 39
    },
    "spicy_shrimp_4457": {
        "name": "กุ้งยำ สูตร 4457",
        "cal": 318
    },
    "stir_fried_chicken_4458": {
        "name": "ไก่ผัด สูตร 4458",
        "cal": 391
    },
    "spicy_beef_4459": {
        "name": "เนื้อยำ สูตร 4459",
        "cal": 191
    },
    "spicy_pork_4460": {
        "name": "หมูยำ สูตร 4460",
        "cal": 179
    },
    "stir_fried_shrimp_4461": {
        "name": "กุ้งผัด สูตร 4461",
        "cal": 841
    },
    "steamed_squid_4462": {
        "name": "ปลาหมึกนึ่ง สูตร 4462",
        "cal": 129
    },
    "spicy_pork_4463": {
        "name": "หมูยำ สูตร 4463",
        "cal": 655
    },
    "stir_fried_fish_4464": {
        "name": "ปลาผัด สูตร 4464",
        "cal": 623
    },
    "boiled_squid_4465": {
        "name": "ปลาหมึกต้ม สูตร 4465",
        "cal": 579
    },
    "grilled_chicken_4466": {
        "name": "ไก่ย่าง สูตร 4466",
        "cal": 66
    },
    "boiled_fish_4467": {
        "name": "ปลาต้ม สูตร 4467",
        "cal": 655
    },
    "spicy_beef_4468": {
        "name": "เนื้อยำ สูตร 4468",
        "cal": 152
    },
    "steamed_fish_4469": {
        "name": "ปลานึ่ง สูตร 4469",
        "cal": 302
    },
    "stir_fried_squid_4470": {
        "name": "ปลาหมึกผัด สูตร 4470",
        "cal": 743
    },
    "fried_rice_4471": {
        "name": "ข้าวทอด สูตร 4471",
        "cal": 324
    },
    "grilled_pork_4472": {
        "name": "หมูย่าง สูตร 4472",
        "cal": 607
    },
    "spicy_fish_4473": {
        "name": "ปลายำ สูตร 4473",
        "cal": 310
    },
    "grilled_soup_4474": {
        "name": "ซุปย่าง สูตร 4474",
        "cal": 632
    },
    "grilled_noodle_4475": {
        "name": "บะหมี่ย่าง สูตร 4475",
        "cal": 558
    },
    "spicy_rice_4476": {
        "name": "ข้าวยำ สูตร 4476",
        "cal": 109
    },
    "grilled_shrimp_4477": {
        "name": "กุ้งย่าง สูตร 4477",
        "cal": 712
    },
    "stir_fried_squid_4478": {
        "name": "ปลาหมึกผัด สูตร 4478",
        "cal": 573
    },
    "spicy_pork_4479": {
        "name": "หมูยำ สูตร 4479",
        "cal": 224
    },
    "fried_soup_4480": {
        "name": "ซุปทอด สูตร 4480",
        "cal": 303
    },
    "steamed_fish_4481": {
        "name": "ปลานึ่ง สูตร 4481",
        "cal": 789
    },
    "fried_squid_4482": {
        "name": "ปลาหมึกทอด สูตร 4482",
        "cal": 184
    },
    "boiled_soup_4483": {
        "name": "ซุปต้ม สูตร 4483",
        "cal": 695
    },
    "steamed_beef_4484": {
        "name": "เนื้อนึ่ง สูตร 4484",
        "cal": 692
    },
    "fried_rice_4485": {
        "name": "ข้าวทอด สูตร 4485",
        "cal": 164
    },
    "boiled_pork_4486": {
        "name": "หมูต้ม สูตร 4486",
        "cal": 535
    },
    "steamed_squid_4487": {
        "name": "ปลาหมึกนึ่ง สูตร 4487",
        "cal": 329
    },
    "grilled_noodle_4488": {
        "name": "บะหมี่ย่าง สูตร 4488",
        "cal": 345
    },
    "steamed_shrimp_4489": {
        "name": "กุ้งนึ่ง สูตร 4489",
        "cal": 223
    },
    "stir_fried_shrimp_4490": {
        "name": "กุ้งผัด สูตร 4490",
        "cal": 125
    },
    "stir_fried_soup_4491": {
        "name": "ซุปผัด สูตร 4491",
        "cal": 150
    },
    "stir_fried_soup_4492": {
        "name": "ซุปผัด สูตร 4492",
        "cal": 340
    },
    "boiled_rice_4493": {
        "name": "ข้าวต้ม สูตร 4493",
        "cal": 170
    },
    "grilled_noodle_4494": {
        "name": "บะหมี่ย่าง สูตร 4494",
        "cal": 438
    },
    "steamed_soup_4495": {
        "name": "ซุปนึ่ง สูตร 4495",
        "cal": 168
    },
    "stir_fried_soup_4496": {
        "name": "ซุปผัด สูตร 4496",
        "cal": 113
    },
    "steamed_fish_4497": {
        "name": "ปลานึ่ง สูตร 4497",
        "cal": 561
    },
    "fried_noodle_4498": {
        "name": "บะหมี่ทอด สูตร 4498",
        "cal": 401
    },
    "spicy_fish_4499": {
        "name": "ปลายำ สูตร 4499",
        "cal": 367
    },
    "grilled_squid_4500": {
        "name": "ปลาหมึกย่าง สูตร 4500",
        "cal": 474
    },
    "boiled_chicken_4501": {
        "name": "ไก่ต้ม สูตร 4501",
        "cal": 105
    },
    "steamed_shrimp_4502": {
        "name": "กุ้งนึ่ง สูตร 4502",
        "cal": 627
    },
    "fried_chicken_4503": {
        "name": "ไก่ทอด สูตร 4503",
        "cal": 700
    },
    "steamed_soup_4504": {
        "name": "ซุปนึ่ง สูตร 4504",
        "cal": 190
    },
    "spicy_rice_4505": {
        "name": "ข้าวยำ สูตร 4505",
        "cal": 717
    },
    "spicy_pork_4506": {
        "name": "หมูยำ สูตร 4506",
        "cal": 820
    },
    "grilled_squid_4507": {
        "name": "ปลาหมึกย่าง สูตร 4507",
        "cal": 369
    },
    "stir_fried_fish_4508": {
        "name": "ปลาผัด สูตร 4508",
        "cal": 229
    },
    "fried_pork_4509": {
        "name": "หมูทอด สูตร 4509",
        "cal": 634
    },
    "steamed_beef_4510": {
        "name": "เนื้อนึ่ง สูตร 4510",
        "cal": 405
    },
    "spicy_rice_4511": {
        "name": "ข้าวยำ สูตร 4511",
        "cal": 62
    },
    "grilled_chicken_4512": {
        "name": "ไก่ย่าง สูตร 4512",
        "cal": 796
    },
    "spicy_beef_4513": {
        "name": "เนื้อยำ สูตร 4513",
        "cal": 363
    },
    "steamed_squid_4514": {
        "name": "ปลาหมึกนึ่ง สูตร 4514",
        "cal": 343
    },
    "stir_fried_fish_4515": {
        "name": "ปลาผัด สูตร 4515",
        "cal": 220
    },
    "grilled_squid_4516": {
        "name": "ปลาหมึกย่าง สูตร 4516",
        "cal": 396
    },
    "boiled_rice_4517": {
        "name": "ข้าวต้ม สูตร 4517",
        "cal": 266
    },
    "fried_chicken_4518": {
        "name": "ไก่ทอด สูตร 4518",
        "cal": 404
    },
    "boiled_soup_4519": {
        "name": "ซุปต้ม สูตร 4519",
        "cal": 725
    },
    "stir_fried_shrimp_4520": {
        "name": "กุ้งผัด สูตร 4520",
        "cal": 759
    },
    "fried_beef_4521": {
        "name": "เนื้อทอด สูตร 4521",
        "cal": 826
    },
    "fried_soup_4522": {
        "name": "ซุปทอด สูตร 4522",
        "cal": 320
    },
    "steamed_pork_4523": {
        "name": "หมูนึ่ง สูตร 4523",
        "cal": 331
    },
    "stir_fried_pork_4524": {
        "name": "หมูผัด สูตร 4524",
        "cal": 108
    },
    "spicy_squid_4525": {
        "name": "ปลาหมึกยำ สูตร 4525",
        "cal": 608
    },
    "boiled_squid_4526": {
        "name": "ปลาหมึกต้ม สูตร 4526",
        "cal": 810
    },
    "spicy_chicken_4527": {
        "name": "ไก่ยำ สูตร 4527",
        "cal": 768
    },
    "steamed_squid_4528": {
        "name": "ปลาหมึกนึ่ง สูตร 4528",
        "cal": 677
    },
    "steamed_fish_4529": {
        "name": "ปลานึ่ง สูตร 4529",
        "cal": 837
    },
    "fried_squid_4530": {
        "name": "ปลาหมึกทอด สูตร 4530",
        "cal": 75
    },
    "fried_fish_4531": {
        "name": "ปลาทอด สูตร 4531",
        "cal": 50
    },
    "spicy_squid_4532": {
        "name": "ปลาหมึกยำ สูตร 4532",
        "cal": 272
    },
    "steamed_beef_4533": {
        "name": "เนื้อนึ่ง สูตร 4533",
        "cal": 57
    },
    "fried_fish_4534": {
        "name": "ปลาทอด สูตร 4534",
        "cal": 285
    },
    "grilled_chicken_4535": {
        "name": "ไก่ย่าง สูตร 4535",
        "cal": 577
    },
    "steamed_chicken_4536": {
        "name": "ไก่นึ่ง สูตร 4536",
        "cal": 203
    },
    "steamed_rice_4537": {
        "name": "ข้าวนึ่ง สูตร 4537",
        "cal": 720
    },
    "fried_shrimp_4538": {
        "name": "กุ้งทอด สูตร 4538",
        "cal": 745
    },
    "fried_squid_4539": {
        "name": "ปลาหมึกทอด สูตร 4539",
        "cal": 830
    },
    "fried_shrimp_4540": {
        "name": "กุ้งทอด สูตร 4540",
        "cal": 307
    },
    "fried_shrimp_4541": {
        "name": "กุ้งทอด สูตร 4541",
        "cal": 265
    },
    "fried_fish_4542": {
        "name": "ปลาทอด สูตร 4542",
        "cal": 163
    },
    "spicy_pork_4543": {
        "name": "หมูยำ สูตร 4543",
        "cal": 260
    },
    "spicy_beef_4544": {
        "name": "เนื้อยำ สูตร 4544",
        "cal": 30
    },
    "spicy_fish_4545": {
        "name": "ปลายำ สูตร 4545",
        "cal": 336
    },
    "steamed_fish_4546": {
        "name": "ปลานึ่ง สูตร 4546",
        "cal": 687
    },
    "grilled_rice_4547": {
        "name": "ข้าวย่าง สูตร 4547",
        "cal": 452
    },
    "steamed_beef_4548": {
        "name": "เนื้อนึ่ง สูตร 4548",
        "cal": 305
    },
    "stir_fried_pork_4549": {
        "name": "หมูผัด สูตร 4549",
        "cal": 598
    },
    "spicy_shrimp_4550": {
        "name": "กุ้งยำ สูตร 4550",
        "cal": 695
    },
    "grilled_beef_4551": {
        "name": "เนื้อย่าง สูตร 4551",
        "cal": 399
    },
    "stir_fried_pork_4552": {
        "name": "หมูผัด สูตร 4552",
        "cal": 587
    },
    "boiled_beef_4553": {
        "name": "เนื้อต้ม สูตร 4553",
        "cal": 453
    },
    "grilled_squid_4554": {
        "name": "ปลาหมึกย่าง สูตร 4554",
        "cal": 325
    },
    "boiled_fish_4555": {
        "name": "ปลาต้ม สูตร 4555",
        "cal": 260
    },
    "boiled_rice_4556": {
        "name": "ข้าวต้ม สูตร 4556",
        "cal": 236
    },
    "stir_fried_rice_4557": {
        "name": "ข้าวผัด สูตร 4557",
        "cal": 243
    },
    "spicy_shrimp_4558": {
        "name": "กุ้งยำ สูตร 4558",
        "cal": 697
    },
    "grilled_shrimp_4559": {
        "name": "กุ้งย่าง สูตร 4559",
        "cal": 41
    },
    "boiled_chicken_4560": {
        "name": "ไก่ต้ม สูตร 4560",
        "cal": 389
    },
    "steamed_shrimp_4561": {
        "name": "กุ้งนึ่ง สูตร 4561",
        "cal": 476
    },
    "grilled_rice_4562": {
        "name": "ข้าวย่าง สูตร 4562",
        "cal": 741
    },
    "fried_noodle_4563": {
        "name": "บะหมี่ทอด สูตร 4563",
        "cal": 579
    },
    "grilled_beef_4564": {
        "name": "เนื้อย่าง สูตร 4564",
        "cal": 33
    },
    "spicy_noodle_4565": {
        "name": "บะหมี่ยำ สูตร 4565",
        "cal": 358
    },
    "spicy_pork_4566": {
        "name": "หมูยำ สูตร 4566",
        "cal": 771
    },
    "fried_shrimp_4567": {
        "name": "กุ้งทอด สูตร 4567",
        "cal": 629
    },
    "spicy_noodle_4568": {
        "name": "บะหมี่ยำ สูตร 4568",
        "cal": 356
    },
    "fried_beef_4569": {
        "name": "เนื้อทอด สูตร 4569",
        "cal": 770
    },
    "steamed_pork_4570": {
        "name": "หมูนึ่ง สูตร 4570",
        "cal": 779
    },
    "boiled_soup_4571": {
        "name": "ซุปต้ม สูตร 4571",
        "cal": 670
    },
    "fried_squid_4572": {
        "name": "ปลาหมึกทอด สูตร 4572",
        "cal": 59
    },
    "spicy_pork_4573": {
        "name": "หมูยำ สูตร 4573",
        "cal": 64
    },
    "grilled_chicken_4574": {
        "name": "ไก่ย่าง สูตร 4574",
        "cal": 649
    },
    "spicy_squid_4575": {
        "name": "ปลาหมึกยำ สูตร 4575",
        "cal": 771
    },
    "boiled_chicken_4576": {
        "name": "ไก่ต้ม สูตร 4576",
        "cal": 80
    },
    "grilled_fish_4577": {
        "name": "ปลาย่าง สูตร 4577",
        "cal": 487
    },
    "spicy_beef_4578": {
        "name": "เนื้อยำ สูตร 4578",
        "cal": 27
    },
    "spicy_soup_4579": {
        "name": "ซุปยำ สูตร 4579",
        "cal": 449
    },
    "stir_fried_fish_4580": {
        "name": "ปลาผัด สูตร 4580",
        "cal": 364
    },
    "boiled_rice_4581": {
        "name": "ข้าวต้ม สูตร 4581",
        "cal": 480
    },
    "steamed_noodle_4582": {
        "name": "บะหมี่นึ่ง สูตร 4582",
        "cal": 567
    },
    "grilled_fish_4583": {
        "name": "ปลาย่าง สูตร 4583",
        "cal": 828
    },
    "steamed_noodle_4584": {
        "name": "บะหมี่นึ่ง สูตร 4584",
        "cal": 351
    },
    "grilled_shrimp_4585": {
        "name": "กุ้งย่าง สูตร 4585",
        "cal": 498
    },
    "spicy_chicken_4586": {
        "name": "ไก่ยำ สูตร 4586",
        "cal": 780
    },
    "boiled_shrimp_4587": {
        "name": "กุ้งต้ม สูตร 4587",
        "cal": 570
    },
    "steamed_pork_4588": {
        "name": "หมูนึ่ง สูตร 4588",
        "cal": 344
    },
    "stir_fried_fish_4589": {
        "name": "ปลาผัด สูตร 4589",
        "cal": 466
    },
    "boiled_shrimp_4590": {
        "name": "กุ้งต้ม สูตร 4590",
        "cal": 302
    },
    "steamed_fish_4591": {
        "name": "ปลานึ่ง สูตร 4591",
        "cal": 480
    },
    "steamed_fish_4592": {
        "name": "ปลานึ่ง สูตร 4592",
        "cal": 445
    },
    "grilled_soup_4593": {
        "name": "ซุปย่าง สูตร 4593",
        "cal": 406
    },
    "boiled_soup_4594": {
        "name": "ซุปต้ม สูตร 4594",
        "cal": 603
    },
    "fried_shrimp_4595": {
        "name": "กุ้งทอด สูตร 4595",
        "cal": 816
    },
    "steamed_fish_4596": {
        "name": "ปลานึ่ง สูตร 4596",
        "cal": 585
    },
    "boiled_soup_4597": {
        "name": "ซุปต้ม สูตร 4597",
        "cal": 85
    },
    "grilled_noodle_4598": {
        "name": "บะหมี่ย่าง สูตร 4598",
        "cal": 251
    },
    "stir_fried_fish_4599": {
        "name": "ปลาผัด สูตร 4599",
        "cal": 305
    },
    "fried_beef_4600": {
        "name": "เนื้อทอด สูตร 4600",
        "cal": 788
    },
    "fried_soup_4601": {
        "name": "ซุปทอด สูตร 4601",
        "cal": 157
    },
    "steamed_fish_4602": {
        "name": "ปลานึ่ง สูตร 4602",
        "cal": 541
    },
    "fried_fish_4603": {
        "name": "ปลาทอด สูตร 4603",
        "cal": 562
    },
    "steamed_soup_4604": {
        "name": "ซุปนึ่ง สูตร 4604",
        "cal": 407
    },
    "boiled_pork_4605": {
        "name": "หมูต้ม สูตร 4605",
        "cal": 181
    },
    "stir_fried_noodle_4606": {
        "name": "บะหมี่ผัด สูตร 4606",
        "cal": 361
    },
    "spicy_pork_4607": {
        "name": "หมูยำ สูตร 4607",
        "cal": 60
    },
    "steamed_chicken_4608": {
        "name": "ไก่นึ่ง สูตร 4608",
        "cal": 443
    },
    "grilled_squid_4609": {
        "name": "ปลาหมึกย่าง สูตร 4609",
        "cal": 782
    },
    "boiled_pork_4610": {
        "name": "หมูต้ม สูตร 4610",
        "cal": 44
    },
    "steamed_beef_4611": {
        "name": "เนื้อนึ่ง สูตร 4611",
        "cal": 57
    },
    "grilled_shrimp_4612": {
        "name": "กุ้งย่าง สูตร 4612",
        "cal": 515
    },
    "spicy_beef_4613": {
        "name": "เนื้อยำ สูตร 4613",
        "cal": 399
    },
    "stir_fried_beef_4614": {
        "name": "เนื้อผัด สูตร 4614",
        "cal": 544
    },
    "steamed_shrimp_4615": {
        "name": "กุ้งนึ่ง สูตร 4615",
        "cal": 543
    },
    "stir_fried_squid_4616": {
        "name": "ปลาหมึกผัด สูตร 4616",
        "cal": 815
    },
    "boiled_fish_4617": {
        "name": "ปลาต้ม สูตร 4617",
        "cal": 212
    },
    "steamed_soup_4618": {
        "name": "ซุปนึ่ง สูตร 4618",
        "cal": 679
    },
    "stir_fried_soup_4619": {
        "name": "ซุปผัด สูตร 4619",
        "cal": 368
    },
    "steamed_chicken_4620": {
        "name": "ไก่นึ่ง สูตร 4620",
        "cal": 131
    },
    "grilled_soup_4621": {
        "name": "ซุปย่าง สูตร 4621",
        "cal": 47
    },
    "stir_fried_fish_4622": {
        "name": "ปลาผัด สูตร 4622",
        "cal": 612
    },
    "fried_pork_4623": {
        "name": "หมูทอด สูตร 4623",
        "cal": 421
    },
    "fried_beef_4624": {
        "name": "เนื้อทอด สูตร 4624",
        "cal": 25
    },
    "fried_rice_4625": {
        "name": "ข้าวทอด สูตร 4625",
        "cal": 384
    },
    "steamed_chicken_4626": {
        "name": "ไก่นึ่ง สูตร 4626",
        "cal": 459
    },
    "steamed_beef_4627": {
        "name": "เนื้อนึ่ง สูตร 4627",
        "cal": 471
    },
    "stir_fried_pork_4628": {
        "name": "หมูผัด สูตร 4628",
        "cal": 838
    },
    "boiled_chicken_4629": {
        "name": "ไก่ต้ม สูตร 4629",
        "cal": 367
    },
    "fried_squid_4630": {
        "name": "ปลาหมึกทอด สูตร 4630",
        "cal": 258
    },
    "boiled_soup_4631": {
        "name": "ซุปต้ม สูตร 4631",
        "cal": 705
    },
    "grilled_fish_4632": {
        "name": "ปลาย่าง สูตร 4632",
        "cal": 260
    },
    "boiled_fish_4633": {
        "name": "ปลาต้ม สูตร 4633",
        "cal": 423
    },
    "fried_chicken_4634": {
        "name": "ไก่ทอด สูตร 4634",
        "cal": 585
    },
    "steamed_shrimp_4635": {
        "name": "กุ้งนึ่ง สูตร 4635",
        "cal": 774
    },
    "grilled_squid_4636": {
        "name": "ปลาหมึกย่าง สูตร 4636",
        "cal": 42
    },
    "fried_shrimp_4637": {
        "name": "กุ้งทอด สูตร 4637",
        "cal": 43
    },
    "steamed_noodle_4638": {
        "name": "บะหมี่นึ่ง สูตร 4638",
        "cal": 775
    },
    "boiled_noodle_4639": {
        "name": "บะหมี่ต้ม สูตร 4639",
        "cal": 176
    },
    "stir_fried_soup_4640": {
        "name": "ซุปผัด สูตร 4640",
        "cal": 70
    },
    "stir_fried_shrimp_4641": {
        "name": "กุ้งผัด สูตร 4641",
        "cal": 561
    },
    "stir_fried_soup_4642": {
        "name": "ซุปผัด สูตร 4642",
        "cal": 622
    },
    "grilled_squid_4643": {
        "name": "ปลาหมึกย่าง สูตร 4643",
        "cal": 750
    },
    "spicy_noodle_4644": {
        "name": "บะหมี่ยำ สูตร 4644",
        "cal": 343
    },
    "stir_fried_shrimp_4645": {
        "name": "กุ้งผัด สูตร 4645",
        "cal": 526
    },
    "stir_fried_beef_4646": {
        "name": "เนื้อผัด สูตร 4646",
        "cal": 447
    },
    "spicy_shrimp_4647": {
        "name": "กุ้งยำ สูตร 4647",
        "cal": 185
    },
    "stir_fried_pork_4648": {
        "name": "หมูผัด สูตร 4648",
        "cal": 805
    },
    "grilled_rice_4649": {
        "name": "ข้าวย่าง สูตร 4649",
        "cal": 89
    },
    "spicy_fish_4650": {
        "name": "ปลายำ สูตร 4650",
        "cal": 570
    },
    "steamed_noodle_4651": {
        "name": "บะหมี่นึ่ง สูตร 4651",
        "cal": 279
    },
    "grilled_squid_4652": {
        "name": "ปลาหมึกย่าง สูตร 4652",
        "cal": 522
    },
    "steamed_squid_4653": {
        "name": "ปลาหมึกนึ่ง สูตร 4653",
        "cal": 134
    },
    "stir_fried_noodle_4654": {
        "name": "บะหมี่ผัด สูตร 4654",
        "cal": 623
    },
    "fried_squid_4655": {
        "name": "ปลาหมึกทอด สูตร 4655",
        "cal": 314
    },
    "grilled_squid_4656": {
        "name": "ปลาหมึกย่าง สูตร 4656",
        "cal": 547
    },
    "boiled_rice_4657": {
        "name": "ข้าวต้ม สูตร 4657",
        "cal": 474
    },
    "grilled_pork_4658": {
        "name": "หมูย่าง สูตร 4658",
        "cal": 218
    },
    "steamed_beef_4659": {
        "name": "เนื้อนึ่ง สูตร 4659",
        "cal": 361
    },
    "stir_fried_soup_4660": {
        "name": "ซุปผัด สูตร 4660",
        "cal": 114
    },
    "stir_fried_squid_4661": {
        "name": "ปลาหมึกผัด สูตร 4661",
        "cal": 310
    },
    "stir_fried_noodle_4662": {
        "name": "บะหมี่ผัด สูตร 4662",
        "cal": 590
    },
    "spicy_chicken_4663": {
        "name": "ไก่ยำ สูตร 4663",
        "cal": 706
    },
    "grilled_shrimp_4664": {
        "name": "กุ้งย่าง สูตร 4664",
        "cal": 225
    },
    "grilled_pork_4665": {
        "name": "หมูย่าง สูตร 4665",
        "cal": 561
    },
    "boiled_noodle_4666": {
        "name": "บะหมี่ต้ม สูตร 4666",
        "cal": 446
    },
    "grilled_noodle_4667": {
        "name": "บะหมี่ย่าง สูตร 4667",
        "cal": 588
    },
    "fried_rice_4668": {
        "name": "ข้าวทอด สูตร 4668",
        "cal": 808
    },
    "grilled_soup_4669": {
        "name": "ซุปย่าง สูตร 4669",
        "cal": 723
    },
    "fried_rice_4670": {
        "name": "ข้าวทอด สูตร 4670",
        "cal": 406
    },
    "boiled_rice_4671": {
        "name": "ข้าวต้ม สูตร 4671",
        "cal": 549
    },
    "grilled_noodle_4672": {
        "name": "บะหมี่ย่าง สูตร 4672",
        "cal": 676
    },
    "steamed_beef_4673": {
        "name": "เนื้อนึ่ง สูตร 4673",
        "cal": 343
    },
    "steamed_beef_4674": {
        "name": "เนื้อนึ่ง สูตร 4674",
        "cal": 675
    },
    "spicy_shrimp_4675": {
        "name": "กุ้งยำ สูตร 4675",
        "cal": 211
    },
    "spicy_noodle_4676": {
        "name": "บะหมี่ยำ สูตร 4676",
        "cal": 539
    },
    "grilled_shrimp_4677": {
        "name": "กุ้งย่าง สูตร 4677",
        "cal": 274
    },
    "grilled_chicken_4678": {
        "name": "ไก่ย่าง สูตร 4678",
        "cal": 650
    },
    "stir_fried_rice_4679": {
        "name": "ข้าวผัด สูตร 4679",
        "cal": 29
    },
    "grilled_fish_4680": {
        "name": "ปลาย่าง สูตร 4680",
        "cal": 412
    },
    "stir_fried_soup_4681": {
        "name": "ซุปผัด สูตร 4681",
        "cal": 410
    },
    "boiled_pork_4682": {
        "name": "หมูต้ม สูตร 4682",
        "cal": 752
    },
    "spicy_shrimp_4683": {
        "name": "กุ้งยำ สูตร 4683",
        "cal": 565
    },
    "steamed_soup_4684": {
        "name": "ซุปนึ่ง สูตร 4684",
        "cal": 62
    },
    "boiled_fish_4685": {
        "name": "ปลาต้ม สูตร 4685",
        "cal": 744
    },
    "steamed_soup_4686": {
        "name": "ซุปนึ่ง สูตร 4686",
        "cal": 763
    },
    "steamed_shrimp_4687": {
        "name": "กุ้งนึ่ง สูตร 4687",
        "cal": 690
    },
    "steamed_noodle_4688": {
        "name": "บะหมี่นึ่ง สูตร 4688",
        "cal": 318
    },
    "fried_squid_4689": {
        "name": "ปลาหมึกทอด สูตร 4689",
        "cal": 135
    },
    "fried_noodle_4690": {
        "name": "บะหมี่ทอด สูตร 4690",
        "cal": 694
    },
    "grilled_beef_4691": {
        "name": "เนื้อย่าง สูตร 4691",
        "cal": 266
    },
    "steamed_soup_4692": {
        "name": "ซุปนึ่ง สูตร 4692",
        "cal": 166
    },
    "spicy_pork_4693": {
        "name": "หมูยำ สูตร 4693",
        "cal": 184
    },
    "fried_noodle_4694": {
        "name": "บะหมี่ทอด สูตร 4694",
        "cal": 382
    },
    "steamed_noodle_4695": {
        "name": "บะหมี่นึ่ง สูตร 4695",
        "cal": 252
    },
    "steamed_rice_4696": {
        "name": "ข้าวนึ่ง สูตร 4696",
        "cal": 627
    },
    "grilled_rice_4697": {
        "name": "ข้าวย่าง สูตร 4697",
        "cal": 51
    },
    "grilled_beef_4698": {
        "name": "เนื้อย่าง สูตร 4698",
        "cal": 371
    },
    "fried_chicken_4699": {
        "name": "ไก่ทอด สูตร 4699",
        "cal": 159
    },
    "boiled_beef_4700": {
        "name": "เนื้อต้ม สูตร 4700",
        "cal": 345
    },
    "spicy_squid_4701": {
        "name": "ปลาหมึกยำ สูตร 4701",
        "cal": 475
    },
    "stir_fried_shrimp_4702": {
        "name": "กุ้งผัด สูตร 4702",
        "cal": 135
    },
    "stir_fried_squid_4703": {
        "name": "ปลาหมึกผัด สูตร 4703",
        "cal": 142
    },
    "grilled_squid_4704": {
        "name": "ปลาหมึกย่าง สูตร 4704",
        "cal": 762
    },
    "spicy_shrimp_4705": {
        "name": "กุ้งยำ สูตร 4705",
        "cal": 819
    },
    "stir_fried_soup_4706": {
        "name": "ซุปผัด สูตร 4706",
        "cal": 759
    },
    "boiled_soup_4707": {
        "name": "ซุปต้ม สูตร 4707",
        "cal": 185
    },
    "boiled_fish_4708": {
        "name": "ปลาต้ม สูตร 4708",
        "cal": 92
    },
    "spicy_shrimp_4709": {
        "name": "กุ้งยำ สูตร 4709",
        "cal": 164
    },
    "steamed_pork_4710": {
        "name": "หมูนึ่ง สูตร 4710",
        "cal": 246
    },
    "spicy_fish_4711": {
        "name": "ปลายำ สูตร 4711",
        "cal": 787
    },
    "spicy_chicken_4712": {
        "name": "ไก่ยำ สูตร 4712",
        "cal": 257
    },
    "grilled_shrimp_4713": {
        "name": "กุ้งย่าง สูตร 4713",
        "cal": 78
    },
    "spicy_beef_4714": {
        "name": "เนื้อยำ สูตร 4714",
        "cal": 456
    },
    "steamed_noodle_4715": {
        "name": "บะหมี่นึ่ง สูตร 4715",
        "cal": 426
    },
    "fried_chicken_4716": {
        "name": "ไก่ทอด สูตร 4716",
        "cal": 43
    },
    "spicy_noodle_4717": {
        "name": "บะหมี่ยำ สูตร 4717",
        "cal": 120
    },
    "steamed_noodle_4718": {
        "name": "บะหมี่นึ่ง สูตร 4718",
        "cal": 442
    },
    "spicy_beef_4719": {
        "name": "เนื้อยำ สูตร 4719",
        "cal": 66
    },
    "spicy_noodle_4720": {
        "name": "บะหมี่ยำ สูตร 4720",
        "cal": 64
    },
    "steamed_pork_4721": {
        "name": "หมูนึ่ง สูตร 4721",
        "cal": 603
    },
    "stir_fried_squid_4722": {
        "name": "ปลาหมึกผัด สูตร 4722",
        "cal": 456
    },
    "steamed_rice_4723": {
        "name": "ข้าวนึ่ง สูตร 4723",
        "cal": 632
    },
    "steamed_rice_4724": {
        "name": "ข้าวนึ่ง สูตร 4724",
        "cal": 450
    },
    "grilled_fish_4725": {
        "name": "ปลาย่าง สูตร 4725",
        "cal": 313
    },
    "fried_rice_4726": {
        "name": "ข้าวทอด สูตร 4726",
        "cal": 597
    },
    "grilled_rice_4727": {
        "name": "ข้าวย่าง สูตร 4727",
        "cal": 659
    },
    "boiled_shrimp_4728": {
        "name": "กุ้งต้ม สูตร 4728",
        "cal": 535
    },
    "fried_beef_4729": {
        "name": "เนื้อทอด สูตร 4729",
        "cal": 700
    },
    "fried_beef_4730": {
        "name": "เนื้อทอด สูตร 4730",
        "cal": 690
    },
    "boiled_chicken_4731": {
        "name": "ไก่ต้ม สูตร 4731",
        "cal": 211
    },
    "boiled_rice_4732": {
        "name": "ข้าวต้ม สูตร 4732",
        "cal": 416
    },
    "boiled_fish_4733": {
        "name": "ปลาต้ม สูตร 4733",
        "cal": 398
    },
    "steamed_beef_4734": {
        "name": "เนื้อนึ่ง สูตร 4734",
        "cal": 650
    },
    "stir_fried_beef_4735": {
        "name": "เนื้อผัด สูตร 4735",
        "cal": 684
    },
    "boiled_pork_4736": {
        "name": "หมูต้ม สูตร 4736",
        "cal": 429
    },
    "steamed_pork_4737": {
        "name": "หมูนึ่ง สูตร 4737",
        "cal": 189
    },
    "boiled_shrimp_4738": {
        "name": "กุ้งต้ม สูตร 4738",
        "cal": 678
    },
    "grilled_beef_4739": {
        "name": "เนื้อย่าง สูตร 4739",
        "cal": 25
    },
    "stir_fried_soup_4740": {
        "name": "ซุปผัด สูตร 4740",
        "cal": 666
    },
    "grilled_pork_4741": {
        "name": "หมูย่าง สูตร 4741",
        "cal": 794
    },
    "stir_fried_squid_4742": {
        "name": "ปลาหมึกผัด สูตร 4742",
        "cal": 183
    },
    "stir_fried_beef_4743": {
        "name": "เนื้อผัด สูตร 4743",
        "cal": 121
    },
    "stir_fried_soup_4744": {
        "name": "ซุปผัด สูตร 4744",
        "cal": 247
    },
    "steamed_pork_4745": {
        "name": "หมูนึ่ง สูตร 4745",
        "cal": 546
    },
    "steamed_soup_4746": {
        "name": "ซุปนึ่ง สูตร 4746",
        "cal": 611
    },
    "stir_fried_beef_4747": {
        "name": "เนื้อผัด สูตร 4747",
        "cal": 431
    },
    "grilled_rice_4748": {
        "name": "ข้าวย่าง สูตร 4748",
        "cal": 627
    },
    "steamed_beef_4749": {
        "name": "เนื้อนึ่ง สูตร 4749",
        "cal": 703
    },
    "grilled_shrimp_4750": {
        "name": "กุ้งย่าง สูตร 4750",
        "cal": 360
    },
    "boiled_pork_4751": {
        "name": "หมูต้ม สูตร 4751",
        "cal": 685
    },
    "steamed_soup_4752": {
        "name": "ซุปนึ่ง สูตร 4752",
        "cal": 359
    },
    "stir_fried_fish_4753": {
        "name": "ปลาผัด สูตร 4753",
        "cal": 27
    },
    "stir_fried_soup_4754": {
        "name": "ซุปผัด สูตร 4754",
        "cal": 575
    },
    "grilled_fish_4755": {
        "name": "ปลาย่าง สูตร 4755",
        "cal": 188
    },
    "grilled_noodle_4756": {
        "name": "บะหมี่ย่าง สูตร 4756",
        "cal": 628
    },
    "stir_fried_chicken_4757": {
        "name": "ไก่ผัด สูตร 4757",
        "cal": 340
    },
    "steamed_soup_4758": {
        "name": "ซุปนึ่ง สูตร 4758",
        "cal": 501
    },
    "boiled_fish_4759": {
        "name": "ปลาต้ม สูตร 4759",
        "cal": 805
    },
    "boiled_pork_4760": {
        "name": "หมูต้ม สูตร 4760",
        "cal": 549
    },
    "spicy_shrimp_4761": {
        "name": "กุ้งยำ สูตร 4761",
        "cal": 435
    },
    "stir_fried_beef_4762": {
        "name": "เนื้อผัด สูตร 4762",
        "cal": 812
    },
    "spicy_shrimp_4763": {
        "name": "กุ้งยำ สูตร 4763",
        "cal": 370
    },
    "spicy_beef_4764": {
        "name": "เนื้อยำ สูตร 4764",
        "cal": 800
    },
    "spicy_pork_4765": {
        "name": "หมูยำ สูตร 4765",
        "cal": 563
    },
    "boiled_soup_4766": {
        "name": "ซุปต้ม สูตร 4766",
        "cal": 451
    },
    "grilled_soup_4767": {
        "name": "ซุปย่าง สูตร 4767",
        "cal": 482
    },
    "spicy_squid_4768": {
        "name": "ปลาหมึกยำ สูตร 4768",
        "cal": 810
    },
    "fried_shrimp_4769": {
        "name": "กุ้งทอด สูตร 4769",
        "cal": 822
    },
    "stir_fried_rice_4770": {
        "name": "ข้าวผัด สูตร 4770",
        "cal": 707
    },
    "steamed_chicken_4771": {
        "name": "ไก่นึ่ง สูตร 4771",
        "cal": 399
    },
    "spicy_chicken_4772": {
        "name": "ไก่ยำ สูตร 4772",
        "cal": 432
    },
    "steamed_squid_4773": {
        "name": "ปลาหมึกนึ่ง สูตร 4773",
        "cal": 28
    },
    "fried_noodle_4774": {
        "name": "บะหมี่ทอด สูตร 4774",
        "cal": 374
    },
    "spicy_soup_4775": {
        "name": "ซุปยำ สูตร 4775",
        "cal": 621
    },
    "spicy_beef_4776": {
        "name": "เนื้อยำ สูตร 4776",
        "cal": 549
    },
    "grilled_squid_4777": {
        "name": "ปลาหมึกย่าง สูตร 4777",
        "cal": 500
    },
    "grilled_beef_4778": {
        "name": "เนื้อย่าง สูตร 4778",
        "cal": 171
    },
    "grilled_chicken_4779": {
        "name": "ไก่ย่าง สูตร 4779",
        "cal": 140
    },
    "fried_shrimp_4780": {
        "name": "กุ้งทอด สูตร 4780",
        "cal": 190
    },
    "spicy_rice_4781": {
        "name": "ข้าวยำ สูตร 4781",
        "cal": 748
    },
    "stir_fried_chicken_4782": {
        "name": "ไก่ผัด สูตร 4782",
        "cal": 214
    },
    "grilled_pork_4783": {
        "name": "หมูย่าง สูตร 4783",
        "cal": 399
    },
    "boiled_shrimp_4784": {
        "name": "กุ้งต้ม สูตร 4784",
        "cal": 58
    },
    "steamed_chicken_4785": {
        "name": "ไก่นึ่ง สูตร 4785",
        "cal": 624
    },
    "steamed_noodle_4786": {
        "name": "บะหมี่นึ่ง สูตร 4786",
        "cal": 85
    },
    "stir_fried_chicken_4787": {
        "name": "ไก่ผัด สูตร 4787",
        "cal": 86
    },
    "boiled_fish_4788": {
        "name": "ปลาต้ม สูตร 4788",
        "cal": 413
    },
    "grilled_noodle_4789": {
        "name": "บะหมี่ย่าง สูตร 4789",
        "cal": 541
    },
    "fried_beef_4790": {
        "name": "เนื้อทอด สูตร 4790",
        "cal": 252
    },
    "grilled_beef_4791": {
        "name": "เนื้อย่าง สูตร 4791",
        "cal": 717
    },
    "stir_fried_shrimp_4792": {
        "name": "กุ้งผัด สูตร 4792",
        "cal": 211
    },
    "boiled_pork_4793": {
        "name": "หมูต้ม สูตร 4793",
        "cal": 45
    },
    "boiled_soup_4794": {
        "name": "ซุปต้ม สูตร 4794",
        "cal": 116
    },
    "stir_fried_chicken_4795": {
        "name": "ไก่ผัด สูตร 4795",
        "cal": 89
    },
    "fried_squid_4796": {
        "name": "ปลาหมึกทอด สูตร 4796",
        "cal": 736
    },
    "grilled_pork_4797": {
        "name": "หมูย่าง สูตร 4797",
        "cal": 670
    },
    "boiled_fish_4798": {
        "name": "ปลาต้ม สูตร 4798",
        "cal": 667
    },
    "fried_chicken_4799": {
        "name": "ไก่ทอด สูตร 4799",
        "cal": 54
    },
    "grilled_pork_4800": {
        "name": "หมูย่าง สูตร 4800",
        "cal": 715
    },
    "fried_noodle_4801": {
        "name": "บะหมี่ทอด สูตร 4801",
        "cal": 111
    },
    "steamed_squid_4802": {
        "name": "ปลาหมึกนึ่ง สูตร 4802",
        "cal": 323
    },
    "spicy_pork_4803": {
        "name": "หมูยำ สูตร 4803",
        "cal": 138
    },
    "grilled_shrimp_4804": {
        "name": "กุ้งย่าง สูตร 4804",
        "cal": 452
    },
    "steamed_noodle_4805": {
        "name": "บะหมี่นึ่ง สูตร 4805",
        "cal": 760
    },
    "stir_fried_beef_4806": {
        "name": "เนื้อผัด สูตร 4806",
        "cal": 616
    },
    "stir_fried_beef_4807": {
        "name": "เนื้อผัด สูตร 4807",
        "cal": 393
    },
    "spicy_squid_4808": {
        "name": "ปลาหมึกยำ สูตร 4808",
        "cal": 522
    },
    "stir_fried_pork_4809": {
        "name": "หมูผัด สูตร 4809",
        "cal": 511
    },
    "spicy_squid_4810": {
        "name": "ปลาหมึกยำ สูตร 4810",
        "cal": 762
    },
    "stir_fried_fish_4811": {
        "name": "ปลาผัด สูตร 4811",
        "cal": 819
    },
    "spicy_squid_4812": {
        "name": "ปลาหมึกยำ สูตร 4812",
        "cal": 261
    },
    "steamed_soup_4813": {
        "name": "ซุปนึ่ง สูตร 4813",
        "cal": 265
    },
    "steamed_fish_4814": {
        "name": "ปลานึ่ง สูตร 4814",
        "cal": 150
    },
    "steamed_fish_4815": {
        "name": "ปลานึ่ง สูตร 4815",
        "cal": 481
    },
    "steamed_fish_4816": {
        "name": "ปลานึ่ง สูตร 4816",
        "cal": 497
    },
    "stir_fried_fish_4817": {
        "name": "ปลาผัด สูตร 4817",
        "cal": 643
    },
    "steamed_soup_4818": {
        "name": "ซุปนึ่ง สูตร 4818",
        "cal": 300
    },
    "steamed_fish_4819": {
        "name": "ปลานึ่ง สูตร 4819",
        "cal": 701
    },
    "boiled_chicken_4820": {
        "name": "ไก่ต้ม สูตร 4820",
        "cal": 843
    },
    "spicy_soup_4821": {
        "name": "ซุปยำ สูตร 4821",
        "cal": 132
    },
    "fried_squid_4822": {
        "name": "ปลาหมึกทอด สูตร 4822",
        "cal": 831
    },
    "stir_fried_squid_4823": {
        "name": "ปลาหมึกผัด สูตร 4823",
        "cal": 839
    },
    "steamed_noodle_4824": {
        "name": "บะหมี่นึ่ง สูตร 4824",
        "cal": 795
    },
    "stir_fried_fish_4825": {
        "name": "ปลาผัด สูตร 4825",
        "cal": 824
    },
    "spicy_fish_4826": {
        "name": "ปลายำ สูตร 4826",
        "cal": 394
    },
    "steamed_pork_4827": {
        "name": "หมูนึ่ง สูตร 4827",
        "cal": 605
    },
    "spicy_noodle_4828": {
        "name": "บะหมี่ยำ สูตร 4828",
        "cal": 106
    },
    "fried_beef_4829": {
        "name": "เนื้อทอด สูตร 4829",
        "cal": 598
    },
    "grilled_soup_4830": {
        "name": "ซุปย่าง สูตร 4830",
        "cal": 273
    },
    "fried_chicken_4831": {
        "name": "ไก่ทอด สูตร 4831",
        "cal": 829
    },
    "grilled_pork_4832": {
        "name": "หมูย่าง สูตร 4832",
        "cal": 442
    },
    "steamed_soup_4833": {
        "name": "ซุปนึ่ง สูตร 4833",
        "cal": 351
    },
    "fried_shrimp_4834": {
        "name": "กุ้งทอด สูตร 4834",
        "cal": 57
    },
    "spicy_shrimp_4835": {
        "name": "กุ้งยำ สูตร 4835",
        "cal": 510
    },
    "stir_fried_soup_4836": {
        "name": "ซุปผัด สูตร 4836",
        "cal": 430
    },
    "spicy_chicken_4837": {
        "name": "ไก่ยำ สูตร 4837",
        "cal": 150
    },
    "spicy_rice_4838": {
        "name": "ข้าวยำ สูตร 4838",
        "cal": 153
    },
    "stir_fried_squid_4839": {
        "name": "ปลาหมึกผัด สูตร 4839",
        "cal": 693
    },
    "boiled_soup_4840": {
        "name": "ซุปต้ม สูตร 4840",
        "cal": 696
    },
    "grilled_shrimp_4841": {
        "name": "กุ้งย่าง สูตร 4841",
        "cal": 140
    },
    "fried_fish_4842": {
        "name": "ปลาทอด สูตร 4842",
        "cal": 66
    },
    "steamed_noodle_4843": {
        "name": "บะหมี่นึ่ง สูตร 4843",
        "cal": 541
    },
    "stir_fried_soup_4844": {
        "name": "ซุปผัด สูตร 4844",
        "cal": 564
    },
    "boiled_chicken_4845": {
        "name": "ไก่ต้ม สูตร 4845",
        "cal": 264
    },
    "steamed_soup_4846": {
        "name": "ซุปนึ่ง สูตร 4846",
        "cal": 700
    },
    "spicy_noodle_4847": {
        "name": "บะหมี่ยำ สูตร 4847",
        "cal": 26
    },
    "boiled_shrimp_4848": {
        "name": "กุ้งต้ม สูตร 4848",
        "cal": 159
    },
    "boiled_shrimp_4849": {
        "name": "กุ้งต้ม สูตร 4849",
        "cal": 519
    },
    "fried_beef_4850": {
        "name": "เนื้อทอด สูตร 4850",
        "cal": 629
    },
    "grilled_rice_4851": {
        "name": "ข้าวย่าง สูตร 4851",
        "cal": 613
    },
    "stir_fried_fish_4852": {
        "name": "ปลาผัด สูตร 4852",
        "cal": 531
    },
    "steamed_fish_4853": {
        "name": "ปลานึ่ง สูตร 4853",
        "cal": 596
    },
    "spicy_chicken_4854": {
        "name": "ไก่ยำ สูตร 4854",
        "cal": 792
    },
    "steamed_noodle_4855": {
        "name": "บะหมี่นึ่ง สูตร 4855",
        "cal": 252
    },
    "stir_fried_beef_4856": {
        "name": "เนื้อผัด สูตร 4856",
        "cal": 614
    },
    "boiled_shrimp_4857": {
        "name": "กุ้งต้ม สูตร 4857",
        "cal": 399
    },
    "stir_fried_squid_4858": {
        "name": "ปลาหมึกผัด สูตร 4858",
        "cal": 839
    },
    "steamed_rice_4859": {
        "name": "ข้าวนึ่ง สูตร 4859",
        "cal": 308
    },
    "boiled_noodle_4860": {
        "name": "บะหมี่ต้ม สูตร 4860",
        "cal": 544
    },
    "boiled_pork_4861": {
        "name": "หมูต้ม สูตร 4861",
        "cal": 514
    },
    "spicy_chicken_4862": {
        "name": "ไก่ยำ สูตร 4862",
        "cal": 392
    },
    "fried_noodle_4863": {
        "name": "บะหมี่ทอด สูตร 4863",
        "cal": 77
    },
    "steamed_noodle_4864": {
        "name": "บะหมี่นึ่ง สูตร 4864",
        "cal": 154
    },
    "stir_fried_noodle_4865": {
        "name": "บะหมี่ผัด สูตร 4865",
        "cal": 460
    },
    "boiled_rice_4866": {
        "name": "ข้าวต้ม สูตร 4866",
        "cal": 583
    },
    "grilled_fish_4867": {
        "name": "ปลาย่าง สูตร 4867",
        "cal": 311
    },
    "boiled_soup_4868": {
        "name": "ซุปต้ม สูตร 4868",
        "cal": 758
    },
    "spicy_shrimp_4869": {
        "name": "กุ้งยำ สูตร 4869",
        "cal": 254
    },
    "grilled_rice_4870": {
        "name": "ข้าวย่าง สูตร 4870",
        "cal": 426
    },
    "grilled_rice_4871": {
        "name": "ข้าวย่าง สูตร 4871",
        "cal": 728
    },
    "stir_fried_squid_4872": {
        "name": "ปลาหมึกผัด สูตร 4872",
        "cal": 88
    },
    "fried_squid_4873": {
        "name": "ปลาหมึกทอด สูตร 4873",
        "cal": 528
    },
    "boiled_soup_4874": {
        "name": "ซุปต้ม สูตร 4874",
        "cal": 177
    },
    "grilled_soup_4875": {
        "name": "ซุปย่าง สูตร 4875",
        "cal": 127
    },
    "grilled_noodle_4876": {
        "name": "บะหมี่ย่าง สูตร 4876",
        "cal": 551
    },
    "fried_noodle_4877": {
        "name": "บะหมี่ทอด สูตร 4877",
        "cal": 706
    },
    "fried_chicken_4878": {
        "name": "ไก่ทอด สูตร 4878",
        "cal": 653
    },
    "stir_fried_soup_4879": {
        "name": "ซุปผัด สูตร 4879",
        "cal": 368
    },
    "fried_pork_4880": {
        "name": "หมูทอด สูตร 4880",
        "cal": 533
    },
    "fried_noodle_4881": {
        "name": "บะหมี่ทอด สูตร 4881",
        "cal": 330
    },
    "spicy_shrimp_4882": {
        "name": "กุ้งยำ สูตร 4882",
        "cal": 694
    },
    "fried_pork_4883": {
        "name": "หมูทอด สูตร 4883",
        "cal": 61
    },
    "fried_beef_4884": {
        "name": "เนื้อทอด สูตร 4884",
        "cal": 63
    },
    "steamed_chicken_4885": {
        "name": "ไก่นึ่ง สูตร 4885",
        "cal": 795
    },
    "fried_squid_4886": {
        "name": "ปลาหมึกทอด สูตร 4886",
        "cal": 272
    },
    "steamed_noodle_4887": {
        "name": "บะหมี่นึ่ง สูตร 4887",
        "cal": 425
    },
    "boiled_squid_4888": {
        "name": "ปลาหมึกต้ม สูตร 4888",
        "cal": 163
    },
    "boiled_squid_4889": {
        "name": "ปลาหมึกต้ม สูตร 4889",
        "cal": 184
    },
    "spicy_squid_4890": {
        "name": "ปลาหมึกยำ สูตร 4890",
        "cal": 47
    },
    "steamed_soup_4891": {
        "name": "ซุปนึ่ง สูตร 4891",
        "cal": 626
    },
    "spicy_chicken_4892": {
        "name": "ไก่ยำ สูตร 4892",
        "cal": 357
    },
    "steamed_fish_4893": {
        "name": "ปลานึ่ง สูตร 4893",
        "cal": 806
    },
    "stir_fried_beef_4894": {
        "name": "เนื้อผัด สูตร 4894",
        "cal": 308
    },
    "stir_fried_noodle_4895": {
        "name": "บะหมี่ผัด สูตร 4895",
        "cal": 31
    },
    "stir_fried_fish_4896": {
        "name": "ปลาผัด สูตร 4896",
        "cal": 304
    },
    "spicy_noodle_4897": {
        "name": "บะหมี่ยำ สูตร 4897",
        "cal": 656
    },
    "fried_pork_4898": {
        "name": "หมูทอด สูตร 4898",
        "cal": 847
    },
    "boiled_noodle_4899": {
        "name": "บะหมี่ต้ม สูตร 4899",
        "cal": 144
    },
    "fried_pork_4900": {
        "name": "หมูทอด สูตร 4900",
        "cal": 361
    },
    "grilled_beef_4901": {
        "name": "เนื้อย่าง สูตร 4901",
        "cal": 421
    },
    "stir_fried_squid_4902": {
        "name": "ปลาหมึกผัด สูตร 4902",
        "cal": 99
    },
    "stir_fried_shrimp_4903": {
        "name": "กุ้งผัด สูตร 4903",
        "cal": 713
    },
    "fried_shrimp_4904": {
        "name": "กุ้งทอด สูตร 4904",
        "cal": 33
    },
    "steamed_shrimp_4905": {
        "name": "กุ้งนึ่ง สูตร 4905",
        "cal": 606
    },
    "grilled_chicken_4906": {
        "name": "ไก่ย่าง สูตร 4906",
        "cal": 410
    },
    "stir_fried_pork_4907": {
        "name": "หมูผัด สูตร 4907",
        "cal": 652
    },
    "grilled_noodle_4908": {
        "name": "บะหมี่ย่าง สูตร 4908",
        "cal": 750
    },
    "spicy_chicken_4909": {
        "name": "ไก่ยำ สูตร 4909",
        "cal": 208
    },
    "stir_fried_pork_4910": {
        "name": "หมูผัด สูตร 4910",
        "cal": 369
    },
    "spicy_shrimp_4911": {
        "name": "กุ้งยำ สูตร 4911",
        "cal": 591
    },
    "spicy_pork_4912": {
        "name": "หมูยำ สูตร 4912",
        "cal": 699
    },
    "grilled_noodle_4913": {
        "name": "บะหมี่ย่าง สูตร 4913",
        "cal": 329
    },
    "boiled_chicken_4914": {
        "name": "ไก่ต้ม สูตร 4914",
        "cal": 744
    },
    "grilled_noodle_4915": {
        "name": "บะหมี่ย่าง สูตร 4915",
        "cal": 683
    },
    "fried_squid_4916": {
        "name": "ปลาหมึกทอด สูตร 4916",
        "cal": 722
    },
    "spicy_noodle_4917": {
        "name": "บะหมี่ยำ สูตร 4917",
        "cal": 246
    },
    "spicy_fish_4918": {
        "name": "ปลายำ สูตร 4918",
        "cal": 837
    },
    "steamed_shrimp_4919": {
        "name": "กุ้งนึ่ง สูตร 4919",
        "cal": 273
    },
    "fried_chicken_4920": {
        "name": "ไก่ทอด สูตร 4920",
        "cal": 330
    },
    "grilled_fish_4921": {
        "name": "ปลาย่าง สูตร 4921",
        "cal": 214
    },
    "steamed_squid_4922": {
        "name": "ปลาหมึกนึ่ง สูตร 4922",
        "cal": 595
    },
    "stir_fried_beef_4923": {
        "name": "เนื้อผัด สูตร 4923",
        "cal": 238
    },
    "stir_fried_rice_4924": {
        "name": "ข้าวผัด สูตร 4924",
        "cal": 156
    },
    "spicy_fish_4925": {
        "name": "ปลายำ สูตร 4925",
        "cal": 332
    },
    "stir_fried_pork_4926": {
        "name": "หมูผัด สูตร 4926",
        "cal": 819
    },
    "steamed_soup_4927": {
        "name": "ซุปนึ่ง สูตร 4927",
        "cal": 395
    },
    "steamed_soup_4928": {
        "name": "ซุปนึ่ง สูตร 4928",
        "cal": 344
    },
    "boiled_beef_4929": {
        "name": "เนื้อต้ม สูตร 4929",
        "cal": 77
    },
    "grilled_soup_4930": {
        "name": "ซุปย่าง สูตร 4930",
        "cal": 548
    },
    "spicy_rice_4931": {
        "name": "ข้าวยำ สูตร 4931",
        "cal": 370
    },
    "fried_pork_4932": {
        "name": "หมูทอด สูตร 4932",
        "cal": 66
    },
    "steamed_fish_4933": {
        "name": "ปลานึ่ง สูตร 4933",
        "cal": 797
    },
    "fried_fish_4934": {
        "name": "ปลาทอด สูตร 4934",
        "cal": 373
    },
    "stir_fried_soup_4935": {
        "name": "ซุปผัด สูตร 4935",
        "cal": 508
    },
    "spicy_shrimp_4936": {
        "name": "กุ้งยำ สูตร 4936",
        "cal": 615
    },
    "spicy_chicken_4937": {
        "name": "ไก่ยำ สูตร 4937",
        "cal": 31
    },
    "steamed_rice_4938": {
        "name": "ข้าวนึ่ง สูตร 4938",
        "cal": 70
    },
    "fried_shrimp_4939": {
        "name": "กุ้งทอด สูตร 4939",
        "cal": 120
    },
    "spicy_squid_4940": {
        "name": "ปลาหมึกยำ สูตร 4940",
        "cal": 645
    },
    "boiled_noodle_4941": {
        "name": "บะหมี่ต้ม สูตร 4941",
        "cal": 422
    },
    "fried_noodle_4942": {
        "name": "บะหมี่ทอด สูตร 4942",
        "cal": 472
    },
    "steamed_noodle_4943": {
        "name": "บะหมี่นึ่ง สูตร 4943",
        "cal": 660
    },
    "fried_rice_4944": {
        "name": "ข้าวทอด สูตร 4944",
        "cal": 822
    },
    "boiled_rice_4945": {
        "name": "ข้าวต้ม สูตร 4945",
        "cal": 778
    },
    "boiled_noodle_4946": {
        "name": "บะหมี่ต้ม สูตร 4946",
        "cal": 30
    },
    "boiled_soup_4947": {
        "name": "ซุปต้ม สูตร 4947",
        "cal": 713
    },
    "boiled_fish_4948": {
        "name": "ปลาต้ม สูตร 4948",
        "cal": 189
    },
    "boiled_rice_4949": {
        "name": "ข้าวต้ม สูตร 4949",
        "cal": 412
    },
    "steamed_noodle_4950": {
        "name": "บะหมี่นึ่ง สูตร 4950",
        "cal": 446
    },
    "boiled_noodle_4951": {
        "name": "บะหมี่ต้ม สูตร 4951",
        "cal": 324
    },
    "boiled_soup_4952": {
        "name": "ซุปต้ม สูตร 4952",
        "cal": 347
    },
    "fried_beef_4953": {
        "name": "เนื้อทอด สูตร 4953",
        "cal": 114
    },
    "grilled_beef_4954": {
        "name": "เนื้อย่าง สูตร 4954",
        "cal": 410
    },
    "spicy_beef_4955": {
        "name": "เนื้อยำ สูตร 4955",
        "cal": 135
    },
    "fried_squid_4956": {
        "name": "ปลาหมึกทอด สูตร 4956",
        "cal": 836
    },
    "steamed_chicken_4957": {
        "name": "ไก่นึ่ง สูตร 4957",
        "cal": 725
    },
    "grilled_pork_4958": {
        "name": "หมูย่าง สูตร 4958",
        "cal": 734
    },
    "grilled_rice_4959": {
        "name": "ข้าวย่าง สูตร 4959",
        "cal": 739
    },
    "grilled_rice_4960": {
        "name": "ข้าวย่าง สูตร 4960",
        "cal": 542
    },
    "steamed_squid_4961": {
        "name": "ปลาหมึกนึ่ง สูตร 4961",
        "cal": 701
    },
    "spicy_chicken_4962": {
        "name": "ไก่ยำ สูตร 4962",
        "cal": 820
    },
    "grilled_pork_4963": {
        "name": "หมูย่าง สูตร 4963",
        "cal": 472
    },
    "grilled_pork_4964": {
        "name": "หมูย่าง สูตร 4964",
        "cal": 298
    },
    "spicy_shrimp_4965": {
        "name": "กุ้งยำ สูตร 4965",
        "cal": 128
    },
    "steamed_squid_4966": {
        "name": "ปลาหมึกนึ่ง สูตร 4966",
        "cal": 439
    },
    "fried_chicken_4967": {
        "name": "ไก่ทอด สูตร 4967",
        "cal": 102
    },
    "grilled_soup_4968": {
        "name": "ซุปย่าง สูตร 4968",
        "cal": 737
    },
    "fried_noodle_4969": {
        "name": "บะหมี่ทอด สูตร 4969",
        "cal": 794
    },
    "stir_fried_squid_4970": {
        "name": "ปลาหมึกผัด สูตร 4970",
        "cal": 165
    },
    "grilled_squid_4971": {
        "name": "ปลาหมึกย่าง สูตร 4971",
        "cal": 561
    },
    "spicy_noodle_4972": {
        "name": "บะหมี่ยำ สูตร 4972",
        "cal": 597
    },
    "grilled_chicken_4973": {
        "name": "ไก่ย่าง สูตร 4973",
        "cal": 787
    },
    "steamed_rice_4974": {
        "name": "ข้าวนึ่ง สูตร 4974",
        "cal": 758
    },
    "stir_fried_shrimp_4975": {
        "name": "กุ้งผัด สูตร 4975",
        "cal": 619
    },
    "grilled_fish_4976": {
        "name": "ปลาย่าง สูตร 4976",
        "cal": 659
    },
    "stir_fried_soup_4977": {
        "name": "ซุปผัด สูตร 4977",
        "cal": 743
    },
    "stir_fried_soup_4978": {
        "name": "ซุปผัด สูตร 4978",
        "cal": 737
    },
    "boiled_squid_4979": {
        "name": "ปลาหมึกต้ม สูตร 4979",
        "cal": 636
    },
    "steamed_beef_4980": {
        "name": "เนื้อนึ่ง สูตร 4980",
        "cal": 207
    },
    "boiled_noodle_4981": {
        "name": "บะหมี่ต้ม สูตร 4981",
        "cal": 768
    },
    "steamed_pork_4982": {
        "name": "หมูนึ่ง สูตร 4982",
        "cal": 627
    },
    "steamed_chicken_4983": {
        "name": "ไก่นึ่ง สูตร 4983",
        "cal": 538
    },
    "fried_beef_4984": {
        "name": "เนื้อทอด สูตร 4984",
        "cal": 130
    },
    "spicy_beef_4985": {
        "name": "เนื้อยำ สูตร 4985",
        "cal": 828
    },
    "spicy_noodle_4986": {
        "name": "บะหมี่ยำ สูตร 4986",
        "cal": 91
    },
    "boiled_shrimp_4987": {
        "name": "กุ้งต้ม สูตร 4987",
        "cal": 199
    },
    "grilled_fish_4988": {
        "name": "ปลาย่าง สูตร 4988",
        "cal": 342
    },
    "steamed_shrimp_4989": {
        "name": "กุ้งนึ่ง สูตร 4989",
        "cal": 569
    },
    "stir_fried_shrimp_4990": {
        "name": "กุ้งผัด สูตร 4990",
        "cal": 519
    },
    "fried_rice_4991": {
        "name": "ข้าวทอด สูตร 4991",
        "cal": 351
    },
    "grilled_soup_4992": {
        "name": "ซุปย่าง สูตร 4992",
        "cal": 271
    },
    "grilled_noodle_4993": {
        "name": "บะหมี่ย่าง สูตร 4993",
        "cal": 218
    },
    "fried_squid_4994": {
        "name": "ปลาหมึกทอด สูตร 4994",
        "cal": 471
    },
    "boiled_fish_4995": {
        "name": "ปลาต้ม สูตร 4995",
        "cal": 745
    },
    "boiled_chicken_4996": {
        "name": "ไก่ต้ม สูตร 4996",
        "cal": 615
    },
    "spicy_noodle_4997": {
        "name": "บะหมี่ยำ สูตร 4997",
        "cal": 29
    },
    "boiled_shrimp_4998": {
        "name": "กุ้งต้ม สูตร 4998",
        "cal": 623
    },
    "steamed_pork_4999": {
        "name": "หมูนึ่ง สูตร 4999",
        "cal": 379
    },
    "boiled_beef_5000": {
        "name": "เนื้อต้ม สูตร 5000",
        "cal": 140
    },
    "boiled_rice_5001": {
        "name": "ข้าวต้ม สูตร 5001",
        "cal": 710
    },
    "boiled_soup_5002": {
        "name": "ซุปต้ม สูตร 5002",
        "cal": 317
    },
    "fried_fish_5003": {
        "name": "ปลาทอด สูตร 5003",
        "cal": 117
    },
    "stir_fried_fish_5004": {
        "name": "ปลาผัด สูตร 5004",
        "cal": 93
    },
    "boiled_shrimp_5005": {
        "name": "กุ้งต้ม สูตร 5005",
        "cal": 204
    },
    "fried_squid_5006": {
        "name": "ปลาหมึกทอด สูตร 5006",
        "cal": 819
    },
    "stir_fried_noodle_5007": {
        "name": "บะหมี่ผัด สูตร 5007",
        "cal": 632
    },
    "boiled_chicken_5008": {
        "name": "ไก่ต้ม สูตร 5008",
        "cal": 82
    },
    "boiled_soup_5009": {
        "name": "ซุปต้ม สูตร 5009",
        "cal": 75
    },
    "fried_soup_5010": {
        "name": "ซุปทอด สูตร 5010",
        "cal": 351
    },
    "spicy_rice_5011": {
        "name": "ข้าวยำ สูตร 5011",
        "cal": 123
    },
    "boiled_squid_5012": {
        "name": "ปลาหมึกต้ม สูตร 5012",
        "cal": 628
    },
    "grilled_noodle_5013": {
        "name": "บะหมี่ย่าง สูตร 5013",
        "cal": 169
    },
    "boiled_noodle_5014": {
        "name": "บะหมี่ต้ม สูตร 5014",
        "cal": 362
    },
    "spicy_noodle_5015": {
        "name": "บะหมี่ยำ สูตร 5015",
        "cal": 377
    },
    "spicy_pork_5016": {
        "name": "หมูยำ สูตร 5016",
        "cal": 542
    },
    "stir_fried_pork_5017": {
        "name": "หมูผัด สูตร 5017",
        "cal": 760
    },
    "spicy_squid_5018": {
        "name": "ปลาหมึกยำ สูตร 5018",
        "cal": 834
    },
    "spicy_soup_5019": {
        "name": "ซุปยำ สูตร 5019",
        "cal": 798
    },
    "steamed_chicken_5020": {
        "name": "ไก่นึ่ง สูตร 5020",
        "cal": 456
    },
    "stir_fried_beef_5021": {
        "name": "เนื้อผัด สูตร 5021",
        "cal": 205
    },
    "grilled_chicken_5022": {
        "name": "ไก่ย่าง สูตร 5022",
        "cal": 195
    },
    "stir_fried_fish_5023": {
        "name": "ปลาผัด สูตร 5023",
        "cal": 296
    },
    "steamed_pork_5024": {
        "name": "หมูนึ่ง สูตร 5024",
        "cal": 833
    },
    "grilled_beef_5025": {
        "name": "เนื้อย่าง สูตร 5025",
        "cal": 71
    },
    "spicy_soup_5026": {
        "name": "ซุปยำ สูตร 5026",
        "cal": 662
    },
    "boiled_noodle_5027": {
        "name": "บะหมี่ต้ม สูตร 5027",
        "cal": 295
    },
    "fried_noodle_5028": {
        "name": "บะหมี่ทอด สูตร 5028",
        "cal": 782
    },
    "stir_fried_fish_5029": {
        "name": "ปลาผัด สูตร 5029",
        "cal": 745
    },
    "spicy_shrimp_5030": {
        "name": "กุ้งยำ สูตร 5030",
        "cal": 321
    },
    "stir_fried_shrimp_5031": {
        "name": "กุ้งผัด สูตร 5031",
        "cal": 148
    },
    "grilled_squid_5032": {
        "name": "ปลาหมึกย่าง สูตร 5032",
        "cal": 196
    },
    "steamed_beef_5033": {
        "name": "เนื้อนึ่ง สูตร 5033",
        "cal": 654
    },
    "boiled_pork_5034": {
        "name": "หมูต้ม สูตร 5034",
        "cal": 586
    },
    "grilled_soup_5035": {
        "name": "ซุปย่าง สูตร 5035",
        "cal": 632
    },
    "boiled_shrimp_5036": {
        "name": "กุ้งต้ม สูตร 5036",
        "cal": 653
    },
    "grilled_fish_5037": {
        "name": "ปลาย่าง สูตร 5037",
        "cal": 287
    },
    "grilled_noodle_5038": {
        "name": "บะหมี่ย่าง สูตร 5038",
        "cal": 181
    },
    "grilled_soup_5039": {
        "name": "ซุปย่าง สูตร 5039",
        "cal": 456
    },
    "grilled_pork_5040": {
        "name": "หมูย่าง สูตร 5040",
        "cal": 144
    },
    "boiled_pork_5041": {
        "name": "หมูต้ม สูตร 5041",
        "cal": 36
    },
    "fried_beef_5042": {
        "name": "เนื้อทอด สูตร 5042",
        "cal": 709
    },
    "fried_beef_5043": {
        "name": "เนื้อทอด สูตร 5043",
        "cal": 631
    },
    "grilled_fish_5044": {
        "name": "ปลาย่าง สูตร 5044",
        "cal": 50
    },
    "steamed_shrimp_5045": {
        "name": "กุ้งนึ่ง สูตร 5045",
        "cal": 552
    },
    "grilled_squid_5046": {
        "name": "ปลาหมึกย่าง สูตร 5046",
        "cal": 307
    },
    "boiled_squid_5047": {
        "name": "ปลาหมึกต้ม สูตร 5047",
        "cal": 268
    },
    "stir_fried_squid_5048": {
        "name": "ปลาหมึกผัด สูตร 5048",
        "cal": 237
    },
    "stir_fried_rice_5049": {
        "name": "ข้าวผัด สูตร 5049",
        "cal": 462
    },
    "stir_fried_squid_5050": {
        "name": "ปลาหมึกผัด สูตร 5050",
        "cal": 660
    },
    "grilled_rice_5051": {
        "name": "ข้าวย่าง สูตร 5051",
        "cal": 702
    },
    "steamed_soup_5052": {
        "name": "ซุปนึ่ง สูตร 5052",
        "cal": 485
    },
    "fried_squid_5053": {
        "name": "ปลาหมึกทอด สูตร 5053",
        "cal": 696
    },
    "fried_beef_5054": {
        "name": "เนื้อทอด สูตร 5054",
        "cal": 399
    },
    "fried_squid_5055": {
        "name": "ปลาหมึกทอด สูตร 5055",
        "cal": 771
    },
    "grilled_soup_5056": {
        "name": "ซุปย่าง สูตร 5056",
        "cal": 115
    },
    "spicy_noodle_5057": {
        "name": "บะหมี่ยำ สูตร 5057",
        "cal": 221
    },
    "stir_fried_squid_5058": {
        "name": "ปลาหมึกผัด สูตร 5058",
        "cal": 236
    },
    "steamed_fish_5059": {
        "name": "ปลานึ่ง สูตร 5059",
        "cal": 65
    },
    "spicy_squid_5060": {
        "name": "ปลาหมึกยำ สูตร 5060",
        "cal": 393
    },
    "fried_fish_5061": {
        "name": "ปลาทอด สูตร 5061",
        "cal": 139
    },
    "stir_fried_chicken_5062": {
        "name": "ไก่ผัด สูตร 5062",
        "cal": 587
    },
    "spicy_squid_5063": {
        "name": "ปลาหมึกยำ สูตร 5063",
        "cal": 714
    },
    "steamed_squid_5064": {
        "name": "ปลาหมึกนึ่ง สูตร 5064",
        "cal": 521
    },
    "stir_fried_squid_5065": {
        "name": "ปลาหมึกผัด สูตร 5065",
        "cal": 116
    },
    "fried_fish_5066": {
        "name": "ปลาทอด สูตร 5066",
        "cal": 25
    },
    "spicy_noodle_5067": {
        "name": "บะหมี่ยำ สูตร 5067",
        "cal": 724
    },
    "boiled_chicken_5068": {
        "name": "ไก่ต้ม สูตร 5068",
        "cal": 570
    },
    "steamed_squid_5069": {
        "name": "ปลาหมึกนึ่ง สูตร 5069",
        "cal": 641
    },
    "grilled_fish_5070": {
        "name": "ปลาย่าง สูตร 5070",
        "cal": 469
    },
    "steamed_soup_5071": {
        "name": "ซุปนึ่ง สูตร 5071",
        "cal": 169
    },
    "stir_fried_chicken_5072": {
        "name": "ไก่ผัด สูตร 5072",
        "cal": 710
    },
    "spicy_soup_5073": {
        "name": "ซุปยำ สูตร 5073",
        "cal": 664
    },
    "grilled_pork_5074": {
        "name": "หมูย่าง สูตร 5074",
        "cal": 830
    },
    "boiled_fish_5075": {
        "name": "ปลาต้ม สูตร 5075",
        "cal": 394
    },
    "fried_beef_5076": {
        "name": "เนื้อทอด สูตร 5076",
        "cal": 749
    },
    "fried_rice_5077": {
        "name": "ข้าวทอด สูตร 5077",
        "cal": 524
    },
    "fried_soup_5078": {
        "name": "ซุปทอด สูตร 5078",
        "cal": 391
    },
    "boiled_rice_5079": {
        "name": "ข้าวต้ม สูตร 5079",
        "cal": 411
    },
    "spicy_fish_5080": {
        "name": "ปลายำ สูตร 5080",
        "cal": 469
    },
    "steamed_pork_5081": {
        "name": "หมูนึ่ง สูตร 5081",
        "cal": 558
    },
    "grilled_beef_5082": {
        "name": "เนื้อย่าง สูตร 5082",
        "cal": 814
    },
    "spicy_noodle_5083": {
        "name": "บะหมี่ยำ สูตร 5083",
        "cal": 667
    },
    "fried_shrimp_5084": {
        "name": "กุ้งทอด สูตร 5084",
        "cal": 206
    },
    "boiled_chicken_5085": {
        "name": "ไก่ต้ม สูตร 5085",
        "cal": 667
    },
    "boiled_fish_5086": {
        "name": "ปลาต้ม สูตร 5086",
        "cal": 504
    },
    "boiled_shrimp_5087": {
        "name": "กุ้งต้ม สูตร 5087",
        "cal": 203
    },
    "boiled_noodle_5088": {
        "name": "บะหมี่ต้ม สูตร 5088",
        "cal": 125
    },
    "spicy_squid_5089": {
        "name": "ปลาหมึกยำ สูตร 5089",
        "cal": 799
    },
    "grilled_pork_5090": {
        "name": "หมูย่าง สูตร 5090",
        "cal": 249
    },
    "stir_fried_pork_5091": {
        "name": "หมูผัด สูตร 5091",
        "cal": 593
    },
    "grilled_pork_5092": {
        "name": "หมูย่าง สูตร 5092",
        "cal": 815
    },
    "fried_fish_5093": {
        "name": "ปลาทอด สูตร 5093",
        "cal": 470
    },
    "stir_fried_beef_5094": {
        "name": "เนื้อผัด สูตร 5094",
        "cal": 465
    },
    "steamed_fish_5095": {
        "name": "ปลานึ่ง สูตร 5095",
        "cal": 152
    },
    "steamed_chicken_5096": {
        "name": "ไก่นึ่ง สูตร 5096",
        "cal": 462
    },
    "stir_fried_beef_5097": {
        "name": "เนื้อผัด สูตร 5097",
        "cal": 581
    },
    "fried_chicken_5098": {
        "name": "ไก่ทอด สูตร 5098",
        "cal": 755
    },
    "grilled_noodle_5099": {
        "name": "บะหมี่ย่าง สูตร 5099",
        "cal": 438
    },
    "steamed_pork_5100": {
        "name": "หมูนึ่ง สูตร 5100",
        "cal": 820
    },
    "stir_fried_squid_5101": {
        "name": "ปลาหมึกผัด สูตร 5101",
        "cal": 74
    },
    "stir_fried_soup_5102": {
        "name": "ซุปผัด สูตร 5102",
        "cal": 92
    },
    "boiled_rice_5103": {
        "name": "ข้าวต้ม สูตร 5103",
        "cal": 644
    },
    "stir_fried_shrimp_5104": {
        "name": "กุ้งผัด สูตร 5104",
        "cal": 597
    },
    "grilled_fish_5105": {
        "name": "ปลาย่าง สูตร 5105",
        "cal": 568
    },
    "spicy_chicken_5106": {
        "name": "ไก่ยำ สูตร 5106",
        "cal": 169
    },
    "stir_fried_chicken_5107": {
        "name": "ไก่ผัด สูตร 5107",
        "cal": 791
    },
    "boiled_squid_5108": {
        "name": "ปลาหมึกต้ม สูตร 5108",
        "cal": 138
    },
    "spicy_rice_5109": {
        "name": "ข้าวยำ สูตร 5109",
        "cal": 135
    },
    "stir_fried_pork_5110": {
        "name": "หมูผัด สูตร 5110",
        "cal": 176
    },
    "stir_fried_shrimp_5111": {
        "name": "กุ้งผัด สูตร 5111",
        "cal": 182
    },
    "fried_rice_5112": {
        "name": "ข้าวทอด สูตร 5112",
        "cal": 639
    },
    "fried_shrimp_5113": {
        "name": "กุ้งทอด สูตร 5113",
        "cal": 136
    },
    "boiled_pork_5114": {
        "name": "หมูต้ม สูตร 5114",
        "cal": 124
    },
    "boiled_shrimp_5115": {
        "name": "กุ้งต้ม สูตร 5115",
        "cal": 746
    },
    "spicy_beef_5116": {
        "name": "เนื้อยำ สูตร 5116",
        "cal": 346
    },
    "stir_fried_shrimp_5117": {
        "name": "กุ้งผัด สูตร 5117",
        "cal": 712
    },
    "spicy_pork_5118": {
        "name": "หมูยำ สูตร 5118",
        "cal": 134
    },
    "boiled_fish_5119": {
        "name": "ปลาต้ม สูตร 5119",
        "cal": 155
    },
    "grilled_chicken_5120": {
        "name": "ไก่ย่าง สูตร 5120",
        "cal": 787
    },
    "steamed_squid_5121": {
        "name": "ปลาหมึกนึ่ง สูตร 5121",
        "cal": 638
    },
    "grilled_squid_5122": {
        "name": "ปลาหมึกย่าง สูตร 5122",
        "cal": 766
    },
    "boiled_noodle_5123": {
        "name": "บะหมี่ต้ม สูตร 5123",
        "cal": 171
    },
    "steamed_shrimp_5124": {
        "name": "กุ้งนึ่ง สูตร 5124",
        "cal": 579
    },
    "boiled_chicken_5125": {
        "name": "ไก่ต้ม สูตร 5125",
        "cal": 437
    },
    "stir_fried_rice_5126": {
        "name": "ข้าวผัด สูตร 5126",
        "cal": 336
    },
    "boiled_pork_5127": {
        "name": "หมูต้ม สูตร 5127",
        "cal": 28
    },
    "boiled_fish_5128": {
        "name": "ปลาต้ม สูตร 5128",
        "cal": 415
    },
    "boiled_rice_5129": {
        "name": "ข้าวต้ม สูตร 5129",
        "cal": 119
    },
    "spicy_noodle_5130": {
        "name": "บะหมี่ยำ สูตร 5130",
        "cal": 583
    },
    "spicy_squid_5131": {
        "name": "ปลาหมึกยำ สูตร 5131",
        "cal": 183
    },
    "steamed_soup_5132": {
        "name": "ซุปนึ่ง สูตร 5132",
        "cal": 831
    },
    "spicy_soup_5133": {
        "name": "ซุปยำ สูตร 5133",
        "cal": 629
    },
    "boiled_squid_5134": {
        "name": "ปลาหมึกต้ม สูตร 5134",
        "cal": 559
    },
    "fried_chicken_5135": {
        "name": "ไก่ทอด สูตร 5135",
        "cal": 509
    },
    "fried_rice_5136": {
        "name": "ข้าวทอด สูตร 5136",
        "cal": 191
    },
    "spicy_squid_5137": {
        "name": "ปลาหมึกยำ สูตร 5137",
        "cal": 65
    },
    "stir_fried_squid_5138": {
        "name": "ปลาหมึกผัด สูตร 5138",
        "cal": 139
    },
    "stir_fried_noodle_5139": {
        "name": "บะหมี่ผัด สูตร 5139",
        "cal": 98
    },
    "fried_soup_5140": {
        "name": "ซุปทอด สูตร 5140",
        "cal": 359
    },
    "steamed_beef_5141": {
        "name": "เนื้อนึ่ง สูตร 5141",
        "cal": 96
    },
    "steamed_shrimp_5142": {
        "name": "กุ้งนึ่ง สูตร 5142",
        "cal": 124
    },
    "steamed_squid_5143": {
        "name": "ปลาหมึกนึ่ง สูตร 5143",
        "cal": 262
    },
    "boiled_rice_5144": {
        "name": "ข้าวต้ม สูตร 5144",
        "cal": 454
    },
    "spicy_beef_5145": {
        "name": "เนื้อยำ สูตร 5145",
        "cal": 281
    },
    "grilled_fish_5146": {
        "name": "ปลาย่าง สูตร 5146",
        "cal": 141
    },
    "fried_rice_5147": {
        "name": "ข้าวทอด สูตร 5147",
        "cal": 532
    },
    "fried_chicken_5148": {
        "name": "ไก่ทอด สูตร 5148",
        "cal": 56
    },
    "boiled_squid_5149": {
        "name": "ปลาหมึกต้ม สูตร 5149",
        "cal": 357
    },
    "steamed_pork_5150": {
        "name": "หมูนึ่ง สูตร 5150",
        "cal": 530
    },
    "grilled_rice_5151": {
        "name": "ข้าวย่าง สูตร 5151",
        "cal": 222
    },
    "stir_fried_shrimp_5152": {
        "name": "กุ้งผัด สูตร 5152",
        "cal": 554
    },
    "stir_fried_rice_5153": {
        "name": "ข้าวผัด สูตร 5153",
        "cal": 818
    },
    "boiled_beef_5154": {
        "name": "เนื้อต้ม สูตร 5154",
        "cal": 389
    },
    "steamed_squid_5155": {
        "name": "ปลาหมึกนึ่ง สูตร 5155",
        "cal": 90
    },
    "grilled_fish_5156": {
        "name": "ปลาย่าง สูตร 5156",
        "cal": 417
    },
    "boiled_chicken_5157": {
        "name": "ไก่ต้ม สูตร 5157",
        "cal": 447
    },
    "grilled_squid_5158": {
        "name": "ปลาหมึกย่าง สูตร 5158",
        "cal": 539
    },
    "fried_soup_5159": {
        "name": "ซุปทอด สูตร 5159",
        "cal": 468
    },
    "stir_fried_fish_5160": {
        "name": "ปลาผัด สูตร 5160",
        "cal": 770
    },
    "boiled_soup_5161": {
        "name": "ซุปต้ม สูตร 5161",
        "cal": 677
    },
    "stir_fried_rice_5162": {
        "name": "ข้าวผัด สูตร 5162",
        "cal": 849
    },
    "spicy_chicken_5163": {
        "name": "ไก่ยำ สูตร 5163",
        "cal": 407
    },
    "stir_fried_fish_5164": {
        "name": "ปลาผัด สูตร 5164",
        "cal": 133
    },
    "stir_fried_chicken_5165": {
        "name": "ไก่ผัด สูตร 5165",
        "cal": 516
    },
    "spicy_rice_5166": {
        "name": "ข้าวยำ สูตร 5166",
        "cal": 404
    },
    "stir_fried_fish_5167": {
        "name": "ปลาผัด สูตร 5167",
        "cal": 711
    },
    "steamed_shrimp_5168": {
        "name": "กุ้งนึ่ง สูตร 5168",
        "cal": 98
    },
    "fried_chicken_5169": {
        "name": "ไก่ทอด สูตร 5169",
        "cal": 373
    },
    "stir_fried_pork_5170": {
        "name": "หมูผัด สูตร 5170",
        "cal": 154
    },
    "fried_noodle_5171": {
        "name": "บะหมี่ทอด สูตร 5171",
        "cal": 740
    },
    "spicy_fish_5172": {
        "name": "ปลายำ สูตร 5172",
        "cal": 750
    },
    "stir_fried_rice_5173": {
        "name": "ข้าวผัด สูตร 5173",
        "cal": 390
    },
    "grilled_fish_5174": {
        "name": "ปลาย่าง สูตร 5174",
        "cal": 750
    },
    "grilled_pork_5175": {
        "name": "หมูย่าง สูตร 5175",
        "cal": 135
    },
    "stir_fried_beef_5176": {
        "name": "เนื้อผัด สูตร 5176",
        "cal": 703
    },
    "steamed_rice_5177": {
        "name": "ข้าวนึ่ง สูตร 5177",
        "cal": 420
    },
    "spicy_beef_5178": {
        "name": "เนื้อยำ สูตร 5178",
        "cal": 687
    },
    "steamed_soup_5179": {
        "name": "ซุปนึ่ง สูตร 5179",
        "cal": 801
    },
    "fried_noodle_5180": {
        "name": "บะหมี่ทอด สูตร 5180",
        "cal": 772
    },
    "fried_noodle_5181": {
        "name": "บะหมี่ทอด สูตร 5181",
        "cal": 23
    },
    "steamed_chicken_5182": {
        "name": "ไก่นึ่ง สูตร 5182",
        "cal": 774
    },
    "spicy_squid_5183": {
        "name": "ปลาหมึกยำ สูตร 5183",
        "cal": 512
    },
    "spicy_shrimp_5184": {
        "name": "กุ้งยำ สูตร 5184",
        "cal": 719
    },
    "steamed_fish_5185": {
        "name": "ปลานึ่ง สูตร 5185",
        "cal": 433
    },
    "stir_fried_noodle_5186": {
        "name": "บะหมี่ผัด สูตร 5186",
        "cal": 487
    },
    "stir_fried_beef_5187": {
        "name": "เนื้อผัด สูตร 5187",
        "cal": 169
    },
    "grilled_fish_5188": {
        "name": "ปลาย่าง สูตร 5188",
        "cal": 642
    },
    "boiled_noodle_5189": {
        "name": "บะหมี่ต้ม สูตร 5189",
        "cal": 157
    },
    "boiled_shrimp_5190": {
        "name": "กุ้งต้ม สูตร 5190",
        "cal": 611
    },
    "boiled_shrimp_5191": {
        "name": "กุ้งต้ม สูตร 5191",
        "cal": 104
    },
    "boiled_chicken_5192": {
        "name": "ไก่ต้ม สูตร 5192",
        "cal": 717
    },
    "spicy_squid_5193": {
        "name": "ปลาหมึกยำ สูตร 5193",
        "cal": 305
    },
    "grilled_fish_5194": {
        "name": "ปลาย่าง สูตร 5194",
        "cal": 69
    },
    "fried_noodle_5195": {
        "name": "บะหมี่ทอด สูตร 5195",
        "cal": 48
    },
    "fried_beef_5196": {
        "name": "เนื้อทอด สูตร 5196",
        "cal": 109
    },
    "stir_fried_pork_5197": {
        "name": "หมูผัด สูตร 5197",
        "cal": 156
    },
    "spicy_rice_5198": {
        "name": "ข้าวยำ สูตร 5198",
        "cal": 754
    },
    "boiled_shrimp_5199": {
        "name": "กุ้งต้ม สูตร 5199",
        "cal": 138
    },
    "grilled_rice_5200": {
        "name": "ข้าวย่าง สูตร 5200",
        "cal": 458
    },
    "steamed_squid_5201": {
        "name": "ปลาหมึกนึ่ง สูตร 5201",
        "cal": 330
    },
    "spicy_fish_5202": {
        "name": "ปลายำ สูตร 5202",
        "cal": 747
    },
    "steamed_beef_5203": {
        "name": "เนื้อนึ่ง สูตร 5203",
        "cal": 518
    },
    "grilled_soup_5204": {
        "name": "ซุปย่าง สูตร 5204",
        "cal": 241
    },
    "stir_fried_rice_5205": {
        "name": "ข้าวผัด สูตร 5205",
        "cal": 342
    },
    "grilled_rice_5206": {
        "name": "ข้าวย่าง สูตร 5206",
        "cal": 314
    },
    "boiled_pork_5207": {
        "name": "หมูต้ม สูตร 5207",
        "cal": 236
    },
    "steamed_beef_5208": {
        "name": "เนื้อนึ่ง สูตร 5208",
        "cal": 543
    },
    "boiled_pork_5209": {
        "name": "หมูต้ม สูตร 5209",
        "cal": 631
    },
    "grilled_pork_5210": {
        "name": "หมูย่าง สูตร 5210",
        "cal": 628
    },
    "boiled_fish_5211": {
        "name": "ปลาต้ม สูตร 5211",
        "cal": 233
    },
    "grilled_noodle_5212": {
        "name": "บะหมี่ย่าง สูตร 5212",
        "cal": 493
    },
    "steamed_squid_5213": {
        "name": "ปลาหมึกนึ่ง สูตร 5213",
        "cal": 208
    },
    "spicy_fish_5214": {
        "name": "ปลายำ สูตร 5214",
        "cal": 850
    },
    "boiled_beef_5215": {
        "name": "เนื้อต้ม สูตร 5215",
        "cal": 617
    },
    "boiled_soup_5216": {
        "name": "ซุปต้ม สูตร 5216",
        "cal": 489
    },
    "steamed_rice_5217": {
        "name": "ข้าวนึ่ง สูตร 5217",
        "cal": 477
    },
    "steamed_squid_5218": {
        "name": "ปลาหมึกนึ่ง สูตร 5218",
        "cal": 584
    },
    "steamed_shrimp_5219": {
        "name": "กุ้งนึ่ง สูตร 5219",
        "cal": 772
    },
    "boiled_soup_5220": {
        "name": "ซุปต้ม สูตร 5220",
        "cal": 168
    },
    "fried_fish_5221": {
        "name": "ปลาทอด สูตร 5221",
        "cal": 472
    },
    "stir_fried_soup_5222": {
        "name": "ซุปผัด สูตร 5222",
        "cal": 23
    },
    "boiled_soup_5223": {
        "name": "ซุปต้ม สูตร 5223",
        "cal": 565
    },
    "steamed_soup_5224": {
        "name": "ซุปนึ่ง สูตร 5224",
        "cal": 523
    },
    "fried_chicken_5225": {
        "name": "ไก่ทอด สูตร 5225",
        "cal": 836
    },
    "stir_fried_shrimp_5226": {
        "name": "กุ้งผัด สูตร 5226",
        "cal": 225
    },
    "fried_shrimp_5227": {
        "name": "กุ้งทอด สูตร 5227",
        "cal": 790
    },
    "steamed_chicken_5228": {
        "name": "ไก่นึ่ง สูตร 5228",
        "cal": 405
    },
    "boiled_pork_5229": {
        "name": "หมูต้ม สูตร 5229",
        "cal": 818
    },
    "steamed_squid_5230": {
        "name": "ปลาหมึกนึ่ง สูตร 5230",
        "cal": 302
    },
    "grilled_squid_5231": {
        "name": "ปลาหมึกย่าง สูตร 5231",
        "cal": 724
    },
    "fried_pork_5232": {
        "name": "หมูทอด สูตร 5232",
        "cal": 230
    },
    "boiled_beef_5233": {
        "name": "เนื้อต้ม สูตร 5233",
        "cal": 397
    },
    "spicy_shrimp_5234": {
        "name": "กุ้งยำ สูตร 5234",
        "cal": 119
    },
    "steamed_squid_5235": {
        "name": "ปลาหมึกนึ่ง สูตร 5235",
        "cal": 654
    },
    "stir_fried_chicken_5236": {
        "name": "ไก่ผัด สูตร 5236",
        "cal": 455
    },
    "steamed_soup_5237": {
        "name": "ซุปนึ่ง สูตร 5237",
        "cal": 368
    },
    "boiled_chicken_5238": {
        "name": "ไก่ต้ม สูตร 5238",
        "cal": 32
    },
    "stir_fried_pork_5239": {
        "name": "หมูผัด สูตร 5239",
        "cal": 844
    },
    "grilled_fish_5240": {
        "name": "ปลาย่าง สูตร 5240",
        "cal": 260
    },
    "stir_fried_rice_5241": {
        "name": "ข้าวผัด สูตร 5241",
        "cal": 222
    },
    "boiled_beef_5242": {
        "name": "เนื้อต้ม สูตร 5242",
        "cal": 547
    },
    "boiled_beef_5243": {
        "name": "เนื้อต้ม สูตร 5243",
        "cal": 475
    },
    "boiled_beef_5244": {
        "name": "เนื้อต้ม สูตร 5244",
        "cal": 115
    },
    "grilled_noodle_5245": {
        "name": "บะหมี่ย่าง สูตร 5245",
        "cal": 572
    },
    "spicy_squid_5246": {
        "name": "ปลาหมึกยำ สูตร 5246",
        "cal": 363
    },
    "steamed_soup_5247": {
        "name": "ซุปนึ่ง สูตร 5247",
        "cal": 192
    },
    "grilled_pork_5248": {
        "name": "หมูย่าง สูตร 5248",
        "cal": 181
    },
    "spicy_pork_5249": {
        "name": "หมูยำ สูตร 5249",
        "cal": 260
    },
    "fried_shrimp_5250": {
        "name": "กุ้งทอด สูตร 5250",
        "cal": 495
    },
    "stir_fried_pork_5251": {
        "name": "หมูผัด สูตร 5251",
        "cal": 148
    },
    "stir_fried_rice_5252": {
        "name": "ข้าวผัด สูตร 5252",
        "cal": 831
    },
    "grilled_squid_5253": {
        "name": "ปลาหมึกย่าง สูตร 5253",
        "cal": 23
    },
    "steamed_pork_5254": {
        "name": "หมูนึ่ง สูตร 5254",
        "cal": 99
    },
    "boiled_pork_5255": {
        "name": "หมูต้ม สูตร 5255",
        "cal": 792
    },
    "grilled_soup_5256": {
        "name": "ซุปย่าง สูตร 5256",
        "cal": 89
    },
    "spicy_chicken_5257": {
        "name": "ไก่ยำ สูตร 5257",
        "cal": 427
    },
    "spicy_shrimp_5258": {
        "name": "กุ้งยำ สูตร 5258",
        "cal": 675
    },
    "spicy_soup_5259": {
        "name": "ซุปยำ สูตร 5259",
        "cal": 356
    },
    "fried_pork_5260": {
        "name": "หมูทอด สูตร 5260",
        "cal": 636
    },
    "boiled_pork_5261": {
        "name": "หมูต้ม สูตร 5261",
        "cal": 364
    },
    "steamed_rice_5262": {
        "name": "ข้าวนึ่ง สูตร 5262",
        "cal": 82
    },
    "stir_fried_noodle_5263": {
        "name": "บะหมี่ผัด สูตร 5263",
        "cal": 82
    },
    "spicy_soup_5264": {
        "name": "ซุปยำ สูตร 5264",
        "cal": 199
    },
    "boiled_noodle_5265": {
        "name": "บะหมี่ต้ม สูตร 5265",
        "cal": 816
    },
    "fried_beef_5266": {
        "name": "เนื้อทอด สูตร 5266",
        "cal": 387
    },
    "fried_soup_5267": {
        "name": "ซุปทอด สูตร 5267",
        "cal": 283
    },
    "spicy_beef_5268": {
        "name": "เนื้อยำ สูตร 5268",
        "cal": 638
    },
    "grilled_shrimp_5269": {
        "name": "กุ้งย่าง สูตร 5269",
        "cal": 500
    },
    "steamed_chicken_5270": {
        "name": "ไก่นึ่ง สูตร 5270",
        "cal": 601
    },
    "grilled_beef_5271": {
        "name": "เนื้อย่าง สูตร 5271",
        "cal": 717
    },
    "spicy_squid_5272": {
        "name": "ปลาหมึกยำ สูตร 5272",
        "cal": 837
    },
    "fried_soup_5273": {
        "name": "ซุปทอด สูตร 5273",
        "cal": 778
    },
    "fried_shrimp_5274": {
        "name": "กุ้งทอด สูตร 5274",
        "cal": 546
    },
    "grilled_pork_5275": {
        "name": "หมูย่าง สูตร 5275",
        "cal": 411
    },
    "boiled_shrimp_5276": {
        "name": "กุ้งต้ม สูตร 5276",
        "cal": 484
    },
    "grilled_squid_5277": {
        "name": "ปลาหมึกย่าง สูตร 5277",
        "cal": 259
    },
    "grilled_rice_5278": {
        "name": "ข้าวย่าง สูตร 5278",
        "cal": 93
    },
    "fried_soup_5279": {
        "name": "ซุปทอด สูตร 5279",
        "cal": 521
    },
    "steamed_noodle_5280": {
        "name": "บะหมี่นึ่ง สูตร 5280",
        "cal": 139
    },
    "fried_shrimp_5281": {
        "name": "กุ้งทอด สูตร 5281",
        "cal": 602
    },
    "stir_fried_shrimp_5282": {
        "name": "กุ้งผัด สูตร 5282",
        "cal": 389
    },
    "grilled_beef_5283": {
        "name": "เนื้อย่าง สูตร 5283",
        "cal": 347
    },
    "boiled_soup_5284": {
        "name": "ซุปต้ม สูตร 5284",
        "cal": 524
    },
    "fried_rice_5285": {
        "name": "ข้าวทอด สูตร 5285",
        "cal": 831
    },
    "stir_fried_squid_5286": {
        "name": "ปลาหมึกผัด สูตร 5286",
        "cal": 90
    },
    "spicy_squid_5287": {
        "name": "ปลาหมึกยำ สูตร 5287",
        "cal": 539
    },
    "fried_soup_5288": {
        "name": "ซุปทอด สูตร 5288",
        "cal": 431
    },
    "fried_soup_5289": {
        "name": "ซุปทอด สูตร 5289",
        "cal": 713
    },
    "fried_shrimp_5290": {
        "name": "กุ้งทอด สูตร 5290",
        "cal": 594
    },
    "steamed_noodle_5291": {
        "name": "บะหมี่นึ่ง สูตร 5291",
        "cal": 609
    },
    "fried_beef_5292": {
        "name": "เนื้อทอด สูตร 5292",
        "cal": 778
    },
    "boiled_fish_5293": {
        "name": "ปลาต้ม สูตร 5293",
        "cal": 136
    },
    "grilled_soup_5294": {
        "name": "ซุปย่าง สูตร 5294",
        "cal": 306
    },
    "steamed_noodle_5295": {
        "name": "บะหมี่นึ่ง สูตร 5295",
        "cal": 808
    },
    "steamed_shrimp_5296": {
        "name": "กุ้งนึ่ง สูตร 5296",
        "cal": 659
    },
    "fried_beef_5297": {
        "name": "เนื้อทอด สูตร 5297",
        "cal": 713
    },
    "steamed_chicken_5298": {
        "name": "ไก่นึ่ง สูตร 5298",
        "cal": 278
    },
    "boiled_noodle_5299": {
        "name": "บะหมี่ต้ม สูตร 5299",
        "cal": 53
    },
    "grilled_soup_5300": {
        "name": "ซุปย่าง สูตร 5300",
        "cal": 532
    },
    "fried_beef_5301": {
        "name": "เนื้อทอด สูตร 5301",
        "cal": 436
    },
    "spicy_rice_5302": {
        "name": "ข้าวยำ สูตร 5302",
        "cal": 417
    },
    "fried_fish_5303": {
        "name": "ปลาทอด สูตร 5303",
        "cal": 560
    },
    "spicy_shrimp_5304": {
        "name": "กุ้งยำ สูตร 5304",
        "cal": 411
    },
    "grilled_fish_5305": {
        "name": "ปลาย่าง สูตร 5305",
        "cal": 487
    },
    "steamed_noodle_5306": {
        "name": "บะหมี่นึ่ง สูตร 5306",
        "cal": 447
    },
    "boiled_chicken_5307": {
        "name": "ไก่ต้ม สูตร 5307",
        "cal": 528
    },
    "grilled_pork_5308": {
        "name": "หมูย่าง สูตร 5308",
        "cal": 271
    },
    "boiled_fish_5309": {
        "name": "ปลาต้ม สูตร 5309",
        "cal": 564
    },
    "stir_fried_pork_5310": {
        "name": "หมูผัด สูตร 5310",
        "cal": 383
    },
    "boiled_squid_5311": {
        "name": "ปลาหมึกต้ม สูตร 5311",
        "cal": 226
    },
    "fried_pork_5312": {
        "name": "หมูทอด สูตร 5312",
        "cal": 115
    },
    "steamed_fish_5313": {
        "name": "ปลานึ่ง สูตร 5313",
        "cal": 479
    },
    "grilled_shrimp_5314": {
        "name": "กุ้งย่าง สูตร 5314",
        "cal": 609
    },
    "boiled_fish_5315": {
        "name": "ปลาต้ม สูตร 5315",
        "cal": 297
    },
    "stir_fried_rice_5316": {
        "name": "ข้าวผัด สูตร 5316",
        "cal": 357
    },
    "fried_pork_5317": {
        "name": "หมูทอด สูตร 5317",
        "cal": 316
    },
    "fried_noodle_5318": {
        "name": "บะหมี่ทอด สูตร 5318",
        "cal": 199
    },
    "steamed_chicken_5319": {
        "name": "ไก่นึ่ง สูตร 5319",
        "cal": 749
    },
    "steamed_fish_5320": {
        "name": "ปลานึ่ง สูตร 5320",
        "cal": 772
    },
    "spicy_squid_5321": {
        "name": "ปลาหมึกยำ สูตร 5321",
        "cal": 703
    },
    "grilled_soup_5322": {
        "name": "ซุปย่าง สูตร 5322",
        "cal": 685
    },
    "spicy_fish_5323": {
        "name": "ปลายำ สูตร 5323",
        "cal": 267
    },
    "boiled_rice_5324": {
        "name": "ข้าวต้ม สูตร 5324",
        "cal": 526
    },
    "boiled_fish_5325": {
        "name": "ปลาต้ม สูตร 5325",
        "cal": 832
    },
    "boiled_beef_5326": {
        "name": "เนื้อต้ม สูตร 5326",
        "cal": 556
    },
    "spicy_soup_5327": {
        "name": "ซุปยำ สูตร 5327",
        "cal": 626
    },
    "stir_fried_noodle_5328": {
        "name": "บะหมี่ผัด สูตร 5328",
        "cal": 53
    },
    "spicy_chicken_5329": {
        "name": "ไก่ยำ สูตร 5329",
        "cal": 412
    },
    "stir_fried_noodle_5330": {
        "name": "บะหมี่ผัด สูตร 5330",
        "cal": 833
    },
    "boiled_rice_5331": {
        "name": "ข้าวต้ม สูตร 5331",
        "cal": 496
    },
    "grilled_noodle_5332": {
        "name": "บะหมี่ย่าง สูตร 5332",
        "cal": 139
    },
    "stir_fried_squid_5333": {
        "name": "ปลาหมึกผัด สูตร 5333",
        "cal": 590
    },
    "boiled_beef_5334": {
        "name": "เนื้อต้ม สูตร 5334",
        "cal": 438
    },
    "spicy_beef_5335": {
        "name": "เนื้อยำ สูตร 5335",
        "cal": 172
    },
    "spicy_beef_5336": {
        "name": "เนื้อยำ สูตร 5336",
        "cal": 697
    },
    "stir_fried_shrimp_5337": {
        "name": "กุ้งผัด สูตร 5337",
        "cal": 145
    },
    "boiled_rice_5338": {
        "name": "ข้าวต้ม สูตร 5338",
        "cal": 234
    },
    "spicy_shrimp_5339": {
        "name": "กุ้งยำ สูตร 5339",
        "cal": 470
    },
    "fried_fish_5340": {
        "name": "ปลาทอด สูตร 5340",
        "cal": 401
    },
    "boiled_shrimp_5341": {
        "name": "กุ้งต้ม สูตร 5341",
        "cal": 501
    },
    "boiled_noodle_5342": {
        "name": "บะหมี่ต้ม สูตร 5342",
        "cal": 513
    },
    "steamed_pork_5343": {
        "name": "หมูนึ่ง สูตร 5343",
        "cal": 89
    },
    "stir_fried_fish_5344": {
        "name": "ปลาผัด สูตร 5344",
        "cal": 537
    },
    "stir_fried_squid_5345": {
        "name": "ปลาหมึกผัด สูตร 5345",
        "cal": 536
    },
    "grilled_soup_5346": {
        "name": "ซุปย่าง สูตร 5346",
        "cal": 214
    },
    "steamed_pork_5347": {
        "name": "หมูนึ่ง สูตร 5347",
        "cal": 263
    },
    "boiled_rice_5348": {
        "name": "ข้าวต้ม สูตร 5348",
        "cal": 396
    },
    "spicy_chicken_5349": {
        "name": "ไก่ยำ สูตร 5349",
        "cal": 483
    },
    "stir_fried_pork_5350": {
        "name": "หมูผัด สูตร 5350",
        "cal": 470
    },
    "stir_fried_noodle_5351": {
        "name": "บะหมี่ผัด สูตร 5351",
        "cal": 792
    },
    "boiled_beef_5352": {
        "name": "เนื้อต้ม สูตร 5352",
        "cal": 189
    },
    "spicy_soup_5353": {
        "name": "ซุปยำ สูตร 5353",
        "cal": 136
    },
    "grilled_squid_5354": {
        "name": "ปลาหมึกย่าง สูตร 5354",
        "cal": 799
    },
    "boiled_chicken_5355": {
        "name": "ไก่ต้ม สูตร 5355",
        "cal": 149
    },
    "boiled_pork_5356": {
        "name": "หมูต้ม สูตร 5356",
        "cal": 776
    },
    "fried_shrimp_5357": {
        "name": "กุ้งทอด สูตร 5357",
        "cal": 339
    },
    "boiled_pork_5358": {
        "name": "หมูต้ม สูตร 5358",
        "cal": 572
    },
    "fried_soup_5359": {
        "name": "ซุปทอด สูตร 5359",
        "cal": 70
    },
    "grilled_fish_5360": {
        "name": "ปลาย่าง สูตร 5360",
        "cal": 21
    },
    "grilled_squid_5361": {
        "name": "ปลาหมึกย่าง สูตร 5361",
        "cal": 840
    },
    "spicy_fish_5362": {
        "name": "ปลายำ สูตร 5362",
        "cal": 442
    },
    "steamed_noodle_5363": {
        "name": "บะหมี่นึ่ง สูตร 5363",
        "cal": 669
    },
    "boiled_squid_5364": {
        "name": "ปลาหมึกต้ม สูตร 5364",
        "cal": 608
    },
    "boiled_chicken_5365": {
        "name": "ไก่ต้ม สูตร 5365",
        "cal": 150
    },
    "boiled_squid_5366": {
        "name": "ปลาหมึกต้ม สูตร 5366",
        "cal": 783
    },
    "boiled_chicken_5367": {
        "name": "ไก่ต้ม สูตร 5367",
        "cal": 485
    },
    "spicy_pork_5368": {
        "name": "หมูยำ สูตร 5368",
        "cal": 290
    },
    "stir_fried_beef_5369": {
        "name": "เนื้อผัด สูตร 5369",
        "cal": 264
    },
    "fried_noodle_5370": {
        "name": "บะหมี่ทอด สูตร 5370",
        "cal": 236
    },
    "stir_fried_fish_5371": {
        "name": "ปลาผัด สูตร 5371",
        "cal": 215
    },
    "spicy_squid_5372": {
        "name": "ปลาหมึกยำ สูตร 5372",
        "cal": 51
    },
    "grilled_noodle_5373": {
        "name": "บะหมี่ย่าง สูตร 5373",
        "cal": 115
    },
    "boiled_shrimp_5374": {
        "name": "กุ้งต้ม สูตร 5374",
        "cal": 62
    },
    "stir_fried_shrimp_5375": {
        "name": "กุ้งผัด สูตร 5375",
        "cal": 359
    },
    "boiled_soup_5376": {
        "name": "ซุปต้ม สูตร 5376",
        "cal": 784
    },
    "spicy_squid_5377": {
        "name": "ปลาหมึกยำ สูตร 5377",
        "cal": 549
    },
    "grilled_squid_5378": {
        "name": "ปลาหมึกย่าง สูตร 5378",
        "cal": 254
    },
    "stir_fried_shrimp_5379": {
        "name": "กุ้งผัด สูตร 5379",
        "cal": 76
    },
    "stir_fried_noodle_5380": {
        "name": "บะหมี่ผัด สูตร 5380",
        "cal": 258
    },
    "grilled_noodle_5381": {
        "name": "บะหมี่ย่าง สูตร 5381",
        "cal": 560
    },
    "spicy_shrimp_5382": {
        "name": "กุ้งยำ สูตร 5382",
        "cal": 118
    },
    "steamed_beef_5383": {
        "name": "เนื้อนึ่ง สูตร 5383",
        "cal": 425
    },
    "boiled_pork_5384": {
        "name": "หมูต้ม สูตร 5384",
        "cal": 22
    },
    "grilled_pork_5385": {
        "name": "หมูย่าง สูตร 5385",
        "cal": 33
    },
    "boiled_beef_5386": {
        "name": "เนื้อต้ม สูตร 5386",
        "cal": 440
    },
    "stir_fried_squid_5387": {
        "name": "ปลาหมึกผัด สูตร 5387",
        "cal": 252
    },
    "grilled_fish_5388": {
        "name": "ปลาย่าง สูตร 5388",
        "cal": 171
    },
    "grilled_squid_5389": {
        "name": "ปลาหมึกย่าง สูตร 5389",
        "cal": 574
    },
    "stir_fried_rice_5390": {
        "name": "ข้าวผัด สูตร 5390",
        "cal": 101
    },
    "spicy_soup_5391": {
        "name": "ซุปยำ สูตร 5391",
        "cal": 721
    },
    "spicy_rice_5392": {
        "name": "ข้าวยำ สูตร 5392",
        "cal": 828
    },
    "grilled_shrimp_5393": {
        "name": "กุ้งย่าง สูตร 5393",
        "cal": 417
    },
    "stir_fried_chicken_5394": {
        "name": "ไก่ผัด สูตร 5394",
        "cal": 341
    },
    "boiled_squid_5395": {
        "name": "ปลาหมึกต้ม สูตร 5395",
        "cal": 446
    },
    "boiled_rice_5396": {
        "name": "ข้าวต้ม สูตร 5396",
        "cal": 73
    },
    "boiled_shrimp_5397": {
        "name": "กุ้งต้ม สูตร 5397",
        "cal": 388
    },
    "grilled_fish_5398": {
        "name": "ปลาย่าง สูตร 5398",
        "cal": 625
    },
    "steamed_squid_5399": {
        "name": "ปลาหมึกนึ่ง สูตร 5399",
        "cal": 437
    },
    "fried_rice_5400": {
        "name": "ข้าวทอด สูตร 5400",
        "cal": 146
    },
    "grilled_soup_5401": {
        "name": "ซุปย่าง สูตร 5401",
        "cal": 308
    },
    "boiled_rice_5402": {
        "name": "ข้าวต้ม สูตร 5402",
        "cal": 239
    },
    "boiled_shrimp_5403": {
        "name": "กุ้งต้ม สูตร 5403",
        "cal": 444
    },
    "grilled_soup_5404": {
        "name": "ซุปย่าง สูตร 5404",
        "cal": 142
    },
    "stir_fried_squid_5405": {
        "name": "ปลาหมึกผัด สูตร 5405",
        "cal": 476
    },
    "spicy_soup_5406": {
        "name": "ซุปยำ สูตร 5406",
        "cal": 472
    },
    "spicy_fish_5407": {
        "name": "ปลายำ สูตร 5407",
        "cal": 210
    },
    "boiled_soup_5408": {
        "name": "ซุปต้ม สูตร 5408",
        "cal": 327
    },
    "spicy_fish_5409": {
        "name": "ปลายำ สูตร 5409",
        "cal": 184
    },
    "fried_shrimp_5410": {
        "name": "กุ้งทอด สูตร 5410",
        "cal": 587
    },
    "spicy_beef_5411": {
        "name": "เนื้อยำ สูตร 5411",
        "cal": 75
    },
    "spicy_soup_5412": {
        "name": "ซุปยำ สูตร 5412",
        "cal": 151
    },
    "steamed_soup_5413": {
        "name": "ซุปนึ่ง สูตร 5413",
        "cal": 284
    },
    "stir_fried_chicken_5414": {
        "name": "ไก่ผัด สูตร 5414",
        "cal": 32
    },
    "fried_squid_5415": {
        "name": "ปลาหมึกทอด สูตร 5415",
        "cal": 130
    },
    "grilled_noodle_5416": {
        "name": "บะหมี่ย่าง สูตร 5416",
        "cal": 515
    },
    "steamed_pork_5417": {
        "name": "หมูนึ่ง สูตร 5417",
        "cal": 817
    },
    "grilled_shrimp_5418": {
        "name": "กุ้งย่าง สูตร 5418",
        "cal": 134
    },
    "spicy_pork_5419": {
        "name": "หมูยำ สูตร 5419",
        "cal": 282
    },
    "spicy_chicken_5420": {
        "name": "ไก่ยำ สูตร 5420",
        "cal": 205
    },
    "stir_fried_soup_5421": {
        "name": "ซุปผัด สูตร 5421",
        "cal": 345
    },
    "fried_rice_5422": {
        "name": "ข้าวทอด สูตร 5422",
        "cal": 305
    },
    "spicy_chicken_5423": {
        "name": "ไก่ยำ สูตร 5423",
        "cal": 601
    },
    "spicy_rice_5424": {
        "name": "ข้าวยำ สูตร 5424",
        "cal": 567
    },
    "grilled_shrimp_5425": {
        "name": "กุ้งย่าง สูตร 5425",
        "cal": 122
    },
    "grilled_beef_5426": {
        "name": "เนื้อย่าง สูตร 5426",
        "cal": 384
    },
    "spicy_chicken_5427": {
        "name": "ไก่ยำ สูตร 5427",
        "cal": 635
    },
    "boiled_noodle_5428": {
        "name": "บะหมี่ต้ม สูตร 5428",
        "cal": 433
    },
    "boiled_pork_5429": {
        "name": "หมูต้ม สูตร 5429",
        "cal": 321
    },
    "steamed_rice_5430": {
        "name": "ข้าวนึ่ง สูตร 5430",
        "cal": 182
    },
    "steamed_soup_5431": {
        "name": "ซุปนึ่ง สูตร 5431",
        "cal": 538
    },
    "fried_pork_5432": {
        "name": "หมูทอด สูตร 5432",
        "cal": 28
    },
    "steamed_chicken_5433": {
        "name": "ไก่นึ่ง สูตร 5433",
        "cal": 627
    },
    "steamed_pork_5434": {
        "name": "หมูนึ่ง สูตร 5434",
        "cal": 449
    },
    "boiled_soup_5435": {
        "name": "ซุปต้ม สูตร 5435",
        "cal": 476
    },
    "fried_shrimp_5436": {
        "name": "กุ้งทอด สูตร 5436",
        "cal": 467
    },
    "grilled_pork_5437": {
        "name": "หมูย่าง สูตร 5437",
        "cal": 554
    },
    "boiled_noodle_5438": {
        "name": "บะหมี่ต้ม สูตร 5438",
        "cal": 294
    },
    "grilled_fish_5439": {
        "name": "ปลาย่าง สูตร 5439",
        "cal": 114
    },
    "fried_squid_5440": {
        "name": "ปลาหมึกทอด สูตร 5440",
        "cal": 159
    },
    "stir_fried_shrimp_5441": {
        "name": "กุ้งผัด สูตร 5441",
        "cal": 60
    },
    "spicy_chicken_5442": {
        "name": "ไก่ยำ สูตร 5442",
        "cal": 76
    },
    "spicy_fish_5443": {
        "name": "ปลายำ สูตร 5443",
        "cal": 404
    },
    "steamed_beef_5444": {
        "name": "เนื้อนึ่ง สูตร 5444",
        "cal": 506
    },
    "stir_fried_fish_5445": {
        "name": "ปลาผัด สูตร 5445",
        "cal": 244
    },
    "grilled_chicken_5446": {
        "name": "ไก่ย่าง สูตร 5446",
        "cal": 121
    },
    "grilled_squid_5447": {
        "name": "ปลาหมึกย่าง สูตร 5447",
        "cal": 71
    },
    "spicy_rice_5448": {
        "name": "ข้าวยำ สูตร 5448",
        "cal": 431
    },
    "fried_rice_5449": {
        "name": "ข้าวทอด สูตร 5449",
        "cal": 344
    },
    "steamed_squid_5450": {
        "name": "ปลาหมึกนึ่ง สูตร 5450",
        "cal": 765
    },
    "grilled_beef_5451": {
        "name": "เนื้อย่าง สูตร 5451",
        "cal": 119
    },
    "boiled_beef_5452": {
        "name": "เนื้อต้ม สูตร 5452",
        "cal": 615
    },
    "boiled_squid_5453": {
        "name": "ปลาหมึกต้ม สูตร 5453",
        "cal": 453
    },
    "spicy_squid_5454": {
        "name": "ปลาหมึกยำ สูตร 5454",
        "cal": 757
    },
    "fried_rice_5455": {
        "name": "ข้าวทอด สูตร 5455",
        "cal": 625
    },
    "stir_fried_squid_5456": {
        "name": "ปลาหมึกผัด สูตร 5456",
        "cal": 117
    },
    "boiled_soup_5457": {
        "name": "ซุปต้ม สูตร 5457",
        "cal": 104
    },
    "stir_fried_chicken_5458": {
        "name": "ไก่ผัด สูตร 5458",
        "cal": 843
    },
    "fried_squid_5459": {
        "name": "ปลาหมึกทอด สูตร 5459",
        "cal": 708
    },
    "spicy_fish_5460": {
        "name": "ปลายำ สูตร 5460",
        "cal": 755
    },
    "fried_noodle_5461": {
        "name": "บะหมี่ทอด สูตร 5461",
        "cal": 137
    },
    "boiled_rice_5462": {
        "name": "ข้าวต้ม สูตร 5462",
        "cal": 774
    },
    "fried_pork_5463": {
        "name": "หมูทอด สูตร 5463",
        "cal": 813
    },
    "spicy_pork_5464": {
        "name": "หมูยำ สูตร 5464",
        "cal": 556
    },
    "fried_pork_5465": {
        "name": "หมูทอด สูตร 5465",
        "cal": 258
    },
    "grilled_beef_5466": {
        "name": "เนื้อย่าง สูตร 5466",
        "cal": 472
    },
    "fried_beef_5467": {
        "name": "เนื้อทอด สูตร 5467",
        "cal": 788
    },
    "steamed_pork_5468": {
        "name": "หมูนึ่ง สูตร 5468",
        "cal": 491
    },
    "stir_fried_shrimp_5469": {
        "name": "กุ้งผัด สูตร 5469",
        "cal": 729
    },
    "boiled_shrimp_5470": {
        "name": "กุ้งต้ม สูตร 5470",
        "cal": 473
    },
    "stir_fried_fish_5471": {
        "name": "ปลาผัด สูตร 5471",
        "cal": 677
    },
    "steamed_beef_5472": {
        "name": "เนื้อนึ่ง สูตร 5472",
        "cal": 476
    },
    "steamed_shrimp_5473": {
        "name": "กุ้งนึ่ง สูตร 5473",
        "cal": 528
    },
    "grilled_chicken_5474": {
        "name": "ไก่ย่าง สูตร 5474",
        "cal": 413
    },
    "boiled_fish_5475": {
        "name": "ปลาต้ม สูตร 5475",
        "cal": 264
    },
    "steamed_beef_5476": {
        "name": "เนื้อนึ่ง สูตร 5476",
        "cal": 576
    },
    "grilled_pork_5477": {
        "name": "หมูย่าง สูตร 5477",
        "cal": 654
    },
    "fried_squid_5478": {
        "name": "ปลาหมึกทอด สูตร 5478",
        "cal": 463
    },
    "fried_pork_5479": {
        "name": "หมูทอด สูตร 5479",
        "cal": 367
    },
    "fried_soup_5480": {
        "name": "ซุปทอด สูตร 5480",
        "cal": 244
    },
    "stir_fried_beef_5481": {
        "name": "เนื้อผัด สูตร 5481",
        "cal": 530
    },
    "spicy_shrimp_5482": {
        "name": "กุ้งยำ สูตร 5482",
        "cal": 646
    },
    "steamed_shrimp_5483": {
        "name": "กุ้งนึ่ง สูตร 5483",
        "cal": 756
    },
    "boiled_noodle_5484": {
        "name": "บะหมี่ต้ม สูตร 5484",
        "cal": 825
    },
    "spicy_pork_5485": {
        "name": "หมูยำ สูตร 5485",
        "cal": 100
    },
    "steamed_pork_5486": {
        "name": "หมูนึ่ง สูตร 5486",
        "cal": 609
    },
    "steamed_pork_5487": {
        "name": "หมูนึ่ง สูตร 5487",
        "cal": 706
    },
    "stir_fried_pork_5488": {
        "name": "หมูผัด สูตร 5488",
        "cal": 793
    },
    "stir_fried_noodle_5489": {
        "name": "บะหมี่ผัด สูตร 5489",
        "cal": 105
    },
    "fried_chicken_5490": {
        "name": "ไก่ทอด สูตร 5490",
        "cal": 283
    },
    "stir_fried_shrimp_5491": {
        "name": "กุ้งผัด สูตร 5491",
        "cal": 661
    },
    "spicy_noodle_5492": {
        "name": "บะหมี่ยำ สูตร 5492",
        "cal": 821
    },
    "steamed_pork_5493": {
        "name": "หมูนึ่ง สูตร 5493",
        "cal": 248
    },
    "steamed_noodle_5494": {
        "name": "บะหมี่นึ่ง สูตร 5494",
        "cal": 662
    },
    "boiled_noodle_5495": {
        "name": "บะหมี่ต้ม สูตร 5495",
        "cal": 818
    },
    "steamed_shrimp_5496": {
        "name": "กุ้งนึ่ง สูตร 5496",
        "cal": 432
    },
    "fried_chicken_5497": {
        "name": "ไก่ทอด สูตร 5497",
        "cal": 570
    },
    "stir_fried_shrimp_5498": {
        "name": "กุ้งผัด สูตร 5498",
        "cal": 796
    },
    "spicy_squid_5499": {
        "name": "ปลาหมึกยำ สูตร 5499",
        "cal": 425
    },
    "grilled_soup_5500": {
        "name": "ซุปย่าง สูตร 5500",
        "cal": 475
    },
    "fried_beef_5501": {
        "name": "เนื้อทอด สูตร 5501",
        "cal": 801
    },
    "boiled_pork_5502": {
        "name": "หมูต้ม สูตร 5502",
        "cal": 158
    },
    "steamed_rice_5503": {
        "name": "ข้าวนึ่ง สูตร 5503",
        "cal": 825
    },
    "stir_fried_chicken_5504": {
        "name": "ไก่ผัด สูตร 5504",
        "cal": 120
    },
    "spicy_beef_5505": {
        "name": "เนื้อยำ สูตร 5505",
        "cal": 406
    },
    "spicy_noodle_5506": {
        "name": "บะหมี่ยำ สูตร 5506",
        "cal": 404
    },
    "steamed_rice_5507": {
        "name": "ข้าวนึ่ง สูตร 5507",
        "cal": 54
    },
    "spicy_soup_5508": {
        "name": "ซุปยำ สูตร 5508",
        "cal": 410
    },
    "boiled_chicken_5509": {
        "name": "ไก่ต้ม สูตร 5509",
        "cal": 804
    },
    "fried_fish_5510": {
        "name": "ปลาทอด สูตร 5510",
        "cal": 710
    },
    "grilled_chicken_5511": {
        "name": "ไก่ย่าง สูตร 5511",
        "cal": 453
    },
    "spicy_pork_5512": {
        "name": "หมูยำ สูตร 5512",
        "cal": 364
    },
    "spicy_squid_5513": {
        "name": "ปลาหมึกยำ สูตร 5513",
        "cal": 627
    },
    "spicy_squid_5514": {
        "name": "ปลาหมึกยำ สูตร 5514",
        "cal": 628
    },
    "steamed_noodle_5515": {
        "name": "บะหมี่นึ่ง สูตร 5515",
        "cal": 207
    },
    "fried_fish_5516": {
        "name": "ปลาทอด สูตร 5516",
        "cal": 533
    },
    "steamed_pork_5517": {
        "name": "หมูนึ่ง สูตร 5517",
        "cal": 764
    },
    "boiled_rice_5518": {
        "name": "ข้าวต้ม สูตร 5518",
        "cal": 294
    },
    "boiled_rice_5519": {
        "name": "ข้าวต้ม สูตร 5519",
        "cal": 425
    },
    "stir_fried_pork_5520": {
        "name": "หมูผัด สูตร 5520",
        "cal": 598
    },
    "steamed_noodle_5521": {
        "name": "บะหมี่นึ่ง สูตร 5521",
        "cal": 579
    },
    "steamed_squid_5522": {
        "name": "ปลาหมึกนึ่ง สูตร 5522",
        "cal": 832
    },
    "fried_soup_5523": {
        "name": "ซุปทอด สูตร 5523",
        "cal": 726
    },
    "steamed_noodle_5524": {
        "name": "บะหมี่นึ่ง สูตร 5524",
        "cal": 163
    },
    "boiled_fish_5525": {
        "name": "ปลาต้ม สูตร 5525",
        "cal": 473
    },
    "fried_soup_5526": {
        "name": "ซุปทอด สูตร 5526",
        "cal": 400
    },
    "spicy_shrimp_5527": {
        "name": "กุ้งยำ สูตร 5527",
        "cal": 41
    },
    "boiled_fish_5528": {
        "name": "ปลาต้ม สูตร 5528",
        "cal": 561
    },
    "fried_shrimp_5529": {
        "name": "กุ้งทอด สูตร 5529",
        "cal": 436
    },
    "boiled_pork_5530": {
        "name": "หมูต้ม สูตร 5530",
        "cal": 323
    },
    "fried_rice_5531": {
        "name": "ข้าวทอด สูตร 5531",
        "cal": 523
    },
    "stir_fried_soup_5532": {
        "name": "ซุปผัด สูตร 5532",
        "cal": 37
    },
    "steamed_squid_5533": {
        "name": "ปลาหมึกนึ่ง สูตร 5533",
        "cal": 545
    },
    "boiled_squid_5534": {
        "name": "ปลาหมึกต้ม สูตร 5534",
        "cal": 558
    },
    "fried_pork_5535": {
        "name": "หมูทอด สูตร 5535",
        "cal": 836
    },
    "spicy_fish_5536": {
        "name": "ปลายำ สูตร 5536",
        "cal": 37
    },
    "fried_rice_5537": {
        "name": "ข้าวทอด สูตร 5537",
        "cal": 440
    },
    "grilled_rice_5538": {
        "name": "ข้าวย่าง สูตร 5538",
        "cal": 708
    },
    "stir_fried_squid_5539": {
        "name": "ปลาหมึกผัด สูตร 5539",
        "cal": 228
    },
    "steamed_fish_5540": {
        "name": "ปลานึ่ง สูตร 5540",
        "cal": 57
    },
    "grilled_noodle_5541": {
        "name": "บะหมี่ย่าง สูตร 5541",
        "cal": 300
    },
    "boiled_pork_5542": {
        "name": "หมูต้ม สูตร 5542",
        "cal": 283
    },
    "boiled_shrimp_5543": {
        "name": "กุ้งต้ม สูตร 5543",
        "cal": 99
    },
    "grilled_beef_5544": {
        "name": "เนื้อย่าง สูตร 5544",
        "cal": 828
    },
    "grilled_pork_5545": {
        "name": "หมูย่าง สูตร 5545",
        "cal": 201
    },
    "fried_pork_5546": {
        "name": "หมูทอด สูตร 5546",
        "cal": 746
    },
    "spicy_pork_5547": {
        "name": "หมูยำ สูตร 5547",
        "cal": 609
    },
    "steamed_beef_5548": {
        "name": "เนื้อนึ่ง สูตร 5548",
        "cal": 207
    },
    "steamed_rice_5549": {
        "name": "ข้าวนึ่ง สูตร 5549",
        "cal": 323
    },
    "fried_soup_5550": {
        "name": "ซุปทอด สูตร 5550",
        "cal": 362
    },
    "fried_chicken_5551": {
        "name": "ไก่ทอด สูตร 5551",
        "cal": 810
    },
    "spicy_squid_5552": {
        "name": "ปลาหมึกยำ สูตร 5552",
        "cal": 124
    },
    "grilled_beef_5553": {
        "name": "เนื้อย่าง สูตร 5553",
        "cal": 478
    },
    "boiled_pork_5554": {
        "name": "หมูต้ม สูตร 5554",
        "cal": 474
    },
    "boiled_squid_5555": {
        "name": "ปลาหมึกต้ม สูตร 5555",
        "cal": 218
    },
    "fried_soup_5556": {
        "name": "ซุปทอด สูตร 5556",
        "cal": 645
    },
    "boiled_chicken_5557": {
        "name": "ไก่ต้ม สูตร 5557",
        "cal": 160
    },
    "grilled_chicken_5558": {
        "name": "ไก่ย่าง สูตร 5558",
        "cal": 733
    },
    "grilled_squid_5559": {
        "name": "ปลาหมึกย่าง สูตร 5559",
        "cal": 776
    },
    "stir_fried_shrimp_5560": {
        "name": "กุ้งผัด สูตร 5560",
        "cal": 338
    },
    "steamed_pork_5561": {
        "name": "หมูนึ่ง สูตร 5561",
        "cal": 350
    },
    "fried_soup_5562": {
        "name": "ซุปทอด สูตร 5562",
        "cal": 501
    },
    "stir_fried_rice_5563": {
        "name": "ข้าวผัด สูตร 5563",
        "cal": 648
    },
    "boiled_shrimp_5564": {
        "name": "กุ้งต้ม สูตร 5564",
        "cal": 100
    },
    "spicy_pork_5565": {
        "name": "หมูยำ สูตร 5565",
        "cal": 76
    },
    "stir_fried_rice_5566": {
        "name": "ข้าวผัด สูตร 5566",
        "cal": 95
    },
    "spicy_chicken_5567": {
        "name": "ไก่ยำ สูตร 5567",
        "cal": 142
    },
    "steamed_noodle_5568": {
        "name": "บะหมี่นึ่ง สูตร 5568",
        "cal": 457
    },
    "fried_beef_5569": {
        "name": "เนื้อทอด สูตร 5569",
        "cal": 676
    },
    "boiled_fish_5570": {
        "name": "ปลาต้ม สูตร 5570",
        "cal": 61
    },
    "steamed_rice_5571": {
        "name": "ข้าวนึ่ง สูตร 5571",
        "cal": 246
    },
    "stir_fried_chicken_5572": {
        "name": "ไก่ผัด สูตร 5572",
        "cal": 118
    },
    "steamed_noodle_5573": {
        "name": "บะหมี่นึ่ง สูตร 5573",
        "cal": 224
    },
    "fried_shrimp_5574": {
        "name": "กุ้งทอด สูตร 5574",
        "cal": 701
    },
    "boiled_soup_5575": {
        "name": "ซุปต้ม สูตร 5575",
        "cal": 702
    },
    "grilled_squid_5576": {
        "name": "ปลาหมึกย่าง สูตร 5576",
        "cal": 211
    },
    "spicy_beef_5577": {
        "name": "เนื้อยำ สูตร 5577",
        "cal": 776
    },
    "boiled_rice_5578": {
        "name": "ข้าวต้ม สูตร 5578",
        "cal": 663
    },
    "boiled_beef_5579": {
        "name": "เนื้อต้ม สูตร 5579",
        "cal": 556
    },
    "spicy_fish_5580": {
        "name": "ปลายำ สูตร 5580",
        "cal": 32
    },
    "steamed_chicken_5581": {
        "name": "ไก่นึ่ง สูตร 5581",
        "cal": 56
    },
    "fried_beef_5582": {
        "name": "เนื้อทอด สูตร 5582",
        "cal": 811
    },
    "steamed_noodle_5583": {
        "name": "บะหมี่นึ่ง สูตร 5583",
        "cal": 835
    },
    "stir_fried_fish_5584": {
        "name": "ปลาผัด สูตร 5584",
        "cal": 819
    },
    "fried_soup_5585": {
        "name": "ซุปทอด สูตร 5585",
        "cal": 81
    },
    "boiled_shrimp_5586": {
        "name": "กุ้งต้ม สูตร 5586",
        "cal": 60
    },
    "steamed_noodle_5587": {
        "name": "บะหมี่นึ่ง สูตร 5587",
        "cal": 669
    },
    "steamed_beef_5588": {
        "name": "เนื้อนึ่ง สูตร 5588",
        "cal": 294
    },
    "grilled_beef_5589": {
        "name": "เนื้อย่าง สูตร 5589",
        "cal": 637
    },
    "steamed_rice_5590": {
        "name": "ข้าวนึ่ง สูตร 5590",
        "cal": 88
    },
    "fried_noodle_5591": {
        "name": "บะหมี่ทอด สูตร 5591",
        "cal": 596
    },
    "fried_pork_5592": {
        "name": "หมูทอด สูตร 5592",
        "cal": 827
    },
    "boiled_shrimp_5593": {
        "name": "กุ้งต้ม สูตร 5593",
        "cal": 42
    },
    "fried_shrimp_5594": {
        "name": "กุ้งทอด สูตร 5594",
        "cal": 91
    },
    "fried_rice_5595": {
        "name": "ข้าวทอด สูตร 5595",
        "cal": 763
    },
    "spicy_fish_5596": {
        "name": "ปลายำ สูตร 5596",
        "cal": 656
    },
    "stir_fried_beef_5597": {
        "name": "เนื้อผัด สูตร 5597",
        "cal": 554
    },
    "stir_fried_fish_5598": {
        "name": "ปลาผัด สูตร 5598",
        "cal": 234
    },
    "boiled_beef_5599": {
        "name": "เนื้อต้ม สูตร 5599",
        "cal": 327
    },
    "stir_fried_beef_5600": {
        "name": "เนื้อผัด สูตร 5600",
        "cal": 462
    },
    "spicy_rice_5601": {
        "name": "ข้าวยำ สูตร 5601",
        "cal": 662
    },
    "fried_rice_5602": {
        "name": "ข้าวทอด สูตร 5602",
        "cal": 397
    },
    "stir_fried_rice_5603": {
        "name": "ข้าวผัด สูตร 5603",
        "cal": 766
    },
    "stir_fried_soup_5604": {
        "name": "ซุปผัด สูตร 5604",
        "cal": 180
    },
    "fried_noodle_5605": {
        "name": "บะหมี่ทอด สูตร 5605",
        "cal": 631
    },
    "steamed_chicken_5606": {
        "name": "ไก่นึ่ง สูตร 5606",
        "cal": 828
    },
    "steamed_squid_5607": {
        "name": "ปลาหมึกนึ่ง สูตร 5607",
        "cal": 355
    },
    "steamed_rice_5608": {
        "name": "ข้าวนึ่ง สูตร 5608",
        "cal": 843
    },
    "spicy_pork_5609": {
        "name": "หมูยำ สูตร 5609",
        "cal": 396
    },
    "fried_pork_5610": {
        "name": "หมูทอด สูตร 5610",
        "cal": 432
    },
    "spicy_chicken_5611": {
        "name": "ไก่ยำ สูตร 5611",
        "cal": 691
    },
    "stir_fried_shrimp_5612": {
        "name": "กุ้งผัด สูตร 5612",
        "cal": 817
    },
    "boiled_fish_5613": {
        "name": "ปลาต้ม สูตร 5613",
        "cal": 368
    },
    "spicy_fish_5614": {
        "name": "ปลายำ สูตร 5614",
        "cal": 610
    },
    "stir_fried_soup_5615": {
        "name": "ซุปผัด สูตร 5615",
        "cal": 535
    },
    "boiled_noodle_5616": {
        "name": "บะหมี่ต้ม สูตร 5616",
        "cal": 475
    },
    "fried_squid_5617": {
        "name": "ปลาหมึกทอด สูตร 5617",
        "cal": 406
    },
    "steamed_chicken_5618": {
        "name": "ไก่นึ่ง สูตร 5618",
        "cal": 542
    },
    "spicy_shrimp_5619": {
        "name": "กุ้งยำ สูตร 5619",
        "cal": 46
    },
    "grilled_soup_5620": {
        "name": "ซุปย่าง สูตร 5620",
        "cal": 827
    },
    "stir_fried_beef_5621": {
        "name": "เนื้อผัด สูตร 5621",
        "cal": 781
    },
    "boiled_fish_5622": {
        "name": "ปลาต้ม สูตร 5622",
        "cal": 209
    },
    "fried_rice_5623": {
        "name": "ข้าวทอด สูตร 5623",
        "cal": 315
    },
    "steamed_beef_5624": {
        "name": "เนื้อนึ่ง สูตร 5624",
        "cal": 781
    },
    "spicy_soup_5625": {
        "name": "ซุปยำ สูตร 5625",
        "cal": 273
    },
    "stir_fried_noodle_5626": {
        "name": "บะหมี่ผัด สูตร 5626",
        "cal": 606
    },
    "spicy_beef_5627": {
        "name": "เนื้อยำ สูตร 5627",
        "cal": 198
    },
    "steamed_beef_5628": {
        "name": "เนื้อนึ่ง สูตร 5628",
        "cal": 255
    },
    "boiled_pork_5629": {
        "name": "หมูต้ม สูตร 5629",
        "cal": 276
    },
    "spicy_beef_5630": {
        "name": "เนื้อยำ สูตร 5630",
        "cal": 139
    },
    "steamed_chicken_5631": {
        "name": "ไก่นึ่ง สูตร 5631",
        "cal": 795
    },
    "steamed_chicken_5632": {
        "name": "ไก่นึ่ง สูตร 5632",
        "cal": 757
    },
    "grilled_rice_5633": {
        "name": "ข้าวย่าง สูตร 5633",
        "cal": 635
    },
    "spicy_fish_5634": {
        "name": "ปลายำ สูตร 5634",
        "cal": 293
    },
    "grilled_beef_5635": {
        "name": "เนื้อย่าง สูตร 5635",
        "cal": 725
    },
    "grilled_noodle_5636": {
        "name": "บะหมี่ย่าง สูตร 5636",
        "cal": 419
    },
    "boiled_soup_5637": {
        "name": "ซุปต้ม สูตร 5637",
        "cal": 241
    },
    "grilled_pork_5638": {
        "name": "หมูย่าง สูตร 5638",
        "cal": 466
    },
    "spicy_rice_5639": {
        "name": "ข้าวยำ สูตร 5639",
        "cal": 71
    },
    "boiled_noodle_5640": {
        "name": "บะหมี่ต้ม สูตร 5640",
        "cal": 483
    },
    "fried_fish_5641": {
        "name": "ปลาทอด สูตร 5641",
        "cal": 447
    },
    "stir_fried_fish_5642": {
        "name": "ปลาผัด สูตร 5642",
        "cal": 577
    },
    "fried_chicken_5643": {
        "name": "ไก่ทอด สูตร 5643",
        "cal": 719
    },
    "boiled_chicken_5644": {
        "name": "ไก่ต้ม สูตร 5644",
        "cal": 739
    },
    "grilled_fish_5645": {
        "name": "ปลาย่าง สูตร 5645",
        "cal": 176
    },
    "stir_fried_pork_5646": {
        "name": "หมูผัด สูตร 5646",
        "cal": 604
    },
    "steamed_rice_5647": {
        "name": "ข้าวนึ่ง สูตร 5647",
        "cal": 408
    },
    "fried_soup_5648": {
        "name": "ซุปทอด สูตร 5648",
        "cal": 496
    },
    "spicy_shrimp_5649": {
        "name": "กุ้งยำ สูตร 5649",
        "cal": 636
    },
    "stir_fried_rice_5650": {
        "name": "ข้าวผัด สูตร 5650",
        "cal": 840
    },
    "boiled_squid_5651": {
        "name": "ปลาหมึกต้ม สูตร 5651",
        "cal": 581
    },
    "steamed_fish_5652": {
        "name": "ปลานึ่ง สูตร 5652",
        "cal": 505
    },
    "stir_fried_pork_5653": {
        "name": "หมูผัด สูตร 5653",
        "cal": 581
    },
    "stir_fried_pork_5654": {
        "name": "หมูผัด สูตร 5654",
        "cal": 804
    },
    "grilled_fish_5655": {
        "name": "ปลาย่าง สูตร 5655",
        "cal": 706
    },
    "boiled_shrimp_5656": {
        "name": "กุ้งต้ม สูตร 5656",
        "cal": 590
    },
    "fried_rice_5657": {
        "name": "ข้าวทอด สูตร 5657",
        "cal": 491
    },
    "fried_chicken_5658": {
        "name": "ไก่ทอด สูตร 5658",
        "cal": 435
    },
    "grilled_noodle_5659": {
        "name": "บะหมี่ย่าง สูตร 5659",
        "cal": 367
    },
    "spicy_beef_5660": {
        "name": "เนื้อยำ สูตร 5660",
        "cal": 566
    },
    "fried_chicken_5661": {
        "name": "ไก่ทอด สูตร 5661",
        "cal": 180
    },
    "fried_soup_5662": {
        "name": "ซุปทอด สูตร 5662",
        "cal": 716
    },
    "boiled_squid_5663": {
        "name": "ปลาหมึกต้ม สูตร 5663",
        "cal": 500
    },
    "fried_fish_5664": {
        "name": "ปลาทอด สูตร 5664",
        "cal": 586
    },
    "spicy_chicken_5665": {
        "name": "ไก่ยำ สูตร 5665",
        "cal": 354
    },
    "spicy_pork_5666": {
        "name": "หมูยำ สูตร 5666",
        "cal": 230
    },
    "grilled_soup_5667": {
        "name": "ซุปย่าง สูตร 5667",
        "cal": 150
    },
    "boiled_chicken_5668": {
        "name": "ไก่ต้ม สูตร 5668",
        "cal": 665
    },
    "fried_chicken_5669": {
        "name": "ไก่ทอด สูตร 5669",
        "cal": 246
    },
    "grilled_beef_5670": {
        "name": "เนื้อย่าง สูตร 5670",
        "cal": 679
    },
    "spicy_squid_5671": {
        "name": "ปลาหมึกยำ สูตร 5671",
        "cal": 632
    },
    "fried_rice_5672": {
        "name": "ข้าวทอด สูตร 5672",
        "cal": 260
    },
    "fried_rice_5673": {
        "name": "ข้าวทอด สูตร 5673",
        "cal": 430
    },
    "stir_fried_soup_5674": {
        "name": "ซุปผัด สูตร 5674",
        "cal": 572
    },
    "spicy_fish_5675": {
        "name": "ปลายำ สูตร 5675",
        "cal": 571
    },
    "boiled_chicken_5676": {
        "name": "ไก่ต้ม สูตร 5676",
        "cal": 824
    },
    "boiled_chicken_5677": {
        "name": "ไก่ต้ม สูตร 5677",
        "cal": 41
    },
    "fried_beef_5678": {
        "name": "เนื้อทอด สูตร 5678",
        "cal": 425
    },
    "steamed_squid_5679": {
        "name": "ปลาหมึกนึ่ง สูตร 5679",
        "cal": 496
    },
    "steamed_fish_5680": {
        "name": "ปลานึ่ง สูตร 5680",
        "cal": 745
    },
    "stir_fried_beef_5681": {
        "name": "เนื้อผัด สูตร 5681",
        "cal": 768
    },
    "stir_fried_rice_5682": {
        "name": "ข้าวผัด สูตร 5682",
        "cal": 406
    },
    "grilled_fish_5683": {
        "name": "ปลาย่าง สูตร 5683",
        "cal": 264
    },
    "spicy_beef_5684": {
        "name": "เนื้อยำ สูตร 5684",
        "cal": 389
    },
    "grilled_squid_5685": {
        "name": "ปลาหมึกย่าง สูตร 5685",
        "cal": 724
    },
    "boiled_soup_5686": {
        "name": "ซุปต้ม สูตร 5686",
        "cal": 376
    },
    "spicy_beef_5687": {
        "name": "เนื้อยำ สูตร 5687",
        "cal": 68
    },
    "boiled_shrimp_5688": {
        "name": "กุ้งต้ม สูตร 5688",
        "cal": 106
    },
    "grilled_soup_5689": {
        "name": "ซุปย่าง สูตร 5689",
        "cal": 287
    },
    "spicy_noodle_5690": {
        "name": "บะหมี่ยำ สูตร 5690",
        "cal": 508
    },
    "stir_fried_beef_5691": {
        "name": "เนื้อผัด สูตร 5691",
        "cal": 763
    },
    "steamed_pork_5692": {
        "name": "หมูนึ่ง สูตร 5692",
        "cal": 835
    },
    "fried_chicken_5693": {
        "name": "ไก่ทอด สูตร 5693",
        "cal": 304
    },
    "fried_soup_5694": {
        "name": "ซุปทอด สูตร 5694",
        "cal": 131
    },
    "boiled_fish_5695": {
        "name": "ปลาต้ม สูตร 5695",
        "cal": 429
    },
    "boiled_beef_5696": {
        "name": "เนื้อต้ม สูตร 5696",
        "cal": 239
    },
    "grilled_pork_5697": {
        "name": "หมูย่าง สูตร 5697",
        "cal": 207
    },
    "steamed_noodle_5698": {
        "name": "บะหมี่นึ่ง สูตร 5698",
        "cal": 480
    },
    "grilled_chicken_5699": {
        "name": "ไก่ย่าง สูตร 5699",
        "cal": 627
    },
    "stir_fried_shrimp_5700": {
        "name": "กุ้งผัด สูตร 5700",
        "cal": 476
    },
    "steamed_noodle_5701": {
        "name": "บะหมี่นึ่ง สูตร 5701",
        "cal": 43
    },
    "steamed_squid_5702": {
        "name": "ปลาหมึกนึ่ง สูตร 5702",
        "cal": 109
    },
    "fried_rice_5703": {
        "name": "ข้าวทอด สูตร 5703",
        "cal": 840
    },
    "fried_shrimp_5704": {
        "name": "กุ้งทอด สูตร 5704",
        "cal": 817
    },
    "grilled_beef_5705": {
        "name": "เนื้อย่าง สูตร 5705",
        "cal": 741
    },
    "grilled_shrimp_5706": {
        "name": "กุ้งย่าง สูตร 5706",
        "cal": 371
    },
    "grilled_rice_5707": {
        "name": "ข้าวย่าง สูตร 5707",
        "cal": 764
    },
    "steamed_chicken_5708": {
        "name": "ไก่นึ่ง สูตร 5708",
        "cal": 458
    },
    "fried_beef_5709": {
        "name": "เนื้อทอด สูตร 5709",
        "cal": 117
    },
    "boiled_fish_5710": {
        "name": "ปลาต้ม สูตร 5710",
        "cal": 213
    },
    "steamed_noodle_5711": {
        "name": "บะหมี่นึ่ง สูตร 5711",
        "cal": 332
    },
    "boiled_chicken_5712": {
        "name": "ไก่ต้ม สูตร 5712",
        "cal": 650
    },
    "fried_beef_5713": {
        "name": "เนื้อทอด สูตร 5713",
        "cal": 822
    },
    "grilled_noodle_5714": {
        "name": "บะหมี่ย่าง สูตร 5714",
        "cal": 696
    },
    "grilled_beef_5715": {
        "name": "เนื้อย่าง สูตร 5715",
        "cal": 463
    },
    "grilled_chicken_5716": {
        "name": "ไก่ย่าง สูตร 5716",
        "cal": 555
    },
    "grilled_fish_5717": {
        "name": "ปลาย่าง สูตร 5717",
        "cal": 448
    },
    "grilled_fish_5718": {
        "name": "ปลาย่าง สูตร 5718",
        "cal": 295
    },
    "grilled_beef_5719": {
        "name": "เนื้อย่าง สูตร 5719",
        "cal": 468
    },
    "boiled_pork_5720": {
        "name": "หมูต้ม สูตร 5720",
        "cal": 564
    },
    "fried_beef_5721": {
        "name": "เนื้อทอด สูตร 5721",
        "cal": 218
    },
    "steamed_shrimp_5722": {
        "name": "กุ้งนึ่ง สูตร 5722",
        "cal": 808
    },
    "stir_fried_soup_5723": {
        "name": "ซุปผัด สูตร 5723",
        "cal": 419
    },
    "stir_fried_beef_5724": {
        "name": "เนื้อผัด สูตร 5724",
        "cal": 37
    },
    "stir_fried_soup_5725": {
        "name": "ซุปผัด สูตร 5725",
        "cal": 356
    },
    "steamed_squid_5726": {
        "name": "ปลาหมึกนึ่ง สูตร 5726",
        "cal": 356
    },
    "stir_fried_shrimp_5727": {
        "name": "กุ้งผัด สูตร 5727",
        "cal": 213
    },
    "fried_shrimp_5728": {
        "name": "กุ้งทอด สูตร 5728",
        "cal": 560
    },
    "spicy_pork_5729": {
        "name": "หมูยำ สูตร 5729",
        "cal": 169
    },
    "steamed_pork_5730": {
        "name": "หมูนึ่ง สูตร 5730",
        "cal": 778
    },
    "steamed_squid_5731": {
        "name": "ปลาหมึกนึ่ง สูตร 5731",
        "cal": 276
    },
    "grilled_squid_5732": {
        "name": "ปลาหมึกย่าง สูตร 5732",
        "cal": 582
    },
    "spicy_rice_5733": {
        "name": "ข้าวยำ สูตร 5733",
        "cal": 145
    },
    "spicy_soup_5734": {
        "name": "ซุปยำ สูตร 5734",
        "cal": 624
    },
    "boiled_soup_5735": {
        "name": "ซุปต้ม สูตร 5735",
        "cal": 563
    },
    "spicy_pork_5736": {
        "name": "หมูยำ สูตร 5736",
        "cal": 478
    },
    "fried_chicken_5737": {
        "name": "ไก่ทอด สูตร 5737",
        "cal": 791
    },
    "grilled_noodle_5738": {
        "name": "บะหมี่ย่าง สูตร 5738",
        "cal": 591
    },
    "fried_squid_5739": {
        "name": "ปลาหมึกทอด สูตร 5739",
        "cal": 570
    },
    "fried_squid_5740": {
        "name": "ปลาหมึกทอด สูตร 5740",
        "cal": 570
    },
    "boiled_rice_5741": {
        "name": "ข้าวต้ม สูตร 5741",
        "cal": 169
    },
    "stir_fried_rice_5742": {
        "name": "ข้าวผัด สูตร 5742",
        "cal": 513
    },
    "spicy_beef_5743": {
        "name": "เนื้อยำ สูตร 5743",
        "cal": 782
    },
    "grilled_pork_5744": {
        "name": "หมูย่าง สูตร 5744",
        "cal": 506
    },
    "grilled_pork_5745": {
        "name": "หมูย่าง สูตร 5745",
        "cal": 262
    },
    "boiled_soup_5746": {
        "name": "ซุปต้ม สูตร 5746",
        "cal": 500
    },
    "grilled_shrimp_5747": {
        "name": "กุ้งย่าง สูตร 5747",
        "cal": 113
    },
    "fried_noodle_5748": {
        "name": "บะหมี่ทอด สูตร 5748",
        "cal": 243
    },
    "boiled_rice_5749": {
        "name": "ข้าวต้ม สูตร 5749",
        "cal": 371
    },
    "stir_fried_beef_5750": {
        "name": "เนื้อผัด สูตร 5750",
        "cal": 816
    },
    "stir_fried_soup_5751": {
        "name": "ซุปผัด สูตร 5751",
        "cal": 497
    },
    "steamed_fish_5752": {
        "name": "ปลานึ่ง สูตร 5752",
        "cal": 657
    },
    "stir_fried_noodle_5753": {
        "name": "บะหมี่ผัด สูตร 5753",
        "cal": 527
    },
    "boiled_soup_5754": {
        "name": "ซุปต้ม สูตร 5754",
        "cal": 206
    },
    "boiled_beef_5755": {
        "name": "เนื้อต้ม สูตร 5755",
        "cal": 154
    },
    "stir_fried_squid_5756": {
        "name": "ปลาหมึกผัด สูตร 5756",
        "cal": 845
    },
    "fried_rice_5757": {
        "name": "ข้าวทอด สูตร 5757",
        "cal": 503
    },
    "steamed_squid_5758": {
        "name": "ปลาหมึกนึ่ง สูตร 5758",
        "cal": 336
    },
    "fried_beef_5759": {
        "name": "เนื้อทอด สูตร 5759",
        "cal": 415
    },
    "boiled_fish_5760": {
        "name": "ปลาต้ม สูตร 5760",
        "cal": 483
    },
    "steamed_soup_5761": {
        "name": "ซุปนึ่ง สูตร 5761",
        "cal": 685
    },
    "stir_fried_beef_5762": {
        "name": "เนื้อผัด สูตร 5762",
        "cal": 645
    },
    "spicy_soup_5763": {
        "name": "ซุปยำ สูตร 5763",
        "cal": 353
    },
    "grilled_chicken_5764": {
        "name": "ไก่ย่าง สูตร 5764",
        "cal": 331
    },
    "boiled_beef_5765": {
        "name": "เนื้อต้ม สูตร 5765",
        "cal": 664
    },
    "stir_fried_rice_5766": {
        "name": "ข้าวผัด สูตร 5766",
        "cal": 185
    },
    "stir_fried_chicken_5767": {
        "name": "ไก่ผัด สูตร 5767",
        "cal": 607
    },
    "grilled_beef_5768": {
        "name": "เนื้อย่าง สูตร 5768",
        "cal": 826
    },
    "stir_fried_fish_5769": {
        "name": "ปลาผัด สูตร 5769",
        "cal": 134
    },
    "spicy_rice_5770": {
        "name": "ข้าวยำ สูตร 5770",
        "cal": 644
    },
    "stir_fried_squid_5771": {
        "name": "ปลาหมึกผัด สูตร 5771",
        "cal": 218
    },
    "spicy_chicken_5772": {
        "name": "ไก่ยำ สูตร 5772",
        "cal": 168
    },
    "steamed_beef_5773": {
        "name": "เนื้อนึ่ง สูตร 5773",
        "cal": 241
    },
    "steamed_squid_5774": {
        "name": "ปลาหมึกนึ่ง สูตร 5774",
        "cal": 842
    },
    "spicy_noodle_5775": {
        "name": "บะหมี่ยำ สูตร 5775",
        "cal": 423
    },
    "fried_rice_5776": {
        "name": "ข้าวทอด สูตร 5776",
        "cal": 650
    },
    "fried_soup_5777": {
        "name": "ซุปทอด สูตร 5777",
        "cal": 357
    },
    "grilled_fish_5778": {
        "name": "ปลาย่าง สูตร 5778",
        "cal": 592
    },
    "steamed_noodle_5779": {
        "name": "บะหมี่นึ่ง สูตร 5779",
        "cal": 75
    },
    "stir_fried_shrimp_5780": {
        "name": "กุ้งผัด สูตร 5780",
        "cal": 128
    },
    "stir_fried_fish_5781": {
        "name": "ปลาผัด สูตร 5781",
        "cal": 58
    },
    "fried_noodle_5782": {
        "name": "บะหมี่ทอด สูตร 5782",
        "cal": 187
    },
    "stir_fried_pork_5783": {
        "name": "หมูผัด สูตร 5783",
        "cal": 549
    },
    "steamed_soup_5784": {
        "name": "ซุปนึ่ง สูตร 5784",
        "cal": 498
    },
    "grilled_rice_5785": {
        "name": "ข้าวย่าง สูตร 5785",
        "cal": 241
    },
    "fried_rice_5786": {
        "name": "ข้าวทอด สูตร 5786",
        "cal": 222
    },
    "grilled_pork_5787": {
        "name": "หมูย่าง สูตร 5787",
        "cal": 682
    },
    "grilled_rice_5788": {
        "name": "ข้าวย่าง สูตร 5788",
        "cal": 492
    },
    "grilled_beef_5789": {
        "name": "เนื้อย่าง สูตร 5789",
        "cal": 294
    },
    "stir_fried_noodle_5790": {
        "name": "บะหมี่ผัด สูตร 5790",
        "cal": 367
    },
    "fried_squid_5791": {
        "name": "ปลาหมึกทอด สูตร 5791",
        "cal": 443
    },
    "steamed_soup_5792": {
        "name": "ซุปนึ่ง สูตร 5792",
        "cal": 604
    },
    "fried_soup_5793": {
        "name": "ซุปทอด สูตร 5793",
        "cal": 197
    },
    "grilled_pork_5794": {
        "name": "หมูย่าง สูตร 5794",
        "cal": 26
    },
    "fried_beef_5795": {
        "name": "เนื้อทอด สูตร 5795",
        "cal": 242
    },
    "steamed_soup_5796": {
        "name": "ซุปนึ่ง สูตร 5796",
        "cal": 133
    },
    "stir_fried_shrimp_5797": {
        "name": "กุ้งผัด สูตร 5797",
        "cal": 66
    },
    "boiled_soup_5798": {
        "name": "ซุปต้ม สูตร 5798",
        "cal": 773
    },
    "grilled_shrimp_5799": {
        "name": "กุ้งย่าง สูตร 5799",
        "cal": 347
    },
    "spicy_squid_5800": {
        "name": "ปลาหมึกยำ สูตร 5800",
        "cal": 181
    },
    "spicy_pork_5801": {
        "name": "หมูยำ สูตร 5801",
        "cal": 700
    },
    "stir_fried_pork_5802": {
        "name": "หมูผัด สูตร 5802",
        "cal": 31
    },
    "steamed_shrimp_5803": {
        "name": "กุ้งนึ่ง สูตร 5803",
        "cal": 405
    },
    "fried_noodle_5804": {
        "name": "บะหมี่ทอด สูตร 5804",
        "cal": 148
    },
    "stir_fried_pork_5805": {
        "name": "หมูผัด สูตร 5805",
        "cal": 488
    },
    "steamed_squid_5806": {
        "name": "ปลาหมึกนึ่ง สูตร 5806",
        "cal": 92
    },
    "steamed_noodle_5807": {
        "name": "บะหมี่นึ่ง สูตร 5807",
        "cal": 325
    },
    "spicy_rice_5808": {
        "name": "ข้าวยำ สูตร 5808",
        "cal": 359
    },
    "spicy_fish_5809": {
        "name": "ปลายำ สูตร 5809",
        "cal": 686
    },
    "spicy_noodle_5810": {
        "name": "บะหมี่ยำ สูตร 5810",
        "cal": 43
    },
    "spicy_noodle_5811": {
        "name": "บะหมี่ยำ สูตร 5811",
        "cal": 164
    },
    "spicy_chicken_5812": {
        "name": "ไก่ยำ สูตร 5812",
        "cal": 152
    },
    "spicy_pork_5813": {
        "name": "หมูยำ สูตร 5813",
        "cal": 461
    },
    "grilled_soup_5814": {
        "name": "ซุปย่าง สูตร 5814",
        "cal": 470
    },
    "spicy_soup_5815": {
        "name": "ซุปยำ สูตร 5815",
        "cal": 408
    },
    "spicy_pork_5816": {
        "name": "หมูยำ สูตร 5816",
        "cal": 258
    },
    "stir_fried_chicken_5817": {
        "name": "ไก่ผัด สูตร 5817",
        "cal": 402
    },
    "fried_chicken_5818": {
        "name": "ไก่ทอด สูตร 5818",
        "cal": 50
    },
    "boiled_shrimp_5819": {
        "name": "กุ้งต้ม สูตร 5819",
        "cal": 825
    },
    "boiled_shrimp_5820": {
        "name": "กุ้งต้ม สูตร 5820",
        "cal": 638
    },
    "steamed_squid_5821": {
        "name": "ปลาหมึกนึ่ง สูตร 5821",
        "cal": 473
    },
    "stir_fried_fish_5822": {
        "name": "ปลาผัด สูตร 5822",
        "cal": 58
    },
    "boiled_soup_5823": {
        "name": "ซุปต้ม สูตร 5823",
        "cal": 528
    },
    "grilled_shrimp_5824": {
        "name": "กุ้งย่าง สูตร 5824",
        "cal": 459
    },
    "fried_squid_5825": {
        "name": "ปลาหมึกทอด สูตร 5825",
        "cal": 111
    },
    "stir_fried_soup_5826": {
        "name": "ซุปผัด สูตร 5826",
        "cal": 149
    },
    "steamed_soup_5827": {
        "name": "ซุปนึ่ง สูตร 5827",
        "cal": 342
    },
    "boiled_squid_5828": {
        "name": "ปลาหมึกต้ม สูตร 5828",
        "cal": 406
    },
    "stir_fried_chicken_5829": {
        "name": "ไก่ผัด สูตร 5829",
        "cal": 442
    },
    "boiled_beef_5830": {
        "name": "เนื้อต้ม สูตร 5830",
        "cal": 704
    },
    "steamed_chicken_5831": {
        "name": "ไก่นึ่ง สูตร 5831",
        "cal": 91
    },
    "grilled_squid_5832": {
        "name": "ปลาหมึกย่าง สูตร 5832",
        "cal": 696
    },
    "grilled_soup_5833": {
        "name": "ซุปย่าง สูตร 5833",
        "cal": 631
    },
    "stir_fried_rice_5834": {
        "name": "ข้าวผัด สูตร 5834",
        "cal": 805
    },
    "grilled_rice_5835": {
        "name": "ข้าวย่าง สูตร 5835",
        "cal": 298
    },
    "boiled_soup_5836": {
        "name": "ซุปต้ม สูตร 5836",
        "cal": 573
    },
    "steamed_pork_5837": {
        "name": "หมูนึ่ง สูตร 5837",
        "cal": 746
    },
    "spicy_chicken_5838": {
        "name": "ไก่ยำ สูตร 5838",
        "cal": 305
    },
    "boiled_pork_5839": {
        "name": "หมูต้ม สูตร 5839",
        "cal": 850
    },
    "fried_chicken_5840": {
        "name": "ไก่ทอด สูตร 5840",
        "cal": 67
    },
    "grilled_noodle_5841": {
        "name": "บะหมี่ย่าง สูตร 5841",
        "cal": 436
    },
    "steamed_squid_5842": {
        "name": "ปลาหมึกนึ่ง สูตร 5842",
        "cal": 608
    },
    "steamed_beef_5843": {
        "name": "เนื้อนึ่ง สูตร 5843",
        "cal": 413
    },
    "stir_fried_noodle_5844": {
        "name": "บะหมี่ผัด สูตร 5844",
        "cal": 419
    },
    "grilled_soup_5845": {
        "name": "ซุปย่าง สูตร 5845",
        "cal": 393
    },
    "stir_fried_chicken_5846": {
        "name": "ไก่ผัด สูตร 5846",
        "cal": 320
    },
    "fried_shrimp_5847": {
        "name": "กุ้งทอด สูตร 5847",
        "cal": 418
    },
    "grilled_rice_5848": {
        "name": "ข้าวย่าง สูตร 5848",
        "cal": 682
    },
    "boiled_squid_5849": {
        "name": "ปลาหมึกต้ม สูตร 5849",
        "cal": 55
    },
    "boiled_pork_5850": {
        "name": "หมูต้ม สูตร 5850",
        "cal": 136
    },
    "stir_fried_shrimp_5851": {
        "name": "กุ้งผัด สูตร 5851",
        "cal": 635
    },
    "spicy_shrimp_5852": {
        "name": "กุ้งยำ สูตร 5852",
        "cal": 335
    },
    "fried_soup_5853": {
        "name": "ซุปทอด สูตร 5853",
        "cal": 640
    },
    "stir_fried_rice_5854": {
        "name": "ข้าวผัด สูตร 5854",
        "cal": 260
    },
    "steamed_noodle_5855": {
        "name": "บะหมี่นึ่ง สูตร 5855",
        "cal": 735
    },
    "fried_rice_5856": {
        "name": "ข้าวทอด สูตร 5856",
        "cal": 618
    },
    "fried_shrimp_5857": {
        "name": "กุ้งทอด สูตร 5857",
        "cal": 97
    },
    "grilled_shrimp_5858": {
        "name": "กุ้งย่าง สูตร 5858",
        "cal": 306
    },
    "fried_rice_5859": {
        "name": "ข้าวทอด สูตร 5859",
        "cal": 551
    },
    "stir_fried_fish_5860": {
        "name": "ปลาผัด สูตร 5860",
        "cal": 389
    },
    "steamed_rice_5861": {
        "name": "ข้าวนึ่ง สูตร 5861",
        "cal": 693
    },
    "boiled_soup_5862": {
        "name": "ซุปต้ม สูตร 5862",
        "cal": 238
    },
    "stir_fried_shrimp_5863": {
        "name": "กุ้งผัด สูตร 5863",
        "cal": 81
    },
    "stir_fried_pork_5864": {
        "name": "หมูผัด สูตร 5864",
        "cal": 412
    },
    "steamed_soup_5865": {
        "name": "ซุปนึ่ง สูตร 5865",
        "cal": 765
    },
    "stir_fried_noodle_5866": {
        "name": "บะหมี่ผัด สูตร 5866",
        "cal": 626
    },
    "steamed_rice_5867": {
        "name": "ข้าวนึ่ง สูตร 5867",
        "cal": 617
    },
    "steamed_pork_5868": {
        "name": "หมูนึ่ง สูตร 5868",
        "cal": 307
    },
    "stir_fried_pork_5869": {
        "name": "หมูผัด สูตร 5869",
        "cal": 521
    },
    "steamed_beef_5870": {
        "name": "เนื้อนึ่ง สูตร 5870",
        "cal": 808
    },
    "grilled_fish_5871": {
        "name": "ปลาย่าง สูตร 5871",
        "cal": 766
    },
    "steamed_rice_5872": {
        "name": "ข้าวนึ่ง สูตร 5872",
        "cal": 508
    },
    "boiled_chicken_5873": {
        "name": "ไก่ต้ม สูตร 5873",
        "cal": 116
    },
    "steamed_squid_5874": {
        "name": "ปลาหมึกนึ่ง สูตร 5874",
        "cal": 362
    },
    "spicy_chicken_5875": {
        "name": "ไก่ยำ สูตร 5875",
        "cal": 825
    },
    "boiled_pork_5876": {
        "name": "หมูต้ม สูตร 5876",
        "cal": 670
    },
    "steamed_shrimp_5877": {
        "name": "กุ้งนึ่ง สูตร 5877",
        "cal": 590
    },
    "stir_fried_chicken_5878": {
        "name": "ไก่ผัด สูตร 5878",
        "cal": 611
    },
    "fried_squid_5879": {
        "name": "ปลาหมึกทอด สูตร 5879",
        "cal": 205
    },
    "steamed_soup_5880": {
        "name": "ซุปนึ่ง สูตร 5880",
        "cal": 423
    },
    "spicy_soup_5881": {
        "name": "ซุปยำ สูตร 5881",
        "cal": 453
    },
    "spicy_soup_5882": {
        "name": "ซุปยำ สูตร 5882",
        "cal": 648
    },
    "boiled_beef_5883": {
        "name": "เนื้อต้ม สูตร 5883",
        "cal": 259
    },
    "spicy_shrimp_5884": {
        "name": "กุ้งยำ สูตร 5884",
        "cal": 755
    },
    "steamed_rice_5885": {
        "name": "ข้าวนึ่ง สูตร 5885",
        "cal": 130
    },
    "fried_beef_5886": {
        "name": "เนื้อทอด สูตร 5886",
        "cal": 842
    },
    "fried_chicken_5887": {
        "name": "ไก่ทอด สูตร 5887",
        "cal": 811
    },
    "boiled_chicken_5888": {
        "name": "ไก่ต้ม สูตร 5888",
        "cal": 360
    },
    "stir_fried_pork_5889": {
        "name": "หมูผัด สูตร 5889",
        "cal": 611
    },
    "boiled_fish_5890": {
        "name": "ปลาต้ม สูตร 5890",
        "cal": 832
    },
    "spicy_soup_5891": {
        "name": "ซุปยำ สูตร 5891",
        "cal": 327
    },
    "fried_beef_5892": {
        "name": "เนื้อทอด สูตร 5892",
        "cal": 441
    },
    "stir_fried_squid_5893": {
        "name": "ปลาหมึกผัด สูตร 5893",
        "cal": 158
    },
    "grilled_shrimp_5894": {
        "name": "กุ้งย่าง สูตร 5894",
        "cal": 438
    },
    "boiled_noodle_5895": {
        "name": "บะหมี่ต้ม สูตร 5895",
        "cal": 466
    },
    "fried_squid_5896": {
        "name": "ปลาหมึกทอด สูตร 5896",
        "cal": 53
    },
    "steamed_shrimp_5897": {
        "name": "กุ้งนึ่ง สูตร 5897",
        "cal": 731
    },
    "steamed_fish_5898": {
        "name": "ปลานึ่ง สูตร 5898",
        "cal": 396
    },
    "fried_squid_5899": {
        "name": "ปลาหมึกทอด สูตร 5899",
        "cal": 735
    },
    "steamed_squid_5900": {
        "name": "ปลาหมึกนึ่ง สูตร 5900",
        "cal": 364
    },
    "spicy_soup_5901": {
        "name": "ซุปยำ สูตร 5901",
        "cal": 807
    },
    "boiled_squid_5902": {
        "name": "ปลาหมึกต้ม สูตร 5902",
        "cal": 160
    },
    "steamed_chicken_5903": {
        "name": "ไก่นึ่ง สูตร 5903",
        "cal": 100
    },
    "spicy_beef_5904": {
        "name": "เนื้อยำ สูตร 5904",
        "cal": 590
    },
    "grilled_beef_5905": {
        "name": "เนื้อย่าง สูตร 5905",
        "cal": 685
    },
    "steamed_soup_5906": {
        "name": "ซุปนึ่ง สูตร 5906",
        "cal": 146
    },
    "boiled_beef_5907": {
        "name": "เนื้อต้ม สูตร 5907",
        "cal": 69
    },
    "stir_fried_noodle_5908": {
        "name": "บะหมี่ผัด สูตร 5908",
        "cal": 263
    },
    "stir_fried_shrimp_5909": {
        "name": "กุ้งผัด สูตร 5909",
        "cal": 325
    },
    "grilled_fish_5910": {
        "name": "ปลาย่าง สูตร 5910",
        "cal": 751
    },
    "steamed_beef_5911": {
        "name": "เนื้อนึ่ง สูตร 5911",
        "cal": 744
    },
    "fried_shrimp_5912": {
        "name": "กุ้งทอด สูตร 5912",
        "cal": 691
    },
    "boiled_chicken_5913": {
        "name": "ไก่ต้ม สูตร 5913",
        "cal": 554
    },
    "grilled_fish_5914": {
        "name": "ปลาย่าง สูตร 5914",
        "cal": 605
    },
    "stir_fried_shrimp_5915": {
        "name": "กุ้งผัด สูตร 5915",
        "cal": 547
    },
    "steamed_beef_5916": {
        "name": "เนื้อนึ่ง สูตร 5916",
        "cal": 249
    },
    "boiled_shrimp_5917": {
        "name": "กุ้งต้ม สูตร 5917",
        "cal": 146
    },
    "grilled_beef_5918": {
        "name": "เนื้อย่าง สูตร 5918",
        "cal": 268
    },
    "spicy_rice_5919": {
        "name": "ข้าวยำ สูตร 5919",
        "cal": 538
    },
    "spicy_shrimp_5920": {
        "name": "กุ้งยำ สูตร 5920",
        "cal": 137
    },
    "stir_fried_beef_5921": {
        "name": "เนื้อผัด สูตร 5921",
        "cal": 816
    },
    "spicy_noodle_5922": {
        "name": "บะหมี่ยำ สูตร 5922",
        "cal": 158
    },
    "spicy_chicken_5923": {
        "name": "ไก่ยำ สูตร 5923",
        "cal": 750
    },
    "steamed_beef_5924": {
        "name": "เนื้อนึ่ง สูตร 5924",
        "cal": 96
    },
    "grilled_fish_5925": {
        "name": "ปลาย่าง สูตร 5925",
        "cal": 273
    },
    "spicy_rice_5926": {
        "name": "ข้าวยำ สูตร 5926",
        "cal": 535
    },
    "spicy_noodle_5927": {
        "name": "บะหมี่ยำ สูตร 5927",
        "cal": 35
    },
    "steamed_chicken_5928": {
        "name": "ไก่นึ่ง สูตร 5928",
        "cal": 91
    },
    "spicy_shrimp_5929": {
        "name": "กุ้งยำ สูตร 5929",
        "cal": 521
    },
    "stir_fried_rice_5930": {
        "name": "ข้าวผัด สูตร 5930",
        "cal": 403
    },
    "spicy_soup_5931": {
        "name": "ซุปยำ สูตร 5931",
        "cal": 82
    },
    "grilled_shrimp_5932": {
        "name": "กุ้งย่าง สูตร 5932",
        "cal": 472
    },
    "stir_fried_beef_5933": {
        "name": "เนื้อผัด สูตร 5933",
        "cal": 499
    },
    "spicy_soup_5934": {
        "name": "ซุปยำ สูตร 5934",
        "cal": 93
    },
    "steamed_beef_5935": {
        "name": "เนื้อนึ่ง สูตร 5935",
        "cal": 782
    },
    "grilled_shrimp_5936": {
        "name": "กุ้งย่าง สูตร 5936",
        "cal": 531
    },
    "boiled_fish_5937": {
        "name": "ปลาต้ม สูตร 5937",
        "cal": 24
    },
    "fried_soup_5938": {
        "name": "ซุปทอด สูตร 5938",
        "cal": 72
    },
    "spicy_noodle_5939": {
        "name": "บะหมี่ยำ สูตร 5939",
        "cal": 271
    },
    "grilled_fish_5940": {
        "name": "ปลาย่าง สูตร 5940",
        "cal": 64
    },
    "fried_rice_5941": {
        "name": "ข้าวทอด สูตร 5941",
        "cal": 698
    },
    "fried_pork_5942": {
        "name": "หมูทอด สูตร 5942",
        "cal": 384
    },
    "boiled_noodle_5943": {
        "name": "บะหมี่ต้ม สูตร 5943",
        "cal": 690
    },
    "grilled_pork_5944": {
        "name": "หมูย่าง สูตร 5944",
        "cal": 210
    },
    "fried_soup_5945": {
        "name": "ซุปทอด สูตร 5945",
        "cal": 652
    },
    "stir_fried_fish_5946": {
        "name": "ปลาผัด สูตร 5946",
        "cal": 607
    },
    "boiled_chicken_5947": {
        "name": "ไก่ต้ม สูตร 5947",
        "cal": 29
    },
    "steamed_shrimp_5948": {
        "name": "กุ้งนึ่ง สูตร 5948",
        "cal": 26
    },
    "fried_soup_5949": {
        "name": "ซุปทอด สูตร 5949",
        "cal": 734
    },
    "grilled_noodle_5950": {
        "name": "บะหมี่ย่าง สูตร 5950",
        "cal": 787
    },
    "stir_fried_rice_5951": {
        "name": "ข้าวผัด สูตร 5951",
        "cal": 563
    },
    "fried_shrimp_5952": {
        "name": "กุ้งทอด สูตร 5952",
        "cal": 661
    },
    "boiled_shrimp_5953": {
        "name": "กุ้งต้ม สูตร 5953",
        "cal": 183
    },
    "boiled_fish_5954": {
        "name": "ปลาต้ม สูตร 5954",
        "cal": 155
    },
    "fried_beef_5955": {
        "name": "เนื้อทอด สูตร 5955",
        "cal": 370
    },
    "boiled_chicken_5956": {
        "name": "ไก่ต้ม สูตร 5956",
        "cal": 413
    },
    "boiled_beef_5957": {
        "name": "เนื้อต้ม สูตร 5957",
        "cal": 327
    },
    "spicy_chicken_5958": {
        "name": "ไก่ยำ สูตร 5958",
        "cal": 824
    },
    "grilled_rice_5959": {
        "name": "ข้าวย่าง สูตร 5959",
        "cal": 841
    },
    "spicy_beef_5960": {
        "name": "เนื้อยำ สูตร 5960",
        "cal": 844
    },
    "boiled_noodle_5961": {
        "name": "บะหมี่ต้ม สูตร 5961",
        "cal": 138
    },
    "steamed_squid_5962": {
        "name": "ปลาหมึกนึ่ง สูตร 5962",
        "cal": 796
    },
    "steamed_soup_5963": {
        "name": "ซุปนึ่ง สูตร 5963",
        "cal": 202
    },
    "steamed_beef_5964": {
        "name": "เนื้อนึ่ง สูตร 5964",
        "cal": 571
    },
    "spicy_beef_5965": {
        "name": "เนื้อยำ สูตร 5965",
        "cal": 300
    },
    "boiled_rice_5966": {
        "name": "ข้าวต้ม สูตร 5966",
        "cal": 351
    },
    "spicy_soup_5967": {
        "name": "ซุปยำ สูตร 5967",
        "cal": 524
    },
    "grilled_squid_5968": {
        "name": "ปลาหมึกย่าง สูตร 5968",
        "cal": 288
    },
    "stir_fried_chicken_5969": {
        "name": "ไก่ผัด สูตร 5969",
        "cal": 566
    },
    "spicy_soup_5970": {
        "name": "ซุปยำ สูตร 5970",
        "cal": 363
    },
    "steamed_squid_5971": {
        "name": "ปลาหมึกนึ่ง สูตร 5971",
        "cal": 264
    },
    "stir_fried_fish_5972": {
        "name": "ปลาผัด สูตร 5972",
        "cal": 592
    },
    "fried_chicken_5973": {
        "name": "ไก่ทอด สูตร 5973",
        "cal": 437
    },
    "stir_fried_rice_5974": {
        "name": "ข้าวผัด สูตร 5974",
        "cal": 442
    },
    "steamed_rice_5975": {
        "name": "ข้าวนึ่ง สูตร 5975",
        "cal": 737
    },
    "stir_fried_rice_5976": {
        "name": "ข้าวผัด สูตร 5976",
        "cal": 240
    },
    "fried_chicken_5977": {
        "name": "ไก่ทอด สูตร 5977",
        "cal": 249
    },
    "boiled_noodle_5978": {
        "name": "บะหมี่ต้ม สูตร 5978",
        "cal": 302
    },
    "boiled_beef_5979": {
        "name": "เนื้อต้ม สูตร 5979",
        "cal": 125
    },
    "steamed_shrimp_5980": {
        "name": "กุ้งนึ่ง สูตร 5980",
        "cal": 80
    },
    "steamed_fish_5981": {
        "name": "ปลานึ่ง สูตร 5981",
        "cal": 562
    },
    "boiled_rice_5982": {
        "name": "ข้าวต้ม สูตร 5982",
        "cal": 678
    },
    "fried_beef_5983": {
        "name": "เนื้อทอด สูตร 5983",
        "cal": 402
    },
    "boiled_rice_5984": {
        "name": "ข้าวต้ม สูตร 5984",
        "cal": 532
    },
    "fried_rice_5985": {
        "name": "ข้าวทอด สูตร 5985",
        "cal": 803
    },
    "boiled_squid_5986": {
        "name": "ปลาหมึกต้ม สูตร 5986",
        "cal": 303
    },
    "spicy_soup_5987": {
        "name": "ซุปยำ สูตร 5987",
        "cal": 29
    },
    "stir_fried_pork_5988": {
        "name": "หมูผัด สูตร 5988",
        "cal": 58
    },
    "boiled_squid_5989": {
        "name": "ปลาหมึกต้ม สูตร 5989",
        "cal": 248
    },
    "fried_beef_5990": {
        "name": "เนื้อทอด สูตร 5990",
        "cal": 588
    },
    "spicy_rice_5991": {
        "name": "ข้าวยำ สูตร 5991",
        "cal": 376
    },
    "boiled_soup_5992": {
        "name": "ซุปต้ม สูตร 5992",
        "cal": 133
    },
    "steamed_soup_5993": {
        "name": "ซุปนึ่ง สูตร 5993",
        "cal": 430
    },
    "stir_fried_soup_5994": {
        "name": "ซุปผัด สูตร 5994",
        "cal": 587
    },
    "fried_shrimp_5995": {
        "name": "กุ้งทอด สูตร 5995",
        "cal": 258
    },
    "fried_pork_5996": {
        "name": "หมูทอด สูตร 5996",
        "cal": 261
    },
    "fried_pork_5997": {
        "name": "หมูทอด สูตร 5997",
        "cal": 647
    },
    "grilled_noodle_5998": {
        "name": "บะหมี่ย่าง สูตร 5998",
        "cal": 702
    },
    "steamed_chicken_5999": {
        "name": "ไก่นึ่ง สูตร 5999",
        "cal": 457
    },
    "spicy_soup_6000": {
        "name": "ซุปยำ สูตร 6000",
        "cal": 90
    },
    "fried_shrimp_6001": {
        "name": "กุ้งทอด สูตร 6001",
        "cal": 55
    },
    "grilled_fish_6002": {
        "name": "ปลาย่าง สูตร 6002",
        "cal": 299
    },
    "grilled_chicken_6003": {
        "name": "ไก่ย่าง สูตร 6003",
        "cal": 633
    },
    "boiled_fish_6004": {
        "name": "ปลาต้ม สูตร 6004",
        "cal": 88
    },
    "steamed_pork_6005": {
        "name": "หมูนึ่ง สูตร 6005",
        "cal": 247
    },
    "stir_fried_pork_6006": {
        "name": "หมูผัด สูตร 6006",
        "cal": 541
    },
    "steamed_pork_6007": {
        "name": "หมูนึ่ง สูตร 6007",
        "cal": 316
    },
    "boiled_soup_6008": {
        "name": "ซุปต้ม สูตร 6008",
        "cal": 425
    },
    "boiled_noodle_6009": {
        "name": "บะหมี่ต้ม สูตร 6009",
        "cal": 530
    },
    "steamed_soup_6010": {
        "name": "ซุปนึ่ง สูตร 6010",
        "cal": 653
    },
    "stir_fried_shrimp_6011": {
        "name": "กุ้งผัด สูตร 6011",
        "cal": 75
    },
    "grilled_rice_6012": {
        "name": "ข้าวย่าง สูตร 6012",
        "cal": 697
    },
    "spicy_shrimp_6013": {
        "name": "กุ้งยำ สูตร 6013",
        "cal": 65
    },
    "grilled_soup_6014": {
        "name": "ซุปย่าง สูตร 6014",
        "cal": 547
    },
    "stir_fried_shrimp_6015": {
        "name": "กุ้งผัด สูตร 6015",
        "cal": 368
    },
    "stir_fried_fish_6016": {
        "name": "ปลาผัด สูตร 6016",
        "cal": 604
    },
    "steamed_rice_6017": {
        "name": "ข้าวนึ่ง สูตร 6017",
        "cal": 99
    },
    "spicy_squid_6018": {
        "name": "ปลาหมึกยำ สูตร 6018",
        "cal": 429
    },
    "grilled_shrimp_6019": {
        "name": "กุ้งย่าง สูตร 6019",
        "cal": 711
    },
    "spicy_beef_6020": {
        "name": "เนื้อยำ สูตร 6020",
        "cal": 473
    },
    "grilled_pork_6021": {
        "name": "หมูย่าง สูตร 6021",
        "cal": 835
    },
    "boiled_fish_6022": {
        "name": "ปลาต้ม สูตร 6022",
        "cal": 85
    },
    "fried_chicken_6023": {
        "name": "ไก่ทอด สูตร 6023",
        "cal": 638
    },
    "spicy_pork_6024": {
        "name": "หมูยำ สูตร 6024",
        "cal": 744
    },
    "stir_fried_beef_6025": {
        "name": "เนื้อผัด สูตร 6025",
        "cal": 577
    },
    "fried_soup_6026": {
        "name": "ซุปทอด สูตร 6026",
        "cal": 521
    },
    "boiled_noodle_6027": {
        "name": "บะหมี่ต้ม สูตร 6027",
        "cal": 75
    },
    "grilled_soup_6028": {
        "name": "ซุปย่าง สูตร 6028",
        "cal": 282
    },
    "steamed_fish_6029": {
        "name": "ปลานึ่ง สูตร 6029",
        "cal": 227
    },
    "fried_rice_6030": {
        "name": "ข้าวทอด สูตร 6030",
        "cal": 528
    },
    "grilled_soup_6031": {
        "name": "ซุปย่าง สูตร 6031",
        "cal": 610
    },
    "spicy_pork_6032": {
        "name": "หมูยำ สูตร 6032",
        "cal": 263
    },
    "spicy_beef_6033": {
        "name": "เนื้อยำ สูตร 6033",
        "cal": 361
    },
    "steamed_fish_6034": {
        "name": "ปลานึ่ง สูตร 6034",
        "cal": 59
    },
    "fried_rice_6035": {
        "name": "ข้าวทอด สูตร 6035",
        "cal": 560
    },
    "boiled_shrimp_6036": {
        "name": "กุ้งต้ม สูตร 6036",
        "cal": 548
    },
    "spicy_noodle_6037": {
        "name": "บะหมี่ยำ สูตร 6037",
        "cal": 276
    },
    "spicy_squid_6038": {
        "name": "ปลาหมึกยำ สูตร 6038",
        "cal": 507
    },
    "stir_fried_beef_6039": {
        "name": "เนื้อผัด สูตร 6039",
        "cal": 29
    },
    "grilled_beef_6040": {
        "name": "เนื้อย่าง สูตร 6040",
        "cal": 555
    },
    "boiled_noodle_6041": {
        "name": "บะหมี่ต้ม สูตร 6041",
        "cal": 520
    },
    "spicy_beef_6042": {
        "name": "เนื้อยำ สูตร 6042",
        "cal": 204
    },
    "spicy_pork_6043": {
        "name": "หมูยำ สูตร 6043",
        "cal": 709
    },
    "boiled_noodle_6044": {
        "name": "บะหมี่ต้ม สูตร 6044",
        "cal": 93
    },
    "fried_rice_6045": {
        "name": "ข้าวทอด สูตร 6045",
        "cal": 34
    },
    "spicy_fish_6046": {
        "name": "ปลายำ สูตร 6046",
        "cal": 21
    },
    "stir_fried_chicken_6047": {
        "name": "ไก่ผัด สูตร 6047",
        "cal": 685
    },
    "boiled_beef_6048": {
        "name": "เนื้อต้ม สูตร 6048",
        "cal": 653
    },
    "boiled_shrimp_6049": {
        "name": "กุ้งต้ม สูตร 6049",
        "cal": 375
    },
    "grilled_noodle_6050": {
        "name": "บะหมี่ย่าง สูตร 6050",
        "cal": 221
    },
    "steamed_chicken_6051": {
        "name": "ไก่นึ่ง สูตร 6051",
        "cal": 361
    },
    "boiled_squid_6052": {
        "name": "ปลาหมึกต้ม สูตร 6052",
        "cal": 159
    },
    "grilled_shrimp_6053": {
        "name": "กุ้งย่าง สูตร 6053",
        "cal": 634
    },
    "fried_squid_6054": {
        "name": "ปลาหมึกทอด สูตร 6054",
        "cal": 636
    },
    "spicy_rice_6055": {
        "name": "ข้าวยำ สูตร 6055",
        "cal": 828
    },
    "stir_fried_squid_6056": {
        "name": "ปลาหมึกผัด สูตร 6056",
        "cal": 81
    },
    "fried_fish_6057": {
        "name": "ปลาทอด สูตร 6057",
        "cal": 323
    },
    "spicy_soup_6058": {
        "name": "ซุปยำ สูตร 6058",
        "cal": 494
    },
    "boiled_soup_6059": {
        "name": "ซุปต้ม สูตร 6059",
        "cal": 232
    },
    "fried_shrimp_6060": {
        "name": "กุ้งทอด สูตร 6060",
        "cal": 192
    },
    "grilled_soup_6061": {
        "name": "ซุปย่าง สูตร 6061",
        "cal": 679
    },
    "spicy_rice_6062": {
        "name": "ข้าวยำ สูตร 6062",
        "cal": 547
    },
    "steamed_soup_6063": {
        "name": "ซุปนึ่ง สูตร 6063",
        "cal": 488
    },
    "spicy_fish_6064": {
        "name": "ปลายำ สูตร 6064",
        "cal": 549
    },
    "grilled_chicken_6065": {
        "name": "ไก่ย่าง สูตร 6065",
        "cal": 364
    },
    "grilled_soup_6066": {
        "name": "ซุปย่าง สูตร 6066",
        "cal": 717
    },
    "grilled_beef_6067": {
        "name": "เนื้อย่าง สูตร 6067",
        "cal": 660
    },
    "grilled_squid_6068": {
        "name": "ปลาหมึกย่าง สูตร 6068",
        "cal": 707
    },
    "stir_fried_squid_6069": {
        "name": "ปลาหมึกผัด สูตร 6069",
        "cal": 773
    },
    "grilled_rice_6070": {
        "name": "ข้าวย่าง สูตร 6070",
        "cal": 99
    },
    "steamed_fish_6071": {
        "name": "ปลานึ่ง สูตร 6071",
        "cal": 603
    },
    "boiled_chicken_6072": {
        "name": "ไก่ต้ม สูตร 6072",
        "cal": 699
    },
    "steamed_rice_6073": {
        "name": "ข้าวนึ่ง สูตร 6073",
        "cal": 575
    },
    "grilled_squid_6074": {
        "name": "ปลาหมึกย่าง สูตร 6074",
        "cal": 269
    },
    "grilled_squid_6075": {
        "name": "ปลาหมึกย่าง สูตร 6075",
        "cal": 408
    },
    "grilled_soup_6076": {
        "name": "ซุปย่าง สูตร 6076",
        "cal": 731
    },
    "stir_fried_noodle_6077": {
        "name": "บะหมี่ผัด สูตร 6077",
        "cal": 402
    },
    "grilled_chicken_6078": {
        "name": "ไก่ย่าง สูตร 6078",
        "cal": 395
    },
    "stir_fried_noodle_6079": {
        "name": "บะหมี่ผัด สูตร 6079",
        "cal": 795
    },
    "boiled_rice_6080": {
        "name": "ข้าวต้ม สูตร 6080",
        "cal": 849
    },
    "boiled_beef_6081": {
        "name": "เนื้อต้ม สูตร 6081",
        "cal": 97
    },
    "grilled_shrimp_6082": {
        "name": "กุ้งย่าง สูตร 6082",
        "cal": 402
    },
    "stir_fried_beef_6083": {
        "name": "เนื้อผัด สูตร 6083",
        "cal": 533
    },
    "boiled_rice_6084": {
        "name": "ข้าวต้ม สูตร 6084",
        "cal": 227
    },
    "boiled_beef_6085": {
        "name": "เนื้อต้ม สูตร 6085",
        "cal": 812
    },
    "stir_fried_soup_6086": {
        "name": "ซุปผัด สูตร 6086",
        "cal": 742
    },
    "grilled_noodle_6087": {
        "name": "บะหมี่ย่าง สูตร 6087",
        "cal": 360
    },
    "stir_fried_squid_6088": {
        "name": "ปลาหมึกผัด สูตร 6088",
        "cal": 179
    },
    "spicy_soup_6089": {
        "name": "ซุปยำ สูตร 6089",
        "cal": 429
    },
    "boiled_rice_6090": {
        "name": "ข้าวต้ม สูตร 6090",
        "cal": 155
    },
    "grilled_rice_6091": {
        "name": "ข้าวย่าง สูตร 6091",
        "cal": 784
    },
    "boiled_pork_6092": {
        "name": "หมูต้ม สูตร 6092",
        "cal": 297
    },
    "grilled_chicken_6093": {
        "name": "ไก่ย่าง สูตร 6093",
        "cal": 261
    },
    "grilled_fish_6094": {
        "name": "ปลาย่าง สูตร 6094",
        "cal": 837
    },
    "boiled_pork_6095": {
        "name": "หมูต้ม สูตร 6095",
        "cal": 414
    },
    "spicy_shrimp_6096": {
        "name": "กุ้งยำ สูตร 6096",
        "cal": 322
    },
    "fried_shrimp_6097": {
        "name": "กุ้งทอด สูตร 6097",
        "cal": 830
    },
    "grilled_squid_6098": {
        "name": "ปลาหมึกย่าง สูตร 6098",
        "cal": 347
    },
    "boiled_soup_6099": {
        "name": "ซุปต้ม สูตร 6099",
        "cal": 442
    },
    "spicy_pork_6100": {
        "name": "หมูยำ สูตร 6100",
        "cal": 655
    },
    "spicy_rice_6101": {
        "name": "ข้าวยำ สูตร 6101",
        "cal": 46
    },
    "grilled_soup_6102": {
        "name": "ซุปย่าง สูตร 6102",
        "cal": 599
    },
    "stir_fried_shrimp_6103": {
        "name": "กุ้งผัด สูตร 6103",
        "cal": 79
    },
    "grilled_soup_6104": {
        "name": "ซุปย่าง สูตร 6104",
        "cal": 734
    },
    "steamed_rice_6105": {
        "name": "ข้าวนึ่ง สูตร 6105",
        "cal": 752
    },
    "grilled_soup_6106": {
        "name": "ซุปย่าง สูตร 6106",
        "cal": 758
    },
    "spicy_soup_6107": {
        "name": "ซุปยำ สูตร 6107",
        "cal": 753
    },
    "spicy_soup_6108": {
        "name": "ซุปยำ สูตร 6108",
        "cal": 729
    },
    "boiled_pork_6109": {
        "name": "หมูต้ม สูตร 6109",
        "cal": 450
    },
    "spicy_rice_6110": {
        "name": "ข้าวยำ สูตร 6110",
        "cal": 499
    },
    "boiled_squid_6111": {
        "name": "ปลาหมึกต้ม สูตร 6111",
        "cal": 383
    },
    "spicy_fish_6112": {
        "name": "ปลายำ สูตร 6112",
        "cal": 429
    },
    "fried_chicken_6113": {
        "name": "ไก่ทอด สูตร 6113",
        "cal": 348
    },
    "spicy_soup_6114": {
        "name": "ซุปยำ สูตร 6114",
        "cal": 326
    },
    "steamed_beef_6115": {
        "name": "เนื้อนึ่ง สูตร 6115",
        "cal": 313
    },
    "spicy_noodle_6116": {
        "name": "บะหมี่ยำ สูตร 6116",
        "cal": 223
    },
    "grilled_shrimp_6117": {
        "name": "กุ้งย่าง สูตร 6117",
        "cal": 606
    },
    "stir_fried_beef_6118": {
        "name": "เนื้อผัด สูตร 6118",
        "cal": 617
    },
    "stir_fried_shrimp_6119": {
        "name": "กุ้งผัด สูตร 6119",
        "cal": 229
    },
    "stir_fried_squid_6120": {
        "name": "ปลาหมึกผัด สูตร 6120",
        "cal": 117
    },
    "spicy_pork_6121": {
        "name": "หมูยำ สูตร 6121",
        "cal": 421
    },
    "steamed_soup_6122": {
        "name": "ซุปนึ่ง สูตร 6122",
        "cal": 635
    },
    "steamed_pork_6123": {
        "name": "หมูนึ่ง สูตร 6123",
        "cal": 185
    },
    "stir_fried_beef_6124": {
        "name": "เนื้อผัด สูตร 6124",
        "cal": 317
    },
    "fried_squid_6125": {
        "name": "ปลาหมึกทอด สูตร 6125",
        "cal": 823
    },
    "steamed_fish_6126": {
        "name": "ปลานึ่ง สูตร 6126",
        "cal": 789
    },
    "stir_fried_noodle_6127": {
        "name": "บะหมี่ผัด สูตร 6127",
        "cal": 104
    },
    "boiled_fish_6128": {
        "name": "ปลาต้ม สูตร 6128",
        "cal": 689
    },
    "fried_pork_6129": {
        "name": "หมูทอด สูตร 6129",
        "cal": 727
    },
    "boiled_chicken_6130": {
        "name": "ไก่ต้ม สูตร 6130",
        "cal": 574
    },
    "steamed_rice_6131": {
        "name": "ข้าวนึ่ง สูตร 6131",
        "cal": 123
    },
    "fried_fish_6132": {
        "name": "ปลาทอด สูตร 6132",
        "cal": 810
    },
    "grilled_chicken_6133": {
        "name": "ไก่ย่าง สูตร 6133",
        "cal": 263
    },
    "spicy_squid_6134": {
        "name": "ปลาหมึกยำ สูตร 6134",
        "cal": 66
    },
    "boiled_rice_6135": {
        "name": "ข้าวต้ม สูตร 6135",
        "cal": 171
    },
    "spicy_chicken_6136": {
        "name": "ไก่ยำ สูตร 6136",
        "cal": 571
    },
    "spicy_chicken_6137": {
        "name": "ไก่ยำ สูตร 6137",
        "cal": 223
    },
    "fried_squid_6138": {
        "name": "ปลาหมึกทอด สูตร 6138",
        "cal": 37
    },
    "fried_chicken_6139": {
        "name": "ไก่ทอด สูตร 6139",
        "cal": 137
    },
    "grilled_noodle_6140": {
        "name": "บะหมี่ย่าง สูตร 6140",
        "cal": 371
    },
    "spicy_shrimp_6141": {
        "name": "กุ้งยำ สูตร 6141",
        "cal": 318
    },
    "grilled_squid_6142": {
        "name": "ปลาหมึกย่าง สูตร 6142",
        "cal": 653
    },
    "steamed_shrimp_6143": {
        "name": "กุ้งนึ่ง สูตร 6143",
        "cal": 324
    },
    "stir_fried_squid_6144": {
        "name": "ปลาหมึกผัด สูตร 6144",
        "cal": 140
    },
    "stir_fried_chicken_6145": {
        "name": "ไก่ผัด สูตร 6145",
        "cal": 98
    },
    "fried_squid_6146": {
        "name": "ปลาหมึกทอด สูตร 6146",
        "cal": 321
    },
    "stir_fried_fish_6147": {
        "name": "ปลาผัด สูตร 6147",
        "cal": 269
    },
    "grilled_fish_6148": {
        "name": "ปลาย่าง สูตร 6148",
        "cal": 350
    },
    "spicy_fish_6149": {
        "name": "ปลายำ สูตร 6149",
        "cal": 354
    },
    "steamed_chicken_6150": {
        "name": "ไก่นึ่ง สูตร 6150",
        "cal": 679
    },
    "steamed_pork_6151": {
        "name": "หมูนึ่ง สูตร 6151",
        "cal": 623
    },
    "boiled_soup_6152": {
        "name": "ซุปต้ม สูตร 6152",
        "cal": 714
    },
    "grilled_rice_6153": {
        "name": "ข้าวย่าง สูตร 6153",
        "cal": 556
    },
    "grilled_soup_6154": {
        "name": "ซุปย่าง สูตร 6154",
        "cal": 507
    },
    "steamed_noodle_6155": {
        "name": "บะหมี่นึ่ง สูตร 6155",
        "cal": 193
    },
    "spicy_pork_6156": {
        "name": "หมูยำ สูตร 6156",
        "cal": 418
    },
    "stir_fried_chicken_6157": {
        "name": "ไก่ผัด สูตร 6157",
        "cal": 411
    },
    "steamed_noodle_6158": {
        "name": "บะหมี่นึ่ง สูตร 6158",
        "cal": 784
    },
    "steamed_rice_6159": {
        "name": "ข้าวนึ่ง สูตร 6159",
        "cal": 662
    },
    "spicy_fish_6160": {
        "name": "ปลายำ สูตร 6160",
        "cal": 152
    },
    "spicy_rice_6161": {
        "name": "ข้าวยำ สูตร 6161",
        "cal": 753
    },
    "fried_chicken_6162": {
        "name": "ไก่ทอด สูตร 6162",
        "cal": 594
    },
    "steamed_pork_6163": {
        "name": "หมูนึ่ง สูตร 6163",
        "cal": 236
    },
    "stir_fried_fish_6164": {
        "name": "ปลาผัด สูตร 6164",
        "cal": 840
    },
    "stir_fried_shrimp_6165": {
        "name": "กุ้งผัด สูตร 6165",
        "cal": 178
    },
    "grilled_noodle_6166": {
        "name": "บะหมี่ย่าง สูตร 6166",
        "cal": 57
    },
    "stir_fried_fish_6167": {
        "name": "ปลาผัด สูตร 6167",
        "cal": 51
    },
    "boiled_pork_6168": {
        "name": "หมูต้ม สูตร 6168",
        "cal": 66
    },
    "fried_noodle_6169": {
        "name": "บะหมี่ทอด สูตร 6169",
        "cal": 190
    },
    "grilled_pork_6170": {
        "name": "หมูย่าง สูตร 6170",
        "cal": 679
    },
    "steamed_noodle_6171": {
        "name": "บะหมี่นึ่ง สูตร 6171",
        "cal": 190
    },
    "spicy_soup_6172": {
        "name": "ซุปยำ สูตร 6172",
        "cal": 388
    },
    "spicy_chicken_6173": {
        "name": "ไก่ยำ สูตร 6173",
        "cal": 742
    },
    "grilled_chicken_6174": {
        "name": "ไก่ย่าง สูตร 6174",
        "cal": 804
    },
    "fried_shrimp_6175": {
        "name": "กุ้งทอด สูตร 6175",
        "cal": 766
    },
    "boiled_pork_6176": {
        "name": "หมูต้ม สูตร 6176",
        "cal": 390
    },
    "grilled_chicken_6177": {
        "name": "ไก่ย่าง สูตร 6177",
        "cal": 766
    },
    "boiled_shrimp_6178": {
        "name": "กุ้งต้ม สูตร 6178",
        "cal": 470
    },
    "boiled_soup_6179": {
        "name": "ซุปต้ม สูตร 6179",
        "cal": 783
    },
    "spicy_rice_6180": {
        "name": "ข้าวยำ สูตร 6180",
        "cal": 85
    },
    "steamed_rice_6181": {
        "name": "ข้าวนึ่ง สูตร 6181",
        "cal": 669
    },
    "stir_fried_rice_6182": {
        "name": "ข้าวผัด สูตร 6182",
        "cal": 365
    },
    "boiled_squid_6183": {
        "name": "ปลาหมึกต้ม สูตร 6183",
        "cal": 604
    },
    "stir_fried_noodle_6184": {
        "name": "บะหมี่ผัด สูตร 6184",
        "cal": 416
    },
    "grilled_fish_6185": {
        "name": "ปลาย่าง สูตร 6185",
        "cal": 27
    },
    "boiled_soup_6186": {
        "name": "ซุปต้ม สูตร 6186",
        "cal": 727
    },
    "steamed_pork_6187": {
        "name": "หมูนึ่ง สูตร 6187",
        "cal": 164
    },
    "steamed_pork_6188": {
        "name": "หมูนึ่ง สูตร 6188",
        "cal": 256
    },
    "boiled_noodle_6189": {
        "name": "บะหมี่ต้ม สูตร 6189",
        "cal": 463
    },
    "fried_beef_6190": {
        "name": "เนื้อทอด สูตร 6190",
        "cal": 646
    },
    "steamed_soup_6191": {
        "name": "ซุปนึ่ง สูตร 6191",
        "cal": 49
    },
    "grilled_beef_6192": {
        "name": "เนื้อย่าง สูตร 6192",
        "cal": 697
    },
    "fried_rice_6193": {
        "name": "ข้าวทอด สูตร 6193",
        "cal": 481
    },
    "spicy_fish_6194": {
        "name": "ปลายำ สูตร 6194",
        "cal": 625
    },
    "fried_noodle_6195": {
        "name": "บะหมี่ทอด สูตร 6195",
        "cal": 111
    },
    "steamed_shrimp_6196": {
        "name": "กุ้งนึ่ง สูตร 6196",
        "cal": 429
    },
    "boiled_noodle_6197": {
        "name": "บะหมี่ต้ม สูตร 6197",
        "cal": 692
    },
    "boiled_squid_6198": {
        "name": "ปลาหมึกต้ม สูตร 6198",
        "cal": 584
    },
    "stir_fried_fish_6199": {
        "name": "ปลาผัด สูตร 6199",
        "cal": 563
    },
    "stir_fried_noodle_6200": {
        "name": "บะหมี่ผัด สูตร 6200",
        "cal": 632
    },
    "boiled_pork_6201": {
        "name": "หมูต้ม สูตร 6201",
        "cal": 582
    },
    "steamed_noodle_6202": {
        "name": "บะหมี่นึ่ง สูตร 6202",
        "cal": 461
    },
    "stir_fried_squid_6203": {
        "name": "ปลาหมึกผัด สูตร 6203",
        "cal": 149
    },
    "fried_chicken_6204": {
        "name": "ไก่ทอด สูตร 6204",
        "cal": 44
    },
    "boiled_rice_6205": {
        "name": "ข้าวต้ม สูตร 6205",
        "cal": 337
    },
    "grilled_beef_6206": {
        "name": "เนื้อย่าง สูตร 6206",
        "cal": 739
    },
    "steamed_beef_6207": {
        "name": "เนื้อนึ่ง สูตร 6207",
        "cal": 836
    },
    "boiled_noodle_6208": {
        "name": "บะหมี่ต้ม สูตร 6208",
        "cal": 263
    },
    "steamed_fish_6209": {
        "name": "ปลานึ่ง สูตร 6209",
        "cal": 772
    },
    "boiled_rice_6210": {
        "name": "ข้าวต้ม สูตร 6210",
        "cal": 366
    },
    "fried_chicken_6211": {
        "name": "ไก่ทอด สูตร 6211",
        "cal": 248
    },
    "steamed_squid_6212": {
        "name": "ปลาหมึกนึ่ง สูตร 6212",
        "cal": 152
    },
    "fried_rice_6213": {
        "name": "ข้าวทอด สูตร 6213",
        "cal": 643
    },
    "steamed_rice_6214": {
        "name": "ข้าวนึ่ง สูตร 6214",
        "cal": 758
    },
    "boiled_fish_6215": {
        "name": "ปลาต้ม สูตร 6215",
        "cal": 621
    },
    "fried_squid_6216": {
        "name": "ปลาหมึกทอด สูตร 6216",
        "cal": 682
    },
    "steamed_beef_6217": {
        "name": "เนื้อนึ่ง สูตร 6217",
        "cal": 218
    },
    "spicy_chicken_6218": {
        "name": "ไก่ยำ สูตร 6218",
        "cal": 650
    },
    "boiled_fish_6219": {
        "name": "ปลาต้ม สูตร 6219",
        "cal": 181
    },
    "fried_soup_6220": {
        "name": "ซุปทอด สูตร 6220",
        "cal": 132
    },
    "steamed_fish_6221": {
        "name": "ปลานึ่ง สูตร 6221",
        "cal": 507
    },
    "steamed_squid_6222": {
        "name": "ปลาหมึกนึ่ง สูตร 6222",
        "cal": 625
    },
    "fried_chicken_6223": {
        "name": "ไก่ทอด สูตร 6223",
        "cal": 261
    },
    "steamed_soup_6224": {
        "name": "ซุปนึ่ง สูตร 6224",
        "cal": 793
    },
    "spicy_soup_6225": {
        "name": "ซุปยำ สูตร 6225",
        "cal": 121
    },
    "steamed_soup_6226": {
        "name": "ซุปนึ่ง สูตร 6226",
        "cal": 409
    },
    "spicy_fish_6227": {
        "name": "ปลายำ สูตร 6227",
        "cal": 380
    },
    "boiled_pork_6228": {
        "name": "หมูต้ม สูตร 6228",
        "cal": 488
    },
    "fried_noodle_6229": {
        "name": "บะหมี่ทอด สูตร 6229",
        "cal": 136
    },
    "spicy_fish_6230": {
        "name": "ปลายำ สูตร 6230",
        "cal": 30
    },
    "boiled_squid_6231": {
        "name": "ปลาหมึกต้ม สูตร 6231",
        "cal": 321
    },
    "stir_fried_rice_6232": {
        "name": "ข้าวผัด สูตร 6232",
        "cal": 440
    },
    "spicy_noodle_6233": {
        "name": "บะหมี่ยำ สูตร 6233",
        "cal": 753
    },
    "steamed_soup_6234": {
        "name": "ซุปนึ่ง สูตร 6234",
        "cal": 840
    },
    "fried_noodle_6235": {
        "name": "บะหมี่ทอด สูตร 6235",
        "cal": 459
    },
    "fried_chicken_6236": {
        "name": "ไก่ทอด สูตร 6236",
        "cal": 469
    },
    "fried_rice_6237": {
        "name": "ข้าวทอด สูตร 6237",
        "cal": 660
    },
    "fried_beef_6238": {
        "name": "เนื้อทอด สูตร 6238",
        "cal": 474
    },
    "grilled_noodle_6239": {
        "name": "บะหมี่ย่าง สูตร 6239",
        "cal": 628
    },
    "spicy_squid_6240": {
        "name": "ปลาหมึกยำ สูตร 6240",
        "cal": 181
    },
    "grilled_squid_6241": {
        "name": "ปลาหมึกย่าง สูตร 6241",
        "cal": 210
    },
    "stir_fried_chicken_6242": {
        "name": "ไก่ผัด สูตร 6242",
        "cal": 144
    },
    "fried_beef_6243": {
        "name": "เนื้อทอด สูตร 6243",
        "cal": 193
    },
    "steamed_soup_6244": {
        "name": "ซุปนึ่ง สูตร 6244",
        "cal": 588
    },
    "stir_fried_noodle_6245": {
        "name": "บะหมี่ผัด สูตร 6245",
        "cal": 803
    },
    "fried_soup_6246": {
        "name": "ซุปทอด สูตร 6246",
        "cal": 99
    },
    "fried_noodle_6247": {
        "name": "บะหมี่ทอด สูตร 6247",
        "cal": 722
    },
    "stir_fried_soup_6248": {
        "name": "ซุปผัด สูตร 6248",
        "cal": 816
    },
    "stir_fried_beef_6249": {
        "name": "เนื้อผัด สูตร 6249",
        "cal": 164
    },
    "grilled_pork_6250": {
        "name": "หมูย่าง สูตร 6250",
        "cal": 690
    },
    "steamed_pork_6251": {
        "name": "หมูนึ่ง สูตร 6251",
        "cal": 812
    },
    "grilled_rice_6252": {
        "name": "ข้าวย่าง สูตร 6252",
        "cal": 676
    },
    "steamed_soup_6253": {
        "name": "ซุปนึ่ง สูตร 6253",
        "cal": 277
    },
    "stir_fried_chicken_6254": {
        "name": "ไก่ผัด สูตร 6254",
        "cal": 351
    },
    "steamed_rice_6255": {
        "name": "ข้าวนึ่ง สูตร 6255",
        "cal": 444
    },
    "stir_fried_beef_6256": {
        "name": "เนื้อผัด สูตร 6256",
        "cal": 391
    },
    "grilled_pork_6257": {
        "name": "หมูย่าง สูตร 6257",
        "cal": 496
    },
    "boiled_rice_6258": {
        "name": "ข้าวต้ม สูตร 6258",
        "cal": 328
    },
    "fried_beef_6259": {
        "name": "เนื้อทอด สูตร 6259",
        "cal": 707
    },
    "stir_fried_soup_6260": {
        "name": "ซุปผัด สูตร 6260",
        "cal": 580
    },
    "spicy_soup_6261": {
        "name": "ซุปยำ สูตร 6261",
        "cal": 197
    },
    "grilled_pork_6262": {
        "name": "หมูย่าง สูตร 6262",
        "cal": 307
    },
    "boiled_soup_6263": {
        "name": "ซุปต้ม สูตร 6263",
        "cal": 648
    },
    "steamed_soup_6264": {
        "name": "ซุปนึ่ง สูตร 6264",
        "cal": 59
    },
    "stir_fried_noodle_6265": {
        "name": "บะหมี่ผัด สูตร 6265",
        "cal": 606
    },
    "grilled_rice_6266": {
        "name": "ข้าวย่าง สูตร 6266",
        "cal": 724
    },
    "fried_soup_6267": {
        "name": "ซุปทอด สูตร 6267",
        "cal": 234
    },
    "fried_noodle_6268": {
        "name": "บะหมี่ทอด สูตร 6268",
        "cal": 706
    },
    "spicy_soup_6269": {
        "name": "ซุปยำ สูตร 6269",
        "cal": 544
    },
    "fried_chicken_6270": {
        "name": "ไก่ทอด สูตร 6270",
        "cal": 448
    },
    "fried_shrimp_6271": {
        "name": "กุ้งทอด สูตร 6271",
        "cal": 96
    },
    "spicy_pork_6272": {
        "name": "หมูยำ สูตร 6272",
        "cal": 572
    },
    "steamed_pork_6273": {
        "name": "หมูนึ่ง สูตร 6273",
        "cal": 83
    },
    "grilled_squid_6274": {
        "name": "ปลาหมึกย่าง สูตร 6274",
        "cal": 775
    },
    "stir_fried_soup_6275": {
        "name": "ซุปผัด สูตร 6275",
        "cal": 376
    },
    "stir_fried_noodle_6276": {
        "name": "บะหมี่ผัด สูตร 6276",
        "cal": 682
    },
    "grilled_fish_6277": {
        "name": "ปลาย่าง สูตร 6277",
        "cal": 237
    },
    "fried_noodle_6278": {
        "name": "บะหมี่ทอด สูตร 6278",
        "cal": 376
    },
    "steamed_soup_6279": {
        "name": "ซุปนึ่ง สูตร 6279",
        "cal": 199
    },
    "boiled_chicken_6280": {
        "name": "ไก่ต้ม สูตร 6280",
        "cal": 416
    },
    "spicy_noodle_6281": {
        "name": "บะหมี่ยำ สูตร 6281",
        "cal": 237
    },
    "grilled_squid_6282": {
        "name": "ปลาหมึกย่าง สูตร 6282",
        "cal": 658
    },
    "steamed_noodle_6283": {
        "name": "บะหมี่นึ่ง สูตร 6283",
        "cal": 594
    },
    "fried_pork_6284": {
        "name": "หมูทอด สูตร 6284",
        "cal": 353
    },
    "stir_fried_rice_6285": {
        "name": "ข้าวผัด สูตร 6285",
        "cal": 608
    },
    "grilled_pork_6286": {
        "name": "หมูย่าง สูตร 6286",
        "cal": 83
    },
    "boiled_noodle_6287": {
        "name": "บะหมี่ต้ม สูตร 6287",
        "cal": 40
    },
    "stir_fried_rice_6288": {
        "name": "ข้าวผัด สูตร 6288",
        "cal": 543
    },
    "grilled_shrimp_6289": {
        "name": "กุ้งย่าง สูตร 6289",
        "cal": 466
    },
    "stir_fried_noodle_6290": {
        "name": "บะหมี่ผัด สูตร 6290",
        "cal": 512
    },
    "stir_fried_noodle_6291": {
        "name": "บะหมี่ผัด สูตร 6291",
        "cal": 213
    },
    "spicy_squid_6292": {
        "name": "ปลาหมึกยำ สูตร 6292",
        "cal": 160
    },
    "spicy_pork_6293": {
        "name": "หมูยำ สูตร 6293",
        "cal": 50
    },
    "fried_shrimp_6294": {
        "name": "กุ้งทอด สูตร 6294",
        "cal": 713
    },
    "grilled_pork_6295": {
        "name": "หมูย่าง สูตร 6295",
        "cal": 304
    },
    "grilled_noodle_6296": {
        "name": "บะหมี่ย่าง สูตร 6296",
        "cal": 131
    },
    "spicy_beef_6297": {
        "name": "เนื้อยำ สูตร 6297",
        "cal": 134
    },
    "stir_fried_noodle_6298": {
        "name": "บะหมี่ผัด สูตร 6298",
        "cal": 357
    },
    "spicy_fish_6299": {
        "name": "ปลายำ สูตร 6299",
        "cal": 610
    },
    "spicy_rice_6300": {
        "name": "ข้าวยำ สูตร 6300",
        "cal": 28
    },
    "boiled_noodle_6301": {
        "name": "บะหมี่ต้ม สูตร 6301",
        "cal": 671
    },
    "fried_fish_6302": {
        "name": "ปลาทอด สูตร 6302",
        "cal": 773
    },
    "spicy_rice_6303": {
        "name": "ข้าวยำ สูตร 6303",
        "cal": 333
    },
    "spicy_squid_6304": {
        "name": "ปลาหมึกยำ สูตร 6304",
        "cal": 719
    },
    "stir_fried_shrimp_6305": {
        "name": "กุ้งผัด สูตร 6305",
        "cal": 87
    },
    "fried_noodle_6306": {
        "name": "บะหมี่ทอด สูตร 6306",
        "cal": 525
    },
    "grilled_noodle_6307": {
        "name": "บะหมี่ย่าง สูตร 6307",
        "cal": 84
    },
    "steamed_shrimp_6308": {
        "name": "กุ้งนึ่ง สูตร 6308",
        "cal": 207
    },
    "stir_fried_pork_6309": {
        "name": "หมูผัด สูตร 6309",
        "cal": 758
    },
    "grilled_pork_6310": {
        "name": "หมูย่าง สูตร 6310",
        "cal": 473
    },
    "stir_fried_rice_6311": {
        "name": "ข้าวผัด สูตร 6311",
        "cal": 656
    },
    "steamed_shrimp_6312": {
        "name": "กุ้งนึ่ง สูตร 6312",
        "cal": 26
    },
    "steamed_soup_6313": {
        "name": "ซุปนึ่ง สูตร 6313",
        "cal": 731
    },
    "steamed_shrimp_6314": {
        "name": "กุ้งนึ่ง สูตร 6314",
        "cal": 748
    },
    "boiled_beef_6315": {
        "name": "เนื้อต้ม สูตร 6315",
        "cal": 380
    },
    "boiled_pork_6316": {
        "name": "หมูต้ม สูตร 6316",
        "cal": 448
    },
    "stir_fried_noodle_6317": {
        "name": "บะหมี่ผัด สูตร 6317",
        "cal": 698
    },
    "fried_squid_6318": {
        "name": "ปลาหมึกทอด สูตร 6318",
        "cal": 804
    },
    "grilled_pork_6319": {
        "name": "หมูย่าง สูตร 6319",
        "cal": 229
    },
    "stir_fried_noodle_6320": {
        "name": "บะหมี่ผัด สูตร 6320",
        "cal": 646
    },
    "spicy_pork_6321": {
        "name": "หมูยำ สูตร 6321",
        "cal": 343
    },
    "grilled_fish_6322": {
        "name": "ปลาย่าง สูตร 6322",
        "cal": 362
    },
    "steamed_soup_6323": {
        "name": "ซุปนึ่ง สูตร 6323",
        "cal": 789
    },
    "grilled_soup_6324": {
        "name": "ซุปย่าง สูตร 6324",
        "cal": 768
    },
    "stir_fried_beef_6325": {
        "name": "เนื้อผัด สูตร 6325",
        "cal": 620
    },
    "spicy_squid_6326": {
        "name": "ปลาหมึกยำ สูตร 6326",
        "cal": 448
    },
    "fried_beef_6327": {
        "name": "เนื้อทอด สูตร 6327",
        "cal": 83
    },
    "steamed_fish_6328": {
        "name": "ปลานึ่ง สูตร 6328",
        "cal": 459
    },
    "grilled_pork_6329": {
        "name": "หมูย่าง สูตร 6329",
        "cal": 523
    },
    "steamed_beef_6330": {
        "name": "เนื้อนึ่ง สูตร 6330",
        "cal": 842
    },
    "stir_fried_pork_6331": {
        "name": "หมูผัด สูตร 6331",
        "cal": 259
    },
    "spicy_shrimp_6332": {
        "name": "กุ้งยำ สูตร 6332",
        "cal": 56
    },
    "grilled_soup_6333": {
        "name": "ซุปย่าง สูตร 6333",
        "cal": 357
    },
    "grilled_chicken_6334": {
        "name": "ไก่ย่าง สูตร 6334",
        "cal": 638
    },
    "stir_fried_squid_6335": {
        "name": "ปลาหมึกผัด สูตร 6335",
        "cal": 275
    },
    "fried_beef_6336": {
        "name": "เนื้อทอด สูตร 6336",
        "cal": 445
    },
    "boiled_pork_6337": {
        "name": "หมูต้ม สูตร 6337",
        "cal": 360
    },
    "boiled_beef_6338": {
        "name": "เนื้อต้ม สูตร 6338",
        "cal": 768
    },
    "stir_fried_beef_6339": {
        "name": "เนื้อผัด สูตร 6339",
        "cal": 165
    },
    "grilled_rice_6340": {
        "name": "ข้าวย่าง สูตร 6340",
        "cal": 603
    },
    "boiled_squid_6341": {
        "name": "ปลาหมึกต้ม สูตร 6341",
        "cal": 406
    },
    "spicy_pork_6342": {
        "name": "หมูยำ สูตร 6342",
        "cal": 261
    },
    "boiled_pork_6343": {
        "name": "หมูต้ม สูตร 6343",
        "cal": 803
    },
    "steamed_fish_6344": {
        "name": "ปลานึ่ง สูตร 6344",
        "cal": 512
    },
    "steamed_noodle_6345": {
        "name": "บะหมี่นึ่ง สูตร 6345",
        "cal": 289
    },
    "boiled_shrimp_6346": {
        "name": "กุ้งต้ม สูตร 6346",
        "cal": 128
    },
    "stir_fried_soup_6347": {
        "name": "ซุปผัด สูตร 6347",
        "cal": 653
    },
    "stir_fried_squid_6348": {
        "name": "ปลาหมึกผัด สูตร 6348",
        "cal": 253
    },
    "stir_fried_rice_6349": {
        "name": "ข้าวผัด สูตร 6349",
        "cal": 401
    },
    "stir_fried_noodle_6350": {
        "name": "บะหมี่ผัด สูตร 6350",
        "cal": 683
    },
    "stir_fried_rice_6351": {
        "name": "ข้าวผัด สูตร 6351",
        "cal": 659
    },
    "fried_beef_6352": {
        "name": "เนื้อทอด สูตร 6352",
        "cal": 75
    },
    "boiled_pork_6353": {
        "name": "หมูต้ม สูตร 6353",
        "cal": 104
    },
    "steamed_noodle_6354": {
        "name": "บะหมี่นึ่ง สูตร 6354",
        "cal": 82
    },
    "steamed_fish_6355": {
        "name": "ปลานึ่ง สูตร 6355",
        "cal": 302
    },
    "stir_fried_beef_6356": {
        "name": "เนื้อผัด สูตร 6356",
        "cal": 445
    },
    "boiled_noodle_6357": {
        "name": "บะหมี่ต้ม สูตร 6357",
        "cal": 34
    },
    "stir_fried_squid_6358": {
        "name": "ปลาหมึกผัด สูตร 6358",
        "cal": 222
    },
    "steamed_shrimp_6359": {
        "name": "กุ้งนึ่ง สูตร 6359",
        "cal": 244
    },
    "fried_pork_6360": {
        "name": "หมูทอด สูตร 6360",
        "cal": 36
    },
    "boiled_fish_6361": {
        "name": "ปลาต้ม สูตร 6361",
        "cal": 97
    },
    "stir_fried_fish_6362": {
        "name": "ปลาผัด สูตร 6362",
        "cal": 301
    },
    "grilled_chicken_6363": {
        "name": "ไก่ย่าง สูตร 6363",
        "cal": 201
    },
    "grilled_noodle_6364": {
        "name": "บะหมี่ย่าง สูตร 6364",
        "cal": 182
    },
    "grilled_rice_6365": {
        "name": "ข้าวย่าง สูตร 6365",
        "cal": 839
    },
    "stir_fried_chicken_6366": {
        "name": "ไก่ผัด สูตร 6366",
        "cal": 100
    },
    "spicy_fish_6367": {
        "name": "ปลายำ สูตร 6367",
        "cal": 67
    },
    "spicy_pork_6368": {
        "name": "หมูยำ สูตร 6368",
        "cal": 48
    },
    "spicy_shrimp_6369": {
        "name": "กุ้งยำ สูตร 6369",
        "cal": 239
    },
    "boiled_fish_6370": {
        "name": "ปลาต้ม สูตร 6370",
        "cal": 746
    },
    "fried_squid_6371": {
        "name": "ปลาหมึกทอด สูตร 6371",
        "cal": 27
    },
    "stir_fried_squid_6372": {
        "name": "ปลาหมึกผัด สูตร 6372",
        "cal": 80
    },
    "steamed_rice_6373": {
        "name": "ข้าวนึ่ง สูตร 6373",
        "cal": 79
    },
    "spicy_chicken_6374": {
        "name": "ไก่ยำ สูตร 6374",
        "cal": 791
    },
    "boiled_chicken_6375": {
        "name": "ไก่ต้ม สูตร 6375",
        "cal": 197
    },
    "spicy_chicken_6376": {
        "name": "ไก่ยำ สูตร 6376",
        "cal": 21
    },
    "boiled_pork_6377": {
        "name": "หมูต้ม สูตร 6377",
        "cal": 447
    },
    "boiled_squid_6378": {
        "name": "ปลาหมึกต้ม สูตร 6378",
        "cal": 544
    },
    "steamed_pork_6379": {
        "name": "หมูนึ่ง สูตร 6379",
        "cal": 750
    },
    "fried_soup_6380": {
        "name": "ซุปทอด สูตร 6380",
        "cal": 124
    },
    "spicy_pork_6381": {
        "name": "หมูยำ สูตร 6381",
        "cal": 561
    },
    "boiled_soup_6382": {
        "name": "ซุปต้ม สูตร 6382",
        "cal": 681
    },
    "spicy_soup_6383": {
        "name": "ซุปยำ สูตร 6383",
        "cal": 824
    },
    "steamed_chicken_6384": {
        "name": "ไก่นึ่ง สูตร 6384",
        "cal": 640
    },
    "stir_fried_rice_6385": {
        "name": "ข้าวผัด สูตร 6385",
        "cal": 447
    },
    "boiled_rice_6386": {
        "name": "ข้าวต้ม สูตร 6386",
        "cal": 560
    },
    "spicy_squid_6387": {
        "name": "ปลาหมึกยำ สูตร 6387",
        "cal": 103
    },
    "steamed_rice_6388": {
        "name": "ข้าวนึ่ง สูตร 6388",
        "cal": 273
    },
    "stir_fried_chicken_6389": {
        "name": "ไก่ผัด สูตร 6389",
        "cal": 826
    },
    "spicy_beef_6390": {
        "name": "เนื้อยำ สูตร 6390",
        "cal": 28
    },
    "fried_pork_6391": {
        "name": "หมูทอด สูตร 6391",
        "cal": 252
    },
    "spicy_chicken_6392": {
        "name": "ไก่ยำ สูตร 6392",
        "cal": 612
    },
    "fried_soup_6393": {
        "name": "ซุปทอด สูตร 6393",
        "cal": 602
    },
    "spicy_beef_6394": {
        "name": "เนื้อยำ สูตร 6394",
        "cal": 393
    },
    "fried_fish_6395": {
        "name": "ปลาทอด สูตร 6395",
        "cal": 684
    },
    "grilled_squid_6396": {
        "name": "ปลาหมึกย่าง สูตร 6396",
        "cal": 617
    },
    "boiled_beef_6397": {
        "name": "เนื้อต้ม สูตร 6397",
        "cal": 116
    },
    "grilled_rice_6398": {
        "name": "ข้าวย่าง สูตร 6398",
        "cal": 303
    },
    "fried_shrimp_6399": {
        "name": "กุ้งทอด สูตร 6399",
        "cal": 287
    },
    "fried_chicken_6400": {
        "name": "ไก่ทอด สูตร 6400",
        "cal": 308
    },
    "grilled_chicken_6401": {
        "name": "ไก่ย่าง สูตร 6401",
        "cal": 485
    },
    "fried_noodle_6402": {
        "name": "บะหมี่ทอด สูตร 6402",
        "cal": 493
    },
    "steamed_rice_6403": {
        "name": "ข้าวนึ่ง สูตร 6403",
        "cal": 752
    },
    "spicy_soup_6404": {
        "name": "ซุปยำ สูตร 6404",
        "cal": 80
    },
    "stir_fried_soup_6405": {
        "name": "ซุปผัด สูตร 6405",
        "cal": 415
    },
    "fried_beef_6406": {
        "name": "เนื้อทอด สูตร 6406",
        "cal": 820
    },
    "grilled_squid_6407": {
        "name": "ปลาหมึกย่าง สูตร 6407",
        "cal": 748
    },
    "grilled_soup_6408": {
        "name": "ซุปย่าง สูตร 6408",
        "cal": 847
    },
    "spicy_noodle_6409": {
        "name": "บะหมี่ยำ สูตร 6409",
        "cal": 706
    },
    "grilled_fish_6410": {
        "name": "ปลาย่าง สูตร 6410",
        "cal": 111
    },
    "grilled_soup_6411": {
        "name": "ซุปย่าง สูตร 6411",
        "cal": 297
    },
    "boiled_shrimp_6412": {
        "name": "กุ้งต้ม สูตร 6412",
        "cal": 790
    },
    "fried_beef_6413": {
        "name": "เนื้อทอด สูตร 6413",
        "cal": 768
    },
    "fried_shrimp_6414": {
        "name": "กุ้งทอด สูตร 6414",
        "cal": 326
    },
    "stir_fried_noodle_6415": {
        "name": "บะหมี่ผัด สูตร 6415",
        "cal": 440
    },
    "boiled_squid_6416": {
        "name": "ปลาหมึกต้ม สูตร 6416",
        "cal": 833
    },
    "steamed_fish_6417": {
        "name": "ปลานึ่ง สูตร 6417",
        "cal": 315
    },
    "fried_noodle_6418": {
        "name": "บะหมี่ทอด สูตร 6418",
        "cal": 197
    },
    "spicy_rice_6419": {
        "name": "ข้าวยำ สูตร 6419",
        "cal": 185
    },
    "boiled_squid_6420": {
        "name": "ปลาหมึกต้ม สูตร 6420",
        "cal": 844
    },
    "steamed_fish_6421": {
        "name": "ปลานึ่ง สูตร 6421",
        "cal": 69
    },
    "spicy_soup_6422": {
        "name": "ซุปยำ สูตร 6422",
        "cal": 274
    },
    "fried_beef_6423": {
        "name": "เนื้อทอด สูตร 6423",
        "cal": 746
    },
    "boiled_rice_6424": {
        "name": "ข้าวต้ม สูตร 6424",
        "cal": 652
    },
    "spicy_squid_6425": {
        "name": "ปลาหมึกยำ สูตร 6425",
        "cal": 194
    },
    "grilled_chicken_6426": {
        "name": "ไก่ย่าง สูตร 6426",
        "cal": 684
    },
    "grilled_chicken_6427": {
        "name": "ไก่ย่าง สูตร 6427",
        "cal": 580
    },
    "fried_pork_6428": {
        "name": "หมูทอด สูตร 6428",
        "cal": 428
    },
    "fried_noodle_6429": {
        "name": "บะหมี่ทอด สูตร 6429",
        "cal": 701
    },
    "fried_rice_6430": {
        "name": "ข้าวทอด สูตร 6430",
        "cal": 561
    },
    "boiled_fish_6431": {
        "name": "ปลาต้ม สูตร 6431",
        "cal": 599
    },
    "grilled_squid_6432": {
        "name": "ปลาหมึกย่าง สูตร 6432",
        "cal": 703
    },
    "stir_fried_chicken_6433": {
        "name": "ไก่ผัด สูตร 6433",
        "cal": 526
    },
    "fried_shrimp_6434": {
        "name": "กุ้งทอด สูตร 6434",
        "cal": 40
    },
    "spicy_rice_6435": {
        "name": "ข้าวยำ สูตร 6435",
        "cal": 549
    },
    "grilled_pork_6436": {
        "name": "หมูย่าง สูตร 6436",
        "cal": 832
    },
    "boiled_pork_6437": {
        "name": "หมูต้ม สูตร 6437",
        "cal": 651
    },
    "grilled_noodle_6438": {
        "name": "บะหมี่ย่าง สูตร 6438",
        "cal": 344
    },
    "spicy_fish_6439": {
        "name": "ปลายำ สูตร 6439",
        "cal": 85
    },
    "stir_fried_chicken_6440": {
        "name": "ไก่ผัด สูตร 6440",
        "cal": 838
    },
    "steamed_fish_6441": {
        "name": "ปลานึ่ง สูตร 6441",
        "cal": 553
    },
    "grilled_chicken_6442": {
        "name": "ไก่ย่าง สูตร 6442",
        "cal": 162
    },
    "fried_squid_6443": {
        "name": "ปลาหมึกทอด สูตร 6443",
        "cal": 802
    },
    "spicy_noodle_6444": {
        "name": "บะหมี่ยำ สูตร 6444",
        "cal": 482
    },
    "stir_fried_soup_6445": {
        "name": "ซุปผัด สูตร 6445",
        "cal": 477
    },
    "spicy_beef_6446": {
        "name": "เนื้อยำ สูตร 6446",
        "cal": 489
    },
    "stir_fried_beef_6447": {
        "name": "เนื้อผัด สูตร 6447",
        "cal": 517
    },
    "stir_fried_rice_6448": {
        "name": "ข้าวผัด สูตร 6448",
        "cal": 139
    },
    "grilled_chicken_6449": {
        "name": "ไก่ย่าง สูตร 6449",
        "cal": 463
    },
    "stir_fried_noodle_6450": {
        "name": "บะหมี่ผัด สูตร 6450",
        "cal": 519
    },
    "fried_beef_6451": {
        "name": "เนื้อทอด สูตร 6451",
        "cal": 418
    },
    "fried_fish_6452": {
        "name": "ปลาทอด สูตร 6452",
        "cal": 811
    },
    "steamed_shrimp_6453": {
        "name": "กุ้งนึ่ง สูตร 6453",
        "cal": 59
    },
    "fried_chicken_6454": {
        "name": "ไก่ทอด สูตร 6454",
        "cal": 382
    },
    "spicy_chicken_6455": {
        "name": "ไก่ยำ สูตร 6455",
        "cal": 347
    },
    "steamed_squid_6456": {
        "name": "ปลาหมึกนึ่ง สูตร 6456",
        "cal": 615
    },
    "steamed_fish_6457": {
        "name": "ปลานึ่ง สูตร 6457",
        "cal": 825
    },
    "steamed_shrimp_6458": {
        "name": "กุ้งนึ่ง สูตร 6458",
        "cal": 584
    },
    "steamed_chicken_6459": {
        "name": "ไก่นึ่ง สูตร 6459",
        "cal": 575
    },
    "stir_fried_chicken_6460": {
        "name": "ไก่ผัด สูตร 6460",
        "cal": 41
    },
    "grilled_rice_6461": {
        "name": "ข้าวย่าง สูตร 6461",
        "cal": 55
    },
    "boiled_rice_6462": {
        "name": "ข้าวต้ม สูตร 6462",
        "cal": 265
    },
    "grilled_shrimp_6463": {
        "name": "กุ้งย่าง สูตร 6463",
        "cal": 471
    },
    "spicy_noodle_6464": {
        "name": "บะหมี่ยำ สูตร 6464",
        "cal": 486
    },
    "fried_soup_6465": {
        "name": "ซุปทอด สูตร 6465",
        "cal": 57
    },
    "boiled_shrimp_6466": {
        "name": "กุ้งต้ม สูตร 6466",
        "cal": 415
    },
    "grilled_fish_6467": {
        "name": "ปลาย่าง สูตร 6467",
        "cal": 524
    },
    "stir_fried_fish_6468": {
        "name": "ปลาผัด สูตร 6468",
        "cal": 67
    },
    "boiled_rice_6469": {
        "name": "ข้าวต้ม สูตร 6469",
        "cal": 842
    },
    "boiled_fish_6470": {
        "name": "ปลาต้ม สูตร 6470",
        "cal": 706
    },
    "steamed_beef_6471": {
        "name": "เนื้อนึ่ง สูตร 6471",
        "cal": 77
    },
    "spicy_shrimp_6472": {
        "name": "กุ้งยำ สูตร 6472",
        "cal": 308
    },
    "stir_fried_squid_6473": {
        "name": "ปลาหมึกผัด สูตร 6473",
        "cal": 619
    },
    "spicy_rice_6474": {
        "name": "ข้าวยำ สูตร 6474",
        "cal": 81
    },
    "stir_fried_squid_6475": {
        "name": "ปลาหมึกผัด สูตร 6475",
        "cal": 69
    },
    "stir_fried_soup_6476": {
        "name": "ซุปผัด สูตร 6476",
        "cal": 817
    },
    "spicy_noodle_6477": {
        "name": "บะหมี่ยำ สูตร 6477",
        "cal": 517
    },
    "stir_fried_chicken_6478": {
        "name": "ไก่ผัด สูตร 6478",
        "cal": 125
    },
    "spicy_rice_6479": {
        "name": "ข้าวยำ สูตร 6479",
        "cal": 164
    },
    "fried_shrimp_6480": {
        "name": "กุ้งทอด สูตร 6480",
        "cal": 668
    },
    "boiled_rice_6481": {
        "name": "ข้าวต้ม สูตร 6481",
        "cal": 666
    },
    "fried_soup_6482": {
        "name": "ซุปทอด สูตร 6482",
        "cal": 719
    },
    "boiled_beef_6483": {
        "name": "เนื้อต้ม สูตร 6483",
        "cal": 64
    },
    "boiled_shrimp_6484": {
        "name": "กุ้งต้ม สูตร 6484",
        "cal": 639
    },
    "grilled_squid_6485": {
        "name": "ปลาหมึกย่าง สูตร 6485",
        "cal": 247
    },
    "fried_pork_6486": {
        "name": "หมูทอด สูตร 6486",
        "cal": 434
    },
    "boiled_soup_6487": {
        "name": "ซุปต้ม สูตร 6487",
        "cal": 496
    },
    "fried_rice_6488": {
        "name": "ข้าวทอด สูตร 6488",
        "cal": 174
    },
    "fried_shrimp_6489": {
        "name": "กุ้งทอด สูตร 6489",
        "cal": 537
    },
    "fried_chicken_6490": {
        "name": "ไก่ทอด สูตร 6490",
        "cal": 477
    },
    "grilled_squid_6491": {
        "name": "ปลาหมึกย่าง สูตร 6491",
        "cal": 91
    },
    "grilled_rice_6492": {
        "name": "ข้าวย่าง สูตร 6492",
        "cal": 176
    },
    "fried_pork_6493": {
        "name": "หมูทอด สูตร 6493",
        "cal": 25
    },
    "stir_fried_pork_6494": {
        "name": "หมูผัด สูตร 6494",
        "cal": 531
    },
    "stir_fried_shrimp_6495": {
        "name": "กุ้งผัด สูตร 6495",
        "cal": 216
    },
    "steamed_chicken_6496": {
        "name": "ไก่นึ่ง สูตร 6496",
        "cal": 262
    },
    "fried_chicken_6497": {
        "name": "ไก่ทอด สูตร 6497",
        "cal": 539
    },
    "spicy_fish_6498": {
        "name": "ปลายำ สูตร 6498",
        "cal": 672
    },
    "stir_fried_fish_6499": {
        "name": "ปลาผัด สูตร 6499",
        "cal": 205
    },
    "grilled_beef_6500": {
        "name": "เนื้อย่าง สูตร 6500",
        "cal": 793
    },
    "stir_fried_soup_6501": {
        "name": "ซุปผัด สูตร 6501",
        "cal": 85
    },
    "stir_fried_pork_6502": {
        "name": "หมูผัด สูตร 6502",
        "cal": 280
    },
    "fried_noodle_6503": {
        "name": "บะหมี่ทอด สูตร 6503",
        "cal": 668
    },
    "fried_shrimp_6504": {
        "name": "กุ้งทอด สูตร 6504",
        "cal": 709
    },
    "stir_fried_squid_6505": {
        "name": "ปลาหมึกผัด สูตร 6505",
        "cal": 615
    },
    "steamed_chicken_6506": {
        "name": "ไก่นึ่ง สูตร 6506",
        "cal": 112
    },
    "fried_shrimp_6507": {
        "name": "กุ้งทอด สูตร 6507",
        "cal": 647
    },
    "grilled_rice_6508": {
        "name": "ข้าวย่าง สูตร 6508",
        "cal": 83
    },
    "boiled_beef_6509": {
        "name": "เนื้อต้ม สูตร 6509",
        "cal": 284
    },
    "stir_fried_beef_6510": {
        "name": "เนื้อผัด สูตร 6510",
        "cal": 649
    },
    "spicy_soup_6511": {
        "name": "ซุปยำ สูตร 6511",
        "cal": 111
    },
    "boiled_shrimp_6512": {
        "name": "กุ้งต้ม สูตร 6512",
        "cal": 210
    },
    "stir_fried_chicken_6513": {
        "name": "ไก่ผัด สูตร 6513",
        "cal": 515
    },
    "fried_noodle_6514": {
        "name": "บะหมี่ทอด สูตร 6514",
        "cal": 385
    },
    "stir_fried_shrimp_6515": {
        "name": "กุ้งผัด สูตร 6515",
        "cal": 311
    },
    "grilled_squid_6516": {
        "name": "ปลาหมึกย่าง สูตร 6516",
        "cal": 632
    },
    "grilled_soup_6517": {
        "name": "ซุปย่าง สูตร 6517",
        "cal": 379
    },
    "stir_fried_noodle_6518": {
        "name": "บะหมี่ผัด สูตร 6518",
        "cal": 506
    },
    "fried_squid_6519": {
        "name": "ปลาหมึกทอด สูตร 6519",
        "cal": 521
    },
    "fried_pork_6520": {
        "name": "หมูทอด สูตร 6520",
        "cal": 384
    },
    "stir_fried_shrimp_6521": {
        "name": "กุ้งผัด สูตร 6521",
        "cal": 400
    },
    "fried_rice_6522": {
        "name": "ข้าวทอด สูตร 6522",
        "cal": 841
    },
    "grilled_chicken_6523": {
        "name": "ไก่ย่าง สูตร 6523",
        "cal": 689
    },
    "grilled_noodle_6524": {
        "name": "บะหมี่ย่าง สูตร 6524",
        "cal": 277
    },
    "boiled_shrimp_6525": {
        "name": "กุ้งต้ม สูตร 6525",
        "cal": 162
    },
    "grilled_beef_6526": {
        "name": "เนื้อย่าง สูตร 6526",
        "cal": 545
    },
    "grilled_beef_6527": {
        "name": "เนื้อย่าง สูตร 6527",
        "cal": 91
    },
    "fried_shrimp_6528": {
        "name": "กุ้งทอด สูตร 6528",
        "cal": 837
    },
    "stir_fried_noodle_6529": {
        "name": "บะหมี่ผัด สูตร 6529",
        "cal": 141
    },
    "steamed_rice_6530": {
        "name": "ข้าวนึ่ง สูตร 6530",
        "cal": 511
    },
    "spicy_noodle_6531": {
        "name": "บะหมี่ยำ สูตร 6531",
        "cal": 230
    },
    "spicy_shrimp_6532": {
        "name": "กุ้งยำ สูตร 6532",
        "cal": 278
    },
    "fried_soup_6533": {
        "name": "ซุปทอด สูตร 6533",
        "cal": 746
    },
    "boiled_noodle_6534": {
        "name": "บะหมี่ต้ม สูตร 6534",
        "cal": 284
    },
    "spicy_shrimp_6535": {
        "name": "กุ้งยำ สูตร 6535",
        "cal": 683
    },
    "grilled_noodle_6536": {
        "name": "บะหมี่ย่าง สูตร 6536",
        "cal": 722
    },
    "spicy_chicken_6537": {
        "name": "ไก่ยำ สูตร 6537",
        "cal": 90
    },
    "spicy_rice_6538": {
        "name": "ข้าวยำ สูตร 6538",
        "cal": 720
    },
    "fried_pork_6539": {
        "name": "หมูทอด สูตร 6539",
        "cal": 782
    },
    "stir_fried_squid_6540": {
        "name": "ปลาหมึกผัด สูตร 6540",
        "cal": 40
    },
    "steamed_squid_6541": {
        "name": "ปลาหมึกนึ่ง สูตร 6541",
        "cal": 126
    },
    "stir_fried_beef_6542": {
        "name": "เนื้อผัด สูตร 6542",
        "cal": 719
    },
    "fried_pork_6543": {
        "name": "หมูทอด สูตร 6543",
        "cal": 630
    },
    "fried_beef_6544": {
        "name": "เนื้อทอด สูตร 6544",
        "cal": 292
    },
    "steamed_beef_6545": {
        "name": "เนื้อนึ่ง สูตร 6545",
        "cal": 221
    },
    "steamed_chicken_6546": {
        "name": "ไก่นึ่ง สูตร 6546",
        "cal": 330
    },
    "spicy_squid_6547": {
        "name": "ปลาหมึกยำ สูตร 6547",
        "cal": 358
    },
    "steamed_shrimp_6548": {
        "name": "กุ้งนึ่ง สูตร 6548",
        "cal": 24
    },
    "grilled_rice_6549": {
        "name": "ข้าวย่าง สูตร 6549",
        "cal": 437
    },
    "spicy_squid_6550": {
        "name": "ปลาหมึกยำ สูตร 6550",
        "cal": 539
    },
    "grilled_pork_6551": {
        "name": "หมูย่าง สูตร 6551",
        "cal": 703
    },
    "stir_fried_pork_6552": {
        "name": "หมูผัด สูตร 6552",
        "cal": 31
    },
    "grilled_fish_6553": {
        "name": "ปลาย่าง สูตร 6553",
        "cal": 85
    },
    "grilled_beef_6554": {
        "name": "เนื้อย่าง สูตร 6554",
        "cal": 591
    },
    "spicy_shrimp_6555": {
        "name": "กุ้งยำ สูตร 6555",
        "cal": 770
    },
    "spicy_squid_6556": {
        "name": "ปลาหมึกยำ สูตร 6556",
        "cal": 91
    },
    "stir_fried_noodle_6557": {
        "name": "บะหมี่ผัด สูตร 6557",
        "cal": 300
    },
    "stir_fried_pork_6558": {
        "name": "หมูผัด สูตร 6558",
        "cal": 265
    },
    "steamed_shrimp_6559": {
        "name": "กุ้งนึ่ง สูตร 6559",
        "cal": 205
    },
    "stir_fried_shrimp_6560": {
        "name": "กุ้งผัด สูตร 6560",
        "cal": 509
    },
    "boiled_fish_6561": {
        "name": "ปลาต้ม สูตร 6561",
        "cal": 830
    },
    "stir_fried_pork_6562": {
        "name": "หมูผัด สูตร 6562",
        "cal": 278
    },
    "steamed_shrimp_6563": {
        "name": "กุ้งนึ่ง สูตร 6563",
        "cal": 275
    },
    "grilled_shrimp_6564": {
        "name": "กุ้งย่าง สูตร 6564",
        "cal": 160
    },
    "spicy_rice_6565": {
        "name": "ข้าวยำ สูตร 6565",
        "cal": 291
    },
    "steamed_squid_6566": {
        "name": "ปลาหมึกนึ่ง สูตร 6566",
        "cal": 268
    },
    "fried_shrimp_6567": {
        "name": "กุ้งทอด สูตร 6567",
        "cal": 767
    },
    "spicy_noodle_6568": {
        "name": "บะหมี่ยำ สูตร 6568",
        "cal": 840
    },
    "grilled_fish_6569": {
        "name": "ปลาย่าง สูตร 6569",
        "cal": 619
    },
    "stir_fried_pork_6570": {
        "name": "หมูผัด สูตร 6570",
        "cal": 686
    },
    "boiled_chicken_6571": {
        "name": "ไก่ต้ม สูตร 6571",
        "cal": 80
    },
    "spicy_noodle_6572": {
        "name": "บะหมี่ยำ สูตร 6572",
        "cal": 403
    },
    "grilled_pork_6573": {
        "name": "หมูย่าง สูตร 6573",
        "cal": 802
    },
    "fried_rice_6574": {
        "name": "ข้าวทอด สูตร 6574",
        "cal": 130
    },
    "stir_fried_fish_6575": {
        "name": "ปลาผัด สูตร 6575",
        "cal": 262
    },
    "spicy_squid_6576": {
        "name": "ปลาหมึกยำ สูตร 6576",
        "cal": 495
    },
    "grilled_shrimp_6577": {
        "name": "กุ้งย่าง สูตร 6577",
        "cal": 243
    },
    "fried_rice_6578": {
        "name": "ข้าวทอด สูตร 6578",
        "cal": 427
    },
    "boiled_shrimp_6579": {
        "name": "กุ้งต้ม สูตร 6579",
        "cal": 386
    },
    "stir_fried_chicken_6580": {
        "name": "ไก่ผัด สูตร 6580",
        "cal": 154
    },
    "grilled_beef_6581": {
        "name": "เนื้อย่าง สูตร 6581",
        "cal": 628
    },
    "grilled_noodle_6582": {
        "name": "บะหมี่ย่าง สูตร 6582",
        "cal": 440
    },
    "boiled_shrimp_6583": {
        "name": "กุ้งต้ม สูตร 6583",
        "cal": 53
    },
    "grilled_shrimp_6584": {
        "name": "กุ้งย่าง สูตร 6584",
        "cal": 171
    },
    "steamed_squid_6585": {
        "name": "ปลาหมึกนึ่ง สูตร 6585",
        "cal": 185
    },
    "grilled_noodle_6586": {
        "name": "บะหมี่ย่าง สูตร 6586",
        "cal": 204
    },
    "grilled_fish_6587": {
        "name": "ปลาย่าง สูตร 6587",
        "cal": 530
    },
    "steamed_noodle_6588": {
        "name": "บะหมี่นึ่ง สูตร 6588",
        "cal": 318
    },
    "fried_shrimp_6589": {
        "name": "กุ้งทอด สูตร 6589",
        "cal": 655
    },
    "spicy_beef_6590": {
        "name": "เนื้อยำ สูตร 6590",
        "cal": 625
    },
    "fried_squid_6591": {
        "name": "ปลาหมึกทอด สูตร 6591",
        "cal": 512
    },
    "fried_shrimp_6592": {
        "name": "กุ้งทอด สูตร 6592",
        "cal": 507
    },
    "grilled_beef_6593": {
        "name": "เนื้อย่าง สูตร 6593",
        "cal": 606
    },
    "fried_squid_6594": {
        "name": "ปลาหมึกทอด สูตร 6594",
        "cal": 676
    },
    "steamed_chicken_6595": {
        "name": "ไก่นึ่ง สูตร 6595",
        "cal": 372
    },
    "spicy_squid_6596": {
        "name": "ปลาหมึกยำ สูตร 6596",
        "cal": 383
    },
    "grilled_squid_6597": {
        "name": "ปลาหมึกย่าง สูตร 6597",
        "cal": 27
    },
    "steamed_squid_6598": {
        "name": "ปลาหมึกนึ่ง สูตร 6598",
        "cal": 596
    },
    "boiled_shrimp_6599": {
        "name": "กุ้งต้ม สูตร 6599",
        "cal": 767
    },
    "grilled_shrimp_6600": {
        "name": "กุ้งย่าง สูตร 6600",
        "cal": 525
    },
    "spicy_squid_6601": {
        "name": "ปลาหมึกยำ สูตร 6601",
        "cal": 821
    },
    "steamed_beef_6602": {
        "name": "เนื้อนึ่ง สูตร 6602",
        "cal": 635
    },
    "boiled_chicken_6603": {
        "name": "ไก่ต้ม สูตร 6603",
        "cal": 293
    },
    "steamed_squid_6604": {
        "name": "ปลาหมึกนึ่ง สูตร 6604",
        "cal": 270
    },
    "boiled_rice_6605": {
        "name": "ข้าวต้ม สูตร 6605",
        "cal": 421
    },
    "steamed_squid_6606": {
        "name": "ปลาหมึกนึ่ง สูตร 6606",
        "cal": 684
    },
    "boiled_pork_6607": {
        "name": "หมูต้ม สูตร 6607",
        "cal": 32
    },
    "steamed_pork_6608": {
        "name": "หมูนึ่ง สูตร 6608",
        "cal": 505
    },
    "boiled_soup_6609": {
        "name": "ซุปต้ม สูตร 6609",
        "cal": 449
    },
    "fried_chicken_6610": {
        "name": "ไก่ทอด สูตร 6610",
        "cal": 482
    },
    "fried_noodle_6611": {
        "name": "บะหมี่ทอด สูตร 6611",
        "cal": 723
    },
    "fried_soup_6612": {
        "name": "ซุปทอด สูตร 6612",
        "cal": 238
    },
    "steamed_noodle_6613": {
        "name": "บะหมี่นึ่ง สูตร 6613",
        "cal": 157
    },
    "stir_fried_noodle_6614": {
        "name": "บะหมี่ผัด สูตร 6614",
        "cal": 151
    },
    "steamed_noodle_6615": {
        "name": "บะหมี่นึ่ง สูตร 6615",
        "cal": 314
    },
    "grilled_rice_6616": {
        "name": "ข้าวย่าง สูตร 6616",
        "cal": 589
    },
    "grilled_beef_6617": {
        "name": "เนื้อย่าง สูตร 6617",
        "cal": 206
    },
    "steamed_chicken_6618": {
        "name": "ไก่นึ่ง สูตร 6618",
        "cal": 674
    },
    "grilled_noodle_6619": {
        "name": "บะหมี่ย่าง สูตร 6619",
        "cal": 768
    },
    "spicy_chicken_6620": {
        "name": "ไก่ยำ สูตร 6620",
        "cal": 89
    },
    "stir_fried_rice_6621": {
        "name": "ข้าวผัด สูตร 6621",
        "cal": 193
    },
    "grilled_noodle_6622": {
        "name": "บะหมี่ย่าง สูตร 6622",
        "cal": 143
    },
    "grilled_fish_6623": {
        "name": "ปลาย่าง สูตร 6623",
        "cal": 814
    },
    "grilled_beef_6624": {
        "name": "เนื้อย่าง สูตร 6624",
        "cal": 468
    },
    "boiled_pork_6625": {
        "name": "หมูต้ม สูตร 6625",
        "cal": 249
    },
    "fried_fish_6626": {
        "name": "ปลาทอด สูตร 6626",
        "cal": 101
    },
    "fried_fish_6627": {
        "name": "ปลาทอด สูตร 6627",
        "cal": 246
    },
    "steamed_noodle_6628": {
        "name": "บะหมี่นึ่ง สูตร 6628",
        "cal": 160
    },
    "stir_fried_chicken_6629": {
        "name": "ไก่ผัด สูตร 6629",
        "cal": 716
    },
    "fried_shrimp_6630": {
        "name": "กุ้งทอด สูตร 6630",
        "cal": 100
    },
    "spicy_chicken_6631": {
        "name": "ไก่ยำ สูตร 6631",
        "cal": 839
    },
    "boiled_beef_6632": {
        "name": "เนื้อต้ม สูตร 6632",
        "cal": 670
    },
    "fried_rice_6633": {
        "name": "ข้าวทอด สูตร 6633",
        "cal": 384
    },
    "grilled_chicken_6634": {
        "name": "ไก่ย่าง สูตร 6634",
        "cal": 400
    },
    "steamed_pork_6635": {
        "name": "หมูนึ่ง สูตร 6635",
        "cal": 757
    },
    "stir_fried_beef_6636": {
        "name": "เนื้อผัด สูตร 6636",
        "cal": 607
    },
    "grilled_fish_6637": {
        "name": "ปลาย่าง สูตร 6637",
        "cal": 622
    },
    "fried_squid_6638": {
        "name": "ปลาหมึกทอด สูตร 6638",
        "cal": 817
    },
    "grilled_noodle_6639": {
        "name": "บะหมี่ย่าง สูตร 6639",
        "cal": 95
    },
    "grilled_chicken_6640": {
        "name": "ไก่ย่าง สูตร 6640",
        "cal": 381
    },
    "stir_fried_soup_6641": {
        "name": "ซุปผัด สูตร 6641",
        "cal": 487
    },
    "steamed_squid_6642": {
        "name": "ปลาหมึกนึ่ง สูตร 6642",
        "cal": 304
    },
    "grilled_noodle_6643": {
        "name": "บะหมี่ย่าง สูตร 6643",
        "cal": 829
    },
    "boiled_squid_6644": {
        "name": "ปลาหมึกต้ม สูตร 6644",
        "cal": 350
    },
    "stir_fried_shrimp_6645": {
        "name": "กุ้งผัด สูตร 6645",
        "cal": 354
    },
    "stir_fried_squid_6646": {
        "name": "ปลาหมึกผัด สูตร 6646",
        "cal": 555
    },
    "stir_fried_rice_6647": {
        "name": "ข้าวผัด สูตร 6647",
        "cal": 673
    },
    "fried_pork_6648": {
        "name": "หมูทอด สูตร 6648",
        "cal": 767
    },
    "fried_rice_6649": {
        "name": "ข้าวทอด สูตร 6649",
        "cal": 665
    },
    "steamed_beef_6650": {
        "name": "เนื้อนึ่ง สูตร 6650",
        "cal": 712
    },
    "steamed_chicken_6651": {
        "name": "ไก่นึ่ง สูตร 6651",
        "cal": 324
    },
    "steamed_beef_6652": {
        "name": "เนื้อนึ่ง สูตร 6652",
        "cal": 49
    },
    "grilled_soup_6653": {
        "name": "ซุปย่าง สูตร 6653",
        "cal": 38
    },
    "fried_pork_6654": {
        "name": "หมูทอด สูตร 6654",
        "cal": 218
    },
    "fried_shrimp_6655": {
        "name": "กุ้งทอด สูตร 6655",
        "cal": 81
    },
    "fried_fish_6656": {
        "name": "ปลาทอด สูตร 6656",
        "cal": 272
    },
    "steamed_fish_6657": {
        "name": "ปลานึ่ง สูตร 6657",
        "cal": 455
    },
    "steamed_shrimp_6658": {
        "name": "กุ้งนึ่ง สูตร 6658",
        "cal": 262
    },
    "spicy_noodle_6659": {
        "name": "บะหมี่ยำ สูตร 6659",
        "cal": 508
    },
    "fried_pork_6660": {
        "name": "หมูทอด สูตร 6660",
        "cal": 205
    },
    "stir_fried_squid_6661": {
        "name": "ปลาหมึกผัด สูตร 6661",
        "cal": 619
    },
    "grilled_beef_6662": {
        "name": "เนื้อย่าง สูตร 6662",
        "cal": 238
    },
    "spicy_beef_6663": {
        "name": "เนื้อยำ สูตร 6663",
        "cal": 410
    },
    "fried_noodle_6664": {
        "name": "บะหมี่ทอด สูตร 6664",
        "cal": 647
    },
    "fried_chicken_6665": {
        "name": "ไก่ทอด สูตร 6665",
        "cal": 608
    },
    "spicy_squid_6666": {
        "name": "ปลาหมึกยำ สูตร 6666",
        "cal": 110
    },
    "boiled_beef_6667": {
        "name": "เนื้อต้ม สูตร 6667",
        "cal": 353
    },
    "steamed_rice_6668": {
        "name": "ข้าวนึ่ง สูตร 6668",
        "cal": 244
    },
    "grilled_noodle_6669": {
        "name": "บะหมี่ย่าง สูตร 6669",
        "cal": 201
    },
    "stir_fried_fish_6670": {
        "name": "ปลาผัด สูตร 6670",
        "cal": 530
    },
    "grilled_squid_6671": {
        "name": "ปลาหมึกย่าง สูตร 6671",
        "cal": 761
    },
    "fried_noodle_6672": {
        "name": "บะหมี่ทอด สูตร 6672",
        "cal": 485
    },
    "steamed_soup_6673": {
        "name": "ซุปนึ่ง สูตร 6673",
        "cal": 560
    },
    "fried_shrimp_6674": {
        "name": "กุ้งทอด สูตร 6674",
        "cal": 435
    },
    "stir_fried_squid_6675": {
        "name": "ปลาหมึกผัด สูตร 6675",
        "cal": 343
    },
    "grilled_noodle_6676": {
        "name": "บะหมี่ย่าง สูตร 6676",
        "cal": 553
    },
    "boiled_fish_6677": {
        "name": "ปลาต้ม สูตร 6677",
        "cal": 287
    },
    "spicy_fish_6678": {
        "name": "ปลายำ สูตร 6678",
        "cal": 64
    },
    "boiled_soup_6679": {
        "name": "ซุปต้ม สูตร 6679",
        "cal": 240
    },
    "stir_fried_noodle_6680": {
        "name": "บะหมี่ผัด สูตร 6680",
        "cal": 228
    },
    "grilled_soup_6681": {
        "name": "ซุปย่าง สูตร 6681",
        "cal": 677
    },
    "grilled_fish_6682": {
        "name": "ปลาย่าง สูตร 6682",
        "cal": 533
    },
    "spicy_rice_6683": {
        "name": "ข้าวยำ สูตร 6683",
        "cal": 626
    },
    "stir_fried_noodle_6684": {
        "name": "บะหมี่ผัด สูตร 6684",
        "cal": 652
    },
    "stir_fried_beef_6685": {
        "name": "เนื้อผัด สูตร 6685",
        "cal": 173
    },
    "spicy_noodle_6686": {
        "name": "บะหมี่ยำ สูตร 6686",
        "cal": 732
    },
    "stir_fried_chicken_6687": {
        "name": "ไก่ผัด สูตร 6687",
        "cal": 480
    },
    "steamed_shrimp_6688": {
        "name": "กุ้งนึ่ง สูตร 6688",
        "cal": 571
    },
    "stir_fried_squid_6689": {
        "name": "ปลาหมึกผัด สูตร 6689",
        "cal": 724
    },
    "spicy_chicken_6690": {
        "name": "ไก่ยำ สูตร 6690",
        "cal": 653
    },
    "stir_fried_noodle_6691": {
        "name": "บะหมี่ผัด สูตร 6691",
        "cal": 456
    },
    "grilled_chicken_6692": {
        "name": "ไก่ย่าง สูตร 6692",
        "cal": 96
    },
    "fried_squid_6693": {
        "name": "ปลาหมึกทอด สูตร 6693",
        "cal": 776
    },
    "stir_fried_pork_6694": {
        "name": "หมูผัด สูตร 6694",
        "cal": 164
    },
    "steamed_pork_6695": {
        "name": "หมูนึ่ง สูตร 6695",
        "cal": 21
    },
    "spicy_shrimp_6696": {
        "name": "กุ้งยำ สูตร 6696",
        "cal": 288
    },
    "fried_pork_6697": {
        "name": "หมูทอด สูตร 6697",
        "cal": 663
    },
    "grilled_beef_6698": {
        "name": "เนื้อย่าง สูตร 6698",
        "cal": 485
    },
    "spicy_noodle_6699": {
        "name": "บะหมี่ยำ สูตร 6699",
        "cal": 227
    },
    "grilled_shrimp_6700": {
        "name": "กุ้งย่าง สูตร 6700",
        "cal": 372
    },
    "spicy_squid_6701": {
        "name": "ปลาหมึกยำ สูตร 6701",
        "cal": 711
    },
    "grilled_chicken_6702": {
        "name": "ไก่ย่าง สูตร 6702",
        "cal": 732
    },
    "fried_pork_6703": {
        "name": "หมูทอด สูตร 6703",
        "cal": 766
    },
    "spicy_noodle_6704": {
        "name": "บะหมี่ยำ สูตร 6704",
        "cal": 113
    },
    "stir_fried_noodle_6705": {
        "name": "บะหมี่ผัด สูตร 6705",
        "cal": 542
    },
    "boiled_rice_6706": {
        "name": "ข้าวต้ม สูตร 6706",
        "cal": 368
    },
    "spicy_chicken_6707": {
        "name": "ไก่ยำ สูตร 6707",
        "cal": 519
    },
    "grilled_shrimp_6708": {
        "name": "กุ้งย่าง สูตร 6708",
        "cal": 337
    },
    "stir_fried_rice_6709": {
        "name": "ข้าวผัด สูตร 6709",
        "cal": 515
    },
    "stir_fried_chicken_6710": {
        "name": "ไก่ผัด สูตร 6710",
        "cal": 821
    },
    "steamed_chicken_6711": {
        "name": "ไก่นึ่ง สูตร 6711",
        "cal": 162
    },
    "grilled_shrimp_6712": {
        "name": "กุ้งย่าง สูตร 6712",
        "cal": 474
    },
    "steamed_fish_6713": {
        "name": "ปลานึ่ง สูตร 6713",
        "cal": 159
    },
    "boiled_fish_6714": {
        "name": "ปลาต้ม สูตร 6714",
        "cal": 295
    },
    "boiled_fish_6715": {
        "name": "ปลาต้ม สูตร 6715",
        "cal": 276
    },
    "boiled_noodle_6716": {
        "name": "บะหมี่ต้ม สูตร 6716",
        "cal": 196
    },
    "stir_fried_fish_6717": {
        "name": "ปลาผัด สูตร 6717",
        "cal": 317
    },
    "boiled_noodle_6718": {
        "name": "บะหมี่ต้ม สูตร 6718",
        "cal": 212
    },
    "spicy_pork_6719": {
        "name": "หมูยำ สูตร 6719",
        "cal": 458
    },
    "steamed_beef_6720": {
        "name": "เนื้อนึ่ง สูตร 6720",
        "cal": 233
    },
    "spicy_noodle_6721": {
        "name": "บะหมี่ยำ สูตร 6721",
        "cal": 556
    },
    "boiled_rice_6722": {
        "name": "ข้าวต้ม สูตร 6722",
        "cal": 28
    },
    "grilled_squid_6723": {
        "name": "ปลาหมึกย่าง สูตร 6723",
        "cal": 709
    },
    "stir_fried_beef_6724": {
        "name": "เนื้อผัด สูตร 6724",
        "cal": 571
    },
    "steamed_chicken_6725": {
        "name": "ไก่นึ่ง สูตร 6725",
        "cal": 430
    },
    "stir_fried_noodle_6726": {
        "name": "บะหมี่ผัด สูตร 6726",
        "cal": 562
    },
    "fried_pork_6727": {
        "name": "หมูทอด สูตร 6727",
        "cal": 152
    },
    "grilled_squid_6728": {
        "name": "ปลาหมึกย่าง สูตร 6728",
        "cal": 500
    },
    "spicy_soup_6729": {
        "name": "ซุปยำ สูตร 6729",
        "cal": 213
    },
    "steamed_pork_6730": {
        "name": "หมูนึ่ง สูตร 6730",
        "cal": 848
    },
    "stir_fried_squid_6731": {
        "name": "ปลาหมึกผัด สูตร 6731",
        "cal": 241
    },
    "fried_fish_6732": {
        "name": "ปลาทอด สูตร 6732",
        "cal": 247
    },
    "fried_beef_6733": {
        "name": "เนื้อทอด สูตร 6733",
        "cal": 736
    },
    "stir_fried_soup_6734": {
        "name": "ซุปผัด สูตร 6734",
        "cal": 195
    },
    "grilled_beef_6735": {
        "name": "เนื้อย่าง สูตร 6735",
        "cal": 497
    },
    "steamed_beef_6736": {
        "name": "เนื้อนึ่ง สูตร 6736",
        "cal": 740
    },
    "stir_fried_pork_6737": {
        "name": "หมูผัด สูตร 6737",
        "cal": 628
    },
    "steamed_squid_6738": {
        "name": "ปลาหมึกนึ่ง สูตร 6738",
        "cal": 230
    },
    "spicy_rice_6739": {
        "name": "ข้าวยำ สูตร 6739",
        "cal": 800
    },
    "grilled_beef_6740": {
        "name": "เนื้อย่าง สูตร 6740",
        "cal": 412
    },
    "fried_squid_6741": {
        "name": "ปลาหมึกทอด สูตร 6741",
        "cal": 472
    },
    "fried_beef_6742": {
        "name": "เนื้อทอด สูตร 6742",
        "cal": 260
    },
    "steamed_pork_6743": {
        "name": "หมูนึ่ง สูตร 6743",
        "cal": 326
    },
    "stir_fried_fish_6744": {
        "name": "ปลาผัด สูตร 6744",
        "cal": 409
    },
    "stir_fried_chicken_6745": {
        "name": "ไก่ผัด สูตร 6745",
        "cal": 118
    },
    "boiled_chicken_6746": {
        "name": "ไก่ต้ม สูตร 6746",
        "cal": 204
    },
    "spicy_pork_6747": {
        "name": "หมูยำ สูตร 6747",
        "cal": 165
    },
    "grilled_chicken_6748": {
        "name": "ไก่ย่าง สูตร 6748",
        "cal": 199
    },
    "fried_rice_6749": {
        "name": "ข้าวทอด สูตร 6749",
        "cal": 594
    },
    "fried_beef_6750": {
        "name": "เนื้อทอด สูตร 6750",
        "cal": 426
    },
    "fried_rice_6751": {
        "name": "ข้าวทอด สูตร 6751",
        "cal": 688
    },
    "fried_rice_6752": {
        "name": "ข้าวทอด สูตร 6752",
        "cal": 826
    },
    "spicy_shrimp_6753": {
        "name": "กุ้งยำ สูตร 6753",
        "cal": 267
    },
    "grilled_fish_6754": {
        "name": "ปลาย่าง สูตร 6754",
        "cal": 194
    },
    "grilled_beef_6755": {
        "name": "เนื้อย่าง สูตร 6755",
        "cal": 285
    },
    "grilled_fish_6756": {
        "name": "ปลาย่าง สูตร 6756",
        "cal": 555
    },
    "steamed_chicken_6757": {
        "name": "ไก่นึ่ง สูตร 6757",
        "cal": 444
    },
    "grilled_rice_6758": {
        "name": "ข้าวย่าง สูตร 6758",
        "cal": 607
    },
    "boiled_noodle_6759": {
        "name": "บะหมี่ต้ม สูตร 6759",
        "cal": 797
    },
    "fried_noodle_6760": {
        "name": "บะหมี่ทอด สูตร 6760",
        "cal": 248
    },
    "fried_rice_6761": {
        "name": "ข้าวทอด สูตร 6761",
        "cal": 293
    },
    "boiled_chicken_6762": {
        "name": "ไก่ต้ม สูตร 6762",
        "cal": 414
    },
    "grilled_pork_6763": {
        "name": "หมูย่าง สูตร 6763",
        "cal": 692
    },
    "grilled_noodle_6764": {
        "name": "บะหมี่ย่าง สูตร 6764",
        "cal": 756
    },
    "grilled_pork_6765": {
        "name": "หมูย่าง สูตร 6765",
        "cal": 26
    },
    "fried_shrimp_6766": {
        "name": "กุ้งทอด สูตร 6766",
        "cal": 643
    },
    "steamed_beef_6767": {
        "name": "เนื้อนึ่ง สูตร 6767",
        "cal": 90
    },
    "steamed_shrimp_6768": {
        "name": "กุ้งนึ่ง สูตร 6768",
        "cal": 289
    },
    "grilled_chicken_6769": {
        "name": "ไก่ย่าง สูตร 6769",
        "cal": 176
    },
    "stir_fried_rice_6770": {
        "name": "ข้าวผัด สูตร 6770",
        "cal": 369
    },
    "fried_rice_6771": {
        "name": "ข้าวทอด สูตร 6771",
        "cal": 450
    },
    "boiled_soup_6772": {
        "name": "ซุปต้ม สูตร 6772",
        "cal": 814
    },
    "stir_fried_pork_6773": {
        "name": "หมูผัด สูตร 6773",
        "cal": 52
    },
    "grilled_soup_6774": {
        "name": "ซุปย่าง สูตร 6774",
        "cal": 21
    },
    "grilled_noodle_6775": {
        "name": "บะหมี่ย่าง สูตร 6775",
        "cal": 71
    },
    "fried_soup_6776": {
        "name": "ซุปทอด สูตร 6776",
        "cal": 722
    },
    "grilled_soup_6777": {
        "name": "ซุปย่าง สูตร 6777",
        "cal": 356
    },
    "steamed_noodle_6778": {
        "name": "บะหมี่นึ่ง สูตร 6778",
        "cal": 146
    },
    "boiled_fish_6779": {
        "name": "ปลาต้ม สูตร 6779",
        "cal": 724
    },
    "stir_fried_squid_6780": {
        "name": "ปลาหมึกผัด สูตร 6780",
        "cal": 641
    },
    "boiled_chicken_6781": {
        "name": "ไก่ต้ม สูตร 6781",
        "cal": 592
    },
    "grilled_soup_6782": {
        "name": "ซุปย่าง สูตร 6782",
        "cal": 653
    },
    "fried_chicken_6783": {
        "name": "ไก่ทอด สูตร 6783",
        "cal": 623
    },
    "steamed_pork_6784": {
        "name": "หมูนึ่ง สูตร 6784",
        "cal": 525
    },
    "grilled_squid_6785": {
        "name": "ปลาหมึกย่าง สูตร 6785",
        "cal": 52
    },
    "boiled_fish_6786": {
        "name": "ปลาต้ม สูตร 6786",
        "cal": 190
    },
    "grilled_pork_6787": {
        "name": "หมูย่าง สูตร 6787",
        "cal": 290
    },
    "fried_noodle_6788": {
        "name": "บะหมี่ทอด สูตร 6788",
        "cal": 720
    },
    "boiled_shrimp_6789": {
        "name": "กุ้งต้ม สูตร 6789",
        "cal": 520
    },
    "fried_pork_6790": {
        "name": "หมูทอด สูตร 6790",
        "cal": 445
    },
    "stir_fried_chicken_6791": {
        "name": "ไก่ผัด สูตร 6791",
        "cal": 610
    },
    "steamed_beef_6792": {
        "name": "เนื้อนึ่ง สูตร 6792",
        "cal": 216
    },
    "boiled_rice_6793": {
        "name": "ข้าวต้ม สูตร 6793",
        "cal": 792
    },
    "spicy_pork_6794": {
        "name": "หมูยำ สูตร 6794",
        "cal": 129
    },
    "grilled_squid_6795": {
        "name": "ปลาหมึกย่าง สูตร 6795",
        "cal": 540
    },
    "grilled_beef_6796": {
        "name": "เนื้อย่าง สูตร 6796",
        "cal": 825
    },
    "steamed_soup_6797": {
        "name": "ซุปนึ่ง สูตร 6797",
        "cal": 278
    },
    "spicy_fish_6798": {
        "name": "ปลายำ สูตร 6798",
        "cal": 834
    },
    "boiled_rice_6799": {
        "name": "ข้าวต้ม สูตร 6799",
        "cal": 499
    },
    "grilled_rice_6800": {
        "name": "ข้าวย่าง สูตร 6800",
        "cal": 743
    },
    "grilled_rice_6801": {
        "name": "ข้าวย่าง สูตร 6801",
        "cal": 379
    },
    "spicy_soup_6802": {
        "name": "ซุปยำ สูตร 6802",
        "cal": 655
    },
    "stir_fried_fish_6803": {
        "name": "ปลาผัด สูตร 6803",
        "cal": 244
    },
    "spicy_pork_6804": {
        "name": "หมูยำ สูตร 6804",
        "cal": 158
    },
    "fried_squid_6805": {
        "name": "ปลาหมึกทอด สูตร 6805",
        "cal": 160
    },
    "grilled_fish_6806": {
        "name": "ปลาย่าง สูตร 6806",
        "cal": 568
    },
    "spicy_squid_6807": {
        "name": "ปลาหมึกยำ สูตร 6807",
        "cal": 348
    },
    "stir_fried_beef_6808": {
        "name": "เนื้อผัด สูตร 6808",
        "cal": 530
    },
    "steamed_fish_6809": {
        "name": "ปลานึ่ง สูตร 6809",
        "cal": 44
    },
    "spicy_pork_6810": {
        "name": "หมูยำ สูตร 6810",
        "cal": 102
    },
    "stir_fried_rice_6811": {
        "name": "ข้าวผัด สูตร 6811",
        "cal": 290
    },
    "boiled_fish_6812": {
        "name": "ปลาต้ม สูตร 6812",
        "cal": 399
    },
    "stir_fried_noodle_6813": {
        "name": "บะหมี่ผัด สูตร 6813",
        "cal": 638
    },
    "boiled_fish_6814": {
        "name": "ปลาต้ม สูตร 6814",
        "cal": 647
    },
    "boiled_pork_6815": {
        "name": "หมูต้ม สูตร 6815",
        "cal": 723
    },
    "boiled_pork_6816": {
        "name": "หมูต้ม สูตร 6816",
        "cal": 403
    },
    "spicy_noodle_6817": {
        "name": "บะหมี่ยำ สูตร 6817",
        "cal": 767
    },
    "fried_noodle_6818": {
        "name": "บะหมี่ทอด สูตร 6818",
        "cal": 794
    },
    "grilled_shrimp_6819": {
        "name": "กุ้งย่าง สูตร 6819",
        "cal": 522
    },
    "fried_pork_6820": {
        "name": "หมูทอด สูตร 6820",
        "cal": 105
    },
    "grilled_rice_6821": {
        "name": "ข้าวย่าง สูตร 6821",
        "cal": 373
    },
    "spicy_rice_6822": {
        "name": "ข้าวยำ สูตร 6822",
        "cal": 663
    },
    "grilled_beef_6823": {
        "name": "เนื้อย่าง สูตร 6823",
        "cal": 320
    },
    "boiled_shrimp_6824": {
        "name": "กุ้งต้ม สูตร 6824",
        "cal": 842
    },
    "grilled_rice_6825": {
        "name": "ข้าวย่าง สูตร 6825",
        "cal": 51
    },
    "stir_fried_soup_6826": {
        "name": "ซุปผัด สูตร 6826",
        "cal": 352
    },
    "stir_fried_squid_6827": {
        "name": "ปลาหมึกผัด สูตร 6827",
        "cal": 350
    },
    "steamed_noodle_6828": {
        "name": "บะหมี่นึ่ง สูตร 6828",
        "cal": 833
    },
    "fried_soup_6829": {
        "name": "ซุปทอด สูตร 6829",
        "cal": 401
    },
    "spicy_shrimp_6830": {
        "name": "กุ้งยำ สูตร 6830",
        "cal": 498
    },
    "spicy_fish_6831": {
        "name": "ปลายำ สูตร 6831",
        "cal": 98
    },
    "boiled_squid_6832": {
        "name": "ปลาหมึกต้ม สูตร 6832",
        "cal": 783
    },
    "grilled_soup_6833": {
        "name": "ซุปย่าง สูตร 6833",
        "cal": 27
    },
    "grilled_soup_6834": {
        "name": "ซุปย่าง สูตร 6834",
        "cal": 257
    },
    "spicy_noodle_6835": {
        "name": "บะหมี่ยำ สูตร 6835",
        "cal": 459
    },
    "spicy_chicken_6836": {
        "name": "ไก่ยำ สูตร 6836",
        "cal": 453
    },
    "boiled_soup_6837": {
        "name": "ซุปต้ม สูตร 6837",
        "cal": 603
    },
    "steamed_rice_6838": {
        "name": "ข้าวนึ่ง สูตร 6838",
        "cal": 150
    },
    "steamed_pork_6839": {
        "name": "หมูนึ่ง สูตร 6839",
        "cal": 391
    },
    "stir_fried_shrimp_6840": {
        "name": "กุ้งผัด สูตร 6840",
        "cal": 184
    },
    "grilled_beef_6841": {
        "name": "เนื้อย่าง สูตร 6841",
        "cal": 760
    },
    "grilled_noodle_6842": {
        "name": "บะหมี่ย่าง สูตร 6842",
        "cal": 157
    },
    "spicy_fish_6843": {
        "name": "ปลายำ สูตร 6843",
        "cal": 105
    },
    "steamed_chicken_6844": {
        "name": "ไก่นึ่ง สูตร 6844",
        "cal": 454
    },
    "fried_beef_6845": {
        "name": "เนื้อทอด สูตร 6845",
        "cal": 407
    },
    "grilled_noodle_6846": {
        "name": "บะหมี่ย่าง สูตร 6846",
        "cal": 566
    },
    "spicy_soup_6847": {
        "name": "ซุปยำ สูตร 6847",
        "cal": 797
    },
    "fried_soup_6848": {
        "name": "ซุปทอด สูตร 6848",
        "cal": 704
    },
    "steamed_beef_6849": {
        "name": "เนื้อนึ่ง สูตร 6849",
        "cal": 830
    },
    "steamed_squid_6850": {
        "name": "ปลาหมึกนึ่ง สูตร 6850",
        "cal": 159
    },
    "boiled_fish_6851": {
        "name": "ปลาต้ม สูตร 6851",
        "cal": 483
    },
    "stir_fried_chicken_6852": {
        "name": "ไก่ผัด สูตร 6852",
        "cal": 100
    },
    "spicy_shrimp_6853": {
        "name": "กุ้งยำ สูตร 6853",
        "cal": 655
    },
    "steamed_rice_6854": {
        "name": "ข้าวนึ่ง สูตร 6854",
        "cal": 526
    },
    "stir_fried_shrimp_6855": {
        "name": "กุ้งผัด สูตร 6855",
        "cal": 740
    },
    "stir_fried_fish_6856": {
        "name": "ปลาผัด สูตร 6856",
        "cal": 210
    },
    "spicy_squid_6857": {
        "name": "ปลาหมึกยำ สูตร 6857",
        "cal": 333
    },
    "fried_chicken_6858": {
        "name": "ไก่ทอด สูตร 6858",
        "cal": 104
    },
    "boiled_noodle_6859": {
        "name": "บะหมี่ต้ม สูตร 6859",
        "cal": 692
    },
    "stir_fried_chicken_6860": {
        "name": "ไก่ผัด สูตร 6860",
        "cal": 254
    },
    "stir_fried_fish_6861": {
        "name": "ปลาผัด สูตร 6861",
        "cal": 85
    },
    "fried_pork_6862": {
        "name": "หมูทอด สูตร 6862",
        "cal": 71
    },
    "fried_squid_6863": {
        "name": "ปลาหมึกทอด สูตร 6863",
        "cal": 738
    },
    "fried_pork_6864": {
        "name": "หมูทอด สูตร 6864",
        "cal": 507
    },
    "steamed_fish_6865": {
        "name": "ปลานึ่ง สูตร 6865",
        "cal": 495
    },
    "spicy_rice_6866": {
        "name": "ข้าวยำ สูตร 6866",
        "cal": 465
    },
    "fried_squid_6867": {
        "name": "ปลาหมึกทอด สูตร 6867",
        "cal": 804
    },
    "fried_chicken_6868": {
        "name": "ไก่ทอด สูตร 6868",
        "cal": 79
    },
    "grilled_pork_6869": {
        "name": "หมูย่าง สูตร 6869",
        "cal": 681
    },
    "boiled_noodle_6870": {
        "name": "บะหมี่ต้ม สูตร 6870",
        "cal": 85
    },
    "stir_fried_pork_6871": {
        "name": "หมูผัด สูตร 6871",
        "cal": 71
    },
    "grilled_chicken_6872": {
        "name": "ไก่ย่าง สูตร 6872",
        "cal": 198
    },
    "spicy_chicken_6873": {
        "name": "ไก่ยำ สูตร 6873",
        "cal": 614
    },
    "stir_fried_noodle_6874": {
        "name": "บะหมี่ผัด สูตร 6874",
        "cal": 305
    },
    "steamed_fish_6875": {
        "name": "ปลานึ่ง สูตร 6875",
        "cal": 84
    },
    "boiled_squid_6876": {
        "name": "ปลาหมึกต้ม สูตร 6876",
        "cal": 489
    },
    "stir_fried_shrimp_6877": {
        "name": "กุ้งผัด สูตร 6877",
        "cal": 137
    },
    "grilled_shrimp_6878": {
        "name": "กุ้งย่าง สูตร 6878",
        "cal": 361
    },
    "stir_fried_beef_6879": {
        "name": "เนื้อผัด สูตร 6879",
        "cal": 304
    },
    "fried_soup_6880": {
        "name": "ซุปทอด สูตร 6880",
        "cal": 114
    },
    "steamed_soup_6881": {
        "name": "ซุปนึ่ง สูตร 6881",
        "cal": 90
    },
    "steamed_chicken_6882": {
        "name": "ไก่นึ่ง สูตร 6882",
        "cal": 309
    },
    "stir_fried_fish_6883": {
        "name": "ปลาผัด สูตร 6883",
        "cal": 448
    },
    "stir_fried_beef_6884": {
        "name": "เนื้อผัด สูตร 6884",
        "cal": 282
    },
    "fried_soup_6885": {
        "name": "ซุปทอด สูตร 6885",
        "cal": 20
    },
    "spicy_squid_6886": {
        "name": "ปลาหมึกยำ สูตร 6886",
        "cal": 556
    },
    "fried_soup_6887": {
        "name": "ซุปทอด สูตร 6887",
        "cal": 427
    },
    "steamed_shrimp_6888": {
        "name": "กุ้งนึ่ง สูตร 6888",
        "cal": 78
    },
    "spicy_shrimp_6889": {
        "name": "กุ้งยำ สูตร 6889",
        "cal": 704
    },
    "fried_fish_6890": {
        "name": "ปลาทอด สูตร 6890",
        "cal": 502
    },
    "fried_fish_6891": {
        "name": "ปลาทอด สูตร 6891",
        "cal": 298
    },
    "grilled_pork_6892": {
        "name": "หมูย่าง สูตร 6892",
        "cal": 373
    },
    "grilled_noodle_6893": {
        "name": "บะหมี่ย่าง สูตร 6893",
        "cal": 423
    },
    "boiled_soup_6894": {
        "name": "ซุปต้ม สูตร 6894",
        "cal": 444
    },
    "steamed_soup_6895": {
        "name": "ซุปนึ่ง สูตร 6895",
        "cal": 296
    },
    "grilled_soup_6896": {
        "name": "ซุปย่าง สูตร 6896",
        "cal": 143
    },
    "stir_fried_fish_6897": {
        "name": "ปลาผัด สูตร 6897",
        "cal": 375
    },
    "steamed_squid_6898": {
        "name": "ปลาหมึกนึ่ง สูตร 6898",
        "cal": 402
    },
    "fried_soup_6899": {
        "name": "ซุปทอด สูตร 6899",
        "cal": 258
    },
    "stir_fried_pork_6900": {
        "name": "หมูผัด สูตร 6900",
        "cal": 95
    },
    "stir_fried_squid_6901": {
        "name": "ปลาหมึกผัด สูตร 6901",
        "cal": 74
    },
    "boiled_soup_6902": {
        "name": "ซุปต้ม สูตร 6902",
        "cal": 222
    },
    "grilled_shrimp_6903": {
        "name": "กุ้งย่าง สูตร 6903",
        "cal": 514
    },
    "spicy_beef_6904": {
        "name": "เนื้อยำ สูตร 6904",
        "cal": 609
    },
    "fried_rice_6905": {
        "name": "ข้าวทอด สูตร 6905",
        "cal": 148
    },
    "grilled_chicken_6906": {
        "name": "ไก่ย่าง สูตร 6906",
        "cal": 717
    },
    "steamed_soup_6907": {
        "name": "ซุปนึ่ง สูตร 6907",
        "cal": 705
    },
    "stir_fried_pork_6908": {
        "name": "หมูผัด สูตร 6908",
        "cal": 697
    },
    "spicy_rice_6909": {
        "name": "ข้าวยำ สูตร 6909",
        "cal": 84
    },
    "fried_rice_6910": {
        "name": "ข้าวทอด สูตร 6910",
        "cal": 570
    },
    "stir_fried_squid_6911": {
        "name": "ปลาหมึกผัด สูตร 6911",
        "cal": 584
    },
    "grilled_soup_6912": {
        "name": "ซุปย่าง สูตร 6912",
        "cal": 168
    },
    "spicy_squid_6913": {
        "name": "ปลาหมึกยำ สูตร 6913",
        "cal": 433
    },
    "boiled_noodle_6914": {
        "name": "บะหมี่ต้ม สูตร 6914",
        "cal": 383
    },
    "grilled_soup_6915": {
        "name": "ซุปย่าง สูตร 6915",
        "cal": 510
    },
    "grilled_fish_6916": {
        "name": "ปลาย่าง สูตร 6916",
        "cal": 213
    },
    "grilled_shrimp_6917": {
        "name": "กุ้งย่าง สูตร 6917",
        "cal": 101
    },
    "grilled_rice_6918": {
        "name": "ข้าวย่าง สูตร 6918",
        "cal": 400
    },
    "fried_chicken_6919": {
        "name": "ไก่ทอด สูตร 6919",
        "cal": 657
    },
    "stir_fried_soup_6920": {
        "name": "ซุปผัด สูตร 6920",
        "cal": 708
    },
    "spicy_noodle_6921": {
        "name": "บะหมี่ยำ สูตร 6921",
        "cal": 626
    },
    "grilled_rice_6922": {
        "name": "ข้าวย่าง สูตร 6922",
        "cal": 640
    },
    "stir_fried_chicken_6923": {
        "name": "ไก่ผัด สูตร 6923",
        "cal": 224
    },
    "spicy_noodle_6924": {
        "name": "บะหมี่ยำ สูตร 6924",
        "cal": 347
    },
    "fried_fish_6925": {
        "name": "ปลาทอด สูตร 6925",
        "cal": 836
    },
    "stir_fried_rice_6926": {
        "name": "ข้าวผัด สูตร 6926",
        "cal": 114
    },
    "spicy_rice_6927": {
        "name": "ข้าวยำ สูตร 6927",
        "cal": 283
    },
    "spicy_pork_6928": {
        "name": "หมูยำ สูตร 6928",
        "cal": 652
    },
    "fried_soup_6929": {
        "name": "ซุปทอด สูตร 6929",
        "cal": 706
    },
    "steamed_fish_6930": {
        "name": "ปลานึ่ง สูตร 6930",
        "cal": 359
    },
    "fried_noodle_6931": {
        "name": "บะหมี่ทอด สูตร 6931",
        "cal": 463
    },
    "fried_fish_6932": {
        "name": "ปลาทอด สูตร 6932",
        "cal": 425
    },
    "stir_fried_fish_6933": {
        "name": "ปลาผัด สูตร 6933",
        "cal": 579
    },
    "boiled_beef_6934": {
        "name": "เนื้อต้ม สูตร 6934",
        "cal": 614
    },
    "spicy_noodle_6935": {
        "name": "บะหมี่ยำ สูตร 6935",
        "cal": 264
    },
    "fried_soup_6936": {
        "name": "ซุปทอด สูตร 6936",
        "cal": 755
    },
    "boiled_beef_6937": {
        "name": "เนื้อต้ม สูตร 6937",
        "cal": 45
    },
    "stir_fried_shrimp_6938": {
        "name": "กุ้งผัด สูตร 6938",
        "cal": 288
    },
    "steamed_soup_6939": {
        "name": "ซุปนึ่ง สูตร 6939",
        "cal": 444
    },
    "grilled_rice_6940": {
        "name": "ข้าวย่าง สูตร 6940",
        "cal": 539
    },
    "spicy_fish_6941": {
        "name": "ปลายำ สูตร 6941",
        "cal": 508
    },
    "spicy_squid_6942": {
        "name": "ปลาหมึกยำ สูตร 6942",
        "cal": 120
    },
    "stir_fried_soup_6943": {
        "name": "ซุปผัด สูตร 6943",
        "cal": 246
    },
    "fried_shrimp_6944": {
        "name": "กุ้งทอด สูตร 6944",
        "cal": 127
    },
    "boiled_fish_6945": {
        "name": "ปลาต้ม สูตร 6945",
        "cal": 360
    },
    "fried_squid_6946": {
        "name": "ปลาหมึกทอด สูตร 6946",
        "cal": 165
    },
    "grilled_noodle_6947": {
        "name": "บะหมี่ย่าง สูตร 6947",
        "cal": 387
    },
    "spicy_chicken_6948": {
        "name": "ไก่ยำ สูตร 6948",
        "cal": 814
    },
    "boiled_squid_6949": {
        "name": "ปลาหมึกต้ม สูตร 6949",
        "cal": 356
    },
    "steamed_fish_6950": {
        "name": "ปลานึ่ง สูตร 6950",
        "cal": 554
    },
    "boiled_pork_6951": {
        "name": "หมูต้ม สูตร 6951",
        "cal": 329
    },
    "spicy_soup_6952": {
        "name": "ซุปยำ สูตร 6952",
        "cal": 128
    },
    "spicy_beef_6953": {
        "name": "เนื้อยำ สูตร 6953",
        "cal": 347
    },
    "spicy_rice_6954": {
        "name": "ข้าวยำ สูตร 6954",
        "cal": 54
    },
    "boiled_squid_6955": {
        "name": "ปลาหมึกต้ม สูตร 6955",
        "cal": 649
    },
    "spicy_noodle_6956": {
        "name": "บะหมี่ยำ สูตร 6956",
        "cal": 145
    },
    "spicy_shrimp_6957": {
        "name": "กุ้งยำ สูตร 6957",
        "cal": 47
    },
    "boiled_soup_6958": {
        "name": "ซุปต้ม สูตร 6958",
        "cal": 318
    },
    "boiled_beef_6959": {
        "name": "เนื้อต้ม สูตร 6959",
        "cal": 88
    },
    "stir_fried_chicken_6960": {
        "name": "ไก่ผัด สูตร 6960",
        "cal": 716
    },
    "stir_fried_noodle_6961": {
        "name": "บะหมี่ผัด สูตร 6961",
        "cal": 653
    },
    "stir_fried_noodle_6962": {
        "name": "บะหมี่ผัด สูตร 6962",
        "cal": 159
    },
    "boiled_rice_6963": {
        "name": "ข้าวต้ม สูตร 6963",
        "cal": 413
    },
    "boiled_chicken_6964": {
        "name": "ไก่ต้ม สูตร 6964",
        "cal": 546
    },
    "stir_fried_shrimp_6965": {
        "name": "กุ้งผัด สูตร 6965",
        "cal": 292
    },
    "grilled_pork_6966": {
        "name": "หมูย่าง สูตร 6966",
        "cal": 654
    },
    "stir_fried_soup_6967": {
        "name": "ซุปผัด สูตร 6967",
        "cal": 507
    },
    "stir_fried_rice_6968": {
        "name": "ข้าวผัด สูตร 6968",
        "cal": 673
    },
    "grilled_soup_6969": {
        "name": "ซุปย่าง สูตร 6969",
        "cal": 415
    },
    "steamed_squid_6970": {
        "name": "ปลาหมึกนึ่ง สูตร 6970",
        "cal": 551
    },
    "steamed_pork_6971": {
        "name": "หมูนึ่ง สูตร 6971",
        "cal": 618
    },
    "spicy_pork_6972": {
        "name": "หมูยำ สูตร 6972",
        "cal": 835
    },
    "grilled_noodle_6973": {
        "name": "บะหมี่ย่าง สูตร 6973",
        "cal": 390
    },
    "spicy_pork_6974": {
        "name": "หมูยำ สูตร 6974",
        "cal": 131
    },
    "spicy_shrimp_6975": {
        "name": "กุ้งยำ สูตร 6975",
        "cal": 675
    },
    "boiled_pork_6976": {
        "name": "หมูต้ม สูตร 6976",
        "cal": 223
    },
    "grilled_noodle_6977": {
        "name": "บะหมี่ย่าง สูตร 6977",
        "cal": 266
    },
    "stir_fried_squid_6978": {
        "name": "ปลาหมึกผัด สูตร 6978",
        "cal": 564
    },
    "stir_fried_soup_6979": {
        "name": "ซุปผัด สูตร 6979",
        "cal": 566
    },
    "steamed_shrimp_6980": {
        "name": "กุ้งนึ่ง สูตร 6980",
        "cal": 300
    },
    "grilled_soup_6981": {
        "name": "ซุปย่าง สูตร 6981",
        "cal": 78
    },
    "grilled_soup_6982": {
        "name": "ซุปย่าง สูตร 6982",
        "cal": 584
    },
    "boiled_shrimp_6983": {
        "name": "กุ้งต้ม สูตร 6983",
        "cal": 504
    },
    "spicy_chicken_6984": {
        "name": "ไก่ยำ สูตร 6984",
        "cal": 485
    },
    "grilled_pork_6985": {
        "name": "หมูย่าง สูตร 6985",
        "cal": 399
    },
    "spicy_rice_6986": {
        "name": "ข้าวยำ สูตร 6986",
        "cal": 741
    },
    "grilled_fish_6987": {
        "name": "ปลาย่าง สูตร 6987",
        "cal": 760
    },
    "boiled_noodle_6988": {
        "name": "บะหมี่ต้ม สูตร 6988",
        "cal": 706
    },
    "stir_fried_squid_6989": {
        "name": "ปลาหมึกผัด สูตร 6989",
        "cal": 811
    },
    "boiled_chicken_6990": {
        "name": "ไก่ต้ม สูตร 6990",
        "cal": 194
    },
    "spicy_pork_6991": {
        "name": "หมูยำ สูตร 6991",
        "cal": 191
    },
    "steamed_soup_6992": {
        "name": "ซุปนึ่ง สูตร 6992",
        "cal": 508
    },
    "steamed_soup_6993": {
        "name": "ซุปนึ่ง สูตร 6993",
        "cal": 347
    },
    "grilled_squid_6994": {
        "name": "ปลาหมึกย่าง สูตร 6994",
        "cal": 616
    },
    "fried_fish_6995": {
        "name": "ปลาทอด สูตร 6995",
        "cal": 507
    },
    "stir_fried_fish_6996": {
        "name": "ปลาผัด สูตร 6996",
        "cal": 649
    },
    "grilled_chicken_6997": {
        "name": "ไก่ย่าง สูตร 6997",
        "cal": 235
    },
    "stir_fried_squid_6998": {
        "name": "ปลาหมึกผัด สูตร 6998",
        "cal": 549
    },
    "steamed_fish_6999": {
        "name": "ปลานึ่ง สูตร 6999",
        "cal": 482
    },
    "stir_fried_fish_7000": {
        "name": "ปลาผัด สูตร 7000",
        "cal": 769
    },
    "fried_shrimp_7001": {
        "name": "กุ้งทอด สูตร 7001",
        "cal": 788
    },
    "fried_fish_7002": {
        "name": "ปลาทอด สูตร 7002",
        "cal": 301
    },
    "stir_fried_noodle_7003": {
        "name": "บะหมี่ผัด สูตร 7003",
        "cal": 711
    },
    "boiled_squid_7004": {
        "name": "ปลาหมึกต้ม สูตร 7004",
        "cal": 246
    },
    "spicy_shrimp_7005": {
        "name": "กุ้งยำ สูตร 7005",
        "cal": 811
    },
    "spicy_fish_7006": {
        "name": "ปลายำ สูตร 7006",
        "cal": 550
    },
    "boiled_beef_7007": {
        "name": "เนื้อต้ม สูตร 7007",
        "cal": 794
    },
    "grilled_pork_7008": {
        "name": "หมูย่าง สูตร 7008",
        "cal": 360
    },
    "spicy_beef_7009": {
        "name": "เนื้อยำ สูตร 7009",
        "cal": 74
    },
    "spicy_fish_7010": {
        "name": "ปลายำ สูตร 7010",
        "cal": 503
    },
    "fried_fish_7011": {
        "name": "ปลาทอด สูตร 7011",
        "cal": 150
    },
    "spicy_noodle_7012": {
        "name": "บะหมี่ยำ สูตร 7012",
        "cal": 431
    },
    "boiled_beef_7013": {
        "name": "เนื้อต้ม สูตร 7013",
        "cal": 743
    },
    "stir_fried_rice_7014": {
        "name": "ข้าวผัด สูตร 7014",
        "cal": 36
    },
    "fried_squid_7015": {
        "name": "ปลาหมึกทอด สูตร 7015",
        "cal": 847
    },
    "boiled_pork_7016": {
        "name": "หมูต้ม สูตร 7016",
        "cal": 593
    },
    "steamed_soup_7017": {
        "name": "ซุปนึ่ง สูตร 7017",
        "cal": 603
    },
    "fried_pork_7018": {
        "name": "หมูทอด สูตร 7018",
        "cal": 360
    },
    "steamed_shrimp_7019": {
        "name": "กุ้งนึ่ง สูตร 7019",
        "cal": 343
    },
    "stir_fried_fish_7020": {
        "name": "ปลาผัด สูตร 7020",
        "cal": 810
    },
    "spicy_squid_7021": {
        "name": "ปลาหมึกยำ สูตร 7021",
        "cal": 226
    },
    "spicy_noodle_7022": {
        "name": "บะหมี่ยำ สูตร 7022",
        "cal": 764
    },
    "steamed_rice_7023": {
        "name": "ข้าวนึ่ง สูตร 7023",
        "cal": 647
    },
    "steamed_shrimp_7024": {
        "name": "กุ้งนึ่ง สูตร 7024",
        "cal": 821
    },
    "steamed_squid_7025": {
        "name": "ปลาหมึกนึ่ง สูตร 7025",
        "cal": 757
    },
    "fried_beef_7026": {
        "name": "เนื้อทอด สูตร 7026",
        "cal": 826
    },
    "fried_shrimp_7027": {
        "name": "กุ้งทอด สูตร 7027",
        "cal": 375
    },
    "steamed_noodle_7028": {
        "name": "บะหมี่นึ่ง สูตร 7028",
        "cal": 831
    },
    "stir_fried_chicken_7029": {
        "name": "ไก่ผัด สูตร 7029",
        "cal": 561
    },
    "stir_fried_shrimp_7030": {
        "name": "กุ้งผัด สูตร 7030",
        "cal": 802
    },
    "steamed_beef_7031": {
        "name": "เนื้อนึ่ง สูตร 7031",
        "cal": 728
    },
    "stir_fried_noodle_7032": {
        "name": "บะหมี่ผัด สูตร 7032",
        "cal": 75
    },
    "grilled_shrimp_7033": {
        "name": "กุ้งย่าง สูตร 7033",
        "cal": 583
    },
    "steamed_shrimp_7034": {
        "name": "กุ้งนึ่ง สูตร 7034",
        "cal": 787
    },
    "boiled_rice_7035": {
        "name": "ข้าวต้ม สูตร 7035",
        "cal": 554
    },
    "grilled_fish_7036": {
        "name": "ปลาย่าง สูตร 7036",
        "cal": 284
    },
    "boiled_rice_7037": {
        "name": "ข้าวต้ม สูตร 7037",
        "cal": 358
    },
    "grilled_shrimp_7038": {
        "name": "กุ้งย่าง สูตร 7038",
        "cal": 485
    },
    "spicy_chicken_7039": {
        "name": "ไก่ยำ สูตร 7039",
        "cal": 546
    },
    "boiled_noodle_7040": {
        "name": "บะหมี่ต้ม สูตร 7040",
        "cal": 541
    },
    "fried_soup_7041": {
        "name": "ซุปทอด สูตร 7041",
        "cal": 196
    },
    "grilled_soup_7042": {
        "name": "ซุปย่าง สูตร 7042",
        "cal": 274
    },
    "stir_fried_rice_7043": {
        "name": "ข้าวผัด สูตร 7043",
        "cal": 781
    },
    "stir_fried_noodle_7044": {
        "name": "บะหมี่ผัด สูตร 7044",
        "cal": 559
    },
    "fried_chicken_7045": {
        "name": "ไก่ทอด สูตร 7045",
        "cal": 255
    },
    "spicy_beef_7046": {
        "name": "เนื้อยำ สูตร 7046",
        "cal": 482
    },
    "stir_fried_squid_7047": {
        "name": "ปลาหมึกผัด สูตร 7047",
        "cal": 824
    },
    "fried_pork_7048": {
        "name": "หมูทอด สูตร 7048",
        "cal": 348
    },
    "grilled_chicken_7049": {
        "name": "ไก่ย่าง สูตร 7049",
        "cal": 436
    },
    "stir_fried_fish_7050": {
        "name": "ปลาผัด สูตร 7050",
        "cal": 316
    },
    "grilled_squid_7051": {
        "name": "ปลาหมึกย่าง สูตร 7051",
        "cal": 442
    },
    "steamed_beef_7052": {
        "name": "เนื้อนึ่ง สูตร 7052",
        "cal": 718
    },
    "fried_chicken_7053": {
        "name": "ไก่ทอด สูตร 7053",
        "cal": 693
    },
    "spicy_squid_7054": {
        "name": "ปลาหมึกยำ สูตร 7054",
        "cal": 407
    },
    "spicy_shrimp_7055": {
        "name": "กุ้งยำ สูตร 7055",
        "cal": 459
    },
    "fried_pork_7056": {
        "name": "หมูทอด สูตร 7056",
        "cal": 843
    },
    "stir_fried_fish_7057": {
        "name": "ปลาผัด สูตร 7057",
        "cal": 166
    },
    "steamed_rice_7058": {
        "name": "ข้าวนึ่ง สูตร 7058",
        "cal": 328
    },
    "boiled_pork_7059": {
        "name": "หมูต้ม สูตร 7059",
        "cal": 399
    },
    "fried_beef_7060": {
        "name": "เนื้อทอด สูตร 7060",
        "cal": 227
    },
    "steamed_chicken_7061": {
        "name": "ไก่นึ่ง สูตร 7061",
        "cal": 730
    },
    "fried_soup_7062": {
        "name": "ซุปทอด สูตร 7062",
        "cal": 265
    },
    "boiled_beef_7063": {
        "name": "เนื้อต้ม สูตร 7063",
        "cal": 125
    },
    "grilled_noodle_7064": {
        "name": "บะหมี่ย่าง สูตร 7064",
        "cal": 792
    },
    "boiled_shrimp_7065": {
        "name": "กุ้งต้ม สูตร 7065",
        "cal": 369
    },
    "grilled_soup_7066": {
        "name": "ซุปย่าง สูตร 7066",
        "cal": 261
    },
    "grilled_shrimp_7067": {
        "name": "กุ้งย่าง สูตร 7067",
        "cal": 217
    },
    "boiled_rice_7068": {
        "name": "ข้าวต้ม สูตร 7068",
        "cal": 417
    },
    "stir_fried_soup_7069": {
        "name": "ซุปผัด สูตร 7069",
        "cal": 267
    },
    "boiled_beef_7070": {
        "name": "เนื้อต้ม สูตร 7070",
        "cal": 33
    },
    "boiled_shrimp_7071": {
        "name": "กุ้งต้ม สูตร 7071",
        "cal": 655
    },
    "grilled_noodle_7072": {
        "name": "บะหมี่ย่าง สูตร 7072",
        "cal": 818
    },
    "boiled_chicken_7073": {
        "name": "ไก่ต้ม สูตร 7073",
        "cal": 495
    },
    "grilled_fish_7074": {
        "name": "ปลาย่าง สูตร 7074",
        "cal": 211
    },
    "boiled_noodle_7075": {
        "name": "บะหมี่ต้ม สูตร 7075",
        "cal": 398
    },
    "boiled_shrimp_7076": {
        "name": "กุ้งต้ม สูตร 7076",
        "cal": 746
    },
    "grilled_beef_7077": {
        "name": "เนื้อย่าง สูตร 7077",
        "cal": 502
    },
    "boiled_squid_7078": {
        "name": "ปลาหมึกต้ม สูตร 7078",
        "cal": 784
    },
    "stir_fried_chicken_7079": {
        "name": "ไก่ผัด สูตร 7079",
        "cal": 100
    },
    "steamed_fish_7080": {
        "name": "ปลานึ่ง สูตร 7080",
        "cal": 382
    },
    "spicy_beef_7081": {
        "name": "เนื้อยำ สูตร 7081",
        "cal": 285
    },
    "boiled_rice_7082": {
        "name": "ข้าวต้ม สูตร 7082",
        "cal": 346
    },
    "steamed_beef_7083": {
        "name": "เนื้อนึ่ง สูตร 7083",
        "cal": 785
    },
    "steamed_chicken_7084": {
        "name": "ไก่นึ่ง สูตร 7084",
        "cal": 104
    },
    "steamed_soup_7085": {
        "name": "ซุปนึ่ง สูตร 7085",
        "cal": 800
    },
    "fried_beef_7086": {
        "name": "เนื้อทอด สูตร 7086",
        "cal": 828
    },
    "stir_fried_squid_7087": {
        "name": "ปลาหมึกผัด สูตร 7087",
        "cal": 773
    },
    "stir_fried_fish_7088": {
        "name": "ปลาผัด สูตร 7088",
        "cal": 172
    },
    "grilled_noodle_7089": {
        "name": "บะหมี่ย่าง สูตร 7089",
        "cal": 29
    },
    "grilled_fish_7090": {
        "name": "ปลาย่าง สูตร 7090",
        "cal": 70
    },
    "grilled_noodle_7091": {
        "name": "บะหมี่ย่าง สูตร 7091",
        "cal": 43
    },
    "fried_fish_7092": {
        "name": "ปลาทอด สูตร 7092",
        "cal": 558
    },
    "grilled_squid_7093": {
        "name": "ปลาหมึกย่าง สูตร 7093",
        "cal": 418
    },
    "steamed_chicken_7094": {
        "name": "ไก่นึ่ง สูตร 7094",
        "cal": 139
    },
    "grilled_pork_7095": {
        "name": "หมูย่าง สูตร 7095",
        "cal": 429
    },
    "boiled_squid_7096": {
        "name": "ปลาหมึกต้ม สูตร 7096",
        "cal": 706
    },
    "fried_noodle_7097": {
        "name": "บะหมี่ทอด สูตร 7097",
        "cal": 757
    },
    "boiled_squid_7098": {
        "name": "ปลาหมึกต้ม สูตร 7098",
        "cal": 636
    },
    "spicy_chicken_7099": {
        "name": "ไก่ยำ สูตร 7099",
        "cal": 325
    },
    "spicy_pork_7100": {
        "name": "หมูยำ สูตร 7100",
        "cal": 780
    },
    "stir_fried_fish_7101": {
        "name": "ปลาผัด สูตร 7101",
        "cal": 754
    },
    "fried_chicken_7102": {
        "name": "ไก่ทอด สูตร 7102",
        "cal": 706
    },
    "stir_fried_chicken_7103": {
        "name": "ไก่ผัด สูตร 7103",
        "cal": 585
    },
    "boiled_squid_7104": {
        "name": "ปลาหมึกต้ม สูตร 7104",
        "cal": 514
    },
    "stir_fried_rice_7105": {
        "name": "ข้าวผัด สูตร 7105",
        "cal": 285
    },
    "fried_pork_7106": {
        "name": "หมูทอด สูตร 7106",
        "cal": 48
    },
    "stir_fried_beef_7107": {
        "name": "เนื้อผัด สูตร 7107",
        "cal": 254
    },
    "fried_fish_7108": {
        "name": "ปลาทอด สูตร 7108",
        "cal": 373
    },
    "boiled_squid_7109": {
        "name": "ปลาหมึกต้ม สูตร 7109",
        "cal": 213
    },
    "spicy_shrimp_7110": {
        "name": "กุ้งยำ สูตร 7110",
        "cal": 489
    },
    "boiled_squid_7111": {
        "name": "ปลาหมึกต้ม สูตร 7111",
        "cal": 326
    },
    "boiled_squid_7112": {
        "name": "ปลาหมึกต้ม สูตร 7112",
        "cal": 290
    },
    "spicy_shrimp_7113": {
        "name": "กุ้งยำ สูตร 7113",
        "cal": 284
    },
    "grilled_shrimp_7114": {
        "name": "กุ้งย่าง สูตร 7114",
        "cal": 102
    },
    "stir_fried_squid_7115": {
        "name": "ปลาหมึกผัด สูตร 7115",
        "cal": 596
    },
    "spicy_noodle_7116": {
        "name": "บะหมี่ยำ สูตร 7116",
        "cal": 683
    },
    "steamed_fish_7117": {
        "name": "ปลานึ่ง สูตร 7117",
        "cal": 81
    },
    "stir_fried_chicken_7118": {
        "name": "ไก่ผัด สูตร 7118",
        "cal": 75
    },
    "steamed_noodle_7119": {
        "name": "บะหมี่นึ่ง สูตร 7119",
        "cal": 846
    },
    "fried_squid_7120": {
        "name": "ปลาหมึกทอด สูตร 7120",
        "cal": 288
    },
    "boiled_pork_7121": {
        "name": "หมูต้ม สูตร 7121",
        "cal": 263
    },
    "grilled_noodle_7122": {
        "name": "บะหมี่ย่าง สูตร 7122",
        "cal": 455
    },
    "spicy_noodle_7123": {
        "name": "บะหมี่ยำ สูตร 7123",
        "cal": 456
    },
    "spicy_squid_7124": {
        "name": "ปลาหมึกยำ สูตร 7124",
        "cal": 629
    },
    "stir_fried_rice_7125": {
        "name": "ข้าวผัด สูตร 7125",
        "cal": 183
    },
    "grilled_soup_7126": {
        "name": "ซุปย่าง สูตร 7126",
        "cal": 433
    },
    "grilled_beef_7127": {
        "name": "เนื้อย่าง สูตร 7127",
        "cal": 439
    },
    "fried_chicken_7128": {
        "name": "ไก่ทอด สูตร 7128",
        "cal": 352
    },
    "grilled_soup_7129": {
        "name": "ซุปย่าง สูตร 7129",
        "cal": 587
    },
    "steamed_chicken_7130": {
        "name": "ไก่นึ่ง สูตร 7130",
        "cal": 686
    },
    "steamed_chicken_7131": {
        "name": "ไก่นึ่ง สูตร 7131",
        "cal": 779
    },
    "boiled_beef_7132": {
        "name": "เนื้อต้ม สูตร 7132",
        "cal": 454
    },
    "grilled_rice_7133": {
        "name": "ข้าวย่าง สูตร 7133",
        "cal": 395
    },
    "stir_fried_chicken_7134": {
        "name": "ไก่ผัด สูตร 7134",
        "cal": 559
    },
    "fried_shrimp_7135": {
        "name": "กุ้งทอด สูตร 7135",
        "cal": 368
    },
    "spicy_soup_7136": {
        "name": "ซุปยำ สูตร 7136",
        "cal": 432
    },
    "stir_fried_noodle_7137": {
        "name": "บะหมี่ผัด สูตร 7137",
        "cal": 391
    },
    "fried_noodle_7138": {
        "name": "บะหมี่ทอด สูตร 7138",
        "cal": 678
    },
    "steamed_shrimp_7139": {
        "name": "กุ้งนึ่ง สูตร 7139",
        "cal": 501
    },
    "grilled_pork_7140": {
        "name": "หมูย่าง สูตร 7140",
        "cal": 194
    },
    "boiled_beef_7141": {
        "name": "เนื้อต้ม สูตร 7141",
        "cal": 325
    },
    "stir_fried_pork_7142": {
        "name": "หมูผัด สูตร 7142",
        "cal": 640
    },
    "grilled_fish_7143": {
        "name": "ปลาย่าง สูตร 7143",
        "cal": 787
    },
    "grilled_pork_7144": {
        "name": "หมูย่าง สูตร 7144",
        "cal": 158
    },
    "grilled_soup_7145": {
        "name": "ซุปย่าง สูตร 7145",
        "cal": 452
    },
    "grilled_noodle_7146": {
        "name": "บะหมี่ย่าง สูตร 7146",
        "cal": 444
    },
    "steamed_squid_7147": {
        "name": "ปลาหมึกนึ่ง สูตร 7147",
        "cal": 416
    },
    "boiled_chicken_7148": {
        "name": "ไก่ต้ม สูตร 7148",
        "cal": 688
    },
    "spicy_shrimp_7149": {
        "name": "กุ้งยำ สูตร 7149",
        "cal": 756
    },
    "grilled_beef_7150": {
        "name": "เนื้อย่าง สูตร 7150",
        "cal": 403
    },
    "boiled_fish_7151": {
        "name": "ปลาต้ม สูตร 7151",
        "cal": 108
    },
    "grilled_soup_7152": {
        "name": "ซุปย่าง สูตร 7152",
        "cal": 348
    },
    "fried_soup_7153": {
        "name": "ซุปทอด สูตร 7153",
        "cal": 20
    },
    "stir_fried_pork_7154": {
        "name": "หมูผัด สูตร 7154",
        "cal": 792
    },
    "steamed_beef_7155": {
        "name": "เนื้อนึ่ง สูตร 7155",
        "cal": 609
    },
    "spicy_pork_7156": {
        "name": "หมูยำ สูตร 7156",
        "cal": 631
    },
    "grilled_fish_7157": {
        "name": "ปลาย่าง สูตร 7157",
        "cal": 256
    },
    "spicy_fish_7158": {
        "name": "ปลายำ สูตร 7158",
        "cal": 744
    },
    "steamed_rice_7159": {
        "name": "ข้าวนึ่ง สูตร 7159",
        "cal": 386
    },
    "spicy_rice_7160": {
        "name": "ข้าวยำ สูตร 7160",
        "cal": 135
    },
    "fried_shrimp_7161": {
        "name": "กุ้งทอด สูตร 7161",
        "cal": 177
    },
    "steamed_soup_7162": {
        "name": "ซุปนึ่ง สูตร 7162",
        "cal": 712
    },
    "steamed_pork_7163": {
        "name": "หมูนึ่ง สูตร 7163",
        "cal": 389
    },
    "stir_fried_chicken_7164": {
        "name": "ไก่ผัด สูตร 7164",
        "cal": 308
    },
    "stir_fried_pork_7165": {
        "name": "หมูผัด สูตร 7165",
        "cal": 195
    },
    "boiled_chicken_7166": {
        "name": "ไก่ต้ม สูตร 7166",
        "cal": 236
    },
    "fried_fish_7167": {
        "name": "ปลาทอด สูตร 7167",
        "cal": 76
    },
    "boiled_pork_7168": {
        "name": "หมูต้ม สูตร 7168",
        "cal": 690
    },
    "spicy_fish_7169": {
        "name": "ปลายำ สูตร 7169",
        "cal": 86
    },
    "grilled_noodle_7170": {
        "name": "บะหมี่ย่าง สูตร 7170",
        "cal": 279
    },
    "spicy_fish_7171": {
        "name": "ปลายำ สูตร 7171",
        "cal": 726
    },
    "fried_noodle_7172": {
        "name": "บะหมี่ทอด สูตร 7172",
        "cal": 375
    },
    "fried_shrimp_7173": {
        "name": "กุ้งทอด สูตร 7173",
        "cal": 204
    },
    "fried_beef_7174": {
        "name": "เนื้อทอด สูตร 7174",
        "cal": 221
    },
    "boiled_soup_7175": {
        "name": "ซุปต้ม สูตร 7175",
        "cal": 23
    },
    "spicy_pork_7176": {
        "name": "หมูยำ สูตร 7176",
        "cal": 183
    },
    "spicy_chicken_7177": {
        "name": "ไก่ยำ สูตร 7177",
        "cal": 508
    },
    "grilled_fish_7178": {
        "name": "ปลาย่าง สูตร 7178",
        "cal": 590
    },
    "stir_fried_beef_7179": {
        "name": "เนื้อผัด สูตร 7179",
        "cal": 339
    },
    "stir_fried_pork_7180": {
        "name": "หมูผัด สูตร 7180",
        "cal": 340
    },
    "stir_fried_noodle_7181": {
        "name": "บะหมี่ผัด สูตร 7181",
        "cal": 81
    },
    "steamed_fish_7182": {
        "name": "ปลานึ่ง สูตร 7182",
        "cal": 218
    },
    "spicy_noodle_7183": {
        "name": "บะหมี่ยำ สูตร 7183",
        "cal": 141
    },
    "boiled_chicken_7184": {
        "name": "ไก่ต้ม สูตร 7184",
        "cal": 618
    },
    "boiled_beef_7185": {
        "name": "เนื้อต้ม สูตร 7185",
        "cal": 834
    },
    "boiled_noodle_7186": {
        "name": "บะหมี่ต้ม สูตร 7186",
        "cal": 614
    },
    "grilled_squid_7187": {
        "name": "ปลาหมึกย่าง สูตร 7187",
        "cal": 254
    },
    "stir_fried_noodle_7188": {
        "name": "บะหมี่ผัด สูตร 7188",
        "cal": 719
    },
    "grilled_pork_7189": {
        "name": "หมูย่าง สูตร 7189",
        "cal": 578
    },
    "boiled_beef_7190": {
        "name": "เนื้อต้ม สูตร 7190",
        "cal": 497
    },
    "grilled_pork_7191": {
        "name": "หมูย่าง สูตร 7191",
        "cal": 237
    },
    "grilled_fish_7192": {
        "name": "ปลาย่าง สูตร 7192",
        "cal": 499
    },
    "steamed_squid_7193": {
        "name": "ปลาหมึกนึ่ง สูตร 7193",
        "cal": 289
    },
    "steamed_noodle_7194": {
        "name": "บะหมี่นึ่ง สูตร 7194",
        "cal": 23
    },
    "boiled_fish_7195": {
        "name": "ปลาต้ม สูตร 7195",
        "cal": 232
    },
    "grilled_beef_7196": {
        "name": "เนื้อย่าง สูตร 7196",
        "cal": 610
    },
    "boiled_beef_7197": {
        "name": "เนื้อต้ม สูตร 7197",
        "cal": 312
    },
    "stir_fried_soup_7198": {
        "name": "ซุปผัด สูตร 7198",
        "cal": 540
    },
    "spicy_squid_7199": {
        "name": "ปลาหมึกยำ สูตร 7199",
        "cal": 172
    },
    "stir_fried_soup_7200": {
        "name": "ซุปผัด สูตร 7200",
        "cal": 606
    },
    "grilled_noodle_7201": {
        "name": "บะหมี่ย่าง สูตร 7201",
        "cal": 328
    },
    "spicy_rice_7202": {
        "name": "ข้าวยำ สูตร 7202",
        "cal": 51
    },
    "boiled_squid_7203": {
        "name": "ปลาหมึกต้ม สูตร 7203",
        "cal": 220
    },
    "boiled_beef_7204": {
        "name": "เนื้อต้ม สูตร 7204",
        "cal": 535
    },
    "grilled_rice_7205": {
        "name": "ข้าวย่าง สูตร 7205",
        "cal": 58
    },
    "stir_fried_fish_7206": {
        "name": "ปลาผัด สูตร 7206",
        "cal": 454
    },
    "boiled_rice_7207": {
        "name": "ข้าวต้ม สูตร 7207",
        "cal": 31
    },
    "steamed_squid_7208": {
        "name": "ปลาหมึกนึ่ง สูตร 7208",
        "cal": 86
    },
    "grilled_chicken_7209": {
        "name": "ไก่ย่าง สูตร 7209",
        "cal": 231
    },
    "boiled_chicken_7210": {
        "name": "ไก่ต้ม สูตร 7210",
        "cal": 292
    },
    "grilled_squid_7211": {
        "name": "ปลาหมึกย่าง สูตร 7211",
        "cal": 632
    },
    "steamed_squid_7212": {
        "name": "ปลาหมึกนึ่ง สูตร 7212",
        "cal": 529
    },
    "boiled_rice_7213": {
        "name": "ข้าวต้ม สูตร 7213",
        "cal": 102
    },
    "spicy_squid_7214": {
        "name": "ปลาหมึกยำ สูตร 7214",
        "cal": 396
    },
    "fried_beef_7215": {
        "name": "เนื้อทอด สูตร 7215",
        "cal": 733
    },
    "grilled_fish_7216": {
        "name": "ปลาย่าง สูตร 7216",
        "cal": 299
    },
    "boiled_squid_7217": {
        "name": "ปลาหมึกต้ม สูตร 7217",
        "cal": 718
    },
    "fried_rice_7218": {
        "name": "ข้าวทอด สูตร 7218",
        "cal": 249
    },
    "steamed_rice_7219": {
        "name": "ข้าวนึ่ง สูตร 7219",
        "cal": 352
    },
    "steamed_shrimp_7220": {
        "name": "กุ้งนึ่ง สูตร 7220",
        "cal": 608
    },
    "fried_squid_7221": {
        "name": "ปลาหมึกทอด สูตร 7221",
        "cal": 439
    },
    "stir_fried_noodle_7222": {
        "name": "บะหมี่ผัด สูตร 7222",
        "cal": 559
    },
    "stir_fried_pork_7223": {
        "name": "หมูผัด สูตร 7223",
        "cal": 393
    },
    "stir_fried_rice_7224": {
        "name": "ข้าวผัด สูตร 7224",
        "cal": 528
    },
    "stir_fried_chicken_7225": {
        "name": "ไก่ผัด สูตร 7225",
        "cal": 687
    },
    "fried_soup_7226": {
        "name": "ซุปทอด สูตร 7226",
        "cal": 48
    },
    "stir_fried_shrimp_7227": {
        "name": "กุ้งผัด สูตร 7227",
        "cal": 376
    },
    "grilled_squid_7228": {
        "name": "ปลาหมึกย่าง สูตร 7228",
        "cal": 485
    },
    "grilled_shrimp_7229": {
        "name": "กุ้งย่าง สูตร 7229",
        "cal": 548
    },
    "boiled_shrimp_7230": {
        "name": "กุ้งต้ม สูตร 7230",
        "cal": 210
    },
    "grilled_shrimp_7231": {
        "name": "กุ้งย่าง สูตร 7231",
        "cal": 201
    },
    "steamed_noodle_7232": {
        "name": "บะหมี่นึ่ง สูตร 7232",
        "cal": 25
    },
    "steamed_pork_7233": {
        "name": "หมูนึ่ง สูตร 7233",
        "cal": 609
    },
    "stir_fried_chicken_7234": {
        "name": "ไก่ผัด สูตร 7234",
        "cal": 617
    },
    "fried_shrimp_7235": {
        "name": "กุ้งทอด สูตร 7235",
        "cal": 176
    },
    "stir_fried_pork_7236": {
        "name": "หมูผัด สูตร 7236",
        "cal": 756
    },
    "spicy_chicken_7237": {
        "name": "ไก่ยำ สูตร 7237",
        "cal": 411
    },
    "fried_chicken_7238": {
        "name": "ไก่ทอด สูตร 7238",
        "cal": 330
    },
    "boiled_fish_7239": {
        "name": "ปลาต้ม สูตร 7239",
        "cal": 313
    },
    "grilled_squid_7240": {
        "name": "ปลาหมึกย่าง สูตร 7240",
        "cal": 605
    },
    "fried_rice_7241": {
        "name": "ข้าวทอด สูตร 7241",
        "cal": 98
    },
    "stir_fried_rice_7242": {
        "name": "ข้าวผัด สูตร 7242",
        "cal": 314
    },
    "stir_fried_squid_7243": {
        "name": "ปลาหมึกผัด สูตร 7243",
        "cal": 808
    },
    "spicy_soup_7244": {
        "name": "ซุปยำ สูตร 7244",
        "cal": 404
    },
    "boiled_beef_7245": {
        "name": "เนื้อต้ม สูตร 7245",
        "cal": 67
    },
    "steamed_pork_7246": {
        "name": "หมูนึ่ง สูตร 7246",
        "cal": 840
    },
    "steamed_rice_7247": {
        "name": "ข้าวนึ่ง สูตร 7247",
        "cal": 284
    },
    "fried_noodle_7248": {
        "name": "บะหมี่ทอด สูตร 7248",
        "cal": 725
    },
    "boiled_squid_7249": {
        "name": "ปลาหมึกต้ม สูตร 7249",
        "cal": 762
    },
    "stir_fried_pork_7250": {
        "name": "หมูผัด สูตร 7250",
        "cal": 55
    },
    "fried_shrimp_7251": {
        "name": "กุ้งทอด สูตร 7251",
        "cal": 759
    },
    "boiled_rice_7252": {
        "name": "ข้าวต้ม สูตร 7252",
        "cal": 195
    },
    "spicy_fish_7253": {
        "name": "ปลายำ สูตร 7253",
        "cal": 772
    },
    "fried_noodle_7254": {
        "name": "บะหมี่ทอด สูตร 7254",
        "cal": 289
    },
    "spicy_rice_7255": {
        "name": "ข้าวยำ สูตร 7255",
        "cal": 556
    },
    "fried_noodle_7256": {
        "name": "บะหมี่ทอด สูตร 7256",
        "cal": 725
    },
    "stir_fried_noodle_7257": {
        "name": "บะหมี่ผัด สูตร 7257",
        "cal": 473
    },
    "stir_fried_beef_7258": {
        "name": "เนื้อผัด สูตร 7258",
        "cal": 66
    },
    "stir_fried_beef_7259": {
        "name": "เนื้อผัด สูตร 7259",
        "cal": 273
    },
    "grilled_fish_7260": {
        "name": "ปลาย่าง สูตร 7260",
        "cal": 140
    },
    "spicy_shrimp_7261": {
        "name": "กุ้งยำ สูตร 7261",
        "cal": 805
    },
    "spicy_noodle_7262": {
        "name": "บะหมี่ยำ สูตร 7262",
        "cal": 335
    },
    "boiled_rice_7263": {
        "name": "ข้าวต้ม สูตร 7263",
        "cal": 670
    },
    "fried_soup_7264": {
        "name": "ซุปทอด สูตร 7264",
        "cal": 279
    },
    "boiled_chicken_7265": {
        "name": "ไก่ต้ม สูตร 7265",
        "cal": 524
    },
    "steamed_noodle_7266": {
        "name": "บะหมี่นึ่ง สูตร 7266",
        "cal": 549
    },
    "fried_squid_7267": {
        "name": "ปลาหมึกทอด สูตร 7267",
        "cal": 691
    },
    "boiled_squid_7268": {
        "name": "ปลาหมึกต้ม สูตร 7268",
        "cal": 490
    },
    "steamed_shrimp_7269": {
        "name": "กุ้งนึ่ง สูตร 7269",
        "cal": 715
    },
    "spicy_squid_7270": {
        "name": "ปลาหมึกยำ สูตร 7270",
        "cal": 782
    },
    "spicy_beef_7271": {
        "name": "เนื้อยำ สูตร 7271",
        "cal": 353
    },
    "steamed_noodle_7272": {
        "name": "บะหมี่นึ่ง สูตร 7272",
        "cal": 232
    },
    "stir_fried_squid_7273": {
        "name": "ปลาหมึกผัด สูตร 7273",
        "cal": 201
    },
    "steamed_chicken_7274": {
        "name": "ไก่นึ่ง สูตร 7274",
        "cal": 361
    },
    "fried_beef_7275": {
        "name": "เนื้อทอด สูตร 7275",
        "cal": 22
    },
    "grilled_chicken_7276": {
        "name": "ไก่ย่าง สูตร 7276",
        "cal": 493
    },
    "boiled_fish_7277": {
        "name": "ปลาต้ม สูตร 7277",
        "cal": 265
    },
    "fried_squid_7278": {
        "name": "ปลาหมึกทอด สูตร 7278",
        "cal": 805
    },
    "boiled_fish_7279": {
        "name": "ปลาต้ม สูตร 7279",
        "cal": 189
    },
    "stir_fried_beef_7280": {
        "name": "เนื้อผัด สูตร 7280",
        "cal": 185
    },
    "stir_fried_soup_7281": {
        "name": "ซุปผัด สูตร 7281",
        "cal": 54
    },
    "spicy_soup_7282": {
        "name": "ซุปยำ สูตร 7282",
        "cal": 207
    },
    "spicy_shrimp_7283": {
        "name": "กุ้งยำ สูตร 7283",
        "cal": 105
    },
    "spicy_beef_7284": {
        "name": "เนื้อยำ สูตร 7284",
        "cal": 627
    },
    "stir_fried_shrimp_7285": {
        "name": "กุ้งผัด สูตร 7285",
        "cal": 439
    },
    "boiled_noodle_7286": {
        "name": "บะหมี่ต้ม สูตร 7286",
        "cal": 157
    },
    "spicy_pork_7287": {
        "name": "หมูยำ สูตร 7287",
        "cal": 527
    },
    "stir_fried_squid_7288": {
        "name": "ปลาหมึกผัด สูตร 7288",
        "cal": 771
    },
    "fried_chicken_7289": {
        "name": "ไก่ทอด สูตร 7289",
        "cal": 210
    },
    "grilled_pork_7290": {
        "name": "หมูย่าง สูตร 7290",
        "cal": 451
    },
    "stir_fried_beef_7291": {
        "name": "เนื้อผัด สูตร 7291",
        "cal": 635
    },
    "fried_shrimp_7292": {
        "name": "กุ้งทอด สูตร 7292",
        "cal": 462
    },
    "steamed_fish_7293": {
        "name": "ปลานึ่ง สูตร 7293",
        "cal": 819
    },
    "boiled_squid_7294": {
        "name": "ปลาหมึกต้ม สูตร 7294",
        "cal": 656
    },
    "boiled_fish_7295": {
        "name": "ปลาต้ม สูตร 7295",
        "cal": 209
    },
    "steamed_noodle_7296": {
        "name": "บะหมี่นึ่ง สูตร 7296",
        "cal": 719
    },
    "steamed_soup_7297": {
        "name": "ซุปนึ่ง สูตร 7297",
        "cal": 686
    },
    "grilled_soup_7298": {
        "name": "ซุปย่าง สูตร 7298",
        "cal": 70
    },
    "grilled_noodle_7299": {
        "name": "บะหมี่ย่าง สูตร 7299",
        "cal": 145
    },
    "fried_squid_7300": {
        "name": "ปลาหมึกทอด สูตร 7300",
        "cal": 109
    },
    "spicy_shrimp_7301": {
        "name": "กุ้งยำ สูตร 7301",
        "cal": 472
    },
    "steamed_soup_7302": {
        "name": "ซุปนึ่ง สูตร 7302",
        "cal": 391
    },
    "fried_soup_7303": {
        "name": "ซุปทอด สูตร 7303",
        "cal": 569
    },
    "spicy_beef_7304": {
        "name": "เนื้อยำ สูตร 7304",
        "cal": 47
    },
    "grilled_soup_7305": {
        "name": "ซุปย่าง สูตร 7305",
        "cal": 46
    },
    "stir_fried_pork_7306": {
        "name": "หมูผัด สูตร 7306",
        "cal": 403
    },
    "fried_beef_7307": {
        "name": "เนื้อทอด สูตร 7307",
        "cal": 589
    },
    "spicy_rice_7308": {
        "name": "ข้าวยำ สูตร 7308",
        "cal": 258
    },
    "spicy_noodle_7309": {
        "name": "บะหมี่ยำ สูตร 7309",
        "cal": 585
    },
    "steamed_noodle_7310": {
        "name": "บะหมี่นึ่ง สูตร 7310",
        "cal": 534
    },
    "grilled_noodle_7311": {
        "name": "บะหมี่ย่าง สูตร 7311",
        "cal": 107
    },
    "spicy_noodle_7312": {
        "name": "บะหมี่ยำ สูตร 7312",
        "cal": 334
    },
    "fried_chicken_7313": {
        "name": "ไก่ทอด สูตร 7313",
        "cal": 524
    },
    "stir_fried_beef_7314": {
        "name": "เนื้อผัด สูตร 7314",
        "cal": 725
    },
    "boiled_beef_7315": {
        "name": "เนื้อต้ม สูตร 7315",
        "cal": 380
    },
    "fried_rice_7316": {
        "name": "ข้าวทอด สูตร 7316",
        "cal": 289
    },
    "spicy_soup_7317": {
        "name": "ซุปยำ สูตร 7317",
        "cal": 47
    },
    "steamed_chicken_7318": {
        "name": "ไก่นึ่ง สูตร 7318",
        "cal": 802
    },
    "spicy_pork_7319": {
        "name": "หมูยำ สูตร 7319",
        "cal": 85
    },
    "steamed_squid_7320": {
        "name": "ปลาหมึกนึ่ง สูตร 7320",
        "cal": 467
    },
    "boiled_noodle_7321": {
        "name": "บะหมี่ต้ม สูตร 7321",
        "cal": 325
    },
    "fried_chicken_7322": {
        "name": "ไก่ทอด สูตร 7322",
        "cal": 129
    },
    "stir_fried_squid_7323": {
        "name": "ปลาหมึกผัด สูตร 7323",
        "cal": 475
    },
    "boiled_fish_7324": {
        "name": "ปลาต้ม สูตร 7324",
        "cal": 835
    },
    "grilled_noodle_7325": {
        "name": "บะหมี่ย่าง สูตร 7325",
        "cal": 812
    },
    "steamed_shrimp_7326": {
        "name": "กุ้งนึ่ง สูตร 7326",
        "cal": 55
    },
    "stir_fried_soup_7327": {
        "name": "ซุปผัด สูตร 7327",
        "cal": 472
    },
    "spicy_chicken_7328": {
        "name": "ไก่ยำ สูตร 7328",
        "cal": 23
    },
    "fried_rice_7329": {
        "name": "ข้าวทอด สูตร 7329",
        "cal": 573
    },
    "grilled_beef_7330": {
        "name": "เนื้อย่าง สูตร 7330",
        "cal": 161
    },
    "spicy_pork_7331": {
        "name": "หมูยำ สูตร 7331",
        "cal": 835
    },
    "steamed_pork_7332": {
        "name": "หมูนึ่ง สูตร 7332",
        "cal": 142
    },
    "boiled_noodle_7333": {
        "name": "บะหมี่ต้ม สูตร 7333",
        "cal": 650
    },
    "fried_rice_7334": {
        "name": "ข้าวทอด สูตร 7334",
        "cal": 841
    },
    "boiled_shrimp_7335": {
        "name": "กุ้งต้ม สูตร 7335",
        "cal": 240
    },
    "fried_noodle_7336": {
        "name": "บะหมี่ทอด สูตร 7336",
        "cal": 577
    },
    "spicy_squid_7337": {
        "name": "ปลาหมึกยำ สูตร 7337",
        "cal": 531
    },
    "spicy_fish_7338": {
        "name": "ปลายำ สูตร 7338",
        "cal": 498
    },
    "stir_fried_chicken_7339": {
        "name": "ไก่ผัด สูตร 7339",
        "cal": 48
    },
    "spicy_soup_7340": {
        "name": "ซุปยำ สูตร 7340",
        "cal": 294
    },
    "grilled_fish_7341": {
        "name": "ปลาย่าง สูตร 7341",
        "cal": 230
    },
    "grilled_soup_7342": {
        "name": "ซุปย่าง สูตร 7342",
        "cal": 714
    },
    "spicy_chicken_7343": {
        "name": "ไก่ยำ สูตร 7343",
        "cal": 456
    },
    "stir_fried_squid_7344": {
        "name": "ปลาหมึกผัด สูตร 7344",
        "cal": 460
    },
    "steamed_pork_7345": {
        "name": "หมูนึ่ง สูตร 7345",
        "cal": 129
    },
    "spicy_squid_7346": {
        "name": "ปลาหมึกยำ สูตร 7346",
        "cal": 245
    },
    "grilled_chicken_7347": {
        "name": "ไก่ย่าง สูตร 7347",
        "cal": 380
    },
    "fried_fish_7348": {
        "name": "ปลาทอด สูตร 7348",
        "cal": 730
    },
    "stir_fried_soup_7349": {
        "name": "ซุปผัด สูตร 7349",
        "cal": 197
    },
    "steamed_fish_7350": {
        "name": "ปลานึ่ง สูตร 7350",
        "cal": 147
    },
    "grilled_beef_7351": {
        "name": "เนื้อย่าง สูตร 7351",
        "cal": 568
    },
    "steamed_shrimp_7352": {
        "name": "กุ้งนึ่ง สูตร 7352",
        "cal": 287
    },
    "boiled_pork_7353": {
        "name": "หมูต้ม สูตร 7353",
        "cal": 28
    },
    "spicy_squid_7354": {
        "name": "ปลาหมึกยำ สูตร 7354",
        "cal": 26
    },
    "fried_noodle_7355": {
        "name": "บะหมี่ทอด สูตร 7355",
        "cal": 547
    },
    "spicy_rice_7356": {
        "name": "ข้าวยำ สูตร 7356",
        "cal": 537
    },
    "steamed_pork_7357": {
        "name": "หมูนึ่ง สูตร 7357",
        "cal": 525
    },
    "fried_beef_7358": {
        "name": "เนื้อทอด สูตร 7358",
        "cal": 506
    },
    "boiled_shrimp_7359": {
        "name": "กุ้งต้ม สูตร 7359",
        "cal": 237
    },
    "boiled_chicken_7360": {
        "name": "ไก่ต้ม สูตร 7360",
        "cal": 641
    },
    "spicy_fish_7361": {
        "name": "ปลายำ สูตร 7361",
        "cal": 752
    },
    "fried_shrimp_7362": {
        "name": "กุ้งทอด สูตร 7362",
        "cal": 432
    },
    "spicy_soup_7363": {
        "name": "ซุปยำ สูตร 7363",
        "cal": 405
    },
    "fried_fish_7364": {
        "name": "ปลาทอด สูตร 7364",
        "cal": 588
    },
    "spicy_squid_7365": {
        "name": "ปลาหมึกยำ สูตร 7365",
        "cal": 834
    },
    "boiled_soup_7366": {
        "name": "ซุปต้ม สูตร 7366",
        "cal": 117
    },
    "fried_chicken_7367": {
        "name": "ไก่ทอด สูตร 7367",
        "cal": 801
    },
    "fried_pork_7368": {
        "name": "หมูทอด สูตร 7368",
        "cal": 423
    },
    "fried_chicken_7369": {
        "name": "ไก่ทอด สูตร 7369",
        "cal": 609
    },
    "boiled_squid_7370": {
        "name": "ปลาหมึกต้ม สูตร 7370",
        "cal": 170
    },
    "stir_fried_fish_7371": {
        "name": "ปลาผัด สูตร 7371",
        "cal": 168
    },
    "spicy_pork_7372": {
        "name": "หมูยำ สูตร 7372",
        "cal": 835
    },
    "steamed_rice_7373": {
        "name": "ข้าวนึ่ง สูตร 7373",
        "cal": 622
    },
    "boiled_noodle_7374": {
        "name": "บะหมี่ต้ม สูตร 7374",
        "cal": 514
    },
    "fried_beef_7375": {
        "name": "เนื้อทอด สูตร 7375",
        "cal": 79
    },
    "fried_shrimp_7376": {
        "name": "กุ้งทอด สูตร 7376",
        "cal": 75
    },
    "spicy_chicken_7377": {
        "name": "ไก่ยำ สูตร 7377",
        "cal": 705
    },
    "steamed_pork_7378": {
        "name": "หมูนึ่ง สูตร 7378",
        "cal": 144
    },
    "spicy_pork_7379": {
        "name": "หมูยำ สูตร 7379",
        "cal": 300
    },
    "grilled_beef_7380": {
        "name": "เนื้อย่าง สูตร 7380",
        "cal": 153
    },
    "stir_fried_fish_7381": {
        "name": "ปลาผัด สูตร 7381",
        "cal": 803
    },
    "stir_fried_soup_7382": {
        "name": "ซุปผัด สูตร 7382",
        "cal": 475
    },
    "grilled_shrimp_7383": {
        "name": "กุ้งย่าง สูตร 7383",
        "cal": 662
    },
    "fried_pork_7384": {
        "name": "หมูทอด สูตร 7384",
        "cal": 399
    },
    "boiled_shrimp_7385": {
        "name": "กุ้งต้ม สูตร 7385",
        "cal": 704
    },
    "fried_chicken_7386": {
        "name": "ไก่ทอด สูตร 7386",
        "cal": 393
    },
    "grilled_shrimp_7387": {
        "name": "กุ้งย่าง สูตร 7387",
        "cal": 190
    },
    "fried_chicken_7388": {
        "name": "ไก่ทอด สูตร 7388",
        "cal": 427
    },
    "boiled_pork_7389": {
        "name": "หมูต้ม สูตร 7389",
        "cal": 189
    },
    "spicy_fish_7390": {
        "name": "ปลายำ สูตร 7390",
        "cal": 642
    },
    "fried_pork_7391": {
        "name": "หมูทอด สูตร 7391",
        "cal": 472
    },
    "spicy_squid_7392": {
        "name": "ปลาหมึกยำ สูตร 7392",
        "cal": 825
    },
    "steamed_beef_7393": {
        "name": "เนื้อนึ่ง สูตร 7393",
        "cal": 56
    },
    "steamed_pork_7394": {
        "name": "หมูนึ่ง สูตร 7394",
        "cal": 746
    },
    "boiled_soup_7395": {
        "name": "ซุปต้ม สูตร 7395",
        "cal": 541
    },
    "fried_noodle_7396": {
        "name": "บะหมี่ทอด สูตร 7396",
        "cal": 204
    },
    "steamed_squid_7397": {
        "name": "ปลาหมึกนึ่ง สูตร 7397",
        "cal": 215
    },
    "fried_beef_7398": {
        "name": "เนื้อทอด สูตร 7398",
        "cal": 648
    },
    "stir_fried_pork_7399": {
        "name": "หมูผัด สูตร 7399",
        "cal": 847
    },
    "steamed_chicken_7400": {
        "name": "ไก่นึ่ง สูตร 7400",
        "cal": 636
    },
    "steamed_fish_7401": {
        "name": "ปลานึ่ง สูตร 7401",
        "cal": 695
    },
    "spicy_beef_7402": {
        "name": "เนื้อยำ สูตร 7402",
        "cal": 649
    },
    "grilled_soup_7403": {
        "name": "ซุปย่าง สูตร 7403",
        "cal": 381
    },
    "fried_fish_7404": {
        "name": "ปลาทอด สูตร 7404",
        "cal": 178
    },
    "boiled_beef_7405": {
        "name": "เนื้อต้ม สูตร 7405",
        "cal": 71
    },
    "steamed_chicken_7406": {
        "name": "ไก่นึ่ง สูตร 7406",
        "cal": 557
    },
    "spicy_beef_7407": {
        "name": "เนื้อยำ สูตร 7407",
        "cal": 776
    },
    "boiled_fish_7408": {
        "name": "ปลาต้ม สูตร 7408",
        "cal": 51
    },
    "stir_fried_soup_7409": {
        "name": "ซุปผัด สูตร 7409",
        "cal": 677
    },
    "boiled_fish_7410": {
        "name": "ปลาต้ม สูตร 7410",
        "cal": 416
    },
    "steamed_rice_7411": {
        "name": "ข้าวนึ่ง สูตร 7411",
        "cal": 273
    },
    "fried_shrimp_7412": {
        "name": "กุ้งทอด สูตร 7412",
        "cal": 345
    },
    "fried_chicken_7413": {
        "name": "ไก่ทอด สูตร 7413",
        "cal": 769
    },
    "fried_shrimp_7414": {
        "name": "กุ้งทอด สูตร 7414",
        "cal": 804
    },
    "boiled_rice_7415": {
        "name": "ข้าวต้ม สูตร 7415",
        "cal": 276
    },
    "steamed_pork_7416": {
        "name": "หมูนึ่ง สูตร 7416",
        "cal": 334
    },
    "boiled_rice_7417": {
        "name": "ข้าวต้ม สูตร 7417",
        "cal": 604
    },
    "stir_fried_fish_7418": {
        "name": "ปลาผัด สูตร 7418",
        "cal": 787
    },
    "boiled_noodle_7419": {
        "name": "บะหมี่ต้ม สูตร 7419",
        "cal": 839
    },
    "boiled_soup_7420": {
        "name": "ซุปต้ม สูตร 7420",
        "cal": 537
    },
    "steamed_beef_7421": {
        "name": "เนื้อนึ่ง สูตร 7421",
        "cal": 329
    },
    "grilled_fish_7422": {
        "name": "ปลาย่าง สูตร 7422",
        "cal": 734
    },
    "spicy_rice_7423": {
        "name": "ข้าวยำ สูตร 7423",
        "cal": 831
    },
    "stir_fried_fish_7424": {
        "name": "ปลาผัด สูตร 7424",
        "cal": 474
    },
    "grilled_squid_7425": {
        "name": "ปลาหมึกย่าง สูตร 7425",
        "cal": 724
    },
    "fried_shrimp_7426": {
        "name": "กุ้งทอด สูตร 7426",
        "cal": 112
    },
    "grilled_shrimp_7427": {
        "name": "กุ้งย่าง สูตร 7427",
        "cal": 690
    },
    "stir_fried_shrimp_7428": {
        "name": "กุ้งผัด สูตร 7428",
        "cal": 211
    },
    "stir_fried_noodle_7429": {
        "name": "บะหมี่ผัด สูตร 7429",
        "cal": 124
    },
    "spicy_beef_7430": {
        "name": "เนื้อยำ สูตร 7430",
        "cal": 497
    },
    "stir_fried_pork_7431": {
        "name": "หมูผัด สูตร 7431",
        "cal": 549
    },
    "boiled_pork_7432": {
        "name": "หมูต้ม สูตร 7432",
        "cal": 804
    },
    "grilled_soup_7433": {
        "name": "ซุปย่าง สูตร 7433",
        "cal": 212
    },
    "steamed_beef_7434": {
        "name": "เนื้อนึ่ง สูตร 7434",
        "cal": 842
    },
    "boiled_pork_7435": {
        "name": "หมูต้ม สูตร 7435",
        "cal": 682
    },
    "stir_fried_fish_7436": {
        "name": "ปลาผัด สูตร 7436",
        "cal": 478
    },
    "steamed_noodle_7437": {
        "name": "บะหมี่นึ่ง สูตร 7437",
        "cal": 668
    },
    "spicy_pork_7438": {
        "name": "หมูยำ สูตร 7438",
        "cal": 785
    },
    "stir_fried_beef_7439": {
        "name": "เนื้อผัด สูตร 7439",
        "cal": 323
    },
    "fried_soup_7440": {
        "name": "ซุปทอด สูตร 7440",
        "cal": 80
    },
    "spicy_fish_7441": {
        "name": "ปลายำ สูตร 7441",
        "cal": 184
    },
    "steamed_rice_7442": {
        "name": "ข้าวนึ่ง สูตร 7442",
        "cal": 194
    },
    "fried_soup_7443": {
        "name": "ซุปทอด สูตร 7443",
        "cal": 60
    },
    "stir_fried_beef_7444": {
        "name": "เนื้อผัด สูตร 7444",
        "cal": 279
    },
    "stir_fried_beef_7445": {
        "name": "เนื้อผัด สูตร 7445",
        "cal": 753
    },
    "grilled_fish_7446": {
        "name": "ปลาย่าง สูตร 7446",
        "cal": 285
    },
    "boiled_rice_7447": {
        "name": "ข้าวต้ม สูตร 7447",
        "cal": 215
    },
    "grilled_squid_7448": {
        "name": "ปลาหมึกย่าง สูตร 7448",
        "cal": 432
    },
    "stir_fried_beef_7449": {
        "name": "เนื้อผัด สูตร 7449",
        "cal": 89
    },
    "fried_fish_7450": {
        "name": "ปลาทอด สูตร 7450",
        "cal": 811
    },
    "grilled_beef_7451": {
        "name": "เนื้อย่าง สูตร 7451",
        "cal": 374
    },
    "steamed_squid_7452": {
        "name": "ปลาหมึกนึ่ง สูตร 7452",
        "cal": 74
    },
    "spicy_squid_7453": {
        "name": "ปลาหมึกยำ สูตร 7453",
        "cal": 747
    },
    "fried_soup_7454": {
        "name": "ซุปทอด สูตร 7454",
        "cal": 789
    },
    "grilled_beef_7455": {
        "name": "เนื้อย่าง สูตร 7455",
        "cal": 39
    },
    "boiled_fish_7456": {
        "name": "ปลาต้ม สูตร 7456",
        "cal": 80
    },
    "boiled_fish_7457": {
        "name": "ปลาต้ม สูตร 7457",
        "cal": 81
    },
    "steamed_noodle_7458": {
        "name": "บะหมี่นึ่ง สูตร 7458",
        "cal": 540
    },
    "grilled_rice_7459": {
        "name": "ข้าวย่าง สูตร 7459",
        "cal": 651
    },
    "stir_fried_pork_7460": {
        "name": "หมูผัด สูตร 7460",
        "cal": 158
    },
    "spicy_beef_7461": {
        "name": "เนื้อยำ สูตร 7461",
        "cal": 623
    },
    "steamed_soup_7462": {
        "name": "ซุปนึ่ง สูตร 7462",
        "cal": 558
    },
    "stir_fried_noodle_7463": {
        "name": "บะหมี่ผัด สูตร 7463",
        "cal": 125
    },
    "boiled_shrimp_7464": {
        "name": "กุ้งต้ม สูตร 7464",
        "cal": 769
    },
    "fried_soup_7465": {
        "name": "ซุปทอด สูตร 7465",
        "cal": 479
    },
    "spicy_noodle_7466": {
        "name": "บะหมี่ยำ สูตร 7466",
        "cal": 105
    },
    "fried_beef_7467": {
        "name": "เนื้อทอด สูตร 7467",
        "cal": 393
    },
    "fried_beef_7468": {
        "name": "เนื้อทอด สูตร 7468",
        "cal": 709
    },
    "steamed_rice_7469": {
        "name": "ข้าวนึ่ง สูตร 7469",
        "cal": 421
    },
    "boiled_chicken_7470": {
        "name": "ไก่ต้ม สูตร 7470",
        "cal": 796
    },
    "grilled_squid_7471": {
        "name": "ปลาหมึกย่าง สูตร 7471",
        "cal": 814
    },
    "grilled_shrimp_7472": {
        "name": "กุ้งย่าง สูตร 7472",
        "cal": 320
    },
    "grilled_shrimp_7473": {
        "name": "กุ้งย่าง สูตร 7473",
        "cal": 288
    },
    "boiled_soup_7474": {
        "name": "ซุปต้ม สูตร 7474",
        "cal": 569
    },
    "stir_fried_rice_7475": {
        "name": "ข้าวผัด สูตร 7475",
        "cal": 580
    },
    "stir_fried_squid_7476": {
        "name": "ปลาหมึกผัด สูตร 7476",
        "cal": 51
    },
    "stir_fried_soup_7477": {
        "name": "ซุปผัด สูตร 7477",
        "cal": 320
    },
    "boiled_shrimp_7478": {
        "name": "กุ้งต้ม สูตร 7478",
        "cal": 459
    },
    "grilled_shrimp_7479": {
        "name": "กุ้งย่าง สูตร 7479",
        "cal": 376
    },
    "boiled_pork_7480": {
        "name": "หมูต้ม สูตร 7480",
        "cal": 92
    },
    "boiled_chicken_7481": {
        "name": "ไก่ต้ม สูตร 7481",
        "cal": 712
    },
    "grilled_soup_7482": {
        "name": "ซุปย่าง สูตร 7482",
        "cal": 696
    },
    "spicy_squid_7483": {
        "name": "ปลาหมึกยำ สูตร 7483",
        "cal": 755
    },
    "steamed_shrimp_7484": {
        "name": "กุ้งนึ่ง สูตร 7484",
        "cal": 240
    },
    "grilled_shrimp_7485": {
        "name": "กุ้งย่าง สูตร 7485",
        "cal": 483
    },
    "steamed_fish_7486": {
        "name": "ปลานึ่ง สูตร 7486",
        "cal": 362
    },
    "spicy_shrimp_7487": {
        "name": "กุ้งยำ สูตร 7487",
        "cal": 842
    },
    "fried_noodle_7488": {
        "name": "บะหมี่ทอด สูตร 7488",
        "cal": 779
    },
    "fried_fish_7489": {
        "name": "ปลาทอด สูตร 7489",
        "cal": 634
    },
    "spicy_beef_7490": {
        "name": "เนื้อยำ สูตร 7490",
        "cal": 589
    },
    "spicy_beef_7491": {
        "name": "เนื้อยำ สูตร 7491",
        "cal": 429
    },
    "stir_fried_soup_7492": {
        "name": "ซุปผัด สูตร 7492",
        "cal": 97
    },
    "grilled_shrimp_7493": {
        "name": "กุ้งย่าง สูตร 7493",
        "cal": 106
    },
    "spicy_pork_7494": {
        "name": "หมูยำ สูตร 7494",
        "cal": 21
    },
    "fried_rice_7495": {
        "name": "ข้าวทอด สูตร 7495",
        "cal": 823
    },
    "stir_fried_rice_7496": {
        "name": "ข้าวผัด สูตร 7496",
        "cal": 63
    },
    "grilled_beef_7497": {
        "name": "เนื้อย่าง สูตร 7497",
        "cal": 433
    },
    "boiled_noodle_7498": {
        "name": "บะหมี่ต้ม สูตร 7498",
        "cal": 344
    },
    "steamed_fish_7499": {
        "name": "ปลานึ่ง สูตร 7499",
        "cal": 686
    },
    "boiled_rice_7500": {
        "name": "ข้าวต้ม สูตร 7500",
        "cal": 498
    },
    "spicy_beef_7501": {
        "name": "เนื้อยำ สูตร 7501",
        "cal": 33
    },
    "boiled_fish_7502": {
        "name": "ปลาต้ม สูตร 7502",
        "cal": 129
    },
    "grilled_fish_7503": {
        "name": "ปลาย่าง สูตร 7503",
        "cal": 577
    },
    "grilled_fish_7504": {
        "name": "ปลาย่าง สูตร 7504",
        "cal": 530
    },
    "boiled_fish_7505": {
        "name": "ปลาต้ม สูตร 7505",
        "cal": 427
    },
    "fried_noodle_7506": {
        "name": "บะหมี่ทอด สูตร 7506",
        "cal": 347
    },
    "grilled_fish_7507": {
        "name": "ปลาย่าง สูตร 7507",
        "cal": 113
    },
    "stir_fried_beef_7508": {
        "name": "เนื้อผัด สูตร 7508",
        "cal": 696
    },
    "grilled_noodle_7509": {
        "name": "บะหมี่ย่าง สูตร 7509",
        "cal": 359
    },
    "grilled_pork_7510": {
        "name": "หมูย่าง สูตร 7510",
        "cal": 494
    },
    "steamed_soup_7511": {
        "name": "ซุปนึ่ง สูตร 7511",
        "cal": 23
    },
    "fried_chicken_7512": {
        "name": "ไก่ทอด สูตร 7512",
        "cal": 731
    },
    "spicy_pork_7513": {
        "name": "หมูยำ สูตร 7513",
        "cal": 799
    },
    "stir_fried_rice_7514": {
        "name": "ข้าวผัด สูตร 7514",
        "cal": 760
    },
    "boiled_squid_7515": {
        "name": "ปลาหมึกต้ม สูตร 7515",
        "cal": 131
    },
    "fried_noodle_7516": {
        "name": "บะหมี่ทอด สูตร 7516",
        "cal": 106
    },
    "fried_pork_7517": {
        "name": "หมูทอด สูตร 7517",
        "cal": 747
    },
    "grilled_beef_7518": {
        "name": "เนื้อย่าง สูตร 7518",
        "cal": 239
    },
    "spicy_soup_7519": {
        "name": "ซุปยำ สูตร 7519",
        "cal": 478
    },
    "stir_fried_beef_7520": {
        "name": "เนื้อผัด สูตร 7520",
        "cal": 739
    },
    "spicy_noodle_7521": {
        "name": "บะหมี่ยำ สูตร 7521",
        "cal": 80
    },
    "fried_beef_7522": {
        "name": "เนื้อทอด สูตร 7522",
        "cal": 487
    },
    "steamed_squid_7523": {
        "name": "ปลาหมึกนึ่ง สูตร 7523",
        "cal": 645
    },
    "boiled_fish_7524": {
        "name": "ปลาต้ม สูตร 7524",
        "cal": 282
    },
    "grilled_beef_7525": {
        "name": "เนื้อย่าง สูตร 7525",
        "cal": 540
    },
    "stir_fried_noodle_7526": {
        "name": "บะหมี่ผัด สูตร 7526",
        "cal": 384
    },
    "fried_pork_7527": {
        "name": "หมูทอด สูตร 7527",
        "cal": 352
    },
    "fried_shrimp_7528": {
        "name": "กุ้งทอด สูตร 7528",
        "cal": 832
    },
    "steamed_rice_7529": {
        "name": "ข้าวนึ่ง สูตร 7529",
        "cal": 151
    },
    "steamed_beef_7530": {
        "name": "เนื้อนึ่ง สูตร 7530",
        "cal": 295
    },
    "grilled_beef_7531": {
        "name": "เนื้อย่าง สูตร 7531",
        "cal": 771
    },
    "spicy_soup_7532": {
        "name": "ซุปยำ สูตร 7532",
        "cal": 612
    },
    "grilled_fish_7533": {
        "name": "ปลาย่าง สูตร 7533",
        "cal": 349
    },
    "steamed_beef_7534": {
        "name": "เนื้อนึ่ง สูตร 7534",
        "cal": 66
    },
    "fried_pork_7535": {
        "name": "หมูทอด สูตร 7535",
        "cal": 91
    },
    "fried_shrimp_7536": {
        "name": "กุ้งทอด สูตร 7536",
        "cal": 358
    },
    "fried_chicken_7537": {
        "name": "ไก่ทอด สูตร 7537",
        "cal": 299
    },
    "steamed_shrimp_7538": {
        "name": "กุ้งนึ่ง สูตร 7538",
        "cal": 609
    },
    "spicy_pork_7539": {
        "name": "หมูยำ สูตร 7539",
        "cal": 296
    },
    "spicy_pork_7540": {
        "name": "หมูยำ สูตร 7540",
        "cal": 290
    },
    "stir_fried_rice_7541": {
        "name": "ข้าวผัด สูตร 7541",
        "cal": 588
    },
    "spicy_shrimp_7542": {
        "name": "กุ้งยำ สูตร 7542",
        "cal": 612
    },
    "fried_squid_7543": {
        "name": "ปลาหมึกทอด สูตร 7543",
        "cal": 685
    },
    "boiled_pork_7544": {
        "name": "หมูต้ม สูตร 7544",
        "cal": 820
    },
    "fried_rice_7545": {
        "name": "ข้าวทอด สูตร 7545",
        "cal": 692
    },
    "grilled_shrimp_7546": {
        "name": "กุ้งย่าง สูตร 7546",
        "cal": 759
    },
    "fried_soup_7547": {
        "name": "ซุปทอด สูตร 7547",
        "cal": 290
    },
    "grilled_pork_7548": {
        "name": "หมูย่าง สูตร 7548",
        "cal": 266
    },
    "steamed_soup_7549": {
        "name": "ซุปนึ่ง สูตร 7549",
        "cal": 331
    },
    "grilled_beef_7550": {
        "name": "เนื้อย่าง สูตร 7550",
        "cal": 135
    },
    "grilled_squid_7551": {
        "name": "ปลาหมึกย่าง สูตร 7551",
        "cal": 778
    },
    "stir_fried_chicken_7552": {
        "name": "ไก่ผัด สูตร 7552",
        "cal": 316
    },
    "fried_squid_7553": {
        "name": "ปลาหมึกทอด สูตร 7553",
        "cal": 349
    },
    "spicy_shrimp_7554": {
        "name": "กุ้งยำ สูตร 7554",
        "cal": 260
    },
    "steamed_soup_7555": {
        "name": "ซุปนึ่ง สูตร 7555",
        "cal": 732
    },
    "boiled_soup_7556": {
        "name": "ซุปต้ม สูตร 7556",
        "cal": 231
    },
    "grilled_rice_7557": {
        "name": "ข้าวย่าง สูตร 7557",
        "cal": 147
    },
    "grilled_fish_7558": {
        "name": "ปลาย่าง สูตร 7558",
        "cal": 246
    },
    "boiled_noodle_7559": {
        "name": "บะหมี่ต้ม สูตร 7559",
        "cal": 334
    },
    "spicy_rice_7560": {
        "name": "ข้าวยำ สูตร 7560",
        "cal": 452
    },
    "spicy_beef_7561": {
        "name": "เนื้อยำ สูตร 7561",
        "cal": 365
    },
    "stir_fried_squid_7562": {
        "name": "ปลาหมึกผัด สูตร 7562",
        "cal": 312
    },
    "grilled_beef_7563": {
        "name": "เนื้อย่าง สูตร 7563",
        "cal": 27
    },
    "boiled_rice_7564": {
        "name": "ข้าวต้ม สูตร 7564",
        "cal": 826
    },
    "steamed_soup_7565": {
        "name": "ซุปนึ่ง สูตร 7565",
        "cal": 230
    },
    "steamed_squid_7566": {
        "name": "ปลาหมึกนึ่ง สูตร 7566",
        "cal": 155
    },
    "stir_fried_shrimp_7567": {
        "name": "กุ้งผัด สูตร 7567",
        "cal": 117
    },
    "grilled_beef_7568": {
        "name": "เนื้อย่าง สูตร 7568",
        "cal": 738
    },
    "boiled_soup_7569": {
        "name": "ซุปต้ม สูตร 7569",
        "cal": 299
    },
    "boiled_rice_7570": {
        "name": "ข้าวต้ม สูตร 7570",
        "cal": 89
    },
    "spicy_fish_7571": {
        "name": "ปลายำ สูตร 7571",
        "cal": 676
    },
    "spicy_soup_7572": {
        "name": "ซุปยำ สูตร 7572",
        "cal": 118
    },
    "boiled_beef_7573": {
        "name": "เนื้อต้ม สูตร 7573",
        "cal": 827
    },
    "spicy_pork_7574": {
        "name": "หมูยำ สูตร 7574",
        "cal": 399
    },
    "grilled_rice_7575": {
        "name": "ข้าวย่าง สูตร 7575",
        "cal": 734
    },
    "spicy_soup_7576": {
        "name": "ซุปยำ สูตร 7576",
        "cal": 357
    },
    "stir_fried_pork_7577": {
        "name": "หมูผัด สูตร 7577",
        "cal": 534
    },
    "stir_fried_squid_7578": {
        "name": "ปลาหมึกผัด สูตร 7578",
        "cal": 674
    },
    "boiled_shrimp_7579": {
        "name": "กุ้งต้ม สูตร 7579",
        "cal": 115
    },
    "steamed_beef_7580": {
        "name": "เนื้อนึ่ง สูตร 7580",
        "cal": 805
    },
    "spicy_fish_7581": {
        "name": "ปลายำ สูตร 7581",
        "cal": 245
    },
    "grilled_squid_7582": {
        "name": "ปลาหมึกย่าง สูตร 7582",
        "cal": 401
    },
    "steamed_chicken_7583": {
        "name": "ไก่นึ่ง สูตร 7583",
        "cal": 403
    },
    "steamed_pork_7584": {
        "name": "หมูนึ่ง สูตร 7584",
        "cal": 333
    },
    "grilled_fish_7585": {
        "name": "ปลาย่าง สูตร 7585",
        "cal": 710
    },
    "boiled_squid_7586": {
        "name": "ปลาหมึกต้ม สูตร 7586",
        "cal": 110
    },
    "grilled_fish_7587": {
        "name": "ปลาย่าง สูตร 7587",
        "cal": 817
    },
    "steamed_beef_7588": {
        "name": "เนื้อนึ่ง สูตร 7588",
        "cal": 56
    },
    "stir_fried_pork_7589": {
        "name": "หมูผัด สูตร 7589",
        "cal": 42
    },
    "boiled_soup_7590": {
        "name": "ซุปต้ม สูตร 7590",
        "cal": 543
    },
    "grilled_rice_7591": {
        "name": "ข้าวย่าง สูตร 7591",
        "cal": 647
    },
    "steamed_soup_7592": {
        "name": "ซุปนึ่ง สูตร 7592",
        "cal": 810
    },
    "boiled_soup_7593": {
        "name": "ซุปต้ม สูตร 7593",
        "cal": 376
    },
    "stir_fried_beef_7594": {
        "name": "เนื้อผัด สูตร 7594",
        "cal": 538
    },
    "spicy_soup_7595": {
        "name": "ซุปยำ สูตร 7595",
        "cal": 421
    },
    "boiled_pork_7596": {
        "name": "หมูต้ม สูตร 7596",
        "cal": 98
    },
    "fried_noodle_7597": {
        "name": "บะหมี่ทอด สูตร 7597",
        "cal": 408
    },
    "fried_chicken_7598": {
        "name": "ไก่ทอด สูตร 7598",
        "cal": 813
    },
    "fried_chicken_7599": {
        "name": "ไก่ทอด สูตร 7599",
        "cal": 62
    },
    "spicy_pork_7600": {
        "name": "หมูยำ สูตร 7600",
        "cal": 458
    },
    "fried_chicken_7601": {
        "name": "ไก่ทอด สูตร 7601",
        "cal": 722
    },
    "spicy_squid_7602": {
        "name": "ปลาหมึกยำ สูตร 7602",
        "cal": 224
    },
    "fried_shrimp_7603": {
        "name": "กุ้งทอด สูตร 7603",
        "cal": 647
    },
    "stir_fried_soup_7604": {
        "name": "ซุปผัด สูตร 7604",
        "cal": 50
    },
    "stir_fried_shrimp_7605": {
        "name": "กุ้งผัด สูตร 7605",
        "cal": 684
    },
    "stir_fried_soup_7606": {
        "name": "ซุปผัด สูตร 7606",
        "cal": 411
    },
    "fried_beef_7607": {
        "name": "เนื้อทอด สูตร 7607",
        "cal": 556
    },
    "boiled_rice_7608": {
        "name": "ข้าวต้ม สูตร 7608",
        "cal": 441
    },
    "spicy_squid_7609": {
        "name": "ปลาหมึกยำ สูตร 7609",
        "cal": 229
    },
    "spicy_fish_7610": {
        "name": "ปลายำ สูตร 7610",
        "cal": 418
    },
    "fried_noodle_7611": {
        "name": "บะหมี่ทอด สูตร 7611",
        "cal": 208
    },
    "fried_chicken_7612": {
        "name": "ไก่ทอด สูตร 7612",
        "cal": 192
    },
    "grilled_shrimp_7613": {
        "name": "กุ้งย่าง สูตร 7613",
        "cal": 328
    },
    "grilled_beef_7614": {
        "name": "เนื้อย่าง สูตร 7614",
        "cal": 432
    },
    "grilled_shrimp_7615": {
        "name": "กุ้งย่าง สูตร 7615",
        "cal": 538
    },
    "grilled_shrimp_7616": {
        "name": "กุ้งย่าง สูตร 7616",
        "cal": 34
    },
    "fried_rice_7617": {
        "name": "ข้าวทอด สูตร 7617",
        "cal": 511
    },
    "spicy_noodle_7618": {
        "name": "บะหมี่ยำ สูตร 7618",
        "cal": 186
    },
    "fried_fish_7619": {
        "name": "ปลาทอด สูตร 7619",
        "cal": 281
    },
    "grilled_squid_7620": {
        "name": "ปลาหมึกย่าง สูตร 7620",
        "cal": 662
    },
    "steamed_noodle_7621": {
        "name": "บะหมี่นึ่ง สูตร 7621",
        "cal": 387
    },
    "spicy_fish_7622": {
        "name": "ปลายำ สูตร 7622",
        "cal": 258
    },
    "spicy_shrimp_7623": {
        "name": "กุ้งยำ สูตร 7623",
        "cal": 28
    },
    "grilled_soup_7624": {
        "name": "ซุปย่าง สูตร 7624",
        "cal": 488
    },
    "fried_fish_7625": {
        "name": "ปลาทอด สูตร 7625",
        "cal": 251
    },
    "fried_fish_7626": {
        "name": "ปลาทอด สูตร 7626",
        "cal": 331
    },
    "stir_fried_shrimp_7627": {
        "name": "กุ้งผัด สูตร 7627",
        "cal": 173
    },
    "fried_squid_7628": {
        "name": "ปลาหมึกทอด สูตร 7628",
        "cal": 373
    },
    "boiled_fish_7629": {
        "name": "ปลาต้ม สูตร 7629",
        "cal": 519
    },
    "stir_fried_chicken_7630": {
        "name": "ไก่ผัด สูตร 7630",
        "cal": 234
    },
    "stir_fried_shrimp_7631": {
        "name": "กุ้งผัด สูตร 7631",
        "cal": 69
    },
    "steamed_pork_7632": {
        "name": "หมูนึ่ง สูตร 7632",
        "cal": 275
    },
    "fried_rice_7633": {
        "name": "ข้าวทอด สูตร 7633",
        "cal": 796
    },
    "stir_fried_noodle_7634": {
        "name": "บะหมี่ผัด สูตร 7634",
        "cal": 345
    },
    "boiled_pork_7635": {
        "name": "หมูต้ม สูตร 7635",
        "cal": 601
    },
    "steamed_fish_7636": {
        "name": "ปลานึ่ง สูตร 7636",
        "cal": 806
    },
    "fried_soup_7637": {
        "name": "ซุปทอด สูตร 7637",
        "cal": 233
    },
    "stir_fried_beef_7638": {
        "name": "เนื้อผัด สูตร 7638",
        "cal": 465
    },
    "stir_fried_soup_7639": {
        "name": "ซุปผัด สูตร 7639",
        "cal": 432
    },
    "steamed_rice_7640": {
        "name": "ข้าวนึ่ง สูตร 7640",
        "cal": 593
    },
    "steamed_noodle_7641": {
        "name": "บะหมี่นึ่ง สูตร 7641",
        "cal": 511
    },
    "spicy_beef_7642": {
        "name": "เนื้อยำ สูตร 7642",
        "cal": 793
    },
    "fried_soup_7643": {
        "name": "ซุปทอด สูตร 7643",
        "cal": 356
    },
    "stir_fried_fish_7644": {
        "name": "ปลาผัด สูตร 7644",
        "cal": 48
    },
    "fried_beef_7645": {
        "name": "เนื้อทอด สูตร 7645",
        "cal": 792
    },
    "spicy_beef_7646": {
        "name": "เนื้อยำ สูตร 7646",
        "cal": 483
    },
    "fried_rice_7647": {
        "name": "ข้าวทอด สูตร 7647",
        "cal": 657
    },
    "grilled_noodle_7648": {
        "name": "บะหมี่ย่าง สูตร 7648",
        "cal": 344
    },
    "spicy_chicken_7649": {
        "name": "ไก่ยำ สูตร 7649",
        "cal": 225
    },
    "fried_pork_7650": {
        "name": "หมูทอด สูตร 7650",
        "cal": 674
    },
    "grilled_soup_7651": {
        "name": "ซุปย่าง สูตร 7651",
        "cal": 76
    },
    "fried_pork_7652": {
        "name": "หมูทอด สูตร 7652",
        "cal": 186
    },
    "stir_fried_pork_7653": {
        "name": "หมูผัด สูตร 7653",
        "cal": 357
    },
    "steamed_rice_7654": {
        "name": "ข้าวนึ่ง สูตร 7654",
        "cal": 268
    },
    "stir_fried_fish_7655": {
        "name": "ปลาผัด สูตร 7655",
        "cal": 358
    },
    "stir_fried_soup_7656": {
        "name": "ซุปผัด สูตร 7656",
        "cal": 435
    },
    "spicy_soup_7657": {
        "name": "ซุปยำ สูตร 7657",
        "cal": 271
    },
    "fried_fish_7658": {
        "name": "ปลาทอด สูตร 7658",
        "cal": 701
    },
    "steamed_soup_7659": {
        "name": "ซุปนึ่ง สูตร 7659",
        "cal": 457
    },
    "stir_fried_pork_7660": {
        "name": "หมูผัด สูตร 7660",
        "cal": 262
    },
    "steamed_chicken_7661": {
        "name": "ไก่นึ่ง สูตร 7661",
        "cal": 816
    },
    "stir_fried_soup_7662": {
        "name": "ซุปผัด สูตร 7662",
        "cal": 84
    },
    "steamed_soup_7663": {
        "name": "ซุปนึ่ง สูตร 7663",
        "cal": 825
    },
    "stir_fried_squid_7664": {
        "name": "ปลาหมึกผัด สูตร 7664",
        "cal": 509
    },
    "stir_fried_squid_7665": {
        "name": "ปลาหมึกผัด สูตร 7665",
        "cal": 420
    },
    "stir_fried_soup_7666": {
        "name": "ซุปผัด สูตร 7666",
        "cal": 632
    },
    "stir_fried_noodle_7667": {
        "name": "บะหมี่ผัด สูตร 7667",
        "cal": 641
    },
    "boiled_soup_7668": {
        "name": "ซุปต้ม สูตร 7668",
        "cal": 337
    },
    "spicy_chicken_7669": {
        "name": "ไก่ยำ สูตร 7669",
        "cal": 565
    },
    "stir_fried_shrimp_7670": {
        "name": "กุ้งผัด สูตร 7670",
        "cal": 359
    },
    "stir_fried_pork_7671": {
        "name": "หมูผัด สูตร 7671",
        "cal": 239
    },
    "boiled_chicken_7672": {
        "name": "ไก่ต้ม สูตร 7672",
        "cal": 419
    },
    "spicy_rice_7673": {
        "name": "ข้าวยำ สูตร 7673",
        "cal": 634
    },
    "stir_fried_soup_7674": {
        "name": "ซุปผัด สูตร 7674",
        "cal": 478
    },
    "stir_fried_pork_7675": {
        "name": "หมูผัด สูตร 7675",
        "cal": 251
    },
    "fried_soup_7676": {
        "name": "ซุปทอด สูตร 7676",
        "cal": 635
    },
    "stir_fried_rice_7677": {
        "name": "ข้าวผัด สูตร 7677",
        "cal": 460
    },
    "spicy_soup_7678": {
        "name": "ซุปยำ สูตร 7678",
        "cal": 53
    },
    "steamed_squid_7679": {
        "name": "ปลาหมึกนึ่ง สูตร 7679",
        "cal": 497
    },
    "steamed_chicken_7680": {
        "name": "ไก่นึ่ง สูตร 7680",
        "cal": 485
    },
    "spicy_rice_7681": {
        "name": "ข้าวยำ สูตร 7681",
        "cal": 828
    },
    "spicy_noodle_7682": {
        "name": "บะหมี่ยำ สูตร 7682",
        "cal": 105
    },
    "boiled_chicken_7683": {
        "name": "ไก่ต้ม สูตร 7683",
        "cal": 540
    },
    "spicy_pork_7684": {
        "name": "หมูยำ สูตร 7684",
        "cal": 429
    },
    "grilled_noodle_7685": {
        "name": "บะหมี่ย่าง สูตร 7685",
        "cal": 487
    },
    "steamed_beef_7686": {
        "name": "เนื้อนึ่ง สูตร 7686",
        "cal": 386
    },
    "steamed_rice_7687": {
        "name": "ข้าวนึ่ง สูตร 7687",
        "cal": 101
    },
    "fried_fish_7688": {
        "name": "ปลาทอด สูตร 7688",
        "cal": 673
    },
    "fried_shrimp_7689": {
        "name": "กุ้งทอด สูตร 7689",
        "cal": 439
    },
    "steamed_rice_7690": {
        "name": "ข้าวนึ่ง สูตร 7690",
        "cal": 441
    },
    "spicy_rice_7691": {
        "name": "ข้าวยำ สูตร 7691",
        "cal": 614
    },
    "fried_fish_7692": {
        "name": "ปลาทอด สูตร 7692",
        "cal": 549
    },
    "fried_soup_7693": {
        "name": "ซุปทอด สูตร 7693",
        "cal": 27
    },
    "fried_beef_7694": {
        "name": "เนื้อทอด สูตร 7694",
        "cal": 245
    },
    "boiled_noodle_7695": {
        "name": "บะหมี่ต้ม สูตร 7695",
        "cal": 438
    },
    "boiled_noodle_7696": {
        "name": "บะหมี่ต้ม สูตร 7696",
        "cal": 667
    },
    "boiled_chicken_7697": {
        "name": "ไก่ต้ม สูตร 7697",
        "cal": 235
    },
    "steamed_chicken_7698": {
        "name": "ไก่นึ่ง สูตร 7698",
        "cal": 125
    },
    "boiled_squid_7699": {
        "name": "ปลาหมึกต้ม สูตร 7699",
        "cal": 55
    },
    "fried_soup_7700": {
        "name": "ซุปทอด สูตร 7700",
        "cal": 325
    },
    "stir_fried_rice_7701": {
        "name": "ข้าวผัด สูตร 7701",
        "cal": 266
    },
    "spicy_pork_7702": {
        "name": "หมูยำ สูตร 7702",
        "cal": 286
    },
    "spicy_pork_7703": {
        "name": "หมูยำ สูตร 7703",
        "cal": 393
    },
    "spicy_pork_7704": {
        "name": "หมูยำ สูตร 7704",
        "cal": 225
    },
    "steamed_rice_7705": {
        "name": "ข้าวนึ่ง สูตร 7705",
        "cal": 570
    },
    "fried_soup_7706": {
        "name": "ซุปทอด สูตร 7706",
        "cal": 544
    },
    "stir_fried_noodle_7707": {
        "name": "บะหมี่ผัด สูตร 7707",
        "cal": 623
    },
    "grilled_soup_7708": {
        "name": "ซุปย่าง สูตร 7708",
        "cal": 458
    },
    "boiled_fish_7709": {
        "name": "ปลาต้ม สูตร 7709",
        "cal": 707
    },
    "fried_beef_7710": {
        "name": "เนื้อทอด สูตร 7710",
        "cal": 242
    },
    "steamed_pork_7711": {
        "name": "หมูนึ่ง สูตร 7711",
        "cal": 760
    },
    "steamed_noodle_7712": {
        "name": "บะหมี่นึ่ง สูตร 7712",
        "cal": 509
    },
    "stir_fried_rice_7713": {
        "name": "ข้าวผัด สูตร 7713",
        "cal": 257
    },
    "steamed_soup_7714": {
        "name": "ซุปนึ่ง สูตร 7714",
        "cal": 657
    },
    "fried_pork_7715": {
        "name": "หมูทอด สูตร 7715",
        "cal": 125
    },
    "steamed_shrimp_7716": {
        "name": "กุ้งนึ่ง สูตร 7716",
        "cal": 567
    },
    "stir_fried_chicken_7717": {
        "name": "ไก่ผัด สูตร 7717",
        "cal": 203
    },
    "boiled_shrimp_7718": {
        "name": "กุ้งต้ม สูตร 7718",
        "cal": 319
    },
    "spicy_soup_7719": {
        "name": "ซุปยำ สูตร 7719",
        "cal": 339
    },
    "grilled_shrimp_7720": {
        "name": "กุ้งย่าง สูตร 7720",
        "cal": 227
    },
    "stir_fried_noodle_7721": {
        "name": "บะหมี่ผัด สูตร 7721",
        "cal": 395
    },
    "steamed_fish_7722": {
        "name": "ปลานึ่ง สูตร 7722",
        "cal": 329
    },
    "boiled_rice_7723": {
        "name": "ข้าวต้ม สูตร 7723",
        "cal": 30
    },
    "stir_fried_beef_7724": {
        "name": "เนื้อผัด สูตร 7724",
        "cal": 544
    },
    "stir_fried_rice_7725": {
        "name": "ข้าวผัด สูตร 7725",
        "cal": 569
    },
    "steamed_shrimp_7726": {
        "name": "กุ้งนึ่ง สูตร 7726",
        "cal": 115
    },
    "stir_fried_rice_7727": {
        "name": "ข้าวผัด สูตร 7727",
        "cal": 221
    },
    "fried_squid_7728": {
        "name": "ปลาหมึกทอด สูตร 7728",
        "cal": 268
    },
    "spicy_fish_7729": {
        "name": "ปลายำ สูตร 7729",
        "cal": 401
    },
    "fried_chicken_7730": {
        "name": "ไก่ทอด สูตร 7730",
        "cal": 350
    },
    "steamed_chicken_7731": {
        "name": "ไก่นึ่ง สูตร 7731",
        "cal": 463
    },
    "boiled_pork_7732": {
        "name": "หมูต้ม สูตร 7732",
        "cal": 393
    },
    "spicy_fish_7733": {
        "name": "ปลายำ สูตร 7733",
        "cal": 833
    },
    "fried_shrimp_7734": {
        "name": "กุ้งทอด สูตร 7734",
        "cal": 803
    },
    "fried_pork_7735": {
        "name": "หมูทอด สูตร 7735",
        "cal": 389
    },
    "fried_pork_7736": {
        "name": "หมูทอด สูตร 7736",
        "cal": 21
    },
    "stir_fried_beef_7737": {
        "name": "เนื้อผัด สูตร 7737",
        "cal": 475
    },
    "stir_fried_chicken_7738": {
        "name": "ไก่ผัด สูตร 7738",
        "cal": 570
    },
    "grilled_noodle_7739": {
        "name": "บะหมี่ย่าง สูตร 7739",
        "cal": 538
    },
    "steamed_chicken_7740": {
        "name": "ไก่นึ่ง สูตร 7740",
        "cal": 647
    },
    "fried_chicken_7741": {
        "name": "ไก่ทอด สูตร 7741",
        "cal": 545
    },
    "boiled_beef_7742": {
        "name": "เนื้อต้ม สูตร 7742",
        "cal": 211
    },
    "fried_noodle_7743": {
        "name": "บะหมี่ทอด สูตร 7743",
        "cal": 460
    },
    "grilled_chicken_7744": {
        "name": "ไก่ย่าง สูตร 7744",
        "cal": 465
    },
    "boiled_pork_7745": {
        "name": "หมูต้ม สูตร 7745",
        "cal": 428
    },
    "stir_fried_shrimp_7746": {
        "name": "กุ้งผัด สูตร 7746",
        "cal": 331
    },
    "fried_rice_7747": {
        "name": "ข้าวทอด สูตร 7747",
        "cal": 683
    },
    "stir_fried_rice_7748": {
        "name": "ข้าวผัด สูตร 7748",
        "cal": 131
    },
    "stir_fried_beef_7749": {
        "name": "เนื้อผัด สูตร 7749",
        "cal": 352
    },
    "boiled_soup_7750": {
        "name": "ซุปต้ม สูตร 7750",
        "cal": 279
    },
    "boiled_shrimp_7751": {
        "name": "กุ้งต้ม สูตร 7751",
        "cal": 662
    },
    "steamed_beef_7752": {
        "name": "เนื้อนึ่ง สูตร 7752",
        "cal": 314
    },
    "grilled_rice_7753": {
        "name": "ข้าวย่าง สูตร 7753",
        "cal": 770
    },
    "steamed_soup_7754": {
        "name": "ซุปนึ่ง สูตร 7754",
        "cal": 169
    },
    "fried_rice_7755": {
        "name": "ข้าวทอด สูตร 7755",
        "cal": 468
    },
    "steamed_pork_7756": {
        "name": "หมูนึ่ง สูตร 7756",
        "cal": 194
    },
    "grilled_rice_7757": {
        "name": "ข้าวย่าง สูตร 7757",
        "cal": 363
    },
    "fried_noodle_7758": {
        "name": "บะหมี่ทอด สูตร 7758",
        "cal": 507
    },
    "steamed_noodle_7759": {
        "name": "บะหมี่นึ่ง สูตร 7759",
        "cal": 774
    },
    "stir_fried_noodle_7760": {
        "name": "บะหมี่ผัด สูตร 7760",
        "cal": 208
    },
    "grilled_pork_7761": {
        "name": "หมูย่าง สูตร 7761",
        "cal": 543
    },
    "spicy_shrimp_7762": {
        "name": "กุ้งยำ สูตร 7762",
        "cal": 202
    },
    "boiled_pork_7763": {
        "name": "หมูต้ม สูตร 7763",
        "cal": 567
    },
    "stir_fried_squid_7764": {
        "name": "ปลาหมึกผัด สูตร 7764",
        "cal": 623
    },
    "fried_chicken_7765": {
        "name": "ไก่ทอด สูตร 7765",
        "cal": 413
    },
    "steamed_soup_7766": {
        "name": "ซุปนึ่ง สูตร 7766",
        "cal": 813
    },
    "fried_squid_7767": {
        "name": "ปลาหมึกทอด สูตร 7767",
        "cal": 331
    },
    "spicy_pork_7768": {
        "name": "หมูยำ สูตร 7768",
        "cal": 789
    },
    "spicy_beef_7769": {
        "name": "เนื้อยำ สูตร 7769",
        "cal": 377
    },
    "spicy_rice_7770": {
        "name": "ข้าวยำ สูตร 7770",
        "cal": 537
    },
    "grilled_squid_7771": {
        "name": "ปลาหมึกย่าง สูตร 7771",
        "cal": 372
    },
    "stir_fried_fish_7772": {
        "name": "ปลาผัด สูตร 7772",
        "cal": 54
    },
    "fried_beef_7773": {
        "name": "เนื้อทอด สูตร 7773",
        "cal": 790
    },
    "spicy_squid_7774": {
        "name": "ปลาหมึกยำ สูตร 7774",
        "cal": 441
    },
    "spicy_fish_7775": {
        "name": "ปลายำ สูตร 7775",
        "cal": 58
    },
    "grilled_fish_7776": {
        "name": "ปลาย่าง สูตร 7776",
        "cal": 155
    },
    "spicy_soup_7777": {
        "name": "ซุปยำ สูตร 7777",
        "cal": 391
    },
    "steamed_chicken_7778": {
        "name": "ไก่นึ่ง สูตร 7778",
        "cal": 527
    },
    "grilled_shrimp_7779": {
        "name": "กุ้งย่าง สูตร 7779",
        "cal": 308
    },
    "boiled_noodle_7780": {
        "name": "บะหมี่ต้ม สูตร 7780",
        "cal": 708
    },
    "boiled_beef_7781": {
        "name": "เนื้อต้ม สูตร 7781",
        "cal": 682
    },
    "stir_fried_rice_7782": {
        "name": "ข้าวผัด สูตร 7782",
        "cal": 605
    },
    "grilled_chicken_7783": {
        "name": "ไก่ย่าง สูตร 7783",
        "cal": 146
    },
    "fried_squid_7784": {
        "name": "ปลาหมึกทอด สูตร 7784",
        "cal": 598
    },
    "fried_pork_7785": {
        "name": "หมูทอด สูตร 7785",
        "cal": 658
    },
    "stir_fried_noodle_7786": {
        "name": "บะหมี่ผัด สูตร 7786",
        "cal": 285
    },
    "grilled_squid_7787": {
        "name": "ปลาหมึกย่าง สูตร 7787",
        "cal": 516
    },
    "spicy_shrimp_7788": {
        "name": "กุ้งยำ สูตร 7788",
        "cal": 533
    },
    "stir_fried_chicken_7789": {
        "name": "ไก่ผัด สูตร 7789",
        "cal": 199
    },
    "grilled_fish_7790": {
        "name": "ปลาย่าง สูตร 7790",
        "cal": 408
    },
    "boiled_rice_7791": {
        "name": "ข้าวต้ม สูตร 7791",
        "cal": 638
    },
    "steamed_pork_7792": {
        "name": "หมูนึ่ง สูตร 7792",
        "cal": 303
    },
    "spicy_beef_7793": {
        "name": "เนื้อยำ สูตร 7793",
        "cal": 451
    },
    "boiled_noodle_7794": {
        "name": "บะหมี่ต้ม สูตร 7794",
        "cal": 62
    },
    "stir_fried_soup_7795": {
        "name": "ซุปผัด สูตร 7795",
        "cal": 161
    },
    "steamed_pork_7796": {
        "name": "หมูนึ่ง สูตร 7796",
        "cal": 308
    },
    "fried_chicken_7797": {
        "name": "ไก่ทอด สูตร 7797",
        "cal": 93
    },
    "fried_chicken_7798": {
        "name": "ไก่ทอด สูตร 7798",
        "cal": 144
    },
    "fried_pork_7799": {
        "name": "หมูทอด สูตร 7799",
        "cal": 384
    },
    "grilled_squid_7800": {
        "name": "ปลาหมึกย่าง สูตร 7800",
        "cal": 165
    },
    "grilled_squid_7801": {
        "name": "ปลาหมึกย่าง สูตร 7801",
        "cal": 584
    },
    "grilled_rice_7802": {
        "name": "ข้าวย่าง สูตร 7802",
        "cal": 169
    },
    "grilled_soup_7803": {
        "name": "ซุปย่าง สูตร 7803",
        "cal": 319
    },
    "stir_fried_chicken_7804": {
        "name": "ไก่ผัด สูตร 7804",
        "cal": 316
    },
    "grilled_rice_7805": {
        "name": "ข้าวย่าง สูตร 7805",
        "cal": 702
    },
    "stir_fried_beef_7806": {
        "name": "เนื้อผัด สูตร 7806",
        "cal": 559
    },
    "fried_shrimp_7807": {
        "name": "กุ้งทอด สูตร 7807",
        "cal": 215
    },
    "fried_shrimp_7808": {
        "name": "กุ้งทอด สูตร 7808",
        "cal": 402
    },
    "grilled_rice_7809": {
        "name": "ข้าวย่าง สูตร 7809",
        "cal": 748
    },
    "stir_fried_chicken_7810": {
        "name": "ไก่ผัด สูตร 7810",
        "cal": 618
    },
    "steamed_rice_7811": {
        "name": "ข้าวนึ่ง สูตร 7811",
        "cal": 72
    },
    "grilled_rice_7812": {
        "name": "ข้าวย่าง สูตร 7812",
        "cal": 805
    },
    "steamed_squid_7813": {
        "name": "ปลาหมึกนึ่ง สูตร 7813",
        "cal": 88
    },
    "spicy_chicken_7814": {
        "name": "ไก่ยำ สูตร 7814",
        "cal": 284
    },
    "spicy_fish_7815": {
        "name": "ปลายำ สูตร 7815",
        "cal": 77
    },
    "stir_fried_chicken_7816": {
        "name": "ไก่ผัด สูตร 7816",
        "cal": 444
    },
    "boiled_shrimp_7817": {
        "name": "กุ้งต้ม สูตร 7817",
        "cal": 301
    },
    "stir_fried_pork_7818": {
        "name": "หมูผัด สูตร 7818",
        "cal": 758
    },
    "steamed_chicken_7819": {
        "name": "ไก่นึ่ง สูตร 7819",
        "cal": 658
    },
    "fried_noodle_7820": {
        "name": "บะหมี่ทอด สูตร 7820",
        "cal": 459
    },
    "spicy_chicken_7821": {
        "name": "ไก่ยำ สูตร 7821",
        "cal": 600
    },
    "fried_beef_7822": {
        "name": "เนื้อทอด สูตร 7822",
        "cal": 686
    },
    "fried_shrimp_7823": {
        "name": "กุ้งทอด สูตร 7823",
        "cal": 174
    },
    "steamed_soup_7824": {
        "name": "ซุปนึ่ง สูตร 7824",
        "cal": 825
    },
    "boiled_soup_7825": {
        "name": "ซุปต้ม สูตร 7825",
        "cal": 257
    },
    "spicy_rice_7826": {
        "name": "ข้าวยำ สูตร 7826",
        "cal": 270
    },
    "stir_fried_soup_7827": {
        "name": "ซุปผัด สูตร 7827",
        "cal": 88
    },
    "boiled_chicken_7828": {
        "name": "ไก่ต้ม สูตร 7828",
        "cal": 757
    },
    "grilled_noodle_7829": {
        "name": "บะหมี่ย่าง สูตร 7829",
        "cal": 33
    },
    "boiled_noodle_7830": {
        "name": "บะหมี่ต้ม สูตร 7830",
        "cal": 581
    },
    "steamed_squid_7831": {
        "name": "ปลาหมึกนึ่ง สูตร 7831",
        "cal": 586
    },
    "steamed_soup_7832": {
        "name": "ซุปนึ่ง สูตร 7832",
        "cal": 830
    },
    "grilled_pork_7833": {
        "name": "หมูย่าง สูตร 7833",
        "cal": 318
    },
    "boiled_shrimp_7834": {
        "name": "กุ้งต้ม สูตร 7834",
        "cal": 843
    },
    "spicy_squid_7835": {
        "name": "ปลาหมึกยำ สูตร 7835",
        "cal": 535
    },
    "stir_fried_pork_7836": {
        "name": "หมูผัด สูตร 7836",
        "cal": 307
    },
    "stir_fried_chicken_7837": {
        "name": "ไก่ผัด สูตร 7837",
        "cal": 242
    },
    "fried_chicken_7838": {
        "name": "ไก่ทอด สูตร 7838",
        "cal": 736
    },
    "fried_beef_7839": {
        "name": "เนื้อทอด สูตร 7839",
        "cal": 459
    },
    "stir_fried_fish_7840": {
        "name": "ปลาผัด สูตร 7840",
        "cal": 262
    },
    "grilled_noodle_7841": {
        "name": "บะหมี่ย่าง สูตร 7841",
        "cal": 453
    },
    "steamed_chicken_7842": {
        "name": "ไก่นึ่ง สูตร 7842",
        "cal": 837
    },
    "spicy_fish_7843": {
        "name": "ปลายำ สูตร 7843",
        "cal": 304
    },
    "stir_fried_rice_7844": {
        "name": "ข้าวผัด สูตร 7844",
        "cal": 585
    },
    "boiled_chicken_7845": {
        "name": "ไก่ต้ม สูตร 7845",
        "cal": 273
    },
    "spicy_shrimp_7846": {
        "name": "กุ้งยำ สูตร 7846",
        "cal": 775
    },
    "spicy_squid_7847": {
        "name": "ปลาหมึกยำ สูตร 7847",
        "cal": 305
    },
    "stir_fried_beef_7848": {
        "name": "เนื้อผัด สูตร 7848",
        "cal": 574
    },
    "stir_fried_chicken_7849": {
        "name": "ไก่ผัด สูตร 7849",
        "cal": 223
    },
    "steamed_noodle_7850": {
        "name": "บะหมี่นึ่ง สูตร 7850",
        "cal": 509
    },
    "boiled_chicken_7851": {
        "name": "ไก่ต้ม สูตร 7851",
        "cal": 250
    },
    "stir_fried_rice_7852": {
        "name": "ข้าวผัด สูตร 7852",
        "cal": 811
    },
    "grilled_noodle_7853": {
        "name": "บะหมี่ย่าง สูตร 7853",
        "cal": 499
    },
    "steamed_shrimp_7854": {
        "name": "กุ้งนึ่ง สูตร 7854",
        "cal": 202
    },
    "fried_shrimp_7855": {
        "name": "กุ้งทอด สูตร 7855",
        "cal": 425
    },
    "fried_fish_7856": {
        "name": "ปลาทอด สูตร 7856",
        "cal": 196
    },
    "stir_fried_shrimp_7857": {
        "name": "กุ้งผัด สูตร 7857",
        "cal": 347
    },
    "fried_beef_7858": {
        "name": "เนื้อทอด สูตร 7858",
        "cal": 207
    },
    "boiled_soup_7859": {
        "name": "ซุปต้ม สูตร 7859",
        "cal": 152
    },
    "steamed_beef_7860": {
        "name": "เนื้อนึ่ง สูตร 7860",
        "cal": 428
    },
    "boiled_pork_7861": {
        "name": "หมูต้ม สูตร 7861",
        "cal": 815
    },
    "grilled_pork_7862": {
        "name": "หมูย่าง สูตร 7862",
        "cal": 337
    },
    "spicy_shrimp_7863": {
        "name": "กุ้งยำ สูตร 7863",
        "cal": 228
    },
    "stir_fried_chicken_7864": {
        "name": "ไก่ผัด สูตร 7864",
        "cal": 313
    },
    "stir_fried_fish_7865": {
        "name": "ปลาผัด สูตร 7865",
        "cal": 693
    },
    "fried_pork_7866": {
        "name": "หมูทอด สูตร 7866",
        "cal": 597
    },
    "spicy_soup_7867": {
        "name": "ซุปยำ สูตร 7867",
        "cal": 511
    },
    "steamed_rice_7868": {
        "name": "ข้าวนึ่ง สูตร 7868",
        "cal": 551
    },
    "spicy_squid_7869": {
        "name": "ปลาหมึกยำ สูตร 7869",
        "cal": 293
    },
    "boiled_shrimp_7870": {
        "name": "กุ้งต้ม สูตร 7870",
        "cal": 263
    },
    "steamed_beef_7871": {
        "name": "เนื้อนึ่ง สูตร 7871",
        "cal": 81
    },
    "spicy_shrimp_7872": {
        "name": "กุ้งยำ สูตร 7872",
        "cal": 143
    },
    "boiled_pork_7873": {
        "name": "หมูต้ม สูตร 7873",
        "cal": 268
    },
    "grilled_squid_7874": {
        "name": "ปลาหมึกย่าง สูตร 7874",
        "cal": 479
    },
    "fried_soup_7875": {
        "name": "ซุปทอด สูตร 7875",
        "cal": 178
    },
    "stir_fried_squid_7876": {
        "name": "ปลาหมึกผัด สูตร 7876",
        "cal": 58
    },
    "steamed_chicken_7877": {
        "name": "ไก่นึ่ง สูตร 7877",
        "cal": 534
    },
    "fried_beef_7878": {
        "name": "เนื้อทอด สูตร 7878",
        "cal": 625
    },
    "grilled_shrimp_7879": {
        "name": "กุ้งย่าง สูตร 7879",
        "cal": 91
    },
    "spicy_chicken_7880": {
        "name": "ไก่ยำ สูตร 7880",
        "cal": 722
    },
    "grilled_fish_7881": {
        "name": "ปลาย่าง สูตร 7881",
        "cal": 761
    },
    "steamed_shrimp_7882": {
        "name": "กุ้งนึ่ง สูตร 7882",
        "cal": 353
    },
    "grilled_beef_7883": {
        "name": "เนื้อย่าง สูตร 7883",
        "cal": 375
    },
    "stir_fried_squid_7884": {
        "name": "ปลาหมึกผัด สูตร 7884",
        "cal": 826
    },
    "steamed_beef_7885": {
        "name": "เนื้อนึ่ง สูตร 7885",
        "cal": 280
    },
    "boiled_rice_7886": {
        "name": "ข้าวต้ม สูตร 7886",
        "cal": 181
    },
    "fried_soup_7887": {
        "name": "ซุปทอด สูตร 7887",
        "cal": 503
    },
    "steamed_squid_7888": {
        "name": "ปลาหมึกนึ่ง สูตร 7888",
        "cal": 283
    },
    "fried_fish_7889": {
        "name": "ปลาทอด สูตร 7889",
        "cal": 781
    },
    "spicy_soup_7890": {
        "name": "ซุปยำ สูตร 7890",
        "cal": 88
    },
    "spicy_rice_7891": {
        "name": "ข้าวยำ สูตร 7891",
        "cal": 728
    },
    "fried_rice_7892": {
        "name": "ข้าวทอด สูตร 7892",
        "cal": 818
    },
    "steamed_fish_7893": {
        "name": "ปลานึ่ง สูตร 7893",
        "cal": 628
    },
    "steamed_beef_7894": {
        "name": "เนื้อนึ่ง สูตร 7894",
        "cal": 77
    },
    "boiled_squid_7895": {
        "name": "ปลาหมึกต้ม สูตร 7895",
        "cal": 696
    },
    "boiled_soup_7896": {
        "name": "ซุปต้ม สูตร 7896",
        "cal": 241
    },
    "fried_noodle_7897": {
        "name": "บะหมี่ทอด สูตร 7897",
        "cal": 153
    },
    "boiled_soup_7898": {
        "name": "ซุปต้ม สูตร 7898",
        "cal": 257
    },
    "grilled_noodle_7899": {
        "name": "บะหมี่ย่าง สูตร 7899",
        "cal": 657
    },
    "grilled_shrimp_7900": {
        "name": "กุ้งย่าง สูตร 7900",
        "cal": 554
    },
    "steamed_fish_7901": {
        "name": "ปลานึ่ง สูตร 7901",
        "cal": 186
    },
    "spicy_noodle_7902": {
        "name": "บะหมี่ยำ สูตร 7902",
        "cal": 719
    },
    "steamed_beef_7903": {
        "name": "เนื้อนึ่ง สูตร 7903",
        "cal": 659
    },
    "steamed_pork_7904": {
        "name": "หมูนึ่ง สูตร 7904",
        "cal": 392
    },
    "grilled_beef_7905": {
        "name": "เนื้อย่าง สูตร 7905",
        "cal": 495
    },
    "steamed_noodle_7906": {
        "name": "บะหมี่นึ่ง สูตร 7906",
        "cal": 509
    },
    "grilled_noodle_7907": {
        "name": "บะหมี่ย่าง สูตร 7907",
        "cal": 30
    },
    "fried_fish_7908": {
        "name": "ปลาทอด สูตร 7908",
        "cal": 316
    },
    "boiled_shrimp_7909": {
        "name": "กุ้งต้ม สูตร 7909",
        "cal": 121
    },
    "fried_fish_7910": {
        "name": "ปลาทอด สูตร 7910",
        "cal": 163
    },
    "stir_fried_pork_7911": {
        "name": "หมูผัด สูตร 7911",
        "cal": 837
    },
    "stir_fried_beef_7912": {
        "name": "เนื้อผัด สูตร 7912",
        "cal": 229
    },
    "boiled_chicken_7913": {
        "name": "ไก่ต้ม สูตร 7913",
        "cal": 274
    },
    "fried_shrimp_7914": {
        "name": "กุ้งทอด สูตร 7914",
        "cal": 621
    },
    "fried_fish_7915": {
        "name": "ปลาทอด สูตร 7915",
        "cal": 707
    },
    "boiled_beef_7916": {
        "name": "เนื้อต้ม สูตร 7916",
        "cal": 26
    },
    "stir_fried_beef_7917": {
        "name": "เนื้อผัด สูตร 7917",
        "cal": 630
    },
    "stir_fried_squid_7918": {
        "name": "ปลาหมึกผัด สูตร 7918",
        "cal": 573
    },
    "grilled_noodle_7919": {
        "name": "บะหมี่ย่าง สูตร 7919",
        "cal": 841
    },
    "stir_fried_beef_7920": {
        "name": "เนื้อผัด สูตร 7920",
        "cal": 376
    },
    "boiled_soup_7921": {
        "name": "ซุปต้ม สูตร 7921",
        "cal": 265
    },
    "steamed_shrimp_7922": {
        "name": "กุ้งนึ่ง สูตร 7922",
        "cal": 304
    },
    "boiled_beef_7923": {
        "name": "เนื้อต้ม สูตร 7923",
        "cal": 686
    },
    "boiled_fish_7924": {
        "name": "ปลาต้ม สูตร 7924",
        "cal": 177
    },
    "fried_noodle_7925": {
        "name": "บะหมี่ทอด สูตร 7925",
        "cal": 32
    },
    "stir_fried_shrimp_7926": {
        "name": "กุ้งผัด สูตร 7926",
        "cal": 807
    },
    "steamed_chicken_7927": {
        "name": "ไก่นึ่ง สูตร 7927",
        "cal": 216
    },
    "stir_fried_rice_7928": {
        "name": "ข้าวผัด สูตร 7928",
        "cal": 214
    },
    "boiled_noodle_7929": {
        "name": "บะหมี่ต้ม สูตร 7929",
        "cal": 506
    },
    "steamed_soup_7930": {
        "name": "ซุปนึ่ง สูตร 7930",
        "cal": 467
    },
    "spicy_beef_7931": {
        "name": "เนื้อยำ สูตร 7931",
        "cal": 292
    },
    "stir_fried_squid_7932": {
        "name": "ปลาหมึกผัด สูตร 7932",
        "cal": 130
    },
    "grilled_chicken_7933": {
        "name": "ไก่ย่าง สูตร 7933",
        "cal": 510
    },
    "fried_soup_7934": {
        "name": "ซุปทอด สูตร 7934",
        "cal": 353
    },
    "steamed_shrimp_7935": {
        "name": "กุ้งนึ่ง สูตร 7935",
        "cal": 383
    },
    "stir_fried_rice_7936": {
        "name": "ข้าวผัด สูตร 7936",
        "cal": 849
    },
    "spicy_chicken_7937": {
        "name": "ไก่ยำ สูตร 7937",
        "cal": 475
    },
    "grilled_pork_7938": {
        "name": "หมูย่าง สูตร 7938",
        "cal": 758
    },
    "boiled_soup_7939": {
        "name": "ซุปต้ม สูตร 7939",
        "cal": 773
    },
    "fried_rice_7940": {
        "name": "ข้าวทอด สูตร 7940",
        "cal": 511
    },
    "spicy_rice_7941": {
        "name": "ข้าวยำ สูตร 7941",
        "cal": 376
    },
    "grilled_soup_7942": {
        "name": "ซุปย่าง สูตร 7942",
        "cal": 351
    },
    "spicy_rice_7943": {
        "name": "ข้าวยำ สูตร 7943",
        "cal": 331
    },
    "grilled_pork_7944": {
        "name": "หมูย่าง สูตร 7944",
        "cal": 702
    },
    "boiled_noodle_7945": {
        "name": "บะหมี่ต้ม สูตร 7945",
        "cal": 51
    },
    "spicy_fish_7946": {
        "name": "ปลายำ สูตร 7946",
        "cal": 38
    },
    "steamed_pork_7947": {
        "name": "หมูนึ่ง สูตร 7947",
        "cal": 783
    },
    "stir_fried_beef_7948": {
        "name": "เนื้อผัด สูตร 7948",
        "cal": 122
    },
    "fried_rice_7949": {
        "name": "ข้าวทอด สูตร 7949",
        "cal": 633
    },
    "stir_fried_rice_7950": {
        "name": "ข้าวผัด สูตร 7950",
        "cal": 175
    },
    "grilled_noodle_7951": {
        "name": "บะหมี่ย่าง สูตร 7951",
        "cal": 279
    },
    "boiled_squid_7952": {
        "name": "ปลาหมึกต้ม สูตร 7952",
        "cal": 94
    },
    "fried_shrimp_7953": {
        "name": "กุ้งทอด สูตร 7953",
        "cal": 398
    },
    "steamed_squid_7954": {
        "name": "ปลาหมึกนึ่ง สูตร 7954",
        "cal": 760
    },
    "steamed_noodle_7955": {
        "name": "บะหมี่นึ่ง สูตร 7955",
        "cal": 806
    },
    "spicy_soup_7956": {
        "name": "ซุปยำ สูตร 7956",
        "cal": 277
    },
    "spicy_shrimp_7957": {
        "name": "กุ้งยำ สูตร 7957",
        "cal": 311
    },
    "boiled_noodle_7958": {
        "name": "บะหมี่ต้ม สูตร 7958",
        "cal": 326
    },
    "spicy_beef_7959": {
        "name": "เนื้อยำ สูตร 7959",
        "cal": 204
    },
    "steamed_rice_7960": {
        "name": "ข้าวนึ่ง สูตร 7960",
        "cal": 103
    },
    "spicy_fish_7961": {
        "name": "ปลายำ สูตร 7961",
        "cal": 634
    },
    "boiled_noodle_7962": {
        "name": "บะหมี่ต้ม สูตร 7962",
        "cal": 99
    },
    "grilled_fish_7963": {
        "name": "ปลาย่าง สูตร 7963",
        "cal": 423
    },
    "fried_chicken_7964": {
        "name": "ไก่ทอด สูตร 7964",
        "cal": 623
    },
    "steamed_chicken_7965": {
        "name": "ไก่นึ่ง สูตร 7965",
        "cal": 645
    },
    "grilled_pork_7966": {
        "name": "หมูย่าง สูตร 7966",
        "cal": 180
    },
    "fried_pork_7967": {
        "name": "หมูทอด สูตร 7967",
        "cal": 763
    },
    "spicy_rice_7968": {
        "name": "ข้าวยำ สูตร 7968",
        "cal": 159
    },
    "stir_fried_squid_7969": {
        "name": "ปลาหมึกผัด สูตร 7969",
        "cal": 801
    },
    "boiled_squid_7970": {
        "name": "ปลาหมึกต้ม สูตร 7970",
        "cal": 303
    },
    "steamed_pork_7971": {
        "name": "หมูนึ่ง สูตร 7971",
        "cal": 302
    },
    "spicy_noodle_7972": {
        "name": "บะหมี่ยำ สูตร 7972",
        "cal": 295
    },
    "fried_pork_7973": {
        "name": "หมูทอด สูตร 7973",
        "cal": 308
    },
    "steamed_pork_7974": {
        "name": "หมูนึ่ง สูตร 7974",
        "cal": 562
    },
    "grilled_soup_7975": {
        "name": "ซุปย่าง สูตร 7975",
        "cal": 521
    },
    "fried_noodle_7976": {
        "name": "บะหมี่ทอด สูตร 7976",
        "cal": 646
    },
    "spicy_pork_7977": {
        "name": "หมูยำ สูตร 7977",
        "cal": 337
    },
    "boiled_squid_7978": {
        "name": "ปลาหมึกต้ม สูตร 7978",
        "cal": 519
    },
    "fried_beef_7979": {
        "name": "เนื้อทอด สูตร 7979",
        "cal": 249
    },
    "grilled_noodle_7980": {
        "name": "บะหมี่ย่าง สูตร 7980",
        "cal": 428
    },
    "stir_fried_chicken_7981": {
        "name": "ไก่ผัด สูตร 7981",
        "cal": 271
    },
    "grilled_rice_7982": {
        "name": "ข้าวย่าง สูตร 7982",
        "cal": 434
    },
    "grilled_fish_7983": {
        "name": "ปลาย่าง สูตร 7983",
        "cal": 501
    },
    "boiled_squid_7984": {
        "name": "ปลาหมึกต้ม สูตร 7984",
        "cal": 720
    },
    "stir_fried_beef_7985": {
        "name": "เนื้อผัด สูตร 7985",
        "cal": 217
    },
    "spicy_pork_7986": {
        "name": "หมูยำ สูตร 7986",
        "cal": 269
    },
    "steamed_fish_7987": {
        "name": "ปลานึ่ง สูตร 7987",
        "cal": 533
    },
    "boiled_beef_7988": {
        "name": "เนื้อต้ม สูตร 7988",
        "cal": 261
    },
    "grilled_noodle_7989": {
        "name": "บะหมี่ย่าง สูตร 7989",
        "cal": 512
    },
    "spicy_rice_7990": {
        "name": "ข้าวยำ สูตร 7990",
        "cal": 811
    },
    "grilled_squid_7991": {
        "name": "ปลาหมึกย่าง สูตร 7991",
        "cal": 50
    },
    "fried_pork_7992": {
        "name": "หมูทอด สูตร 7992",
        "cal": 217
    },
    "stir_fried_rice_7993": {
        "name": "ข้าวผัด สูตร 7993",
        "cal": 616
    },
    "grilled_chicken_7994": {
        "name": "ไก่ย่าง สูตร 7994",
        "cal": 494
    },
    "fried_pork_7995": {
        "name": "หมูทอด สูตร 7995",
        "cal": 179
    },
    "spicy_chicken_7996": {
        "name": "ไก่ยำ สูตร 7996",
        "cal": 781
    },
    "fried_chicken_7997": {
        "name": "ไก่ทอด สูตร 7997",
        "cal": 555
    },
    "spicy_squid_7998": {
        "name": "ปลาหมึกยำ สูตร 7998",
        "cal": 166
    },
    "stir_fried_pork_7999": {
        "name": "หมูผัด สูตร 7999",
        "cal": 683
    },
    "fried_soup_8000": {
        "name": "ซุปทอด สูตร 8000",
        "cal": 743
    },
    "boiled_chicken_8001": {
        "name": "ไก่ต้ม สูตร 8001",
        "cal": 302
    },
    "fried_rice_8002": {
        "name": "ข้าวทอด สูตร 8002",
        "cal": 627
    },
    "steamed_rice_8003": {
        "name": "ข้าวนึ่ง สูตร 8003",
        "cal": 514
    },
    "stir_fried_rice_8004": {
        "name": "ข้าวผัด สูตร 8004",
        "cal": 238
    },
    "fried_rice_8005": {
        "name": "ข้าวทอด สูตร 8005",
        "cal": 674
    },
    "boiled_shrimp_8006": {
        "name": "กุ้งต้ม สูตร 8006",
        "cal": 584
    },
    "grilled_fish_8007": {
        "name": "ปลาย่าง สูตร 8007",
        "cal": 586
    },
    "grilled_fish_8008": {
        "name": "ปลาย่าง สูตร 8008",
        "cal": 27
    },
    "steamed_soup_8009": {
        "name": "ซุปนึ่ง สูตร 8009",
        "cal": 265
    },
    "grilled_soup_8010": {
        "name": "ซุปย่าง สูตร 8010",
        "cal": 579
    },
    "steamed_noodle_8011": {
        "name": "บะหมี่นึ่ง สูตร 8011",
        "cal": 367
    },
    "boiled_chicken_8012": {
        "name": "ไก่ต้ม สูตร 8012",
        "cal": 785
    },
    "stir_fried_beef_8013": {
        "name": "เนื้อผัด สูตร 8013",
        "cal": 431
    },
    "steamed_beef_8014": {
        "name": "เนื้อนึ่ง สูตร 8014",
        "cal": 328
    },
    "steamed_fish_8015": {
        "name": "ปลานึ่ง สูตร 8015",
        "cal": 268
    },
    "stir_fried_fish_8016": {
        "name": "ปลาผัด สูตร 8016",
        "cal": 312
    },
    "grilled_fish_8017": {
        "name": "ปลาย่าง สูตร 8017",
        "cal": 310
    },
    "grilled_beef_8018": {
        "name": "เนื้อย่าง สูตร 8018",
        "cal": 495
    },
    "steamed_squid_8019": {
        "name": "ปลาหมึกนึ่ง สูตร 8019",
        "cal": 95
    },
    "steamed_noodle_8020": {
        "name": "บะหมี่นึ่ง สูตร 8020",
        "cal": 577
    },
    "stir_fried_squid_8021": {
        "name": "ปลาหมึกผัด สูตร 8021",
        "cal": 400
    },
    "grilled_soup_8022": {
        "name": "ซุปย่าง สูตร 8022",
        "cal": 542
    },
    "fried_shrimp_8023": {
        "name": "กุ้งทอด สูตร 8023",
        "cal": 233
    },
    "stir_fried_shrimp_8024": {
        "name": "กุ้งผัด สูตร 8024",
        "cal": 748
    },
    "spicy_shrimp_8025": {
        "name": "กุ้งยำ สูตร 8025",
        "cal": 803
    },
    "boiled_beef_8026": {
        "name": "เนื้อต้ม สูตร 8026",
        "cal": 684
    },
    "grilled_beef_8027": {
        "name": "เนื้อย่าง สูตร 8027",
        "cal": 732
    },
    "stir_fried_shrimp_8028": {
        "name": "กุ้งผัด สูตร 8028",
        "cal": 408
    },
    "fried_squid_8029": {
        "name": "ปลาหมึกทอด สูตร 8029",
        "cal": 266
    },
    "steamed_chicken_8030": {
        "name": "ไก่นึ่ง สูตร 8030",
        "cal": 376
    },
    "boiled_pork_8031": {
        "name": "หมูต้ม สูตร 8031",
        "cal": 320
    },
    "steamed_soup_8032": {
        "name": "ซุปนึ่ง สูตร 8032",
        "cal": 255
    },
    "grilled_squid_8033": {
        "name": "ปลาหมึกย่าง สูตร 8033",
        "cal": 503
    },
    "grilled_shrimp_8034": {
        "name": "กุ้งย่าง สูตร 8034",
        "cal": 590
    },
    "stir_fried_rice_8035": {
        "name": "ข้าวผัด สูตร 8035",
        "cal": 636
    },
    "stir_fried_chicken_8036": {
        "name": "ไก่ผัด สูตร 8036",
        "cal": 146
    },
    "boiled_squid_8037": {
        "name": "ปลาหมึกต้ม สูตร 8037",
        "cal": 51
    },
    "steamed_shrimp_8038": {
        "name": "กุ้งนึ่ง สูตร 8038",
        "cal": 452
    },
    "fried_rice_8039": {
        "name": "ข้าวทอด สูตร 8039",
        "cal": 515
    },
    "grilled_squid_8040": {
        "name": "ปลาหมึกย่าง สูตร 8040",
        "cal": 252
    },
    "steamed_shrimp_8041": {
        "name": "กุ้งนึ่ง สูตร 8041",
        "cal": 383
    },
    "fried_soup_8042": {
        "name": "ซุปทอด สูตร 8042",
        "cal": 76
    },
    "grilled_fish_8043": {
        "name": "ปลาย่าง สูตร 8043",
        "cal": 744
    },
    "steamed_squid_8044": {
        "name": "ปลาหมึกนึ่ง สูตร 8044",
        "cal": 263
    },
    "stir_fried_chicken_8045": {
        "name": "ไก่ผัด สูตร 8045",
        "cal": 439
    },
    "spicy_chicken_8046": {
        "name": "ไก่ยำ สูตร 8046",
        "cal": 204
    },
    "stir_fried_chicken_8047": {
        "name": "ไก่ผัด สูตร 8047",
        "cal": 352
    },
    "steamed_fish_8048": {
        "name": "ปลานึ่ง สูตร 8048",
        "cal": 75
    },
    "boiled_chicken_8049": {
        "name": "ไก่ต้ม สูตร 8049",
        "cal": 114
    },
    "stir_fried_noodle_8050": {
        "name": "บะหมี่ผัด สูตร 8050",
        "cal": 828
    },
    "boiled_soup_8051": {
        "name": "ซุปต้ม สูตร 8051",
        "cal": 547
    },
    "steamed_shrimp_8052": {
        "name": "กุ้งนึ่ง สูตร 8052",
        "cal": 471
    },
    "stir_fried_fish_8053": {
        "name": "ปลาผัด สูตร 8053",
        "cal": 456
    },
    "fried_beef_8054": {
        "name": "เนื้อทอด สูตร 8054",
        "cal": 473
    },
    "stir_fried_beef_8055": {
        "name": "เนื้อผัด สูตร 8055",
        "cal": 77
    },
    "fried_rice_8056": {
        "name": "ข้าวทอด สูตร 8056",
        "cal": 767
    },
    "fried_shrimp_8057": {
        "name": "กุ้งทอด สูตร 8057",
        "cal": 693
    },
    "spicy_shrimp_8058": {
        "name": "กุ้งยำ สูตร 8058",
        "cal": 269
    },
    "spicy_fish_8059": {
        "name": "ปลายำ สูตร 8059",
        "cal": 403
    },
    "grilled_fish_8060": {
        "name": "ปลาย่าง สูตร 8060",
        "cal": 623
    },
    "grilled_chicken_8061": {
        "name": "ไก่ย่าง สูตร 8061",
        "cal": 118
    },
    "steamed_beef_8062": {
        "name": "เนื้อนึ่ง สูตร 8062",
        "cal": 246
    },
    "fried_fish_8063": {
        "name": "ปลาทอด สูตร 8063",
        "cal": 359
    },
    "grilled_noodle_8064": {
        "name": "บะหมี่ย่าง สูตร 8064",
        "cal": 234
    },
    "grilled_rice_8065": {
        "name": "ข้าวย่าง สูตร 8065",
        "cal": 456
    },
    "boiled_rice_8066": {
        "name": "ข้าวต้ม สูตร 8066",
        "cal": 227
    },
    "fried_soup_8067": {
        "name": "ซุปทอด สูตร 8067",
        "cal": 29
    },
    "steamed_pork_8068": {
        "name": "หมูนึ่ง สูตร 8068",
        "cal": 599
    },
    "boiled_beef_8069": {
        "name": "เนื้อต้ม สูตร 8069",
        "cal": 288
    },
    "fried_squid_8070": {
        "name": "ปลาหมึกทอด สูตร 8070",
        "cal": 775
    },
    "grilled_shrimp_8071": {
        "name": "กุ้งย่าง สูตร 8071",
        "cal": 686
    },
    "stir_fried_pork_8072": {
        "name": "หมูผัด สูตร 8072",
        "cal": 245
    },
    "boiled_soup_8073": {
        "name": "ซุปต้ม สูตร 8073",
        "cal": 197
    },
    "spicy_noodle_8074": {
        "name": "บะหมี่ยำ สูตร 8074",
        "cal": 309
    },
    "fried_beef_8075": {
        "name": "เนื้อทอด สูตร 8075",
        "cal": 751
    },
    "spicy_fish_8076": {
        "name": "ปลายำ สูตร 8076",
        "cal": 427
    },
    "spicy_noodle_8077": {
        "name": "บะหมี่ยำ สูตร 8077",
        "cal": 304
    },
    "boiled_pork_8078": {
        "name": "หมูต้ม สูตร 8078",
        "cal": 385
    },
    "fried_beef_8079": {
        "name": "เนื้อทอด สูตร 8079",
        "cal": 374
    },
    "steamed_soup_8080": {
        "name": "ซุปนึ่ง สูตร 8080",
        "cal": 766
    },
    "stir_fried_soup_8081": {
        "name": "ซุปผัด สูตร 8081",
        "cal": 26
    },
    "grilled_chicken_8082": {
        "name": "ไก่ย่าง สูตร 8082",
        "cal": 415
    },
    "grilled_rice_8083": {
        "name": "ข้าวย่าง สูตร 8083",
        "cal": 293
    },
    "spicy_chicken_8084": {
        "name": "ไก่ยำ สูตร 8084",
        "cal": 201
    },
    "fried_fish_8085": {
        "name": "ปลาทอด สูตร 8085",
        "cal": 27
    },
    "fried_beef_8086": {
        "name": "เนื้อทอด สูตร 8086",
        "cal": 644
    },
    "steamed_beef_8087": {
        "name": "เนื้อนึ่ง สูตร 8087",
        "cal": 419
    },
    "fried_squid_8088": {
        "name": "ปลาหมึกทอด สูตร 8088",
        "cal": 787
    },
    "boiled_shrimp_8089": {
        "name": "กุ้งต้ม สูตร 8089",
        "cal": 546
    },
    "boiled_fish_8090": {
        "name": "ปลาต้ม สูตร 8090",
        "cal": 683
    },
    "stir_fried_beef_8091": {
        "name": "เนื้อผัด สูตร 8091",
        "cal": 139
    },
    "stir_fried_beef_8092": {
        "name": "เนื้อผัด สูตร 8092",
        "cal": 798
    },
    "steamed_beef_8093": {
        "name": "เนื้อนึ่ง สูตร 8093",
        "cal": 529
    },
    "spicy_beef_8094": {
        "name": "เนื้อยำ สูตร 8094",
        "cal": 211
    },
    "boiled_pork_8095": {
        "name": "หมูต้ม สูตร 8095",
        "cal": 376
    },
    "boiled_pork_8096": {
        "name": "หมูต้ม สูตร 8096",
        "cal": 266
    },
    "steamed_fish_8097": {
        "name": "ปลานึ่ง สูตร 8097",
        "cal": 409
    },
    "grilled_shrimp_8098": {
        "name": "กุ้งย่าง สูตร 8098",
        "cal": 57
    },
    "steamed_pork_8099": {
        "name": "หมูนึ่ง สูตร 8099",
        "cal": 746
    },
    "boiled_fish_8100": {
        "name": "ปลาต้ม สูตร 8100",
        "cal": 443
    },
    "steamed_pork_8101": {
        "name": "หมูนึ่ง สูตร 8101",
        "cal": 724
    },
    "steamed_beef_8102": {
        "name": "เนื้อนึ่ง สูตร 8102",
        "cal": 549
    },
    "boiled_soup_8103": {
        "name": "ซุปต้ม สูตร 8103",
        "cal": 842
    },
    "stir_fried_chicken_8104": {
        "name": "ไก่ผัด สูตร 8104",
        "cal": 596
    },
    "spicy_shrimp_8105": {
        "name": "กุ้งยำ สูตร 8105",
        "cal": 607
    },
    "steamed_beef_8106": {
        "name": "เนื้อนึ่ง สูตร 8106",
        "cal": 426
    },
    "boiled_noodle_8107": {
        "name": "บะหมี่ต้ม สูตร 8107",
        "cal": 766
    },
    "grilled_noodle_8108": {
        "name": "บะหมี่ย่าง สูตร 8108",
        "cal": 60
    },
    "grilled_squid_8109": {
        "name": "ปลาหมึกย่าง สูตร 8109",
        "cal": 579
    },
    "grilled_fish_8110": {
        "name": "ปลาย่าง สูตร 8110",
        "cal": 579
    },
    "steamed_noodle_8111": {
        "name": "บะหมี่นึ่ง สูตร 8111",
        "cal": 822
    },
    "spicy_rice_8112": {
        "name": "ข้าวยำ สูตร 8112",
        "cal": 556
    },
    "spicy_squid_8113": {
        "name": "ปลาหมึกยำ สูตร 8113",
        "cal": 216
    },
    "spicy_pork_8114": {
        "name": "หมูยำ สูตร 8114",
        "cal": 598
    },
    "steamed_shrimp_8115": {
        "name": "กุ้งนึ่ง สูตร 8115",
        "cal": 820
    },
    "steamed_shrimp_8116": {
        "name": "กุ้งนึ่ง สูตร 8116",
        "cal": 381
    },
    "boiled_squid_8117": {
        "name": "ปลาหมึกต้ม สูตร 8117",
        "cal": 335
    },
    "grilled_squid_8118": {
        "name": "ปลาหมึกย่าง สูตร 8118",
        "cal": 457
    },
    "grilled_noodle_8119": {
        "name": "บะหมี่ย่าง สูตร 8119",
        "cal": 707
    },
    "boiled_pork_8120": {
        "name": "หมูต้ม สูตร 8120",
        "cal": 248
    },
    "spicy_fish_8121": {
        "name": "ปลายำ สูตร 8121",
        "cal": 41
    },
    "boiled_beef_8122": {
        "name": "เนื้อต้ม สูตร 8122",
        "cal": 191
    },
    "boiled_soup_8123": {
        "name": "ซุปต้ม สูตร 8123",
        "cal": 686
    },
    "fried_beef_8124": {
        "name": "เนื้อทอด สูตร 8124",
        "cal": 150
    },
    "boiled_pork_8125": {
        "name": "หมูต้ม สูตร 8125",
        "cal": 730
    },
    "spicy_fish_8126": {
        "name": "ปลายำ สูตร 8126",
        "cal": 269
    },
    "stir_fried_noodle_8127": {
        "name": "บะหมี่ผัด สูตร 8127",
        "cal": 405
    },
    "fried_beef_8128": {
        "name": "เนื้อทอด สูตร 8128",
        "cal": 683
    },
    "spicy_soup_8129": {
        "name": "ซุปยำ สูตร 8129",
        "cal": 59
    },
    "grilled_pork_8130": {
        "name": "หมูย่าง สูตร 8130",
        "cal": 841
    },
    "steamed_squid_8131": {
        "name": "ปลาหมึกนึ่ง สูตร 8131",
        "cal": 203
    },
    "grilled_fish_8132": {
        "name": "ปลาย่าง สูตร 8132",
        "cal": 469
    },
    "grilled_squid_8133": {
        "name": "ปลาหมึกย่าง สูตร 8133",
        "cal": 192
    },
    "steamed_chicken_8134": {
        "name": "ไก่นึ่ง สูตร 8134",
        "cal": 622
    },
    "stir_fried_squid_8135": {
        "name": "ปลาหมึกผัด สูตร 8135",
        "cal": 532
    },
    "steamed_shrimp_8136": {
        "name": "กุ้งนึ่ง สูตร 8136",
        "cal": 502
    },
    "stir_fried_fish_8137": {
        "name": "ปลาผัด สูตร 8137",
        "cal": 595
    },
    "spicy_soup_8138": {
        "name": "ซุปยำ สูตร 8138",
        "cal": 352
    },
    "fried_fish_8139": {
        "name": "ปลาทอด สูตร 8139",
        "cal": 680
    },
    "boiled_rice_8140": {
        "name": "ข้าวต้ม สูตร 8140",
        "cal": 36
    },
    "boiled_chicken_8141": {
        "name": "ไก่ต้ม สูตร 8141",
        "cal": 512
    },
    "stir_fried_chicken_8142": {
        "name": "ไก่ผัด สูตร 8142",
        "cal": 90
    },
    "spicy_pork_8143": {
        "name": "หมูยำ สูตร 8143",
        "cal": 752
    },
    "spicy_rice_8144": {
        "name": "ข้าวยำ สูตร 8144",
        "cal": 845
    },
    "grilled_pork_8145": {
        "name": "หมูย่าง สูตร 8145",
        "cal": 807
    },
    "grilled_squid_8146": {
        "name": "ปลาหมึกย่าง สูตร 8146",
        "cal": 829
    },
    "fried_fish_8147": {
        "name": "ปลาทอด สูตร 8147",
        "cal": 486
    },
    "boiled_soup_8148": {
        "name": "ซุปต้ม สูตร 8148",
        "cal": 354
    },
    "spicy_beef_8149": {
        "name": "เนื้อยำ สูตร 8149",
        "cal": 591
    },
    "spicy_rice_8150": {
        "name": "ข้าวยำ สูตร 8150",
        "cal": 728
    },
    "boiled_shrimp_8151": {
        "name": "กุ้งต้ม สูตร 8151",
        "cal": 743
    },
    "grilled_shrimp_8152": {
        "name": "กุ้งย่าง สูตร 8152",
        "cal": 690
    },
    "boiled_chicken_8153": {
        "name": "ไก่ต้ม สูตร 8153",
        "cal": 99
    },
    "boiled_noodle_8154": {
        "name": "บะหมี่ต้ม สูตร 8154",
        "cal": 165
    },
    "boiled_shrimp_8155": {
        "name": "กุ้งต้ม สูตร 8155",
        "cal": 560
    },
    "stir_fried_chicken_8156": {
        "name": "ไก่ผัด สูตร 8156",
        "cal": 326
    },
    "spicy_rice_8157": {
        "name": "ข้าวยำ สูตร 8157",
        "cal": 133
    },
    "steamed_chicken_8158": {
        "name": "ไก่นึ่ง สูตร 8158",
        "cal": 465
    },
    "steamed_rice_8159": {
        "name": "ข้าวนึ่ง สูตร 8159",
        "cal": 151
    },
    "grilled_rice_8160": {
        "name": "ข้าวย่าง สูตร 8160",
        "cal": 783
    },
    "steamed_pork_8161": {
        "name": "หมูนึ่ง สูตร 8161",
        "cal": 78
    },
    "spicy_fish_8162": {
        "name": "ปลายำ สูตร 8162",
        "cal": 588
    },
    "fried_chicken_8163": {
        "name": "ไก่ทอด สูตร 8163",
        "cal": 625
    },
    "steamed_soup_8164": {
        "name": "ซุปนึ่ง สูตร 8164",
        "cal": 376
    },
    "spicy_noodle_8165": {
        "name": "บะหมี่ยำ สูตร 8165",
        "cal": 793
    },
    "fried_soup_8166": {
        "name": "ซุปทอด สูตร 8166",
        "cal": 430
    },
    "boiled_beef_8167": {
        "name": "เนื้อต้ม สูตร 8167",
        "cal": 528
    },
    "fried_chicken_8168": {
        "name": "ไก่ทอด สูตร 8168",
        "cal": 632
    },
    "spicy_rice_8169": {
        "name": "ข้าวยำ สูตร 8169",
        "cal": 774
    },
    "stir_fried_pork_8170": {
        "name": "หมูผัด สูตร 8170",
        "cal": 129
    },
    "boiled_noodle_8171": {
        "name": "บะหมี่ต้ม สูตร 8171",
        "cal": 113
    },
    "fried_pork_8172": {
        "name": "หมูทอด สูตร 8172",
        "cal": 321
    },
    "spicy_noodle_8173": {
        "name": "บะหมี่ยำ สูตร 8173",
        "cal": 810
    },
    "spicy_noodle_8174": {
        "name": "บะหมี่ยำ สูตร 8174",
        "cal": 848
    },
    "steamed_squid_8175": {
        "name": "ปลาหมึกนึ่ง สูตร 8175",
        "cal": 617
    },
    "fried_rice_8176": {
        "name": "ข้าวทอด สูตร 8176",
        "cal": 683
    },
    "steamed_rice_8177": {
        "name": "ข้าวนึ่ง สูตร 8177",
        "cal": 498
    },
    "steamed_noodle_8178": {
        "name": "บะหมี่นึ่ง สูตร 8178",
        "cal": 20
    },
    "grilled_soup_8179": {
        "name": "ซุปย่าง สูตร 8179",
        "cal": 736
    },
    "grilled_fish_8180": {
        "name": "ปลาย่าง สูตร 8180",
        "cal": 375
    },
    "spicy_squid_8181": {
        "name": "ปลาหมึกยำ สูตร 8181",
        "cal": 683
    },
    "steamed_squid_8182": {
        "name": "ปลาหมึกนึ่ง สูตร 8182",
        "cal": 384
    },
    "spicy_pork_8183": {
        "name": "หมูยำ สูตร 8183",
        "cal": 709
    },
    "grilled_rice_8184": {
        "name": "ข้าวย่าง สูตร 8184",
        "cal": 593
    },
    "boiled_pork_8185": {
        "name": "หมูต้ม สูตร 8185",
        "cal": 156
    },
    "grilled_squid_8186": {
        "name": "ปลาหมึกย่าง สูตร 8186",
        "cal": 107
    },
    "steamed_rice_8187": {
        "name": "ข้าวนึ่ง สูตร 8187",
        "cal": 462
    },
    "spicy_soup_8188": {
        "name": "ซุปยำ สูตร 8188",
        "cal": 384
    },
    "boiled_squid_8189": {
        "name": "ปลาหมึกต้ม สูตร 8189",
        "cal": 779
    },
    "boiled_noodle_8190": {
        "name": "บะหมี่ต้ม สูตร 8190",
        "cal": 372
    },
    "spicy_rice_8191": {
        "name": "ข้าวยำ สูตร 8191",
        "cal": 751
    },
    "fried_soup_8192": {
        "name": "ซุปทอด สูตร 8192",
        "cal": 558
    },
    "fried_shrimp_8193": {
        "name": "กุ้งทอด สูตร 8193",
        "cal": 551
    },
    "spicy_chicken_8194": {
        "name": "ไก่ยำ สูตร 8194",
        "cal": 846
    },
    "grilled_shrimp_8195": {
        "name": "กุ้งย่าง สูตร 8195",
        "cal": 55
    },
    "steamed_noodle_8196": {
        "name": "บะหมี่นึ่ง สูตร 8196",
        "cal": 241
    },
    "grilled_fish_8197": {
        "name": "ปลาย่าง สูตร 8197",
        "cal": 777
    },
    "stir_fried_noodle_8198": {
        "name": "บะหมี่ผัด สูตร 8198",
        "cal": 161
    },
    "spicy_fish_8199": {
        "name": "ปลายำ สูตร 8199",
        "cal": 494
    },
    "stir_fried_beef_8200": {
        "name": "เนื้อผัด สูตร 8200",
        "cal": 101
    },
    "steamed_soup_8201": {
        "name": "ซุปนึ่ง สูตร 8201",
        "cal": 657
    },
    "boiled_chicken_8202": {
        "name": "ไก่ต้ม สูตร 8202",
        "cal": 375
    },
    "steamed_soup_8203": {
        "name": "ซุปนึ่ง สูตร 8203",
        "cal": 606
    },
    "spicy_noodle_8204": {
        "name": "บะหมี่ยำ สูตร 8204",
        "cal": 108
    },
    "steamed_noodle_8205": {
        "name": "บะหมี่นึ่ง สูตร 8205",
        "cal": 307
    },
    "grilled_noodle_8206": {
        "name": "บะหมี่ย่าง สูตร 8206",
        "cal": 597
    },
    "spicy_shrimp_8207": {
        "name": "กุ้งยำ สูตร 8207",
        "cal": 429
    },
    "boiled_chicken_8208": {
        "name": "ไก่ต้ม สูตร 8208",
        "cal": 77
    },
    "fried_soup_8209": {
        "name": "ซุปทอด สูตร 8209",
        "cal": 331
    },
    "spicy_beef_8210": {
        "name": "เนื้อยำ สูตร 8210",
        "cal": 486
    },
    "spicy_beef_8211": {
        "name": "เนื้อยำ สูตร 8211",
        "cal": 59
    },
    "fried_soup_8212": {
        "name": "ซุปทอด สูตร 8212",
        "cal": 432
    },
    "steamed_squid_8213": {
        "name": "ปลาหมึกนึ่ง สูตร 8213",
        "cal": 60
    },
    "boiled_squid_8214": {
        "name": "ปลาหมึกต้ม สูตร 8214",
        "cal": 426
    },
    "spicy_pork_8215": {
        "name": "หมูยำ สูตร 8215",
        "cal": 289
    },
    "grilled_noodle_8216": {
        "name": "บะหมี่ย่าง สูตร 8216",
        "cal": 56
    },
    "stir_fried_fish_8217": {
        "name": "ปลาผัด สูตร 8217",
        "cal": 241
    },
    "spicy_fish_8218": {
        "name": "ปลายำ สูตร 8218",
        "cal": 428
    },
    "grilled_squid_8219": {
        "name": "ปลาหมึกย่าง สูตร 8219",
        "cal": 73
    },
    "steamed_noodle_8220": {
        "name": "บะหมี่นึ่ง สูตร 8220",
        "cal": 639
    },
    "fried_beef_8221": {
        "name": "เนื้อทอด สูตร 8221",
        "cal": 118
    },
    "grilled_soup_8222": {
        "name": "ซุปย่าง สูตร 8222",
        "cal": 760
    },
    "fried_squid_8223": {
        "name": "ปลาหมึกทอด สูตร 8223",
        "cal": 428
    },
    "grilled_soup_8224": {
        "name": "ซุปย่าง สูตร 8224",
        "cal": 174
    },
    "grilled_pork_8225": {
        "name": "หมูย่าง สูตร 8225",
        "cal": 843
    },
    "spicy_rice_8226": {
        "name": "ข้าวยำ สูตร 8226",
        "cal": 484
    },
    "steamed_beef_8227": {
        "name": "เนื้อนึ่ง สูตร 8227",
        "cal": 570
    },
    "fried_noodle_8228": {
        "name": "บะหมี่ทอด สูตร 8228",
        "cal": 219
    },
    "steamed_chicken_8229": {
        "name": "ไก่นึ่ง สูตร 8229",
        "cal": 643
    },
    "spicy_squid_8230": {
        "name": "ปลาหมึกยำ สูตร 8230",
        "cal": 393
    },
    "fried_fish_8231": {
        "name": "ปลาทอด สูตร 8231",
        "cal": 566
    },
    "spicy_squid_8232": {
        "name": "ปลาหมึกยำ สูตร 8232",
        "cal": 513
    },
    "stir_fried_soup_8233": {
        "name": "ซุปผัด สูตร 8233",
        "cal": 812
    },
    "grilled_squid_8234": {
        "name": "ปลาหมึกย่าง สูตร 8234",
        "cal": 580
    },
    "grilled_beef_8235": {
        "name": "เนื้อย่าง สูตร 8235",
        "cal": 76
    },
    "fried_pork_8236": {
        "name": "หมูทอด สูตร 8236",
        "cal": 51
    },
    "fried_beef_8237": {
        "name": "เนื้อทอด สูตร 8237",
        "cal": 474
    },
    "grilled_shrimp_8238": {
        "name": "กุ้งย่าง สูตร 8238",
        "cal": 104
    },
    "fried_shrimp_8239": {
        "name": "กุ้งทอด สูตร 8239",
        "cal": 809
    },
    "boiled_noodle_8240": {
        "name": "บะหมี่ต้ม สูตร 8240",
        "cal": 566
    },
    "stir_fried_soup_8241": {
        "name": "ซุปผัด สูตร 8241",
        "cal": 409
    },
    "spicy_squid_8242": {
        "name": "ปลาหมึกยำ สูตร 8242",
        "cal": 289
    },
    "fried_rice_8243": {
        "name": "ข้าวทอด สูตร 8243",
        "cal": 178
    },
    "spicy_pork_8244": {
        "name": "หมูยำ สูตร 8244",
        "cal": 327
    },
    "grilled_soup_8245": {
        "name": "ซุปย่าง สูตร 8245",
        "cal": 149
    },
    "spicy_chicken_8246": {
        "name": "ไก่ยำ สูตร 8246",
        "cal": 639
    },
    "spicy_pork_8247": {
        "name": "หมูยำ สูตร 8247",
        "cal": 428
    },
    "fried_fish_8248": {
        "name": "ปลาทอด สูตร 8248",
        "cal": 733
    },
    "spicy_soup_8249": {
        "name": "ซุปยำ สูตร 8249",
        "cal": 790
    },
    "steamed_shrimp_8250": {
        "name": "กุ้งนึ่ง สูตร 8250",
        "cal": 231
    },
    "boiled_chicken_8251": {
        "name": "ไก่ต้ม สูตร 8251",
        "cal": 338
    },
    "steamed_squid_8252": {
        "name": "ปลาหมึกนึ่ง สูตร 8252",
        "cal": 392
    },
    "fried_noodle_8253": {
        "name": "บะหมี่ทอด สูตร 8253",
        "cal": 130
    },
    "spicy_shrimp_8254": {
        "name": "กุ้งยำ สูตร 8254",
        "cal": 538
    },
    "boiled_squid_8255": {
        "name": "ปลาหมึกต้ม สูตร 8255",
        "cal": 233
    },
    "grilled_squid_8256": {
        "name": "ปลาหมึกย่าง สูตร 8256",
        "cal": 748
    },
    "fried_fish_8257": {
        "name": "ปลาทอด สูตร 8257",
        "cal": 69
    },
    "fried_noodle_8258": {
        "name": "บะหมี่ทอด สูตร 8258",
        "cal": 241
    },
    "boiled_shrimp_8259": {
        "name": "กุ้งต้ม สูตร 8259",
        "cal": 355
    },
    "steamed_squid_8260": {
        "name": "ปลาหมึกนึ่ง สูตร 8260",
        "cal": 303
    },
    "spicy_noodle_8261": {
        "name": "บะหมี่ยำ สูตร 8261",
        "cal": 381
    },
    "spicy_squid_8262": {
        "name": "ปลาหมึกยำ สูตร 8262",
        "cal": 443
    },
    "spicy_fish_8263": {
        "name": "ปลายำ สูตร 8263",
        "cal": 348
    },
    "fried_rice_8264": {
        "name": "ข้าวทอด สูตร 8264",
        "cal": 759
    },
    "steamed_chicken_8265": {
        "name": "ไก่นึ่ง สูตร 8265",
        "cal": 504
    },
    "fried_rice_8266": {
        "name": "ข้าวทอด สูตร 8266",
        "cal": 680
    },
    "spicy_chicken_8267": {
        "name": "ไก่ยำ สูตร 8267",
        "cal": 684
    },
    "boiled_squid_8268": {
        "name": "ปลาหมึกต้ม สูตร 8268",
        "cal": 475
    },
    "steamed_soup_8269": {
        "name": "ซุปนึ่ง สูตร 8269",
        "cal": 274
    },
    "fried_soup_8270": {
        "name": "ซุปทอด สูตร 8270",
        "cal": 35
    },
    "stir_fried_shrimp_8271": {
        "name": "กุ้งผัด สูตร 8271",
        "cal": 174
    },
    "boiled_squid_8272": {
        "name": "ปลาหมึกต้ม สูตร 8272",
        "cal": 830
    },
    "steamed_shrimp_8273": {
        "name": "กุ้งนึ่ง สูตร 8273",
        "cal": 398
    },
    "stir_fried_beef_8274": {
        "name": "เนื้อผัด สูตร 8274",
        "cal": 401
    },
    "boiled_squid_8275": {
        "name": "ปลาหมึกต้ม สูตร 8275",
        "cal": 259
    },
    "fried_fish_8276": {
        "name": "ปลาทอด สูตร 8276",
        "cal": 560
    },
    "fried_fish_8277": {
        "name": "ปลาทอด สูตร 8277",
        "cal": 585
    },
    "boiled_rice_8278": {
        "name": "ข้าวต้ม สูตร 8278",
        "cal": 551
    },
    "fried_rice_8279": {
        "name": "ข้าวทอด สูตร 8279",
        "cal": 311
    },
    "stir_fried_noodle_8280": {
        "name": "บะหมี่ผัด สูตร 8280",
        "cal": 318
    },
    "steamed_beef_8281": {
        "name": "เนื้อนึ่ง สูตร 8281",
        "cal": 197
    },
    "boiled_noodle_8282": {
        "name": "บะหมี่ต้ม สูตร 8282",
        "cal": 592
    },
    "boiled_chicken_8283": {
        "name": "ไก่ต้ม สูตร 8283",
        "cal": 798
    },
    "fried_pork_8284": {
        "name": "หมูทอด สูตร 8284",
        "cal": 604
    },
    "steamed_fish_8285": {
        "name": "ปลานึ่ง สูตร 8285",
        "cal": 153
    },
    "boiled_pork_8286": {
        "name": "หมูต้ม สูตร 8286",
        "cal": 755
    },
    "grilled_squid_8287": {
        "name": "ปลาหมึกย่าง สูตร 8287",
        "cal": 130
    },
    "steamed_noodle_8288": {
        "name": "บะหมี่นึ่ง สูตร 8288",
        "cal": 157
    },
    "spicy_shrimp_8289": {
        "name": "กุ้งยำ สูตร 8289",
        "cal": 389
    },
    "grilled_soup_8290": {
        "name": "ซุปย่าง สูตร 8290",
        "cal": 374
    },
    "fried_chicken_8291": {
        "name": "ไก่ทอด สูตร 8291",
        "cal": 342
    },
    "boiled_noodle_8292": {
        "name": "บะหมี่ต้ม สูตร 8292",
        "cal": 708
    },
    "spicy_beef_8293": {
        "name": "เนื้อยำ สูตร 8293",
        "cal": 389
    },
    "steamed_squid_8294": {
        "name": "ปลาหมึกนึ่ง สูตร 8294",
        "cal": 843
    },
    "steamed_squid_8295": {
        "name": "ปลาหมึกนึ่ง สูตร 8295",
        "cal": 651
    },
    "spicy_beef_8296": {
        "name": "เนื้อยำ สูตร 8296",
        "cal": 116
    },
    "spicy_shrimp_8297": {
        "name": "กุ้งยำ สูตร 8297",
        "cal": 134
    },
    "fried_shrimp_8298": {
        "name": "กุ้งทอด สูตร 8298",
        "cal": 123
    },
    "grilled_fish_8299": {
        "name": "ปลาย่าง สูตร 8299",
        "cal": 290
    },
    "boiled_chicken_8300": {
        "name": "ไก่ต้ม สูตร 8300",
        "cal": 438
    },
    "spicy_rice_8301": {
        "name": "ข้าวยำ สูตร 8301",
        "cal": 181
    },
    "spicy_beef_8302": {
        "name": "เนื้อยำ สูตร 8302",
        "cal": 694
    },
    "spicy_shrimp_8303": {
        "name": "กุ้งยำ สูตร 8303",
        "cal": 165
    },
    "boiled_beef_8304": {
        "name": "เนื้อต้ม สูตร 8304",
        "cal": 523
    },
    "stir_fried_chicken_8305": {
        "name": "ไก่ผัด สูตร 8305",
        "cal": 394
    },
    "spicy_chicken_8306": {
        "name": "ไก่ยำ สูตร 8306",
        "cal": 626
    },
    "boiled_pork_8307": {
        "name": "หมูต้ม สูตร 8307",
        "cal": 675
    },
    "spicy_beef_8308": {
        "name": "เนื้อยำ สูตร 8308",
        "cal": 276
    },
    "steamed_shrimp_8309": {
        "name": "กุ้งนึ่ง สูตร 8309",
        "cal": 425
    },
    "grilled_fish_8310": {
        "name": "ปลาย่าง สูตร 8310",
        "cal": 631
    },
    "grilled_fish_8311": {
        "name": "ปลาย่าง สูตร 8311",
        "cal": 682
    },
    "steamed_rice_8312": {
        "name": "ข้าวนึ่ง สูตร 8312",
        "cal": 829
    },
    "fried_fish_8313": {
        "name": "ปลาทอด สูตร 8313",
        "cal": 836
    },
    "stir_fried_squid_8314": {
        "name": "ปลาหมึกผัด สูตร 8314",
        "cal": 707
    },
    "stir_fried_shrimp_8315": {
        "name": "กุ้งผัด สูตร 8315",
        "cal": 261
    },
    "steamed_squid_8316": {
        "name": "ปลาหมึกนึ่ง สูตร 8316",
        "cal": 778
    },
    "boiled_fish_8317": {
        "name": "ปลาต้ม สูตร 8317",
        "cal": 118
    },
    "fried_rice_8318": {
        "name": "ข้าวทอด สูตร 8318",
        "cal": 88
    },
    "steamed_shrimp_8319": {
        "name": "กุ้งนึ่ง สูตร 8319",
        "cal": 27
    },
    "stir_fried_rice_8320": {
        "name": "ข้าวผัด สูตร 8320",
        "cal": 292
    },
    "spicy_rice_8321": {
        "name": "ข้าวยำ สูตร 8321",
        "cal": 220
    },
    "boiled_soup_8322": {
        "name": "ซุปต้ม สูตร 8322",
        "cal": 89
    },
    "steamed_fish_8323": {
        "name": "ปลานึ่ง สูตร 8323",
        "cal": 269
    },
    "boiled_beef_8324": {
        "name": "เนื้อต้ม สูตร 8324",
        "cal": 149
    },
    "grilled_shrimp_8325": {
        "name": "กุ้งย่าง สูตร 8325",
        "cal": 153
    },
    "boiled_rice_8326": {
        "name": "ข้าวต้ม สูตร 8326",
        "cal": 216
    },
    "steamed_shrimp_8327": {
        "name": "กุ้งนึ่ง สูตร 8327",
        "cal": 206
    },
    "spicy_squid_8328": {
        "name": "ปลาหมึกยำ สูตร 8328",
        "cal": 202
    },
    "fried_rice_8329": {
        "name": "ข้าวทอด สูตร 8329",
        "cal": 504
    },
    "boiled_pork_8330": {
        "name": "หมูต้ม สูตร 8330",
        "cal": 389
    },
    "stir_fried_squid_8331": {
        "name": "ปลาหมึกผัด สูตร 8331",
        "cal": 568
    },
    "steamed_beef_8332": {
        "name": "เนื้อนึ่ง สูตร 8332",
        "cal": 161
    },
    "fried_fish_8333": {
        "name": "ปลาทอด สูตร 8333",
        "cal": 23
    },
    "stir_fried_shrimp_8334": {
        "name": "กุ้งผัด สูตร 8334",
        "cal": 490
    },
    "fried_noodle_8335": {
        "name": "บะหมี่ทอด สูตร 8335",
        "cal": 278
    },
    "boiled_rice_8336": {
        "name": "ข้าวต้ม สูตร 8336",
        "cal": 140
    },
    "grilled_pork_8337": {
        "name": "หมูย่าง สูตร 8337",
        "cal": 128
    },
    "spicy_squid_8338": {
        "name": "ปลาหมึกยำ สูตร 8338",
        "cal": 275
    },
    "boiled_squid_8339": {
        "name": "ปลาหมึกต้ม สูตร 8339",
        "cal": 804
    },
    "grilled_soup_8340": {
        "name": "ซุปย่าง สูตร 8340",
        "cal": 20
    },
    "grilled_soup_8341": {
        "name": "ซุปย่าง สูตร 8341",
        "cal": 540
    },
    "boiled_chicken_8342": {
        "name": "ไก่ต้ม สูตร 8342",
        "cal": 608
    },
    "spicy_noodle_8343": {
        "name": "บะหมี่ยำ สูตร 8343",
        "cal": 114
    },
    "grilled_rice_8344": {
        "name": "ข้าวย่าง สูตร 8344",
        "cal": 334
    },
    "grilled_chicken_8345": {
        "name": "ไก่ย่าง สูตร 8345",
        "cal": 284
    },
    "stir_fried_chicken_8346": {
        "name": "ไก่ผัด สูตร 8346",
        "cal": 377
    },
    "boiled_chicken_8347": {
        "name": "ไก่ต้ม สูตร 8347",
        "cal": 675
    },
    "steamed_rice_8348": {
        "name": "ข้าวนึ่ง สูตร 8348",
        "cal": 73
    },
    "fried_shrimp_8349": {
        "name": "กุ้งทอด สูตร 8349",
        "cal": 329
    },
    "spicy_beef_8350": {
        "name": "เนื้อยำ สูตร 8350",
        "cal": 75
    },
    "spicy_chicken_8351": {
        "name": "ไก่ยำ สูตร 8351",
        "cal": 612
    },
    "stir_fried_beef_8352": {
        "name": "เนื้อผัด สูตร 8352",
        "cal": 625
    },
    "stir_fried_chicken_8353": {
        "name": "ไก่ผัด สูตร 8353",
        "cal": 773
    },
    "spicy_pork_8354": {
        "name": "หมูยำ สูตร 8354",
        "cal": 682
    },
    "boiled_soup_8355": {
        "name": "ซุปต้ม สูตร 8355",
        "cal": 637
    },
    "grilled_pork_8356": {
        "name": "หมูย่าง สูตร 8356",
        "cal": 672
    },
    "fried_soup_8357": {
        "name": "ซุปทอด สูตร 8357",
        "cal": 138
    },
    "boiled_noodle_8358": {
        "name": "บะหมี่ต้ม สูตร 8358",
        "cal": 161
    },
    "grilled_noodle_8359": {
        "name": "บะหมี่ย่าง สูตร 8359",
        "cal": 825
    },
    "steamed_soup_8360": {
        "name": "ซุปนึ่ง สูตร 8360",
        "cal": 835
    },
    "fried_squid_8361": {
        "name": "ปลาหมึกทอด สูตร 8361",
        "cal": 147
    },
    "fried_fish_8362": {
        "name": "ปลาทอด สูตร 8362",
        "cal": 50
    },
    "stir_fried_rice_8363": {
        "name": "ข้าวผัด สูตร 8363",
        "cal": 131
    },
    "steamed_chicken_8364": {
        "name": "ไก่นึ่ง สูตร 8364",
        "cal": 473
    },
    "spicy_pork_8365": {
        "name": "หมูยำ สูตร 8365",
        "cal": 225
    },
    "steamed_chicken_8366": {
        "name": "ไก่นึ่ง สูตร 8366",
        "cal": 478
    },
    "stir_fried_soup_8367": {
        "name": "ซุปผัด สูตร 8367",
        "cal": 151
    },
    "grilled_rice_8368": {
        "name": "ข้าวย่าง สูตร 8368",
        "cal": 308
    },
    "fried_fish_8369": {
        "name": "ปลาทอด สูตร 8369",
        "cal": 751
    },
    "steamed_fish_8370": {
        "name": "ปลานึ่ง สูตร 8370",
        "cal": 113
    },
    "spicy_pork_8371": {
        "name": "หมูยำ สูตร 8371",
        "cal": 403
    },
    "grilled_rice_8372": {
        "name": "ข้าวย่าง สูตร 8372",
        "cal": 590
    },
    "spicy_fish_8373": {
        "name": "ปลายำ สูตร 8373",
        "cal": 235
    },
    "spicy_beef_8374": {
        "name": "เนื้อยำ สูตร 8374",
        "cal": 472
    },
    "boiled_fish_8375": {
        "name": "ปลาต้ม สูตร 8375",
        "cal": 719
    },
    "spicy_noodle_8376": {
        "name": "บะหมี่ยำ สูตร 8376",
        "cal": 799
    },
    "steamed_beef_8377": {
        "name": "เนื้อนึ่ง สูตร 8377",
        "cal": 129
    },
    "boiled_rice_8378": {
        "name": "ข้าวต้ม สูตร 8378",
        "cal": 688
    },
    "boiled_pork_8379": {
        "name": "หมูต้ม สูตร 8379",
        "cal": 414
    },
    "fried_noodle_8380": {
        "name": "บะหมี่ทอด สูตร 8380",
        "cal": 688
    },
    "stir_fried_rice_8381": {
        "name": "ข้าวผัด สูตร 8381",
        "cal": 210
    },
    "boiled_soup_8382": {
        "name": "ซุปต้ม สูตร 8382",
        "cal": 768
    },
    "fried_beef_8383": {
        "name": "เนื้อทอด สูตร 8383",
        "cal": 736
    },
    "grilled_rice_8384": {
        "name": "ข้าวย่าง สูตร 8384",
        "cal": 55
    },
    "steamed_noodle_8385": {
        "name": "บะหมี่นึ่ง สูตร 8385",
        "cal": 49
    },
    "steamed_shrimp_8386": {
        "name": "กุ้งนึ่ง สูตร 8386",
        "cal": 25
    },
    "stir_fried_squid_8387": {
        "name": "ปลาหมึกผัด สูตร 8387",
        "cal": 550
    },
    "spicy_rice_8388": {
        "name": "ข้าวยำ สูตร 8388",
        "cal": 188
    },
    "fried_rice_8389": {
        "name": "ข้าวทอด สูตร 8389",
        "cal": 357
    },
    "steamed_noodle_8390": {
        "name": "บะหมี่นึ่ง สูตร 8390",
        "cal": 85
    },
    "steamed_rice_8391": {
        "name": "ข้าวนึ่ง สูตร 8391",
        "cal": 650
    },
    "stir_fried_pork_8392": {
        "name": "หมูผัด สูตร 8392",
        "cal": 845
    },
    "spicy_beef_8393": {
        "name": "เนื้อยำ สูตร 8393",
        "cal": 331
    },
    "stir_fried_noodle_8394": {
        "name": "บะหมี่ผัด สูตร 8394",
        "cal": 220
    },
    "boiled_squid_8395": {
        "name": "ปลาหมึกต้ม สูตร 8395",
        "cal": 199
    },
    "boiled_chicken_8396": {
        "name": "ไก่ต้ม สูตร 8396",
        "cal": 306
    },
    "grilled_squid_8397": {
        "name": "ปลาหมึกย่าง สูตร 8397",
        "cal": 818
    },
    "stir_fried_beef_8398": {
        "name": "เนื้อผัด สูตร 8398",
        "cal": 613
    },
    "grilled_shrimp_8399": {
        "name": "กุ้งย่าง สูตร 8399",
        "cal": 508
    },
    "grilled_fish_8400": {
        "name": "ปลาย่าง สูตร 8400",
        "cal": 336
    },
    "grilled_squid_8401": {
        "name": "ปลาหมึกย่าง สูตร 8401",
        "cal": 96
    },
    "steamed_pork_8402": {
        "name": "หมูนึ่ง สูตร 8402",
        "cal": 257
    },
    "boiled_soup_8403": {
        "name": "ซุปต้ม สูตร 8403",
        "cal": 327
    },
    "stir_fried_chicken_8404": {
        "name": "ไก่ผัด สูตร 8404",
        "cal": 28
    },
    "steamed_soup_8405": {
        "name": "ซุปนึ่ง สูตร 8405",
        "cal": 796
    },
    "spicy_beef_8406": {
        "name": "เนื้อยำ สูตร 8406",
        "cal": 439
    },
    "grilled_fish_8407": {
        "name": "ปลาย่าง สูตร 8407",
        "cal": 243
    },
    "spicy_pork_8408": {
        "name": "หมูยำ สูตร 8408",
        "cal": 600
    },
    "spicy_pork_8409": {
        "name": "หมูยำ สูตร 8409",
        "cal": 283
    },
    "steamed_soup_8410": {
        "name": "ซุปนึ่ง สูตร 8410",
        "cal": 245
    },
    "grilled_fish_8411": {
        "name": "ปลาย่าง สูตร 8411",
        "cal": 260
    },
    "boiled_soup_8412": {
        "name": "ซุปต้ม สูตร 8412",
        "cal": 472
    },
    "grilled_squid_8413": {
        "name": "ปลาหมึกย่าง สูตร 8413",
        "cal": 393
    },
    "boiled_pork_8414": {
        "name": "หมูต้ม สูตร 8414",
        "cal": 573
    },
    "grilled_noodle_8415": {
        "name": "บะหมี่ย่าง สูตร 8415",
        "cal": 632
    },
    "fried_beef_8416": {
        "name": "เนื้อทอด สูตร 8416",
        "cal": 299
    },
    "stir_fried_beef_8417": {
        "name": "เนื้อผัด สูตร 8417",
        "cal": 149
    },
    "boiled_pork_8418": {
        "name": "หมูต้ม สูตร 8418",
        "cal": 739
    },
    "grilled_beef_8419": {
        "name": "เนื้อย่าง สูตร 8419",
        "cal": 109
    },
    "steamed_soup_8420": {
        "name": "ซุปนึ่ง สูตร 8420",
        "cal": 465
    },
    "grilled_fish_8421": {
        "name": "ปลาย่าง สูตร 8421",
        "cal": 422
    },
    "steamed_fish_8422": {
        "name": "ปลานึ่ง สูตร 8422",
        "cal": 237
    },
    "grilled_beef_8423": {
        "name": "เนื้อย่าง สูตร 8423",
        "cal": 145
    },
    "fried_beef_8424": {
        "name": "เนื้อทอด สูตร 8424",
        "cal": 153
    },
    "boiled_squid_8425": {
        "name": "ปลาหมึกต้ม สูตร 8425",
        "cal": 616
    },
    "steamed_chicken_8426": {
        "name": "ไก่นึ่ง สูตร 8426",
        "cal": 187
    },
    "grilled_shrimp_8427": {
        "name": "กุ้งย่าง สูตร 8427",
        "cal": 73
    },
    "boiled_beef_8428": {
        "name": "เนื้อต้ม สูตร 8428",
        "cal": 217
    },
    "stir_fried_noodle_8429": {
        "name": "บะหมี่ผัด สูตร 8429",
        "cal": 137
    },
    "stir_fried_pork_8430": {
        "name": "หมูผัด สูตร 8430",
        "cal": 256
    },
    "fried_fish_8431": {
        "name": "ปลาทอด สูตร 8431",
        "cal": 512
    },
    "fried_pork_8432": {
        "name": "หมูทอด สูตร 8432",
        "cal": 753
    },
    "grilled_soup_8433": {
        "name": "ซุปย่าง สูตร 8433",
        "cal": 772
    },
    "boiled_soup_8434": {
        "name": "ซุปต้ม สูตร 8434",
        "cal": 98
    },
    "boiled_pork_8435": {
        "name": "หมูต้ม สูตร 8435",
        "cal": 733
    },
    "stir_fried_rice_8436": {
        "name": "ข้าวผัด สูตร 8436",
        "cal": 672
    },
    "grilled_noodle_8437": {
        "name": "บะหมี่ย่าง สูตร 8437",
        "cal": 627
    },
    "stir_fried_squid_8438": {
        "name": "ปลาหมึกผัด สูตร 8438",
        "cal": 265
    },
    "spicy_soup_8439": {
        "name": "ซุปยำ สูตร 8439",
        "cal": 508
    },
    "boiled_noodle_8440": {
        "name": "บะหมี่ต้ม สูตร 8440",
        "cal": 488
    },
    "spicy_rice_8441": {
        "name": "ข้าวยำ สูตร 8441",
        "cal": 260
    },
    "fried_shrimp_8442": {
        "name": "กุ้งทอด สูตร 8442",
        "cal": 445
    },
    "stir_fried_chicken_8443": {
        "name": "ไก่ผัด สูตร 8443",
        "cal": 825
    },
    "fried_fish_8444": {
        "name": "ปลาทอด สูตร 8444",
        "cal": 709
    },
    "grilled_fish_8445": {
        "name": "ปลาย่าง สูตร 8445",
        "cal": 697
    },
    "steamed_rice_8446": {
        "name": "ข้าวนึ่ง สูตร 8446",
        "cal": 325
    },
    "boiled_fish_8447": {
        "name": "ปลาต้ม สูตร 8447",
        "cal": 87
    },
    "boiled_soup_8448": {
        "name": "ซุปต้ม สูตร 8448",
        "cal": 813
    },
    "stir_fried_noodle_8449": {
        "name": "บะหมี่ผัด สูตร 8449",
        "cal": 281
    },
    "fried_pork_8450": {
        "name": "หมูทอด สูตร 8450",
        "cal": 847
    },
    "stir_fried_soup_8451": {
        "name": "ซุปผัด สูตร 8451",
        "cal": 285
    },
    "fried_beef_8452": {
        "name": "เนื้อทอด สูตร 8452",
        "cal": 139
    },
    "steamed_chicken_8453": {
        "name": "ไก่นึ่ง สูตร 8453",
        "cal": 361
    },
    "grilled_shrimp_8454": {
        "name": "กุ้งย่าง สูตร 8454",
        "cal": 786
    },
    "stir_fried_pork_8455": {
        "name": "หมูผัด สูตร 8455",
        "cal": 499
    },
    "steamed_noodle_8456": {
        "name": "บะหมี่นึ่ง สูตร 8456",
        "cal": 811
    },
    "spicy_pork_8457": {
        "name": "หมูยำ สูตร 8457",
        "cal": 320
    },
    "spicy_soup_8458": {
        "name": "ซุปยำ สูตร 8458",
        "cal": 408
    },
    "stir_fried_fish_8459": {
        "name": "ปลาผัด สูตร 8459",
        "cal": 593
    },
    "boiled_rice_8460": {
        "name": "ข้าวต้ม สูตร 8460",
        "cal": 750
    },
    "grilled_rice_8461": {
        "name": "ข้าวย่าง สูตร 8461",
        "cal": 744
    },
    "stir_fried_soup_8462": {
        "name": "ซุปผัด สูตร 8462",
        "cal": 774
    },
    "stir_fried_soup_8463": {
        "name": "ซุปผัด สูตร 8463",
        "cal": 25
    },
    "fried_rice_8464": {
        "name": "ข้าวทอด สูตร 8464",
        "cal": 209
    },
    "boiled_beef_8465": {
        "name": "เนื้อต้ม สูตร 8465",
        "cal": 546
    },
    "fried_rice_8466": {
        "name": "ข้าวทอด สูตร 8466",
        "cal": 269
    },
    "boiled_shrimp_8467": {
        "name": "กุ้งต้ม สูตร 8467",
        "cal": 719
    },
    "fried_rice_8468": {
        "name": "ข้าวทอด สูตร 8468",
        "cal": 619
    },
    "boiled_chicken_8469": {
        "name": "ไก่ต้ม สูตร 8469",
        "cal": 523
    },
    "boiled_chicken_8470": {
        "name": "ไก่ต้ม สูตร 8470",
        "cal": 772
    },
    "fried_shrimp_8471": {
        "name": "กุ้งทอด สูตร 8471",
        "cal": 500
    },
    "stir_fried_fish_8472": {
        "name": "ปลาผัด สูตร 8472",
        "cal": 559
    },
    "fried_shrimp_8473": {
        "name": "กุ้งทอด สูตร 8473",
        "cal": 157
    },
    "spicy_squid_8474": {
        "name": "ปลาหมึกยำ สูตร 8474",
        "cal": 707
    },
    "spicy_soup_8475": {
        "name": "ซุปยำ สูตร 8475",
        "cal": 835
    },
    "steamed_squid_8476": {
        "name": "ปลาหมึกนึ่ง สูตร 8476",
        "cal": 719
    },
    "steamed_squid_8477": {
        "name": "ปลาหมึกนึ่ง สูตร 8477",
        "cal": 447
    },
    "boiled_rice_8478": {
        "name": "ข้าวต้ม สูตร 8478",
        "cal": 713
    },
    "fried_noodle_8479": {
        "name": "บะหมี่ทอด สูตร 8479",
        "cal": 315
    },
    "grilled_fish_8480": {
        "name": "ปลาย่าง สูตร 8480",
        "cal": 174
    },
    "grilled_rice_8481": {
        "name": "ข้าวย่าง สูตร 8481",
        "cal": 596
    },
    "steamed_beef_8482": {
        "name": "เนื้อนึ่ง สูตร 8482",
        "cal": 431
    },
    "spicy_beef_8483": {
        "name": "เนื้อยำ สูตร 8483",
        "cal": 383
    },
    "steamed_noodle_8484": {
        "name": "บะหมี่นึ่ง สูตร 8484",
        "cal": 655
    },
    "spicy_chicken_8485": {
        "name": "ไก่ยำ สูตร 8485",
        "cal": 258
    },
    "grilled_chicken_8486": {
        "name": "ไก่ย่าง สูตร 8486",
        "cal": 202
    },
    "grilled_beef_8487": {
        "name": "เนื้อย่าง สูตร 8487",
        "cal": 673
    },
    "grilled_squid_8488": {
        "name": "ปลาหมึกย่าง สูตร 8488",
        "cal": 698
    },
    "stir_fried_rice_8489": {
        "name": "ข้าวผัด สูตร 8489",
        "cal": 90
    },
    "stir_fried_beef_8490": {
        "name": "เนื้อผัด สูตร 8490",
        "cal": 769
    },
    "steamed_fish_8491": {
        "name": "ปลานึ่ง สูตร 8491",
        "cal": 415
    },
    "stir_fried_squid_8492": {
        "name": "ปลาหมึกผัด สูตร 8492",
        "cal": 426
    },
    "grilled_pork_8493": {
        "name": "หมูย่าง สูตร 8493",
        "cal": 102
    },
    "boiled_soup_8494": {
        "name": "ซุปต้ม สูตร 8494",
        "cal": 376
    },
    "grilled_pork_8495": {
        "name": "หมูย่าง สูตร 8495",
        "cal": 218
    },
    "fried_rice_8496": {
        "name": "ข้าวทอด สูตร 8496",
        "cal": 766
    },
    "spicy_squid_8497": {
        "name": "ปลาหมึกยำ สูตร 8497",
        "cal": 350
    },
    "grilled_noodle_8498": {
        "name": "บะหมี่ย่าง สูตร 8498",
        "cal": 534
    },
    "fried_shrimp_8499": {
        "name": "กุ้งทอด สูตร 8499",
        "cal": 766
    },
    "spicy_soup_8500": {
        "name": "ซุปยำ สูตร 8500",
        "cal": 111
    },
    "grilled_rice_8501": {
        "name": "ข้าวย่าง สูตร 8501",
        "cal": 162
    },
    "fried_beef_8502": {
        "name": "เนื้อทอด สูตร 8502",
        "cal": 412
    },
    "steamed_noodle_8503": {
        "name": "บะหมี่นึ่ง สูตร 8503",
        "cal": 787
    },
    "fried_shrimp_8504": {
        "name": "กุ้งทอด สูตร 8504",
        "cal": 45
    },
    "fried_beef_8505": {
        "name": "เนื้อทอด สูตร 8505",
        "cal": 753
    },
    "fried_soup_8506": {
        "name": "ซุปทอด สูตร 8506",
        "cal": 485
    },
    "stir_fried_chicken_8507": {
        "name": "ไก่ผัด สูตร 8507",
        "cal": 843
    },
    "steamed_shrimp_8508": {
        "name": "กุ้งนึ่ง สูตร 8508",
        "cal": 835
    },
    "fried_rice_8509": {
        "name": "ข้าวทอด สูตร 8509",
        "cal": 184
    },
    "stir_fried_noodle_8510": {
        "name": "บะหมี่ผัด สูตร 8510",
        "cal": 536
    },
    "boiled_noodle_8511": {
        "name": "บะหมี่ต้ม สูตร 8511",
        "cal": 632
    },
    "fried_chicken_8512": {
        "name": "ไก่ทอด สูตร 8512",
        "cal": 707
    },
    "spicy_chicken_8513": {
        "name": "ไก่ยำ สูตร 8513",
        "cal": 776
    },
    "boiled_noodle_8514": {
        "name": "บะหมี่ต้ม สูตร 8514",
        "cal": 837
    },
    "steamed_chicken_8515": {
        "name": "ไก่นึ่ง สูตร 8515",
        "cal": 556
    },
    "grilled_rice_8516": {
        "name": "ข้าวย่าง สูตร 8516",
        "cal": 64
    },
    "spicy_pork_8517": {
        "name": "หมูยำ สูตร 8517",
        "cal": 350
    },
    "spicy_soup_8518": {
        "name": "ซุปยำ สูตร 8518",
        "cal": 231
    },
    "stir_fried_shrimp_8519": {
        "name": "กุ้งผัด สูตร 8519",
        "cal": 728
    },
    "spicy_squid_8520": {
        "name": "ปลาหมึกยำ สูตร 8520",
        "cal": 102
    },
    "grilled_pork_8521": {
        "name": "หมูย่าง สูตร 8521",
        "cal": 74
    },
    "stir_fried_soup_8522": {
        "name": "ซุปผัด สูตร 8522",
        "cal": 551
    },
    "steamed_beef_8523": {
        "name": "เนื้อนึ่ง สูตร 8523",
        "cal": 770
    },
    "fried_shrimp_8524": {
        "name": "กุ้งทอด สูตร 8524",
        "cal": 38
    },
    "steamed_shrimp_8525": {
        "name": "กุ้งนึ่ง สูตร 8525",
        "cal": 809
    },
    "steamed_shrimp_8526": {
        "name": "กุ้งนึ่ง สูตร 8526",
        "cal": 160
    },
    "stir_fried_chicken_8527": {
        "name": "ไก่ผัด สูตร 8527",
        "cal": 209
    },
    "boiled_beef_8528": {
        "name": "เนื้อต้ม สูตร 8528",
        "cal": 695
    },
    "spicy_shrimp_8529": {
        "name": "กุ้งยำ สูตร 8529",
        "cal": 402
    },
    "boiled_soup_8530": {
        "name": "ซุปต้ม สูตร 8530",
        "cal": 801
    },
    "spicy_fish_8531": {
        "name": "ปลายำ สูตร 8531",
        "cal": 350
    },
    "stir_fried_beef_8532": {
        "name": "เนื้อผัด สูตร 8532",
        "cal": 156
    },
    "boiled_chicken_8533": {
        "name": "ไก่ต้ม สูตร 8533",
        "cal": 225
    },
    "boiled_chicken_8534": {
        "name": "ไก่ต้ม สูตร 8534",
        "cal": 592
    },
    "steamed_soup_8535": {
        "name": "ซุปนึ่ง สูตร 8535",
        "cal": 149
    },
    "stir_fried_rice_8536": {
        "name": "ข้าวผัด สูตร 8536",
        "cal": 241
    },
    "boiled_rice_8537": {
        "name": "ข้าวต้ม สูตร 8537",
        "cal": 452
    },
    "boiled_pork_8538": {
        "name": "หมูต้ม สูตร 8538",
        "cal": 803
    },
    "stir_fried_rice_8539": {
        "name": "ข้าวผัด สูตร 8539",
        "cal": 758
    },
    "grilled_chicken_8540": {
        "name": "ไก่ย่าง สูตร 8540",
        "cal": 435
    },
    "fried_shrimp_8541": {
        "name": "กุ้งทอด สูตร 8541",
        "cal": 52
    },
    "boiled_noodle_8542": {
        "name": "บะหมี่ต้ม สูตร 8542",
        "cal": 162
    },
    "boiled_noodle_8543": {
        "name": "บะหมี่ต้ม สูตร 8543",
        "cal": 514
    },
    "spicy_squid_8544": {
        "name": "ปลาหมึกยำ สูตร 8544",
        "cal": 838
    },
    "grilled_pork_8545": {
        "name": "หมูย่าง สูตร 8545",
        "cal": 610
    },
    "stir_fried_rice_8546": {
        "name": "ข้าวผัด สูตร 8546",
        "cal": 403
    },
    "grilled_beef_8547": {
        "name": "เนื้อย่าง สูตร 8547",
        "cal": 174
    },
    "steamed_noodle_8548": {
        "name": "บะหมี่นึ่ง สูตร 8548",
        "cal": 466
    },
    "spicy_fish_8549": {
        "name": "ปลายำ สูตร 8549",
        "cal": 532
    },
    "grilled_noodle_8550": {
        "name": "บะหมี่ย่าง สูตร 8550",
        "cal": 500
    },
    "boiled_beef_8551": {
        "name": "เนื้อต้ม สูตร 8551",
        "cal": 125
    },
    "spicy_squid_8552": {
        "name": "ปลาหมึกยำ สูตร 8552",
        "cal": 31
    },
    "fried_rice_8553": {
        "name": "ข้าวทอด สูตร 8553",
        "cal": 101
    },
    "boiled_noodle_8554": {
        "name": "บะหมี่ต้ม สูตร 8554",
        "cal": 267
    },
    "grilled_soup_8555": {
        "name": "ซุปย่าง สูตร 8555",
        "cal": 248
    },
    "steamed_noodle_8556": {
        "name": "บะหมี่นึ่ง สูตร 8556",
        "cal": 631
    },
    "fried_soup_8557": {
        "name": "ซุปทอด สูตร 8557",
        "cal": 476
    },
    "stir_fried_soup_8558": {
        "name": "ซุปผัด สูตร 8558",
        "cal": 393
    },
    "steamed_chicken_8559": {
        "name": "ไก่นึ่ง สูตร 8559",
        "cal": 288
    },
    "boiled_squid_8560": {
        "name": "ปลาหมึกต้ม สูตร 8560",
        "cal": 100
    },
    "boiled_pork_8561": {
        "name": "หมูต้ม สูตร 8561",
        "cal": 132
    },
    "boiled_soup_8562": {
        "name": "ซุปต้ม สูตร 8562",
        "cal": 556
    },
    "grilled_beef_8563": {
        "name": "เนื้อย่าง สูตร 8563",
        "cal": 301
    },
    "grilled_fish_8564": {
        "name": "ปลาย่าง สูตร 8564",
        "cal": 428
    },
    "fried_chicken_8565": {
        "name": "ไก่ทอด สูตร 8565",
        "cal": 174
    },
    "fried_soup_8566": {
        "name": "ซุปทอด สูตร 8566",
        "cal": 155
    },
    "stir_fried_soup_8567": {
        "name": "ซุปผัด สูตร 8567",
        "cal": 447
    },
    "boiled_beef_8568": {
        "name": "เนื้อต้ม สูตร 8568",
        "cal": 524
    },
    "stir_fried_soup_8569": {
        "name": "ซุปผัด สูตร 8569",
        "cal": 541
    },
    "boiled_beef_8570": {
        "name": "เนื้อต้ม สูตร 8570",
        "cal": 153
    },
    "grilled_pork_8571": {
        "name": "หมูย่าง สูตร 8571",
        "cal": 566
    },
    "fried_pork_8572": {
        "name": "หมูทอด สูตร 8572",
        "cal": 260
    },
    "stir_fried_chicken_8573": {
        "name": "ไก่ผัด สูตร 8573",
        "cal": 563
    },
    "fried_pork_8574": {
        "name": "หมูทอด สูตร 8574",
        "cal": 638
    },
    "boiled_soup_8575": {
        "name": "ซุปต้ม สูตร 8575",
        "cal": 512
    },
    "grilled_shrimp_8576": {
        "name": "กุ้งย่าง สูตร 8576",
        "cal": 586
    },
    "fried_shrimp_8577": {
        "name": "กุ้งทอด สูตร 8577",
        "cal": 187
    },
    "spicy_beef_8578": {
        "name": "เนื้อยำ สูตร 8578",
        "cal": 78
    },
    "fried_rice_8579": {
        "name": "ข้าวทอด สูตร 8579",
        "cal": 825
    },
    "grilled_rice_8580": {
        "name": "ข้าวย่าง สูตร 8580",
        "cal": 573
    },
    "steamed_beef_8581": {
        "name": "เนื้อนึ่ง สูตร 8581",
        "cal": 752
    },
    "grilled_chicken_8582": {
        "name": "ไก่ย่าง สูตร 8582",
        "cal": 821
    },
    "grilled_fish_8583": {
        "name": "ปลาย่าง สูตร 8583",
        "cal": 538
    },
    "fried_shrimp_8584": {
        "name": "กุ้งทอด สูตร 8584",
        "cal": 141
    },
    "boiled_pork_8585": {
        "name": "หมูต้ม สูตร 8585",
        "cal": 280
    },
    "grilled_beef_8586": {
        "name": "เนื้อย่าง สูตร 8586",
        "cal": 109
    },
    "steamed_soup_8587": {
        "name": "ซุปนึ่ง สูตร 8587",
        "cal": 771
    },
    "stir_fried_soup_8588": {
        "name": "ซุปผัด สูตร 8588",
        "cal": 752
    },
    "spicy_beef_8589": {
        "name": "เนื้อยำ สูตร 8589",
        "cal": 168
    },
    "steamed_chicken_8590": {
        "name": "ไก่นึ่ง สูตร 8590",
        "cal": 655
    },
    "spicy_pork_8591": {
        "name": "หมูยำ สูตร 8591",
        "cal": 639
    },
    "boiled_shrimp_8592": {
        "name": "กุ้งต้ม สูตร 8592",
        "cal": 492
    },
    "spicy_squid_8593": {
        "name": "ปลาหมึกยำ สูตร 8593",
        "cal": 285
    },
    "steamed_soup_8594": {
        "name": "ซุปนึ่ง สูตร 8594",
        "cal": 349
    },
    "fried_pork_8595": {
        "name": "หมูทอด สูตร 8595",
        "cal": 124
    },
    "steamed_chicken_8596": {
        "name": "ไก่นึ่ง สูตร 8596",
        "cal": 114
    },
    "fried_pork_8597": {
        "name": "หมูทอด สูตร 8597",
        "cal": 672
    },
    "boiled_shrimp_8598": {
        "name": "กุ้งต้ม สูตร 8598",
        "cal": 731
    },
    "steamed_soup_8599": {
        "name": "ซุปนึ่ง สูตร 8599",
        "cal": 723
    },
    "stir_fried_noodle_8600": {
        "name": "บะหมี่ผัด สูตร 8600",
        "cal": 333
    },
    "grilled_chicken_8601": {
        "name": "ไก่ย่าง สูตร 8601",
        "cal": 510
    },
    "boiled_chicken_8602": {
        "name": "ไก่ต้ม สูตร 8602",
        "cal": 826
    },
    "stir_fried_soup_8603": {
        "name": "ซุปผัด สูตร 8603",
        "cal": 402
    },
    "spicy_soup_8604": {
        "name": "ซุปยำ สูตร 8604",
        "cal": 508
    },
    "spicy_noodle_8605": {
        "name": "บะหมี่ยำ สูตร 8605",
        "cal": 516
    },
    "grilled_fish_8606": {
        "name": "ปลาย่าง สูตร 8606",
        "cal": 261
    },
    "spicy_squid_8607": {
        "name": "ปลาหมึกยำ สูตร 8607",
        "cal": 740
    },
    "spicy_beef_8608": {
        "name": "เนื้อยำ สูตร 8608",
        "cal": 371
    },
    "spicy_beef_8609": {
        "name": "เนื้อยำ สูตร 8609",
        "cal": 849
    },
    "spicy_fish_8610": {
        "name": "ปลายำ สูตร 8610",
        "cal": 454
    },
    "spicy_pork_8611": {
        "name": "หมูยำ สูตร 8611",
        "cal": 47
    },
    "stir_fried_fish_8612": {
        "name": "ปลาผัด สูตร 8612",
        "cal": 359
    },
    "stir_fried_squid_8613": {
        "name": "ปลาหมึกผัด สูตร 8613",
        "cal": 781
    },
    "stir_fried_soup_8614": {
        "name": "ซุปผัด สูตร 8614",
        "cal": 505
    },
    "steamed_shrimp_8615": {
        "name": "กุ้งนึ่ง สูตร 8615",
        "cal": 654
    },
    "fried_shrimp_8616": {
        "name": "กุ้งทอด สูตร 8616",
        "cal": 725
    },
    "boiled_soup_8617": {
        "name": "ซุปต้ม สูตร 8617",
        "cal": 317
    },
    "stir_fried_pork_8618": {
        "name": "หมูผัด สูตร 8618",
        "cal": 335
    },
    "spicy_pork_8619": {
        "name": "หมูยำ สูตร 8619",
        "cal": 641
    },
    "stir_fried_squid_8620": {
        "name": "ปลาหมึกผัด สูตร 8620",
        "cal": 451
    },
    "grilled_chicken_8621": {
        "name": "ไก่ย่าง สูตร 8621",
        "cal": 679
    },
    "steamed_noodle_8622": {
        "name": "บะหมี่นึ่ง สูตร 8622",
        "cal": 355
    },
    "grilled_shrimp_8623": {
        "name": "กุ้งย่าง สูตร 8623",
        "cal": 802
    },
    "stir_fried_pork_8624": {
        "name": "หมูผัด สูตร 8624",
        "cal": 776
    },
    "fried_beef_8625": {
        "name": "เนื้อทอด สูตร 8625",
        "cal": 249
    },
    "steamed_shrimp_8626": {
        "name": "กุ้งนึ่ง สูตร 8626",
        "cal": 612
    },
    "stir_fried_rice_8627": {
        "name": "ข้าวผัด สูตร 8627",
        "cal": 539
    },
    "boiled_squid_8628": {
        "name": "ปลาหมึกต้ม สูตร 8628",
        "cal": 63
    },
    "steamed_pork_8629": {
        "name": "หมูนึ่ง สูตร 8629",
        "cal": 48
    },
    "fried_shrimp_8630": {
        "name": "กุ้งทอด สูตร 8630",
        "cal": 53
    },
    "steamed_soup_8631": {
        "name": "ซุปนึ่ง สูตร 8631",
        "cal": 825
    },
    "stir_fried_squid_8632": {
        "name": "ปลาหมึกผัด สูตร 8632",
        "cal": 840
    },
    "boiled_noodle_8633": {
        "name": "บะหมี่ต้ม สูตร 8633",
        "cal": 525
    },
    "steamed_pork_8634": {
        "name": "หมูนึ่ง สูตร 8634",
        "cal": 689
    },
    "grilled_rice_8635": {
        "name": "ข้าวย่าง สูตร 8635",
        "cal": 553
    },
    "stir_fried_pork_8636": {
        "name": "หมูผัด สูตร 8636",
        "cal": 451
    },
    "spicy_shrimp_8637": {
        "name": "กุ้งยำ สูตร 8637",
        "cal": 374
    },
    "spicy_soup_8638": {
        "name": "ซุปยำ สูตร 8638",
        "cal": 593
    },
    "boiled_noodle_8639": {
        "name": "บะหมี่ต้ม สูตร 8639",
        "cal": 589
    },
    "boiled_shrimp_8640": {
        "name": "กุ้งต้ม สูตร 8640",
        "cal": 273
    },
    "fried_fish_8641": {
        "name": "ปลาทอด สูตร 8641",
        "cal": 819
    },
    "boiled_shrimp_8642": {
        "name": "กุ้งต้ม สูตร 8642",
        "cal": 338
    },
    "boiled_pork_8643": {
        "name": "หมูต้ม สูตร 8643",
        "cal": 379
    },
    "boiled_soup_8644": {
        "name": "ซุปต้ม สูตร 8644",
        "cal": 649
    },
    "steamed_pork_8645": {
        "name": "หมูนึ่ง สูตร 8645",
        "cal": 771
    },
    "boiled_soup_8646": {
        "name": "ซุปต้ม สูตร 8646",
        "cal": 445
    },
    "grilled_soup_8647": {
        "name": "ซุปย่าง สูตร 8647",
        "cal": 696
    },
    "grilled_shrimp_8648": {
        "name": "กุ้งย่าง สูตร 8648",
        "cal": 791
    },
    "stir_fried_chicken_8649": {
        "name": "ไก่ผัด สูตร 8649",
        "cal": 391
    },
    "fried_noodle_8650": {
        "name": "บะหมี่ทอด สูตร 8650",
        "cal": 610
    },
    "grilled_fish_8651": {
        "name": "ปลาย่าง สูตร 8651",
        "cal": 561
    },
    "grilled_chicken_8652": {
        "name": "ไก่ย่าง สูตร 8652",
        "cal": 397
    },
    "boiled_pork_8653": {
        "name": "หมูต้ม สูตร 8653",
        "cal": 91
    },
    "spicy_shrimp_8654": {
        "name": "กุ้งยำ สูตร 8654",
        "cal": 152
    },
    "spicy_soup_8655": {
        "name": "ซุปยำ สูตร 8655",
        "cal": 31
    },
    "steamed_shrimp_8656": {
        "name": "กุ้งนึ่ง สูตร 8656",
        "cal": 736
    },
    "stir_fried_noodle_8657": {
        "name": "บะหมี่ผัด สูตร 8657",
        "cal": 30
    },
    "boiled_beef_8658": {
        "name": "เนื้อต้ม สูตร 8658",
        "cal": 845
    },
    "grilled_chicken_8659": {
        "name": "ไก่ย่าง สูตร 8659",
        "cal": 371
    },
    "boiled_chicken_8660": {
        "name": "ไก่ต้ม สูตร 8660",
        "cal": 231
    },
    "spicy_rice_8661": {
        "name": "ข้าวยำ สูตร 8661",
        "cal": 769
    },
    "boiled_pork_8662": {
        "name": "หมูต้ม สูตร 8662",
        "cal": 547
    },
    "spicy_beef_8663": {
        "name": "เนื้อยำ สูตร 8663",
        "cal": 345
    },
    "boiled_chicken_8664": {
        "name": "ไก่ต้ม สูตร 8664",
        "cal": 698
    },
    "stir_fried_soup_8665": {
        "name": "ซุปผัด สูตร 8665",
        "cal": 477
    },
    "steamed_beef_8666": {
        "name": "เนื้อนึ่ง สูตร 8666",
        "cal": 163
    },
    "fried_chicken_8667": {
        "name": "ไก่ทอด สูตร 8667",
        "cal": 449
    },
    "spicy_noodle_8668": {
        "name": "บะหมี่ยำ สูตร 8668",
        "cal": 156
    },
    "grilled_shrimp_8669": {
        "name": "กุ้งย่าง สูตร 8669",
        "cal": 450
    },
    "spicy_soup_8670": {
        "name": "ซุปยำ สูตร 8670",
        "cal": 269
    },
    "stir_fried_shrimp_8671": {
        "name": "กุ้งผัด สูตร 8671",
        "cal": 265
    },
    "grilled_shrimp_8672": {
        "name": "กุ้งย่าง สูตร 8672",
        "cal": 423
    },
    "steamed_beef_8673": {
        "name": "เนื้อนึ่ง สูตร 8673",
        "cal": 521
    },
    "boiled_beef_8674": {
        "name": "เนื้อต้ม สูตร 8674",
        "cal": 115
    },
    "fried_fish_8675": {
        "name": "ปลาทอด สูตร 8675",
        "cal": 199
    },
    "spicy_beef_8676": {
        "name": "เนื้อยำ สูตร 8676",
        "cal": 765
    },
    "steamed_beef_8677": {
        "name": "เนื้อนึ่ง สูตร 8677",
        "cal": 808
    },
    "stir_fried_shrimp_8678": {
        "name": "กุ้งผัด สูตร 8678",
        "cal": 798
    },
    "fried_rice_8679": {
        "name": "ข้าวทอด สูตร 8679",
        "cal": 620
    },
    "boiled_fish_8680": {
        "name": "ปลาต้ม สูตร 8680",
        "cal": 512
    },
    "stir_fried_fish_8681": {
        "name": "ปลาผัด สูตร 8681",
        "cal": 817
    },
    "steamed_soup_8682": {
        "name": "ซุปนึ่ง สูตร 8682",
        "cal": 435
    },
    "stir_fried_noodle_8683": {
        "name": "บะหมี่ผัด สูตร 8683",
        "cal": 371
    },
    "grilled_shrimp_8684": {
        "name": "กุ้งย่าง สูตร 8684",
        "cal": 217
    },
    "fried_beef_8685": {
        "name": "เนื้อทอด สูตร 8685",
        "cal": 401
    },
    "fried_pork_8686": {
        "name": "หมูทอด สูตร 8686",
        "cal": 438
    },
    "steamed_soup_8687": {
        "name": "ซุปนึ่ง สูตร 8687",
        "cal": 756
    },
    "fried_pork_8688": {
        "name": "หมูทอด สูตร 8688",
        "cal": 415
    },
    "boiled_shrimp_8689": {
        "name": "กุ้งต้ม สูตร 8689",
        "cal": 659
    },
    "grilled_fish_8690": {
        "name": "ปลาย่าง สูตร 8690",
        "cal": 665
    },
    "grilled_pork_8691": {
        "name": "หมูย่าง สูตร 8691",
        "cal": 403
    },
    "steamed_fish_8692": {
        "name": "ปลานึ่ง สูตร 8692",
        "cal": 437
    },
    "boiled_soup_8693": {
        "name": "ซุปต้ม สูตร 8693",
        "cal": 130
    },
    "grilled_rice_8694": {
        "name": "ข้าวย่าง สูตร 8694",
        "cal": 194
    },
    "grilled_noodle_8695": {
        "name": "บะหมี่ย่าง สูตร 8695",
        "cal": 227
    },
    "grilled_soup_8696": {
        "name": "ซุปย่าง สูตร 8696",
        "cal": 657
    },
    "boiled_rice_8697": {
        "name": "ข้าวต้ม สูตร 8697",
        "cal": 412
    },
    "spicy_fish_8698": {
        "name": "ปลายำ สูตร 8698",
        "cal": 34
    },
    "boiled_shrimp_8699": {
        "name": "กุ้งต้ม สูตร 8699",
        "cal": 339
    },
    "steamed_fish_8700": {
        "name": "ปลานึ่ง สูตร 8700",
        "cal": 721
    },
    "boiled_fish_8701": {
        "name": "ปลาต้ม สูตร 8701",
        "cal": 800
    },
    "boiled_noodle_8702": {
        "name": "บะหมี่ต้ม สูตร 8702",
        "cal": 35
    },
    "steamed_shrimp_8703": {
        "name": "กุ้งนึ่ง สูตร 8703",
        "cal": 694
    },
    "grilled_rice_8704": {
        "name": "ข้าวย่าง สูตร 8704",
        "cal": 519
    },
    "steamed_squid_8705": {
        "name": "ปลาหมึกนึ่ง สูตร 8705",
        "cal": 273
    },
    "steamed_pork_8706": {
        "name": "หมูนึ่ง สูตร 8706",
        "cal": 37
    },
    "boiled_fish_8707": {
        "name": "ปลาต้ม สูตร 8707",
        "cal": 818
    },
    "steamed_soup_8708": {
        "name": "ซุปนึ่ง สูตร 8708",
        "cal": 274
    },
    "stir_fried_beef_8709": {
        "name": "เนื้อผัด สูตร 8709",
        "cal": 27
    },
    "fried_shrimp_8710": {
        "name": "กุ้งทอด สูตร 8710",
        "cal": 108
    },
    "grilled_squid_8711": {
        "name": "ปลาหมึกย่าง สูตร 8711",
        "cal": 783
    },
    "grilled_noodle_8712": {
        "name": "บะหมี่ย่าง สูตร 8712",
        "cal": 385
    },
    "stir_fried_soup_8713": {
        "name": "ซุปผัด สูตร 8713",
        "cal": 674
    },
    "spicy_chicken_8714": {
        "name": "ไก่ยำ สูตร 8714",
        "cal": 276
    },
    "spicy_chicken_8715": {
        "name": "ไก่ยำ สูตร 8715",
        "cal": 358
    },
    "steamed_chicken_8716": {
        "name": "ไก่นึ่ง สูตร 8716",
        "cal": 782
    },
    "spicy_squid_8717": {
        "name": "ปลาหมึกยำ สูตร 8717",
        "cal": 254
    },
    "spicy_noodle_8718": {
        "name": "บะหมี่ยำ สูตร 8718",
        "cal": 480
    },
    "stir_fried_beef_8719": {
        "name": "เนื้อผัด สูตร 8719",
        "cal": 572
    },
    "boiled_squid_8720": {
        "name": "ปลาหมึกต้ม สูตร 8720",
        "cal": 725
    },
    "spicy_rice_8721": {
        "name": "ข้าวยำ สูตร 8721",
        "cal": 676
    },
    "spicy_pork_8722": {
        "name": "หมูยำ สูตร 8722",
        "cal": 175
    },
    "steamed_shrimp_8723": {
        "name": "กุ้งนึ่ง สูตร 8723",
        "cal": 394
    },
    "stir_fried_chicken_8724": {
        "name": "ไก่ผัด สูตร 8724",
        "cal": 399
    },
    "fried_soup_8725": {
        "name": "ซุปทอด สูตร 8725",
        "cal": 576
    },
    "steamed_soup_8726": {
        "name": "ซุปนึ่ง สูตร 8726",
        "cal": 194
    },
    "spicy_shrimp_8727": {
        "name": "กุ้งยำ สูตร 8727",
        "cal": 597
    },
    "spicy_fish_8728": {
        "name": "ปลายำ สูตร 8728",
        "cal": 426
    },
    "grilled_chicken_8729": {
        "name": "ไก่ย่าง สูตร 8729",
        "cal": 247
    },
    "steamed_beef_8730": {
        "name": "เนื้อนึ่ง สูตร 8730",
        "cal": 420
    },
    "steamed_rice_8731": {
        "name": "ข้าวนึ่ง สูตร 8731",
        "cal": 237
    },
    "spicy_noodle_8732": {
        "name": "บะหมี่ยำ สูตร 8732",
        "cal": 115
    },
    "spicy_shrimp_8733": {
        "name": "กุ้งยำ สูตร 8733",
        "cal": 355
    },
    "stir_fried_rice_8734": {
        "name": "ข้าวผัด สูตร 8734",
        "cal": 470
    },
    "stir_fried_rice_8735": {
        "name": "ข้าวผัด สูตร 8735",
        "cal": 837
    },
    "spicy_chicken_8736": {
        "name": "ไก่ยำ สูตร 8736",
        "cal": 69
    },
    "steamed_squid_8737": {
        "name": "ปลาหมึกนึ่ง สูตร 8737",
        "cal": 819
    },
    "fried_rice_8738": {
        "name": "ข้าวทอด สูตร 8738",
        "cal": 562
    },
    "steamed_soup_8739": {
        "name": "ซุปนึ่ง สูตร 8739",
        "cal": 235
    },
    "stir_fried_soup_8740": {
        "name": "ซุปผัด สูตร 8740",
        "cal": 154
    },
    "stir_fried_beef_8741": {
        "name": "เนื้อผัด สูตร 8741",
        "cal": 91
    },
    "steamed_squid_8742": {
        "name": "ปลาหมึกนึ่ง สูตร 8742",
        "cal": 368
    },
    "boiled_fish_8743": {
        "name": "ปลาต้ม สูตร 8743",
        "cal": 773
    },
    "boiled_fish_8744": {
        "name": "ปลาต้ม สูตร 8744",
        "cal": 573
    },
    "stir_fried_pork_8745": {
        "name": "หมูผัด สูตร 8745",
        "cal": 483
    },
    "stir_fried_rice_8746": {
        "name": "ข้าวผัด สูตร 8746",
        "cal": 627
    },
    "boiled_rice_8747": {
        "name": "ข้าวต้ม สูตร 8747",
        "cal": 550
    },
    "steamed_squid_8748": {
        "name": "ปลาหมึกนึ่ง สูตร 8748",
        "cal": 398
    },
    "steamed_noodle_8749": {
        "name": "บะหมี่นึ่ง สูตร 8749",
        "cal": 192
    },
    "fried_squid_8750": {
        "name": "ปลาหมึกทอด สูตร 8750",
        "cal": 713
    },
    "stir_fried_shrimp_8751": {
        "name": "กุ้งผัด สูตร 8751",
        "cal": 471
    },
    "grilled_squid_8752": {
        "name": "ปลาหมึกย่าง สูตร 8752",
        "cal": 74
    },
    "fried_beef_8753": {
        "name": "เนื้อทอด สูตร 8753",
        "cal": 850
    },
    "steamed_chicken_8754": {
        "name": "ไก่นึ่ง สูตร 8754",
        "cal": 714
    },
    "stir_fried_squid_8755": {
        "name": "ปลาหมึกผัด สูตร 8755",
        "cal": 537
    },
    "steamed_rice_8756": {
        "name": "ข้าวนึ่ง สูตร 8756",
        "cal": 469
    },
    "steamed_chicken_8757": {
        "name": "ไก่นึ่ง สูตร 8757",
        "cal": 374
    },
    "steamed_noodle_8758": {
        "name": "บะหมี่นึ่ง สูตร 8758",
        "cal": 647
    },
    "boiled_rice_8759": {
        "name": "ข้าวต้ม สูตร 8759",
        "cal": 564
    },
    "stir_fried_chicken_8760": {
        "name": "ไก่ผัด สูตร 8760",
        "cal": 418
    },
    "steamed_fish_8761": {
        "name": "ปลานึ่ง สูตร 8761",
        "cal": 252
    },
    "steamed_squid_8762": {
        "name": "ปลาหมึกนึ่ง สูตร 8762",
        "cal": 545
    },
    "steamed_rice_8763": {
        "name": "ข้าวนึ่ง สูตร 8763",
        "cal": 570
    },
    "spicy_pork_8764": {
        "name": "หมูยำ สูตร 8764",
        "cal": 375
    },
    "stir_fried_pork_8765": {
        "name": "หมูผัด สูตร 8765",
        "cal": 385
    },
    "stir_fried_fish_8766": {
        "name": "ปลาผัด สูตร 8766",
        "cal": 723
    },
    "steamed_rice_8767": {
        "name": "ข้าวนึ่ง สูตร 8767",
        "cal": 598
    },
    "boiled_shrimp_8768": {
        "name": "กุ้งต้ม สูตร 8768",
        "cal": 756
    },
    "fried_chicken_8769": {
        "name": "ไก่ทอด สูตร 8769",
        "cal": 242
    },
    "spicy_soup_8770": {
        "name": "ซุปยำ สูตร 8770",
        "cal": 833
    },
    "stir_fried_pork_8771": {
        "name": "หมูผัด สูตร 8771",
        "cal": 421
    },
    "steamed_soup_8772": {
        "name": "ซุปนึ่ง สูตร 8772",
        "cal": 284
    },
    "stir_fried_chicken_8773": {
        "name": "ไก่ผัด สูตร 8773",
        "cal": 484
    },
    "fried_fish_8774": {
        "name": "ปลาทอด สูตร 8774",
        "cal": 734
    },
    "spicy_rice_8775": {
        "name": "ข้าวยำ สูตร 8775",
        "cal": 181
    },
    "fried_squid_8776": {
        "name": "ปลาหมึกทอด สูตร 8776",
        "cal": 402
    },
    "grilled_rice_8777": {
        "name": "ข้าวย่าง สูตร 8777",
        "cal": 142
    },
    "grilled_rice_8778": {
        "name": "ข้าวย่าง สูตร 8778",
        "cal": 615
    },
    "grilled_shrimp_8779": {
        "name": "กุ้งย่าง สูตร 8779",
        "cal": 62
    },
    "stir_fried_soup_8780": {
        "name": "ซุปผัด สูตร 8780",
        "cal": 350
    },
    "fried_noodle_8781": {
        "name": "บะหมี่ทอด สูตร 8781",
        "cal": 471
    },
    "spicy_soup_8782": {
        "name": "ซุปยำ สูตร 8782",
        "cal": 691
    },
    "fried_squid_8783": {
        "name": "ปลาหมึกทอด สูตร 8783",
        "cal": 27
    },
    "stir_fried_rice_8784": {
        "name": "ข้าวผัด สูตร 8784",
        "cal": 602
    },
    "boiled_chicken_8785": {
        "name": "ไก่ต้ม สูตร 8785",
        "cal": 797
    },
    "boiled_pork_8786": {
        "name": "หมูต้ม สูตร 8786",
        "cal": 825
    },
    "spicy_noodle_8787": {
        "name": "บะหมี่ยำ สูตร 8787",
        "cal": 667
    },
    "spicy_shrimp_8788": {
        "name": "กุ้งยำ สูตร 8788",
        "cal": 31
    },
    "spicy_pork_8789": {
        "name": "หมูยำ สูตร 8789",
        "cal": 382
    },
    "spicy_beef_8790": {
        "name": "เนื้อยำ สูตร 8790",
        "cal": 238
    },
    "grilled_squid_8791": {
        "name": "ปลาหมึกย่าง สูตร 8791",
        "cal": 550
    },
    "boiled_shrimp_8792": {
        "name": "กุ้งต้ม สูตร 8792",
        "cal": 687
    },
    "spicy_squid_8793": {
        "name": "ปลาหมึกยำ สูตร 8793",
        "cal": 56
    },
    "steamed_noodle_8794": {
        "name": "บะหมี่นึ่ง สูตร 8794",
        "cal": 218
    },
    "boiled_squid_8795": {
        "name": "ปลาหมึกต้ม สูตร 8795",
        "cal": 608
    },
    "fried_chicken_8796": {
        "name": "ไก่ทอด สูตร 8796",
        "cal": 89
    },
    "stir_fried_pork_8797": {
        "name": "หมูผัด สูตร 8797",
        "cal": 69
    },
    "steamed_beef_8798": {
        "name": "เนื้อนึ่ง สูตร 8798",
        "cal": 30
    },
    "spicy_shrimp_8799": {
        "name": "กุ้งยำ สูตร 8799",
        "cal": 610
    },
    "boiled_soup_8800": {
        "name": "ซุปต้ม สูตร 8800",
        "cal": 525
    },
    "boiled_noodle_8801": {
        "name": "บะหมี่ต้ม สูตร 8801",
        "cal": 110
    },
    "spicy_noodle_8802": {
        "name": "บะหมี่ยำ สูตร 8802",
        "cal": 495
    },
    "spicy_squid_8803": {
        "name": "ปลาหมึกยำ สูตร 8803",
        "cal": 144
    },
    "grilled_rice_8804": {
        "name": "ข้าวย่าง สูตร 8804",
        "cal": 330
    },
    "boiled_fish_8805": {
        "name": "ปลาต้ม สูตร 8805",
        "cal": 683
    },
    "steamed_pork_8806": {
        "name": "หมูนึ่ง สูตร 8806",
        "cal": 397
    },
    "grilled_pork_8807": {
        "name": "หมูย่าง สูตร 8807",
        "cal": 506
    },
    "fried_rice_8808": {
        "name": "ข้าวทอด สูตร 8808",
        "cal": 779
    },
    "grilled_chicken_8809": {
        "name": "ไก่ย่าง สูตร 8809",
        "cal": 632
    },
    "steamed_soup_8810": {
        "name": "ซุปนึ่ง สูตร 8810",
        "cal": 765
    },
    "steamed_soup_8811": {
        "name": "ซุปนึ่ง สูตร 8811",
        "cal": 651
    },
    "boiled_rice_8812": {
        "name": "ข้าวต้ม สูตร 8812",
        "cal": 117
    },
    "stir_fried_squid_8813": {
        "name": "ปลาหมึกผัด สูตร 8813",
        "cal": 140
    },
    "steamed_soup_8814": {
        "name": "ซุปนึ่ง สูตร 8814",
        "cal": 129
    },
    "grilled_rice_8815": {
        "name": "ข้าวย่าง สูตร 8815",
        "cal": 564
    },
    "stir_fried_noodle_8816": {
        "name": "บะหมี่ผัด สูตร 8816",
        "cal": 788
    },
    "grilled_beef_8817": {
        "name": "เนื้อย่าง สูตร 8817",
        "cal": 774
    },
    "steamed_soup_8818": {
        "name": "ซุปนึ่ง สูตร 8818",
        "cal": 445
    },
    "stir_fried_noodle_8819": {
        "name": "บะหมี่ผัด สูตร 8819",
        "cal": 593
    },
    "steamed_fish_8820": {
        "name": "ปลานึ่ง สูตร 8820",
        "cal": 507
    },
    "boiled_pork_8821": {
        "name": "หมูต้ม สูตร 8821",
        "cal": 807
    },
    "spicy_rice_8822": {
        "name": "ข้าวยำ สูตร 8822",
        "cal": 347
    },
    "spicy_squid_8823": {
        "name": "ปลาหมึกยำ สูตร 8823",
        "cal": 320
    },
    "steamed_shrimp_8824": {
        "name": "กุ้งนึ่ง สูตร 8824",
        "cal": 595
    },
    "fried_fish_8825": {
        "name": "ปลาทอด สูตร 8825",
        "cal": 821
    },
    "fried_noodle_8826": {
        "name": "บะหมี่ทอด สูตร 8826",
        "cal": 416
    },
    "boiled_fish_8827": {
        "name": "ปลาต้ม สูตร 8827",
        "cal": 555
    },
    "boiled_noodle_8828": {
        "name": "บะหมี่ต้ม สูตร 8828",
        "cal": 423
    },
    "steamed_noodle_8829": {
        "name": "บะหมี่นึ่ง สูตร 8829",
        "cal": 457
    },
    "grilled_noodle_8830": {
        "name": "บะหมี่ย่าง สูตร 8830",
        "cal": 750
    },
    "steamed_beef_8831": {
        "name": "เนื้อนึ่ง สูตร 8831",
        "cal": 308
    },
    "spicy_shrimp_8832": {
        "name": "กุ้งยำ สูตร 8832",
        "cal": 358
    },
    "boiled_chicken_8833": {
        "name": "ไก่ต้ม สูตร 8833",
        "cal": 710
    },
    "steamed_pork_8834": {
        "name": "หมูนึ่ง สูตร 8834",
        "cal": 264
    },
    "boiled_noodle_8835": {
        "name": "บะหมี่ต้ม สูตร 8835",
        "cal": 839
    },
    "grilled_rice_8836": {
        "name": "ข้าวย่าง สูตร 8836",
        "cal": 93
    },
    "boiled_rice_8837": {
        "name": "ข้าวต้ม สูตร 8837",
        "cal": 147
    },
    "boiled_beef_8838": {
        "name": "เนื้อต้ม สูตร 8838",
        "cal": 370
    },
    "grilled_pork_8839": {
        "name": "หมูย่าง สูตร 8839",
        "cal": 726
    },
    "fried_pork_8840": {
        "name": "หมูทอด สูตร 8840",
        "cal": 643
    },
    "steamed_soup_8841": {
        "name": "ซุปนึ่ง สูตร 8841",
        "cal": 313
    },
    "stir_fried_fish_8842": {
        "name": "ปลาผัด สูตร 8842",
        "cal": 476
    },
    "fried_soup_8843": {
        "name": "ซุปทอด สูตร 8843",
        "cal": 829
    },
    "steamed_fish_8844": {
        "name": "ปลานึ่ง สูตร 8844",
        "cal": 637
    },
    "spicy_chicken_8845": {
        "name": "ไก่ยำ สูตร 8845",
        "cal": 684
    },
    "fried_pork_8846": {
        "name": "หมูทอด สูตร 8846",
        "cal": 721
    },
    "fried_rice_8847": {
        "name": "ข้าวทอด สูตร 8847",
        "cal": 642
    },
    "boiled_noodle_8848": {
        "name": "บะหมี่ต้ม สูตร 8848",
        "cal": 69
    },
    "steamed_beef_8849": {
        "name": "เนื้อนึ่ง สูตร 8849",
        "cal": 552
    },
    "steamed_soup_8850": {
        "name": "ซุปนึ่ง สูตร 8850",
        "cal": 742
    },
    "steamed_rice_8851": {
        "name": "ข้าวนึ่ง สูตร 8851",
        "cal": 816
    },
    "grilled_fish_8852": {
        "name": "ปลาย่าง สูตร 8852",
        "cal": 144
    },
    "boiled_pork_8853": {
        "name": "หมูต้ม สูตร 8853",
        "cal": 570
    },
    "grilled_rice_8854": {
        "name": "ข้าวย่าง สูตร 8854",
        "cal": 350
    },
    "fried_beef_8855": {
        "name": "เนื้อทอด สูตร 8855",
        "cal": 821
    },
    "fried_pork_8856": {
        "name": "หมูทอด สูตร 8856",
        "cal": 261
    },
    "steamed_fish_8857": {
        "name": "ปลานึ่ง สูตร 8857",
        "cal": 699
    },
    "boiled_fish_8858": {
        "name": "ปลาต้ม สูตร 8858",
        "cal": 396
    },
    "fried_fish_8859": {
        "name": "ปลาทอด สูตร 8859",
        "cal": 381
    },
    "fried_chicken_8860": {
        "name": "ไก่ทอด สูตร 8860",
        "cal": 152
    },
    "steamed_noodle_8861": {
        "name": "บะหมี่นึ่ง สูตร 8861",
        "cal": 796
    },
    "spicy_squid_8862": {
        "name": "ปลาหมึกยำ สูตร 8862",
        "cal": 296
    },
    "spicy_squid_8863": {
        "name": "ปลาหมึกยำ สูตร 8863",
        "cal": 225
    },
    "fried_noodle_8864": {
        "name": "บะหมี่ทอด สูตร 8864",
        "cal": 125
    },
    "fried_pork_8865": {
        "name": "หมูทอด สูตร 8865",
        "cal": 593
    },
    "spicy_noodle_8866": {
        "name": "บะหมี่ยำ สูตร 8866",
        "cal": 196
    },
    "grilled_noodle_8867": {
        "name": "บะหมี่ย่าง สูตร 8867",
        "cal": 461
    },
    "boiled_rice_8868": {
        "name": "ข้าวต้ม สูตร 8868",
        "cal": 502
    },
    "fried_fish_8869": {
        "name": "ปลาทอด สูตร 8869",
        "cal": 652
    },
    "boiled_shrimp_8870": {
        "name": "กุ้งต้ม สูตร 8870",
        "cal": 566
    },
    "spicy_soup_8871": {
        "name": "ซุปยำ สูตร 8871",
        "cal": 733
    },
    "fried_beef_8872": {
        "name": "เนื้อทอด สูตร 8872",
        "cal": 849
    },
    "spicy_beef_8873": {
        "name": "เนื้อยำ สูตร 8873",
        "cal": 647
    },
    "grilled_beef_8874": {
        "name": "เนื้อย่าง สูตร 8874",
        "cal": 682
    },
    "spicy_chicken_8875": {
        "name": "ไก่ยำ สูตร 8875",
        "cal": 221
    },
    "steamed_noodle_8876": {
        "name": "บะหมี่นึ่ง สูตร 8876",
        "cal": 138
    },
    "boiled_squid_8877": {
        "name": "ปลาหมึกต้ม สูตร 8877",
        "cal": 465
    },
    "boiled_fish_8878": {
        "name": "ปลาต้ม สูตร 8878",
        "cal": 450
    },
    "steamed_beef_8879": {
        "name": "เนื้อนึ่ง สูตร 8879",
        "cal": 196
    },
    "grilled_noodle_8880": {
        "name": "บะหมี่ย่าง สูตร 8880",
        "cal": 850
    },
    "spicy_chicken_8881": {
        "name": "ไก่ยำ สูตร 8881",
        "cal": 540
    },
    "steamed_fish_8882": {
        "name": "ปลานึ่ง สูตร 8882",
        "cal": 586
    },
    "fried_rice_8883": {
        "name": "ข้าวทอด สูตร 8883",
        "cal": 392
    },
    "grilled_shrimp_8884": {
        "name": "กุ้งย่าง สูตร 8884",
        "cal": 838
    },
    "steamed_noodle_8885": {
        "name": "บะหมี่นึ่ง สูตร 8885",
        "cal": 256
    },
    "steamed_fish_8886": {
        "name": "ปลานึ่ง สูตร 8886",
        "cal": 683
    },
    "boiled_pork_8887": {
        "name": "หมูต้ม สูตร 8887",
        "cal": 93
    },
    "spicy_squid_8888": {
        "name": "ปลาหมึกยำ สูตร 8888",
        "cal": 395
    },
    "steamed_squid_8889": {
        "name": "ปลาหมึกนึ่ง สูตร 8889",
        "cal": 277
    },
    "stir_fried_rice_8890": {
        "name": "ข้าวผัด สูตร 8890",
        "cal": 146
    },
    "steamed_noodle_8891": {
        "name": "บะหมี่นึ่ง สูตร 8891",
        "cal": 804
    },
    "stir_fried_soup_8892": {
        "name": "ซุปผัด สูตร 8892",
        "cal": 45
    },
    "boiled_shrimp_8893": {
        "name": "กุ้งต้ม สูตร 8893",
        "cal": 427
    },
    "spicy_shrimp_8894": {
        "name": "กุ้งยำ สูตร 8894",
        "cal": 146
    },
    "stir_fried_beef_8895": {
        "name": "เนื้อผัด สูตร 8895",
        "cal": 697
    },
    "stir_fried_soup_8896": {
        "name": "ซุปผัด สูตร 8896",
        "cal": 635
    },
    "fried_squid_8897": {
        "name": "ปลาหมึกทอด สูตร 8897",
        "cal": 785
    },
    "fried_fish_8898": {
        "name": "ปลาทอด สูตร 8898",
        "cal": 308
    },
    "spicy_fish_8899": {
        "name": "ปลายำ สูตร 8899",
        "cal": 810
    },
    "spicy_noodle_8900": {
        "name": "บะหมี่ยำ สูตร 8900",
        "cal": 102
    },
    "stir_fried_beef_8901": {
        "name": "เนื้อผัด สูตร 8901",
        "cal": 226
    },
    "spicy_noodle_8902": {
        "name": "บะหมี่ยำ สูตร 8902",
        "cal": 624
    },
    "spicy_beef_8903": {
        "name": "เนื้อยำ สูตร 8903",
        "cal": 137
    },
    "boiled_noodle_8904": {
        "name": "บะหมี่ต้ม สูตร 8904",
        "cal": 346
    },
    "grilled_rice_8905": {
        "name": "ข้าวย่าง สูตร 8905",
        "cal": 825
    },
    "spicy_fish_8906": {
        "name": "ปลายำ สูตร 8906",
        "cal": 266
    },
    "fried_squid_8907": {
        "name": "ปลาหมึกทอด สูตร 8907",
        "cal": 106
    },
    "boiled_noodle_8908": {
        "name": "บะหมี่ต้ม สูตร 8908",
        "cal": 817
    },
    "fried_chicken_8909": {
        "name": "ไก่ทอด สูตร 8909",
        "cal": 67
    },
    "grilled_shrimp_8910": {
        "name": "กุ้งย่าง สูตร 8910",
        "cal": 463
    },
    "steamed_rice_8911": {
        "name": "ข้าวนึ่ง สูตร 8911",
        "cal": 535
    },
    "fried_chicken_8912": {
        "name": "ไก่ทอด สูตร 8912",
        "cal": 261
    },
    "boiled_soup_8913": {
        "name": "ซุปต้ม สูตร 8913",
        "cal": 467
    },
    "stir_fried_squid_8914": {
        "name": "ปลาหมึกผัด สูตร 8914",
        "cal": 438
    },
    "grilled_fish_8915": {
        "name": "ปลาย่าง สูตร 8915",
        "cal": 377
    },
    "grilled_squid_8916": {
        "name": "ปลาหมึกย่าง สูตร 8916",
        "cal": 152
    },
    "spicy_beef_8917": {
        "name": "เนื้อยำ สูตร 8917",
        "cal": 457
    },
    "steamed_rice_8918": {
        "name": "ข้าวนึ่ง สูตร 8918",
        "cal": 487
    },
    "grilled_chicken_8919": {
        "name": "ไก่ย่าง สูตร 8919",
        "cal": 481
    },
    "steamed_pork_8920": {
        "name": "หมูนึ่ง สูตร 8920",
        "cal": 813
    },
    "grilled_rice_8921": {
        "name": "ข้าวย่าง สูตร 8921",
        "cal": 722
    },
    "fried_fish_8922": {
        "name": "ปลาทอด สูตร 8922",
        "cal": 23
    },
    "fried_rice_8923": {
        "name": "ข้าวทอด สูตร 8923",
        "cal": 474
    },
    "stir_fried_beef_8924": {
        "name": "เนื้อผัด สูตร 8924",
        "cal": 572
    },
    "steamed_beef_8925": {
        "name": "เนื้อนึ่ง สูตร 8925",
        "cal": 100
    },
    "steamed_fish_8926": {
        "name": "ปลานึ่ง สูตร 8926",
        "cal": 511
    },
    "steamed_soup_8927": {
        "name": "ซุปนึ่ง สูตร 8927",
        "cal": 337
    },
    "steamed_squid_8928": {
        "name": "ปลาหมึกนึ่ง สูตร 8928",
        "cal": 486
    },
    "steamed_soup_8929": {
        "name": "ซุปนึ่ง สูตร 8929",
        "cal": 656
    },
    "steamed_shrimp_8930": {
        "name": "กุ้งนึ่ง สูตร 8930",
        "cal": 387
    },
    "fried_squid_8931": {
        "name": "ปลาหมึกทอด สูตร 8931",
        "cal": 272
    },
    "fried_fish_8932": {
        "name": "ปลาทอด สูตร 8932",
        "cal": 647
    },
    "stir_fried_shrimp_8933": {
        "name": "กุ้งผัด สูตร 8933",
        "cal": 238
    },
    "steamed_noodle_8934": {
        "name": "บะหมี่นึ่ง สูตร 8934",
        "cal": 418
    },
    "boiled_squid_8935": {
        "name": "ปลาหมึกต้ม สูตร 8935",
        "cal": 538
    },
    "boiled_soup_8936": {
        "name": "ซุปต้ม สูตร 8936",
        "cal": 517
    },
    "boiled_beef_8937": {
        "name": "เนื้อต้ม สูตร 8937",
        "cal": 38
    },
    "spicy_soup_8938": {
        "name": "ซุปยำ สูตร 8938",
        "cal": 307
    },
    "spicy_rice_8939": {
        "name": "ข้าวยำ สูตร 8939",
        "cal": 581
    },
    "grilled_squid_8940": {
        "name": "ปลาหมึกย่าง สูตร 8940",
        "cal": 798
    },
    "steamed_beef_8941": {
        "name": "เนื้อนึ่ง สูตร 8941",
        "cal": 586
    },
    "fried_rice_8942": {
        "name": "ข้าวทอด สูตร 8942",
        "cal": 736
    },
    "fried_rice_8943": {
        "name": "ข้าวทอด สูตร 8943",
        "cal": 627
    },
    "steamed_fish_8944": {
        "name": "ปลานึ่ง สูตร 8944",
        "cal": 399
    },
    "boiled_pork_8945": {
        "name": "หมูต้ม สูตร 8945",
        "cal": 680
    },
    "fried_noodle_8946": {
        "name": "บะหมี่ทอด สูตร 8946",
        "cal": 613
    },
    "steamed_beef_8947": {
        "name": "เนื้อนึ่ง สูตร 8947",
        "cal": 437
    },
    "boiled_pork_8948": {
        "name": "หมูต้ม สูตร 8948",
        "cal": 621
    },
    "boiled_squid_8949": {
        "name": "ปลาหมึกต้ม สูตร 8949",
        "cal": 602
    },
    "steamed_chicken_8950": {
        "name": "ไก่นึ่ง สูตร 8950",
        "cal": 366
    },
    "steamed_fish_8951": {
        "name": "ปลานึ่ง สูตร 8951",
        "cal": 703
    },
    "fried_shrimp_8952": {
        "name": "กุ้งทอด สูตร 8952",
        "cal": 754
    },
    "boiled_squid_8953": {
        "name": "ปลาหมึกต้ม สูตร 8953",
        "cal": 678
    },
    "steamed_squid_8954": {
        "name": "ปลาหมึกนึ่ง สูตร 8954",
        "cal": 458
    },
    "grilled_noodle_8955": {
        "name": "บะหมี่ย่าง สูตร 8955",
        "cal": 148
    },
    "boiled_shrimp_8956": {
        "name": "กุ้งต้ม สูตร 8956",
        "cal": 684
    },
    "grilled_rice_8957": {
        "name": "ข้าวย่าง สูตร 8957",
        "cal": 438
    },
    "steamed_pork_8958": {
        "name": "หมูนึ่ง สูตร 8958",
        "cal": 586
    },
    "boiled_beef_8959": {
        "name": "เนื้อต้ม สูตร 8959",
        "cal": 475
    },
    "steamed_pork_8960": {
        "name": "หมูนึ่ง สูตร 8960",
        "cal": 227
    },
    "stir_fried_shrimp_8961": {
        "name": "กุ้งผัด สูตร 8961",
        "cal": 508
    },
    "boiled_squid_8962": {
        "name": "ปลาหมึกต้ม สูตร 8962",
        "cal": 739
    },
    "boiled_rice_8963": {
        "name": "ข้าวต้ม สูตร 8963",
        "cal": 845
    },
    "spicy_squid_8964": {
        "name": "ปลาหมึกยำ สูตร 8964",
        "cal": 763
    },
    "boiled_noodle_8965": {
        "name": "บะหมี่ต้ม สูตร 8965",
        "cal": 554
    },
    "boiled_squid_8966": {
        "name": "ปลาหมึกต้ม สูตร 8966",
        "cal": 122
    },
    "boiled_pork_8967": {
        "name": "หมูต้ม สูตร 8967",
        "cal": 116
    },
    "spicy_fish_8968": {
        "name": "ปลายำ สูตร 8968",
        "cal": 541
    },
    "boiled_pork_8969": {
        "name": "หมูต้ม สูตร 8969",
        "cal": 466
    },
    "stir_fried_noodle_8970": {
        "name": "บะหมี่ผัด สูตร 8970",
        "cal": 476
    },
    "steamed_soup_8971": {
        "name": "ซุปนึ่ง สูตร 8971",
        "cal": 126
    },
    "stir_fried_soup_8972": {
        "name": "ซุปผัด สูตร 8972",
        "cal": 710
    },
    "steamed_soup_8973": {
        "name": "ซุปนึ่ง สูตร 8973",
        "cal": 99
    },
    "stir_fried_noodle_8974": {
        "name": "บะหมี่ผัด สูตร 8974",
        "cal": 846
    },
    "grilled_fish_8975": {
        "name": "ปลาย่าง สูตร 8975",
        "cal": 528
    },
    "grilled_squid_8976": {
        "name": "ปลาหมึกย่าง สูตร 8976",
        "cal": 120
    },
    "grilled_beef_8977": {
        "name": "เนื้อย่าง สูตร 8977",
        "cal": 588
    },
    "spicy_shrimp_8978": {
        "name": "กุ้งยำ สูตร 8978",
        "cal": 404
    },
    "spicy_soup_8979": {
        "name": "ซุปยำ สูตร 8979",
        "cal": 91
    },
    "fried_soup_8980": {
        "name": "ซุปทอด สูตร 8980",
        "cal": 507
    },
    "steamed_noodle_8981": {
        "name": "บะหมี่นึ่ง สูตร 8981",
        "cal": 829
    },
    "stir_fried_rice_8982": {
        "name": "ข้าวผัด สูตร 8982",
        "cal": 705
    },
    "boiled_rice_8983": {
        "name": "ข้าวต้ม สูตร 8983",
        "cal": 603
    },
    "spicy_beef_8984": {
        "name": "เนื้อยำ สูตร 8984",
        "cal": 73
    },
    "spicy_soup_8985": {
        "name": "ซุปยำ สูตร 8985",
        "cal": 665
    },
    "spicy_noodle_8986": {
        "name": "บะหมี่ยำ สูตร 8986",
        "cal": 696
    },
    "boiled_fish_8987": {
        "name": "ปลาต้ม สูตร 8987",
        "cal": 184
    },
    "spicy_pork_8988": {
        "name": "หมูยำ สูตร 8988",
        "cal": 235
    },
    "steamed_pork_8989": {
        "name": "หมูนึ่ง สูตร 8989",
        "cal": 133
    },
    "stir_fried_rice_8990": {
        "name": "ข้าวผัด สูตร 8990",
        "cal": 219
    },
    "steamed_soup_8991": {
        "name": "ซุปนึ่ง สูตร 8991",
        "cal": 712
    },
    "grilled_pork_8992": {
        "name": "หมูย่าง สูตร 8992",
        "cal": 242
    },
    "grilled_soup_8993": {
        "name": "ซุปย่าง สูตร 8993",
        "cal": 119
    },
    "grilled_squid_8994": {
        "name": "ปลาหมึกย่าง สูตร 8994",
        "cal": 683
    },
    "fried_chicken_8995": {
        "name": "ไก่ทอด สูตร 8995",
        "cal": 133
    },
    "stir_fried_noodle_8996": {
        "name": "บะหมี่ผัด สูตร 8996",
        "cal": 316
    },
    "spicy_squid_8997": {
        "name": "ปลาหมึกยำ สูตร 8997",
        "cal": 356
    },
    "grilled_rice_8998": {
        "name": "ข้าวย่าง สูตร 8998",
        "cal": 301
    },
    "fried_beef_8999": {
        "name": "เนื้อทอด สูตร 8999",
        "cal": 157
    },
    "fried_pork_9000": {
        "name": "หมูทอด สูตร 9000",
        "cal": 105
    },
    "boiled_noodle_9001": {
        "name": "บะหมี่ต้ม สูตร 9001",
        "cal": 604
    },
    "grilled_chicken_9002": {
        "name": "ไก่ย่าง สูตร 9002",
        "cal": 91
    },
    "fried_chicken_9003": {
        "name": "ไก่ทอด สูตร 9003",
        "cal": 786
    },
    "steamed_fish_9004": {
        "name": "ปลานึ่ง สูตร 9004",
        "cal": 275
    },
    "steamed_shrimp_9005": {
        "name": "กุ้งนึ่ง สูตร 9005",
        "cal": 358
    },
    "boiled_chicken_9006": {
        "name": "ไก่ต้ม สูตร 9006",
        "cal": 283
    },
    "steamed_squid_9007": {
        "name": "ปลาหมึกนึ่ง สูตร 9007",
        "cal": 270
    },
    "stir_fried_rice_9008": {
        "name": "ข้าวผัด สูตร 9008",
        "cal": 216
    },
    "grilled_chicken_9009": {
        "name": "ไก่ย่าง สูตร 9009",
        "cal": 572
    },
    "grilled_soup_9010": {
        "name": "ซุปย่าง สูตร 9010",
        "cal": 608
    },
    "fried_noodle_9011": {
        "name": "บะหมี่ทอด สูตร 9011",
        "cal": 707
    },
    "boiled_fish_9012": {
        "name": "ปลาต้ม สูตร 9012",
        "cal": 244
    },
    "boiled_rice_9013": {
        "name": "ข้าวต้ม สูตร 9013",
        "cal": 47
    },
    "spicy_squid_9014": {
        "name": "ปลาหมึกยำ สูตร 9014",
        "cal": 38
    },
    "steamed_squid_9015": {
        "name": "ปลาหมึกนึ่ง สูตร 9015",
        "cal": 193
    },
    "boiled_chicken_9016": {
        "name": "ไก่ต้ม สูตร 9016",
        "cal": 107
    },
    "grilled_chicken_9017": {
        "name": "ไก่ย่าง สูตร 9017",
        "cal": 72
    },
    "steamed_squid_9018": {
        "name": "ปลาหมึกนึ่ง สูตร 9018",
        "cal": 799
    },
    "stir_fried_beef_9019": {
        "name": "เนื้อผัด สูตร 9019",
        "cal": 458
    },
    "spicy_rice_9020": {
        "name": "ข้าวยำ สูตร 9020",
        "cal": 461
    },
    "boiled_noodle_9021": {
        "name": "บะหมี่ต้ม สูตร 9021",
        "cal": 414
    },
    "steamed_fish_9022": {
        "name": "ปลานึ่ง สูตร 9022",
        "cal": 517
    },
    "steamed_squid_9023": {
        "name": "ปลาหมึกนึ่ง สูตร 9023",
        "cal": 333
    },
    "stir_fried_fish_9024": {
        "name": "ปลาผัด สูตร 9024",
        "cal": 291
    },
    "stir_fried_chicken_9025": {
        "name": "ไก่ผัด สูตร 9025",
        "cal": 37
    },
    "boiled_shrimp_9026": {
        "name": "กุ้งต้ม สูตร 9026",
        "cal": 179
    },
    "steamed_squid_9027": {
        "name": "ปลาหมึกนึ่ง สูตร 9027",
        "cal": 440
    },
    "steamed_shrimp_9028": {
        "name": "กุ้งนึ่ง สูตร 9028",
        "cal": 767
    },
    "stir_fried_beef_9029": {
        "name": "เนื้อผัด สูตร 9029",
        "cal": 132
    },
    "boiled_beef_9030": {
        "name": "เนื้อต้ม สูตร 9030",
        "cal": 419
    },
    "stir_fried_soup_9031": {
        "name": "ซุปผัด สูตร 9031",
        "cal": 581
    },
    "stir_fried_rice_9032": {
        "name": "ข้าวผัด สูตร 9032",
        "cal": 457
    },
    "stir_fried_pork_9033": {
        "name": "หมูผัด สูตร 9033",
        "cal": 691
    },
    "spicy_beef_9034": {
        "name": "เนื้อยำ สูตร 9034",
        "cal": 705
    },
    "boiled_squid_9035": {
        "name": "ปลาหมึกต้ม สูตร 9035",
        "cal": 829
    },
    "spicy_chicken_9036": {
        "name": "ไก่ยำ สูตร 9036",
        "cal": 768
    },
    "steamed_rice_9037": {
        "name": "ข้าวนึ่ง สูตร 9037",
        "cal": 430
    },
    "grilled_pork_9038": {
        "name": "หมูย่าง สูตร 9038",
        "cal": 77
    },
    "fried_chicken_9039": {
        "name": "ไก่ทอด สูตร 9039",
        "cal": 519
    },
    "fried_beef_9040": {
        "name": "เนื้อทอด สูตร 9040",
        "cal": 317
    },
    "steamed_shrimp_9041": {
        "name": "กุ้งนึ่ง สูตร 9041",
        "cal": 248
    },
    "steamed_squid_9042": {
        "name": "ปลาหมึกนึ่ง สูตร 9042",
        "cal": 518
    },
    "grilled_squid_9043": {
        "name": "ปลาหมึกย่าง สูตร 9043",
        "cal": 800
    },
    "grilled_pork_9044": {
        "name": "หมูย่าง สูตร 9044",
        "cal": 646
    },
    "steamed_chicken_9045": {
        "name": "ไก่นึ่ง สูตร 9045",
        "cal": 43
    },
    "steamed_beef_9046": {
        "name": "เนื้อนึ่ง สูตร 9046",
        "cal": 166
    },
    "steamed_rice_9047": {
        "name": "ข้าวนึ่ง สูตร 9047",
        "cal": 542
    },
    "stir_fried_shrimp_9048": {
        "name": "กุ้งผัด สูตร 9048",
        "cal": 317
    },
    "grilled_beef_9049": {
        "name": "เนื้อย่าง สูตร 9049",
        "cal": 397
    },
    "boiled_squid_9050": {
        "name": "ปลาหมึกต้ม สูตร 9050",
        "cal": 586
    },
    "fried_soup_9051": {
        "name": "ซุปทอด สูตร 9051",
        "cal": 245
    },
    "steamed_noodle_9052": {
        "name": "บะหมี่นึ่ง สูตร 9052",
        "cal": 625
    },
    "steamed_rice_9053": {
        "name": "ข้าวนึ่ง สูตร 9053",
        "cal": 785
    },
    "spicy_rice_9054": {
        "name": "ข้าวยำ สูตร 9054",
        "cal": 560
    },
    "spicy_noodle_9055": {
        "name": "บะหมี่ยำ สูตร 9055",
        "cal": 627
    },
    "steamed_chicken_9056": {
        "name": "ไก่นึ่ง สูตร 9056",
        "cal": 40
    },
    "steamed_beef_9057": {
        "name": "เนื้อนึ่ง สูตร 9057",
        "cal": 120
    },
    "grilled_soup_9058": {
        "name": "ซุปย่าง สูตร 9058",
        "cal": 754
    },
    "steamed_noodle_9059": {
        "name": "บะหมี่นึ่ง สูตร 9059",
        "cal": 452
    },
    "grilled_shrimp_9060": {
        "name": "กุ้งย่าง สูตร 9060",
        "cal": 42
    },
    "spicy_shrimp_9061": {
        "name": "กุ้งยำ สูตร 9061",
        "cal": 786
    },
    "boiled_shrimp_9062": {
        "name": "กุ้งต้ม สูตร 9062",
        "cal": 729
    },
    "spicy_beef_9063": {
        "name": "เนื้อยำ สูตร 9063",
        "cal": 685
    },
    "steamed_pork_9064": {
        "name": "หมูนึ่ง สูตร 9064",
        "cal": 272
    },
    "fried_squid_9065": {
        "name": "ปลาหมึกทอด สูตร 9065",
        "cal": 509
    },
    "fried_pork_9066": {
        "name": "หมูทอด สูตร 9066",
        "cal": 316
    },
    "grilled_chicken_9067": {
        "name": "ไก่ย่าง สูตร 9067",
        "cal": 579
    },
    "spicy_rice_9068": {
        "name": "ข้าวยำ สูตร 9068",
        "cal": 237
    },
    "fried_soup_9069": {
        "name": "ซุปทอด สูตร 9069",
        "cal": 580
    },
    "steamed_rice_9070": {
        "name": "ข้าวนึ่ง สูตร 9070",
        "cal": 641
    },
    "spicy_beef_9071": {
        "name": "เนื้อยำ สูตร 9071",
        "cal": 684
    },
    "boiled_soup_9072": {
        "name": "ซุปต้ม สูตร 9072",
        "cal": 732
    },
    "spicy_fish_9073": {
        "name": "ปลายำ สูตร 9073",
        "cal": 845
    },
    "boiled_rice_9074": {
        "name": "ข้าวต้ม สูตร 9074",
        "cal": 379
    },
    "fried_noodle_9075": {
        "name": "บะหมี่ทอด สูตร 9075",
        "cal": 37
    },
    "boiled_soup_9076": {
        "name": "ซุปต้ม สูตร 9076",
        "cal": 330
    },
    "fried_rice_9077": {
        "name": "ข้าวทอด สูตร 9077",
        "cal": 491
    },
    "spicy_squid_9078": {
        "name": "ปลาหมึกยำ สูตร 9078",
        "cal": 150
    },
    "grilled_squid_9079": {
        "name": "ปลาหมึกย่าง สูตร 9079",
        "cal": 694
    },
    "stir_fried_squid_9080": {
        "name": "ปลาหมึกผัด สูตร 9080",
        "cal": 644
    },
    "steamed_beef_9081": {
        "name": "เนื้อนึ่ง สูตร 9081",
        "cal": 815
    },
    "grilled_squid_9082": {
        "name": "ปลาหมึกย่าง สูตร 9082",
        "cal": 467
    },
    "spicy_pork_9083": {
        "name": "หมูยำ สูตร 9083",
        "cal": 444
    },
    "fried_beef_9084": {
        "name": "เนื้อทอด สูตร 9084",
        "cal": 581
    },
    "steamed_chicken_9085": {
        "name": "ไก่นึ่ง สูตร 9085",
        "cal": 648
    },
    "grilled_shrimp_9086": {
        "name": "กุ้งย่าง สูตร 9086",
        "cal": 739
    },
    "stir_fried_squid_9087": {
        "name": "ปลาหมึกผัด สูตร 9087",
        "cal": 771
    },
    "fried_shrimp_9088": {
        "name": "กุ้งทอด สูตร 9088",
        "cal": 151
    },
    "fried_squid_9089": {
        "name": "ปลาหมึกทอด สูตร 9089",
        "cal": 533
    },
    "boiled_fish_9090": {
        "name": "ปลาต้ม สูตร 9090",
        "cal": 410
    },
    "grilled_beef_9091": {
        "name": "เนื้อย่าง สูตร 9091",
        "cal": 317
    },
    "steamed_soup_9092": {
        "name": "ซุปนึ่ง สูตร 9092",
        "cal": 805
    },
    "boiled_beef_9093": {
        "name": "เนื้อต้ม สูตร 9093",
        "cal": 734
    },
    "grilled_beef_9094": {
        "name": "เนื้อย่าง สูตร 9094",
        "cal": 652
    },
    "boiled_pork_9095": {
        "name": "หมูต้ม สูตร 9095",
        "cal": 394
    },
    "grilled_pork_9096": {
        "name": "หมูย่าง สูตร 9096",
        "cal": 304
    },
    "steamed_noodle_9097": {
        "name": "บะหมี่นึ่ง สูตร 9097",
        "cal": 240
    },
    "fried_soup_9098": {
        "name": "ซุปทอด สูตร 9098",
        "cal": 779
    },
    "grilled_shrimp_9099": {
        "name": "กุ้งย่าง สูตร 9099",
        "cal": 599
    },
    "stir_fried_beef_9100": {
        "name": "เนื้อผัด สูตร 9100",
        "cal": 699
    },
    "boiled_soup_9101": {
        "name": "ซุปต้ม สูตร 9101",
        "cal": 837
    },
    "fried_fish_9102": {
        "name": "ปลาทอด สูตร 9102",
        "cal": 380
    },
    "steamed_noodle_9103": {
        "name": "บะหมี่นึ่ง สูตร 9103",
        "cal": 619
    },
    "boiled_fish_9104": {
        "name": "ปลาต้ม สูตร 9104",
        "cal": 153
    },
    "stir_fried_beef_9105": {
        "name": "เนื้อผัด สูตร 9105",
        "cal": 628
    },
    "stir_fried_shrimp_9106": {
        "name": "กุ้งผัด สูตร 9106",
        "cal": 414
    },
    "grilled_noodle_9107": {
        "name": "บะหมี่ย่าง สูตร 9107",
        "cal": 474
    },
    "spicy_rice_9108": {
        "name": "ข้าวยำ สูตร 9108",
        "cal": 666
    },
    "steamed_pork_9109": {
        "name": "หมูนึ่ง สูตร 9109",
        "cal": 786
    },
    "spicy_pork_9110": {
        "name": "หมูยำ สูตร 9110",
        "cal": 709
    },
    "spicy_soup_9111": {
        "name": "ซุปยำ สูตร 9111",
        "cal": 108
    },
    "steamed_squid_9112": {
        "name": "ปลาหมึกนึ่ง สูตร 9112",
        "cal": 134
    },
    "fried_shrimp_9113": {
        "name": "กุ้งทอด สูตร 9113",
        "cal": 529
    },
    "stir_fried_squid_9114": {
        "name": "ปลาหมึกผัด สูตร 9114",
        "cal": 462
    },
    "spicy_chicken_9115": {
        "name": "ไก่ยำ สูตร 9115",
        "cal": 513
    },
    "grilled_shrimp_9116": {
        "name": "กุ้งย่าง สูตร 9116",
        "cal": 269
    },
    "spicy_fish_9117": {
        "name": "ปลายำ สูตร 9117",
        "cal": 625
    },
    "fried_noodle_9118": {
        "name": "บะหมี่ทอด สูตร 9118",
        "cal": 761
    },
    "stir_fried_fish_9119": {
        "name": "ปลาผัด สูตร 9119",
        "cal": 452
    },
    "stir_fried_squid_9120": {
        "name": "ปลาหมึกผัด สูตร 9120",
        "cal": 845
    },
    "boiled_shrimp_9121": {
        "name": "กุ้งต้ม สูตร 9121",
        "cal": 527
    },
    "spicy_noodle_9122": {
        "name": "บะหมี่ยำ สูตร 9122",
        "cal": 213
    },
    "spicy_soup_9123": {
        "name": "ซุปยำ สูตร 9123",
        "cal": 654
    },
    "boiled_beef_9124": {
        "name": "เนื้อต้ม สูตร 9124",
        "cal": 75
    },
    "spicy_fish_9125": {
        "name": "ปลายำ สูตร 9125",
        "cal": 346
    },
    "boiled_beef_9126": {
        "name": "เนื้อต้ม สูตร 9126",
        "cal": 638
    },
    "grilled_squid_9127": {
        "name": "ปลาหมึกย่าง สูตร 9127",
        "cal": 470
    },
    "stir_fried_chicken_9128": {
        "name": "ไก่ผัด สูตร 9128",
        "cal": 331
    },
    "boiled_squid_9129": {
        "name": "ปลาหมึกต้ม สูตร 9129",
        "cal": 408
    },
    "grilled_chicken_9130": {
        "name": "ไก่ย่าง สูตร 9130",
        "cal": 587
    },
    "stir_fried_beef_9131": {
        "name": "เนื้อผัด สูตร 9131",
        "cal": 833
    },
    "spicy_shrimp_9132": {
        "name": "กุ้งยำ สูตร 9132",
        "cal": 735
    },
    "boiled_soup_9133": {
        "name": "ซุปต้ม สูตร 9133",
        "cal": 754
    },
    "spicy_pork_9134": {
        "name": "หมูยำ สูตร 9134",
        "cal": 464
    },
    "boiled_noodle_9135": {
        "name": "บะหมี่ต้ม สูตร 9135",
        "cal": 24
    },
    "boiled_rice_9136": {
        "name": "ข้าวต้ม สูตร 9136",
        "cal": 692
    },
    "spicy_noodle_9137": {
        "name": "บะหมี่ยำ สูตร 9137",
        "cal": 39
    },
    "steamed_fish_9138": {
        "name": "ปลานึ่ง สูตร 9138",
        "cal": 283
    },
    "grilled_noodle_9139": {
        "name": "บะหมี่ย่าง สูตร 9139",
        "cal": 288
    },
    "spicy_squid_9140": {
        "name": "ปลาหมึกยำ สูตร 9140",
        "cal": 176
    },
    "steamed_shrimp_9141": {
        "name": "กุ้งนึ่ง สูตร 9141",
        "cal": 784
    },
    "spicy_chicken_9142": {
        "name": "ไก่ยำ สูตร 9142",
        "cal": 485
    },
    "stir_fried_squid_9143": {
        "name": "ปลาหมึกผัด สูตร 9143",
        "cal": 522
    },
    "steamed_soup_9144": {
        "name": "ซุปนึ่ง สูตร 9144",
        "cal": 589
    },
    "stir_fried_pork_9145": {
        "name": "หมูผัด สูตร 9145",
        "cal": 512
    },
    "fried_noodle_9146": {
        "name": "บะหมี่ทอด สูตร 9146",
        "cal": 569
    },
    "grilled_pork_9147": {
        "name": "หมูย่าง สูตร 9147",
        "cal": 558
    },
    "fried_pork_9148": {
        "name": "หมูทอด สูตร 9148",
        "cal": 160
    },
    "grilled_chicken_9149": {
        "name": "ไก่ย่าง สูตร 9149",
        "cal": 74
    },
    "grilled_fish_9150": {
        "name": "ปลาย่าง สูตร 9150",
        "cal": 643
    },
    "fried_chicken_9151": {
        "name": "ไก่ทอด สูตร 9151",
        "cal": 346
    },
    "stir_fried_soup_9152": {
        "name": "ซุปผัด สูตร 9152",
        "cal": 378
    },
    "stir_fried_noodle_9153": {
        "name": "บะหมี่ผัด สูตร 9153",
        "cal": 623
    },
    "fried_shrimp_9154": {
        "name": "กุ้งทอด สูตร 9154",
        "cal": 198
    },
    "stir_fried_beef_9155": {
        "name": "เนื้อผัด สูตร 9155",
        "cal": 67
    },
    "fried_fish_9156": {
        "name": "ปลาทอด สูตร 9156",
        "cal": 194
    },
    "grilled_beef_9157": {
        "name": "เนื้อย่าง สูตร 9157",
        "cal": 524
    },
    "steamed_squid_9158": {
        "name": "ปลาหมึกนึ่ง สูตร 9158",
        "cal": 68
    },
    "steamed_beef_9159": {
        "name": "เนื้อนึ่ง สูตร 9159",
        "cal": 242
    },
    "fried_rice_9160": {
        "name": "ข้าวทอด สูตร 9160",
        "cal": 531
    },
    "grilled_fish_9161": {
        "name": "ปลาย่าง สูตร 9161",
        "cal": 841
    },
    "stir_fried_noodle_9162": {
        "name": "บะหมี่ผัด สูตร 9162",
        "cal": 363
    },
    "fried_pork_9163": {
        "name": "หมูทอด สูตร 9163",
        "cal": 638
    },
    "spicy_pork_9164": {
        "name": "หมูยำ สูตร 9164",
        "cal": 399
    },
    "fried_noodle_9165": {
        "name": "บะหมี่ทอด สูตร 9165",
        "cal": 464
    },
    "grilled_soup_9166": {
        "name": "ซุปย่าง สูตร 9166",
        "cal": 172
    },
    "spicy_rice_9167": {
        "name": "ข้าวยำ สูตร 9167",
        "cal": 490
    },
    "grilled_soup_9168": {
        "name": "ซุปย่าง สูตร 9168",
        "cal": 59
    },
    "spicy_squid_9169": {
        "name": "ปลาหมึกยำ สูตร 9169",
        "cal": 239
    },
    "grilled_shrimp_9170": {
        "name": "กุ้งย่าง สูตร 9170",
        "cal": 73
    },
    "stir_fried_chicken_9171": {
        "name": "ไก่ผัด สูตร 9171",
        "cal": 579
    },
    "fried_squid_9172": {
        "name": "ปลาหมึกทอด สูตร 9172",
        "cal": 303
    },
    "steamed_soup_9173": {
        "name": "ซุปนึ่ง สูตร 9173",
        "cal": 536
    },
    "stir_fried_shrimp_9174": {
        "name": "กุ้งผัด สูตร 9174",
        "cal": 413
    },
    "spicy_squid_9175": {
        "name": "ปลาหมึกยำ สูตร 9175",
        "cal": 289
    },
    "fried_noodle_9176": {
        "name": "บะหมี่ทอด สูตร 9176",
        "cal": 787
    },
    "steamed_chicken_9177": {
        "name": "ไก่นึ่ง สูตร 9177",
        "cal": 163
    },
    "fried_rice_9178": {
        "name": "ข้าวทอด สูตร 9178",
        "cal": 195
    },
    "boiled_soup_9179": {
        "name": "ซุปต้ม สูตร 9179",
        "cal": 217
    },
    "stir_fried_fish_9180": {
        "name": "ปลาผัด สูตร 9180",
        "cal": 400
    },
    "grilled_shrimp_9181": {
        "name": "กุ้งย่าง สูตร 9181",
        "cal": 181
    },
    "stir_fried_chicken_9182": {
        "name": "ไก่ผัด สูตร 9182",
        "cal": 663
    },
    "stir_fried_beef_9183": {
        "name": "เนื้อผัด สูตร 9183",
        "cal": 413
    },
    "stir_fried_chicken_9184": {
        "name": "ไก่ผัด สูตร 9184",
        "cal": 252
    },
    "grilled_fish_9185": {
        "name": "ปลาย่าง สูตร 9185",
        "cal": 582
    },
    "spicy_noodle_9186": {
        "name": "บะหมี่ยำ สูตร 9186",
        "cal": 812
    },
    "boiled_noodle_9187": {
        "name": "บะหมี่ต้ม สูตร 9187",
        "cal": 384
    },
    "grilled_pork_9188": {
        "name": "หมูย่าง สูตร 9188",
        "cal": 720
    },
    "grilled_rice_9189": {
        "name": "ข้าวย่าง สูตร 9189",
        "cal": 37
    },
    "grilled_rice_9190": {
        "name": "ข้าวย่าง สูตร 9190",
        "cal": 638
    },
    "stir_fried_beef_9191": {
        "name": "เนื้อผัด สูตร 9191",
        "cal": 744
    },
    "grilled_noodle_9192": {
        "name": "บะหมี่ย่าง สูตร 9192",
        "cal": 776
    },
    "steamed_squid_9193": {
        "name": "ปลาหมึกนึ่ง สูตร 9193",
        "cal": 404
    },
    "fried_fish_9194": {
        "name": "ปลาทอด สูตร 9194",
        "cal": 133
    },
    "steamed_squid_9195": {
        "name": "ปลาหมึกนึ่ง สูตร 9195",
        "cal": 174
    },
    "steamed_fish_9196": {
        "name": "ปลานึ่ง สูตร 9196",
        "cal": 295
    },
    "fried_squid_9197": {
        "name": "ปลาหมึกทอด สูตร 9197",
        "cal": 442
    },
    "fried_noodle_9198": {
        "name": "บะหมี่ทอด สูตร 9198",
        "cal": 843
    },
    "stir_fried_rice_9199": {
        "name": "ข้าวผัด สูตร 9199",
        "cal": 321
    },
    "grilled_shrimp_9200": {
        "name": "กุ้งย่าง สูตร 9200",
        "cal": 322
    },
    "spicy_noodle_9201": {
        "name": "บะหมี่ยำ สูตร 9201",
        "cal": 575
    },
    "fried_squid_9202": {
        "name": "ปลาหมึกทอด สูตร 9202",
        "cal": 645
    },
    "stir_fried_shrimp_9203": {
        "name": "กุ้งผัด สูตร 9203",
        "cal": 564
    },
    "steamed_pork_9204": {
        "name": "หมูนึ่ง สูตร 9204",
        "cal": 155
    },
    "steamed_soup_9205": {
        "name": "ซุปนึ่ง สูตร 9205",
        "cal": 520
    },
    "steamed_pork_9206": {
        "name": "หมูนึ่ง สูตร 9206",
        "cal": 261
    },
    "stir_fried_pork_9207": {
        "name": "หมูผัด สูตร 9207",
        "cal": 676
    },
    "steamed_noodle_9208": {
        "name": "บะหมี่นึ่ง สูตร 9208",
        "cal": 490
    },
    "steamed_squid_9209": {
        "name": "ปลาหมึกนึ่ง สูตร 9209",
        "cal": 238
    },
    "stir_fried_beef_9210": {
        "name": "เนื้อผัด สูตร 9210",
        "cal": 29
    },
    "fried_pork_9211": {
        "name": "หมูทอด สูตร 9211",
        "cal": 608
    },
    "grilled_soup_9212": {
        "name": "ซุปย่าง สูตร 9212",
        "cal": 834
    },
    "stir_fried_beef_9213": {
        "name": "เนื้อผัด สูตร 9213",
        "cal": 456
    },
    "spicy_soup_9214": {
        "name": "ซุปยำ สูตร 9214",
        "cal": 86
    },
    "steamed_soup_9215": {
        "name": "ซุปนึ่ง สูตร 9215",
        "cal": 24
    },
    "steamed_chicken_9216": {
        "name": "ไก่นึ่ง สูตร 9216",
        "cal": 137
    },
    "boiled_shrimp_9217": {
        "name": "กุ้งต้ม สูตร 9217",
        "cal": 690
    },
    "fried_chicken_9218": {
        "name": "ไก่ทอด สูตร 9218",
        "cal": 352
    },
    "spicy_soup_9219": {
        "name": "ซุปยำ สูตร 9219",
        "cal": 610
    },
    "stir_fried_noodle_9220": {
        "name": "บะหมี่ผัด สูตร 9220",
        "cal": 94
    },
    "spicy_fish_9221": {
        "name": "ปลายำ สูตร 9221",
        "cal": 180
    },
    "steamed_noodle_9222": {
        "name": "บะหมี่นึ่ง สูตร 9222",
        "cal": 424
    },
    "fried_rice_9223": {
        "name": "ข้าวทอด สูตร 9223",
        "cal": 537
    },
    "boiled_noodle_9224": {
        "name": "บะหมี่ต้ม สูตร 9224",
        "cal": 74
    },
    "steamed_beef_9225": {
        "name": "เนื้อนึ่ง สูตร 9225",
        "cal": 298
    },
    "fried_soup_9226": {
        "name": "ซุปทอด สูตร 9226",
        "cal": 595
    },
    "spicy_noodle_9227": {
        "name": "บะหมี่ยำ สูตร 9227",
        "cal": 401
    },
    "spicy_squid_9228": {
        "name": "ปลาหมึกยำ สูตร 9228",
        "cal": 234
    },
    "fried_chicken_9229": {
        "name": "ไก่ทอด สูตร 9229",
        "cal": 850
    },
    "fried_squid_9230": {
        "name": "ปลาหมึกทอด สูตร 9230",
        "cal": 74
    },
    "steamed_shrimp_9231": {
        "name": "กุ้งนึ่ง สูตร 9231",
        "cal": 472
    },
    "stir_fried_chicken_9232": {
        "name": "ไก่ผัด สูตร 9232",
        "cal": 542
    },
    "grilled_fish_9233": {
        "name": "ปลาย่าง สูตร 9233",
        "cal": 268
    },
    "spicy_rice_9234": {
        "name": "ข้าวยำ สูตร 9234",
        "cal": 513
    },
    "steamed_shrimp_9235": {
        "name": "กุ้งนึ่ง สูตร 9235",
        "cal": 553
    },
    "boiled_squid_9236": {
        "name": "ปลาหมึกต้ม สูตร 9236",
        "cal": 173
    },
    "grilled_rice_9237": {
        "name": "ข้าวย่าง สูตร 9237",
        "cal": 213
    },
    "fried_squid_9238": {
        "name": "ปลาหมึกทอด สูตร 9238",
        "cal": 95
    },
    "boiled_noodle_9239": {
        "name": "บะหมี่ต้ม สูตร 9239",
        "cal": 66
    },
    "stir_fried_squid_9240": {
        "name": "ปลาหมึกผัด สูตร 9240",
        "cal": 448
    },
    "stir_fried_squid_9241": {
        "name": "ปลาหมึกผัด สูตร 9241",
        "cal": 27
    },
    "steamed_shrimp_9242": {
        "name": "กุ้งนึ่ง สูตร 9242",
        "cal": 470
    },
    "boiled_soup_9243": {
        "name": "ซุปต้ม สูตร 9243",
        "cal": 519
    },
    "stir_fried_rice_9244": {
        "name": "ข้าวผัด สูตร 9244",
        "cal": 763
    },
    "boiled_pork_9245": {
        "name": "หมูต้ม สูตร 9245",
        "cal": 723
    },
    "spicy_noodle_9246": {
        "name": "บะหมี่ยำ สูตร 9246",
        "cal": 578
    },
    "grilled_beef_9247": {
        "name": "เนื้อย่าง สูตร 9247",
        "cal": 122
    },
    "spicy_chicken_9248": {
        "name": "ไก่ยำ สูตร 9248",
        "cal": 754
    },
    "fried_rice_9249": {
        "name": "ข้าวทอด สูตร 9249",
        "cal": 845
    },
    "fried_squid_9250": {
        "name": "ปลาหมึกทอด สูตร 9250",
        "cal": 21
    },
    "spicy_fish_9251": {
        "name": "ปลายำ สูตร 9251",
        "cal": 169
    },
    "steamed_rice_9252": {
        "name": "ข้าวนึ่ง สูตร 9252",
        "cal": 230
    },
    "steamed_shrimp_9253": {
        "name": "กุ้งนึ่ง สูตร 9253",
        "cal": 361
    },
    "grilled_pork_9254": {
        "name": "หมูย่าง สูตร 9254",
        "cal": 632
    },
    "spicy_pork_9255": {
        "name": "หมูยำ สูตร 9255",
        "cal": 424
    },
    "grilled_squid_9256": {
        "name": "ปลาหมึกย่าง สูตร 9256",
        "cal": 149
    },
    "steamed_pork_9257": {
        "name": "หมูนึ่ง สูตร 9257",
        "cal": 552
    },
    "stir_fried_squid_9258": {
        "name": "ปลาหมึกผัด สูตร 9258",
        "cal": 508
    },
    "fried_pork_9259": {
        "name": "หมูทอด สูตร 9259",
        "cal": 539
    },
    "grilled_beef_9260": {
        "name": "เนื้อย่าง สูตร 9260",
        "cal": 54
    },
    "grilled_noodle_9261": {
        "name": "บะหมี่ย่าง สูตร 9261",
        "cal": 318
    },
    "spicy_shrimp_9262": {
        "name": "กุ้งยำ สูตร 9262",
        "cal": 294
    },
    "spicy_pork_9263": {
        "name": "หมูยำ สูตร 9263",
        "cal": 545
    },
    "fried_shrimp_9264": {
        "name": "กุ้งทอด สูตร 9264",
        "cal": 364
    },
    "grilled_chicken_9265": {
        "name": "ไก่ย่าง สูตร 9265",
        "cal": 221
    },
    "fried_fish_9266": {
        "name": "ปลาทอด สูตร 9266",
        "cal": 605
    },
    "grilled_beef_9267": {
        "name": "เนื้อย่าง สูตร 9267",
        "cal": 741
    },
    "spicy_chicken_9268": {
        "name": "ไก่ยำ สูตร 9268",
        "cal": 582
    },
    "fried_soup_9269": {
        "name": "ซุปทอด สูตร 9269",
        "cal": 653
    },
    "steamed_shrimp_9270": {
        "name": "กุ้งนึ่ง สูตร 9270",
        "cal": 124
    },
    "grilled_noodle_9271": {
        "name": "บะหมี่ย่าง สูตร 9271",
        "cal": 482
    },
    "boiled_noodle_9272": {
        "name": "บะหมี่ต้ม สูตร 9272",
        "cal": 84
    },
    "stir_fried_fish_9273": {
        "name": "ปลาผัด สูตร 9273",
        "cal": 407
    },
    "spicy_rice_9274": {
        "name": "ข้าวยำ สูตร 9274",
        "cal": 369
    },
    "boiled_shrimp_9275": {
        "name": "กุ้งต้ม สูตร 9275",
        "cal": 215
    },
    "stir_fried_chicken_9276": {
        "name": "ไก่ผัด สูตร 9276",
        "cal": 483
    },
    "grilled_fish_9277": {
        "name": "ปลาย่าง สูตร 9277",
        "cal": 110
    },
    "fried_squid_9278": {
        "name": "ปลาหมึกทอด สูตร 9278",
        "cal": 186
    },
    "boiled_beef_9279": {
        "name": "เนื้อต้ม สูตร 9279",
        "cal": 618
    },
    "grilled_rice_9280": {
        "name": "ข้าวย่าง สูตร 9280",
        "cal": 462
    },
    "stir_fried_soup_9281": {
        "name": "ซุปผัด สูตร 9281",
        "cal": 428
    },
    "spicy_chicken_9282": {
        "name": "ไก่ยำ สูตร 9282",
        "cal": 323
    },
    "steamed_fish_9283": {
        "name": "ปลานึ่ง สูตร 9283",
        "cal": 562
    },
    "grilled_shrimp_9284": {
        "name": "กุ้งย่าง สูตร 9284",
        "cal": 559
    },
    "fried_soup_9285": {
        "name": "ซุปทอด สูตร 9285",
        "cal": 479
    },
    "spicy_soup_9286": {
        "name": "ซุปยำ สูตร 9286",
        "cal": 487
    },
    "fried_rice_9287": {
        "name": "ข้าวทอด สูตร 9287",
        "cal": 142
    },
    "stir_fried_pork_9288": {
        "name": "หมูผัด สูตร 9288",
        "cal": 134
    },
    "boiled_shrimp_9289": {
        "name": "กุ้งต้ม สูตร 9289",
        "cal": 744
    },
    "fried_beef_9290": {
        "name": "เนื้อทอด สูตร 9290",
        "cal": 161
    },
    "steamed_shrimp_9291": {
        "name": "กุ้งนึ่ง สูตร 9291",
        "cal": 155
    },
    "spicy_rice_9292": {
        "name": "ข้าวยำ สูตร 9292",
        "cal": 83
    },
    "steamed_beef_9293": {
        "name": "เนื้อนึ่ง สูตร 9293",
        "cal": 457
    },
    "stir_fried_shrimp_9294": {
        "name": "กุ้งผัด สูตร 9294",
        "cal": 70
    },
    "stir_fried_pork_9295": {
        "name": "หมูผัด สูตร 9295",
        "cal": 676
    },
    "boiled_noodle_9296": {
        "name": "บะหมี่ต้ม สูตร 9296",
        "cal": 285
    },
    "grilled_rice_9297": {
        "name": "ข้าวย่าง สูตร 9297",
        "cal": 591
    },
    "grilled_shrimp_9298": {
        "name": "กุ้งย่าง สูตร 9298",
        "cal": 629
    },
    "steamed_rice_9299": {
        "name": "ข้าวนึ่ง สูตร 9299",
        "cal": 326
    },
    "steamed_chicken_9300": {
        "name": "ไก่นึ่ง สูตร 9300",
        "cal": 583
    },
    "fried_noodle_9301": {
        "name": "บะหมี่ทอด สูตร 9301",
        "cal": 505
    },
    "grilled_soup_9302": {
        "name": "ซุปย่าง สูตร 9302",
        "cal": 65
    },
    "stir_fried_soup_9303": {
        "name": "ซุปผัด สูตร 9303",
        "cal": 105
    },
    "spicy_squid_9304": {
        "name": "ปลาหมึกยำ สูตร 9304",
        "cal": 563
    },
    "spicy_noodle_9305": {
        "name": "บะหมี่ยำ สูตร 9305",
        "cal": 332
    },
    "fried_beef_9306": {
        "name": "เนื้อทอด สูตร 9306",
        "cal": 381
    },
    "spicy_shrimp_9307": {
        "name": "กุ้งยำ สูตร 9307",
        "cal": 475
    },
    "grilled_soup_9308": {
        "name": "ซุปย่าง สูตร 9308",
        "cal": 117
    },
    "fried_fish_9309": {
        "name": "ปลาทอด สูตร 9309",
        "cal": 184
    },
    "fried_fish_9310": {
        "name": "ปลาทอด สูตร 9310",
        "cal": 268
    },
    "grilled_beef_9311": {
        "name": "เนื้อย่าง สูตร 9311",
        "cal": 441
    },
    "boiled_shrimp_9312": {
        "name": "กุ้งต้ม สูตร 9312",
        "cal": 138
    },
    "stir_fried_noodle_9313": {
        "name": "บะหมี่ผัด สูตร 9313",
        "cal": 726
    },
    "stir_fried_soup_9314": {
        "name": "ซุปผัด สูตร 9314",
        "cal": 207
    },
    "boiled_soup_9315": {
        "name": "ซุปต้ม สูตร 9315",
        "cal": 442
    },
    "steamed_soup_9316": {
        "name": "ซุปนึ่ง สูตร 9316",
        "cal": 601
    },
    "spicy_beef_9317": {
        "name": "เนื้อยำ สูตร 9317",
        "cal": 103
    },
    "steamed_shrimp_9318": {
        "name": "กุ้งนึ่ง สูตร 9318",
        "cal": 72
    },
    "grilled_squid_9319": {
        "name": "ปลาหมึกย่าง สูตร 9319",
        "cal": 755
    },
    "grilled_squid_9320": {
        "name": "ปลาหมึกย่าง สูตร 9320",
        "cal": 719
    },
    "grilled_fish_9321": {
        "name": "ปลาย่าง สูตร 9321",
        "cal": 153
    },
    "fried_beef_9322": {
        "name": "เนื้อทอด สูตร 9322",
        "cal": 817
    },
    "boiled_squid_9323": {
        "name": "ปลาหมึกต้ม สูตร 9323",
        "cal": 84
    },
    "spicy_rice_9324": {
        "name": "ข้าวยำ สูตร 9324",
        "cal": 670
    },
    "steamed_beef_9325": {
        "name": "เนื้อนึ่ง สูตร 9325",
        "cal": 638
    },
    "stir_fried_noodle_9326": {
        "name": "บะหมี่ผัด สูตร 9326",
        "cal": 84
    },
    "grilled_chicken_9327": {
        "name": "ไก่ย่าง สูตร 9327",
        "cal": 639
    },
    "stir_fried_chicken_9328": {
        "name": "ไก่ผัด สูตร 9328",
        "cal": 327
    },
    "grilled_noodle_9329": {
        "name": "บะหมี่ย่าง สูตร 9329",
        "cal": 563
    },
    "fried_pork_9330": {
        "name": "หมูทอด สูตร 9330",
        "cal": 294
    },
    "spicy_rice_9331": {
        "name": "ข้าวยำ สูตร 9331",
        "cal": 266
    },
    "grilled_fish_9332": {
        "name": "ปลาย่าง สูตร 9332",
        "cal": 834
    },
    "fried_fish_9333": {
        "name": "ปลาทอด สูตร 9333",
        "cal": 719
    },
    "stir_fried_beef_9334": {
        "name": "เนื้อผัด สูตร 9334",
        "cal": 469
    },
    "fried_chicken_9335": {
        "name": "ไก่ทอด สูตร 9335",
        "cal": 303
    },
    "stir_fried_shrimp_9336": {
        "name": "กุ้งผัด สูตร 9336",
        "cal": 440
    },
    "spicy_pork_9337": {
        "name": "หมูยำ สูตร 9337",
        "cal": 617
    },
    "grilled_shrimp_9338": {
        "name": "กุ้งย่าง สูตร 9338",
        "cal": 64
    },
    "grilled_shrimp_9339": {
        "name": "กุ้งย่าง สูตร 9339",
        "cal": 719
    },
    "grilled_beef_9340": {
        "name": "เนื้อย่าง สูตร 9340",
        "cal": 184
    },
    "grilled_rice_9341": {
        "name": "ข้าวย่าง สูตร 9341",
        "cal": 643
    },
    "stir_fried_shrimp_9342": {
        "name": "กุ้งผัด สูตร 9342",
        "cal": 546
    },
    "stir_fried_fish_9343": {
        "name": "ปลาผัด สูตร 9343",
        "cal": 706
    },
    "stir_fried_fish_9344": {
        "name": "ปลาผัด สูตร 9344",
        "cal": 562
    },
    "fried_noodle_9345": {
        "name": "บะหมี่ทอด สูตร 9345",
        "cal": 702
    },
    "fried_rice_9346": {
        "name": "ข้าวทอด สูตร 9346",
        "cal": 407
    },
    "spicy_pork_9347": {
        "name": "หมูยำ สูตร 9347",
        "cal": 371
    },
    "fried_noodle_9348": {
        "name": "บะหมี่ทอด สูตร 9348",
        "cal": 63
    },
    "steamed_chicken_9349": {
        "name": "ไก่นึ่ง สูตร 9349",
        "cal": 516
    },
    "stir_fried_chicken_9350": {
        "name": "ไก่ผัด สูตร 9350",
        "cal": 681
    },
    "stir_fried_squid_9351": {
        "name": "ปลาหมึกผัด สูตร 9351",
        "cal": 366
    },
    "grilled_squid_9352": {
        "name": "ปลาหมึกย่าง สูตร 9352",
        "cal": 70
    },
    "stir_fried_soup_9353": {
        "name": "ซุปผัด สูตร 9353",
        "cal": 778
    },
    "boiled_chicken_9354": {
        "name": "ไก่ต้ม สูตร 9354",
        "cal": 634
    },
    "grilled_soup_9355": {
        "name": "ซุปย่าง สูตร 9355",
        "cal": 116
    },
    "fried_pork_9356": {
        "name": "หมูทอด สูตร 9356",
        "cal": 565
    },
    "spicy_fish_9357": {
        "name": "ปลายำ สูตร 9357",
        "cal": 250
    },
    "steamed_beef_9358": {
        "name": "เนื้อนึ่ง สูตร 9358",
        "cal": 566
    },
    "spicy_chicken_9359": {
        "name": "ไก่ยำ สูตร 9359",
        "cal": 176
    },
    "steamed_rice_9360": {
        "name": "ข้าวนึ่ง สูตร 9360",
        "cal": 669
    },
    "boiled_beef_9361": {
        "name": "เนื้อต้ม สูตร 9361",
        "cal": 470
    },
    "spicy_chicken_9362": {
        "name": "ไก่ยำ สูตร 9362",
        "cal": 117
    },
    "steamed_soup_9363": {
        "name": "ซุปนึ่ง สูตร 9363",
        "cal": 626
    },
    "steamed_beef_9364": {
        "name": "เนื้อนึ่ง สูตร 9364",
        "cal": 247
    },
    "stir_fried_squid_9365": {
        "name": "ปลาหมึกผัด สูตร 9365",
        "cal": 791
    },
    "grilled_shrimp_9366": {
        "name": "กุ้งย่าง สูตร 9366",
        "cal": 706
    },
    "fried_pork_9367": {
        "name": "หมูทอด สูตร 9367",
        "cal": 839
    },
    "fried_noodle_9368": {
        "name": "บะหมี่ทอด สูตร 9368",
        "cal": 312
    },
    "steamed_noodle_9369": {
        "name": "บะหมี่นึ่ง สูตร 9369",
        "cal": 485
    },
    "boiled_shrimp_9370": {
        "name": "กุ้งต้ม สูตร 9370",
        "cal": 718
    },
    "boiled_pork_9371": {
        "name": "หมูต้ม สูตร 9371",
        "cal": 782
    },
    "spicy_chicken_9372": {
        "name": "ไก่ยำ สูตร 9372",
        "cal": 545
    },
    "stir_fried_pork_9373": {
        "name": "หมูผัด สูตร 9373",
        "cal": 526
    },
    "fried_rice_9374": {
        "name": "ข้าวทอด สูตร 9374",
        "cal": 355
    },
    "steamed_fish_9375": {
        "name": "ปลานึ่ง สูตร 9375",
        "cal": 458
    },
    "stir_fried_noodle_9376": {
        "name": "บะหมี่ผัด สูตร 9376",
        "cal": 274
    },
    "spicy_shrimp_9377": {
        "name": "กุ้งยำ สูตร 9377",
        "cal": 286
    },
    "spicy_shrimp_9378": {
        "name": "กุ้งยำ สูตร 9378",
        "cal": 188
    },
    "grilled_fish_9379": {
        "name": "ปลาย่าง สูตร 9379",
        "cal": 278
    },
    "stir_fried_fish_9380": {
        "name": "ปลาผัด สูตร 9380",
        "cal": 799
    },
    "spicy_fish_9381": {
        "name": "ปลายำ สูตร 9381",
        "cal": 76
    },
    "stir_fried_pork_9382": {
        "name": "หมูผัด สูตร 9382",
        "cal": 677
    },
    "stir_fried_fish_9383": {
        "name": "ปลาผัด สูตร 9383",
        "cal": 375
    },
    "boiled_rice_9384": {
        "name": "ข้าวต้ม สูตร 9384",
        "cal": 134
    },
    "spicy_beef_9385": {
        "name": "เนื้อยำ สูตร 9385",
        "cal": 490
    },
    "boiled_soup_9386": {
        "name": "ซุปต้ม สูตร 9386",
        "cal": 20
    },
    "stir_fried_soup_9387": {
        "name": "ซุปผัด สูตร 9387",
        "cal": 784
    },
    "steamed_soup_9388": {
        "name": "ซุปนึ่ง สูตร 9388",
        "cal": 842
    },
    "stir_fried_shrimp_9389": {
        "name": "กุ้งผัด สูตร 9389",
        "cal": 848
    },
    "grilled_squid_9390": {
        "name": "ปลาหมึกย่าง สูตร 9390",
        "cal": 192
    },
    "fried_rice_9391": {
        "name": "ข้าวทอด สูตร 9391",
        "cal": 625
    },
    "stir_fried_pork_9392": {
        "name": "หมูผัด สูตร 9392",
        "cal": 500
    },
    "boiled_shrimp_9393": {
        "name": "กุ้งต้ม สูตร 9393",
        "cal": 824
    },
    "fried_beef_9394": {
        "name": "เนื้อทอด สูตร 9394",
        "cal": 411
    },
    "stir_fried_fish_9395": {
        "name": "ปลาผัด สูตร 9395",
        "cal": 848
    },
    "stir_fried_pork_9396": {
        "name": "หมูผัด สูตร 9396",
        "cal": 212
    },
    "spicy_pork_9397": {
        "name": "หมูยำ สูตร 9397",
        "cal": 825
    },
    "spicy_fish_9398": {
        "name": "ปลายำ สูตร 9398",
        "cal": 625
    },
    "fried_squid_9399": {
        "name": "ปลาหมึกทอด สูตร 9399",
        "cal": 287
    },
    "spicy_fish_9400": {
        "name": "ปลายำ สูตร 9400",
        "cal": 283
    },
    "fried_soup_9401": {
        "name": "ซุปทอด สูตร 9401",
        "cal": 548
    },
    "boiled_noodle_9402": {
        "name": "บะหมี่ต้ม สูตร 9402",
        "cal": 317
    },
    "boiled_fish_9403": {
        "name": "ปลาต้ม สูตร 9403",
        "cal": 318
    },
    "stir_fried_fish_9404": {
        "name": "ปลาผัด สูตร 9404",
        "cal": 263
    },
    "boiled_fish_9405": {
        "name": "ปลาต้ม สูตร 9405",
        "cal": 844
    },
    "steamed_chicken_9406": {
        "name": "ไก่นึ่ง สูตร 9406",
        "cal": 826
    },
    "steamed_pork_9407": {
        "name": "หมูนึ่ง สูตร 9407",
        "cal": 524
    },
    "steamed_squid_9408": {
        "name": "ปลาหมึกนึ่ง สูตร 9408",
        "cal": 824
    },
    "spicy_chicken_9409": {
        "name": "ไก่ยำ สูตร 9409",
        "cal": 38
    },
    "stir_fried_fish_9410": {
        "name": "ปลาผัด สูตร 9410",
        "cal": 166
    },
    "stir_fried_squid_9411": {
        "name": "ปลาหมึกผัด สูตร 9411",
        "cal": 512
    },
    "stir_fried_soup_9412": {
        "name": "ซุปผัด สูตร 9412",
        "cal": 413
    },
    "spicy_beef_9413": {
        "name": "เนื้อยำ สูตร 9413",
        "cal": 517
    },
    "stir_fried_rice_9414": {
        "name": "ข้าวผัด สูตร 9414",
        "cal": 119
    },
    "steamed_shrimp_9415": {
        "name": "กุ้งนึ่ง สูตร 9415",
        "cal": 558
    },
    "fried_squid_9416": {
        "name": "ปลาหมึกทอด สูตร 9416",
        "cal": 754
    },
    "fried_fish_9417": {
        "name": "ปลาทอด สูตร 9417",
        "cal": 589
    },
    "spicy_shrimp_9418": {
        "name": "กุ้งยำ สูตร 9418",
        "cal": 146
    },
    "grilled_fish_9419": {
        "name": "ปลาย่าง สูตร 9419",
        "cal": 540
    },
    "stir_fried_noodle_9420": {
        "name": "บะหมี่ผัด สูตร 9420",
        "cal": 71
    },
    "steamed_soup_9421": {
        "name": "ซุปนึ่ง สูตร 9421",
        "cal": 23
    },
    "grilled_fish_9422": {
        "name": "ปลาย่าง สูตร 9422",
        "cal": 203
    },
    "spicy_rice_9423": {
        "name": "ข้าวยำ สูตร 9423",
        "cal": 321
    },
    "boiled_squid_9424": {
        "name": "ปลาหมึกต้ม สูตร 9424",
        "cal": 705
    },
    "boiled_chicken_9425": {
        "name": "ไก่ต้ม สูตร 9425",
        "cal": 621
    },
    "boiled_noodle_9426": {
        "name": "บะหมี่ต้ม สูตร 9426",
        "cal": 84
    },
    "spicy_pork_9427": {
        "name": "หมูยำ สูตร 9427",
        "cal": 92
    },
    "grilled_beef_9428": {
        "name": "เนื้อย่าง สูตร 9428",
        "cal": 62
    },
    "stir_fried_pork_9429": {
        "name": "หมูผัด สูตร 9429",
        "cal": 433
    },
    "stir_fried_chicken_9430": {
        "name": "ไก่ผัด สูตร 9430",
        "cal": 639
    },
    "steamed_noodle_9431": {
        "name": "บะหมี่นึ่ง สูตร 9431",
        "cal": 92
    },
    "stir_fried_squid_9432": {
        "name": "ปลาหมึกผัด สูตร 9432",
        "cal": 391
    },
    "stir_fried_fish_9433": {
        "name": "ปลาผัด สูตร 9433",
        "cal": 312
    },
    "boiled_rice_9434": {
        "name": "ข้าวต้ม สูตร 9434",
        "cal": 227
    },
    "stir_fried_shrimp_9435": {
        "name": "กุ้งผัด สูตร 9435",
        "cal": 31
    },
    "stir_fried_beef_9436": {
        "name": "เนื้อผัด สูตร 9436",
        "cal": 121
    },
    "grilled_shrimp_9437": {
        "name": "กุ้งย่าง สูตร 9437",
        "cal": 848
    },
    "stir_fried_rice_9438": {
        "name": "ข้าวผัด สูตร 9438",
        "cal": 822
    },
    "grilled_shrimp_9439": {
        "name": "กุ้งย่าง สูตร 9439",
        "cal": 263
    },
    "fried_beef_9440": {
        "name": "เนื้อทอด สูตร 9440",
        "cal": 428
    },
    "grilled_rice_9441": {
        "name": "ข้าวย่าง สูตร 9441",
        "cal": 36
    },
    "boiled_rice_9442": {
        "name": "ข้าวต้ม สูตร 9442",
        "cal": 455
    },
    "fried_chicken_9443": {
        "name": "ไก่ทอด สูตร 9443",
        "cal": 34
    },
    "spicy_noodle_9444": {
        "name": "บะหมี่ยำ สูตร 9444",
        "cal": 36
    },
    "grilled_beef_9445": {
        "name": "เนื้อย่าง สูตร 9445",
        "cal": 183
    },
    "grilled_chicken_9446": {
        "name": "ไก่ย่าง สูตร 9446",
        "cal": 672
    },
    "grilled_noodle_9447": {
        "name": "บะหมี่ย่าง สูตร 9447",
        "cal": 381
    },
    "boiled_fish_9448": {
        "name": "ปลาต้ม สูตร 9448",
        "cal": 138
    },
    "fried_chicken_9449": {
        "name": "ไก่ทอด สูตร 9449",
        "cal": 61
    },
    "fried_beef_9450": {
        "name": "เนื้อทอด สูตร 9450",
        "cal": 400
    },
    "grilled_squid_9451": {
        "name": "ปลาหมึกย่าง สูตร 9451",
        "cal": 806
    },
    "boiled_fish_9452": {
        "name": "ปลาต้ม สูตร 9452",
        "cal": 384
    },
    "grilled_pork_9453": {
        "name": "หมูย่าง สูตร 9453",
        "cal": 649
    },
    "spicy_chicken_9454": {
        "name": "ไก่ยำ สูตร 9454",
        "cal": 724
    },
    "spicy_noodle_9455": {
        "name": "บะหมี่ยำ สูตร 9455",
        "cal": 91
    },
    "spicy_chicken_9456": {
        "name": "ไก่ยำ สูตร 9456",
        "cal": 227
    },
    "spicy_pork_9457": {
        "name": "หมูยำ สูตร 9457",
        "cal": 523
    },
    "fried_rice_9458": {
        "name": "ข้าวทอด สูตร 9458",
        "cal": 313
    },
    "grilled_beef_9459": {
        "name": "เนื้อย่าง สูตร 9459",
        "cal": 627
    },
    "fried_chicken_9460": {
        "name": "ไก่ทอด สูตร 9460",
        "cal": 51
    },
    "fried_noodle_9461": {
        "name": "บะหมี่ทอด สูตร 9461",
        "cal": 778
    },
    "boiled_chicken_9462": {
        "name": "ไก่ต้ม สูตร 9462",
        "cal": 775
    },
    "grilled_beef_9463": {
        "name": "เนื้อย่าง สูตร 9463",
        "cal": 204
    },
    "boiled_squid_9464": {
        "name": "ปลาหมึกต้ม สูตร 9464",
        "cal": 459
    },
    "stir_fried_fish_9465": {
        "name": "ปลาผัด สูตร 9465",
        "cal": 417
    },
    "stir_fried_noodle_9466": {
        "name": "บะหมี่ผัด สูตร 9466",
        "cal": 293
    },
    "spicy_chicken_9467": {
        "name": "ไก่ยำ สูตร 9467",
        "cal": 696
    },
    "stir_fried_soup_9468": {
        "name": "ซุปผัด สูตร 9468",
        "cal": 268
    },
    "boiled_soup_9469": {
        "name": "ซุปต้ม สูตร 9469",
        "cal": 794
    },
    "boiled_fish_9470": {
        "name": "ปลาต้ม สูตร 9470",
        "cal": 257
    },
    "boiled_beef_9471": {
        "name": "เนื้อต้ม สูตร 9471",
        "cal": 409
    },
    "spicy_soup_9472": {
        "name": "ซุปยำ สูตร 9472",
        "cal": 402
    },
    "steamed_soup_9473": {
        "name": "ซุปนึ่ง สูตร 9473",
        "cal": 463
    },
    "fried_soup_9474": {
        "name": "ซุปทอด สูตร 9474",
        "cal": 210
    },
    "boiled_beef_9475": {
        "name": "เนื้อต้ม สูตร 9475",
        "cal": 46
    },
    "steamed_fish_9476": {
        "name": "ปลานึ่ง สูตร 9476",
        "cal": 57
    },
    "stir_fried_soup_9477": {
        "name": "ซุปผัด สูตร 9477",
        "cal": 274
    },
    "spicy_shrimp_9478": {
        "name": "กุ้งยำ สูตร 9478",
        "cal": 464
    },
    "fried_beef_9479": {
        "name": "เนื้อทอด สูตร 9479",
        "cal": 381
    },
    "grilled_beef_9480": {
        "name": "เนื้อย่าง สูตร 9480",
        "cal": 820
    },
    "boiled_beef_9481": {
        "name": "เนื้อต้ม สูตร 9481",
        "cal": 692
    },
    "stir_fried_pork_9482": {
        "name": "หมูผัด สูตร 9482",
        "cal": 142
    },
    "boiled_squid_9483": {
        "name": "ปลาหมึกต้ม สูตร 9483",
        "cal": 419
    },
    "spicy_squid_9484": {
        "name": "ปลาหมึกยำ สูตร 9484",
        "cal": 834
    },
    "spicy_rice_9485": {
        "name": "ข้าวยำ สูตร 9485",
        "cal": 246
    },
    "stir_fried_soup_9486": {
        "name": "ซุปผัด สูตร 9486",
        "cal": 87
    },
    "steamed_squid_9487": {
        "name": "ปลาหมึกนึ่ง สูตร 9487",
        "cal": 710
    },
    "spicy_pork_9488": {
        "name": "หมูยำ สูตร 9488",
        "cal": 167
    },
    "fried_pork_9489": {
        "name": "หมูทอด สูตร 9489",
        "cal": 28
    },
    "stir_fried_pork_9490": {
        "name": "หมูผัด สูตร 9490",
        "cal": 694
    },
    "boiled_fish_9491": {
        "name": "ปลาต้ม สูตร 9491",
        "cal": 442
    },
    "boiled_noodle_9492": {
        "name": "บะหมี่ต้ม สูตร 9492",
        "cal": 815
    },
    "stir_fried_shrimp_9493": {
        "name": "กุ้งผัด สูตร 9493",
        "cal": 549
    },
    "grilled_noodle_9494": {
        "name": "บะหมี่ย่าง สูตร 9494",
        "cal": 441
    },
    "stir_fried_noodle_9495": {
        "name": "บะหมี่ผัด สูตร 9495",
        "cal": 722
    },
    "spicy_noodle_9496": {
        "name": "บะหมี่ยำ สูตร 9496",
        "cal": 543
    },
    "steamed_soup_9497": {
        "name": "ซุปนึ่ง สูตร 9497",
        "cal": 89
    },
    "fried_shrimp_9498": {
        "name": "กุ้งทอด สูตร 9498",
        "cal": 817
    },
    "stir_fried_noodle_9499": {
        "name": "บะหมี่ผัด สูตร 9499",
        "cal": 815
    },
    "steamed_shrimp_9500": {
        "name": "กุ้งนึ่ง สูตร 9500",
        "cal": 286
    },
    "stir_fried_chicken_9501": {
        "name": "ไก่ผัด สูตร 9501",
        "cal": 675
    },
    "steamed_soup_9502": {
        "name": "ซุปนึ่ง สูตร 9502",
        "cal": 127
    },
    "stir_fried_noodle_9503": {
        "name": "บะหมี่ผัด สูตร 9503",
        "cal": 325
    },
    "steamed_chicken_9504": {
        "name": "ไก่นึ่ง สูตร 9504",
        "cal": 548
    },
    "fried_pork_9505": {
        "name": "หมูทอด สูตร 9505",
        "cal": 141
    },
    "spicy_shrimp_9506": {
        "name": "กุ้งยำ สูตร 9506",
        "cal": 821
    },
    "steamed_rice_9507": {
        "name": "ข้าวนึ่ง สูตร 9507",
        "cal": 522
    },
    "steamed_shrimp_9508": {
        "name": "กุ้งนึ่ง สูตร 9508",
        "cal": 587
    },
    "spicy_rice_9509": {
        "name": "ข้าวยำ สูตร 9509",
        "cal": 405
    },
    "grilled_squid_9510": {
        "name": "ปลาหมึกย่าง สูตร 9510",
        "cal": 592
    },
    "grilled_pork_9511": {
        "name": "หมูย่าง สูตร 9511",
        "cal": 549
    },
    "spicy_fish_9512": {
        "name": "ปลายำ สูตร 9512",
        "cal": 593
    },
    "spicy_squid_9513": {
        "name": "ปลาหมึกยำ สูตร 9513",
        "cal": 803
    },
    "fried_squid_9514": {
        "name": "ปลาหมึกทอด สูตร 9514",
        "cal": 253
    },
    "fried_pork_9515": {
        "name": "หมูทอด สูตร 9515",
        "cal": 24
    },
    "grilled_squid_9516": {
        "name": "ปลาหมึกย่าง สูตร 9516",
        "cal": 652
    },
    "fried_soup_9517": {
        "name": "ซุปทอด สูตร 9517",
        "cal": 408
    },
    "grilled_soup_9518": {
        "name": "ซุปย่าง สูตร 9518",
        "cal": 179
    },
    "steamed_chicken_9519": {
        "name": "ไก่นึ่ง สูตร 9519",
        "cal": 827
    },
    "stir_fried_fish_9520": {
        "name": "ปลาผัด สูตร 9520",
        "cal": 470
    },
    "grilled_shrimp_9521": {
        "name": "กุ้งย่าง สูตร 9521",
        "cal": 660
    },
    "boiled_noodle_9522": {
        "name": "บะหมี่ต้ม สูตร 9522",
        "cal": 736
    },
    "steamed_pork_9523": {
        "name": "หมูนึ่ง สูตร 9523",
        "cal": 771
    },
    "boiled_squid_9524": {
        "name": "ปลาหมึกต้ม สูตร 9524",
        "cal": 223
    },
    "grilled_shrimp_9525": {
        "name": "กุ้งย่าง สูตร 9525",
        "cal": 104
    },
    "fried_chicken_9526": {
        "name": "ไก่ทอด สูตร 9526",
        "cal": 794
    },
    "spicy_noodle_9527": {
        "name": "บะหมี่ยำ สูตร 9527",
        "cal": 368
    },
    "spicy_squid_9528": {
        "name": "ปลาหมึกยำ สูตร 9528",
        "cal": 710
    },
    "steamed_chicken_9529": {
        "name": "ไก่นึ่ง สูตร 9529",
        "cal": 618
    },
    "spicy_fish_9530": {
        "name": "ปลายำ สูตร 9530",
        "cal": 755
    },
    "steamed_fish_9531": {
        "name": "ปลานึ่ง สูตร 9531",
        "cal": 113
    },
    "boiled_squid_9532": {
        "name": "ปลาหมึกต้ม สูตร 9532",
        "cal": 700
    },
    "steamed_beef_9533": {
        "name": "เนื้อนึ่ง สูตร 9533",
        "cal": 253
    },
    "steamed_chicken_9534": {
        "name": "ไก่นึ่ง สูตร 9534",
        "cal": 729
    },
    "fried_chicken_9535": {
        "name": "ไก่ทอด สูตร 9535",
        "cal": 315
    },
    "stir_fried_pork_9536": {
        "name": "หมูผัด สูตร 9536",
        "cal": 81
    },
    "boiled_soup_9537": {
        "name": "ซุปต้ม สูตร 9537",
        "cal": 229
    },
    "spicy_fish_9538": {
        "name": "ปลายำ สูตร 9538",
        "cal": 527
    },
    "fried_chicken_9539": {
        "name": "ไก่ทอด สูตร 9539",
        "cal": 204
    },
    "boiled_chicken_9540": {
        "name": "ไก่ต้ม สูตร 9540",
        "cal": 363
    },
    "grilled_soup_9541": {
        "name": "ซุปย่าง สูตร 9541",
        "cal": 184
    },
    "boiled_squid_9542": {
        "name": "ปลาหมึกต้ม สูตร 9542",
        "cal": 561
    },
    "grilled_chicken_9543": {
        "name": "ไก่ย่าง สูตร 9543",
        "cal": 603
    },
    "stir_fried_pork_9544": {
        "name": "หมูผัด สูตร 9544",
        "cal": 407
    },
    "stir_fried_beef_9545": {
        "name": "เนื้อผัด สูตร 9545",
        "cal": 244
    },
    "steamed_rice_9546": {
        "name": "ข้าวนึ่ง สูตร 9546",
        "cal": 485
    },
    "fried_shrimp_9547": {
        "name": "กุ้งทอด สูตร 9547",
        "cal": 465
    },
    "spicy_beef_9548": {
        "name": "เนื้อยำ สูตร 9548",
        "cal": 447
    },
    "grilled_soup_9549": {
        "name": "ซุปย่าง สูตร 9549",
        "cal": 500
    },
    "spicy_rice_9550": {
        "name": "ข้าวยำ สูตร 9550",
        "cal": 793
    },
    "spicy_beef_9551": {
        "name": "เนื้อยำ สูตร 9551",
        "cal": 655
    },
    "spicy_soup_9552": {
        "name": "ซุปยำ สูตร 9552",
        "cal": 610
    },
    "stir_fried_chicken_9553": {
        "name": "ไก่ผัด สูตร 9553",
        "cal": 416
    },
    "fried_squid_9554": {
        "name": "ปลาหมึกทอด สูตร 9554",
        "cal": 737
    },
    "grilled_soup_9555": {
        "name": "ซุปย่าง สูตร 9555",
        "cal": 283
    },
    "steamed_noodle_9556": {
        "name": "บะหมี่นึ่ง สูตร 9556",
        "cal": 92
    },
    "fried_fish_9557": {
        "name": "ปลาทอด สูตร 9557",
        "cal": 130
    },
    "boiled_noodle_9558": {
        "name": "บะหมี่ต้ม สูตร 9558",
        "cal": 849
    },
    "spicy_noodle_9559": {
        "name": "บะหมี่ยำ สูตร 9559",
        "cal": 400
    },
    "stir_fried_noodle_9560": {
        "name": "บะหมี่ผัด สูตร 9560",
        "cal": 534
    },
    "stir_fried_pork_9561": {
        "name": "หมูผัด สูตร 9561",
        "cal": 366
    },
    "spicy_rice_9562": {
        "name": "ข้าวยำ สูตร 9562",
        "cal": 200
    },
    "steamed_fish_9563": {
        "name": "ปลานึ่ง สูตร 9563",
        "cal": 172
    },
    "stir_fried_rice_9564": {
        "name": "ข้าวผัด สูตร 9564",
        "cal": 314
    },
    "grilled_rice_9565": {
        "name": "ข้าวย่าง สูตร 9565",
        "cal": 338
    },
    "steamed_chicken_9566": {
        "name": "ไก่นึ่ง สูตร 9566",
        "cal": 382
    },
    "boiled_soup_9567": {
        "name": "ซุปต้ม สูตร 9567",
        "cal": 381
    },
    "spicy_noodle_9568": {
        "name": "บะหมี่ยำ สูตร 9568",
        "cal": 25
    },
    "spicy_rice_9569": {
        "name": "ข้าวยำ สูตร 9569",
        "cal": 639
    },
    "boiled_squid_9570": {
        "name": "ปลาหมึกต้ม สูตร 9570",
        "cal": 408
    },
    "fried_soup_9571": {
        "name": "ซุปทอด สูตร 9571",
        "cal": 513
    },
    "fried_beef_9572": {
        "name": "เนื้อทอด สูตร 9572",
        "cal": 226
    },
    "fried_noodle_9573": {
        "name": "บะหมี่ทอด สูตร 9573",
        "cal": 439
    },
    "boiled_soup_9574": {
        "name": "ซุปต้ม สูตร 9574",
        "cal": 647
    },
    "boiled_pork_9575": {
        "name": "หมูต้ม สูตร 9575",
        "cal": 576
    },
    "boiled_rice_9576": {
        "name": "ข้าวต้ม สูตร 9576",
        "cal": 451
    },
    "steamed_rice_9577": {
        "name": "ข้าวนึ่ง สูตร 9577",
        "cal": 795
    },
    "steamed_chicken_9578": {
        "name": "ไก่นึ่ง สูตร 9578",
        "cal": 250
    },
    "boiled_soup_9579": {
        "name": "ซุปต้ม สูตร 9579",
        "cal": 354
    },
    "stir_fried_rice_9580": {
        "name": "ข้าวผัด สูตร 9580",
        "cal": 718
    },
    "stir_fried_chicken_9581": {
        "name": "ไก่ผัด สูตร 9581",
        "cal": 489
    },
    "steamed_chicken_9582": {
        "name": "ไก่นึ่ง สูตร 9582",
        "cal": 218
    },
    "steamed_beef_9583": {
        "name": "เนื้อนึ่ง สูตร 9583",
        "cal": 630
    },
    "stir_fried_fish_9584": {
        "name": "ปลาผัด สูตร 9584",
        "cal": 541
    },
    "steamed_noodle_9585": {
        "name": "บะหมี่นึ่ง สูตร 9585",
        "cal": 382
    },
    "fried_shrimp_9586": {
        "name": "กุ้งทอด สูตร 9586",
        "cal": 721
    },
    "spicy_chicken_9587": {
        "name": "ไก่ยำ สูตร 9587",
        "cal": 270
    },
    "spicy_chicken_9588": {
        "name": "ไก่ยำ สูตร 9588",
        "cal": 796
    },
    "spicy_chicken_9589": {
        "name": "ไก่ยำ สูตร 9589",
        "cal": 393
    },
    "spicy_noodle_9590": {
        "name": "บะหมี่ยำ สูตร 9590",
        "cal": 551
    },
    "fried_noodle_9591": {
        "name": "บะหมี่ทอด สูตร 9591",
        "cal": 506
    },
    "boiled_rice_9592": {
        "name": "ข้าวต้ม สูตร 9592",
        "cal": 97
    },
    "spicy_shrimp_9593": {
        "name": "กุ้งยำ สูตร 9593",
        "cal": 118
    },
    "stir_fried_chicken_9594": {
        "name": "ไก่ผัด สูตร 9594",
        "cal": 353
    },
    "stir_fried_chicken_9595": {
        "name": "ไก่ผัด สูตร 9595",
        "cal": 120
    },
    "grilled_beef_9596": {
        "name": "เนื้อย่าง สูตร 9596",
        "cal": 136
    },
    "steamed_beef_9597": {
        "name": "เนื้อนึ่ง สูตร 9597",
        "cal": 442
    },
    "grilled_soup_9598": {
        "name": "ซุปย่าง สูตร 9598",
        "cal": 80
    },
    "steamed_chicken_9599": {
        "name": "ไก่นึ่ง สูตร 9599",
        "cal": 190
    },
    "steamed_beef_9600": {
        "name": "เนื้อนึ่ง สูตร 9600",
        "cal": 305
    },
    "grilled_pork_9601": {
        "name": "หมูย่าง สูตร 9601",
        "cal": 564
    },
    "steamed_shrimp_9602": {
        "name": "กุ้งนึ่ง สูตร 9602",
        "cal": 723
    },
    "grilled_fish_9603": {
        "name": "ปลาย่าง สูตร 9603",
        "cal": 109
    },
    "stir_fried_fish_9604": {
        "name": "ปลาผัด สูตร 9604",
        "cal": 371
    },
    "grilled_pork_9605": {
        "name": "หมูย่าง สูตร 9605",
        "cal": 649
    },
    "steamed_shrimp_9606": {
        "name": "กุ้งนึ่ง สูตร 9606",
        "cal": 235
    },
    "steamed_squid_9607": {
        "name": "ปลาหมึกนึ่ง สูตร 9607",
        "cal": 612
    },
    "boiled_beef_9608": {
        "name": "เนื้อต้ม สูตร 9608",
        "cal": 170
    },
    "spicy_shrimp_9609": {
        "name": "กุ้งยำ สูตร 9609",
        "cal": 52
    },
    "steamed_fish_9610": {
        "name": "ปลานึ่ง สูตร 9610",
        "cal": 385
    },
    "stir_fried_rice_9611": {
        "name": "ข้าวผัด สูตร 9611",
        "cal": 30
    },
    "spicy_fish_9612": {
        "name": "ปลายำ สูตร 9612",
        "cal": 372
    },
    "spicy_pork_9613": {
        "name": "หมูยำ สูตร 9613",
        "cal": 349
    },
    "spicy_noodle_9614": {
        "name": "บะหมี่ยำ สูตร 9614",
        "cal": 373
    },
    "fried_chicken_9615": {
        "name": "ไก่ทอด สูตร 9615",
        "cal": 158
    },
    "stir_fried_rice_9616": {
        "name": "ข้าวผัด สูตร 9616",
        "cal": 71
    },
    "steamed_shrimp_9617": {
        "name": "กุ้งนึ่ง สูตร 9617",
        "cal": 667
    },
    "fried_shrimp_9618": {
        "name": "กุ้งทอด สูตร 9618",
        "cal": 511
    },
    "stir_fried_chicken_9619": {
        "name": "ไก่ผัด สูตร 9619",
        "cal": 128
    },
    "stir_fried_chicken_9620": {
        "name": "ไก่ผัด สูตร 9620",
        "cal": 177
    },
    "fried_fish_9621": {
        "name": "ปลาทอด สูตร 9621",
        "cal": 160
    },
    "fried_shrimp_9622": {
        "name": "กุ้งทอด สูตร 9622",
        "cal": 523
    },
    "stir_fried_chicken_9623": {
        "name": "ไก่ผัด สูตร 9623",
        "cal": 264
    },
    "stir_fried_fish_9624": {
        "name": "ปลาผัด สูตร 9624",
        "cal": 143
    },
    "grilled_soup_9625": {
        "name": "ซุปย่าง สูตร 9625",
        "cal": 654
    },
    "boiled_soup_9626": {
        "name": "ซุปต้ม สูตร 9626",
        "cal": 803
    },
    "grilled_squid_9627": {
        "name": "ปลาหมึกย่าง สูตร 9627",
        "cal": 549
    },
    "boiled_fish_9628": {
        "name": "ปลาต้ม สูตร 9628",
        "cal": 377
    },
    "grilled_soup_9629": {
        "name": "ซุปย่าง สูตร 9629",
        "cal": 824
    },
    "spicy_chicken_9630": {
        "name": "ไก่ยำ สูตร 9630",
        "cal": 254
    },
    "fried_shrimp_9631": {
        "name": "กุ้งทอด สูตร 9631",
        "cal": 217
    },
    "steamed_chicken_9632": {
        "name": "ไก่นึ่ง สูตร 9632",
        "cal": 123
    },
    "grilled_squid_9633": {
        "name": "ปลาหมึกย่าง สูตร 9633",
        "cal": 613
    },
    "boiled_beef_9634": {
        "name": "เนื้อต้ม สูตร 9634",
        "cal": 30
    },
    "grilled_fish_9635": {
        "name": "ปลาย่าง สูตร 9635",
        "cal": 827
    },
    "boiled_rice_9636": {
        "name": "ข้าวต้ม สูตร 9636",
        "cal": 417
    },
    "spicy_soup_9637": {
        "name": "ซุปยำ สูตร 9637",
        "cal": 457
    },
    "stir_fried_noodle_9638": {
        "name": "บะหมี่ผัด สูตร 9638",
        "cal": 201
    },
    "fried_shrimp_9639": {
        "name": "กุ้งทอด สูตร 9639",
        "cal": 34
    },
    "boiled_noodle_9640": {
        "name": "บะหมี่ต้ม สูตร 9640",
        "cal": 274
    },
    "steamed_rice_9641": {
        "name": "ข้าวนึ่ง สูตร 9641",
        "cal": 218
    },
    "spicy_fish_9642": {
        "name": "ปลายำ สูตร 9642",
        "cal": 284
    },
    "spicy_chicken_9643": {
        "name": "ไก่ยำ สูตร 9643",
        "cal": 464
    },
    "grilled_squid_9644": {
        "name": "ปลาหมึกย่าง สูตร 9644",
        "cal": 590
    },
    "grilled_fish_9645": {
        "name": "ปลาย่าง สูตร 9645",
        "cal": 143
    },
    "spicy_rice_9646": {
        "name": "ข้าวยำ สูตร 9646",
        "cal": 59
    },
    "spicy_fish_9647": {
        "name": "ปลายำ สูตร 9647",
        "cal": 597
    },
    "fried_beef_9648": {
        "name": "เนื้อทอด สูตร 9648",
        "cal": 293
    },
    "fried_shrimp_9649": {
        "name": "กุ้งทอด สูตร 9649",
        "cal": 322
    },
    "grilled_beef_9650": {
        "name": "เนื้อย่าง สูตร 9650",
        "cal": 155
    },
    "boiled_pork_9651": {
        "name": "หมูต้ม สูตร 9651",
        "cal": 603
    },
    "stir_fried_squid_9652": {
        "name": "ปลาหมึกผัด สูตร 9652",
        "cal": 82
    },
    "stir_fried_shrimp_9653": {
        "name": "กุ้งผัด สูตร 9653",
        "cal": 118
    },
    "spicy_pork_9654": {
        "name": "หมูยำ สูตร 9654",
        "cal": 693
    },
    "stir_fried_pork_9655": {
        "name": "หมูผัด สูตร 9655",
        "cal": 69
    },
    "steamed_chicken_9656": {
        "name": "ไก่นึ่ง สูตร 9656",
        "cal": 222
    },
    "boiled_fish_9657": {
        "name": "ปลาต้ม สูตร 9657",
        "cal": 145
    },
    "spicy_chicken_9658": {
        "name": "ไก่ยำ สูตร 9658",
        "cal": 643
    },
    "stir_fried_shrimp_9659": {
        "name": "กุ้งผัด สูตร 9659",
        "cal": 443
    },
    "spicy_fish_9660": {
        "name": "ปลายำ สูตร 9660",
        "cal": 508
    },
    "grilled_noodle_9661": {
        "name": "บะหมี่ย่าง สูตร 9661",
        "cal": 565
    },
    "fried_soup_9662": {
        "name": "ซุปทอด สูตร 9662",
        "cal": 569
    },
    "stir_fried_beef_9663": {
        "name": "เนื้อผัด สูตร 9663",
        "cal": 600
    },
    "stir_fried_noodle_9664": {
        "name": "บะหมี่ผัด สูตร 9664",
        "cal": 721
    },
    "grilled_squid_9665": {
        "name": "ปลาหมึกย่าง สูตร 9665",
        "cal": 687
    },
    "spicy_rice_9666": {
        "name": "ข้าวยำ สูตร 9666",
        "cal": 848
    },
    "boiled_chicken_9667": {
        "name": "ไก่ต้ม สูตร 9667",
        "cal": 101
    },
    "boiled_chicken_9668": {
        "name": "ไก่ต้ม สูตร 9668",
        "cal": 59
    },
    "fried_shrimp_9669": {
        "name": "กุ้งทอด สูตร 9669",
        "cal": 27
    },
    "steamed_soup_9670": {
        "name": "ซุปนึ่ง สูตร 9670",
        "cal": 363
    },
    "spicy_rice_9671": {
        "name": "ข้าวยำ สูตร 9671",
        "cal": 382
    },
    "spicy_pork_9672": {
        "name": "หมูยำ สูตร 9672",
        "cal": 749
    },
    "boiled_shrimp_9673": {
        "name": "กุ้งต้ม สูตร 9673",
        "cal": 348
    },
    "boiled_beef_9674": {
        "name": "เนื้อต้ม สูตร 9674",
        "cal": 268
    },
    "boiled_fish_9675": {
        "name": "ปลาต้ม สูตร 9675",
        "cal": 337
    },
    "spicy_beef_9676": {
        "name": "เนื้อยำ สูตร 9676",
        "cal": 617
    },
    "boiled_soup_9677": {
        "name": "ซุปต้ม สูตร 9677",
        "cal": 288
    },
    "boiled_fish_9678": {
        "name": "ปลาต้ม สูตร 9678",
        "cal": 283
    },
    "boiled_noodle_9679": {
        "name": "บะหมี่ต้ม สูตร 9679",
        "cal": 818
    },
    "grilled_squid_9680": {
        "name": "ปลาหมึกย่าง สูตร 9680",
        "cal": 850
    },
    "fried_fish_9681": {
        "name": "ปลาทอด สูตร 9681",
        "cal": 750
    },
    "spicy_noodle_9682": {
        "name": "บะหมี่ยำ สูตร 9682",
        "cal": 638
    },
    "boiled_pork_9683": {
        "name": "หมูต้ม สูตร 9683",
        "cal": 232
    },
    "spicy_shrimp_9684": {
        "name": "กุ้งยำ สูตร 9684",
        "cal": 373
    },
    "grilled_pork_9685": {
        "name": "หมูย่าง สูตร 9685",
        "cal": 726
    },
    "stir_fried_soup_9686": {
        "name": "ซุปผัด สูตร 9686",
        "cal": 308
    },
    "stir_fried_fish_9687": {
        "name": "ปลาผัด สูตร 9687",
        "cal": 655
    },
    "fried_squid_9688": {
        "name": "ปลาหมึกทอด สูตร 9688",
        "cal": 293
    },
    "grilled_pork_9689": {
        "name": "หมูย่าง สูตร 9689",
        "cal": 752
    },
    "grilled_rice_9690": {
        "name": "ข้าวย่าง สูตร 9690",
        "cal": 511
    },
    "fried_shrimp_9691": {
        "name": "กุ้งทอด สูตร 9691",
        "cal": 399
    },
    "fried_soup_9692": {
        "name": "ซุปทอด สูตร 9692",
        "cal": 652
    },
    "grilled_squid_9693": {
        "name": "ปลาหมึกย่าง สูตร 9693",
        "cal": 298
    },
    "boiled_noodle_9694": {
        "name": "บะหมี่ต้ม สูตร 9694",
        "cal": 609
    },
    "spicy_rice_9695": {
        "name": "ข้าวยำ สูตร 9695",
        "cal": 355
    },
    "fried_noodle_9696": {
        "name": "บะหมี่ทอด สูตร 9696",
        "cal": 90
    },
    "stir_fried_noodle_9697": {
        "name": "บะหมี่ผัด สูตร 9697",
        "cal": 632
    },
    "fried_soup_9698": {
        "name": "ซุปทอด สูตร 9698",
        "cal": 40
    },
    "spicy_noodle_9699": {
        "name": "บะหมี่ยำ สูตร 9699",
        "cal": 237
    },
    "grilled_chicken_9700": {
        "name": "ไก่ย่าง สูตร 9700",
        "cal": 29
    },
    "fried_shrimp_9701": {
        "name": "กุ้งทอด สูตร 9701",
        "cal": 606
    },
    "steamed_pork_9702": {
        "name": "หมูนึ่ง สูตร 9702",
        "cal": 810
    },
    "boiled_noodle_9703": {
        "name": "บะหมี่ต้ม สูตร 9703",
        "cal": 624
    },
    "boiled_pork_9704": {
        "name": "หมูต้ม สูตร 9704",
        "cal": 622
    },
    "steamed_pork_9705": {
        "name": "หมูนึ่ง สูตร 9705",
        "cal": 471
    },
    "spicy_beef_9706": {
        "name": "เนื้อยำ สูตร 9706",
        "cal": 740
    },
    "boiled_soup_9707": {
        "name": "ซุปต้ม สูตร 9707",
        "cal": 432
    },
    "grilled_noodle_9708": {
        "name": "บะหมี่ย่าง สูตร 9708",
        "cal": 725
    },
    "stir_fried_noodle_9709": {
        "name": "บะหมี่ผัด สูตร 9709",
        "cal": 190
    },
    "boiled_fish_9710": {
        "name": "ปลาต้ม สูตร 9710",
        "cal": 249
    },
    "steamed_fish_9711": {
        "name": "ปลานึ่ง สูตร 9711",
        "cal": 621
    },
    "stir_fried_rice_9712": {
        "name": "ข้าวผัด สูตร 9712",
        "cal": 650
    },
    "stir_fried_pork_9713": {
        "name": "หมูผัด สูตร 9713",
        "cal": 105
    },
    "stir_fried_soup_9714": {
        "name": "ซุปผัด สูตร 9714",
        "cal": 241
    },
    "spicy_shrimp_9715": {
        "name": "กุ้งยำ สูตร 9715",
        "cal": 264
    },
    "fried_shrimp_9716": {
        "name": "กุ้งทอด สูตร 9716",
        "cal": 832
    },
    "stir_fried_rice_9717": {
        "name": "ข้าวผัด สูตร 9717",
        "cal": 363
    },
    "grilled_shrimp_9718": {
        "name": "กุ้งย่าง สูตร 9718",
        "cal": 111
    },
    "spicy_chicken_9719": {
        "name": "ไก่ยำ สูตร 9719",
        "cal": 192
    },
    "stir_fried_shrimp_9720": {
        "name": "กุ้งผัด สูตร 9720",
        "cal": 784
    },
    "steamed_rice_9721": {
        "name": "ข้าวนึ่ง สูตร 9721",
        "cal": 724
    },
    "stir_fried_squid_9722": {
        "name": "ปลาหมึกผัด สูตร 9722",
        "cal": 593
    },
    "spicy_squid_9723": {
        "name": "ปลาหมึกยำ สูตร 9723",
        "cal": 388
    },
    "steamed_fish_9724": {
        "name": "ปลานึ่ง สูตร 9724",
        "cal": 79
    },
    "fried_squid_9725": {
        "name": "ปลาหมึกทอด สูตร 9725",
        "cal": 209
    },
    "stir_fried_beef_9726": {
        "name": "เนื้อผัด สูตร 9726",
        "cal": 222
    },
    "steamed_pork_9727": {
        "name": "หมูนึ่ง สูตร 9727",
        "cal": 740
    },
    "stir_fried_chicken_9728": {
        "name": "ไก่ผัด สูตร 9728",
        "cal": 657
    },
    "boiled_noodle_9729": {
        "name": "บะหมี่ต้ม สูตร 9729",
        "cal": 112
    },
    "fried_fish_9730": {
        "name": "ปลาทอด สูตร 9730",
        "cal": 214
    },
    "fried_chicken_9731": {
        "name": "ไก่ทอด สูตร 9731",
        "cal": 279
    },
    "spicy_fish_9732": {
        "name": "ปลายำ สูตร 9732",
        "cal": 636
    },
    "grilled_beef_9733": {
        "name": "เนื้อย่าง สูตร 9733",
        "cal": 379
    },
    "fried_chicken_9734": {
        "name": "ไก่ทอด สูตร 9734",
        "cal": 562
    },
    "fried_shrimp_9735": {
        "name": "กุ้งทอด สูตร 9735",
        "cal": 83
    },
    "steamed_shrimp_9736": {
        "name": "กุ้งนึ่ง สูตร 9736",
        "cal": 720
    },
    "grilled_shrimp_9737": {
        "name": "กุ้งย่าง สูตร 9737",
        "cal": 846
    },
    "steamed_chicken_9738": {
        "name": "ไก่นึ่ง สูตร 9738",
        "cal": 68
    },
    "steamed_chicken_9739": {
        "name": "ไก่นึ่ง สูตร 9739",
        "cal": 831
    },
    "grilled_soup_9740": {
        "name": "ซุปย่าง สูตร 9740",
        "cal": 840
    },
    "grilled_shrimp_9741": {
        "name": "กุ้งย่าง สูตร 9741",
        "cal": 604
    },
    "grilled_squid_9742": {
        "name": "ปลาหมึกย่าง สูตร 9742",
        "cal": 814
    },
    "boiled_fish_9743": {
        "name": "ปลาต้ม สูตร 9743",
        "cal": 354
    },
    "fried_squid_9744": {
        "name": "ปลาหมึกทอด สูตร 9744",
        "cal": 462
    },
    "steamed_beef_9745": {
        "name": "เนื้อนึ่ง สูตร 9745",
        "cal": 643
    },
    "stir_fried_beef_9746": {
        "name": "เนื้อผัด สูตร 9746",
        "cal": 382
    },
    "spicy_shrimp_9747": {
        "name": "กุ้งยำ สูตร 9747",
        "cal": 513
    },
    "grilled_squid_9748": {
        "name": "ปลาหมึกย่าง สูตร 9748",
        "cal": 845
    },
    "steamed_chicken_9749": {
        "name": "ไก่นึ่ง สูตร 9749",
        "cal": 596
    },
    "fried_soup_9750": {
        "name": "ซุปทอด สูตร 9750",
        "cal": 538
    },
    "grilled_soup_9751": {
        "name": "ซุปย่าง สูตร 9751",
        "cal": 333
    },
    "fried_shrimp_9752": {
        "name": "กุ้งทอด สูตร 9752",
        "cal": 722
    },
    "stir_fried_chicken_9753": {
        "name": "ไก่ผัด สูตร 9753",
        "cal": 42
    },
    "grilled_shrimp_9754": {
        "name": "กุ้งย่าง สูตร 9754",
        "cal": 720
    },
    "steamed_squid_9755": {
        "name": "ปลาหมึกนึ่ง สูตร 9755",
        "cal": 251
    },
    "boiled_fish_9756": {
        "name": "ปลาต้ม สูตร 9756",
        "cal": 194
    },
    "stir_fried_beef_9757": {
        "name": "เนื้อผัด สูตร 9757",
        "cal": 267
    },
    "boiled_shrimp_9758": {
        "name": "กุ้งต้ม สูตร 9758",
        "cal": 811
    },
    "grilled_pork_9759": {
        "name": "หมูย่าง สูตร 9759",
        "cal": 348
    },
    "spicy_squid_9760": {
        "name": "ปลาหมึกยำ สูตร 9760",
        "cal": 454
    },
    "boiled_beef_9761": {
        "name": "เนื้อต้ม สูตร 9761",
        "cal": 551
    },
    "stir_fried_pork_9762": {
        "name": "หมูผัด สูตร 9762",
        "cal": 818
    },
    "steamed_pork_9763": {
        "name": "หมูนึ่ง สูตร 9763",
        "cal": 241
    },
    "spicy_fish_9764": {
        "name": "ปลายำ สูตร 9764",
        "cal": 464
    },
    "spicy_squid_9765": {
        "name": "ปลาหมึกยำ สูตร 9765",
        "cal": 136
    },
    "fried_chicken_9766": {
        "name": "ไก่ทอด สูตร 9766",
        "cal": 749
    },
    "steamed_beef_9767": {
        "name": "เนื้อนึ่ง สูตร 9767",
        "cal": 553
    },
    "spicy_pork_9768": {
        "name": "หมูยำ สูตร 9768",
        "cal": 108
    },
    "fried_chicken_9769": {
        "name": "ไก่ทอด สูตร 9769",
        "cal": 336
    },
    "grilled_squid_9770": {
        "name": "ปลาหมึกย่าง สูตร 9770",
        "cal": 826
    },
    "grilled_shrimp_9771": {
        "name": "กุ้งย่าง สูตร 9771",
        "cal": 833
    },
    "fried_rice_9772": {
        "name": "ข้าวทอด สูตร 9772",
        "cal": 657
    },
    "steamed_rice_9773": {
        "name": "ข้าวนึ่ง สูตร 9773",
        "cal": 61
    },
    "boiled_squid_9774": {
        "name": "ปลาหมึกต้ม สูตร 9774",
        "cal": 560
    },
    "spicy_rice_9775": {
        "name": "ข้าวยำ สูตร 9775",
        "cal": 93
    },
    "stir_fried_shrimp_9776": {
        "name": "กุ้งผัด สูตร 9776",
        "cal": 773
    },
    "boiled_fish_9777": {
        "name": "ปลาต้ม สูตร 9777",
        "cal": 467
    },
    "steamed_shrimp_9778": {
        "name": "กุ้งนึ่ง สูตร 9778",
        "cal": 772
    },
    "spicy_shrimp_9779": {
        "name": "กุ้งยำ สูตร 9779",
        "cal": 86
    },
    "fried_shrimp_9780": {
        "name": "กุ้งทอด สูตร 9780",
        "cal": 313
    },
    "stir_fried_soup_9781": {
        "name": "ซุปผัด สูตร 9781",
        "cal": 781
    },
    "boiled_rice_9782": {
        "name": "ข้าวต้ม สูตร 9782",
        "cal": 256
    },
    "stir_fried_soup_9783": {
        "name": "ซุปผัด สูตร 9783",
        "cal": 165
    },
    "grilled_rice_9784": {
        "name": "ข้าวย่าง สูตร 9784",
        "cal": 122
    },
    "grilled_squid_9785": {
        "name": "ปลาหมึกย่าง สูตร 9785",
        "cal": 757
    },
    "grilled_soup_9786": {
        "name": "ซุปย่าง สูตร 9786",
        "cal": 629
    },
    "spicy_beef_9787": {
        "name": "เนื้อยำ สูตร 9787",
        "cal": 543
    },
    "stir_fried_fish_9788": {
        "name": "ปลาผัด สูตร 9788",
        "cal": 393
    },
    "fried_noodle_9789": {
        "name": "บะหมี่ทอด สูตร 9789",
        "cal": 379
    },
    "fried_soup_9790": {
        "name": "ซุปทอด สูตร 9790",
        "cal": 637
    },
    "fried_chicken_9791": {
        "name": "ไก่ทอด สูตร 9791",
        "cal": 835
    },
    "fried_shrimp_9792": {
        "name": "กุ้งทอด สูตร 9792",
        "cal": 225
    },
    "stir_fried_squid_9793": {
        "name": "ปลาหมึกผัด สูตร 9793",
        "cal": 369
    },
    "steamed_noodle_9794": {
        "name": "บะหมี่นึ่ง สูตร 9794",
        "cal": 493
    },
    "stir_fried_beef_9795": {
        "name": "เนื้อผัด สูตร 9795",
        "cal": 462
    },
    "spicy_rice_9796": {
        "name": "ข้าวยำ สูตร 9796",
        "cal": 223
    },
    "fried_rice_9797": {
        "name": "ข้าวทอด สูตร 9797",
        "cal": 646
    },
    "steamed_shrimp_9798": {
        "name": "กุ้งนึ่ง สูตร 9798",
        "cal": 319
    },
    "steamed_noodle_9799": {
        "name": "บะหมี่นึ่ง สูตร 9799",
        "cal": 151
    },
    "boiled_soup_9800": {
        "name": "ซุปต้ม สูตร 9800",
        "cal": 617
    },
    "boiled_fish_9801": {
        "name": "ปลาต้ม สูตร 9801",
        "cal": 294
    },
    "fried_shrimp_9802": {
        "name": "กุ้งทอด สูตร 9802",
        "cal": 629
    },
    "stir_fried_rice_9803": {
        "name": "ข้าวผัด สูตร 9803",
        "cal": 103
    },
    "stir_fried_noodle_9804": {
        "name": "บะหมี่ผัด สูตร 9804",
        "cal": 272
    },
    "grilled_pork_9805": {
        "name": "หมูย่าง สูตร 9805",
        "cal": 154
    },
    "stir_fried_soup_9806": {
        "name": "ซุปผัด สูตร 9806",
        "cal": 542
    },
    "spicy_fish_9807": {
        "name": "ปลายำ สูตร 9807",
        "cal": 465
    },
    "boiled_rice_9808": {
        "name": "ข้าวต้ม สูตร 9808",
        "cal": 779
    },
    "stir_fried_soup_9809": {
        "name": "ซุปผัด สูตร 9809",
        "cal": 332
    },
    "fried_pork_9810": {
        "name": "หมูทอด สูตร 9810",
        "cal": 367
    },
    "spicy_rice_9811": {
        "name": "ข้าวยำ สูตร 9811",
        "cal": 219
    },
    "steamed_soup_9812": {
        "name": "ซุปนึ่ง สูตร 9812",
        "cal": 79
    },
    "fried_fish_9813": {
        "name": "ปลาทอด สูตร 9813",
        "cal": 433
    },
    "fried_rice_9814": {
        "name": "ข้าวทอด สูตร 9814",
        "cal": 382
    },
    "steamed_pork_9815": {
        "name": "หมูนึ่ง สูตร 9815",
        "cal": 105
    },
    "stir_fried_chicken_9816": {
        "name": "ไก่ผัด สูตร 9816",
        "cal": 347
    },
    "stir_fried_squid_9817": {
        "name": "ปลาหมึกผัด สูตร 9817",
        "cal": 628
    },
    "spicy_chicken_9818": {
        "name": "ไก่ยำ สูตร 9818",
        "cal": 97
    },
    "spicy_fish_9819": {
        "name": "ปลายำ สูตร 9819",
        "cal": 333
    },
    "grilled_soup_9820": {
        "name": "ซุปย่าง สูตร 9820",
        "cal": 301
    },
    "fried_soup_9821": {
        "name": "ซุปทอด สูตร 9821",
        "cal": 792
    },
    "stir_fried_beef_9822": {
        "name": "เนื้อผัด สูตร 9822",
        "cal": 529
    },
    "grilled_noodle_9823": {
        "name": "บะหมี่ย่าง สูตร 9823",
        "cal": 196
    },
    "fried_pork_9824": {
        "name": "หมูทอด สูตร 9824",
        "cal": 270
    },
    "boiled_squid_9825": {
        "name": "ปลาหมึกต้ม สูตร 9825",
        "cal": 626
    },
    "spicy_soup_9826": {
        "name": "ซุปยำ สูตร 9826",
        "cal": 838
    },
    "steamed_squid_9827": {
        "name": "ปลาหมึกนึ่ง สูตร 9827",
        "cal": 617
    },
    "stir_fried_shrimp_9828": {
        "name": "กุ้งผัด สูตร 9828",
        "cal": 450
    },
    "fried_rice_9829": {
        "name": "ข้าวทอด สูตร 9829",
        "cal": 126
    },
    "grilled_pork_9830": {
        "name": "หมูย่าง สูตร 9830",
        "cal": 226
    },
    "fried_shrimp_9831": {
        "name": "กุ้งทอด สูตร 9831",
        "cal": 25
    },
    "fried_noodle_9832": {
        "name": "บะหมี่ทอด สูตร 9832",
        "cal": 358
    },
    "fried_chicken_9833": {
        "name": "ไก่ทอด สูตร 9833",
        "cal": 847
    },
    "steamed_soup_9834": {
        "name": "ซุปนึ่ง สูตร 9834",
        "cal": 482
    },
    "stir_fried_chicken_9835": {
        "name": "ไก่ผัด สูตร 9835",
        "cal": 771
    },
    "fried_pork_9836": {
        "name": "หมูทอด สูตร 9836",
        "cal": 138
    },
    "stir_fried_pork_9837": {
        "name": "หมูผัด สูตร 9837",
        "cal": 809
    },
    "boiled_beef_9838": {
        "name": "เนื้อต้ม สูตร 9838",
        "cal": 220
    },
    "stir_fried_pork_9839": {
        "name": "หมูผัด สูตร 9839",
        "cal": 335
    },
    "stir_fried_rice_9840": {
        "name": "ข้าวผัด สูตร 9840",
        "cal": 488
    },
    "steamed_pork_9841": {
        "name": "หมูนึ่ง สูตร 9841",
        "cal": 641
    },
    "spicy_fish_9842": {
        "name": "ปลายำ สูตร 9842",
        "cal": 488
    },
    "stir_fried_chicken_9843": {
        "name": "ไก่ผัด สูตร 9843",
        "cal": 107
    },
    "spicy_noodle_9844": {
        "name": "บะหมี่ยำ สูตร 9844",
        "cal": 327
    },
    "boiled_fish_9845": {
        "name": "ปลาต้ม สูตร 9845",
        "cal": 96
    },
    "fried_beef_9846": {
        "name": "เนื้อทอด สูตร 9846",
        "cal": 164
    },
    "grilled_noodle_9847": {
        "name": "บะหมี่ย่าง สูตร 9847",
        "cal": 677
    },
    "stir_fried_chicken_9848": {
        "name": "ไก่ผัด สูตร 9848",
        "cal": 540
    },
    "stir_fried_noodle_9849": {
        "name": "บะหมี่ผัด สูตร 9849",
        "cal": 817
    },
    "boiled_squid_9850": {
        "name": "ปลาหมึกต้ม สูตร 9850",
        "cal": 844
    },
    "spicy_noodle_9851": {
        "name": "บะหมี่ยำ สูตร 9851",
        "cal": 301
    },
    "spicy_beef_9852": {
        "name": "เนื้อยำ สูตร 9852",
        "cal": 295
    },
    "grilled_shrimp_9853": {
        "name": "กุ้งย่าง สูตร 9853",
        "cal": 425
    },
    "fried_fish_9854": {
        "name": "ปลาทอด สูตร 9854",
        "cal": 425
    },
    "stir_fried_beef_9855": {
        "name": "เนื้อผัด สูตร 9855",
        "cal": 54
    },
    "boiled_rice_9856": {
        "name": "ข้าวต้ม สูตร 9856",
        "cal": 549
    },
    "grilled_pork_9857": {
        "name": "หมูย่าง สูตร 9857",
        "cal": 661
    },
    "boiled_fish_9858": {
        "name": "ปลาต้ม สูตร 9858",
        "cal": 603
    },
    "fried_beef_9859": {
        "name": "เนื้อทอด สูตร 9859",
        "cal": 503
    },
    "spicy_chicken_9860": {
        "name": "ไก่ยำ สูตร 9860",
        "cal": 174
    },
    "stir_fried_shrimp_9861": {
        "name": "กุ้งผัด สูตร 9861",
        "cal": 363
    },
    "stir_fried_shrimp_9862": {
        "name": "กุ้งผัด สูตร 9862",
        "cal": 658
    },
    "steamed_shrimp_9863": {
        "name": "กุ้งนึ่ง สูตร 9863",
        "cal": 832
    },
    "grilled_chicken_9864": {
        "name": "ไก่ย่าง สูตร 9864",
        "cal": 291
    },
    "steamed_noodle_9865": {
        "name": "บะหมี่นึ่ง สูตร 9865",
        "cal": 549
    },
    "spicy_squid_9866": {
        "name": "ปลาหมึกยำ สูตร 9866",
        "cal": 59
    },
    "stir_fried_chicken_9867": {
        "name": "ไก่ผัด สูตร 9867",
        "cal": 693
    },
    "steamed_noodle_9868": {
        "name": "บะหมี่นึ่ง สูตร 9868",
        "cal": 786
    },
    "spicy_fish_9869": {
        "name": "ปลายำ สูตร 9869",
        "cal": 292
    },
    "boiled_pork_9870": {
        "name": "หมูต้ม สูตร 9870",
        "cal": 114
    },
    "spicy_fish_9871": {
        "name": "ปลายำ สูตร 9871",
        "cal": 398
    },
    "steamed_chicken_9872": {
        "name": "ไก่นึ่ง สูตร 9872",
        "cal": 190
    },
    "steamed_beef_9873": {
        "name": "เนื้อนึ่ง สูตร 9873",
        "cal": 731
    },
    "stir_fried_shrimp_9874": {
        "name": "กุ้งผัด สูตร 9874",
        "cal": 581
    },
    "stir_fried_pork_9875": {
        "name": "หมูผัด สูตร 9875",
        "cal": 757
    },
    "fried_chicken_9876": {
        "name": "ไก่ทอด สูตร 9876",
        "cal": 524
    },
    "steamed_rice_9877": {
        "name": "ข้าวนึ่ง สูตร 9877",
        "cal": 495
    },
    "fried_chicken_9878": {
        "name": "ไก่ทอด สูตร 9878",
        "cal": 279
    },
    "stir_fried_soup_9879": {
        "name": "ซุปผัด สูตร 9879",
        "cal": 749
    },
    "stir_fried_beef_9880": {
        "name": "เนื้อผัด สูตร 9880",
        "cal": 725
    },
    "boiled_noodle_9881": {
        "name": "บะหมี่ต้ม สูตร 9881",
        "cal": 727
    },
    "stir_fried_rice_9882": {
        "name": "ข้าวผัด สูตร 9882",
        "cal": 806
    },
    "boiled_squid_9883": {
        "name": "ปลาหมึกต้ม สูตร 9883",
        "cal": 58
    },
    "boiled_beef_9884": {
        "name": "เนื้อต้ม สูตร 9884",
        "cal": 753
    },
    "fried_chicken_9885": {
        "name": "ไก่ทอด สูตร 9885",
        "cal": 773
    },
    "stir_fried_shrimp_9886": {
        "name": "กุ้งผัด สูตร 9886",
        "cal": 458
    },
    "boiled_soup_9887": {
        "name": "ซุปต้ม สูตร 9887",
        "cal": 591
    },
    "fried_noodle_9888": {
        "name": "บะหมี่ทอด สูตร 9888",
        "cal": 187
    },
    "grilled_beef_9889": {
        "name": "เนื้อย่าง สูตร 9889",
        "cal": 829
    },
    "steamed_soup_9890": {
        "name": "ซุปนึ่ง สูตร 9890",
        "cal": 592
    },
    "stir_fried_beef_9891": {
        "name": "เนื้อผัด สูตร 9891",
        "cal": 316
    },
    "grilled_soup_9892": {
        "name": "ซุปย่าง สูตร 9892",
        "cal": 504
    },
    "boiled_soup_9893": {
        "name": "ซุปต้ม สูตร 9893",
        "cal": 457
    },
    "boiled_squid_9894": {
        "name": "ปลาหมึกต้ม สูตร 9894",
        "cal": 752
    },
    "stir_fried_pork_9895": {
        "name": "หมูผัด สูตร 9895",
        "cal": 425
    },
    "spicy_squid_9896": {
        "name": "ปลาหมึกยำ สูตร 9896",
        "cal": 675
    },
    "steamed_rice_9897": {
        "name": "ข้าวนึ่ง สูตร 9897",
        "cal": 612
    },
    "grilled_chicken_9898": {
        "name": "ไก่ย่าง สูตร 9898",
        "cal": 687
    },
    "spicy_squid_9899": {
        "name": "ปลาหมึกยำ สูตร 9899",
        "cal": 491
    },
    "grilled_soup_9900": {
        "name": "ซุปย่าง สูตร 9900",
        "cal": 703
    },
    "fried_squid_9901": {
        "name": "ปลาหมึกทอด สูตร 9901",
        "cal": 608
    },
    "grilled_beef_9902": {
        "name": "เนื้อย่าง สูตร 9902",
        "cal": 635
    },
    "steamed_shrimp_9903": {
        "name": "กุ้งนึ่ง สูตร 9903",
        "cal": 686
    },
    "steamed_chicken_9904": {
        "name": "ไก่นึ่ง สูตร 9904",
        "cal": 777
    },
    "spicy_noodle_9905": {
        "name": "บะหมี่ยำ สูตร 9905",
        "cal": 746
    },
    "boiled_beef_9906": {
        "name": "เนื้อต้ม สูตร 9906",
        "cal": 109
    },
    "boiled_squid_9907": {
        "name": "ปลาหมึกต้ม สูตร 9907",
        "cal": 824
    },
    "stir_fried_pork_9908": {
        "name": "หมูผัด สูตร 9908",
        "cal": 693
    },
    "boiled_rice_9909": {
        "name": "ข้าวต้ม สูตร 9909",
        "cal": 559
    },
    "stir_fried_beef_9910": {
        "name": "เนื้อผัด สูตร 9910",
        "cal": 522
    },
    "grilled_fish_9911": {
        "name": "ปลาย่าง สูตร 9911",
        "cal": 776
    },
    "steamed_pork_9912": {
        "name": "หมูนึ่ง สูตร 9912",
        "cal": 489
    },
    "steamed_squid_9913": {
        "name": "ปลาหมึกนึ่ง สูตร 9913",
        "cal": 270
    },
    "steamed_squid_9914": {
        "name": "ปลาหมึกนึ่ง สูตร 9914",
        "cal": 38
    },
    "stir_fried_rice_9915": {
        "name": "ข้าวผัด สูตร 9915",
        "cal": 109
    },
    "stir_fried_pork_9916": {
        "name": "หมูผัด สูตร 9916",
        "cal": 817
    },
    "boiled_noodle_9917": {
        "name": "บะหมี่ต้ม สูตร 9917",
        "cal": 487
    },
    "spicy_soup_9918": {
        "name": "ซุปยำ สูตร 9918",
        "cal": 237
    },
    "grilled_squid_9919": {
        "name": "ปลาหมึกย่าง สูตร 9919",
        "cal": 430
    },
    "grilled_soup_9920": {
        "name": "ซุปย่าง สูตร 9920",
        "cal": 326
    },
    "stir_fried_chicken_9921": {
        "name": "ไก่ผัด สูตร 9921",
        "cal": 148
    },
    "spicy_squid_9922": {
        "name": "ปลาหมึกยำ สูตร 9922",
        "cal": 84
    },
    "steamed_fish_9923": {
        "name": "ปลานึ่ง สูตร 9923",
        "cal": 167
    },
    "fried_squid_9924": {
        "name": "ปลาหมึกทอด สูตร 9924",
        "cal": 103
    },
    "boiled_rice_9925": {
        "name": "ข้าวต้ม สูตร 9925",
        "cal": 717
    },
    "steamed_shrimp_9926": {
        "name": "กุ้งนึ่ง สูตร 9926",
        "cal": 37
    },
    "steamed_rice_9927": {
        "name": "ข้าวนึ่ง สูตร 9927",
        "cal": 333
    },
    "grilled_chicken_9928": {
        "name": "ไก่ย่าง สูตร 9928",
        "cal": 353
    },
    "grilled_fish_9929": {
        "name": "ปลาย่าง สูตร 9929",
        "cal": 533
    },
    "grilled_soup_9930": {
        "name": "ซุปย่าง สูตร 9930",
        "cal": 342
    },
    "boiled_noodle_9931": {
        "name": "บะหมี่ต้ม สูตร 9931",
        "cal": 440
    },
    "stir_fried_noodle_9932": {
        "name": "บะหมี่ผัด สูตร 9932",
        "cal": 723
    },
    "spicy_beef_9933": {
        "name": "เนื้อยำ สูตร 9933",
        "cal": 850
    },
    "stir_fried_fish_9934": {
        "name": "ปลาผัด สูตร 9934",
        "cal": 193
    },
    "grilled_fish_9935": {
        "name": "ปลาย่าง สูตร 9935",
        "cal": 223
    },
    "spicy_pork_9936": {
        "name": "หมูยำ สูตร 9936",
        "cal": 435
    },
    "stir_fried_chicken_9937": {
        "name": "ไก่ผัด สูตร 9937",
        "cal": 539
    },
    "spicy_rice_9938": {
        "name": "ข้าวยำ สูตร 9938",
        "cal": 590
    },
    "stir_fried_fish_9939": {
        "name": "ปลาผัด สูตร 9939",
        "cal": 143
    },
    "boiled_squid_9940": {
        "name": "ปลาหมึกต้ม สูตร 9940",
        "cal": 732
    },
    "boiled_rice_9941": {
        "name": "ข้าวต้ม สูตร 9941",
        "cal": 195
    },
    "boiled_fish_9942": {
        "name": "ปลาต้ม สูตร 9942",
        "cal": 375
    },
    "spicy_squid_9943": {
        "name": "ปลาหมึกยำ สูตร 9943",
        "cal": 558
    },
    "fried_chicken_9944": {
        "name": "ไก่ทอด สูตร 9944",
        "cal": 393
    },
    "grilled_rice_9945": {
        "name": "ข้าวย่าง สูตร 9945",
        "cal": 574
    },
    "grilled_shrimp_9946": {
        "name": "กุ้งย่าง สูตร 9946",
        "cal": 338
    },
    "fried_fish_9947": {
        "name": "ปลาทอด สูตร 9947",
        "cal": 385
    },
    "fried_beef_9948": {
        "name": "เนื้อทอด สูตร 9948",
        "cal": 421
    },
    "steamed_rice_9949": {
        "name": "ข้าวนึ่ง สูตร 9949",
        "cal": 517
    },
    "stir_fried_soup_9950": {
        "name": "ซุปผัด สูตร 9950",
        "cal": 426
    },
    "steamed_soup_9951": {
        "name": "ซุปนึ่ง สูตร 9951",
        "cal": 335
    },
    "steamed_shrimp_9952": {
        "name": "กุ้งนึ่ง สูตร 9952",
        "cal": 514
    },
    "boiled_rice_9953": {
        "name": "ข้าวต้ม สูตร 9953",
        "cal": 763
    },
    "fried_noodle_9954": {
        "name": "บะหมี่ทอด สูตร 9954",
        "cal": 762
    },
    "stir_fried_beef_9955": {
        "name": "เนื้อผัด สูตร 9955",
        "cal": 648
    },
    "fried_fish_9956": {
        "name": "ปลาทอด สูตร 9956",
        "cal": 37
    },
    "spicy_noodle_9957": {
        "name": "บะหมี่ยำ สูตร 9957",
        "cal": 332
    },
    "fried_noodle_9958": {
        "name": "บะหมี่ทอด สูตร 9958",
        "cal": 806
    },
    "boiled_pork_9959": {
        "name": "หมูต้ม สูตร 9959",
        "cal": 420
    },
    "steamed_shrimp_9960": {
        "name": "กุ้งนึ่ง สูตร 9960",
        "cal": 169
    },
    "spicy_shrimp_9961": {
        "name": "กุ้งยำ สูตร 9961",
        "cal": 692
    },
    "steamed_chicken_9962": {
        "name": "ไก่นึ่ง สูตร 9962",
        "cal": 658
    },
    "stir_fried_squid_9963": {
        "name": "ปลาหมึกผัด สูตร 9963",
        "cal": 599
    },
    "stir_fried_chicken_9964": {
        "name": "ไก่ผัด สูตร 9964",
        "cal": 548
    },
    "steamed_chicken_9965": {
        "name": "ไก่นึ่ง สูตร 9965",
        "cal": 773
    },
    "grilled_noodle_9966": {
        "name": "บะหมี่ย่าง สูตร 9966",
        "cal": 751
    },
    "fried_rice_9967": {
        "name": "ข้าวทอด สูตร 9967",
        "cal": 840
    },
    "steamed_rice_9968": {
        "name": "ข้าวนึ่ง สูตร 9968",
        "cal": 718
    },
    "fried_chicken_9969": {
        "name": "ไก่ทอด สูตร 9969",
        "cal": 246
    },
    "grilled_rice_9970": {
        "name": "ข้าวย่าง สูตร 9970",
        "cal": 724
    },
    "steamed_shrimp_9971": {
        "name": "กุ้งนึ่ง สูตร 9971",
        "cal": 687
    },
    "boiled_soup_9972": {
        "name": "ซุปต้ม สูตร 9972",
        "cal": 58
    },
    "steamed_pork_9973": {
        "name": "หมูนึ่ง สูตร 9973",
        "cal": 661
    },
    "stir_fried_fish_9974": {
        "name": "ปลาผัด สูตร 9974",
        "cal": 292
    },
    "boiled_pork_9975": {
        "name": "หมูต้ม สูตร 9975",
        "cal": 476
    },
    "grilled_pork_9976": {
        "name": "หมูย่าง สูตร 9976",
        "cal": 298
    },
    "fried_beef_9977": {
        "name": "เนื้อทอด สูตร 9977",
        "cal": 283
    },
    "boiled_shrimp_9978": {
        "name": "กุ้งต้ม สูตร 9978",
        "cal": 717
    },
    "grilled_beef_9979": {
        "name": "เนื้อย่าง สูตร 9979",
        "cal": 589
    },
    "spicy_rice_9980": {
        "name": "ข้าวยำ สูตร 9980",
        "cal": 782
    },
    "fried_soup_9981": {
        "name": "ซุปทอด สูตร 9981",
        "cal": 566
    },
    "boiled_squid_9982": {
        "name": "ปลาหมึกต้ม สูตร 9982",
        "cal": 744
    },
    "stir_fried_soup_9983": {
        "name": "ซุปผัด สูตร 9983",
        "cal": 709
    },
    "steamed_chicken_9984": {
        "name": "ไก่นึ่ง สูตร 9984",
        "cal": 500
    },
    "spicy_pork_9985": {
        "name": "หมูยำ สูตร 9985",
        "cal": 493
    },
    "spicy_rice_9986": {
        "name": "ข้าวยำ สูตร 9986",
        "cal": 838
    },
    "boiled_beef_9987": {
        "name": "เนื้อต้ม สูตร 9987",
        "cal": 77
    },
    "grilled_shrimp_9988": {
        "name": "กุ้งย่าง สูตร 9988",
        "cal": 199
    },
    "fried_beef_9989": {
        "name": "เนื้อทอด สูตร 9989",
        "cal": 394
    },
    "boiled_pork_9990": {
        "name": "หมูต้ม สูตร 9990",
        "cal": 718
    },
    "stir_fried_squid_9991": {
        "name": "ปลาหมึกผัด สูตร 9991",
        "cal": 715
    },
    "grilled_soup_9992": {
        "name": "ซุปย่าง สูตร 9992",
        "cal": 309
    },
    "boiled_chicken_9993": {
        "name": "ไก่ต้ม สูตร 9993",
        "cal": 751
    }
}
let model;

// ฟังก์ชันเปิดกล้อง (เน้นกล้องหลังมือถือ)
async function setupWebcam() {
    return new Promise((resolve, reject) => {
        const navigatorAny = navigator;
        navigator.getUserMedia = navigator.getUserMedia ||
            navigatorAny.webkitGetUserMedia || navigatorAny.mozGetUserMedia ||
            navigatorAny.msGetUserMedia;
            
        if (navigator.getUserMedia) {
            navigator.getUserMedia({ video: { facingMode: 'environment' } }, 
                stream => {
                    video.srcObject = stream;
                    video.addEventListener('loadeddata', () => resolve(), false);
                },
                error => reject(error));
        } else {
            reject("เบราว์เซอร์ของคุณไม่รองรับการเปิดกล้อง");
        }
    });
}

// ฟังก์ชันคาดเดาภาพจากกล้องแบบ Real-time
async function predictFood() {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
        const predictions = await model.classify(video);
        const topResult = predictions[0].className.toLowerCase();
        
        let foundFood = null;
        for (let key in calorieDatabase) {
            if (topResult.includes(key)) {
                foundFood = calorieDatabase[key];
                break;
            }
        }

        if (foundFood) {
            resultBox.innerHTML = `
                <p>ตรวจพบ: <strong>${foundFood.name}</strong></p>
                <p class="calorie-text">ประมาณ: ${foundFood.cal} kcal (ต่อหน่วย)</p>
                <p style="font-size: 0.8rem; color: gray;">(ความแม่นยำ: ${Math.round(predictions[0].probability * 100)}%)</p>
            `;
        } else {
            resultBox.innerHTML = `
                <p>สิ่งที่เห็น: <strong>${predictions[0].className}</strong></p>
                <p style="color: gray;">(ยังไม่มีข้อมูลแคลอรีในระบบ)</p>
            `;
        }
    }
    // สั่งให้ทำงานวนซ้ำไปเรื่อยๆ
    requestAnimationFrame(predictFood);
}

// ฟังก์ชันเริ่มต้นแอป
async function startApp() {
    try {
        await setupWebcam();
        resultBox.innerHTML = "<p>กล้องพร้อมแล้ว... กำลังโหลด AI 🤖</p>";
        
        model = await mobilenet.load();
        resultBox.innerHTML = "<p>✅ พร้อมใช้งาน! ส่องไปที่อาหารได้เลย</p>";
        
        predictFood();
    } catch (error) {
        resultBox.innerHTML = `<p style="color: red;">เกิดข้อผิดพลาด: ${error}</p>`;
    }
}

// เรียกใช้เมื่อโหลดหน้าเว็บเสร็จ
startApp();
