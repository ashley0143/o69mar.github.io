const URL_ARRAY = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F51%2F0e%2Faa%2F510eaaf1521c533fd9706db5325e1089.jpg&f=1&nofb=1&ipt=7aad9692243c9dfa8923f2b45e29f5efdc4314cf653811f14f37f8d7a2a93d16&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fad%2F88%2F66%2Fad8866ee4235294c9117ceab37d3fcf9.jpg&f=1&nofb=1&ipt=72fe0b84a2fd445eaef2d191dfb5ca747ee095106fc21cba60c1633a1bc55913&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F57%2F8b%2F22%2F578b22556d1f1d2e84918df9b1760e03.jpg&f=1&nofb=1&ipt=0a5b3433a010de3fb942f179ad8847675328488d1058de2cd79ff02149402184&ipo=images",
];

const imageComponent = document.getElementById("daimg");

const indexToUse =
    Math.floor(
      Math.random() * (Math.floor(URL_ARRAY.length - 1) - Math.ceil(0) + 1)
) + Math.ceil(0);

imageComponent.src = URL_ARRAY[indexToUse];
