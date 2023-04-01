const URL_ARRAY = [
    "https://amogus.org/amogus.png",
    "https://dl.insrt.uk/projects/revolt/emotes/trol.png",
    "https://autumn.revolt.chat/avatars/7l93silFHScuNvDSAypMIfTy-KbfAZGr-EYwjQaaaY?max_side=256",
];

const imageComponent = document.getElementById("daimg");

const indexToUse =
    Math.floor(
      Math.random() * (Math.floor(URL_ARRAY.length - 1) - Math.ceil(0) + 1)
) + Math.ceil(0);

imageComponent.src = URL_ARRAY[indexToUse];
