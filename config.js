const config = {};

config.DEFAULT_IMAGES_PATH = "./images/";
config.DEFAULT_METADATA_PATH = "./metadata/";
config.DEFAULT_HASHES_PATH = "./hashes/";

// UPDATE THESE CONSTANTS BELOW WITH YOUR VALUES
config.GIF_FRAMES = 0;
config.IMAGES_BASE_URI = "https://base-uri-to-my-nft-images.com/";
config.IMAGES_HEIGHT = 4000;
config.IMAGES_WIDTH = 4000;
config.TOKEN_NAME_PREFIX = "My NFT #";
config.TOKEN_DESCRIPTION = "My NFT description.";
config.TOTAL_TOKENS = 100;

// UPDATE THIS ARRAY BELOW WITH YOUR TRAITS LIST
config.ORDERED_TRAITS_LIST = [
  {
    type: "Background",
    options: [
      {
        image: "./traits/background/Blue.png",
        value: "Blue",
        weight: 1,
      },
      {
        image: "./traits/background/Dark_Spots.png",
        value: "Dark Spots",
        weight: 1,
      },
      {
        image: "./traits/background/Dark.png",
        value: "Dark",
        weight: 1,
      },
      {
        image: "./traits/background/Light_Spots.png",
        value: "Light Spots",
        weight: 1,
      },
      {
        image: "./traits/background/Light.png",
        value: "Light",
        weight: 1,
      },
      {
        image: "./traits/background/Neutral_Spots.png",
        value: "Neutral Spots",
        weight: 1,
      },
      {
        image: "./traits/background/Neutral.png",
        value: "Neutral",
        weight: 1,
      },
      {
        image: "./traits/background/Purple.png",
        value: "Purple",
        weight: 1,
      },
      {
        image: "./traits/background/Red.png",
        value: "Red",
        weight: 1,
      },
      {
        image: "./traits/background/Turquoise.png",
        value: "Turquoise",
        weight: 1,
      },
    ],
  },
  {
    type: "Skins",
    options: [
      {
        image: "./traits/skins/Base.png",
        value: "Base",
        weight: 1,
      },
      {
        image: "./traits/skins/Blue.png",
        value: "Blue",
        weight: 1,
      },
      {
        image: "./traits/skins/Bubble_Gum.png",
        value: "Bubble Gum",
        weight: 1,
      },
      {
        image: "./traits/skins/Galaxy_Blue.png",
        value: "Galaxy Blue",
        weight: 1,
      },
      {
        image: "./traits/skins/Galaxy_Green.png",
        value: "Galaxy Green",
        weight: 1,
      },
      {
        image: "./traits/skins/Gold.png",
        value: "Gold",
        weight: 1,
      },
      {
        image: "./traits/skins/Jeans.png",
        value: "Jeans",
        weight: 1,
      },
      {
        image: "./traits/skins/Leaves.png",
        value: "Leaves",
        weight: 1,
      },
      {
        image: "./traits/skins/Negative.png",
        value: "Negative",
        weight: 1,
      },
      {
        image: "./traits/skins/Pickle.png",
        value: "Pickle",
        weight: 1,
      },
      {
        image: "./traits/skins/Silver.png",
        value: "Silver",
        weight: 1,
      },
      {
        image: "./traits/skins/White.png",
        value: "White",
        weight: 1,
      },
    ],
  },
  {
    type: "Eyes",
    options: [
      {
        image: "./traits/eyes/Angry.png",
        value: "Angry",
        weight: 1,
      },
      {
        image: "./traits/eyes/Awkward.png",
        value: "Awkward",
        weight: 1,
      },
      {
        image: "./traits/eyes/Cryiing.png",
        value: "Cryiing",
        weight: 1,
      },
      {
        image: "./traits/eyes/Grumpy_EyeBags.png",
        value: "Grumpy_EyeBags",
        weight: 1,
      },
      {
        image: "./traits/eyes/Grumpy.png",
        value: "Grumpy",
        weight: 1,
      },
      {
        image: "./traits/eyes/Happy_Closed.png",
        value: "Happy_Closed",
        weight: 1,
      },
      {
        image: "./traits/eyes/Happy.png",
        value: "Happy",
        weight: 1,
      },
      {
        image: "./traits/eyes/Heart.png",
        value: "Heart",
        weight: 1,
      },
      {
        image: "./traits/eyes/Kawaii.png",
        value: "Kawaii",
        weight: 1,
      },
      {
        image: "./traits/eyes/Shocked.png",
        value: "Shocked",
        weight: 1,
      },
      {
        image: "./traits/eyes/Tired_EyeBags.png",
        value: "Tired_EyeBags",
        weight: 1,
      },
    ],
  },
  {
    type: "Mouth",
    options: [
      {
        image: "./traits/mouth/Awkward.png",
        value: "Awkward",
        weight: 1,
      },
      {
        image: "./traits/mouth/Beard_White.png",
        value: "Beard_White",
        weight: 1,
      },
      {
        image: "./traits/mouth/Bubble_Gum.png",
        value: "Bubble_Gum",
        weight: 1,
      },
      {
        image: "./traits/mouth/Grumpy.png",
        value: "Grumpy",
        weight: 1,
      },
      {
        image: "./traits/mouth/Happy_Open.png",
        value: "Happy_Open",
        weight: 1,
      },
      {
        image: "./traits/mouth/Kissy.png",
        value: "Kissy",
        weight: 1,
      },
      {
        image: "./traits/mouth/Lolipop.png",
        value: "Lolipop",
        weight: 1,
      },
      {
        image: "./traits/mouth/Lolipop_2.png",
        value: "Lolipop_2",
        weight: 1,
      },
      {
        image: "./traits/mouth/Mustache.png",
        value: "Mustache",
        weight: 1,
      },
      {
        image: "./traits/mouth/Mustache_Small.png",
        value: "Mustache_Small",
        weight: 1,
      },
      {
        image: "./traits/mouth/Pencil.png",
        value: "Pencil",
        weight: 1,
      },
      {
        image: "./traits/mouth/Sad.png",
        value: "Sad",
        weight: 1,
      },
      {
        image: "./traits/mouth/Shouting.png",
        value: "Shouting",
        weight: 1,
      },
      {
        image: "./traits/mouth/Smile.png",
        value: "Smile",
        weight: 1,
      },
    ],
  },
  {
    type: "Clothes",
    options: [
      {
        image: "./traits/clothes/Holiday_Shirt_Blue.png",
        value: "Holiday Shirt Blue",
        weight: 1,
      },
      {
        image: "./traits/clothes/Holiday_Shirt_Red.png",
        value: "Holiday Shirt Red",
        weight: 1,
      },
      {
        image: "./traits/clothes/Hoodie_Down_Blue_Deco.png",
        value: "Hoodie Down Blue Deco",
        weight: 1,
      },
      {
        image: "./traits/clothes/Hoodie_Down_Blue.png",
        value: "Hoodie Down Blue",
        weight: 1,
      },
      {
        image: "./traits/clothes/Hoodie_Down_Grey_Deco.png",
        value: "Hoodie Down Grey Deco",
        weight: 1,
      },
      {
        image: "./traits/clothes/Hoodie_Down_Grey.png",
        value: "Hoodie Down Grey",
        weight: 1,
      },
      {
        image: "./traits/clothes/Hoodie_Down_Red_Deco.png",
        value: "Hoodie Down Red Deco",
        weight: 1,
      },
      {
        image: "./traits/clothes/Hoodie_Down_Red.png",
        value: "Hoodie Down Red",
        weight: 1,
      },
      {
        image: "./traits/clothes/Hoodie_Up_Blue_Deco.png",
        value: "Hoodie Up Blue Deco",
        weight: 1,
      },
      {
        image: "./traits/clothes/Hoodie_Up_Blue.png",
        value: "Hoodie Up Blue",
        weight: 1,
      },
      {
        image: "./traits/clothes/Hoodie_Up_Grey_Deco.png",
        value: "Hoodie Up Grey Deco",
        weight: 1,
      },
      {
        image: "./traits/clothes/Hoodie_Up_Grey.png",
        value: "Hoodie Up Grey",
        weight: 1,
      },
      {
        image: "./traits/clothes/Hoodie_Up_Red_Deco.png",
        value: "Hoodie Up Red Deco",
        weight: 1,
      },
      {
        image: "./traits/clothes/Hoodie_Up_Red.png",
        value: "Hoodie Up Red",
        weight: 1,
      },
      {
        image: "./traits/clothes/Knight_Armour.png",
        value: "Knight Armour",
        weight: 1,
      },
      {
        image: "./traits/clothes/Puffer_Vest_Shirt.png",
        value: "Puffer Vest Shirt",
        weight: 1,
      },
      {
        image: "./traits/clothes/Sports_Jersey.png",
        value: "Sports Jersey",
        weight: 1,
      },
      {
        image: "./traits/clothes/Sweather_Blue_Deco.png",
        value: "Sweather Blue Deco",
        weight: 1,
      },
      {
        image: "./traits/clothes/Sweather_Blue_Yellow_Stripe.png",
        value: "Sweather Blue Yellow Stripe",
        weight: 1,
      },
      {
        image: "./traits/clothes/Sweather_Blue.png",
        value: "Sweather Blue",
        weight: 1,
      },
      {
        image: "./traits/clothes/Sweather_Red_Deco.png",
        value: "Sweather Red Deco",
        weight: 1,
      },
      {
        image: "./traits/clothes/Sweather_Red.png",
        value: "Sweather Red",
        weight: 1,
      },
      {
        image: "./traits/clothes/Sweather_White_Deco.png",
        value: "Sweather White Deco",
        weight: 1,
      },
      {
        image: "./traits/clothes/Sweather_White.png",
        value: "Sweather White",
        weight: 1,
      },
      {
        image: "./traits/clothes/TShirt_Blue_Deco.png",
        value: "TShirt Blue Deco",
        weight: 1,
      },
      {
        image: "./traits/clothes/TShirt_Blue.png",
        value: "TShirt Blue",
        weight: 1,
      },
      {
        image: "./traits/clothes/TShirt_Green_Deco.png",
        value: "TShirt Green Deco",
        weight: 1,
      },
      {
        image: "./traits/clothes/TShirt_Green.png",
        value: "TShirt Green",
        weight: 1,
      },
      {
        image: "./traits/clothes/TShirt_Grey_Deco.png",
        value: "TShirt Grey Deco",
        weight: 1,
      },
      {
        image: "./traits/clothes/TShirt_Grey.png",
        value: "TShirt Grey",
        weight: 1,
      },
      {
        image: "./traits/clothes/TShirt_Heather_Blue_Deco.png",
        value: "TShirt Heather Blue Deco",
        weight: 1,
      },
      {
        image: "./traits/clothes/TShirt_Heather_Blue.png",
        value: "TShirt Heather Blue",
        weight: 1,
      },
      {
        image: "./traits/clothes/TShirt_Heather_Red_Deco.png",
        value: "TShirt Heather Red Deco",
        weight: 1,
      },
      {
        image: "./traits/clothes/TShirt_Heather_Red.png",
        value: "TShirt Heather Red",
        weight: 1,
      },
      {
        image: "./traits/clothes/TShirt_Orange_Deco.png",
        value: "TShirt Orange Deco",
        weight: 1,
      },
      {
        image: "./traits/clothes/TShirt_Orange.png",
        value: "TShirt Orange",
        weight: 1,
      },
      {
        image: "./traits/clothes/TShirt_Purple_Deco.png",
        value: "TShirt Purple Deco",
        weight: 1,
      },
      {
        image: "./traits/clothes/TShirt_Purple.png",
        value: "TShirt Purple",
        weight: 1,
      },
      {
        image: "./traits/clothes/TShirt_Red_Deco.png",
        value: "TShirt Red Deco",
        weight: 1,
      },
      {
        image: "./traits/clothes/TShirt_Red.png",
        value: "TShirt Red",
        weight: 1,
      },
      {
        image: "./traits/clothes/TShirt_White_Deco.png",
        value: "TShirt White Deco",
        weight: 1,
      },
      {
        image: "./traits/clothes/TShirt_White.png",
        value: "TShirt White",
        weight: 1,
      },
      {
        image: "./traits/clothes/Tux.png",
        value: "Tux",
        weight: 1,
      },
      {
        image: "./traits/clothes/Vest_Shirt.png",
        value: "Vest Shirt",
        weight: 1,
      },
      {
        image: "./traits/clothes/Zipper_Shirt.png",
        value: "Zipper Shirt",
        weight: 1,
      },
    ],
  },
  {
    type: "Eye Wear",
    options: [
      {
        image: "./traits/eye_wear/Cool_Sunglasses.png",
        value: "Cool Sunglasses",
        weight: 1,
      },
      {
        image: "./traits/eye_wear/Eye_Patch.png",
        value: "Eye Patch",
        weight: 1,
      },
      {
        image: "./traits/eye_wear/Funk_Glasses_Orange.png",
        value: "Funk Glasses Orange",
        weight: 1,
      },
      {
        image: "./traits/eye_wear/Funk_Glasses_White.png",
        value: "Funk Glasses White",
        weight: 1,
      },
      {
        image: "./traits/eye_wear/Monocle.png",
        value: "Monocle",
        weight: 1,
      },
      {
        image: "./traits/eye_wear/Red_Funk_Glasses.png",
        value: "Red Funk Glasses",
        weight: 1,
      },
      {
        image: "./traits/eye_wear/Rounded_Glasses.png",
        value: "Rounded Glasses",
        weight: 1,
      },
      {
        image: "./traits/eye_wear/Square_Glasses.png",
        value: "Square Glasses",
        weight: 1,
      },
      {
        image: "./traits/eye_wear/Sunglasses_Blue.png",
        value: "Sunglasses Blue",
        weight: 1,
      },
      {
        image: "./traits/eye_wear/Sunglasses_Orange.png",
        value: "Sunglasses Orange",
        weight: 1,
      },
    ],
  },
  {
    type: "Head Wear",
    options: [
      {
        image: "./traits/head_wear/Afro.png",
        value: "Afro",
        weight: 1,
      },
      {
        image: "./traits/head_wear/Astronaut_Cyan.png",
        value: "Astronaut Cyan",
        weight: 1,
      },
      {
        image: "./traits/head_wear/Astronaut_Dark.png",
        value: "Astronaut Dark",
        weight: 1,
      },
      {
        image: "./traits/head_wear/Astronaut_Orange.png",
        value: "Astronaut Orange",
        weight: 1,
      },
      {
        image: "./traits/head_wear/Astronaut_Pink.png",
        value: "Astronaut Pink",
        weight: 1,
      },
      {
        image: "./traits/head_wear/Astronaut_Red.png",
        value: "Astronaut Red",
        weight: 1,
      },
      {
        image: "./traits/head_wear/Astronaut_White.png",
        value: "Astronaut White",
        weight: 1,
      },
      {
        image: "./traits/head_wear/Baseball_Cap_Back.png",
        value: "Baseball Cap Back",
        weight: 1,
      },
      {
        image: "./traits/head_wear/Beanie_Blue.png",
        value: "Beanie Blue",
        weight: 1,
      },
      {
        image: "./traits/head_wear/Beanie_Purple.png",
        value: "Beanie Purple",
        weight: 1,
      },
      {
        image: "./traits/head_wear/Construction_Helmet.png",
        value: "Construction Helmet",
        weight: 1,
      },
      {
        image: "./traits/head_wear/Crown_Dark.png",
        value: "Crown Dark",
        weight: 1,
      },
      {
        image: "./traits/head_wear/Crown_Fire.png",
        value: "Crown Fire",
        weight: 1,
      },
      {
        image: "./traits/head_wear/Crown.png",
        value: "Crown",
        weight: 1,
      },
      {
        image: "./traits/head_wear/Curly_Brown.png",
        value: "Curly Brown",
        weight: 1,
      },
    ],
  },
  {
    type: "Accessories",
    options: [
      {
        image: "./traits/accessories/Bow_Tie.png",
        value: "Bow Tie",
        weight: 1,
      },
      {
        image: "./traits/accessories/Head_Phones.png",
        value: "Head Phones",
        weight: 1,
      },
      {
        image: "./traits/accessories/Scarf_Blue.png",
        value: "Scarf Blue",
        weight: 1,
      },
      {
        image: "./traits/accessories/Scarf_Red.png",
        value: "Scarf Red",
        weight: 1,
      },
      {
        image: "./traits/accessories/Tie_Blue.png",
        value: "Tie Blue",
        weight: 1,
      },
      {
        image: "./traits/accessories/Tie_Red.png",
        value: "Tie Red",
        weight: 1,
      },
    ],
  },
  {
    type: "Items",
    options: [
      {
        image: "./traits/items/Banana_Gun.png",
        value: "Banana Gun",
        weight: 1,
      },
      {
        image: "./traits/items/Banana.png",
        value: "Banana",
        weight: 1,
      },
      {
        image: "./traits/items/Basket_Ball.png",
        value: "Basket Ball",
        weight: 1,
      },
      {
        image: "./traits/items/Boba.png",
        value: "Boba",
        weight: 1,
      },
      {
        image: "./traits/items/Coffee_No_Lid.png",
        value: "Coffee No Lid",
        weight: 1,
      },
      {
        image: "./traits/items/Coffee.png",
        value: "Coffee",
        weight: 1,
      },
      {
        image: "./traits/items/Foot_Ball.png",
        value: "Foot Ball",
        weight: 1,
      },
      {
        image: "./traits/items/Fries.png",
        value: "Fries",
        weight: 1,
      },
      {
        image: "./traits/items/Gameboy.png",
        value: "Gameboy",
        weight: 1,
      },
      {
        image: "./traits/items/Ice_Cream.png",
        value: "Ice Cream",
        weight: 1,
      },
      {
        image: "./traits/items/Popsicle.png",
        value: "Popsicle",
        weight: 1,
      },
      {
        image: "./traits/items/Potato.png",
        value: "Potato",
        weight: 1,
      },
      {
        image: "./traits/items/Ramen.png",
        value: "Ramen",
        weight: 1,
      },
      {
        image: "./traits/items/Smore.png",
        value: "Smore",
        weight: 1,
      },
      {
        image: "./traits/items/Soda.png",
        value: "Soda",
        weight: 1,
      },
      {
        image: "./traits/items/Switch.png",
        value: "Switch",
        weight: 1,
      },
    ],
  },
];

module.exports = config;
